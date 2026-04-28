
"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"

type ModuleType = {
  id: string
  titre: string
  description: string
  contenu: string
  ordre: number
  duree_minutes: number
  type: string
  formation_id: string
}

type FormationType = {
  id: string
  titre: string
  slug: string
}

type ModuleSimple = {
  id: string
  titre: string
  ordre: number
}

export default function ModulePage() {
  const [moduleActuel, setModuleActuel] = useState<ModuleType | null>(null)
  const [formation, setFormation] = useState<FormationType | null>(null)
  const [listeModules, setListeModules] = useState<ModuleSimple[]>([])
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
      const moduleId = parts[parts.length - 1]
      const slug = parts[parts.length - 3]

      const { data: f } = await supabase
        .from("formations")
        .select("id, titre, slug")
        .eq("slug", slug)
        .single()
      if (!f) { router.push("/formations"); return }
      setFormation(f)

      const { data: m } = await supabase
        .from("modules")
        .select("id, titre, description, contenu, ordre, duree_minutes, type, formation_id")
        .eq("id", moduleId)
        .single()
      if (!m) { router.push("/formations/" + slug); return }
      setModuleActuel(m)

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
        .eq("module_id", moduleId)
        .single()
      if (prog) setStatut(prog.statut)
      else {
        await supabase.from("progression").upsert({
          profil_id: user.id,
          module_id: moduleId,
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
    if (!userId || !moduleActuel || !formation) return
    setSaving(true)
    await supabase.from("progression").upsert({
      profil_id: userId,
      module_id: moduleActuel.id,
      formation_id: formation.id,
      statut: "termine"
    }, { onConflict: "profil_id,module_id" })
    setStatut("termine")

    const tries = listeModules.slice().sort(function(a, b) { return a.ordre - b.ordre })
    const idx = tries.findIndex(function(m) { return m.id === moduleActuel.id })
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
  const idx = tries.findIndex(function(m) { return m.id === moduleActuel?.id })
  const modPrev = tries[idx - 1]
  const modNext = tries[idx + 1]
  const formSlug = formation ? formation.slug : ""

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-[#1B2D5B] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold">LERNA</h1>
        </div>
        <div className="p-4 border-b border-white/10">
          <p className="text-xs text-white/40 mb-1">Formation</p>
          <p className="text-xs text-white/80 font-medium">{formation?.titre}</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {tries.map(function(m, i) {
            const estActif = m.id === moduleActuel?.id
            return (
              <div key={i} className={"flex items-center gap-2 px-3 py-2 rounded-lg text-xs " + (estActif ? "bg-white/10 text-white font-medium" : "text-white/50")}>
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">{m.ordre}</span>
                <span>{m.titre}</span>
              </div>
            )
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href={"/formations/" + formSlug} className="text-xs text-white/50 hover:text-white">
            Retour a la formation
          </a>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Module {moduleActuel?.ordre} sur {listeModules.length}</p>
            <h2 className="text-lg font-bold text-[#1B2D5B]">{moduleActuel?.titre}</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400">{moduleActuel?.duree_minutes} min</span>
            {statut === "termine" && (
              <span className="text-xs font-medium text-[#3DBFA0] bg-[#3DBFA0]/10 px-2 py-1 rounded-full">Termine</span>
            )}
          </div>
        </div>

        <div className="flex-1 p-8 max-w-3xl mx-auto w-full">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-6">
            {moduleActuel?.contenu?.split("\n").map(function(para, i) {
              if (para.trim() === "") return <br key={i} />
              return <p key={i} className="text-gray-700 mb-4 leading-relaxed">{para}</p>
            })}
          </div>

          <div className="flex items-center justify-between">
            <div>
              {modPrev && (
                <a href={"/formations/" + formSlug + "/modules/" + modPrev.id} className="text-sm text-gray-400 hover:text-[#1B2D5B]">
                  Module precedent
                </a>
              )}
            </div>
            <div className="flex gap-3">
              {statut !== "termine" && (
                <button onClick={marquerTermine} disabled={saving} className="bg-[#3DBFA0] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2ea88b] disabled:opacity-50">
                  {saving ? "Enregistrement..." : "Marquer comme termine"}
                </button>
              )}
              {statut === "termine" && modNext && (
                <a href={"/formations/" + formSlug + "/modules/" + modNext.id} className="bg-[#1B2D5B] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#152347]">
                  Module suivant
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
