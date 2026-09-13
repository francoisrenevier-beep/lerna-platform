"use client"
import React from "react"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"
import { verifierEtAttribuerBadges } from "@/lib/badges"
import { ResourceCard, type Resource } from "@/components/ResourceCard"
import { MODULE_COMPONENTS } from "@/app/modules/registre"
import { TitreFormationFourni } from "@/components/module/TitreFormation"

type ModuleSimple = {
  id: string
  titre: string
  ordre: number
}

type FormationType = {
  id: string
  titre: string
  slug: string
  duree_estimee_minutes: number
}

export default function ModulePage() {
  const [formation, setFormation] = useState<FormationType | null>(null)
  const [listeModules, setListeModules] = useState<ModuleSimple[]>([])
  const [moduleId, setModuleId] = useState("")
  const [moduleTitre, setModuleTitre] = useState("")
  const [moduleOrdre, setModuleOrdre] = useState(0)
  const [moduleDuree, setModuleDuree] = useState(0)
  const [statut, setStatut] = useState("non_commence")
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [moduleResources, setModuleResources] = useState<{ resource: Resource; context_note: string | null }[]>([])

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) { router.push("/connexion"); return }
      setUserId(user.id)

      const parts = pathname.split("/")
      const modId = parts[parts.length - 1]
      const slug = parts[parts.length - 3]
      setModuleId(modId)

      const { data: f } = await supabase
        .from("formations")
        .select("id, titre, slug, duree_estimee_minutes")
        .eq("slug", slug)
        .single()
      if (!f) { router.push("/formations"); return }
      setFormation(f)

      const { data: m } = await supabase
        .from("modules")
        .select("id, titre, ordre, duree_minutes")
        .eq("id", modId)
        .single()
      if (!m) { router.push("/formations/" + slug); return }
      setModuleTitre(m.titre)
      setModuleOrdre(m.ordre)
      setModuleDuree(m.duree_minutes)

      const { data: allMods } = await supabase
        .from("modules")
        .select("id, titre, ordre")
        .eq("formation_id", f.id)
        .order("ordre")
      if (allMods) setListeModules(allMods)

      const { data: prog } = await supabase
        .from("progression")
        .select("statut")
        .eq("profil_id", user.id)
        .eq("module_id", modId)
        .single()
      if (prog) {
        setStatut(prog.statut)
      } else {
        await supabase.from("progression").upsert({
          profil_id: user.id,
          module_id: modId,
          formation_id: f.id,
          statut: "en_cours"
        }, { onConflict: "profil_id,module_id" })
        setStatut("en_cours")
      }

      const { data: resData } = await supabase
        .from("module_resources")
        .select("context_note, resources(*)")
        .eq("module_id", modId)
        .order("display_order")
      if (resData) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setModuleResources(resData.map((r: any) => ({
          resource: r.resources,
          context_note: r.context_note,
        })).filter((r: { resource: Resource | null }) => r.resource != null))
      }

      setLoading(false)
    }
    getData()
  }, [pathname, router])

  const marquerTermine = async () => {
    if (!userId || !formation) return
    await supabase.from("progression").upsert({
      profil_id: userId,
      module_id: moduleId,
      formation_id: formation.id,
      statut: "termine"
    }, { onConflict: "profil_id,module_id" })
    setStatut("termine")

    // Attribution silencieuse des badges (non bloquant)
    verifierEtAttribuerBadges(userId).catch(() => {})

    try {
      const pending = localStorage.getItem("lerna_quiz_pending")
      if (pending) {
        const quizData = JSON.parse(pending)
        const key = "lerna_quiz_" + formation.slug
        const existing = JSON.parse(localStorage.getItem(key) || "[]")
        existing.push({ ...quizData, moduleId, moduleTitre, savedAt: Date.now() })
        localStorage.setItem(key, JSON.stringify(existing))
        localStorage.removeItem("lerna_quiz_pending")
      }
    } catch {}

    const tries = listeModules.slice().sort(function(a, b) { return a.ordre - b.ordre })
    const idx = tries.findIndex(function(m) { return m.id === moduleId })
    const modSuivant = tries[idx + 1]

    if (modSuivant) {
      router.push("/formations/" + formation.slug + "/modules/" + modSuivant.id)
    } else {
      // Créer l'attestation en base
      const { data: attRow } = await supabase
        .from("attestations")
        .upsert({ profil_id: userId, formation_id: formation.id }, { onConflict: "profil_id,formation_id" })
        .select("id, created_at")
        .single()

      if (attRow) {
        try {
          await supabase
            .from("attestations")
            .update({ nb_modules: listeModules.length })
            .eq("id", attRow.id)
        } catch (e) {
          console.error("Erreur mise à jour nb_modules:", e)
        }
      }

      router.push("/formations/" + formation.slug + "/bilan")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  const tries = listeModules.slice().sort(function(a, b) { return a.ordre - b.ordre })
  const idx = tries.findIndex(function(m) { return m.id === moduleId })
  const modPrev = tries[idx - 1]
  const modNext = tries[idx + 1]
  const formSlug = formation ? formation.slug : ""
  const ModuleContent = MODULE_COMPONENTS[moduleId]

  const progressPct = listeModules.length > 0 ? Math.round((moduleOrdre / listeModules.length) * 100) : 0

  return (
    <div className="min-h-screen bg-white">
      {/* ── Sticky header ── */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={"/formations/" + formSlug} className="text-[#3DBFA0] hover:text-[#2ea88b] text-sm font-medium transition-colors">
              ← Retour
            </a>
            <div className="h-4 w-px bg-gray-200" />
            <div>
              <p className="text-xs text-gray-400">{formation?.titre}</p>
              <p className="text-sm font-semibold text-[#1B2D5B]">Module {moduleOrdre}, {moduleTitre}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {moduleDuree > 0 && (
              <span className="text-xs text-gray-400">{moduleDuree} min</span>
            )}
            {statut === "termine" ? (
              <>
                <span className="text-xs font-medium text-[#3DBFA0] bg-[#3DBFA0]/10 px-3 py-1 rounded-full">
                  ✓ Terminé
                </span>
                {modNext && (
                  <a
                    href={"/formations/" + formSlug + "/modules/" + modNext.id}
                    className="bg-[#1B2D5B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#152347] transition-colors"
                  >
                    Module suivant →
                  </a>
                )}
              </>
            ) : (
              <span className="text-xs text-gray-400 italic">Réussissez le quiz pour valider</span>
            )}
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-[3px] bg-gray-100">
          <div
            className="h-full transition-all duration-500"
            style={{ width: progressPct + "%", backgroundColor: "#3DBFA0" }}
          />
        </div>
      </div>

      <div className="pb-24">
        {ModuleContent ? (
          // Le titre lu en base l'emporte sur celui écrit dans le module : une
          // formation renommée depuis l'admin l'est partout, sans toucher au
          // fichier du module.
          <TitreFormationFourni titre={formation?.titre ?? null}>
            <ModuleContent onValiderModule={marquerTermine} />
          </TitreFormationFourni>
        ) : (
          <div className="max-w-3xl mx-auto px-8 py-12">
            <p className="text-gray-500 text-center">Contenu en cours de préparation...</p>
          </div>
        )}

        {/* ── Ressources utiles pour ce module ────────────────────────────── */}
        {moduleResources.length > 0 && (
          <div className="max-w-3xl mx-auto px-6 md:px-8 py-8 border-t border-gray-100 mt-4">
            <h3 className="text-base font-bold text-[#1B2D5B] mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-[#3DBFA0] rounded-full inline-block flex-shrink-0" />
              Ressources utiles pour ce module
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {moduleResources.map(mr => (
                <ResourceCard
                  key={mr.resource.id}
                  resource={mr.resource}
                  contextNote={mr.context_note}
                  compact
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Bottom nav ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-3 flex items-center justify-between" style={{ borderColor: "var(--learna-border)" }}>
        <div>
          {modPrev ? (
            <a
              href={"/formations/" + formSlug + "/modules/" + modPrev.id}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors"
            >
              ← Module {moduleOrdre - 1}
            </a>
          ) : (
            <a
              href={"/formations/" + formSlug}
              className="text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors"
            >
              ← Formation
            </a>
          )}
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "#3DBFA0" + "1a", color: "#3DBFA0" }}>
          {moduleOrdre} / {listeModules.length}
        </span>
        <div>
          {modNext ? (
            <a
              href={"/formations/" + formSlug + "/modules/" + modNext.id}
              className={
                "flex items-center gap-1.5 text-sm font-medium transition-colors " +
                (statut === "termine" ? "text-[#3DBFA0] hover:text-[#2ea88b]" : "text-gray-300 pointer-events-none")
              }
            >
              Module {moduleOrdre + 1} →
            </a>
          ) : statut === "termine" ? (
            <a
              href={"/formations/" + formSlug + "/bilan"}
              className="text-sm font-medium text-[#3DBFA0] hover:text-[#2ea88b] transition-colors"
            >
              Voir le bilan →
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}