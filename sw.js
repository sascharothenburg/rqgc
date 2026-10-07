/* Rieselzeit – Service Worker: speichert alle App-Dateien für die Offline-Nutzung.
   Bei jeder Änderung an der App VERSION erhöhen, damit Geräte die neue Fassung laden. */
const VERSION = "rieselzeit-v2";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "lib/three.min.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-192.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "fonts/gloock-latin-400-normal.woff2",
  "fonts/manrope-latin-300-normal.woff2",
  "fonts/manrope-latin-400-normal.woff2",
  "fonts/manrope-latin-500-normal.woff2",
  "fonts/manrope-latin-600-normal.woff2",
  "fonts/manrope-latin-700-normal.woff2"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("rieselzeit-") && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Sofort aus dem Speicher antworten, im Hintergrund still aktualisieren. */
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  const isPage = req.mode === "navigate";
  event.respondWith(
    caches.open(VERSION).then((cache) =>
      cache.match(isPage ? "index.html" : req, { ignoreSearch: isPage }).then((hit) => {
        const update = fetch(req).then((res) => {
          if (res && res.ok && !isPage) cache.put(req, res.clone());
          if (res && res.ok && isPage) cache.put("index.html", res.clone());
          return res;
        }).catch(() => hit);
        return hit || update;
      })
    )
  );
});
