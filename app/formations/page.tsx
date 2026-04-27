"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type Formation = {
  id: string
  titre: string
  slug: string
  description_courte: string
  categorie: string
  niveau: string
  duree_estimee_minutes: number
}

function dureeFormat(minutes: number) {
  if (minutes < 60) return minutes + " min"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

export default function FormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getFormations = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) {
        router.push("/connexion")
        return
      }
      const { data } = await supabase
        .from("formations")
        .select("id, titre, slug, description_courte, categorie, niveau, duree_estimee_minutes")
        .eq("est_publie", true)
        .order("ordre")
      if (data) setFormations(data)
      setLoading(false)
    }
    getFormations()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-[#1B2D5B] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold">LERNA</h1>
          <p className="text-xs text-white/50 mt-1">ancrer les compétences</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors">
            🏠 Accueil
          </a>
          <a href="/formations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium">
            📚 Mes formations
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={async () => {
              await supabase.auth.signOut()
              router.push("/")
            }}
            className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
          >
            Se deconnecter
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Catalogue des formations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map(function(f) {
            return (
              <a key={f.id} href={"/formations/" + f.slug} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-base font-semibold text-[#1B2D5B] mb-2">{f.titre}</h3>
                <p className="text-sm text-gray-500">{f.description_courte}</p>
              </a>
            )
          })}
        </div>
      </main>
    </div>
  )
}