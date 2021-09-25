self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll(['./', './index.html', './index.js', './g.png', './style.css']);
    }),
  );
});

self.addEventListener('fetch', (event) => {
   event.respondWith(async function() {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;
    return fetch(event.request);
  }());
});

