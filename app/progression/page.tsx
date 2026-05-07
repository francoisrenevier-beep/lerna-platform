"use client"

import { useEffect, useState, useCallback } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { getCouleurEtiquette } from "@/lib/etiquettes"
import { BADGE_DEFS, verifierEtAttribuerBadges, type BadgeStats, type BadgeDef } from "@/lib/badges"

// ── Types ──────────────────────────────────────────────────────────────────────

type ProgRecord = {
  formation_id: string
  module_id: string
  statut: string
  updated_at: string | null
}

type ModuleRow = {
  id: string
  formation_id: string
  ordre: number
}

type FormationRow = {
  id: string
  titre: string
  slug: string
  duree_estimee_minutes: number
  domaine: string | null
  thematique: string | null
  parcours_id: string | null
  parcours_ordre: number | null
}

type FormationPubliee = {
  id: string
  titre: string
  slug: string
  parcours_id: string | null
  parcours_ordre: number | null
}

type FormationEnCours = {
  id: string
  titre: string
  slug: string
  domaine: string | null
  thematique: string | null
  nbModules: number
  nbTermines: number
  prochainModuleId: string | null
}

type BadgeRow = {
  badge_id: string
  obtenu_le: string
}

type Recommandation = {
  icone: string
  titre: string
  detail: string
  href: string
  cta: string
}

