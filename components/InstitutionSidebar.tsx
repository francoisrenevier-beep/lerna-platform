"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type InstitutionSidebarProps = {
  pageActive: "dashboard" | "collaborateurs" | "statistiques" | "profil"
  institution?: string
}

export function InstitutionSidebar({ pageActive, institution }: InstitutionSidebarProps) {
  const router = useRouter()

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

  return (
    <aside className="w-64 bg-[#1B2D5B] text-white flex flex-col flex-shrink-0">
      <div className="bg-white border-b border-white/20">
        <img src="/logo-lerna360-blanc.png" alt="LERNA360" className="w-full h-auto" />
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {liens.map(function(lien) {
          const estActif = lien.id === pageActive
          return (
            <a
              key={lien.id}
              href={lien.href}
              className={
                "flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors " +
                (estActif
                  ? "bg-[#3DBFA0]/20 text-white font-medium border border-[#3DBFA0]/30"
                  : "text-white/70 hover:bg-white/10 hover:text-white")
              }
            >
              {lien.label}
            </a>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-3">
        {institution && (
          <div className="px-3 py-2.5 bg-[#3DBFA0]/10 rounded-lg border border-[#3DBFA0]/20">
            <p className="text-xs text-white/50 uppercase tracking-wide mb-0.5">Institution</p>
            <p className="text-sm text-white font-semibold truncate">{institution}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
        >
          → Se déconnecter
        </button>
      </div>
    </aside>
  )
}
