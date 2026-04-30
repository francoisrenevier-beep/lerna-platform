"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { getCouleurEtiquette } from "@/lib/etiquettes"

type FormationAvecProgression = {
  id: string
  titre: string
  slug: string
  description_courte: string
  categorie: string
  niveau: string
  duree_estimee_minutes: number
  domaine: string | null
  thematique: string | null
  public_cible: string | null
  nbModules: number
  nbTermines: number
}

function dureeFormat(minutes: number) {
  if (minutes < 60) return minutes + " min"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

export default function MesFormationsPage() {
  const [formations, setFormations] = useState<FormationAvecProgression[]>([])
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

      const { data: progressionData } = await supabase
        .from("progression")
        .select("formation_id, module_id, statut")
        .eq("profil_id", user.id)

      if (!progressionData || progressionData.length === 0) {
        setLoading(false)
        return
      }

      const formationIds = [...new Set(progressionData.map((p) => p.formation_id))]

      const { data: formationsData } = await supabase
        .from("formations")
        .select("id, titre, slug, description_courte, categorie, niveau, duree_estimee_minutes, domaine, thematique, public_cible")
        .in("id", formationIds)
        .eq("est_publie", true)

      const { data: modulesData } = await supabase
        .from("modules")
        .select("id, formation_id")
        .in("formation_id", formationIds)

      if (formationsData) {
        const result = formationsData.map((f) => {
          const totalModules = modulesData?.filter((m) => m.formation_id === f.id).length ?? 0
          const termines = progressionData.filter(
            (p) => p.formation_id === f.id && p.statut === "termine"
          ).length
          return {
            ...f,
            nbModules: totalModules,
            nbTermines: termines,
          }
        })
        setFormations(result)
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
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar pageActive="formations" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Mes formations</h2>
          <p className="text-gray-500 mt-1">Vos formations en cours et commencées.</p>
        </div>

        {formations.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
            <p className="text-4xl mb-4">🎯</p>
            <p className="text-[#1B2D5B] font-semibold mb-2">Aucune formation commencée</p>
            <p className="text-gray-400 text-sm mb-5">
              Explorez le catalogue et commencez votre première formation.
            </p>
            <a
              href="/catalogue"
              className="inline-block text-sm font-medium text-white bg-[#3DBFA0] hover:bg-[#2eaa8d] px-5 py-2.5 rounded-lg transition-colors"
            >
              Voir le catalogue →
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {formations.map((formation) => {
              const pct = formation.nbModules > 0
                ? Math.round((formation.nbTermines / formation.nbModules) * 100)
                : 0

              return (
                <a
                  key={formation.id}
                  href={"/formations/" + formation.slug}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow flex gap-6 items-start block"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {formation.domaine && (
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCouleurEtiquette("domaine", formation.domaine)}`}>
                          {formation.domaine}
                        </span>
                      )}
                      {formation.thematique && (
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCouleurEtiquette("thematique", formation.thematique)}`}>
                          {formation.thematique}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-semibold text-[#1B2D5B] mb-1">{formation.titre}</h3>
                    <p className="text-sm text-gray-400">{dureeFormat(formation.duree_estimee_minutes)}</p>
                  </div>

                  <div className="w-48 flex-shrink-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-gray-400">
                        {formation.nbTermines}/{formation.nbModules} modules
                      </span>
                      <span className="text-xs font-semibold text-[#1B2D5B]">{pct}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-[#3DBFA0] h-2 rounded-full transition-all"
                        style={{ width: pct + "%" }}
                      />
                    </div>
                    {pct === 100 && (
                      <p className="text-xs text-[#3DBFA0] font-medium mt-1.5 text-right">Terminée ✓</p>
                    )}
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
