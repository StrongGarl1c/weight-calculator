self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll(['./', './index.html', './index.js', './g.png', './style.css']);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(async () => await caches.match(event.request));
});
