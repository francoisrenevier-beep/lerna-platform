"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, useParams } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"

// ─── Types ──────────────────────────────────────────────────────────────────────

type Formation = {
  id: string
  titre: string
  slug: string
  description_courte: string | null
  niveau: string | null
  duree_estimee_minutes: number | null
  domaine: string[] | string | null
  thematique: string | null
  public_cible: string | null
  est_a_venir: boolean
}

type FormationState = "nouveau" | "en_cours" | "termine"

// ─── Config ─────────────────────────────────────────────────────────────────────

const SLUG_TO_DOMAINE: Record<string, string> = {
  "handicap": "Handicap",
  "transversal": "Transversal",
}

const DOMAINE_CONFIG: Record<string, { badgeBg: string; badgeText: string; gradFrom: string; gradTo: string; headerBg: string }> = {
  "Handicap": {
    badgeBg: "#EEF2FF",
    badgeText: "#3730A3",
    gradFrom: "#4338CA",
    gradTo: "#3730A3",
    headerBg: "#3730A3",
  },
  "Transversal": {
    badgeBg: "#F1F5F9",
    badgeText: "#475569",
    gradFrom: "#475569",
    gradTo: "#334155",
    headerBg: "#334155",
  },
}

const THEMATIQUES = [
  "Accompagnement",
  "Management",
  "Communication",
  "Éthique et posture",
  "Outils et méthodes",
  "Législation et droits",
]

const NIVEAUX = ["Base", "Intermédiaire", "Confirmé"]

const NIVEAU_TO_DB: Record<string, string> = {
  "Base": "base",
  "Intermédiaire": "intermediaire",
  "Confirmé": "confirme",
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

// ─── SVG Illustrations ──────────────────────────────────────────────────────────

function IllustrationHandicap() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="dih" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#C7D2FE" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#dih)" />
      <circle cx="100" cy="55" r="38" fill="#4338CA" fillOpacity="0.1" />
      <circle cx="100" cy="38" r="10" fill="#4338CA" fillOpacity="0.6" />
      <path d="M86 65 Q86 55 100 55 Q114 55 114 65 L114 76 Q114 79 111 79 L89 79 Q86 79 86 76Z" fill="#4338CA" fillOpacity="0.6" />
      <circle cx="95" cy="92" r="11" fill="none" stroke="#4338CA" strokeWidth="2.5" strokeOpacity="0.5" />
      <circle cx="95" cy="92" r="3.5" fill="#4338CA" fillOpacity="0.5" />
      <line x1="114" y1="68" x2="114" y2="84" stroke="#4338CA" strokeWidth="2.5" strokeOpacity="0.4" strokeLinecap="round" />
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
      <line x1="100" y1="60" x2="58" y2="33" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="142" y2="33" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="58" y2="87" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <line x1="100" y1="60" x2="142" y2="87" stroke="#64748B" strokeWidth="2" strokeOpacity="0.3" />
      <circle cx="100" cy="60" r="11" fill="#64748B" fillOpacity="0.4" />
      <circle cx="58" cy="33" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="142" cy="33" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="58" cy="87" r="8" fill="#64748B" fillOpacity="0.35" />
      <circle cx="142" cy="87" r="8" fill="#64748B" fillOpacity="0.35" />
    </svg>
  )
}

function DomainIllustration({ domaine }: { domaine: string }) {
  if (domaine === "Handicap") return <IllustrationHandicap />
  return <IllustrationTransversal />
}

