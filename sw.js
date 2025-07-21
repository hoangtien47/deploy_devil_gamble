const CACHE_NAME = 'balatro-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Build/Build.data',
  '/Build/Build.framework.js',
  '/Build/Build.wasm',
  '/Build/Build.loader.js',
    '/icons/card10.png'

  // Add other assets like icons, sounds, etc. if needed
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response || fetch(event.request)
    )
  );
});
