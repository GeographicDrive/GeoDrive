// ==========================================
// 1. GENERATE 2D MODELS
// ==========================================
function generateVehicleTexture(type) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (type === 'car') {
        canvas.width = 400; canvas.height = 400;
        const cx = 200, cy = 200;
        
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 2); 

        ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
        ctx.beginPath(); ctx.ellipse(0, 0, 95, 43, 0, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = "#e11d48"; ctx.strokeStyle = "#1e293b"; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-90, -36);
        ctx.quadraticCurveTo(-60, -40, 0, -40); 
        ctx.quadraticCurveTo(60, -38, 85, -30); 
        ctx.quadraticCurveTo(95, 0, 85, 30);     
        ctx.quadraticCurveTo(60, 38, 0, 40);     
        ctx.quadraticCurveTo(-60, 40, -90, 36); 
        ctx.quadraticCurveTo(-95, 0, -90, -36);     
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#1e293b";
        ctx.beginPath(); ctx.ellipse(30, -43, 6, 12, Math.PI/4, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(30, +43, 6, 12, -Math.PI/4, 0, Math.PI*2); ctx.fill();

        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.moveTo(25, -30); ctx.lineTo(45, -26);
        ctx.quadraticCurveTo(55, 0, 45, 26);
        ctx.lineTo(25, 20); ctx.quadraticCurveTo(32, 0, 25, -30);
        ctx.closePath(); ctx.fill();

        ctx.fillStyle = "#b91c1c";
        ctx.fillRect(-35, -28, 65, 56);

        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.moveTo(-45, -26); ctx.lineTo(-65, -24);
        ctx.quadraticCurveTo(-70, 0, -65, 24);
        ctx.lineTo(-45, 24); ctx.quadraticCurveTo(-40, 0, -45, -26);
        ctx.closePath(); ctx.fill();

        ctx.fillRect(-30, -34, 25, 4); ctx.fillRect(2, -34, 20, 4);
        ctx.fillRect(-30, 30, 25, 4); ctx.fillRect(2, 30, 20, 4);

        ctx.fillStyle = "#fffbeb";
        ctx.beginPath(); ctx.ellipse(80, -28, 8, 4, Math.PI/6, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(80, 28, 8, 4, -Math.PI/6, 0, Math.PI*2); ctx.fill();
        
        ctx.restore();
    } 
    else if (type === 'bus') {
        canvas.width = 600; canvas.height = 600;
        const cx = 300, cy = 300;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 2); 

        ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
        ctx.fillRect(-245, -44, 490, 88);

        ctx.fillStyle = "#2563eb"; ctx.strokeStyle = "#0f172a"; ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(-230, -40);
        ctx.lineTo(230, -40);
        ctx.arcTo(240, -40, 240, 0, 12);
        ctx.arcTo(240, 40, 230, 40, 12);
        ctx.lineTo(-230, 40);
        ctx.arcTo(-240, 40, -240, 0, 12);
        ctx.arcTo(-240, -40, -230, -40, 12);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.strokeStyle = "#1d4ed8"; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(-160, -24); ctx.lineTo(180, -24); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(-160, 24); ctx.lineTo(180, 24); ctx.stroke();
        ctx.strokeStyle = "#1d4ed8"; ctx.strokeRect(-15, -15, 45, 30);

        ctx.fillStyle = "#1e293b";
        ctx.beginPath();
        ctx.moveTo(215, -36);
        ctx.quadraticCurveTo(235, 0, 215, 36);
        ctx.lineTo(232, 34);
        ctx.quadraticCurveTo(240, 0, 232, -34);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#0f172a";
        ctx.fillRect(225, -47, 8, 8); ctx.fillRect(225, 39, 8, 8);

        ctx.fillStyle = "#0f172a";
        for (let i = 0; i < 4; i++) {
            ctx.beginPath(); ctx.arc(-100 - (i * 18), 0, 5, 0, Math.PI * 2); ctx.fill();
        }

        ctx.fillStyle = "#1e293b";
        ctx.fillRect(-200, -40, 380, 2);
        ctx.fillRect(-200, 38, 380, 2);
        
        ctx.restore();
    } 
    else if (type === 'plane') {
        canvas.width = 600; canvas.height = 600;
        const cx = 300, cy = 300;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-Math.PI / 2);

        ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
        ctx.beginPath(); ctx.ellipse(0, 0, 250, 80, 0, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = "#cbd5e1"; ctx.strokeStyle = "#1e293b"; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(40, -16);
        ctx.lineTo(-140, -230);
        ctx.lineTo(-180, -230);
        ctx.lineTo(-60, -18);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(40, 16);
        ctx.lineTo(-140, 230);
        ctx.lineTo(-180, 230);
        ctx.lineTo(-60, 18);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-190, -10); ctx.lineTo(-250, -75); ctx.lineTo(-235, -75); ctx.lineTo(-215, -10);
        ctx.closePath(); ctx.fill(); ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-190, 10); ctx.lineTo(-250, 75); ctx.lineTo(-235, 75); ctx.lineTo(-215, 10);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#f8fafc";
        ctx.beginPath();
        ctx.moveTo(260, 0);
        ctx.quadraticCurveTo(220, -20, 140, -22);
        ctx.lineTo(-230, -16);
        ctx.quadraticCurveTo(-260, 0, -230, 16);
        ctx.lineTo(140, 22);
        ctx.quadraticCurveTo(220, 20, 260, 0);
        ctx.closePath(); ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#1e293b";
        ctx.beginPath(); ctx.ellipse(190, 0, 26, 13, 0, 0, Math.PI * 2); ctx.fill();

        ctx.fillStyle = "#dc2626";
        ctx.beginPath();
        ctx.moveTo(-230, -16); ctx.lineTo(-180, -14); ctx.lineTo(-180, 14); ctx.lineTo(-230, 16);
        ctx.closePath(); ctx.fill();

        ctx.fillStyle = "#475569";
        ctx.beginPath(); ctx.ellipse(0, -90, 26, 11, 0, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.ellipse(0, 90, 26, 11, 0, 0, Math.PI*2); ctx.fill();

        ctx.restore();
    }
    return canvas.toDataURL("image/png");
}

const textures = {
    car:   generateVehicleTexture('car'),
    bus:   generateVehicleTexture('bus'),
    plane: generateVehicleTexture('plane')
};

// ==========================================
// 1b. API KEYS / CONFIG
// ==========================================
// No keys are hardcoded here. Cesium Ion / the optional Google key only get
// used if the person pastes them into the textboxes in Settings — that
// save flow is the single source of truth, and it also remembers the value
// in this browser (localStorage) so it doesn't need to be re-typed every
// visit. Nothing here is committed to the repo or shipped by default.
//
// PHOTOREAL_KEY is OPTIONAL. Photorealistic 3D Tiles load for free using
// just CESIUM_ION (Cesium proxies Google's tiles through its own Ion free
// tier — no Google Cloud project/billing needed at all). PHOTOREAL_KEY only
// matters if the person wants their OWN Google Maps quota instead of
// sharing Ion's free one — see tryLoadPhotorealisticTiles().
const CONFIG_KEYS = {
    PHOTOREAL_KEY:   'biv_photoreal_api_key',
    CESIUM_ION:      'biv_cesium_ion_token',
    CESIUM_CAM_MODE: 'biv_cesium_cam_mode'
};
const CONFIG = {
    PHOTOREAL_KEY:   localStorage.getItem(CONFIG_KEYS.PHOTOREAL_KEY)   || '',
    CESIUM_ION:      localStorage.getItem(CONFIG_KEYS.CESIUM_ION)      || '',
    CESIUM_CAM_MODE: localStorage.getItem(CONFIG_KEYS.CESIUM_CAM_MODE) || 'first'
};

// ==========================================
// 2. STATE & SETTINGS
// ==========================================
let state = {
    lat: -33.0425, lng: -71.3733,
    speed: 0, heading: 0,
    vehicle: 'car', speedUnit: 'KPH', headUp: false,
    destLat: null, destLng: null
};

const settings = {
    collision: false, debugCollision: false,
    renderMode: '3D',   // '3D' = Cesium (real globe), 'CSS' = CSS perspective (chase cam), '2D' = flat
    cesiumCameraMode: CONFIG.CESIUM_CAM_MODE, // 'first' or 'third' — only meaningful while renderMode === '3D'
    tilt: 0,
    vehicleScale: 1.0, mapZoom: 18,
    steeringMode: 'arrows', cameraZoom: 1.0,
    steeringSensitivity: 1.0,
    fov: 75,            // degrees — applied to Cesium camera frustum in 3D mode
    thirdPersonZoom: 1.0, // 0.3 (far) – 3.0 (close) — multiplies the 3rd-person chase-cam distance
    cameraFollowDelay: 1.0, // 0.2 (snappy/instant) – 5.0 (floaty/laggy) — scales the chase-cam position spring rate (altitude + left/right sweep only; never rotation or distance)
    osmBuildings: false, // Cesium OSM Buildings toggle (requires Ion token)
    fullscreen: false, // mirrors document.fullscreenElement; see toggleFullscreen()
    cameraLookBlend: 0.0,        // 0 = look at vehicle, 1 = look at horizon (3rd person)
    cameraRotatesWithPlane: true, // 3rd person: camera up-vector follows plane's bank/roll
    // ── Cinematic Shader System ───────────────────────────────────────────
    cinematicShaders: false,      // master toggle for the cinematic rendering pipeline
    shaderQuality:   'medium',    // 'low' | 'medium' | 'high'
    atmosphericHaze:  0.50,       // 0–1 : fog density / aerial perspective strength
    bloomIntensity:   0.30,       // 0–1 : glow on bright highlights
    terrainContrast:  0.50        // 0–1 : terrain atmospheric shading intensity
};

const VEHICLE_DIMS = {
    car:   { length: 4.5,  width: 2.0  },
    bus:   { length: 12.0, width: 2.5  },
    plane: { length: 15.0, width: 12.0 }
};

// ── Smooth third-person camera state ──────────────────────────────────────
// Instead of snapping the camera to the vehicle every frame (which feels
// "glued on"), we lerp a smoothed heading and position toward the vehicle
// with a spring-like ease.  camSmoothPos tracks the camera's actual world
// position; camSmoothHeading tracks the smoothed yaw so turns feel floaty.
// camSmoothHeight is plane-only: it lags just the vehicle's altitude, kept
// separate from camSmoothPos so climbs/dives can have delay WITHOUT the
// forward/back chase distance also lagging (see updateCesiumCamera).
//
// IMPORTANT: this smoothing is positional ONLY (it is what Camera Follow
// Delay controls — see updateCesiumCamera). Camera ROTATION (look direction,
// up vector, roll/bank) is always computed straight from the vehicle's
// real-time heading/pitch/roll, never from a lagged value, so the Camera
// Follow Delay setting can never make the camera's orientation feel laggy —
// only its position.
let camSmoothPos     = null;   // Cesium.Cartesian3 | null (null = not yet init)
let camSmoothHeading = null;   // number (radians) | null — transverse (left/right) lag
let camSmoothHeight  = null;   // number (meters) | null — plane 3rd-person only — longitudinal (altitude) lag
let camSmoothLat     = null;   // number | null — car/bus longitudinal (forward/back) lag
let camSmoothLng     = null;   // number | null — car/bus longitudinal (forward/back) lag

const fetchedChunks = new Set();
let isFetchingRoads = false;

const keys = { w:false, a:false, s:false, d:false };
window.addEventListener('keydown', e => { if(e.target.tagName !== 'INPUT') keys[e.key.toLowerCase()] = true; });
window.addEventListener('keyup',   e => { if(e.target.tagName !== 'INPUT') keys[e.key.toLowerCase()] = false; });

const dom = {
    speedVal:          document.getElementById('speed-val'),
    coordInfo:         document.getElementById('coord-info'),
    altInfo:           document.getElementById('alt-info'),
    gpsDist:           document.getElementById('gps-dist'),
    gpsArrow:          document.getElementById('gps-arrow'),
    mapRotator:        document.getElementById('map-rotator'),
    mapSubpixel:       document.getElementById('map-subpixel'),
    graphic:           document.getElementById('vehicle-graphic'),
    cameraTilt:        document.getElementById('camera-tilt'),
    cameraPerspective: document.getElementById('camera-perspective')
};

// ==========================================
// 3. MAP INIT & GPS SYSTEM
// ==========================================
// trackResize is off on purpose: the #camera-perspective container goes
// display:none while in Cesium 3D mode (see style.css), and Leaflet's
// automatic window-resize handling would otherwise read a 0×0 size from
// the hidden container and corrupt the cached projection. setRenderMode()
// calls map.invalidateSize() by hand whenever the container becomes
// visible again (switching to CSS/2D mode), which is the only time a
// fresh size reading is actually needed.
const map = L.map('map', {
    zoomControl: false, dragging: false, scrollWheelZoom: false, touchZoom: false,
    doubleClickZoom: false, keyboard: false, zoomSnap: 0, zoomAnimation: false,
    trackResize: false
}).setView([state.lat, state.lng], settings.mapZoom);

const satLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 22 }
).addTo(map);

const labelsLayer = L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png',
    { maxZoom: 22 }
);

document.getElementById('map-layer-select').addEventListener('change', e => {
    const showHybrid = e.target.value === 'hybrid';

    // Cesium's own label overlay (used in 3D mode)
    if (cesiumLabelsLayer && cesiumViewer) {
        if (showHybrid) cesiumViewer.imageryLayers.add(cesiumLabelsLayer);
        else cesiumViewer.imageryLayers.remove(cesiumLabelsLayer);
    }

    // Leaflet's own label tiles — only relevant when Leaflet's tiles are
    // actually visible (CSS/2D mode). In Cesium 3D mode they're torn down
    // entirely in setRenderMode(), so don't silently re-fetch them here.
    if (settings.renderMode !== '3D') {
        if (showHybrid) labelsLayer.addTo(map);
        else map.removeLayer(labelsLayer);
    }
});

let routingControl = null;
let baseLat = state.lat, baseLng = state.lng;
let camHeading = 0;

// ==========================================
// 4. OVERPASS COLLISION & DEBUG LAYER (unchanged)
// ==========================================
const ROAD_WIDTHS = {
    'motorway': 20, 'trunk': 18, 'primary': 14, 'secondary': 10,
    'tertiary': 8, 'residential': 6, 'service': 4, 'unclassified': 6, 'default': 6
};

let drivableZonePolygon = null;
let debugCollisionLayer  = null;

const yieldToMain = () => new Promise(resolve => setTimeout(resolve, 0));

