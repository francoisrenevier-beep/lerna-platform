"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Sidebar } from "@/components/Sidebar"
import { BottomNav } from "@/components/BottomNav"

type ParcoursData = {
  id: string
  titre: string
  slug: string
  description: string | null
  description_courte: string | null
  image_url: string | null
}

type FormationDansParcours = {
  liaison_id: string
  formation_id: string
  ordre: number
  titre: string
  slug: string
  description_courte: string | null
  niveau: string | null
  duree_estimee_minutes: number | null
  image_url: string | null
  // état calculé
  completee: boolean
  accessible: boolean
  nb_modules_termines: number
  nb_modules_total: number
}

const NIVEAUX_LABEL: Record<string, { label: string; color: string }> = {
  base: { label: "Base", color: "bg-blue-100 text-blue-700" },
  intermediaire: { label: "Intermédiaire", color: "bg-amber-100 text-amber-700" },
  confirme: { label: "Confirmé", color: "bg-purple-100 text-purple-700" },
  tous: { label: "Tous niveaux", color: "bg-gray-100 text-gray-500" },
}

function formatDuree(minutes: number | null): string {
  if (!minutes || minutes <= 0) return "—"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? (m > 0 ? `${h}h${m.toString().padStart(2, "0")}` : `${h}h`) : `${m} min`
}

