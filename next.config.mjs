import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/twhmkvodgwbdeyseimrp\.supabase\.co\/.*/i,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'supabase-cache',
        expiration: { maxEntries: 50, maxAgeSeconds: 300 },
      },
    },
  ],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium-min'],
}

export default withPWA(nextConfig)
