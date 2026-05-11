"use client"

import { useEffect, useState, useRef } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"

// ─── Types ─────────────────────────────────────────────────────────────────────

type Formation = {
  id: string
  titre: string
  slug: string
  description_courte: string | null
  niveau: string | null
  duree_estimee_minutes: number | null
  parcours_id: string | null
  parcours_ordre: number | null
  parcours_nom: string | null
  domaine: string[] | string | null
  thematique: string | null
  public_cible: string | null
  ordre: number | null
  est_a_venir: boolean
  image_url: string | null
}

type FormationState = "nouveau" | "en_cours" | "termine"

type ParcoursGroup = {
  id: string
  nom: string
  formations: Formation[]
}

// ─── Constants ──────────────────────────────────────────────────────────────────

const DOMAINES = ["Handicap", "Pédagogie Spécialisée", "Protection des mineurs", "Transversal"] as const

const THEMATIQUES = [
  "Accompagnement",
  "Management",
  "Communication",
  "Éthique et posture",
  "Outils et méthodes",
  "Législation et droits",
]

const NIVEAUX = ["Niveau 1", "Niveau 2", "Niveau 3"]

interface DomaineConfig {
  slug: string
  badgeBg: string
  badgeText: string
  gradFrom: string
  gradTo: string
  iconColor: string
}

const DOMAINE_CONFIG: Record<string, DomaineConfig> = {
  "Handicap": {
    slug: "handicap",
    badgeBg: "#EEF2FF",
    badgeText: "#3730A3",
    gradFrom: "#EEF2FF",
    gradTo: "#C7D2FE",
    iconColor: "#4338CA",
  },
  "Pédagogie Spécialisée": {
    slug: "pedagogie-specialisee",
    badgeBg: "#FFF7ED",
    badgeText: "#C2410C",
    gradFrom: "#FFF7ED",
    gradTo: "#FED7AA",
    iconColor: "#EA580C",
  },
  "Protection des mineurs": {
    slug: "protection-des-mineurs",
    badgeBg: "#FEF2F2",
    badgeText: "#B91C1C",
    gradFrom: "#FEF2F2",
    gradTo: "#FECACA",
    iconColor: "#DC2626",
  },
  "Transversal": {
    slug: "transversal",
    badgeBg: "#F1F5F9",
    badgeText: "#475569",
    gradFrom: "#F1F5F9",
    gradTo: "#CBD5E1",
    iconColor: "#64748B",
  },
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

function dureeFormat(minutes: number | null | undefined): string {
  if (!minutes) return "–"
  if (minutes < 60) return `${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}h${m}` : `${h}h`
}

function getDomaineArray(domaine: string | string[] | null | undefined): string[] {
  if (!domaine) return []
  if (Array.isArray(domaine)) return domaine
  return [domaine]
}

function getFirstDomaine(domaine: string | string[] | null | undefined): string | null {
  const arr = getDomaineArray(domaine)
  return arr[0] || null
}

// ─── SVG Illustrations ──────────────────────────────────────────────────────────

function IllustrationHandicap() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ih" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#C7D2FE" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#ih)" />
      <circle cx="100" cy="55" r="40" fill="#4338CA" fillOpacity="0.1" />
      <circle cx="100" cy="55" r="28" fill="#4338CA" fillOpacity="0.13" />
      <circle cx="100" cy="38" r="10" fill="#4338CA" fillOpacity="0.6" />
      <path d="M86 65 Q86 55 100 55 Q114 55 114 65 L114 76 Q114 79 111 79 L89 79 Q86 79 86 76Z" fill="#4338CA" fillOpacity="0.6" />
      <circle cx="95" cy="92" r="11" fill="none" stroke="#4338CA" strokeWidth="2.5" strokeOpacity="0.5" />
      <circle cx="95" cy="92" r="3.5" fill="#4338CA" fillOpacity="0.5" />
      <line x1="114" y1="68" x2="114" y2="84" stroke="#4338CA" strokeWidth="2.5" strokeOpacity="0.4" strokeLinecap="round" />
    </svg>
  )
}

