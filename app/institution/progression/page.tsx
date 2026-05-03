"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { InstitutionSidebar } from "@/components/InstitutionSidebar"

type LigneProgression = {
  formation_id: string
  titre: string
  nb_commences: number
  nb_termines: number
  taux: number
}

export default function ProgressionPage() {
  const [institutionNom, setInstitutionNom] = useState("")
  const [lignes, setLignes] = useState<LigneProgression[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) { router.push("/connexion"); return }

      const { data: ip } = await supabase
        .from("institution_profils")
        .select("role, institution_id, institutions(id, nom)")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()

      if (!ip || ip.role !== "responsable") { router.push("/dashboard"); return }

      const inst = ip.institutions as { id: string; nom: string }
      setInstitutionNom(inst.nom)

      const { data: collabIps } = await supabase
        .from("institution_profils")
        .select("profil_id")
        .eq("institution_id", inst.id)
        .eq("role", "collaborateur")
        .eq("statut", "actif")

      const collabIds = collabIps?.map((c) => c.profil_id) ?? []

      const { data: formations } = await supabase
        .from("formations")
        .select("id, titre")
        .eq("est_publie", true)
        .eq("est_privee", false)
        .order("ordre")

      if (!formations || collabIds.length === 0) {
        setLignes([])
        setLoading(false)
        return
      }

      const rows: LigneProgression[] = await Promise.all(
        formations.map(async (f) => {
          const { data: progData } = await supabase
            .from("progression")
            .select("profil_id, statut")
            .eq("formation_id", f.id)
            .in("profil_id", collabIds)

          const commenced = new Set(progData?.map((p) => p.profil_id) ?? [])
          const termines = new Set(
            progData?.filter((p) => p.statut === "termine").map((p) => p.profil_id) ?? []
          )

          const nb_commences = commenced.size
          const nb_termines = termines.size
          const taux = collabIds.length > 0 ? Math.round((nb_termines / collabIds.length) * 100) : 0

          return { formation_id: f.id, titre: f.titre, nb_commences, nb_termines, taux }
        })
      )

      setLignes(rows.filter((r) => r.nb_commences > 0 || r.nb_termines > 0).concat(
        rows.filter((r) => r.nb_commences === 0 && r.nb_termines === 0)
      ))
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
      <InstitutionSidebar pageActive="progression" institution={institutionNom} />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Progression de l'équipe</h2>
          <p className="text-gray-500 mt-1">Suivi de la progression par formation pour les collaborateurs actifs.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formation</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Commencé</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Terminé</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-48">Taux de complétion</th>
              </tr>
            </thead>
            <tbody>
              {lignes.map((l) => (
                <tr key={l.formation_id} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 font-medium text-[#1B2D5B]">{l.titre}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{l.nb_commences}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{l.nb_termines}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-[#3DBFA0] transition-all"
                          style={{ width: `${l.taux}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-gray-600 w-10 text-right">{l.taux} %</span>
                    </div>
                  </td>
                </tr>
              ))}
              {lignes.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-400 text-sm">
                    Aucune donnée de progression disponible.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
