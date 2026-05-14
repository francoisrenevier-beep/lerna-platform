"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { BottomNav } from "@/components/BottomNav"
import { getCouleurEtiquette } from "@/lib/etiquettes"

type Formation = {
  id: string
  titre: string
  slug: string
  domaine: string | null
  thematique: string | null
  public_cible: string | null
  ordre: number
  nbRessources: number
}

function Etiquette({ type, valeur }: { type: "domaine" | "thematique" | "public_cible"; valeur: string | null | undefined }) {
  if (!valeur) return null
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCouleurEtiquette(type, valeur)}`}>
      {valeur}
    </span>
  )
}

export default function RessourcesPage() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      if (!result.data.user) {
        router.push("/connexion")
        return
      }

      const [{ data: formationsData }, { data: ressourcesData }] = await Promise.all([
        supabase
          .from("formations")
          .select("id, titre, slug, domaine, thematique, public_cible, ordre")
          .eq("est_publie", true)
          .eq("est_a_venir", false)
          .order("ordre"),
        supabase
          .from("ressources")
          .select("formation_id"),
      ])

      const countParFormation: Record<string, number> = {}
      for (const r of ressourcesData ?? []) {
        countParFormation[r.formation_id] = (countParFormation[r.formation_id] ?? 0) + 1
      }

      if (formationsData) {
        setFormations(
          formationsData.map((f) => ({
            ...f,
            nbRessources: countParFormation[f.id] ?? 0,
          }))
        )
      }

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
    <div className="min-h-screen bg-gray-50 flex overflow-x-hidden">
      <Sidebar pageActive="ressources" />
      <main className="flex-1 p-8 pb-24 md:pb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Ressources</h2>
          <p className="text-gray-500 mt-1">
            Retrouvez ici les ressources complémentaires liées à chaque formation.
          </p>
        </div>

        {formations.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
            <p className="text-4xl mb-4">📚</p>
            <p className="text-[#1B2D5B] font-semibold mb-2">Aucune ressource disponible</p>
            <p className="text-gray-400 text-sm">Des ressources seront ajoutées prochainement.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formations.map((formation) => (
              <a
                key={formation.id}
                href={"/ressources/" + formation.slug}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow block group"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <Etiquette type="domaine" valeur={formation.domaine} />
                  <Etiquette type="thematique" valeur={formation.thematique} />
                </div>

                <h3 className="text-base font-semibold text-[#1B2D5B] mb-3 group-hover:text-[#3DBFA0] transition-colors leading-snug">
                  {formation.titre}
                </h3>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
                  {formation.nbRessources > 0 ? (
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      🔗 {formation.nbRessources} ressource{formation.nbRessources > 1 ? "s" : ""}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-300 italic">Aucune ressource pour l'instant</span>
                  )}
                  <span className="text-xs font-medium text-[#3DBFA0]">Consulter →</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
      <BottomNav pageActive="ressources" />
    </div>
  )
}
