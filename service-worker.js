self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("todo-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./1-20-26.css",
        "./1-20-26.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}