"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { AdminSidebar } from "@/components/AdminSidebar"

type StatFormation = {
  formation_id: string
  titre: string
  nb_evaluations: number
  moy_clarte: number
  moy_pertinence: number
  moy_recommandation: number
  moy_globale: number
  pct_nouveautes: number
}

type Commentaire = {
  id: string
  prenom: string
  nom: string
  formation_titre: string
  commentaire: string
  created_at: string
}

function Etoiles({ note }: { note: number }) {
  const arrondi = Math.round(note * 2) / 2
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const plein = i <= arrondi
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={plein ? "#3DBFA0" : "none"} stroke={plein ? "#3DBFA0" : "#d1d5db"} strokeWidth="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        )
      })}
      <span className="text-xs text-gray-500 ml-1">{note.toFixed(1)}</span>
    </div>
  )
}

function dateFormat(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
}

export default function AdminEvaluationsPage() {
  const [stats, setStats] = useState<StatFormation[]>([])
  const [commentaires, setCommentaires] = useState<Commentaire[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: ip } = await supabase
        .from("institution_profils")
        .select("role")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()

      if (!ip || ip.role !== "admin") { router.push("/dashboard"); return }

      const { data: formations } = await supabase
        .from("formations")
        .select("id, titre")
        .eq("est_publie", true)
        .order("ordre")

      if (!formations) { setLoading(false); return }

      const { data: evaluations } = await supabase
        .from("evaluations_formations")
        .select("formation_id, clarte, pertinence_terrain, nouveautes_apprises, recommandation, commentaire, profil_id, created_at, id")
        .order("created_at", { ascending: false })

      if (!evaluations) { setLoading(false); return }

      // Stats par formation
      const statsMap: StatFormation[] = formations.map((f) => {
        const evals = evaluations.filter((e) => e.formation_id === f.id)
        if (evals.length === 0) {
          return { formation_id: f.id, titre: f.titre, nb_evaluations: 0, moy_clarte: 0, moy_pertinence: 0, moy_recommandation: 0, moy_globale: 0, pct_nouveautes: 0 }
        }
        const moy = (arr: number[]) => arr.reduce((a, b) => a + b, 0) / arr.length
        const moyClarte = moy(evals.map((e) => e.clarte))
        const moyPertinence = moy(evals.map((e) => e.pertinence_terrain))
        const moyReco = moy(evals.map((e) => e.recommandation))
        const moyGlobale = moy([moyClarte, moyPertinence, moyReco])
        const nbPositif = evals.filter((e) => e.nouveautes_apprises === "oui" || e.nouveautes_apprises === "plutot-oui").length
        const pct = Math.round((nbPositif / evals.length) * 100)
        return {
          formation_id: f.id,
          titre: f.titre,
          nb_evaluations: evals.length,
          moy_clarte: moyClarte,
          moy_pertinence: moyPertinence,
          moy_recommandation: moyReco,
          moy_globale: moyGlobale,
          pct_nouveautes: pct,
        }
      }).filter((s) => s.nb_evaluations > 0)

      setStats(statsMap)

      // Commentaires — récupère profils
      const avecCommentaire = evaluations.filter((e) => e.commentaire)
      if (avecCommentaire.length > 0) {
        const profilIds = [...new Set(avecCommentaire.map((e) => e.profil_id))]
        const formationIds = [...new Set(avecCommentaire.map((e) => e.formation_id))]

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

        setCommentaires(
          avecCommentaire.slice(0, 20).map((e) => {
            const p = profilMap.get(e.profil_id)
            const f = formationMap.get(e.formation_id)
            return {
              id: e.id,
              prenom: p?.prenom || "",
              nom: p?.nom || "",
              formation_titre: f?.titre || "—",
              commentaire: e.commentaire,
              created_at: e.created_at,
            }
          })
        )
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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="evaluations" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Évaluations de satisfaction</h2>
          <p className="text-gray-500 mt-1">Résultats des questionnaires post-formation.</p>
        </div>

        {stats.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 text-center">
            <p className="text-gray-400 text-sm">Aucune évaluation reçue pour le moment.</p>
          </div>
        ) : (
          <>
            {/* Tableau par formation */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-base font-semibold text-[#1B2D5B]">Résultats par formation</h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formation</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Évaluations</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Note globale</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Clarté</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Pertinence terrain</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Recommandation</th>
                    <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Nouveautés</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((s) => (
                    <tr key={s.formation_id} className="border-b border-gray-50 last:border-0">
                      <td className="px-4 py-3 font-medium text-[#1B2D5B] max-w-[180px]">
                        <span className="block truncate">{s.titre}</span>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 font-semibold">{s.nb_evaluations}</td>
                      <td className="px-4 py-3"><Etoiles note={s.moy_globale} /></td>
                      <td className="px-4 py-3"><Etoiles note={s.moy_clarte} /></td>
                      <td className="px-4 py-3"><Etoiles note={s.moy_pertinence} /></td>
                      <td className="px-4 py-3"><Etoiles note={s.moy_recommandation} /></td>
                      <td className="px-4 py-3 text-center">
                        <span className={
                          "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium " +
                          (s.pct_nouveautes >= 70 ? "bg-[#3DBFA0]/10 text-[#3DBFA0]" : "bg-gray-100 text-gray-600")
                        }>
                          {s.pct_nouveautes} %
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Commentaires libres */}
            {commentaires.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h3 className="text-base font-semibold text-[#1B2D5B]">Derniers commentaires</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {commentaires.map((c) => (
                    <div key={c.id} className="px-6 py-4">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <span className="text-sm font-medium text-[#1B2D5B]">{c.prenom} {c.nom}</span>
                          <span className="text-xs text-gray-400 ml-2">· {c.formation_titre}</span>
                        </div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{dateFormat(c.created_at)}</span>
                      </div>
                      <p className="text-sm text-gray-600 italic">"{c.commentaire}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
