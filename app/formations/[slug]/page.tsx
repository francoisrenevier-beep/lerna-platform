
"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { getCouleurEtiquette } from "@/lib/etiquettes"
import { ResourceCard, type Resource } from "@/components/ResourceCard"

function normaliseDomaine(domaine: string | string[] | null | undefined): string | null {
  if (!domaine) return null
  if (Array.isArray(domaine)) return domaine[0] ?? null
  return domaine
}

type ModuleType = {
  id: string
  titre: string
  description: string
  ordre: number
  duree_minutes: number
  type: string
}

type FormationType = {
  id: string
  titre: string
  description: string
  categorie: string
  niveau: string
  duree_estimee_minutes: number
  slug: string
  domaine: string | null
  thematique: string | null
  public_cible: string | null
}

type ProgressionType = {
  module_id: string
  statut: string
}

type FormationResource = {
  display_order: number
  is_featured: boolean
  context_note: string | null
  resource: Resource
}

type OngletType = "modules" | "ressources"

// ─── Catégories pour la vue formation ────────────────────────────────────────

const RESOURCE_CATEGORIES = [
  {
    id: "outils",
    label: "Outils terrain",
    match: (r: Resource) =>
      r.category === "outil_terrain" || ["checklist", "tool", "template"].includes(r.type),
  },
  {
    id: "memos",
    label: "Fiches mémo",
    match: (r: Resource) => r.category === "fiche_memo" || r.type === "memo",
  },
  {
    id: "support",
    label: "Supports d'équipe",
    match: (r: Resource) => r.category === "support_equipe",
  },
  {
    id: "plus_loin",
    label: "Pour aller plus loin",
    match: (r: Resource) => r.category === "pour_aller_plus_loin",
  },
  {
    id: "officielles",
    label: "Ressources officielles",
    match: (r: Resource) =>
      r.category === "ressource_officielle" || r.type === "official" ||
      r.category === "reference_theorique" || r.type === "article",
  },
]

