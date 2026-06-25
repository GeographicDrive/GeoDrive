const CACHE_NAME = 'geodrive-cache-v1';

// 1. FIXED PATHS: Updated to match the actual root directory structure of your repo
const APP_SHELL_FILES = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icon-512.png'
];

// 2. INSTALL EVENT: Cache the App Shell
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching App Shell');
      
      // FIX: Use Promise.allSettled instead of cache.addAll().
      // If one file 404s, the old code broke the entire installation. 
      // This ensures the SW activates even if a file is missing.
      return Promise.allSettled(
        APP_SHELL_FILES.map((url) => 
          cache.add(url).catch(err => {
            console.warn(`[Service Worker] Failed to cache: ${url}`, err);
          })
        )
      );
    })
  );
  self.skipWaiting(); // Activate immediately without waiting for a refresh
});

// 3. ACTIVATE EVENT: Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of the page immediately
});

// 4. FETCH EVENT: Serve content intelligently
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 5. FIXED REGEX: 
  // - Escaped the dot (\.) so it doesn't match any character.
  // - Removed backslashes from pipes (|) so it acts as an OR operator.
  // - Fixed the invalid (?.*) group to a valid optional group (\?.*)
  // - Added Cesium 3D tile extensions (b3dm, pnts, i3dm, cmpt)
  const isAsset = /\.(png|jpg|jpeg|webp|svg|terrain|layer|b3dm|pnts|i3dm|cmpt)(\?.*)?$/i.test(url.pathname);

  // STRATEGY A: Cache First (For Map Tiles, 3D Models, Images, CSS, JS)
  // This makes the map load instantly and allows offline viewing of previously seen areas.
  if (isAsset || event.request.destination === 'image' || event.request.destination === 'style' || event.request.destination === 'script') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(event.request).then((networkResponse) => {
          // Only cache successful, same-origin responses
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Fallback if offline and not in cache
          return new Response('', { status: 404, statusText: 'Not found' });
        });
      })
    );
    return;
  }

  // STRATEGY B: Network First (For HTML and API calls)
  // Always tries to get the latest HTML/manifest, but falls back to cache if offline.
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
      })
  );
});
