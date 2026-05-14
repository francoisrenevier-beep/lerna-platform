importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

workbox.setConfig({ debug: false });

// NetworkFirst pour Supabase (données fraîches prioritaires, cache si offline)
workbox.routing.registerRoute(
  /^https:\/\/twhmkvodgwbdeyseimrp\.supabase\.co\/.*/i,
  new workbox.strategies.NetworkFirst({
    cacheName: 'supabase-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 300,
      }),
    ],
  })
);

// CacheFirst pour les assets statiques (images, fonts, JS/CSS buildés)
workbox.routing.registerRoute(
  /\.(?:js|css|png|jpg|jpeg|svg|ico|woff|woff2)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'static-assets',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);

// NetworkFirst pour les pages HTML
workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.NetworkFirst({ cacheName: 'pages' })
);

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