async function fetchRoads() {
    if(!settings.collision || isFetchingRoads) return;

    const chunkSize = 0.005;
    const chunkX = Math.round(state.lng / chunkSize);
    const chunkY = Math.round(state.lat / chunkSize);
    const chunkId = `${chunkX},${chunkY}`;
    if(fetchedChunks.has(chunkId)) return;

    isFetchingRoads = true;
    fetchedChunks.add(chunkId);

    const overpassQuery = `
        [out:json];
        way(around:600, ${state.lat}, ${state.lng})["highway"~"motorway|trunk|primary|secondary|tertiary|unclassified|residential|service"];
        out geom;
    `;

    try {
        const res  = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`);
        const data = await res.json();
        let newPolygons = [];

        for (let i = 0; i < data.elements.length; i++) {
            let element = data.elements[i];
            if (element.type === 'way' && element.geometry) {
                let coords = element.geometry.map(g => [g.lon, g.lat]);
                if (coords.length > 1) {
                    try {
                        let line      = turf.lineString(coords);
                        let roadType  = (element.tags && element.tags.highway) || 'default';
                        let widthInMeters = ROAD_WIDTHS[roadType] || ROAD_WIDTHS['default'];
                        let radiusInKm    = (widthInMeters / 2) / 1000;
                        let buffered  = turf.buffer(line, radiusInKm, {units: 'kilometers'});
                        if (buffered) newPolygons.push(buffered);
                    } catch (err) {}
                }
            }
            if (i % 50 === 0) await yieldToMain();
        }

        if (newPolygons.length > 0) {
            let combinedNewChunk = newPolygons[0];
            for (let i = 1; i < newPolygons.length; i++) {
                try {
                    let result = turf.union(combinedNewChunk, newPolygons[i]);
                    if (result) combinedNewChunk = result;
                } catch (err) {}
                if (i % 20 === 0) await yieldToMain();
            }

            if (drivableZonePolygon) {
                try {
                    let result = turf.union(drivableZonePolygon, combinedNewChunk);
                    if (result) drivableZonePolygon = result;
                } catch (err) {}
            } else {
                drivableZonePolygon = combinedNewChunk;
            }
            drawDebugCollisions();
        }
    } catch(e) {
        console.warn("Error fetching roads.", e);
        fetchedChunks.delete(chunkId);
    }

    isFetchingRoads = false;
}

function drawDebugCollisions() {
    if (debugCollisionLayer) map.removeLayer(debugCollisionLayer);
    if (settings.debugCollision && settings.collision && drivableZonePolygon) {
        debugCollisionLayer = L.geoJSON(drivableZonePolygon, {
            style: { color: '#ff0000', weight: 1, fillColor: '#ff0000', fillOpacity: 0.0 }
        }).addTo(map);
    }
}

function checkCollision() {
    if (!settings.collision || state.vehicle === 'plane' || !drivableZonePolygon) return false;
    try {
        const dims     = VEHICLE_DIMS[state.vehicle] || VEHICLE_DIMS['car'];
        const length   = dims.length * settings.vehicleScale;
        const width    = dims.width  * settings.vehicleScale;
        const diagDistKm  = Math.hypot(length / 2, width / 2) / 1000;
        const angleRad    = Math.atan2(width, length);
        const angleDeg    = angleRad * (180 / Math.PI);
        const h = state.heading;
        const cornerAngles = [
            h + angleDeg,
            h - angleDeg,
            h + 180 - angleDeg,
            h + 180 + angleDeg
        ];
        const centerPoint  = turf.point([state.lng, state.lat]);
        const pointsToCheck = [centerPoint];
        cornerAngles.forEach(ang => {
            pointsToCheck.push(turf.destination(centerPoint, diagDistKm, ang));
        });
        for (let pt of pointsToCheck) {
            if (!turf.booleanPointInPolygon(pt, drivableZonePolygon)) return true;
        }
        return false;
    } catch (err) { return false; }
}

// ==========================================
// 5. UI CONTROLS & GPS LOGIC
// ==========================================
function toggleUiTop() {
    const panel = document.getElementById('ui-top');
    const btn   = document.getElementById('btn-minimize');
    panel.classList.toggle('collapsed');
    if (panel.classList.contains('collapsed')) {
        btn.innerText = '➕'; btn.setAttribute('aria-label', 'Expandir panel');
        btn.style.background = 'var(--accent)';
    } else {
        btn.innerText = '➖'; btn.setAttribute('aria-label', 'Minimizar panel');
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
    }
}

function toggleSettings() {
    let m = document.getElementById('settings-modal');
    m.style.display = m.style.display === 'none' ? 'flex' : 'none';
}

function toggleCollision(val) {
    settings.collision = val;
    if(val) fetchRoads();
    else { drivableZonePolygon = null; fetchedChunks.clear(); drawDebugCollisions(); }
}
function toggleDebugCollision(val) { settings.debugCollision = val; drawDebugCollisions(); }

/**
 * toggleFullscreen — checkbox handler for the Settings → Display toggle.
 * Uses the Fullscreen API on document.documentElement (with vendor-prefixed
 * fallbacks for older WebKit). requestFullscreen() can be rejected (e.g. not
 * called from a direct user gesture, or unsupported on some mobile browsers)
 * so we listen for the resolution/rejection and resync the checkbox either
 * way rather than assuming success.
 */
function toggleFullscreen(val) {
    if (val) {
        const el = document.documentElement;
        const request = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
        if (!request) { syncFullscreenCheckbox(); return; }
        try {
            const result = request.call(el);
            if (result && typeof result.catch === 'function') {
                result.catch(syncFullscreenCheckbox);
            }
        } catch (e) {
            syncFullscreenCheckbox();
        }
    } else {
        const exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
        if (exit && (document.fullscreenElement || document.webkitFullscreenElement)) exit.call(document);
    }
}

/**
 * syncFullscreenCheckbox — keeps settings.fullscreen and the checkbox truthful
 * whenever fullscreen state changes through ANY path other than the checkbox
 * itself (Esc key, browser chrome button, OS gesture, a failed/rejected
 * request above, etc.), so the UI never shows a state that isn't real.
 */
function syncFullscreenCheckbox() {
    const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
    settings.fullscreen = isFs;
    const cb = document.getElementById('set-fullscreen');
    if (cb) cb.checked = isFs;
}
document.addEventListener('fullscreenchange', syncFullscreenCheckbox);
document.addEventListener('webkitfullscreenchange', syncFullscreenCheckbox);

/**
 * setRenderMode — switches between:
 *   '3D'  → Cesium real-globe engine, first-person only (no chase cam)
 *   'CSS' → Leaflet with CSS perspective transform (legacy chase-cam mode)
 *   '2D'  → Flat top-down Leaflet view
 *
 * The Leaflet `map` object itself always stays alive in the background
 * (collision detection and GPS distance/bearing math use plain lat/lng
 * math, not Leaflet's pixel projection, so this works fine even while its
 * container is display:none). Its visible tile layers are torn down in 3D
 * mode, and the container itself is fully removed from layout via CSS
 * (body.is-cesium #camera-perspective { display:none }) — there is no 2D
 * canvas left on screen at all while in Cesium mode.
 */
function setRenderMode(mode) {
    // If 3D was requested but Cesium isn't ready/available, fall back to the
    // CSS perspective mode (tilted, satellite imagery) instead of silently
    // dropping into the untilted/no-imagery flat state — that flat state
    // looked broken (the screen the player actually flies over) even though
    // every button still claimed "3D" was active.
    if (mode === '3D' && !cesiumViewer) {
        console.warn('Cesium not ready yet — using CSS 3D mode instead.');
        mode = 'CSS';
    }

    const wasCesium = document.body.classList.contains('is-cesium');
    settings.renderMode = mode;

    document.getElementById('btn-mode-3d').classList.toggle('active',  mode === '3D');
    document.getElementById('btn-mode-css').classList.toggle('active', mode === 'CSS');
    document.getElementById('btn-mode-2d').classList.toggle('active',  mode === '2D');

    const tiltSlider = document.getElementById('set-cam-tilt');
    const viewFirstBtn = document.getElementById('btn-view-first');
    const viewThirdBtn = document.getElementById('btn-view-third');
    const wantHybrid = document.getElementById('map-layer-select').value === 'hybrid';

    if (mode === '3D' && cesiumViewer) {
        // ── Cesium mode (first-person OR third-person chase cam, depending
        // on settings.cesiumCameraMode) ─────────────────────────────────────
        document.body.classList.add('is-cesium');
        document.body.classList.remove('is-3d');
        tiltSlider.disabled = true;   // tilt is controlled by Cesium camera
        // Reset CSS camera-tilt to neutral so it doesn't interfere when toggling back
        dom.cameraTilt.style.transform = 'rotateX(0deg) rotateZ(0deg)';

        // Tear down the 2D tile layers — Cesium owns the visuals now, so
        // there's no point still downloading/painting hidden satellite tiles.
        if (map.hasLayer(satLayer))    map.removeLayer(satLayer);
        if (map.hasLayer(labelsLayer)) map.removeLayer(labelsLayer);

        viewFirstBtn.disabled = false;
        viewThirdBtn.disabled = false;
        document.getElementById('btn-cam-view-quick').style.display = 'inline-flex';
        setCesiumCameraView(settings.cesiumCameraMode); // restore persisted choice + sync label

    } else if (mode === 'CSS') {
        // ── CSS perspective mode ─────────────────────────────────────────
        document.body.classList.remove('is-cesium');
        document.body.classList.add('is-3d');
        tiltSlider.disabled = false;
        dom.cameraTilt.style.transform = `rotateX(${settings.tilt}deg) rotateZ(0deg)`;

        viewFirstBtn.disabled = true;
        viewThirdBtn.disabled = true;
        document.getElementById('btn-cam-view-quick').style.display = 'none';
        hideAllVehicleModels();
        // Cesium mode so a future switch back to '3D' starts from a clean
        // (world-space) camera state instead of an old vehicle-relative one.
        if (cesiumViewer) cesiumViewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

        if (!map.hasLayer(satLayer)) satLayer.addTo(map);
        if (wantHybrid && !map.hasLayer(labelsLayer)) labelsLayer.addTo(map);

        // The container was display:none while in Cesium mode (trackResize
        // is off, see map init), so Leaflet's cached size could be stale —
        // force a fresh read now that it's visible again.
        if (wasCesium) map.invalidateSize(false);

    } else {
        // ── 2D flat mode ─────────────────────────────────────────────────
        document.body.classList.remove('is-cesium');
        document.body.classList.remove('is-3d');
        tiltSlider.disabled = true;
        dom.cameraTilt.style.transform = 'rotateX(0deg) rotateZ(0deg)';

        viewFirstBtn.disabled = true;
        viewThirdBtn.disabled = true;
        document.getElementById('btn-cam-view-quick').style.display = 'none';
        hideAllVehicleModels();
        if (cesiumViewer) cesiumViewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

        if (!map.hasLayer(satLayer)) satLayer.addTo(map);
        if (wantHybrid && !map.hasLayer(labelsLayer)) labelsLayer.addTo(map);

        if (wasCesium) map.invalidateSize(false);
    }
}

function updateCameraTilt(val) {
    settings.tilt = parseFloat(val);
    document.getElementById('val-cam-tilt').innerText = val;
    if(settings.renderMode === 'CSS') {
        dom.cameraTilt.style.transform = `rotateX(${val}deg) rotateZ(0deg)`;
    }
}

function updateVehicleScale(val)   { settings.vehicleScale = parseFloat(val); document.getElementById('val-veh-size').innerText = val; }
function updateMapZoom(val)        { settings.mapZoom = parseFloat(val); document.getElementById('val-map-zoom').innerText = val; map.setZoom(settings.mapZoom); }
function updateCameraZoom(val)     { settings.cameraZoom = parseFloat(val); document.getElementById('val-cam-zoom').innerText = val; }

function updateVehicleVisuals() {
    const isPlane = state.vehicle === 'plane';
    let imgW = state.vehicle === 'car' ? 100 : state.vehicle === 'bus' ? 140 : 170;
    const imgTag = `<img src="${textures[state.vehicle]}" style="width:${imgW}px; height:auto; display:block;">`;
    dom.graphic.innerHTML       = imgTag;

    document.getElementById('mobile-controls-ground').style.display = isPlane ? 'none' : 'block';
    document.getElementById('mobile-controls-plane').style.display  = isPlane ? 'block' : 'none';
    dom.altInfo.style.display = isPlane ? 'block' : 'none';

    if(state.destLat) drawNavigationRoute();
}

document.getElementById('vehicle-select').addEventListener('change', e => {
    state.vehicle = e.target.value; state.speed = 0;
    if (state.vehicle === 'plane') {
        flight.alt = 20; flight.pitch = 0; flight.roll = 0;
        flight.verticalSpeed = 0; flight.throttle = 0;
        flight.flaps = 0; flight.gearDown = true; flight.brakeActive = false;
        flightInput.pitch = 0; flightInput.roll = 0;
    }
    // Avoid a camera jump-cut: the chase-cam smoothing state was tracking
    // the previous vehicle type's position/height.
    camSmoothPos     = null;
    camSmoothHeading = null;
    camSmoothHeight  = null;
    camSmoothLat     = null;
    camSmoothLng     = null;
    updateVehicleVisuals();
});
updateVehicleVisuals();

function updateSteeringMode(mode) {
    settings.steeringMode = mode;
    document.getElementById('d-pad-container').style.display  = mode === 'arrows'   ? 'flex'  : 'none';
    document.getElementById('joystick-container').style.display = mode === 'joystick' ? 'block' : 'none';
}

function updateSteeringSensitivity(val) {
    settings.steeringSensitivity = parseFloat(val);
    document.getElementById('val-steering-sens').innerText = parseFloat(val).toFixed(1);
}

function toggleOrientation() {
    state.headUp = !state.headUp;
    const btn = document.getElementById('btn-orientation');
    btn.innerText = state.headUp ? '🧭 Auto Up' : '🧭 North Up';
    btn.classList.toggle('active', state.headUp);
}

function toggleGPS() {
    let g = document.getElementById('gps-window');
    g.style.display = (g.style.display === 'none' || g.style.display === '') ? 'flex' : 'none';
}

function setSpeedUnit(u) {
    state.speedUnit = u;
    document.getElementById('speed-unit-text').innerText = u;
    document.querySelectorAll('.unit-btn').forEach(b => b.classList.toggle('active', b.innerText === u));
}

async function searchLocation() {
    const q = document.getElementById('gps-search').value; if(!q) return;
    try {
        let res  = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`);
        let data = await res.json();
        if(data && data.length > 0) setDestination(parseFloat(data[0].lat), parseFloat(data[0].lon));
    } catch (e) {}
}

function setDestination(lat, lng) {
    state.destLat = lat; state.destLng = lng;
    document.getElementById('gps-nav-info').style.display = 'flex';
    drawNavigationRoute();
}

function drawNavigationRoute() {
    if (!state.destLat) return;
    if (routingControl) { map.removeControl(routingControl); routingControl = null; }
    routingControl = L.Routing.control({
        waypoints: [L.latLng(state.lat, state.lng), L.latLng(state.destLat, state.destLng)],
        router: L.Routing.osrmv1({ profile: 'driving' }),
        lineOptions: { styles: [{color: '#2563eb', weight: 8, opacity: 0.8}] },
        createMarker: function() { return null; },
        show: false, addWaypoints: false, routeWhileDragging: false
    }).addTo(map);

    // Mirror the route onto the GPS mini-map as soon as it's calculated.
    // We reuse the exact same waypoints OSRM returns — no extra API call.
    routingControl.on('routesfound', function(e) {
        const coords = e.routes[0] && e.routes[0].coordinates;
        if (coords && coords.length > 0) {
            // Convert to L.LatLng array (OSRM already returns them that way)
            updateNavMapRoute(coords.map(c => L.latLng(c.lat, c.lng)));
        }
    });

    // Update the footer destination label (query text may be available)
    const searchInput = document.getElementById('gps-search');
    const destText = (searchInput && searchInput.value) ? searchInput.value : 'Destination';
    document.getElementById('gps-minimap-dest-label').innerText = '📍 ' + destText;
    document.getElementById('gps-minimap-icon').innerText = '🧭';
}

