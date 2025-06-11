
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('agrinexus-cache').then(function(cache) {
      return cache.addAll(['./AgriNexusWorld_GlobalPWA_Final.html']);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
