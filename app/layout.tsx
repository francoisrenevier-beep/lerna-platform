import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PWAInstallPrompt } from '@/components/pwa-install-prompt'
import { ServiceWorkerRegister } from '@/components/service-worker-register'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1B2D5B',
}

export const metadata: Metadata = {
  title: 'LEARNA - Ancrer les compétences sur le terrain',
  description: 'LEARNA propose aux institutions du travail social des parcours de formation en ligne, conçus pour les professionnels du handicap, de l\'éducation spécialisée et de l\'accompagnement social.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/icons/icon-192.png',
    shortcut: '/icons/icon-192.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'LEARNA',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        {/* Splash screens iOS — fond navy #1B2D5B */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3)"
          href="/icons/splash-1290x2796.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)"
          href="/icons/splash-1179x2556.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
          href="/icons/splash-1170x2532.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
          href="/icons/splash-1125x2436.png"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <PWAInstallPrompt />
        <ServiceWorkerRegister />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
