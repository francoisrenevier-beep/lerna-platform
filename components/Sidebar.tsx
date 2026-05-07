"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type SidebarProps = {
  pageActive: "dashboard" | "formations" | "catalogue" | "progression" | "attestations" | "profil" | "ressources"
  institution?: string
  prenom?: string
}

export function Sidebar({ pageActive, institution }: SidebarProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const liens = [
    { href: "/dashboard",    label: "Accueil",        emoji: "🏠", id: "dashboard"    },
    { href: "/formations",   label: "Mes formations",  emoji: "🎯", id: "formations"   },
    { href: "/catalogue",    label: "Catalogue",       emoji: "📚", id: "catalogue"    },
    { href: "/progression",  label: "Ma progression",  emoji: "📈", id: "progression"  },
    { href: "/ressources",   label: "Ressources",      emoji: "📖", id: "ressources"   },
    { href: "/attestations", label: "Attestations",    emoji: "🎓", id: "attestations" },
    { href: "/profil",       label: "Mon profil",      emoji: "👤", id: "profil"       },
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
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors " +
                (estActif
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/70 hover:bg-white/10 hover:text-white")
              }
            >
              <span>{lien.emoji}</span>
              <span>{lien.label}</span>
            </a>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        {institution && (
          <div className="px-3 py-2 mb-2 rounded-lg bg-white/5">
            <p className="text-xs text-white/40">Institution</p>
            <p className="text-xs text-white/80 font-medium">{institution}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
        >
          → Se deconnecter
        </button>
      </div>
    </aside>
  )
}