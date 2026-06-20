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
    GOOGLE_TILES: 'biv_google_tiles_key',
    CESIUM_ION:   'biv_cesium_ion_token'
};
const CONFIG = {
    GOOGLE_TILES: localStorage.getItem(CONFIG_KEYS.GOOGLE_TILES) || '',
    CESIUM_ION:   localStorage.getItem(CONFIG_KEYS.CESIUM_ION)   || ''
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
    renderMode: '3D',   // '3D' = Cesium, 'CSS' = CSS perspective, '2D' = flat
    tilt: 0,
    vehicleScale: 1.0, mapZoom: 18,
    steeringMode: 'arrows', cameraZoom: 1.0,
    steeringSensitivity: 1.0,
    cesiumCamDist: 200   // follow distance in meters
};

const VEHICLE_DIMS = {
    car:   { length: 4.5,  width: 2.0  },
    bus:   { length: 12.0, width: 2.5  },
    plane: { length: 15.0, width: 12.0 }
};

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
    cesiumGraphic:     document.getElementById('cesium-vehicle-graphic'),
    cameraTilt:        document.getElementById('camera-tilt'),
    cameraPerspective: document.getElementById('camera-perspective')
};

// ==========================================
// 3. MAP INIT & GPS SYSTEM
// ==========================================
const map = L.map('map', {
    zoomControl: false, dragging: false, scrollWheelZoom: false, touchZoom: false,
    doubleClickZoom: false, keyboard: false, zoomSnap: 0, zoomAnimation: false
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
 *   '3D'  → Cesium real-globe engine (with proper heading/pitch/roll camera)
 *   'CSS' → Leaflet with CSS perspective transform (legacy 3D mode)
 *   '2D'  → Flat top-down Leaflet view
 *
 * The Leaflet `map` object itself always stays alive in the background
 * (collision detection and GPS distance/bearing math use its projection
 * functions), but its visible tile layers are torn down in 3D mode so we
 * stop downloading and rendering a 2D canvas nobody can see.
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

    settings.renderMode = mode;

    document.getElementById('btn-mode-3d').classList.toggle('active',  mode === '3D');
    document.getElementById('btn-mode-css').classList.toggle('active', mode === 'CSS');
    document.getElementById('btn-mode-2d').classList.toggle('active',  mode === '2D');

    const tiltSlider = document.getElementById('set-cam-tilt');
    const wantHybrid = document.getElementById('map-layer-select').value === 'hybrid';

    if (mode === '3D' && cesiumViewer) {
        // ── Cesium mode ──────────────────────────────────────────────────
        document.body.classList.add('is-cesium');
        document.body.classList.remove('is-3d');
        tiltSlider.disabled = true;   // tilt is controlled by Cesium camera
        // Reset CSS camera-tilt to neutral so it doesn't interfere when toggling back
        dom.cameraTilt.style.transform = 'rotateX(0deg) rotateZ(0deg)';

        // Tear down the 2D tile layers — Cesium owns the visuals now, so
        // there's no point still downloading/painting hidden satellite tiles.
        if (map.hasLayer(satLayer))    map.removeLayer(satLayer);
        if (map.hasLayer(labelsLayer)) map.removeLayer(labelsLayer);

    } else if (mode === 'CSS') {
        // ── CSS perspective mode ─────────────────────────────────────────
        document.body.classList.remove('is-cesium');
        document.body.classList.add('is-3d');
        tiltSlider.disabled = false;
        dom.cameraTilt.style.transform = `rotateX(${settings.tilt}deg) rotateZ(0deg)`;

        if (!map.hasLayer(satLayer)) satLayer.addTo(map);
        if (wantHybrid && !map.hasLayer(labelsLayer)) labelsLayer.addTo(map);

    } else {
        // ── 2D flat mode ─────────────────────────────────────────────────
        document.body.classList.remove('is-cesium');
        document.body.classList.remove('is-3d');
        tiltSlider.disabled = true;
        dom.cameraTilt.style.transform = 'rotateX(0deg) rotateZ(0deg)';

        if (!map.hasLayer(satLayer)) satLayer.addTo(map);
        if (wantHybrid && !map.hasLayer(labelsLayer)) labelsLayer.addTo(map);
    }
}

function updateCameraTilt(val) {
    settings.tilt = parseFloat(val);
    document.getElementById('val-cam-tilt').innerText = val;
    if(settings.renderMode === 'CSS') {
        dom.cameraTilt.style.transform = `rotateX(${val}deg) rotateZ(0deg)`;
    }
}

function updateCamDist(val) {
    settings.cesiumCamDist = parseFloat(val);
    document.getElementById('val-cam-dist').innerText = val;
}

function updateVehicleScale(val)   { settings.vehicleScale = parseFloat(val); document.getElementById('val-veh-size').innerText = val; }
function updateMapZoom(val)        { settings.mapZoom = parseFloat(val); document.getElementById('val-map-zoom').innerText = val; map.setZoom(settings.mapZoom); }
function updateCameraZoom(val)     { settings.cameraZoom = parseFloat(val); document.getElementById('val-cam-zoom').innerText = val; }

function updateVehicleVisuals() {
    const isPlane = state.vehicle === 'plane';
    let imgW = state.vehicle === 'car' ? 100 : state.vehicle === 'bus' ? 140 : 170;
    const imgTag = `<img src="${textures[state.vehicle]}" style="width:${imgW}px; height:auto; display:block;">`;
    dom.graphic.innerHTML       = imgTag;
    dom.cesiumGraphic.innerHTML = imgTag;

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
            // ArcGIS World Imagery — same source as Leaflet satellite layer
            imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
            }),
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

