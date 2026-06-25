// --- CONFIGURACIÓN ---
const APP_CACHE_NAME = 'geodrive-app-v1';
const TILE_CACHE_NAME = 'geodrive-tiles-v1';
const MAX_TILES_LIMIT = 2000; // Límite de mosaicos de mapa para no saturar el disco

// Archivos esenciales para que la app cargue (App Shell)
const APP_SHELL_FILES = [
    '/',
    '/index.html',
    '/manifest.json',
    '/css/style.css', // Ajusta las rutas según tu estructura
    '/js/app.js',
    '/js/cesium-helper.js',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// --- INSTALACIÓN: Precarga el App Shell ---
self.addEventListener('install', (event) => {
    console.log('[SW] Instalando y precargando App Shell...');
    event.waitUntil(
        caches.open(APP_CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL_FILES))
            .then(() => self.skipWaiting()) // Activa el nuevo SW inmediatamente
    );
});

// --- ACTIVACIÓN: Limpia cachés antiguas ---
self.addEventListener('activate', (event) => {
    console.log('[SW] Activando y limpiando cachés obsoletas...');
    const currentCaches = [APP_CACHE_NAME, TILE_CACHE_NAME];
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!currentCaches.includes(cacheName)) {
                        console.log('[SW] Borrando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Toma el control de todas las pestañas abiertas
    );
});

// --- INTERCEPCIÓN DE PETICIONES (FETCH) ---
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // 1. ESTRATEGIA: API y Rutas (Network First)
    // Para OSRM (rutas) y Nominatim (búsquedas). Siempre busca en red, si falla, usa caché.
    if (url.hostname.includes('router.project-osrm.org') || 
        url.hostname.includes('nominatim.openstreetmap.org') ||
        url.pathname.includes('/route') || url.pathname.includes('/search')) {
        event.respondWith(networkFirstStrategy(event.request));
        return;
    }

    // 2. ESTRATEGIA: Mosaicos de Mapas y Cesium (Cache First + Expiración)
    // Para OpenStreetMap, Satélites, y trabajadores de Cesium.
    if (isTileOrCesiumRequest(url)) {
        event.respondWith(tileCacheStrategy(event.request));
        return;
    }

    // 3. ESTRATEGIA: App Shell y Archivos Estáticos (Cache First)
    // Para HTML, CSS, JS, Iconos.
    event.respondWith(cacheFirstStrategy(event.request, APP_CACHE_NAME));
});


// --- IMPLEMENTACIÓN DE ESTRATEGIAS ---

// A. Cache First (Para la estructura de la app)
async function cacheFirstStrategy(request, cacheName) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
        return cachedResponse;
    }
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        return new Response('Recurso no disponible offline', { status: 503, statusText: 'Service Unavailable' });
    }
}

// B. Network First (Para APIs de rutas y geocodificación)
async function networkFirstStrategy(request) {
    const cache = await caches.open(APP_CACHE_NAME);
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }
        return new Response(JSON.stringify({ error: 'Sin conexión y sin datos en caché' }), { 
            status: 503, 
            headers: { 'Content-Type': 'application/json' } 
        });
    }
}

// C. Cache First con Límite (Para Mapas y Cesium)
async function tileCacheStrategy(request) {
    const cache = await caches.open(TILE_CACHE_NAME);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
        // Truco LRU: Al volver a guardar la respuesta, la movemos al "final" de la lista
        cache.put(request, cachedResponse.clone());
        return cachedResponse;
    }

    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            await cache.put(request, networkResponse.clone());
            // Limpia los mosaicos más antiguos si superamos el límite
            cleanTileCache(cache);
        }
        return networkResponse;
    } catch (error) {
        return new Response('', { status: 404, statusText: 'Not Found' });
    }
}

// --- FUNCIONES AUXILIARES ---

function isTileOrCesiumRequest(url) {
    // Detecta imágenes de mapas (png, jpg, webp) o peticiones a servidores de Cesium/OSM
    const isImage = /\.(png|jpg|jpeg|webp|svg|terrain|layer)(\?.*)?$/i.test(url.pathname);
    const isCesium = url.hostname.includes('cesium.com') || url.hostname.includes('assets.ion.cesium.com');
    const isOSM = url.hostname.includes('tile.openstreetmap.org') || url.hostname.includes('tile.openstreetmap.fr');
    
    return isImage || isCesium || isOSM;
}

async function cleanTileCache(cache) {
    const keys = await cache.keys();
    if (keys.length > MAX_TILES_LIMIT) {
        // Calcula cuántos borrar (los más antiguos están al principio del array)
        const itemsToDelete = keys.slice(0, keys.length - MAX_TILES_LIMIT);
        await Promise.all(itemsToDelete.map(req => cache.delete(req)));
    }
}

// --- MENSAJERÍA (Opcional: Para limpiar caché desde el frontend) ---
self.addEventListener('message', (event) => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
    if (event.data.action === 'clearTileCache') {
        caches.delete(TILE_CACHE_NAME).then(() => console.log('[SW] Caché de mapas limpiada'));
    }
});
