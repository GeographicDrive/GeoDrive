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
// No keys are hardcoded here. The ONLY way Cesium Ion / Google Tiles get
// used is if the person pastes them into the textboxes in Settings — that
// save flow is the single source of truth, and it also remembers the value
// in this browser (localStorage) so it doesn't need to be re-typed every
// visit. Nothing here is committed to the repo or shipped by default.
const CONFIG_KEYS = {
    GOOGLE_TILES:    'biv_google_tiles_key',
    CESIUM_ION:      'biv_cesium_ion_token',
    CESIUM_CAM_MODE: 'biv_cesium_cam_mode'
};
const CONFIG = {
    GOOGLE_TILES:    localStorage.getItem(CONFIG_KEYS.GOOGLE_TILES)    || '',
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
    osmBuildings: false // Cesium OSM Buildings toggle (requires Ion token)
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
let camSmoothPos     = null;   // Cesium.Cartesian3 | null (null = not yet init)
let camSmoothHeading = null;   // number (radians) | null

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
}

function cancelNavigation() {
    state.destLat = null; state.destLng = null;
    if(routingControl) { map.removeControl(routingControl); routingControl = null; }
    document.getElementById('gps-nav-info').style.display = 'none';
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
let googleTileset     = null;   // Google Photorealistic 3D Tiles (once loaded)
let osmBuildingsTileset = null; // Cesium OSM Buildings (once loaded)

/**
 * initCesium — sets up the Cesium viewer with ArcGIS satellite imagery as a
 * base. No keys are required to run: Cesium Ion / Google Photorealistic 3D
 * Tiles are only layered in if the person has saved a key via Settings
 * (see CONFIG / applyCesiumIonToken / applyGoogleTilesKey).
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

        // Performance settings
        cesiumViewer.scene.globe.depthTestAgainstTerrain = false;
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

    // Only kick in if a key was already saved from a previous visit
    // (CONFIG is seeded from localStorage above) — nothing runs by default.
    tryLoadGoogleTiles();
    tryEnableWorldTerrain();
}

/**
 * tryLoadGoogleTiles — loads Google Photorealistic 3D Tiles using
 * CONFIG.GOOGLE_TILES. No-op if there's no viewer or no key saved. Runs in
 * its own try/catch, completely separate from viewer creation — a failure
 * here (bad key, quota, offline, or a Cesium build without this helper)
 * must never null out an already-working cesiumViewer.
 */
function tryLoadGoogleTiles() {
    if (!cesiumViewer || !CONFIG.GOOGLE_TILES) return;
    try {
        if (typeof Cesium.GoogleMaps !== 'undefined') {
            Cesium.GoogleMaps.defaultApiKey = CONFIG.GOOGLE_TILES;
        }
        const tilesetPromise = typeof Cesium.GoogleMaps !== 'undefined'
            ? Cesium.createGooglePhotorealistic3DTileset()
            : Cesium.createGooglePhotorealistic3DTileset(CONFIG.GOOGLE_TILES); // older API shape

        Promise.resolve(tilesetPromise)
            .then(tileset => {
                if (!cesiumViewer) return; // viewer was torn down meanwhile
                if (googleTileset) cesiumViewer.scene.primitives.remove(googleTileset);
                cesiumViewer.scene.primitives.add(tileset);
                googleTileset = tileset;
                // The photorealistic tileset already covers the whole
                // globe in 3D, so the flat ArcGIS imagery underneath
                // would only cause z-fighting — hide it.
                cesiumViewer.scene.globe.show = false;
                console.log('%c🌍 Google Photorealistic 3D Tiles loaded', 'color:#22c55e;font-weight:bold');
            })
            .catch(e => {
                console.warn('Google Photorealistic 3D Tiles failed to load, staying on ArcGIS imagery:', e);
            });
    } catch (e) {
        console.warn('Google Photorealistic 3D Tiles unavailable, staying on ArcGIS imagery:', e);
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
 * on this device next visit) and immediately enables WorldTerrain.
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
 * applyGoogleTilesKey — the ONLY place a Google Tiles key ever enters this
 * app. Reads the Settings textbox, saves it to localStorage, and
 * immediately loads Google Photorealistic 3D Tiles.
 */
function applyGoogleTilesKey() {
    const input = document.getElementById('google-tiles-input');
    const key = input.value.trim();
    if (!key) return;
    localStorage.setItem(CONFIG_KEYS.GOOGLE_TILES, key);
    CONFIG.GOOGLE_TILES = key;
    input.value = '';
    input.placeholder = '✓ Key saved on this device';
    tryLoadGoogleTiles();
}

/**
 * clearSavedKeys — removes both saved keys from this device and reverts
 * to the no-key default (ArcGIS imagery, flat terrain).
 */
function clearSavedKeys() {
    localStorage.removeItem(CONFIG_KEYS.CESIUM_ION);
    localStorage.removeItem(CONFIG_KEYS.GOOGLE_TILES);
    CONFIG.CESIUM_ION = '';
    CONFIG.GOOGLE_TILES = '';
    document.getElementById('cesium-token-input').placeholder = 'eyJhbGci...';
    document.getElementById('google-tiles-input').placeholder = 'AIzaSy...';
    if (googleTileset && cesiumViewer) {
        cesiumViewer.scene.primitives.remove(googleTileset);
        cesiumViewer.scene.globe.show = true;
        googleTileset = null;
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
    const vehicleHpr = new Cesium.HeadingPitchRoll(
        Cesium.Math.toRadians(state.heading),
        isPlane ? flight.pitch : 0,
        isPlane ? flight.roll  : 0
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
        // Rather than snapping the camera rigidly to vehicleTransform every
        // frame (which feels "glued on"), we:
        //  1. Compute the TARGET camera world position from a smoothed
        //     heading that lags behind the vehicle's real heading.
        //  2. Lerp the actual camera world position toward that target.
        // The result is a floaty, cinematic chase cam that sweeps around
        // corners instead of snapping.

        const dims   = VEHICLE_DIMS[state.vehicle] || VEHICLE_DIMS.car;
        const zoom   = settings.thirdPersonZoom || 1.0;
        const back   = Math.max(9,   dims.length * 1.6) / zoom;
        const up     = Math.max(3.5, dims.length * 0.45) / zoom;

        // How quickly the smoothed heading and position chase the vehicle.
        // Lower = more lag (dreamier); higher = snappier.  dt-scaled so
        // frame-rate changes don't affect the feel.
        const headingAlpha  = 1.0 - Math.exp(-6  * dt);   // heading spring
        const posAlpha      = 1.0 - Math.exp(-8  * dt);   // position spring

        // ── 1. Smooth the heading ─────────────────────────────────────────
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

        // ── 2. Compute TARGET camera position from smoothed heading ───────
        // Build a local ENU frame using the smoothed heading, then place the
        // camera back/up from the vehicle in that frame.
        const smoothHpr = new Cesium.HeadingPitchRoll(camSmoothHeading, 0, 0);
        const smoothTransform = Cesium.Transforms.headingPitchRollToFixedFrame(vehiclePosition, smoothHpr);
        const targetCamPos = Cesium.Matrix4.multiplyByPoint(
            smoothTransform,
            new Cesium.Cartesian3(0, -back, up),
            new Cesium.Cartesian3()
        );

        // ── 3. Lerp actual camera position toward the target ──────────────
        if (camSmoothPos === null) {
            camSmoothPos = targetCamPos.clone();
        } else {
            camSmoothPos = Cesium.Cartesian3.lerp(camSmoothPos, targetCamPos, posAlpha, camSmoothPos);
        }

        // ── 4. Point camera from its smoothed position toward the vehicle ─
        // Use setView so we control position + direction explicitly.
        cesiumViewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
        const dir = Cesium.Cartesian3.subtract(vehiclePosition, camSmoothPos, new Cesium.Cartesian3());
        Cesium.Cartesian3.normalize(dir, dir);
        // "up" in world space = the ENU up at the vehicle position
        const enuUp = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(vehiclePosition, new Cesium.Cartesian3());
        cesiumViewer.camera.setView({
            destination: camSmoothPos,
            orientation: { direction: dir, up: enuUp }
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

    requestAnimationFrame(update);
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

requestAnimationFrame(update);
