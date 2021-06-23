self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll(['./', './index.html', './index.js', './g.png']);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request));
});