function cancelNavigation() {
    state.destLat = null; state.destLng = null;
    if(routingControl) { map.removeControl(routingControl); routingControl = null; }
    document.getElementById('gps-nav-info').style.display = 'none';
    // Clear nav-map overlays
    clearNavMapRoute();
    if (navMapDestMarker) { navMap && navMap.removeLayer(navMapDestMarker); navMapDestMarker = null; }
    document.getElementById('gps-minimap-dest-label').innerText = 'No destination set';
    document.getElementById('gps-minimap-dist').innerText = '—';
    document.getElementById('gps-minimap-icon').innerText = '🗺️';
}

// ==========================================
// GPS MINI-MAP OVERLAY
// Picture-in-picture live navigation display.
// Uses a dedicated second Leaflet instance so it never interferes with
// the main map's collision/GPS math or the Cesium 3D view.
// ==========================================
let navMap            = null;   // second Leaflet map — navigation mini-map only
let navMapRoute       = null;   // L.polyline showing current route on navMap
let navMapDestMarker  = null;   // red destination dot on navMap
let navMapLastTick    = 0;      // throttle: only update ~10fps
let navMapCurrentZoom = 15;     // persisted zoom so +/- buttons work

function initNavMap() {
    const container = document.getElementById('gps-minimap');
    if (!container) return;

    // ── BUGFIX: make the overlay visible BEFORE creating the Leaflet map ──
    // #gps-minimap-overlay is `display:none` until this class is added.
    // Leaflet measures its container's pixel size the instant L.map() runs;
    // inside a still-hidden (0×0) parent it locks onto a bad size and the
    // tile grid never loads correctly — this is what showed up as a blank
    // grey "Navigation" panel with no satellite imagery.
    document.getElementById('gps-minimap-overlay').classList.add('nav-visible');

    navMap = L.map('gps-minimap', {
        zoomControl:        false,
        dragging:           false,
        scrollWheelZoom:    false,
        touchZoom:          false,
        doubleClickZoom:    false,
        keyboard:           false,
        zoomSnap:           0,
        zoomAnimation:      false,
        trackResize:        false,
        attributionControl: false
    }).setView([state.lat, state.lng], navMapCurrentZoom);

    // Same ArcGIS satellite tiles as the main map — tiles will be
    // cached by the browser, so no extra network cost.
    L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 22 }
    ).addTo(navMap);

    // Belt-and-suspenders: force Leaflet to re-measure on the next frame
    // in case the layout/web fonts hadn't fully settled at construction
    // time (the original cause of the blank-tile bug).
    requestAnimationFrame(() => { if (navMap) navMap.invalidateSize(false); });

    console.log('%c🗺️ GPS Mini-Map ready', 'color:#22c55e;font-weight:bold');
}

/** Called every frame from update(); internally throttled to ~10 fps. */
function updateNavMap() {
    if (!navMap) return;

    const now = performance.now();
    if (now - navMapLastTick < 100) return;   // 10 fps cap — enough for navigation
    navMapLastTick = now;

    // ── Recentre map on vehicle ───────────────────────────────────────────
    navMap.setView([state.lat, state.lng], navMapCurrentZoom, { animate: false });

    // ── Head-up rotation ─────────────────────────────────────────────────
    // Rotate the entire Leaflet div by -heading so North stays at the top
    // of the *screen* only when heading ≈ 0; in general the map rotates so
    // the vehicle's forward direction always points toward the top of the overlay.
    // The vehicle arrow div is outside the rotating div and always points up.
    const rotateDeg = -state.heading;
    document.getElementById('gps-minimap').style.transform = `rotate(${rotateDeg}deg)`;

    // ── Destination marker ────────────────────────────────────────────────
    if (state.destLat) {
        if (!navMapDestMarker) {
            navMapDestMarker = L.marker([state.destLat, state.destLng], {
                icon: L.divIcon({
                    className: '',
                    html: `<div style="
                        width:14px; height:14px;
                        background:#ef4444;
                        border:2.5px solid #fff;
                        border-radius:50%;
                        box-shadow:0 0 8px rgba(239,68,68,0.9);
                    "></div>`,
                    iconSize:   [14, 14],
                    iconAnchor: [ 7,  7]
                }),
                zIndexOffset: 500
            }).addTo(navMap);
        } else {
            navMapDestMarker.setLatLng([state.destLat, state.destLng]);
        }

        // Live distance readout
        const d = getDistance(state.lat, state.lng, state.destLat, state.destLng);
        document.getElementById('gps-minimap-dist').innerText =
            d < 1
                ? Math.round(d * 1000) + ' m'
                : d.toFixed(1) + ' km';

    } else if (navMapDestMarker) {
        // Destination was cancelled externally
        navMap.removeLayer(navMapDestMarker);
        navMapDestMarker = null;
        document.getElementById('gps-minimap-dist').innerText = '—';
    }
}

/**
 * Draws the route polyline on the mini-map.
 * @param {Array<L.LatLng>} latLngs  — array of Leaflet LatLng objects
 *                                      (taken directly from the routing result)
 */
function updateNavMapRoute(latLngs) {
    if (!navMap) return;
    clearNavMapRoute();
    if (!latLngs || latLngs.length === 0) return;

    // Slightly thinner/lighter copy of the main route style
    navMapRoute = L.polyline(latLngs, {
        color:   '#3b82f6',
        weight:  4,
        opacity: 0.85,
        lineCap: 'round'
    }).addTo(navMap);
}

function clearNavMapRoute() {
    if (navMapRoute) { navMap && navMap.removeLayer(navMapRoute); navMapRoute = null; }
}

/** Zoom the mini-map in or out. Called by the +/- buttons in the overlay. */
function navMapZoom(delta) {
    navMapCurrentZoom = Math.min(19, Math.max(10, navMapCurrentZoom + delta));
    if (navMap) navMap.setView([state.lat, state.lng], navMapCurrentZoom, { animate: false });
}

function teleportToDest() {
    if(state.destLat) {
        state.lat = state.destLat; state.lng = state.destLng;
        state.speed = 0; cancelNavigation();
        map.setView([state.lat, state.lng], settings.mapZoom);
        baseLat = state.lat; baseLng = state.lng;
    }
}

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371, dLat = (lat2-lat1)*Math.PI/180, dLon = (lon2-lon1)*Math.PI/180;
    const a = Math.sin(dLat/2)*Math.sin(dLat/2) +
              Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)*Math.sin(dLon/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
function getBearing(startLat, startLng, destLat, destLng) {
    startLat *= Math.PI/180; startLng *= Math.PI/180; destLat *= Math.PI/180; destLng *= Math.PI/180;
    const y = Math.sin(destLng - startLng) * Math.cos(destLat);
    const x = Math.cos(startLat)*Math.sin(destLat) - Math.sin(startLat)*Math.cos(destLat)*Math.cos(destLng - startLng);
    return ((Math.atan2(y, x)*180/Math.PI) + 360) % 360;
}

// ==========================================
// 6. TOUCH CONTROLS
// ==========================================
let groundJoyX = 0;

const bindTouch = (id, key) => {
    let el = document.getElementById(id); if(!el) return;
    el.addEventListener('touchstart', e => { e.preventDefault(); keys[key]=true;  el.classList.add('active'); });
    el.addEventListener('touchend',   e => { e.preventDefault(); keys[key]=false; el.classList.remove('active'); });
};
bindTouch('btn-left', 'a'); bindTouch('btn-right', 'd');
bindTouch('btn-gas', 'w'); bindTouch('btn-brake', 's');

function setupJoystick(baseId, knobId) {
    let base = document.getElementById(baseId), knob = document.getElementById(knobId);
    let active = false, maxDist = base.offsetWidth/2 - knob.offsetWidth/2;
    base.addEventListener('touchstart', e => { e.preventDefault(); active=true; move(e); });
    base.addEventListener('touchmove',  e => { e.preventDefault(); if(active) move(e); });
    window.addEventListener('touchend', () => { active=false; knob.style.transform='translate(0,0)'; groundJoyX=0; });
    function move(e) {
        let rect = base.getBoundingClientRect();
        let x = e.touches[0].clientX - (rect.left + rect.width/2);
        x = Math.max(-maxDist, Math.min(x, maxDist));
        knob.style.transform = `translateX(${x}px)`;
        groundJoyX = x/maxDist;
    }
}
setupJoystick('joystick-base', 'joystick-knob');

// ==========================================
// 6b. FLIGHT MODULE
// ==========================================
const flight = {
    pitch: 0, roll: 0,
    throttle: 0, alt: 20,
    verticalSpeed: 0, flaps: 0,
    gearDown: true, brakeActive: false
};
const flightInput = { pitch: 0, roll: 0 };
let flightJoystickActive = false;

function setThrottle(delta) { flight.throttle = Math.max(0, Math.min(100, flight.throttle + delta)); }
function setFlaps(delta)    { flight.flaps    = Math.max(0, Math.min(2,   flight.flaps    + delta)); }

function setupFlightJoystick(baseId, knobId) {
    const container = document.getElementById(baseId);
    const knob      = document.getElementById(knobId);
    let activePointerId = null;
    let startX = 0, startY = 0;

    container.addEventListener('pointerdown', function(e) {
        if (activePointerId !== null) return;
        activePointerId = e.pointerId; flightJoystickActive = true;
        container.setPointerCapture(e.pointerId);
        const rect = container.getBoundingClientRect();
        startX = rect.left + rect.width  / 2;
        startY = rect.top  + rect.height / 2;
        handleMove(e.clientX, e.clientY);
    });

    container.addEventListener('pointermove', function(e) {
        if (e.pointerId !== activePointerId) return;
        handleMove(e.clientX, e.clientY);
    });

    function handleMove(clientX, clientY) {
        let dx = clientX - startX;
        let dy = clientY - startY;
        const maxLen = container.clientWidth / 2 - knob.clientWidth / 2;
        const dist   = Math.hypot(dx, dy);
        if (dist > maxLen) { dx = (dx / dist) * maxLen; dy = (dy / dist) * maxLen; }
        knob.style.transform  = `translate(${dx}px, ${dy}px)`;
        flightInput.roll  =  dx / maxLen;   // +1 = right bank
        flightInput.pitch = -dy / maxLen;   // +1 = pitch up
    }

    function endTouch(e) {
        if (e.pointerId !== activePointerId) return;
        activePointerId = null; flightJoystickActive = false;
        knob.style.transform  = 'translate(0px, 0px)';
        flightInput.roll = 0; flightInput.pitch = 0;
    }
    container.addEventListener('pointerup',     endTouch);
    container.addEventListener('pointercancel', endTouch);
}
setupFlightJoystick('flight-joystick-base', 'flight-joystick-knob');

document.getElementById('btn-flight-thr-up').addEventListener('click',    () => setThrottle(5));
document.getElementById('btn-flight-thr-down').addEventListener('click',  () => setThrottle(-5));
document.getElementById('btn-flight-flaps-up').addEventListener('click',  () => setFlaps(-1));
document.getElementById('btn-flight-flaps-down').addEventListener('click',() => setFlaps(1));

const flightGearBtn = document.getElementById('btn-flight-gear');
flightGearBtn.addEventListener('click', () => {
    flight.gearDown = !flight.gearDown;
    flightGearBtn.classList.toggle('active', flight.gearDown);
});

const flightBrakeBtn = document.getElementById('btn-flight-brake');
flightBrakeBtn.addEventListener('click', () => {
    flight.brakeActive = !flight.brakeActive;
    flightBrakeBtn.classList.toggle('active', flight.brakeActive);
});

function updateFlight(dt) {
    let pitchInput = flightInput.pitch, rollInput = flightInput.roll;
    if (keys['w'] || keys['arrowup'])    pitchInput =  0.6;
    else if (keys['s'] || keys['arrowdown'])  pitchInput = -0.6;
    if (keys['a'] || keys['arrowleft'])  rollInput  = -0.6;
    else if (keys['d'] || keys['arrowright']) rollInput  =  0.6;

    // Accumulate roll and pitch
    flight.roll  += rollInput  * 1.2 * dt;
    flight.pitch += pitchInput * 0.8 * dt;

    // Auto-level roll when no input
    if (rollInput === 0) flight.roll *= Math.exp(-1.5 * dt);

    // Roll drives yaw (coordinated turn)
    if (Math.abs(flight.roll) > 0.01) {
        state.heading += Math.sin(flight.roll) * 0.4 * dt * (180 / Math.PI) *
                         (state.speed / Math.max(state.speed, 80));
    }

    flight.pitch  = Math.max(-0.8, Math.min(0.8, flight.pitch));
    flight.roll   = Math.max(-1.2, Math.min(1.2, flight.roll));
    state.heading = (state.heading + 360) % 360;

    const targetSpeed  = flight.throttle * 2.5 - (flight.pitch * 50) - (flight.flaps * 15)
                         - (flight.gearDown ? 10 : 0) - (flight.brakeActive ? 30 : 0);
    const finalTarget  = Math.max(40, targetSpeed);
    state.speed       += (finalTarget - state.speed) * 0.5 * dt;

    const currentSpeedMps = state.speed * 0.514444;
    flight.verticalSpeed  = currentSpeedMps * Math.sin(flight.pitch) * 196.85;
    flight.alt           += (flight.verticalSpeed / 60) * dt;

    if (flight.alt < 20) {
        flight.alt = 20; flight.verticalSpeed = 0;
        flight.pitch = Math.max(0, flight.pitch);
        flight.roll  *= Math.exp(-5 * dt);
    }

    const distanceMoved = currentSpeedMps * Math.cos(flight.pitch) * dt;
    let hdgRad = state.heading * Math.PI / 180;
    state.lat += (distanceMoved * Math.cos(hdgRad)) / 111320;
    state.lng += (distanceMoved * Math.sin(hdgRad)) / (111320 * Math.cos(state.lat * Math.PI / 180));
}

// ==========================================
// 7a. CESIUM ENGINE INTEGRATION
// ==========================================
let cesiumViewer      = null;
let cesiumLabelsLayer = null;   // for hybrid mode in Cesium
let photorealTileset  = null;   // Google Photorealistic 3D Tiles (once loaded)
let osmBuildingsTileset = null; // Cesium OSM Buildings (once loaded)

/**
 * initCesium — sets up the Cesium viewer with ArcGIS satellite imagery as a
 * base. No keys are required to run: Cesium Ion / Photorealistic 3D Tiles
 * are only layered in if the person has saved an Ion token via Settings
 * (see CONFIG / applyCesiumIonToken / applyPhotorealKey).
 */
function initCesium() {
    if (typeof Cesium === 'undefined') {
        console.warn('Cesium not loaded — 3D mode will use CSS fallback.');
        // Silently fall back to CSS mode
        settings.renderMode = 'CSS';
        document.getElementById('btn-mode-3d').disabled = true;
        document.getElementById('btn-mode-3d').title = 'Cesium failed to load';
        return;
    }

    // 'none' suppresses Ion's default-token warning when no key has been
    // saved yet — we run fine on ArcGIS imagery alone in that case.
    Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION || 'none';

    try {
        cesiumViewer = new Cesium.Viewer('cesium-container', {
            // No base imagery layer here on purpose. Cesium 1.117 removed
            // the old synchronous `new ArcGisMapServerImageryProvider({url})`
            // constructor (it now requires an async `.fromUrl()` fetch — see
            // below), and the Viewer's own `imageryProvider` option is
            // deprecated too. Passing either the old way silently produced
            // a globe with NO real imagery — just its flat default base
            // color, which looks exactly like a uniform ocean even when
            // you're nowhere near water. Start with no layer and add the
            // real ArcGIS imagery as soon as it's actually ready.
            baseLayer: false,
            // Flat terrain by default. Becomes WorldTerrain automatically
            // if an Ion token is saved (see tryEnableWorldTerrain).
            terrainProvider: new Cesium.EllipsoidTerrainProvider(),
            animation:                          false,
            baseLayerPicker:                    false,
            fullscreenButton:                   false,
            vrButton:                           false,
            geocoder:                           false,
            homeButton:                         false,
            infoBox:                            false,
            sceneModePicker:                    false,
            selectionIndicator:                 false,
            timeline:                           false,
            navigationHelpButton:               false,
            navigationInstructionsInitiallyVisible: false,
            // Route credits to a hidden div to comply with ArcGIS attribution
            // while keeping the UI clean
            creditContainer: Object.assign(document.createElement('div'), {
                style: 'display:none'
            })
        });

        // A clearly-synthetic placeholder color (NOT ocean-blue) while the
        // real imagery loads, so a load failure is obvious instead of
        // looking like a plausible — but fake — body of water.
        cesiumViewer.scene.globe.baseColor = Cesium.Color.fromCssColorString('#3a3a3a');

        // ── Real ArcGIS World Imagery — loaded async (required in modern
        // Cesium), isolated in its own try/catch so a failure here can
        // never null out an already-working cesiumViewer. ──────────────────
        Cesium.ArcGisMapServerImageryProvider.fromUrl(
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
        ).then(provider => {
            if (!cesiumViewer) return; // viewer was torn down meanwhile
            cesiumViewer.imageryLayers.addImageryProvider(provider);
            console.log('%c🛰️ ArcGIS imagery loaded', 'color:#22c55e;font-weight:bold');
        }).catch(e => {
            console.warn('ArcGIS imagery failed to load — globe will stay untextured:', e);
        });

        // ── DEPTH FIX: with this left false, terrain never participates in
        // depth testing, so anything drawn after it — OSM Buildings, Google
        // Photorealistic 3D Tiles, the vehicle box models — renders ON TOP
        // of terrain regardless of whether a hill/ridge is actually in
        // front of it. That's what let 3D tiles "show through" terrain.
        // True is the correct setting whenever terrain has real relief
        // (WorldTerrain) or any 3D tileset is in the scene; the cost is
        // negligible at this app's scale.
        cesiumViewer.scene.globe.depthTestAgainstTerrain = true;
        cesiumViewer.scene.skyAtmosphere.show = true;
        cesiumViewer.scene.sun.show = true;
        cesiumViewer.scene.moon.show = false;

        // Prepare optional labels layer (CartoTiles for hybrid mode)
        cesiumLabelsLayer = cesiumViewer.imageryLayers.addImageryProvider(
            new Cesium.UrlTemplateImageryProvider({
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}.png',
                maximumLevel: 19
            })
        );
        // Start hidden; shown when user switches to Hybrid
        cesiumLabelsLayer.show = false;

        // Build the (initially hidden) simple box-model vehicles used by
        // third-person mode. Safe to call now — only needs cesiumViewer.entities.
        buildVehicleModels();

        console.log('%c✅ Cesium 3D engine ready', 'color:#22c55e;font-weight:bold');
    } catch (e) {
        console.warn('Cesium init failed:', e);
        cesiumViewer = null;
    }

    // Only kick in if a token was already saved from a previous visit
    // (CONFIG is seeded from localStorage above) — nothing runs by default.
    tryLoadPhotorealisticTiles();
    tryEnableWorldTerrain();
}

