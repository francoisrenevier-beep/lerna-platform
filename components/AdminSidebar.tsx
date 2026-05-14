"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type PageActive = "dashboard" | "institutions" | "formations" | "ressources" | "evaluations" | "demandes-demo" | "profil"

type AdminSidebarProps = {
  pageActive: PageActive
}

export function AdminSidebar({ pageActive }: AdminSidebarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const liens = [
    { href: "/admin/dashboard", label: "Tableau de bord", id: "dashboard" },
    { href: "/admin/institutions", label: "Institutions", id: "institutions" },
    { href: "/admin/formations", label: "Formations", id: "formations" },
    { href: "/admin/ressources", label: "Ressources", id: "ressources" },
    { href: "/admin/evaluations", label: "Évaluations", id: "evaluations" },
    { href: "/admin/demandes-demo", label: "Demandes de démo", id: "demandes-demo" },
    { href: "/profil", label: "Mon profil", id: "profil" },
  ]

  return (
    <aside className="w-64 bg-[#1B2D5B] text-white flex flex-col flex-shrink-0 min-h-screen">
      <div className="bg-white border-b border-white/20">
        <img src="/logo-learna-blanc.png" alt="LEARNA" className="w-full h-auto" />
      </div>

      <div className="px-4 py-3 border-b border-white/10">
        <span className="inline-flex items-center gap-1.5 bg-[#3DBFA0]/20 border border-[#3DBFA0]/40 text-[#3DBFA0] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Super Admin
        </span>
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

      <div className="p-4 border-t border-white/10">
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
