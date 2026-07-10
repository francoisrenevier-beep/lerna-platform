"use client"

import { useEffect, useRef, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { BottomNav } from "@/components/BottomNav"
import { DOMAINES as DOMAINES_META, getDomaineMeta, getNiveauMeta, titreVignette } from "@/lib/formationMeta"
import { VignetteTypo } from "@/components/formations-preview"
import { Signal } from "lucide-react"

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
  titre_court?: string | null
  image_url: string | null
  thematique: string | null
  public_cible: string | null
  ordre: number | null
  est_a_venir: boolean
  est_nouveau: boolean
}

type FormationState = "nouveau" | "en_cours" | "termine"

type ParcoursGroup = {
  id: string
  nom: string
  formations: Formation[]
}

// ─── Constants ──────────────────────────────────────────────────────────────────

const DOMAINES = DOMAINES_META.map((d) => d.value)

const THEMATIQUES = [
  "Accompagnement",
  "Management",
  "Communication",
  "Éthique et posture",
  "Outils et méthodes",
  "Législation et droits",
]

const NIVEAUX = ["Base", "Intermédiaire", "Avancé"]

const NIVEAU_TO_DB: Record<string, string> = {
  "Base": "base",
  "Intermédiaire": "intermediaire",
  "Avancé": "avance",
}

const NIVEAU_LABELS: Record<string, string> = {
  "base": "Base",
  "intermediaire": "Intermédiaire",
  "avance": "Avancé",
  "tous": "Tous niveaux",
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

function IllustrationParcours() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="ipc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF9F6" />
          <stop offset="100%" stopColor="#A7E8D8" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#ipc)" />
      <circle cx="40" cy="60" r="12" fill="#3DBFA0" fillOpacity="0.5" />
      <circle cx="40" cy="60" r="6" fill="#3DBFA0" fillOpacity="0.8" />
      <line x1="52" y1="60" x2="78" y2="60" stroke="#3DBFA0" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 3" />
      <circle cx="90" cy="60" r="12" fill="#3DBFA0" fillOpacity="0.5" />
      <circle cx="90" cy="60" r="6" fill="#3DBFA0" fillOpacity="0.8" />
      <line x1="102" y1="60" x2="128" y2="60" stroke="#3DBFA0" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 3" />
      <circle cx="140" cy="60" r="12" fill="#3DBFA0" fillOpacity="0.5" />
      <circle cx="140" cy="60" r="6" fill="#3DBFA0" fillOpacity="0.8" />
      <line x1="152" y1="60" x2="168" y2="60" stroke="#3DBFA0" strokeWidth="2" strokeOpacity="0.5" strokeDasharray="4 3" />
      <circle cx="178" cy="60" r="10" fill="#1B2D5B" fillOpacity="0.4" />
      <path d="M174 60 L178 64 L184 56" stroke="#1B2D5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" fill="none" />
    </svg>
  )
}