function IllustrationPedagogie() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#ip)" />
      <rect x="72" y="28" width="56" height="68" rx="4" fill="#EA580C" fillOpacity="0.15" />
      <rect x="76" y="28" width="50" height="68" rx="3" fill="#EA580C" fillOpacity="0.2" />
      <rect x="72" y="28" width="7" height="68" rx="3" fill="#EA580C" fillOpacity="0.4" />
      <rect x="85" y="44" width="32" height="3" rx="1.5" fill="#EA580C" fillOpacity="0.4" />
      <rect x="85" y="53" width="26" height="3" rx="1.5" fill="#EA580C" fillOpacity="0.4" />
      <rect x="85" y="62" width="32" height="3" rx="1.5" fill="#EA580C" fillOpacity="0.4" />
      <rect x="85" y="71" width="20" height="3" rx="1.5" fill="#EA580C" fillOpacity="0.4" />
      <polygon points="136,22 139.5,32 150,32 141.5,38 144.5,48 136,42 127.5,48 130.5,38 122,32 132.5,32" fill="#EA580C" fillOpacity="0.6" />
    </svg>
  )
}

function IllustrationProtection() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ipr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF2F2" />
          <stop offset="100%" stopColor="#FECACA" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#ipr)" />
      <path d="M100 18 L132 31 L132 63 Q132 87 100 98 Q68 87 68 63 L68 31 Z" fill="#DC2626" fillOpacity="0.13" />
      <path d="M100 25 L128 37 L128 63 Q128 84 100 92 Q72 84 72 63 L72 37 Z" fill="#DC2626" fillOpacity="0.18" />
      <path d="M100 75 C100 75 80 63 80 52 C80 45 86 39 93 42 C96.5 43.5 100 47 100 47 C100 47 103.5 43.5 107 42 C114 39 120 45 120 52 C120 63 100 75 100 75Z" fill="#DC2626" fillOpacity="0.65" />
    </svg>
  )
}

function IllustrationTransversal() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="it" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#it)" />
      <line x1="100" y1="60" x2="58" y2="33" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="142" y2="33" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="58" y2="87" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="142" y2="87" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="58" y1="33" x2="142" y2="33" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.2" />
      <line x1="58" y1="87" x2="142" y2="87" stroke="#64748B" strokeWidth="1.5" strokeOpacity="0.2" />
      <circle cx="100" cy="60" r="11" fill="#64748B" fillOpacity="0.4" />
      <circle cx="100" cy="60" r="6" fill="#64748B" fillOpacity="0.5" />
      <circle cx="58" cy="33" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="142" cy="33" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="58" cy="87" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="142" cy="87" r="8" fill="#64748B" fillOpacity="0.35" />
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

// ─── Skeleton ───────────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm bg-white animate-pulse" style={{ height: 380 }}>
      <div className="bg-gray-100" style={{ height: 152 }} />
      <div className="p-5 space-y-3">
        <div className="h-3.5 bg-gray-100 rounded-full w-1/3" />
        <div className="h-5 bg-gray-100 rounded w-4/5" />
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-3/4" />
        <div className="mt-8 h-9 bg-gray-100 rounded-lg w-1/3" />
      </div>
    </div>
  )
}

// ─── Formation Card ─────────────────────────────────────────────────────────────

