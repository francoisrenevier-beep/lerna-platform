"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { getCouleurEtiquette } from "@/lib/etiquettes"

type Formation = {
  id: string
  titre: string
  slug: string
  domaine: string | null
  thematique: string | null
  public_cible: string | null
}

type Ressource = {
  id: string
  titre: string
  description: string | null
  type: string
  url: string
  ordre: number
}

function iconeType(type: string) {
  if (type === "pdf")     return "📄"
  if (type === "video")   return "🎬"
  if (type === "article") return "📰"
  if (type === "memo")    return "📋"
  return "🔗"
}

function labelType(type: string) {
  if (type === "pdf")     return "PDF"
  if (type === "video")   return "Vidéo"
  if (type === "article") return "Article"
  if (type === "memo")    return "Mémo"
  return "Lien"
}

function Etiquette({ type, valeur }: { type: "domaine" | "thematique" | "public_cible"; valeur: string | null | undefined }) {
  if (!valeur) return null
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCouleurEtiquette(type, valeur)}`}>
      {valeur}
    </span>
  )
}

export default function RessourcesFormationPage() {
  const [formation, setFormation] = useState<Formation | null>(null)
  const [ressources, setRessources] = useState<Ressource[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      if (!result.data.user) {
        router.push("/connexion")
        return
      }

      const slug = pathname.split("/").pop() ?? ""

      const { data: formationData } = await supabase
        .from("formations")
        .select("id, titre, slug, domaine, thematique, public_cible")
        .eq("slug", slug)
        .eq("est_publie", true)
        .single()

      if (!formationData) {
        router.push("/ressources")
        return
      }

      setFormation(formationData)

      const { data: ressourcesData } = await supabase
        .from("ressources")
        .select("id, titre, description, type, url, ordre")
        .eq("formation_id", formationData.id)
        .order("ordre")

      if (ressourcesData) setRessources(ressourcesData)

      setLoading(false)
    }
    getData()
  }, [router, pathname])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  if (!formation) return null

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar pageActive="ressources" />
      <main className="flex-1 p-8">
        <div className="mb-2">
          <a
            href="/ressources"
            className="text-sm text-[#3DBFA0] hover:text-[#2ea88b] transition-colors"
          >
            ← Ressources
          </a>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-1.5 mb-3">
            <Etiquette type="domaine" valeur={formation.domaine} />
            <Etiquette type="thematique" valeur={formation.thematique} />
            <Etiquette type="public_cible" valeur={formation.public_cible} />
          </div>
          <h2 className="text-2xl font-bold text-[#1B2D5B]">{formation.titre}</h2>
          <p className="text-gray-500 mt-1">
            {ressources.length} ressource{ressources.length > 1 ? "s" : ""} disponible{ressources.length > 1 ? "s" : ""}
          </p>
        </div>

        {ressources.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
            <p className="text-4xl mb-4">📭</p>
            <p className="text-[#1B2D5B] font-semibold">Aucune ressource pour cette formation</p>
          </div>
        ) : (
          <div className="space-y-4">
            {ressources.map((ressource) => {
              const isExternal = ressource.url !== "#"
              return (
                <div
                  key={ressource.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{iconeType(ressource.type)}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                              {labelType(ressource.type)}
                            </span>
                          </div>
                          <h3 className="text-base font-semibold text-[#1B2D5B] mb-1">
                            {ressource.titre}
                          </h3>
                          {ressource.description && (
                            <p className="text-sm text-gray-500">{ressource.description}</p>
                          )}
                        </div>
                        {isExternal ? (
                          <a
                            href={ressource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-sm font-medium text-white bg-[#3DBFA0] hover:bg-[#2ea88b] px-4 py-2 rounded-lg transition-colors"
                          >
                            Accéder →
                          </a>
                        ) : (
                          <span className="flex-shrink-0 text-sm font-medium text-white bg-[#1B2D5B]/40 px-4 py-2 rounded-lg cursor-not-allowed">
                            Bientôt disponible
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