/**
 * setPhotorealStatus — writes a message into the #photoreal-status line in
 * the Settings panel (hidden when message is empty). Every success AND
 * every failure path in tryLoadPhotorealisticTiles() calls this, so
 * something always shows up on screen — not just in the console.
 */
function setPhotorealStatus(message, type) {
    const el = document.getElementById('photoreal-status');
    if (!el) return;
    if (!message) { el.style.display = 'none'; return; }
    el.style.display = 'block';
    el.textContent = message;
    el.style.color = type === 'error'   ? '#ef4444'
                    : type === 'success' ? '#22c55e'
                    : '#94a3b8';
}

/**
 * diagnosePhotorealError — turns whatever Cesium rejects with into a
 * specific, actionable message. The likely cause differs depending on
 * whether the free Ion path or the optional own-key path was used, so the
 * message branches on CONFIG.PHOTOREAL_KEY.
 */
function diagnosePhotorealError(e) {
    const statusCode = e && (e.statusCode || (e.response && e.response.status));
    const msg = (e && e.message) || String(e || '');

    if (statusCode === 403 || /\b403\b/.test(msg)) {
        return CONFIG.PHOTOREAL_KEY
            ? '403 Forbidden — enable the "Map Tiles API" (not just "Maps JavaScript API") on this key\'s Google Cloud project, and check any HTTP referrer restrictions.'
            : '403 Forbidden from Cesium ion — the Ion token above may be invalid, revoked, or missing the right scope.';
    }
    if (statusCode === 404 || /\b404\b/.test(msg)) {
        return CONFIG.PHOTOREAL_KEY
            ? '404 Not Found — this Google Cloud project likely has no active billing account.'
            : '404 Not Found — try re-saving the Ion token, or remove the optional key below if one is set.';
    }
    if (statusCode === 400 || /API key not valid/i.test(msg)) {
        return '400 Bad Request — the key/token looks invalid or malformed. Re-copy it.';
    }
    if (statusCode === 429 || /\b429\b/.test(msg)) {
        return CONFIG.PHOTOREAL_KEY
            ? '429 Too Many Requests — quota or rate limit hit on this key/project.'
            : '429 Too Many Requests — the free Ion tier quota was hit. Try again later, or paste your own Google Maps key below for separate quota.';
    }
    return `Failed to load (${msg || 'unknown error'}) — see browser console for the full error.`;
}

/**
 * tryLoadPhotorealisticTiles — loads Google's Photorealistic 3D Tiles the
 * free way: through the Cesium Ion token already saved above
 * (CONFIG.CESIUM_ION). Cesium proxies the tiles through its own
 * partnership with Google inside Ion's free tier — no Google Cloud
 * project, no billing card, no separate Maps Platform key required.
 *
 * If an OPTIONAL Google Maps API key has also been saved
 * (CONFIG.PHOTOREAL_KEY — only needed by people who want their own quota
 * instead of sharing Ion's free one), that key is used instead of the Ion
 * proxy path.
 *
 * No-op if there's no viewer, or if neither an Ion token nor an optional
 * key is saved — nothing to authenticate the request with yet.
 */
function tryLoadPhotorealisticTiles() {
    if (!cesiumViewer) return;
    if (!CONFIG.CESIUM_ION && !CONFIG.PHOTOREAL_KEY) return;

    setPhotorealStatus('Loading photorealistic 3D tiles…', 'info');
    try {
        let tilesetPromise;
        if (CONFIG.PHOTOREAL_KEY) {
            // Optional own-key path
            if (typeof Cesium.GoogleMaps !== 'undefined') {
                Cesium.GoogleMaps.defaultApiKey = CONFIG.PHOTOREAL_KEY;
                tilesetPromise = Cesium.createGooglePhotorealistic3DTileset();
            } else {
                tilesetPromise = Cesium.createGooglePhotorealistic3DTileset(CONFIG.PHOTOREAL_KEY); // older API shape
            }
        } else {
            // Free path — proxied through Cesium ion using
            // Cesium.Ion.defaultAccessToken (already set in
            // tryEnableWorldTerrain/initCesium from CONFIG.CESIUM_ION).
            tilesetPromise = Cesium.createGooglePhotorealistic3DTileset();
        }

        Promise.resolve(tilesetPromise)
            .then(tileset => {
                if (!cesiumViewer) return; // viewer was torn down meanwhile
                if (photorealTileset) cesiumViewer.scene.primitives.remove(photorealTileset);
                cesiumViewer.scene.primitives.add(tileset);
                photorealTileset = tileset;
                // The photorealistic tileset already covers the whole
                // globe in 3D, so the flat ArcGIS imagery underneath
                // would only cause z-fighting — hide it.
                cesiumViewer.scene.globe.show = false;
                console.log('%c🌍 Photorealistic 3D Tiles loaded', 'color:#22c55e;font-weight:bold');
                setPhotorealStatus('✓ Photorealistic 3D tiles loaded.', 'success');
            })
            .catch(e => {
                console.warn('Photorealistic 3D Tiles failed to load, staying on ArcGIS imagery:', e);
                setPhotorealStatus(diagnosePhotorealError(e), 'error');
            });
    } catch (e) {
        console.warn('Photorealistic 3D Tiles unavailable, staying on ArcGIS imagery:', e);
        setPhotorealStatus(diagnosePhotorealError(e), 'error');
    }
}

// ==========================================
// 7a-2. THIRD-PERSON VEHICLE MODELS (Cesium)
// ==========================================
// Very simple stand-ins built from primitive boxes — no external model
// files to fetch, parse, or have fail to load. They're only shown in
// Cesium 3D mode while settings.cesiumCameraMode === 'third'; in first
// person you're inside the vehicle, so there's nothing to draw.
//
// Local offset/size convention (matches Cesium's heading-pitch-roll frame
// used for the chase camera too, so model and camera always agree):
//   x = right(+) / left(-),   y = forward(+) / back(-),   z = up(+)
const VEHICLE_MODEL_DEFS = {
    car: [
        { dim: [1.8, 4.2, 1.0],   offset: [0,  0,    0.55], color: '#e11d48' }, // body
        { dim: [1.5, 2.0, 0.55],  offset: [0, -0.3,  1.10], color: '#1e293b' }  // cabin
    ],
    bus: [
        { dim: [2.4, 11.0, 2.6],  offset: [0,  0,    1.40], color: '#2563eb' }, // body
        { dim: [2.3, 1.6,  0.6],  offset: [0,  4.9,  2.55], color: '#0f172a' }  // front roof cap, marks the nose
    ],
    plane: [
        { dim: [1.8, 12.0, 1.8],  offset: [0,  0,    0],    color: '#cbd5e1' }, // fuselage
        { dim: [14.0, 1.6, 0.25], offset: [0, -1.0,  0],    color: '#94a3b8' }, // wings
        { dim: [0.25, 1.2, 1.8],  offset: [0, -5.4,  1.1],  color: '#94a3b8' }, // vertical tail
        { dim: [4.0, 1.0, 0.2],   offset: [0, -5.4,  0.1],  color: '#94a3b8' }  // horizontal tail
    ]
};

// Primitives-based vehicle model system.
// We use scene.primitives (GeometryInstance + PerInstanceColorAppearance)
// instead of the Entity API because Cesium entities created with show:false
// may never initialise their GPU buffers, staying invisible even after show
// is later set to true. Primitives bypass that pipeline entirely: they are
// compiled once (asynchronous:false = synchronously on first render) and
// their modelMatrix is overwritten each frame to move/orient them.
const vehiclePrimitives = { car: [], bus: [], plane: [] };

/**
 * buildVehicleModels — creates one Primitive per box-part per vehicle type.
 * Each primitive is a BoxGeometry whose modelMatrix will be overwritten
 * every frame by updateVehicleModels().
 */
function buildVehicleModels() {
    if (!cesiumViewer) return;
    Object.keys(VEHICLE_MODEL_DEFS).forEach(type => {
        VEHICLE_MODEL_DEFS[type].forEach(part => {
            const color = Cesium.Color.fromCssColorString(part.color);
            const instance = new Cesium.GeometryInstance({
                geometry: Cesium.BoxGeometry.fromDimensions({
                    vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
                    dimensions: new Cesium.Cartesian3(part.dim[0], part.dim[1], part.dim[2])
                }),
                attributes: {
                    color: Cesium.ColorGeometryInstanceAttribute.fromColor(color)
                }
            });
            const primitive = cesiumViewer.scene.primitives.add(new Cesium.Primitive({
                geometryInstances: instance,
                appearance: new Cesium.PerInstanceColorAppearance({ flat: true, closed: true }),
                asynchronous: false   // compile on first render, not deferred
            }));
            primitive.show = false;
            // Stash offset so updateVehicleModels can build the modelMatrix
            primitive._offset = new Cesium.Cartesian3(part.offset[0], part.offset[1], part.offset[2]);
            vehiclePrimitives[type].push(primitive);
        });
    });
}

/** hideAllVehicleModels — called whenever Cesium 3D mode is not active. */
function hideAllVehicleModels() {
    Object.values(vehiclePrimitives).forEach(parts => parts.forEach(p => { p.show = false; }));
}

// Scratch matrices reused every frame to avoid GC pressure.
const _scratchOffsetC = new Cesium.Cartesian3();
const _scratchOffsetM = new Cesium.Matrix4();
const _scratchScaleM  = new Cesium.Matrix4();
const _scratchModelM  = new Cesium.Matrix4();

/**
 * updateVehicleModels — called every frame from updateCesiumCamera.
 * Moves/shows/hides each primitive using the same vehicleTransform as the
 * chase camera so model and camera never drift apart.
 */
function updateVehicleModels(vehicleTransform) {
    const scale   = settings.vehicleScale;
    const active  = state.vehicle;
    const visible = settings.cesiumCameraMode === 'third';

    Object.keys(vehiclePrimitives).forEach(type => {
        const parts = vehiclePrimitives[type];
        const show  = visible && type === active;
        for (let i = 0; i < parts.length; i++) {
            const prim = parts[i];
            prim.show = show;
            if (!show) continue;

            // Scale the offset, build a translation matrix, then compose:
            // modelMatrix = vehicleTransform × offsetTranslation × uniformScale
            Cesium.Cartesian3.multiplyByScalar(prim._offset, scale, _scratchOffsetC);
            Cesium.Matrix4.fromTranslation(_scratchOffsetC, _scratchOffsetM);
            Cesium.Matrix4.fromUniformScale(scale, _scratchScaleM);
            Cesium.Matrix4.multiply(vehicleTransform, _scratchOffsetM, _scratchModelM);
            Cesium.Matrix4.multiply(_scratchModelM, _scratchScaleM, _scratchModelM);
            prim.modelMatrix = Cesium.Matrix4.clone(_scratchModelM);
        }
    });
}

/**
 * setCesiumCameraView — toggles Cesium 3D between first-person (inside the
 * vehicle, no model drawn) and third-person (chase camera behind/above the
 * simple box model). Only meaningful while settings.renderMode === '3D';
 * the buttons that call this are disabled otherwise (see setRenderMode).
 */
