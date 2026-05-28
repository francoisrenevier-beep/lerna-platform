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
      <div className="relative overflow-hidden flex-shrink-0 rounded-t-2xl" style={{ height: 168 }}>
        {f.image_url ? (
          <img src={f.image_url} alt={f.titre} className="w-full h-full object-cover" />
        ) : (
          <IllustrationGrande domaine={f.domaine} uid={uid} />
        )}

        {/* Overlay dégradé bas → transparent pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        {/* Badge domaine en bas à gauche */}
        {cfg && f.domaine && (
          <span
            className="absolute bottom-3 left-3 text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full shadow-sm backdrop-blur-md border border-white/20"
            style={{ backgroundColor: cfg.badgeBg + "e8", color: cfg.badgeText }}
          >
            {f.domaine}
          </span>
        )}

        {/* Badge "À venir" */}
        {f.est_a_venir && (
          <div className="absolute inset-0 bg-[#1B2D5B]/50 backdrop-blur-[2px] flex items-center justify-center">
            <span className="bg-[#1B2D5B] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border border-white/10 shadow-lg">
              À venir
            </span>
          </div>
        )}
      </div>

      {/* Zone contenu */}
      <div className="flex flex-col flex-1 p-5 gap-3 bg-gradient-to-b from-white to-slate-50/50">

        {/* Thématique */}
        {f.thematique && (
          <span className={`self-start text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full ${getCouleurEtiquette("thematique", f.thematique)}`}>
            {f.thematique}
          </span>
        )}

        {/* Titre */}
        <h3
          className="text-[15px] font-bold text-[#1B2D5B] leading-snug tracking-[-0.01em]"
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}
        >
          {f.titre}
        </h3>

        {/* Description */}
        {f.description_courte && (
          <p
            className="text-[13px] text-slate-500 leading-relaxed"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" } as React.CSSProperties}
          >
            {f.description_courte}
          </p>
        )}

        {/* Méta : durée + niveau */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-auto font-medium">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            {dureeFormat(f.duree_estimee_minutes)}
          </span>
          {f.niveau && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{f.niveau}</span>
            </>
          )}
        </div>

        {/* CTA */}
        {!f.est_a_venir && (
          <div
            className="mt-2 w-full text-center text-[13px] font-semibold text-white bg-gradient-to-r from-[#3DBFA0] to-[#2ea88b] hover:from-[#2ea88b] hover:to-[#269d80] py-2.5 rounded-xl transition-all shadow-sm shadow-[#3DBFA0]/25"
          >
            Commencer
            <svg className="inline-block w-4 h-4 ml-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )

  if (f.est_a_venir) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-200/50 overflow-hidden flex flex-col ring-1 ring-slate-100/50">
        {content}
      </div>
    )
  }

  return (
    <a
      href={"/catalogue/" + f.slug}
      className="bg-white rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-200/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/40 hover:border-slate-200 group ring-1 ring-slate-100/50"
    >
      {content}
    </a>
  )
}

// ── Skeleton ───────────────────────────────────────────────────────────────────

