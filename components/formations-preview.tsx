"use client"

import { useEffect, useRef, useState } from "react"
import { supabase } from "@/lib/supabase"
import { getDomaineMeta, getNiveauMeta, titreVignette } from "@/lib/formationMeta"
import { ArrowRight, Clock, Signal } from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────

type Formation = {
  id: string
  titre: string
  titre_court?: string | null
  slug: string
  description_courte: string | null
  domaine: string | string[] | null
  niveau: string | null
  duree_estimee_minutes: number | null
  image_url: string | null
  est_nouveau: boolean
}

type StatutProgression = "en_cours" | "termine" | null

// ─── Helpers ─────────────────────────────────────────────────────────────────

function dureeFormat(minutes: number | null) {
  if (!minutes) return "–"
  if (minutes < 60) return minutes + " min"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

function normaliserDomaine(domaine: string | string[] | null): string | null {
  if (!domaine) return null
  if (Array.isArray(domaine)) return domaine[0] ?? null
  return domaine
}

// ─── Vignette typographique ───────────────────────────────────────────────────

export function VignetteTypo({
  formation,
  domaineRaw,
}: {
  formation: { titre: string; titre_court?: string | null }
  domaineRaw: string | null
}) {
  const meta = getDomaineMeta(domaineRaw)
  const Icon = meta.icon
  const court = titreVignette(formation)

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: meta.tintBg }}
    >
      {/* Cercles décoratifs bas-droite */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 130, height: 130, bottom: -35, right: -35, backgroundColor: meta.iconBg, opacity: 0.4 }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 195, height: 195, bottom: -68, right: -68, backgroundColor: meta.iconBg, opacity: 0.18 }}
      />

      {/* Pastille icône bas-droite */}
      <div
        className="absolute rounded-2xl p-2.5 shadow-sm"
        style={{ bottom: 12, right: 12, backgroundColor: meta.iconBg }}
      >
        <Icon className="w-5 h-5" style={{ color: meta.iconColor }} />
      </div>

      {/* Titre court — centré verticalement, gauche */}
      <div
        className="absolute flex items-center"
        style={{ top: 0, bottom: 0, left: 14, right: "38%" }}
      >
        <p
          className="font-medium leading-snug"
          style={{
            color: "#1B2D5B",
            fontSize: 17,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          } as React.CSSProperties}
        >
          {court}
        </p>
      </div>
    </div>
  )
}

// ─── Carte de formation ───────────────────────────────────────────────────────

export function FormationCard({
  formation,
  showNiveauBadge = true,
  statut = null,
}: {
  formation: Formation
  showNiveauBadge?: boolean
  statut?: StatutProgression
}) {
  const domaineRaw = normaliserDomaine(formation.domaine)
  const domaineMeta = getDomaineMeta(domaineRaw)
  const niveauMeta = getNiveauMeta(formation.niveau)
  const hasDomaine = domaineRaw && domaineMeta.value

  return (
    <a
      href="/connexion"
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg h-full"
    >
      {/* Zone image / vignette */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 160 }}>
        {formation.image_url ? (
          <img src={formation.image_url} alt={formation.titre} className="w-full h-full object-cover" />
        ) : (
          <VignetteTypo formation={formation} domaineRaw={domaineRaw} />
        )}

        {/* Badge domaine bas-droite */}
        {hasDomaine && (
          <span
            className="absolute bottom-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: domaineMeta.badgeBg, color: domaineMeta.badgeText }}
          >
            {domaineMeta.label}
          </span>
        )}

        {/* Badge statut haut-droite */}
        {statut === "termine" ? (
          <span className="absolute top-3 right-3 text-xs font-bold bg-white text-[#3DBFA0] px-2.5 py-1 rounded-full shadow-sm">
            ✓ Terminé
          </span>
        ) : statut === "en_cours" ? (
          <span className="absolute top-3 right-3 text-xs font-bold bg-white text-[#1B2D5B] px-2.5 py-1 rounded-full shadow-sm">
            En cours
          </span>
        ) : formation.est_nouveau ? (
          <span className="absolute top-3 right-3 text-xs font-bold bg-white text-[#3DBFA0] px-2.5 py-1 rounded-full shadow-sm">
            Nouveau
          </span>
        ) : null}

        {/* Badge niveau bas-gauche */}
        {showNiveauBadge && formation.niveau && (
          <span
            className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.85)", color: niveauMeta.couleur }}
          >
            <Signal className="w-3 h-3" />
            {niveauMeta.label}
          </span>
        )}
      </div>

      {/* Bande de niveau 4px */}
      <div style={{ height: 4, backgroundColor: niveauMeta.couleur, flexShrink: 0 }} />

      {/* Bloc texte */}
      <div className="flex flex-col p-5 flex-1">
        <h3
          className="text-base font-bold text-[#1B2D5B] leading-snug mb-2 group-hover:text-[#3DBFA0] transition-colors"
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {formation.titre}
        </h3>
        {formation.description_courte && (
          <p
            className="text-xs text-gray-400 mb-3"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {formation.description_courte}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 min-w-0">
            <Clock className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">
              {dureeFormat(formation.duree_estimee_minutes)}
              {formation.niveau && niveauMeta.label !== "—" && <> · {niveauMeta.label}</>}
            </span>
          </div>
          <span className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#3DBFA0] text-white">
            Commencer →
          </span>
        </div>
      </div>
    </a>
  )
}

// ─── Section publique "Nos formations" ───────────────────────────────────────

const INITIAL_COUNT = 3

export function FormationsPreview() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)
  const extraRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    supabase
      .from("formations")
      .select("id, titre, titre_court, slug, description_courte, domaine, niveau, duree_estimee_minutes, image_url, est_nouveau")
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
    setTimeout(() => extraRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50)
  }

  const visible = showAll ? formations : formations.slice(0, INITIAL_COUNT)
  const hasMore = !showAll && formations.length > INITIAL_COUNT

  return (
    <section id="formations" className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">Nos formations</h2>
            <p className="mt-2 text-lg text-muted-foreground">Ancrées dans les réalités du travail social en Suisse romande</p>
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
          <p className="mt-12 text-center text-muted-foreground">Les formations seront bientôt disponibles.</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
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