function setCesiumCameraView(mode) {
    settings.cesiumCameraMode = mode;
    localStorage.setItem(CONFIG_KEYS.CESIUM_CAM_MODE, mode);
    // Reset smooth-camera state so the camera doesn't jump/sweep from a
    // stale position when switching between 1st and 3rd person.
    camSmoothPos     = null;
    camSmoothHeading = null;
    camSmoothHeight  = null;
    camSmoothLat     = null;
    camSmoothLng     = null;
    document.getElementById('btn-view-first').classList.toggle('active', mode === 'first');
    document.getElementById('btn-view-third').classList.toggle('active', mode === 'third');
    const quickBtn = document.getElementById('btn-cam-view-quick');
    if (quickBtn) quickBtn.textContent = mode === 'third' ? '👁️ 3rd Person' : '👁️ 1st Person';
}

function toggleCesiumCameraQuick() {
    setCesiumCameraView(settings.cesiumCameraMode === 'third' ? 'first' : 'third');
}

/**
 * tryEnableWorldTerrain — upgrades flat terrain to Cesium WorldTerrain
 * using CONFIG.CESIUM_ION. No-op if there's no viewer or no token saved.
 * Tries the modern async API first (createWorldTerrainAsync), falling back
 * to the older createWorldTerrain if that's what this Cesium build has —
 * same "don't assume which API shape is available" defense as the ArcGIS
 * and Google Tiles loaders above.
 */
function tryEnableWorldTerrain() {
    if (!cesiumViewer || !CONFIG.CESIUM_ION) return;
    try {
        Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION;
        const terrainPromise = typeof Cesium.createWorldTerrainAsync === 'function'
            ? Cesium.createWorldTerrainAsync({ requestWaterMask: true })
            : Cesium.createWorldTerrain({ requestWaterMask: true });

        Promise.resolve(terrainPromise).then(tp => {
            if (!cesiumViewer) return;
            cesiumViewer.terrainProvider = tp;
            console.log('%c🌍 WorldTerrain enabled!', 'color:#22c55e;font-weight:bold');
        }).catch(e => {
            console.warn('WorldTerrain failed to load, staying on flat terrain:', e);
        });
    } catch (e) {
        console.warn('WorldTerrain init failed:', e);
    }
}

/**
 * applyCesiumIonToken — the ONLY place an Ion token ever enters this app.
 * Reads the Settings textbox, saves it to localStorage (so it's remembered
 * on this device next visit) and immediately enables WorldTerrain, OSM
 * Buildings (if toggled on), and free Photorealistic 3D Tiles — all three
 * ride on this same token.
 */
function applyCesiumIonToken() {
    const input = document.getElementById('cesium-token-input');
    const token = input.value.trim();
    if (!token) return;
    localStorage.setItem(CONFIG_KEYS.CESIUM_ION, token);
    CONFIG.CESIUM_ION = token;
    input.value = '';
    input.placeholder = '✓ Token saved on this device';
    tryEnableWorldTerrain();
    tryLoadPhotorealisticTiles();
    // Re-attempt OSM Buildings now that we have a token
    if (settings.osmBuildings) tryLoadOsmBuildings();
}

// ── FOV ──────────────────────────────────────────────────────────────────────
function updateFOV(val) {
    settings.fov = parseFloat(val);
    document.getElementById('val-fov').innerText = val + '°';
    // Will be picked up next frame in updateCesiumCamera()
}

// ── 3rd Person Zoom ──────────────────────────────────────────────────────────
function updateThirdPersonZoom(val) {
    settings.thirdPersonZoom = parseFloat(val);
    document.getElementById('val-3rd-person-zoom').innerText = parseFloat(val).toFixed(2);
    // Will be picked up next frame in updateCesiumCamera()
}

// ── 3rd Person Camera Follow Delay ───────────────────────────────────────────
function updateCameraFollowDelay(val) {
    settings.cameraFollowDelay = parseFloat(val);
    document.getElementById('val-cam-follow-delay').innerText = parseFloat(val).toFixed(2);
    // Will be picked up next frame in updateCesiumCamera()
}

// ── 3rd Person Camera Horizon Blend ──────────────────────────────────────────
function updateCameraLookBlend(val) {
    settings.cameraLookBlend = parseFloat(val);
    document.getElementById('val-cam-horizon-blend').innerText = parseFloat(val).toFixed(2);
}

// ── Camera Rotates With Plane toggle ─────────────────────────────────────────
function updateCameraRotatesWithPlane(val) {
    settings.cameraRotatesWithPlane = val;
}

// ── OSM Buildings ─────────────────────────────────────────────────────────────
/**
 * tryLoadOsmBuildings — loads Cesium OSM Buildings from Ion (asset 96188).
 * Requires a valid Ion token. No-op if viewer isn't ready or no token exists.
 */
function tryLoadOsmBuildings() {
    if (!cesiumViewer || !CONFIG.CESIUM_ION) {
        console.warn('OSM Buildings require a Cesium Ion token — paste one in Settings.');
        return;
    }
    // Remove any previously loaded instance first
    if (osmBuildingsTileset) {
        cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
        osmBuildingsTileset = null;
    }
    if (!settings.osmBuildings) return;

    Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION;

    const buildingPromise = typeof Cesium.createOsmBuildingsAsync === 'function'
        ? Cesium.createOsmBuildingsAsync()
        : (typeof Cesium.createOsmBuildings === 'function'
            ? Promise.resolve(Cesium.createOsmBuildings())
            : Cesium.Cesium3DTileset.fromIonAssetId(96188));   // raw Ion asset fallback

    Promise.resolve(buildingPromise)
        .then(tileset => {
            if (!cesiumViewer) return;
            cesiumViewer.scene.primitives.add(tileset);
            osmBuildingsTileset = tileset;
            console.log('%c🏙️ OSM Buildings loaded', 'color:#22c55e;font-weight:bold');
        })
        .catch(e => {
            console.warn('OSM Buildings failed to load (check Ion token / quota):', e);
            settings.osmBuildings = false;
            const cb = document.getElementById('set-osm-buildings');
            if (cb) cb.checked = false;
        });
}

function toggleOsmBuildings(val) {
    settings.osmBuildings = val;
    if (val) {
        tryLoadOsmBuildings();
    } else if (osmBuildingsTileset && cesiumViewer) {
        cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
        osmBuildingsTileset = null;
    }
}

// ── TakeOff ───────────────────────────────────────────────────────────────────
/**
 * doTakeoff — called by the TakeOff button.
 * Raises gear, sets a 10° pitch-up and bumps throttle to 100 so the plane
 * climbs immediately. The normal physics loop takes over from there.
 */
function doTakeoff() {
    if (state.vehicle !== 'plane') return;
    flight.throttle   = 100;
    flight.pitch      = 0.175;    // ~10° in radians
    flight.gearDown   = false;
    flight.brakeActive = false;
    document.getElementById('btn-flight-gear').classList.remove('active');
    // Hide button immediately — it will re-show if plane lands again
    document.getElementById('btn-takeoff').style.display = 'none';
}

/**
 * applyPhotorealKey — the ONLY place an optional Google Maps API key ever
 * enters this app. This key is NOT required: Photorealistic 3D Tiles
 * already load for free using just the Cesium Ion token above. Paste a key
 * here only if you want your own Google Cloud quota instead of sharing
 * Ion's free tier.
 */
function applyPhotorealKey() {
    const input = document.getElementById('photoreal-key-input');
    const key = input.value.trim();
    if (!key) return;
    localStorage.setItem(CONFIG_KEYS.PHOTOREAL_KEY, key);
    CONFIG.PHOTOREAL_KEY = key;
    input.value = '';
    input.placeholder = '✓ Key saved on this device';
    if (!cesiumViewer) {
        // Key is saved for next time, but there's no viewer to attach
        // tiles to right now — say so instead of doing nothing visibly.
        setPhotorealStatus('Key saved, but the 3D engine isn\'t running in this browser (it fell back to CSS mode), so tiles can\'t load yet.', 'error');
        return;
    }
    tryLoadPhotorealisticTiles();
}

/**
 * clearSavedKeys — removes both saved values from this device and reverts
 * to the no-key default (ArcGIS imagery, flat terrain, no photoreal tiles).
 */
function clearSavedKeys() {
    localStorage.removeItem(CONFIG_KEYS.CESIUM_ION);
    localStorage.removeItem(CONFIG_KEYS.PHOTOREAL_KEY);
    CONFIG.CESIUM_ION = '';
    CONFIG.PHOTOREAL_KEY = '';
    document.getElementById('cesium-token-input').placeholder = 'eyJhbGci...';
    document.getElementById('photoreal-key-input').placeholder = 'AIzaSy... (optional)';
    setPhotorealStatus('', null);
    if (photorealTileset && cesiumViewer) {
        cesiumViewer.scene.primitives.remove(photorealTileset);
        cesiumViewer.scene.globe.show = true;
        photorealTileset = null;
    }
    if (cesiumViewer) {
        Cesium.Ion.defaultAccessToken = 'none';
        cesiumViewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
    }
}

/**
 * updateCesiumCamera — called every frame in Cesium 3D mode.
 *
 * Cesium 3D mode is first-person only: the camera sits at eye height
 * directly on the vehicle's own coordinates and looks the way the vehicle
 * is facing. There is no behind/above chase cam and no follow-distance
 * setting anymore — if you want a chase cam, switch to "3D CSS" mode.
 *
 * ROLL FIX: `flight.roll` (radians) is passed directly to Cesium's camera
 * orientation `roll` parameter. Cesium expects roll in radians, so no
 * conversion is needed.
 */
/**
 * updateCesiumCamera — called every frame in Cesium 3D mode.
 *
 * Cesium 3D mode supports two views, controlled by settings.cesiumCameraMode:
 *   'first' → eye sits directly on the vehicle's own coordinates, looking
 *             the way the vehicle is facing (unchanged from before).
 *   'third' → a chase camera sits behind/above a simple box-built vehicle
 *             model, using Cesium's lookAtTransform so the camera always
 *             stays correctly oriented relative to the vehicle as it turns,
 *             climbs, banks, etc.
 *
 * Both views — and the vehicle model itself — are built from the SAME
 * vehicleTransform/vehicleQuat computed once per frame below, so the
 * camera and the model can never disagree about where the vehicle is.
 *
 * ROLL FIX: `flight.roll` (radians) is passed directly into the
 * heading-pitch-roll inputs. Cesium expects roll in radians, so no
 * conversion is needed.
 */
/**
 * getGroundHeight — real terrain elevation (meters above the ellipsoid) at
 * a given lng/lat, sampled from whatever terrain mesh is already loaded in
 * the scene. Synchronous and cheap (just walks tiles already in memory) —
 * unlike sampleTerrain()/sampleTerrainMostDetailed(), which hit the network
 * and return a promise, so they can't be used inside a per-frame camera
 * update. Returns 0 if no viewer, no terrain loaded yet at this location
 * (e.g. very first frames before any tile has streamed in), or while on
 * the default flat EllipsoidTerrainProvider (whose mesh height is 0
 * everywhere anyway).
 *
 * Why this matters: ground vehicles used to assume height 0 (sea level)
 * always. That's fine on flat terrain, but once Cesium World Terrain is
 * enabled (real elevation), the actual ground is almost never at exactly
 * 0m. Anchoring the vehicle model — and, in third person, the chase camera
 * built from that same anchor — at the wrong height means both can end up
 * sitting meters below the visible terrain surface (or floating above
 * it), which is exactly the kind of thing that makes 3rd person look
 * empty even though the model is technically still "there".
 */
function getGroundHeight(lng, lat) {
    if (!cesiumViewer) return 0;
    const cartographic = Cesium.Cartographic.fromDegrees(lng, lat);
    const h = cesiumViewer.scene.globe.getHeight(cartographic);
    return (typeof h === 'number' && isFinite(h)) ? h : 0;
}