// ─── Skeleton ────────────────────────────────────────────────────────────────────

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
  domaine,
  state,
  nbTermines,
  nbTotal,
}: {
  formation: Formation
  domaine: string
  state: FormationState
  nbTermines: number
  nbTotal: number
}) {
  const cfg = DOMAINE_CONFIG[domaine]
  const isAVenir = formation.est_a_venir

  const cardBorder =
    state === "en_cours"
      ? "border border-[#3DBFA0] border-l-4"
      : state === "termine"
      ? "border border-green-200"
      : "border border-gray-100"

  const cardBg = state === "termine" ? "bg-green-50/50" : "bg-white"

  const inner = (
    <>
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 152 }}>
        <DomainIllustration domaine={domaine} />
        {cfg && (
          <span
            className="absolute bottom-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm"
            style={{ backgroundColor: cfg.badgeBg, color: cfg.badgeText }}
          >
            {domaine}
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

      <div className="flex flex-col p-5" style={{ height: 228 }}>
        <div className="flex-1 min-h-0">
          <h3
            className="text-base font-bold text-[#1B2D5B] leading-snug mb-2 overflow-hidden"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
          >
            {formation.titre}
          </h3>
          <p
            className="text-sm text-gray-500 overflow-hidden"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
          >
            {formation.description_courte || ""}
          </p>
        </div>
        {state === "en_cours" && nbTotal > 0 && (
          <div className="mt-2 mb-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500">{nbTermines}/{nbTotal} modules</span>
              <span className="text-xs font-medium text-[#3DBFA0]">{Math.round((nbTermines / nbTotal) * 100)}%</span>
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
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${
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
      <div className={`rounded-2xl overflow-hidden shadow-sm flex flex-col ${cardBg} ${cardBorder}`} style={{ height: 380 }}>
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

// ─── Filter Select ───────────────────────────────────────────────────────────────

function FilterSelect({
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
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`appearance-none pl-3 pr-7 py-2 text-sm rounded-lg border cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] transition-colors ${
          value
            ? "border-[#3DBFA0] bg-[#3DBFA0]/5 text-[#3DBFA0] font-medium"
            : "border-gray-200 bg-white text-gray-600"
        }`}
      >
        <option value="">{label}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────────

export default function DomainePage() {
  const params = useParams()
  const slug = params.slug as string
  const domaine = SLUG_TO_DOMAINE[slug] || null

  const [formations, setFormations] = useState<Formation[]>([])
  const [progressMap, setProgressMap] = useState<Map<string, number>>(new Map())
  const [attestationsSet, setAttestationsSet] = useState<Set<string>>(new Set())
  const [moduleCounts, setModuleCounts] = useState<Map<string, number>>(new Map())
  const [loading, setLoading] = useState(true)

  const [filterThematique, setFilterThematique] = useState("")
  const [filterNiveau, setFilterNiveau] = useState("")
  const [filterDuree, setFilterDuree] = useState("")
  const [search, setSearch] = useState("")

  const router = useRouter()
  const cfg = domaine ? DOMAINE_CONFIG[domaine] : null

  useEffect(() => {
    if (!domaine) return
    const getData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push("/connexion"); return }

      const [{ data: forms }, { data: progs }, { data: attests }, { data: mods }] =
        await Promise.all([
          supabase
            .from("formations")
            .select("id, titre, slug, description_courte, niveau, duree_estimee_minutes, domaine, thematique, public_cible, est_a_venir")
            .eq("est_privee", false)
            .or("est_publie.eq.true,est_a_venir.eq.true"),
          supabase.from("progression").select("formation_id, module_id, statut").eq("profil_id", user.id),
          supabase.from("attestations").select("formation_id").eq("profil_id", user.id),
          supabase.from("modules").select("formation_id, id"),
        ])

      const all = (forms as unknown as Formation[]) || []
      const filtered = all.filter((f) => getDomaineArray(f.domaine).includes(domaine))
      setFormations(filtered)

      const pm = new Map<string, number>()
      if (progs) {
        for (const p of progs) {
          if (p.statut === "termine") pm.set(p.formation_id, (pm.get(p.formation_id) || 0) + 1)
        }
      }
      setProgressMap(pm)

      const as = new Set<string>()
      if (attests) attests.forEach((a) => as.add(a.formation_id))
      setAttestationsSet(as)

      const mc = new Map<string, number>()
      if (mods) {
        for (const m of mods) mc.set(m.formation_id, (mc.get(m.formation_id) || 0) + 1)
      }
      setModuleCounts(mc)

      setLoading(false)
    }
    getData()
  }, [domaine, router])

  if (!domaine) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex">
        <Sidebar pageActive="catalogue" />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#1B2D5B] text-lg font-bold mb-2">Domaine introuvable</p>
            <a href="/catalogue" className="text-[#3DBFA0] hover:underline text-sm">← Retour au catalogue</a>
          </div>
        </main>
      </div>
    )
  }

  const filtered = formations.filter((f) => {
    if (search && !f.titre.toLowerCase().includes(search.toLowerCase())) return false
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

  const hasFilters = !!(filterThematique || filterNiveau || filterDuree || search)

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar pageActive="catalogue" />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header avec couleur du domaine */}
        <div className="px-8 py-10" style={{ backgroundColor: cfg?.headerBg || "#1B2D5B" }}>
          <a href="/catalogue" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors mb-5">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Catalogue
          </a>
          <h1 className="text-3xl font-bold text-white mb-1">{domaine}</h1>
          <p className="text-white/70 text-base">
            {loading ? "..." : `${formations.length} formation${formations.length !== 1 ? "s" : ""} dans ce domaine`}
          </p>
        </div>

        {/* Filters */}
        <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm px-8 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher..."
                className="pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] w-48"
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
            </div>
            <FilterSelect label="Thématique" options={THEMATIQUES} value={filterThematique} onChange={setFilterThematique} />
            <FilterSelect label="Niveau" options={NIVEAUX} value={filterNiveau} onChange={setFilterNiveau} />
            <FilterSelect label="Durée" options={["Moins de 1h", "1h – 3h", "Plus de 3h"]} value={filterDuree} onChange={setFilterDuree} />
            {hasFilters && (
              <button
                onClick={() => { setFilterThematique(""); setFilterNiveau(""); setFilterDuree(""); setSearch("") }}
                className="text-sm text-gray-400 hover:text-gray-700 transition-colors underline underline-offset-2"
              >
                Effacer
              </button>
            )}
            <span className="ml-auto text-sm text-gray-400">
              {filtered.length} résultat{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Grid */}
        <main className="flex-1 px-8 py-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-gray-400 text-lg font-medium">Aucune formation trouvée</p>
              {hasFilters && (
                <button
                  onClick={() => { setFilterThematique(""); setFilterNiveau(""); setFilterDuree(""); setSearch("") }}
                  className="mt-3 text-[#3DBFA0] hover:underline text-sm"
                >
                  Effacer les filtres
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((f) => {
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
                    domaine={domaine}
                    state={state}
                    nbTermines={progressTermines}
                    nbTotal={totalMods}
                  />
                )
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