/**
 * tryEnableWorldTerrain — upgrades flat terrain to Cesium WorldTerrain
 * using CONFIG.CESIUM_ION. No-op if there's no viewer or no token saved.
 */
function tryEnableWorldTerrain() {
    if (!cesiumViewer || !CONFIG.CESIUM_ION) return;
    try {
        Cesium.Ion.defaultAccessToken = CONFIG.CESIUM_ION;
        Cesium.createWorldTerrain({ requestWaterMask: true }).then(tp => {
            if (!cesiumViewer) return;
            cesiumViewer.terrainProvider = tp;
            console.log('%c🌍 WorldTerrain enabled!', 'color:#22c55e;font-weight:bold');
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
 * ROLL FIX: `flight.roll` (radians) is passed directly to Cesium's camera
 * orientation `roll` parameter.  Cesium expects roll in radians, so no
 * conversion is needed.  This is the authoritative fix for the roll axis
 * in 3D mode.
 *
 * Camera model:
 *  - Ground vehicles: overhead follow cam at ~60° pitch behind the vehicle.
 *  - Plane: behind-and-above cam; pitch adjusts with flight.pitch; roll
 *    exactly matches flight.roll so the horizon banks correctly.
 */
function updateCesiumCamera() {
    if (!cesiumViewer) return;

    const isPlane    = state.vehicle === 'plane';
    const vehicleAltM = isPlane ? flight.alt * 0.3048 : 0;  // ft → m

    // ── Camera position: offset behind the vehicle ────────────────────────
    const hdgRad     = state.heading * (Math.PI / 180);
    const camDistDeg = settings.cesiumCamDist / 111320;     // metres → degrees (approx)

    // Ground camera pitch in degrees (negative = looking down)
    let camPitchDeg, camHeight;
    if (isPlane) {
        // Behind and slightly above: pitch follows flight.pitch
        camPitchDeg = -38 + flight.pitch * (180 / Math.PI) * 1.2;
        camHeight   = vehicleAltM + settings.cesiumCamDist * 0.55;
    } else {
        // Ground vehicle: tighter overhead follow
        camPitchDeg = -50;
        camHeight   = 180;
    }

    const camLat = state.lat - Math.cos(hdgRad) * camDistDeg;
    const camLng = state.lng - Math.sin(hdgRad) * camDistDeg;

    // ── ROLL: the core fix ────────────────────────────────────────────────
    // Cesium's camera.setView orientation.roll is in radians, matching
    // flight.roll exactly.  When the aircraft banks right (+roll), the
    // Cesium camera rolls right and the horizon tilts correctly.
    const camRoll = isPlane ? flight.roll : 0;

    cesiumViewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(camLng, camLat, camHeight),
        orientation: {
            heading: Cesium.Math.toRadians(state.heading),
            pitch:   Cesium.Math.toRadians(camPitchDeg),
            roll:    camRoll          // ← ROLL FIX — radians, direct from flight.roll
        }
    });
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

    // ── Render mode: Cesium ───────────────────────────────────────────────
    if (settings.renderMode === '3D' && cesiumViewer) {
        updateCesiumCamera();

        // Vehicle sprite on top of Cesium canvas
        let vRot       = state.headUp ? (state.heading - camHeading) : state.heading;
        let visualScale = settings.vehicleScale * (state.vehicle === 'plane' ? (1 + flight.alt / 3000) : 1);
        // In Cesium mode also apply roll visually to the sprite (subtle bank indicator)
        const spriteRoll = state.vehicle === 'plane' ? flight.roll * (180 / Math.PI) : 0;
        dom.cesiumGraphic.style.transform =
            `translate(-50%, -50%) rotate(${vRot}deg) rotateZ(${spriteRoll}deg) scale(${visualScale})`;

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
