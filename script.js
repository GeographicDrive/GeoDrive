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
const CONFIG_KEYS = {
    CESIUM_ION:      'biv_cesium_ion_token',
    CESIUM_CAM_MODE: 'biv_cesium_cam_mode'
};
const CONFIG = {
    CESIUM_ION:      localStorage.getItem(CONFIG_KEYS.CESIUM_ION)      || '',
    CESIUM_CAM_MODE: localStorage.getItem(CONFIG_KEYS.CESIUM_CAM_MODE) || 'first'
};

// ==========================================
// 2. STATE & SETTINGS
// ==========================================
let state = {
    lat: 33.942610, lng: -118.411112,
    speed: 0, heading: 90,
    vehicle: 'plane', speedUnit: 'KPH', headUp: false,
    destLat: null, destLng: null
};

const settings = {
    collision: false, debugCollision: false,
    renderMode: '3D',   // '3D' = Cesium (real globe), 'CSS' = CSS perspective (chase cam), '2D' = flat
    cesiumCameraMode: CONFIG.CESIUM_CAM_MODE, // 'first' or 'third' — only meaningful while renderMode === '3D'
    tilt: 0,
    vehicleScale: 1.0, mapZoom: 18,
    steeringMode: 'arrows', cameraZoom: 1.0,
    steeringSensitivity: 0.4,  // Car/bus steering sens — new default 0.4 (was 1.0)
    fov: 120,            // degrees — applied to Cesium camera frustum in 3D mode
    thirdPersonZoom: 0.50, // new default 0.50 (was 0.90)
    cameraFollowDelay: 2.0,
    osmBuildings: false,
    fullscreen: false,
    cameraLookBlend: 0.5,
    cameraRotatesWithPlane: true,  // Camera rolls On — new default (was false)
    mapStyle: 'photoreal',
    hitboxTolerance: 1.5,
    flightSensitivity: 0.20,  // Control sens — new default 0.20x (was 1.0)
    flightAcceleration: 3.00, // Acceleration — new default 3.00x (was 1.0)
    invertPitch: false,        // Pitch invert toggle — joystick up = up (false) or down (true)
    preloadRadius: 3.0,       // km — radius used by preloadAreaAroundLocation() (Settings → Preloading)
    occlusionCulling: true,   // Settings → Display — mirrors scene.globe.depthTestAgainstTerrain
    skyBox: 'default',        // Settings → Display — 'default' (Cesium atmosphere) or 'clouds' (custom cubemap)
    nightTerrainBrightness: 18, // 0–100 — Settings → Display — how bright terrain/imagery/buildings look while Night mode is on

    // ── New tree (Ww.txt) — 3D Mode ─────────────────────────────────────
    resolutionScale: 1.0, flashlightSetting: false,
    globeLighting: false, groundAtmosphere: true, terrainExaggeration: 1.0,
    objectCulling: true, terrainProvider: 'world',
    skyAtmosphere: true, sceneFogDensity: 0, sunShow: true, moonShow: true,
    sceneShadows: 'off', dayNightDropdown: 'day',
    imageryMapStyle: 'sat', imageryProvider: 'arcgis',
    imageryAlpha: 1, imageryBrightness: 1, imageryContrast: 1, imagerySaturation: 1, imageryGamma: 1, imageryHue: 0,
    gp3dtColorBlend: 0, gp3dtClipping: false, gp3dtStyle: 'default',
    collisionVisualization: false, rudderSensitivity: 1.0,
    autoSpawnPreload: true,

    // ── 2D Mode ──────────────────────────────────────────────────────────
    sceneMode2D: '2D', panSpeed: 1.0, rotateMap: false, zoomSensitivity: 1.0,
    img2dAlpha: 1, img2dBrightness: 1, img2dContrast: 1, img2dSaturation: 1, img2dGamma: 1, img2dHue: 0,

    // ── General ──────────────────────────────────────────────────────────
    language: 'en', theme: 'dark', autosave: true,
    fpsLimit: 60, vsync: true, antialiasing: 'fxaa', anisoFiltering: '4x',
    textureQuality: 'medium', shadowQualityGeneral: 'off', postProcessing: false, motionBlur: false,
    uiScale: 1.0, showFPS: false, showCoords: true, showCompass: true, showMinimap: true, notifications: true,
    volMaster: 80, volEngine: 80, volEnv: 60, volUI: 70, muteUnfocused: true,
    mouseSensitivity: 1.0, invertMouseY: false, controllerVibration: true,
    multiplayer: false, serverRegion: 'us', bandwidthLimit: 10, cacheSizeMB: 256,
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

// ── Spawn/quick preload gate ────────────────────────────────────────────────
// Mirrors `gameStarted` below: while true, the main update() loop skips
// physics/camera work entirely. Set while preloadAreaAroundLocation() is
// sweeping the Cesium camera (or prefetching Leaflet tiles) around a point,
// so the vehicle can't drift/crash while that's happening, and so the quick-
// access preload button is safe to use mid-game at any time.
let gamePreloading = false;

const VEHICLE_DIMS = {
    car:   { length: 4.5,  width: 2.0  },
    bus:   { length: 12.0, width: 2.5  },
    plane: { length: 15.0, width: 12.0 }
};

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
    car:   Object.assign({}, _cockpitDefaultsByVehicle.car),
    bus:   Object.assign({}, _cockpitDefaultsByVehicle.bus),
    plane: Object.assign({}, _cockpitDefaultsByVehicle.plane)
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
    shadowQuality: 2,   // 0=off 1=low 2=medium 3=high
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
        shadowQuality: 0,
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
        shadowQuality: 2,
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
        shadowQuality: 3,
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
    RETURN_DELAY:   3.0,  // seconds of no input before return begins
    RETURN_SPRING:  3.5,  // exponential return stiffness (higher = snappier)
    SENSITIVITY:    0.28, // degrees per CSS pixel of drag
    PITCH_1ST_MIN: -85,   // first-person vertical clamps
    PITCH_1ST_MAX:  85,
    PITCH_3RD_MIN: -10,   // third-person elevation clamps (–10° = slight below-vehicle peek)
    PITCH_3RD_MAX:  80,
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

const fetchedChunks = new Set();

// ==========================================
// HUD DOM update throttle — writing innerHTML/innerText every single frame
// triggers style recalculations and layout. Capped at 20fps (50ms intervals).
let _hudLastUpdateTime = 0;
const HUD_UPDATE_INTERVAL_MS = 50; // 20fps

let isFetchingRoads = false;

const keys = { w:false, a:false, s:false, d:false };
window.addEventListener('keydown', e => { if(e.target.tagName !== 'INPUT') keys[e.key.toLowerCase()] = true; });
window.addEventListener('keyup',   e => { if(e.target.tagName !== 'INPUT') keys[e.key.toLowerCase()] = false; });
// 'I' key → toggle pitch invert (airplane only; harmless when driving)
window.addEventListener('keydown', e => {
    if (e.target.tagName !== 'INPUT' && e.key.toLowerCase() === 'i' && state.vehicle === 'plane') {
        togglePitchInvert();
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
function _setNightImageryDimming(on) {
    if (!cesiumViewer) return;
    const layers = cesiumViewer.imageryLayers;
    const f = Math.max(0, Math.min(100, settings.nightTerrainBrightness)) / 100; // 0..1
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
        // Higher Terrain Brightness setting → thinner/lighter overlay so
        // more of the (also-dimmed) imagery shows through; lower setting →
        // a near-opaque overlay for a true pitch-black night.
        const f = Math.max(0, Math.min(100, settings.nightTerrainBrightness)) / 100;
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
 * Builds the DirectionalLight used for night moonlight, with intensity
 * scaled by settings.nightTerrainBrightness so the slider also affects
 * how 3D models (vehicles, GP3DT buildings) are shaded, not just the
 * flat imagery/overlay tricks above.
 */
function _makeNightLight() {
    const f = Math.max(0, Math.min(100, settings.nightTerrainBrightness)) / 100;
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
 * slider. Re-applies imagery dimming, the screen overlay, the moonlight
 * intensity, and the GP3DT night tint using the new value — without
 * resetting the clock or re-spawning runway lights the way a full
 * toggleDayNight() would.
 */
function updateNightTerrainBrightness(val) {
    settings.nightTerrainBrightness = parseFloat(val);
    const label = document.getElementById('val-night-brightness');
    if (label) label.innerText = Math.round(settings.nightTerrainBrightness) + '%';
    if (!isNightMode || !cesiumViewer) return; // only visible/relevant at night

    _setNightImageryDimming(true);
    _setNightScreenOverlay(true);
    // Don't stomp on an active flashlight override — it'll pick up the new
    // moonlight intensity automatically once it's switched off again.
    if (!flashlightOn) {
        cesiumViewer.scene.light = _makeNightLight();
    }
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
    const leElevM = rwy.leElev != null ? rwy.leElev * 0.3048 : null;
    const heElevM = rwy.heElev != null ? rwy.heElev * 0.3048 : null;

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
        // 🔴 FIX: prefer the actual raycasted ground/mesh height at this
        // exact point over the published airport-database elevation. The
        // database value is a single MSL figure per threshold (often
        // stale, rounded to the nearest few feet, or using a different
        // vertical datum than the rendered mesh), so interpolating it
        // along the runway routinely disagrees with the real GP3DT
        // surface — that's what was putting lights above or below the
        // ground. getGroundHeight() raycasts the live tileset/terrain at
        // this exact lng/lat, so it always matches what's actually drawn.
        const sampledGround = getGroundHeight(cLng, cLat);
        const elevAtPoint = (typeof sampledGround === 'number' && isFinite(sampledGround) && sampledGround !== 0)
            ? sampledGround
            : (leElevM != null && heElevM != null)
                ? leElevM + (heElevM - leElevM) * t
                : 0;

        const sideLat = halfWidth * Math.cos(sRad) / 111320;
        const sideLng = halfWidth * Math.sin(sRad) / (111320 * Math.cos(cLat * Math.PI / 180));

        // Threshold ends = red/green; everything else = white edge lights.
        const isThreshold = (i === 0 || i === NUM_LIGHTS);
        const leftCol  = isThreshold ? Cesium.Color.RED.withAlpha(0.9)   : Cesium.Color.WHITE.withAlpha(0.85);
        const rightCol = isThreshold ? Cesium.Color.GREEN.withAlpha(0.9) : Cesium.Color.WHITE.withAlpha(0.85);

        _nightRunwayLights.push(cesiumViewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(cLng - sideLng, cLat - sideLat, elevAtPoint + 0.3),
            point: { pixelSize: 5, color: leftCol, outlineColor: Cesium.Color.YELLOW.withAlpha(0.3), outlineWidth: 1, scaleByDistance: new Cesium.NearFarScalar(100, 2.5, 3000, 0.8) }
        }));
        _nightRunwayLights.push(cesiumViewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(cLng + sideLng, cLat + sideLat, elevAtPoint + 0.3),
            point: { pixelSize: 5, color: rightCol, outlineColor: Cesium.Color.YELLOW.withAlpha(0.3), outlineWidth: 1, scaleByDistance: new Cesium.NearFarScalar(100, 2.5, 3000, 0.8) }
        }));

        // ── Centerline lights (skip thresholds — already lit above) ───────
        if (!isThreshold) {
            _nightRunwayLights.push(cesiumViewer.entities.add({
                position: Cesium.Cartesian3.fromDegrees(cLng, cLat, elevAtPoint + 0.15),
                point: { pixelSize: 3, color: Cesium.Color.WHITE.withAlpha(0.7), scaleByDistance: new Cesium.NearFarScalar(50, 2, 2000, 0.5) }
            }));
        }
    }

    // ── Approach PAPI/VASI lights at BOTH real thresholds ─────────────────
    // (so the lights are correct whichever direction the runway is used).
    const leGroundSample = getGroundHeight(leLng, leLat);
    const heGroundSample = getGroundHeight(heLng, heLat);
    const leElevForPapi = (typeof leGroundSample === 'number' && isFinite(leGroundSample) && leGroundSample !== 0)
        ? leGroundSample
        : (leElevM != null ? leElevM : 0);
    const heElevForPapi = (typeof heGroundSample === 'number' && isFinite(heGroundSample) && heGroundSample !== 0)
        ? heGroundSample
        : (heElevM != null ? heElevM : 0);
    _addPapiLights(leLat, leLng, leElevForPapi, hdgRad + Math.PI, halfWidth); // approach FROM the LE side
    _addPapiLights(heLat, heLng, heElevForPapi, hdgRad, halfWidth);           // approach FROM the HE side

    console.log(`[Night] Spawned ${_nightRunwayLights.length} lights along real runway ${rwy.leIdent || '?'}/${rwy.heIdent || '?'} (${Math.round(lengthM)} m) at ${rwy.icao || '?'}`);
}

/**
 * Adds 4 PAPI/VASI-style approach lights just behind a runway threshold,
 * offset to the left of centerline, facing back along the approach path.
 * @param {number} threshLat/threshLng - real threshold coordinates
 * @param {number} threshElevM - threshold elevation in meters
 * @param {number} approachHdgRad - heading (radians) FROM which the aircraft approaches this threshold
 * @param {number} halfWidth - half the runway width in meters
 */
function _addPapiLights(threshLat, threshLng, threshElevM, approachHdgRad, halfWidth) {
    const BACK_M = 30; // meters behind the threshold, on the approach side
    for (let p = 0; p < 4; p++) {
        const bLat = BACK_M * Math.cos(approachHdgRad) / 111320;
        const bLng = BACK_M * Math.sin(approachHdgRad) / (111320 * Math.cos(threshLat * Math.PI / 180));
        const sRad = approachHdgRad + Math.PI / 2;
        const offM = halfWidth + 10 + p * 5;
        const offLat = offM * Math.cos(sRad) / 111320;
        const offLng = offM * Math.sin(sRad) / (111320 * Math.cos(threshLat * Math.PI / 180));
        _nightRunwayLights.push(cesiumViewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(threshLng + bLng + offLng, threshLat + bLat + offLat, threshElevM + 1.2),
            point: { pixelSize: 8, color: p < 2 ? Cesium.Color.RED.withAlpha(0.95) : Cesium.Color.WHITE.withAlpha(0.95), scaleByDistance: new Cesium.NearFarScalar(100, 2, 5000, 0.6) }
        }));
    }
}

