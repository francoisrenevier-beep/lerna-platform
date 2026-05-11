"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { BADGE_DEFS, type BadgeStats } from "@/lib/badges"

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

type FormationRecommandee = {
  id: string
  titre: string
  slug: string
  domaine: string | null
  duree_estimee_minutes: number
  description_courte: string | null
  niveau: string | null
  est_a_venir: boolean
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
  recommandations: FormationRecommandee[]
  badges: BadgeRow[]
  badgeStats: BadgeStats
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function dureeFormat(minutes: number) {
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

// ── Domaine config (couleurs + slugs) ─────────────────────────────────────────

const DOMAINE_CONFIG: Record<string, { slug: string; badgeBg: string; badgeText: string }> = {
  "Handicap":              { slug: "handicap",              badgeBg: "#EEF2FF", badgeText: "#3730A3" },
  "Pédagogie Spécialisée": { slug: "pedagogie-specialisee", badgeBg: "#FFF7ED", badgeText: "#C2410C" },
  "Protection des mineurs":{ slug: "protection-des-mineurs",badgeBg: "#FEF2F2", badgeText: "#B91C1C" },
  "Transversal":           { slug: "transversal",           badgeBg: "#F1F5F9", badgeText: "#475569" },
}

const DOMAINES_ORDRE = [
  "Handicap",
  "Pédagogie Spécialisée",
  "Protection des mineurs",
  "Transversal",
] as const

// ── SVG illustrations compactes (50×50) ────────────────────────────────────────

function IllustrationHandicapSm() {
  return (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="50" height="50" fill="#EEF2FF" rx="8" />
      <circle cx="25" cy="18" r="6" fill="#4338CA" fillOpacity="0.55" />
      <path d="M17 29 Q17 24 25 24 Q33 24 33 29 L33 35 Q33 37 31 37 L19 37 Q17 37 17 35Z" fill="#4338CA" fillOpacity="0.55" />
    </svg>
  )
}

function IllustrationPedagogieSm() {
  return (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="50" height="50" fill="#FFF7ED" rx="8" />
      <rect x="15" y="10" width="20" height="28" rx="2" fill="#EA580C" fillOpacity="0.18" />
      <rect x="15" y="10" width="3" height="28" rx="1" fill="#EA580C" fillOpacity="0.42" />
      <rect x="21" y="17" width="11" height="2" rx="1" fill="#EA580C" fillOpacity="0.5" />
      <rect x="21" y="22" width="9" height="2" rx="1" fill="#EA580C" fillOpacity="0.5" />
      <rect x="21" y="27" width="11" height="2" rx="1" fill="#EA580C" fillOpacity="0.5" />
    </svg>
  )
}

function IllustrationProtectionSm() {
  return (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="50" height="50" fill="#FEF2F2" rx="8" />
      <path d="M25 5 L41 11 L41 26 Q41 39 25 45 Q9 39 9 26 L9 11 Z" fill="#DC2626" fillOpacity="0.13" />
      <path d="M25 31 C25 31 15 24 15 18 C15 13 20 10 23 12 C24.2 12.7 25 14 25 14 C25 14 25.8 12.7 27 12 C30 10 35 13 35 18 C35 24 25 31 25 31Z" fill="#DC2626" fillOpacity="0.62" />
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
  switch (domaine) {
    case "Handicap": return <IllustrationHandicapSm />
    case "Pédagogie Spécialisée": return <IllustrationPedagogieSm />
    case "Protection des mineurs": return <IllustrationProtectionSm />
    default: return <IllustrationTransversalSm />
  }
}

// ── SVG illustrations grandes (cartes recommandations) ─────────────────────────

function IllustrationHandicap() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="dh" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#C7D2FE" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dh)" />
      <circle cx="100" cy="55" r="40" fill="#4338CA" fillOpacity="0.09" />
      <circle cx="100" cy="38" r="10" fill="#4338CA" fillOpacity="0.58" />
      <path d="M86 65 Q86 55 100 55 Q114 55 114 65 L114 76 Q114 79 111 79 L89 79 Q86 79 86 76Z" fill="#4338CA" fillOpacity="0.58" />
      <circle cx="95" cy="92" r="11" fill="none" stroke="#4338CA" strokeWidth="2.5" strokeOpacity="0.4" />
      <circle cx="95" cy="92" r="3.5" fill="#4338CA" fillOpacity="0.4" />
    </svg>
  )
}

function IllustrationPedagogie() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="dp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dp)" />
      <rect x="72" y="28" width="56" height="68" rx="4" fill="#EA580C" fillOpacity="0.15" />
      <rect x="76" y="28" width="50" height="68" rx="3" fill="#EA580C" fillOpacity="0.18" />
      <rect x="72" y="28" width="7" height="68" rx="3" fill="#EA580C" fillOpacity="0.4" />
      <rect x="85" y="44" width="32" height="3" rx="1.5" fill="#EA580C" fillOpacity="0.38" />
      <rect x="85" y="53" width="26" height="3" rx="1.5" fill="#EA580C" fillOpacity="0.38" />
      <rect x="85" y="62" width="32" height="3" rx="1.5" fill="#EA580C" fillOpacity="0.38" />
      <polygon points="136,22 139.5,32 150,32 141.5,38 144.5,48 136,42 127.5,48 130.5,38 122,32 132.5,32" fill="#EA580C" fillOpacity="0.58" />
    </svg>
  )
}