// ─── Skeleton ───────────────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm bg-white animate-pulse" style={{ height: 388 }}>
      <div className="bg-gray-100" style={{ height: 184 }} />
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
  const isAVenir = formation.est_a_venir

  const cardBg = state === "termine" ? "bg-green-50/50" : "bg-white"
  const cardBorder =
    state === "en_cours"
      ? "border border-[#3DBFA0] border-l-4"
      : state === "termine"
      ? "border border-green-200"
      : "border border-gray-100"

  const niveauMeta = getNiveauMeta(formation.niveau)
  const domaineBadge = firstDomaine ? getDomaineMeta(firstDomaine) : null

  const inner = (
    <>
      {/* Zone vignette */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 184 }}>
        {formation.image_url ? (
          <img src={formation.image_url} alt={formation.titre} className="w-full h-full object-cover" />
        ) : (
          <VignetteTypo formation={formation} domaineRaw={firstDomaine} />
        )}

        {/* Badge domaine bas-droite */}
        {domaineBadge && domaineBadge.value && (
          <span
            className="absolute bottom-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: domaineBadge.badgeBg, color: domaineBadge.badgeText }}
          >
            {domaineBadge.label}
          </span>
        )}

        {/* Badge statut haut-droite */}
        {state === "termine" ? (
          <span className="absolute top-3 right-3 text-xs font-bold bg-green-500 text-white px-2.5 py-1 rounded-full shadow-sm">
            ✓ Terminé
          </span>
        ) : state === "en_cours" ? (
          <span className="absolute top-3 right-3 text-xs font-bold bg-white text-[#1B2D5B] px-2.5 py-1 rounded-full shadow-sm">
            En cours
          </span>
        ) : formation.est_nouveau && !isAVenir ? (
          <span className="absolute top-3 right-3 text-xs font-bold bg-white text-[#3DBFA0] px-2.5 py-1 rounded-full shadow-sm">
            Nouveau
          </span>
        ) : null}

        {/* Badge niveau bas-gauche */}
        {formation.niveau && (
          <span
            className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full shadow-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.85)", color: niveauMeta.couleur }}
          >
            <Signal className="w-3 h-3" />
            {niveauMeta.label}
          </span>
        )}

        {/* Overlay "À venir" */}
        {isAVenir && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="bg-[#1B2D5B] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
              À venir
            </span>
          </div>
        )}
      </div>

      {/* Bande de niveau */}
      <div style={{ height: 4, backgroundColor: niveauMeta.couleur, flexShrink: 0 }} />

      {/* Content zone */}
      <div className="flex flex-col p-5" style={{ height: 200 }}>
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
            {formation.niveau && <span>· {NIVEAU_LABELS[formation.niveau] || formation.niveau}</span>}
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
        style={{ height: 388 }}
      >
        {inner}
      </div>
    )
  }

  return (
    <a
      href={`/catalogue/${formation.slug}`}
      className={`rounded-2xl overflow-hidden shadow-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${cardBg} ${cardBorder}`}
      style={{ height: 388 }}
    >
      {inner}
    </a>
  )
}

// ─── Domain Icon ────────────────────────────────────────────────────────────────

