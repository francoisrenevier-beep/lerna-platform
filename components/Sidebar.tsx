"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type SidebarProps = {
  pageActive: "dashboard" | "formations" | "catalogue" | "progression" | "attestations" | "profil" | "ressources"
  institution?: string
  prenom?: string
}

// ── Icones SVG inline ──────────────────────────────────────────────────────────

function IconHome() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function IconFormations() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
}

function IconCatalogue() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )
}

function IconProgression() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}

function IconRessources() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  )
}

function IconAttestations() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
}

function IconProfil() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function IconLogout() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  )
}

function IconChevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  )
}

export function Sidebar({ pageActive, institution, prenom }: SidebarProps) {
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
      className="hidden md:flex w-72 flex-col flex-shrink-0 min-h-screen relative overflow-hidden"
      style={{ 
        background: "linear-gradient(180deg, #1e3a5f 0%, #152c47 50%, #0f2035 100%)",
      }}
    >
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow effect at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #3DBFA0 0%, transparent 70%)" }}
      />

      {/* Logo section */}
      <div className="relative z-10 px-5 pt-6 pb-5">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ 
              background: "linear-gradient(135deg, #3DBFA0 0%, #2da88a 100%)",
              boxShadow: "0 4px 12px rgba(61, 191, 160, 0.3)",
            }}
          >
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg tracking-tight">LEARNA</h1>
            <p className="text-[11px] text-white/40 font-medium tracking-wide">Formation medicale</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mx-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* User greeting */}
      {prenom && (
        <div className="relative z-10 px-5 py-4">
          <p className="text-white/50 text-xs font-medium">Bienvenue,</p>
          <p className="text-white font-semibold text-sm mt-0.5">{prenom}</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-10 flex-1 px-3 py-2 space-y-1">
        <p className="px-3 py-2 text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em]">
          Navigation
        </p>
        {liens.map(({ href, label, Icon, id }) => {
          const isActive = id === pageActive
          return (
            <a
              key={id}
              href={href}
              className={`
                group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium 
                transition-all duration-200 relative overflow-hidden
                ${isActive ? "text-white" : "text-white/60 hover:text-white"}
              `}
              style={
                isActive
                  ? {
                      background: "linear-gradient(135deg, rgba(61,191,160,0.2) 0%, rgba(61,191,160,0.1) 100%)",
                      boxShadow: "0 2px 8px rgba(61,191,160,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }
                  : {}
              }
            >
              {/* Active indicator bar */}
              {isActive && (
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                  style={{ background: "linear-gradient(180deg, #3DBFA0 0%, #2da88a 100%)" }}
                />
              )}
              
              {/* Hover background */}
              <div 
                className={`
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  ${isActive ? "hidden" : ""}
                `}
                style={{ background: "rgba(255,255,255,0.05)" }}
              />
              
              {/* Icon container */}
              <span 
                className={`
                  relative flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                  transition-all duration-200
                  ${isActive 
                    ? "text-white" 
                    : "text-white/50 group-hover:text-white/80"
                  }
                `}
                style={isActive ? {
                  background: "linear-gradient(135deg, rgba(61,191,160,0.3) 0%, rgba(61,191,160,0.15) 100%)",
                } : {}}
              >
                <Icon />
              </span>
              
              <span className="relative flex-1">{label}</span>
              
              {/* Chevron for active */}
              {isActive && (
                <span className="relative text-emerald-400/70">
                  <IconChevron />
                </span>
              )}
            </a>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="relative z-10 px-3 pb-4 space-y-3">
        {/* Divider */}
        <div className="mx-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Institution card */}
        {institution && (
          <div
            className="mx-1 px-4 py-3 rounded-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Subtle glow */}
            <div 
              className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-30 blur-2xl pointer-events-none"
              style={{ background: "#3DBFA0" }}
            />
            <p 
              className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-1"
              style={{ color: "rgba(61,191,160,0.8)" }}
            >
              Institution
            </p>
            <p className="text-[13px] text-white font-semibold relative">{institution}</p>
          </div>
        )}
        
        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="
            group w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] font-medium
            text-white/40 hover:text-white/80 transition-all duration-200 relative overflow-hidden
          "
        >
          {/* Hover background */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: "rgba(239,68,68,0.1)" }}
          />
          <span className="relative flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center group-hover:text-red-400/80 transition-colors">
            <IconLogout />
          </span>
          <span className="relative group-hover:text-red-400/80 transition-colors">Se deconnecter</span>
        </button>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(15,32,53,0.5) 0%, transparent 100%)" }}
      />
    </aside>
  )
}
