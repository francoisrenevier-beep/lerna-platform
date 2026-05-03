"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { getCouleurEtiquette } from "@/lib/etiquettes"

type Formation = {
  id: string
  titre: string
  slug: string
  description_courte: string
  categorie: string
  niveau: string
  duree_estimee_minutes: number
  parcours_id: string | null
  parcours_ordre: number
  parcours_nom: string | null
  domaine: string | null
  thematique: string | null
  public_cible: string | null
  ordre: number
  est_a_venir: boolean
}

type ParcoursGroup = {
  parcours_id: string
  parcours_nom: string
  domaine: string | null
  formations: Formation[]
  minOrdre: number
}

type RenderItem =
  | { type: "parcours"; group: ParcoursGroup; minOrdre: number }
  | { type: "formations"; formations: Formation[]; minOrdre: number }

function dureeFormat(minutes: number) {
  if (minutes < 60) return minutes + " min"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

function Etiquette({ type, valeur }: { type: "domaine" | "thematique" | "public_cible"; valeur: string | null | undefined }) {
  if (!valeur) return null
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCouleurEtiquette(type, valeur)}`}>
      {valeur}
    </span>
  )
}

function ParcoursCard({ group }: { group: ParcoursGroup }) {
  const totalMinutes = group.formations.reduce((sum, f) => sum + f.duree_estimee_minutes, 0)
  const sorted = [...group.formations].sort((a, b) => a.parcours_ordre - b.parcours_ordre)

  return (
    <div className="bg-white rounded-xl shadow-sm border-l-4 border-[#1B2D5B] p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#3DBFA0] px-3 py-1.5 rounded-full">
            🎯 PARCOURS
          </span>
          <Etiquette type="domaine" valeur={group.domaine} />
        </div>
        <span className="text-xs text-gray-400">{dureeFormat(totalMinutes)} au total</span>
      </div>
      <h3 className="text-xl font-bold text-[#1B2D5B] mb-4">{group.parcours_nom}</h3>
      <div className="space-y-2 mb-5">
        {sorted.map((formation, index) => {
          if (formation.est_a_venir) {
            return (
              <div
                key={formation.id}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 opacity-70"
              >
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 text-gray-400 text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <p className="flex-1 text-sm font-medium text-gray-400">
                  {formation.titre}
                </p>
                <span className="text-xs font-bold text-white bg-[#1B2D5B] px-2.5 py-0.5 rounded-full tracking-wide flex-shrink-0">
                  À venir
                </span>
              </div>
            )
          }
          return (
            <a
              key={formation.id}
              href={"/formations/" + formation.slug}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B2D5B]/10 text-[#1B2D5B] text-xs font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <p className="flex-1 text-sm font-medium text-[#1B2D5B] group-hover:text-[#3DBFA0] transition-colors">
                {formation.titre}
              </p>
              {formation.thematique && (
                <Etiquette type="thematique" valeur={formation.thematique} />
              )}
              <span className="text-xs text-gray-400 flex-shrink-0">
                {dureeFormat(formation.duree_estimee_minutes)}
              </span>
            </a>
          )
        })}
      </div>
      <div className="border-t pt-3">
        <span className="text-xs text-[#1B2D5B]/60 font-medium">
          📋 Suivi recommandé dans l'ordre
        </span>
      </div>
    </div>
  )
}

function FormationCard({ formation }: { formation: Formation }) {
  if (formation.est_a_venir) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <Etiquette type="domaine" valeur={formation.domaine ?? formation.categorie} />
          {formation.duree_estimee_minutes > 0 && (
            <span className="text-xs text-gray-300">{dureeFormat(formation.duree_estimee_minutes)}</span>
          )}
        </div>
        <h3 className="text-base font-semibold text-[#1B2D5B] mb-2">{formation.titre}</h3>
        <div className="relative mb-4">
          <p className="text-sm text-gray-500 blur-sm select-none">{formation.description_courte || "Description bientôt disponible."}</p>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {formation.thematique && <Etiquette type="thematique" valeur={formation.thematique} />}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-[#1B2D5B] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full shadow-lg rotate-[-4deg] opacity-90">
            À venir
          </span>
        </div>
      </div>
    )
  }

  return (
    <a
      href={"/formations/" + formation.slug}
      className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow block"
    >
      <div className="flex items-center justify-between mb-3">
        <Etiquette type="domaine" valeur={formation.domaine ?? formation.categorie} />
        <span className="text-xs text-gray-400">
          {dureeFormat(formation.duree_estimee_minutes)}
        </span>
      </div>
      <h3 className="text-base font-semibold text-[#1B2D5B] mb-2">{formation.titre}</h3>
      <p className="text-sm text-gray-500 mb-4">{formation.description_courte}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          {formation.thematique && <Etiquette type="thematique" valeur={formation.thematique} />}
          {formation.public_cible && <Etiquette type="public_cible" valeur={formation.public_cible} />}
          {!formation.thematique && (
            <span className="text-xs text-gray-400 capitalize">{formation.niveau}</span>
          )}
        </div>
        <span className="text-xs font-medium text-[#3DBFA0]">Commencer</span>
      </div>
    </a>
  )
}

export default function CataloguePage() {
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
        .select("id, titre, slug, description_courte, categorie, niveau, duree_estimee_minutes, parcours_id, parcours_ordre, parcours_nom, domaine, thematique, public_cible, ordre, est_a_venir")
        .eq("est_privee", false)
        .or("est_publie.eq.true,est_a_venir.eq.true")
        .order("ordre")
      if (data) setFormations(data as unknown as Formation[])
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

  const parcoursMap = new Map<string, ParcoursGroup>()
  const simpleFormations: Formation[] = []

  for (const formation of formations) {
    if (formation.parcours_id) {
      const existing = parcoursMap.get(formation.parcours_id)
      if (existing) {
        existing.formations.push(formation)
        existing.minOrdre = Math.min(existing.minOrdre, formation.ordre)
      } else {
        parcoursMap.set(formation.parcours_id, {
          parcours_id: formation.parcours_id,
          parcours_nom: formation.parcours_nom || formation.parcours_id,
          domaine: formation.domaine,
          formations: [formation],
          minOrdre: formation.ordre,
        })
      }
    } else {
      simpleFormations.push(formation)
    }
  }

  const rawItems: { type: "parcours" | "formation"; id: string; minOrdre: number }[] = [
    ...Array.from(parcoursMap.values()).map((g) => ({
      type: "parcours" as const,
      id: g.parcours_id,
      minOrdre: g.minOrdre,
    })),
    ...simpleFormations.map((f) => ({
      type: "formation" as const,
      id: f.id,
      minOrdre: f.ordre,
    })),
  ]
  rawItems.sort((a, b) => a.minOrdre - b.minOrdre)

  const renderItems: RenderItem[] = []
  let pendingFormations: Formation[] = []

  const flushFormations = () => {
    if (pendingFormations.length > 0) {
      renderItems.push({
        type: "formations",
        formations: [...pendingFormations],
        minOrdre: pendingFormations[0].ordre,
      })
      pendingFormations = []
    }
  }

  for (const raw of rawItems) {
    if (raw.type === "parcours") {
      flushFormations()
      const group = parcoursMap.get(raw.id)!
      renderItems.push({ type: "parcours", group, minOrdre: raw.minOrdre })
    } else {
      const formation = simpleFormations.find((f) => f.id === raw.id)!
      pendingFormations.push(formation)
    }
  }
  flushFormations()

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar pageActive="catalogue" />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Catalogue des formations</h2>
          <p className="text-gray-500 mt-1">Toutes les formations disponibles.</p>
        </div>
        <div className="space-y-6">
          {renderItems.map((item, index) => {
            if (item.type === "parcours") {
              return <ParcoursCard key={item.group.parcours_id} group={item.group} />
            }
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {item.formations.map((formation) => (
                  <FormationCard key={formation.id} formation={formation} />
                ))}
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
