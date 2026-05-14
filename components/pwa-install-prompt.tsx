"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "pwa-install-dismissed"
const DISMISS_DURATION_MS = 30 * 24 * 60 * 60 * 1000 // 30 jours

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false
  return /iphone|ipad|ipod/i.test(navigator.userAgent)
}

function isInStandaloneMode(): boolean {
  if (typeof window === "undefined") return false
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.navigator as any).standalone === true
  )
}

function wasDismissedRecently(): boolean {
  if (typeof localStorage === "undefined") return false
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return false
  return Date.now() - parseInt(stored, 10) < DISMISS_DURATION_MS
}

export function PWAInstallPrompt() {
  const [show, setShow] = useState(false)
  const [ios, setIos] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    if (isInStandaloneMode() || wasDismissedRecently()) return

    const iosDevice = isIOS()
    setIos(iosDevice)

    if (iosDevice) {
      // Sur iOS Safari, pas d'événement beforeinstallprompt — on affiche toujours le guide
      setShow(true)
      return
    }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShow(true)
    }

    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") setShow(false)
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString())
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-[#3DBFA0] bg-white shadow-lg">
      <div className="flex items-start gap-3 px-4 py-3 max-w-lg mx-auto">
        <img
          src="/icons/icon-192.png"
          alt="LEARNA"
          className="w-10 h-10 rounded-xl flex-shrink-0 mt-0.5"
        />
        <div className="flex-1 min-w-0">
          {ios ? (
            <>
              <p className="text-sm font-semibold text-[#1B2D5B]">
                Installez LEARNA sur votre écran d'accueil
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                Appuyez sur{" "}
                <span className="inline-flex items-center gap-0.5 font-medium text-[#1B2D5B]">
                  {/* Icône partage iOS */}
                  <svg
                    className="w-3.5 h-3.5 inline"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  Partager
                </span>{" "}
                puis{" "}
                <span className="font-medium text-[#1B2D5B]">
                  « Sur l'écran d'accueil »
                </span>
              </p>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-[#1B2D5B]">
                Installez LEARNA sur votre écran d'accueil
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                Accédez à vos formations même hors connexion.
              </p>
            </>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
          {!ios && deferredPrompt && (
            <button
              onClick={handleInstall}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors"
            >
              Installer
            </button>
          )}
          <button
            onClick={handleDismiss}
            aria-label="Fermer"
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