function IllustrationProtection() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="dipr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF2F2" />
          <stop offset="100%" stopColor="#FECACA" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dipr)" />
      <path d="M100 18 L132 31 L132 63 Q132 87 100 98 Q68 87 68 63 L68 31 Z" fill="#DC2626" fillOpacity="0.12" />
      <path d="M100 25 L128 37 L128 63 Q128 84 100 92 Q72 84 72 63 L72 37 Z" fill="#DC2626" fillOpacity="0.16" />
      <path d="M100 75 C100 75 80 63 80 52 C80 45 86 39 93 42 C96.5 43.5 100 47 100 47 C100 47 103.5 43.5 107 42 C114 39 120 45 120 52 C120 63 100 75 100 75Z" fill="#DC2626" fillOpacity="0.62" />
    </svg>
  )
}

function IllustrationTransversal() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="dit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dit)" />
      <line x1="100" y1="60" x2="58" y2="33" stroke="#64748B" strokeWidth="2" strokeOpacity="0.28" />
      <line x1="100" y1="60" x2="142" y2="33" stroke="#64748B" strokeWidth="2" strokeOpacity="0.28" />
      <line x1="100" y1="60" x2="58" y2="87" stroke="#64748B" strokeWidth="2" strokeOpacity="0.28" />
      <line x1="100" y1="60" x2="142" y2="87" stroke="#64748B" strokeWidth="2" strokeOpacity="0.28" />
      <circle cx="100" cy="60" r="11" fill="#64748B" fillOpacity="0.38" />
      <circle cx="100" cy="60" r="6" fill="#64748B" fillOpacity="0.48" />
      <circle cx="58" cy="33" r="8" fill="#64748B" fillOpacity="0.32" />
      <circle cx="142" cy="33" r="8" fill="#64748B" fillOpacity="0.32" />
      <circle cx="58" cy="87" r="8" fill="#64748B" fillOpacity="0.32" />
      <circle cx="142" cy="87" r="8" fill="#64748B" fillOpacity="0.32" />
    </svg>
  )
}

function DomainIllustration({ domaine }: { domaine: string | null }) {
  switch (domaine) {
    case "Handicap": return <IllustrationHandicap />
    case "Pédagogie Spécialisée": return <IllustrationPedagogie />
    case "Protection des mineurs": return <IllustrationProtection />
    default: return <IllustrationTransversal />
  }
}

// ── Formation Card (même style que le catalogue) ───────────────────────────────