function FormationCard({
  formation,
  state,
  nbTermines,
  nbTotal,
}: {
  formation: Formation
  state: FormationState
  nbTermines: number
  nbTotal: number
}) {
  const firstDomaine = getFirstDomaine(formation.domaine)
  const cfg = firstDomaine ? DOMAINE_CONFIG[firstDomaine] : null
  const isAVenir = formation.est_a_venir

  const cardBg = state === "termine" ? "bg-green-50/50" : "bg-white"
  const cardBorder =
    state === "en_cours"
      ? "border border-[#3DBFA0] border-l-4"
      : state === "termine"
      ? "border border-green-200"
      : "border border-gray-100"

  const inner = (
    <>
      {/* Image zone 40% = 152px */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 152 }}>
        {formation.image_url ? (
          <img src={formation.image_url} alt={formation.titre} className="w-full h-full object-cover" />
        ) : (
          <DomainIllustration domaine={firstDomaine} />
        )}
        {cfg && firstDomaine && (
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: cfg.badgeBg, color: cfg.badgeText }}
          >
            {firstDomaine}
          </span>
        )}
        {state === "nouveau" && !isAVenir && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-white text-[#3DBFA0] px-2.5 py-1 rounded-full shadow-sm">
            Nouveau
          </span>
        )}
        {state === "termine" && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-green-500 text-white px-2.5 py-1 rounded-full shadow-sm">
            ✓ Terminé
          </span>
        )}
        {isAVenir && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-[#1B2D5B] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
              À venir
            </span>
          </div>
        )}
      </div>

      {/* Content zone 60% = 228px */}
      <div className="flex flex-col p-5" style={{ height: 228 }}>
        <div className="flex-1 min-h-0">
          <h3 className="text-base font-bold text-[#1B2D5B] leading-snug mb-2 overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            {formation.titre}
          </h3>
          <p className="text-sm text-gray-500 overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            {formation.description_courte || ""}
          </p>
        </div>
        {state === "en_cours" && nbTotal > 0 && (
          <div className="mt-2 mb-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500">{nbTermines}/{nbTotal} modules</span>
              <span className="text-xs font-medium text-[#3DBFA0]">
                {Math.round((nbTermines / nbTotal) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className="bg-green-500 h-1.5 rounded-full transition-all"
                style={{ width: `${(nbTermines / nbTotal) * 100}%` }}
              />
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>{dureeFormat(formation.duree_estimee_minutes)}</span>
            {formation.niveau && <span>· {formation.niveau}</span>}
          </div>
          {!isAVenir && (
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                state === "termine"
                  ? "bg-gray-100 text-gray-500"
                  : state === "en_cours"
                  ? "bg-[#1B2D5B] text-white"
                  : "bg-[#3DBFA0] text-white"
              }`}
            >
              {state === "termine" ? "Revoir →" : state === "en_cours" ? "Continuer →" : "Commencer →"}
            </span>
          )}
        </div>
      </div>
    </>
  )

  if (isAVenir) {
    return (
      <div
        className={`rounded-2xl overflow-hidden shadow-sm flex flex-col ${cardBg} ${cardBorder}`}
        style={{ height: 380 }}
      >
        {inner}
      </div>
    )
  }

  return (
    <a
      href={`/catalogue/${formation.slug}`}
      className={`rounded-2xl overflow-hidden shadow-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${cardBg} ${cardBorder}`}
      style={{ height: 380 }}
    >
      {inner}
    </a>
  )
}

// ─── Parcours Card ──────────────────────────────────────────────────────────────

function ParcoursCard({ group }: { group: ParcoursGroup }) {
  const totalMinutes = group.formations.reduce((s, f) => s + (f.duree_estimee_minutes || 0), 0)
  const sorted = [...group.formations].sort((a, b) => (a.parcours_ordre || 0) - (b.parcours_ordre || 0))
  const firstDomaine = getFirstDomaine(sorted[0]?.domaine)
  const cfg = firstDomaine ? DOMAINE_CONFIG[firstDomaine] : null
  const firstAvailable = sorted.find((f) => !f.est_a_venir)

  return (
    <div className="bg-white rounded-2xl shadow-sm border-l-4 border-[#1B2D5B] p-6 flex gap-5">
      <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden self-center">
        <DomainIllustration domaine={firstDomaine} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="inline-flex items-center text-xs font-bold text-white bg-[#3DBFA0] px-3 py-1 rounded-full">
            PARCOURS
          </span>
          {cfg && firstDomaine && (
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: cfg.badgeBg, color: cfg.badgeText }}
            >
              {firstDomaine}
            </span>
          )}
          <span className="ml-auto text-xs text-gray-400 flex-shrink-0">{dureeFormat(totalMinutes)} au total</span>
        </div>
        <h3 className="text-lg font-bold text-[#1B2D5B] mb-3">{group.nom}</h3>
        <div className="space-y-1.5 mb-4">
          {sorted.map((f, i) => (
            <div key={f.id} className="flex items-center gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1B2D5B]/10 text-[#1B2D5B] text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-sm text-[#1B2D5B] truncate flex-1">{f.titre}</span>
              {f.est_a_venir && (
                <span className="text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full flex-shrink-0">
                  À venir
                </span>
              )}
              <span className="text-xs text-gray-400 flex-shrink-0">{dureeFormat(f.duree_estimee_minutes)}</span>
            </div>
          ))}
        </div>
        {firstAvailable && (
          <a
            href={`/catalogue/${firstAvailable.slug}`}
            className="inline-block text-sm font-semibold text-white bg-[#1B2D5B] px-4 py-2 rounded-lg hover:bg-[#1B2D5B]/90 transition-colors"
          >
            Découvrir →
          </a>
        )}
      </div>
    </div>
  )
}

// ─── Domain Icon ────────────────────────────────────────────────────────────────

function DomainIcon({ domaine, color }: { domaine: string; color: string }) {
  const style = { color }
  if (domaine === "Handicap") return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <path d="M10 9h4l1 7h-2l-1-4H10" />
      <path d="M8 21a4 4 0 0 1 4-4" />
      <circle cx="14" cy="20" r="2" />
    </svg>
  )
  if (domaine === "Pédagogie Spécialisée") return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <polygon points="12,7 13,10 16,10 13.5,12 14.5,15 12,13 9.5,15 10.5,12 8,10 11,10" strokeWidth="1.5" />
    </svg>
  )
  if (domaine === "Protection des mineurs") return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 17c0 0-4-2.5-4-6 0-2 1.5-3.5 3.5-3C12.3 8.2 12 9 12 9s-.3-.8.5-1C14.5 7.5 16 9 16 11c0 3.5-4 6-4 6z" />
    </svg>
  )
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <line x1="12" y1="10" x2="7" y2="7" />
      <line x1="12" y1="10" x2="17" y2="7" />
      <line x1="12" y1="14" x2="7" y2="17" />
      <line x1="12" y1="14" x2="17" y2="17" />
    </svg>
  )
}

// ─── Domain Section ──────────────────────────────────────────────────────────────

function DomainSection({
  domaine,
  formations,
  progressMap,
  attestationsSet,
  moduleCounts,
  showAll,
}: {
  domaine: string
  formations: Formation[]
  progressMap: Map<string, number>
  attestationsSet: Set<string>
  moduleCounts: Map<string, number>
  showAll: boolean
}) {
  const cfg = DOMAINE_CONFIG[domaine]
  const displayed = showAll ? formations : formations.slice(0, 3)

  return (
    <section>
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 rounded-xl" style={{ backgroundColor: cfg?.badgeBg }}>
              <DomainIcon domaine={domaine} color={cfg?.badgeText || "#475569"} />
            </div>
            <h2 className="text-xl font-bold text-[#1B2D5B]">{domaine}</h2>
          </div>
          <p className="text-sm text-gray-500 ml-11">
            {formations.length} formation{formations.length !== 1 ? "s" : ""}
          </p>
        </div>
        {!showAll && formations.length > 3 && cfg && (
          <a
            href={`/catalogue/domaine/${cfg.slug}`}
            className="text-sm font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors hidden sm:block"
          >
            Voir toutes →
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayed.map((f) => {
          const hasAttestation = attestationsSet.has(f.id)
          const progressTermines = progressMap.get(f.id) || 0
          const totalMods = moduleCounts.get(f.id) || 0
          const state: FormationState = hasAttestation
            ? "termine"
            : progressTermines > 0
            ? "en_cours"
            : "nouveau"
          return (
            <FormationCard
              key={f.id}
              formation={f}
              state={state}
              nbTermines={progressTermines}
              nbTotal={totalMods}
            />
          )
        })}
      </div>

      {!showAll && formations.length > 3 && cfg && (
        <div className="mt-6 text-center">
          <a
            href={`/catalogue/domaine/${cfg.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2D5B] hover:text-[#3DBFA0] transition-colors border border-[#1B2D5B]/20 hover:border-[#3DBFA0] px-6 py-2.5 rounded-full"
          >
            Voir toutes les formations — {domaine} →
          </a>
        </div>
      )}
    </section>
  )
}

// ─── Filter Dropdown ─────────────────────────────────────────────────────────────

function FilterDropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  const isActive = !!value
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none pl-3 pr-7 py-2 text-sm rounded-lg border cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] transition-colors ${
          isActive
            ? "border-[#3DBFA0] bg-[#3DBFA0]/5 text-[#3DBFA0] font-medium"
            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
        }`}
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <svg
        className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

// ─── Active Filter Chip ──────────────────────────────────────────────────────────

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium bg-[#3DBFA0]/10 text-[#3DBFA0] px-2.5 py-1 rounded-full">
      {label}
      <button onClick={onRemove} className="hover:text-[#1B2D5B] ml-0.5 leading-none text-base">
        ×
      </button>
    </span>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────────

export default function CataloguePage() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [progressMap, setProgressMap] = useState<Map<string, number>>(new Map())
  const [attestationsSet, setAttestationsSet] = useState<Set<string>>(new Set())
  const [moduleCounts, setModuleCounts] = useState<Map<string, number>>(new Map())
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [filterDomaine, setFilterDomaine] = useState("")
  const [filterThematique, setFilterThematique] = useState("")
  const [filterNiveau, setFilterNiveau] = useState("")
  const [filterDuree, setFilterDuree] = useState("")

  const domaineRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.push("/connexion")
        return
      }

      const [{ data: forms }, { data: progs }, { data: attests }, { data: mods }] =
        await Promise.all([
          supabase
            .from("formations")
            .select(
              "id, titre, slug, description_courte, niveau, duree_estimee_minutes, parcours_id, parcours_ordre, parcours_nom, domaine, thematique, public_cible, ordre, est_a_venir, image_url"
            )
            .eq("est_privee", false)
            .or("est_publie.eq.true,est_a_venir.eq.true")
            .order("ordre"),
          supabase
            .from("progression")
            .select("formation_id, module_id, statut")
            .eq("profil_id", user.id),
          supabase.from("attestations").select("formation_id").eq("profil_id", user.id),
          supabase.from("modules").select("formation_id, id"),
        ])

      if (forms) setFormations(forms as unknown as Formation[])

      const pm = new Map<string, number>()
      if (progs) {
        for (const p of progs) {
          if (p.statut === "termine") {
            pm.set(p.formation_id, (pm.get(p.formation_id) || 0) + 1)
          }
        }
      }
      setProgressMap(pm)

      const as = new Set<string>()
      if (attests) attests.forEach((a) => as.add(a.formation_id))
      setAttestationsSet(as)

      const mc = new Map<string, number>()
      if (mods) {
        for (const m of mods) {
          mc.set(m.formation_id, (mc.get(m.formation_id) || 0) + 1)
        }
      }
      setModuleCounts(mc)

      setLoading(false)
    }
    getData()
  }, [router])

  // Scroll to domain section when filter changes
  useEffect(() => {
    if (filterDomaine && domaineRefs.current[filterDomaine]) {
      setTimeout(() => {
        domaineRefs.current[filterDomaine]?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }, [filterDomaine])

  const hasFilters = !!(filterDomaine || filterThematique || filterNiveau || filterDuree || search)

  const clearFilters = () => {
    setFilterDomaine("")
    setFilterThematique("")
    setFilterNiveau("")
    setFilterDuree("")
    setSearch("")
  }

  // Client-side filter
  const filtered = formations.filter((f) => {
    if (search) {
      const q = search.toLowerCase()
      if (!f.titre.toLowerCase().includes(q) && !(f.description_courte || "").toLowerCase().includes(q)) {
        return false
      }
    }
    if (filterDomaine) {
      const arr = getDomaineArray(f.domaine)
      if (!arr.includes(filterDomaine)) return false
    }
    if (filterThematique && f.thematique !== filterThematique) return false
    if (filterNiveau && f.niveau !== filterNiveau) return false
    if (filterDuree) {
      const mins = f.duree_estimee_minutes || 0
      if (filterDuree === "Moins de 1h" && mins >= 60) return false
      if (filterDuree === "1h – 3h" && (mins < 60 || mins > 180)) return false
      if (filterDuree === "Plus de 3h" && mins <= 180) return false
    }
    return true
  })

  // Build parcours groups
  const parcoursMap = new Map<string, ParcoursGroup>()
  for (const f of filtered) {
    if (f.parcours_id) {
      const existing = parcoursMap.get(f.parcours_id)
      if (existing) {
        existing.formations.push(f)
      } else {
        parcoursMap.set(f.parcours_id, {
          id: f.parcours_id,
          nom: f.parcours_nom || f.parcours_id,
          formations: [f],
        })
      }
    }
  }
  const parcoursGroups = Array.from(parcoursMap.values())

  // Formations by domain
  const formationsByDomaine = (domaine: string) =>
    filtered.filter((f) => getDomaineArray(f.domaine).includes(domaine))

  const domainesAffichees = DOMAINES.filter((d) => formationsByDomaine(d).length > 0)

  const totalCount = new Set(filtered.map((f) => f.id)).size

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar pageActive="catalogue" />
      <div className="flex-1 flex flex-col min-w-0">
        {/* ── Header navy ─────────────────────────────────────────────────────── */}
        <div className="bg-[#1B2D5B] px-8 py-10">
          <h1 className="text-3xl font-bold text-white mb-1">Catalogue des formations</h1>
          <p className="text-[#3DBFA0] text-base font-medium mb-7">
            Des formations ancrées dans la réalité du terrain
          </p>
          <div className="max-w-lg mx-auto relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une formation..."
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] shadow-sm"
            />
          </div>
          <p className="text-white/60 text-sm text-center mt-3">
            {totalCount} formation{totalCount !== 1 ? "s" : ""} disponible{totalCount !== 1 ? "s" : ""}
          </p>
        </div>

        {/* ── Sticky filter bar ────────────────────────────────────────────────── */}
        <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm px-8 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            <FilterDropdown
              label="Domaine"
              options={[...DOMAINES]}
              value={filterDomaine}
              onChange={setFilterDomaine}
            />
            <FilterDropdown
              label="Thématique"
              options={THEMATIQUES}
              value={filterThematique}
              onChange={setFilterThematique}
            />
            <FilterDropdown
              label="Niveau"
              options={NIVEAUX}
              value={filterNiveau}
              onChange={setFilterNiveau}
            />
            <FilterDropdown
              label="Durée"
              options={["Moins de 1h", "1h – 3h", "Plus de 3h"]}
              value={filterDuree}
              onChange={setFilterDuree}
            />
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-gray-700 transition-colors underline underline-offset-2"
              >
                Tout effacer
              </button>
            )}
            <div className="flex items-center gap-2 flex-wrap ml-auto">
              {filterDomaine && <FilterChip label={filterDomaine} onRemove={() => setFilterDomaine("")} />}
              {filterThematique && <FilterChip label={filterThematique} onRemove={() => setFilterThematique("")} />}
              {filterNiveau && <FilterChip label={filterNiveau} onRemove={() => setFilterNiveau("")} />}
              {filterDuree && <FilterChip label={filterDuree} onRemove={() => setFilterDuree("")} />}
            </div>
          </div>
        </div>

        {/* ── Main content ─────────────────────────────────────────────────────── */}
        <main className="flex-1 px-8 py-10 space-y-14">
          {loading ? (
            <div className="space-y-14">
              <div>
                <div className="h-7 bg-gray-100 rounded w-48 mb-6 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
                </div>
              </div>
              <div>
                <div className="h-7 bg-gray-100 rounded w-48 mb-6 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Parcours section */}
              {parcoursGroups.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-[#1B2D5B] mb-5">Parcours de formation</h2>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {parcoursGroups.map((group) => (
                      <ParcoursCard key={group.id} group={group} />
                    ))}
                  </div>
                </section>
              )}

              {/* Domain sections */}
              {domainesAffichees.map((domaine) => {
                const domForms = formationsByDomaine(domaine)
                return (
                  <div
                    key={domaine}
                    ref={(el: HTMLDivElement | null) => {
                      domaineRefs.current[domaine] = el
                    }}
                  >
                    <DomainSection
                      domaine={domaine}
                      formations={domForms}
                      progressMap={progressMap}
                      attestationsSet={attestationsSet}
                      moduleCounts={moduleCounts}
                      showAll={!!filterDomaine}
                    />
                  </div>
                )
              })}

              {filtered.length === 0 && (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <svg className="w-12 h-12 text-gray-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-gray-400 text-lg font-medium">Aucune formation trouvée</p>
                  <p className="text-gray-300 text-sm mt-1">Essayez d'autres filtres ou termes de recherche</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-[#3DBFA0] hover:underline text-sm"
                  >
                    Effacer tous les filtres
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  )
}
