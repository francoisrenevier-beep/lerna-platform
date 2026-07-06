"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type SidebarProps = {
  pageActive: "dashboard" | "formations" | "catalogue" | "progression" | "attestations" | "profil" | "ressources"
  institution?: string
  prenom?: string
}

// ── Icônes SVG inline ──────────────────────────────────────────────────────────

function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function IconFormations() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
}

function IconCatalogue() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )
}

function IconProgression() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}

function IconRessources() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  )
}

function IconAttestations() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
}

function IconProfil() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function IconLogout() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  )
}

function IconChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  )
}

function IconChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  )
}

const STORAGE_KEY = "lerna_sidebar_collapsed"

export function Sidebar({ pageActive, institution }: SidebarProps) {
  const router = useRouter()
  const [estResponsable, setEstResponsable] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "true") setCollapsed(true)
    setMounted(true)
  }, [])

  const toggleCollapsed = () => {
    const next = !collapsed
    setCollapsed(next)
    localStorage.setItem(STORAGE_KEY, String(next))
  }

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) return
      supabase
        .from("institution_profils")
        .select("role")
        .eq("profil_id", data.user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()
        .then(({ data: ip }) => {
          if (ip?.role === "responsable") setEstResponsable(true)
        })
    })
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const liens = [
    { href: "/dashboard",    label: "Accueil",        Icon: IconHome,         id: "dashboard"    },
    { href: "/catalogue",    label: "Catalogue",       Icon: IconCatalogue,    id: "catalogue"    },
    { href: "/formations",   label: "Mes formations",  Icon: IconFormations,   id: "formations"   },
    { href: "/ressources",   label: "Ressources",      Icon: IconRessources,   id: "ressources"   },
    { href: "/attestations", label: "Attestations",    Icon: IconAttestations, id: "attestations" },
    { href: "/progression",  label: "Ma progression",  Icon: IconProgression,  id: "progression"  },
    { href: "/profil",       label: "Mon profil",      Icon: IconProfil,       id: "profil"       },
  ]

  // Avoid layout shift on first render by using a neutral initial width
  const sidebarWidth = !mounted ? 256 : collapsed ? 64 : 256

  return (
    <div
      className="hidden md:block flex-shrink-0"
      style={{ width: sidebarWidth, transition: "width 0.25s ease" }}
    >
    <aside
      className="fixed top-0 left-0 flex flex-col overflow-y-auto overflow-x-hidden"
      style={{
        backgroundColor: "var(--learna-navy)",
        width: sidebarWidth,
        height: "100vh",
        transition: "width 0.25s ease",
        zIndex: 40,
      }}
    >
      {/* Logo */}
      <div
        className="border-b flex-shrink-0"
        style={{ borderColor: "rgba(255,255,255,0.08)", overflow: "hidden" }}
      >
        {collapsed ? (
          <div className="flex items-center justify-center py-4">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ backgroundColor: "#3DBFA0", color: "#ffffff" }}
            >
              L
            </div>
          </div>
        ) : (
          <img
            src="/logo-learna-bleu.png"
            alt="LEARNA"
            className="w-full block"
            style={{ display: "block" }}
          />
        )}
      </div>

      {/* Sélecteur de vue (responsables uniquement) */}
      {estResponsable && !collapsed && (
        <div className="px-3 pt-3 pb-1 flex-shrink-0">
          <div className="flex rounded-lg p-0.5 gap-0.5" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            <span
              className="flex-1 text-center text-xs font-semibold py-1.5 px-2 rounded-md select-none"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff" }}
            >
              Mon espace
            </span>
            <a
              href="/institution/dashboard"
              className="flex-1 text-center text-xs font-medium py-1.5 px-2 rounded-md transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.1)"
                ;(e.currentTarget as HTMLElement).style.color = "#ffffff"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"
                ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"
              }}
            >
              Vue RH
            </a>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-0.5">
        {liens.map(({ href, label, Icon, id }) => {
          const isActive = id === pageActive
          return (
            <a
              key={id}
              href={href}
              title={collapsed ? label : undefined}
              className="flex items-center gap-3 rounded-lg text-sm font-medium transition-all duration-100"
              style={
                isActive
                  ? {
                      backgroundColor: "rgba(61,191,160,0.15)",
                      color: "#ffffff",
                      borderLeft: "3px solid #3DBFA0",
                      padding: collapsed ? "0.625rem 0" : "0.625rem calc(0.75rem - 3px)",
                      justifyContent: collapsed ? "center" : undefined,
                    }
                  : {
                      color: "rgba(255,255,255,0.62)",
                      borderLeft: "3px solid transparent",
                      padding: collapsed ? "0.625rem 0" : "0.625rem calc(0.75rem - 3px)",
                      justifyContent: collapsed ? "center" : undefined,
                    }
              }
              onMouseEnter={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"
                  ;(e.currentTarget as HTMLElement).style.color = "#ffffff"
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"
                  ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.62)"
                }
              }}
            >
              <span className="flex-shrink-0 opacity-90"><Icon /></span>
              {!collapsed && <span>{label}</span>}
            </a>
          )
        })}
      </nav>

      {/* Institution + déconnexion */}
      <div className="px-2 pb-3 space-y-1 border-t pt-3 flex-shrink-0" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        {institution && !collapsed && (
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
          title={collapsed ? "Se déconnecter" : undefined}
          className="w-full flex items-center gap-2.5 rounded-lg text-sm transition-all duration-100"
          style={{
            color: "rgba(255,255,255,0.45)",
            padding: collapsed ? "0.625rem 0" : "0.625rem 0.75rem",
            justifyContent: collapsed ? "center" : undefined,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)"
            ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"
            ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"
          }}
        >
          <IconLogout />
          {!collapsed && <span>Se déconnecter</span>}
        </button>

        {/* Bouton masquer/afficher */}
        <button
          onClick={toggleCollapsed}
          title={collapsed ? "Afficher le menu" : "Masquer le menu"}
          className="w-full flex items-center gap-2 rounded-lg text-xs transition-all duration-100"
          style={{
            color: "rgba(255,255,255,0.3)",
            padding: collapsed ? "0.5rem 0" : "0.5rem 0.75rem",
            justifyContent: collapsed ? "center" : undefined,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.06)"
            ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"
            ;(e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)"
          }}
        >
          {collapsed ? <IconChevronRight /> : <IconChevronLeft />}
          {!collapsed && <span>Masquer</span>}
        </button>
      </div>
    </aside>
    </div>
  )
}