type PageStats = {
  formationsCompletees: number
  heures: number
  attestations: number
  derniereActivite: string | null
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function formatDate(d: string | null) {
  if (!d) return "—"
  return new Date(d).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function formatHeures(minutes: number) {
  if (minutes === 0) return "0 h"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return m + " min"
  if (m === 0) return h + "h"
  return h + "h" + m
}

function Etiquette({ type, valeur }: { type: "domaine" | "thematique"; valeur: string | null | undefined }) {
  if (!valeur) return null
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCouleurEtiquette(type, valeur)}`}>
      {valeur}
    </span>
  )
}

// ── Sous-composants ────────────────────────────────────────────────────────────

function StatCard({ icone, valeur, label }: { icone: string; valeur: string; label: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="text-2xl mb-2">{icone}</div>
      <div className="text-2xl font-bold text-[#1B2D5B]">{valeur}</div>
      <div className="text-xs text-gray-400 mt-0.5">{label}</div>
    </div>
  )
}

function BadgeCard({ badge, obtenuLe }: { badge: BadgeDef; obtenuLe: string }) {
  return (
    <div className="bg-white rounded-xl border border-[#3DBFA0]/30 shadow-sm p-4 flex items-start gap-3">
      <span className="text-3xl flex-shrink-0">{badge.icone}</span>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[#1B2D5B] text-sm">{badge.titre}</div>
        <div className="text-xs text-gray-500 mt-0.5">{badge.description}</div>
        <div className="text-xs text-[#3DBFA0] font-medium mt-1.5">Obtenu le {formatDate(obtenuLe)}</div>
      </div>
    </div>
  )
}

function BadgeLockedCard({ badge, stats }: { badge: BadgeDef; stats: BadgeStats }) {
  const current = badge.progressCurrent ? badge.progressCurrent(stats) : null
  const total = badge.progressTotal ?? null
  const pct = current !== null && total ? Math.min((current / total) * 100, 100) : null

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-start gap-3 opacity-60">
      <span className="text-3xl flex-shrink-0 grayscale">{badge.icone}</span>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-gray-500 text-sm">{badge.titre}</div>
        <div className="text-xs text-gray-400 mt-0.5">{badge.conditionLabel}</div>
        {pct !== null && total !== null && current !== null && (
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>{current} / {total}</span>
              <span>{Math.round(pct)}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div className="bg-[#3DBFA0]/50 h-1.5 rounded-full transition-all" style={{ width: pct + "%" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CelebrationBadge({ badge, onDismiss }: { badge: BadgeDef; onDismiss: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 5000)
    return () => clearTimeout(t)
  }, [onDismiss])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onDismiss}
    >
      <style>{`
        @keyframes badge-pop {
          0%   { opacity: 0; transform: scale(0.6); }
          70%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .badge-pop { animation: badge-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
      `}</style>
      <div
        className="badge-pop bg-white rounded-2xl p-8 text-center shadow-2xl max-w-xs mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-6xl mb-4">{badge.icone}</div>
        <div className="text-xs font-bold text-[#3DBFA0] uppercase tracking-widest mb-2">
          Nouveau badge obtenu !
        </div>
        <div className="text-xl font-bold text-[#1B2D5B] mb-2">{badge.titre}</div>
        <div className="text-sm text-gray-500 mb-6">{badge.description}</div>
        <button
          onClick={onDismiss}
          className="text-sm font-medium text-white bg-[#3DBFA0] hover:bg-[#2ea88b] px-6 py-2.5 rounded-lg transition-colors"
        >
          Super !
        </button>
      </div>
    </div>
  )
}

// ── Page principale ────────────────────────────────────────────────────────────

export default function ProgressionPage() {
  const [loading, setLoading] = useState(true)
  const [pageStats, setPageStats] = useState<PageStats>({ formationsCompletees: 0, heures: 0, attestations: 0, derniereActivite: null })
  const [formationsEnCours, setFormationsEnCours] = useState<FormationEnCours[]>([])
  const [badgesObtenus, setBadgesObtenus] = useState<BadgeRow[]>([])
  const [badgeStats, setBadgeStats] = useState<BadgeStats>({ formationsCommencees: 0, formationsCompletees: 0, joursActifs: 0 })
  const [celebrationBadge, setCelebrationBadge] = useState<BadgeDef | null>(null)
  const [recommandations, setRecommandations] = useState<Recommandation[]>([])
  const router = useRouter()

  const dismissCelebration = useCallback(() => setCelebrationBadge(null), [])

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) { router.push("/connexion"); return }

      // Étape 1 — données parallèles initiales
      const [{ data: prog }, { count: nbAtt }] = await Promise.all([
        supabase.from("progression").select("formation_id, module_id, statut, updated_at").eq("profil_id", user.id),
        supabase.from("attestations").select("id", { count: "exact", head: true }).eq("profil_id", user.id),
      ])

      const progressionData: ProgRecord[] = prog ?? []
      const formationIds = [...new Set(progressionData.map((p) => p.formation_id))]

      // Étape 2 — formations + modules + publications
      const [{ data: formationsData }, { data: modulesData }, { data: allPubliees }] = await Promise.all([
        formationIds.length > 0
          ? supabase.from("formations").select("id, titre, slug, duree_estimee_minutes, domaine, thematique, parcours_id, parcours_ordre").in("id", formationIds)
          : Promise.resolve({ data: [] }),
        formationIds.length > 0
          ? supabase.from("modules").select("id, formation_id, ordre").in("formation_id", formationIds)
          : Promise.resolve({ data: [] }),
        supabase.from("formations").select("id, titre, slug, parcours_id, parcours_ordre").eq("est_publie", true).eq("est_a_venir", false),
      ])

      const formations: FormationRow[] = (formationsData ?? []) as FormationRow[]
      const modules: ModuleRow[] = (modulesData ?? []) as ModuleRow[]
      const publiees: FormationPubliee[] = (allPubliees ?? []) as FormationPubliee[]

      const termineIds = new Set(progressionData.filter((p) => p.statut === "termine").map((p) => p.module_id))

      // Calcul des formations en cours / complétées
      let formationsCompletees = 0
      let heuresTotal = 0
      const enCours: FormationEnCours[] = []
      const completedFormationIds = new Set<string>()

      for (const f of formations) {
        const fMods = modules.filter((m) => m.formation_id === f.id).sort((a, b) => a.ordre - b.ordre)
        const nbModules = fMods.length
        const nbTermines = fMods.filter((m) => termineIds.has(m.id)).length
        const estComplete = nbModules > 0 && nbTermines >= nbModules

        if (estComplete) {
          formationsCompletees++
          heuresTotal += f.duree_estimee_minutes
          completedFormationIds.add(f.id)
        } else {
          const prochainModule = fMods.find((m) => !termineIds.has(m.id))
          enCours.push({
            id: f.id,
            titre: f.titre,
            slug: f.slug,
            domaine: f.domaine,
            thematique: f.thematique,
            nbModules,
            nbTermines,
            prochainModuleId: prochainModule?.id ?? null,
          })
        }
      }

      // Tri : plus avancée en premier
      enCours.sort((a, b) => {
        const pctA = a.nbModules > 0 ? a.nbTermines / a.nbModules : 0
        const pctB = b.nbModules > 0 ? b.nbTermines / b.nbModules : 0
        return pctB - pctA
      })

      // Dernière activité
      const derniereActivite = progressionData
        .filter((p) => p.updated_at)
        .reduce<string | null>((max, p) => (p.updated_at! > (max ?? "") ? p.updated_at : max), null)

      // Badge stats
      const termineDates = progressionData
        .filter((p) => p.statut === "termine" && p.updated_at)
        .map((p) => new Date(p.updated_at!).toISOString().slice(0, 10))
      const joursActifs = new Set(termineDates).size
      const bStats: BadgeStats = {
        formationsCommencees: formationIds.length,
        formationsCompletees,
        joursActifs,
      }

      // Vérification et attribution des badges
      const nouveaux = await verifierEtAttribuerBadges(user.id)

      // Récupère les badges mis à jour
      const { data: badgesData } = await supabase
        .from("badges")
        .select("badge_id, obtenu_le")
        .eq("profil_id", user.id)

      // Prochaines étapes
      const recs: Recommandation[] = []

      if (enCours.length > 0) {
        const f = enCours[0]
        const restant = f.nbModules - f.nbTermines
        recs.push({
          icone: "▶️",
          titre: f.titre,
          detail: `Il vous reste ${restant} module${restant > 1 ? "s" : ""} pour terminer cette formation.`,
          href: f.prochainModuleId
            ? `/formations/${f.slug}/modules/${f.prochainModuleId}`
            : `/formations/${f.slug}`,
          cta: "Continuer",
        })
      }

      // Recommandation parcours
      for (const f of formations) {
        if (f.parcours_id && completedFormationIds.has(f.id) && recs.length < 2) {
          const nextInParcours = publiees.find(
            (pf) =>
              pf.parcours_id === f.parcours_id &&
              pf.parcours_ordre === (f.parcours_ordre ?? 0) + 1 &&
              !formationIds.includes(pf.id)
          )
          if (nextInParcours) {
            recs.push({
              icone: "📚",
              titre: nextInParcours.titre,
              detail: `Vous avez complété « ${f.titre} » — poursuivez avec la formation suivante du parcours.`,
              href: `/formations/${nextInParcours.slug}`,
              cta: "Voir la formation",
            })
            break
          }
        }
      }

      if (recs.length === 0) {
        recs.push({
          icone: "🔍",
          titre: "Découvrez notre catalogue de formations",
          detail: "Explorez toutes les formations disponibles pour continuer votre développement.",
          href: "/catalogue",
          cta: "Voir le catalogue",
        })
      }

      // Mise à jour du state
      setPageStats({ formationsCompletees, heures: heuresTotal, attestations: nbAtt ?? 0, derniereActivite })
      setFormationsEnCours(enCours)
      setBadgeStats(bStats)
      setBadgesObtenus(badgesData ?? [])
      setRecommandations(recs)

      // Célébration si nouveau badge
      if (nouveaux.length > 0) {
        const def = BADGE_DEFS.find((b) => nouveaux.includes(b.id))
        if (def) setCelebrationBadge(def)
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

  const badgesObtenuIds = new Set(badgesObtenus.map((b) => b.badge_id))
  const badgesNonObtenus = BADGE_DEFS.filter((b) => !badgesObtenuIds.has(b.id))

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {celebrationBadge && (
        <CelebrationBadge badge={celebrationBadge} onDismiss={dismissCelebration} />
      )}

      <Sidebar pageActive="progression" />

      <main className="flex-1 p-8 space-y-8">

        {/* ── Mon parcours ── */}
        <section>
          <h2 className="text-2xl font-bold text-[#1B2D5B] mb-1">Ma progression</h2>
          <p className="text-gray-500 text-sm mb-6">Votre parcours de formation en un coup d'œil.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              icone="🎓"
              valeur={String(pageStats.formationsCompletees)}
              label="Formation(s) complétée(s)"
            />
            <StatCard
              icone="⏱️"
              valeur={formatHeures(pageStats.heures)}
              label="de formation suivie"
            />
            <StatCard
              icone="📜"
              valeur={String(pageStats.attestations)}
              label="Attestation(s) obtenue(s)"
            />
            <StatCard
              icone="📅"
              valeur={pageStats.derniereActivite ? formatDate(pageStats.derniereActivite) : "—"}
              label="Dernière activité"
            />
          </div>
        </section>

        {/* ── Formations en cours ── */}
        <section>
          <h3 className="text-lg font-bold text-[#1B2D5B] mb-4">Mes formations en cours</h3>
          {formationsEnCours.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
              <p className="text-2xl mb-3">✅</p>
              <p className="text-[#1B2D5B] font-semibold mb-1">Toutes vos formations sont complétées.</p>
              <p className="text-gray-400 text-sm mb-4">Découvrez le catalogue pour continuer votre développement.</p>
              <a
                href="/catalogue"
                className="inline-block text-sm font-medium text-white bg-[#3DBFA0] hover:bg-[#2ea88b] px-5 py-2.5 rounded-lg transition-colors"
              >
                Voir le catalogue →
              </a>
            </div>
          ) : (
            <div className="space-y-3">
              {formationsEnCours.map((f) => {
                const pct = f.nbModules > 0 ? Math.round((f.nbTermines / f.nbModules) * 100) : 0
                const href = f.prochainModuleId
                  ? `/formations/${f.slug}/modules/${f.prochainModuleId}`
                  : `/formations/${f.slug}`
                return (
                  <div
                    key={f.id}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-5"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1.5 mb-1.5">
                        <Etiquette type="domaine" valeur={f.domaine} />
                        <Etiquette type="thematique" valeur={f.thematique} />
                      </div>
                      <p className="text-sm font-semibold text-[#1B2D5B] mb-2">{f.titre}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-100 rounded-full h-2">
                          <div
                            className="bg-[#3DBFA0] h-2 rounded-full transition-all"
                            style={{ width: pct + "%" }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-[#1B2D5B] flex-shrink-0">
                          {pct}%
                        </span>
                        <span className="text-xs text-gray-400 flex-shrink-0">
                          {f.nbTermines}/{f.nbModules} modules
                        </span>
                      </div>
                    </div>
                    <a
                      href={href}
                      className="flex-shrink-0 text-sm font-medium text-white bg-[#1B2D5B] hover:bg-[#152347] px-4 py-2 rounded-lg transition-colors"
                    >
                      Continuer →
                    </a>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* ── Badges ── */}
        <section>
          <h3 className="text-lg font-bold text-[#1B2D5B] mb-4">Mes badges</h3>

          {badgesObtenus.length > 0 && (
            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Badges obtenus ({badgesObtenus.length})
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {badgesObtenus.map((b) => {
                  const def = BADGE_DEFS.find((d) => d.id === b.badge_id)
                  if (!def) return null
                  return <BadgeCard key={b.badge_id} badge={def} obtenuLe={b.obtenu_le} />
                })}
              </div>
            </div>
          )}

          {badgesNonObtenus.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Badges à débloquer ({badgesNonObtenus.length})
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {badgesNonObtenus.map((badge) => (
                  <BadgeLockedCard key={badge.id} badge={badge} stats={badgeStats} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── Prochaines étapes ── */}
        <section>
          <h3 className="text-lg font-bold text-[#1B2D5B] mb-4">Prochaines étapes</h3>
          <div className="space-y-3">
            {recommandations.map((rec, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-5"
              >
                <span className="text-2xl flex-shrink-0">{rec.icone}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1B2D5B]">{rec.titre}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{rec.detail}</p>
                </div>
                <a
                  href={rec.href}
                  className="flex-shrink-0 text-sm font-medium text-[#3DBFA0] hover:text-[#2ea88b] border border-[#3DBFA0] hover:border-[#2ea88b] px-4 py-2 rounded-lg transition-colors"
                >
                  {rec.cta} →
                </a>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
