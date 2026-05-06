"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { InstitutionSidebar } from "@/components/InstitutionSidebar"

type LigneFormation = {
  formation_id: string
  titre: string
  nb_commences: number
  nb_termines: number
  taux: number
}

type DerniereAttestation = {
  id: string
  prenom: string
  nom: string
  formation_titre: string
  created_at: string
}

function dateFormat(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
}

export default function StatistiquesPage() {
  const [institutionNom, setInstitutionNom] = useState("")
  const [lignes, setLignes] = useState<LigneFormation[]>([])
  const [dernieresAttestations, setDernieresAttestations] = useState<DerniereAttestation[]>([])
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

      const inst = ip.institutions as unknown as { id: string; nom: string }
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
        .order("ordre")

      if (!formations) { setLoading(false); return }

      if (collabIds.length > 0) {
        // Tableau par formation
        const rows: LigneFormation[] = await Promise.all(
          formations.map(async (f) => {
            const { data: progData } = await supabase
              .from("progression")
              .select("profil_id")
              .eq("formation_id", f.id)
              .in("profil_id", collabIds)

            const commenced = new Set(progData?.map((p) => p.profil_id) ?? []).size

            const { count: nbTermines } = await supabase
              .from("attestations")
              .select("id", { count: "exact" })
              .eq("formation_id", f.id)
              .in("profil_id", collabIds)

            const termines = nbTermines || 0
            const taux = collabIds.length > 0 ? Math.round((termines / collabIds.length) * 100) : 0

            return { formation_id: f.id, titre: f.titre, nb_commences: commenced, nb_termines: termines, taux }
          })
        )

        // Trier : formations avec activité en premier
        const sorted = [
          ...rows.filter((r) => r.nb_commences > 0).sort((a, b) => b.nb_commences - a.nb_commences),
          ...rows.filter((r) => r.nb_commences === 0),
        ]
        setLignes(sorted)

        // 5 dernières attestations
        const { data: atts } = await supabase
          .from("attestations")
          .select("id, profil_id, created_at, formations(titre)")
          .in("profil_id", collabIds)
          .order("created_at", { ascending: false })
          .limit(5)

        if (atts && atts.length > 0) {
          const profilIds = [...new Set(atts.map((a) => a.profil_id))]
          const { data: profils } = await supabase
            .from("profils")
            .select("id, prenom, nom")
            .in("id", profilIds)
          const profilMap = new Map(profils?.map((p) => [p.id, p]) ?? [])

          setDernieresAttestations(
            atts.map((a) => {
              const p = profilMap.get(a.profil_id)
              const f = a.formations as unknown as { titre: string } | null
              return {
                id: a.id,
                prenom: p?.prenom || "",
                nom: p?.nom || "",
                formation_titre: f?.titre || "—",
                created_at: a.created_at,
              }
            })
          )
        }
      } else {
        setLignes(formations.map((f) => ({ formation_id: f.id, titre: f.titre, nb_commences: 0, nb_termines: 0, taux: 0 })))
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

  const maxCommences = Math.max(...lignes.map((l) => l.nb_commences), 1)

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <InstitutionSidebar pageActive="statistiques" institution={institutionNom} />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Statistiques</h2>
          <p className="text-gray-500 mt-1">Progression et attestations de l'équipe.</p>
        </div>

        {/* Tableau récapitulatif par formation */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="text-base font-semibold text-[#1B2D5B]">Progression par formation</h3>
          </div>
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
                    Aucune donnée disponible.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Graphique en barres */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-base font-semibold text-[#1B2D5B] mb-5">Formations les plus suivies</h3>
            {lignes.filter((l) => l.nb_commences > 0).length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">Aucune formation commencée.</p>
            ) : (
              <div className="space-y-3">
                {lignes
                  .filter((l) => l.nb_commences > 0)
                  .slice(0, 8)
                  .map((l) => (
                    <div key={l.formation_id}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-600 truncate max-w-[70%]">{l.titre}</span>
                        <span className="text-xs font-semibold text-[#1B2D5B]">{l.nb_commences}</span>
                      </div>
                      <div className="h-5 bg-gray-100 rounded-md overflow-hidden">
                        <div
                          className="h-5 bg-[#1B2D5B] rounded-md transition-all"
                          style={{ width: `${Math.round((l.nb_commences / maxCommences) * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* 5 dernières attestations */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-base font-semibold text-[#1B2D5B] mb-5">5 dernières attestations</h3>
            {dernieresAttestations.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">Aucune attestation obtenue.</p>
            ) : (
              <div className="space-y-3">
                {dernieresAttestations.map((a) => (
                  <div key={a.id} className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0">
                    <div className="w-8 h-8 rounded-full bg-[#3DBFA0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#3DBFA0] text-xs font-bold">
                        {a.prenom.charAt(0)}{a.nom.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#1B2D5B]">{a.prenom} {a.nom}</p>
                      <p className="text-xs text-gray-500 truncate">{a.formation_titre}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{dateFormat(a.created_at)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
