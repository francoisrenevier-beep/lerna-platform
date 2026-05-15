"use client"
import React from "react"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"
import { verifierEtAttribuerBadges } from "@/lib/badges"
import { Module1PPH } from "@/app/modules/pph-module-1"
import { Module2PPH } from "@/app/modules/pph-module-2"
import { Module3PPH } from "@/app/modules/pph-module-3"
import { Module4PPH } from "@/app/modules/pph-module-4"
import { Module5PPH } from "@/app/modules/pph-module-5"
import { Module1Deliberation } from "@/app/modules/deliberation-module-1"
import { Module2Deliberation } from "@/app/modules/deliberation-module-2"
import { Module3Deliberation } from "@/app/modules/deliberation-module-3"
import { Module4Deliberation } from "@/app/modules/deliberation-module-4"
import { Module5Deliberation } from "@/app/modules/deliberation-module-5"
import { Module6Deliberation } from "@/app/modules/deliberation-module-6"
import { Module1Vieillissement } from "@/app/modules/vieillissement-module-1"
import { Module2Vieillissement } from "@/app/modules/vieillissement-module-2"
import { Module3Vieillissement } from "@/app/modules/vieillissement-module-3"
import { Module4Vieillissement } from "@/app/modules/vieillissement-module-4"
import { Module5Vieillissement } from "@/app/modules/vieillissement-module-5"
import { Module6Vieillissement } from "@/app/modules/vieillissement-module-6"
import { Module1MDHPPH } from "@/app/modules/mdhpph-module-1"
import { Module2MDHPPH } from "@/app/modules/mdhpph-module-2"
import { Module3MDHPPH } from "@/app/modules/mdhpph-module-3"
import { Module4MDHPPH } from "@/app/modules/mdhpph-module-4"
import { Module5MDHPPH } from "@/app/modules/mdhpph-module-5"
import { Module1FamillesSecteurAdulte } from "@/app/modules/familles-module-1"
import { Module2FamillesSecteurAdulte } from "@/app/modules/familles-module-2"
import { Module3FamillesSecteurAdulte } from "@/app/modules/familles-module-3"
import { Module4FamillesSecteurAdulte } from "@/app/modules/familles-module-4"
import { Module5FamillesSecteurAdulte } from "@/app/modules/familles-module-5"
import { Module1Curatelle } from "@/app/modules/curatelle-module-1"
import { Module2Curatelle } from "@/app/modules/curatelle-module-2"
import { Module3Curatelle } from "@/app/modules/curatelle-module-3"
import { Module1VieillissementBases } from "@/app/modules/vieillissement-bases-module-1"
import { Module2VieillissementBases } from "@/app/modules/vieillissement-bases-module-2"
import { Module3VieillissementBases } from "@/app/modules/vieillissement-bases-module-3"
import { Module4VieillissementBases } from "@/app/modules/vieillissement-bases-module-4"
import { Module4VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-4"
import { Module5VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-5"
import { Module6VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-6"
import { Module7VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-7"
import { Module8VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-8"
import { Module9VieillissementExpertise } from "@/app/modules/vieillissement-expertise-module-9"
import { Module10VieillissementExpertise } from "@/app/modules/vieillissement-expertise-module-10"
import { Module11VieillissementExpertise } from "@/app/modules/vieillissement-expertise-module-11"

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

const MODULE_COMPONENTS: Record<string, React.ComponentType<{ onValiderModule?: () => void }>> = {
  "f8bd6cc6-b91e-4542-a9c4-53001ddd9090": Module1PPH,
  "bd21a4e9-09bb-4d41-9631-51ed75088eec": Module2PPH,
  "fa177ae1-c657-46cb-a607-549ba13c8afc": Module3PPH,
  "d9e48c2e-b354-48e6-9cfe-a699ea31cba2": Module4PPH,
  "e5c5678a-957c-49a0-9d30-dbf63cea7565": Module5PPH,
  "de1b0001-0000-4000-8000-000000000001": Module1Deliberation,
  "de1b0002-0000-4000-8000-000000000002": Module2Deliberation,
  "de1b0003-0000-4000-8000-000000000003": Module3Deliberation,
  "de1b0004-0000-4000-8000-000000000004": Module4Deliberation,
  "de1b0005-0000-4000-8000-000000000005": Module5Deliberation,
  "de1b0006-0000-4000-8000-000000000006": Module6Deliberation,
  "7449447f-52e9-4e28-bcdf-58ff131ed7b1": Module1Vieillissement,
  "d495c1de-4027-4843-9122-c0e9507c77b3": Module2Vieillissement,
  "4c94dce0-ee04-455b-bec1-a50b27cdc875": Module3Vieillissement,
  "1f71287e-788f-4c70-aa55-1f12a6330070": Module4Vieillissement,
  "e3dc5ebd-abb7-4891-9090-52f1b000799e": Module5Vieillissement,
  "e992ccab-7ab4-4641-8e01-781ef2112bd5": Module6Vieillissement,
  "49289005-4480-4137-88fa-673bc0d2d287": Module1MDHPPH,
  "acf8c260-ad54-4908-8629-3d33def88797": Module2MDHPPH,
  "77b98c17-8566-407b-bd0a-196c8bc709b9": Module3MDHPPH,
  "7befd05f-64e8-4d62-93e1-9dbd26aeef52": Module4MDHPPH,
  "fe837bdc-855a-4a78-b2eb-8760881e3318": Module5MDHPPH,
  "fab10001-0000-4000-8000-000000000001": Module1FamillesSecteurAdulte,
  "fab10002-0000-4000-8000-000000000002": Module2FamillesSecteurAdulte,
  "fab10003-0000-4000-8000-000000000003": Module3FamillesSecteurAdulte,
  "fab10004-0000-4000-8000-000000000004": Module4FamillesSecteurAdulte,
  "fab10005-0000-4000-8000-000000000005": Module5FamillesSecteurAdulte,
  "c0ca0001-0000-4000-8000-000000000001": Module1Curatelle,
  "c0ca0002-0000-4000-8000-000000000002": Module2Curatelle,
  "c0ca0003-0000-4000-8000-000000000003": Module3Curatelle,
  "bace0001-0001-4000-8000-000000000001": Module1VieillissementBases,
  "bace0001-0002-4000-8000-000000000002": Module2VieillissementBases,
  "bace0001-0003-4000-8000-000000000003": Module3VieillissementBases,
  "bace0001-0004-4000-8000-000000000004": Module4VieillissementBases,
  "a77f0001-0004-4000-8000-000000000004": Module4VieillissementApprofondissement,
  "a77f0001-0005-4000-8000-000000000005": Module5VieillissementApprofondissement,
  "a77f0001-0006-4000-8000-000000000006": Module6VieillissementApprofondissement,
  "a77f0001-0007-4000-8000-000000000007": Module7VieillissementApprofondissement,
  "a77f0001-0008-4000-8000-000000000008": Module8VieillissementApprofondissement,
  "e9e00001-0009-4000-8000-000000000009": Module9VieillissementExpertise,
  "e9e00001-0010-4000-8000-000000000010": Module10VieillissementExpertise,
  "e9e00001-0011-4000-8000-000000000011": Module11VieillissementExpertise,
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
              <p className="text-sm font-semibold text-[#1B2D5B]">Module {moduleOrdre} — {moduleTitre}</p>
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
          <ModuleContent onValiderModule={marquerTermine} />
        ) : (
          <div className="max-w-3xl mx-auto px-8 py-12">
            <p className="text-gray-500 text-center">Contenu en cours de préparation...</p>
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