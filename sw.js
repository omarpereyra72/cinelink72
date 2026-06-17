// CINELINK 72 — Service Worker v1.1
const CACHE_VERSION = 'cinelink72-v1.1';
const FONT_CACHE = 'cinelink72-fonts-v1';

const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/peliculas/microcine.html',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/peliculas/imagenes/pleno_sol.svg',
  '/peliculas/imagenes/angel_azul.svg',
  '/peliculas/imagenes/ninos_cielo.svg',
  '/peliculas/imagenes/fahrenheit.svg',
  '/peliculas/imagenes/hombre_mujer.svg',
  '/peliculas/imagenes/juegos_prohib.svg',
  '/peliculas/imagenes/strada.svg',
  '/peliculas/imagenes/ladron_bici.svg',
  '/peliculas/imagenes/grande_illusion.svg',
  '/peliculas/imagenes/noche.svg',
  '/peliculas/imagenes/400_golpes.svg',
  '/peliculas/imagenes/chaplin_kid.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names.filter(n => n !== CACHE_VERSION && n !== FONT_CACHE)
             .map(n => caches.delete(n))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(event.request, FONT_CACHE));
    return;
  }
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(event.request, CACHE_VERSION));
    return;
  }
});

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const fallback = await caches.match('/index.html');
    return fallback || new Response('Sin conexión', { status: 503 });
  }
}

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});
