"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type Module = {
  id: string
  titre: string
  description: string
  ordre: number
  duree_minutes: number
}

type Formation = {
  id: string
  titre: string
  description: string
  categorie: string
  niveau: string
  duree_estimee_minutes: number
}

export default function FormationDetailPage({ params }: { params: { slug: string } }) {
  const [formation, setFormation] = useState<Formation | null>(null)
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) {
        router.push("/connexion")
        return
      }
      const { data: f } = await supabase
        .from("formations")
        .select("id, titre, description, categorie, niveau, duree_estimee_minutes")
        .eq("slug", params.slug)
        .single()
      if (!f) {
        router.push("/formations")
        return
      }
      setFormation(f)
      const { data: m } = await supabase
        .from("modules")
        .select("id, titre, description, ordre, duree_minutes")
        .eq("formation_id", f.id)
        .order("ordre")
      if (m) setModules(m)
      setLoading(false)
    }
    getData()
  }, [params.slug, router])

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
          <p className="text-xs text-white/50 mt-1">ancrer les competences</p>
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
        <a href="/formations" className="text-sm text-[#3DBFA0] hover:underline mb-6 inline-block">
          ← Retour aux formations
        </a>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-6">
          <span className="text-xs font-medium text-[#3DBFA0] bg-[#3DBFA0]/10 px-2 py-1 rounded-full">
            {formation?.categorie}
          </span>
          <h2 className="text-2xl font-bold text-[#1B2D5B] mt-3 mb-2">{formation?.titre}</h2>
          <p className="text-gray-500 text-sm mb-4">{formation?.description}</p>
          <div className="flex gap-4 text-xs text-gray-400">
            <span>Niveau : {formation?.niveau}</span>
            <span>{formation?.duree_estimee_minutes} minutes</span>
            <span>{modules.length} modules</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#1B2D5B] mb-4">Modules de la formation</h3>
        <div className="space-y-3">
          {modules.map(function(m) {
            return (
              <div
                key={m.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#3DBFA0]/10 text-[#3DBFA0] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {m.ordre}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[#1B2D5B]">{m.titre}</h4>
                  <p className="text-xs text-gray-400 mt-1">{m.description}</p>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{m.duree_minutes} min</span>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}