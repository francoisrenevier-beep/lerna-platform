"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type SidebarProps = {
  pageActive: "dashboard" | "formations" | "catalogue" | "progression" | "attestations" | "profil" | "ressources"
  institution?: string
  prenom?: string
  estResponsable?: boolean
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

export function Sidebar({ pageActive, institution, estResponsable }: SidebarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const liens = [
    { href: "/dashboard",    label: "Accueil",        Icon: IconHome,         id: "dashboard"    },
    { href: "/formations",   label: "Mes formations",  Icon: IconFormations,   id: "formations"   },
    { href: "/catalogue",    label: "Catalogue",       Icon: IconCatalogue,    id: "catalogue"    },
    { href: "/progression",  label: "Ma progression",  Icon: IconProgression,  id: "progression"  },
    { href: "/ressources",   label: "Ressources",      Icon: IconRessources,   id: "ressources"   },
    { href: "/attestations", label: "Attestations",    Icon: IconAttestations, id: "attestations" },
    { href: "/profil",       label: "Mon profil",      Icon: IconProfil,       id: "profil"       },
  ]

  return (
    <aside
      className="hidden md:flex w-64 flex-col flex-shrink-0 min-h-screen"
      style={{ backgroundColor: "var(--learna-navy)" }}
    >
      {/* Logo */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <img
          src="/logo-learna-bleu.png"
          alt="LEARNA"
          className="w-full block"
          style={{ display: "block" }}
        />
      </div>

      {/* Sélecteur de vue (responsables uniquement) */}
      {estResponsable && (
        <div className="px-3 pt-3 pb-1">
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
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {liens.map(({ href, label, Icon, id }) => {
          const isActive = id === pageActive
          return (
            <a
              key={id}
              href={href}
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
              <span>{label}</span>
            </a>
          )
        })}
      </nav>

      {/* Institution + déconnexion */}
      <div className="px-3 pb-4 space-y-2 border-t pt-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
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
          <span>Se déconnecter</span>
        </button>
      </div>
    </aside>
  )
}
