importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

workbox.setConfig({ debug: false });

// NetworkFirst pour Supabase (données fraîches prioritaires, fallback cache si offline)
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

// StaleWhileRevalidate pour les assets statiques
// (sert le cache immédiatement, met à jour en arrière-plan — les nouvelles icônes sont prises en compte)
workbox.routing.registerRoute(
  /\.(?:js|css|png|jpg|jpeg|svg|ico|woff|woff2)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-assets-v2',
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

// Sur activation : supprimer les anciens caches (static-assets sans -v2)
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k === 'static-assets') // ancienne version du cache
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});