export default function ParcoursPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const [parcours, setParcours] = useState<ParcoursData | null>(null)
  const [formations, setFormations] = useState<FormationDansParcours[]>([])
  const [aAttestationParcours, setAAttestationParcours] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const getData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push("/connexion"); return }
      setUserId(user.id)

      // Charger le parcours
      const { data: p } = await supabase
        .from("parcours")
        .select("id, titre, slug, description, description_courte, image_url")
        .eq("slug", slug)
        .eq("est_publie", true)
        .single()

      if (!p) { router.push("/catalogue"); return }
      setParcours(p as ParcoursData)

      // Charger les formations du parcours (ordonnées)
      const { data: pf } = await supabase
        .from("parcours_formations")
        .select("id, formation_id, ordre, formations(titre, slug, description_courte, niveau, duree_estimee_minutes, image_url)")
        .eq("parcours_id", p.id)
        .order("ordre")

      if (!pf || pf.length === 0) { setFormations([]); setLoading(false); return }

      const formationIds = pf.map((f: any) => f.formation_id)

      // Charger attestations + progression de l'utilisateur
      const [{ data: attestations }, { data: progression }, { data: modules }] = await Promise.all([
        supabase.from("attestations").select("formation_id").eq("profil_id", user.id).in("formation_id", formationIds),
        supabase.from("progression").select("formation_id, statut").eq("profil_id", user.id).in("formation_id", formationIds),
        supabase.from("modules").select("formation_id, id"),
      ])

      // Charger attestation parcours
      const { data: attParcours } = await supabase
        .from("attestations_parcours")
        .select("id")
        .eq("profil_id", user.id)
        .eq("parcours_id", p.id)
        .single()
      setAAttestationParcours(!!attParcours)

      const attestSet = new Set(attestations?.map((a: any) => a.formation_id) || [])
      const progressMap = new Map<string, number>()
      for (const prog of progression || []) {
        if (prog.statut === "termine") {
          progressMap.set(prog.formation_id, (progressMap.get(prog.formation_id) || 0) + 1)
        }
      }
      const moduleCount = new Map<string, number>()
      for (const m of modules || []) {
        moduleCount.set(m.formation_id, (moduleCount.get(m.formation_id) || 0) + 1)
      }

      const formationsAvecEtat: FormationDansParcours[] = pf.map((f: any, i: number) => {
        const completee = attestSet.has(f.formation_id)
        // Accessible si c'est la première ou si la précédente est terminée
        const accessible = i === 0 || attestSet.has(pf[i - 1].formation_id)
        return {
          liaison_id: f.id,
          formation_id: f.formation_id,
          ordre: f.ordre,
          titre: f.formations?.titre || "",
          slug: f.formations?.slug || "",
          description_courte: f.formations?.description_courte || null,
          niveau: f.formations?.niveau || null,
          duree_estimee_minutes: f.formations?.duree_estimee_minutes || null,
          image_url: f.formations?.image_url || null,
          completee,
          accessible,
          nb_modules_termines: progressMap.get(f.formation_id) || 0,
          nb_modules_total: moduleCount.get(f.formation_id) || 0,
        }
      })

      setFormations(formationsAvecEtat)

      // Auto-générer l'attestation parcours si tout est terminé
      const toutTermine = formationsAvecEtat.every(f => f.completee)
      if (toutTermine && formationsAvecEtat.length > 0 && !attParcours) {
        await supabase.from("attestations_parcours").upsert({
          profil_id: user.id,
          parcours_id: p.id,
        })
        setAAttestationParcours(true)
      }

      setLoading(false)
    }
    getData()
  }, [slug, router])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="text-[#1B2D5B] text-sm animate-pulse">Chargement...</div>
    </div>
  )

  if (!parcours) return null

  const nbCompletees = formations.filter(f => f.completee).length
  const pct = formations.length > 0 ? Math.round((nbCompletees / formations.length) * 100) : 0
  const dureeTotal = formations.reduce((s, f) => s + (f.duree_estimee_minutes || 0), 0)
  const formationCourante = formations.find(f => f.accessible && !f.completee)

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-x-hidden">
      <Sidebar pageActive="catalogue" />
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <div className="relative bg-[#1B2D5B] overflow-hidden">
          {parcours.image_url && (
            <img
              src={parcours.image_url}
              alt={parcours.titre}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          )}
          <div className="relative z-10 px-4 md:px-10 py-8 md:py-12">
            <a href="/catalogue" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-xs mb-5 transition-colors">
              ← Retour au catalogue
            </a>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA0] bg-[#3DBFA0]/20 border border-[#3DBFA0]/40 px-3 py-1 rounded-full">
                Parcours complet
              </span>
              <span className="text-xs text-white/50">{formations.length} formations · {formatDuree(dureeTotal)}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{parcours.titre}</h1>
            {parcours.description_courte && (
              <p className="text-white/70 text-sm md:text-base max-w-2xl mb-5">{parcours.description_courte}</p>
            )}

            {/* Progression */}
            {nbCompletees > 0 ? (
              <div className="max-w-md">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-white/70">{nbCompletees}/{formations.length} formations terminées</span>
                  <span className="text-[#3DBFA0] font-bold">{pct}%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-2 bg-[#3DBFA0] rounded-full transition-all" style={{ width: `${pct}%` }} />
                </div>
                {aAttestationParcours && (
                  <div className="mt-3 inline-flex items-center gap-2 bg-[#3DBFA0]/20 border border-[#3DBFA0]/40 text-[#3DBFA0] text-xs font-bold px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Parcours terminé — Attestation obtenue
                  </div>
                )}
              </div>
            ) : (
              formationCourante && (
                <a
                  href={`/formations/${formationCourante.slug}`}
                  className="inline-flex items-center gap-2 bg-[#3DBFA0] hover:bg-[#2ea88b] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Commencer le parcours →
                </a>
              )
            )}
          </div>
        </div>

        {/* ── Contenu ───────────────────────────────────────────────────────── */}
        <main className="flex-1 px-4 md:px-10 py-8 max-w-3xl">
          {parcours.description && (
            <div className="mb-8 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{parcours.description}</p>
            </div>
          )}

          <h2 className="text-lg font-bold text-[#1B2D5B] mb-4">
            Formations du parcours
          </h2>

          <div className="space-y-3">
            {formations.map((f, i) => {
              const niveauInfo = f.niveau ? NIVEAUX_LABEL[f.niveau] : null
              const isCurrent = formationCourante?.formation_id === f.formation_id

              return (
                <div
                  key={f.liaison_id}
                  className={`bg-white rounded-xl border-2 shadow-sm overflow-hidden transition-all ${
                    f.completee
                      ? "border-green-200"
                      : isCurrent
                      ? "border-[#3DBFA0]"
                      : f.accessible
                      ? "border-gray-100 hover:border-gray-200"
                      : "border-gray-100 opacity-60"
                  }`}
                >
                  <div className="flex items-stretch">
                    {/* Numéro + indicateur */}
                    <div className={`w-14 flex flex-col items-center justify-center flex-shrink-0 py-4 ${
                      f.completee ? "bg-green-50" : isCurrent ? "bg-[#3DBFA0]/10" : "bg-gray-50"
                    }`}>
                      {f.completee ? (
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : !f.accessible ? (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      ) : (
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          isCurrent ? "bg-[#3DBFA0] text-white" : "bg-[#1B2D5B]/10 text-[#1B2D5B]"
                        }`}>
                          {i + 1}
                        </span>
                      )}
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 p-4 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className={`font-bold text-sm leading-snug ${f.accessible ? "text-[#1B2D5B]" : "text-gray-400"}`}>
                              {f.titre}
                            </h3>
                            {niveauInfo && (
                              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0 ${niveauInfo.color}`}>
                                {niveauInfo.label}
                              </span>
                            )}
                          </div>
                          {f.description_courte && (
                            <p className="text-xs text-gray-500 line-clamp-2 mb-2">{f.description_courte}</p>
                          )}
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span>{formatDuree(f.duree_estimee_minutes)}</span>
                            {f.accessible && !f.completee && f.nb_modules_total > 0 && f.nb_modules_termines > 0 && (
                              <span className="text-[#3DBFA0]">{f.nb_modules_termines}/{f.nb_modules_total} modules</span>
                            )}
                          </div>
                          {/* Barre de progression si en cours */}
                          {f.accessible && !f.completee && f.nb_modules_total > 0 && f.nb_modules_termines > 0 && (
                            <div className="mt-2 flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className="h-1.5 bg-[#3DBFA0] rounded-full"
                                  style={{ width: `${(f.nb_modules_termines / f.nb_modules_total) * 100}%` }}
                                />
                              </div>
                            </div>
                          )}
                          {!f.accessible && (
                            <p className="text-[10px] text-gray-400 mt-1">
                              Terminez la formation précédente pour débloquer
                            </p>
                          )}
                        </div>

                        {/* Bouton action */}
                        {f.accessible && (
                          <a
                            href={`/formations/${f.slug}`}
                            className={`flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                              f.completee
                                ? "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                : isCurrent
                                ? "bg-[#3DBFA0] text-white hover:bg-[#2ea88b]"
                                : "bg-[#1B2D5B]/10 text-[#1B2D5B] hover:bg-[#1B2D5B]/20"
                            }`}
                          >
                            {f.completee ? "Revoir →" : f.nb_modules_termines > 0 ? "Continuer →" : "Commencer →"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </div>
      <BottomNav pageActive="catalogue" />
    </div>
  )
}
