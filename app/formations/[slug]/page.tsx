"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"

type Module = {
  id: string
  titre: string
  description: string
  ordre: number
  duree_minutes: number
  type: string
}

type Formation = {
  id: string
  titre: string
  description: string
  categorie: string
  niveau: string
  duree_estimee_minutes: number
}

type Progression = {
  module_id: string
  statut: string
}

export default function FormationDetailPage() {
  const [formation, setFormation] = useState<Formation | null>(null)
  const [modules, setModules] = useState<Module[]>([])
  const [progression, setProgression] = useState<Progression[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) {
        router.push("/connexion")
        return
      }
      setUserId(user.id)

      const parts = pathname.split("/")
      const slug = parts[parts.length - 1]

      const { data: f } = await supabase
        .from("formations")
        .select("id, titre, description, categorie, niveau, duree_estimee_minutes")
        .eq("slug", slug)
        .single()

      if (!f) {
        setNotFound(true)
        setLoading(false)
        return
      }
      setFormation(f)

      const { data: m } = await supabase
        .from("modules")
        .select("id, titre, description, ordre, duree_minutes, type")
        .eq("formation_id", f.id)
        .order("ordre")
      if (m) setModules(m)

      const { data: prog } = await supabase
        .from("progression")
        .select("module_id, statut")
        .eq("profil_id", user.id)
        .eq("formation_id", f.id)
      if (prog) setProgression(prog)

      setLoading(false)
    }
    getData()
  }, [pathname, router])

  const getStatutModule = (moduleId: string) => {
    const p = progression.find(function(p) { return p.module_id === moduleId })
    return p ? p.statut : "non_commence"
  }

  const moduleAccessible = (ordre: number) => {
    if (ordre === 1) return true
    const modulePrecedent = modules.find(function(m) { return m.ordre === ordre - 1 })
    if (!modulePrecedent) return false
    return getStatutModule(modulePrecedent.id) === "termine"
  }

  const nbTermines = progression.filter(function(p) { return p.statut === "termine" }).length

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-[#1B2D5B] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold">LERNA</h1>
          <p className="text-xs text-white/50 mt-1">ancrer les compétences</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors">
            🏠 Accueil
          </a>
          <a href="/formations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium">
            📚 Mes formations
          </a>
          <a href="/progression" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors">
            📈 Ma progression
          </a>
          <a href="/attestations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors">
            🎓 Attestations
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
          >
            → Se déconnecter
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <a href="/formations" className="text-sm text-[#3DBFA0] hover:underline mb-6 inline-block">
          ← Retour aux formations
        </a>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-6">
          <span className="text-xs font-medium text-[#3DBFA0] bg-[#3DBFA0]/10 px-2 py-1 rounded-full">
            {formation?.categorie}
          </span>
          <h2 className="text-2xl font-bold text-[#1B2D5B] mt-3 mb-2">{formation?.titre}</h2>
          <p className="text-gray-500 text-sm mb-4">{formation?.description}</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <span>Niveau : {formation?.niveau}</span>
            <span>{formation?.duree_estimee_minutes} minutes</span>
            <span>{modules.length} modules</span>
          </div>

          {modules.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">Progression</span>
                <span className="text-xs font-medium text-[#1B2D5B]">{nbTermines}/{modules.length} modules</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-[#3DBFA0] h-2 rounded-full transition-all"
                  style={{ width: (nbTermines / modules.length * 100) + "%" }}
                />
              </div>
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-[#1B2D5B] mb-4">Modules de la formation</h3>
        <div className="space-y-3">
          {modules.map(function(m) {
            const statut = getStatutModule(m.id)
            const accessible = moduleAccessible(m.ordre)
            return (
              <div
                key={m.id}
                className={`bg-white rounded-xl border shadow-sm p-5 flex items-center gap-4 ${accessible ? "border-gray-100 cursor-pointer hover:shadow-md transition-shadow" : "border-gray-100 opacity-50 cursor-not-allowed"}`}
                onClick={function() {
                  if (accessible && formation) {
                    router.push("/formations/" + formation.id + "/modules/" + m.id)
                  }
                }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${statut === "termine" ? "bg-[#3DBFA0] text-white" : "bg-[#3DBFA0]/10 text-[#3DBFA0]"}`}>
                  {statut === "termine" ? "✓" : m.ordre}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-[#1B2D5B]">{m.titre}</h4>
                  <p className="text-xs text-gray-400 mt-1">{m.description}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-gray-400">{m.duree_minutes} min</span>
                  {!accessible && <span className="text-xs text-gray-300">🔒</span>}
                  {statut === "en_cours" && <span className="text-xs text-[#3DBFA0] font-medium">En cours</span>}
                  {statut === "termine" && <span className="text-xs text-[#3DBFA0] font-medium">Terminé</span>}
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}