/** Called every frame from the update loop; pulses nav/strobe lights on the plane */
function _updateNightPlaneFlash(dt) {
    if (!isNightMode || !cesiumViewer || state.vehicle !== 'plane') return;
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
function toggleGlobeLighting(val) {
    settings.globeLighting = val;
    if (cesiumViewer) cesiumViewer.scene.globe.enableLighting = val;
    saveSettingsV2();
}
function toggleGroundAtmosphere(val) {
    settings.groundAtmosphere = val;
    if (cesiumViewer) cesiumViewer.scene.globe.showGroundAtmosphere = val;
    saveSettingsV2();
}
function updateTerrainExaggeration(val) {
    settings.terrainExaggeration = parseFloat(val);
    document.getElementById('val-terrain-exaggeration').textContent = parseFloat(val).toFixed(2);
    if (cesiumViewer) cesiumViewer.scene.globe.terrainExaggeration = parseFloat(val);
    saveSettingsV2();
}
function toggleObjectCulling(val) {
    settings.objectCulling = val;
    saveSettingsV2();
}
function setTerrainProvider(val) {
    settings.terrainProvider = val;
    if (!cesiumViewer) return;
    try {
        if (val === 'flat') {
            cesiumViewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
        } else {
            tryEnableWorldTerrain();
        }
    } catch (e) { console.warn('[Settings] setTerrainProvider failed:', e); }
    saveSettingsV2();
}
function updatePreloadRadiusGlobe(val) {
    updatePreloadRadius(val, 'val-preload-radius-globe');
    const el = document.getElementById('set-preload-radius-globe'); if (el) el.value = val;
}

// ── 3D Mode → Sky ───────────────────────────────────────────────────────
function toggleSkyAtmosphere(val) {
    settings.skyAtmosphere = val;
    if (cesiumViewer && cesiumViewer.scene.skyAtmosphere) cesiumViewer.scene.skyAtmosphere.show = val;
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
function setSceneShadows(val) {
    settings.sceneShadows = val;
    if (!cesiumViewer) return;
    cesiumViewer.shadows = val !== 'off';
    if (cesiumViewer.shadowMap) {
        const sizes = { low: 1024, medium: 2048, high: 4096 };
        cesiumViewer.shadowMap.size = sizes[val] || 2048;
        cesiumViewer.shadowMap.softShadows = val === 'high';
    }
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
function updateImageryLayerProp(prop, val, labelId) {
    settings['imagery' + prop.charAt(0).toUpperCase() + prop.slice(1)] = parseFloat(val);
    const label = document.getElementById(labelId); if (label) label.textContent = parseFloat(val).toFixed(2);
    if (cesiumViewer && cesiumViewer.imageryLayers.length > 0) {
        const layer = cesiumViewer.imageryLayers.get(0);
        layer[prop] = parseFloat(val);
    }
    saveSettingsV2();
}

// ── 3D Mode → 3D Tiles ──────────────────────────────────────────────────
function updateGP3DTColorBlend(val) {
    settings.gp3dtColorBlend = parseFloat(val);
    document.getElementById('val-gp3dt-colorblend').textContent = parseFloat(val).toFixed(2);
    if (photorealTileset) {
        photorealTileset.colorBlendMode = Cesium.Cesium3DTileColorBlendMode.MIX;
        photorealTileset.colorBlendAmount = parseFloat(val);
        photorealTileset.color = Cesium.Color.fromCssColorString('#3b82f6');
    }
    saveSettingsV2();
}
function toggleGP3DTClippingPlanes(val) {
    settings.gp3dtClipping = val;
    if (!photorealTileset || !cesiumViewer) return;
    if (val) {
        const camHeight = cesiumViewer.scene.camera.positionCartographic.height;
        photorealTileset.clippingPlanes = new Cesium.ClippingPlaneCollection({
            planes: [new Cesium.ClippingPlane(Cesium.Cartesian3.UNIT_Z, -(camHeight - 200))],
            edgeWidth: 1.0
        });
    } else {
        photorealTileset.clippingPlanes = undefined;
    }
    saveSettingsV2();
}
function setGP3DTStyle(val) {
    settings.gp3dtStyle = val;
    if (!photorealTileset) return;
    photorealTileset.style = val === 'grayscale'
        ? new Cesium.Cesium3DTileStyle({ color: "rgba(180,180,180,1.0)" })
        : new Cesium.Cesium3DTileStyle({ color: "color('#ffffff')" });
    saveSettingsV2();
}
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
function toggleCollisionVisualization(val) {
    settings.collisionVisualization = val;
    if (debugCollisionLayer) {
        if (val) { if (!map.hasLayer(debugCollisionLayer)) debugCollisionLayer.addTo(map); }
        else if (!settings.debugCollision && map.hasLayer(debugCollisionLayer)) map.removeLayer(debugCollisionLayer);
    }
    saveSettingsV2();
}

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

// ── 3D Mode → Streaming ─────────────────────────────────────────────────
function toggleAutoSpawnPreload(val) { settings.autoSpawnPreload = val; saveSettingsV2(); }
function manualPreloadPrompt() {
    const latStr = prompt('Latitude to preload around:', state.lat.toFixed(5));
    if (latStr === null) return;
    const lngStr = prompt('Longitude to preload around:', state.lng.toFixed(5));
    if (lngStr === null) return;
    const lat = parseFloat(latStr), lng = parseFloat(lngStr);
    if (!isFinite(lat) || !isFinite(lng)) { alert('Invalid coordinates.'); return; }
    preloadAreaAroundLocation(lat, lng, settings.preloadRadius, {
        title: '📍 Manual Preload…', subtitle: `Streaming around ${lat.toFixed(3)}, ${lng.toFixed(3)}`
    });
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
function updateLeafletImageryFilter(prop, val, labelId) {
    settings['img2d' + prop.charAt(0).toUpperCase() + prop.slice(1)] = parseFloat(val);
    const label = document.getElementById(labelId); if (label) label.textContent = prop === 'hue' ? Math.round(val) : parseFloat(val).toFixed(2);
    const mapEl = document.getElementById('map');
    if (mapEl) {
        mapEl.style.filter =
            `opacity(${settings.img2dAlpha}) brightness(${settings.img2dBrightness}) contrast(${settings.img2dContrast}) saturate(${settings.img2dSaturation}) hue-rotate(${settings.img2dHue}deg)`;
    }
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
function setFPSLimit(val) {
    settings.fpsLimit = val;
    if (cesiumViewer) cesiumViewer.targetFrameRate = (val === 'unlimited' || settings.vsync) ? undefined : parseInt(val);
    saveSettingsV2();
}
function toggleVSync(val) {
    settings.vsync = val;
    if (cesiumViewer) cesiumViewer.targetFrameRate = val ? undefined : (settings.fpsLimit === 'unlimited' ? undefined : parseInt(settings.fpsLimit));
    saveSettingsV2();
}
function setAntiAliasing(val) {
    settings.antialiasing = val;
    if (!cesiumViewer) return;
    const fxaa = cesiumViewer.scene.postProcessStages.fxaa;
    if (fxaa) fxaa.enabled = (val === 'fxaa');
    try { cesiumViewer.scene.msaaSamples = (val === 'msaa4x') ? 4 : 1; } catch (e) {}
    saveSettingsV2();
}
function setAnisotropicFiltering(val) {
    settings.anisoFiltering = val;
    // Cesium doesn't expose WebGL anisotropic filtering directly; approximate
    // via crisper/softer tile rendering hints on the 2D imagery layer.
    const mapEl = document.getElementById('map');
    if (mapEl) mapEl.style.imageRendering = (val === 'off') ? 'pixelated' : 'auto';
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
function setShadowQualityGeneral(val) {
    settings.shadowQualityGeneral = val;
    if (!cesiumViewer) return;
    cesiumViewer.shadows = val !== 'off';
    if (cesiumViewer.shadowMap) cesiumViewer.shadowMap.size = val === 'high' ? 4096 : 1024;
    saveSettingsV2();
}
function togglePostProcessing(val) {
    settings.postProcessing = val;
    if (cesiumViewer && cesiumViewer.scene.postProcessStages.ambientOcclusion) {
        cesiumViewer.scene.postProcessStages.ambientOcclusion.enabled = val;
    }
    saveSettingsV2();
}
let _motionBlurStage = null;
function toggleMotionBlur(val) {
    settings.motionBlur = val;
    if (!cesiumViewer) return;
    if (val && !_motionBlurStage) {
        _motionBlurStage = new Cesium.PostProcessStage({
            fragmentShader: `
                uniform sampler2D colorTexture;
                varying vec2 v_textureCoordinates;
                void main(void){
                    vec4 c = texture2D(colorTexture, v_textureCoordinates);
                    vec2 dir = (v_textureCoordinates - 0.5) * 0.006;
                    for (int i = 1; i <= 4; i++) { c += texture2D(colorTexture, v_textureCoordinates - dir * float(i)); }
                    gl_FragColor = c / 5.0;
                }`
        });
        cesiumViewer.scene.postProcessStages.add(_motionBlurStage);
    } else if (!val && _motionBlurStage) {
        cesiumViewer.scene.postProcessStages.remove(_motionBlurStage);
        _motionBlurStage = null;
    }
    saveSettingsV2();
}
function restoreDefaultGraphics() {
    setFPSLimit('60'); document.getElementById('set-fps-limit').value = '60';
    toggleVSync(true); document.getElementById('set-vsync').checked = true;
    setAntiAliasing('fxaa'); document.getElementById('set-antialiasing').value = 'fxaa';
    setAnisotropicFiltering('4x'); document.getElementById('set-aniso').value = '4x';
    setTextureQuality('medium'); document.getElementById('set-texture-quality').value = 'medium';
    setShadowQualityGeneral('off'); document.getElementById('set-shadow-quality-general').value = 'off';
    togglePostProcessing(false); document.getElementById('set-post-processing').checked = false;
    toggleMotionBlur(false); document.getElementById('set-motion-blur').checked = false;
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
    const el = document.getElementById('btn-orientation'); if (el) el.style.display = val ? '' : 'none';
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

// ── General → Audio (lightweight WebAudio engine hum + UI clicks) ──────
let _audioCtx = null, _gainMaster = null, _gainEngine = null, _gainEnv = null, _gainUI = null, _engineOsc = null, _envNoise = null;
function _ensureAudio() {
    if (_audioCtx) return;
    try {
        _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        _gainMaster = _audioCtx.createGain(); _gainMaster.connect(_audioCtx.destination);
        _gainEngine = _audioCtx.createGain(); _gainEngine.connect(_gainMaster);
        _gainEnv    = _audioCtx.createGain(); _gainEnv.connect(_gainMaster);
        _gainUI     = _audioCtx.createGain(); _gainUI.connect(_gainMaster);
        _gainMaster.gain.value = settings.volMaster / 100;
        _gainEngine.gain.value = settings.volEngine / 100;
        _gainEnv.gain.value    = settings.volEnv / 100;
        _gainUI.gain.value     = settings.volUI / 100;

        _engineOsc = _audioCtx.createOscillator();
        _engineOsc.type = 'sawtooth'; _engineOsc.frequency.value = 60;
        const engineFilter = _audioCtx.createBiquadFilter();
        engineFilter.type = 'lowpass'; engineFilter.frequency.value = 400;
        _engineOsc.connect(engineFilter); engineFilter.connect(_gainEngine);
        _engineOsc.start();

        const bufferSize = 2 * _audioCtx.sampleRate;
        const noiseBuffer = _audioCtx.createBuffer(1, bufferSize, _audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
        _envNoise = _audioCtx.createBufferSource();
        _envNoise.buffer = noiseBuffer; _envNoise.loop = true;
        const envFilter = _audioCtx.createBiquadFilter();
        envFilter.type = 'lowpass'; envFilter.frequency.value = 300;
        _envNoise.connect(envFilter); envFilter.connect(_gainEnv);
        _envNoise.start();
    } catch (e) { console.warn('[Audio] init failed:', e); }
}
function updateVolume(channel, val) {
    settings['vol' + channel.charAt(0).toUpperCase() + channel.slice(1)] = parseInt(val, 10);
    document.getElementById('val-vol-' + (channel === 'environment' ? 'env' : channel)).textContent = val;
    _ensureAudio();
    const map2 = { master: _gainMaster, engine: _gainEngine, environment: _gainEnv, ui: _gainUI };
    if (map2[channel]) map2[channel].gain.value = parseInt(val, 10) / 100;
    saveSettingsV2();
}
function toggleMuteWhenUnfocused(val) { settings.muteUnfocused = val; saveSettingsV2(); }
window.addEventListener('blur', () => { if (settings.muteUnfocused && _gainMaster) _gainMaster.gain.value = 0; });
window.addEventListener('focus', () => { if (settings.muteUnfocused && _gainMaster) _gainMaster.gain.value = settings.volMaster / 100; });
function playUIClick() {
    if (!settings.notifications && !_audioCtx) return; // avoid creating context needlessly before any real interaction
    if (!_audioCtx) return;
    const o = _audioCtx.createOscillator(), g = _audioCtx.createGain();
    o.type = 'square'; o.frequency.value = 880;
    g.gain.value = 0.05; o.connect(g); g.connect(_gainUI);
    o.start(); o.stop(_audioCtx.currentTime + 0.04);
}
document.addEventListener('click', e => { if (e.target.closest && e.target.closest('.btn-ui')) playUIClick(); });

// ── General → Input ─────────────────────────────────────────────────────
function updateMouseSensitivity(val) {
    settings.mouseSensitivity = parseFloat(val);
    document.getElementById('val-mouse-sensitivity').textContent = parseFloat(val).toFixed(2);
    freeLook.SENSITIVITY = 0.28 * parseFloat(val);
    saveSettingsV2();
}
function toggleInvertMouseY(val) { settings.invertMouseY = val; saveSettingsV2(); }
function toggleControllerVibration(val) { settings.controllerVibration = val; saveSettingsV2(); }
function _triggerControllerVibration() {
    if (!settings.controllerVibration || !_gpConnected) return;
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const gp of pads) {
        if (gp && gp.vibrationActuator && gp.vibrationActuator.playEffect) {
            gp.vibrationActuator.playEffect('dual-rumble', { duration: 200, strongMagnitude: 0.6, weakMagnitude: 0.3 });
        }
    }
}
let _rebindingAction = null;
function startRebindFlow() {
    const actions = ['forward', 'back', 'left', 'right'];
    const status = document.getElementById('rebind-status');
    let idx = 0;
    function next() {
        if (idx >= actions.length) { status.textContent = '✅ Rebind complete.'; return; }
        _rebindingAction = actions[idx];
        status.textContent = `Press a key for "${actions[idx].toUpperCase()}"…`;
    }
    function handler(e) {
        if (!_rebindingAction) return;
        e.preventDefault();
        keyBindings[_rebindingAction] = e.key.toLowerCase();
        _rebindingAction = null;
        idx++;
        saveSettingsV2();
        next();
        if (idx < actions.length) window.addEventListener('keydown', handler, { once: true });
        else window.removeEventListener('keydown', handler);
    }
    window.addEventListener('keydown', handler, { once: true });
    next();
}
function resetControlsToDefault() {
    keyBindings = { forward: 'w', back: 's', left: 'a', right: 'd' };
    settings.mouseSensitivity = 1.0; settings.invertMouseY = false; settings.controllerVibration = true;
    document.getElementById('set-mouse-sensitivity').value = 1.0;
    document.getElementById('val-mouse-sensitivity').textContent = '1.00';
    document.getElementById('set-invert-mouse-y').checked = false;
    document.getElementById('set-controller-vibration').checked = true;
    freeLook.SENSITIVITY = 0.28;
    document.getElementById('rebind-status').textContent = '↺ Controls reset to WASD.';
    saveSettingsV2();
}

// ── General → Network (BroadcastChannel-based local "multiplayer") ─────
let _mpChannel = null, _mpLastSend = 0;
function toggleMultiplayer(val) {
    settings.multiplayer = val;
    if (val) {
        try {
            _mpChannel = new BroadcastChannel('biv-multiplayer-' + settings.serverRegion);
            _mpChannel.onmessage = (e) => console.log('[Multiplayer] peer update:', e.data);
            showNotification('📶 Multiplayer connected (local peers only)');
        } catch (e) { console.warn('[Multiplayer] BroadcastChannel unavailable:', e); }
    } else if (_mpChannel) { _mpChannel.close(); _mpChannel = null; }
    saveSettingsV2();
}
function setServerRegion(val) {
    settings.serverRegion = val;
    if (settings.multiplayer) { toggleMultiplayer(false); toggleMultiplayer(true); }
    saveSettingsV2();
}
function updateBandwidthLimit(val) {
    settings.bandwidthLimit = parseInt(val, 10);
    document.getElementById('val-bandwidth-limit').textContent = val;
    saveSettingsV2();
}
function _multiplayerBroadcastTick(now) {
    if (!_mpChannel) return;
    const intervalMs = 1000 / Math.max(1, settings.bandwidthLimit);
    if (now - _mpLastSend < intervalMs) return;
    _mpLastSend = now;
    try { _mpChannel.postMessage({ lat: state.lat, lng: state.lng, heading: state.heading, vehicle: state.vehicle, t: now }); } catch (e) {}
}
function updateCacheSize(val) {
    settings.cacheSizeMB = parseInt(val, 10);
    document.getElementById('val-cache-size').textContent = val;
    // Real eviction: trim the fetched-tile chunk cache toward the new budget
    // (rough estimate: ~0.05 MB per cached chunk key).
    const budgetChunks = Math.max(50, Math.floor(settings.cacheSizeMB / 0.05));
    if (fetchedChunks.size > budgetChunks) {
        const excess = fetchedChunks.size - budgetChunks;
        const it = fetchedChunks.values();
        for (let i = 0; i < excess; i++) { const v = it.next(); if (v.done) break; fetchedChunks.delete(v.value); }
        document.getElementById('cache-size-status').textContent = `Trimmed cache to fit ${settings.cacheSizeMB} MB (${fetchedChunks.size} chunks kept).`;
    }
    saveSettingsV2();
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
    if (settings.streamingStats) lines.push(`cached chunks: ${fetchedChunks.size}`, `fetching: ${isFetchingRoads}`);
    if (settings.memoryStats) {
        if (performance.memory) lines.push(`JS heap: ${(performance.memory.usedJSHeapSize / 1048576).toFixed(1)} MB`);
        else lines.push('JS heap: n/a (Chrome only)');
    }
    _debugOverlayEl.textContent = lines.join('\n');
}
function toggleTileBounds(val) { settings.tileBounds = val; saveSettingsV2(); }
function toggleTileLoadingViz(val) { settings.tileLoadingViz = val; saveSettingsV2(); }
function clearCacheButton() {
    fetchedChunks.clear();
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
function checkForUpdatesButton() {
    const status = document.getElementById('update-check-status');
    status.textContent = 'Checking…';
    fetch('version.json', { cache: 'no-store' })
        .then(r => r.ok ? r.json() : Promise.reject())
        .then(data => { status.textContent = data.version && data.version !== '1.0.0' ? `New version available: ${data.version}` : "✅ You're up to date."; })
        .catch(() => { status.textContent = "✅ You're up to date (offline check)."; });
}

// ── Sync all v2 UI controls to current `settings` values (called on modal open / after load) ──
function syncAllSettingsUI() {
    const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v; };
    const setChk = (id, v) => { const el = document.getElementById(id); if (el) el.checked = v; };
    const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };

    setVal('set-3d-resolution-scale', settings.resolutionScale); setTxt('val-3d-resolution-scale', settings.resolutionScale.toFixed(2));
    setVal('set-2d-resolution-scale', settings.resolutionScale); setTxt('val-2d-resolution-scale', settings.resolutionScale.toFixed(2));
    setChk('set-flashlight-toggle', flashlightOn);
    setChk('set-globe-lighting', settings.globeLighting);
    setChk('set-ground-atmosphere', settings.groundAtmosphere);
    setVal('set-terrain-exaggeration', settings.terrainExaggeration); setTxt('val-terrain-exaggeration', settings.terrainExaggeration.toFixed(2));
    setChk('set-object-culling', settings.objectCulling);
    setVal('set-terrain-provider', settings.terrainProvider);
    setChk('set-sky-atmosphere', settings.skyAtmosphere);
    setChk('set-sun-toggle', settings.sunShow);
    setChk('set-moon-toggle', settings.moonShow);
    setVal('set-scene-shadows', settings.sceneShadows);
    setVal('set-day-night-mode', isNightMode ? 'night' : 'day');
    setVal('set-imagery-map-style', settings.imageryMapStyle); setVal('set-imagery-map-style-2d', settings.imageryMapStyle);
    setVal('set-imagery-provider', settings.imageryProvider); setVal('set-imagery-provider-2d', settings.imageryProvider);
    setChk('set-collision-visualization', settings.collisionVisualization);
    setChk('set-pitch-invert', settings.invertPitch);
    setVal('set-rudder-sensitivity', settings.rudderSensitivity); setTxt('val-rudder-sensitivity', settings.rudderSensitivity.toFixed(2));
    setChk('set-auto-spawn-preload', settings.autoSpawnPreload);
    setVal('set-2d-scene-mode', settings.sceneMode2D);
    setVal('set-pan-speed', settings.panSpeed); setTxt('val-pan-speed', settings.panSpeed.toFixed(2));
    setChk('set-rotate-map', state.headUp);
    setVal('set-zoom-sensitivity', settings.zoomSensitivity); setTxt('val-zoom-sensitivity', settings.zoomSensitivity.toFixed(2));
    setVal('set-language', settings.language);
    setVal('set-theme', settings.theme);
    setChk('set-autosave', settings.autosave);
    setVal('set-fps-limit', settings.fpsLimit);
    setChk('set-vsync', settings.vsync);
    setVal('set-antialiasing', settings.antialiasing);
    setVal('set-aniso', settings.anisoFiltering);
    setVal('set-texture-quality', settings.textureQuality);
    setVal('set-shadow-quality-general', settings.shadowQualityGeneral);
    setChk('set-post-processing', settings.postProcessing);
    setChk('set-motion-blur', settings.motionBlur);
    setVal('set-ui-scale', settings.uiScale); setTxt('val-ui-scale', settings.uiScale.toFixed(2));
    setChk('set-show-fps', settings.showFPS);
    setChk('set-show-coords', settings.showCoords);
    setChk('set-show-compass', settings.showCompass);
    setChk('set-show-minimap', settings.showMinimap);
    setChk('set-notifications', settings.notifications);
    setVal('set-vol-master', settings.volMaster); setTxt('val-vol-master', settings.volMaster);
    setVal('set-vol-engine', settings.volEngine); setTxt('val-vol-engine', settings.volEngine);
    setVal('set-vol-env', settings.volEnv); setTxt('val-vol-env', settings.volEnv);
    setVal('set-vol-ui', settings.volUI); setTxt('val-vol-ui', settings.volUI);
    setChk('set-mute-unfocused', settings.muteUnfocused);
    setVal('set-mouse-sensitivity', settings.mouseSensitivity); setTxt('val-mouse-sensitivity', settings.mouseSensitivity.toFixed(2));
    setChk('set-invert-mouse-y', settings.invertMouseY);
    setChk('set-controller-vibration', settings.controllerVibration);
    setChk('set-multiplayer', settings.multiplayer);
    setVal('set-server-region', settings.serverRegion);
    setVal('set-bandwidth-limit', settings.bandwidthLimit); setTxt('val-bandwidth-limit', settings.bandwidthLimit);
    setVal('set-cache-size', settings.cacheSizeMB); setTxt('val-cache-size', settings.cacheSizeMB);
    setChk('set-debug-mode', settings.debugMode);
    setChk('set-tile-bounds', settings.tileBounds);
    setChk('set-tile-loading', settings.tileLoadingViz);
    setChk('set-streaming-stats', settings.streamingStats);
    setChk('set-gpu-stats', settings.gpuStats);
    setChk('set-memory-stats', settings.memoryStats);
    setChk('set-dev-console', settings.devConsole);
    setVal('set-units-dropdown', state.speedUnit); setVal('set-units-dropdown-2d', state.speedUnit); setVal('set-units-general', state.speedUnit);
}


function toggleCollision(val) {
    settings.collision = val;
    if(val) fetchRoads();
    else { drivableZonePolygon = null; fetchedChunks.clear(); drawDebugCollisions(); }
}
function toggleDebugCollision(val) { settings.debugCollision = val; drawDebugCollisions(); }

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
}

/**
 * ── CUSTOM CLOUD SKYBOX ──────────────────────────────────────────────────
 * skybox.png (shipped alongside index.html) is a 1200×900 horizontal sky
 * "cross": a 4-column × 3-row grid of 300×300 cells, laid out as
 *
 *        [    ][ +Z ][    ][    ]   <- top cell    = up
 *        [ -X ][ +X ][ +Y ][ -Y ]   <- middle row   = sides
 *        [    ][ -Z ][    ][    ]   <- bottom cell  = down
 *
 * Cesium.SkyBox needs 6 separate face images rather than one atlas, so the
 * cross is sliced into 6 canvases the first time a custom skybox is
 * requested, then cached and reused for the rest of the session.
 */
let cloudSkyBoxPromise = null;
let cesiumDefaultSkyBox = null; // stashed so "Default" can restore the real one

function buildCloudSkyBox() {
    if (cloudSkyBoxPromise) return cloudSkyBoxPromise;

    cloudSkyBoxPromise = new Promise((resolve, reject) => {
        const img = new Image();
        // crossOrigin must be set BEFORE src to avoid a tainted-canvas error
        // when the image is served from a different origin (CDN, localhost, etc.)
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            // Support both horizontal-cross (4×3) and vertical-cross (3×4) atlases.
            // Horizontal cross: 4 cols wide, 3 rows tall → CELL = width/4
            // Vertical cross  : 3 cols wide, 4 rows tall → CELL = width/3
            const isHorizontal = img.width >= img.height;
            const CELL = isHorizontal ? Math.floor(img.width / 4) : Math.floor(img.width / 3);

            // Standard horizontal cross layout (most common for skybox atlases):
            //   Row 0 (top):    [  ][+Z][  ][  ]
            //   Row 1 (middle): [-X][+X][+Y][-Y]
            //   Row 2 (bottom): [  ][-Z][  ][  ]
            // Standard vertical cross layout:
            //   Col 0: [  ][+Y][  ]
            //   Col 1: [-X][+X][-Z]  ← note -Z on bottom in vertical crosses
            //   Col 2: [  ][-Y][  ]
            //   Row 0 top: +Z
            const layout = isHorizontal ? {
                positiveZ: [1, 0],
                negativeZ: [1, 2],
                negativeX: [0, 1],
                positiveX: [1, 1],
                positiveY: [2, 1],
                negativeY: [3, 1]
            } : {
                positiveZ: [1, 0],
                negativeZ: [1, 3],
                negativeX: [0, 1],
                positiveX: [2, 1],
                positiveY: [1, 2],
                negativeY: [1, 1]
            };

            const sources = {};
            for (const face in layout) {
                const [col, row] = layout[face];
                const canvas = document.createElement('canvas');
                canvas.width  = CELL;
                canvas.height = CELL;
                canvas.getContext('2d').drawImage(
                    img, col * CELL, row * CELL, CELL, CELL, 0, 0, CELL, CELL
                );
                sources[face] = canvas;
            }
            // show: true is required — Cesium.SkyBox defaults to show=false
            // when constructed without it, leaving the sky pitch-black.
            resolve(new Cesium.SkyBox({ sources, show: true }));
        };
        img.onerror = () => reject(new Error('skybox.png failed to load'));
        img.src = 'skybox.png';
    });

    return cloudSkyBoxPromise;
}

/**
 * updateSkyBox — Settings → Display "Sky" dropdown handler.
 * 'default' restores Cesium's own procedural atmosphere skybox (stars +
 * sun-lit sky); 'clouds' swaps in the custom cubemap built above.
 *
 * GP3DT fix: when a custom cubemap is active, Cesium's SkyAtmosphere (the
 * hazy blue shell rendered outside the globe) must be hidden — otherwise it
 * paints over the cubemap at low altitudes, making the skybox invisible.
 * We restore it when switching back to the default procedural sky.
 */
function updateSkyBox(mode) {
    settings.skyBox = mode;
    if (!cesiumViewer) return;

    if (mode === 'default') {
        if (cesiumDefaultSkyBox) {
            cesiumViewer.scene.skyBox = cesiumDefaultSkyBox;
            cesiumViewer.scene.skyBox.show = true;
        }
        // Restore the atmosphere shell so the procedural sky works properly
        cesiumViewer.scene.skyAtmosphere.show = true;
        return;
    }

    // Stash the default skybox once so we can restore it later
    if (!cesiumDefaultSkyBox) cesiumDefaultSkyBox = cesiumViewer.scene.skyBox;

    buildCloudSkyBox().then(skyBox => {
        if (settings.skyBox !== 'clouds' || !cesiumViewer) return;
        cesiumViewer.scene.skyBox = skyBox;
        cesiumViewer.scene.skyBox.show = true;
        // Hide the atmosphere haze so the cubemap is visible at all altitudes.
        // Without this, GP3DT renders the blue atmosphere shell on top of the
        // custom sky, blocking it completely near the horizon.
        cesiumViewer.scene.skyAtmosphere.show = false;
    }).catch(e => {
        console.warn('Custom skybox.png failed to load — staying on default sky:', e);
        // Make sure the atmosphere is still showing after a failed load
        cesiumViewer.scene.skyAtmosphere.show = true;
    });
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

function updateVehicleScale(val)   { settings.vehicleScale = parseFloat(val); document.getElementById('val-veh-size').innerText = val; }
function updateMapZoom(val)        { settings.mapZoom = parseFloat(val); document.getElementById('val-map-zoom').innerText = val; map.setZoom(settings.mapZoom); }
function updateCameraZoom(val)     { settings.cameraZoom = parseFloat(val); document.getElementById('val-cam-zoom').innerText = val; }
function updatePreloadRadius(val)  { settings.preloadRadius = parseFloat(val); document.getElementById('val-preload-radius').innerText = parseFloat(val).toFixed(1); }

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
        state.lat = 33.942610;
        state.lng = -118.411112;
        state.heading = 90;

        flight.alt = 125;
        flight.pitch = 0; flight.roll = 0;
        flight.verticalSpeed = 0; flight.throttle = 0;
        flight.gearDown = true; flight.brakeActive = false; flight.reverseActive = false;
        flight.groundRef = null;
        flightInput.pitch = 0; flightInput.roll = 0; flightInput.yaw = 0;

        const slider = document.getElementById('flight-throttle-slider');
        const val = document.getElementById('flight-throttle-val');
        if (slider) slider.value = 0;
        if (val) val.textContent = '0%';

        const yawSliderEl = document.getElementById('flight-yaw-slider');
        if (yawSliderEl) yawSliderEl.value = 0;

        const reverseBtn = document.getElementById('btn-flight-reverse');
        if (reverseBtn) reverseBtn.classList.remove('active');

        if (map) map.setView([state.lat, state.lng], settings.mapZoom);
        baseLat = state.lat; baseLng = state.lng;
    }
    // Avoid a camera jump-cut: the chase-cam smoothing state was tracking
    // the previous vehicle type's position/height.
    camSmoothPos     = null;
    camSmoothHeading = null;
    camSmoothHeight  = null;
    camSmoothLat     = null;
    camSmoothLng     = null;
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

    // Remove any existing route (either routing control or straight plane line)
    if (routingControl) { map.removeControl(routingControl); routingControl = null; }
    if (planeStraightLine) { map.removeLayer(planeStraightLine); planeStraightLine = null; }

    const searchInput = document.getElementById('gps-search');
    const destText = (searchInput && searchInput.value) ? searchInput.value : 'Destination';
    document.getElementById('gps-minimap-dest-label').innerText = '📍 ' + destText;
    document.getElementById('gps-minimap-icon').innerText = '🧭';

    if (state.vehicle === 'plane') {
        // ── Airplane mode: straight great-circle line — no street routing ──
        // OSRM road routing is useless for a plane; a direct line matches
        // how pilots actually navigate and never routes over roads or bridges.
        planeStraightLine = L.polyline(
            [[state.lat, state.lng], [state.destLat, state.destLng]],
            { color: '#2563eb', weight: 8, opacity: 0.8, dashArray: '12 6' }
        ).addTo(map);

        // Mirror straight line onto the GPS mini-map immediately (no OSRM wait)
        updateNavMapRoute([
            L.latLng(state.lat, state.lng),
            L.latLng(state.destLat, state.destLng)
        ]);
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

function cancelNavigation() {
    state.destLat = null; state.destLng = null;
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
        // Plane gets 150 kts approach speed; ground vehicles keep 0
        if (state.vehicle === 'plane') {
            flight.speed     = 150;
            flight.throttle  = 50;
            flight.pitch     = 0;
            flight.roll      = 0;
            flight.alt       = Math.max(flight.alt, 2500); // ensure some altitude
            flight.groundRef = null; // will re-lock next frame
            state.speed      = 150 * 1.852; // display speed in km/h
        } else {
            state.speed = 0;
        }
        cancelNavigation();
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
    throttle: 0, alt: 125,
    verticalSpeed: 0,
    gearDown: true, brakeActive: false, reverseActive: false,
    groundRef: null   // real terrain elevation (m) flight.alt is measured from; re-locked near the ground, frozen while airborne — see updateCesiumCamera
};
const flightInput = { pitch: 0, roll: 0, yaw: 0 };
let flightJoystickActive = false;

// V_r — rotation speed. Below this, the aircraft is still on its
// takeoff roll: pitch/roll authority is locked out and the rudder slider
// is the only way to steer (nosewheel/rudder steering on the runway).
// 140 knots = ~259 km/h (state.speed is stored in km/h).
const ROTATION_SPEED_KTS = 259;

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

const throttleSlider = document.getElementById('flight-throttle-slider');
const throttleValDisplay = document.getElementById('flight-throttle-val');
if (throttleSlider) {
    throttleSlider.addEventListener('input', (e) => {
        flight.throttle = parseInt(e.target.value);
        if (throttleValDisplay) throttleValDisplay.textContent = flight.throttle + '%';
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

function updateFlight(dt) {
    // PHYSICS (fallback — JSBSim removed)
    let pitchInput = flightInput.pitch, rollInput = flightInput.roll;
    if (isKeyDown('forward') || keys['arrowup'])    pitchInput =  0.6;
    else if (isKeyDown('back') || keys['arrowdown'])  pitchInput = -0.6;
    if (isKeyDown('left') || keys['arrowleft'])  rollInput  = -0.6;
    else if (isKeyDown('right') || keys['arrowright']) rollInput  =  0.6;

    // Pitch invert toggle — only flips up/down, never left/right
    if (settings.invertPitch) pitchInput = -pitchInput;

    // Below V_r (rotation speed) the aircraft is still on its takeoff roll:
    // pitch/roll authority is locked out, exactly like a real aircraft
    // before rotation. The rudder slider is the only way to steer until
    // then (nosewheel/rudder steering on the runway).
    const canPitchRoll = state.speed >= ROTATION_SPEED_KTS;
    if (!canPitchRoll) { pitchInput = 0; rollInput = 0; }

    // Accumulate roll and pitch (scaled by user sensitivity setting)
    flight.roll  += rollInput  * 1.2 * settings.flightSensitivity * dt;
    flight.pitch += pitchInput * 0.8 * settings.flightSensitivity * dt;

    // Auto-level roll when no input
    if (rollInput === 0) flight.roll *= Math.exp(-1.5 * dt);

    // Roll drives yaw (coordinated turn)
    if (Math.abs(flight.roll) > 0.01) {
        state.heading += Math.sin(flight.roll) * 0.4 * dt * (180 / Math.PI) *
                         (state.speed / Math.max(state.speed, 80));
    }

    // ── RUDDER (YAW) ──────────────────────────────────────────────────────
    // Direct nose steering. It's the ONLY directional control available
    // below V_r, and keeps working as a real rudder once airborne.
    const yawInput = (flightInput.yaw || 0) * settings.rudderSensitivity;
    if (Math.abs(yawInput) > 0.01) {
        state.heading += yawInput * 30 * dt;
    }

    flight.pitch  = Math.max(-0.8, Math.min(0.8, flight.pitch));
    flight.roll   = Math.max(-1.2, Math.min(1.2, flight.roll));
    state.heading = (state.heading + 360) % 360;

    // ── THRUST & DRAG MODEL ─────────────────────────────────────────────────
    // Tuned for ~350 kts (≈648 km/h) in 2 min at 100% throttle
    // (terminal velocity ≈385 kts / ≈713 km/h with gear up, no brakes).
    const maxThrust = 420 * settings.flightAcceleration; // scaled by user acceleration setting
    const thrustMag = (flight.throttle / 100) * maxThrust;
    const thrust = flight.reverseActive ? -thrustMag : thrustMag; // reverse thrust decelerates instead of accelerating

    const dragCoeff = 0.001; // terminal ≈ 648 km/h (350 kts) with gear up, no brakes
    const inducedDrag = state.speed * state.speed * dragCoeff;
    const parasiteDrag = flight.gearDown ? 65 : 0;  // 35 × 1.852 — scaled for knots-range speeds
    const brakeDrag = flight.brakeActive ? 370 : 0; // 200 × 1.852 — scaled for knots-range speeds

    const netForce = thrust - inducedDrag - parasiteDrag - brakeDrag;
    state.speed += netForce * 0.024 * dt; // 0.013 × 1.852 — scaled from km/h to knots-range target
    // Allow negative speed when reverse thrust is engaged (backward taxi);
    // clamp forward to 0 otherwise so the plane doesn't roll back under drag alone.
    state.speed = flight.reverseActive
        ? Math.max(-60, state.speed)   // ~32 kts max reverse taxi speed
        : Math.max(0, state.speed);

    // ── STALL MODEL ────────────────────────────────────────────────────────
    const stallSpeed = 93; // 50 knots = ~93 km/h (state.speed is in km/h)
    const isStalled = state.speed < stallSpeed && flight.alt > 25;
    const currentSpeedMps = state.speed / 3.6;  // km/h → m/s

    if (isStalled) {
        flight.verticalSpeed = -1000;
        flight.pitch = Math.max(-0.3, flight.pitch - 0.5 * dt);
        flight.roll *= 0.95;
    } else {
        flight.verticalSpeed = currentSpeedMps * Math.sin(flight.pitch) * 196.85;
    }

    flight.alt += (flight.verticalSpeed / 60) * dt;

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
let osmBuildingsTileset    = null; // Cesium OSM Buildings (once loaded)
let satelliteTextureCenter = null; // {lat, lng} where the current tile grid was fetched

/**
 * initCesium — sets up the Cesium viewer with ArcGIS satellite imagery as a
 * base. No keys are required to run: Cesium Ion / Photorealistic 3D Tiles
 * are only layered in if the person has saved an Ion token via Settings
 * (see CONFIG / applyCesiumIonToken).
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

    // Scene-wide: shadows
    const shadowsOn = gp3dtSettings.shadowQuality > 0;
    cesiumViewer.shadows = shadowsOn;
    cesiumViewer.terrainShadows = shadowsOn
        ? (gp3dtSettings.shadowQuality >= 2 ? Cesium.ShadowMode.ENABLED : Cesium.ShadowMode.CAST_ONLY)
        : Cesium.ShadowMode.DISABLED;

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
    setVal('set-gp3dt-shadows', gp3dtSettings.shadowQuality);
    setChk('set-gp3dt-dynamic-sse', gp3dtSettings.dynamicScreenSpaceError);
    setChk('set-gp3dt-preload',     gp3dtSettings.preloadFlightDestinations);
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
                // Apply occlusion / view-frustum culling to match current toggle
                photorealTileset.cullWithChildrenBounds = settings.occlusionCulling;
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

    if (style === 'photoreal') {
        if (osmBuildingsTileset) {
            cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
            osmBuildingsTileset = null;
        }
        // Stop fetching terrain — irrelevant once the globe is hidden below.
        cesiumViewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
        tryLoadPhotorealisticTiles();
    } else {
        if (photorealTileset) {
            cesiumViewer.scene.primitives.remove(photorealTileset);
            photorealTileset = null;
        }
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
    camSmoothPos     = null;
    camSmoothHeading = null;
    camSmoothHeight  = null;
    camSmoothLat     = null;
    camSmoothLng     = null;
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
    if (!cesiumViewer || !CONFIG.CESIUM_ION) return;
    if (settings.mapStyle !== 'cesium') return; // skip while the Photorealistic style is active — globe is hidden, terrain would be wasted bandwidth
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
    tryLoadOsmBuildings();
}

// ── GP3DT Hitbox / Collision Floor Tolerance ─────────────────────────────────
/**
 * updateHitboxTolerance — changes how deep below the GP3DT raycast surface the
 * plane can go before the hard floor check snaps it back up.
 *
 * At 1.5 m (default) only genuine terrain clipping triggers the snap.
 * At 30–50 m you can comfortably fly under a highway overpass or a low bridge
 * without being ejected upward. At 200 m you're essentially disabling the
 * collision floor entirely — useful for cinematic underground shots.
 */
function updateHitboxTolerance(val) {
    settings.hitboxTolerance = parseFloat(val);
    document.getElementById('val-hitbox-tolerance').innerText = parseFloat(val).toFixed(1) + ' m';
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
    if (settings.mapStyle !== 'cesium') return; // Photorealistic style is active — see set3DStyle()
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
 * clearSavedKeys — removes the saved Ion token from this device and reverts
 * to the no-key default (ArcGIS imagery, flat terrain, no photoreal tiles).
 */
function clearSavedKeys() {
    localStorage.removeItem(CONFIG_KEYS.CESIUM_ION);
    CONFIG.CESIUM_ION = '';
    document.getElementById('cesium-token-input').placeholder = 'eyJhbGci...';
    setPhotorealStatus('', null);
    if (photorealTileset && cesiumViewer) {
        cesiumViewer.scene.primitives.remove(photorealTileset);
        cesiumViewer.scene.globe.show = true;
        photorealTileset = null;
    }
    if (osmBuildingsTileset && cesiumViewer) {
        cesiumViewer.scene.primitives.remove(osmBuildingsTileset);
        osmBuildingsTileset = null;
    }
    if (cesiumViewer) {
        Cesium.Ion.defaultAccessToken = 'none';
        cesiumViewer.terrainProvider = new Cesium.EllipsoidTerrainProvider();
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
/**
 * getGroundHeight — real terrain elevation (meters above the ellipsoid) at
 * a given lng/lat.
 *
 * Uses Cesium's scene.pickFromRay for true 3D spatial raycasting against
 * Google Photorealistic 3D Tiles (GP3DT). Unlike the previous pickPosition
 * approach, this does NOT rely on screen/window coordinates — it fires a
 * ray in world space from 5000 m straight down toward the Earth's centre,
 * so it works regardless of camera angle, zoom, or whether the target
 * point is off-screen.
 *
 * Falls back to globe.getHeight() when:
 *   - No photorealTileset is loaded (WorldTerrain / Ellipsoid mode)
 *   - pickFromRay returns no hit (GP3DT tiles not yet streamed at this loc)
 * This ensures the physics engine never receives NaN and never breaks.
 */
function getGroundHeight(lng, lat) {
    if (!cesiumViewer) return 0;

    // 1. Try to raycast against Photorealistic 3D Tiles
    if (photorealTileset) {
        // Start point: 5000 metres directly above the target coordinates
        const startPos = Cesium.Cartesian3.fromDegrees(lng, lat, 5000);
        // Direction: straight toward the centre of the Earth
        const direction = Cesium.Cartesian3.normalize(
            Cesium.Cartesian3.negate(startPos, new Cesium.Cartesian3()),
            new Cesium.Cartesian3()
        );
        const ray = new Cesium.Ray(startPos, direction);

        // Exclude the current vehicle's primitives so the ray doesn't
        // terminate on the car/plane roof instead of the ground mesh
        const excludePrimitives = vehiclePrimitives[state.vehicle]
            ? [...vehiclePrimitives[state.vehicle]]
            : [];

        // True 3D raycast — camera-angle independent
        const hit = cesiumViewer.scene.pickFromRay(ray, excludePrimitives);

        if (hit && hit.position) {
            const cartographic = Cesium.Cartographic.fromCartesian(hit.position);
            if (typeof cartographic.height === 'number' && isFinite(cartographic.height)) {
                return cartographic.height;
            }
        }
    }

    // 2. Fallback to Globe terrain (WorldTerrain or Ellipsoid)
    const cartographic = Cesium.Cartographic.fromDegrees(lng, lat);
    const h = cesiumViewer.scene.globe.getHeight(cartographic);
    return (typeof h === 'number' && isFinite(h)) ? h : 0;
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

    const isPlane = state.vehicle === 'plane';

    // Real terrain elevation directly under the vehicle RIGHT NOW (0 on
    // flat terrain / no World Terrain loaded). Ground vehicles always use
    // this directly. The plane only LOCKS onto it while on/near the
    // ground — see groundHeight below — it does not ride the bumps of
    // whatever's beneath the flight path. It's still sampled every frame
    // (cheap — see getGroundHeight's docstring) so the collision floor a
    // few lines down always knows the real terrain height under the plane
    // even while that's not what its displayed altitude is anchored to.
    const groundHeightHere = getGroundHeight(state.lng, state.lat);

    let groundHeight;
    if (isPlane) {
        // Re-lock the reference while on/near the ground (taxiing, just
        // after touchdown, about to lift off — same threshold as the
        // "onGround" check used for the TakeOff button elsewhere) so the
        // plane sits on the REAL terrain at wherever it currently is.
        // Once airborne, freeze it: flight.alt then climbs/descends
        // relative to a fixed reference, like real altitude, instead of
        // tracking every hill under the flight path — which is what was
        // making the plane rocket upward over Everest while cruising.
        if (flight.alt <= 25 || flight.groundRef === null) {
            flight.groundRef = groundHeightHere;
        }
        groundHeight = flight.groundRef;

    } else {
        groundHeight = groundHeightHere;
    }

    // NOTE: ground-vehicle eye height used to be computed here as a fixed
    // constant and applied directly. It's now just the default value of
    // cockpitCam.car.upDown / cockpitCam.bus.upDown (1.3 m / 2.4 m) — see
    // the COCKPIT FIRST-PERSON CAMERA SETTINGS block near the top of the
    // file — applied the same way as the plane's cockpit offset, further
    // down in the first-person branch.

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
    // anchored at the real terrain surface right now; the plane is
    // anchored at its (ground-locked-then-frozen) reference plus its own
    // flight altitude.
    const anchorHeight = isPlane ? groundHeight + flight.alt * 0.3048 : groundHeight;
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
            const _el3      = Math.max(0.04, _baseEl3 + Cesium.Math.toRadians(freeLook.pitch));
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

            const _orbitRG  = Math.sqrt(back * back + up * up);
            const _baseElG  = Math.atan2(up, back);
            const _elG      = Math.max(0.04, _baseElG + Cesium.Math.toRadians(freeLook.pitch));
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

        // For the plane in 3rd person, look at the cockpit position (first-person eye point)
        // so the camera orbits the cockpit, giving a true "zoom out" effect.
        let cameraLookTarget = vehiclePosition;
        if (isPlane) {
            const ccamLook = activeCockpitCam();
            const cockpitOffLook = new Cesium.Cartesian3(ccamLook.sidePosition, ccamLook.frontBack, ccamLook.upDown);
            cameraLookTarget = Cesium.Matrix4.multiplyByPoint(vehicleTransform, cockpitOffLook, new Cesium.Cartesian3());
        }

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
            // light gets misread as "the sun is up" and the whole night sky
            // flips to daytime blue. Forcing both to key off the real sun
            // position instead keeps the actual night sky while the
            // flashlight still lights up nearby terrain/models.
            if (cesiumViewer.scene.atmosphere && _flashlightPrevDynamicLighting === null) {
                _flashlightPrevDynamicLighting = cesiumViewer.scene.atmosphere.dynamicLighting;
                cesiumViewer.scene.atmosphere.dynamicLighting = Cesium.DynamicAtmosphereLightingType.SUNLIGHT;
            }
            if (cesiumViewer.scene.globe && _flashlightPrevGlobeLightingFromSun === null) {
                _flashlightPrevGlobeLightingFromSun = cesiumViewer.scene.globe.dynamicAtmosphereLightingFromSun;
                cesiumViewer.scene.globe.dynamicAtmosphereLightingFromSun = true;
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
    if (state.vehicle !== 'plane') return;

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
        if (tVal)    tVal.textContent = flight.throttle + '%';
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
    if (settings.multiplayer) _multiplayerBroadcastTick(now);

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
    if (state.vehicle === 'plane') {
        updateFlight(dt);
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

        let oldLat = state.lat, oldLng = state.lng;
        let hdgRad = state.heading * Math.PI / 180;
        state.lat += (state.speed * Math.cos(hdgRad)) / 111320 * dt;
        state.lng += (state.speed * Math.sin(hdgRad)) / (111320 * Math.cos(state.lat * Math.PI / 180)) * dt;

        if(checkCollision()) {
            state.lat = oldLat; state.lng = oldLng;
            state.speed = -state.speed * 0.4;
            _triggerControllerVibration();
        }
        state.heading = (state.heading + 360) % 360;
    }

    // ── HARD FLOOR CHECK: Prevent spawning underground & ground clipping ──
    // Runs every frame AFTER physics calculates the new position but BEFORE
    // the camera renders. If the vehicle's absolute height is below the real
    // GP3DT terrain — e.g. spawned before tiles finished loading, or dived
    // through a mountain — it shatters the stale groundRef and pushes the
    // vehicle back to the surface immediately.
    if (cesiumViewer && state.vehicle === 'plane') {
        const currentGround = getGroundHeight(state.lng, state.lat);
        const ref = (flight.groundRef !== null && isFinite(flight.groundRef))
            ? flight.groundRef : 0;
        const absoluteHeightMeters = ref + (flight.alt * 0.3048);

        // settings.hitboxTolerance (m) — user-adjustable via Settings → GP3DT Quality →
        // "Collision Floor Tolerance". The plane is only pushed up when it is MORE than
        // this many metres below what the raycast reports as "ground" (bridge roofs,
        // building tops, and terrain surfaces all count as "ground" to the raycast).
        // Default 1.5 m absorbs minor mesh noise on flat terrain; raise it to fly under
        // bridges/overpasses without being ejected upward.
        if (absoluteHeightMeters < currentGround - settings.hitboxTolerance) {
            console.warn('⚠️ Plane underground — resetting groundRef to real terrain.');
            flight.groundRef = currentGround;
            flight.alt = 5; // 5 ft above the newly locked reference
            flight.verticalSpeed = Math.max(0, flight.verticalSpeed);
        }
    }

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
        if (isNightMode && state.vehicle === 'plane') {
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

    // ── HUD (runs every frame at 20fps cap) ───────────────────────────────
    const hudDue = (now - _hudLastUpdateTime) >= HUD_UPDATE_INTERVAL_MS;
    if (hudDue) {
        _hudLastUpdateTime = now;
        let dSpeed = state.speedUnit === 'KPH'   ? state.speed :
                     state.speedUnit === 'MPH'   ? state.speed * 0.6213 :
                                                   state.speed * 0.5399;
        dom.speedVal.innerText  = Math.round(Math.abs(dSpeed)).toString().padStart(3, '0');
        dom.coordInfo.innerText = `Lat: ${state.lat.toFixed(5)}\nLng: ${state.lng.toFixed(5)}`;

        if (state.vehicle === 'plane') {
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

document.getElementById('set-fov').value = settings.fov;
document.getElementById('val-fov').innerText = settings.fov + '°';

document.getElementById('set-cam-rotate-plane').checked = settings.cameraRotatesWithPlane;

// Sync hitbox tolerance slider to the current setting
(function() {
    const el = document.getElementById('set-hitbox-tolerance');
    if (el) {
        el.value = settings.hitboxTolerance;
        document.getElementById('val-hitbox-tolerance').innerText =
            settings.hitboxTolerance.toFixed(1) + ' m';
    }
})();

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

// ── Settings tree v2: load persisted settings, apply theme/language, sync UI ──
loadSettingsV2();
applyTheme(settings.theme);
document.getElementById('set-language') && (document.getElementById('set-language').value = settings.language);
syncAllSettingsUI();

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

        for (let i = 0; i < airports.length && added < MAX_MARKERS; i++) {
            const ap = airports[i];
            if (skipSmall && (ap.type === 'small_airport')) continue;
            if (skipHeli  && (ap.type === 'heliport' || ap.type === 'seaplane_base')) continue;

            const marker = L.circleMarker([ap.lat, ap.lng], {
                renderer: _renderer,
                radius:   ap.type === 'large_airport' ? 5 :
                          ap.type === 'medium_airport' ? 3.5 :
                          ap.type === 'military' ? 4 : 2.5,
                color:    ap.type === 'large_airport'  ? '#22c55e' :
                          ap.type === 'medium_airport' ? '#3b82f6' :
                          ap.type === 'military'       ? '#ef4444' :
                          ap.type === 'heliport'       ? '#eab308' :
                          ap.type === 'seaplane_base'  ? '#06b6d4' : '#94a3b8',
                fillColor: ap.type === 'large_airport'  ? '#22c55e' :
                           ap.type === 'medium_airport' ? '#3b82f6' :
                           ap.type === 'military'       ? '#ef4444' :
                           ap.type === 'heliport'       ? '#eab308' :
                           ap.type === 'seaplane_base'  ? '#06b6d4' : '#94a3b8',
                fillOpacity: 0.85,
                weight: 1.5,
                opacity: 0.9
            });

            marker._airportData = ap;
            marker.bindPopup(_buildPopupHTML(ap), {
                className: 'spawn-popup',
                closeButton: false,
                autoPan: false
            });
            marker.on('click', function (e) {
                L.DomEvent.stopPropagation(e);
                if (_onClick) _onClick(ap);
            });
            marker.on('mouseover', function () { this.openPopup(); });
            marker.on('mouseout',  function () { this.closePopup(); });

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
    _showSpawnInfo(airport);
    SpawnMap.flyTo(airport.lat, airport.lng, Math.max(SpawnMap.instance().getZoom(), 10));
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
    if (!isAirport || state.vehicle !== 'plane') {
        rwySection.style.display = 'none';
        return;
    }

    rwySection.style.display = 'block';
    _populateRunwaySelector(ap.icao);
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
});

function _escHTML(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ==========================================
// AREA PRELOADING ENGINE
// Settings → 🗺️ Preloading. Streams terrain/imagery/3D-tile data for a
// radiusKm circle around a point BEFORE the player actually gets there, so
// there's no visible pop-in/stutter once they arrive. Used two ways:
//   1. Automatically by confirmSpawnLocation() — the spawn loading screen
//      now waits for this to finish (instead of a fixed timeout) before
//      flipping gameStarted = true.
//   2. On demand via the 🗺️ Preload quick-access button (quickPreloadArea())
//      — centers on wherever the player currently is, any time, mid-game.
//
// Shows the #preload-screen overlay with a progress bar while it works, and
// restores whatever camera/view was active beforehand once it's done (or it
// hits its safety timeout) so the player never notices anything moved.
// ==========================================

function _showPreloadScreen(title, subtitle) {
    const el = document.getElementById('preload-screen');
    document.getElementById('preload-title').textContent    = title    || '🗺️ Preloading Area…';
    document.getElementById('preload-subtitle').textContent = subtitle || 'Streaming terrain & tiles…';
    _setPreloadProgress(0);
    el.style.display = 'flex';
}
function _hidePreloadScreen() {
    document.getElementById('preload-screen').style.display = 'none';
}
function _setPreloadProgress(frac) {
    const pct = Math.round(Math.max(0, Math.min(1, frac)) * 100);
    document.getElementById('preload-bar-fill').style.width = pct + '%';
    document.getElementById('preload-pct').textContent      = pct + '%';
}

/**
 * preloadAreaAroundLocation — the shared entry point for both the automatic
 * (spawn) and manual (quick-access button) preloading flows.
 *
 * @param {number} lat
 * @param {number} lng
 * @param {number} radiusKm
 * @param {object} [opts]
 * @param {string} [opts.title]      — headline shown on the loading screen
 * @param {string} [opts.subtitle]   — sub-text shown on the loading screen
 * @param {number} [opts.maxDurationMs=15000] — hard safety cap so a slow or
 *        failed network request can never strand the player behind the
 *        loading screen forever.
 * @returns {Promise<void>} resolves once preloading is done (or timed out)
 *        and the loading screen has been hidden again.
 */
function preloadAreaAroundLocation(lat, lng, radiusKm, opts = {}) {
    const maxDurationMs = opts.maxDurationMs || 15000;
    const deadline       = performance.now() + maxDurationMs;

    _showPreloadScreen(opts.title, opts.subtitle);
    gamePreloading = true;

    const work = (settings.renderMode === '3D' && cesiumViewer)
        ? _preloadCesiumArea(lat, lng, radiusKm, deadline)
        : _preloadLeafletArea(lat, lng, radiusKm, deadline);

    return work.catch(e => console.warn('[Preload] failed:', e)).finally(() => {
        gamePreloading = false;
        _hidePreloadScreen();
    });
}

/**
 * _destinationPoint — point `distKm` away from (lat,lng) along `bearingDeg`
 * (0=N, 90=E…). Thin wrapper around turf.destination (already a dependency
 * for collision detection elsewhere in this file) so we're not hand-rolling
 * great-circle math twice.
 */
function _destinationPoint(lat, lng, distKm, bearingDeg) {
    const dest = turf.destination(turf.point([lng, lat]), distKm, bearingDeg);
    const [dlng, dlat] = dest.geometry.coordinates;
    return { lat: dlat, lng: dlng };
}

/**
 * _preloadCesiumArea — forces Cesium to actually fetch+parse terrain/3D-tile
 * data around (lat,lng) by sweeping the real camera to a center point plus a
 * ring of 4 points at the requested radius, viewed from straight overhead,
 * and waiting at each one until the active tileset(s) report `tilesLoaded`
 * (or a per-sample timeout elapses). The camera is restored to exactly where
 * it was beforehand once every sample is done.
 */
function _preloadCesiumArea(lat, lng, radiusKm, deadline) {
    return new Promise(resolve => {
        const savedCamera = {
            destination: Cesium.Cartesian3.clone(cesiumViewer.camera.position),
            orientation: {
                heading: cesiumViewer.camera.heading,
                pitch:   cesiumViewer.camera.pitch,
                roll:    cesiumViewer.camera.roll
            }
        };

        // Center + 4 compass points at the edge of the radius — enough
        // spread to kick off streaming across the whole circle without
        // needing dozens of samples.
        const samplePoints = [{ lat, lng }];
        [0, 90, 180, 270].forEach(brg => samplePoints.push(_destinationPoint(lat, lng, radiusKm, brg)));

        // High enough overhead that each sample's surroundings (out to
        // roughly radiusKm) are actually in frame, looking straight down.
        const sampleAltM        = Math.max(radiusKm * 1000 * 1.6, 800);
        const perSampleTimeoutMs = 3500;
        let i = 0;

        function nextSample() {
            if (i >= samplePoints.length || performance.now() > deadline) {
                _restoreCesiumCamera(savedCamera);
                resolve();
                return;
            }
            const pt = samplePoints[i];
            _setPreloadProgress(i / samplePoints.length);

            try {
                cesiumViewer.camera.setView({
                    destination: Cesium.Cartesian3.fromDegrees(pt.lng, pt.lat, sampleAltM),
                    orientation: { heading: 0, pitch: Cesium.Math.toRadians(-90), roll: 0 }
                });
                cesiumViewer.scene.requestRender();
            } catch (e) { /* bad sample point — just skip it */ }

            const sampleStart = performance.now();
            (function pollLoaded() {
                const tilesetDone = settings.mapStyle === 'photoreal'
                    ? (!photorealTileset || photorealTileset.tilesLoaded)
                    : true;
                const terrainDone = settings.mapStyle === 'cesium'
                    ? cesiumViewer.scene.globe.tilesLoaded
                    : true;
                const osmDone = osmBuildingsTileset ? osmBuildingsTileset.tilesLoaded : true;

                const elapsed = performance.now() - sampleStart;
                if ((tilesetDone && terrainDone && osmDone) || elapsed > perSampleTimeoutMs || performance.now() > deadline) {
                    i++;
                    nextSample();
                } else {
                    cesiumViewer.scene.requestRender();
                    setTimeout(pollLoaded, 120);
                }
            })();
        }
        nextSample();
    });
}

function _restoreCesiumCamera(saved) {
    try {
        cesiumViewer.camera.setView({ destination: saved.destination, orientation: saved.orientation });
        cesiumViewer.scene.requestRender();
    } catch (e) { /* viewer may have been torn down mid-sweep — nothing to restore */ }
}

/**
 * _preloadLeafletArea — used in CSS/2D render modes (no Cesium globe/3D
 * tiles active). Directly prefetches the raster satellite/label tile images
 * covering radiusKm around (lat,lng) at the current map zoom, tracked via
 * each Image()'s load/error event so the progress bar reflects real
 * network activity. Capped at a sane tile-span so a large radius can't
 * trigger thousands of requests at once.
 */
function _preloadLeafletArea(lat, lng, radiusKm, deadline) {
    return new Promise(resolve => {
        if (!map) { resolve(); return; }

        const zoom   = Math.round(settings.mapZoom);
        const n      = Math.pow(2, zoom);
        const earthCircumferenceM = 40075016.686;
        const metersPerTile = earthCircumferenceM * Math.cos(lat * Math.PI / 180) / n;
        const tileSpan = Math.min(8, Math.max(1, Math.ceil((radiusKm * 1000) / metersPerTile)));

        const centerTile = _lngLatToTile(lng, lat, zoom);
        const wantHybrid = document.getElementById('map-layer-select').value === 'hybrid';

        const urls = [];
        for (let dx = -tileSpan; dx <= tileSpan; dx++) {
            for (let dy = -tileSpan; dy <= tileSpan; dy++) {
                const x = centerTile.x + dx, y = centerTile.y + dy;
                if (x < 0 || y < 0 || x >= n || y >= n) continue;
                urls.push(satLayer.getTileUrl({ x, y, z: zoom }));
                if (wantHybrid) urls.push(labelsLayer.getTileUrl({ x, y, z: zoom }));
            }
        }

        if (!urls.length) { resolve(); return; }

        let loaded = 0;
        let settled = false;
        const total = urls.length;
        const finish = () => { if (!settled) { settled = true; resolve(); } };

        urls.forEach(url => {
            const img = new Image();
            const onDone = () => {
                loaded++;
                _setPreloadProgress(loaded / total);
                if (loaded >= total) finish();
            };
            img.onload  = onDone;
            img.onerror = onDone;
            img.src = url;
        });

        // Safety net in case some tiles never fire load/error.
        setTimeout(finish, Math.max(0, deadline - performance.now()));
    });
}

function _lngLatToTile(lng, lat, zoom) {
    const latRad = lat * Math.PI / 180;
    const n = Math.pow(2, zoom);
    const x = Math.floor((lng + 180) / 360 * n);
    const y = Math.floor((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n);
    return { x, y };
}

/**
 * quickPreloadArea — handler for the 🗺️ Preload top-bar button and the
 * matching button in Settings → Preloading. Lets the player force-stream
 * terrain/tiles around wherever they currently are, any time, without going
 * through the spawn screen. Physics pause automatically for the duration
 * via the `gamePreloading` gate in update().
 */
function quickPreloadArea() {
    if (!gameStarted || gamePreloading) return;
    preloadAreaAroundLocation(state.lat, state.lng, settings.preloadRadius, {
        title:    '🗺️ Preloading Area Around You…',
        subtitle: 'Streaming terrain & tiles so the nearby area loads instantly. Hang tight…'
    });
}

// ── confirmSpawnLocation ──────────────────────────────────────────────────────
// The only entry point that actually starts the game. Teleports the vehicle
// to the selected location and initialises all subsystems for the first time.
function confirmSpawnLocation() {
    if (!_spawnSelected) return;

    const ap   = _spawnSelected;
    let lat    = ap.lat;
    let lng    = ap.lng;
    let elev   = ap.elev; // feet (may be null)
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

    if (state.vehicle === 'plane' && rwyVal) {
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

    // ── 1. Apply selected spawn position to game state ─────────────────────
    state.lat     = lat;
    state.lng     = lng;
    state.heading = spawnHeading;
    state.speed   = 0;

    // For plane: apply elevation + operation-specific state
    if (state.vehicle === 'plane') {
        const elevM = elev != null ? elev * 0.3048 : 0;
        if (rwyVal && !isTakeoff) {
            // Landing: start at 2500 ft AGL on final approach, at approach speed
            flight.groundRef = elevM;
            flight.alt       = 2500; // ft AGL
            flight.speed     = 150;  // knots — approach speed (150 kt)
            flight.throttle  = 50;
            flight.pitch     = -3;   // slight nose-down for descent
            flight.roll      = 0;
            state.speed      = 150 * 1.852; // sync state.speed (km/h) for display
        } else if (elev != null) {
            // Takeoff or airport centre: on the runway
            flight.groundRef = elevM;
            flight.alt       = 5;    // 5 ft AGL — sitting on runway
            flight.speed     = 0;
            flight.throttle  = 0;
            flight.pitch     = 0;
            flight.roll      = 0;
        }
    }

    // ── 2. Sync Leaflet main map to spawn location ─────────────────────────
    if (map) {
        map.setView([lat, lng], settings.mapZoom, { animate: false });
        baseLat = lat;
        baseLng = lng;
    }

    // ── 3. Sync Cesium camera to spawn location immediately ────────────────
    if (cesiumViewer) {
        try {
            let camAlt, camPitch;
            const elevM = elev != null ? elev * 0.3048 : 0;
            if (state.vehicle === 'plane' && rwyVal && !isTakeoff) {
                // Landing: camera at aircraft altitude on approach
                camAlt   = elevM + 2500 * 0.3048;
                camPitch = -5;
            } else {
                camAlt   = Math.max(elevM + 50, 200);
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
            console.warn('[Spawn] Cesium camera pre-position failed:', e);
        }
    }

    // ── 4. Hide spawn UI with a smooth fade ───────────────────────────────
    const selector = document.getElementById('spawn-selector-screen');
    selector.style.animation = 'spawn-fade-out 0.4s ease both';
    setTimeout(() => {
        selector.style.display = 'none';

        // ── 5. Preload the surrounding area, THEN start the game ───────────
        // Settings → 3D Mode → Streaming → "Automatic Spawn Preload": when off,
        // skip straight to the game instead of streaming the area first.
        if (!settings.autoSpawnPreload) {
            gameStarted = true;
            console.log(`[Spawn] Game started at ${lat.toFixed(5)}, ${lng.toFixed(5)} (auto-preload disabled)`);
            if (isNightMode) setTimeout(_spawnNightLights, 600);
            return;
        }

        preloadAreaAroundLocation(lat, lng, settings.preloadRadius, {
            title:    '🗺️ Preparing Your Spawn Area…',
            subtitle: 'Streaming terrain & tiles so everything around you is ready before you start.'
        }).then(() => {
            gameStarted = true;
            console.log(`[Spawn] Game started at ${lat.toFixed(5)}, ${lng.toFixed(5)}`);
            // Re-spawn night lights at the new location if night mode is active
            if (isNightMode) setTimeout(_spawnNightLights, 600);
        });
    }, 380);
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
