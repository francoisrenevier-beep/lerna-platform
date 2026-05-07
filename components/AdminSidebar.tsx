"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type AdminSidebarProps = {
  pageActive: "dashboard" | "evaluations"
}

export function AdminSidebar({ pageActive }: AdminSidebarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const liens = [
    { href: "/admin/dashboard", label: "Tableau de bord", id: "dashboard" },
    { href: "/admin/evaluations", label: "Évaluations", id: "evaluations" },
  ]

  return (
    <aside className="w-64 bg-[#1B2D5B] text-white flex flex-col flex-shrink-0">
      <div className="bg-white border-b border-white/20">
        <img src="/logo-lerna360-blanc.png" alt="LERNA360" className="w-full h-auto" />
      </div>

      <div className="px-4 py-3 border-b border-white/10">
        <p className="text-xs text-white/50 uppercase tracking-wide">Administration</p>
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