function Pulse({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-slate-200/80 rounded ${className ?? ""}`} />
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/50 to-slate-50 flex overflow-x-hidden">
      <div className="hidden md:block w-64 bg-[#1B2D5B] flex-shrink-0" />
      <main className="flex-1 pb-20 md:pb-0">
        <div className="bg-gradient-to-br from-[#1B2D5B] via-[#243a6b] to-[#1B2D5B] px-4 md:px-8 py-8 flex justify-between items-center">
          <div className="space-y-3">
            <Pulse className="h-8 w-48 md:w-64 bg-white/15 rounded-lg" />
            <Pulse className="h-4 w-32 md:w-44 bg-white/10 rounded-md" />
          </div>
          <Pulse className="h-6 w-24 md:w-36 bg-white/10 rounded-full" />
        </div>
        <div className="px-4 md:px-8 py-8 space-y-10 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((i) => <Pulse key={i} className="h-28 md:h-32 rounded-2xl" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => <Pulse key={i} className="h-[360px] rounded-2xl" />)}
          </div>
        </div>
      </main>
    </div>
  )
}

// ── Section header component ──────────────────────────────────────────────────

function SectionHeader({ title, subtitle, href, linkText }: { title: string; subtitle?: string; href?: string; linkText?: string }) {
  return (
    <div className="flex items-end justify-between mb-5">
      <div>
        <h2 className="text-lg font-bold text-[#1B2D5B] tracking-[-0.02em]">{title}</h2>
        {subtitle && <p className="text-[13px] text-slate-400 mt-1 font-medium">{subtitle}</p>}
      </div>
      {href && linkText && (
        <a href={href} className="text-[13px] font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors hidden sm:flex items-center gap-1 group">
          {linkText}
          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#f8fafc] to-slate-100/80 flex overflow-x-hidden">
      {/* Subtle texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.015]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} 
      />
      
      <Sidebar pageActive="dashboard" institution={institution?.nom} />

      <main className="flex-1 min-w-0 pb-20 md:pb-0 relative">

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <PageHeader
          gradient
          titre={`Bonjour${profil?.prenom ? ", " + profil.prenom : ""} 👋`}
          sousTitre="Bienvenue sur votre espace LEARNA"
          right={
            <>
              <span className="text-[13px] capitalize font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.5)" }}>
                {getDateFr()}
              </span>
              {institution?.nom && (
                <span
                  className="text-[11px] font-semibold px-3.5 py-1.5 rounded-full border whitespace-nowrap tracking-wide backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(61,191,160,0.15)",
                    color: "#5ee0c3",
                    borderColor: "rgba(61,191,160,0.25)",
                  }}
                >
                  {institution.nom}
                </span>
              )}
            </>
          }
        />

        <div className="px-4 md:px-8 py-6 md:py-8 space-y-10 md:space-y-12 max-w-6xl">

          {/* ── Continuer l'apprentissage ──────────────────────────────────── */}
          {formationsEnCours.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#3DBFA0] to-[#2ea88b]" />
                <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.12em]">
                  Reprendre où vous en étiez
                </h2>
              </div>
              <div className="space-y-3">
                {formationsEnCours.map((f) => {
                  const pct = f.nbModules > 0 ? Math.round((f.nbTermines / f.nbModules) * 100) : 0
                  return (
                    <div 
                      key={f.id} 
                      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-200/50 px-4 py-4 flex items-center gap-4 hover:shadow-md hover:border-slate-200 transition-all duration-200 ring-1 ring-slate-100/50"
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm ring-1 ring-slate-200/50">
                        {f.image_url ? (
                          <img src={f.image_url} alt={f.titre} className="w-full h-full object-cover" />
                        ) : (
                          <DomainIllustrationSm domaine={f.domaine} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-semibold text-[#1B2D5B] truncate tracking-[-0.01em]">{f.titre}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-[#3DBFA0] to-[#2ea88b] h-2 rounded-full transition-all duration-500 ease-out" 
                              style={{ width: pct + "%" }} 
                            />
                          </div>
                          <span className="text-[11px] text-slate-400 font-semibold flex-shrink-0 tabular-nums">
                            {f.nbTermines}/{f.nbModules}
                          </span>
                        </div>
                      </div>
                      <a
                        href={"/formations/" + f.slug}
                        className="flex-shrink-0 text-[12px] font-semibold text-[#3DBFA0] bg-[#3DBFA0]/10 hover:bg-[#3DBFA0]/20 px-4 py-2 rounded-xl transition-all hover:shadow-sm flex items-center gap-1.5"
                      >
                        Continuer
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )
                })}
              </div>
              {totalEnCours > 2 && (
                <a href="/formations" className="inline-flex items-center gap-1 mt-3 text-[12px] font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors">
                  Voir toutes mes formations
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </section>
          )}

          {/* ── Ma progression — 4 métriques ──────────────────────────────── */}
          <section>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#1B2D5B] to-[#3a5590]" />
              <h2 className="text-base font-bold text-[#1B2D5B] tracking-[-0.02em]">Ma progression</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
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
            <SectionHeader
              title={badgeStats.formationsCommencees > 0 ? "Recommandées pour vous" : "Formations à découvrir"}
              subtitle={badgeStats.formationsCommencees > 0 ? "Selon vos formations en cours et votre domaine" : "Commencez votre parcours de formation"}
              href="/catalogue"
              linkText="Voir tout le catalogue"
            />

            {formationsVedette.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {formationsVedette.map((f, i) => (
                  <FormationCardDash key={f.id} f={f} index={i} />
                ))}
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm p-12 text-center ring-1 ring-slate-100/50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 flex items-center justify-center">
                  <span className="text-3xl">📚</span>
                </div>
                <p className="text-[15px] font-semibold text-[#1B2D5B] mb-1.5">Aucune formation disponible</p>
                <p className="text-[13px] text-slate-400">Des formations seront ajoutées prochainement.</p>
              </div>
            )}

            <a href="/catalogue" className="inline-flex items-center gap-1 mt-4 text-[12px] font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors sm:hidden">
              Voir tout le catalogue
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </section>

          {/* ── Explorer par domaine ───────────────────────────────────────── */}
          <section>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1 h-5 rounded-full bg-gradient-to-b from-[#1B2D5B] to-[#3a5590]" />
              <h2 className="text-base font-bold text-[#1B2D5B] tracking-[-0.02em]">Explorer par domaine</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {DOMAINES_ORDRE.map((domaine) => {
                const cfg = DOMAINE_CONFIG[domaine]
                return (
                  <a
                    key={domaine}
                    href={"/catalogue/domaine/" + cfg.slug}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border font-semibold text-[13px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg shadow-sm backdrop-blur-sm"
                    style={{ backgroundColor: cfg.badgeBg + "cc", color: cfg.badgeText, borderColor: cfg.badgeText + "18" }}
                  >
                    <span className="w-8 h-8 flex-shrink-0 rounded-lg overflow-hidden shadow-sm ring-1 ring-slate-200/30">
                      <DomainIllustrationSm domaine={domaine} />
                    </span>
                    <span className="tracking-[-0.01em]">{domaine}</span>
                    <svg className="w-4 h-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )
              })}
              <a
                href="/catalogue"
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200/80 bg-white/60 text-slate-500 font-semibold text-[13px] hover:-translate-y-0.5 hover:shadow-lg hover:bg-white transition-all duration-200 shadow-sm backdrop-blur-sm"
              >
                Tout le catalogue
                <svg className="w-4 h-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </section>

          {/* ── Mes badges récents ─────────────────────────────────────────── */}
          {(badges.length > 0 || nearUnlock) && (
            <section>
              <SectionHeader
                title="Mes badges"
                href="/progression"
                linkText="Voir tous"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {badges.map((b) => {
                  const def = BADGE_DEFS.find((d) => d.id === b.badge_id)
                  if (!def) return null
                  return (
                    <div 
                      key={b.badge_id} 
                      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#3DBFA0]/20 shadow-sm p-5 flex items-start gap-4 ring-1 ring-[#3DBFA0]/10 hover:shadow-md hover:border-[#3DBFA0]/30 transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3DBFA0]/10 to-[#3DBFA0]/5 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="text-2xl">{def.icone}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-bold text-[#1B2D5B] tracking-[-0.01em]">{def.titre}</p>
                        <p className="text-[12px] text-slate-400 mt-1 leading-relaxed">{def.description}</p>
                        <p className="text-[11px] text-[#3DBFA0] font-semibold mt-2 flex items-center gap-1.5">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Obtenu le {formatDate(b.obtenu_le)}
                        </p>
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
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl border border-amber-200/60 shadow-sm p-5 ring-1 ring-amber-200/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shadow-sm">
                          <span className="text-xl grayscale opacity-70">{nearUnlock.icone}</span>
                        </div>
                        <p className="text-[14px] font-bold text-amber-800">Presque là !</p>
                      </div>
                      <p className="text-[12px] text-amber-700/80 mb-4 leading-relaxed">
                        Il vous manque <strong className="text-amber-800">{manque} formation{manque > 1 ? "s" : ""}</strong> pour obtenir <strong className="text-amber-800">{nearUnlock.titre}</strong>
                      </p>
                      <div className="w-full bg-amber-100/80 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-amber-400 to-orange-400 h-2.5 rounded-full transition-all duration-500" 
                          style={{ width: pct + "%" }} 
                        />
                      </div>
                      <p className="text-[11px] text-amber-600 font-semibold mt-2 text-right tabular-nums">{cur} / {tot}</p>
                    </div>
                  )
                })()}
              </div>
            </section>
          )}

          {/* ── Bibliothèque de ressources ────────────────────────────────── */}
          <section className="pb-8">
            <SectionHeader
              title="Bibliothèque de ressources"
              subtitle="Outils pratiques, fiches et références liés à vos formations"
              href="/ressources"
              linkText="Voir tout"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {[
                { icone: "⭐", titre: "Recommandées",   desc: "Sélectionnées pour vos formations en cours.",   href: "/ressources?section=recommandees", color: "#f59e0b" },
                { icone: "🔧", titre: "Outils terrain", desc: "Check-lists et modèles applicables immédiatement.", href: "/ressources?section=outils", color: "#3DBFA0" },
                { icone: "🗒️", titre: "Fiches mémo",    desc: "Synthèses rapides pour retenir l'essentiel.",   href: "/ressources?section=memo", color: "#1B2D5B" },
                { icone: "🏛️", titre: "Officielles",    desc: "Textes légaux, articles et références théoriques.", href: "/ressources?section=officielles", color: "#6366f1" },
              ].map((r, i) => (
                <a
                  key={i}
                  href={r.href}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm p-5 hover:shadow-lg hover:-translate-y-1 hover:border-slate-200 transition-all duration-200 flex flex-col ring-1 ring-slate-100/50"
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 shadow-sm transition-transform group-hover:scale-105"
                    style={{ backgroundColor: r.color + "12" }}
                  >
                    <span className="text-xl">{r.icone}</span>
                  </div>
                  <h3 className="text-[13px] font-bold text-[#1B2D5B] group-hover:text-[#3DBFA0] transition-colors mb-1.5 tracking-[-0.01em]">{r.titre}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{r.desc}</p>
                </a>
              ))}
            </div>
            <a href="/ressources" className="inline-flex items-center gap-1 mt-4 text-[12px] font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors sm:hidden">
              Voir toutes les ressources
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </section>

        </div>
      </main>
      <BottomNav pageActive="dashboard" institution={institution?.nom} />
    </div>
  )
}