function FormationCardDash({ f }: { f: FormationRecommandee }) {
  const cfg = f.domaine ? DOMAINE_CONFIG[f.domaine] : null

  const inner = (
    <>
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 220 }}>
        <DomainIllustration domaine={f.domaine} />
        {cfg && f.domaine && (
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: cfg.badgeBg, color: cfg.badgeText }}
          >
            {f.domaine}
          </span>
        )}
        {f.est_a_venir && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-[#1B2D5B] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
              À venir
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col p-5" style={{ height: 200 }}>
        <div className="flex-1 min-h-0">
          <h3
            className="text-base font-bold text-[#1B2D5B] leading-snug mb-2 overflow-hidden"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" } as React.CSSProperties}
          >
            {f.titre}
          </h3>
          {f.description_courte && (
            <p
              className="text-sm text-gray-500 overflow-hidden"
              style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" } as React.CSSProperties}
            >
              {f.description_courte}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>{dureeFormat(f.duree_estimee_minutes)}</span>
            {f.niveau && <span>· {f.niveau}</span>}
          </div>
          {!f.est_a_venir && (
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#3DBFA0] text-white">
              Commencer →
            </span>
          )}
        </div>
      </div>
    </>
  )

  if (f.est_a_venir) {
    return (
      <div
        className="rounded-2xl overflow-hidden shadow-sm flex flex-col bg-white border border-gray-100"
        style={{ height: 420 }}
      >
        {inner}
      </div>
    )
  }

  return (
    <a
      href={"/catalogue/" + f.slug}
      className="rounded-2xl overflow-hidden shadow-sm flex flex-col bg-white border border-gray-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ height: 420 }}
    >
      {inner}
    </a>
  )
}

// ── Skeleton ───────────────────────────────────────────────────────────────────

function Pulse({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-200 rounded ${className ?? ""}`} />
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <div className="w-64 bg-[#1B2D5B] flex-shrink-0" />
      <main className="flex-1">
        <div className="bg-[#1B2D5B] px-8 py-6 flex justify-between items-center">
          <div className="space-y-2">
            <Pulse className="h-8 w-64 bg-white/20" />
            <Pulse className="h-4 w-44 bg-white/10" />
          </div>
          <Pulse className="h-6 w-36 bg-white/10" />
        </div>
        <div className="px-8 py-6 space-y-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => <Pulse key={i} className="h-28 rounded-xl" />)}
          </div>
          <div className="space-y-2.5">
            {[0, 1].map((i) => <Pulse key={i} className="h-20 rounded-xl" />)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => <Pulse key={i} className="h-72 rounded-2xl" />)}
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
        { data: allFormations },
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
        supabase
          .from("formations")
          .select("id, titre, slug, domaine, duree_estimee_minutes, description_courte, niveau, est_a_venir, image_url, nb_modules_total, est_publie, est_privee")
          .eq("est_publie", true)
          .eq("est_privee", false)
          .order("ordre"),
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
      const formations = allFormations ?? []
      const formationIds = [...new Set(prog.map((p) => p.formation_id))]

      // Fetch modules for formations started
      let modulesData: { id: string; formation_id: string }[] = []
      if (formationIds.length > 0) {
        const { data: mods } = await supabase
          .from("modules")
          .select("id, formation_id")
          .in("formation_id", formationIds)
        modulesData = mods ?? []
      }

      const termineIds = new Set(prog.filter((p) => p.statut === "termine").map((p) => p.module_id))

      const formationsEnCoursTout: FormationEnCours[] = []
      let formationsCompletees = 0
      let totalMinutesCompletees = 0

      for (const fId of formationIds) {
        const formation = formations.find((f) => f.id === fId)
        if (!formation) continue
        const mods = modulesData.filter((m) => m.formation_id === fId)
        const nbTermines = mods.filter((m) => termineIds.has(m.id)).length
        const nbModules = mods.length || (formation.nb_modules_total ?? 0)
        const isComplete = nbModules > 0 && nbTermines >= nbModules

        if (isComplete) {
          formationsCompletees++
          totalMinutesCompletees += formation.duree_estimee_minutes ?? 0
        } else {
          formationsEnCoursTout.push({
            id: fId,
            titre: formation.titre,
            slug: formation.slug,
            domaine: getFirstDomaine(formation.domaine),
            nbModules,
            nbTermines,
            image_url: (formation as Record<string, unknown>).image_url as string | null ?? null,
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

      // Recommandations par domaine
      const domainesEnCours = new Set<string>()
      for (const fId of formationIds) {
        const f = formations.find((f) => f.id === fId)
        if (f) getDomaineArray(f.domaine).forEach((d) => domainesEnCours.add(d))
      }

      const formationIdsSet = new Set(formationIds)
      const toRecoCard = (f: typeof formations[0]): FormationRecommandee => ({
        id: f.id,
        titre: f.titre,
        slug: f.slug,
        domaine: getFirstDomaine(f.domaine),
        duree_estimee_minutes: f.duree_estimee_minutes,
        description_courte: (f as Record<string, unknown>).description_courte as string | null ?? null,
        niveau: (f as Record<string, unknown>).niveau as string | null ?? null,
        est_a_venir: Boolean((f as Record<string, unknown>).est_a_venir),
      })

      let recommandations: FormationRecommandee[] = formations
        .filter(
          (f) =>
            !formationIdsSet.has(f.id) &&
            getDomaineArray(f.domaine).some((d) => domainesEnCours.has(d))
        )
        .slice(0, 3)
        .map(toRecoCard)

      // Fallback : premières formations non commencées
      if (recommandations.length === 0) {
        recommandations = formations
          .filter((f) => !formationIdsSet.has(f.id))
          .slice(0, 3)
          .map(toRecoCard)
      }

      setData({
        profil: profilData ?? null,
        institution: (ipData?.institutions as unknown as Institution) ?? null,
        formationsEnCours: formationsEnCoursTout.slice(0, 2),
        totalEnCours: formationsEnCoursTout.length,
        formationsCompletees,
        totalMinutesCompletees,
        nbAttestations: countAttestations ?? 0,
        nbBadges: badgesData?.length ?? 0,
        recommandations,
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
    recommandations,
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
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar pageActive="dashboard" institution={institution?.nom} />

      <main className="flex-1 min-w-0">

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <div className="bg-[#1B2D5B] px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-white leading-tight">
              Bonjour{profil?.prenom ? ", " + profil.prenom : ""} 👋
            </h1>
            <p className="text-[#3DBFA0] text-sm mt-0.5 font-medium">
              Bienvenue sur votre espace LEARNA
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-white/45 text-sm capitalize">{getDateFr()}</span>
            {institution?.nom && (
              <span className="bg-[#3DBFA0]/20 text-[#3DBFA0] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#3DBFA0]/30 whitespace-nowrap">
                {institution.nom}
              </span>
            )}
          </div>
        </div>

        <div className="px-8 py-7 space-y-8 max-w-6xl">

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
                    <div
                      key={f.id}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 flex items-center gap-4"
                    >
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
                            <div
                              className="bg-[#3DBFA0] h-1.5 rounded-full transition-all"
                              style={{ width: pct + "%" }}
                            />
                          </div>
                          <span className="text-xs text-gray-400 flex-shrink-0">
                            {f.nbTermines}/{f.nbModules} modules
                          </span>
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
            <h2 className="text-base font-semibold text-[#1B2D5B] mb-4">Ma progression</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href="/formations"
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🎓</div>
                <div className="text-3xl font-bold text-[#3DBFA0]">{formationsCompletees}</div>
                <div className="text-xs text-gray-500 mt-1.5 leading-snug">Formations complétées</div>
                <div className="text-xs text-[#3DBFA0] mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Voir →
                </div>
              </a>
              <a
                href="/progression"
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">⏱</div>
                <div className="text-3xl font-bold text-[#1B2D5B]">
                  {totalMinutesCompletees > 0 ? heuresFormat(totalMinutesCompletees) : "—"}
                </div>
                <div className="text-xs text-gray-500 mt-1.5 leading-snug">Heures de formation</div>
                <div className="text-xs text-[#3DBFA0] mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Voir →
                </div>
              </a>
              <a
                href="/attestations"
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">📜</div>
                <div className="text-3xl font-bold text-green-600">{nbAttestations}</div>
                <div className="text-xs text-gray-500 mt-1.5 leading-snug">Attestations obtenues</div>
                <div className="text-xs text-[#3DBFA0] mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Voir →
                </div>
              </a>
              <a
                href="/progression"
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">🏅</div>
                <div className="text-3xl font-bold text-amber-500">{nbBadges}</div>
                <div className="text-xs text-gray-500 mt-1.5 leading-snug">Badges débloqués</div>
                <div className="text-xs text-[#3DBFA0] mt-2 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Voir →
                </div>
              </a>
            </div>
          </section>

          {/* ── Formations recommandées — cards style catalogue ────────── */}
          {recommandations.length > 0 && (
            <section>
              <div className="mb-4">
                <h2 className="text-base font-semibold text-[#1B2D5B]">Recommandées pour vous</h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Selon vos formations en cours et votre domaine
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {recommandations.map((f) => (
                  <FormationCardDash key={f.id} f={f} />
                ))}
              </div>
              <a href="/catalogue" className="inline-block mt-3 text-xs text-[#3DBFA0] hover:underline">
                Voir tout le catalogue →
              </a>
            </section>
          )}

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
                    style={{
                      backgroundColor: cfg.badgeBg,
                      color: cfg.badgeText,
                      borderColor: cfg.badgeText + "22",
                    }}
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
                <a href="/progression" className="text-xs text-[#3DBFA0] hover:underline">
                  Voir tous mes badges →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {badges.map((b) => {
                  const def = BADGE_DEFS.find((d) => d.id === b.badge_id)
                  if (!def) return null
                  return (
                    <div
                      key={b.badge_id}
                      className="bg-white rounded-xl border border-[#3DBFA0]/20 shadow-sm p-4 flex items-start gap-3"
                    >
                      <span className="text-2xl flex-shrink-0">{def.icone}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#1B2D5B]">{def.titre}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{def.description}</p>
                        <p className="text-xs text-[#3DBFA0] font-medium mt-1.5">
                          Obtenu le {formatDate(b.obtenu_le)}
                        </p>
                      </div>
                    </div>
                  )
                })}
                {nearUnlock &&
                  (() => {
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
                          Il vous manque{" "}
                          <strong>
                            {manque} formation{manque > 1 ? "s" : ""}
                          </strong>{" "}
                          pour obtenir <strong>{nearUnlock.titre}</strong>
                        </p>
                        <div className="w-full bg-amber-100 rounded-full h-1.5">
                          <div
                            className="bg-amber-400 h-1.5 rounded-full"
                            style={{ width: pct + "%" }}
                          />
                        </div>
                        <p className="text-xs text-amber-600 mt-1 text-right">
                          {cur} / {tot}
                        </p>
                      </div>
                    )
                  })()}
              </div>
            </section>
          )}

          {/* ── Ressources & À venir ──────────────────────────────────────── */}
          <section className="pb-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-base font-semibold text-[#1B2D5B]">Ressources</h2>
              <span className="text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                Bientôt disponible
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  titre: "Guides pratiques",
                  desc: "Des guides et fiches mémo pour approfondir vos formations.",
                },
                {
                  titre: "Articles de fond",
                  desc: "Lectures complémentaires rédigées par des experts du secteur.",
                },
                {
                  titre: "Ressources terrain",
                  desc: "Outils pratiques directement applicables en situation professionnelle.",
                },
              ].map((r, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <div className="text-2xl mb-3">📚</div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">{r.titre}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}