export default function FormationDetailPage() {
  const [formation, setFormation]             = useState<FormationType | null>(null)
  const [listeModules, setListeModules]       = useState<ModuleType[]>([])
  const [progression, setProgression]         = useState<ProgressionType[]>([])
  const [formationResources, setFormationResources] = useState<FormationResource[]>([])
  const [loading, setLoading]                 = useState(true)
  const [notFound, setNotFound]               = useState(false)
  const [userId, setUserId]                   = useState<string | null>(null)
  const [onglet, setOnglet]                   = useState<OngletType>("modules")

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Lire le paramètre ?tab= pour pré-sélectionner l'onglet
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      if (params.get("tab") === "ressources") setOnglet("ressources")
    }
  }, [])

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) { router.push("/connexion"); return }
      setUserId(user.id)

      const parts = pathname.split("/")
      const slug = parts[parts.length - 1]

      const { data: f } = await supabase
        .from("formations")
        .select("id, titre, description, categorie, niveau, duree_estimee_minutes, slug, domaine, thematique, public_cible")
        .eq("slug", slug)
        .single()

      if (!f) { setNotFound(true); setLoading(false); return }
      setFormation(f)

      const [{ data: mods }, { data: prog }, { data: resData }] = await Promise.all([
        supabase
          .from("modules")
          .select("id, titre, description, ordre, duree_minutes, type")
          .eq("formation_id", f.id)
          .order("ordre"),
        supabase
          .from("progression")
          .select("module_id, statut")
          .eq("profil_id", user.id)
          .eq("formation_id", f.id),
        supabase
          .from("formation_resources")
          .select("display_order, is_featured, context_note, resources(*)")
          .eq("formation_id", f.id)
          .order("display_order"),
      ])

      if (mods) setListeModules(mods)
      if (prog) setProgression(prog)
      if (resData) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setFormationResources(resData.map((r: any) => ({
          display_order: r.display_order,
          is_featured: r.is_featured,
          context_note: r.context_note,
          resource: r.resources,
        })).filter((r: FormationResource) => r.resource != null))
      }

      setLoading(false)
    }
    getData()
  }, [pathname, router])

  const getStatutModule = (moduleId: string) => {
    const found = progression.find(function(p) { return p.module_id === moduleId })
    return found ? found.statut : "non_commence"
  }

  const moduleAccessible = (ordre: number) => {
    if (ordre === 1) return true
    const modPrev = listeModules.find(function(m) { return m.ordre === ordre - 1 })
    if (!modPrev) return false
    return getStatutModule(modPrev.id) === "termine"
  }

  const nbTermines = progression.filter(function(p) { return p.statut === "termine" }).length

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-[#1B2D5B] text-lg font-bold mb-2">Formation introuvable</p>
        <a href="/formations" className="text-[#3DBFA0] hover:underline text-sm">Retour aux formations</a>
      </div>
    )
  }

  const formSlug = formation ? formation.slug : ""

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar pageActive="formations" />
      <main className="flex-1 p-8">
        <a href="/formations" className="text-sm text-[#3DBFA0] hover:underline mb-6 inline-block">
          Retour aux formations
        </a>

        {/* Carte formation */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-6">
          <div className="flex flex-wrap gap-2">
            {formation?.domaine && (
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCouleurEtiquette("domaine", normaliseDomaine(formation.domaine))}`}>
                {normaliseDomaine(formation.domaine)}
              </span>
            )}
            {formation?.thematique && (
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCouleurEtiquette("thematique", formation.thematique)}`}>
                {formation.thematique}
              </span>
            )}
            {formation?.public_cible && (
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCouleurEtiquette("public_cible", formation.public_cible)}`}>
                {formation.public_cible}
              </span>
            )}
            {!formation?.domaine && (
              <span className="text-xs font-medium text-[#3DBFA0] bg-[#3DBFA0]/10 px-2 py-1 rounded-full">
                {formation?.categorie}
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-[#1B2D5B] mt-3 mb-2">{formation?.titre}</h2>
          <p className="text-gray-500 text-sm mb-4">{formation?.description}</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <span>Niveau : {formation?.niveau}</span>
            <span>{formation?.duree_estimee_minutes} minutes</span>
            <span>{listeModules.length} modules</span>
          </div>
          {listeModules.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">Progression</span>
                <span className="text-xs font-medium text-[#1B2D5B]">{nbTermines}/{listeModules.length} modules</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-[#3DBFA0] h-2 rounded-full transition-all" style={{ width: (nbTermines / listeModules.length * 100) + "%" }} />
              </div>
            </div>
          )}
        </div>

        {/* Navigation par onglets */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setOnglet("modules")}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
              onglet === "modules"
                ? "border-[#3DBFA0] text-[#1B2D5B]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Modules ({listeModules.length})
          </button>
          <button
            onClick={() => setOnglet("ressources")}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
              onglet === "ressources"
                ? "border-[#3DBFA0] text-[#1B2D5B]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Ressources{formationResources.length > 0 ? ` (${formationResources.length})` : ""}
          </button>
        </div>

        {/* ── Onglet Modules ──────────────────────────────────────────────────── */}
        {onglet === "modules" && (
          <div className="space-y-3">
            {listeModules.map(function(mod, index) {
              const statutMod = getStatutModule(mod.id)
              const accessible = moduleAccessible(mod.ordre)
              const lienModule = "/formations/" + formSlug + "/modules/" + mod.id
              return (
                <div
                  key={index}
                  className={"bg-white rounded-xl border shadow-sm p-5 flex items-center gap-4 " + (accessible ? "border-gray-100 cursor-pointer hover:shadow-md transition-shadow" : "border-gray-100 opacity-50 cursor-not-allowed")}
                  onClick={function() { if (accessible) router.push(lienModule) }}
                >
                  <div className={"w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 " + (statutMod === "termine" ? "bg-[#3DBFA0] text-white" : "bg-[#3DBFA0]/10 text-[#3DBFA0]")}>
                    {statutMod === "termine" ? "V" : mod.ordre}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#1B2D5B]">{mod.titre}</h4>
                    <p className="text-xs text-gray-400 mt-1">{mod.description}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-gray-400">{mod.duree_minutes} min</span>
                    {!accessible && <span className="text-xs text-gray-300">verrou</span>}
                    {statutMod === "en_cours" && <span className="text-xs text-[#3DBFA0] font-medium">En cours</span>}
                    {statutMod === "termine" && <span className="text-xs text-[#3DBFA0] font-medium">Terminé</span>}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* ── Onglet Ressources ───────────────────────────────────────────────── */}
        {onglet === "ressources" && (
          <div>
            {formationResources.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-12 text-center">
                <p className="text-4xl mb-3">📭</p>
                <p className="text-[#1B2D5B] font-semibold">Aucune ressource pour cette formation</p>
                <p className="text-gray-400 text-sm mt-1">Des ressources seront peut-être ajoutées prochainement.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {RESOURCE_CATEGORIES.map(categ => {
                  const items = formationResources.filter(fr => categ.match(fr.resource))
                  if (items.length === 0) return null
                  return (
                    <section key={categ.id}>
                      <h3 className="text-sm font-bold text-[#1B2D5B] mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 bg-[#3DBFA0] rounded-full inline-block" />
                        {categ.label}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map(fr => (
                          <ResourceCard
                            key={fr.resource.id}
                            resource={fr.resource}
                            contextNote={fr.context_note}
                          />
                        ))}
                      </div>
                    </section>
                  )
                })}

                {/* Ressources non catégorisées */}
                {(() => {
                  const allCategorised = new Set(
                    RESOURCE_CATEGORIES.flatMap(c =>
                      formationResources.filter(fr => c.match(fr.resource)).map(fr => fr.resource.id)
                    )
                  )
                  const autres = formationResources.filter(fr => !allCategorised.has(fr.resource.id))
                  if (autres.length === 0) return null
                  return (
                    <section>
                      <h3 className="text-sm font-bold text-[#1B2D5B] mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 bg-[#3DBFA0] rounded-full inline-block" />
                        Autres ressources
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {autres.map(fr => (
                          <ResourceCard
                            key={fr.resource.id}
                            resource={fr.resource}
                            contextNote={fr.context_note}
                          />
                        ))}
                      </div>
                    </section>
                  )
                })()}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
