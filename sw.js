const CACHE_NAME = "osebna-koda-casa-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./tzolkin.js",
  "./tzolkin-data.js",
  "./manifest.json",
  "./images/Belize-SantaRita-piramide.jpg"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        return response || fetch(event.request);

      })

  );

});