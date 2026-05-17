"use client"

import { useEffect, useRef, useState } from "react"
import { supabase } from "@/lib/supabase"
import { getCouleurEtiquette } from "@/lib/etiquettes"
import { ArrowRight, Clock, Signal } from "lucide-react"

type Formation = {
  id: string
  titre: string
  slug: string
  domaine: string | string[] | null
  niveau: string | null
  duree_estimee_minutes: number | null
  image_url: string | null
  est_nouveau: boolean
}

const NIVEAU_LABELS: Record<string, string> = {
  base: "Base",
  intermediaire: "Intermédiaire",
  confirme: "Confirmé",
  tous: "Tous niveaux",
}

function dureeFormat(minutes: number | null) {
  if (!minutes) return "–"
  if (minutes < 60) return minutes + " min"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

function normaliseDomaine(domaine: string | string[] | null): string | null {
  if (!domaine) return null
  if (Array.isArray(domaine)) return domaine[0] ?? null
  return domaine
}

function IllustrationDefault({ domaine }: { domaine: string | null }) {
  if (domaine === "Handicap") {
    return (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="prev-ih" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EEF2FF" />
            <stop offset="100%" stopColor="#C7D2FE" />
          </linearGradient>
        </defs>
        <rect width="200" height="120" fill="url(#prev-ih)" />
        <circle cx="100" cy="55" r="40" fill="#4338CA" fillOpacity="0.1" />
        <circle cx="100" cy="55" r="28" fill="#4338CA" fillOpacity="0.13" />
        <circle cx="100" cy="38" r="10" fill="#4338CA" fillOpacity="0.6" />
        <path d="M86 65 Q86 55 100 55 Q114 55 114 65 L114 76 Q114 79 111 79 L89 79 Q86 79 86 76Z" fill="#4338CA" fillOpacity="0.6" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="prev-it" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#prev-it)" />
      <circle cx="100" cy="60" r="11" fill="#64748B" fillOpacity="0.4" />
      <circle cx="58" cy="33" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="142" cy="33" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="58" cy="87" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="142" cy="87" r="8" fill="#64748B" fillOpacity="0.35" />
      <line x1="100" y1="60" x2="58" y2="33" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="142" y2="33" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="58" y2="87" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="142" y2="87" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
    </svg>
  )
}

const DOMAINE_BADGE: Record<string, { bg: string; text: string }> = {
  Handicap: { bg: "#EEF2FF", text: "#3730A3" },
  Transversal: { bg: "#F1F5F9", text: "#475569" },
}

function FormationCard({ formation }: { formation: Formation }) {
  const domaine = normaliseDomaine(formation.domaine)
  const badge = domaine ? DOMAINE_BADGE[domaine] : null

  return (
    <a
      href="/connexion"
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ height: 380 }}
    >
      {/* Zone image */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 200 }}>
        {formation.image_url ? (
          <img src={formation.image_url} alt={formation.titre} className="w-full h-full object-cover" />
        ) : (
          <IllustrationDefault domaine={domaine} />
        )}
        {badge && domaine && (
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: badge.bg, color: badge.text }}
          >
            {domaine}
          </span>
        )}
        {formation.est_nouveau && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-white text-[#3DBFA0] px-2.5 py-1 rounded-full shadow-sm">
            Nouveau
          </span>
        )}
      </div>

      {/* Zone contenu */}
      <div className="flex flex-col p-5 flex-1">
        <h3 className="text-base font-bold text-[#1B2D5B] leading-snug mb-2 group-hover:text-[#3DBFA0] transition-colors overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
          {formation.titre}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Clock className="h-3.5 w-3.5" />
            <span>{dureeFormat(formation.duree_estimee_minutes)}</span>
            {formation.niveau && (
              <>
                <span>·</span>
                <Signal className="h-3.5 w-3.5" />
                <span>{NIVEAU_LABELS[formation.niveau] || formation.niveau}</span>
              </>
            )}
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#3DBFA0] text-white">
            Commencer →
          </span>
        </div>
      </div>
    </a>
  )
}

const INITIAL_COUNT = 3

export function FormationsPreview() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)
  const extraRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    supabase
      .from("formations")
      .select("id, titre, slug, domaine, niveau, duree_estimee_minutes, image_url, est_nouveau")
      .eq("est_publie", true)
      .eq("est_privee", false)
      .order("ordre")
      .then(({ data }) => {
        if (data) setFormations(data)
        setLoading(false)
      })
  }, [])

  const handleShowAll = () => {
    setShowAll(true)
    setTimeout(() => {
      extraRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  const visible = showAll ? formations : formations.slice(0, INITIAL_COUNT)
  const hasMore = !showAll && formations.length > INITIAL_COUNT

  return (
    <section id="formations" className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
              Nos formations
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Ancrées dans les réalités du travail social en Suisse romande
            </p>
          </div>
          {hasMore && (
            <button
              onClick={handleShowAll}
              className="flex items-center gap-2 rounded-lg border border-[#3DBFA0] px-4 py-2 text-sm font-medium text-[#3DBFA0] transition-colors hover:bg-[#3DBFA0]/10"
            >
              Voir toutes les formations
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {loading ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: INITIAL_COUNT }).map((_, i) => (
              <div key={i} className="h-40 animate-pulse rounded-xl bg-gray-200" />
            ))}
          </div>
        ) : formations.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            Les formations seront bientôt disponibles.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((f, i) => (
              <div key={f.id} ref={i === INITIAL_COUNT ? extraRef : undefined}>
                <FormationCard formation={f} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
