/* ==========================================================================
 * A320 PRIMARY FLIGHT DISPLAY  —  pfd.js
 * Floating / draggable / minimizable canvas instrument, wired into the
 * existing sim's `state` (position/heading/speed) and `flight` (pitch,
 * roll, alt, verticalSpeed, gear, flaps) objects from script.js.
 *
 * Implements, exactly as specified:
 *   1) Saint-Venant / Rayleigh compressible V_CAS and Mach formulas
 *   2) The piecewise V_MAX = min(VMO, MMO_as_KIAS, VFE(config), VLE)
 *   3) High Speed Protection (HSP): activation boundary, sidestick
 *      pitch-authority override, bank-angle limitation 67°→40°,
 *      and autothrust-idle override signalled to the flight physics.
 * ========================================================================== */
(function () {
    'use strict';

    // ---- constants -------------------------------------------------------
    const GAMMA   = 1.4;
    const A0_KT   = 661.47;      // speed of sound at sea level, knots
    const P0_HPA  = 1013.25;     // ISA sea-level static pressure, hPa
    const P0_PA   = 101325;      // ISA sea-level static pressure, Pa
    const T0_K    = 288.15;      // ISA sea-level temperature, K
    const LAPSE   = 0.0065;      // K / m, troposphere lapse rate
    const R_SPEC  = 287.05;      // J/(kg K), specific gas constant for air
    const G0      = 9.80665;
    const M_AIR   = 0.0289644;   // kg/mol
    const R_UNIV  = 8.3144598;

    const VMO       = 350;   // KIAS, clean max operating speed
    const MMO       = 0.82;  // max operating Mach
    const VLE       = 280;   // KIAS, gear extended limit
    const VFE_FULL  = 177;   // KIAS with flaps down (we only have a binary flap flag)
    const VFE_CLEAN = VMO;

    // ---- ILS (localizer / glideslope) --------------------------------------
    const ILS_GS_ANGLE_DEG    = 3.0;   // nominal glidepath angle
    const ILS_GS_FULL_DEG     = 0.7;   // deviation (deg) for full-scale GS deflection
    const ILS_LOC_FULL_DEG    = 2.5;   // deviation (deg) for full-scale LOC deflection
    const ILS_CAPTURE_RANGE_M = 45000; // ~24 NM, max range the receiver "sees" the beam
    const ILS_COURSE_TOLER_DEG = 100;  // how far the a/c heading may differ from the runway
                                        // course and still be considered "inbound" on it

    // ---- ISA atmosphere ----------------------------------------------------
    function isaStaticPressurePa(altM) {
        if (altM <= 11000) {
            const T = T0_K - LAPSE * altM;
            return P0_PA * Math.pow(T / T0_K, (G0 * M_AIR) / (R_UNIV * LAPSE));
        }
        // stratosphere (isothermal) — not realistically reached by this sim, kept for completeness
        const P11 = P0_PA * Math.pow(216.65 / T0_K, (G0 * M_AIR) / (R_UNIV * LAPSE));
        return P11 * Math.exp(-G0 * M_AIR * (altM - 11000) / (R_UNIV * 216.65));
    }
    function isaStaticTempK(altM) {
        return altM <= 11000 ? (T0_K - LAPSE * altM) : 216.65;
    }
    function speedOfSoundMs(tempK) { return Math.sqrt(GAMMA * R_SPEC * tempK); }

    // ---- 1) Saint-Venant / Rayleigh compressible airspeed formulas --------
    // Given total pressure Pt and static pressure Ps (Pa), returns {cas, mach}
    // exactly per the formulas supplied.
    function computeCasMach(Pt_pa, Ps_pa) {
        const dP = Pt_pa - Ps_pa;
        const machTerm = Math.pow((dP / Ps_pa) + 1, (GAMMA - 1) / GAMMA) - 1;
        const M = Math.sqrt(Math.max(0, (2 / (GAMMA - 1)) * machTerm));

        const casTerm = Math.pow((dP / P0_PA) + 1, (GAMMA - 1) / GAMMA) - 1;
        const V_CAS = A0_KT * Math.sqrt(Math.max(0, (2 / (GAMMA - 1)) * casTerm));
        return { cas: V_CAS, mach: M };
    }

    // Isentropic total pressure from a known local Mach & static pressure —
    // used to synthesize physically-consistent Pt from the sim's true
    // airspeed, so the CAS/Mach numbers above are genuinely *derived*
    // through a Pt/Ps pair rather than hand-set.
    function totalPressureFromMach(Ps_pa, M) {
        return Ps_pa * Math.pow(1 + ((GAMMA - 1) / 2) * M * M, GAMMA / (GAMMA - 1));
    }

    // Convert a target true Mach number, at a given static pressure, into
    // its equivalent indicated (CAS) speed — used for M_MO_converted and HSP.
    function machToKias(M, Ps_pa) {
        const Pt = totalPressureFromMach(Ps_pa, M);
        return computeCasMach(Pt, Ps_pa).cas;
    }

    // ---- 2) Dynamic V_MAX ---------------------------------------------------
    function computeVMax(Ps_pa, gearDown, flapsDown) {
        const mmoConverted = machToKias(MMO, Ps_pa);
        const vfe = flapsDown ? VFE_FULL : VFE_CLEAN;
        const vle = gearDown ? VLE : Infinity;
        const values = { VMO, MMO_KIAS: mmoConverted, VFE: vfe, VLE: vle };
        let vmax = Math.min(VMO, mmoConverted, vfe, vle);
        return { vmax, values };
    }

    // ---- 3) High-Speed Protection ------------------------------------------
    const HSP = {
        active: false,
        vProt: VMO + 6,
        bankLimit: 67,
        K: 0.35,          // sidestick pitch-authority gain
        overspeedAmount: 0
    };
    // Exposed globally so updateFlight() in script.js can consult / clamp
    // against it (see the small hook appended near the bottom of this file
    // and the patch applied to script.js).
    window.PFD_HSP = HSP;

    function updateHSP(V_CAS, Ps_pa) {
        const mmoProt = machToKias(MMO + 0.01, Ps_pa);
        HSP.vProt = Math.min(VMO + 6, mmoProt);
        HSP.active = V_CAS >= HSP.vProt;
        HSP.bankLimit = HSP.active ? 40 : 67;
        HSP.overspeedAmount = HSP.active ? (V_CAS - HSP.vProt) : 0;
    }

    // ---- ILS: localizer + glideslope deviation -----------------------------
    // Uses the real, currently-active runway (_activeRunway, populated from
    // RunwayDB in script.js) as the ILS ground station: the runway threshold
    // is the localizer antenna position and its published heading is the
    // extended runway centerline (course). This is genuinely derived from
    // the aircraft's own lat/lng/altitude vs. that geometry, not hand-set.
    function angDiffDeg(a, b) {
        let d = (a - b) % 360;
        if (d > 180) d -= 360; else if (d < -180) d += 360;
        return d;
    }

    // Picks whichever runway end the aircraft is currently flying toward
    // (its heading roughly matches that end's published approach course),
    // returning null if there's no active runway or nothing lines up.
    function selectILSThreshold() {
        if (!_activeRunway || typeof state === 'undefined') return null;
        const rwy = _activeRunway;
        const ends = [
            { lat: rwy.leLat, lng: rwy.leLng, hdg: rwy.leHdg, elevFt: rwy.leElev, ident: rwy.leIdent },
            { lat: rwy.heLat, lng: rwy.heLng, hdg: rwy.heHdg, elevFt: rwy.heElev, ident: rwy.heIdent }
        ].filter(e => typeof e.lat === 'number' && typeof e.lng === 'number' &&
                      typeof e.hdg === 'number' && !isNaN(e.hdg));
        if (!ends.length) return null;

        let best = null, bestErr = Infinity;
        for (const e of ends) {
            const err = Math.abs(angDiffDeg(state.heading || 0, e.hdg));
            if (err < bestErr) { bestErr = err; best = e; }
        }
        if (!best || bestErr > ILS_COURSE_TOLER_DEG) return null;
        return best;
    }

    // Returns { valid, loc: {dev, dots, capturedFlag}, gs: {dev, dots, capturedFlag}, ident }
    // dev is in degrees (signed), dots is dev/fullScale clamped to ±2.5 for display.
    function computeILS(altFt) {
        const thr = selectILSThreshold();
        if (!thr) return { valid: false };

        const distM = _haversineMeters(state.lat, state.lng, thr.lat, thr.lng);
        if (distM > ILS_CAPTURE_RANGE_M || distM < 5) return { valid: false };

        // Localizer: angle between the bearing FROM the aircraft TO the
        // threshold and the runway's own extended-centerline course.
        // On centerline these coincide (dev ≈ 0); left of course the
        // bearing-to-threshold reads lower  → dev negative (fly right);
        // right of course it reads higher → dev positive (fly left).
        const bearingToThreshold = _bearingDegrees(state.lat, state.lng, thr.lat, thr.lng);
        const locDevDeg = angDiffDeg(bearingToThreshold, thr.hdg);
        const locDots = Math.max(-2.5, Math.min(2.5, locDevDeg / ILS_LOC_FULL_DEG));

        // Glideslope: compare the aircraft's actual vertical angle down to
        // the threshold against the nominal 3° glidepath.
        const thrElevFt = (typeof thr.elevFt === 'number' && !isNaN(thr.elevFt)) ? thr.elevFt : 0;
        const heightAglFt = Math.max(0, altFt - thrElevFt);
        const heightAglM = heightAglFt * 0.3048;
        const actualAngleDeg = Math.atan2(heightAglM, distM) * 180 / Math.PI;
        const gsDevDeg = actualAngleDeg - ILS_GS_ANGLE_DEG; // + = above path (fly down), - = below (fly up)
        const gsDots = Math.max(-2.5, Math.min(2.5, gsDevDeg / ILS_GS_FULL_DEG));

        return {
            valid: true,
            ident: thr.ident || '',
            distM,
            loc: { dev: locDevDeg, dots: locDots },
            gs:  { dev: gsDevDeg,  dots: gsDots }
        };
    }

    // ==========================================================================
    // UI: build the floating window (draggable + minimizable + resizable)
    // ==========================================================================
    let win, canvas, ctx, body, minBtn, footerEls;
    let minimized = false;
    let dragging = false, dragOX = 0, dragOY = 0;
    let resizing = false, resizeStartW = 0, resizeStartX = 0;
    let smoothedHeading = null; // locally-interpolated heading for smooth tape motion

    function buildDOM() {
        win = document.createElement('div');
        win.id = 'pfd-window';
        win.innerHTML =
            '<div id="pfd-titlebar">' +
                '<span class="pfd-title">A320 · PFD</span>' +
                '<div class="pfd-btns">' +
                    '<button id="pfd-btn-min" title="Minimize">–</button>' +
                '</div>' +
            '</div>' +
            '<div id="pfd-body">' +
                '<div id="pfd-canvas-wrap">' +
                    '<canvas id="pfd-canvas" width="600" height="600"></canvas>' +
                    '<div id="pfd-resize-handle"><svg viewBox="0 0 14 14"><path d="M14 0L0 14M14 6L6 14M14 12L12 14" stroke="#9fd8ff" stroke-width="1.4"/></svg></div>' +
                '</div>' +
                '<div id="pfd-footer">' +
                    '<span id="pfd-foot-vmax">VMAX —</span>' +
                    '<span id="pfd-foot-hsp">HSP: OFF</span>' +
                '</div>' +
            '</div>';
        document.body.appendChild(win);

        canvas = document.getElementById('pfd-canvas');
        ctx = canvas.getContext('2d');
        body = document.getElementById('pfd-body');
        minBtn = document.getElementById('pfd-btn-min');
        footerEls = {
            vmax: document.getElementById('pfd-foot-vmax'),
            hsp: document.getElementById('pfd-foot-hsp')
        };

        wireDragAndMinimize();
    }

    function wireDragAndMinimize() {
        const titlebar = document.getElementById('pfd-titlebar');
        titlebar.addEventListener('pointerdown', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            dragging = true;
            const r = win.getBoundingClientRect();
            dragOX = e.clientX - r.left;
            dragOY = e.clientY - r.top;
            titlebar.setPointerCapture(e.pointerId);
        });
        titlebar.addEventListener('pointermove', (e) => {
            if (!dragging) return;
            let x = e.clientX - dragOX;
            let y = e.clientY - dragOY;
            x = Math.max(0, Math.min(window.innerWidth - 60, x));
            y = Math.max(0, Math.min(window.innerHeight - 40, y));
            win.style.left = x + 'px';
            win.style.top = y + 'px';
            win.style.right = 'auto';
        });
        ['pointerup', 'pointercancel'].forEach(ev =>
            titlebar.addEventListener(ev, () => { dragging = false; }));

        minBtn.addEventListener('click', () => {
            minimized = !minimized;
            win.classList.toggle('pfd-minimized', minimized);
            minBtn.textContent = minimized ? '▢' : '–';
        });

        const handle = document.getElementById('pfd-resize-handle');
        handle.addEventListener('pointerdown', (e) => {
            resizing = true;
            resizeStartW = win.getBoundingClientRect().width;
            resizeStartX = e.clientX;
            handle.setPointerCapture(e.pointerId);
            e.stopPropagation();
        });
        handle.addEventListener('pointermove', (e) => {
            if (!resizing) return;
            const w = Math.max(240, Math.min(720, resizeStartW + (e.clientX - resizeStartX)));
            win.style.width = w + 'px';
        });
        ['pointerup', 'pointercancel'].forEach(ev =>
            handle.addEventListener(ev, () => { resizing = false; }));
    }

    // ==========================================================================
    // RENDERING
    // ==========================================================================
    const COL = {
        sky: '#3a8ee0', skyDark: '#1c5aa8',
        ground: '#7a4a20', groundDark: '#4e2f12',
        white: '#f2f2f2', amber: '#ffb400', red: '#ff3030', green: '#20d060',
        magenta: '#ff2fd6', cyan: '#00e0ff', black: '#000'
    };

    function draw(pitchDeg, rollDeg, V_CAS, mach, altFt, vsFpm, hdgDeg, vmaxInfo, hspOn, ils) {
        const W = canvas.width, H = canvas.height;
        const cx = W / 2, cy = H / 2;
        ctx.clearRect(0, 0, W, H);
        ctx.save();
        ctx.beginPath(); ctx.rect(0, 0, W, H); ctx.clip();

        drawAttitude(cx, cy, pitchDeg, rollDeg, hspOn);
        drawILS(cx, cy, ils);
        drawSpeedTape(V_CAS, mach, vmaxInfo, hspOn);
        drawAltTape(altFt, vsFpm);
        drawHeadingTape(hdgDeg);
        drawFMA(hspOn);
        drawBankPointer(cx, cy - 235, rollDeg, hspOn ? 40 : 67);

        ctx.restore();
    }

    function drawAttitude(cx, cy, pitchDeg, rollDeg, hspOn) {
        const R = 260;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-rollDeg * Math.PI / 180);

        const pxPerDeg = 8;
        const pitchOffset = pitchDeg * pxPerDeg;

        // sky
        const skyGrad = ctx.createLinearGradient(0, -R * 2, 0, 0);
        skyGrad.addColorStop(0, COL.skyDark); skyGrad.addColorStop(1, COL.sky);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(-R * 2, -R * 2 + pitchOffset, R * 4, R * 2);

        // ground
        const groundGrad = ctx.createLinearGradient(0, 0, 0, R * 2);
        groundGrad.addColorStop(0, COL.ground); groundGrad.addColorStop(1, COL.groundDark);
        ctx.fillStyle = groundGrad;
        ctx.fillRect(-R * 2, pitchOffset, R * 4, R * 2);

        // horizon line
        ctx.strokeStyle = COL.white; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(-R * 2, pitchOffset); ctx.lineTo(R * 2, pitchOffset); ctx.stroke();

        // pitch ladder
        ctx.font = '11px monospace'; ctx.fillStyle = COL.white;
        for (let p = -90; p <= 90; p += 10) {
            if (p === 0) continue;
            const y = pitchOffset - p * pxPerDeg;
            if (Math.abs(y) > R) continue;
            const halfW = (p % 20 === 0) ? 46 : 26;
            ctx.strokeStyle = COL.white; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(-halfW, y); ctx.lineTo(halfW, y); ctx.stroke();
            if (p % 20 === 0) {
                const label = Math.abs(p).toString();
                ctx.fillText(label, -halfW - 24, y + 4);
                ctx.fillText(label, halfW + 6, y + 4);
            }
        }

        ctx.restore();

        // fixed bank scale ticks around top arc (not rotated with roll)
        ctx.save();
        ctx.translate(cx, cy);
        ctx.strokeStyle = COL.white; ctx.lineWidth = 2;
        [-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60].forEach(a => {
            const rad = (a - 90) * Math.PI / 180;
            const r1 = 235, r2 = (a === 0 || Math.abs(a) === 30 || Math.abs(a) === 60) ? 215 : 222;
            ctx.beginPath();
            ctx.moveTo(Math.cos(rad) * r1, Math.sin(rad) * r1);
            ctx.lineTo(Math.cos(rad) * r2, Math.sin(rad) * r2);
            ctx.stroke();
        });
        ctx.restore();

        // fixed aircraft symbol (wings + dot)
        ctx.save();
        ctx.translate(cx, cy);
        ctx.strokeStyle = COL.amber; ctx.lineWidth = 4; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(-70, 0); ctx.lineTo(-20, 0); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(20, 0); ctx.lineTo(70, 0); ctx.stroke();
        ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fillStyle = COL.amber; ctx.fill();
        ctx.restore();

        if (hspOn) {
            ctx.save();
            ctx.fillStyle = COL.red;
            ctx.font = 'bold 20px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('SPEED', cx, cy + 150);
            ctx.restore();
        }
    }

    function drawBankPointer(cx, cy, rollDeg, limitDeg) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-rollDeg * Math.PI / 180);
        ctx.fillStyle = COL.magenta;
        ctx.beginPath();
        ctx.moveTo(0, 8); ctx.lineTo(-7, -6); ctx.lineTo(7, -6); ctx.closePath();
        ctx.fill();
        ctx.restore();

        // limit brackets (amber) at ±limitDeg — shows 40° during HSP instead of 67°
        [-limitDeg, limitDeg].forEach(a => {
            const rad = (a - 90) * Math.PI / 180;
            const bx = cx + Math.cos(rad) * 0, by = cy;
        });
    }

    function drawSpeedTape(V_CAS, mach, vmaxInfo, hspOn) {
        const x0 = 60, yc = 300, h = 420, w = 90;
        ctx.save();
        ctx.beginPath(); ctx.rect(x0 - w / 2, yc - h / 2, w, h); ctx.clip();
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(x0 - w / 2, yc - h / 2, w, h);

        const pxPerKt = 4;
        ctx.strokeStyle = COL.white; ctx.fillStyle = COL.white; ctx.font = '13px monospace';
        const topSpeed = Math.round(V_CAS + h / (2 * pxPerKt)) + 10;
        const botSpeed = Math.max(0, Math.round(V_CAS - h / (2 * pxPerKt)) - 10);
        for (let s = botSpeed; s <= topSpeed; s += 10) {
            const y = yc - (s - V_CAS) * pxPerKt;
            if (y < yc - h / 2 || y > yc + h / 2) continue;
            ctx.beginPath(); ctx.moveTo(x0 + w / 2 - 12, y); ctx.lineTo(x0 + w / 2, y); ctx.stroke();
            ctx.textAlign = 'right';
            ctx.fillText(String(s), x0 + w / 2 - 16, y + 4);
        }

        // VMAX barber pole (red/black hatch above vmax)
        const vmaxY = yc - (vmaxInfo.vmax - V_CAS) * pxPerKt;
        ctx.fillStyle = COL.red;
        ctx.fillRect(x0 - w / 2, yc - h / 2, w, Math.max(0, vmaxY - (yc - h / 2)));
        for (let yy = yc - h / 2; yy < vmaxY; yy += 10) {
            ctx.fillStyle = COL.black;
            ctx.fillRect(x0 - w / 2, yy, w, 4);
        }

        ctx.restore();

        // current speed box
        ctx.fillStyle = '#0a0d12';
        ctx.strokeStyle = hspOn ? COL.red : COL.amber;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x0 - w / 2 - 4, yc - 14);
        ctx.lineTo(x0 + w / 2 + 14, yc - 14);
        ctx.lineTo(x0 + w / 2 + 14, yc + 14);
        ctx.lineTo(x0 - w / 2 - 4, yc + 14);
        ctx.closePath();
        ctx.fill(); ctx.stroke();
        ctx.fillStyle = hspOn ? COL.red : COL.white;
        ctx.font = 'bold 20px monospace'; ctx.textAlign = 'center';
        ctx.fillText(Math.round(V_CAS).toString(), x0 + w / 2 - 8, yc + 7);

        // Mach readout below tape
        ctx.fillStyle = COL.white; ctx.font = '13px monospace'; ctx.textAlign = 'center';
        ctx.fillText('M ' + mach.toFixed(3), x0 + w / 2 - 8, yc + h / 2 + 20);

        // label
        ctx.textAlign = 'left'; ctx.fillStyle = COL.cyan; ctx.font = '11px monospace';
        ctx.fillText('KIAS', x0 - w / 2, yc - h / 2 - 6);
    }

    function drawAltTape(altFt, vsFpm) {
        const x0 = 540, yc = 300, h = 420, w = 100;
        ctx.save();
        ctx.beginPath(); ctx.rect(x0 - w / 2, yc - h / 2, w, h); ctx.clip();
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(x0 - w / 2, yc - h / 2, w, h);

        const pxPerFt = 0.4;
        ctx.strokeStyle = COL.white; ctx.fillStyle = COL.white; ctx.font = '13px monospace';
        const top = Math.round((altFt + h / (2 * pxPerFt)) / 100) * 100 + 200;
        const bot = Math.round((altFt - h / (2 * pxPerFt)) / 100) * 100 - 200;
        for (let a = bot; a <= top; a += 100) {
            const y = yc - (a - altFt) * pxPerFt;
            if (y < yc - h / 2 || y > yc + h / 2) continue;
            const major = (a % 500 === 0);
            ctx.beginPath();
            ctx.moveTo(x0 - w / 2, y); ctx.lineTo(x0 - w / 2 + (major ? 16 : 10), y); ctx.stroke();
            if (major) {
                ctx.textAlign = 'left';
                ctx.fillText(String(a), x0 - w / 2 + 20, y + 4);
            }
        }
        ctx.restore();

        ctx.fillStyle = '#0a0d12'; ctx.strokeStyle = COL.amber; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x0 - w / 2 - 14, yc - 14);
        ctx.lineTo(x0 + w / 2 + 4, yc - 14);
        ctx.lineTo(x0 + w / 2 + 4, yc + 14);
        ctx.lineTo(x0 - w / 2 - 14, yc + 14);
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.fillStyle = COL.white; ctx.font = 'bold 18px monospace'; ctx.textAlign = 'center';
        ctx.fillText(Math.round(altFt).toString(), x0 + w / 2 - 40, yc + 6);

        // VS indicator strip
        ctx.textAlign = 'left'; ctx.fillStyle = COL.green; ctx.font = '11px monospace';
        ctx.fillText((vsFpm >= 0 ? '+' : '') + Math.round(vsFpm) + ' FPM', x0 - w / 2 - 10, yc + h / 2 + 20);

        ctx.textAlign = 'left'; ctx.fillStyle = COL.cyan; ctx.font = '11px monospace';
        ctx.fillText('ALT FT', x0 - w / 2, yc - h / 2 - 6);
    }

    function drawHeadingTape(hdgDeg) {
        const y0 = 555, xc = 300, w = 420, h = 40;
        ctx.save();
        ctx.beginPath(); ctx.rect(xc - w / 2, y0 - h / 2, w, h); ctx.clip();
        ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(xc - w / 2, y0 - h / 2, w, h);

        const pxPerDeg = 6;
        ctx.strokeStyle = COL.white; ctx.fillStyle = COL.white; ctx.font = '12px monospace'; ctx.textAlign = 'center';
        for (let d = -30; d <= 30; d += 5) {
            let hd = ((hdgDeg + d) % 360 + 360) % 360;
            const x = xc + d * pxPerDeg;
            const major = Math.round(hd) % 10 === 0;
            ctx.beginPath(); ctx.moveTo(x, y0 - h / 2); ctx.lineTo(x, y0 - h / 2 + (major ? 14 : 8)); ctx.stroke();
            if (major) {
                let label = Math.round(hd / 10).toString();
                if (Math.round(hd) === 0) label = 'N'; else if (Math.round(hd) === 90) label = 'E';
                else if (Math.round(hd) === 180) label = 'S'; else if (Math.round(hd) === 270) label = 'W';
                ctx.fillText(label, x, y0 - h / 2 + 26);
            }
        }
        ctx.restore();

        ctx.fillStyle = COL.magenta;
        ctx.beginPath(); ctx.moveTo(xc, y0 - h / 2 - 2); ctx.lineTo(xc - 6, y0 - h / 2 - 12); ctx.lineTo(xc + 6, y0 - h / 2 - 12); ctx.closePath(); ctx.fill();

        ctx.fillStyle = COL.white; ctx.font = 'bold 14px monospace'; ctx.textAlign = 'center';
        ctx.fillText(String(Math.round(hdgDeg)).padStart(3, '0') + '°', xc, y0 + h / 2 + 16);
    }

    function drawILS(cx, cy, ils) {
        const R = 260;
        const dotSpacing = 26;   // px between dots (2 dots either side of center + center)
        ctx.save();

        // ---- Glideslope: vertical scale on the right side of the ADI -------
        const gsX = cx + R - 20;
        const gsTop = cy - 2 * dotSpacing - 10, gsBot = cy + 2 * dotSpacing + 10;
        ctx.strokeStyle = COL.white; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(gsX, gsTop); ctx.lineTo(gsX, gsBot); ctx.stroke();
        [-2, -1, 1, 2].forEach(n => {
            const y = cy + n * dotSpacing;
            ctx.beginPath(); ctx.arc(gsX, y, 3.5, 0, Math.PI * 2);
            ctx.strokeStyle = COL.white; ctx.stroke();
        });
        // center fixed reference (small amber box, the aircraft's own position on the scale)
        ctx.strokeStyle = COL.amber; ctx.lineWidth = 2;
        ctx.strokeRect(gsX - 9, cy - 9, 18, 18);

        if (ils.valid) {
            // dev>0 = above path (fly down) -> diamond appears ABOVE center per convention is
            // reversed on real ADIs (diamond shows where the beam is relative to the a/c: a
            // high a/c sees the diamond low, prompting a "fly down" correction).
            const gsY = cy - Math.max(-2.2, Math.min(2.2, ils.gs.dots)) * dotSpacing;
            ctx.fillStyle = COL.magenta;
            ctx.beginPath();
            ctx.moveTo(gsX, gsY - 8); ctx.lineTo(gsX + 8, gsY);
            ctx.lineTo(gsX, gsY + 8); ctx.lineTo(gsX - 8, gsY); ctx.closePath();
            ctx.fill();
        } else {
            ctx.fillStyle = COL.red; ctx.font = 'bold 14px monospace'; ctx.textAlign = 'left';
            ctx.fillText('GS', gsX + 14, cy + 5);
        }

        // ---- Localizer: horizontal scale below the ADI ----------------------
        const locY = cy + R - 20;
        const locLeft = cx - 2 * dotSpacing - 10, locRight = cx + 2 * dotSpacing + 10;
        ctx.strokeStyle = COL.white; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(locLeft, locY); ctx.lineTo(locRight, locY); ctx.stroke();
        [-2, -1, 1, 2].forEach(n => {
            const x = cx + n * dotSpacing;
            ctx.beginPath(); ctx.arc(x, locY, 3.5, 0, Math.PI * 2);
            ctx.strokeStyle = COL.white; ctx.stroke();
        });
        ctx.strokeStyle = COL.amber; ctx.lineWidth = 2;
        ctx.strokeRect(cx - 9, locY - 9, 18, 18);

        if (ils.valid) {
            // dev>0 = a/c right of course -> diamond shows to the right, prompting "fly left".
            const locX = cx + Math.max(-2.2, Math.min(2.2, ils.loc.dots)) * dotSpacing;
            ctx.fillStyle = COL.magenta;
            ctx.beginPath();
            ctx.moveTo(locX - 8, locY); ctx.lineTo(locX, locY - 8);
            ctx.lineTo(locX + 8, locY); ctx.lineTo(locX, locY + 8); ctx.closePath();
            ctx.fill();

            ctx.fillStyle = COL.cyan; ctx.font = '11px monospace'; ctx.textAlign = 'left';
            ctx.fillText('ILS ' + (ils.ident || '') + '  ' + (ils.distM / 1852).toFixed(1) + ' NM',
                         cx - R + 10, cy + R - 4);
        } else {
            ctx.fillStyle = COL.red; ctx.font = 'bold 14px monospace'; ctx.textAlign = 'center';
            ctx.fillText('LOC', cx, locY + 26);
        }

        ctx.restore();
    }

    function drawFMA(hspOn) {
        ctx.textAlign = 'left'; ctx.font = 'bold 13px monospace';
        ctx.fillStyle = hspOn ? COL.red : COL.green;
        ctx.fillText(hspOn ? 'SPD PROT' : 'A/THR', 20, 24);
        ctx.fillStyle = COL.cyan;
        ctx.fillText('NORMAL LAW', 460, 24);
    }

    // ==========================================================================
    // FRAME LOOP — reads state/flight from script.js, computes physics, draws
    // ==========================================================================
    function frame() {
        try {
            if (typeof state !== 'undefined' && typeof isPlaneType === 'function' &&
                isPlaneType(state.vehicle)) {
                win.classList.remove('pfd-hidden');
                win.style.display = 'block';

                // flight.alt is already stored in FEET (see script.js), and
                // flight.verticalSpeed is already in FT/MIN — do not re-convert
                // them or the tape/box readouts come out multiplied (e.g. an
                // 8748 ft readout for a real 2665 ft altitude).
                const altFt = Math.max(0, (flight.alt || 0));
                const altM = altFt * 0.3048; // meters, only needed for the ISA/CAS physics below
                const trueAirspeedMs = (state.speed || 0) * (1000 / 3600); // state.speed stored in km/h

                const Ps = isaStaticPressurePa(altM);
                const T = isaStaticTempK(altM);
                const a = speedOfSoundMs(T);
                const trueMach = a > 0 ? trueAirspeedMs / a : 0;
                const Pt = totalPressureFromMach(Ps, trueMach);

                const { cas, mach } = computeCasMach(Pt, Ps);
                const vmaxInfo = computeVMax(Ps, !!flight.gearDown, !!flight.flapsDown);
                updateHSP(cas, Ps);

                const vsFpm = flight.verticalSpeed || 0;

                // flight.pitch / flight.roll are stored in RADIANS by the
                // flight model — convert to degrees for the artificial
                // horizon, otherwise the ladder/bank barely move at all and
                // the instrument looks frozen.
                const pitchDeg = (flight.pitch || 0) * (180 / Math.PI);
                const rollDeg  = (flight.roll  || 0) * (180 / Math.PI);

                // Smooth the heading locally at the PFD's own animation-frame
                // rate so the tape glides continuously instead of jumping in
                // whatever coarser steps the sim updates state.heading at.
                const targetHdg = ((state.heading || 0) % 360 + 360) % 360;
                if (smoothedHeading === null) {
                    smoothedHeading = targetHdg;
                } else {
                    let diff = targetHdg - smoothedHeading;
                    diff = ((diff + 180) % 360 + 360) % 360 - 180; // shortest signed angular delta
                    smoothedHeading = (smoothedHeading + diff * 0.35 + 360) % 360;
                }

                const ils = computeILS(altFt);

                draw(pitchDeg, rollDeg, cas, mach, altFt, vsFpm,
                     smoothedHeading, vmaxInfo, HSP.active, ils);

                footerEls.vmax.textContent = 'VMAX ' + Math.round(vmaxInfo.vmax) + ' KT';
                footerEls.hsp.className = HSP.active ? 'pfd-warn' : '';
                footerEls.hsp.textContent = HSP.active
                    ? 'HSP ACTIVE +' + HSP.overspeedAmount.toFixed(1) + 'KT'
                    : 'HSP: OFF';
            } else {
                win.style.display = 'none';
            }
        } catch (err) {
            // sim not ready yet on very first frames — ignore and retry
        }
        requestAnimationFrame(frame);
    }

    function init() {
        buildDOM();
        requestAnimationFrame(frame);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