function updateCesiumCamera(dt) {
    if (!cesiumViewer) return;

    const isPlane = state.vehicle === 'plane';

    // Real terrain elevation at the vehicle's current position (0 on flat
    // terrain, or whenever no World Terrain is loaded). Only meaningful
    // for ground vehicles — the plane uses its own simulated altitude and
    // has no ground to sit on.
    const groundHeight = isPlane ? 0 : getGroundHeight(state.lng, state.lat);

    // Eye height above the ellipsoid, used only for the first-person view.
    // Ground vehicles sit a fixed approximate driver-eye height ABOVE THE
    // REAL GROUND (not sea level — see getGroundHeight above). The plane
    // uses its real, simulated flight altitude.
    const eyeHeight = isPlane
        ? flight.alt * 0.3048                              // ft → m
        : groundHeight + (state.vehicle === 'bus' ? 2.4 : 1.3);   // bus driver sits higher than a car

    // Pitch/roll: level for ground vehicles, true flight attitude for the plane.
    const camPitchDeg = isPlane ? flight.pitch * (180 / Math.PI) : 0;
    const camRoll      = isPlane ? flight.roll : 0;

    // Apply FOV setting to the perspective frustum every frame so
    // changes from the slider are picked up immediately.
    if (cesiumViewer.scene.camera.frustum &&
        typeof cesiumViewer.scene.camera.frustum.fov !== 'undefined') {
        cesiumViewer.scene.camera.frustum.fov = Cesium.Math.toRadians(settings.fov);
    }

    // ── Vehicle body transform — used for the box model AND, in third
    // person, as the chase camera's reference frame. Ground vehicles are
    // anchored at the REAL terrain surface (groundHeight, computed above —
    // not a hardcoded 0/sea-level); the plane is anchored at its own
    // flight altitude (it has no ground reference to sit on).
    const anchorHeight = isPlane ? flight.alt * 0.3048 : groundHeight;
    const vehiclePosition = Cesium.Cartesian3.fromDegrees(state.lng, state.lat, anchorHeight);
    // MODEL PITCH/ROLL FIX: Cesium's HeadingPitchRoll, once run through
    // headingPitchRollToFixedFrame for OUR x=right/y=forward/z=up box model
    // (see VEHICLE_MODEL_DEFS above), does not map its `pitch` field onto
    // the fuselage axis and its `roll` field onto the wing axis the way the
    // names suggest. Verified empirically: feeding a value into the HPR
    // `pitch` slot tilts the WING axis (a visual roll), and feeding a value
    // into the `roll` slot tilts the FUSELAGE axis (a visual pitch) — they
    // are swapped relative to flight.pitch/flight.roll. This only affects
    // the 3rd-person box model built from vehicleTransform below; the
    // first-person camera (camera.setView's own heading/pitch/roll further
    // down) uses a different Cesium code path and already maps correctly,
    // which is why this bug was only ever visible in 3rd person.
    // Swapping which value goes in which slot (plus the sign flip below,
    // also verified empirically) corrects it: positive flight.pitch now
    // raises the nose, and positive flight.roll now drops the right wing.
    const vehicleHpr = new Cesium.HeadingPitchRoll(
        Cesium.Math.toRadians(state.heading),
        isPlane ? -flight.roll : 0,   // HPR "pitch" slot ← -flight.roll (wing axis)
        isPlane ?  flight.pitch : 0   // HPR "roll" slot  ←  flight.pitch (fuselage axis)
    );
    // headingPitchRollToFixedFrame/Quaternion (NOT a plain HPR-to-quaternion
    // conversion) account for the local East-North-Up frame at this exact
    // lat/lng — using a plain rotation instead would orient the vehicle
    // wrong anywhere except the equator/prime meridian.
    const vehicleTransform = Cesium.Transforms.headingPitchRollToFixedFrame(vehiclePosition, vehicleHpr);
    const vehicleQuat      = Cesium.Transforms.headingPitchRollQuaternion(vehiclePosition, vehicleHpr);

    updateVehicleModels(vehicleTransform);

    if (settings.cesiumCameraMode === 'third') {
        // ── Smooth third-person chase camera ──────────────────────────────
        // Cars/buses: original behavior — lag the WHOLE camera position
        // (forward/back AND left/right AND up/down together) toward a
        // moving target. Floaty and cinematic at car/bus speeds.
        //
        // Planes: that same approach breaks down at flight speed. Since
        // the target moves at the vehicle's speed and the lerp can only
        // close part of the gap each frame, the steady-state lag distance
        // scales with speed — and a plane's speed is almost entirely in
        // ONE direction (forward), so the camera just kept trailing
        // farther and farther behind along that one axis the faster you
        // flew. Fix for planes only: the forward/back distance is no
        // longer lagged at all (it's recomputed fresh from the plane's
        // REAL current position every frame, so it can never fall behind
        // no matter the speed). Delay is still applied, but split onto the
        // two axes where it actually reads as "floaty" instead of "stuck
        // behind": left/right (via the existing heading smoothing — bank
        // into a turn and the camera swings wide before catching up) and
        // up/down (via a dedicated altitude smoother — climb or dive and
        // the camera eases to the new height instead of snapping).

        const dims   = VEHICLE_DIMS[state.vehicle] || VEHICLE_DIMS.car;
        const zoom   = settings.thirdPersonZoom || 1.0;
        const back   = Math.max(9,   dims.length * 1.6) / zoom;
        const up     = Math.max(3.5, dims.length * 0.45) / zoom;

        // How quickly the smoothed heading/height chase the vehicle. Lower =
        // more lag (dreamier); higher = snappier. dt-scaled so frame-rate
        // changes don't affect the feel. settings.cameraFollowDelay
        // (Settings → Camera Mode slider) divides the base rate: 1.0 = the
        // original feel, >1 stretches it out (more lag/delay), <1 tightens
        // it up (snappier, closer to instant).
        //
        // What Camera Follow Delay touches, and what it never touches:
        //   • Transverse  (left/right) position  → DELAYED, via camSmoothHeading.
        //   • Longitudinal (up/down) position     → DELAYED, via camSmoothHeight
        //     (plane only — see below).
        //   • Sagittal (forward/back) position    → NEVER delayed. `back`/`up`
        //     just below are fixed constants (vehicle size × zoom only — no
        //     speed term), and the chase offset is rebuilt from the vehicle's
        //     REAL current lng/lat every frame, so the camera's distance from
        //     the vehicle can never drift, zoom with speed, or grow/shrink.
        //   • Camera ROTATION (look direction + up/roll vector) → NEVER
        //     delayed, for any vehicle. The camera always aims at the
        //     vehicle's real, current position, and (for the plane) its up
        //     vector always reflects the plane's real, current pitch/roll —
        //     computed further down straight from `flight.pitch`/`flight.roll`,
        //     completely independent of every spring constant in this block.
        const followDelay   = Math.max(0.2, settings.cameraFollowDelay || 1.0);
        const headingAlpha  = 1.0 - Math.exp(-(6 / followDelay) * dt);   // transverse (left/right) spring

        // ── Smooth the heading (shared by both branches below) ────────────
        const targetHeading = Cesium.Math.toRadians(state.heading);
        if (camSmoothHeading === null) {
            camSmoothHeading = targetHeading;
        } else {
            // Wrap-around-safe shortest-arc lerp
            let diff = targetHeading - camSmoothHeading;
            while (diff >  Math.PI) diff -= 2 * Math.PI;
            while (diff < -Math.PI) diff += 2 * Math.PI;
            camSmoothHeading += diff * headingAlpha;
        }

        let camPos;

        if (isPlane) {
            // ── Plane: positional inertia ONLY — altitude (longitudinal) +
            // heading-driven lateral sweep (transverse). No pitch/roll lag:
            // the offset frame below is built level (pitch=0, roll=0), so
            // banking/pitching the aircraft can never bleed into the chase
            // distance (sagittal axis) or act as a hidden second source of
            // camera rotation. Camera rotation itself — including the bank
            // of the horizon — is computed separately, further down, from
            // the aircraft's REAL-TIME attitude with zero delay.
            const heightAlpha = 1.0 - Math.exp(-(8 / followDelay) * dt);  // longitudinal (altitude) spring

            // ── Altitude lag (longitudinal axis) ──────────────────────────
            if (camSmoothHeight === null) {
                camSmoothHeight = anchorHeight;
            } else {
                camSmoothHeight += (anchorHeight - camSmoothHeight) * heightAlpha;
            }

            // ── Camera POSITION ────────────────────────────────────────────
            // Local frame at the aircraft's REAL lat/lng but LAGGED altitude,
            // oriented by the LAGGED heading only (pitch/roll fixed at 0) so
            // the fixed-length (0, -back, up) offset eases vertically and
            // sweeps left/right with inertia, while its length — and so the
            // camera's distance from the aircraft — never changes and is
            // never affected by the aircraft's attitude.
            const camAnchorPos    = Cesium.Cartesian3.fromDegrees(state.lng, state.lat, camSmoothHeight);
            const smoothHpr       = new Cesium.HeadingPitchRoll(camSmoothHeading, 0, 0);
            const smoothTransform = Cesium.Transforms.headingPitchRollToFixedFrame(camAnchorPos, smoothHpr);
            camPos = Cesium.Matrix4.multiplyByPoint(
                smoothTransform,
                new Cesium.Cartesian3(0, -back, up),
                new Cesium.Cartesian3()
            );
            camSmoothPos = camPos; // kept in sync in case mode/vehicle is switched mid-flight
        } else {
            // ── Cars/buses: split-axis spring ────────────────────────────
            // Two independent smoothers, one per axis:
            //   • Longitudinal (forward/back):  smooth the vehicle's lat/lng so
            //     moving forward creates a clear trailing lag.  When the vehicle
            //     is stationary, no position lag at all — the camera just sits at
            //     the smoothed heading offset.
            //   • Transverse (turns/left/right): the heading is already smoothed
            //     above (camSmoothHeading).  Building the offset from that lagged
            //     heading makes the camera swing wide on turns and catch up
            //     gradually, exactly as it does for the plane's lateral sweep.
            // No additional Cartesian 3-D position lerp is required.  Each axis
            // is owned by its own spring constant, which is what lets Camera
            // Follow Delay feel equally effective whether you're going straight
            // or turning hard.
            const posAlpha = 1.0 - Math.exp(-(8 / followDelay) * dt);

            if (camSmoothLat === null) {
                camSmoothLat = state.lat;
                camSmoothLng = state.lng;
            } else {
                camSmoothLat += (state.lat - camSmoothLat) * posAlpha;
                camSmoothLng += (state.lng - camSmoothLng) * posAlpha;
            }

            const smoothVehiclePos = Cesium.Cartesian3.fromDegrees(camSmoothLng, camSmoothLat, groundHeight);
            const smoothHpr        = new Cesium.HeadingPitchRoll(camSmoothHeading, 0, 0);
            const smoothTransform  = Cesium.Transforms.headingPitchRollToFixedFrame(smoothVehiclePos, smoothHpr);
            camPos = Cesium.Matrix4.multiplyByPoint(
                smoothTransform,
                new Cesium.Cartesian3(0, -back, up),
                new Cesium.Cartesian3()
            );
            camSmoothPos = camPos;
        }

        // ── Point camera from its position toward the vehicle ─────────────
        // Use setView so we control position + direction explicitly.
        cesiumViewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

        // World "up" at the vehicle's location (baseline, used for ground vehicles).
        const enuUp = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(vehiclePosition, new Cesium.Cartesian3());

        // Base look direction: from camera position toward the vehicle.
        const dir = Cesium.Cartesian3.subtract(vehiclePosition, camPos, new Cesium.Cartesian3());
        Cesium.Cartesian3.normalize(dir, dir);

        // ── Horizon blend (Settings slider) ───────────────────────────────
        // Smoothly shifts the look target from the vehicle (blend = 0, default)
        // toward the horizon (blend = 1).  At 1.0 the camera looks straight ahead
        // in the vehicle's heading direction — level with the camera's own height —
        // giving a cinematic, forward-looking feel instead of always gazing down
        // at the vehicle.  Intermediate values blend the two directions.
        if (settings.cameraLookBlend > 0) {
            const hRad     = Cesium.Math.toRadians(state.heading);
            // ENU forward for the vehicle's current heading; Z = 0 keeps it level
            const localFwd = new Cesium.Cartesian3(Math.sin(hRad), Math.cos(hRad), 0);
            const enuFrame = Cesium.Transforms.eastNorthUpToFixedFrame(camPos);
            const worldFwd = Cesium.Matrix4.multiplyByPointAsVector(
                enuFrame, localFwd, new Cesium.Cartesian3()
            );
            Cesium.Cartesian3.normalize(worldFwd, worldFwd);
            Cesium.Cartesian3.lerp(dir, worldFwd, settings.cameraLookBlend, dir);
            Cesium.Cartesian3.normalize(dir, dir);
        }

        // ── Camera up vector ──────────────────────────────────────────────
        // For the plane in 3rd person, tilt the camera's up-vector by the
        // aircraft's REAL, CURRENT pitch/roll — never lagged — so the
        // horizon banks in perfect lockstep with the aircraft. Camera Follow
        // Delay only ever moves the camera's POSITION (above); rotation is
        // always instantaneous. We re-use the vehicleHpr axis-swap convention
        // (pitch↔roll slot swap, roll negated) because we want the "local Z"
        // extracted from this transform to match the visual model's actual up axis.
        //
        // When cameraRotatesWithPlane is OFF the up vector stays world-level
        // (enuUp) so the horizon never tilts — useful if you prefer a steady
        // reference frame while the aircraft banks.
        let cameraUp = enuUp;
        if (isPlane && settings.cameraRotatesWithPlane) {
            const realHpr = new Cesium.HeadingPitchRoll(
                Cesium.Math.toRadians(state.heading),
                -flight.roll,   // HPR "pitch" slot ← -roll  (vehicleHpr convention)
                 flight.pitch   // HPR "roll"  slot ←  pitch
            );
            const realT  = Cesium.Transforms.headingPitchRollToFixedFrame(vehiclePosition, realHpr);
            const realUp = Cesium.Matrix4.multiplyByPointAsVector(
                realT, new Cesium.Cartesian3(0, 0, 1), new Cesium.Cartesian3()
            );
            Cesium.Cartesian3.normalize(realUp, realUp);
            cameraUp = realUp;
        }

        cesiumViewer.camera.setView({
            destination: camPos,
            orientation: { direction: dir, up: cameraUp }
        });

    } else {
        // ── First-person ─────────────────────────────────────────────────
        // Defensively reset any lingering lookAtTransform reference frame
        // from third-person mode EVERY frame (cheap, and a stale transform
        // here would silently make setView's destination/orientation wrong).
        cesiumViewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        cesiumViewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(state.lng, state.lat, eyeHeight),
            orientation: {
                heading: Cesium.Math.toRadians(state.heading),
                pitch:   Cesium.Math.toRadians(camPitchDeg),
                roll:    camRoll
            }
        });
    }
}

// ==========================================
// 7b. PHYSICS & RENDERING LOOP
// ==========================================
let lastTime = performance.now();

