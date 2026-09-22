// Bumped with the app version. App files are fetched network-first, so an
// update normally arrives without this — but renaming the cache makes the
// activate handler bin the old one outright, which is the difference between
// "should be fine" and "cannot possibly serve you last week's build".
const CACHE = 'expendiq-v3.1';

// CDN assets — version-pinned, never change → cache-first is safe
const CDN_ASSETS = [
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

// Required app files — change on every deploy → network-first so updates
// are instant. These must exist; if one is missing the install should fail.
const APP_FILES = [
  './expense-tracker.html',
  './manifest.json'
];

// Optional: firebase-config.js is gitignored, so a Git-based deploy simply
// does not have it and the app falls back to pasting the config in. It still
// wants network-first treatment when it IS there, but it must never be part
// of the atomic install — see below.
const OPTIONAL_FILES = [
  './firebase-config.js'
];

// Everything the fetch handler should treat as an app file
const NETWORK_FIRST = [...APP_FILES, ...OPTIONAL_FILES];

// addAll() is atomic: one 404 rejects the whole promise, the install fails,
// and nothing is cached at all. Listing firebase-config.js here meant every
// Git-based deploy — where that file is gitignored and so absent — installed
// no service worker whatsoever: no offline support, and because activate
// never ran, every old cache stayed behind for good. Required files go in
// atomically; optional ones are attempted individually and allowed to fail.
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(APP_FILES);
    await Promise.all(
      [...OPTIONAL_FILES, ...CDN_ASSETS].map(f => c.add(f).catch(() => {}))
    );
  })());
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // CDN assets → cache-first (they're immutable at this URL)
  if (CDN_ASSETS.some(a => url.startsWith(a))) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res && res.status === 200) {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        });
      })
    );
    return;
  }

  // App files → network-first (always get latest when online)
  if (NETWORK_FIRST.some(f => url.includes(f.replace('./', '')))) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.status === 200 && e.request.method === 'GET') {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match(e.request)) // offline fallback
    );
    return;
  }

  // Everything else → cache-first with network fallback
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && e.request.method === 'GET') {
          caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => cached);
    })
  );
});

self.addEventListener('message', e => {
  if (e.data?.type === 'SCHEDULE_NOTIFICATION') {
    const { delay, title, body } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, { body, icon: './icon-192.png' });
    }, delay);
  }
});
