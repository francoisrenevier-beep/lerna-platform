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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function IconFormations() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
}

function IconCatalogue() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )
}

function IconProgression() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  )
}

function IconRessources() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  )
}

function IconAttestations() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  )
}

function IconProfil() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
}

function IconLogout() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
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
    { href: "/dashboard",    label: "Accueil",         Icon: IconHome,         id: "dashboard"    },
    { href: "/formations",   label: "Mes formations",  Icon: IconFormations,   id: "formations"   },
    { href: "/catalogue",    label: "Catalogue",       Icon: IconCatalogue,    id: "catalogue"    },
    { href: "/progression",  label: "Ma progression",  Icon: IconProgression,  id: "progression"  },
    { href: "/ressources",   label: "Ressources",      Icon: IconRessources,   id: "ressources"   },
    { href: "/attestations", label: "Attestations",    Icon: IconAttestations, id: "attestations" },
    { href: "/profil",       label: "Mon profil",      Icon: IconProfil,       id: "profil"       },
  ]

  return (
    <aside className="hidden md:flex w-64 flex-col flex-shrink-0 min-h-screen bg-[#1e3a5f] border-r border-[#2a4a6f]">
      
      {/* Logo */}
      <div className="px-6 pt-6 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#3DBFA0] flex items-center justify-center shadow-lg shadow-[#3DBFA0]/20">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg tracking-tight">LEARNA</h1>
            <p className="text-xs text-white/50">Formation medicale</p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="mx-5 h-px bg-white/10" />

      {/* User greeting */}
      {prenom && (
        <div className="px-6 py-4">
          <p className="text-white/50 text-xs">Bienvenue,</p>
          <p className="text-white font-medium text-sm mt-0.5">{prenom}</p>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2">
        <p className="px-3 py-2 text-[10px] font-semibold text-white/40 uppercase tracking-widest">
          Navigation
        </p>
        <div className="space-y-1 mt-1">
          {liens.map(({ href, label, Icon, id }) => {
            const isActive = id === pageActive
            return (
              <a
                key={id}
                href={href}
                className={`
                  group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium 
                  transition-all duration-200
                  ${isActive 
                    ? "bg-[#3DBFA0]/15 text-white" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute left-0 w-1 h-6 rounded-r-full bg-[#3DBFA0]" />
                )}
                
                <span className={`flex-shrink-0 ${isActive ? "text-[#3DBFA0]" : "text-white/50 group-hover:text-white/70"}`}>
                  <Icon />
                </span>
                <span>{label}</span>
              </a>
            )
          })}
        </div>
      </nav>

      {/* Bottom section */}
      <div className="px-3 pb-4 space-y-3">
        {/* Separator */}
        <div className="mx-2 h-px bg-white/10" />
        
        {/* Institution */}
        {institution && (
          <div className="mx-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-[10px] font-semibold text-[#3DBFA0] uppercase tracking-wider">
              Institution
            </p>
            <p className="text-sm text-white font-medium mt-1">{institution}</p>
          </div>
        )}
        
        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
        >
          <IconLogout />
          <span>Se deconnecter</span>
        </button>
      </div>
    </aside>
  )
}