function DomainIcon({ domaine, color }: { domaine: string; color: string }) {
  const Icon = getDomaineMeta(domaine).icon
  return <Icon className="w-5 h-5" style={{ color }} />
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
  const cfg = getDomaineMeta(domaine)
  const [expanded, setExpanded] = useState(false)
  const extraRef = useRef<HTMLDivElement>(null)

  const isExpanded = showAll || expanded
  const initial = formations.slice(0, 3)
  const extra = formations.slice(3)
  const hasMore = !isExpanded && extra.length > 0

  const handleShowAll = () => {
    setExpanded(true)
    setTimeout(() => {
      extraRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 50)
  }

  const cardFor = (f: Formation) => {
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
  }

  return (
    <section>
      <div className="flex items-end justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 rounded-xl" style={{ backgroundColor: cfg.badgeBg }}>
              <DomainIcon domaine={domaine} color={cfg.iconColor} />
            </div>
            <h2 className="text-xl font-bold text-[#1B2D5B]">{getDomaineMeta(domaine).label}</h2>
          </div>
          <p className="text-sm text-gray-500 ml-11">
            {formations.length} formation{formations.length !== 1 ? "s" : ""}
          </p>
        </div>
        {hasMore && (
          <button
            onClick={handleShowAll}
            className="text-sm font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors hidden sm:block"
          >
            Voir toutes →
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {initial.map(cardFor)}
      </div>

      {isExpanded && extra.length > 0 && (
        <div ref={extraRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {extra.map(cardFor)}
        </div>
      )}

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={handleShowAll}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2D5B] hover:text-[#3DBFA0] transition-colors border border-[#1B2D5B]/20 hover:border-[#3DBFA0] px-6 py-2.5 rounded-full"
          >
            Voir toutes les formations — {getDomaineMeta(domaine).label} →
          </button>
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
    <div className="relative w-full md:w-auto">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none w-full pl-3 pr-7 py-2 text-sm rounded-lg border cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] transition-colors ${
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

// ─── Types Parcours Catalogue ────────────────────────────────────────────────────

type ParcoursCatalogue = {
  id: string
  titre: string
  slug: string
  description_courte: string | null
  image_url: string | null
  nb_formations: number
  duree_total: number
  nb_completees: number
}

// ─── Parcours Catalogue Card ─────────────────────────────────────────────────────

function ParcoursCatalogueCard({ p }: { p: ParcoursCatalogue }) {
  const pct = p.nb_formations > 0 ? Math.round((p.nb_completees / p.nb_formations) * 100) : 0
  return (
    <a
      href={`/parcours/${p.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
    >
      <div className="h-44 flex-shrink-0 overflow-hidden relative">
        {p.image_url ? (
          <img src={p.image_url} alt={p.titre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <IllustrationParcours />
        )}
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-[#1B2D5B] text-white px-2.5 py-1 rounded-full">
          Parcours complet
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-[#1B2D5B] leading-snug mb-2 group-hover:text-[#3DBFA0] transition-colors line-clamp-2">
          {p.titre}
        </h3>
        {p.description_courte && (
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">{p.description_courte}</p>
        )}
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
          <span>{p.nb_formations} formation{p.nb_formations !== 1 ? "s" : ""}</span>
          <span>·</span>
          <span>{dureeFormat(p.duree_total)}</span>
        </div>
        {p.nb_completees > 0 && (
          <div className="mb-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">{p.nb_completees}/{p.nb_formations} terminées</span>
              <span className="text-[#3DBFA0] font-medium">{pct}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-1.5 bg-[#3DBFA0] rounded-full" style={{ width: `${pct}%` }} />
            </div>
          </div>
        )}
        <div className="mt-auto">
          <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
            p.nb_completees === p.nb_formations && p.nb_formations > 0
              ? "bg-gray-100 text-gray-500"
              : p.nb_completees > 0
              ? "bg-[#1B2D5B] text-white"
              : "bg-[#3DBFA0] text-white"
          }`}>
            {p.nb_completees === p.nb_formations && p.nb_formations > 0
              ? "✓ Terminé"
              : p.nb_completees > 0
              ? "Continuer →"
              : "Découvrir →"}
          </span>
        </div>
      </div>
    </a>
  )
}

// ─── Parcours Section Header ─────────────────────────────────────────────────────

function ParcoursSectionIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" style={{ color }} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <line x1="7" y1="12" x2="10" y2="12" />
      <line x1="14" y1="12" x2="17" y2="12" />
    </svg>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────────

export default function CataloguePage() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [progressMap, setProgressMap] = useState<Map<string, number>>(new Map())
  const [attestationsSet, setAttestationsSet] = useState<Set<string>>(new Set())
  const [moduleCounts, setModuleCounts] = useState<Map<string, number>>(new Map())
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [parcoursListe, setParcoursListe] = useState<ParcoursCatalogue[]>([])
  const [parcoursLoading, setParcoursLoading] = useState(false)

  const [search, setSearch] = useState("")
  const [filterDomaine, setFilterDomaine] = useState("")
  const [filterThematique, setFilterThematique] = useState("")
  const [filterNiveau, setFilterNiveau] = useState("")
  const [filterDuree, setFilterDuree] = useState("")
  const [filterType, setFilterType] = useState("")

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
      setUserId(user.id)

      const [{ data: forms }, { data: progs }, { data: attests }, { data: mods }] =
        await Promise.all([
          supabase
            .from("formations")
            .select(
              "id, titre, titre_court, slug, description_courte, niveau, duree_estimee_minutes, parcours_id, parcours_ordre, parcours_nom, domaine, thematique, public_cible, ordre, est_a_venir, est_nouveau, image_url"
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

      // Charger les parcours en parallèle
      chargerParcours(user.id)
    }
    getData()
  }, [router])

  const chargerParcours = async (uid: string) => {
    setParcoursLoading(true)
    const { data: pList } = await supabase
      .from("parcours")
      .select("id, titre, slug, description_courte, image_url")
      .eq("est_publie", true)
      .order("created_at", { ascending: false })

    if (!pList) { setParcoursLoading(false); return }

    const { data: attests } = await supabase.from("attestations").select("formation_id").eq("profil_id", uid)
    const attestSet = new Set(attests?.map((a: any) => a.formation_id) || [])

    const enrichis = await Promise.all(pList.map(async (p) => {
      const { data: pf } = await supabase
        .from("parcours_formations")
        .select("formation_id, formations(duree_estimee_minutes)")
        .eq("parcours_id", p.id)

      const nb_formations = pf?.length || 0
      const duree_total = (pf || []).reduce((s: number, f: any) => s + (f.formations?.duree_estimee_minutes || 0), 0)
      const nb_completees = (pf || []).filter((f: any) => attestSet.has(f.formation_id)).length
      return { ...p, nb_formations, duree_total, nb_completees } as ParcoursCatalogue
    }))

    setParcoursListe(enrichis)
    setParcoursLoading(false)
  }

  // Scroll to domain section when filter changes
  useEffect(() => {
    if (filterDomaine && domaineRefs.current[filterDomaine]) {
      setTimeout(() => {
        domaineRefs.current[filterDomaine]?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }, [filterDomaine])

  const hasFilters = !!(filterDomaine || filterThematique || filterNiveau || filterDuree || filterType || search)

  const clearFilters = () => {
    setFilterDomaine("")
    setFilterThematique("")
    setFilterNiveau("")
    setFilterDuree("")
    setFilterType("")
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
    if (filterNiveau && f.niveau !== NIVEAU_TO_DB[filterNiveau]) return false
    if (filterDuree) {
      const mins = f.duree_estimee_minutes || 0
      if (filterDuree === "Moins de 1h" && mins >= 60) return false
      if (filterDuree === "1h – 3h" && (mins < 60 || mins > 180)) return false
      if (filterDuree === "Plus de 3h" && mins <= 180) return false
    }
    return true
  })

  // Formations by domain
  const formationsByDomaine = (domaine: string) =>
    filtered.filter((f) => getDomaineArray(f.domaine).includes(domaine))

  const domainesAffichees = DOMAINES.filter((d) => formationsByDomaine(d).length > 0)

  const totalCount = new Set(filtered.map((f) => f.id)).size

  const showFormations = filterType === "" || filterType === "Formation"
  const showParcours = filterType === "" || filterType === "Parcours complet"

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-x-hidden">
      <Sidebar pageActive="catalogue" />
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0">
        {/* ── Header navy ─────────────────────────────────────────────────────── */}
        <div className="bg-[#1B2D5B] px-4 md:px-8 py-6 md:py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">Catalogue des formations</h1>
          <p className="text-[#3DBFA0] text-sm md:text-base font-medium mb-4 md:mb-7">
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
            {parcoursListe.length > 0 && ` · ${parcoursListe.length} parcours complet${parcoursListe.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        {/* ── Sticky filter bar ────────────────────────────────────────────────── */}
        <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm px-4 md:px-8 py-3">
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:gap-3">
            <FilterDropdown
              label="Type"
              options={["Formation", "Parcours complet"]}
              value={filterType}
              onChange={setFilterType}
            />
            <div className="relative w-full md:w-auto">
              <select
                value={filterDomaine}
                onChange={(e) => setFilterDomaine(e.target.value)}
                className={`appearance-none w-full pl-3 pr-7 py-2 text-sm rounded-lg border cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] transition-colors ${
                  filterDomaine
                    ? "border-[#3DBFA0] bg-[#3DBFA0]/5 text-[#3DBFA0] font-medium"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                <option value="">Domaine</option>
                {DOMAINES.map((slug) => (
                  <option key={slug} value={slug}>{getDomaineMeta(slug).label}</option>
                ))}
              </select>
              <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
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
                className="col-span-2 md:col-auto text-left text-sm text-gray-400 hover:text-gray-700 transition-colors underline underline-offset-2"
              >
                Tout effacer
              </button>
            )}
            <div className="col-span-2 md:col-auto flex items-center gap-2 flex-wrap md:ml-auto">
              {filterType && <FilterChip label={filterType} onRemove={() => setFilterType("")} />}
              {filterDomaine && <FilterChip label={getDomaineMeta(filterDomaine).label} onRemove={() => setFilterDomaine("")} />}
              {filterThematique && <FilterChip label={filterThematique} onRemove={() => setFilterThematique("")} />}
              {filterNiveau && <FilterChip label={filterNiveau} onRemove={() => setFilterNiveau("")} />}
              {filterDuree && <FilterChip label={filterDuree} onRemove={() => setFilterDuree("")} />}
            </div>
          </div>
        </div>

        {/* ── Main content ─────────────────────────────────────────────────────── */}
        <main className="flex-1 px-4 md:px-8 py-6 md:py-10 space-y-10 md:space-y-14">

          {/* ── Formations par domaine ───────────────────────────────────────── */}
          {showFormations && (
            loading ? (
              <>
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
              </>
            ) : (
              <>
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
            )
          )}

          {/* ── Section Parcours complets ────────────────────────────────────── */}
          {showParcours && (() => {
            // Parcours depuis la table dédiée (priorité)
            const hasTableParcours = !parcoursLoading && parcoursListe.length > 0

            // Fallback : grouper les formations par parcours_nom quand la table est vide
            const groupesFormations: ParcoursGroup[] = hasTableParcours ? [] : (() => {
              const map: Record<string, ParcoursGroup> = {}
              for (const f of formations) {
                if (!f.parcours_id || !f.parcours_nom) continue
                if (!map[f.parcours_id]) map[f.parcours_id] = { id: f.parcours_id, nom: f.parcours_nom, formations: [] }
                map[f.parcours_id].formations.push(f)
              }
              return Object.values(map).map(g => ({
                ...g,
                formations: g.formations.sort((a, b) => (a.parcours_ordre || 0) - (b.parcours_ordre || 0)),
              }))
            })()

            const totalParcours = hasTableParcours ? parcoursListe.length : groupesFormations.length

            const cardForFormation = (f: Formation) => {
              const hasAttestation = attestationsSet.has(f.id)
              const progressTermines = progressMap.get(f.id) || 0
              const totalMods = moduleCounts.get(f.id) || 0
              const state: FormationState = hasAttestation ? "termine" : progressTermines > 0 ? "en_cours" : "nouveau"
              return (
                <FormationCard
                  key={f.id}
                  formation={f}
                  state={state}
                  nbTermines={progressTermines}
                  nbTotal={totalMods}
                />
              )
            }

            return (
              <section>
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className="p-2 rounded-xl bg-[#EEF9F6]">
                        <ParcoursSectionIcon color="#0f766e" />
                      </div>
                      <h2 className="text-xl font-bold text-[#1B2D5B]">Parcours complets</h2>
                    </div>
                    <p className="text-sm text-gray-500 ml-11">
                      {parcoursLoading
                        ? "Chargement…"
                        : `${totalParcours} parcours disponible${totalParcours !== 1 ? "s" : ""}`}
                    </p>
                  </div>
                </div>

                {parcoursLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
                  </div>
                ) : hasTableParcours ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {parcoursListe.map(p => <ParcoursCatalogueCard key={p.id} p={p} />)}
                  </div>
                ) : groupesFormations.length > 0 ? (
                  <div className="space-y-10">
                    {groupesFormations.map(groupe => (
                      <div key={groupe.id}>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest bg-[#1B2D5B] text-white px-3 py-1.5 rounded-full">
                            Parcours complet
                          </span>
                          <h3 className="text-lg font-bold text-[#1B2D5B]">{groupe.nom}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                          {groupe.formations.map(cardForFormation)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-2xl border border-gray-100">
                    <svg className="w-10 h-10 text-gray-200 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <p className="text-gray-400 font-medium">Aucun parcours disponible</p>
                    <p className="text-gray-300 text-sm mt-1">Les parcours complets seront bientôt disponibles</p>
                  </div>
                )}
              </section>
            )
          })()}
        </main>
      </div>
      <BottomNav pageActive="catalogue" />
    </div>
  )
}
