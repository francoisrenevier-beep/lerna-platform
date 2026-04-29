"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"

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
    const getData = async () => {
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
        .eq("est_privee", false)
        .order("ordre")
      if (data) setFormations(data)
      setLoading(false)
    }
    getData()
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
      <Sidebar pageActive="formations" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Catalogue des formations</h2>
          <p className="text-gray-500 mt-1">Toutes les formations disponibles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map(function(formation, index) {
            return (
              
                key={index}
                href={"/formations/" + formation.slug}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow block"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-[#3DBFA0] bg-[#3DBFA0]/10 px-2 py-1 rounded-full">
                    {formation.categorie}
                  </span>
                  <span className="text-xs text-gray-400">
                    {dureeFormat(formation.duree_estimee_minutes)}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-[#1B2D5B] mb-2">
                  {formation.titre}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {formation.description_courte}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 capitalize">{formation.niveau}</span>
                  <span className="text-xs font-medium text-[#3DBFA0]">Commencer</span>
                </div>
              </a>
            )
          })}
        </div>
      </main>
    </div>
  )
}
