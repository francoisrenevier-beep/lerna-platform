"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { BottomNav } from "@/components/BottomNav"
import { BADGE_DEFS, type BadgeStats } from "@/lib/badges"
import { getCouleurEtiquette } from "@/lib/etiquettes"
import { PageHeader } from "@/components/PageHeader"
import { MetricCard } from "@/components/MetricCard"

// ── Types ──────────────────────────────────────────────────────────────────────

type Profil = { prenom: string; nom: string }
type Institution = { nom: string }

type FormationEnCours = {
  id: string
  titre: string
  slug: string
  domaine: string | null
  nbModules: number
  nbTermines: number
  image_url: string | null
}

type FormationVedette = {
  id: string
  titre: string
  slug: string
  domaine: string | null
  thematique: string | null
  duree_estimee_minutes: number
  description_courte: string | null
  niveau: string | null
  est_a_venir: boolean
  image_url: string | null
}

type BadgeRow = {
  badge_id: string
  obtenu_le: string
}

type DashboardData = {
  profil: Profil | null
  institution: Institution | null
  formationsEnCours: FormationEnCours[]
  totalEnCours: number
  formationsCompletees: number
  totalMinutesCompletees: number
  nbAttestations: number
  nbBadges: number
  formationsVedette: FormationVedette[]
  badges: BadgeRow[]
  badgeStats: BadgeStats
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function dureeFormat(minutes: number | null) {
  if (!minutes) return "–"
  if (minutes < 60) return minutes + " min"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

function heuresFormat(minutes: number) {
  if (minutes === 0) return "0h"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return m + " min"
  if (m === 0) return h + "h"
  return h + "h" + m
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
}

function getDateFr() {
  return new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function getDomaineArray(domaine: string | string[] | null | undefined): string[] {
  if (!domaine) return []
  if (Array.isArray(domaine)) return domaine
  return [domaine]
}

function getFirstDomaine(domaine: string | string[] | null | undefined): string | null {
  return getDomaineArray(domaine)[0] ?? null
}

// ── Domaine config ────────────────────────────────────────────────────────────

const DOMAINE_CONFIG: Record<string, { slug: string; badgeBg: string; badgeText: string; gradFrom: string; gradTo: string }> = {
  "Handicap":    { slug: "handicap",    badgeBg: "#EEF2FF", badgeText: "#3730A3", gradFrom: "#EEF2FF", gradTo: "#C7D2FE" },
  "Transversal": { slug: "transversal", badgeBg: "#F1F5F9", badgeText: "#475569", gradFrom: "#F1F5F9", gradTo: "#CBD5E1" },
}

const DOMAINES_ORDRE = [
  "Handicap",
  "Transversal",
] as const

// ── SVG illustrations compactes 50×50 (chips domaines + cartes en cours) ───────

function IllustrationHandicapSm() {
  return (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="50" height="50" fill="#EEF2FF" rx="8" />
      <circle cx="25" cy="18" r="6" fill="#4338CA" fillOpacity="0.55" />
      <path d="M17 29 Q17 24 25 24 Q33 24 33 29 L33 35 Q33 37 31 37 L19 37 Q17 37 17 35Z" fill="#4338CA" fillOpacity="0.55" />
    </svg>
  )
}

function IllustrationTransversalSm() {
  return (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="50" height="50" fill="#F1F5F9" rx="8" />
      <line x1="25" y1="25" x2="12" y2="14" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="25" y1="25" x2="38" y2="14" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="25" y1="25" x2="12" y2="36" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="25" y1="25" x2="38" y2="36" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="25" cy="25" r="5" fill="#64748B" fillOpacity="0.5" />
      <circle cx="12" cy="14" r="3.5" fill="#64748B" fillOpacity="0.35" />
      <circle cx="38" cy="14" r="3.5" fill="#64748B" fillOpacity="0.35" />
      <circle cx="12" cy="36" r="3.5" fill="#64748B" fillOpacity="0.35" />
      <circle cx="38" cy="36" r="3.5" fill="#64748B" fillOpacity="0.35" />
    </svg>
  )
}
function DomainIllustrationSm({ domaine }: { domaine: string | null }) {
  if (domaine === "Handicap") return <IllustrationHandicapSm />
  return <IllustrationTransversalSm />
}

// ── SVG illustrations grandes (cartes formations) ─────────────────────────────
// Chaque instance utilise un uid pour éviter les conflits d'IDs SVG dans le DOM

function IllustrationGrande({ domaine, uid }: { domaine: string | null; uid: string }) {
  const cfg = domaine ? DOMAINE_CONFIG[domaine] : DOMAINE_CONFIG["Transversal"]
  const gFrom = cfg?.gradFrom ?? "#F1F5F9"
  const gTo   = cfg?.gradTo   ?? "#CBD5E1"
  const gId   = "grad-" + uid

  if (domaine === "Handicap") return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={gId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gFrom} /><stop offset="100%" stopColor={gTo} />
        </linearGradient>
      </defs>
      <rect width="300" height="160" fill={`url(#${gId})`} />
      <circle cx="150" cy="72" r="55" fill="#4338CA" fillOpacity="0.07" />
      <circle cx="150" cy="72" r="38" fill="#4338CA" fillOpacity="0.07" />
      <circle cx="150" cy="50" r="14" fill="#4338CA" fillOpacity="0.52" />
      <path d="M130 84 Q130 70 150 70 Q170 70 170 84 L170 100 Q170 104 167 104 L133 104 Q130 104 130 100Z" fill="#4338CA" fillOpacity="0.52" />
      <circle cx="143" cy="126" r="15" fill="none" stroke="#4338CA" strokeWidth="3" strokeOpacity="0.35" />
      <circle cx="143" cy="126" r="5" fill="#4338CA" fillOpacity="0.35" />
      <line x1="167" y1="90" x2="167" y2="112" stroke="#4338CA" strokeWidth="3" strokeOpacity="0.3" strokeLinecap="round" />
    </svg>
  )

  // Transversal (default)
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id={gId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gFrom} /><stop offset="100%" stopColor={gTo} />
        </linearGradient>
      </defs>
      <rect width="300" height="160" fill={`url(#${gId})`} />
      <line x1="150" y1="80" x2="82" y2="38"  stroke="#64748B" strokeWidth="2.5" strokeOpacity="0.25" />
      <line x1="150" y1="80" x2="218" y2="38" stroke="#64748B" strokeWidth="2.5" strokeOpacity="0.25" />
      <line x1="150" y1="80" x2="82" y2="122" stroke="#64748B" strokeWidth="2.5" strokeOpacity="0.25" />
      <line x1="150" y1="80" x2="218" y2="122"stroke="#64748B" strokeWidth="2.5" strokeOpacity="0.25" />
      <line x1="82"  y1="38" x2="218" y2="38"  stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.18" />
      <line x1="82"  y1="122" x2="218" y2="122" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.18" />
      <circle cx="150" cy="80"  r="14" fill="#64748B" fillOpacity="0.32" />
      <circle cx="150" cy="80"  r="8"  fill="#64748B" fillOpacity="0.42" />
      <circle cx="82"  cy="38"  r="10" fill="#64748B" fillOpacity="0.28" />
      <circle cx="218" cy="38"  r="10" fill="#64748B" fillOpacity="0.28" />
      <circle cx="82"  cy="122" r="10" fill="#64748B" fillOpacity="0.28" />
      <circle cx="218" cy="122" r="10" fill="#64748B" fillOpacity="0.28" />
    </svg>
  )
}

// ── Formation Card — style Coursera avec étiquettes ───────────────────────────

function FormationCardDash({ f, index }: { f: FormationVedette; index: number }) {
  const cfg = f.domaine ? DOMAINE_CONFIG[f.domaine] : null
  const uid = `fc-${index}-${f.id.slice(0, 6)}`

  const content = (
    <div className="flex flex-col h-full">
      {/* Zone illustration */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: 168 }}>
        {f.image_url ? (
          <img src={f.image_url} alt={f.titre} className="w-full h-full object-cover" />
        ) : (
          <IllustrationGrande domaine={f.domaine} uid={uid} />
        )}

        {/* Overlay dégradé bas → transparent pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Badge domaine en bas à gauche */}
        {cfg && f.domaine && (
          <span
            className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-sm"
            style={{ backgroundColor: cfg.badgeBg + "ee", color: cfg.badgeText }}
          >
            {f.domaine}
          </span>
        )}

        {/* Badge "À venir" */}
        {f.est_a_venir && (
          <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
            <span className="bg-[#1B2D5B] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
              À venir
            </span>
          </div>
        )}
      </div>

      {/* Zone contenu */}
      <div className="flex flex-col flex-1 p-5 gap-3">

        {/* Thématique */}
        {f.thematique && (
          <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${getCouleurEtiquette("thematique", f.thematique)}`}>
            {f.thematique}
          </span>
        )}

        {/* Titre */}
        <h3
          className="text-base font-bold text-[#1B2D5B] leading-snug"
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}
        >
          {f.titre}
        </h3>

        {/* Description */}
        {f.description_courte && (
          <p
            className="text-sm text-gray-500 leading-relaxed"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}
          >
            {f.description_courte}
          </p>
        )}

        {/* Méta : durée + niveau */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
          <span className="inline-flex items-center gap-1">
            <span>⏱</span> {dureeFormat(f.duree_estimee_minutes)}
          </span>
          {f.niveau && (
            <>
              <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
              <span>{f.niveau}</span>
            </>
          )}
        </div>

        {/* CTA */}
        {!f.est_a_venir && (
          <div
            className="mt-1 w-full text-center text-sm font-semibold text-white bg-[#3DBFA0] hover:bg-[#2ea88b] py-2.5 rounded-lg transition-colors"
          >
            Commencer →
          </div>
        )}
      </div>
    </div>
  )

  if (f.est_a_venir) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        {content}
      </div>
    )
  }

  return (
    <a
      href={"/catalogue/" + f.slug}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
    >
      {content}
    </a>
  )
}

// ── Skeleton ───────────────────────────────────────────────────────────────────

function Pulse({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className ?? ""}`} />
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-x-hidden">
      <div className="hidden md:block w-64 bg-[#1B2D5B] flex-shrink-0" />
      <main className="flex-1 pb-20 md:pb-0">
        <div className="bg-[#1B2D5B] px-4 md:px-8 py-6 flex justify-between items-center">
          <div className="space-y-2">
            <Pulse className="h-8 w-48 md:w-64 bg-white/20" />
            <Pulse className="h-4 w-32 md:w-44 bg-white/10" />
          </div>
          <Pulse className="h-6 w-24 md:w-36 bg-white/10" />
        </div>
        <div className="px-4 md:px-8 py-6 space-y-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => <Pulse key={i} className="h-24 md:h-28 rounded-xl" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => <Pulse key={i} className="h-80 rounded-2xl" />)}
          </div>
        </div>
      </main>
    </div>
  )
}

// ── Page principale ────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) {
        router.push("/connexion")
        return
      }

      const [
        { data: profilData },
        { data: ipData },
        { data: vedetteRaw },
        { data: allFormationsForProgress },
        { data: progressionData },
        { count: countAttestations },
        { data: badgesData },
      ] = await Promise.all([
        supabase.from("profils").select("prenom, nom").eq("id", user.id).single(),
        supabase
          .from("institution_profils")
          .select("institutions(nom)")
          .eq("profil_id", user.id)
          .eq("statut", "actif")
          .limit(1)
          .single(),
        // Requête directe pour les 3 formations en vedette — aucun filtre applicatif
        supabase
          .from("formations")
          .select("id, titre, slug, domaine, thematique, duree_estimee_minutes, description_courte, niveau, est_a_venir, image_url")
          .limit(3),
        // Toutes les formations pour le calcul de progression
        supabase
          .from("formations")
          .select("id, duree_estimee_minutes, domaine"),
        supabase
          .from("progression")
          .select("formation_id, module_id, statut, updated_at")
          .eq("profil_id", user.id),
        supabase.from("attestations").select("id", { count: "exact" }).eq("profil_id", user.id),
        supabase
          .from("badges")
          .select("badge_id, obtenu_le")
          .eq("profil_id", user.id)
          .order("obtenu_le", { ascending: false }),
      ])

      const prog = progressionData ?? []
      const formations = allFormationsForProgress ?? []
      const formationIds = [...new Set(prog.map((p) => p.formation_id))]

      // Modules + détails des formations commencées
      let modulesData: { id: string; formation_id: string }[] = []
      let formationsEnCoursMeta: { id: string; titre: string; slug: string; image_url: string | null }[] = []
      if (formationIds.length > 0) {
        const [{ data: mods }, { data: fMeta }] = await Promise.all([
          supabase.from("modules").select("id, formation_id").in("formation_id", formationIds),
          supabase.from("formations").select("id, titre, slug, image_url").in("id", formationIds),
        ])
        modulesData = mods ?? []
        formationsEnCoursMeta = fMeta ?? []
      }

      const termineIds = new Set(prog.filter((p) => p.statut === "termine").map((p) => p.module_id))

      const formationsEnCoursTout: FormationEnCours[] = []
      let formationsCompletees = 0
      let totalMinutesCompletees = 0

      for (const fId of formationIds) {
        const f = formations.find((f) => f.id === fId)
        if (!f) continue
        const mods = modulesData.filter((m) => m.formation_id === fId)
        const nbTermines = mods.filter((m) => termineIds.has(m.id)).length
        const nbModules = mods.length
        const isComplete = nbModules > 0 && nbTermines >= nbModules

        if (isComplete) {
          formationsCompletees++
          totalMinutesCompletees += (f.duree_estimee_minutes ?? 0)
        } else {
          const fMeta = formationsEnCoursMeta.find((v) => v.id === fId)
          formationsEnCoursTout.push({
            id: fId,
            titre: fMeta?.titre ?? fId,
            slug: fMeta?.slug ?? fId,
            domaine: getFirstDomaine(f.domaine),
            nbModules,
            nbTermines,
            image_url: fMeta?.image_url ?? null,
          })
        }
      }

      // Badge stats
      const termineDates = prog
        .filter((p) => p.statut === "termine" && p.updated_at)
        .map((p) => new Date(p.updated_at).toISOString().slice(0, 10))
      const joursActifs = new Set(termineDates).size
      const badgeStats: BadgeStats = {
        formationsCommencees: formationIds.length,
        formationsCompletees,
        joursActifs,
      }

      // Formations vedette : directement depuis la requête dédiée
      const formationsVedette: FormationVedette[] = (vedetteRaw ?? []).map((f) => ({
        id: f.id,
        titre: f.titre,
        slug: f.slug,
        domaine: getFirstDomaine(f.domaine),
        thematique: f.thematique ?? null,
        duree_estimee_minutes: f.duree_estimee_minutes ?? 0,
        description_courte: f.description_courte ?? null,
        niveau: f.niveau ?? null,
        est_a_venir: f.est_a_venir ?? false,
        image_url: f.image_url ?? null,
      }))

      setData({
        profil: profilData ?? null,
        institution: (ipData?.institutions as unknown as Institution) ?? null,
        formationsEnCours: formationsEnCoursTout.slice(0, 2),
        totalEnCours: formationsEnCoursTout.length,
        formationsCompletees,
        totalMinutesCompletees,
        nbAttestations: countAttestations ?? 0,
        nbBadges: badgesData?.length ?? 0,
        formationsVedette,
        badges: (badgesData ?? []).slice(0, 3),
        badgeStats,
      })
      setLoading(false)
    }
    getData()
  }, [router])

  if (loading) return <DashboardSkeleton />
  if (!data) return null

  const {
    profil,
    institution,
    formationsEnCours,
    totalEnCours,
    formationsCompletees,
    totalMinutesCompletees,
    nbAttestations,
    nbBadges,
    formationsVedette,
    badges,
    badgeStats,
  } = data

  const obtenuIds = new Set(badges.map((b) => b.badge_id))
  const nearUnlock = BADGE_DEFS.find((b) => {
    if (obtenuIds.has(b.id)) return false
    if (!b.progressCurrent || !b.progressTotal) return false
    const cur = b.progressCurrent(badgeStats)
    return cur > 0 && cur < b.progressTotal
  })

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-x-hidden">
      <Sidebar pageActive="dashboard" institution={institution?.nom} />

      <main className="flex-1 min-w-0 pb-20 md:pb-0">

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <PageHeader
          gradient
          titre={`Bonjour${profil?.prenom ? ", " + profil.prenom : ""} 👋`}
          sousTitre="Bienvenue sur votre espace LEARNA"
          right={
            <>
              <span className="text-sm capitalize" style={{ color: "rgba(255,255,255,0.45)" }}>
                {getDateFr()}
              </span>
              {institution?.nom && (
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border whitespace-nowrap"
                  style={{
                    backgroundColor: "rgba(61,191,160,0.2)",
                    color: "#3DBFA0",
                    borderColor: "rgba(61,191,160,0.3)",
                  }}
                >
                  {institution.nom}
                </span>
              )}
            </>
          }
        />

        <div className="px-4 md:px-8 py-5 md:py-7 space-y-8 md:space-y-10 max-w-6xl">

          {/* ── Continuer l'apprentissage ──────────────────────────────────── */}
          {formationsEnCours.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Reprendre où vous en étiez
              </h2>
              <div className="space-y-2.5">
                {formationsEnCours.map((f) => {
                  const pct = f.nbModules > 0 ? Math.round((f.nbTermines / f.nbModules) * 100) : 0
                  return (
                    <div key={f.id} className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        {f.image_url ? (
                          <img src={f.image_url} alt={f.titre} className="w-full h-full object-cover" />
                        ) : (
                          <DomainIllustrationSm domaine={f.domaine} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1B2D5B] truncate">{f.titre}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                            <div className="bg-[#3DBFA0] h-1.5 rounded-full transition-all" style={{ width: pct + "%" }} />
                          </div>
                          <span className="text-xs text-gray-400 flex-shrink-0">{f.nbTermines}/{f.nbModules} modules</span>
                        </div>
                      </div>
                      <a
                        href={"/formations/" + f.slug}
                        className="flex-shrink-0 text-xs font-semibold text-[#3DBFA0] bg-[#3DBFA0]/10 hover:bg-[#3DBFA0]/20 px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Continuer →
                      </a>
                    </div>
                  )
                })}
              </div>
              {totalEnCours > 2 && (
                <a href="/formations" className="inline-block mt-2.5 text-xs text-[#3DBFA0] hover:underline">
                  Voir toutes mes formations →
                </a>
              )}
            </section>
          )}

          {/* ── Ma progression — 4 métriques ──────────────────────────────── */}
          <section>
            <h2 className="text-base font-semibold mb-4" style={{ color: "var(--learna-navy)" }}>Ma progression</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MetricCard
                valeur={formationsCompletees}
                label="Formations complétées"
                icone="🎓"
                couleur="#3DBFA0"
                href="/formations"
              />
              <MetricCard
                valeur={totalMinutesCompletees > 0 ? heuresFormat(totalMinutesCompletees) : "—"}
                label="Heures de formation"
                icone="⏱"
                couleur="#1B2D5B"
                href="/progression"
              />
              <MetricCard
                valeur={nbAttestations}
                label="Attestations obtenues"
                icone="📜"
                couleur="#16a34a"
                href="/attestations"
              />
              <MetricCard
                valeur={nbBadges}
                label="Badges débloqués"
                icone="🏅"
                couleur="#f59e0b"
                href="/progression"
              />
            </div>
          </section>

          {/* ── Formations vedette ─────────────────────────────────────────── */}
          <section>
            <div className="flex items-end justify-between mb-5">
              <div>
                <h2 className="text-lg font-bold text-[#1B2D5B]">
                  {badgeStats.formationsCommencees > 0 ? "Recommandées pour vous" : "Formations à découvrir"}
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  {badgeStats.formationsCommencees > 0
                    ? "Selon vos formations en cours et votre domaine"
                    : "Commencez votre parcours de formation"}
                </p>
              </div>
              <a href="/catalogue" className="text-sm font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors hidden sm:block">
                Voir tout le catalogue →
              </a>
            </div>

            {formationsVedette.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {formationsVedette.map((f, i) => (
                  <FormationCardDash key={f.id} f={f} index={i} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                <p className="text-3xl mb-3">📚</p>
                <p className="text-sm font-semibold text-[#1B2D5B] mb-1">Aucune formation disponible</p>
                <p className="text-xs text-gray-400">Des formations seront ajoutées prochainement.</p>
              </div>
            )}

            <a href="/catalogue" className="inline-block mt-3 text-xs text-[#3DBFA0] hover:underline sm:hidden">
              Voir tout le catalogue →
            </a>
          </section>

          {/* ── Explorer par domaine ───────────────────────────────────────── */}
          <section>
            <h2 className="text-base font-semibold text-[#1B2D5B] mb-4">Explorer par domaine</h2>
            <div className="flex flex-wrap gap-3">
              {DOMAINES_ORDRE.map((domaine) => {
                const cfg = DOMAINE_CONFIG[domaine]
                return (
                  <a
                    key={domaine}
                    href={"/catalogue/domaine/" + cfg.slug}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border font-medium text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: cfg.badgeBg, color: cfg.badgeText, borderColor: cfg.badgeText + "22" }}
                  >
                    <span className="w-7 h-7 flex-shrink-0 rounded-md overflow-hidden inline-flex">
                      <DomainIllustrationSm domaine={domaine} />
                    </span>
                    {domaine}
                    <span className="text-xs opacity-50">→</span>
                  </a>
                )
              })}
              <a
                href="/catalogue"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-500 font-medium text-sm hover:-translate-y-0.5 hover:shadow-md transition-all"
              >
                Tout le catalogue →
              </a>
            </div>
          </section>

          {/* ── Mes badges récents ─────────────────────────────────────────── */}
          {(badges.length > 0 || nearUnlock) && (
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-semibold text-[#1B2D5B]">Mes badges</h2>
                <a href="/progression" className="text-xs text-[#3DBFA0] hover:underline">Voir tous →</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {badges.map((b) => {
                  const def = BADGE_DEFS.find((d) => d.id === b.badge_id)
                  if (!def) return null
                  return (
                    <div key={b.badge_id} className="bg-white rounded-xl border border-[#3DBFA0]/20 shadow-sm p-4 flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{def.icone}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1B2D5B]">{def.titre}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{def.description}</p>
                        <p className="text-xs text-[#3DBFA0] font-medium mt-1.5">Obtenu le {formatDate(b.obtenu_le)}</p>
                      </div>
                    </div>
                  )
                })}
                {nearUnlock && (() => {
                  const cur = nearUnlock.progressCurrent!(badgeStats)
                  const tot = nearUnlock.progressTotal!
                  const pct = Math.round((cur / tot) * 100)
                  const manque = tot - cur
                  return (
                    <div className="bg-amber-50 rounded-xl border border-amber-200 shadow-sm p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl grayscale">{nearUnlock.icone}</span>
                        <p className="text-sm font-semibold text-amber-800">Presque là !</p>
                      </div>
                      <p className="text-xs text-amber-700 mb-3 leading-relaxed">
                        Il vous manque <strong>{manque} formation{manque > 1 ? "s" : ""}</strong> pour obtenir <strong>{nearUnlock.titre}</strong>
                      </p>
                      <div className="w-full bg-amber-100 rounded-full h-1.5">
                        <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: pct + "%" }} />
                      </div>
                      <p className="text-xs text-amber-600 mt-1 text-right">{cur} / {tot}</p>
                    </div>
                  )
                })()}
              </div>
            </section>
          )}

          {/* ── Bibliothèque de ressources ────────────────────────────────── */}
          <section className="pb-6">
            <div className="flex items-end justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-[#1B2D5B]">Bibliothèque de ressources</h2>
                <p className="text-xs text-gray-400 mt-0.5">Outils pratiques, fiches et références liés à vos formations</p>
              </div>
              <a href="/ressources" className="text-sm font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors hidden sm:block">
                Voir tout →
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icone: "⭐", titre: "Recommandées",   desc: "Sélectionnées pour vos formations en cours.",   href: "/ressources?section=recommandees" },
                { icone: "🔧", titre: "Outils terrain", desc: "Check-lists et modèles applicables immédiatement.", href: "/ressources?section=outils" },
                { icone: "🗒️", titre: "Fiches mémo",    desc: "Synthèses rapides pour retenir l'essentiel.",   href: "/ressources?section=memo" },
                { icone: "🏛️", titre: "Officielles",    desc: "Textes légaux, articles et références théoriques.", href: "/ressources?section=officielles" },
              ].map((r, i) => (
                <a
                  key={i}
                  href={r.href}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                >
                  <div className="text-xl mb-2">{r.icone}</div>
                  <h3 className="text-sm font-semibold text-[#1B2D5B] group-hover:text-[#3DBFA0] transition-colors mb-1">{r.titre}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
                </a>
              ))}
            </div>
            <a href="/ressources" className="inline-block mt-3 text-xs text-[#3DBFA0] hover:underline sm:hidden">
              Voir toutes les ressources →
            </a>
          </section>

        </div>
      </main>
      <BottomNav pageActive="dashboard" institution={institution?.nom} />
    </div>
  )
}