function update() {
    let now = performance.now();
    let dt  = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    // ── Physics ───────────────────────────────────────────────────────────
    if (state.vehicle === 'plane') {
        updateFlight(dt);
    } else {
        const accel = 15, brake = 25, fric = 4,
              maxSpeed = state.vehicle === 'car' ? 130 : 80;

        if (keys.w) state.speed += accel * dt;
        else if (keys.s) state.speed -= brake * dt;
        else {
            if(Math.abs(state.speed) < fric * dt) state.speed = 0;
            else state.speed -= Math.sign(state.speed) * fric * dt;
        }
        state.speed = Math.max(-30, Math.min(state.speed, maxSpeed));

        let turnInput = (settings.steeringMode === 'arrows')
            ? (keys.a ? -1 : keys.d ? 1 : 0)
            : groundJoyX;

        if(Math.abs(state.speed) > 0.5) {
            let baseTurnRate = state.vehicle === 'car' ? 120 : 60;
            state.heading += baseTurnRate * turnInput * settings.steeringSensitivity * dt * Math.sign(state.speed);
        }

        let oldLat = state.lat, oldLng = state.lng;
        let hdgRad = state.heading * Math.PI / 180;
        state.lat += (state.speed * Math.cos(hdgRad)) / 111320 * dt;
        state.lng += (state.speed * Math.sin(hdgRad)) / (111320 * Math.cos(state.lat * Math.PI / 180)) * dt;

        if(checkCollision()) {
            state.lat = oldLat; state.lng = oldLng;
            state.speed = -state.speed * 0.4;
        }
        state.heading = (state.heading + 360) % 360;
    }

    // ── Smooth camera heading ─────────────────────────────────────────────
    let diff = (state.heading - camHeading + 180) % 360 - 180;
    camHeading += diff * 5 * dt;

    // ── Leaflet map translation — only needed for the CSS/2D visual layer.
    // In Cesium 3D mode that layer is fully hidden, so writing its transform
    // every frame is wasted work (and was the "2D canvas" still nagging at
    // the GPU on mobile). We still keep `map` itself alive and recentered
    // (needed for collision/GPS distance math), just skip the visual part.
    if (settings.renderMode !== '3D') {
        let pBase = map.latLngToLayerPoint([baseLat, baseLng]);
        let pCam  = map.latLngToLayerPoint([state.lat, state.lng]);
        let dx = pCam.x - pBase.x;
        let dy = pCam.y - pBase.y;

        if(Math.abs(dx) > 500 || Math.abs(dy) > 500) {
            baseLat = state.lat; baseLng = state.lng;
            map.setView([baseLat, baseLng], settings.mapZoom, {animate: false});
            dx = 0; dy = 0;
            if(settings.collision) fetchRoads();
        }

        let mapRot = state.headUp ? -camHeading : 0;
        dom.mapSubpixel.style.transform  = `translate3d(${-dx}px, ${-dy}px, 0)`;
        dom.mapRotator.style.transform   = `rotate(${mapRot}deg)`;
    } else if (Math.abs(state.lat - baseLat) > 0.01 || Math.abs(state.lng - baseLng) > 0.01) {
        // Still recenter Leaflet's internal projection occasionally in 3D
        // mode (cheap, no transform write) so collision/GPS math and a
        // future switch back to CSS/2D mode don't inherit a stale base.
        baseLat = state.lat; baseLng = state.lng;
        map.setView([baseLat, baseLng], settings.mapZoom, {animate: false});
        if(settings.collision) fetchRoads();
    }

    // ── Render mode: Cesium (first-person — no vehicle sprite to draw) ─────
    if (settings.renderMode === '3D' && cesiumViewer) {
        updateCesiumCamera(dt);

    } else {
        // ── Render mode: CSS perspective or 2D ───────────────────────────
        dom.cameraPerspective.style.transform = `scale(${settings.cameraZoom})`;

        // ─── ROLL FIX (CSS mode) ─────────────────────────────────────────
        // Apply flight.roll as rotateZ on the camera-tilt element every frame.
        //
        // Sign convention:
        //   flight.roll > 0 → banking right → right wing down, left wing up
        //   The horizon should tilt so the right side is lower → the world
        //   rotates counter-clockwise from the viewer → CSS rotateZ(negative).
        //
        // This was the original bug: rotateZ was never written in the render
        // loop (only rotateX was set in updateCameraTilt on slider change).
        const rollDeg = state.vehicle === 'plane'
            ? -(flight.roll * 180 / Math.PI)   // negative: right-bank → CCW world tilt
            : 0;
        const tiltVal = settings.renderMode === 'CSS' ? settings.tilt : 0;

        // Single property assignment keeps GPU compositing layer stable
        dom.cameraTilt.style.transform =
            `rotateX(${tiltVal}deg) rotateZ(${rollDeg}deg)`;
        // ─────────────────────────────────────────────────────────────────

        let vRot       = state.headUp ? (state.heading - camHeading) : state.heading;
        let visualScale = settings.vehicleScale * (state.vehicle === 'plane' ? (1 + flight.alt / 3000) : 1);
        dom.graphic.style.transform =
            `translate(-50%, -50%) rotate(${vRot}deg) scale(${visualScale})`;
    }

    // ── HUD ───────────────────────────────────────────────────────────────
    let dSpeed = state.speedUnit === 'KPH'   ? state.speed :
                 state.speedUnit === 'MPH'   ? state.speed * 0.6213 :
                                               state.speed * 0.5399;
    dom.speedVal.innerText  = Math.round(Math.abs(dSpeed)).toString().padStart(3, '0');
    dom.coordInfo.innerText = `Lat: ${state.lat.toFixed(5)}\nLng: ${state.lng.toFixed(5)}`;

    if (state.vehicle === 'plane') {
        dom.altInfo.innerText =
            `ALT: ${Math.round(flight.alt)} ft | V/S: ${Math.round(flight.verticalSpeed)} fpm | ` +
            `PWR: ${Math.round(flight.throttle)}% | ROLL: ${(flight.roll * 180/Math.PI).toFixed(1)}°`;

        // TakeOff button: visible only in Cesium 3D mode, plane on ground
        // (alt ≤ 25 ft) and ground speed ≥ 100 knots (185.2 KPH)
        const speedKnots = state.speed * 0.5399;
        const onGround   = flight.alt <= 25;
        const showTakeoff = settings.renderMode === '3D' && onGround && speedKnots >= 100;
        document.getElementById('btn-takeoff').style.display = showTakeoff ? 'block' : 'none';
    } else {
        document.getElementById('btn-takeoff').style.display = 'none';
    }

    if (state.destLat !== null) {
        dom.gpsDist.innerText = getDistance(state.lat, state.lng, state.destLat, state.destLng).toFixed(2) + ' km';
        let arrowRot = state.headUp
            ? (getBearing(state.lat, state.lng, state.destLat, state.destLng) - camHeading)
            :  getBearing(state.lat, state.lng, state.destLat, state.destLng);
        dom.gpsArrow.style.transform = `rotate(${arrowRot}deg)`;
    }

    // ── GPS Mini-Map (throttled internally to ~10fps) ─────────────────────
    updateNavMap();

    // ── Cinematic shader FPS watchdog (throttled internally to 1fps) ──────
    _cinematicFpsTick();

    // ── Cinematic cloud field — re-centers on the vehicle as it travels
    // (throttled to ~1/sec; the work itself is just a distance check
    // unless a re-spawn is actually due) ───────────────────────────────────
    if (settings.cinematicShaders) {
        if (now - _cloudsLastCheckMs > 1000) {
            _cloudsLastCheckMs = now;
            _updateCinematicClouds(false);
        }
    }

    requestAnimationFrame(update);
}

// ==========================================
// 8. CINEMATIC SHADER SYSTEM
// ==========================================
//
// Adds an optional cinematic rendering pipeline on top of Cesium:
//   • Golden-hour directional lighting (warm, low-angle sun)
//   • Atmospheric haze (fog + aerial perspective)
//   • Sky atmosphere color shifts (warm sunset tones)
//   • Terrain shading / ambient occlusion
//   • Custom GLSL color grading (ACES tone map + saturation + contrast + vignette)
//   • Subtle bloom on bright highlights
//   • A scattered layer of warm/cool-tinted cloud billboards near the horizon
//   • Physically-shaded vehicle box models (lit instead of flat)
//   • CSS film-grade filter for CSS/2D modes
//   • FPS watchdog that auto-disables expensive stages if < 25 fps

let _cinematicDefaultsSaved = false;    // only save once — on first enable
let _cinematicColorGradeStage = null;   // PostProcessStage reference

// ── Cloud billboard layer state ──────────────────────────────────────────
let _cinematicCloudBillboards = null;   // Cesium.BillboardCollection
let _cinematicCloudTexture    = null;   // shared canvas data-URL, built once
let _cinematicCloudCenterLat  = null;
let _cinematicCloudCenterLng  = null;
let _cloudsLastCheckMs        = 0;

// ── Mobile detection — used to auto-cap quality ──────────────────────────
const _cinematicIsMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)
    || (navigator.maxTouchPoints > 1 && window.innerWidth < 900);

// ── Snapshot of Cesium scene properties before any cinematic changes ──────
const _cesiumBase = {
    fogEnabled: false, fogDensity: 2e-4, fogSSEFactor: 2.0,
    skyHue: 0, skySat: 0, skyBright: 0,
    globeLighting: false,
    globeHue: 0, globeSat: 0, globeBright: 0, globeLightInt: 10
};

function _saveCesiumBase() {
    if (!cesiumViewer || _cinematicDefaultsSaved) return;
    const sc = cesiumViewer.scene;
    _cesiumBase.fogEnabled   = sc.fog.enabled;
    _cesiumBase.fogDensity   = sc.fog.density;
    _cesiumBase.fogSSEFactor = sc.fog.screenSpaceErrorFactor;
    _cesiumBase.skyHue       = sc.skyAtmosphere.hueShift;
    _cesiumBase.skySat       = sc.skyAtmosphere.saturationShift;
    _cesiumBase.skyBright    = sc.skyAtmosphere.brightnessShift;
    _cesiumBase.globeLighting= sc.globe.enableLighting;
    _cesiumBase.globeHue     = sc.globe.atmosphereHueShift;
    _cesiumBase.globeSat     = sc.globe.atmosphereSaturationShift;
    _cesiumBase.globeBright  = sc.globe.atmosphereBrightnessShift;
    try { _cesiumBase.globeLightInt = sc.globe.atmosphereLightIntensity; } catch(e) {}
    _cinematicDefaultsSaved = true;
}

// ── Remove the custom GLSL color-grade stage ─────────────────────────────
function _removeCinematicColorGrade() {
    if (!cesiumViewer) { _cinematicColorGradeStage = null; return; }
    const stages = cesiumViewer.scene.postProcessStages;

    if (_cinematicColorGradeStage) {
        try { stages.remove(_cinematicColorGradeStage); } catch(e) {}
        _cinematicColorGradeStage = null;
    }

    // Defensive sweep: remove ANY stage left over under this name, in case
    // the tracked reference above ever went stale (e.g. across a scene
    // rebuild) while the actual stage stayed in the collection. Without
    // this, a leftover stage from an earlier toggle cycle could keep
    // running underneath a freshly-added one — two colour-grade passes
    // stacked on the same frame, which is exactly the kind of compounding
    // that turns a warm tint into a blown-out, clipped mess.
    try {
        for (let i = stages.length - 1; i >= 0; i--) {
            const s = stages.get(i);
            if (s && s.name === 'cinematic_color_grade') stages.remove(s);
        }
    } catch(e) {}
}

// ── Add custom GLSL color grading post-process stage ─────────────────────
// Uses WebGL2 GLSL (Cesium 1.117): in/out declarations, no gl_ prefix.
// Pipeline:
//   1. ACES cinematic tone mapping (filmic response curve)
//   2. Saturation boost for more vivid colours
//   3. Soft S-curve contrast enhancement
//   4. Warm golden-hour tint (red+, blue-)
//   5. Subtle vignette
function _addCinematicColorGrade() {
    if (!cesiumViewer) return;
    _removeCinematicColorGrade();
    const effectiveQ = _cinematicIsMobile ? 'low' : settings.shaderQuality;
    if (effectiveQ === 'low') return;   // skip on low quality / mobile

    const frag = `
        uniform sampler2D colorTexture;
        in  vec2 v_textureCoordinates;
        out vec4 fragColor;

        // ACES filmic tone mapping approximation (Narkowicz 2015)
        vec3 aces(vec3 x) {
            const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
            return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
        }

        void main() {
            vec4  src = texture(colorTexture, v_textureCoordinates);
            vec3  col = src.rgb;

            // 1. ACES tone map — colorTexture is ALREADY a tone-mapped SDR
            //    frame, so this is a gentle filmic roll-off on top of it,
            //    not a true HDR->SDR pass. Pushing the pre-multiplier much
            //    above ~1.0 here is what was driving mid-tones straight to
            //    white/yellow before they even reached the later stages.
            col = aces(col * 0.92);

            // 2. Saturation boost — stretch chroma away from luma axis.
            //    Kept modest: a strong boost here compounds with the warm
            //    tint below and clips skin/terrain tones to pure colour.
            float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
            col = mix(vec3(luma), col, 1.12);

            // 3. Smooth S-curve contrast (smoothstep-based) — reduced mix
            //    so shadows don't collapse to black and highlights don't
            //    clip to white before the vignette is even applied.
            vec3 sc = col * col * (3.0 - 2.0 * col);
            col = mix(col, sc, 0.20);

            // 4. Golden-hour warm tint — subtler push, no channel left at
            //    +7%/-7% which was adding to the overall over-exposure.
            col.r = min(col.r * 1.04, 1.0);
            col.g = min(col.g * 1.00, 1.0);
            col.b = col.b * 0.96;

            // 5. Vignette — gentle, only noticeable at edges
            vec2 uv  = v_textureCoordinates;
            vec2 off = (uv - 0.5) * 1.6;
            float vig = 1.0 - clamp(dot(off, off), 0.0, 1.0) * 0.32;
            col *= vig;

            fragColor = vec4(col, src.a);
        }
    `;

    try {
        _cinematicColorGradeStage = cesiumViewer.scene.postProcessStages.add(
            new Cesium.PostProcessStage({
                name: 'cinematic_color_grade',
                fragmentShader: frag
            })
        );
    } catch (e) {
        console.warn('Cinematic: GLSL color grade stage failed to compile:', e);
        _cinematicColorGradeStage = null;
    }
}

// ── Force every post-FX stage back to a known-off state ──────────────────
// Called at the START of every _applyCinematicCesium() run (not just on the
// OFF path). Without this, re-enabling cinematic mode just layered new
// settings on top of whatever state the FPS watchdog (or a previous toggle)
// had left bloom/AO/the color-grade stage in — which is what made the 2nd
// or 3rd toggle look dramatically more "blown out" than the first: bloom
// could already be enabled with stale uniforms, or two cycles could leave
// the tracked color-grade reference out of sync with what's actually in the
// postProcessStages collection. Resetting to a clean baseline every single
// apply makes the effect deterministic no matter how many times it's
// toggled.
function _resetCinematicPostFX() {
    if (!cesiumViewer) return;
    const sc = cesiumViewer.scene;
    if (sc.postProcessStages.bloom) sc.postProcessStages.bloom.enabled = false;
    if (sc.postProcessStages.ambientOcclusion) sc.postProcessStages.ambientOcclusion.enabled = false;
    _removeCinematicColorGrade();
}

// ── Apply all Cesium-side cinematic effects ───────────────────────────────
function _applyCinematicCesium() {
    if (!cesiumViewer) return;
    _resetCinematicPostFX();   // always start from a clean, known state
    const sc      = cesiumViewer.scene;
    const haze    = settings.atmosphericHaze;
    const contrast= settings.terrainContrast;
    const quality = _cinematicIsMobile ? 'low' : settings.shaderQuality;

    // ── Atmospheric fog / haze ────────────────────────────────────────────
    sc.fog.enabled              = true;
    sc.fog.density              = 2e-5 + haze * 1.6e-4;
    sc.fog.screenSpaceErrorFactor = quality === 'low' ? 8 : quality === 'medium' ? 4 : 2;

    // ── Sky atmosphere — sunset/golden-hour colour shifts ─────────────────
    // Brightness shift flipped negative: the old +0.18 was pushing the
    // WHOLE sky dome brighter, which is what turned the horizon glow into
    // a big clipped-white hole instead of a soft orange gradient, and kept
    // the zenith from ever reading as a deep blue. Saturation now does the
    // work of making the warm/cool ends of the gradient pop instead of
    // brightness.
    sc.skyAtmosphere.show          = true;
    sc.skyAtmosphere.hueShift       = -0.10;   // red-orange cast at the horizon
    sc.skyAtmosphere.saturationShift =  0.30;
    sc.skyAtmosphere.brightnessShift = -0.12;

    // ── Globe / terrain atmosphere ─────────────────────────────────────────
    // atmosphereLightIntensity is the big one: at the old 8–26 range it
    // single-handedly blew the ground near the horizon out to solid white
    // and washed the whole visible terrain in an orange tint ("orange
    // floor"). Pulled way down so terrain stays dark/shadowed and only the
    // immediate horizon band picks up colour.
    sc.globe.enableLighting              = true;
    sc.globe.atmosphereHueShift          = -0.06;
    sc.globe.atmosphereSaturationShift   =  0.08 + contrast * 0.14;
    sc.globe.atmosphereBrightnessShift   = -0.05;
    try { sc.globe.atmosphereLightIntensity = 1.5 + contrast * 1.8; } catch(e) {}

    // ── Directional light — low-angle golden-hour sun ─────────────────────
    // direction = FROM-sun (negated sun position vector). Low elevation,
    // coming from south-west → long shadows, warm raking light on terrain.
    // Intensity pulled down further (3.2 → 1.1): Cesium's own default
    // SunLight intensity is ~2.0, so even the previous 1.5 left the ground
    // brighter than the "more darkness" look the reference photo has —
    // the terrain there is mostly in shadow, with colour reserved for the
    // sky and horizon, not the ground itself.
    try {
        sc.light = new Cesium.DirectionalLight({
            direction: Cesium.Cartesian3.normalize(
                new Cesium.Cartesian3(0.40, 0.72, -0.38),
                new Cesium.Cartesian3()
            ),
            color:     new Cesium.Color(1.0, 0.82, 0.58, 1.0),   // warm amber-gold
            intensity: 1.1
        });
    } catch(e) {
        console.warn('Cinematic: DirectionalLight unavailable, using SunLight:', e);
    }

    // ── Built-in bloom ────────────────────────────────────────────────────
    // Tightened so glow stays close to genuinely bright pixels (the sun
    // itself) instead of spreading across the whole horizon band into a
    // big white blob that reads as a second light source.
    const bloom = sc.postProcessStages.bloom;
    if (bloom) {
        bloom.enabled = true;
        if (bloom.uniforms) {
            bloom.uniforms.glowOnly   = false;
            bloom.uniforms.contrast   = 128;
            bloom.uniforms.brightness = -0.05;
            bloom.uniforms.delta      = 1.0;
            bloom.uniforms.sigma      = 1.6;
            bloom.uniforms.stepSize   = 0.2 + settings.bloomIntensity * 0.35;
        }
    }

    // ── Ambient occlusion (Medium / High only) ────────────────────────────
    const ao = sc.postProcessStages.ambientOcclusion;
    if (ao && quality !== 'low') {
        ao.enabled = true;
        if (ao.uniforms) {
            ao.uniforms.intensity     = 3.0;
            ao.uniforms.bias          = 0.1;
            ao.uniforms.lengthCap     = 0.26;
            ao.uniforms.stepSize      = 1.95;
            ao.uniforms.frustumLength = 1e6;
        }
    }

    // ── Custom GLSL color grading (Medium / High only) ────────────────────
    _addCinematicColorGrade();

    // ── Scattered cloud layer — quality-independent (billboards are cheap,
    // unlike AO/colour-grade) so it still shows up on Low, same as the rest
    // of the atmosphere. Spawns on first enable, then just re-centers as
    // the vehicle moves (see _updateCinematicClouds).
    _updateCinematicClouds(true);
}

