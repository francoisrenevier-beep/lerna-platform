"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export type ActivePage =
  | "dashboard"
  | "formations"
  | "catalogue"
  | "progression"
  | "attestations"
  | "profil"
  | "ressources"

// ── Icônes ────────────────────────────────────────────────────────────────────

function IconHome() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconFormations() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function IconCatalogue() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function IconProgression() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function IconRessources() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function IconAttestations() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

function IconProfil() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function IconLogout() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

// ── Items bottom bar (4 principaux) ───────────────────────────────────────────

const BOTTOM_ITEMS = [
  { href: "/dashboard",   label: "Accueil",    Icon: IconHome,        id: "dashboard"   },
  { href: "/formations",  label: "Formations", Icon: IconFormations,  id: "formations"  },
  { href: "/catalogue",   label: "Catalogue",  Icon: IconCatalogue,   id: "catalogue"   },
  { href: "/progression", label: "Progression",Icon: IconProgression, id: "progression" },
] as const

// ── Items du drawer (menu complet = sidebar) ──────────────────────────────────

const DRAWER_ITEMS = [
  { href: "/dashboard",    label: "Accueil",         Icon: IconHome,         id: "dashboard"    },
  { href: "/formations",   label: "Mes formations",   Icon: IconFormations,   id: "formations"   },
  { href: "/catalogue",    label: "Catalogue",        Icon: IconCatalogue,    id: "catalogue"    },
  { href: "/progression",  label: "Ma progression",   Icon: IconProgression,  id: "progression"  },
  { href: "/ressources",   label: "Ressources",       Icon: IconRessources,   id: "ressources"   },
  { href: "/attestations", label: "Attestations",     Icon: IconAttestations, id: "attestations" },
  { href: "/profil",       label: "Mon profil",       Icon: IconProfil,       id: "profil"       },
] as const

// Pages gérées par le bouton Menu (hors des 4 items principaux)
const MENU_PAGES: ActivePage[] = ["ressources", "attestations", "profil"]

// ── Composant ─────────────────────────────────────────────────────────────────

export function BottomNav({
  pageActive,
  institution,
}: {
  pageActive: ActivePage
  institution?: string
}) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const router = useRouter()

  // Bloque le scroll du body quand le drawer est ouvert
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [drawerOpen])

  const handleLogout = async () => {
    setDrawerOpen(false)
    await supabase.auth.signOut()
    router.push("/")
  }

  const isMenuActive = MENU_PAGES.includes(pageActive)

  return (
    <>
      {/* ── Bottom navigation bar ─────────────────────────────────────────── */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-white border-t border-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {BOTTOM_ITEMS.map(({ href, label, Icon, id }) => {
          const isActive = id === pageActive && !drawerOpen
          return (
            <a
              key={id}
              href={href}
              className="flex flex-1 flex-col items-center justify-center py-2 gap-0.5"
              style={{ color: isActive ? "#3DBFA0" : "#9CA3AF" }}
            >
              <Icon />
              <span className="text-[9px] font-medium leading-tight text-center">{label}</span>
            </a>
          )
        })}

        {/* Bouton Menu (3 traits) */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex flex-1 flex-col items-center justify-center py-2 gap-0.5"
          style={{ color: isMenuActive || drawerOpen ? "#3DBFA0" : "#9CA3AF" }}
          aria-label="Ouvrir le menu"
        >
          <IconMenu />
          <span className="text-[9px] font-medium leading-tight">Menu</span>
        </button>
      </nav>

      {/* ── Overlay ───────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ── Drawer (slide depuis la gauche) ───────────────────────────────── */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-[70] md:hidden w-72 flex flex-col transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "var(--learna-navy)" }}
        aria-modal="true"
        role="dialog"
      >
        {/* Header drawer */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <img
            src="/logo-learna-bleu.png"
            alt="LEARNA"
            className="h-12 object-contain"
          />
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-2 rounded-lg transition-colors"
            style={{ color: "rgba(255,255,255,0.6)" }}
            aria-label="Fermer le menu"
          >
            <IconClose />
          </button>
        </div>

        {/* Navigation complète */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {DRAWER_ITEMS.map(({ href, label, Icon, id }) => {
            const isActive = id === pageActive
            return (
              <a
                key={id}
                href={href}
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-100"
                style={
                  isActive
                    ? {
                        backgroundColor: "rgba(61,191,160,0.15)",
                        color: "#ffffff",
                        borderLeft: "3px solid #3DBFA0",
                        paddingLeft: "calc(0.75rem - 3px)",
                      }
                    : {
                        color: "rgba(255,255,255,0.62)",
                        borderLeft: "3px solid transparent",
                        paddingLeft: "calc(0.75rem - 3px)",
                      }
                }
              >
                <span className="flex-shrink-0 opacity-90">
                  <Icon />
                </span>
                <span>{label}</span>
              </a>
            )
          })}
        </nav>

        {/* Institution + déconnexion */}
        <div
          className="px-3 pb-6 space-y-2 border-t pt-3 flex-shrink-0"
          style={{ borderColor: "rgba(255,255,255,0.08)", paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
          {institution && (
            <div
              className="px-3 py-2.5 rounded-lg"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>
                Institution
              </p>
              <p style={{ fontSize: 12, color: "#ffffff", fontWeight: 600 }}>{institution}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all duration-100"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <IconLogout />
            <span>Se déconnecter</span>
          </button>
        </div>
      </div>
    </>
  )
}
