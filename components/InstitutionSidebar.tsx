"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type InstitutionSidebarProps = {
  pageActive: "dashboard" | "collaborateurs" | "statistiques" | "profil"
  institution?: string
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

export function InstitutionSidebar({ pageActive, institution }: InstitutionSidebarProps) {
  const router = useRouter()
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

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const liens = [
    { href: "/institution/dashboard",      label: "Tableau de bord",    id: "dashboard"      },
    { href: "/institution/collaborateurs", label: "Mes collaborateurs", id: "collaborateurs" },
    { href: "/institution/statistiques",   label: "Statistiques",       id: "statistiques"   },
    { href: "/profil",                     label: "Mon profil",          id: "profil"         },
  ]

  const sidebarWidth = !mounted ? 256 : collapsed ? 64 : 256

  return (
    <div
      className="hidden md:block flex-shrink-0"
      style={{ width: sidebarWidth, transition: "width 0.25s ease" }}
    >
    <aside
      className="fixed top-0 left-0 flex flex-col overflow-y-auto overflow-x-hidden"
      style={{
        backgroundColor: "#1B2D5B",
        color: "white",
        width: sidebarWidth,
        height: "100vh",
        transition: "width 0.25s ease",
        zIndex: 40,
      }}
    >
      {/* Logo */}
      <div className="bg-white border-b border-white/20 flex-shrink-0" style={{ overflow: "hidden" }}>
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
          <img src="/logo-learna-blanc.png" alt="LEARNA" className="w-full h-auto" />
        )}
      </div>

      {/* Sélecteur de vue */}
      {!collapsed && (
        <div className="px-4 pt-3 pb-1 flex-shrink-0">
          <div className="flex rounded-lg bg-white/10 p-0.5 gap-0.5">
            <span className="flex-1 text-center text-xs font-semibold py-1.5 px-2 rounded-md bg-[#3DBFA0] text-white select-none">
              Vue RH
            </span>
            <a
              href="/dashboard"
              className="flex-1 text-center text-xs font-medium py-1.5 px-2 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              Mon espace
            </a>
          </div>
        </div>
      )}

      <nav className="flex-1 px-2 py-4 space-y-1">
        {liens.map(function(lien) {
          const estActif = lien.id === pageActive
          return (
            <a
              key={lien.id}
              href={lien.href}
              title={collapsed ? lien.label : undefined}
              className={
                "flex items-center rounded-lg text-sm transition-colors " +
                (estActif
                  ? "bg-[#3DBFA0]/20 text-white font-medium border border-[#3DBFA0]/30"
                  : "text-white/70 hover:bg-white/10 hover:text-white")
              }
              style={{
                padding: collapsed ? "0.625rem 0" : "0.625rem 0.75rem",
                justifyContent: collapsed ? "center" : undefined,
              }}
            >
              {collapsed ? (
                <span className="text-base font-bold">{lien.label[0]}</span>
              ) : (
                lien.label
              )}
            </a>
          )
        })}
      </nav>

      <div className="px-2 pb-3 border-t border-white/10 pt-3 space-y-1 flex-shrink-0">
        {institution && !collapsed && (
          <div className="px-3 py-2.5 bg-[#3DBFA0]/10 rounded-lg border border-[#3DBFA0]/20">
            <p className="text-xs text-white/50 uppercase tracking-wide mb-0.5">Institution</p>
            <p className="text-sm text-white font-semibold truncate">{institution}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          title={collapsed ? "Se déconnecter" : undefined}
          className="w-full text-left rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
          style={{
            padding: collapsed ? "0.625rem 0" : "0.625rem 0.75rem",
            textAlign: collapsed ? "center" : undefined,
          }}
        >
          {collapsed ? "→" : "→ Se déconnecter"}
        </button>

        {/* Bouton masquer/afficher */}
        <button
          onClick={toggleCollapsed}
          title={collapsed ? "Afficher le menu" : "Masquer le menu"}
          className="w-full flex items-center gap-2 rounded-lg text-xs transition-all duration-100 text-white/30 hover:bg-white/06 hover:text-white/70"
          style={{
            padding: collapsed ? "0.5rem 0" : "0.5rem 0.75rem",
            justifyContent: collapsed ? "center" : undefined,
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