// ── Restore Cesium to its pre-cinematic state ─────────────────────────────
function _restoreCesiumBase() {
    if (!cesiumViewer || !_cinematicDefaultsSaved) return;
    const sc = cesiumViewer.scene;

    sc.fog.enabled                    = _cesiumBase.fogEnabled;
    sc.fog.density                    = _cesiumBase.fogDensity;
    sc.fog.screenSpaceErrorFactor     = _cesiumBase.fogSSEFactor;
    sc.skyAtmosphere.hueShift         = _cesiumBase.skyHue;
    sc.skyAtmosphere.saturationShift  = _cesiumBase.skySat;
    sc.skyAtmosphere.brightnessShift  = _cesiumBase.skyBright;
    sc.globe.enableLighting           = _cesiumBase.globeLighting;
    sc.globe.atmosphereHueShift       = _cesiumBase.globeHue;
    sc.globe.atmosphereSaturationShift= _cesiumBase.globeSat;
    sc.globe.atmosphereBrightnessShift= _cesiumBase.globeBright;
    try { sc.globe.atmosphereLightIntensity = _cesiumBase.globeLightInt; } catch(e) {}

    // Restore default sun lighting
    try { sc.light = new Cesium.SunLight(); } catch(e) {}

    // Disable built-in bloom
    if (sc.postProcessStages.bloom) sc.postProcessStages.bloom.enabled = false;
    // Disable built-in AO
    if (sc.postProcessStages.ambientOcclusion) sc.postProcessStages.ambientOcclusion.enabled = false;

    _removeCinematicColorGrade();
    _removeCinematicClouds();
}

// ── Cinematic cloud layer ──────────────────────────────────────────────────
// CesiumJS's built-in CumulusCloud/CloudCollection only exposes a
// `brightness` knob (darker/grayer) — there's no per-cloud colour control
// in the open-source API, so it can't be tinted blue/orange like the
// reference photo. Instead we draw our own soft, wispy puff-cluster texture
// once on a <canvas> and place many tinted Billboard instances of it in
// real 3D world-space around the vehicle (NOT screen-space — screen-space
// "clouds" would visibly slide/rotate with the camera instead of staying
// fixed in the sky, which would look obviously wrong the moment you turn).
// Lower/closer clouds are tinted warm (catching the low sun, same as the
// underside of the clouds in the reference image); higher ones stay cool
// blue-violet, matching the sky behind them.

function _makeCloudTexture() {
    if (_cinematicCloudTexture) return _cinematicCloudTexture;
    const w = 256, h = 160;
    const cnv = document.createElement('canvas');
    cnv.width = w; cnv.height = h;
    const ctx = cnv.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';

    function puff(cx, cy, r) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0,    'rgba(255,255,255,0.95)');
        g.addColorStop(0.55, 'rgba(255,255,255,0.55)');
        g.addColorStop(1,    'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
    }

    // A loose horizontal cluster of overlapping soft puffs → one wispy
    // streak. White + alpha only; colour comes from each Billboard's own
    // `color` tint at placement time, so this single texture is reused for
    // every cloud regardless of its warm/cool tint.
    puff(60,  60, 34);
    puff(70,  92, 46);
    puff(112, 70, 58);
    puff(150, 86, 50);
    puff(186, 64, 40);
    puff(206, 96, 32);

    _cinematicCloudTexture = cnv.toDataURL('image/png');
    return _cinematicCloudTexture;
}

// Tiny seeded PRNG so the same map location always gets the same cloud
// layout instead of it re-rolling (and visibly jumping) every spawn.
function _cloudRng(seed) {
    let s = seed >>> 0;
    return function() {
        s = (s * 1664525 + 1013904223) >>> 0;
        return s / 4294967296;
    };
}

function _spawnCinematicClouds(centerLat, centerLng) {
    if (!cesiumViewer) return;
    if (!_cinematicCloudBillboards) {
        _cinematicCloudBillboards = cesiumViewer.scene.primitives.add(new Cesium.BillboardCollection());
    }
    _cinematicCloudBillboards.removeAll();

    const tex = _makeCloudTexture();
    const rng = _cloudRng((Math.floor(centerLat * 1e4) ^ Math.floor(centerLng * 1e4) ^ 0x9e3779b9) >>> 0);

    const CLOUD_COUNT = 16;
    for (let i = 0; i < CLOUD_COUNT; i++) {
        const angle    = rng() * Math.PI * 2;
        const dist     = 6000  + rng() * 16000;   // 6–22 km out — background, not overhead
        const altitude = 600   + rng() * 2800;    // 600–3400 m AGL
        const dLat = (Math.cos(angle) * dist) / 111320;
        const dLng = (Math.sin(angle) * dist) / (111320 * Math.cos(centerLat * Math.PI / 180));

        // 0 = lowest/closest cloud (warmest), 1 = highest (coolest) — same
        // warm-underside / cool-top split the reference photo's clouds show.
        const warmth = 1 - Math.min(altitude / 3400, 1);
        const r = (170 + warmth * 85)  / 255;
        const g = (180 + warmth * 35)  / 255;
        const b = (225 - warmth * 95)  / 255;
        const alpha = 0.40 + rng() * 0.22;

        _cinematicCloudBillboards.add({
            position: Cesium.Cartesian3.fromDegrees(centerLng + dLng, centerLat + dLat, altitude),
            image: tex,
            color: new Cesium.Color(r, g, b, alpha),
            scale: 1.3 + rng() * 1.9,
            sizeInMeters: false,
            disableDepthTestDistance: Number.POSITIVE_INFINITY,
            verticalOrigin: Cesium.VerticalOrigin.CENTER,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER
        });
    }

    _cinematicCloudCenterLat = centerLat;
    _cinematicCloudCenterLng = centerLng;
}

function _removeCinematicClouds() {
    if (_cinematicCloudBillboards) {
        try { _cinematicCloudBillboards.removeAll(); } catch(e) {}
        try { cesiumViewer.scene.primitives.remove(_cinematicCloudBillboards); } catch(e) {}
    }
    _cinematicCloudBillboards = null;
    _cinematicCloudCenterLat  = null;
    _cinematicCloudCenterLng  = null;
}

// Called once from _applyCinematicCesium() (force=true) and then once a
// second from the main update() loop while cinematic mode is on. Cheap: a
// single distance check unless the vehicle has actually travelled far
// enough that the existing cloud field would be left behind, in which case
// it re-spawns a fresh field centered on the new position.
function _updateCinematicClouds(force) {
    if (!settings.cinematicShaders || !cesiumViewer) return;
    if (force || _cinematicCloudCenterLat === null) {
        _spawnCinematicClouds(state.lat, state.lng);
        return;
    }
    if (getDistance(state.lat, state.lng, _cinematicCloudCenterLat, _cinematicCloudCenterLng) > 6) {
        _spawnCinematicClouds(state.lat, state.lng);
    }
}

// ── Rebuild vehicle box models with lit or flat appearance ────────────────
// Cinematic mode switches flat:true (no lighting) → flat:false (Phong/lit)
// so the simple box models respond to the cinematic directional light and
// look physically grounded rather than plain-coloured.
function _rebuildVehiclePrimitivesForCinematic(cinematic) {
    if (!cesiumViewer) return;

    // Remove ALL existing primitives from every vehicle type
    Object.values(vehiclePrimitives).forEach(parts => {
        parts.forEach(p => {
            try { cesiumViewer.scene.primitives.remove(p); } catch(e) {}
        });
        parts.length = 0;   // clear the array in-place (updateVehicleModels reads these)
    });

    // Rebuild with the correct appearance
    Object.keys(VEHICLE_MODEL_DEFS).forEach(type => {
        VEHICLE_MODEL_DEFS[type].forEach(part => {
            const color    = Cesium.Color.fromCssColorString(part.color);
            const instance = new Cesium.GeometryInstance({
                geometry: Cesium.BoxGeometry.fromDimensions({
                    vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,
                    dimensions:   new Cesium.Cartesian3(part.dim[0], part.dim[1], part.dim[2])
                }),
                attributes: {
                    color: Cesium.ColorGeometryInstanceAttribute.fromColor(color)
                }
            });
            const primitive = cesiumViewer.scene.primitives.add(new Cesium.Primitive({
                geometryInstances: instance,
                appearance: new Cesium.PerInstanceColorAppearance({
                    flat:   !cinematic,   // false = Phong-lit in cinematic mode
                    closed: true
                }),
                asynchronous: false
            }));
            primitive.show    = false;
            primitive._offset = new Cesium.Cartesian3(
                part.offset[0], part.offset[1], part.offset[2]
            );
            vehiclePrimitives[type].push(primitive);
        });
    });
}

// ── Master toggle — called by the Settings checkbox ──────────────────────
function toggleCinematicShaders(enabled) {
    settings.cinematicShaders = enabled;

    if (enabled) {
        // Save Cesium defaults only once so repeated on/off cycles restore
        // to the true original state, not the last cinematic state.
        if (cesiumViewer) _saveCesiumBase();
        _applyCinematicCesium();

        // CSS/2D mode: apply a warm film-grade CSS filter on the perspective layer
        document.getElementById('camera-perspective').style.filter =
            'saturate(1.30) contrast(1.12) sepia(0.10) brightness(1.03)';

        // Rebuild vehicle box models with lighting enabled
        _rebuildVehiclePrimitivesForCinematic(true);
    } else {
        _restoreCesiumBase();
        document.getElementById('camera-perspective').style.filter = '';

        // Restore flat (unlit) vehicle models
        _rebuildVehiclePrimitivesForCinematic(false);
    }

    // Show / hide the sub-controls in Settings
    const sub = document.getElementById('cinematic-sub-controls');
    if (sub) sub.style.display = enabled ? 'block' : 'none';
}

// ── Shader Quality buttons ────────────────────────────────────────────────
function updateShaderQuality(val) {
    settings.shaderQuality = val;
    ['low', 'medium', 'high'].forEach(q => {
        const btn = document.getElementById('sq-' + q);
        if (btn) btn.classList.toggle('active', q === val);
    });
    // Re-apply to pick up quality change immediately
    if (settings.cinematicShaders) {
        _removeCinematicColorGrade();    // may need to add/remove based on new quality
        _applyCinematicCesium();
    }
}

// ── Atmospheric Haze slider ───────────────────────────────────────────────
function updateAtmosphericHaze(val) {
    settings.atmosphericHaze = parseFloat(val);
    document.getElementById('val-atm-haze').innerText = parseFloat(val).toFixed(2);
    if (settings.cinematicShaders && cesiumViewer) {
        cesiumViewer.scene.fog.density = 2e-5 + settings.atmosphericHaze * 1.6e-4;
    }
}

// ── Bloom Intensity slider ────────────────────────────────────────────────
function updateBloomIntensity(val) {
    settings.bloomIntensity = parseFloat(val);
    document.getElementById('val-bloom').innerText = parseFloat(val).toFixed(2);
    if (settings.cinematicShaders && cesiumViewer) {
        const bloom = cesiumViewer.scene.postProcessStages.bloom;
        if (bloom && bloom.uniforms) {
            bloom.uniforms.stepSize = 0.2 + settings.bloomIntensity * 0.35;
        }
    }
}

// ── Terrain Contrast slider ───────────────────────────────────────────────
function updateTerrainContrast(val) {
    settings.terrainContrast = parseFloat(val);
    document.getElementById('val-terrain-contrast').innerText = parseFloat(val).toFixed(2);
    if (settings.cinematicShaders && cesiumViewer) {
        const sc = cesiumViewer.scene;
        sc.globe.atmosphereSaturationShift = 0.08 + settings.terrainContrast * 0.14;
        try { sc.globe.atmosphereLightIntensity = 1.5 + settings.terrainContrast * 1.8; } catch(e) {}
    }
}

// ── FPS watchdog — auto-disables expensive stages when FPS < 25 ──────────
// Called every frame from update(); the check itself is throttled to 1 Hz
// so it has zero per-frame overhead except a counter increment.
let _csFpsFrames = 0, _csFpsLastMs = 0;

function _cinematicFpsTick() {
    if (!settings.cinematicShaders) return;
    _csFpsFrames++;
    const now = performance.now();
    if (now - _csFpsLastMs < 1000) return;

    const fps = _csFpsFrames;
    _csFpsFrames   = 0;
    _csFpsLastMs   = now;

    if (!cesiumViewer || fps >= 25) return;

    // FPS too low — progressively disable expensive post-process stages
    const sc = cesiumViewer.scene;
    if (sc.postProcessStages.ambientOcclusion?.enabled) {
        sc.postProcessStages.ambientOcclusion.enabled = false;
        console.log(`%c🎬 Cinematic: AO auto-disabled (${fps} fps)`, 'color:#f97316;');
    }
    if (_cinematicColorGradeStage) {
        _removeCinematicColorGrade();
        console.log(`%c🎬 Cinematic: color grade auto-disabled (${fps} fps)`, 'color:#f97316;');
    }
    if (fps < 15 && sc.postProcessStages.bloom?.enabled) {
        sc.postProcessStages.bloom.enabled = false;
        console.log(`%c🎬 Cinematic: bloom auto-disabled (${fps} fps)`, 'color:#f97316;');
    }
}

// ==========================================
// BOOT
// ==========================================
initCesium();

// Default to Cesium 3D mode if Cesium loaded, otherwise CSS
if (cesiumViewer) {
    setRenderMode('3D');
} else {
    setRenderMode('CSS');
}

// GPS mini-map overlay — always-on second Leaflet instance.
// Initialised after setRenderMode so the overlay DOM is ready.
initNavMap();

requestAnimationFrame(update);
