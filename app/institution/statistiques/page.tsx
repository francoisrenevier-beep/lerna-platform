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
  moy_recommandation: number
  nb_evaluations: number
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
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: ip, error: ipError } = await supabase
        .from("institution_profils")
        .select("role, institution_id")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()

      if (ipError || !ip || ip.role !== "responsable") { router.push("/dashboard"); return }

      const institutionId = ip.institution_id

      const { data: inst } = await supabase
        .from("institutions")
        .select("nom")
        .eq("id", institutionId)
        .single()

      setInstitutionNom(inst?.nom || "")

      const { data: collabIps } = await supabase
        .from("institution_profils")
        .select("profil_id")
        .eq("institution_id", institutionId)
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

            // Satisfaction : évaluations des collaborateurs pour cette formation
            const { data: evals } = await supabase
              .from("evaluations_formations")
              .select("recommandation")
              .eq("formation_id", f.id)
              .in("profil_id", collabIds)

            const nbEvals = evals?.length ?? 0
            const moyReco = nbEvals > 0
              ? evals!.reduce((acc, e) => acc + e.recommandation, 0) / nbEvals
              : 0

            return { formation_id: f.id, titre: f.titre, nb_commences: commenced, nb_termines: termines, taux, moy_recommandation: moyReco, nb_evaluations: nbEvals }
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
          .select("id, profil_id, formation_id, created_at")
          .in("profil_id", collabIds)
          .order("created_at", { ascending: false })
          .limit(5)

        if (atts && atts.length > 0) {
          const profilIds = [...new Set(atts.map((a) => a.profil_id))]
          const formationIds = [...new Set(atts.map((a) => a.formation_id))]
          const { data: profils } = await supabase
            .from("profils")
            .select("id, prenom, nom")
            .in("id", profilIds)
          const { data: formationsTitres } = await supabase
            .from("formations")
            .select("id, titre")
            .in("id", formationIds)
          const profilMap = new Map(profils?.map((p) => [p.id, p]) ?? [])
          const formationMap = new Map(formationsTitres?.map((f) => [f.id, f]) ?? [])

          setDernieresAttestations(
            atts.map((a) => {
              const p = profilMap.get(a.profil_id)
              const f = formationMap.get(a.formation_id)
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
        setLignes(formations.map((f) => ({ formation_id: f.id, titre: f.titre, nb_commences: 0, nb_termines: 0, taux: 0, moy_recommandation: 0, nb_evaluations: 0 })))
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

        {/* Satisfaction des formations */}
        {lignes.some((l) => l.nb_evaluations > 0) && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-semibold text-[#1B2D5B]">Satisfaction des formations</h3>
              <p className="text-xs text-gray-400 mt-0.5">Note de recommandation moyenne par formation</p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formation</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Recommandation moyenne</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Évaluations</th>
                </tr>
              </thead>
              <tbody>
                {lignes.filter((l) => l.nb_evaluations > 0).map((l) => (
                  <tr key={l.formation_id} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3 font-medium text-[#1B2D5B]">{l.titre}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => {
                          const plein = i <= Math.round(l.moy_recommandation)
                          return (
                            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={plein ? "#3DBFA0" : "none"} stroke={plein ? "#3DBFA0" : "#d1d5db"} strokeWidth="1.5">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                          )
                        })}
                        <span className="text-xs text-gray-500 ml-1">{l.moy_recommandation.toFixed(1)}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">{l.nb_evaluations}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

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
