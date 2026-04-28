"use client"
import React from "react"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"
import { Module1PPH } from "@/app/modules/pph-module-1"

type ModuleSimple = {
  id: string
  titre: string
  ordre: number
}

type FormationType = {
  id: string
  titre: string
  slug: string
}

const MODULE_COMPONENTS: Record<string, React.ComponentType> = {
  "f8bd6cc6-b91e-4542-a9c4-53001ddd9090": Module1PPH,
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
  const [saving, setSaving] = useState(false)
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
        .select("id, titre, slug")
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
      if (prog) setStatut(prog.statut)
      else {
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
    setSaving(true)
    await supabase.from("progression").upsert({
      profil_id: userId,
      module_id: moduleId,
      formation_id: formation.id,
      statut: "termine"
    }, { onConflict: "profil_id,module_id" })
    setStatut("termine")

    const tries = listeModules.slice().sort(function(a, b) { return a.ordre - b.ordre })
    const idx = tries.findIndex(function(m) { return m.id === moduleId })
    const modSuivant = tries[idx + 1]

    setSaving(false)

    if (modSuivant) {
      router.push("/formations/" + formation.slug + "/modules/" + modSuivant.id)
    } else {
      await supabase.from("attestations").upsert({
        profil_id: userId,
        formation_id: formation.id
      }, { onConflict: "profil_id,formation_id" })
      router.push("/formations/" + formation.slug + "?termine=1")
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

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <a href={"/formations/" + formSlug} className="text-[#3DBFA0] hover:text-[#2ea88b] text-sm">
            Retour
          </a>
          <div className="h-4 w-px bg-gray-200" />
          <div>
            <p className="text-xs text-gray-400">{formation?.titre}</p>
            <p className="text-sm font-semibold text-[#1B2D5B]">Module {moduleOrdre} — {moduleTitre}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">{moduleDuree} min</span>
          {statut === "termine" ? (
            <span className="text-xs font-medium text-[#3DBFA0] bg-[#3DBFA0]/10 px-3 py-1 rounded-full">
              Terminé
            </span>
          ) : (
            <button
              onClick={marquerTermine}
              disabled={saving}
              className="bg-[#3DBFA0] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors disabled:opacity-50"
            >
              {saving ? "..." : "Marquer comme terminé"}
            </button>
          )}
          {statut === "termine" && modNext && (
              <a
              href={"/formations/" + formSlug + "/modules/" + modNext.id}
              className="bg-[#1B2D5B] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#152347] transition-colors"
            >
              Module suivant →
            </a>
          )}
        </div>
      </div>

      <div className="pb-20">
        {ModuleContent ? (
          <ModuleContent />
        ) : (
          <div className="max-w-3xl mx-auto px-8 py-12">
            <p className="text-gray-500 text-center">Contenu en cours de préparation...</p>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 flex items-center justify-between">
        <div>
          {modPrev && (
            <a href={"/formations/" + formSlug + "/modules/" + modPrev.id} className="text-sm text-gray-400 hover:text-[#1B2D5B]">
              Module précédent
            </a>
          )}
        </div>
        <p className="text-xs text-gray-300">{moduleOrdre} / {listeModules.length}</p>
        <div>
          {modNext && statut === "termine" && (
            <a href={"/formations/" + formSlug + "/modules/" + modNext.id} className="text-sm text-[#3DBFA0] font-medium">
              Module suivant →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}