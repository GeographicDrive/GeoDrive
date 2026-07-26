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
    car:    generateVehicleTexture('car'),
    bus:    generateVehicleTexture('bus'),
    plane:  generateVehicleTexture('plane')
};

// ==========================================
// 1b. API KEYS / CONFIG
// ==========================================
// No keys are hardcoded here. There are two sources for the Cesium Ion
// token, in priority order:
//   1. A token the person pasted into Settings — stored in this browser's
//      localStorage. Always wins if present.
//   2. A default project token exposed as window.__DEFAULT_CESIUM_TOKEN__,
//      which comes from config.js. That file is generated at deploy time
//      from the CESIUM_TOKEN GitHub secret (see .github/workflows/deploy.yml)
//      and is never committed to the repo — the copy of config.js checked
//      into git only ever has an empty default for local development.
const CONFIG_KEYS = {
    CESIUM_ION:      'biv_cesium_ion_token',
    CESIUM_CAM_MODE: 'biv_cesium_cam_mode'
};
const DEFAULT_CESIUM_ION_TOKEN = (typeof window !== 'undefined' && window.__DEFAULT_CESIUM_TOKEN__) || '';
const CONFIG = {
    CESIUM_ION:      localStorage.getItem(CONFIG_KEYS.CESIUM_ION)      || DEFAULT_CESIUM_ION_TOKEN,
    CESIUM_CAM_MODE: localStorage.getItem(CONFIG_KEYS.CESIUM_CAM_MODE) || 'first'
};

// ==========================================
// 2. STATE & SETTINGS
// ==========================================
let state = {
    lat: 33.942610, lng: -118.411112,
    speed: 0, heading: 90,
    vehicle: 'plane', speedUnit: 'KPH', headUp: false,
    destLat: null, destLng: null,
    originIcao: null, originHdg: null,
    destIcao: null, destHdg: null
};

const settings = {
    renderMode: '3D',   // '3D' = Cesium (real globe), 'CSS' = CSS perspective (chase cam), '2D' = flat
    cesiumCameraMode: CONFIG.CESIUM_CAM_MODE, // 'first' or 'third' — only meaningful while renderMode === '3D'
    tilt: 0,
    vehicleScale: 1.0, mapZoom: 18,
    planeHeightOffset: 0, // meters — manual visual nudge for aircraft model/camera height (fixes hitbox/offset mismatches)
    steeringMode: 'arrows', cameraZoom: 1.0,
    steeringSensitivity: 1.0,  // Car/bus steering sens — default 1.0
    fov: 120,            // degrees — applied to Cesium camera frustum in 3D mode
    thirdPersonZoom: 1.0, // default 1.0x
    cameraFollowDelay: 2.0,
    freeLookReturnDelay: 3.0, // seconds of no drag input before 3D free-look camera springs back to center; Infinity = never auto-resets
    osmBuildings: false,
    fullscreen: false,
    cameraLookBlend: 0.5,
    cameraRotatesWithPlane: false,  // Camera rolls off — default
    mapStyle: 'photoreal',
    flightSensitivity: 1.0,  // Control sens — default 1.0x. Calibrated so that
                              // full aileron deflection at 1.0x produces ~15°/s
                              // roll rate (measured at ~150 kt / 77 m/s, see
                              // the delta_a coefficient in updateFlight()).
    flightAcceleration: 1.0, // Acceleration — default 1.0x. Calibrated (with
                              // T_max below) so TOGA throttle at 1.0x reaches
                              // 180 kt in ~35 s from a standstill.
    invertPitch: false,        // Pitch invert toggle — joystick up = up (false) or down (true)
    occlusionCulling: true,   // Settings → Display — mirrors scene.globe.depthTestAgainstTerrain, and also drives GP3DT no-memory grid culling (see applyGP3DTGridCulling)
    nightTerrainBrightness: 18, // 0–100 — Settings → Display — how bright terrain/imagery/buildings look while Night mode is on

    // ── New tree (Ww.txt) — 3D Mode ─────────────────────────────────────
    resolutionScale: 1.0, flashlightSetting: false,
    objectCulling: true,
    skyAtmosphere: true, sceneFogDensity: 0, sunShow: true, moonShow: true,
    dayNightDropdown: 'day',
    imageryMapStyle: 'sat', imageryProvider: 'arcgis',
    gp3dtRenderDistance: 3000, // meters — Settings → GP3DT — beyond this camera altitude/distance GP3DT swaps for World Terrain + OSM Buildings (see applyGP3DTDistanceSwitch)
    rudderSensitivity: 1.0,

    // ── 2D Mode ──────────────────────────────────────────────────────────
    sceneMode2D: '2D', panSpeed: 1.0, rotateMap: false, zoomSensitivity: 1.0,

    // ── General ──────────────────────────────────────────────────────────
    language: 'en', theme: 'dark', autosave: true,
    fpsLimit: 60,
    textureQuality: 'medium',
    uiScale: 1.0, showFPS: false, showCoords: true, showCompass: true, showMinimap: true, notifications: true,
    debugMode: false, tileBounds: false, tileLoadingViz: false, streamingStats: false,
    gpuStats: false, memoryStats: false, devConsole: false
};

// keyBindings — action → physical key, used by isKeyDown() so Settings →
// General → Input → "Rebind Controls" can remap WASD without touching the
// arrow-key fallbacks (which stay fixed on purpose).
let keyBindings = { forward: 'w', back: 's', left: 'a', right: 'd' };
function isKeyDown(action) { return !!keys[keyBindings[action]]; }

// ── Flashlight (first-person only) ───────────────────────────────────────────
let flashlightOn = false;
let _flashlightLight = null; // Cesium.DirectionalLight, created lazily, reused every frame
let _flashlightPrevDynamicLighting = null; // saved scene.atmosphere.dynamicLighting, restored when flashlight turns off
let _flashlightPrevGlobeLightingFromSun = null; // saved scene.globe.dynamicAtmosphereLightingFromSun, restored when flashlight turns off

// ── Day / Night mode ────────────────────────────────────────────────────────
let isNightMode = false;
let _nightRunwayLights = [];   // Cesium entity handles for airport runway lights
let _planeNavLights    = [];   // Cesium entity handles for plane nav/strobe lights
let _nightLightTimer   = 0;    // accumulated seconds for strobe flash timing
let _cockpitLightSource = null; // Cesium PointLight for cockpit interior

// The OurAirports runway (from RunwayDB) the player actually spawned on/at,
// kept around so runway lights can be drawn on the REAL track instead of an
// approximation centered on the player's current position/heading. Cleared
// whenever the player returns to the spawn selector or spawns somewhere
// with no known runway (e.g. a free map click).
let _activeRunway = null; // { leLat, leLng, heLat, heLng, leElev, heElev, leHdg, heHdg, lengthFt, widthFt, leIdent, heIdent, icao }

/** Great-circle distance in meters between two lat/lng points (haversine). */
function _haversineMeters(lat1, lng1, lat2, lng2) {
    const R = 6371000;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(Math.min(1, a)));
}

/** Initial bearing in degrees (0-360, true north) from point 1 to point 2. */
function _bearingDegrees(lat1, lng1, lat2, lng2) {
    const toRad = d => d * Math.PI / 180, toDeg = r => r * 180 / Math.PI;
    const y = Math.sin(toRad(lng2 - lng1)) * Math.cos(toRad(lat2));
    const x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
              Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(toRad(lng2 - lng1));
    return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

// ── Spawn gate ───────────────────────────────────────────────────────────
// Kept for compatibility with the update() loop gate below (always false —
// the streaming/preload system has been removed).
let gamePreloading = false;

const VEHICLE_DIMS = {
    car:    { length: 4.5,  width: 2.0  },
    bus:    { length: 12.0, width: 2.5  },
    plane:  { length: 15.0, width: 12.0 }
};

// Which vehicles run the 6-DOF flight sim / airport spawn / airplane HUD
// path instead of the ground-vehicle physics path. Any future aircraft
// just gets added to this list.
function isPlaneType(v) { return v === 'plane'; }

// ── Spawn gate ─────────────────────────────────────────────────────────────
// Set to true only after the player confirms a spawn location.
// The update() loop checks this before processing any physics or controls.
let gameStarted = false;

// ==========================================
// COCKPIT FIRST-PERSON CAMERA SETTINGS
// All values persist to localStorage so the player's manual tuning
// survives page reloads.  The UI to adjust them is injected at boot
// by buildCockpitCamModal() further below.
//
// INDEPENDENT PER VEHICLE: each of 'car', 'bus', 'plane' gets its own
// full set of these six values. Adjusting/saving while in car mode
// only ever touches cockpitCam.car — it can no longer bleed into
// cockpitCam.plane (or vice-versa) the way a single shared object did
// before. Every place that reads/writes these values goes through
// cockpitCam[state.vehicle], so "the active vehicle's settings" is
// always just whichever one is currently selected.
//
// frontBack     — y offset in the vehicle local frame (metres forward)
// upDown        — z offset (metres up from the anchor)
// sidePosition  — x offset (metres; negative = left/captain seat)
// horizontalTurn — extra yaw  added on top of state.heading (degrees)
// verticalTurn   — extra pitch added on top of flight.pitch   (degrees)
// fovOffset      — degrees added on top of settings.fov
// ==========================================
const _cockpitDefaultsByVehicle = {
    // Plane: unchanged from before — these were already tuned to sit the
    // camera in the A320's captain seat.
    plane: {
        frontBack:      -2.50,
        upDown:           0.80,
        sidePosition:    -0.50,
        horizontalTurn:   0.0,
        verticalTurn:    -7.0,
        fovOffset:       10.0
    },
    // Car: upDown 1.3 matches the old hard-coded ground-vehicle eye
    // height for cars (see eyeHeight calc in updateCesiumCamera), so
    // first-person view looks exactly the same as before until you
    // actually open the adjuster and start tuning it for this vehicle.
    car: {
        frontBack:       0.0,
        upDown:           1.3,
        sidePosition:    -0.30,
        horizontalTurn:   0.0,
        verticalTurn:     0.0,
        fovOffset:        0.0
    },
    // Bus: same idea, upDown 2.4 matches the old hard-coded bus eye height.
    bus: {
        frontBack:       0.0,
        upDown:           2.4,
        sidePosition:    -0.30,
        horizontalTurn:   0.0,
        verticalTurn:     0.0,
        fovOffset:        0.0
    }
};
(function _loadCockpitSettings() {
    const saved = localStorage.getItem('biv_cockpit_cam');
    if (!saved) return;
    try {
        const parsed = JSON.parse(saved);
        if (parsed && (parsed.car || parsed.bus || parsed.plane)) {
            // New per-vehicle format — merge each vehicle's saved values
            // over its own defaults.
            ['car', 'bus', 'plane'].forEach(v => {
                if (parsed[v]) Object.assign(_cockpitDefaultsByVehicle[v], parsed[v]);
            });
        } else if (parsed && typeof parsed.frontBack === 'number') {
            // Old flat format (pre-independence) — that data was only ever
            // actually used for the plane, so migrate it there instead of
            // discarding it.
            Object.assign(_cockpitDefaultsByVehicle.plane, parsed);
        }
    } catch (e) {}
})();
const cockpitCam = {
    car:    Object.assign({}, _cockpitDefaultsByVehicle.car),
    bus:    Object.assign({}, _cockpitDefaultsByVehicle.bus),
    plane:  Object.assign({}, _cockpitDefaultsByVehicle.plane)
};
/** Always-current shorthand for "the active vehicle's cockpit cam settings". */
function activeCockpitCam() { return cockpitCam[state.vehicle] || cockpitCam.plane; }


// ==========================================
// GP3DT QUALITY & RENDERING SETTINGS
// Only active when photorealTileset exists (mapStyle === 'photoreal').
// ==========================================
const gp3dtSettings = {
    preset: 'ultra-low',
    maximumScreenSpaceError: 16,
    maximumMemoryUsage: 2048,
    dynamicScreenSpaceError: true,
    dynamicScreenSpaceErrorDensity: 0.00278,
    skipLevelOfDetail: true,
    baseScreenSpaceError: 1024,
    skipScreenSpaceErrorFactor: 16,
    skipLevels: 1,
    preloadFlightDestinations: true,
    preferLeaves: false,
    progressiveResolutionHeightFraction: 0.3,
    fogDensity: 0.0001,
    textureQuality: 1.0,
    geometricErrorTolerance: 1.0
};

const GP3DT_PRESETS = {
    'ultra-low': {
        name: 'Ultra Low',
        maximumScreenSpaceError: 64,
        maximumMemoryUsage: 512,
        dynamicScreenSpaceError: true,
        dynamicScreenSpaceErrorDensity: 0.01,
        skipLevelOfDetail: true,
        baseScreenSpaceError: 2048,
        skipScreenSpaceErrorFactor: 32,
        skipLevels: 2,
        preloadFlightDestinations: false,
        preferLeaves: true,
        progressiveResolutionHeightFraction: 0.1,
        fogDensity: 0.0005,
        textureQuality: 0.25,
        geometricErrorTolerance: 4.0
    },
    'normal': {
        name: 'Normal',
        maximumScreenSpaceError: 16,
        maximumMemoryUsage: 2048,
        dynamicScreenSpaceError: true,
        dynamicScreenSpaceErrorDensity: 0.00278,
        skipLevelOfDetail: true,
        baseScreenSpaceError: 1024,
        skipScreenSpaceErrorFactor: 16,
        skipLevels: 1,
        preloadFlightDestinations: true,
        preferLeaves: false,
        progressiveResolutionHeightFraction: 0.3,
        fogDensity: 0.0001,
        textureQuality: 1.0,
        geometricErrorTolerance: 1.0
    },
    'ultra-high': {
        name: 'Ultra High',
        maximumScreenSpaceError: 2,
        maximumMemoryUsage: 4096,
        dynamicScreenSpaceError: false,
        dynamicScreenSpaceErrorDensity: 0.001,
        skipLevelOfDetail: false,
        baseScreenSpaceError: 512,
        skipScreenSpaceErrorFactor: 8,
        skipLevels: 0,
        preloadFlightDestinations: true,
        preferLeaves: false,
        progressiveResolutionHeightFraction: 1.0,
        fogDensity: 0.0,
        textureQuality: 1.0,
        geometricErrorTolerance: 0.5
    }
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

// ── FREE-LOOK / ORBIT CAMERA ─────────────────────────────────────────────────
// Shared by first-person (head pan/tilt) and third-person (orbit around vehicle).
//
// First-person:  yaw/pitch are ADDED to the vehicle's own heading/pitch so you
//                can freely look anywhere — left, right, up, down, or diagonally.
//                No yaw limit (full 360° look-around is natural in cockpit).
//                Pitch clamped to ±85° so you can't flip upside-down.
//
// Third-person:  yaw/pitch rotate the camera around the vehicle like an orbit
//                rig.  The camera always looks AT the vehicle centre; there is
//                no continuous rotation — yaw/pitch are clamped so the camera
//                can swing ±150° left/right and +80°/–10° in elevation before
//                hitting a soft wall, never flying all the way around the vehicle.
//
// Auto-return:   after RETURN_DELAY seconds of no drag input, yaw and pitch
//                spring back to 0 with an exponential ease (feels like magnetic
//                centering rather than a snap).
const freeLook = {
    yaw:         0,       // degrees; +right swings camera right (both modes)
    pitch:       0,       // degrees; +up tilts camera up (both modes)
    idleTime:    0,       // seconds accumulated since the last drag input
    dragging:    false,
    lastX:       0,       // previous pointer clientX
    lastY:       0,       // previous pointer clientY
    // ── Tuning constants ──
    // RETURN_DELAY is a getter so it always reflects the live Settings → Camera
    // → "Free-Look Reset Delay" slider (settings.freeLookReturnDelay). Set to
    // Infinity via the slider's "Never" position to disable auto-recentering.
    get RETURN_DELAY() { return settings.freeLookReturnDelay; },
    RETURN_SPRING:  3.5,  // exponential return stiffness (higher = snappier)
    SENSITIVITY:    0.28, // degrees per CSS pixel of drag
    PITCH_1ST_MIN: -85,   // first-person vertical clamps
    PITCH_1ST_MAX:  85,
    PITCH_3RD_MIN: -10,   // third-person elevation clamps (–10° = slight below-vehicle peek)
    PITCH_3RD_MAX:  65,   // kept comfortably under 90° so baseElevation + pitch can never
                           // cross the pole (see _el3/_elG clamps below) — that crossing is
                           // what sent the camera rocketing straight up ("into space").
    YAW_3RD_LIMIT:  150,  // third-person azimuth limit (°) — stops short of front-facing
};

/**
 * initCesiumFreeLook — attaches pointer/touch drag listeners to the Cesium
 * canvas so the user can freely look around (1st person) or orbit (3rd person).
 * Must be called AFTER cesiumViewer has been created.
 */
function initCesiumFreeLook() {
    if (!cesiumViewer) return;
    const canvas = cesiumViewer.scene.canvas;

    function startDrag(clientX, clientY, target) {
        // Only capture drags that start ON the canvas, not on overlay buttons.
        if (target !== canvas) return;
        freeLook.dragging = true;
        freeLook.idleTime = 0;
        freeLook.lastX = clientX;
        freeLook.lastY = clientY;
    }

    function moveDrag(clientX, clientY) {
        if (!freeLook.dragging) return;
        const dx =  (clientX - freeLook.lastX) * freeLook.SENSITIVITY;
        const dy = -(clientY - freeLook.lastY) * freeLook.SENSITIVITY;  // invert Y: drag up = look up
        freeLook.lastX = clientX;
        freeLook.lastY = clientY;

        freeLook.yaw   += dx;
        freeLook.pitch += dy;

        // Apply mode-specific clamps
        if (settings.cesiumCameraMode === 'first') {
            freeLook.pitch = Math.max(freeLook.PITCH_1ST_MIN, Math.min(freeLook.PITCH_1ST_MAX, freeLook.pitch));
            // yaw is free in 1st person — no clamp, allow full look-around
        } else {
            freeLook.pitch = Math.max(freeLook.PITCH_3RD_MIN, Math.min(freeLook.PITCH_3RD_MAX, freeLook.pitch));
            freeLook.yaw   = Math.max(-freeLook.YAW_3RD_LIMIT, Math.min(freeLook.YAW_3RD_LIMIT, freeLook.yaw));
        }

        freeLook.idleTime = 0;  // reset return timer on every movement
    }

    function endDrag() {
        freeLook.dragging = false;
    }

    // ── Pointer events (unifies mouse + stylus + touch on modern browsers) ───
    canvas.addEventListener('pointerdown', e => {
        startDrag(e.clientX, e.clientY, e.target);
        e.preventDefault();
    }, { passive: false });

    window.addEventListener('pointermove', e => {
        if (!freeLook.dragging) return;
        moveDrag(e.clientX, e.clientY);
        e.preventDefault();
    }, { passive: false });

    window.addEventListener('pointerup',     endDrag);
    window.addEventListener('pointercancel', endDrag);

    console.log('%c👁️ Free-look / orbit camera ready', 'color:#22c55e;font-weight:bold');
}

// ==========================================
// HUD DOM update throttle — writing innerHTML/innerText every single frame
// triggers style recalculations and layout. Capped at 20fps (50ms intervals).
let _hudLastUpdateTime = 0;
const HUD_UPDATE_INTERVAL_MS = 50; // 20fps

const keys = { w:false, a:false, s:false, d:false };
window.addEventListener('keydown', e => { if(e.target.tagName !== 'INPUT') keys[e.key.toLowerCase()] = true; });
window.addEventListener('keyup',   e => { if(e.target.tagName !== 'INPUT') keys[e.key.toLowerCase()] = false; });
// 'I' key → toggle pitch invert (airplane only; harmless when driving)
window.addEventListener('keydown', e => {
    if (e.target.tagName !== 'INPUT' && e.key.toLowerCase() === 'i' && isPlaneType(state.vehicle)) {
        togglePitchInvert();
    }
});
// 'F' key → toggle flaps (airplane only)
window.addEventListener('keydown', e => {
    if (e.target.tagName !== 'INPUT' && e.key.toLowerCase() === 'f' && isPlaneType(state.vehicle) && !e.repeat) {
        flight.flapsDown = !flight.flapsDown;
        const btn = document.getElementById('btn-flight-flaps');
        if (btn) btn.classList.toggle('active', flight.flapsDown);
    }
});

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
let planeStraightLine = null;  // L.polyline used for straight-line GPS route in airplane mode
let baseLat = state.lat, baseLng = state.lng;
let camHeading = 0;

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

// ── Exit to Spawn Selector ────────────────────────────────────────────────────
function exitToSpawnSelector() {
    // Pause the game
    gameStarted = false;

    // Clear night-mode runway lights so they don't persist across sessions
    _clearNightRunwayLights();
    _activeRunway = null;

    // Show the spawn selector
    const selector = document.getElementById('spawn-selector-screen');
    selector.style.display = 'flex';
    selector.style.animation = 'spawn-fade-in 0.3s ease both';

    // Init map if needed
    SpawnMap.init(_onSpawnMapClick);
    SpawnMarkers.init(SpawnMap.instance(), _onAirportMarkerClick);
    setTimeout(() => SpawnMap.invalidate(), 50);
}

// ── Day / Night Mode ──────────────────────────────────────────────────────────
function toggleDayNight() {
    isNightMode = !isNightMode;
    const btn = document.getElementById('btn-day-night');
    if (btn) {
        btn.textContent = isNightMode ? '🌙 Night' : '☀️ Day';
        btn.style.background = isNightMode ? '#0f172a' : '#1e293b';
    }
    _applyDayNightMode();
}

/**
 * Dims (or restores) every imagery layer currently in the Cesium scene.
 * Needed because raster imagery layers (ArcGIS World Imagery used by the
 * Satellite/Hybrid map style) are NOT affected by scene.light/enableLighting
 * the way 3D geometry is — without this, night mode left the ground photo
 * showing at full daylight brightness ("still sunny").
 */
// Fixed (non-slider) dimming amount used for anything that ISN'T the GP3DT
// tileset — raster imagery (Satellite/Hybrid), the screen overlay, and the
// scene's ambient moonlight. These already look correct at night on their
// own (Flat mode, OSM Buildings) and must stay put regardless of the
// "Terrain Brightness at Night" slider, which is now GP3DT-only. Value
// matches the old default (settings.nightTerrainBrightness = 18) so the
// existing look for those modes is preserved exactly.
const NIGHT_FIXED_F = 0.18;

function _setNightImageryDimming(on) {
    if (!cesiumViewer) return;
    const layers = cesiumViewer.imageryLayers;
    const f = NIGHT_FIXED_F; // fixed — not driven by the GP3DT-only slider
    for (let i = 0; i < layers.length; i++) {
        const layer = layers.get(i);
        if (!layer) continue;
        layer.brightness = on ? Math.max(0.03, f) : 1.0;
        layer.contrast   = on ? 1.1  : 1.0;
        layer.gamma       = on ? (0.4 + f * 0.5) : 1.0;
    }
}

function _setNightScreenOverlay(on) {
    if (!cesiumViewer) return;
    const container = document.getElementById('cesium-container');
    if (!container) return;

    let overlay = document.getElementById('night-darken-overlay');
    if (on) {
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'night-darken-overlay';
            // Sits directly over the Cesium canvas only (container is the
            // positioned parent), not the rest of the page UI, so it
            // never blocks clicks on the HUD/buttons that live outside
            // this container.
            overlay.style.position = 'absolute';
            overlay.style.inset = '0';
            overlay.style.pointerEvents = 'none';
            overlay.style.zIndex = '1';
            overlay.style.transition = 'opacity 0.3s ease, background 0.3s ease';
            if (getComputedStyle(container).position === 'static') {
                container.style.position = 'relative';
            }
            container.appendChild(overlay);
        }
        // Fixed overlay strength (see NIGHT_FIXED_F) — the screen overlay
        // covers the whole canvas (Flat/OSM/Satellite included), so it must
        // NOT move with the GP3DT-only brightness slider anymore.
        const f = NIGHT_FIXED_F;
        const alpha = Math.max(0.05, 0.65 - f * 0.6);
        overlay.style.background = `rgba(2, 4, 14, ${alpha})`;
        overlay.style.opacity = '1';
    } else if (overlay) {
        overlay.style.opacity = '0';
    }
}

function _applyDayNightMode() {
    if (!cesiumViewer) return;
    document.body.classList.toggle('night-mode', isNightMode);

    if (isNightMode) {
        // ── Night: set clock to midnight UTC ─────────────────────────────
        cesiumViewer.clock.currentTime = Cesium.JulianDate.fromIso8601('2024-01-15T00:00:00Z');
        cesiumViewer.clock.shouldAnimate = false;

        // Dim the scene lighting
        cesiumViewer.scene.globe.enableLighting = true;
        // The sun billboard (a bright glowing disc) and its glare have no
        // business being visible at midnight — leaving it on was a big part
        // of why everything (including GP3DT) still read as "sunny" at
        // night regardless of how dark the tiles themselves were tinted.
        cesiumViewer.scene.sun.show  = false;
        cesiumViewer.scene.moon.show = true;

        // Dark terrain base color
        cesiumViewer.scene.globe.baseColor = Cesium.Color.fromCssColorString('#0a0a12');

        // Dim ambient light so the night scene is realistically dark.
        // Intensity also follows the Terrain Brightness setting so cranking
        // it up brightens 3D models/buildings the same way it brightens
        // the base imagery and GP3DT tiles below.
        cesiumViewer.scene.light = _makeNightLight();

        // ── Darken base imagery (Satellite/Hybrid map style) ──────────────
        // This map style has no photorealTileset — the ground is just a
        // Cesium ImageryLayer (ArcGIS World Imagery), which is unaffected by
        // scene.light/enableLighting. Without this, daytime satellite photos
        // keep showing through at full brightness regardless of "night"
        // mode, which is what made the terrain look sunny. brightness/
        // contrast/gamma are standard ImageryLayer dimming controls.
        _setNightImageryDimming(true);
        _setNightScreenOverlay(true);

        // Atmosphere auto-off at night (hidden toggle — no manual GUI control)
        toggleSkyAtmosphere(false);

        // Spawn flashing runway & plane lights after a short delay so the
        // scene is ready. If the player didn't spawn through the airport /
        // runway picker (e.g. typed GPS coordinates, or toggled night mid-
        // flight) _activeRunway may still be null — fall back to the
        // nearest known OurAirports runway near the current position so
        // lights still appear on a real track instead of not at all.
        setTimeout(() => {
            if (_activeRunway) {
                _spawnNightLights();
            } else {
                RunwayDB.load(() => {
                    if (!_activeRunway) {
                        _activeRunway = RunwayDB.findNearest(state.lat, state.lng, 5000);
                    }
                    _spawnNightLights();
                });
            }
        }, 400);

        // ── Darken GP3DT photorealistic tiles ────────────────────────────
        // GP3DT tiles use baked textures and are unaffected by the scene
        // DirectionalLight, so we darken them explicitly via colorBlendMode.
        // MIX blends the baked colour toward a near-black tint (amount 0.85
        // → ~85% of the dark tint, 15% of the original colour) giving a
        // realistic night-time cityscape while preserving some texture detail.
        if (photorealTileset) {
            const f = Math.max(0, Math.min(100, settings.nightTerrainBrightness)) / 100;
            photorealTileset.colorBlendMode   = Cesium.Cesium3DTileColorBlendMode.MIX;
            photorealTileset.colorBlendAmount = Math.max(0.3, 0.95 - f * 0.6);
            photorealTileset.color            = new Cesium.Color(0.03, 0.03, 0.10, 1.0);

            // GP3DT also applies image-based lighting (procedural specular/
            // ambient reflections derived from the sky) on top of the baked
            // texture colour — this is what kept the terrain looking bright
            // and "sunny" even with colorBlendMode darkening it, since IBL
            // doesn't respect colorBlendAmount. Switch it off at night so
            // the tileset doesn't pick up daytime-bright reflections.
            if (photorealTileset.imageBasedLighting) {
                photorealTileset.imageBasedLighting.enabled = false;
            }
        }

    } else {
        // ── Day: restore normal Sun lighting ─────────────────────────────
        cesiumViewer.clock.currentTime = Cesium.JulianDate.fromIso8601('2024-01-15T12:00:00Z');
        cesiumViewer.clock.shouldAnimate = false;

        cesiumViewer.scene.globe.enableLighting = false;
        cesiumViewer.scene.sun.show  = true;
        cesiumViewer.scene.moon.show = false;

        // Restore default scene light (Cesium sun-driven)
        cesiumViewer.scene.light = new Cesium.SunLight();

        // Restore terrain color
        cesiumViewer.scene.globe.baseColor = Cesium.Color.fromCssColorString('#3a3a3a');

        // Restore base imagery to normal daylight brightness
        _setNightImageryDimming(false);
        _setNightScreenOverlay(false);

        // Atmosphere auto-on during the day (hidden toggle)
        toggleSkyAtmosphere(true);

        // Restore GP3DT tileset to full daylight colors
        if (photorealTileset) {
            photorealTileset.colorBlendAmount = 0.0;
            photorealTileset.color            = Cesium.Color.WHITE;
            if (photorealTileset.imageBasedLighting) {
                photorealTileset.imageBasedLighting.enabled = true;
            }
        }

        // Remove all night lights
        _clearNightRunwayLights();
    }
}

/**
 * Builds the DirectionalLight used for night moonlight. Intensity is now
 * fixed (NIGHT_FIXED_F) instead of following settings.nightTerrainBrightness
 * — this light shades ALL scene geometry (vehicles, OSM Buildings, Flat
 * terrain), and those already look right at night on their own, so they
 * must not move when the GP3DT-only brightness slider is dragged. GP3DT's
 * own darkening is handled separately via colorBlendAmount, which DOES
 * follow the slider (see updateNightTerrainBrightness / _applyDayNightMode).
 */
function _makeNightLight() {
    const f = NIGHT_FIXED_F;
    return new Cesium.DirectionalLight({
        direction: new Cesium.Cartesian3(0.354925, -0.890918, -0.283358),
        intensity: 0.02 + f * 0.4
    });
}

/**
 * Restores the "ambient" (non-flashlight) scene light appropriate for the
 * current day/night state. Used both when leaving night mode normally and
 * when the flashlight is switched off (see toggleFlashlight below) — the
 * flashlight temporarily overrides scene.light with a PointLight, and this
 * is how that override gets undone.
 */
function _restoreAmbientSceneLight() {
    if (!cesiumViewer) return;
    cesiumViewer.scene.light = isNightMode ? _makeNightLight() : new Cesium.SunLight();
    // Undo the atmosphere/globe overrides applied while the flashlight was
    // on (see the flashlight block in updateCesiumCamera) so normal
    // sun-follows-scene.light behavior resumes once it's off.
    if (_flashlightPrevDynamicLighting !== null && cesiumViewer.scene.atmosphere) {
        cesiumViewer.scene.atmosphere.dynamicLighting = _flashlightPrevDynamicLighting;
        _flashlightPrevDynamicLighting = null;
    }
    if (_flashlightPrevGlobeLightingFromSun !== null && cesiumViewer.scene.globe) {
        cesiumViewer.scene.globe.dynamicAtmosphereLightingFromSun = _flashlightPrevGlobeLightingFromSun;
        _flashlightPrevGlobeLightingFromSun = null;
    }
}

/**
 * Called live from the Settings → Display "Terrain Brightness at Night"
 * slider. This is GP3DT-only: it re-tints the photorealistic tileset alone
 * and leaves imagery dimming, the screen overlay, and the ambient moonlight
 * untouched (they use the fixed NIGHT_FIXED_F instead) — those already look
 * right at night in Flat/OSM Buildings mode and shouldn't shift when this
 * slider moves. Doesn't reset the clock or re-spawn runway lights the way a
 * full toggleDayNight() would.
 */
function updateNightTerrainBrightness(val) {
    settings.nightTerrainBrightness = parseFloat(val);
    const label = document.getElementById('val-night-brightness');
    if (label) label.innerText = Math.round(settings.nightTerrainBrightness) + '%';
    if (!isNightMode || !cesiumViewer) return; // only visible/relevant at night

    if (photorealTileset) {
        const f = Math.max(0, Math.min(100, settings.nightTerrainBrightness)) / 100;
        photorealTileset.colorBlendAmount = Math.max(0.3, 0.95 - f * 0.6);
    }
    cesiumViewer.scene.requestRender();
}

function _clearNightRunwayLights() {
    if (!cesiumViewer) return;
    _nightRunwayLights.forEach(e => { try { cesiumViewer.entities.remove(e); } catch(_){} });
    _nightRunwayLights = [];
    _planeNavLights.forEach(e => { try { cesiumViewer.entities.remove(e); } catch(_){} });
    _planeNavLights = [];
}

/**
 * Spawn lights along the REAL runway the player spawned on, using the exact
 * threshold coordinates from OurAirports (RunwayDB), not an approximation
 * built from the player's current position/heading. This fixes the bug
 * where lights appeared "in front of you wherever you spawn" — they now sit
 * on the actual track and stay there even as the vehicle moves away.
 */
function _spawnNightLights() {
    if (!cesiumViewer || !isNightMode) return;
    _clearNightRunwayLights();

    const rwy = _activeRunway;
    if (!rwy) {
        // No known runway for this spawn (e.g. free map click, water, or an
        // airport with no OurAirports runway record) — don't fabricate fake
        // lights, just skip.
        console.log('[Night] No runway data for this spawn — skipping runway lights.');
        return;
    }

    const leLat = rwy.leLat, leLng = rwy.leLng;
    const heLat = rwy.heLat, heLng = rwy.heLng;
    // Note: no leElevM/heElevM baking anymore — every light below uses
    // HeightReference.CLAMP_TO_GROUND so it always sits on the real
    // rendered surface (GP3DT or world terrain) instead of a published
    // database elevation.

    // True runway heading LE → HE (prefer the published heading; fall back
    // to a computed bearing between the two threshold points if missing).
    const hdgDeg = (rwy.leHdg != null && !isNaN(rwy.leHdg))
        ? rwy.leHdg
        : _bearingDegrees(leLat, leLng, heLat, heLng);
    const hdgRad = hdgDeg * Math.PI / 180;
    const sRad   = hdgRad + Math.PI / 2; // perpendicular to the runway centerline

    const widthM    = (rwy.widthFt && rwy.widthFt > 0) ? rwy.widthFt * 0.3048 : 30; // ~30 m fallback
    const halfWidth = widthM / 2;

    // Real runway length — prefer the published length, fall back to the
    // measured distance between thresholds so the lights always cover the
    // FULL length of the actual track.
    const lengthM = (rwy.lengthFt && rwy.lengthFt > 0)
        ? rwy.lengthFt * 0.3048
        : _haversineMeters(leLat, leLng, heLat, heLng);

    // One light pair roughly every 60 m, clamped to a sane range.
    const NUM_LIGHTS = Math.max(6, Math.min(60, Math.round(lengthM / 60)));

    for (let i = 0; i <= NUM_LIGHTS; i++) {
        const t = i / NUM_LIGHTS; // 0 = LE threshold, 1 = HE threshold
        const cLat = leLat + (heLat - leLat) * t;
        const cLng = leLng + (heLng - leLng) * t;
        // 🔴 FIX: don't bake a one-time raycasted/interpolated height into
        // the entity at all — that approach failed whenever the raycast
        // returned exactly 0 (a legitimate height for a sea-level
        // airport, or simply what you get before GP3DT tiles have
        // streamed in at spawn time), AND it never self-corrected once
        // the real tiles/terrain finished loading, because the light was
        // a static point. Instead we use Cesium's built-in
        // HeightReference.CLAMP_TO_GROUND below, so each light is
        // re-clamped to whatever surface is actually active — GP3DT
        // tiles OR world terrain — every frame. That's what keeps the
        // lights glued to the ground under both modes.
        const sideLat = halfWidth * Math.cos(sRad) / 111320;
        const sideLng = halfWidth * Math.sin(sRad) / (111320 * Math.cos(cLat * Math.PI / 180));

        // Threshold ends = red/green; everything else = white edge lights.
        const isThreshold = (i === 0 || i === NUM_LIGHTS);
        const leftCol  = isThreshold ? Cesium.Color.RED.withAlpha(0.9)   : Cesium.Color.WHITE.withAlpha(0.85);
        const rightCol = isThreshold ? Cesium.Color.GREEN.withAlpha(0.9) : Cesium.Color.WHITE.withAlpha(0.85);

        _nightRunwayLights.push(cesiumViewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(cLng - sideLng, cLat - sideLat, 0),
            point: {
                pixelSize: 5, color: leftCol, outlineColor: Cesium.Color.YELLOW.withAlpha(0.3), outlineWidth: 1,
                scaleByDistance: new Cesium.NearFarScalar(100, 2.5, 3000, 0.8),
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance: Number.POSITIVE_INFINITY
            }
        }));
        _nightRunwayLights.push(cesiumViewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(cLng + sideLng, cLat + sideLat, 0),
            point: {
                pixelSize: 5, color: rightCol, outlineColor: Cesium.Color.YELLOW.withAlpha(0.3), outlineWidth: 1,
                scaleByDistance: new Cesium.NearFarScalar(100, 2.5, 3000, 0.8),
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance: Number.POSITIVE_INFINITY
            }
        }));

        // ── Centerline lights (skip thresholds — already lit above) ───────
        if (!isThreshold) {
            _nightRunwayLights.push(cesiumViewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(cLng, cLat, 0),
                point: {
                    pixelSize: 3, color: Cesium.Color.WHITE.withAlpha(0.7),
                    scaleByDistance: new Cesium.NearFarScalar(50, 2, 2000, 0.5),
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY
                }
            }));
        }
    }

    // ── Approach PAPI/VASI lights at BOTH real thresholds ─────────────────
    // (so the lights are correct whichever direction the runway is used).
    // No manual ground sampling needed here either — _addPapiLights clamps
    // each light to the ground itself now.
    _addPapiLights(leLat, leLng, hdgRad + Math.PI, halfWidth); // approach FROM the LE side
    _addPapiLights(heLat, heLng, hdgRad, halfWidth);           // approach FROM the HE side

    console.log(`[Night] Spawned ${_nightRunwayLights.length} lights along real runway ${rwy.leIdent || '?'}/${rwy.heIdent || '?'} (${Math.round(lengthM)} m) at ${rwy.icao || '?'}`);
}

/**
 * Adds 4 PAPI/VASI-style approach lights just behind a runway threshold,
 * offset to the left of centerline, facing back along the approach path.
 * @param {number} threshLat/threshLng - real threshold coordinates
 * @param {number} approachHdgRad - heading (radians) FROM which the aircraft approaches this threshold
 * @param {number} halfWidth - half the runway width in meters
 *
 * No elevation parameter is needed anymore — each light uses
 * HeightReference.CLAMP_TO_GROUND so it sits on whatever surface (GP3DT
 * tiles or world terrain) is actually rendered at that point, rather than
 * a one-time raycasted/database elevation that could drift out of sync.
 */
function _addPapiLights(threshLat, threshLng, approachHdgRad, halfWidth) {
    const BACK_M = 30; // meters behind the threshold, on the approach side
    for (let p = 0; p < 4; p++) {
        const bLat = BACK_M * Math.cos(approachHdgRad) / 111320;
        const bLng = BACK_M * Math.sin(approachHdgRad) / (111320 * Math.cos(threshLat * Math.PI / 180));
        const sRad = approachHdgRad + Math.PI / 2;
        const offM = halfWidth + 10 + p * 5;
        const offLat = offM * Math.cos(sRad) / 111320;
        const offLng = offM * Math.sin(sRad) / (111320 * Math.cos(threshLat * Math.PI / 180));
        _nightRunwayLights.push(cesiumViewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(threshLng + bLng + offLng, threshLat + bLat + offLat, 0),
            point: {
                pixelSize: 8, color: p < 2 ? Cesium.Color.RED.withAlpha(0.95) : Cesium.Color.WHITE.withAlpha(0.95),
                scaleByDistance: new Cesium.NearFarScalar(100, 2, 5000, 0.6),
                heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                disableDepthTestDistance: Number.POSITIVE_INFINITY
            }
        }));
    }
}

/** Called every frame from the update loop; pulses nav/strobe lights on the plane */
function _updateNightPlaneFlash(dt) {
    if (!isNightMode || !cesiumViewer || !isPlaneType(state.vehicle)) return;
    _nightLightTimer += dt;

    const anchorHeight = (flight.groundRef || 0) + flight.alt * 0.3048;
    const pos = Cesium.Cartesian3.fromDegrees(state.lng, state.lat, anchorHeight + 2);

    // Recreate plane lights if not present yet
    if (_planeNavLights.length === 0) {
        // Red (left wingtip)
        _planeNavLights.push({ entity: cesiumViewer.entities.add({
            position: new Cesium.CallbackProperty(() => {
                const h = (flight.groundRef || 0) + flight.alt * 0.3048;
                const hdgR = state.heading * Math.PI / 180;
                const sRad = hdgR - Math.PI / 2;
                const wingM = 20 * settings.vehicleScale;
                const wLat = wingM * Math.cos(sRad) / 111320;
                const wLng = wingM * Math.sin(sRad) / (111320 * Math.cos(state.lat * Math.PI / 180));
                return Cesium.Cartesian3.fromDegrees(state.lng + wLng, state.lat + wLat, h + 1.5);
            }, false),
            point: { pixelSize: 8, color: Cesium.Color.RED.withAlpha(0.95), outlineColor: Cesium.Color.RED.withAlpha(0.3), outlineWidth: 3, scaleByDistance: new Cesium.NearFarScalar(10, 3, 5000, 0.8) }
        }), type: 'nav', color: 'red' });

        // Green (right wingtip)
        _planeNavLights.push({ entity: cesiumViewer.entities.add({
            position: new Cesium.CallbackProperty(() => {
                const h = (flight.groundRef || 0) + flight.alt * 0.3048;
                const hdgR = state.heading * Math.PI / 180;
                const sRad = hdgR + Math.PI / 2;
                const wingM = 20 * settings.vehicleScale;
                const wLat = wingM * Math.cos(sRad) / 111320;
                const wLng = wingM * Math.sin(sRad) / (111320 * Math.cos(state.lat * Math.PI / 180));
                return Cesium.Cartesian3.fromDegrees(state.lng + wLng, state.lat + wLat, h + 1.5);
            }, false),
            point: { pixelSize: 8, color: Cesium.Color.GREEN.withAlpha(0.95), outlineColor: Cesium.Color.GREEN.withAlpha(0.3), outlineWidth: 3, scaleByDistance: new Cesium.NearFarScalar(10, 3, 5000, 0.8) }
        }), type: 'nav', color: 'green' });

        // White tail
        _planeNavLights.push({ entity: cesiumViewer.entities.add({
            position: new Cesium.CallbackProperty(() => {
                const h = (flight.groundRef || 0) + flight.alt * 0.3048;
                const hdgR = state.heading * Math.PI / 180;
                const tailM = 20 * settings.vehicleScale;
                const tLat = -tailM * Math.cos(hdgR) / 111320;
                const tLng = -tailM * Math.sin(hdgR) / (111320 * Math.cos(state.lat * Math.PI / 180));
                return Cesium.Cartesian3.fromDegrees(state.lng + tLng, state.lat + tLat, h + 6);
            }, false),
            point: { pixelSize: 7, color: Cesium.Color.WHITE.withAlpha(0.95), scaleByDistance: new Cesium.NearFarScalar(10, 3, 5000, 0.8) }
        }), type: 'nav', color: 'white' });

        // White anti-collision strobe (fuselage top)
        _planeNavLights.push({ entity: cesiumViewer.entities.add({
            position: new Cesium.CallbackProperty(() => {
                const h = (flight.groundRef || 0) + flight.alt * 0.3048;
                return Cesium.Cartesian3.fromDegrees(state.lng, state.lat, h + 5);
            }, false),
            point: { pixelSize: 10, color: Cesium.Color.WHITE, scaleByDistance: new Cesium.NearFarScalar(10, 4, 8000, 0.5) }
        }), type: 'strobe' });

        // Red beacon (fuselage belly)
        _planeNavLights.push({ entity: cesiumViewer.entities.add({
            position: new Cesium.CallbackProperty(() => {
                const h = (flight.groundRef || 0) + flight.alt * 0.3048;
                return Cesium.Cartesian3.fromDegrees(state.lng, state.lat, h - 1);
            }, false),
            point: { pixelSize: 10, color: Cesium.Color.RED, scaleByDistance: new Cesium.NearFarScalar(10, 4, 8000, 0.5) }
        }), type: 'beacon' });
    }

    // Flash strobes: brief bright flash every 1.5 s
    const strobeOn = (_nightLightTimer % 1.5) < 0.08;
    const beaconOn = (_nightLightTimer % 1.0) < 0.5;  // steady blink every 1 s

    _planeNavLights.forEach(light => {
        if (light.type === 'strobe') {
            light.entity.point.color = strobeOn
                ? new Cesium.Color(1, 1, 1, 0.98)
                : new Cesium.Color(1, 1, 1, 0.05);
        } else if (light.type === 'beacon') {
            light.entity.point.color = beaconOn
                ? new Cesium.Color(1, 0.1, 0.1, 0.95)
                : new Cesium.Color(1, 0.1, 0.1, 0.1);
        }
    });
}

function toggleSettings() {
    let m = document.getElementById('settings-modal');
    const opening = m.style.display === 'none';
    m.style.display = opening ? 'flex' : 'none';
    if (opening) { switchSettingsMode(_activeSettingsMode); syncAllSettingsUI(); }
}

// ==========================================
// SETTINGS MODAL — MODE-GROUPED TABBED LAYOUT
// Top-level mode switcher (3D Mode / 2D Mode / General — mirrors the
// Ww.txt settings tree) filters which sidebar tabs are visible; the
// sidebar then behaves exactly like before (one active tab → one active
// panel) but scoped to data-mode.
// ==========================================
let _activeSettingsMode = '3d';
let _activeSettingsTab = 'viewer';

function switchSettingsMode(mode) {
    _activeSettingsMode = mode;
    document.querySelectorAll('.settings-mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    document.querySelectorAll('.settings-tab').forEach(btn => {
        btn.classList.toggle('hidden-mode', btn.dataset.mode !== mode);
    });
    // Auto-select the first tab belonging to this mode.
    const firstTab = document.querySelector(`.settings-tab[data-mode="${mode}"]`);
    if (firstTab) switchSettingsTab(firstTab.dataset.tab);
}

function switchSettingsTab(tab) {
    document.querySelectorAll('.settings-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    document.querySelectorAll('.settings-panel-content').forEach(panel => {
        panel.classList.toggle('active', panel.dataset.tab === tab);
    });
    _activeSettingsTab = tab;
    const panels = document.getElementById('settings-panels');
    if (panels) panels.scrollTop = 0;
}

/** Kept for compatibility with old call sites (vehicle switch, set3DStyle) —
 *  the new tree has no disabled tabs (Airplane/GP3DT controls are simply
 *  always present and just have no effect when not applicable), so this is
 *  now a no-op other than re-syncing values shown on screen. */
function updateSettingsTabStates() { syncAllSettingsUI(); }


// ============================================================================
// SETTINGS TREE V2 — implementations for every leaf in Ww.txt
// Grouped to match the tree: 3D Mode / 2D Mode / General.
// ============================================================================

// ── persistence ─────────────────────────────────────────────────────────
const SETTINGS_V2_KEY = 'biv_settings_v2';
function saveSettingsV2() {
    if (!settings.autosave) return;
    try {
        localStorage.setItem(SETTINGS_V2_KEY, JSON.stringify({ settings, keyBindings }));
    } catch (e) { console.warn('[Settings] save failed:', e); }
}
function loadSettingsV2() {
    try {
        const raw = localStorage.getItem(SETTINGS_V2_KEY);
        if (!raw) return;
        const saved = JSON.parse(raw);
        if (saved.settings) Object.assign(settings, saved.settings);
        if (saved.keyBindings) Object.assign(keyBindings, saved.keyBindings);
    } catch (e) { console.warn('[Settings] load failed:', e); }
}

function resetAllSettings() {
    if (!confirm('Reset ALL settings to defaults? This reloads the app.')) return;
    localStorage.removeItem(SETTINGS_V2_KEY);
    localStorage.removeItem(CONFIG_KEYS.CESIUM_ION);
    location.reload();
}

// ── 3D Mode → Viewer ────────────────────────────────────────────────────
function updateResolutionScale(val) {
    settings.resolutionScale = parseFloat(val);
    ['val-3d-resolution-scale','val-2d-resolution-scale'].forEach(id => {
        const el = document.getElementById(id); if (el) el.textContent = parseFloat(val).toFixed(2);
    });
    ['set-3d-resolution-scale','set-2d-resolution-scale'].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = val;
    });
    if (cesiumViewer) cesiumViewer.resolutionScale = parseFloat(val);
    saveSettingsV2();
}
function setFlashlightFromSettings(val) {
    settings.flashlightSetting = val;
    if (val !== flashlightOn) toggleFlashlight();
    saveSettingsV2();
}

// ── 3D Mode → Globe ─────────────────────────────────────────────────────
function toggleObjectCulling(val) {
    settings.objectCulling = val;
    saveSettingsV2();
}

// ── 3D Mode → Sky ───────────────────────────────────────────────────────
// Atmosphere is no longer a manual toggle: it turns off automatically in
// Night mode and back on in Day mode (see toggleDayNight / setDayNightMode).
function toggleSkyAtmosphere(val) {
    settings.skyAtmosphere = val;
    if (cesiumViewer && cesiumViewer.scene.skyAtmosphere) cesiumViewer.scene.skyAtmosphere.show = val;
    const el = document.getElementById('set-sky-atmosphere'); if (el) el.checked = val;
    saveSettingsV2();
}
function updateSceneFogDensity(val) {
    settings.sceneFogDensity = parseFloat(val);
    document.getElementById('val-scene-fog').textContent = parseFloat(val).toFixed(4);
    if (cesiumViewer) {
        cesiumViewer.scene.fog.enabled = parseFloat(val) > 0;
        cesiumViewer.scene.fog.density = parseFloat(val);
    }
    saveSettingsV2();
}
function toggleSun(val) {
    settings.sunShow = val;
    if (cesiumViewer && cesiumViewer.scene.sun) cesiumViewer.scene.sun.show = val;
    saveSettingsV2();
}
function toggleMoon(val) {
    settings.moonShow = val;
    if (cesiumViewer && cesiumViewer.scene.moon) cesiumViewer.scene.moon.show = val;
    saveSettingsV2();
}
function setDayNightMode(val) {
    settings.dayNightDropdown = val;
    const wantNight = val === 'night';
    if (wantNight !== isNightMode) toggleDayNight();
    saveSettingsV2();
}

// ── 3D Mode → Imagery ───────────────────────────────────────────────────
function setMapStyleFromSettings(val) {
    settings.imageryMapStyle = val;
    const sel = document.getElementById('map-layer-select');
    if (sel) { sel.value = val; sel.dispatchEvent(new Event('change')); }
    ['set-imagery-map-style','set-imagery-map-style-2d'].forEach(id => { const el = document.getElementById(id); if (el) el.value = val; });
    saveSettingsV2();
}
function setImageryProvider(val) {
    settings.imageryProvider = val;
    try {
        const url = val === 'osm'
            ? 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            : 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        if (typeof satLayer !== 'undefined' && satLayer.setUrl) satLayer.setUrl(url);
    } catch (e) { console.warn('[Settings] setImageryProvider failed:', e); }
    ['set-imagery-provider','set-imagery-provider-2d'].forEach(id => { const el = document.getElementById(id); if (el) el.value = val; });
    saveSettingsV2();
}

// ── 3D Mode → 3D Tiles ──────────────────────────────────────────────────
function toggleOsmBuildings(val) {
    settings.osmBuildings = val;
    if (val) { tryLoadOsmBuildings(); }
    else if (osmBuildingsTileset && cesiumViewer) {
        cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
        osmBuildingsTileset = null;
    }
    saveSettingsV2();
}

// ── 3D Mode → Physics ───────────────────────────────────────────────────

// ── 3D Mode → Controls ──────────────────────────────────────────────────
function setPitchInvertFromSettings(val) {
    if (val !== settings.invertPitch) togglePitchInvert();
    saveSettingsV2();
}
function updateRudderSensitivity(val) {
    settings.rudderSensitivity = parseFloat(val);
    document.getElementById('val-rudder-sensitivity').textContent = parseFloat(val).toFixed(2);
    saveSettingsV2();
}
function setUnitsFromDropdown(val) {
    setSpeedUnit(val);
    ['set-units-dropdown','set-units-dropdown-2d','set-units-general'].forEach(id => { const el = document.getElementById(id); if (el) el.value = val; });
}

// ── 2D Mode ─────────────────────────────────────────────────────────────
function setSceneMode2D(val) {
    settings.sceneMode2D = val;
    setRenderMode(val === '2D' ? '2D' : 'CSS');
    saveSettingsV2();
}
function updatePanSpeed(val, labelId) {
    settings.panSpeed = parseFloat(val);
    const label = document.getElementById(labelId || 'val-pan-speed'); if (label) label.textContent = parseFloat(val).toFixed(2);
    if (map && map.options) map.options.inertiaMaxSpeed = 1000 * parseFloat(val);
    saveSettingsV2();
}
function toggleRotateMap(val) {
    settings.rotateMap = val;
    if (val !== state.headUp) toggleOrientation();
    saveSettingsV2();
}
function updateZoomSensitivity(val) {
    settings.zoomSensitivity = parseFloat(val);
    document.getElementById('val-zoom-sensitivity').textContent = parseFloat(val).toFixed(2);
    if (map && map.options) map.options.wheelPxPerZoomLevel = 60 / Math.max(0.1, parseFloat(val));
    saveSettingsV2();
}

// ── General → General ───────────────────────────────────────────────────
const I18N = {
    en: { title: '3D Driving & Flight Simulator', settings: '⚙️ Settings' },
    es: { title: 'Simulador de Conducción y Vuelo 3D', settings: '⚙️ Ajustes' },
    fr: { title: 'Simulateur de Conduite et de Vol 3D', settings: '⚙️ Paramètres' },
    de: { title: '3D Fahr- & Flugsimulator', settings: '⚙️ Einstellungen' }
};
function applyLanguage(val) {
    settings.language = val;
    const dict = I18N[val] || I18N.en;
    document.title = dict.title;
    const h2 = document.querySelector('#settings-modal .modal-header h2');
    if (h2) h2.textContent = dict.settings;
    const spawnTitle = document.getElementById('spawn-title');
    if (spawnTitle) spawnTitle.textContent = dict.title;
    saveSettingsV2();
}
function applyTheme(val) {
    settings.theme = val;
    const wantLight = val === 'light' || (val === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);
    document.body.classList.toggle('theme-light', wantLight);
    saveSettingsV2();
}
function toggleAutosave(val) {
    settings.autosave = val;
    if (val) saveSettingsV2();
}

// ── General → Graphics ──────────────────────────────────────────────────
// VSync, Anti-Aliasing and Anisotropic Filtering were removed: none of
// them actually did anything meaningful here. VSync can't be controlled
// from JS in a browser (requestAnimationFrame already syncs to the
// display), MSAA silently no-op'd (wrapped in a try/catch that swallowed
// the failure), and "Anisotropic Filtering" only ever nudged a CSS
// image-rendering hint on the 2D Leaflet map div — it never touched the
// Cesium WebGL canvas at all, so it did nothing in 3D mode. The
// performance-preset ("RAM tier") buttons were removed for the same
// reason: everything they used to set is already a real, independently
// working control elsewhere in Settings.
function setFPSLimit(val) {
    settings.fpsLimit = val;
    if (cesiumViewer) cesiumViewer.targetFrameRate = (val === 'unlimited') ? undefined : parseInt(val);
    saveSettingsV2();
}
function setTextureQuality(val) {
    settings.textureQuality = val;
    if (cesiumViewer) {
        const sse = { low: 8, medium: 2, high: 0.5 };
        cesiumViewer.scene.globe.maximumScreenSpaceError = sse[val] ?? 2;
    }
    saveSettingsV2();
}
function restoreDefaultGraphics() {
    setFPSLimit('60'); document.getElementById('set-fps-limit').value = '60';
    setTextureQuality('medium'); document.getElementById('set-texture-quality').value = 'medium';
}

// ── General → Interface ─────────────────────────────────────────────────
function updateUIScale(val) {
    settings.uiScale = parseFloat(val);
    document.getElementById('val-ui-scale').textContent = parseFloat(val).toFixed(2);
    document.documentElement.style.setProperty('--ui-scale', val);
    saveSettingsV2();
}
let _fpsCounterEl = null, _fpsFrames = 0, _fpsAccum = 0, _fpsLast = 0;
function _updateFPSCounter(now, dt) {
    if (!settings.showFPS) return;
    if (!_fpsCounterEl) {
        _fpsCounterEl = document.createElement('div');
        _fpsCounterEl.id = 'fps-counter';
        _fpsCounterEl.style.cssText = 'position:fixed;top:10px;left:10px;z-index:4200;background:rgba(0,0,0,0.6);color:#4ade80;font-family:monospace;font-size:0.8rem;padding:4px 8px;border-radius:6px;pointer-events:none;';
        document.body.appendChild(_fpsCounterEl);
    }
    _fpsFrames++; _fpsAccum += dt;
    if (now - _fpsLast > 500) {
        _fpsLast = now;
        const fps = _fpsAccum > 0 ? Math.round(_fpsFrames / _fpsAccum) : 0;
        _fpsCounterEl.textContent = `${fps} FPS`;
        _fpsFrames = 0; _fpsAccum = 0;
    }
}
function toggleShowFPS(val) {
    settings.showFPS = val;
    if (!val && _fpsCounterEl) { _fpsCounterEl.remove(); _fpsCounterEl = null; }
    saveSettingsV2();
}
function toggleShowCoordinates(val) {
    settings.showCoords = val;
    const el = document.getElementById('coord-info'); if (el) el.style.display = val ? '' : 'none';
    saveSettingsV2();
}
function toggleShowCompass(val) {
    settings.showCompass = val;
    const el = document.getElementById('btn-orientation');
    if (el) el.style.display = (val && settings.renderMode !== '3D') ? '' : 'none';
    saveSettingsV2();
}
function toggleShowMinimap(val) {
    settings.showMinimap = val;
    const el = document.getElementById('gps-minimap-overlay'); if (el) el.style.display = val ? '' : 'none';
    saveSettingsV2();
}
function toggleNotifications(val) { settings.notifications = val; saveSettingsV2(); }
function showNotification(msg) {
    if (!settings.notifications) return;
    const el = document.createElement('div');
    el.textContent = msg;
    el.style.cssText = 'position:fixed;top:16px;left:50%;transform:translateX(-50%);background:rgba(15,23,42,0.92);color:#fff;padding:10px 18px;border-radius:8px;z-index:6000;font-size:0.85rem;box-shadow:0 4px 16px rgba(0,0,0,0.4);';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3200);
}

// ── General → Troubleshooting ───────────────────────────────────────────
let _debugOverlayEl = null;
function toggleDebugMode(val) { settings.debugMode = val; if (!val) _hideDebugOverlayIfIdle(); saveSettingsV2(); }
function toggleStreamingStats(val) { settings.streamingStats = val; if (!val) _hideDebugOverlayIfIdle(); saveSettingsV2(); }
function toggleMemoryStats(val) { settings.memoryStats = val; if (!val) _hideDebugOverlayIfIdle(); saveSettingsV2(); }
function toggleGPUStats(val) {
    settings.gpuStats = val;
    if (cesiumViewer) cesiumViewer.scene.debugShowFramesPerSecond = val;
    saveSettingsV2();
}
function _hideDebugOverlayIfIdle() {
    if (!settings.debugMode && !settings.streamingStats && !settings.memoryStats && _debugOverlayEl) {
        _debugOverlayEl.style.display = 'none';
    }
}
function updateDebugOverlays() {
    if (!_debugOverlayEl) {
        _debugOverlayEl = document.createElement('div');
        _debugOverlayEl.id = 'debug-overlay-panel';
        document.body.appendChild(_debugOverlayEl);
    }
    _debugOverlayEl.style.display = 'block';
    let lines = [];
    if (settings.debugMode) lines.push(`lat ${state.lat.toFixed(5)}  lng ${state.lng.toFixed(5)}`, `heading ${state.heading.toFixed(1)}°  speed ${state.speed.toFixed(1)}`);
    if (settings.memoryStats) {
        if (performance.memory) lines.push(`JS heap: ${(performance.memory.usedJSHeapSize / 1048576).toFixed(1)} MB`);
        else lines.push('JS heap: n/a (Chrome only)');
    }
    _debugOverlayEl.textContent = lines.join('\n');
}
function toggleTileBounds(val) { settings.tileBounds = val; saveSettingsV2(); }
function toggleTileLoadingViz(val) { settings.tileLoadingViz = val; saveSettingsV2(); }
function clearCacheButton() {
    try {
        Object.keys(localStorage).filter(k => k.startsWith('biv_tile_') || k.startsWith('biv_cache_')).forEach(k => localStorage.removeItem(k));
    } catch (e) {}
    showNotification('🗑️ Cache cleared');
}
function reloadAssetsButton() {
    if (settings.mapStyle === 'photoreal') tryLoadPhotorealisticTiles();
    else tryEnableWorldTerrain();
    if (settings.osmBuildings) tryLoadOsmBuildings();
    showNotification('♻️ Assets reloading…');
}
function exportDebugReport() {
    const report = { generatedAt: new Date().toISOString(), state, settings, gp3dtSettings, keyBindings };
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `debug-report-${Date.now()}.json`;
    document.body.appendChild(a); a.click(); a.remove();
}
let _devConsoleEl = null, _origConsoleLog = console.log;
function toggleDevConsole(val) {
    settings.devConsole = val;
    if (val && !_devConsoleEl) {
        _devConsoleEl = document.createElement('div');
        _devConsoleEl.id = 'dev-console-panel';
        document.body.appendChild(_devConsoleEl);
        console.log = function (...args) {
            _origConsoleLog.apply(console, args);
            const line = document.createElement('div');
            line.className = 'dc-line';
            line.textContent = args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
            _devConsoleEl.appendChild(line);
            _devConsoleEl.scrollTop = _devConsoleEl.scrollHeight;
            if (_devConsoleEl.children.length > 200) _devConsoleEl.removeChild(_devConsoleEl.firstChild);
        };
    }
    if (_devConsoleEl) _devConsoleEl.style.display = val ? 'block' : 'none';
    if (!val) console.log = _origConsoleLog;
    saveSettingsV2();
}

// ── General → About ─────────────────────────────────────────────────────
function showLicenses() {
    alert('This app uses CesiumJS (Apache 2.0), Leaflet (BSD-2), Leaflet Routing Machine (ISC), and Turf.js (MIT). See each project\'s repository for full license text.');
}


// ── Sync all v2 UI controls to current `settings` values (called on modal open / after load) ──
function syncAllSettingsUI() {
    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    const setChk = (id, v) => { const el = document.getElementById(id); if (el) el.checked = v; };
    const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };

    setVal('set-3d-resolution-scale', settings.resolutionScale); setTxt('val-3d-resolution-scale', settings.resolutionScale.toFixed(2));
    setVal('set-2d-resolution-scale', settings.resolutionScale); setTxt('val-2d-resolution-scale', settings.resolutionScale.toFixed(2));
    setChk('set-flashlight-toggle', flashlightOn);
    setChk('set-object-culling', settings.objectCulling);
    setChk('set-sun-toggle', settings.sunShow);
    setChk('set-moon-toggle', settings.moonShow);
    setVal('set-day-night-mode', isNightMode ? 'night' : 'day');
    setVal('set-imagery-map-style', settings.imageryMapStyle); setVal('set-imagery-map-style-2d', settings.imageryMapStyle);
    setVal('set-imagery-provider', settings.imageryProvider); setVal('set-imagery-provider-2d', settings.imageryProvider);
    setChk('set-pitch-invert', settings.invertPitch);
    setVal('set-rudder-sensitivity', settings.rudderSensitivity); setTxt('val-rudder-sensitivity', settings.rudderSensitivity.toFixed(2));
    setVal('set-veh-size', settings.vehicleScale); setTxt('val-veh-size', settings.vehicleScale.toFixed(1));
    setVal('set-veh-size-3d', settings.vehicleScale); setTxt('val-veh-size-3d', settings.vehicleScale.toFixed(1));
    setVal('set-plane-height-offset', settings.planeHeightOffset); setVal('set-plane-height-offset-input', settings.planeHeightOffset); setTxt('val-plane-height-offset', settings.planeHeightOffset.toFixed(1));
    setVal('set-2d-scene-mode', settings.sceneMode2D);
    setVal('set-pan-speed', settings.panSpeed); setTxt('val-pan-speed', settings.panSpeed.toFixed(2));
    setChk('set-rotate-map', state.headUp);
    setVal('set-zoom-sensitivity', settings.zoomSensitivity); setTxt('val-zoom-sensitivity', settings.zoomSensitivity.toFixed(2));
    setVal('set-language', settings.language);
    setVal('set-theme', settings.theme);
    setChk('set-autosave', settings.autosave);
    setVal('set-fps-limit', settings.fpsLimit);
    setVal('set-texture-quality', settings.textureQuality);
    setVal('set-ui-scale', settings.uiScale); setTxt('val-ui-scale', settings.uiScale.toFixed(2));
    setChk('set-show-fps', settings.showFPS);
    setChk('set-show-coords', settings.showCoords);
    setChk('set-show-compass', settings.showCompass);
    setChk('set-show-minimap', settings.showMinimap);
    setChk('set-notifications', settings.notifications);
    setChk('set-debug-mode', settings.debugMode);
    setChk('set-tile-bounds', settings.tileBounds);
    setChk('set-tile-loading', settings.tileLoadingViz);
    setChk('set-gpu-stats', settings.gpuStats);
    setChk('set-memory-stats', settings.memoryStats);
    const devConsoleBtn = document.getElementById('spawn-dev-console-btn');
    if (devConsoleBtn) devConsoleBtn.classList.toggle('active', !!settings.devConsole);
    setVal('set-units-dropdown', state.speedUnit); setVal('set-units-dropdown-2d', state.speedUnit); setVal('set-units-general', state.speedUnit);
}


/**
 * toggleOcclusionCulling — checkbox handler for Settings → Display.
 * Mirrors scene.globe.depthTestAgainstTerrain (set up in initCesium): when
 * true, terrain participates in depth testing so hills/ridges correctly
 * hide buildings, 3D tiles, and the vehicle behind them. Turning it off
 * skips that depth test (cheaper, but lets objects show through terrain).
 */
function toggleOcclusionCulling(val) {
    settings.occlusionCulling = val;
    if (cesiumViewer) {
        // ── Terrain depth occlusion: hides objects behind hills/ridges ──────
        cesiumViewer.scene.globe.depthTestAgainstTerrain = val;

        // ── View-frustum culling: prevents rendering of anything outside
        //    the camera's current field of view. Cesium does frustum culling
        //    internally per-primitive; we also apply it to the 3D tileset
        //    bounding-volume hierarchy so entire tile subtrees outside the
        //    frustum are skipped, not just individual meshes.
        if (photorealTileset) {
            // cullWithChildrenBounds: the tileset only renders tile subtrees
            // whose bounding volume intersects the camera frustum. When false,
            // the renderer walks every tile regardless of visibility.
            photorealTileset.cullWithChildrenBounds = val;

            // skipLevelOfDetail is safe to keep ON; without cullWithChildrenBounds
            // it causes ghost-loading of off-screen tiles, so pair them together.
            if (!val) photorealTileset.skipLevelOfDetail = false;
            else       photorealTileset.skipLevelOfDetail = gp3dtSettings.skipLevelOfDetail;
        }

        // Cull primitives/entities added to the scene that lie outside the
        // camera frustum. Cesium honours primitive.show, but its own scene
        // frustum cull pass only fires when allowDataDrivenPropertyValues
        // propagates — setting this explicitly forces the fast path.
        cesiumViewer.scene.globe.show = true; // always keep globe visible
        // Request the next frame to apply the culling change immediately.
        cesiumViewer.scene.requestRender();
    }

    // Same button now also drives the GP3DT no-memory grid behaviour below.
    applyGP3DTGridCulling();
}

/**
 * ── GP3DT GRID CULLING (no-memory occlusion) ────────────────────────────
 * Google Photorealistic 3D Tiles are already organised as a quadtree of
 * geographic tiles — effectively "squares" of terrain. Cesium's default
 * behaviour renders only the squares that intersect the camera frustum
 * (via cullWithChildrenBounds, wired up in toggleOcclusionCulling above),
 * but it also *caches* squares you've already looked at (up to
 * maximumMemoryUsage MB of GPU memory) so that looking back at a spot you
 * just left doesn't need a re-download — that's the "memory" effect.
 *
 * Driven by the SAME settings.occlusionCulling flag as the checkbox above:
 * turning "Occlusion Culling" ON also starves the tile cache and force-trims
 * off-screen squares EVERY FRAME (not just when the camera stops moving),
 * so look at place A, then whip the camera to place B — A un-renders
 * immediately and stays gone until you look back at it. Turning it OFF
 * restores normal caching (and normal depth-test / frustum culling).
 */
let _gp3dtGridTrimHandler = null;
let _gp3dtGridTrimPostRenderHandler = null;

function applyGP3DTGridCulling() {
    if (!cesiumViewer || !photorealTileset) return;

    if (settings.occlusionCulling) {
        // Genuine frustum/bounding-volume culling — divides the terrain into
        // squares and only renders the ones in view.
        photorealTileset.cullWithChildrenBounds = true;
        photorealTileset.cullRequestsWhileMoving = true;
        photorealTileset.cullRequestsWhileMovingMultiplier = 1; // no leeway — cull the instant a tile leaves view

        // Starve the tile cache so nothing off-screen is kept "in memory."
        // A tiny cap means Cesium can't hold more than what's currently
        // visible, so it discards (unloads) squares the instant they leave
        // the frustum rather than caching them for later reuse.
        photorealTileset.maximumMemoryUsage = 32; // MB — bare minimum for the visible squares

        // ── TRUE "no memory": trim EVERY FRAME, not just on moveEnd. ────────
        // moveEnd only fires once the camera comes to a stop, so during a
        // continuous look-around (mouse-drag look, flying, panning) whatever
        // just left the frustum would stay resident until you stopped
        // moving — a visible "memory" of the last few frames. Hooking
        // scene.postRender instead trims on literally every rendered frame,
        // so a square un-renders the instant it's no longer in view and
        // never comes back until the camera looks at it again.
        if (cesiumViewer.scene && !_gp3dtGridTrimPostRenderHandler) {
            _gp3dtGridTrimPostRenderHandler = cesiumViewer.scene.postRender.addEventListener(() => {
                if (photorealTileset && typeof photorealTileset.trimLoadedTiles === 'function') {
                    photorealTileset.trimLoadedTiles();
                }
            });
        }
        // Kept alongside as a belt-and-braces catch tied to camera.moveEnd
        // (cheap no-op if the postRender hook above already trimmed).
        if (cesiumViewer.camera && !_gp3dtGridTrimHandler) {
            _gp3dtGridTrimHandler = cesiumViewer.camera.moveEnd.addEventListener(() => {
                if (photorealTileset && typeof photorealTileset.trimLoadedTiles === 'function') {
                    photorealTileset.trimLoadedTiles();
                }
                cesiumViewer.scene.requestRender();
            });
        }
    } else {
        // Restore normal caching behaviour (squares you've seen stay loaded).
        photorealTileset.maximumMemoryUsage = gp3dtSettings.maximumMemoryUsage;
        if (_gp3dtGridTrimHandler) {
            _gp3dtGridTrimHandler(); // removes the listener
            _gp3dtGridTrimHandler = null;
        }
        if (_gp3dtGridTrimPostRenderHandler) {
            _gp3dtGridTrimPostRenderHandler();
            _gp3dtGridTrimPostRenderHandler = null;
        }
    }

    cesiumViewer.scene.requestRender();
}

/**
 * ── GP3DT RENDER-DISTANCE SWITCH ─────────────────────────────────────────
 * Settings → GP3DT → "GP3DT Render Distance" slider. Only meaningful while
 * settings.mapStyle === 'photoreal'. Compares the camera's height above the
 * ellipsoid against settings.gp3dtRenderDistance (meters):
 *
 *   height  > threshold  → far away: GP3DT tileset is simply hidden
 *                           (tileset.show = false). Nothing is drawn in its
 *                           place — no World Terrain, no OSM Buildings, just
 *                           empty/unrendered.
 *   height <= threshold  → close: GP3DT tileset is shown again, back to the
 *                           regular photoreal behaviour.
 *
 * Checked continuously on scene.postRender (cheap: one height read and a
 * boolean .show flip, only when the state actually needs to change) so the
 * swap happens smoothly as you climb/descend, with no need for the user to
 * touch the map-style buttons.
 */
let _gp3dtDistanceHandler = null;
let _gp3dtDistanceIsFar = null; // tri-state cache: null = unknown yet, so first check always applies

/**
 * ── GP3DT DETAIL DISTANCE ─────────────────────────────────────────────────
 * Settings → GP3DT → "GP3DT Detail Distance" slider (1–100). Unlike
 * "GP3DT Render Distance" above (which just decides the altitude/distance
 * beyond which GP3DT is hidden entirely), this one controls how far away a
 * tile can be and STILL get rendered at full detail. Cesium's
 * dynamicScreenSpaceErrorDensity is what actually causes that "there's a
 * building a kilometer away but it looks blank/low-res" effect — it makes
 * the tileset treat distant tiles as if they had a much higher (worse)
 * screen-space error than they really do, so they get skipped or replaced
 * with coarser LOD tiles to save perf. Lower density = detail preserved
 * further out; higher density = detail drops off quickly with distance.
 *
 * The slider itself is framed as "distance" (higher = see detail farther),
 * so we map it inversely onto density with an exponential curve — small
 * slider changes near the low end matter a lot, matching how the
 * dynamicScreenSpaceErrorDensity value itself behaves.
 */
const GP3DT_DETAIL_DENSITY_MIN = 0.0002;  // slider = 100 → detail preserved at max distance
const GP3DT_DETAIL_DENSITY_MAX = 0.02;    // slider = 1   → detail drops off very close to camera

function _gp3dtDetailDistanceLabel(val) {
    if (val <= 15) return 'Short';
    if (val <= 45) return 'Normal';
    if (val <= 75) return 'Far';
    return 'Ultra-Far';
}

function updateGP3DTDetailDistance(val) {
    const slider = Math.min(100, Math.max(1, parseFloat(val)));
    const t = (slider - 1) / 99; // 0..1
    const density = GP3DT_DETAIL_DENSITY_MAX * Math.pow(GP3DT_DETAIL_DENSITY_MIN / GP3DT_DETAIL_DENSITY_MAX, t);

    gp3dtSettings.dynamicScreenSpaceErrorDensity = density;
    // Manual slider tweak — no longer guaranteed to match a preset exactly.
    gp3dtSettings.preset = 'custom';
    const presetSelect = document.getElementById('gp3dt-quality-preset');
    if (presetSelect) {
        if (!presetSelect.querySelector('option[value="custom"]')) {
            const opt = document.createElement('option');
            opt.value = 'custom'; opt.textContent = '✏️ Custom';
            presetSelect.appendChild(opt);
        }
        presetSelect.value = 'custom';
    }

    const label = document.getElementById('val-gp3dt-detail-distance');
    if (label) label.textContent = _gp3dtDetailDistanceLabel(slider);

    if (settings.mapStyle === 'photoreal') applyGP3DTQualitySettings();
    saveSettingsV2();
}

function updateGP3DTRenderDistance(val) {
    settings.gp3dtRenderDistance = Math.max(600, parseFloat(val)); // 600m floor
    const label = document.getElementById('val-gp3dt-render-distance');
    if (label) label.textContent = `${Math.round(settings.gp3dtRenderDistance)} m`;
    _gp3dtDistanceIsFar = null; // force a re-evaluation on the next frame
    applyGP3DTDistanceSwitch();
    saveSettingsV2();
}

function _gp3dtDistanceCameraHeight() {
    if (!cesiumViewer || !cesiumViewer.scene || !cesiumViewer.scene.camera) return null;
    const carto = cesiumViewer.scene.camera.positionCartographic;
    if (!carto || !isFinite(carto.height)) return null;
    return carto.height;
}

// Cached WorldTerrain promise used ONLY by the airplane far-distance fallback
// below — kept separate from tryEnableWorldTerrain()'s own provider so we
// don't have to fight its `settings.mapStyle !== 'cesium'` guard, and so we
// only fetch the terrain tileset once per session no matter how many times
// the plane crosses the render-distance threshold.
let _gp3dtFallbackTerrainPromise = null;

function _gp3dtLoadFallbackWorldTerrain() {
    if (!CONFIG.CESIUM_ION) return null;
    if (_gp3dtFallbackTerrainPromise) return _gp3dtFallbackTerrainPromise;
    try {
        Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION;
        _gp3dtFallbackTerrainPromise = Promise.resolve(
            typeof Cesium.createWorldTerrainAsync === 'function'
                ? Cesium.createWorldTerrainAsync({ requestWaterMask: true })
                : Cesium.createWorldTerrain({ requestWaterMask: true })
        ).catch(e => {
            console.warn('GP3DT fallback WorldTerrain failed to load:', e);
            _gp3dtFallbackTerrainPromise = null; // allow retry next time
            return null;
        });
    } catch (e) {
        console.warn('GP3DT fallback WorldTerrain init failed:', e);
        _gp3dtFallbackTerrainPromise = null;
    }
    return _gp3dtFallbackTerrainPromise;
}

function _gp3dtDistanceSetFar(isFar) {
    if (!cesiumViewer) return;
    _gp3dtDistanceIsFar = isFar;

    // Only planes ('plane') get the World Terrain swap — ground
    // vehicles never fly high enough for this to matter, so for them the
    // old "just stop rendering, show nothing" behaviour still applies.
    const inPlane = typeof isPlaneType === 'function' && isPlaneType(state.vehicle);

    if (isFar) {
        // Beyond render distance — hide GP3DT.
        if (photorealTileset) photorealTileset.show = false;

        if (inPlane) {
            // Airplane climbed high enough that GP3DT tiles would vanish —
            // switch to Cesium World Terrain (elevation only, NO OSM
            // Buildings) instead of leaving the ground unrendered.
            cesiumViewer.scene.globe.show = true;
            const terrainPromise = _gp3dtLoadFallbackWorldTerrain();
            if (terrainPromise) {
                terrainPromise.then(tp => {
                    // Bail out if we've since come back down or torn down the viewer.
                    if (!tp || !cesiumViewer || !_gp3dtDistanceIsFar) return;
                    cesiumViewer.terrainProvider = tp;
                    cesiumViewer.scene.requestRender();
                });
            }
        }
        // Ground vehicles (or no Ion token available): nothing shown in
        // place of GP3DT, matching the previous behaviour exactly.
    } else {
        // Back in GP3DT range — restore normal photoreal rendering.
        if (photorealTileset) photorealTileset.show = true;
        // Undo the World Terrain fallback, if it was engaged.
        cesiumViewer.scene.globe.show = false;
        cesiumViewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
    }
    cesiumViewer.scene.requestRender();
}

function applyGP3DTDistanceSwitch() {
    if (!cesiumViewer || !cesiumViewer.scene) return;

    if (settings.mapStyle !== 'photoreal') {
        // Not in GP3DT mode — nothing to switch, and make sure any prior
        // forced-far state doesn't leak into the 'cesium' style's own logic.
        if (_gp3dtDistanceHandler) { _gp3dtDistanceHandler(); _gp3dtDistanceHandler = null; }
        _gp3dtDistanceIsFar = null;
        return;
    }

    if (!_gp3dtDistanceHandler) {
        _gp3dtDistanceHandler = cesiumViewer.scene.postRender.addEventListener(() => {
            if (settings.mapStyle !== 'photoreal' || !photorealTileset) return;
            const h = _gp3dtDistanceCameraHeight();
            if (h === null) return;
            const isFar = h > settings.gp3dtRenderDistance;
            if (isFar !== _gp3dtDistanceIsFar) _gp3dtDistanceSetFar(isFar);
        });
    }

    // Run one immediate check so the correct state applies right away
    // (e.g. right after loading the tileset or moving the slider) instead
    // of waiting for the next postRender tick.
    const h = _gp3dtDistanceCameraHeight();
    if (h !== null) {
        const isFar = h > settings.gp3dtRenderDistance;
        if (isFar !== _gp3dtDistanceIsFar) _gp3dtDistanceSetFar(isFar);
    }
}

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

    // Ground collision (applyAirportCircleCollision) already checks
    // settings.renderMode === '3D' itself each frame — no persistent
    // world/state to tear down when leaving 3D mode.

    const wasCesium = document.body.classList.contains('is-cesium');
    settings.renderMode = mode;

    document.getElementById('btn-mode-3d').classList.toggle('active',  mode === '3D');
    document.getElementById('btn-mode-css').classList.toggle('active', mode === 'CSS');
    document.getElementById('btn-mode-2d').classList.toggle('active',  mode === '2D');

    const tiltSlider = document.getElementById('set-cam-tilt');
    const viewFirstBtn = document.getElementById('btn-view-first');
    const viewThirdBtn = document.getElementById('btn-view-third');
    const wantHybrid = document.getElementById('map-layer-select').value === 'hybrid';

    // In 3D (Cesium) mode, imagery style (sat/hybrid), orientation
    // (North Up/Heading Up), Preload, and Day/Night all move exclusively
    // into Settings — 3D Mode → Imagery ("Map Style"), → Controls
    // ("Orientation"), → Streaming ("Quick Preload"), and → Sky
    // ("Day / Night") respectively — to keep the topbar uncluttered.
    // They stay visible in CSS/2D mode.
    const mapLayerSelectEl = document.getElementById('map-layer-select');
    const orientationBtnEl = document.getElementById('btn-orientation');
    const preloadBtnEl     = document.getElementById('btn-preload-quick');
    const dayNightBtnEl    = document.getElementById('btn-day-night');
    if (mapLayerSelectEl) mapLayerSelectEl.style.display = (mode === '3D') ? 'none' : '';
    if (orientationBtnEl) orientationBtnEl.style.display = (mode === '3D' || settings.showCompass === false) ? 'none' : '';
    if (preloadBtnEl)     preloadBtnEl.style.display     = (mode === '3D') ? 'none' : '';
    if (dayNightBtnEl)    dayNightBtnEl.style.display    = (mode === '3D') ? 'none' : '';

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
        const _ccBtn = document.getElementById('btn-cockpit-cam-open');
        if (_ccBtn) _ccBtn.style.display = 'none';
        _updateFlashlightButtonVisibility();
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
        const _ccBtn2 = document.getElementById('btn-cockpit-cam-open');
        if (_ccBtn2) _ccBtn2.style.display = 'none';
        _updateFlashlightButtonVisibility();
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

function updateVehicleScale(val)   {
    settings.vehicleScale = parseFloat(val);
    const txt = parseFloat(val).toFixed(1);
    ['val-veh-size', 'val-veh-size-3d'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = txt; });
    ['set-veh-size', 'set-veh-size-3d'].forEach(id => { const el = document.getElementById(id); if (el) el.value = val; });
    saveSettingsV2();
}
function updatePlaneHeightOffset(val) {
    let num = parseFloat(val);
    if (isNaN(num)) return;
    num = Math.max(-1000, Math.min(1000, num));
    settings.planeHeightOffset = num;
    const label = document.getElementById('val-plane-height-offset');
    if (label) label.textContent = num.toFixed(1);
    // Keep the slider and the precise-entry textbox in sync with each other.
    const slider = document.getElementById('set-plane-height-offset');
    if (slider && parseFloat(slider.value) !== num) slider.value = num;
    const input = document.getElementById('set-plane-height-offset-input');
    if (input && parseFloat(input.value) !== num) input.value = num;
    saveSettingsV2();
}
function updateMapZoom(val)        { settings.mapZoom = parseFloat(val); document.getElementById('val-map-zoom').innerText = val; map.setZoom(settings.mapZoom); }
function updateCameraZoom(val)     { settings.cameraZoom = parseFloat(val); document.getElementById('val-cam-zoom').innerText = val; }
function updatePreloadRadius(val)  { settings.preloadRadius = parseFloat(val); document.getElementById('val-preload-radius').innerText = parseFloat(val).toFixed(1); }

function updateVehicleVisuals() {
    const isPlane = isPlaneType(state.vehicle);
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
    if (isPlaneType(state.vehicle)) {
        // Switching into the plane keeps its current lat/lng/heading —
        // it no longer teleports to a fixed spawn point, so switching
        // back and forth between vehicles never causes an unexpected jump.
        flight.pitch = 0; flight.roll = 0;
        flight.verticalSpeed = 0; flight.throttle = 0;
        flight.gearDown = true; flight.brakeActive = false; flight.reverseActive = false; flight.flapsDown = false;
        flight.groundRef = null;
        flight.rudderDeflection = 0;
        flight.ths = 0;
        trimWheel.dragging = false;
        flightInput.pitch = 0; flightInput.roll = 0; flightInput.yaw = 0;
        tillerInput = 0;
        ensureFlightSim(true); // reseed the 6-DOF sim at the new position/attitude

        const slider = document.getElementById('flight-throttle-slider');
        const val = document.getElementById('flight-throttle-val');
        if (slider) slider.value = 0;
        if (val) val.textContent = formatThrottleReadout(0);

        const yawSliderEl = document.getElementById('flight-yaw-slider');
        if (yawSliderEl) yawSliderEl.value = 0;

        const reverseBtn = document.getElementById('btn-flight-reverse');
        if (reverseBtn) reverseBtn.classList.remove('active');

        if (map) map.setView([state.lat, state.lng], settings.mapZoom);
        baseLat = state.lat; baseLng = state.lng;
    }
    // Avoid a camera jump-cut: the chase-cam smoothing state was tracking
    // the previous vehicle type's position/height.
    resetCameraSmoothing();
    updateVehicleVisuals();

    // Cockpit Cam Adjuster now shows/edits THIS vehicle's own settings —
    // refresh its displayed numbers (and the trigger button's visibility)
    // immediately on switch, whether or not the modal happens to be open.
    if (typeof buildCockpitCamModal === 'function') buildCockpitCamModal();

    // Airplane settings tab only applies while flying — keep it greyed
    // out/enabled in step with the vehicle switch even if Settings happens
    // to already be open.
    updateSettingsTabStates();
});
updateVehicleVisuals();
updateSettingsTabStates();

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
    const label = state.headUp ? '🧭 Auto Up' : '🧭 North Up';
    const btn = document.getElementById('btn-orientation');
    if (btn) { btn.innerText = label; btn.classList.toggle('active', state.headUp); }
    const settingsBtn = document.getElementById('set-orientation-toggle');
    if (settingsBtn) { settingsBtn.innerText = label; settingsBtn.classList.toggle('active', state.headUp); }
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

function setDestination(lat, lng, label, destIcao) {
    state.destLat = lat; state.destLng = lng;
    state.destLabel = label || null;
    state.destIcao = destIcao || null;
    state.destHdg = null; // resolved asynchronously below (runway approach heading), if available
    document.getElementById('gps-nav-info').style.display = 'flex';
    drawNavigationRoute();

    // If we know the destination ICAO, try to resolve its runway approach
    // heading (used by the procedural route to line the aircraft up with a
    // real runway on arrival) and redraw once it's available.
    if (state.destIcao) {
        RunwayDB.load(() => {
            if (state.destIcao !== destIcao) return; // destination changed while loading
            state.destHdg = _resolveApproachHeading(destIcao, state.lat, state.lng, lat, lng);
            drawNavigationRoute();
        });
    }
}

/**
 * setGPSDestinationFromLanding — wires the landing site chosen alongside the
 * takeoff airport (Spawn screen → 🛬 GPS Destination) into the GPS as the
 * navigation target. drawNavigationRoute() then builds a procedural course:
 * a straight climb-out on the departure runway heading, a straight cruise
 * leg, and a straight final-approach leg lined up with the destination
 * runway — with every turn rounded into a smooth arc so the pilot never has
 * to make a sharp turn.
 */
function setGPSDestinationFromLanding(ap) {
    if (!ap) return;
    const label = `${ap.name}${ap.icao ? ' (' + ap.icao + ')' : ''}`;
    setDestination(ap.lat, ap.lng, label, (ap.icao && ap.icao !== '—') ? ap.icao : null);
}

/**
 * _resolveApproachHeading — looks up the destination airport's longest
 * runway (via RunwayDB) and returns whichever end's published heading best
 * matches the inbound direction of flight, so the final leg of the
 * procedural route lines the aircraft up with a real runway instead of an
 * arbitrary bearing. Returns null if no runway data is available.
 */
function _resolveApproachHeading(icao, fromLat, fromLng, toLat, toLng) {
    if (!icao || !RunwayDB.isLoaded()) return null;
    const runways = RunwayDB.getRunways(icao);
    if (!runways.length) return null;
    const longest = runways.slice().sort((a, b) => b.lengthFt - a.lengthFt)[0];
    const candidates = [longest.leHdg, longest.heHdg].filter(h => typeof h === 'number' && !isNaN(h));
    if (!candidates.length) return null;

    const inboundBearing = turf.bearing(turf.point([fromLng, fromLat]), turf.point([toLng, toLat]));
    const angDiff = (a, b) => Math.abs(((a - b + 540) % 360) - 180);

    let best = candidates[0], bestDiff = angDiff(inboundBearing, candidates[0]);
    for (const h of candidates) {
        const d = angDiff(inboundBearing, h);
        if (d < bestDiff) { bestDiff = d; best = h; }
    }
    return best;
}

function drawNavigationRoute() {
    if (!state.destLat) return;

    // Remove any existing route (either routing control or straight plane line)
    if (routingControl) { map.removeControl(routingControl); routingControl = null; }
    if (planeStraightLine) { map.removeLayer(planeStraightLine); planeStraightLine = null; }
    navCruiseLegHeading = null;
    updateNavCruiseLegHeadingUI();

    const searchInput = document.getElementById('gps-search');
    const destText = state.destLabel || ((searchInput && searchInput.value) ? searchInput.value : 'Destination');
    document.getElementById('gps-minimap-dest-label').innerText = '📍 ' + destText;
    document.getElementById('gps-minimap-icon').innerText = '🧭';

    if (isPlaneType(state.vehicle)) {
        // ── Airplane mode: procedural takeoff/cruise/landing course ────────
        // 1) straight line A→B is the reference,
        // 2) departure heading (state.originHdg) and arrival/runway heading
        //    (state.destHdg) give the "arrows" at each end,
        // 3) build a straight-segment course that leaves A on its runway
        //    heading and arrives at B on its runway heading,
        // 4) round every turn with a tangent arc so there are no sharp
        //    corners — a Dubins-style smoothed flight path.
        if (typeof state.originHdg === 'number' && typeof state.destHdg === 'number') {
            const routeLatLngs = computeProceduralRoute(
                state.lat, state.lng, state.originHdg,
                state.destLat, state.destLng, state.destHdg
            );
            _drawPlaneRoute(routeLatLngs, false);
            return;
        }
        // Missing a departure or arrival runway heading — fall back to a
        // great-circle course.
        _drawGreatCircleFallback();
        return;
    }

    // ── Car / Bus mode: OSRM street routing (unchanged) ───────────────────
    routingControl = L.Routing.control({
        waypoints: [L.latLng(state.lat, state.lng), L.latLng(state.destLat, state.destLng)],
        router: L.Routing.osrmv1({ profile: 'driving' }),
        lineOptions: { styles: [{color: '#2563eb', weight: 8, opacity: 0.8}] },
        createMarker: function() { return null; },
        show: false, addWaypoints: false, routeWhileDragging: false
    }).addTo(map);

    routingControl.on('routesfound', function(e) {
        const coords = e.routes[0] && e.routes[0].coordinates;
        if (coords && coords.length > 0) {
            updateNavMapRoute(coords.map(c => L.latLng(c.lat, c.lng)));
        }
    });
}

/**
 * _drawGreatCircleFallback — a curved shortest-path track computed with
 * turf.greatCircle() (or a plain straight segment if turf is unavailable).
 * Used whenever a departure/arrival runway heading isn't known.
 */
function _drawGreatCircleFallback() {
    let routeLatLngs;
    try {
        const gc = turf.greatCircle(
            turf.point([state.lng, state.lat]),
            turf.point([state.destLng, state.destLat]),
            { npoints: 100 }
        );
        const coordSets = gc.geometry.type === 'MultiLineString' ? gc.geometry.coordinates : [gc.geometry.coordinates];
        routeLatLngs = coordSets.flat().map(c => L.latLng(c[1], c[0]));
    } catch (e) {
        routeLatLngs = [L.latLng(state.lat, state.lng), L.latLng(state.destLat, state.destLng)];
    }
    _drawPlaneRoute(routeLatLngs, true);
}

/**
 * _drawPlaneRoute — draws the given list of L.latLng waypoints as the active
 * plane route on both the main map and the GPS mini-map, styled in the
 * magenta/dashed look used by RFS-style navigation displays.
 * @param {boolean} isFallback - true for the great-circle fallback (drawn
 *        slightly thinner/blue-tinted so it's visually distinguishable from
 *        the procedural runway-to-runway route).
 */
function _drawPlaneRoute(routeLatLngs, isFallback) {
    if (planeStraightLine) { map.removeLayer(planeStraightLine); planeStraightLine = null; }
    planeStraightLine = L.polyline(routeLatLngs, {
        color: isFallback ? '#2563eb' : '#ff00ff',
        weight: 5,
        opacity: 0.9,
        dashArray: isFallback ? '12 6' : null,
        lineJoin: 'round'
    }).addTo(map);

    updateNavMapRoute(routeLatLngs);
}

/**
 * computeProceduralRoute — builds a smooth, "no sharp turns" flight course
 * between a departure point/heading and an arrival point/heading:
 *
 *   1. Straight A→B is the naive reference course.
 *   2. The plane instead leaves A flying its departure heading (hdgA) and
 *      arrives at B flying its runway heading (hdgB) — the "arrows" at each
 *      end of the route.
 *   3. Those two legs are joined by a straight cruise leg, forming a
 *      three-segment (climb‑out / cruise / final‑approach) course.
 *   4. Every interior turn is replaced with a tangent circular arc (a
 *      "fillet") so the whole course is a continuous, mathematically smooth
 *      curve with no sharp corners — matching the shape a real aircraft can
 *      actually fly.
 *
 * @returns {L.LatLng[]} smoothed route waypoints from A to B.
 */
function computeProceduralRoute(originLat, originLng, hdgA, destLat, destLng, hdgB) {
    const A = turf.point([originLng, originLat]);
    const B = turf.point([destLng, destLat]);
    const totalDist = turf.distance(A, B, { units: 'nauticalmiles' });

    // Length of the straight departure/arrival legs, scaled to the overall
    // route length (short hops get short legs) but kept within sane bounds.
    let legDist = Math.min(Math.max(totalDist * 0.18, 3), 20);
    if (totalDist < legDist * 2.4) legDist = Math.max(totalDist / 2.4, 0.4);

    // P1: point reached after flying straight out from A on hdgA for legDist.
    const P1 = turf.destination(A, legDist, hdgA, { units: 'nauticalmiles' });
    // P2: point on the final-approach leg, legDist back from B against hdgB
    // (i.e. the aircraft flies TOWARD B on heading hdgB from P2).
    const P2 = turf.destination(B, legDist, (hdgB + 180) % 360, { units: 'nauticalmiles' });

    const radiusNm = Math.max(Math.min(legDist * 0.45, 8), 0.3);

    const path = [A];
    _appendFillet(path, A, P1, P2, radiusNm);
    _appendFillet(path, P1, P2, B, radiusNm);
    path.push(B);

    // P1->P2 is the long straight cruise leg between the two turns (takeoff
    // -> straight -> turn -> [this leg] -> turn -> straight -> landing).
    // Remember its heading so the GPS mini-map can show it to the pilot to
    // dial into the autopilot's HDG window.
    navCruiseLegHeading = Math.round((turf.bearing(P1, P2) + 360) % 360);
    updateNavCruiseLegHeadingUI();

    return path.map(pt => L.latLng(pt.geometry.coordinates[1], pt.geometry.coordinates[0]));
}

function updateNavCruiseLegHeadingUI() {
    const el = document.getElementById('gps-minimap-leg-hdg');
    if (el) {
        el.style.display = navCruiseLegHeading === null ? 'none' : '';
        if (navCruiseLegHeading !== null) {
            el.innerText = '✈️ Cruise leg HDG: ' + String(navCruiseLegHeading).padStart(3, '0') + '°';
        }
    }
}

/**
 * _appendFillet — replaces the sharp corner at `vertex` (between the
 * straight segments prev→vertex and vertex→next) with a tangent circular
 * arc of the given radius, and pushes the resulting arc points onto `path`.
 * This is the "round every turn" step that removes sharp turns from the
 * procedural route.
 */
function _appendFillet(path, prev, vertex, next, radiusNm) {
    const bearingIn  = turf.bearing(prev, vertex);
    const bearingOut = turf.bearing(vertex, next);
    let turn = ((bearingOut - bearingIn + 540) % 360) - 180; // signed turn angle, (-180, 180]
    if (Math.abs(turn) < 0.5) { path.push(vertex); return; } // essentially straight — no fillet needed

    const halfAngleRad = (turn * Math.PI / 180) / 2;
    let tangentLen = radiusNm * Math.abs(Math.tan(halfAngleRad));

    // Don't let the fillet's tangent points reach past the middle of either
    // adjacent segment (keeps the arc sane on short legs).
    const distPrev = turf.distance(prev, vertex, { units: 'nauticalmiles' });
    const distNext = turf.distance(vertex, next, { units: 'nauticalmiles' });
    const maxTangent = Math.min(distPrev, distNext) * 0.45;
    let radius = radiusNm;
    if (tangentLen > maxTangent && Math.abs(Math.tan(halfAngleRad)) > 1e-6) {
        tangentLen = maxTangent;
        radius = tangentLen / Math.abs(Math.tan(halfAngleRad));
    }
    if (radius < 1e-3) { path.push(vertex); return; }

    const T1 = turf.destination(vertex, tangentLen, bearingIn + 180, { units: 'nauticalmiles' });
    const sign = turn >= 0 ? 1 : -1;
    const centerBearing = bearingIn + sign * 90;
    const center = turf.destination(T1, radius, centerBearing, { units: 'nauticalmiles' });
    const bearingCenterToT1 = turf.bearing(center, T1);

    const numSteps = Math.max(4, Math.round(Math.abs(turn) / 6));
    for (let i = 0; i <= numSteps; i++) {
        const frac = i / numSteps;
        const brg = bearingCenterToT1 + sign * Math.abs(turn) * frac;
        path.push(turf.destination(center, radius, brg, { units: 'nauticalmiles' }));
    }
}

function cancelNavigation() {
    state.destLat = null; state.destLng = null; state.destLabel = null; state.destIcao = null;
    state.destHdg = null;
    navCruiseLegHeading = null;
    updateNavCruiseLegHeadingUI();
    if(routingControl) { map.removeControl(routingControl); routingControl = null; }
    if(planeStraightLine) { map.removeLayer(planeStraightLine); planeStraightLine = null; }
    document.getElementById('gps-nav-info').style.display = 'none';
    // Clear nav-map overlays
    clearNavMapRoute();
    if (navMapDestMarker) { navMap && navMap.removeLayer(navMapDestMarker); navMapDestMarker = null; }
    document.getElementById('gps-minimap-dest-label').innerText = 'No destination set';
    document.getElementById('gps-minimap-dist').innerText = '—';
    document.getElementById('gps-minimap-icon').innerText = '🗺️';
}

/**
 * Free-drag resize handle for the GPS mini-map (replaces the old fixed
 * ↖️↘️ enlarge-toggle button). Dragging the ↕️ handle in the bottom-right
 * corner smoothly grows/shrinks the overlay to any size, keeping the
 * viewport's aspect ratio and re-centering the oversized rotating Leaflet
 * map so it still fills the viewport correctly at every size.
 */
(function () {
    const handle    = document.getElementById('gps-minimap-resize-handle');
    const overlay   = document.getElementById('gps-minimap-overlay');
    const viewport  = document.getElementById('gps-minimap-viewport');
    const mapEl     = document.getElementById('gps-minimap');
    if (!handle || !overlay || !viewport || !mapEl) return;

    const BASE_W = 270, BASE_H = 215;          // original viewport size
    const BASE_MAP_W = 400, BASE_MAP_H = 400;  // original oversized map size
    const MIN_W = 160, MAX_W = 640;

    let resizing = false, startX = 0, startY = 0, startW = BASE_W;

    function applySize(w) {
        w = Math.max(MIN_W, Math.min(MAX_W, w));
        const h = w * (BASE_H / BASE_W);
        overlay.style.width = w + 'px';
        viewport.style.width = w + 'px';
        viewport.style.height = h + 'px';
        const mapW = w * (BASE_MAP_W / BASE_W);
        const mapH = h * (BASE_MAP_H / BASE_H);
        mapEl.style.width = mapW + 'px';
        mapEl.style.height = mapH + 'px';
        mapEl.style.left = ((w - mapW) / 2) + 'px';
        mapEl.style.top = ((h - mapH) / 2) + 'px';
        if (navMap) navMap.invalidateSize();
    }

    handle.addEventListener('pointerdown', (e) => {
        resizing = true;
        startX = e.clientX; startY = e.clientY;
        startW = overlay.getBoundingClientRect().width;
        handle.setPointerCapture(e.pointerId);
        e.stopPropagation();
        e.preventDefault();
    });
    handle.addEventListener('pointermove', (e) => {
        if (!resizing) return;
        // Diagonal drag (↕️ handle also moves freely, not locked to one axis)
        const delta = (e.clientX - startX) + (e.clientY - startY);
        applySize(startW + delta / 2);
    });
    ['pointerup', 'pointercancel'].forEach(ev =>
        handle.addEventListener(ev, () => { resizing = false; }));
})();

/**
 * Drag-to-move + minimize for the NAV MAP overlay (no close button — the
 * map has no way to be fully dismissed, only collapsed to its header).
 * Mirrors the PFD window's drag/minimize behavior.
 */
(function () {
    const overlay  = document.getElementById('gps-minimap-overlay');
    const header   = document.getElementById('gps-minimap-header');
    const minBtn   = document.getElementById('gps-minimap-btn-min');
    if (!overlay || !header || !minBtn) return;

    let dragging = false, dragOX = 0, dragOY = 0, minimized = false;

    header.addEventListener('pointerdown', (e) => {
        if (e.target.tagName === 'BUTTON') return;
        dragging = true;
        const r = overlay.getBoundingClientRect();
        dragOX = e.clientX - r.left;
        dragOY = e.clientY - r.top;
        try { header.setPointerCapture(e.pointerId); } catch (err) {}
        e.preventDefault();
    });
    header.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        let x = e.clientX - dragOX;
        let y = e.clientY - dragOY;
        x = Math.max(0, Math.min(window.innerWidth - 60, x));
        y = Math.max(0, Math.min(window.innerHeight - 40, y));
        overlay.style.left = x + 'px';
        overlay.style.top = y + 'px';
        overlay.style.right = 'auto';
    });
    ['pointerup', 'pointercancel'].forEach(ev =>
        header.addEventListener(ev, () => { dragging = false; }));

    minBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        minimized = !minimized;
        overlay.classList.toggle('nav-minimized', minimized);
        minBtn.textContent = minimized ? '▢' : '–';
    });
})();


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
        // Plane gets its own approach speed (A320 ~150 kt); ground vehicles keep 0
        if (isPlaneType(state.vehicle)) {
            const approachKt = 150;
            flight.speed     = approachKt;
            flight.throttle  = 50;
            flight.pitch     = 0;
            flight.roll      = 0;
            flight.alt       = Math.max(flight.alt, 2500); // ensure some altitude
            flight.groundRef = null; // will re-lock next frame
            state.speed      = approachKt * 1.852; // display speed in km/h
            ensureFlightSim(true); // reseed the 6-DOF sim at the teleported position/attitude
        } else {
            state.speed = 0;
        }
        cancelNavigation();
        map.setView([state.lat, state.lng], settings.mapZoom);
        baseLat = state.lat; baseLng = state.lng;
        // Position just jumped instantly — reset the camera lag/spring
        // state and the ground-height outlier filter so the vehicle's
        // height snaps to the new location's real terrain immediately
        // instead of crawling toward it over the next second (which was
        // making teleported vehicles appear to "fly above nothing").
        resetCameraSmoothing();
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
// 6b. FLIGHT MODULE — 6-DOF FLIGHT DYNAMICS ENGINE
// ==========================================
/**
 * AdvancedFlightDynamics — full 6-Degrees-of-Freedom rigid body simulation.
 * Replaces the old arcade pitch/roll/altitude fallback with:
 *   - Quaternion attitude kinematics (no gimbal lock)
 *   - RK4 numerical integration
 *   - ISA atmosphere model (troposphere + stratosphere)
 *   - Full stability-derivative aerodynamics with compressibility
 *     (Prandtl-Glauert) and wave-drag corrections
 *   - Propeller dynamics: P-factor + gyroscopic precession
 *   - A simple post-stall lift/drag model + gear/brake drag so the
 *     game's stall and ground-handling feel is preserved
 *
 * State vector X = [u, v, w, p, q, r, e0, e1, e2, e3, x, y, z]
 *   u,v,w   body-axis velocities (m/s)
 *   p,q,r   body-axis angular rates (rad/s)
 *   e0..e3  attitude quaternion
 *   x,y,z   Earth-fixed NED position (m) — North, East, Down
 */
class AdvancedFlightDynamics {
    constructor(config) {
        this.state = new Float64Array(13);
        this.state[6] = 1.0; // identity quaternion

        this.mass = config.mass;
        this.S  = config.S;
        this.b  = config.b;
        this.c  = config.c;
        this.AR = config.AR;

        const Ix = config.Ix, Iy = config.Iy, Iz = config.Iz, Ixz = config.Ixz;
        const Gamma = Ix * Iz - Ixz * Ixz;
        this.Iy = Iy;
        this.G1 = (Ixz * (Ix + Iy - Iz)) / Gamma;
        this.G2 = (Iz * (Iz - Iy) + Ixz * Ixz) / Gamma;
        this.G3 = Iz / Gamma;
        this.G4 = Ixz / Gamma;
        this.G5 = (Iz - Ix) / Iy;
        this.G6 = Ixz / Iy;
        this.G7 = (Ix * (Ix - Iy) + Ixz * Ixz) / Gamma;
        this.G8 = Ix / Gamma;

        this.aero = config.aero;
        this.prop = config.prop;
    }

    // --- ATMOSPHERE (ISA Model) ---
    getAtmosphere(altitude) {
        const h = Math.max(0, altitude);
        let T, P, rho;
        const g = 9.80665, R = 287.05;
        if (h < 11000) { // Troposphere
            T = 288.15 - 0.0065 * h;
            P = 101325 * Math.pow(T / 288.15, 5.2561);
        } else { // Stratosphere (isothermal layer)
            T = 216.65;
            P = 22632 * Math.exp(-g * (h - 11000) / (R * T));
        }
        rho = P / (R * T);
        const a = Math.sqrt(1.4 * R * T);
        return { T, P, rho, a };
    }

    // --- DERIVATIVES (the core physics) ---
    calculateDerivatives(state, controls) {
        const [u, v, w, p, q, r, e0, e1, e2, e3, x, y, z] = state;
        const { delta_e, delta_a, delta_r, throttle, gearDown, brakeActive, reverseActive, flapsDown } = controls;

        const VT = Math.max(0.01, Math.sqrt(u * u + v * v + w * w));
        const alpha = Math.atan2(w, u);
        const beta = Math.asin(Math.min(1, Math.max(-1, v / Math.max(VT, 0.1))));

        const atm = this.getAtmosphere(-z); // NED: -z = altitude ASL
        const q_inf = 0.5 * atm.rho * VT * VT;
        const M = VT / atm.a;

        // --- AERODYNAMICS ---
        // Flaps: dumb high-lift-device model. Extending flaps adds camber
        // (CL0 boost), buys a bit more usable alpha before the stall break
        // (alphaStall boost), and costs some parasite drag (CD_flap) — just
        // enough that a heavy, high-clean-stall aircraft like the A320
        // (~140 kt clean) can be held under full control down around
        // 120-130 kt on approach instead of needing to fly the whole
        // pattern at cruise-ish speeds to stay off the stall.
        const flapCL0Boost     = flapsDown ? (this.aero.CLflap || 0) : 0;
        const flapAlphaBoost   = flapsDown ? (this.aero.alphaStallFlap || 0) : 0;
        const CD_flap          = flapsDown ? (this.aero.CD_flap || 0) : 0;

        const CL_lin = (this.aero.CL0 + flapCL0Boost) + this.aero.CLa * alpha + this.aero.CLq * (q * this.c / (2 * VT)) + this.aero.CLde * delta_e;

        // Post-stall lift falloff so the game keeps a recognizable stall break
        const alphaAbs = Math.abs(alpha);
        const alphaStallEff = this.aero.alphaStall + flapAlphaBoost;
        let CL_base = CL_lin;
        let CD_stall = 0;
        if (alphaAbs > alphaStallEff) {
            const over = alphaAbs - alphaStallEff;
            const stallFactor = Math.max(0.15, 1 - over * 3.5);
            CL_base = CL_lin * stallFactor;
            CD_stall = over * 1.8;
        }

        let CL_comp = M < 0.99 ? CL_base / Math.sqrt(1 - M * M) : CL_base * 2;

        // --- LOAD-FACTOR PROTECTION (flight-envelope lift limiter) ---
        // L = 1/2 * rho * V^2 * S * CL  <=  n_max * m * g
        // The flight computer clamps how much lift the wing is allowed to
        // generate so the airframe never sees more (or less, on the
        // negative side) g than its structural limit, exactly like the
        // A320's flight-envelope protection in Normal Law. Flaps-down
        // limits are tighter, matching the reduced structural margin in
        // the landing/approach configuration.
        if (this.aero.nMaxClean !== undefined) {
            const g0 = 9.80665;
            const nMax = flapsDown ? (this.aero.nMaxFlap != null ? this.aero.nMaxFlap : this.aero.nMaxClean)
                                    : this.aero.nMaxClean;
            const nMin = flapsDown ? (this.aero.nMinFlap != null ? this.aero.nMinFlap : this.aero.nMinClean)
                                    : this.aero.nMinClean;
            // CL_limit solved directly from L <= n*m*g:
            // CL_limit = n * m * g / (q_inf * S)
            const CL_limitPos = (nMax * this.mass * g0) / Math.max(1, q_inf * this.S);
            const CL_limitNeg = (nMin * this.mass * g0) / Math.max(1, q_inf * this.S);
            if (CL_comp > CL_limitPos) CL_comp = CL_limitPos;
            if (CL_comp < CL_limitNeg) CL_comp = CL_limitNeg;
        }

        const CDi = (CL_comp * CL_comp) / (Math.PI * this.AR * this.aero.e);
        const CD_wave = M > this.aero.Mcrit ? this.aero.Kc * Math.pow(M - this.aero.Mcrit, 2) : 0;
        const CD_gear  = gearDown    ? this.aero.CD_gear  : 0;
        const CD_brake = brakeActive ? this.aero.CD_brake : 0;
        const CD = this.aero.CD0 + CDi + CD_wave + CD_stall + CD_gear + CD_brake + CD_flap;

        const CX = -CD * Math.cos(alpha) + CL_comp * Math.sin(alpha);
        const CZ = -CD * Math.sin(alpha) - CL_comp * Math.cos(alpha);

        const CY = this.aero.CYb * beta + this.aero.CYp * (p * this.b / (2 * VT)) + this.aero.CYdr * delta_r;
        const Cl = this.aero.Clb * beta + this.aero.Clp * (p * this.b / (2 * VT)) + this.aero.Clda * delta_a;
        // THS (Trimmable Horizontal Stabilizer) trim contribution — folded
        // into the pitching-moment coefficient exactly like the elevator
        // term above (Cmde * delta_e), so it scales with dynamic pressure
        // the same physically-correct way: M_trim = q_inf*S*c*(Cmdt*delta_ths),
        // matching M = M_elevator + M_trim from the trim-wheel spec, just
        // expressed as coefficients (consistent with every other term in
        // this equation) rather than as a bare, speed-independent number.
        // delta_ths is in DEGREES (not radians, unlike delta_e) to match
        // the 0.12-per-degree gain given in that spec.
        const delta_ths = controls.delta_ths || 0;
        const Cm = this.aero.Cm0 + this.aero.Cma * alpha + this.aero.Cmq * (q * this.c / (2 * VT)) + this.aero.Cmde * delta_e
                 + (this.aero.Cmdt || 0) * delta_ths;
        const Cn = this.aero.Cnb * beta + this.aero.Cnp * (p * this.b / (2 * VT)) + this.aero.Cnr * (r * this.b / (2 * VT)) + this.aero.Cndr * delta_r;

        const F_ax = q_inf * this.S * CX;
        const F_ay = q_inf * this.S * CY;
        const F_az = q_inf * this.S * CZ;
        const L_aero = q_inf * this.S * this.b * Cl;
        const M_aero = q_inf * this.S * this.c * Cm;
        const N_aero = q_inf * this.S * this.b * Cn;

        // --- PROPULSION ---
        // Two independent propulsion models selected per-aircraft via
        // this.prop.type:
        //   'piston'  — propeller disc: P-factor + gyroscopic
        //               precession, thrust = shaft power / airspeed, blended
        //               through a propeller-efficiency (advance-ratio) curve.
        //   'jet'     — turbofan (A320): near-constant static thrust that
        //               falls off with air density (altitude) and has no
        //               1/VT singularity, so it behaves like a real jet
        //               instead of a scaled-up propeller.
        let Thrust, N_pfactor = 0, L_gyro = 0, M_gyro = 0;
        if (this.prop.type === 'jet') {
            const rhoRatio = atm.rho / 1.225;
            // Mild ram-drag speed lapse so thrust doesn't stay static-rated at cruise Mach.
            const speedLapse = Math.max(0.55, 1 - 0.12 * M);
            Thrust = this.prop.T_max * throttle * Math.pow(rhoRatio, 0.7) * speedLapse;
            if (reverseActive) Thrust = -Thrust * 0.45;
        } else {
            const n = this.prop.RPM / 60;
            const J = VT / (n * this.prop.d);
            const eta = this.prop.eta_max * (1 - Math.pow((J - this.prop.J_design) / this.prop.J_design, 2));
            Thrust = Math.max(0, (this.prop.P_max * throttle * eta) / Math.max(VT, 10));
            if (reverseActive) Thrust = -Thrust * 0.5;

            N_pfactor = Thrust * this.prop.y_offset * (alpha / this.prop.alpha_ref);
            const Hp = this.prop.I_prop * (this.prop.RPM * Math.PI / 30);
            L_gyro =  Hp * q;
            M_gyro = -Hp * p;
        }

        const Fx = F_ax + Thrust;
        const Fy = F_ay;
        const Fz = F_az;
        const L_tot = L_aero + L_gyro;
        const M_tot = M_aero + M_gyro;
        const N_tot = N_aero + N_pfactor;

        // --- GRAVITY (transformed via quaternion DCM) ---
        const R31 = 2 * (e1 * e3 - e0 * e2);
        const R32 = 2 * (e2 * e3 + e0 * e1);
        const R33 = e0 * e0 - e1 * e1 - e2 * e2 + e3 * e3;
        const gx = 9.80665 * R31;
        const gy = 9.80665 * R32;
        const gz = 9.80665 * R33;

        // --- EQUATIONS OF MOTION ---
        const u_dot = r * v - q * w + gx + Fx / this.mass;
        const v_dot = p * w - r * u + gy + Fy / this.mass;
        const w_dot = q * u - p * v + gz + Fz / this.mass;

        const p_dot = this.G1 * p * q - this.G2 * q * r + this.G3 * L_tot + this.G4 * N_tot;
        const q_dot = this.G5 * p * r - this.G6 * (p * p - r * r) + M_tot / this.Iy;
        const r_dot = this.G7 * p * q + this.G1 * q * r + this.G4 * L_tot + this.G8 * N_tot;

        const e0_dot = -0.5 * (e1 * p + e2 * q + e3 * r);
        const e1_dot =  0.5 * (e0 * p + e2 * r - e3 * q);
        const e2_dot =  0.5 * (e0 * q + e3 * p - e1 * r);
        const e3_dot =  0.5 * (e0 * r + e1 * q - e2 * p);

        const R11 = e0 * e0 + e1 * e1 - e2 * e2 - e3 * e3;
        const R12 = 2 * (e1 * e2 - e0 * e3);
        const R13 = 2 * (e1 * e3 + e0 * e2);
        const R21 = 2 * (e1 * e2 + e0 * e3);
        const R22 = e0 * e0 - e1 * e1 + e2 * e2 - e3 * e3;
        const R23 = 2 * (e2 * e3 - e0 * e1);

        const x_dot = R11 * u + R12 * v + R13 * w;
        const y_dot = R21 * u + R22 * v + R23 * w;
        const z_dot = R31 * u + R32 * v + R33 * w;

        return new Float64Array([
            u_dot, v_dot, w_dot,
            p_dot, q_dot, r_dot,
            e0_dot, e1_dot, e2_dot, e3_dot,
            x_dot, y_dot, z_dot
        ]);
    }

    // --- 4th-order Runge-Kutta integrator ---
    integrate(dt, controls) {
        const s = this.state;
        const k1 = this.calculateDerivatives(s, controls);

        const s2 = new Float64Array(13);
        for (let i = 0; i < 13; i++) s2[i] = s[i] + k1[i] * dt * 0.5;
        const k2 = this.calculateDerivatives(s2, controls);

        const s3 = new Float64Array(13);
        for (let i = 0; i < 13; i++) s3[i] = s[i] + k2[i] * dt * 0.5;
        const k3 = this.calculateDerivatives(s3, controls);

        const s4 = new Float64Array(13);
        for (let i = 0; i < 13; i++) s4[i] = s[i] + k3[i] * dt;
        const k4 = this.calculateDerivatives(s4, controls);

        for (let i = 0; i < 13; i++) {
            this.state[i] += (dt / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i]);
        }
        this.normalizeQuaternion();
    }

    normalizeQuaternion() {
        const norm = Math.sqrt(this.state[6] ** 2 + this.state[7] ** 2 + this.state[8] ** 2 + this.state[9] ** 2);
        if (norm > 0) {
            this.state[6] /= norm; this.state[7] /= norm;
            this.state[8] /= norm; this.state[9] /= norm;
        }
    }

    // --- Adapters used to bridge into the rest of the game (Euler angles, lat/lng heading) ---
    getEulerAngles() {
        const e0 = this.state[6], e1 = this.state[7], e2 = this.state[8], e3 = this.state[9];
        const roll  = Math.atan2(2 * (e0 * e1 + e2 * e3), 1 - 2 * (e1 * e1 + e2 * e2));
        const pitch = Math.asin(Math.max(-1, Math.min(1, 2 * (e0 * e2 - e3 * e1))));
        const yaw   = Math.atan2(2 * (e0 * e3 + e1 * e2), 1 - 2 * (e2 * e2 + e3 * e3));
        return { roll, pitch, yaw };
    }

    setAttitude(headingDeg, pitchRad, rollRad) {
        const yaw = headingDeg * Math.PI / 180;
        const cy = Math.cos(yaw * 0.5),   sy = Math.sin(yaw * 0.5);
        const cp = Math.cos(pitchRad * 0.5), sp = Math.sin(pitchRad * 0.5);
        const cr = Math.cos(rollRad * 0.5),  sr = Math.sin(rollRad * 0.5);
        this.state[6] = cr * cp * cy + sr * sp * sy;
        this.state[7] = sr * cp * cy - cr * sp * sy;
        this.state[8] = cr * sp * cy + sr * cp * sy;
        this.state[9] = cr * cp * sy - sr * sp * cy;
    }
}

/**
 * flightSim — the single AdvancedFlightDynamics instance driving the plane.
 * Config is tuned to roughly match the game's original envelope
 * (~50 kt stall, ~350 kt cruise/terminal), but is now driven by real
 * aerodynamic/inertial coupling instead of hand-scripted lerps.
 */
let flightSim = null;
let _flightPrevAltFt = null; // used to derive vertical speed (fpm) between frames

/**
 * FLIGHT_CONFIGS — fully independent aerodynamic/inertial/propulsion data
 * for the flyable aircraft. 'plane' is the Airbus A320, tuned to its
 * real-world envelope.
 */
const FLIGHT_CONFIGS = {
    // ── Airbus A320 — narrow-body twin-jet airliner ────────────────────
    // MTOW-ish operating mass, real wing geometry, CFM56-class turbofans.
    // Stall ~140 kt clean, cruise ~M0.78, Vmo ~350 kt — a heavy, inertia-
    // dominated airframe that resists quick pitch/roll input.
    plane: {
        mass: 64000,            // kg (typical mid-flight operating weight)
        S: 122.6,                // m^2 wing area
        b: 34.1,                 // m wingspan
        c: 4.29,                 // m mean aerodynamic chord
        AR: (34.1 * 34.1) / 122.6, // ≈ 9.5
        Ix: 2450000, Iy: 3700000, Iz: 5900000, Ixz: 95000, // kg*m^2 — big, sluggish inertia
        aero: {
            CL0: 0.25, CLa: 5.5, CLq: 7.5, CLde: 0.35,
            CD0: 0.020, e: 0.78, Mcrit: 0.78, Kc: 12,
            alphaStall: 14 * Math.PI / 180,
            CD_gear: 0.018, CD_brake: 0.07,
            // Landing flaps: knocks clean stall (~140 kt) down enough to
            // hold full control around 120-130 kt on approach.
            CLflap: 0.55, alphaStallFlap: 4 * Math.PI / 180, CD_flap: 0.035,
            // A320 Normal Law load-factor protection: +2.5g/-1.0g clean,
            // +2.0g/0g with flaps extended (tighter margin near the ground).
            nMaxClean: 2.5, nMinClean: -1.0,
            nMaxFlap: 2.0, nMinFlap: 0.0,
            CYb: -0.45, CYp: 0.0, CYdr: 0.12,
            Clb: -0.09, Clp: -0.35, Clda: 0.11,
            Cm0: 0.0, Cma: -1.3, Cmq: -18, Cmde: -1.5,
            // Trim-tab effectiveness of the THS, per DEGREE of stabilizer
            // deflection (see Cmdt usage above and the trim-wheel spec:
            // M_trim = 0.12 * THS). Positive THS (nose-up trim, up to
            // +13.5°) must produce a nose-up (positive) Cm, same sense as
            // a nose-up elevator command.
            Cmdt: 0.12,
            Cnb: 0.14, Cnp: -0.015, Cnr: -0.28, Cndr: -0.09
        },
        prop: {
            type: 'jet',
            T_max: 182000        // N — calibrated so TOGA (100%) at
                                 // flightAcceleration=1.0x reaches 180 kt in
                                 // ~35 s from a standing start (was 240000)
        }
    }
};

function createFlightSim(vehicleType) {
    const cfg = FLIGHT_CONFIGS[vehicleType] || FLIGHT_CONFIGS.plane;
    const sim = new AdvancedFlightDynamics(cfg);
    sim._vehicleType = vehicleType;
    return sim;
}

/**
 * ensureFlightSim — lazily creates the sim and seeds it from whatever the
 * legacy flight/state fields currently hold (used on first update after
 * spawn, or after a respawn resets flight.alt/pitch/roll/state.heading).
 */
function ensureFlightSim(reseed) {
    if (!flightSim || reseed || flightSim._vehicleType !== state.vehicle) {
        flightSim = createFlightSim(state.vehicle);
        const speedMps = Math.max(0, state.speed) / 3.6;
        flightSim.state[0] = speedMps; // u (forward body speed)
        flightSim.setAttitude(state.heading, flight.pitch, flight.roll);
        const groundRefM = flight.groundRef || 0;
        const altM = (flight.alt || 0) * 0.3048;
        flightSim.state[12] = -(groundRefM + altM); // z (NED, positive down)
        _flightPrevAltFt = flight.alt || 0;
    }
    return flightSim;
}

// ==========================================
// GROUND COLLISION
// ==========================================
// Ground/surface collision for Car, Bus, and Plane — always active while
// in 3D Cesium mode.
//
// Same philosophy as the runway lights (see _spawnNightLights /
// _addPapiLights): no manual per-point raycasting against the streamed
// tileset, no cache to keep warm, nothing that can go stale as GP3DT tiles
// load in at different levels of detail. The lights simply trust
// HeightReference.CLAMP_TO_GROUND to always sit on whatever surface is
// actually there; the ground collider is kept just as simple — a flat
// disc, radius _AIRPORT_COLLISION_RADIUS_M, centered on the spawn
// airport's elevation. Inside that disc "the ground" is that one flat
// height; outside it there's no ground collision at all (cruise flight,
// cross-country driving, etc. never needed it).
//
// Where that elevation number comes from: the OurAirports database
// `elevation_ft` field is a *published/surveyed* figure that frequently
// disagrees — sometimes by tens of meters — with whatever Cesium is
// actually rendering under the plane (World Terrain heightmap resolution,
// or the photorealistic 3D Tiles mesh, neither of which samples the same
// source data the database was compiled from). Since the collision/AGL
// math needs to match the *visual* ground, not the paper record,
// confirmSpawnLocation awaits _resolveAirportElevation (see below) before
// placing anything, and uses that real sampled height instead of the
// database value. That's what fixes the old symptom of needing
// planeHeightOffset maxed out at some airports and still not enough at
// others — and of spawning inside/under the terrain while a post-hoc
// correction caught up — the offset and the pop-in were both papering
// over a per-airport database/terrain mismatch that's now resolved
// before the plane ever appears.

const _AIRPORT_COLLISION_RADIUS_M = 5000; // 5 km flat collision disc around the airport centre

// Set once per spawn (see confirmSpawnLocation): the airport centre this
// frame's collision disc is anchored to. null if the current spawn has no
// known airport (e.g. a free map click) — collision is simply off then.
let _activeAirportCenter = null; // { lat, lng, elevM }

// Cache of real sampled ground elevations (meters) keyed by ICAO, so
// repeat spawns at the same airport in this session don't re-sample.
const _airportElevSampleCache = {};

// Bumped every confirmSpawnLocation() call. The async elevation sample
// captures its value at request time; if it's stale by the time the
// sample resolves (player already respawned elsewhere) the result is
// discarded instead of clobbering the new spawn's ground reference.
let _spawnGen = 0;

/**
 * _waitForTerrainSettled — replaces the old "wait exactly 2 rendered
 * frames" hack in confirmSpawnLocation. Two frames is enough for the tile
 * loader to START requesting the terrain column under the pre-position
 * camera, but NOT enough to guarantee the highest-detail mesh has actually
 * streamed in and been rendered yet. Sampling height (and freezing it into
 * _activeAirportCenter.elevM / flight.groundRef) while the mesh is still a
 * coarser placeholder bakes in a slightly-wrong elevation — one that never
 * gets corrected afterwards, since that value is frozen for the rest of
 * the spawn. Over the following second or two, Cesium keeps refining the
 * globe mesh in the background toward its real (final) height, and since
 * the camera/plane anchor is frozen at the old, wrong height, the terrain
 * visibly rises/sinks underneath them once it's done settling — most
 * noticeable in first-person, where the cockpit floor is only a couple of
 * metres from the ground.
 *
 * Fix: poll scene.globe.tilesLoaded (true once no tiles are pending for
 * the current view) every frame instead of counting a fixed number of
 * frames, so the elevation sample below only runs once the mesh actually
 * has nothing left to load. Capped at maxMs so a slow/unreachable tile
 * server can never hang the spawn screen forever — same safety margin
 * philosophy as the other timeouts in this flow.
 */
function _waitForTerrainSettled(maxMs = 2500) {
    const start = performance.now();
    return new Promise(resolve => {
        function check() {
            const globe = cesiumViewer && cesiumViewer.scene && cesiumViewer.scene.globe;
            const settled = !globe || globe.tilesLoaded;
            if (settled || performance.now() - start > maxMs) {
                resolve();
            } else {
                requestAnimationFrame(check);
            }
        }
        // Force at least a couple of rendered frames before the first
        // check — tilesLoaded can read stale/true for an instant right
        // after camera.setView, before the loader has had a chance to
        // notice new tiles are needed.
        requestAnimationFrame(() => requestAnimationFrame(check));
    });
}

/**
 * _sampleRealGroundElevation — reads the actual terrain height Cesium has
 * for a given lat/lng, so the flat collision disc (and the initial spawn
 * placement itself) can be anchored to reality instead of trusting a
 * database field that may not match the mesh.
 *
 * Two-tier: first try globe.getHeight(), which just checks whatever tile
 * is already resident and returns instantly — free, no lag, but only
 * works if that tile happens to already be loaded (true for airports near
 * where you've already been flying/looking). For a brand-new airport
 * nothing there has streamed in yet, so this falls through to
 * Scene#sampleHeightMostDetailed, which force-requests whatever tiles are
 * needed at that exact point and resolves once they're in — a real cost
 * (waits for tiles to load), but a bounded, one-time one, and it's the
 * only way to get a guaranteed answer for ground never rendered before.
 * That cost is paid at most ONCE per airport (see the cache in
 * _resolveAirportElevation below).
 */
// Plausible real-world ground elevation range (meters). Used to reject
// degenerate samples — see _isPlausibleGroundElevM below for why this is
// necessary and not just belt-and-suspenders.
const _GROUND_ELEV_MIN_M = -500;   // below Dead Sea (-430 m), small margin
const _GROUND_ELEV_MAX_M = 6500;   // above the highest airport on Earth (~4700 m) with margin

/**
 * _isPlausibleGroundElevM — guards against the specific failure mode that
 * caused "spawn at the center of the Earth" (camera/plane collapsing to
 * the globe's core, rendering as if turned inside-out from within): when
 * scene#sampleHeightMostDetailed's ray doesn't hit anything (tileset/terrain
 * not yet resident at that exact point), it resolves with a degenerate
 * Cartesian3(0,0,0) — NOT undefined/null. That value is still truthy, so a
 * plain `results[0] &&` guard doesn't catch it, and
 * Cesium.Cartographic.fromCartesian(0,0,0) is a degenerate case that comes
 * back as a *finite* number around -6,378,137 m (negative WGS84 semi-major
 * axis) rather than NaN — so Number.isFinite() alone accepts it as if it
 * were a real elevation. Every frame after that, updateCesiumCamera builds
 * anchorHeight = groundHeight + flight.alt*0.3048, and with groundHeight at
 * -6,378,137 m the vehicle/camera position collapses to essentially the
 * center of the Earth — which is the "inside the sphere, whole globe
 * visible, everything looks inverted" symptom.
 *
 * No real airport is anywhere near this range, so any sample landing
 * outside plausible Earth-surface elevations is treated as "no data" and
 * discarded rather than trusted.
 */
function _isPlausibleGroundElevM(h) {
    return Number.isFinite(h) && h > _GROUND_ELEV_MIN_M && h < _GROUND_ELEV_MAX_M;
}

async function _sampleRealGroundElevation(lat, lng) {
    if (!cesiumViewer || !cesiumViewer.scene.globe) return null;
    const carto = Cesium.Cartographic.fromDegrees(lng, lat);

    try {
        const fast = cesiumViewer.scene.globe.getHeight(carto);
        if (_isPlausibleGroundElevM(fast)) return fast;
    } catch (e) { /* fall through to the guaranteed path below */ }

    try {
        if (typeof cesiumViewer.scene.sampleHeightMostDetailed === 'function') {
            const cart = Cesium.Cartesian3.fromDegrees(lng, lat, 0);
            // Exclude the photorealistic 3D Tiles (buildings/hangars/towers)
            // from the ray test — sampleHeightMostDetailed hits ANY primitive
            // in the scene by default, and if the airport's reference point
            // sits near a terminal/hangar the ray hits the ROOF instead of
            // the tarmac, handing back a rooftop height as "ground elevation".
            // That's what was causing spawns to sit far above the runway at
            // airports with buildings near the DB lat/lng: the flat collision
            // disc (and the plane) got anchored to roof height, not asphalt.
            // Restricting to the globe/terrain guarantees we always measure
            // the actual ground, never a structure sitting on top of it.
            const excludeObjs = [];
            if (photorealTileset) excludeObjs.push(photorealTileset);
            // Also exclude our own vehicle models — sampleHeightMostDetailed
            // rays test ANY primitive in the scene by default, and these are
            // real Cesium.Model primitives that stay in scene.primitives even
            // while hidden (show=false just skips drawing, it doesn't remove
            // them from ray tests in every Cesium version). If one happens to
            // still be positioned near this exact column from a previous
            // spawn/vehicle switch, the ray could hit the model instead of
            // the ground, handing back a bogus "elevation".
            Object.keys(vehiclePrimitives).forEach(type => {
                vehiclePrimitives[type].forEach(p => excludeObjs.push(p));
            });
            const results = await cesiumViewer.scene.sampleHeightMostDetailed([cart], excludeObjs);
            const hit = results && results[0];
            // Reject the degenerate (0,0,0) ray-miss result explicitly, in
            // addition to the range check below — belt and suspenders,
            // since a magnitude-0 vector is never a legitimate hit point.
            if (!hit || (hit.x === 0 && hit.y === 0 && hit.z === 0)) return null;
            const h = Cesium.Cartographic.fromCartesian(hit).height;
            return _isPlausibleGroundElevM(h) ? h : null;
        }
        if (cesiumViewer.terrainProvider && typeof Cesium.sampleTerrainMostDetailed === 'function') {
            const [sampled] = await Cesium.sampleTerrainMostDetailed(cesiumViewer.terrainProvider, [carto]);
            return _isPlausibleGroundElevM(sampled.height) ? sampled.height : null;
        }
    } catch (e) {
        console.warn('[Elevation] Real ground sample failed, keeping database elevation:', e);
    }
    return null;
}

/**
 * _resolveAirportElevation — the actual fix for "always spawn below/inside
 * the terrain". The old approach placed the aircraft immediately using the
 * database elevation, then patched _activeAirportCenter.elevM up to the
 * real value once a sample resolved — meaning there was always a window,
 * every single spawn, where the plane sat wherever the (often-wrong)
 * database said the ground was while the real terrain streamed in around
 * it, popping into its correct position a moment later. Embedded-in-ground
 * is exactly what that produces.
 *
 * This is called instead with `await` from confirmSpawnLocation, BEFORE
 * anything (groundRef, camera, the aircraft's actual position) is placed —
 * so there's nothing to patch after the fact, because placement simply
 * doesn't happen until the real number is known.
 *
 * Cached per ICAO, so this cost — a real one-time wait while tiles load —
 * is only ever paid the *first* time you spawn at a given airport in a
 * session; every later spawn there is an instant cache hit and skips the
 * wait entirely. Guarded with a timeout (default 4s) so a slow connection
 * or unreachable tile server can never hang the spawn screen forever — on
 * timeout this falls back to the database value for THIS spawn, but the
 * sample keeps running in the background and still populates the cache,
 * so the next spawn there won't need to wait at all.
 */
function _resolveAirportElevation(icao, lat, lng, timeoutMs = 4000) {
    if (Object.prototype.hasOwnProperty.call(_airportElevSampleCache, icao)) {
        return Promise.resolve(_airportElevSampleCache[icao]);
    }
    const samplePromise = _sampleRealGroundElevation(lat, lng).then(h => {
        _airportElevSampleCache[icao] = h;
        return h;
    });
    const timeoutPromise = new Promise(resolve => setTimeout(() => resolve(undefined), timeoutMs));
    return Promise.race([samplePromise, timeoutPromise]).then(result => (result === undefined ? null : result));
}

// Current AGL ground reference (meters) — see the AGL tracking block in
// updateCesiumCamera; kept as a plain variable, not a smoothed cache read,
// since the flat disc has no LOD-streaming noise to smooth away.
let _groundPlaneSmoothedHeight = 0;

/**
 * applyAirportCircleCollision — called once per frame from the main loop,
 * after the vehicle's normal (non-collidable) position update has produced
 * a proposed new state.lat/state.lng. If the vehicle is within the flat
 * collision disc around the active airport, it simply can't descend below
 * the disc's flat ground height; outside the disc there's nothing to check.
 *
 * prevLat/prevLng: vehicle position BEFORE this frame's normal integration
 * (kept as parameters for parity with the main loop's snapshot, unused by
 * the flat-disc check itself).
 */
function applyAirportCircleCollision(dt, prevLat, prevLng) {
    if (!cesiumViewer || settings.renderMode !== '3D') return;
    if (!_activeAirportCenter) return; // no known airport for this spawn — nothing to collide with

    const mPerDegLat = 111320;
    const mPerDegLng = 111320 * Math.cos(_activeAirportCenter.lat * Math.PI / 180);
    const dEast  = (state.lng - _activeAirportCenter.lng) * mPerDegLng;
    const dNorth = (state.lat - _activeAirportCenter.lat) * mPerDegLat;
    const distM  = Math.hypot(dEast, dNorth);
    if (distM > _AIRPORT_COLLISION_RADIUS_M) return; // outside the disc — no ground here

    // Flat ground: the vehicle simply can't descend through the airport's
    // field elevation while inside the disc. flight.groundRef already
    // tracks this same elevation from spawn (see confirmSpawnLocation), so
    // AGL naturally bottoms out at 0 — cars/buses sit on the disc by
    // construction and need no separate clamp.
    if (isPlaneType(state.vehicle) && (flight.alt || 0) < 0) {
        flight.alt = 0;
    }
}

const flight = {
    pitch: 0, roll: 0,
    throttle: 0, alt: 125,
    verticalSpeed: 0,
    gearDown: true, brakeActive: false, reverseActive: false, flapsDown: false,
    groundRef: null,  // real terrain elevation (m) flight.alt is measured from; re-locked near the ground, frozen while airborne — see updateCesiumCamera
    rudderDeflection: 0,  // deg, actuator-modeled rudder surface position — see RUDDER (RTLU) block in updateFlight()
    ths: 0  // deg, THS (Trimmable Horizontal Stabilizer) position, -4 (nose-down) .. +13.5 (nose-up) — see TRIM block in updateFlight() and setupTrimWheel()
};

// ── THS (Trimmable Horizontal Stabilizer) trim system ───────────────────
// Range/rate constants straight from the A320 trim-wheel spec:
//   THS = -4 + (turns/12) * 17.5     (turns: 0..12 wheel rotations)
//   1 wheel turn  = 17.5/12 = 1.4583° THS
//   THS clamped to [-4°, +13.5°], moves at <= 0.7°/s (manual or autotrim)
const THS_MIN = -4, THS_MAX = 13.5, THS_RANGE = THS_MAX - THS_MIN; // 17.5°
const THS_DEG_PER_TURN = THS_RANGE / 12; // 1.4583° per full wheel rotation
const THS_MAX_RATE = 0.7; // deg/s, shared by manual wheel input AND autotrim

// trimWheel — drag state for the physical wheel widget (see setupTrimWheel).
// While dragging, the pilot's hand is the authority (manualTarget), and
// autotrim is suspended — exactly like the real aircraft, where manually
// rotating the trim wheel overrides/disconnects the electric trim motor.
const trimWheel = { dragging: false, manualTarget: 0 };

/**
 * updateThsTrim — advances flight.ths toward a target position at no more
 * than THS_MAX_RATE (0.7°/s), so the stabilizer NEVER jumps instantly —
 * whether that target comes from the pilot dragging the wheel by hand, or
 * from autotrim.
 *
 * Autotrim (Normal Law): THS_target = THS + 0.03 * delta_e, continuously
 * chasing whatever elevator deflection is currently commanded. As THS
 * moves, it progressively unloads the elevator (delta_e -> 0), which is
 * exactly what a real A320 autotrim does: it flies the trim wheel so the
 * pilot doesn't have to hold sustained stick pressure.
 */
function updateThsTrim(dt, delta_e_rad) {
    let target;
    if (trimWheel.dragging) {
        target = trimWheel.manualTarget;
    } else {
        // Sign convention: elevator delta_e is stored nose-up-negative (see
        // "Elevator sign convention" note in updateFlight), so flip it back
        // to a nose-up-positive delta_e for this formula.
        const delta_e_deg = -delta_e_rad * 180 / Math.PI;
        target = flight.ths + 0.03 * delta_e_deg;
    }
    target = Math.max(THS_MIN, Math.min(THS_MAX, target));

    const maxStep = THS_MAX_RATE * dt;
    const step = Math.max(-maxStep, Math.min(maxStep, target - flight.ths));
    flight.ths = Math.max(THS_MIN, Math.min(THS_MAX, flight.ths + step));

    // Exposed purely so the wheel widget can visibly show "autotrim is
    // actively driving the stabilizer right now" (a small color change on
    // the pointer) vs. idle/manually-held — see renderTrimWheel().
    flight.thsAutotrimActive = !trimWheel.dragging && Math.abs(target - flight.ths) > 0.02;
}
const flightInput = { pitch: 0, roll: 0, yaw: 0 };
let flightJoystickActive = false;
// Tiller (nosewheel steering) input, -1 (full left) .. +1 (full right).
// Completely separate from flightInput.yaw/the rudder — the tiller only
// ever drives ground steering (see the ground-steering block in the main
// update() loop), it has no effect on the rudder surface or in the air.
let tillerInput = 0;

/**
 * autopilot — simple 3-axis autopilot (heading hold / altitude hold / speed
 * hold). When active it overrides flightInput and flight.throttle every
 * frame in updateFlight() with smoothly rate-limited commands, so the
 * aircraft eases onto the selected heading/altitude/speed like a real
 * autopilot instead of snapping onto it.
 */
const autopilot = {
    // Each axis now engages independently (spdHold / hdgHold / altHold)
    // instead of one master "active" switch, so e.g. only the throttle can
    // be handed off while heading/altitude stay hand-flown.
    hdgHold: false,
    altHold: false,
    spdHold: false,
    hdg: 0,      // target heading, degrees 0-359
    alt: 0,      // target altitude, hundreds of feet (e.g. 100 = 10,000 ft)
    spd: 0,      // target speed, knots
    // Smoothed pitch/roll commands (rate-limited each frame in updateFlight)
    // so altitude/heading hold ease onto target instead of snapping back and
    // forth (the "pitch goes up, down, up, down" porpoising).
    _pitchCmd: 0,
    _rollCmd: 0,

    // --- V/S (Vertical Speed) mode — a separate FCU pitch mode from ALT
    // hold. Like a real FCU, ALT and V/S are mutually exclusive pitch
    // modes: engaging one disengages the other. vs is the commanded
    // vertical speed in feet-per-minute (can be negative for a descent).
    vsHold: false,
    vs: 0,
    _pitchCmdVS: 0,

    // --- Bank-angle hold state (A320 Normal-Law style roll rate command).
    // When the stick is centered, the bank angle the plane was at when
    // the stick was released is remembered here and held, rather than
    // rolling the wings back to level.
    _bankHoldTarget: null
};

// Backwards-compatible flag: true while at least one channel is engaged.
// Kept only so any external check for "is the autopilot doing anything"
// keeps working; the physics below now looks at each hold flag on its own.
Object.defineProperty(autopilot, 'active', {
    get() { return this.hdgHold || this.altHold || this.spdHold; }
});

// The heading (deg) of the longest straight leg of the current GPS flight
// plan (takeoff -> straight -> turn -> [longest straight leg] -> turn ->
// straight -> landing), so the person can read it off and dial it into the
// autopilot's HDG window. null until a route with a cruise leg exists.
let navCruiseLegHeading = null;

/**
 * toggleApChannel — engage/disengage a single autopilot axis ('hdg', 'alt',
 * or 'spd') without touching the other two. The target value for that axis
 * is only auto-populated from the current attitude/speed the first time it
 * is engaged with a still-zeroed target — if the pilot has already dialed a
 * target in on its knob beforehand (while the channel was off), that
 * pre-set value is engaged with immediately instead of being overwritten.
 * That's what makes it possible to fully configure HDG/ALT/SPD ahead of
 * time and just flip the toggle when ready, rather than having to spin the
 * knobs to the target in the couple of seconds before the plane drifts off.
 */
function toggleApChannel(channel) {
    if (channel === 'hdg') {
        autopilot.hdgHold = !autopilot.hdgHold;
        if (autopilot.hdgHold && autopilot.hdg === 0) autopilot.hdg = Math.round(state.heading) % 360;
    } else if (channel === 'alt') {
        autopilot.altHold = !autopilot.altHold;
        if (autopilot.altHold && autopilot.alt === 0) autopilot.alt = Math.round((flight.alt || 0) / 100);
        // ALT and V/S are mutually exclusive pitch modes on a real FCU —
        // engaging one disengages the other.
        if (autopilot.altHold) autopilot.vsHold = false;
    } else if (channel === 'vs') {
        autopilot.vsHold = !autopilot.vsHold;
        if (autopilot.vsHold) autopilot.altHold = false;
    } else if (channel === 'spd') {
        autopilot.spdHold = !autopilot.spdHold;
        if (autopilot.spdHold && autopilot.spd === 0) autopilot.spd = Math.round(Math.abs(state.speed || 0) / 1.852);
    }
    updateAutopilotUI();
}

// apAdjust now works whether or not the channel is engaged — the knobs are
// meant to be usable to pre-configure a target before turning that hold on.
function apAdjust(field, delta) {
    if (field === 'hdg') autopilot.hdg = ((autopilot.hdg + delta) % 360 + 360) % 360;
    else if (field === 'alt') autopilot.alt = Math.max(0, autopilot.alt + delta);
    else if (field === 'spd') autopilot.spd = Math.max(0, autopilot.spd + delta);
    else if (field === 'vs') autopilot.vs = Math.max(-6000, Math.min(6000, autopilot.vs + delta * 100));
    updateAutopilotUI();
}

function updateAutopilotUI() {
    const btnSpd = document.getElementById('btn-ap-spd');
    const btnHdg = document.getElementById('btn-ap-hdg');
    const btnAlt = document.getElementById('btn-ap-alt');
    const btnVs  = document.getElementById('btn-ap-vs');
    if (btnSpd) btnSpd.classList.toggle('active', autopilot.spdHold);
    if (btnHdg) btnHdg.classList.toggle('active', autopilot.hdgHold);
    if (btnAlt) btnAlt.classList.toggle('active', autopilot.altHold);
    if (btnVs)  btnVs.classList.toggle('active', autopilot.vsHold);
    const spdEl = document.getElementById('ap-spd-val');
    const hdgEl = document.getElementById('ap-hdg-val');
    const altEl = document.getElementById('ap-alt-val');
    const vsEl  = document.getElementById('ap-vs-val');
    // Targets are always shown now (not just "---" when off) since they can
    // be configured ahead of engaging.
    if (spdEl) spdEl.textContent = String(autopilot.spd).padStart(3, '0');
    if (hdgEl) hdgEl.textContent = String(autopilot.hdg).padStart(3, '0');
    if (altEl) altEl.textContent = String(autopilot.alt * 100).padStart(4, '0');
    if (vsEl)  vsEl.textContent = (autopilot.vs >= 0 ? '+' : '') + String(autopilot.vs);
}

// Rudder is always live, and elevator/aileron authority now scales
// naturally with dynamic pressure (real aero, no hand-locking) — see
// updateFlight().

function setThrottle(delta) { flight.throttle = Math.max(0, Math.min(100, flight.throttle + delta)); }

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
updateAutopilotUI();

// Throttle readout: shows the detent name (IDLE / CL / FLX-MCT / TOGA)
// only when the value is exactly on that detent (0 / 21 / 57 / 100 —
// same numbers as the throttle-quadrant's click points below), and the
// plain percentage everywhere else.
const THROTTLE_DETENT_LABELS = { 0: 'IDLE', 21: 'CL', 57: 'FLX/MCT', 100: 'TOGA' };
function formatThrottleReadout(v) {
    return THROTTLE_DETENT_LABELS[v] !== undefined ? THROTTLE_DETENT_LABELS[v] : (v + '%');
}

const throttleSlider = document.getElementById('flight-throttle-slider');
const throttleValDisplay = document.getElementById('flight-throttle-val');
if (throttleSlider) {
    throttleSlider.addEventListener('input', (e) => {
        flight.throttle = parseInt(e.target.value);
        if (throttleValDisplay) throttleValDisplay.textContent = formatThrottleReadout(flight.throttle);
    });
}

const flightGearBtn = document.getElementById('btn-flight-gear');
if (flightGearBtn) {
    flightGearBtn.addEventListener('click', () => {
        flight.gearDown = !flight.gearDown;
        flightGearBtn.classList.toggle('active', flight.gearDown);
    });
}

const flightBrakeBtn = document.getElementById('btn-flight-brake');
flightBrakeBtn.addEventListener('click', () => {
    flight.brakeActive = !flight.brakeActive;
    flightBrakeBtn.classList.toggle('active', flight.brakeActive);
});

const flightReverseBtn = document.getElementById('btn-flight-reverse');
flightReverseBtn.addEventListener('click', () => {
    flight.reverseActive = !flight.reverseActive;
    flightReverseBtn.classList.toggle('active', flight.reverseActive);
});

const flightFlapsBtn = document.getElementById('btn-flight-flaps');
if (flightFlapsBtn) {
    flightFlapsBtn.addEventListener('click', () => {
        flight.flapsDown = !flight.flapsDown;
        flightFlapsBtn.classList.toggle('active', flight.flapsDown);
    });
}

const yawSlider = document.getElementById('flight-yaw-slider');
if (yawSlider) {
    yawSlider.addEventListener('input', (e) => {
        flightInput.yaw = parseFloat(e.target.value);
    });
    // Snap rudder back to centre on release — mirrors joystick auto-level behaviour
    function resetYaw() {
        flightInput.yaw = 0;
        yawSlider.value = 0;
    }
    yawSlider.addEventListener('pointerup',    resetYaw);
    yawSlider.addEventListener('touchend',     resetYaw);
    yawSlider.addEventListener('pointercancel', resetYaw);
}

/**
 * setupFlightRudder — real rudder-pedal-style control. Looks like a
 * slider (a track with a ball-shaped knob on it) but is drag-driven, not
 * a plain <input type=range>, and it has a real centering spring: on
 * release it eases back to 0 instead of just jumping there. Drives
 * flightInput.yaw (-1 full left .. +1 full right), which feeds the
 * pedal term of the rudder command in updateFlight() below.
 */
function setupFlightRudder(containerId, trackId, knobId) {
    const container = document.getElementById(containerId);
    const track = document.getElementById(trackId);
    const knob = document.getElementById(knobId);
    if (!container || !track || !knob) return;

    let activePointerId = null;
    let springFrame = null;

    function setKnob(frac) {
        const maxX = track.clientWidth / 2 - knob.clientWidth / 2;
        knob.style.transform = `translateX(${frac * maxX}px)`;
        flightInput.yaw = frac;
        if (yawSlider) yawSlider.value = frac.toFixed(2);
    }

    function fracFromPoint(clientX) {
        const rect = track.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const maxX = rect.width / 2 - knob.clientWidth / 2;
        return Math.max(-1, Math.min(1, (clientX - cx) / maxX));
    }

    function stopSpring() {
        if (springFrame !== null) { cancelAnimationFrame(springFrame); springFrame = null; }
    }

    // Centering "spring": eases the knob (and flightInput.yaw) back to 0
    // with a decaying velocity instead of snapping straight there, so it
    // actually feels like a sprung pedal instead of a slider default.
    function springToCenter() {
        stopSpring();
        function step() {
            const current = flightInput.yaw;
            if (Math.abs(current) < 0.01) { setKnob(0); springFrame = null; return; }
            setKnob(current * 0.72); // exponential decay back to centre
            springFrame = requestAnimationFrame(step);
        }
        springFrame = requestAnimationFrame(step);
    }

    container.addEventListener('pointerdown', (e) => {
        if (activePointerId !== null) return;
        stopSpring();
        activePointerId = e.pointerId;
        container.setPointerCapture(e.pointerId);
        setKnob(fracFromPoint(e.clientX));
    });

    container.addEventListener('pointermove', (e) => {
        if (e.pointerId !== activePointerId) return;
        setKnob(fracFromPoint(e.clientX));
    });

    function release(e) {
        if (e.pointerId !== activePointerId) return;
        activePointerId = null;
        springToCenter();
    }
    container.addEventListener('pointerup',     release);
    container.addEventListener('pointercancel', release);
}
setupFlightRudder('flight-rudder-container', 'flight-rudder-track', 'flight-rudder-knob');

/**
 * setupTrimWheel — A320-style THS trim wheel. Visually it's a tall
 * black/white striped "cylinder" div (many multiples of the small visible
 * viewport) positioned with a CSS transform and clipped by `overflow:
 * hidden` on its container; dragging vertically translates that cylinder,
 * which reads as a big wheel rotating in place when only a thin slice of
 * it is ever shown. Only that one transform is touched per frame (see
 * renderTrimWheel below), so this is effectively free no matter how many
 * "turns" the wheel notionally spans.
 *
 * Dragging sets trimWheel.manualTarget directly (pixels -> wheel turns ->
 * degrees THS, via THS_DEG_PER_TURN) and flags trimWheel.dragging so
 * updateThsTrim() lets the hand take over from autotrim; the actual
 * flight.ths value still only ever moves at <= THS_MAX_RATE, so a fast
 * flick of the wheel still eases the stabilizer in with the same
 * mechanical "weight" as autotrim does, instead of snapping.
 */
const TRIM_PX_PER_TURN = 240; // px of cylinder scroll per full wheel rotation

function setupTrimWheel(viewportId, cylinderId) {
    const viewport = document.getElementById(viewportId);
    const cylinder = document.getElementById(cylinderId);
    if (!viewport || !cylinder) return;

    let activePointerId = null;
    let startY = 0, startThs = 0;

    viewport.addEventListener('pointerdown', (e) => {
        if (activePointerId !== null) return;
        activePointerId = e.pointerId;
        viewport.setPointerCapture(e.pointerId);
        startY = e.clientY;
        startThs = flight.ths;
        trimWheel.manualTarget = flight.ths;
        trimWheel.dragging = true;
    });

    viewport.addEventListener('pointermove', (e) => {
        if (e.pointerId !== activePointerId) return;
        // Dragging UP (dy negative) = rotating the wheel like pulling its
        // top toward the pilot = nose-up trim, matching the real aircraft.
        const dy = e.clientY - startY;
        const turnsDelta = -dy / TRIM_PX_PER_TURN;
        const thsDelta = turnsDelta * THS_DEG_PER_TURN;
        trimWheel.manualTarget = Math.max(THS_MIN, Math.min(THS_MAX, startThs + thsDelta));
    });

    function release(e) {
        if (e.pointerId !== activePointerId) return;
        activePointerId = null;
        trimWheel.dragging = false;
    }
    viewport.addEventListener('pointerup', release);
    viewport.addEventListener('pointercancel', release);
}
setupTrimWheel('trim-wheel-viewport', 'trim-wheel-cylinder');

/**
 * alignTrimFloorWithThrottle — measures the ACTUAL on-screen bottom edge
 * of #throttle-quadrant (the "throttle floor") and the current bottom
 * edge of #trim-wheel-viewport (the "trim floor"), then shifts the whole
 * trim column by exactly the difference so the two floors sit on the
 * same line. Done by measurement (not hard-coded offsets) so it stays
 * correct across the responsive breakpoints/media queries that resize
 * the throttle quadrant, without needing separate magic numbers per
 * breakpoint.
 */
function alignTrimFloorWithThrottle() {
    const column = document.getElementById('trim-wheel-column');
    const viewport = document.getElementById('trim-wheel-viewport');
    const quadrant = document.getElementById('throttle-quadrant');
    if (!column || !viewport || !quadrant) return;
    // Undo any previous shift before measuring, so repeated calls converge
    // instead of compounding.
    column.style.transform = '';
    const qBottom = quadrant.getBoundingClientRect().bottom;
    const vBottom = viewport.getBoundingClientRect().bottom;
    const shift = qBottom - vBottom;
    if (Math.abs(shift) > 0.5) column.style.transform = `translateY(${shift}px)`;
}

/**
 * renderTrimWheel — every frame, positions the cylinder so the stripe
 * matching the current flight.ths sits centered under the fixed pointer
 * line, updates the numeric readout, keeps the trim assembly's floor
 * aligned with the throttle's, and lights up the pointer while autotrim
 * is actively driving the wheel (vs. idle or hand-held) so the autotrim
 * system is visibly doing something in real time, not just a number
 * changing off-screen. Runs on its own rAF loop (rather than piggy-
 * backing on updateFlight) so the wheel keeps rendering smoothly even
 * independent of physics-tick timing, same as the rest of the UI.
 */
function renderTrimWheel() {
    const cylinder = document.getElementById('trim-wheel-cylinder');
    const viewport = document.getElementById('trim-wheel-viewport');
    const valEl = document.getElementById('trim-wheel-val');
    if (cylinder && viewport) {
        // flight.ths is the single source of truth here — the cylinder's
        // transform is derived from it fresh every frame, so the visual
        // wheel position can never drift out of sync with the real value,
        // whether it moved via manual drag or autotrim.
        const turns = (flight.ths - THS_MIN) / THS_RANGE * 12; // 0..12
        const offsetPx = turns * TRIM_PX_PER_TURN;
        const centered = offsetPx - viewport.clientHeight / 2;
        cylinder.style.transform = `translateY(${-centered}px)`;
        viewport.classList.toggle('trim-autotrim-active', !!flight.thsAutotrimActive);
    }
    if (valEl) {
        const arrow = flight.ths >= 0 ? '▲UP' : '▼DN';
        valEl.textContent = `${arrow} ${Math.abs(flight.ths).toFixed(1)}°`;
    }
    alignTrimFloorWithThrottle();
    requestAnimationFrame(renderTrimWheel);
}
requestAnimationFrame(renderTrimWheel);
window.addEventListener('resize', alignTrimFloorWithThrottle);

/**
 * setupFlightTiller — real-aircraft-style tiller knob (see tiller.png).
 * Drag it left/right (or up/down — either works, whichever feels like
 * "turning a small wheel") and it rotates around its pivot. Unlike the
 * rudder, this does NOT touch flightInput.yaw at all — it only ever
 * drives `tillerInput`, which the ground-steering block in the main
 * update() loop uses to turn the plane on the ground with the exact same
 * steering formula as the car/bus (see there). Auto-centers on release.
 */
function setupFlightTiller(containerId, imgId) {
    const container = document.getElementById(containerId);
    const img = document.getElementById(imgId);
    if (!container || !img) return;

    const MAX_ANGLE = 55; // degrees of visual rotation at full deflection
    let activePointerId = null;

    function angleFromPoint(clientX, clientY) {
        const rect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // atan2(dx, -dy): 0° = pointer straight above center (neutral),
        // positive = pointer swung to the right, negative = to the left.
        let deg = Math.atan2(clientX - cx, cy - clientY) * 180 / Math.PI;
        return Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, deg));
    }

    function applyAngle(deg) {
        img.style.transform = `rotate(${deg}deg)`;
        tillerInput = deg / MAX_ANGLE;
    }

    container.addEventListener('pointerdown', (e) => {
        if (activePointerId !== null) return;
        activePointerId = e.pointerId;
        container.setPointerCapture(e.pointerId);
        applyAngle(angleFromPoint(e.clientX, e.clientY));
    });

    container.addEventListener('pointermove', (e) => {
        if (e.pointerId !== activePointerId) return;
        applyAngle(angleFromPoint(e.clientX, e.clientY));
    });

    function releaseTiller(e) {
        if (e.pointerId !== activePointerId) return;
        activePointerId = null;
        applyAngle(0); // auto-centers
    }
    container.addEventListener('pointerup',     releaseTiller);
    container.addEventListener('pointercancel', releaseTiller);
}
setupFlightTiller('flight-tiller-container', 'flight-tiller-img');

/**
 * setupApKnob — autopilot rotary wheel (see reference photo: chunky
 * dual-diameter knobs under the SPD/HDG/ALT display). Drag it in a circle
 * (clockwise = increase, counter-clockwise = decrease) and, like a real MCP
 * knob, it spins freely and applies one step of `field` per detent of
 * rotation. Mouse-wheel also works for desktop convenience.
 */
function setupApKnob(containerId, imgId, field, degPerStep) {
    const container = document.getElementById(containerId);
    const img = document.getElementById(imgId);
    if (!container) return;
    degPerStep = degPerStep || 15;

    let activePointerId = null, lastAngle = 0, rotation = 0, visualRotation = 0;

    function angleFromPoint(clientX, clientY) {
        const rect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
        return Math.atan2(clientX - cx, -(clientY - cy)) * 180 / Math.PI;
    }

    container.addEventListener('pointerdown', (e) => {
        if (activePointerId !== null) return;
        activePointerId = e.pointerId;
        container.setPointerCapture(e.pointerId);
        lastAngle = angleFromPoint(e.clientX, e.clientY);
    });

    container.addEventListener('pointermove', (e) => {
        if (e.pointerId !== activePointerId) return;
        const angle = angleFromPoint(e.clientX, e.clientY);
        let delta = ((angle - lastAngle + 540) % 360) - 180; // shortest signed delta
        lastAngle = angle;
        rotation += delta;
        visualRotation += delta;
        if (img) img.style.transform = `rotate(${visualRotation}deg)`;
        while (rotation >= degPerStep) { apAdjust(field, 1); rotation -= degPerStep; }
        while (rotation <= -degPerStep) { apAdjust(field, -1); rotation += degPerStep; }
    });

    function release(e) {
        if (e.pointerId !== activePointerId) return;
        activePointerId = null;
    }
    container.addEventListener('pointerup', release);
    container.addEventListener('pointercancel', release);

    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        apAdjust(field, e.deltaY < 0 ? 1 : -1);
        visualRotation += e.deltaY < 0 ? degPerStep : -degPerStep;
        if (img) img.style.transform = `rotate(${visualRotation}deg)`;
    }, { passive: false });
}
setupApKnob('ap-knob-spd', 'ap-knob-spd-img', 'spd');
setupApKnob('ap-knob-hdg', 'ap-knob-hdg-img', 'hdg');
setupApKnob('ap-knob-alt', 'ap-knob-alt-img', 'alt');
setupApKnob('ap-knob-vs', 'ap-knob-vs-img', 'vs');

/**
 * setupApWindowDragAndMinimize — makes the whole autopilot GUI draggable
 * (via its titlebar) and minimizable, matching the PFD window's behavior.
 * Deliberately no close button: the autopilot panel is a core instrument,
 * so it can be tucked away but never dismissed entirely.
 */
function setupApWindowDragAndMinimize() {
    const win = document.getElementById('autopilot-panel');
    const titlebar = document.getElementById('ap-titlebar');
    const minBtn = document.getElementById('btn-ap-min');
    if (!win || !titlebar || !minBtn) return;

    let dragging = false, dragOX = 0, dragOY = 0;

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

    let minimized = false;
    minBtn.addEventListener('click', () => {
        minimized = !minimized;
        win.classList.toggle('ap-minimized', minimized);
        minBtn.textContent = minimized ? '▢' : '–';
    });
}
setupApWindowDragAndMinimize();

function updateFlight(dt) {
    // PHYSICS — full 6-DOF AeroToolbox-based simulation (AdvancedFlightDynamics).
    // dt is clamped defensively: RK4 is stable for game-scale steps, but a huge
    // dt (e.g. after a tab was backgrounded) could still produce a bad step.
    dt = Math.min(dt, 0.1);
    const sim = ensureFlightSim();

    let pitchInput = flightInput.pitch, rollInput = flightInput.roll;
    if (isKeyDown('forward') || keys['arrowup'])    pitchInput =  0.6;
    else if (isKeyDown('back') || keys['arrowdown'])  pitchInput = -0.6;
    if (isKeyDown('left') || keys['arrowleft'])  rollInput  = -0.6;
    else if (isKeyDown('right') || keys['arrowright']) rollInput  =  0.6;

    // Pitch invert toggle — only flips up/down, never left/right
    if (settings.invertPitch) pitchInput = -pitchInput;

    // ── A320 High Speed Protection (HSP) override — computed each frame by
    // pfd.js from the real Saint-Venant CAS/Mach formulas and published on
    // window.PFD_HSP. Normal-Law behaviour: pitch authority is biased nose-up
    // (Commanded_nz = SS_input + K*(V_CAS - V_prot)), bank is capped at 40°
    // (enforced here too, not just drawn on the PFD), and autothrust is
    // forced to idle via the FADEC override.
    if (window.PFD_HSP && window.PFD_HSP.active) {
        const hsp = window.PFD_HSP;
        pitchInput = Math.min(1, pitchInput + hsp.K * hsp.overspeedAmount * 0.05);
        const bankLimitInput = hsp.bankLimit / 67; // scale roll authority toward wings-level
        rollInput = Math.max(-bankLimitInput, Math.min(bankLimitInput, rollInput * bankLimitInput));
        flight.throttle = 0; // FADEC override -> idle power
    }

    // (no minimum-speed gate — control surfaces are always live, exactly
    // like the aerodynamic model itself: authority scales naturally with
    // dynamic pressure through the CL/CD/Cm equations, so there's no need
    // to hand-lock the controls below an arbitrary speed.)

    let yawInput = (flightInput.yaw || 0) * settings.rudderSensitivity;

    // ── AUTOPILOT ────────────────────────────────────────────────────────
    // Each axis is now independent: heading hold only touches roll/rudder,
    // altitude hold only touches pitch, speed hold only touches throttle.
    // Manual stick input is ignored only on the axis a given channel
    // actually controls, so e.g. engaging just SPD leaves pitch/roll fully
    // hand-flown.
    if (autopilot.hdgHold) {
        // Heading hold -> bank angle command. Bank is limited to a gentle
        // 20° max and the aileron command is proportional to how far off
        // the current bank angle is from that target, so the turn rolls in
        // and out smoothly instead of snapping.
        let hdgErr = ((autopilot.hdg - state.heading + 540) % 360) - 180; // -180..180
        const targetBankDeg = Math.max(-20, Math.min(20, hdgErr * 1.5));
        const bankErrDeg = targetBankDeg - (flight.roll * 180 / Math.PI);
        const rollCmd = Math.max(-1, Math.min(1, bankErrDeg / 15));
        // Ease the commanded roll input itself, not just the bank target,
        // so the aileron doesn't chatter back and forth on noisy error.
        autopilot._rollCmd += (rollCmd - autopilot._rollCmd) * Math.min(1, dt * 3);
        rollInput = autopilot._rollCmd;
        yawInput = 0; // rudder stays coordinated/near-neutral; yaw damper below settles it
    }

    if (autopilot.altHold) {
        // Altitude hold -> pitch command, via a target vertical speed that
        // itself is capped, so a big altitude error still results in a
        // gentle, realistic climb/descent rather than a sudden pitch snap.
        //
        // This is a cascaded PD controller: the outer loop (altErr -> target
        // VS) is a pure P term, and the inner loop (VS error -> pitch
        // command) adds a derivative term on pitch RATE (q). That D term is
        // what actually kills the "pitch up, pitch down, pitch up, pitch
        // down" hunting near the target altitude: a pure P/rate-limited
        // controller only slows the reversal down, it doesn't damp the
        // underlying phugoid oscillation, so the plane still overshoots
        // altitude, climbs, and repeats. Actively damping pitch rate stops
        // the oscillation from being sustained in the first place.
        const altErrFt = (autopilot.alt * 100) - (flight.alt || 0);
        const targetVS = Math.max(-800, Math.min(800, altErrFt * 3)); // fpm, softer than before
        const vsErr = targetVS - (flight.verticalSpeed || 0);
        const pitchRateDegS = (sim.state[4] || 0) * 180 / Math.PI; // q, body pitch rate
        const pitchCmd = Math.max(-1, Math.min(1, (vsErr / 1200) - pitchRateDegS * 0.08));
        // Rate-limit how fast the pitch command itself can change per
        // second, on top of the damping above, so the elevator still can't
        // reverse direction faster than the aircraft's own pitch response.
        const maxStep = dt * 1.5; // max change in pitchCmd per second
        const delta = Math.max(-maxStep, Math.min(maxStep, pitchCmd - autopilot._pitchCmd));
        autopilot._pitchCmd += delta;
        pitchInput = autopilot._pitchCmd;
    } else if (autopilot.vsHold) {
        // V/S (Vertical Speed) hold -> pitch command, directly targeting
        // the dialed-in vertical speed (fpm) rather than deriving one from
        // an altitude error. Same inner-loop PD (VS error + pitch-rate
        // damping) as ALT hold shares, just without the outer altitude
        // loop — this is a real FCU pitch mode, mutually exclusive with
        // ALT hold (see toggleApChannel).
        const vsErr = autopilot.vs - (flight.verticalSpeed || 0);
        const pitchRateDegS = (sim.state[4] || 0) * 180 / Math.PI;
        const pitchCmd = Math.max(-1, Math.min(1, (vsErr / 1200) - pitchRateDegS * 0.08));
        const maxStep = dt * 1.5;
        const delta = Math.max(-maxStep, Math.min(maxStep, pitchCmd - autopilot._pitchCmdVS));
        autopilot._pitchCmdVS += delta;
        pitchInput = autopilot._pitchCmdVS;
    }

    if (autopilot.spdHold) {
        // Speed hold -> throttle command, eased toward target instead of
        // jumping straight there.
        const curSpdKt = Math.abs(state.speed || 0) / 1.852;
        const spdErr = autopilot.spd - curSpdKt;
        const targetThrottle = Math.max(0, Math.min(100, flight.throttle + spdErr * 2));
        flight.throttle += (targetThrottle - flight.throttle) * Math.min(1, dt * 0.8);
    }

    if (!autopilot.hdgHold) autopilot._rollCmd = 0;
    if (!autopilot.altHold) autopilot._pitchCmd = 0;
    if (!autopilot.vsHold) autopilot._pitchCmdVS = 0;

    const hasManualRollInput = flightJoystickActive || Math.abs(rollInput) >= 0.02 ||
        isKeyDown('left') || isKeyDown('right') || keys['arrowleft'] || keys['arrowright'];

    if (!autopilot.hdgHold && !hasManualRollInput) {
        // ── BANK-ANGLE HOLD (A320 Normal-Law roll rate command) ─────────────
        // The sidestick commands a roll RATE, not a physical wing position:
        //   p = dphi/dt = k * delta   (delta = stick deflection, -1..+1)
        // Releasing the stick commands delta = 0, so p = 0 and the bank
        // angle simply stops changing and holds wherever it was — the
        // plane does NOT roll back to wings-level on its own. That's what
        // this block reproduces: instead of driving bank to zero, it
        // remembers the bank angle at the moment the stick was centered
        // and holds it, closing the loop on THAT target the same way
        // hdgHold closes the loop on a commanded heading bank.
        //
        // Limits, matching the real airplane: up to 33° the hold is exact.
        // Between 33° and 67° the plane relaxes back toward 33° if nothing
        // is holding it there (approximated here by clamping the held
        // target itself to that band — full manual-hold-past-33 behavior
        // needs live stick pressure, which by definition isn't present in
        // this centered-stick branch). The computer will not autonomously
        // pull all the way back to 0° except in a genuine emergency
        // protection, which this simplified simulation doesn't model.
        const rollDeg = flight.roll * 180 / Math.PI;
        const rollRateDegS = (sim.state[3] || 0) * 180 / Math.PI;

        if (autopilot._bankHoldTarget === null) {
            // Stick was just released (or this is the first frame with no
            // input) — latch the current bank angle as the new hold target.
            autopilot._bankHoldTarget = Math.max(-67, Math.min(67, rollDeg));
        }
        // Soft relaxation of a steep held bank back toward the 33° normal
        // limit, the same way the real aircraft eases off if you're not
        // actively holding pressure past that point.
        if (autopilot._bankHoldTarget > 33) autopilot._bankHoldTarget = Math.max(33, autopilot._bankHoldTarget - dt * 3);
        else if (autopilot._bankHoldTarget < -33) autopilot._bankHoldTarget = Math.min(-33, autopilot._bankHoldTarget + dt * 3);

        const bankErrDeg = autopilot._bankHoldTarget - rollDeg;
        // Commanded roll RATE toward the held target, damped by current
        // roll rate so it settles onto the target instead of oscillating
        // around it (a pure position-hold with no rate damping is exactly
        // the "right-left-right rocking" behavior this replaces).
        rollInput = Math.max(-1, Math.min(1, bankErrDeg * 0.05 - rollRateDegS * 0.03));
    } else {
        // Manual roll input (or heading-hold flying the turn) — the stick
        // is live, so there's no held target; it gets re-latched fresh the
        // next time the stick centers.
        autopilot._bankHoldTarget = null;
    }

    // Yaw damper: always-on light damping of yaw rate so small sideslip/yaw
    // disturbances (which otherwise couple into a slow roll oscillation)
    // die out quickly instead of sustaining a drift. This never fights a
    // deliberate rudder input, only the residual rate that's left over.
    const yawDamperGain = 0.12;
    const yawDamperInput = -(sim.state[5] || 0) * yawDamperGain;

    // ── RUDDER (Airbus A320 rudder command law + RTLU) ──────────────────
    // delta_r_cmd = delta_pedal + delta_trim + delta_dutch_roll + delta_turn_coord
    // delta_pedal:      pilot rudder-pedal input (the rudder control), full
    //                    deflection commands +/-30°, before the RTLU clamps it.
    // delta_trim:       rudder trim — not modeled as a separate control yet,
    //                    always 0 for now.
    // delta_dutch_roll: the always-on yaw damper above, converted to degrees.
    // delta_turn_coord: turn-coordination assist — not modeled yet, 0 for now.
    const delta_pedal      = yawInput * 30;      // deg
    const delta_trim       = 0;                  // deg
    const delta_dutch_roll = yawDamperInput * 30; // deg
    const delta_turn_coord = 0;                  // deg
    const delta_r_cmd = delta_pedal + delta_trim + delta_dutch_roll + delta_turn_coord;

    // Rudder Travel Limiter Unit (RTLU) — full +/-25° authority below
    // 160 kt, tapering linearly down to +/-3.4° by 380 kt, to keep the fin
    // from being overstressed at high speed.
    const V_IAS = Math.abs(state.speed || 0) / 1.852; // knots
    let delta_r_max;
    if (V_IAS < 160) {
        delta_r_max = 25.0;
    } else if (V_IAS <= 380) {
        delta_r_max = 25.0 - ((V_IAS - 160) / (380 - 160)) * (25.0 - 3.4);
    } else {
        delta_r_max = 3.4;
    }

    // Saturation + actuator slew-rate dynamics: the rudder surface can't
    // snap instantly to the commanded position, it slews toward it at a
    // bounded rate (deg/s), rate-limited to +/-60°/s, over a fast actuator
    // time constant.
    const tau_actuator = 0.15; // s
    const delta_r_limited = Math.max(-delta_r_max, Math.min(delta_r_max, delta_r_cmd));
    const delta_r_current = flight.rudderDeflection || 0;
    const ddelta_r_dt = Math.max(-60, Math.min(60, (delta_r_limited - delta_r_current) / tau_actuator));
    const delta_r_final = delta_r_current + ddelta_r_dt * dt;
    flight.rudderDeflection = delta_r_final;

    // Map arcade inputs onto control-surface deflections (radians).
    // Elevator sign convention: nose-up command -> negative Cmde deflection.
    const controls = {
        delta_e: -pitchInput * 0.45 * settings.flightSensitivity,
        // 0.19 rad of aileron at full stick + flightSensitivity=1.0x yields a
        // steady-state roll rate of ~15°/s at ~150 kt (77 m/s) per the
        // AdvancedFlightDynamics roll-axis model (Clda/Clp/Ixz coupling).
        delta_a:  rollInput  * 0.19 * settings.flightSensitivity,
        delta_r:  delta_r_final * Math.PI / 180, // deg -> rad
        throttle: (flight.throttle / 100) * settings.flightAcceleration,
        gearDown: flight.gearDown,
        brakeActive: flight.brakeActive,
        reverseActive: flight.reverseActive,
        flapsDown: flight.flapsDown
    };

    // ── TRIM (A320 THS) ──────────────────────────────────────────────────
    // Advance the stabilizer toward its target (manual wheel drag, or
    // autotrim unloading the elevator) at the shared 0.7°/s rate limit,
    // then feed the resulting position into the moment equation as
    // delta_ths, right alongside delta_e above (see Cmdt in calculateDerivatives).
    updateThsTrim(dt, controls.delta_e);
    controls.delta_ths = flight.ths; // degrees

    // x,y accumulate NED displacement each step; we translate it into
    // lat/lng ourselves and reset it so it doesn't grow unbounded (position
    // itself has no effect on the derivatives, so this is safe).
    sim.state[10] = 0; sim.state[11] = 0;
    const prevZ = sim.state[12]; // NED z before this step (for altitude delta below)

    sim.integrate(dt, controls);

    // ── Pull results back into the legacy fields the rest of the game reads ──
    const euler = sim.getEulerAngles();
    // No artificial max-angle clamp — attitude comes straight from the
    // quaternion (via getEulerAngles), so full aerobatic range (loops,
    // rolls, inverted flight) is physically reachable and unclamped.
    flight.pitch = euler.pitch;
    flight.roll  = euler.roll;
    state.heading = (euler.yaw * 180 / Math.PI + 360) % 360;

    const dNorth = sim.state[10], dEast = sim.state[11];
    const groundSpeedMps = Math.hypot(dNorth, dEast) / Math.max(dt, 1e-6);
    state.speed = flight.reverseActive ? -groundSpeedMps * 3.6 : groundSpeedMps * 3.6;

    state.lat += dNorth / 111320;
    state.lng += dEast / (111320 * Math.cos(state.lat * Math.PI / 180));

    // Altitude (ft AGL): derived from the sim's per-frame change in NED z
    // (positive z = down), NOT its absolute value — this keeps flight.alt
    // decoupled from flight.groundRef, which gets re-locked to the local
    // terrain elevation elsewhere (see the groundRef relock logic) and would
    // otherwise cause an altitude jump every time that reference moves.
    const dZ = sim.state[12] - prevZ; // meters, positive = descended
    flight.alt -= dZ / 0.3048;

    // Ground contact: clamp altitude/vertical motion and bleed off body
    // rates so the aircraft settles instead of digging through the runway.
    if (flight.alt < 0) {
        flight.alt = 0;
        sim.state[12] = prevZ; // undo this step's descent into the ground
        sim.state[2] = Math.min(0, sim.state[2]); // no more sink into the ground
        sim.state[3] *= Math.exp(-5 * dt);
        sim.state[4] = Math.max(0, sim.state[4]);
        flight.roll  *= Math.exp(-5 * dt);
        flight.pitch  = Math.max(0, flight.pitch);
    }

    // Vertical speed (fpm) derived from the altitude delta, matching what the
    // HUD previously displayed.
    if (_flightPrevAltFt === null) _flightPrevAltFt = flight.alt;
    flight.verticalSpeed = ((flight.alt - _flightPrevAltFt) / Math.max(dt, 1e-6)) * 60;
    _flightPrevAltFt = flight.alt;
}

// ==========================================
// 7a. CESIUM ENGINE INTEGRATION
// ==========================================
let cesiumViewer      = null;
let cesiumLabelsLayer = null;   // for hybrid mode in Cesium

// Tracks the in-flight (or settled) WorldTerrain swap kicked off by
// tryEnableWorldTerrain(), so other code — specifically the spawn flow —
// can await "is the REAL terrain provider active yet?" instead of
// sampling/rendering against the flat EllipsoidTerrainProvider placeholder
// and finding out later that real (often much higher) terrain phases in
// underneath. Resolves true once cesiumViewer.terrainProvider is the real
// thing, false if it failed/was skipped (no token, wrong mapStyle, etc) —
// either way, once settled it's safe to proceed with whatever terrain is
// actually active.
let _worldTerrainReadyPromise = null;
let photorealTileset  = null;   // Google Photorealistic 3D Tiles (once loaded)
let osmBuildingsTileset    = null; // Cesium OSM Buildings (once loaded)
let satelliteTextureCenter = null; // {lat, lng} where the current tile grid was fetched

/**
 * initCesium — sets up the Cesium viewer with ArcGIS satellite imagery as a
 * base. No keys are required to run: Cesium Ion / Photorealistic 3D Tiles
 * are layered in using CONFIG.CESIUM_ION, which is either the project's
 * default token (from config.js / the CESIUM_TOKEN GitHub secret) or a
 * token the person has saved via Settings, whichever takes priority (see
 * the CONFIG block near the top of this file / applyCesiumIonToken).
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
        cesiumViewer.scene.globe.depthTestAgainstTerrain = settings.occlusionCulling;
        cesiumViewer.scene.skyAtmosphere.show = true;
        cesiumViewer.scene.sun.show = true;
        cesiumViewer.scene.moon.show = false;

        // ── Shadows: OFF at the Cesium shadow-map level ─────────────────
        // Real-time shadow mapping (cesiumViewer.shadows = true) generates
        // an extra fragment-shader variant for every model that has a
        // CustomShader attached (the plane/car glass+PBR fix below). That
        // variant fails to compile ("Fragment shader failed to compile.
        // Compile log: null") because the shadow-pass shader merge can't
        // reconcile the custom `discard` / material.alpha edits in
        // _glbOpaqueShaderPlane / _glbOpaqueShaderCar. The soft self-shadow
        // look from the reference screenshots (dark tail-shadow on the
        // fuselage, ambient-lit shaded side instead of pure black) is
        // already produced directly inside those CustomShaders via the
        // ambientFill + Fresnel rim terms — it doesn't need Cesium's real
        // shadow map at all, so leaving this off avoids the crash with no
        // visible loss.
        cesiumViewer.shadows = false;
        cesiumViewer.scene.globe.shadows        = Cesium.ShadowMode.DISABLED;
        cesiumViewer.scene.globe.receiveShadows = false;

        // Disable all built-in Cesium globe interaction so that clicking or
        // dragging anywhere on the canvas (outside of UI buttons) doesn't
        // rotate/tilt/zoom/translate the globe. The camera is driven entirely
        // by the vehicle simulation instead.
        const sscc = cesiumViewer.scene.screenSpaceCameraController;
        sscc.enableRotate    = false;
        sscc.enableTilt      = false;
        sscc.enableZoom      = false;
        sscc.enableLook      = false;
        sscc.enableTranslate = false;

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
    tryLoadOsmBuildings();

    // Attach free-look / orbit drag listeners to the Cesium canvas.
    // Must run after cesiumViewer is guaranteed to exist (which it is here).
    initCesiumFreeLook();
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
 * specific, actionable message.
 */
function diagnosePhotorealError(e) {
    const statusCode = e && (e.statusCode || (e.response && e.response.status));
    const msg = (e && e.message) || String(e || '');

    // 🔴 FIX: Log the raw error so you can see what Cesium is actually complaining about
    console.error('🔴 Raw Cesium Photoreal Error:', e);

    if (statusCode === 403 || /\b403\b/.test(msg)) {
        return '403 Forbidden: Token is invalid, revoked, or has a Domain Restriction that blocks this website.';
    }
    if (statusCode === 404 || /\b404\b/.test(msg)) {
        return '404 Not Found: The token format is incorrect or the asset is missing.';
    }
    if (statusCode === 400 || /API key not valid/i.test(msg)) {
        // 🔴 FIX: Check if the user accidentally pasted a Google Maps API Key instead of a Cesium Ion Token
        if (CONFIG.CESIUM_ION && CONFIG.CESIUM_ION.startsWith('AIza')) {
            return '400 Bad Request: You pasted a Google Maps API Key (starts with AIza) into the Cesium box. You need a Cesium Ion Token (starts with eyJ).';
        }
        return '400 Bad Request: Cesium Ion rejected the request. Ensure "Google Photorealistic 3D Tiles" is explicitly added to your "My Assets" in the Cesium Ion dashboard, and check the browser console for the raw error.';
    }
    if (statusCode === 429 || /\b429\b/.test(msg)) {
        return '429 Too Many Requests: The free Ion tier quota was hit. Try again later.';
    }
    return `Failed to load (${msg || 'unknown error'}) — see browser console for the full raw error.`;
}

/**
 * tryLoadPhotorealisticTiles — loads Google's Photorealistic 3D Tiles the
 * free way: through the Cesium Ion token already saved above
 * (CONFIG.CESIUM_ION). Cesium proxies the tiles through its own
 * partnership with Google inside Ion's free tier — no Google Cloud
 * project, no billing card, no separate Maps Platform key required.
 *
 * If an OPTIONAL Google Maps API key has also been saved
 * instead of sharing Ion's free one), that key is used instead of the Ion
 * proxy path.
 *
 * No-op if there's no viewer, or if neither an Ion token nor an optional
 * key is saved — nothing to authenticate the request with yet.
 */
/**
 * applyGP3DTQualitySettings — pushes gp3dtSettings values onto the live
 * photorealTileset and scene. No-ops silently if the tileset isn't loaded yet;
 * the hook in tryLoadPhotorealisticTiles() will call this once it is.
 */
function applyGP3DTQualitySettings() {
    if (!cesiumViewer || !photorealTileset) {
        console.log('%c⚠️ GP3DT quality: photorealistic tiles not loaded yet', 'color:#f59e0b');
        return;
    }

    // Tileset LOD & streaming properties
    photorealTileset.maximumScreenSpaceError           = gp3dtSettings.maximumScreenSpaceError;
    photorealTileset.maximumMemoryUsage                = gp3dtSettings.maximumMemoryUsage;
    photorealTileset.dynamicScreenSpaceError           = gp3dtSettings.dynamicScreenSpaceError;
    photorealTileset.dynamicScreenSpaceErrorDensity    = gp3dtSettings.dynamicScreenSpaceErrorDensity;
    photorealTileset.skipLevelOfDetail                 = gp3dtSettings.skipLevelOfDetail;
    photorealTileset.baseScreenSpaceError              = gp3dtSettings.baseScreenSpaceError;
    photorealTileset.skipScreenSpaceErrorFactor        = gp3dtSettings.skipScreenSpaceErrorFactor;
    photorealTileset.skipLevels                        = gp3dtSettings.skipLevels;
    photorealTileset.preloadFlightDestinations         = gp3dtSettings.preloadFlightDestinations;
    photorealTileset.preferLeaves                      = gp3dtSettings.preferLeaves;
    photorealTileset.progressiveResolutionHeightFraction = gp3dtSettings.progressiveResolutionHeightFraction;
    photorealTileset.geometricErrorTolerance           = gp3dtSettings.geometricErrorTolerance;

    // Scene-wide: fog
    cesiumViewer.scene.fog.density = gp3dtSettings.fogDensity;
    cesiumViewer.scene.fog.enabled = gp3dtSettings.fogDensity > 0;

    // Scene-wide shadows kept OFF — see initCesium for why (CustomShader
    // shader-compile crash on the vehicle models). Terrain stays excluded
    // regardless, in case this is ever safely re-enabled later.
    cesiumViewer.shadows = false;
    cesiumViewer.terrainShadows = Cesium.ShadowMode.DISABLED;
    cesiumViewer.scene.globe.shadows = Cesium.ShadowMode.DISABLED;

    console.log(
        `%c🎨 GP3DT quality applied: ${GP3DT_PRESETS[gp3dtSettings.preset]?.name ?? 'Custom'} ` +
        `(SSE: ${gp3dtSettings.maximumScreenSpaceError}, Mem: ${gp3dtSettings.maximumMemoryUsage} MB)`,
        'color:#22c55e;font-weight:bold'
    );
}

/**
 * setGP3DTPreset — switches to a named quality preset, copies its values into
 * gp3dtSettings, syncs the UI dropdown, applies immediately if photoreal is
 * active, and persists the choice to localStorage.
 */
function setGP3DTPreset(presetName) {
    if (!GP3DT_PRESETS[presetName]) {
        console.warn(`Unknown GP3DT preset: ${presetName}`);
        return;
    }
    Object.assign(gp3dtSettings, GP3DT_PRESETS[presetName]);
    gp3dtSettings.preset = presetName; // restore after Object.assign overwrote with preset.name etc.

    const select = document.getElementById('gp3dt-quality-preset');
    if (select) select.value = presetName;

    // Sync advanced sliders/controls to the new preset values
    syncGP3DTAdvancedUI();

    if (settings.mapStyle === 'photoreal') applyGP3DTQualitySettings();
    localStorage.setItem('biv_gp3dt_preset', presetName);
}

/**
 * updateGP3DTAdvancedSetting — called by individual sliders/selects in the
 * Advanced section. Detects if the new combination matches any preset, updates
 * the dropdown accordingly (adding a "Custom" option if needed), and applies.
 */
function updateGP3DTAdvancedSetting(key, value) {
    gp3dtSettings[key] = (typeof value === 'string' && value !== 'true' && value !== 'false')
        ? parseFloat(value)
        : value;

    // Check whether the live settings still match a known preset
    let matchedPreset = null;
    for (const [name, preset] of Object.entries(GP3DT_PRESETS)) {
        const keys = Object.keys(preset).filter(k => k !== 'name');
        if (keys.every(k => gp3dtSettings[k] === preset[k])) {
            matchedPreset = name;
            break;
        }
    }
    gp3dtSettings.preset = matchedPreset ?? 'custom';

    const select = document.getElementById('gp3dt-quality-preset');
    if (select) {
        if (!select.querySelector('option[value="custom"]')) {
            const opt = document.createElement('option');
            opt.value = 'custom'; opt.textContent = '✏️ Custom';
            select.appendChild(opt);
        }
        select.value = gp3dtSettings.preset;
    }

    if (settings.mapStyle === 'photoreal') applyGP3DTQualitySettings();
}

/**
 * syncGP3DTAdvancedUI — pushes current gp3dtSettings values back into the
 * advanced slider/select/checkbox controls so they reflect the active preset.
 */
function syncGP3DTAdvancedUI() {
    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    const setChk = (id, v) => { const el = document.getElementById(id); if (el) el.checked = v; };

    setVal('set-gp3dt-sse',    gp3dtSettings.maximumScreenSpaceError);
    setTxt('val-gp3dt-sse',    gp3dtSettings.maximumScreenSpaceError);
    setVal('set-gp3dt-mem',    gp3dtSettings.maximumMemoryUsage);
    setTxt('val-gp3dt-mem',    gp3dtSettings.maximumMemoryUsage);
    setVal('set-gp3dt-fog',    gp3dtSettings.fogDensity);
    setTxt('val-gp3dt-fog',    gp3dtSettings.fogDensity);
    setChk('set-gp3dt-dynamic-sse', gp3dtSettings.dynamicScreenSpaceError);
    setChk('set-gp3dt-preload',     gp3dtSettings.preloadFlightDestinations);

    // Reverse the exponential mapping used by updateGP3DTDetailDistance() to
    // find the slider position that corresponds to the current density.
    {
        const density = Math.min(GP3DT_DETAIL_DENSITY_MAX, Math.max(GP3DT_DETAIL_DENSITY_MIN, gp3dtSettings.dynamicScreenSpaceErrorDensity));
        const t = Math.log(density / GP3DT_DETAIL_DENSITY_MAX) / Math.log(GP3DT_DETAIL_DENSITY_MIN / GP3DT_DETAIL_DENSITY_MAX);
        const slider = Math.round(1 + t * 99);
        setVal('set-gp3dt-detail-distance', slider);
        setTxt('val-gp3dt-detail-distance', _gp3dtDetailDistanceLabel(slider));
    }

    settings.gp3dtRenderDistance = Math.max(600, settings.gp3dtRenderDistance || 3000); // 600m floor (guards old saved settings)
    setVal('set-gp3dt-render-distance', settings.gp3dtRenderDistance);
    setTxt('val-gp3dt-render-distance', `${Math.round(settings.gp3dtRenderDistance)} m`);
}

/**
 * tryApplyGP3DTSettingsOnLoad — called at boot. Restores the last-saved preset
 * from localStorage, or defaults to 'normal'.
 */
function tryApplyGP3DTSettingsOnLoad() {
    const saved = localStorage.getItem('biv_gp3dt_preset');
    setGP3DTPreset((saved && GP3DT_PRESETS[saved]) ? saved : 'ultra-low');
}

function tryLoadPhotorealisticTiles() {
    if (!cesiumViewer) return;
    if (!CONFIG.CESIUM_ION) return;
    if (settings.mapStyle !== 'photoreal') return; // Terrain + OSM style is active — see set3DStyle()

    setPhotorealStatus('Loading photorealistic 3D tiles…', 'info');

    // 🔴 FIX: Explicitly force the token right before the call to prevent routing bugs
    Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION;

    try {
        let tilesetPromise;

        // Try the modern wrapper first
        if (typeof Cesium.createGooglePhotorealistic3DTileset === 'function') {
            tilesetPromise = Cesium.createGooglePhotorealistic3DTileset();
        } else {
            // 🔴 FIX: Fallback to the direct Asset ID if the wrapper is missing/failing
            tilesetPromise = Cesium.Cesium3DTileset.fromIonAssetId(2275207);
        }

        Promise.resolve(tilesetPromise)
            .then(tileset => {
                if (!cesiumViewer) return; // viewer was torn down meanwhile
                if (photorealTileset) cesiumViewer.scene.primitives.remove(photorealTileset);
                cesiumViewer.scene.primitives.add(tileset);
                photorealTileset = tileset;
                // Vehicle-only shadows: GP3DT buildings/terrain mesh must
                // neither cast nor receive shadows from the vehicle model.
                photorealTileset.shadows = Cesium.ShadowMode.DISABLED;
                // Apply occlusion / view-frustum culling to match current toggle
                photorealTileset.cullWithChildrenBounds = settings.occlusionCulling;
                // Apply grid-square, no-memory culling (only render the squares
                // currently in view; un-render squares you've looked away from)
                applyGP3DTGridCulling();
                // Start the render-distance auto-switch (GP3DT close up,
                // World Terrain + OSM Buildings far away — see slider in
                // Settings → GP3DT).
                applyGP3DTDistanceSwitch();
                // 🔴 FIX: the tileset loads asynchronously and may finish
                // *after* night mode was already toggled on (e.g. switching
                // into the Photoreal/GP3DT style while Night is active, or a
                // reload of the tileset). Without this, the fresh tileset
                // always comes back in its default full-brightness daytime
                // colors, since _applyDayNightMode() only runs once, at the
                // moment the Night button is clicked — it has no way to spot
                // a tileset that didn't exist yet. Re-sync immediately here.
                if (isNightMode) {
                    photorealTileset.colorBlendMode   = Cesium.Cesium3DTileColorBlendMode.MIX;
                    photorealTileset.colorBlendAmount = 0.85;
                    photorealTileset.color            = new Cesium.Color(0.03, 0.03, 0.10, 1.0);
                    if (photorealTileset.imageBasedLighting) {
                        photorealTileset.imageBasedLighting.enabled = false;
                    }
                }
                // Apply any saved quality preset now that the tileset is live
                setTimeout(() => applyGP3DTQualitySettings(), 100);
                // The photorealistic tileset already covers the whole
                // globe in 3D, so the flat ArcGIS imagery underneath
                // would only cause z-fighting — hide it.
                cesiumViewer.scene.globe.show = false;

                // OSM Buildings is a separate, much simpler tileset (plain
                // grey box extrusions, no photo texture). With photoreal
                // now active it's pure redundant geometry sitting at the
                // same real-world locations — which is exactly what shows
                // up as "the photorealistic imagery doesn't load": the
                // flat grey OSM boxes z-fighting in front of the actual
                // textured mesh. Turn it off whenever photoreal succeeds.
                if (osmBuildingsTileset) {
                    cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
                    osmBuildingsTileset = null;
                    settings.osmBuildings = false;
                    const cb = document.getElementById('set-osm-buildings');
                    if (cb) cb.checked = false;
                }

                // Per-tile diagnostics: the outer promise above only rejects
                // on a total failure to load the tileset itself. Individual
                // tiles (geometry+texture) can still fail one-by-one after
                // that — e.g. a texture sub-resource getting a 403/429 while
                // the tileset.json succeeded — which previously failed
                // completely silently, leaving untextured/placeholder
                // geometry on screen with no indication anything was wrong.
                let failedTileCount = 0;
                tileset.tileFailed.addEventListener(error => {
                    failedTileCount++;
                    console.warn(`Photorealistic 3D Tiles: a tile failed to load (${failedTileCount} so far):`, error);
                    setPhotorealStatus(
                        `⚠ Photorealistic 3D tiles loaded, but ${failedTileCount} tile${failedTileCount > 1 ? 's' : ''} failed — ${diagnosePhotorealError(error)}`,
                        'error'
                    );
                });

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

/**
 * set3DStyle — switches the "3D Map Style" toggle in Settings between:
 *   'cesium'    → Cesium WorldTerrain elevation + OSM Buildings footprints
 *   'photoreal' → Google Photorealistic 3D Tiles (Ion asset 2275207, loaded
 *                 via Cesium.createGooglePhotorealistic3DTileset() in
 *                 tryLoadPhotorealisticTiles() — that helper resolves to
 *                 the same Ion asset, just without needing the numeric ID
 *                 hardcoded, so it keeps working if Cesium ever migrates it)
 *
 * Both styles need a saved Cesium Ion token (CONFIG.CESIUM_ION) to load
 * anything — with no token this just flips which button is highlighted.
 * tryEnableWorldTerrain/tryLoadOsmBuildings/tryLoadPhotorealisticTiles all
 * check settings.mapStyle themselves, so this function's job is just to:
 * (1) record the choice, (2) immediately tear down whatever the OTHER
 * style had already loaded so there's no stale tileset left in the scene,
 * and (3) kick off loading the new style.
 */
function set3DStyle(style) {
    settings.mapStyle = style;

    const btnCesium    = document.getElementById('btn-style-cesium');
    const btnPhotoreal = document.getElementById('btn-style-photoreal');
    if (btnCesium)    btnCesium.classList.toggle('active', style === 'cesium');
    if (btnPhotoreal) btnPhotoreal.classList.toggle('active', style === 'photoreal');

    // GP3DT quality tab only applies to the Photorealistic style.
    updateSettingsTabStates();

    if (!cesiumViewer) return; // nothing loaded yet to tear down/swap

    // Always tear down whatever the OTHER style had already loaded first,
    // so switching styles never leaves a stale tileset in the scene.
    if (style !== 'photoreal' && photorealTileset) {
        cesiumViewer.scene.primitives.remove(photorealTileset);
        photorealTileset = null;
        if (_gp3dtGridTrimHandler) { _gp3dtGridTrimHandler(); _gp3dtGridTrimHandler = null; }
        if (_gp3dtGridTrimPostRenderHandler) { _gp3dtGridTrimPostRenderHandler(); _gp3dtGridTrimPostRenderHandler = null; }
        if (_gp3dtDistanceHandler) { _gp3dtDistanceHandler(); _gp3dtDistanceHandler = null; }
        _gp3dtDistanceIsFar = null;
    }

    if (style === 'photoreal') {
        if (osmBuildingsTileset) {
            cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
            osmBuildingsTileset = null;
        }
        // Stop fetching terrain — irrelevant once the globe is hidden below.
        cesiumViewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
        tryLoadPhotorealisticTiles();
    } else {
        cesiumViewer.scene.globe.show = true;
        setPhotorealStatus('', null);
        tryEnableWorldTerrain();
        tryLoadOsmBuildings();
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
    // ✅ Car: BMW M4 Competition GLB model.
    // Bounding box analysis of car.glb:
    //   X: ±7.574 (width ×0.182 ≈ 2.76 m incl. mirrors/tires)
    //   Y: −5.623 to +4.112 (height ×0.182 ≈ 1.77 m); Y-min is bottom of tyres
    //   Z: ±12.37 (length ×0.182 ≈ 4.50 m) — Z is the forward axis (glTF Y-up)
    // offset z = |Y_min| × scale = 5.623 × 0.182 ≈ 1.02 m lifts the model so
    // the bottom of the tyres sits exactly at the ground plane (Cesium ENU z = 0).
    //
    // ROTATION FIX — the real bug, found by reading CesiumJS's own source
    // (CesiumGS/cesium, packages/engine/Source/Scene/Model/ModelUtility.js
    // + Axis.js + Transforms.js), not by guessing axis enum values:
    //
    // 1) car.glb's node hierarchy (incl. the Sketchfab root correction
    //    matrix) was walked directly: the rear spoiler + dual exhaust tips
    //    sit at one extreme of local Z, the front grille/fascia at the
    //    other. The asset genuinely IS authored Y-up / +Z-forward, exactly
    //    standard glTF — there's nothing actually wrong with the file.
    // 2) Cesium.Axis only has X/Y/Z (0/1/2) — 'NEGATIVE_X'/'NEGATIVE_Z'
    //    aren't real values. script.js does `Cesium.Axis[def.forwardAxis]`,
    //    which for an unknown name returns `undefined`; GltfLoader.js then
    //    falls back to its OWN default (`forwardAxis = Axis.Z`). So my
    //    previous 'NEGATIVE_X' attempt silently became Axis.Z again —
    //    identical to the very first try, which is exactly why nothing
    //    visibly changed. That's on me; sorry for the wasted test.
    // 3) The actual bug is a mismatch between two DIFFERENT conventions
    //    that both happen to call themselves "forward":
    //      • ModelUtility.getAxisCorrectionMatrix only special-cases
    //        forwardAxis===Z: it then rotates the model into Cesium's
    //        own fixed internal target, which the Cesium team's GitHub
    //        PR #10439 states explicitly is "+Z up, +X forward". Passing
    //        forwardAxis:'Z' (textbook-correct for our file) lands the
    //        car's real nose at this internal target's +X.
    //      • Transforms.headingPitchRollToFixedFrame (what builds
    //        vehicleTransform every frame) puts heading=0 along local +Y
    //        — i.e. vehicleTransform's OWN "forward" is +Y, not +X.
    //    modelMatrix = vehicleTransform × translate(offset) × scale just
    //    drops the already-corrected model straight into vehicleTransform
    //    with no further rotation, so the nose (sitting at the internal
    //    target's +X = "right" in vehicleTransform's basis) ends up
    //    pointing 90° off to the side — exactly the first "de lado"
    //    screenshot. Switching to forwardAxis:'X' skips that internal
    //    rotation entirely (model's own local +X stays put), so the real
    //    nose (local Z) lands at internal-target (0,−1,0) = vehicleTransform's
    //    −Y = exactly backward — exactly the second screenshot. Both
    //    symptoms are the SAME 90° mismatch, just viewed through two
    //    different (and both technically "valid") forwardAxis choices —
    //    which is why no value of forwardAxis alone can ever fix it.
    // 4) Fix: keep the textbook-correct forwardAxis:'Z', and separately
    //    rotate the already-placed model by +90° about the up axis
    //    (Cesium's Matrix3.fromRotationZ, where "positive = counter-
    //    clockwise" per its own doc comment) so internal-target +X lands
    //    on vehicleTransform's +Y. extraYawDeg below feeds exactly that
    //    rotation in updateVehicleModels() — see _scratchYawM there.
    //    This is per-vehicle-def (not a global GLB change), so the plane
    //    — which apparently already reads correctly with forwardAxis:'X'
    //    and no extra yaw — is completely untouched.
    car: {
        type: 'glb',
        url: 'car.glb',
        scale: 0.182,
        minimumPixelSize: 64,
        offset: [0, 0, 1.02],
        upAxis: 'Y',
        forwardAxis: 'Z',
        extraYawDeg: 90
    },
    bus: [
        { dim: [2.4, 11.0, 2.6],  offset: [0,  0,    1.40], color: '#2563eb' }, // body
        { dim: [2.3, 1.6,  0.6],  offset: [0,  4.9,  2.55], color: '#0f172a' }  // front roof cap, marks the nose
    ],
    // ✈️ Avión: carga a320.glb en vez de cajas.
    // upAxis/forwardAxis usan el mecanismo NATIVO de Cesium.Model para
    // corregir la orientación del modelo (en vez de una matriz de rotación
    // hecha a mano) — Cesium ya sabe convertir desde estos ejes hacia el
    // frame x=right/y=forward/z=up que usa vehicleTransform más abajo.
    // Valores por defecto (Y arriba, Z adelante) cubren la convención más
    // común de exportación glTF (Blender, Sketchfab, etc.).
    // Si el modelo aparece tumbado o mirando al lado/atrás, cambia
    // upAxis/forwardAxis a 'X' o 'Z'/'Y' según corresponda — no se necesita
    // tocar ninguna matriz para ajustarlo.
    plane: {
        type: 'glb',
        url: 'a320_cockpit.glb',
        scale: 4.0,             // Corrected from 1.0. The GLB's own internal scale chain
                                // (USDRoot×0.01, Meshes×24.24 → net ×0.2424) makes the model
                                // only ~9 m long at scale:1. A real A320 is 37.6 m, so ×4
                                // brings it to true-to-life size. Raise to 6-8 for a more
                                // dramatic / visible-from-far appearance.
        minimumPixelSize: 64,
        offset: [0, 0, 0],      // Desplazamiento local igual que en car/bus
        upAxis: 'Y',
        // Probado en pantalla: con forwardAxis 'Z' el modelo salía girado
        // 90°. 'X' es el ajuste que corrige ese mismo síntoma en modelos
        // glTF 2.0 según reportes de la comunidad de Cesium. Si quedara
        // girado hacia el lado contrario, el siguiente valor a probar es
        // volver a 'Z'.
        forwardAxis: 'X'
    }
};


// ── TRANSPARENCY FIX (avión) ─────────────────────────────────
// Root cause: a320.glb declares alphaMode:"BLEND" on its
// materials, so Cesium routes the whole model through the
// translucent render pass. That pass sorts geometry by depth
// PER-PRIMITIVE (not per-triangle), producing the see-through
// fuselage visible in the screenshot.
//
// translucencyMode: OPAQUE forces the whole model into the opaque
// render pass (proper per-fragment depth testing, fixing the
// fuselage). The cockpit glass material is the only one with
// alpha < 1 (it's 0.25) — instead of forcing it to alpha = 1.0
// (which made it a solid dark panel), fragments below 0.5 are
// discarded entirely, so the glass reads as a clear window.
// Everything else (alpha >= 0.5) still gets forced to alpha = 1.0
// to keep the fuselage sorting fix in place.
const _glbOpaqueShaderPlane = new Cesium.CustomShader({
    lightingModel: Cesium.LightingModel.PBR,
    translucencyMode: Cesium.CustomShaderTranslucencyMode.OPAQUE,
    uniforms: {
        u_nightMode:      { type: Cesium.UniformType.FLOAT, value: 0.0 },
        u_time:           { type: Cesium.UniformType.FLOAT, value: 0.0 },
        u_cockpitAmbient: { type: Cesium.UniformType.FLOAT, value: 0.0 },
    },
    fragmentShaderText: [
        'void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {',
        '    // Glass discard — same rule as before',
        '    if (material.alpha < 0.5) { discard; }',
        '    material.alpha = 1.0;',
        '',
        '    // ── Ambient fill ─────────────────────────────────────────────',
        '    // czm_modelMaterial has: diffuse (vec3), specular (vec3),',
        '    // roughness (float), normalEC (vec3), occlusion (float),',
        '    // emissive (vec3), alpha (float). NO metallic field.',
        '    // Use roughness as a proxy: low roughness = shiny metal surface.',
        '    float shininess = 1.0 - material.roughness;  // 0=matte, 1=mirror',
        '    float brightness = dot(material.diffuse, vec3(0.299, 0.587, 0.114));',
        '',
        '    // Lift shadows: add a soft ambient so the belly is never pure black.',
        '    float ambientFill = mix(0.20, 0.07, shininess);',
        '    material.diffuse  = material.diffuse + material.diffuse * ambientFill;',
        '',
        '    // ── Rim / Fresnel highlight on shiny surfaces ────────────────',
        '    // normalEC points toward the camera in eye-space when the surface',
        '    // faces the viewer directly. Rim = edges that face away slightly.',
        '    float NdotV = clamp(dot(material.normalEC, vec3(0.0, 0.0, 1.0)), 0.0, 1.0);',
        '    float rim   = pow(1.0 - NdotV, 3.0) * shininess;',
        '    vec3  rimTint = mix(vec3(0.25, 0.30, 0.45), vec3(0.90, 0.90, 1.00), brightness);',
        '    material.diffuse = material.diffuse + rimTint * rim * 0.30;',
        '',
        '    // ── Night mode ────────────────────────────────────────────────',
        '    // No mesh-wide emissive/diffuse tinting is applied here for night',
        '    // mode. Adding any glow to the whole model (even a "subtle" one)',
        '    // ends up bleeding across the cockpit/cabin in 1st-person view,',
        '    // which read as a strange tint rather than a lighting effect. The',
        '    // aircraft is lit by the scene DirectionalLight only; visible',
        '    // night cues (nav lights, strobe, beacon) are separate point',
        '    // entities placed outside the model — see _updateNightPlaneFlash.',
        '}'
    ].join('\n')
});

// ── TRANSPARENCY FIX (auto) ───────────────────────────────────
// Opened car.glb directly and read its 29 materials. Three of them are
// the actual "glass family" — alphaMode:"BLEND" with a CONSTANT
// baseColorFactor alpha (no texture, so the alpha is identical on every
// fragment of that material, not something that varies pixel-to-pixel):
//   • "glass"          alpha ≈ 0.1468  — side/rear windows
//   • "glasswindshiled" alpha ≈ 0.9083  — windshield (named "windshiled"
//                                          in the source file, typo and all)
//   • "red_glass"       alpha ≈ 0.4965  — tail-light lens (NOT a window)
// A plain "alpha < 0.5 → discard" rule (the plane's method) mishandles
// two of these three: the windshield (0.9083, ≥ 0.5) would stay solid —
// which is exactly the dark/opaque windshield bug — and the tail-light
// lens (0.4965, just under 0.5) would vanish completely, which is wrong
// in the other direction. So those two get a precise, named override
// instead of relying on the 0.5 cutoff:
//   - alpha ≈ 0.9083 (the windshield)  → force-discard anyway (it's glass)
//   - alpha ≈ 0.4965 (the tail-light)  → force-KEEP solid (it's a lens, not a window)
// Everything else in the file keeps the plain alpha<0.5 rule — this also
// covers 8 more BLEND materials (Engine/Grille×5/InteriorA/BadgeA) that
// use alpha as a TEXTURE-driven cutout mask (mesh holes baked into a
// texture's alpha channel, alpha ≈0 at a hole / ≈1 on solid mesh) — that
// part already worked correctly and is untouched.
//
// (The previous version of this fix used a roughness+darkness heuristic
// because I didn't have the file to check. That heuristic was wrong: this
// model sets roughnessFactor:0.0 on ~14 of its 29 materials as a generic
// PBR baseline — body kit, badges, grille, base paint, the windshield —
// not because they're glass, so "dark + low roughness" ended up matching
// huge parts of the car body and discarding them too. Pulled entirely.)
const _glbOpaqueShaderCar = new Cesium.CustomShader({
    lightingModel: Cesium.LightingModel.PBR,
    translucencyMode: Cesium.CustomShaderTranslucencyMode.OPAQUE,
    fragmentShaderText: [
        'void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {',
        '    float a = material.alpha;',
        '    bool shouldDiscard = (a < 0.5);',
        '    if (abs(a - 0.9083) < 0.01) { shouldDiscard = true;  }', // windshield: glass, discard anyway
        '    if (abs(a - 0.4965) < 0.01) { shouldDiscard = false; }', // tail-light lens: keep solid
        '    if (shouldDiscard) { discard; }',
        '    material.alpha = 1.0;',
        '}'
    ].join('\n')
});

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
        const def = VEHICLE_MODEL_DEFS[type];

        // ── Caso GLB (avión, auto) ────────────────────────────────────────
        if (def && def.type === 'glb') {
            const off = Array.isArray(def.offset) ? def.offset : [0, 0, 0];
            const glbShader = type === 'car' ? _glbOpaqueShaderCar : _glbOpaqueShaderPlane;

        
            // fromGltfAsync es la única API soportada en versiones actuales
            // de Cesium para cargar un glTF/glb (Model.fromGltf ya no
            // existe — llamarlo lanza un error). Es asíncrona: el modelo
            // se añade al array vehiclePrimitives cuando termine de cargar,
            // por eso buildVehicleModels() puede seguir siendo síncrona.
            Cesium.Model.fromGltfAsync({
                url: def.url,
                scale: def.scale || 1.0,
                minimumPixelSize: def.minimumPixelSize || 64,
                upAxis: Cesium.Axis[def.upAxis || 'Y'],
                forwardAxis: Cesium.Axis[def.forwardAxis || 'Z'],
                customShader: glbShader,
                // Allow the camera to see interior surfaces (cockpit panels,
                // seats, instrument faces) when placed inside the model.
                // Without this, back-face culling discards inward-facing
                // triangles — the cockpit interior becomes invisible.
                backFaceCulling: false
            }).then(model => {
                if (!cesiumViewer) {
                    model.destroy();
                    return;
                }
                cesiumViewer.scene.primitives.add(model);
                model.show = false;
                // Shadows deliberately left at their default (Cesium's
                // scene-wide shadow map is off — see initCesium — because
                // it broke shader compilation for this model's
                // CustomShader). The self-shadow look is already handled
                // inside _glbOpaqueShaderPlane / _glbOpaqueShaderCar via
                // the ambientFill + rim terms.
                model._offset = new Cesium.Cartesian3(off[0], off[1], off[2]);
                model._isGlb = true;
                model._extraYawRad = Cesium.Math.toRadians(def.extraYawDeg || 0);
                vehiclePrimitives[type].push(model);
            }).catch(err => {
                console.error(`No se pudo cargar el modelo GLB de "${type}" (${def.url}):`, err);
            });
            return;
        }

        // ── Caso cajas (coche, bus) — código original sin cambios ───────
        def.forEach(part => {
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
const _scratchYawM3   = new Cesium.Matrix3();
const _scratchYawM    = new Cesium.Matrix4();


/**
 * updateVehicleModels — called every frame from updateCesiumCamera.
 * Moves/shows/hides each primitive using the same vehicleTransform as the
 * chase camera so model and camera never drift apart.
 */
function updateVehicleModels(vehicleTransform) {
    const scale   = settings.vehicleScale;
    const active  = state.vehicle;
    const isThird = settings.cesiumCameraMode === 'third';

    Object.keys(vehiclePrimitives).forEach(type => {
        const parts = vehiclePrimitives[type];
        for (let i = 0; i < parts.length; i++) {
            const prim = parts[i];
            // GLB cockpit model: show in BOTH first- and third-person.
            //   • Third-person → exterior silhouette visible behind/around the camera.
            //   • First-person → interior panels, seats, and windshield are visible
            //     (the camera is placed inside the cockpit via COCKPIT_OFFSET).
            // Box stand-ins (car / bus): exterior only, so hide in first-person.
            const show = (type === active) && (prim._isGlb ? true : isThird);
            prim.show = show;
            if (!show) continue;

            // Scale the offset, build a translation matrix, then compose:
            // modelMatrix = vehicleTransform × yawCorrection × offsetTranslation × uniformScale
            //
            // yawCorrection (prim._extraYawRad, set from def.extraYawDeg) compensates
            // for a structural mismatch in CesiumJS itself: Model.fromGltfAsync's
            // upAxis/forwardAxis machinery always rotates a glTF into Cesium's own
            // fixed internal target convention ("+Z up, +X forward" — see
            // ModelUtility.getAxisCorrectionMatrix), while vehicleTransform (built
            // every frame via Transforms.headingPitchRollToFixedFrame) treats its
            // OWN local +Y as forward. Nothing in the upAxis/forwardAxis option can
            // reconcile those two different "forward"s — it has to be corrected here,
            // once, per vehicle GLB that needs it. 0° (the default) is a no-op, so
            // box-based vehicles and any GLB that doesn't need this are unaffected.
            Cesium.Matrix3.fromRotationZ(prim._extraYawRad || 0, _scratchYawM3);
            Cesium.Matrix4.fromRotationTranslation(_scratchYawM3, Cesium.Cartesian3.ZERO, _scratchYawM);
            Cesium.Cartesian3.multiplyByScalar(prim._offset, scale, _scratchOffsetC);
            Cesium.Matrix4.fromTranslation(_scratchOffsetC, _scratchOffsetM);
            Cesium.Matrix4.fromUniformScale(scale, _scratchScaleM);
            Cesium.Matrix4.multiply(vehicleTransform, _scratchYawM, _scratchModelM);
            Cesium.Matrix4.multiply(_scratchModelM, _scratchOffsetM, _scratchModelM);
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
    resetCameraSmoothing();
    // Reset free-look / orbit offsets so the new mode starts centered.
    freeLook.yaw      = 0;
    freeLook.pitch    = 0;
    freeLook.idleTime = 0;
    freeLook.dragging = false;
    document.getElementById('btn-view-first').classList.toggle('active', mode === 'first');
    document.getElementById('btn-view-third').classList.toggle('active', mode === 'third');
    const quickBtn = document.getElementById('btn-cam-view-quick');
    if (quickBtn) quickBtn.textContent = mode === 'third' ? '👁️ 3rd Person' : '👁️ 1st Person';
    // Show the cockpit adjuster button only while in first-person (where it applies)
    const camBtn = document.getElementById('btn-cockpit-cam-open');
    if (camBtn) camBtn.style.display = mode === 'first' ? 'inline-flex' : 'none';
    _updateFlashlightButtonVisibility();
}

function toggleCesiumCameraQuick() {
    setCesiumCameraView(settings.cesiumCameraMode === 'third' ? 'first' : 'third');
}

// ── Flashlight (first-person only) ───────────────────────────────────────────
/**
 * Shows/hides the flashlight button based on whether we're currently in
 * Cesium 3D + first-person — the only mode it's meaningful in. Also forces
 * the flashlight off (and restores normal scene lighting) any time it
 * becomes unavailable, e.g. switching to 3rd person or out of 3D mode.
 */
function _updateFlashlightButtonVisibility() {
    const btn = document.getElementById('btn-flashlight');
    if (!btn) return;
    const available = settings.renderMode === '3D' && settings.cesiumCameraMode === 'first';
    btn.style.display = available ? 'flex' : 'none';
    if (!available && flashlightOn) {
        flashlightOn = false;
        btn.classList.remove('active');
        _restoreAmbientSceneLight();
        if (cesiumViewer) cesiumViewer.scene.requestRender();
    }
}

/**
 * Toggles the flashlight on/off. Only has an effect in Cesium 3D
 * first-person — the button is hidden in every other mode, but this guard
 * also covers any stray keyboard-shortcut invocation.
 */
function toggleFlashlight() {
    const available = settings.renderMode === '3D' && settings.cesiumCameraMode === 'first';
    if (!available) return;

    flashlightOn = !flashlightOn;
    const btn = document.getElementById('btn-flashlight');
    if (btn) btn.classList.toggle('active', flashlightOn);

    if (!flashlightOn) {
        // Hand lighting back to whatever the day/night state expects —
        // updateCesiumCamera only applies the flashlight light each frame
        // while flashlightOn is true, so this is the one place that needs
        // to explicitly undo the override.
        _restoreAmbientSceneLight();
    }
    if (cesiumViewer) cesiumViewer.scene.requestRender();
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
    if (!cesiumViewer || !CONFIG.CESIUM_ION) { _worldTerrainReadyPromise = Promise.resolve(false); return; }
    if (settings.mapStyle !== 'cesium') { _worldTerrainReadyPromise = Promise.resolve(false); return; } // skip while the Photorealistic style is active — globe is hidden, terrain would be wasted bandwidth
    try {
        Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION;
        const terrainPromise = typeof Cesium.createWorldTerrainAsync === 'function'
            ? Cesium.createWorldTerrainAsync({ requestWaterMask: true })
            : Cesium.createWorldTerrain({ requestWaterMask: true });

        _worldTerrainReadyPromise = Promise.resolve(terrainPromise).then(tp => {
            if (!cesiumViewer) return false;
            cesiumViewer.terrainProvider = tp;
            console.log('%c🌍 WorldTerrain enabled!', 'color:#22c55e;font-weight:bold');
            return true;
        }).catch(e => {
            console.warn('WorldTerrain failed to load, staying on flat terrain:', e);
            return false;
        });
    } catch (e) {
        console.warn('WorldTerrain init failed:', e);
        _worldTerrainReadyPromise = Promise.resolve(false);
    }
}

/**
 * applyCesiumIonToken — reads the Settings textbox, saves it to
 * localStorage (so it's remembered on this device next visit) and
 * immediately enables WorldTerrain, OSM Buildings (if toggled on), and free
 * Photorealistic 3D Tiles — all three ride on this same token. A token
 * saved here always overrides the app's default project token
 * (DEFAULT_CESIUM_ION_TOKEN); use "Clear saved keys" to go back to it.
 */
function applyCesiumIonToken(inputId) {
    const input = document.getElementById(inputId || 'cesium-token-input');
    const token = input.value.trim();
    if (!token) return;
    localStorage.setItem(CONFIG_KEYS.CESIUM_ION, token);
    CONFIG.CESIUM_ION = token;
    ['cesium-token-input', 'cesium-token-input-2d'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.value = '';
            el.placeholder = '✓ Token saved on this device';
        }
    });
    tryEnableWorldTerrain();
    tryLoadPhotorealisticTiles();
    tryLoadOsmBuildings();
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

// ── 3D Free-Look Auto-Reset Delay ────────────────────────────────────────────
// Slider range is 0.5–30s; dragging all the way to the max (31) means "Never"
// and stores Infinity, so the free-look camera (see freeLook.RETURN_DELAY)
// stays wherever the user left it instead of springing back to center.
function updateFreeLookReturnDelay(val) {
    const n = parseFloat(val);
    const label = document.getElementById('val-freelook-return-delay');
    if (n >= 31) {
        settings.freeLookReturnDelay = Infinity;
        if (label) label.innerText = 'Never';
    } else {
        settings.freeLookReturnDelay = n;
        if (label) label.innerText = n.toFixed(1) + 's';
    }
    saveSettingsV2();
}

// ── Camera Rotates With Plane toggle ─────────────────────────────────────────
function updateCameraRotatesWithPlane(val) {
    settings.cameraRotatesWithPlane = val;
}

// ── Airplane 3D Mode: Sensitivity ────────────────────────────────────────────
function updateFlightSensitivity(val) {
    settings.flightSensitivity = parseFloat(val);
    document.getElementById('val-flight-sensitivity').innerText = parseFloat(val).toFixed(2) + 'x';
}

// ── Airplane 3D Mode: Acceleration ───────────────────────────────────────────
function updateFlightAcceleration(val) {
    settings.flightAcceleration = parseFloat(val);
    document.getElementById('val-flight-acceleration').innerText = parseFloat(val).toFixed(2) + 'x';
}

// ── Pitch Invert toggle ───────────────────────────────────────────────────────
// Flips joystick-up / keyboard-up between "nose up" and "nose down".
// Called by the on-screen button, the 'I' keyboard shortcut, and joystick btn 3.
function togglePitchInvert() {
    settings.invertPitch = !settings.invertPitch;
    const btn = document.getElementById('btn-pitch-invert');
    if (btn) btn.classList.toggle('active', settings.invertPitch);
}
/**
 * tryLoadOsmBuildings — loads Cesium OSM Buildings from Ion (asset 96188).
 * Requires a valid Ion token. No-op if viewer isn't ready or no token exists.
 */
function tryLoadOsmBuildings() {
    if (!cesiumViewer || !CONFIG.CESIUM_ION) {
        console.warn('OSM Buildings require a Cesium Ion token — paste one in Settings.');
        return;
    }
    if (settings.mapStyle !== 'cesium') return;
    // Remove any previously loaded instance first
    if (osmBuildingsTileset) {
        cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
        osmBuildingsTileset = null;
    }

    // Photorealistic 3D Tiles already include real, textured building
    // geometry — stacking OSM Buildings' plain grey box extrusions on top
    // of the same real-world locations just z-fights with (and visually
    // wins over) the textured mesh, which looks exactly like "the
    // photorealistic imagery isn't loading". Keep the two mutually
    // exclusive; photoreal wins if it's already up.
    if (photorealTileset) {
        console.warn('OSM Buildings skipped — Photorealistic 3D Tiles are already active and already include building geometry.');
        settings.osmBuildings = false;
        const cb = document.getElementById('set-osm-buildings');
        if (cb) cb.checked = false;
        return;
    }

    Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION;

    const buildingPromise = typeof Cesium.createOsmBuildingsAsync === 'function'
        ? Cesium.createOsmBuildingsAsync()
        : (typeof Cesium.createOsmBuildings === 'function'
            ? Promise.resolve(Cesium.createOsmBuildings())
            : Cesium.Cesium3DTileset.fromIonAssetId(96188));   // raw Ion asset fallback

    Promise.resolve(buildingPromise)
        .then(async tileset => {
            if (!cesiumViewer) return;
            cesiumViewer.scene.primitives.add(tileset);
            osmBuildingsTileset = tileset;
            // Vehicle-only shadows: OSM Buildings boxes must neither cast
            // nor receive shadows from the vehicle model.
            osmBuildingsTileset.shadows = Cesium.ShadowMode.DISABLED;
            await applyOsmBuildingsSatelliteTexture(tileset);
            console.log('%c🏙️ OSM Buildings loaded', 'color:#22c55e;font-weight:bold');
        })
        .catch(e => {
            console.warn('OSM Buildings failed to load (check Ion token / quota):', e);
            settings.osmBuildings = false;
            const cb = document.getElementById('set-osm-buildings');
            if (cb) cb.checked = false;
        });
}

// ── Satellite building texture ─────────────────────────────────────────────────

/**
 * Converts WGS84 lat/lng + zoom level to Web Mercator tile x/y.
 */
function latLngToOsmTile(lat, lng, zoom) {
    const n      = Math.pow(2, zoom);
    const x      = Math.floor((lng + 180) / 360 * n);
    const latRad = lat * Math.PI / 180;
    const y      = Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n);
    return { x, y };
}

/**
 * Returns the WGS84 bounding box (degrees) for a Web Mercator tile.
 */
function osmTileToBounds(x, y, zoom) {
    const n     = Math.pow(2, zoom);
    const west  = x       / n * 360 - 180;
    const east  = (x + 1) / n * 360 - 180;
    const north = Math.atan(Math.sinh(Math.PI * (1 - 2 * y       / n))) * 180 / Math.PI;
    const south = Math.atan(Math.sinh(Math.PI * (1 - 2 * (y + 1) / n))) * 180 / Math.PI;
    return { west, east, north, south };
}

/**
 * applyOsmBuildingsSatelliteTexture — drapes the ArcGIS satellite tile that
 * covers the current position over the OSM Buildings 3D tileset, giving every
 * building surface the top-down aerial colour of the real location — the same
 * technique Google Earth Pro uses for building extrusion textures.
 *
 * How it works: each fragment's ECEF world position (positionWC) is converted
 * to approximate geodetic lon/lat in GLSL, then mapped to UV coordinates into
 * a pre-fetched ArcGIS raster tile. Roof faces sample directly overhead pixels;
 * wall faces stretch the edge pixels downward — naturally matching the
 * satellite capture geometry.
 *
 * Requires Cesium ≥1.90 (CustomShader API). Uses UNLIT lighting so the
 * satellite RGB values are rendered as-is without PBR darkening.
 */
async function applyOsmBuildingsSatelliteTexture(tileset) {
    if (!Cesium.CustomShader || !Cesium.UniformType) {
        console.warn('Satellite building texture requires Cesium ≥1.90 (CustomShader API) — skipped.');
        return;
    }

    try {
        const zoom = 18;        // ~0.6 m/px — building-level resolution
        const GRID = 3;         // 3×3 tile grid → ~450 m coverage, no clamping at tile edges
        const HALF = 1;         // Math.floor(GRID/2)
        const TS   = 256;       // pixels per tile

        // Record where this tile grid is centred so the frame loop can
        // trigger a refresh when the car strays too far.
        satelliteTextureCenter = { lat: state.lat, lng: state.lng };

        const { x: cx, y: cy } = latLngToOsmTile(state.lat, state.lng, zoom);
        const n = Math.pow(2, zoom);

        // Geographic bounds of the full 3×3 grid
        const b = {
            west:  (cx - HALF)         / n * 360 - 180,
            east:  (cx + HALF + 1)     / n * 360 - 180,
            north: Math.atan(Math.sinh(Math.PI * (1 - 2 * (cy - HALF)     / n))) * 180 / Math.PI,
            south: Math.atan(Math.sinh(Math.PI * (1 - 2 * (cy + HALF + 1) / n))) * 180 / Math.PI,
        };

        // Stitch 9 tiles onto one canvas (top-left = NW corner, bottom-right = SE)
        const canvas = document.createElement('canvas');
        canvas.width  = GRID * TS;
        canvas.height = GRID * TS;
        const ctx = canvas.getContext('2d');

        await Promise.all(
            Array.from({ length: GRID * GRID }, (_, i) => {
                const dx = (i % GRID) - HALF;
                const dy = Math.floor(i / GRID) - HALF;
                const url = `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${zoom}/${cy + dy}/${cx + dx}`;
                return new Promise(resolve => {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload  = () => { ctx.drawImage(img, (dx + HALF) * TS, (dy + HALF) * TS); resolve(); };
                    img.onerror = resolve;   // keep going if one tile 404s
                    img.src = url;
                });
            })
        );

        const textureUrl = canvas.toDataURL('image/jpeg', 0.9);

        // LightingModel.UNLIT renders material.diffuse directly without any
        // PBR or ambient-occlusion math, which would otherwise crush the
        // satellite colours to near-black.
        const lightingModel = (Cesium.CustomShader.LightingModel || Cesium.LightingModel)
            ? (Cesium.LightingModel?.UNLIT ?? Cesium.CustomShader.LightingModel?.UNLIT)
            : undefined;

        const shaderOptions = {
            uniforms: {
                u_sat: {
                    type:  Cesium.UniformType.SAMPLER_2D,
                    value: new Cesium.TextureUniform({ url: textureUrl })
                },
                u_west:  { type: Cesium.UniformType.FLOAT, value: b.west  },
                u_east:  { type: Cesium.UniformType.FLOAT, value: b.east  },
                u_south: { type: Cesium.UniformType.FLOAT, value: b.south },
                u_north: { type: Cesium.UniformType.FLOAT, value: b.north },
            },
            fragmentShaderText: `
                void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                    vec3 p = fsInput.attributes.positionWC;

                    // ── ECEF → WGS84 geodetic lon/lat (degrees) ──────────────────
                    // Bowring's closed-form is used instead of the naive geocentric
                    // atan(z, rho), which is off by ~0.19° at 33°S — enough to
                    // clamp every fragment to the tile edge at zoom 16+.
                    const float A   = 6378137.0;          // WGS84 semi-major axis (m)
                    const float B   = 6356752.3142;       // semi-minor axis
                    const float E2  = 0.00669437999014;   // first eccentricity²
                    const float EP2 = 0.00673949674228;   // second eccentricity²
                    float rho   = sqrt(p.x*p.x + p.y*p.y);
                    float theta = atan(p.z * A, rho * B);
                    float lon   = degrees(atan(p.y, p.x));
                    float lat   = degrees(atan(
                        p.z + EP2 * B * pow(sin(theta), 3.0),
                        rho - E2  * A * pow(cos(theta), 3.0)
                    ));

                    // ── UV mapping into the stitched tile grid ────────────────────
                    // u goes west→east, v goes south→north (matching Mercator
                    // convention for the stitched canvas built in JS above).
                    // The SAME horizontal (top-down) UV is used for ALL faces —
                    // roofs get the exact overhead pixel; walls get the satellite
                    // colour at their lat/lng position, naturally blending with
                    // their neighbours and eliminating the blotch artifacts that
                    // the old roof-only guard left at ground level.
                    float u = clamp((lon - u_west)  / (u_east  - u_west),  0.0, 1.0);
                    float v = clamp((lat - u_south) / (u_north - u_south), 0.0, 1.0);

                    vec4 sat = texture(u_sat, vec2(u, v));

                    // ── Roofness factor for subtle wall shading ───────────────────
                    // The local "up" direction at any point on Earth's surface is
                    // normalize(positionWC) — the outward ECEF radial vector.
                    // We use it to add a gentle ambient-occlusion-like darkening on
                    // walls so the building silhouette reads clearly without making
                    // walls look flat or washed-out.
                    vec3 worldUp  = normalize(p);
                    vec3 normalWC = normalize(czm_inverseViewRotation * fsInput.attributes.normalEC);
                    float roofness = clamp(dot(normalWC, worldUp), 0.0, 1.0);

                    // Roofs   (roofness ≈ 1): shadeFactor = 1.0  → full sat colour
                    // Walls   (roofness ≈ 0): shadeFactor = 0.55 → slightly darker
                    // (avoids the uniform-white look of the old untextured walls)
                    float shadeFactor = mix(0.55, 1.0, roofness);

                    material.diffuse = sat.rgb * shadeFactor;
                    material.alpha   = 1.0;
                }
            `
        };
        if (lightingModel !== undefined) shaderOptions.lightingModel = lightingModel;

        tileset.customShader = new Cesium.CustomShader(shaderOptions);

        console.log(
            `%c🛰️ Satellite texture applied to OSM Buildings (ArcGIS tile z${zoom}/${x}/${y}, ` +
            `bounds W${b.west.toFixed(4)} E${b.east.toFixed(4)} S${b.south.toFixed(4)} N${b.north.toFixed(4)})`,
            'color:#22c55e;font-weight:bold'
        );
    } catch (e) {
        console.warn('applyOsmBuildingsSatelliteTexture failed:', e);
    }
}



/**
 * clearSavedKeys — removes the token the person entered on this device and
 * reverts to the default project token (window.__DEFAULT_CESIUM_TOKEN__ /
 * the CESIUM_TOKEN GitHub secret) if one is available, otherwise falls back
 * to the no-key default (ArcGIS imagery, flat terrain, no photoreal tiles).
 */
function clearSavedKeys() {
    localStorage.removeItem(CONFIG_KEYS.CESIUM_ION);
    CONFIG.CESIUM_ION = DEFAULT_CESIUM_ION_TOKEN;
    ['cesium-token-input', 'cesium-token-input-2d'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.placeholder = 'eyJhbGci...';
    });
    setPhotorealStatus('', null);
    if (photorealTileset && cesiumViewer) {
        cesiumViewer.scene.primitives.remove(photorealTileset);
        cesiumViewer.scene.globe.show = true;
        photorealTileset = null;
    }
    if (_gp3dtGridTrimHandler) { _gp3dtGridTrimHandler(); _gp3dtGridTrimHandler = null; }
    if (osmBuildingsTileset && cesiumViewer) {
        cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
        osmBuildingsTileset = null;
    }
    if (cesiumViewer) {
        Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION || 'none';
        cesiumViewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
    }
    if (CONFIG.CESIUM_ION) {
        // A default project token is available — re-enable WorldTerrain now
        // that Ion.defaultAccessToken points at it again. Photorealistic
        // Tiles / OSM Buildings stay off until the person re-enables them,
        // since "Clear" is meant to reset those choices too.
        tryEnableWorldTerrain();
    }
    // Photorealistic Tiles need a token, so always land back on the
    // Terrain + OSM style (which works fine without one) after a clear.
    settings.mapStyle = 'cesium';
    const btnCesium    = document.getElementById('btn-style-cesium');
    const btnPhotoreal = document.getElementById('btn-style-photoreal');
    if (btnCesium)    btnCesium.classList.add('active');
    if (btnPhotoreal) btnPhotoreal.classList.remove('active');
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
// ── Camera smoothing reset ──────────────────────────────────────────────
// Call this any time the vehicle's position is set DIRECTLY (teleport,
// spawn, vehicle switch) rather than integrated frame-by-frame by physics.
// Every one of these values represents a lag/spring toward the vehicle's
// last known position — without resetting them, a teleport leaves the
// camera (and, via _lastGoodGroundHeight, the vehicle's own ground anchor)
// slowly crawling toward the new location instead of snapping to it, which
// is what made the vehicle appear to "fly above nothing" after a GPS
// teleport: position jumped instantly, height didn't.
function resetCameraSmoothing() {
    camSmoothPos     = null;
    camSmoothHeading = null;
    camSmoothHeight  = null;
    camSmoothLat     = null;
    camSmoothLng     = null;
}

function updateCesiumCamera(dt) {
    if (!cesiumViewer) return;

    // ── Free-look / orbit auto-return spring ─────────────────────────────────
    // Accumulate idle time while not dragging.  Once the return delay is
    // reached, exponentially ease yaw and pitch back toward 0 so the camera
    // glides smoothly back to the default look direction.  The spring
    // constant is chosen so the return feels magnetic: decisive, not abrupt.
    if (!freeLook.dragging) {
        freeLook.idleTime += dt;
        if (freeLook.idleTime > freeLook.RETURN_DELAY) {
            const alpha = 1 - Math.exp(-freeLook.RETURN_SPRING * dt);
            freeLook.yaw   -= freeLook.yaw   * alpha;
            freeLook.pitch -= freeLook.pitch  * alpha;
            // Snap to exact zero at sub-pixel-degree precision to avoid
            // the camera never fully settling (asymptote of exponential decay).
            if (Math.abs(freeLook.yaw)   < 0.02) freeLook.yaw   = 0;
            if (Math.abs(freeLook.pitch) < 0.02) freeLook.pitch = 0;
        }
    }

    const isPlane = isPlaneType(state.vehicle);

    // ── AGL (Above Ground Level) via the flat airport disc ───────────────
    // Same simple model as ground collision (applyAirportCircleCollision):
    // no live scene raycast, no cache. flight.alt (AGL, in feet) is
    // measured from the active airport's flat field elevation whenever the
    // vehicle is within the 5 km disc — falling back to 0 m (sea level)
    // outside it or when no airport is known for this spawn, matching the
    // runway lights' "keep it simple" approach.
    let groundHeight = 0;
    if (_activeAirportCenter) {
        const _mPerDegLat = 111320;
        const _mPerDegLng = 111320 * Math.cos(_activeAirportCenter.lat * Math.PI / 180);
        const _dEast  = (state.lng - _activeAirportCenter.lng) * _mPerDegLng;
        const _dNorth = (state.lat - _activeAirportCenter.lat) * _mPerDegLat;
        if (Math.hypot(_dEast, _dNorth) <= _AIRPORT_COLLISION_RADIUS_M) {
            groundHeight = _activeAirportCenter.elevM;
        }
    }
    _groundPlaneSmoothedHeight = groundHeight;
    // groundRef IS the invisible ground plane's current height — updated
    // continuously (never frozen) so flight.alt always reflects real AGL.
    flight.groundRef = groundHeight;

    // Pitch/roll: true flight attitude for the plane; ground vehicles stay
    // level (no terrain-follow tilt, no ragdoll tumble).
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
    // anchored at the real terrain surface right now; the plane is
    // anchored at its (ground-locked-then-frozen) reference plus its own
    // flight altitude.
    // anchorHeight is what actually places the model/camera in the world;
    // flight.alt (used for the HUD readout) is left untouched by
    // settings.planeHeightOffset — it's a purely visual nudge for fixing
    // hitbox/model-origin mismatches (e.g. wheels floating above or
    // sinking into the runway), not a change to the simulated altitude.
    const anchorHeight = isPlane
        ? groundHeight + flight.alt * 0.3048 + (settings.planeHeightOffset || 0)
        : groundHeight;
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
        isPlane ? -flight.roll : 0,   // HPR "pitch" slot ← wing/lateral axis
        isPlane ?  flight.pitch : 0   // HPR "roll" slot  ← fuselage/forward axis
    );
    // headingPitchRollToFixedFrame/Quaternion (NOT a plain HPR-to-quaternion
    // conversion) account for the local East-North-Up frame at this exact
    // lat/lng — using a plain rotation instead would orient the vehicle
    // wrong anywhere except the equator/prime meridian.
    const vehicleTransform = Cesium.Transforms.headingPitchRollToFixedFrame(vehiclePosition, vehicleHpr);
    const vehicleQuat      = Cesium.Transforms.headingPitchRollQuaternion(vehiclePosition, vehicleHpr);

    updateVehicleModels(vehicleTransform);

    if (settings.cesiumCameraMode === 'third') {
        // Restore a comfortable near clip for the chase cam — the tight
        // 0.05 m value used in first-person cockpit mode would cause
        // z-fighting artefacts on terrain and building surfaces.
        const frustum3 = cesiumViewer.scene.camera.frustum;
        if (frustum3 && typeof frustum3.near !== 'undefined') {
            frustum3.near = 0.3;
        }
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
            // ── Plane: orbit around the FIRST-PERSON (cockpit) position ──
            // This makes 3rd-person feel like a smooth zoom-out from 1st-person.
            // Compute the cockpit anchor (same COCKPIT_OFFSET used in 1st-person).
            const ccam3 = activeCockpitCam();
            const cockpitOffset3 = new Cesium.Cartesian3(ccam3.sidePosition, ccam3.frontBack, ccam3.upDown);
            const cockpitPos3    = Cesium.Matrix4.multiplyByPoint(vehicleTransform, cockpitOffset3, new Cesium.Cartesian3());

            // Altitude of cockpit in world space — use for height smoothing
            const cockpitCarto   = Cesium.Cartographic.fromCartesian(cockpitPos3);
            const cockpitAlt     = cockpitCarto ? cockpitCarto.height : anchorHeight;

            const heightAlpha = 1.0 - Math.exp(-(8 / followDelay) * dt);  // longitudinal (altitude) spring

            // ── Altitude lag (longitudinal axis) ──────────────────────────
            if (camSmoothHeight === null) {
                camSmoothHeight = cockpitAlt;
            } else {
                camSmoothHeight += (cockpitAlt - camSmoothHeight) * heightAlpha;
            }

            // Build smooth transform centred at cockpit lat/lng (real) but lagged altitude.
            // Use cockpit world-pos lat/lng for the horizontal anchor.
            const cockpitCartoDeg = cockpitCarto
                ? { lng: Cesium.Math.toDegrees(cockpitCarto.longitude), lat: Cesium.Math.toDegrees(cockpitCarto.latitude) }
                : { lng: state.lng, lat: state.lat };

            const camAnchorPos    = Cesium.Cartesian3.fromDegrees(cockpitCartoDeg.lng, cockpitCartoDeg.lat, camSmoothHeight);
            const smoothHpr       = new Cesium.HeadingPitchRoll(camSmoothHeading, 0, 0);
            const smoothTransform = Cesium.Transforms.headingPitchRollToFixedFrame(camAnchorPos, smoothHpr);

            const _orbitR3  = Math.sqrt(back * back + up * up);
            const _baseEl3  = Math.atan2(up, back);
            const _el3      = Math.min(1.484, Math.max(0.04, _baseEl3 + Cesium.Math.toRadians(freeLook.pitch))); // hard-capped at ~85° — never let elevation cross the pole and flip the orbit
            const _yawR3    = Cesium.Math.toRadians(freeLook.yaw);
            const _localOff3 = new Cesium.Cartesian3(
                 _orbitR3 * Math.cos(_el3) * Math.sin(_yawR3),   // x = right
                -_orbitR3 * Math.cos(_el3) * Math.cos(_yawR3),   // y = –forward (behind)
                 _orbitR3 * Math.sin(_el3)                        // z = up
            );
            camPos = Cesium.Matrix4.multiplyByPoint(smoothTransform, _localOff3, new Cesium.Cartesian3());
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

            // Orbit around the first-person (driver's seat) position, not
            // the vehicle's centre point — same reasoning as the plane
            // branch above: this makes 3rd-person feel like a zoom-out
            // FROM 1st-person instead of pivoting around some arbitrary
            // point inside the model.
            const ccamG = activeCockpitCam();
            const cockpitOffsetG = new Cesium.Cartesian3(ccamG.sidePosition, ccamG.frontBack, ccamG.upDown);
            const cockpitPosG    = Cesium.Matrix4.multiplyByPoint(vehicleTransform, cockpitOffsetG, new Cesium.Cartesian3());
            const cockpitCartoG  = Cesium.Cartographic.fromCartesian(cockpitPosG);
            const cockpitLatG    = cockpitCartoG ? Cesium.Math.toDegrees(cockpitCartoG.latitude)  : state.lat;
            const cockpitLngG    = cockpitCartoG ? Cesium.Math.toDegrees(cockpitCartoG.longitude) : state.lng;
            const cockpitAltG    = cockpitCartoG ? cockpitCartoG.height : groundHeight;

            if (camSmoothLat === null) {
                camSmoothLat = cockpitLatG;
                camSmoothLng = cockpitLngG;
            } else {
                camSmoothLat += (cockpitLatG - camSmoothLat) * posAlpha;
                camSmoothLng += (cockpitLngG - camSmoothLng) * posAlpha;
            }

            const smoothVehiclePos = Cesium.Cartesian3.fromDegrees(camSmoothLng, camSmoothLat, cockpitAltG);
            const smoothHpr        = new Cesium.HeadingPitchRoll(camSmoothHeading, 0, 0);
            const smoothTransform  = Cesium.Transforms.headingPitchRollToFixedFrame(smoothVehiclePos, smoothHpr);

            const _orbitRG  = Math.sqrt(back * back + up * up);
            const _baseElG  = Math.atan2(up, back);
            const _elG      = Math.min(1.484, Math.max(0.04, _baseElG + Cesium.Math.toRadians(freeLook.pitch))); // hard-capped at ~85° — never let elevation cross the pole and flip the orbit
            const _yawRG    = Cesium.Math.toRadians(freeLook.yaw);
            const _localOffG = new Cesium.Cartesian3(
                 _orbitRG * Math.cos(_elG) * Math.sin(_yawRG),
                -_orbitRG * Math.cos(_elG) * Math.cos(_yawRG),
                 _orbitRG * Math.sin(_elG)
            );
            camPos = Cesium.Matrix4.multiplyByPoint(smoothTransform, _localOffG, new Cesium.Cartesian3());
            camSmoothPos = camPos;
        }

        // ── Point camera from its position toward the vehicle ─────────────
        // Use setView so we control position + direction explicitly.
        cesiumViewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);

        // Look at the cockpit / driver-seat position (the same point used as
        // the first-person eye) rather than the vehicle's centre, for every
        // vehicle type — so 3rd person always orbits the 1st-person camera
        // position, giving a true "zoom out from 1st-person" effect.
        const ccamLook = activeCockpitCam();
        const cockpitOffLook = new Cesium.Cartesian3(ccamLook.sidePosition, ccamLook.frontBack, ccamLook.upDown);
        let cameraLookTarget = Cesium.Matrix4.multiplyByPoint(vehicleTransform, cockpitOffLook, new Cesium.Cartesian3());

        // World "up" at the vehicle's location (baseline, used for ground vehicles).
        const enuUp = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(vehiclePosition, new Cesium.Cartesian3());

        // Base look direction: from camera position toward the look target.
        const dir = Cesium.Cartesian3.subtract(cameraLookTarget, camPos, new Cesium.Cartesian3());
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

        // Tighten the near clip plane so cockpit panels that sit only
        // centimetres from the camera eye aren't culled.  The default
        // Cesium near plane (~0.1–1 m auto-adjusted) can clip instrument
        // panels, the windshield frame, and the glareshield.
        // 0.05 m (5 cm) is safe for a cockpit interior; restore a wider
        // value for ground vehicles so kerbs/road markings don't flicker.
        const frustum = cesiumViewer.scene.camera.frustum;
        if (frustum && typeof frustum.near !== 'undefined') {
            frustum.near = isPlane ? 0.05 : 0.3;
        }

        // Each vehicle now reads from its OWN cockpitCam entry — adjusting/
        // saving these in car mode has no effect on cockpitCam.plane (or
        // cockpitCam.bus), and vice-versa.
        const ccam = activeCockpitCam();

        // ── Cockpit / driver seat offset — same approach for all 3 vehicles ──
        // vehicleTransform local frame: x=right(+)/left(−), y=forward(+), z=up(+).
        // All values are in REAL WORLD METRES — independent of model render scale.
        //
        // Plane — derived from the actual GLB node data:
        //   • Model nose sits at Y ≈ +8.5 m from model origin in glTF space.
        //     After ×4 render scale the aircraft nose is ~34 m ahead of the
        //     reference point; the cockpit windshield is a few metres behind that.
        //   • A real A320's cockpit is ~18 m ahead of its centre of mass, which
        //     is where the Cesium vehicle anchor (state.lat/lng) sits.
        //   • Pilot eye height: ~4.5 m above the ground reference when on the ground
        //     (fuselage belly is ~2 m up + ~2.5 m interior floor-to-eye).
        //
        // Car/bus — upDown defaults (1.3 m / 2.4 m) reproduce the old fixed
        // driver-eye heights; frontBack/sidePosition default to a small
        // driver's-seat offset instead of dead-centre.
        //
        // Fine-tuning cheat-sheet (per vehicle, via the Cockpit Cam adjuster):
        //   y too small → camera inside the body → increase y toward the nose/front
        //   y too large → camera floating ahead of the vehicle → decrease y
        //   z too small → looking at the dash/panel top → increase z
        //   z too large → camera above the roof → decrease z
        //   x ≈ 0      → centre seat; negative = left/driver seat; positive = right
        const COCKPIT_OFFSET = new Cesium.Cartesian3(
            ccam.sidePosition,
            ccam.frontBack,
            ccam.upDown
        );
        const fpDestination = Cesium.Matrix4.multiplyByPoint(
            vehicleTransform, COCKPIT_OFFSET, new Cesium.Cartesian3()
        );

        cesiumViewer.camera.setView({
            destination: fpDestination,
            orientation: {
                heading: Cesium.Math.toRadians(state.heading  + ccam.horizontalTurn + freeLook.yaw),
                pitch:   Cesium.Math.toRadians(camPitchDeg   + (isPlane ? ccam.verticalTurn : 0) + freeLook.pitch),
                roll:    camRoll
            }
        });

        // ── Flashlight ──────────────────────────────────────────────────
        // A PointLight anchored to the camera's eye position every frame —
        // since the camera position/orientation above already follows
        // "the center of the view" (look direction + free-look), the light
        // naturally follows wherever the player is looking without needing
        // its own direction tracking. Cesium only supports a single global
        // scene.light, so this temporarily overrides the day/night
        // sun/moon light while it's on; toggleFlashlight() restores it.
        if (flashlightOn) {
            // Cesium has no Cesium.PointLight constructor — the only lights it
            // exposes are DirectionalLight and SunLight. We approximate a
            // flashlight with a DirectionalLight whose direction is re-synced
            // to the camera's look direction every frame, so it still behaves
            // like a "beam from where you're looking" even though it has no
            // falloff from a fixed position.
            if (!_flashlightLight) {
                _flashlightLight = new Cesium.DirectionalLight({
                    color: Cesium.Color.fromCssColorString('#fff3d6'),
                    intensity: 6.0
                });
            }
            _flashlightLight.direction = Cesium.Cartesian3.clone(
                cesiumViewer.camera.direction, _flashlightLight.direction
            );
            // Brighter relative punch at night (when ambient light is low)
            // than during the day (where it'd otherwise be invisible) — but
            // capped well below a full SunLight's intensity (~2.0) so it
            // doesn't blow out exposure/bloom across the whole frame.
            _flashlightLight.intensity = isNightMode ? 3.0 : 1.5;
            cesiumViewer.scene.light = _flashlightLight;
            // Both the sky dome (scene.atmosphere) and the ground/fog
            // atmosphere (scene.globe) read scene.light by default to decide
            // how bright to render — Globe.dynamicAtmosphereLightingFromSun
            // defaults to false, meaning ground atmosphere normally follows
            // scene.light rather than the real sun. So a bright flashlight
            // light gets misread as "the sun is up" and the whole sky
            // flips to daytime blue.
            //
            // During the DAY this is harmless to fix by keying off the real
            // sun position instead, since the real sun is genuinely up too.
            // At NIGHT it's the wrong fix: the real sun's actual elevation
            // angle at this location/time has nothing to do with our forced
            // night state, so keying ground shading off of it makes the
            // ground sweep through the true day/night terminator as you
            // look around — exactly the "look down = smooth night→day"
            // artifact this was causing. So only apply the sun-follow
            // override in the daytime branch; at night we instead just rely
            // on the intensity cap above to keep the flashlight from being
            // bright enough to be misread as sunrise, and leave atmosphere/
            // globe lighting keyed off scene.light like normal.
            if (!isNightMode) {
                if (cesiumViewer.scene.atmosphere && _flashlightPrevDynamicLighting === null) {
                    _flashlightPrevDynamicLighting = cesiumViewer.scene.atmosphere.dynamicLighting;
                    cesiumViewer.scene.atmosphere.dynamicLighting = Cesium.DynamicAtmosphereLightingType.SUNLIGHT;
                }
                if (cesiumViewer.scene.globe && _flashlightPrevGlobeLightingFromSun === null) {
                    _flashlightPrevGlobeLightingFromSun = cesiumViewer.scene.globe.dynamicAtmosphereLightingFromSun;
                    cesiumViewer.scene.globe.dynamicAtmosphereLightingFromSun = true;
                }
            }
        }


        // Apply cockpit FOV offset on top of the main settings.fov value.
        if (cesiumViewer.scene.camera.frustum &&
            typeof cesiumViewer.scene.camera.frustum.fov !== 'undefined') {
            cesiumViewer.scene.camera.frustum.fov =
                Cesium.Math.toRadians(settings.fov + ccam.fovOffset);
        }
    }
}

// ==========================================
// LOGITECH EXTREME 3D PRO JOYSTICK SUPPORT
// ==========================================
// Uses the W3C Gamepad API (polling-based) to read a physical flight stick.
// The Logitech Extreme 3D Pro axis layout (standard HID report):
//   Axis 0 → X  (stick left/right)  → roll
//   Axis 1 → Y  (stick fwd/back)    → pitch  (inverted: push fwd = nose down)
//   Axis 2 → Rz (stick twist)       → rudder / yaw
//   Axis 3 → Slider (base throttle) → throttle (−1 = full, +1 = idle)
// Buttons:
//   0 → trigger, 1 → thumb, 2–11 → hat + top buttons
//
// The poller only activates while in airplane mode + Cesium 3D.
// It OVERRIDES the on-screen touch joystick when the physical stick moves
// beyond the deadzone, so both inputs can coexist (tablet propped up
// while flying with the joystick, for example).
// ==========================================
let _gpConnected    = false;
let _gpLastLogTime  = 0;
const GP_DEADZONE   = 0.08;   // axis dead-zone (fraction of full range)

/** Apply a symmetric dead-zone and re-scale the remaining range to 0..1. */
function _gpDeadzone(v) {
    if (Math.abs(v) < GP_DEADZONE) return 0;
    return (v - Math.sign(v) * GP_DEADZONE) / (1 - GP_DEADZONE);
}

/**
 * pollGamepad — called every frame from update().
 * Reads the first connected gamepad and feeds its axes into flightInput
 * and the throttle/yaw controls.  No-ops when no gamepad is connected,
 * when the vehicle is not the plane, or when not in Cesium 3D mode.
 */
function pollGamepad() {
    if (!isPlaneType(state.vehicle)) return;

    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    let gp = null;
    for (let i = 0; i < pads.length; i++) { if (pads[i]) { gp = pads[i]; break; } }

    if (!gp) {
        _gpConnected = false;
        return;
    }
    _gpConnected = true;

    // ── Roll (Axis 0) and Pitch (Axis 1) ─────────────────────────────────
    // Only override the on-screen joystick when the physical stick is
    // pushed away from centre, so a dormant stick doesn't freeze the UI.
    const rawRoll  = _gpDeadzone(gp.axes[0] || 0);
    const rawPitch = _gpDeadzone(gp.axes[1] || 0);
    if (Math.abs(rawRoll) > 0 || Math.abs(rawPitch) > 0 || !flightJoystickActive) {
        flightInput.roll  =  rawRoll;
        flightInput.pitch = -rawPitch;   // pull back (−Y) = nose up (+pitch)

        // Sync the on-screen knob visually
        const base = document.getElementById('flight-joystick-base');
        const knob = document.getElementById('flight-joystick-knob');
        if (base && knob && (Math.abs(rawRoll) > 0 || Math.abs(rawPitch) > 0)) {
            const maxLen = base.clientWidth / 2 - knob.clientWidth / 2;
            knob.style.transform = `translate(${rawRoll * maxLen}px, ${-rawPitch * maxLen}px)`;
        } else if (base && knob && !flightJoystickActive) {
            knob.style.transform = 'translate(0px, 0px)';
        }
    }

    // ── Yaw / Rudder (Axis 2 — stick twist) ──────────────────────────────
    const rawYaw = _gpDeadzone(gp.axes[2] || 0);
    flightInput.yaw = rawYaw;
    const ySlider = document.getElementById('flight-yaw-slider');
    if (ySlider) ySlider.value = rawYaw;

    // ── Throttle (Axis 3 — base slider) ───────────────────────────────────
    // Axis value: −1 = slider fully forward (full thrust), +1 = back (idle).
    // Map to 0..100 %.
    if (gp.axes.length > 3) {
        const rawThrot = gp.axes[3];
        const throtPct = Math.round((1 - rawThrot) / 2 * 100);
        flight.throttle = Math.max(0, Math.min(100, throtPct));
        const tSlider = document.getElementById('flight-throttle-slider');
        const tVal    = document.getElementById('flight-throttle-val');
        if (tSlider) tSlider.value = flight.throttle;
        if (tVal)    tVal.textContent = formatThrottleReadout(flight.throttle);
    }

    // ── Brake — Button 2 (top-left cluster, first side button) ───────────
    // Hold the button to activate wheel brakes (same as the on-screen BRAKE).
    const brakeBtn = gp.buttons[2];
    if (brakeBtn) {
        const bPressed = brakeBtn.pressed || brakeBtn.value > 0.5;
        if (bPressed !== flight.brakeActive) {
            flight.brakeActive = bPressed;
            const bEl = document.getElementById('btn-flight-brake');
            if (bEl) bEl.classList.toggle('active', bPressed);
        }
    }

    // ── Pitch Invert — Button 3 (second thumb/side button) ───────────────
    // Rising-edge only: one press = one toggle, even if you hold the button.
    const invertBtn = gp.buttons[3];
    if (invertBtn) {
        const iNowPressed = invertBtn.pressed || invertBtn.value > 0.5;
        if (iNowPressed && !pollGamepad._invertBtnWasDown) togglePitchInvert();
        pollGamepad._invertBtnWasDown = iNowPressed;
    }
}

window.addEventListener('gamepadconnected', (e) => {
    _gpConnected = true;
    console.log(`%c🕹️ Joystick connected: ${e.gamepad.id}`, 'color:#22c55e;font-weight:bold');
    // Brief on-screen notification
    const helpEl = document.getElementById('controls-help');
    if (helpEl) {
        const prev = helpEl.innerHTML;
        helpEl.innerHTML = `<b>🕹️ Joystick Connected</b><br><span style="font-size:0.8em">${e.gamepad.id}</span>`;
        setTimeout(() => { helpEl.innerHTML = prev; }, 3500);
    }
});
window.addEventListener('gamepaddisconnected', (e) => {
    _gpConnected = false;
    console.log(`%c🕹️ Joystick disconnected: ${e.gamepad.id}`, 'color:#ef4444;font-weight:bold');
    // Reset flight inputs so the plane doesn't keep the last physical axis value
    flightInput.roll = 0; flightInput.pitch = 0; flightInput.yaw = 0;
    const knob = document.getElementById('flight-joystick-knob');
    if (knob) knob.style.transform = 'translate(0px, 0px)';
    const ySlider = document.getElementById('flight-yaw-slider');
    if (ySlider) ySlider.value = 0;
});

// ==========================================
// 7b. PHYSICS & RENDERING LOOP
// ==========================================
let lastTime = performance.now();

function update() {
    let now = performance.now();
    let dt  = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    _updateFPSCounter(now, dt);
    if (settings.debugMode || settings.streamingStats || settings.memoryStats) updateDebugOverlays();

    // ── Spawn gate: no physics or camera updates until player confirms spawn,
    // and pause again any time preloadAreaAroundLocation() is sweeping the
    // camera for the quick-access preload button. Cesium continues loading
    // terrain in the background via its own render loop either way.
    if (!gameStarted || gamePreloading) {
        requestAnimationFrame(update);
        return;
    }

    // ── Physical joystick (Logitech Extreme 3D Pro / any Gamepad API device) ─
    pollGamepad();

    // ── Physics ───────────────────────────────────────────────────────────
    // Snapshot BEFORE this frame's normal (non-collidable) integration, so
    // applyAirportCircleCollision() below has a known-good origin.
    const _collisionPrevLat = state.lat, _collisionPrevLng = state.lng;

    if (isPlaneType(state.vehicle)) {
        updateFlight(dt);
        updateA320Audio(dt);

        // ── Tiller ground steering ──────────────────────────────────────
        // Only active on the ground (0-5 ft AGL) — this is the plane's ONLY
        // source of ground steering (the rudder has no say in heading while
        // taxiing here). Uses the exact same steering formula the car/bus
        // branch below uses: turnInput * baseTurnRate * steeringSensitivity
        // * dt * sign(speed), just fed by the tiller instead of arrow
        // keys/joystick.
        if ((flight.alt || 0) <= 5 && Math.abs(state.speed) > 0.5) {
            const baseTurnRate = 60; // deg/s at full tiller deflection
            state.heading += baseTurnRate * tillerInput * settings.steeringSensitivity * dt * Math.sign(state.speed);
            state.heading = (state.heading + 360) % 360;
        }

        // Tiller only makes sense (and only appears) while on the ground —
        // hide it in the air.
        const tillerEl = document.getElementById('flight-tiller-container');
        if (tillerEl) tillerEl.style.display = ((flight.alt || 0) <= 5) ? 'flex' : 'none';
    } else {
        const accel = 15, brake = 25, fric = 4,
              maxSpeed = state.vehicle === 'car' ? 130 : 80;

        if (isKeyDown('forward')) state.speed += accel * dt;
        else if (isKeyDown('back')) state.speed -= brake * dt;
        else {
            if(Math.abs(state.speed) < fric * dt) state.speed = 0;
            else state.speed -= Math.sign(state.speed) * fric * dt;
        }
        state.speed = Math.max(-30, Math.min(state.speed, maxSpeed));

        let turnInput = (settings.steeringMode === 'arrows')
            ? (isKeyDown('left') ? -1 : isKeyDown('right') ? 1 : 0)
            : groundJoyX;

        if(Math.abs(state.speed) > 0.5) {
            let baseTurnRate = state.vehicle === 'car' ? 120 : 60;
            state.heading += baseTurnRate * turnInput * settings.steeringSensitivity * dt * Math.sign(state.speed);
        }

        let hdgRad = state.heading * Math.PI / 180;
        state.lat += (state.speed * Math.cos(hdgRad)) / 111320 * dt;
        state.lng += (state.speed * Math.sin(hdgRad)) / (111320 * Math.cos(state.lat * Math.PI / 180)) * dt;

        state.heading = (state.heading + 360) % 360;
    }

    // ── Ground Collision — flat 5 km disc around the active airport; a
    // no-op outside 3D mode or when no airport is known for this spawn. ──
    applyAirportCircleCollision(dt, _collisionPrevLat, _collisionPrevLng);

    // ── Smooth camera heading ─────────────────────────────────────────────
    let diff = (state.heading - camHeading + 180) % 360 - 180;
    camHeading += diff * 5 * dt;
    _nightLightTimer += dt;

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
        }

        let mapRot = state.headUp ? -camHeading : 0;
        dom.mapSubpixel.style.transform  = `translate3d(${-dx}px, ${-dy}px, 0)`;
        dom.mapRotator.style.transform   = `rotate(${mapRot}deg)`;
    } else if (Math.abs(state.lat - baseLat) > 0.01 || Math.abs(state.lng - baseLng) > 0.01) {
        // Still recenter Leaflet's internal projection occasionally in 3D
        // mode (cheap, no transform write) so GPS math and a future switch
        // back to CSS/2D mode don't inherit a stale base.
        baseLat = state.lat; baseLng = state.lng;
        map.setView([baseLat, baseLng], settings.mapZoom, {animate: false});
    }

    // ── Render mode: Cesium (first-person — no vehicle sprite to draw) ─────
    if (settings.renderMode === '3D' && cesiumViewer) {
        updateCesiumCamera(dt);

        // 🔴 FIX: defensive guard against the GP3DT terrain silently
        // reverting to full daylight brightness. The tileset can be torn
        // down and rebuilt for several reasons (style switch, settings
        // reload, network retry) and every one of those paths resets its
        // color/blend to defaults. Rather than trying to patch every
        // creation site individually, just re-assert the correct night
        // tint here every frame while night mode is active — it's three
        // cheap property writes, so the cost is negligible, and it makes
        // "terrain still bright at night" structurally impossible.
        if (isNightMode && photorealTileset) {
            if (photorealTileset.colorBlendAmount !== 0.85) {
                photorealTileset.colorBlendMode   = Cesium.Cesium3DTileColorBlendMode.MIX;
                photorealTileset.colorBlendAmount = 0.85;
                photorealTileset.color            = new Cesium.Color(0.03, 0.03, 0.10, 1.0);
                if (photorealTileset.imageBasedLighting) {
                    photorealTileset.imageBasedLighting.enabled = false;
                }
            }
        }

        // ── Night mode: update plane flash lights & shader uniforms ──────
        if (isNightMode && isPlaneType(state.vehicle)) {
            _updateNightPlaneFlash(dt);

            // NOTE: an orange "cockpit glow" billboard used to be spawned
            // here. It made the cockpit/interior read as visibly orange-tinted
            // and has been disabled — nav/strobe/beacon lights (above) and the
            // neutral night base glow (in the shader) are enough.
            if (_cockpitLightSource && cesiumViewer) {
                cesiumViewer.entities.remove(_cockpitLightSource);
                _cockpitLightSource = null;
            }
        } else if (_cockpitLightSource && cesiumViewer) {
            cesiumViewer.entities.remove(_cockpitLightSource);
            _cockpitLightSource = null;
        }
        // Update shader uniforms every frame so night glow/strobe animates
        if (_glbOpaqueShaderPlane && _glbOpaqueShaderPlane.uniforms) {
            _glbOpaqueShaderPlane.uniforms.u_nightMode.value      = isNightMode ? 1.0 : 0.0;
            _glbOpaqueShaderPlane.uniforms.u_time.value           = (_nightLightTimer % 100);
            _glbOpaqueShaderPlane.uniforms.u_cockpitAmbient.value = 0.0; // orange cockpit tint disabled
        }

        // NOTE: Auto-refresh of the satellite building texture while driving is
        // intentionally disabled — it caused visible texture "pop" / shimmer
        // every ~150 m. The texture is fetched once at load time and stays
        // fixed. To refresh after a long teleport, toggle OSM Buildings off/on.
        //
        // if (osmBuildingsTileset && satelliteTextureCenter) {
        //     const dLat = Math.abs(state.lat - satelliteTextureCenter.lat);
        //     const dLng = Math.abs(state.lng - satelliteTextureCenter.lng);
        //     if (dLat > 0.0014 || dLng > 0.0014) {
        //         applyOsmBuildingsSatelliteTexture(osmBuildingsTileset);
        //     }
        // }

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
        const rollDeg = isPlaneType(state.vehicle)
            ? -(flight.roll * 180 / Math.PI)   // negative: right-bank → CCW world tilt
            : 0;
        const tiltVal = settings.renderMode === 'CSS' ? settings.tilt : 0;

        // Single property assignment keeps GPU compositing layer stable
        dom.cameraTilt.style.transform =
            `rotateX(${tiltVal}deg) rotateZ(${rollDeg}deg)`;
        // ─────────────────────────────────────────────────────────────────

        let vRot       = state.headUp ? (state.heading - camHeading) : state.heading;
        let visualScale = settings.vehicleScale * (isPlaneType(state.vehicle) ? (1 + flight.alt / 3000) : 1);
        dom.graphic.style.transform =
            `translate(-50%, -50%) rotate(${vRot}deg) scale(${visualScale})`;
    }

    // ── HUD (runs every frame at 20fps cap) ───────────────────────────────
    const hudDue = (now - _hudLastUpdateTime) >= HUD_UPDATE_INTERVAL_MS;
    if (hudDue) {
        _hudLastUpdateTime = now;
        let dSpeed = state.speedUnit === 'KPH'   ? state.speed :
                     state.speedUnit === 'MPH'   ? state.speed * 0.6213 :
                                                   state.speed * 0.5399;
        dom.speedVal.innerText  = Math.round(Math.abs(dSpeed)).toString().padStart(3, '0');
        dom.coordInfo.innerText = `Lat: ${state.lat.toFixed(5)}\nLng: ${state.lng.toFixed(5)}`;

        if (isPlaneType(state.vehicle)) {
            dom.altInfo.innerText =
                `ALT: ${Math.round(flight.alt)} ft | V/S: ${Math.round(flight.verticalSpeed)} fpm | ` +
                `PWR: ${Math.round(flight.throttle)}% | ROLL: ${(flight.roll * 180/Math.PI).toFixed(1)}°`;
        }

        if (state.destLat !== null) {
            dom.gpsDist.innerText = getDistance(state.lat, state.lng, state.destLat, state.destLng).toFixed(2) + ' km';
            let arrowRot = state.headUp
                ? (getBearing(state.lat, state.lng, state.destLat, state.destLng) - camHeading)
                :  getBearing(state.lat, state.lng, state.destLat, state.destLng);
            dom.gpsArrow.style.transform = `rotate(${arrowRot}deg)`;
        }
    }

    // ── GPS Mini-Map (throttled internally to ~10fps) ─────────────────────
    updateNavMap();

    requestAnimationFrame(update);
}

// ==========================================
// COCKPIT CAMERA ADJUSTER — logic layer
// DOM lives in index.html; CSS in style.css.
// These functions are called by onclick handlers in the HTML.
// ==========================================

/** Maps each key → { step, unit, decimals } for display formatting. */
const _ccamMeta = {
    horizontalTurn: { step: 1,   unit: '°',  decimals: 1 },
    verticalTurn:   { step: 1,   unit: '°',  decimals: 1 },
    upDown:         { step: 0.1, unit: ' m', decimals: 2 },
    sidePosition:   { step: 0.1, unit: ' m', decimals: 2 },
    fovOffset:      { step: 1,   unit: '°',  decimals: 1 },
    frontBack:      { step: 0.1, unit: ' m', decimals: 2 },
};

function openCockpitCamModal() {
    refreshCockpitCamVals();
    document.getElementById('cockpit-cam-modal').style.display = 'flex';
}
function closeCockpitCamModal() {
    document.getElementById('cockpit-cam-modal').style.display = 'none';
}

/** Increment or decrement one cockpit cam parameter for the ACTIVE vehicle
 *  only (cockpitCam.car / .bus / .plane stay independent), then refresh
 *  its display. */
function adjCockpit(key, delta) {
    const ccam = activeCockpitCam();
    const m = _ccamMeta[key];
    ccam[key] = parseFloat((ccam[key] + delta).toFixed(m.decimals));
    _ccamRefreshOne(key);
}

/** Persists ALL THREE vehicles' cockpit cam settings (the full cockpitCam
 *  object) in one go — each vehicle's data was already isolated in memory,
 *  this just writes that same structure to localStorage. */
function saveCockpitCam() {
    localStorage.setItem('biv_cockpit_cam', JSON.stringify(cockpitCam));
    const btn = document.getElementById('ccam-save-btn');
    if (btn) { btn.textContent = '✓ Saved'; setTimeout(() => { btn.textContent = 'Save'; }, 900); }
}

function loadLastSaveCockpitCam() {
    const raw = localStorage.getItem('biv_cockpit_cam');
    if (!raw) return;
    try {
        const parsed = JSON.parse(raw);
        ['car', 'bus', 'plane'].forEach(v => {
            if (parsed[v]) Object.assign(cockpitCam[v], parsed[v]);
        });
        refreshCockpitCamVals();
    } catch (e) {}
}

/** Resets ONLY the active vehicle's cockpit cam back to ITS OWN defaults
 *  (cockpitCam.car resets to the car defaults, not the plane's). */
function resetCockpitCam() {
    Object.assign(activeCockpitCam(), _cockpitDefaultsByVehicle[state.vehicle]);
    refreshCockpitCamVals();
}

function refreshCockpitCamVals() {
    Object.keys(_ccamMeta).forEach(_ccamRefreshOne);
}
function _ccamRefreshOne(key) {
    const el = document.getElementById('ccam-val-' + key);
    if (!el) return;
    const m = _ccamMeta[key];
    el.textContent = activeCockpitCam()[key].toFixed(m.decimals) + m.unit;
}

// Close on backdrop click
document.getElementById('cockpit-cam-modal').addEventListener('click', function(e) {
    if (e.target === this) closeCockpitCamModal();
});

function buildCockpitCamModal() {
    // DOM is in index.html; just prime the value displays and show the
    // trigger button if we're already in 1st-person mode.
    refreshCockpitCamVals();
    const inFirstPerson = settings.cesiumCameraMode === 'first' && settings.renderMode === '3D';
    const triggerBtn = document.getElementById('btn-cockpit-cam-open');
    if (triggerBtn) triggerBtn.style.display = inFirstPerson ? 'inline-flex' : 'none';
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

// Load and apply the last-saved GP3DT quality preset (defaults to 'normal').
// Must run after initNavMap so the settings modal DOM is present.
tryApplyGP3DTSettingsOnLoad();

// ── Cockpit Camera Adjuster ───────────────────────────────────────────────────
buildCockpitCamModal();

// ==========================================
// SYNC UI WITH INITIAL SETTINGS
// ==========================================
document.getElementById('vehicle-select').value = state.vehicle;

document.getElementById('set-3rd-person-zoom').value = settings.thirdPersonZoom;
document.getElementById('val-3rd-person-zoom').innerText = settings.thirdPersonZoom.toFixed(2);

document.getElementById('set-cam-follow-delay').value = settings.cameraFollowDelay;
document.getElementById('val-cam-follow-delay').innerText = settings.cameraFollowDelay.toFixed(2);

document.getElementById('set-cam-horizon-blend').value = settings.cameraLookBlend;
document.getElementById('val-cam-horizon-blend').innerText = settings.cameraLookBlend.toFixed(2);

document.getElementById('set-freelook-return-delay').value = isFinite(settings.freeLookReturnDelay) ? settings.freeLookReturnDelay : 31;
document.getElementById('val-freelook-return-delay').innerText = isFinite(settings.freeLookReturnDelay) ? settings.freeLookReturnDelay.toFixed(1) + 's' : 'Never';

document.getElementById('set-fov').value = settings.fov;
document.getElementById('val-fov').innerText = settings.fov + '°';

document.getElementById('set-cam-rotate-plane').checked = settings.cameraRotatesWithPlane;

// Sync airplane 3D sensitivity & acceleration sliders
(function() {
    const sens = document.getElementById('set-flight-sensitivity');
    if (sens) {
        sens.value = settings.flightSensitivity;
        document.getElementById('val-flight-sensitivity').innerText =
            settings.flightSensitivity.toFixed(2) + 'x';
    }
    const accel = document.getElementById('set-flight-acceleration');
    if (accel) {
        accel.value = settings.flightAcceleration;
        document.getElementById('val-flight-acceleration').innerText =
            settings.flightAcceleration.toFixed(2) + 'x';
    }
    // Sync car/bus steering sensitivity slider
    const steerSens = document.getElementById('set-steering-sens');
    if (steerSens) {
        steerSens.value = settings.steeringSensitivity;
        const steerVal = document.getElementById('val-steering-sens');
        if (steerVal) steerVal.innerText = settings.steeringSensitivity.toFixed(1);
    }
})();

// ── Auto cache-clear / asset-reload on every entry ──────────────────────────
// Same effect as the manual "Clear Cache" + "Reload Assets" buttons in
// Troubleshooting, but run automatically on every page load / game start so
// stale tiles/assets never linger. This does NOT touch localStorage settings
// (key bindings, sliders, tokens, etc.) — only tile/cache-prefixed keys and
// in-memory asset state, exactly like the manual buttons do.
function autoClearCacheAndReloadAssets() {
    try {
        Object.keys(localStorage)
            .filter(k => k.startsWith('biv_tile_') || k.startsWith('biv_cache_'))
            .forEach(k => localStorage.removeItem(k));
    } catch (e) {}
    if (settings.mapStyle === 'photoreal') tryLoadPhotorealisticTiles();
    else tryEnableWorldTerrain();
    if (settings.osmBuildings) tryLoadOsmBuildings();
}

// ── Settings tree v2: load persisted settings, apply theme/language, sync UI ──
loadSettingsV2();
autoClearCacheAndReloadAssets();
applyTheme(settings.theme);
document.getElementById('set-language') && (document.getElementById('set-language').value = settings.language);
requestAnimationFrame(update);

// ============================================================================
// SPAWN SELECTION SYSTEM
// Modular architecture: AirportDB | SpawnMap | SpawnMarkers | SpawnUI
// ============================================================================

// ── AirportDB ────────────────────────────────────────────────────────────────
// Lazy-loads OurAirports CSV only when needed (highlight ON or search used).
// Parsed data is cached in memory for the session.
const AirportDB = (function () {
    const AIRPORTS_URL = 'https://davidmegginson.github.io/ourairports-data/airports.csv';

    let _airports   = [];   // parsed airport objects
    let _byIcao     = {};   // icao → airport
    let _byIata     = {};   // iata → airport
    let _loaded     = false;
    let _loading    = false;
    let _callbacks  = [];   // waiting on load

    // Minimal CSV parser — handles quoted fields correctly
    function _parseCSVLine(line) {
        const fields = [];
        let cur = '', inQ = false;
        for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (ch === '"') {
                if (inQ && line[i + 1] === '"') { cur += '"'; i++; }
                else inQ = !inQ;
            } else if (ch === ',' && !inQ) {
                fields.push(cur); cur = '';
            } else {
                cur += ch;
            }
        }
        fields.push(cur);
        return fields;
    }

    // Map airport type to our internal category
    function _typeCategory(type, name, keywords) {
        const t = (type || '').toLowerCase();
        const n = (name || '').toLowerCase();
        const k = (keywords || '').toLowerCase();
        if (t === 'heliport') return 'heliport';
        if (t === 'seaplane_base') return 'seaplane_base';
        if (t === 'balloonport') return 'small_airport';
        if (t === 'closed') return null; // exclude closed airports
        // Detect military by type or name keywords
        if (t === 'military' || n.includes('air force') || n.includes('naval air') ||
            n.includes('army') || n.includes(' afb') || n.includes(' nas ') ||
            k.includes('military') || k.includes('air force')) return 'military';
        return t; // large_airport | medium_airport | small_airport
    }

    function _parse(csvText) {
        const lines   = csvText.split('\n');
        const headers = _parseCSVLine(lines[0]);
        const idxOf   = k => headers.indexOf(k);

        const iIdent  = idxOf('ident');
        const iType   = idxOf('type');
        const iName   = idxOf('name');
        const iLat    = idxOf('latitude_deg');
        const iLng    = idxOf('longitude_deg');
        const iElev   = idxOf('elevation_ft');
        const iCntry  = idxOf('iso_country');
        const iIata   = idxOf('iata_code');
        const iKw     = idxOf('keywords');

        _airports = [];
        _byIcao   = {};
        _byIata   = {};

        for (let i = 1; i < lines.length; i++) {
            const l = lines[i].trim();
            if (!l) continue;
            const f    = _parseCSVLine(l);
            const type = f[iType] || '';
            const name = f[iName] || '';
            const kw   = iKw >= 0 ? (f[iKw] || '') : '';
            const cat  = _typeCategory(type, name, kw);
            if (!cat) continue; // skip closed

            const lat  = parseFloat(f[iLat]);
            const lng  = parseFloat(f[iLng]);
            if (isNaN(lat) || isNaN(lng)) continue;

            const icao = (f[iIdent] || '').trim().toUpperCase();
            const iata = (iIata >= 0 ? f[iIata] : '').trim().toUpperCase();
            const elev = parseFloat(f[iElev]) || null;
            const ctry = (f[iCntry] || '').trim().toUpperCase();

            const ap = {
                icao, iata, name, type: cat,
                lat, lng, elev, country: ctry,
                _nameLower: name.toLowerCase(),
                _icaoLower: icao.toLowerCase(),
                _iataLower: iata.toLowerCase()
            };

            _airports.push(ap);
            if (icao) _byIcao[icao] = ap;
            if (iata) _byIata[iata] = ap;
        }
        console.log(`[AirportDB] Loaded ${_airports.length} airports.`);
    }

    function load(cb) {
        if (_loaded) { if (cb) cb(); return; }
        if (cb) _callbacks.push(cb);
        if (_loading) return;
        _loading = true;

        fetch(AIRPORTS_URL)
            .then(r => r.text())
            .then(csv => {
                _parse(csv);
                _loaded  = true;
                _loading = false;
                _callbacks.forEach(fn => fn());
                _callbacks = [];
            })
            .catch(err => {
                console.error('[AirportDB] Failed to load airports:', err);
                _loading = false;
                _loaded  = true; // prevent infinite retry
                _callbacks.forEach(fn => fn());
                _callbacks = [];
            });
    }

    function isLoaded() { return _loaded; }

    function search(query, limit) {
        if (!_loaded || !query) return [];
        const q = query.trim().toLowerCase();
        if (!q) return [];
        limit = limit || 8;
        const results = [];

        // Exact ICAO / IATA match first
        const byCode = _byIcao[q.toUpperCase()] || _byIata[q.toUpperCase()];
        if (byCode) results.push(byCode);

        // Prefix / contains match
        for (let i = 0; i < _airports.length && results.length < limit; i++) {
            const ap = _airports[i];
            if (ap === byCode) continue;
            if (ap._icaoLower.startsWith(q) || ap._iataLower.startsWith(q) ||
                ap._nameLower.includes(q)) {
                results.push(ap);
            }
        }
        return results;
    }

    function getByBounds(swLat, swLng, neLat, neLng, types) {
        if (!_loaded) return [];
        const out = [];
        for (let i = 0; i < _airports.length; i++) {
            const ap = _airports[i];
            if (ap.lat < swLat || ap.lat > neLat) continue;
            if (ap.lng < swLng || ap.lng > neLng) continue;
            if (types && !types.has(ap.type)) continue;
            out.push(ap);
        }
        return out;
    }

    function getAll(types) {
        if (!_loaded) return [];
        if (!types) return _airports;
        return _airports.filter(ap => types.has(ap.type));
    }

    return { load, isLoaded, search, getByBounds, getAll };
})();

// ── SpawnMap ──────────────────────────────────────────────────────────────────
// Manages the dedicated Leaflet map instance for spawn selection.
const SpawnMap = (function () {
    let _map  = null;
    let _click = null; // click callback (lat, lng)

    function init(onMapClick) {
        if (_map) return;
        _click = onMapClick;

        // CartoDB Voyager — clean, recognisable world basemap; free & no key needed
        _map = L.map('spawn-map', {
            center: [20, 0],
            zoom: 2,
            minZoom: 1,
            maxZoom: 18,
            worldCopyJump: true,
            zoomControl: true,
        });

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '© <a href="https://carto.com/">CARTO</a> © <a href="https://www.openstreetmap.org/copyright">OSM</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(_map);

        _map.on('click', function (e) {
            if (_click) _click(e.latlng.lat, e.latlng.lng);
        });
    }

    function instance() { return _map; }

    function flyTo(lat, lng, zoom) {
        if (!_map) return;
        _map.flyTo([lat, lng], zoom || 10, { duration: 1.0 });
    }

    function invalidate() {
        if (_map) { _map.invalidateSize(); }
    }

    return { init, instance, flyTo, invalidate };
})();

// ── SpawnMarkers ──────────────────────────────────────────────────────────────
// Handles airport markers on the spawn map. Uses canvas renderer for
// performance. Renders only filtered types; clears & redraws on filter change.
const SpawnMarkers = (function () {
    let _layer      = null;   // L.LayerGroup
    let _renderer   = null;   // L.canvas
    let _visible    = false;
    let _activeTypes= new Set(['large_airport','medium_airport']);
    let _selected   = null;   // currently selected marker element
    let _onClick    = null;

    // Type → CSS class for size/colour
    const _cssClass = {
        large_airport:  'large',
        medium_airport: 'medium',
        small_airport:  'small',
        heliport:       'heli',
        seaplane_base:  'sea',
        military:       'mil',
    };

    function _makeIcon(type, isSelected) {
        const cls = `spawn-airport-marker ${_cssClass[type] || 'small'}${isSelected ? ' selected' : ''}`;
        // Size from CSS class
        const sizes = { large: 10, medium: 8, small: 5, heli: 6, sea: 6, mil: 7 };
        const sz = sizes[_cssClass[type]] || 6;
        return L.divIcon({
            className: cls,
            iconSize:  [sz, sz],
            iconAnchor:[sz/2, sz/2],
            popupAnchor:[0, -sz/2]
        });
    }

    function _buildPopupHTML(ap) {
        const codes = [ap.icao, ap.iata].filter(Boolean).join(' · ');
        return `<div class="spawn-popup-name">${ap.name}</div>
                <div class="spawn-popup-codes">${codes}</div>`;
    }

    function init(map, onClick) {
        _onClick  = onClick;
        _renderer = L.canvas({ padding: 0.5 });
        _layer    = L.layerGroup().addTo(map);
    }

    function setTypes(types) {
        _activeTypes = types;
        if (_visible) refresh();
    }

    function show() {
        _visible = true;
        refresh();
    }

    function hide() {
        _visible = false;
        if (_layer) _layer.clearLayers();
    }

    function refresh() {
        if (!_layer) return;
        _layer.clearLayers();
        if (!_visible) return;

        // Fetch all airports matching active type filter
        const airports = AirportDB.getAll(_activeTypes);

        // Performance: use zoom-aware density reduction
        const map  = SpawnMap.instance();
        const zoom = map ? map.getZoom() : 2;

        // At low zoom, only show large/medium to avoid thousands of markers
        const skipSmall = zoom < 6;
        const skipHeli  = zoom < 8;

        let added = 0;
        const MAX_MARKERS = 6000; // canvas handles this fine

        // Minimum invisible hit-test radius (px). Real dots can be as small as
        // 2.5px, brutal to tap on mobile, so every marker gets a much larger
        // transparent circle stacked underneath purely for click/hover
        // detection, while the visible dot on top stays its normal small size.
        const MIN_HIT_RADIUS = 14;

        for (let i = 0; i < airports.length && added < MAX_MARKERS; i++) {
            const ap = airports[i];
            if (skipSmall && (ap.type === 'small_airport')) continue;
            if (skipHeli  && (ap.type === 'heliport' || ap.type === 'seaplane_base')) continue;

            const visualRadius = ap.type === 'large_airport' ? 5 :
                                  ap.type === 'medium_airport' ? 3.5 :
                                  ap.type === 'military' ? 4 : 2.5;
            const strokeColor = ap.type === 'large_airport'  ? '#22c55e' :
                                ap.type === 'medium_airport' ? '#3b82f6' :
                                ap.type === 'military'       ? '#ef4444' :
                                ap.type === 'heliport'       ? '#eab308' :
                                ap.type === 'seaplane_base'  ? '#06b6d4' : '#94a3b8';

            // Invisible, oversized hit-target — added first so it sits underneath.
            const hitMarker = L.circleMarker([ap.lat, ap.lng], {
                renderer: _renderer,
                radius: Math.max(MIN_HIT_RADIUS, visualRadius + 10),
                stroke: false,
                fill: true,
                fillColor: '#000',
                fillOpacity: 0.001, // essentially invisible but still hit-tests
                bubblingMouseEvents: false
            });

            // The visible dot — purely decorative, doesn't intercept clicks.
            const marker = L.circleMarker([ap.lat, ap.lng], {
                renderer: _renderer,
                radius: visualRadius,
                color: strokeColor,
                fillColor: strokeColor,
                fillOpacity: 0.85,
                weight: 1.5,
                opacity: 0.9,
                interactive: false
            });

            hitMarker._airportData = ap;
            hitMarker.bindPopup(_buildPopupHTML(ap), {
                className: 'spawn-popup',
                closeButton: false,
                autoPan: false
            });
            hitMarker.on('click', function (e) {
                L.DomEvent.stopPropagation(e);
                if (_onClick) _onClick(ap);
            });
            hitMarker.on('mouseover', function () { this.openPopup(); });
            hitMarker.on('mouseout',  function () { this.closePopup(); });

            _layer.addLayer(hitMarker);
            _layer.addLayer(marker);
            added++;
        }
    }

    function isVisible() { return _visible; }

    return { init, show, hide, refresh, setTypes, isVisible };
})();

// ==========================================
// RUNWAY DATABASE
// Lazy-loads OurAirports runways.csv on first request.
// Provides runways keyed by ICAO so the spawn selector can offer
// takeoff / landing runway selection with correct heading + position.
// ==========================================
const RunwayDB = (() => {
    const RUNWAYS_URL = 'https://davidmegginson.github.io/ourairports-data/runways.csv';
    let _byIcao = {};   // icao → [runway, ...]
    let _loaded = false;
    let _loading = false;
    let _callbacks = [];

    function parseCSVLine(line) {
        const result = [];
        let cur = '', inQuote = false;
        for (let i = 0; i < line.length; i++) {
            const c = line[i];
            if (c === '"') { inQuote = !inQuote; }
            else if (c === ',' && !inQuote) { result.push(cur); cur = ''; }
            else { cur += c; }
        }
        result.push(cur);
        return result;
    }

    function load(cb) {
        if (_loaded) { if (cb) cb(); return; }
        if (cb) _callbacks.push(cb);
        if (_loading) return;
        _loading = true;

        fetch(RUNWAYS_URL)
            .then(r => r.text())
            .then(text => {
                const lines = text.split('\n');
                const header = parseCSVLine(lines[0]);
                const idx = {};
                header.forEach((h, i) => { idx[h.trim()] = i; });

                for (let i = 1; i < lines.length; i++) {
                    const row = parseCSVLine(lines[i]);
                    if (row.length < 10) continue;
                    const icao = (row[idx['airport_ident']] || '').trim();
                    if (!icao) continue;

                    const le_lat  = parseFloat(row[idx['le_latitude_deg']]);
                    const le_lng  = parseFloat(row[idx['le_longitude_deg']]);
                    const he_lat  = parseFloat(row[idx['he_latitude_deg']]);
                    const he_lng  = parseFloat(row[idx['he_longitude_deg']]);

                    // Skip rows without valid coordinates
                    if (!le_lat || !he_lat || isNaN(le_lat) || isNaN(he_lat)) continue;

                    const rwy = {
                        leIdent: (row[idx['le_ident']] || '').trim(),
                        heIdent: (row[idx['he_ident']] || '').trim(),
                        leLat:   le_lat,
                        leLng:   le_lng,
                        leElev:  parseFloat(row[idx['le_elevation_ft']]) || null,
                        leHdg:   parseFloat(row[idx['le_heading_degT']]) || null,
                        heLat:   he_lat,
                        heLng:   he_lng,
                        heElev:  parseFloat(row[idx['he_elevation_ft']]) || null,
                        heHdg:   parseFloat(row[idx['he_heading_degT']]) || null,
                        lengthFt: parseFloat(row[idx['length_ft']]) || 0,
                        widthFt:  parseFloat(row[idx['width_ft']]) || 0,
                        lighted:  (row[idx['lighted']] || '0').trim() === '1',
                        closed:  (row[idx['closed']] || '0').trim() === '1'
                    };
                    if (rwy.closed) continue;
                    if (!_byIcao[icao]) _byIcao[icao] = [];
                    _byIcao[icao].push(rwy);
                }

                _loaded = true;
                _loading = false;
                _callbacks.forEach(f => f());
                _callbacks = [];
                console.log(`[RunwayDB] Loaded runways for ${Object.keys(_byIcao).length} airports`);
            })
            .catch(e => {
                console.warn('[RunwayDB] Failed to load runways CSV:', e);
                _loading = false;
                _callbacks.forEach(f => f());
                _callbacks = [];
            });
    }

    function getRunways(icao) {
        return _byIcao[(icao || '').toUpperCase()] || [];
    }

    /**
     * Finds the closest known runway to a lat/lng, within maxDistanceM.
     * Used as a fallback so night-mode runway lights still have something
     * real to draw even when the player didn't spawn via the airport/runway
     * picker (e.g. typed GPS coordinates, or mid-flight toggle).
     */
    function findNearest(lat, lng, maxDistanceM) {
        if (!_loaded) return null;
        const limit = maxDistanceM || 5000;
        let best = null, bestD = Infinity;
        for (const icao in _byIcao) {
            const list = _byIcao[icao];
            for (let i = 0; i < list.length; i++) {
                const rwy = list[i];
                const dLe  = _haversineMeters(lat, lng, rwy.leLat, rwy.leLng);
                const dHe  = _haversineMeters(lat, lng, rwy.heLat, rwy.heLng);
                const midLat = (rwy.leLat + rwy.heLat) / 2, midLng = (rwy.leLng + rwy.heLng) / 2;
                const dMid = _haversineMeters(lat, lng, midLat, midLng);
                const d = Math.min(dLe, dHe, dMid);
                if (d < bestD) { bestD = d; best = Object.assign({}, rwy, { icao }); }
            }
        }
        return (best && bestD <= limit) ? best : null;
    }

    function isLoaded() { return _loaded; }

    return { load, getRunways, findNearest, isLoaded };
})();

// ── Spawn state ───────────────────────────────────────────────────────────────
let _spawnHighlightOn  = false;
let _spawnSelected     = null;   // currently selected airport or {lat,lng,name}
let _spawnPreviewRoute = null;   // L.polyline showing origin→destination preview on the spawn selector map
let _spawnSearchTimer  = null;
let _spawnClickMarker  = null;   // marker for a free-map click (non-airport)

// Active type filters for markers (derived from checkboxes)
function _getActiveFilterTypes() {
    const types = new Set();
    document.querySelectorAll('#spawn-filter-grid input[type="checkbox"]:checked').forEach(cb => {
        const v = cb.value;
        // Map checkbox values → AirportDB type keys
        if (v === 'large_airport' || v === 'large_airport_incl') {
            types.add('large_airport');
        } else {
            types.add(v);
        }
    });
    return types;
}

// ── SpawnUI public API ────────────────────────────────────────────────────────

function openSpawnSelector() {
    const start    = document.getElementById('spawn-start-screen');
    const selector = document.getElementById('spawn-selector-screen');

    // Animate out the start screen
    start.style.animation = 'spawn-fade-out 0.3s ease both';
    setTimeout(() => {
        start.style.display   = 'none';
        selector.style.display = 'flex';

        // Init map (no-op if already done)
        SpawnMap.init(_onSpawnMapClick);
        SpawnMarkers.init(SpawnMap.instance(), _onAirportMarkerClick);

        // Force Leaflet to recalculate its size after DOM is visible
        setTimeout(() => SpawnMap.invalidate(), 50);
    }, 280);
}

function closeSpawnSelector() {
    // Go back to start screen without starting the game
    const selector = document.getElementById('spawn-selector-screen');
    const start    = document.getElementById('spawn-start-screen');

    selector.style.animation = 'spawn-fade-out 0.25s ease both';
    setTimeout(() => {
        selector.style.display = 'none';
        start.style.display    = 'flex';
        start.style.animation  = 'spawn-fade-in 0.3s ease both';
    }, 230);
}

function toggleSpawnHighlight() {
    _spawnHighlightOn = !_spawnHighlightOn;
    const btn = document.getElementById('spawn-highlight-btn');
    btn.textContent = _spawnHighlightOn ? 'ON' : 'OFF';
    btn.classList.toggle('on', _spawnHighlightOn);

    if (_spawnHighlightOn) {
        // Load airport data if needed, then show markers
        AirportDB.load(() => {
            SpawnMarkers.setTypes(_getActiveFilterTypes());
            SpawnMarkers.show();
        });
    } else {
        SpawnMarkers.hide();
    }
}

function applySpawnFilters() {
    if (!_spawnHighlightOn) return; // markers hidden; filter applies next time they show
    AirportDB.load(() => {
        SpawnMarkers.setTypes(_getActiveFilterTypes());
        SpawnMarkers.refresh();
    });
}

// Called when user clicks a blank spot on the map
function _onSpawnMapClick(lat, lng) {
    // Remove previous free-click marker
    if (_spawnClickMarker) {
        SpawnMap.instance().removeLayer(_spawnClickMarker);
        _spawnClickMarker = null;
    }

    // Create a pin marker
    _spawnClickMarker = L.marker([lat, lng], {
        icon: L.divIcon({
            className: '',
            html: '<div style="width:14px;height:14px;border-radius:50%;background:#f59e0b;border:2.5px solid white;box-shadow:0 0 8px rgba(245,158,11,0.7);"></div>',
            iconSize:   [14, 14],
            iconAnchor: [7, 7]
        })
    }).addTo(SpawnMap.instance());

    _spawnSelected = {
        name:    `Map Location`,
        icao:    '—',
        iata:    '—',
        lat:     lat,
        lng:     lng,
        elev:    null,
        country: '—',
        type:    'custom'
    };
    _showSpawnInfo(_spawnSelected);
}

// Called when an airport marker is clicked
function _onAirportMarkerClick(airport) {
    // Remove free-click pin if present
    if (_spawnClickMarker) {
        SpawnMap.instance().removeLayer(_spawnClickMarker);
        _spawnClickMarker = null;
    }
    _spawnSelected = airport;
    clearDestSelection(); // a new takeoff/landing airport invalidates any previously chosen destination
    _showSpawnInfo(airport);
    SpawnMap.flyTo(airport.lat, airport.lng, Math.max(SpawnMap.instance().getZoom(), 10));
}

/**
 * _updateSpawnPreviewRoute — draws a straight-line preview between the
 * selected origin and destination directly on the spawn-selector map, so the
 * player can see the route immediately instead of having to start the drive
 * first and check the mini-map. Removes/redraws itself whenever origin or
 * destination selection changes.
 */
function _updateSpawnPreviewRoute() {
    const map = SpawnMap.instance();
    if (!map) return;

    if (_spawnPreviewRoute) {
        map.removeLayer(_spawnPreviewRoute);
        _spawnPreviewRoute = null;
    }

    if (!_spawnSelected || !_spawnLandingSelected) return;

    const originLatLng = L.latLng(_spawnSelected.lat, _spawnSelected.lng);
    const destLatLng    = L.latLng(_spawnLandingSelected.lat, _spawnLandingSelected.lng);

    let routeLatLngs = [originLatLng, destLatLng];
    try {
        if (window.turf) {
            const gc = turf.greatCircle(
                turf.point([_spawnSelected.lng, _spawnSelected.lat]),
                turf.point([_spawnLandingSelected.lng, _spawnLandingSelected.lat]),
                { npoints: 100 }
            );
            const coordSets = gc.geometry.type === 'MultiLineString' ? gc.geometry.coordinates : [gc.geometry.coordinates];
            routeLatLngs = coordSets.flat().map(c => L.latLng(c[1], c[0]));
        }
    } catch (e) {
        // fall back to the straight two-point line already set above
    }

    _spawnPreviewRoute = L.polyline(routeLatLngs, {
        color: '#ff00ff',
        weight: 3,
        opacity: 0.85,
        dashArray: '8 6',
        lineJoin: 'round'
    }).addTo(map);

    // Zoom out just enough to fit both endpoints so the whole preview is visible.
    map.fitBounds(L.latLngBounds([originLatLng, destLatLng]), { padding: [60, 60], maxZoom: 9 });
}

// Populate the info panel with selected airport/location data
function _showSpawnInfo(ap) {
    document.getElementById('spawn-selected-info').style.display = 'block';
    document.getElementById('spawn-hint-panel').style.display    = 'none';

    const badge = document.getElementById('spawn-info-type-badge');
    const typeLabels = {
        large_airport:  '✈️ Large Airport',
        medium_airport: '🛫 Medium Airport',
        small_airport:  '🛩️ Small Airport',
        heliport:       '🚁 Heliport',
        seaplane_base:  '🚤 Seaplane Base',
        military:       '🎖️ Military Airport',
        custom:         '📍 Custom Location'
    };
    badge.textContent = typeLabels[ap.type] || '📍 Location';

    document.getElementById('spawn-info-name').textContent     = ap.name || '—';
    document.getElementById('spawn-info-icao').textContent     = ap.icao || '—';
    document.getElementById('spawn-info-iata').textContent     = ap.iata || '—';
    document.getElementById('spawn-info-lat').textContent      = ap.lat.toFixed(5);
    document.getElementById('spawn-info-lng').textContent      = ap.lng.toFixed(5);
    document.getElementById('spawn-info-elev').textContent     = ap.elev != null ? `${Math.round(ap.elev).toLocaleString()} ft` : '—';
    document.getElementById('spawn-info-country').textContent  = ap.country || '—';

    // ── Runway / operation selector (airports with ICAO only) ──────────────
    const rwySection = document.getElementById('spawn-runway-section');
    const isAirport  = ap.icao && ap.icao !== '—' && ap.type !== 'custom';

    if (!rwySection) return;
    if (!isAirport || !isPlaneType(state.vehicle)) {
        rwySection.style.display = 'none';
        const destSection = document.getElementById('spawn-destination-section');
        if (destSection) destSection.style.display = 'none';
        return;
    }

    rwySection.style.display = 'block';
    _populateRunwaySelector(ap.icao);
    _syncDestinationSectionVisibility();

    // Live-toggle the destination (landing site) picker as the player flips
    // between Takeoff / Landing for this same airport.
    document.querySelectorAll('input[name="spawn-operation"]').forEach(radio => {
        radio.onchange = _syncDestinationSectionVisibility;
    });
}

/**
 * _syncDestinationSectionVisibility — the "🛬 GPS Destination" picker only
 * makes sense when the player is taking off (they need somewhere to fly
 * *to*). When "Landing" is selected instead, this airport already IS the
 * destination, so the picker is hidden.
 */
function _syncDestinationSectionVisibility() {
    const destSection = document.getElementById('spawn-destination-section');
    if (!destSection) return;
    const opTakeoff = document.querySelector('input[name="spawn-operation"][value="takeoff"]');
    const isTakeoff = !opTakeoff || opTakeoff.checked;
    destSection.style.display = isTakeoff ? 'block' : 'none';
}

/** Loads runway data (lazily) and fills the runway <select>. */
function _populateRunwaySelector(icao) {
    const sel      = document.getElementById('spawn-runway-select');
    const statusEl = document.getElementById('spawn-runway-status');
    if (!sel) return;

    sel.innerHTML = '<option value="">⏳ Loading runways…</option>';
    if (statusEl) statusEl.textContent = '';

    RunwayDB.load(() => {
        const runways = RunwayDB.getRunways(icao);
        sel.innerHTML = '';

        if (!runways.length) {
            sel.innerHTML = '<option value="">— No runway data available —</option>';
            if (statusEl) statusEl.textContent = 'Will spawn at airport centre.';
            return;
        }

        // Sort longest runway first
        runways.sort((a, b) => b.lengthFt - a.lengthFt);

        runways.forEach(rwy => {
            if (rwy.leIdent && rwy.leHdg !== null) {
                const opt = document.createElement('option');
                opt.value       = JSON.stringify({ end: 'le', rwy });
                opt.textContent = `RWY ${rwy.leIdent}  (hdg ${Math.round(rwy.leHdg)}°` +
                                  (rwy.lengthFt ? `  ·  ${Math.round(rwy.lengthFt).toLocaleString()} ft` : '') + ')';
                sel.appendChild(opt);
            }
            if (rwy.heIdent && rwy.heHdg !== null) {
                const opt = document.createElement('option');
                opt.value       = JSON.stringify({ end: 'he', rwy });
                opt.textContent = `RWY ${rwy.heIdent}  (hdg ${Math.round(rwy.heHdg)}°` +
                                  (rwy.lengthFt ? `  ·  ${Math.round(rwy.lengthFt).toLocaleString()} ft` : '') + ')';
                sel.appendChild(opt);
            }
        });

        if (statusEl) statusEl.textContent = `${runways.length} runway${runways.length !== 1 ? 's' : ''} found.`;
    });
}

function clearSpawnSelection() {
    _spawnSelected = null;
    if (_spawnClickMarker) {
        SpawnMap.instance().removeLayer(_spawnClickMarker);
        _spawnClickMarker = null;
    }
    document.getElementById('spawn-selected-info').style.display = 'none';
    document.getElementById('spawn-hint-panel').style.display    = 'block';
    const rwySection = document.getElementById('spawn-runway-section');
    if (rwySection) rwySection.style.display = 'none';
    clearDestSelection();
}

// ── Destination (landing site) search — lets the player pick a second
// airport, alongside the takeoff one, to fly TO. Feeds setGPSDestinationFromLanding()
// in confirmSpawnLocation() so the GPS shows a real great-circle route to it. ──
let _spawnLandingSelected = null;
let _destSearchTimer = null;

function destSearchDebounced() {
    clearTimeout(_destSearchTimer);
    _destSearchTimer = setTimeout(destSearchCommit, 280);
}

function destSearchCommit() {
    const q   = document.getElementById('spawn-dest-search-input').value.trim();
    const box = document.getElementById('spawn-dest-search-results');
    if (!q) { box.style.display = 'none'; return; }

    AirportDB.load(() => {
        const results = AirportDB.search(q, 8);
        if (!results.length) {
            box.innerHTML = '<div class="spawn-search-result"><span class="spawn-result-name" style="color:#64748b;">No airports found</span></div>';
            box.style.display = 'block';
            return;
        }
        box.innerHTML = results.map((ap, i) =>
            `<div class="spawn-search-result" onclick="selectDestAirport(${i})">
                <span class="spawn-result-name">${_escHTML(ap.name)}</span>
                <span class="spawn-result-codes">${_escHTML(ap.icao || ap.iata || '')}</span>
             </div>`
        ).join('');
        box.style.display = 'block';
        _destSearchResults = results;
    });
}
let _destSearchResults = [];

function selectDestAirport(i) {
    const ap = _destSearchResults[i];
    if (!ap) return;
    _spawnLandingSelected = ap;
    document.getElementById('spawn-dest-search-results').style.display = 'none';
    document.getElementById('spawn-dest-search-input').value = '';
    const info = document.getElementById('spawn-dest-selected');
    info.textContent = `🎯 Destination: ${ap.name} (${ap.icao || ap.iata || '—'})`;
    info.style.display = 'block';
    document.getElementById('spawn-dest-clear-btn').style.display = 'block';
    _updateSpawnPreviewRoute();
}

function clearDestSelection() {
    _spawnLandingSelected = null;
    _destSearchResults = [];
    const input = document.getElementById('spawn-dest-search-input');
    const box   = document.getElementById('spawn-dest-search-results');
    const info  = document.getElementById('spawn-dest-selected');
    const clearBtn = document.getElementById('spawn-dest-clear-btn');
    if (input) input.value = '';
    if (box) box.style.display = 'none';
    if (info) info.style.display = 'none';
    if (clearBtn) clearBtn.style.display = 'none';
    _updateSpawnPreviewRoute();
}

// ── Search ────────────────────────────────────────────────────────────────────

function spawnSearchDebounced() {
    clearTimeout(_spawnSearchTimer);
    _spawnSearchTimer = setTimeout(spawnSearchCommit, 280);
}

function spawnSearchCommit() {
    const q   = document.getElementById('spawn-search-input').value.trim();
    const box = document.getElementById('spawn-search-results');

    if (!q) { box.style.display = 'none'; return; }

    // Load airport DB on first search
    AirportDB.load(() => {
        const results = AirportDB.search(q, 8);
        if (!results.length) {
            box.innerHTML = '<div class="spawn-search-result"><span class="spawn-result-name" style="color:#64748b;">No airports found</span></div>';
            box.style.display = 'block';
            return;
        }

        const typeLabels = {
            large_airport:  'Large Airport',
            medium_airport: 'Medium Airport',
            small_airport:  'Small Airport',
            heliport:       'Heliport',
            seaplane_base:  'Seaplane Base',
            military:       'Military'
        };

        box.innerHTML = results.map((ap, i) => {
            const codes = [ap.icao, ap.iata].filter(c => c && c !== '—').join(' · ');
            return `<div class="spawn-search-result" data-idx="${i}">
                <div class="spawn-result-name">${_escHTML(ap.name)}</div>
                <div class="spawn-result-codes">${_escHTML(codes)}</div>
                <div class="spawn-result-type">${typeLabels[ap.type] || ap.type}</div>
            </div>`;
        }).join('');

        box.querySelectorAll('.spawn-search-result').forEach((el, i) => {
            el.addEventListener('click', () => {
                _onAirportMarkerClick(results[i]);
                document.getElementById('spawn-search-input').value = results[i].name;
                box.style.display = 'none';
            });
        });

        box.style.display = 'block';
    });
}

// Hide search results when clicking outside
document.addEventListener('click', function (e) {
    const box = document.getElementById('spawn-search-results');
    if (box && !box.contains(e.target) && e.target.id !== 'spawn-search-input') {
        box.style.display = 'none';
    }
    const destBox = document.getElementById('spawn-dest-search-results');
    if (destBox && !destBox.contains(e.target) && e.target.id !== 'spawn-dest-search-input') {
        destBox.style.display = 'none';
    }
});

function _escHTML(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── confirmSpawnLocation ──────────────────────────────────────────────────────
// The only entry point that actually starts the game. Teleports the vehicle
// to the selected location and initialises all subsystems for the first time.
async function confirmSpawnLocation() {
    if (!_spawnSelected) return;
    _spawnGen++; // invalidate any elevation sample still in flight from a previous spawn
    const gen = _spawnGen;

    // Show the loading overlay FIRST, before touching any placement logic —
    // nothing (menu, camera, aircraft) should be visible/interactive again
    // until spawn is fully ready. See the end of this function for the
    // matching minimum-5-second hold + hide.
    const loadStart = performance.now();
    const loadScreen = document.getElementById('ground-loading-screen');
    const loadSub     = document.getElementById('ground-loading-sub');
    const selectorEl  = document.getElementById('spawn-selector-screen');
    if (loadScreen) loadScreen.style.display = 'flex';
    if (selectorEl) selectorEl.style.display = 'none';
    const setLoadingText = (t) => { if (loadSub) loadSub.textContent = t; };

    const ap   = _spawnSelected;
    let lat    = ap.lat;
    let lng    = ap.lng;
    let elev   = ap.elev; // feet (may be null) — starting/fallback value, corrected below
    let spawnHeading = 0;

    // ── Runway / operation resolution ─────────────────────────────────────
    // When the plane is selected and a runway was chosen, read the operation
    // mode (takeoff / landing) and position accordingly.
    const rwySelEl = document.getElementById('spawn-runway-select');
    const opTakeoff = document.querySelector('input[name="spawn-operation"][value="takeoff"]');
    const isTakeoff = !opTakeoff || opTakeoff.checked; // default takeoff if no UI
    const rwyVal   = rwySelEl && rwySelEl.value ? rwySelEl.value : '';

    // Reset the "real runway for night lighting" reference for this spawn —
    // re-populated below if we can resolve one (chosen runway, or a fallback
    // lookup by ICAO), left null otherwise so no fake lights get drawn.
    _activeRunway = null;

    // Reset the flat 5 km ground-collision disc for this spawn — re-anchored
    // below to the airport's own centre/elevation when one is known, left
    // null otherwise (free map click) so ground collision is simply off.
    const dbCentreElevM = ap.elev != null ? ap.elev * 0.3048 : 0;
    _activeAirportCenter = (ap.icao && ap.icao !== '—') ? { lat: ap.lat, lng: ap.lng, elevM: dbCentreElevM } : null;

    if (isPlaneType(state.vehicle) && rwyVal) {
        try {
            const { end, rwy } = JSON.parse(rwyVal);
            const useLE = (end === 'le');

            // Keep the exact runway record (real OurAirports coordinates)
            // for night-mode lighting — independent of takeoff/landing math.
            _activeRunway = Object.assign({}, rwy, { icao: ap.icao });

            if (isTakeoff) {
                // ── TAKEOFF — position at threshold, pointing down the runway ──
                lat  = useLE ? rwy.leLat : rwy.heLat;
                lng  = useLE ? rwy.leLng : rwy.heLng;
                elev = useLE ? rwy.leElev : rwy.heElev;
                spawnHeading = useLE ? rwy.leHdg : rwy.heHdg;
                console.log(`[Spawn] Takeoff from RWY ${useLE ? rwy.leIdent : rwy.heIdent}, hdg ${Math.round(spawnHeading)}°`);
            } else {
                // ── LANDING — position ~8 nm out on final approach ────────────
                // Heading to land on this runway = opposite of the selected end's
                // heading (approach FROM outside), aircraft points toward threshold.
                const landHdg = useLE ? rwy.leHdg : rwy.heHdg; // heading DOWN the runway
                const approachHdg = (landHdg + 180) % 360;      // we arrive from this direction
                // Start 8 nm (≈14.8 km) out from the threshold at 2500 ft AGL
                const NM_TO_DEG = 1 / 60.0;
                const NM_OUT    = 8;
                const hdgRad    = approachHdg * (Math.PI / 180);
                const threshLat = useLE ? rwy.leLat : rwy.heLat;
                const threshLng = useLE ? rwy.leLng : rwy.heLng;
                lat  = threshLat + Math.cos(hdgRad) * NM_OUT * NM_TO_DEG;
                lng  = threshLng + Math.sin(hdgRad) * NM_OUT * NM_TO_DEG / Math.cos(threshLat * Math.PI / 180);
                elev = useLE ? rwy.leElev : rwy.heElev;
                spawnHeading = landHdg; // nose points toward runway threshold
                console.log(`[Spawn] Landing approach RWY ${useLE ? rwy.leIdent : rwy.heIdent}, hdg ${Math.round(landHdg)}°, 8 nm final`);
            }
        } catch (e) {
            console.warn('[Spawn] Could not parse runway selection:', e);
        }
    } else if (ap.icao && ap.icao !== '—' && RunwayDB.isLoaded()) {
        // No specific runway was chosen (e.g. spawned at the airport centre,
        // or driving a car/bus at an airport) — fall back to the airport's
        // longest known runway so night-mode lighting still has something
        // real to draw instead of guessing from the player's position.
        const runways = RunwayDB.getRunways(ap.icao);
        if (runways.length) {
            const longest = runways.slice().sort((a, b) => b.lengthFt - a.lengthFt)[0];
            _activeRunway = Object.assign({}, longest, { icao: ap.icao });
        }
    }

    // ── Wait for the REAL terrain provider (not the flat Ellipsoid
    // placeholder) before sampling anything ────────────────────────────────
    // tryEnableWorldTerrain() swaps cesiumViewer.terrainProvider from the
    // flat placeholder to real WorldTerrain asynchronously at page load,
    // completely independent of the spawn flow. Spawning before that swap
    // finishes was the actual cause of ending up "inside the sphere" —
    // every height sample and the camera placement below would happen
    // against flat ground at ~0m, and then real (often much higher)
    // terrain would phase in underneath a moment later, leaving the
    // camera buried inside it. Capped at 6s so a missing/invalid Ion
    // token can't hang the spawn screen forever — falls through to
    // whatever terrain is currently active (flat, worst case) if hit.
    if (_worldTerrainReadyPromise && settings.mapStyle === 'cesium') {
        setLoadingText('Loading real terrain…');
        await Promise.race([_worldTerrainReadyPromise, new Promise(r => setTimeout(r, 6000))]);
        if (gen !== _spawnGen) return; // player cancelled/respawned elsewhere while we were waiting
    }

    // ── 0. Approximate elevation from OurAirports data FIRST — instantly,
    // synchronously, no waiting on tiles/terrain at all ─────────────────────
    // This is the actual database figure for this exact spawn point (runway
    // threshold elevation, or the airport's field elevation), already
    // resolved above along with lat/lng. Everything below — state, the
    // ground-collision disc, the camera — gets placed with this number
    // immediately, so spawn is never gated on how fast tiles happen to
    // stream in. It's an approximation (OurAirports data can be a few
    // metres off, or stale), but it's *instantly available* and anchored to
    // the correct spot, which is what actually matters for not feeling
    // broken. The precise real-terrain sample still happens — see step 4b
    // — just afterward, in the background, silently nudging things onto the
    // exact real height once it resolves instead of blocking on it first.
    const approxElevM = elev != null ? elev * 0.3048 : 0;

    // ── Anchor the ground-reference disc to the ACTUAL spawn point ─────────
    // Anchored to lat/lng (the resolved spawn point itself: runway
    // threshold, 8 nm final-approach point, or airport centre) rather than
    // ap.lat/ap.lng (the airport's database reference point), which can
    // easily sit more than the disc's 5 km radius away from where the
    // aircraft actually spawns — an 8 nm final approach is ALWAYS ~14.8 km
    // out, so an airport-centre anchor meant updateCesiumCamera's
    // every-frame distance gate excluded the vehicle from its own ground
    // reference right out of spawn, snapping it to sea level the instant
    // the game loop started.
    _activeAirportCenter = (ap.icao && ap.icao !== '—') ? { lat, lng, elevM: approxElevM } : null;

    // ── 1. Apply selected spawn position to game state ─────────────────────
    state.lat     = lat;
    state.lng     = lng;
    state.heading = spawnHeading;
    state.speed   = 0;
    resetCameraSmoothing(); // fresh spawn location — don't lag height/position in from wherever the camera was previously

    // For plane: apply elevation + operation-specific state
    if (isPlaneType(state.vehicle)) {
        if (rwyVal && !isTakeoff) {
            // Landing: start at 2500 ft AGL on final approach, at approach speed
            // (each aircraft gets its own realistic approach speed: the A320
            // flies a ~150 kt final approach.
            // flies a ~70 kt final).
            const approachKt = 150;
            flight.groundRef = approxElevM;
            flight.alt       = 2500; // ft AGL
            flight.speed     = approachKt;
            flight.throttle  = 50;
            flight.pitch     = -3 * Math.PI / 180;   // slight nose-down for descent (flight.pitch se guarda en radianes)
            flight.roll      = 0;
            state.speed      = approachKt * 1.852; // sync state.speed (km/h) for display
        } else if (elev != null) {
            // Takeoff or airport centre: on the runway
            flight.groundRef = approxElevM;
            flight.alt       = 5;    // 5 ft AGL — sitting on runway
            flight.speed     = 0;
            flight.throttle  = 0;
            flight.pitch     = 0;
            flight.roll      = 0;
        }
        ensureFlightSim(true); // reseed the 6-DOF sim at the new spawn position/attitude
    }

    // ── 2. Sync Leaflet main map to spawn location ─────────────────────────
    if (map) {
        map.setView([lat, lng], settings.mapZoom, { animate: false });
        baseLat = lat;
        baseLng = lng;
    }

    // ── 3. Point the Cesium camera at the (approximate-for-now) spawn
    // location/altitude ─────────────────────────────────────────────────────
    if (cesiumViewer) {
        try {
            let camAlt, camPitch;
            if (isPlaneType(state.vehicle) && rwyVal && !isTakeoff) {
                camAlt   = approxElevM + 2500 * 0.3048;
                camPitch = -5;
            } else {
                camAlt   = Math.max(approxElevM + 50, 200);
                camPitch = -5;
            }
            const pos = Cesium.Cartesian3.fromDegrees(lng, lat, camAlt + 10);
            cesiumViewer.camera.setView({
                destination: pos,
                orientation: {
                    heading: Cesium.Math.toRadians(state.heading),
                    pitch:   Cesium.Math.toRadians(camPitch),
                    roll:    0
                }
            });
        } catch (e) {
            console.warn('[Spawn] Cesium camera placement failed:', e);
        }
    }

    // ── 4. Wait (briefly) for the visible terrain/tiles under the camera to
    // load — just enough that the reveal doesn't show empty/placeholder
    // ground. This is now purely visual polish, NOT a precision-elevation
    // gate (that's why it's capped much shorter than before): correctness
    // no longer depends on how long this takes, since state/disc/camera
    // are already placed at a real, database-sourced height above.
    setLoadingText('Loading terrain tiles…');
    if (cesiumViewer) {
        const tileWaitStart = performance.now();
        while (performance.now() - tileWaitStart < 3000) {
            const globeDone   = !cesiumViewer.scene.globe || cesiumViewer.scene.globe.tilesLoaded;
            const tilesetDone = typeof photorealTileset === 'undefined' || !photorealTileset || photorealTileset.tilesLoaded;
            if (globeDone && tilesetDone) break;
            await new Promise(r => setTimeout(r, 150));
        }
        if (gen !== _spawnGen) return; // player cancelled/respawned elsewhere while we were waiting
    }

    // ── 4b. Kick off the PRECISE real-terrain sample in the background —
    // deliberately NOT awaited here ──────────────────────────────────────────
    // The game reveals with the DB approximation from step 0. Whenever this
    // resolves (usually well under a second; occasionally a couple more on
    // a cold tile cache), it silently corrects _activeAirportCenter.elevM
    // and flight.groundRef if the real value differs meaningfully.
    // updateCesiumCamera reads both of those fresh every single frame (see
    // its groundHeight/anchorHeight computation), so the plane and camera
    // just quietly settle onto the precise height on their own the moment
    // this resolves — no manual re-placement needed, and nothing here can
    // block or delay the reveal.
    (async (thisGen, spawnLat, spawnLng, wasPlane) => {
        try {
            const preciseElevM = await Promise.race([
                _sampleRealGroundElevation(spawnLat, spawnLng),
                new Promise(resolve => setTimeout(() => resolve(null), 8000))
            ]);
            if (thisGen !== _spawnGen) return; // player respawned elsewhere — discard
            if (preciseElevM == null || !_activeAirportCenter) return;

            const correctionM = preciseElevM - _activeAirportCenter.elevM;
            if (Math.abs(correctionM) < 0.5) return; // DB estimate was already close enough

            console.log(`[Spawn] Precise elevation correction: ${correctionM.toFixed(1)} m`);
            _activeAirportCenter.elevM = preciseElevM;
            if (wasPlane) flight.groundRef = preciseElevM;
        } catch (e) {
            console.warn('[Spawn] Background precise elevation sample failed:', e);
        }
    })(gen, lat, lng, isPlaneType(state.vehicle));
    // ── 5. Enforce a minimum 5-second loading screen ────────────────────────
    // Elevation sampling + tile loading above are often fast (cached
    // airport, nearby tiles already resident) — but revealing the moment
    // they finish would make the loading screen flash inconsistently
    // (sometimes instant, sometimes several seconds). Holding a fixed
    // floor makes it predictable regardless of how fast the actual work
    // was, and gives slow loads a bit more headroom to finish quietly
    // behind the screen instead of popping in mid-reveal.
    setLoadingText('Almost ready…');
    const elapsed = performance.now() - loadStart;
    const MIN_LOADING_MS = 5000;
    if (elapsed < MIN_LOADING_MS) {
        await new Promise(r => setTimeout(r, MIN_LOADING_MS - elapsed));
        if (gen !== _spawnGen) return; // player cancelled/respawned elsewhere while we were waiting
    }

    // ── 6. Reveal: hide the loading overlay and the (already-hidden) spawn
    // selector together, then start the game ───────────────────────────────
    if (loadScreen) loadScreen.style.display = 'none';
    if (selectorEl) selectorEl.style.display = 'none';

    gameStarted = true;
    console.log(`[Spawn] Game started at ${lat.toFixed(5)}, ${lng.toFixed(5)}`);
    if (isNightMode) setTimeout(_spawnNightLights, 600);

    // ── 7. If a landing site was chosen alongside the takeoff site, set it
    // as the GPS destination. Remember the departure ICAO and heading too,
    // so the procedural route generator can build a smooth, rounded-turn
    // course that leaves this spawn point on its actual departure heading.
    state.originIcao = (ap.icao && ap.icao !== '—') ? ap.icao : null;
    state.originHdg = spawnHeading;
    if (isPlaneType(state.vehicle) && _spawnLandingSelected) {
        setGPSDestinationFromLanding(_spawnLandingSelected);
    }
}

// ── Re-render markers on zoom change (density culling) ────────────────────────
// Attached after SpawnMap is initialised (lazy, first time selector opens)
(function _attachZoomListener() {
    // We patch openSpawnSelector to attach the listener after map init
    const _orig = openSpawnSelector;
    // Already defined above; wrap it to attach a one-time zoom listener
    window._spawnZoomListenerAttached = false;
    const _origOpen = window.openSpawnSelector; // reference captured above
    window.openSpawnSelector = function () {
        _origOpen();
        if (!window._spawnZoomListenerAttached) {
            setTimeout(() => {
                const m = SpawnMap.instance();
                if (m) {
                    m.on('zoomend', () => {
                        if (SpawnMarkers.isVisible()) SpawnMarkers.refresh();
                    });
                    window._spawnZoomListenerAttached = true;
                }
            }, 350); // wait for map init
        }
    };
})();

// =========================================================================
// =========================================================================
// A320 AURAL CALLOUT / GPWS SYSTEM
// Real .mp3 files served from airplane_audios/, mapped onto realistic
// in-flight triggers. Only active for the A320 (state.vehicle === 'plane'),
// driven every frame from updateFlight() via updateA320Audio(dt).
//
// KEY RULE: the radio-altimeter numbers (2500…5) are LANDING-ONLY. They are
// gated behind onApproach (airborne + gear down + actually descending +
// below 2500 ft AGL), so they can never fire during a takeoff climb — a
// takeoff only ever plays "v1", nothing else numeric.
// =========================================================================
const A320_AUDIO_PATH = 'airplane_audios/';
const A320_SOUNDS = {
    2500: '2500.mp3', 1000: '1000.mp3', 500: '500.mp3', 400: '400.mp3',
    300: '300.mp3', 200: '200.mp3', 100: '100.mp3', 50: '50.mp3',
    40: '40.mp3', 30: '30.mp3', 20: '20.mp3', 10: '10.mp3', 5: '5.mp3',
    hundredAbove: '100-above.mp3', minimum: 'minimum.mp3', retard: 'retard.mp3',
    sinkrate: 'sinkrate.mp3', dontSink: 'don-t-sink.mp3', stall: 'airbus-stall.mp3',
    terrainPullup: 'terrain-ahead-pull-up.mp3', tooLowTerrain: 'too-low-terrain.mp3',
    pullup: 'pullup.mp3', v1: 'v1.mp3'
};

const a320Audio = {
    // Non-warning callouts (altitude gates, V1, retard) are QUEUED — each
    // one always plays start-to-finish, in the order it was triggered,
    // never skipped and never cut off, even if several fire in the same
    // frame (e.g. a fast descent crossing 50/40/30/20/10 almost at once).
    normalQueue: [],
    normalPlaying: false,
    // Warnings (GPWS/stall/etc.) get their own fresh Audio() instance every
    // time and are never blocked by, and never cancel, anything else — they
    // freely overlap the normal queue AND each other, matching how a real
    // EGPWS lets an urgent warning talk over a routine callout instead of
    // fighting it for a single channel.
    warnPool: [],
    playedAlts: new Set(),   // altitude gates already called out on this approach
    v1Played: false,
    prevAgl: null,
    minimumsFt: 200,         // simple fixed CAT-I-style decision height
    maxAglSinceGround: 0,
    pullupIntroduced: false,
    lastRetard: -99, lastSink: -99, lastDontSink: -99, lastTooLow: -99,
    lastPullup: -99, lastStall: -99,
    clock: 0
};

/**
 * playA320 — plays a callout/warning file WITHOUT ever interrupting,
 * cancelling, or cutting off anything already sounding.
 *   - warn=true  (GPWS/stall/etc.): fire-and-forget on a brand new Audio()
 *     instance, tracked in warnPool purely so it can be cleaned up when
 *     done. Freely overlaps everything else.
 *   - warn=false (altitude callouts, V1, retard-as-non-warning callers):
 *     pushed onto normalQueue and drained one at a time by
 *     processA320NormalQueue(), so a burst of calls in a single frame (or
 *     across frames while a prior one is still playing) is guaranteed to
 *     be heard in full, in order, rather than the old behaviour of
 *     silently dropping any callout that arrived while the shared channel
 *     was busy.
 */
function playA320(key, warn) {
    const file = A320_SOUNDS[key];
    if (!file) return;
    if (warn) {
        const audio = new Audio(A320_AUDIO_PATH + file);
        audio.volume = 1.0;
        a320Audio.warnPool.push(audio);
        const cleanup = () => {
            const i = a320Audio.warnPool.indexOf(audio);
            if (i !== -1) a320Audio.warnPool.splice(i, 1);
        };
        audio.addEventListener('ended', cleanup);
        audio.addEventListener('error', cleanup);
        audio.play().catch(cleanup);
    } else {
        a320Audio.normalQueue.push(file);
        processA320NormalQueue();
    }
}

/**
 * processA320NormalQueue — drains a320Audio.normalQueue one file at a
 * time. Only ever one "normal" callout audibly playing at once (so e.g.
 * "50" and "40" aren't garbled on top of each other), but nothing is ever
 * skipped: each queued file waits its turn and gets to finish, so a rapid
 * "50 -> 40 -> 30 -> 20 -> 10 -> 5" descent is heard in full, in order.
 */
function processA320NormalQueue() {
    if (a320Audio.normalPlaying) return;
    const file = a320Audio.normalQueue.shift();
    if (!file) return;
    a320Audio.normalPlaying = true;
    const audio = new Audio(A320_AUDIO_PATH + file);
    audio.volume = 0.9;
    const advance = () => {
        a320Audio.normalPlaying = false;
        processA320NormalQueue();
    };
    audio.addEventListener('ended', advance);
    audio.addEventListener('error', advance); // a missing/broken file can't jam the queue
    audio.play().catch(advance);
}

function resetA320Approach() {
    a320Audio.playedAlts.clear();
    a320Audio.pullupIntroduced = false;
}

function updateA320Audio(dt) {
    // A320 only ('plane') — per request.
    if (state.vehicle !== 'plane') return;

    a320Audio.clock += dt;
    const t = a320Audio.clock;

    const agl    = flight.alt || 0;
    const vs     = flight.verticalSpeed || 0;
    const spdKt  = Math.abs(state.speed || 0) / 1.852;
    // NOTE: this must stay low (not 25 ft) — the 20/10/5 ft radio-altimeter
    // callouts and the RETARD reminder happen below 25 ft during flare, and
    // a 25 ft "on ground" gate was silencing them before they could ever fire.
    const onGround = agl <= 2;

    if (a320Audio.prevAgl === null) a320Audio.prevAgl = agl;
    const prevAgl = a320Audio.prevAgl;

    if (onGround) {
        a320Audio.maxAglSinceGround = agl;
        if (spdKt < 30) a320Audio.v1Played = false; // ready for next takeoff once stopped/slow
        resetA320Approach();                        // fully on the ground -> approach is over
    } else {
        a320Audio.maxAglSinceGround = Math.max(a320Audio.maxAglSinceGround, agl);
        if (agl > 2600) resetA320Approach();         // climbed clear (go-around) -> re-arm callouts
    }

    // ── TAKEOFF: V1 — only during the takeoff roll, never airborne. ────────
    const V1_KT = 128;
    if (onGround && flight.throttle > 60 && spdKt >= V1_KT && !a320Audio.v1Played) {
        a320Audio.v1Played = true;
        playA320('v1', false);
    }

    // ── GPWS WARNINGS (highest priority) ────────────────────────────────────
    let warned = false;

    // Stall warning — simplified speed-based approximation.
    if (!onGround) {
        const stallKt = flight.flapsDown ? 95 : 128;
        if (spdKt < stallKt) {
            if (t - a320Audio.lastStall > 1.1) { a320Audio.lastStall = t; playA320('stall', true); }
            warned = true;
        }
    }

    // Mode 1 — excessive sink rate close to terrain. Escalates to
    // TERRAIN...PULL UP / PULL UP if it gets severe and low enough.
    if (!warned && !onGround && agl < 2500 && vs < -1800) {
        if (vs < -3200 && agl < 1000) {
            if (t - a320Audio.lastPullup > 0.9) {
                a320Audio.lastPullup = t;
                playA320(a320Audio.pullupIntroduced ? 'pullup' : 'terrainPullup', true);
                a320Audio.pullupIntroduced = true;
            }
        } else {
            if (t - a320Audio.lastSink > 1.4) { a320Audio.lastSink = t; playA320('sinkrate', true); }
        }
        warned = true;
    } else if (a320Audio.pullupIntroduced && (onGround || vs >= -1000)) {
        a320Audio.pullupIntroduced = false; // condition cleared — re-intro next time it happens
    }

    // Mode 3 — altitude loss shortly after takeoff / during a go-around
    // (gear up, losing height after having climbed).
    if (!warned && !onGround && !flight.gearDown && agl < 1500 &&
        (a320Audio.maxAglSinceGround - agl) > 40 && vs < -300) {
        if (t - a320Audio.lastDontSink > 2.2) { a320Audio.lastDontSink = t; playA320('dontSink', true); }
        warned = true;
    }

    // Mode 4 — descending close to the ground, gear up (not configured to land).
    if (!warned && !onGround && !flight.gearDown && agl < 500 && vs < -150) {
        if (t - a320Audio.lastTooLow > 2.2) { a320Audio.lastTooLow = t; playA320('tooLowTerrain', true); }
        warned = true;
    }

    // ── LANDING RADIO-ALTIMETER CALLOUTS (landing only, never on takeoff) ──
    // Requires: airborne, gear DOWN, actually descending, below 2500 ft AGL.
    // A takeoff climb is gear-up-shortly-after-liftoff and climbing (vs>0),
    // so it can never satisfy this gate.
    const onApproach = !onGround && flight.gearDown && vs < -20 && agl <= 2510;
    if (onApproach) {
        const gates = [2500, 1000, 500, 400, 300, 200, 100, 50, 40, 30, 20, 10, 5];
        for (const g of gates) {
            if (prevAgl > g && agl <= g && !a320Audio.playedAlts.has(g)) {
                a320Audio.playedAlts.add(g);
                if (g === 300 && a320Audio.minimumsFt === 200) playA320('hundredAbove', false);
                else if (g === 200 && a320Audio.minimumsFt === 200) playA320('minimum', false);
                else playA320(g, false);
            }
        }
    }

    // ── RETARD — flare reminder to close the thrust levers ─────────────────
    if (!onGround && agl <= 20 && agl > 0 && vs < -20 && flight.throttle > 8) {
        if (t - a320Audio.lastRetard > 1.3) { a320Audio.lastRetard = t; playA320('retard', true); }
    }

    a320Audio.prevAgl = agl;
}

// REALISTIC THROTTLE QUADRANT — drag-to-move lever with a smooth IDLE->CL
// run and clicky gated detents at CL / FLX-MCT / TOGA, sitting on top of
// the original (now hidden) #flight-throttle-slider. That hidden input
// stays the single source of truth: it's what every other piece of code
// (vehicle reset, gamepad axis, autopilot speed hold, HUD readout) reads
// and writes, so this widget only needs to keep it in sync both ways.
// =========================================================================
(function () {
    const quadrant  = document.getElementById('throttle-quadrant');
    const trackEl   = document.getElementById('throttle-track');
    const handleEl  = document.getElementById('throttle-handle');
    const hiddenSlider = document.getElementById('flight-throttle-slider');
    if (!quadrant || !trackEl || !handleEl || !hiddenSlider) return;

    // Detent values (0-100 = flight.throttle) measured directly off the
    // throttlebase.png photo: IDLE sits ~59% down from the top of the image,
    // TOGA ~3% down, CL's tick ~47%, FLX/MCT's tick ~27%. Converting those
    // photo positions to 0-100 throttle values gives the numbers below.
    const DETENTS = { cl: 21, flx: 57, toga: 100 };
    const SNAP_ZONE = 3.5;      // magnetic pull-in range around a detent, in %
    const CLICK_ZONE = DETENTS.cl; // below this it's the smooth idle->CL run

    // The lever travels almost the full height of the photo, with a small
    // frame/margin at each end. Value 0 (IDLE) now sits flush near the
    // BOTTOM of the track (2%) instead of partway up, and 100 (TOGA) sits
    // near the top (97%) — matching where the real lever physically rests
    // at minimum thrust instead of floating above empty track space.
    const BOTTOM_AT_IDLE = 2;
    const BOTTOM_PER_VALUE = 0.95;

    let dragging = false;
    let lastValue = parseFloat(hiddenSlider.value) || 0;

    function valueToBottomPct(v) {
        return BOTTOM_AT_IDLE + v * BOTTOM_PER_VALUE;
    }
    function bottomPctToValue(pct) {
        return (pct - BOTTOM_AT_IDLE) / BOTTOM_PER_VALUE;
    }

    function setHandlePosition(v) {
        handleEl.style.bottom = valueToBottomPct(v) + '%';
    }
    setHandlePosition(lastValue);

    function flashNotch(threshold) {
        let id = null;
        if (threshold === DETENTS.cl) id = 'tq-notch-cl';
        else if (threshold === DETENTS.flx) id = 'tq-notch-flx';
        else if (threshold === DETENTS.toga) id = 'tq-notch-toga';
        const el = id && document.getElementById(id);
        if (!el) return;
        el.classList.add('tq-flash');
        setTimeout(() => el.classList.remove('tq-flash'), 180);
    }

    function fireClick(threshold) {
        if (navigator.vibrate) navigator.vibrate(12);
        flashNotch(threshold);
    }

    function checkClicks(prevV, currV) {
        [DETENTS.cl, DETENTS.flx, DETENTS.toga].forEach(t => {
            if ((prevV < t && currV >= t) || (prevV > t && currV <= t)) fireClick(t);
        });
    }

    // Below CL: pure smooth continuous travel, no snapping, no clicks.
    // At/above CL: lever rides a gated slot that magnetically settles onto
    // CL / FLX-MCT / TOGA, same as the real quadrant's detent notches.
    function applyDetents(raw) {
        if (raw < CLICK_ZONE) return raw;
        let nearest = null, nearestDist = Infinity;
        [DETENTS.cl, DETENTS.flx, DETENTS.toga].forEach(t => {
            const d = Math.abs(raw - t);
            if (d < nearestDist) { nearestDist = d; nearest = t; }
        });
        return nearestDist < SNAP_ZONE ? nearest : raw;
    }

    function valueFromClientY(clientY) {
        const rect = trackEl.getBoundingClientRect();
        const rel = (rect.bottom - clientY) / rect.height * 100; // % from bottom of track
        return Math.max(0, Math.min(100, bottomPctToValue(rel)));
    }

    function commitValue(v) {
        checkClicks(lastValue, v);
        lastValue = v;
        setHandlePosition(v);
        if (parseFloat(hiddenSlider.value) !== v) {
            hiddenSlider.value = v;
            hiddenSlider.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }

    function updateFromPointer(e) {
        const raw = valueFromClientY(e.clientY);
        commitValue(applyDetents(raw));
    }

    handleEl.addEventListener('pointerdown', e => {
        dragging = true;
        handleEl.classList.add('tq-dragging');
        try { handleEl.setPointerCapture(e.pointerId); } catch (err) {}
        updateFromPointer(e);
        e.preventDefault();
    });
    handleEl.addEventListener('pointermove', e => { if (dragging) updateFromPointer(e); });
    function endDrag() {
        dragging = false;
        handleEl.classList.remove('tq-dragging');
    }
    handleEl.addEventListener('pointerup', endDrag);
    handleEl.addEventListener('pointercancel', endDrag);

    // Keep the handle glued to the hidden slider's value whenever something
    // else moves it (gamepad axis, vehicle-switch reset, autopilot, etc.).
    function syncLoop() {
        if (!dragging) {
            const v = parseFloat(hiddenSlider.value) || 0;
            if (Math.abs(v - lastValue) > 0.01) {
                lastValue = v;
                setHandlePosition(v);
            }
        }
        requestAnimationFrame(syncLoop);
    }
    requestAnimationFrame(syncLoop);
})();
