"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { downloadAttestation, dureeHeuresFromMinutes } from "@/lib/attestation"

// ─── Types ──────────────────────────────────────────────────────────────────────

type Formation = {
  id: string
  titre: string
  slug: string
  description: string | null
  description_courte: string | null
  niveau: string | null
  duree_estimee_minutes: number | null
  domaine: string[] | string | null
  thematique: string | null
  public_cible: string | null
}

type Module = {
  id: string
  titre: string
  description: string | null
  ordre: number
  duree_minutes: number | null
  type: string
}

type Progression = {
  module_id: string
  statut: string
}

type Attestation = {
  id: string
  formation_id: string
  pdf_url: string | null
  created_at: string | null
}

type Profil = {
  id: string
  prenom: string
  nom: string
  institution_id?: string | null
}

// ─── Config ─────────────────────────────────────────────────────────────────────

const DOMAINE_CONFIG: Record<string, { badgeBg: string; badgeText: string; overlayColor: string }> = {
  "Handicap": { badgeBg: "#EEF2FF", badgeText: "#3730A3", overlayColor: "#1B2D5B" },
  "Pédagogie Spécialisée": { badgeBg: "#FFF7ED", badgeText: "#C2410C", overlayColor: "#1B2D5B" },
  "Protection des mineurs": { badgeBg: "#FEF2F2", badgeText: "#B91C1C", overlayColor: "#1B2D5B" },
  "Transversal": { badgeBg: "#F1F5F9", badgeText: "#475569", overlayColor: "#1B2D5B" },
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

// ─── SVG Hero Illustrations ──────────────────────────────────────────────────────

function HeroIllustration({ domaine }: { domaine: string | null }) {
  if (domaine === "Handicap") return (
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hero-h" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#C7D2FE" />
        </linearGradient>
      </defs>
      <rect width="800" height="280" fill="url(#hero-h)" />
      <circle cx="400" cy="140" r="120" fill="#4338CA" fillOpacity="0.08" />
      <circle cx="400" cy="100" r="28" fill="#4338CA" fillOpacity="0.5" />
      <path d="M364 168 Q364 140 400 140 Q436 140 436 168 L436 196 Q436 202 430 202 L370 202 Q364 202 364 196Z" fill="#4338CA" fillOpacity="0.5" />
      <circle cx="385" cy="224" r="24" fill="none" stroke="#4338CA" strokeWidth="5" strokeOpacity="0.4" />
      <circle cx="385" cy="224" r="7" fill="#4338CA" fillOpacity="0.4" />
      <line x1="436" y1="178" x2="436" y2="210" stroke="#4338CA" strokeWidth="5" strokeOpacity="0.35" strokeLinecap="round" />
      <circle cx="650" cy="80" r="50" fill="#4338CA" fillOpacity="0.05" />
      <circle cx="150" cy="200" r="70" fill="#4338CA" fillOpacity="0.04" />
    </svg>
  )
  if (domaine === "Pédagogie Spécialisée") return (
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hero-p" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7ED" />
          <stop offset="100%" stopColor="#FED7AA" />
        </linearGradient>
      </defs>
      <rect width="800" height="280" fill="url(#hero-p)" />
      <rect x="310" y="50" width="180" height="200" rx="8" fill="#EA580C" fillOpacity="0.12" />
      <rect x="320" y="50" width="168" height="200" rx="6" fill="#EA580C" fillOpacity="0.16" />
      <rect x="310" y="50" width="22" height="200" rx="6" fill="#EA580C" fillOpacity="0.35" />
      <rect x="340" y="90" width="130" height="8" rx="4" fill="#EA580C" fillOpacity="0.35" />
      <rect x="340" y="112" width="105" height="8" rx="4" fill="#EA580C" fillOpacity="0.35" />
      <rect x="340" y="134" width="130" height="8" rx="4" fill="#EA580C" fillOpacity="0.35" />
      <rect x="340" y="156" width="90" height="8" rx="4" fill="#EA580C" fillOpacity="0.35" />
      <polygon points="530,32 540,62 572,62 547,80 557,110 530,92 503,110 513,80 488,62 520,62" fill="#EA580C" fillOpacity="0.55" />
    </svg>
  )
  if (domaine === "Protection des mineurs") return (
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hero-pr" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEF2F2" />
          <stop offset="100%" stopColor="#FECACA" />
        </linearGradient>
      </defs>
      <rect width="800" height="280" fill="url(#hero-pr)" />
      <path d="M400 20 L480 55 L480 150 Q480 230 400 260 Q320 230 320 150 L320 55 Z" fill="#DC2626" fillOpacity="0.1" />
      <path d="M400 38 L468 70 L468 150 Q468 222 400 248 Q332 222 332 150 L332 70 Z" fill="#DC2626" fillOpacity="0.14" />
      <path d="M400 190 C400 190 355 163 355 138 C355 124 365 114 378 118 C385 120 400 130 400 130 C400 130 415 120 422 118 C435 114 445 124 445 138 C445 163 400 190 400 190Z" fill="#DC2626" fillOpacity="0.6" />
    </svg>
  )
  return (
    <svg viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="hero-t" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
      </defs>
      <rect width="800" height="280" fill="url(#hero-t)" />
      <line x1="400" y1="140" x2="230" y2="80" stroke="#64748B" strokeWidth="3" strokeOpacity="0.25" />
      <line x1="400" y1="140" x2="570" y2="80" stroke="#64748B" strokeWidth="3" strokeOpacity="0.25" />
      <line x1="400" y1="140" x2="230" y2="200" stroke="#64748B" strokeWidth="3" strokeOpacity="0.25" />
      <line x1="400" y1="140" x2="570" y2="200" stroke="#64748B" strokeWidth="3" strokeOpacity="0.25" />
      <line x1="230" y1="80" x2="570" y2="80" stroke="#64748B" strokeWidth="2" strokeOpacity="0.18" />
      <line x1="230" y1="200" x2="570" y2="200" stroke="#64748B" strokeWidth="2" strokeOpacity="0.18" />
      <circle cx="400" cy="140" r="28" fill="#64748B" fillOpacity="0.35" />
      <circle cx="400" cy="140" r="16" fill="#64748B" fillOpacity="0.45" />
      <circle cx="230" cy="80" r="20" fill="#64748B" fillOpacity="0.28" />
      <circle cx="570" cy="80" r="20" fill="#64748B" fillOpacity="0.28" />
      <circle cx="230" cy="200" r="20" fill="#64748B" fillOpacity="0.28" />
      <circle cx="570" cy="200" r="20" fill="#64748B" fillOpacity="0.28" />
    </svg>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────────

export default function CatalogueFormationDetailPage() {
  const [formation, setFormation] = useState<Formation | null>(null)
  const [modules, setModules] = useState<Module[]>([])
  const [progression, setProgression] = useState<Progression[]>([])
  const [attestation, setAttestation] = useState<Attestation | null>(null)
  const [profil, setProfil] = useState<Profil | null>(null)
  const [institutionNom, setInstitutionNom] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [downloadingAttestation, setDownloadingAttestation] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const getData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push("/connexion"); return }

      const parts = pathname.split("/")
      const slug = parts[parts.length - 1]

      const [{ data: f }, { data: p }] = await Promise.all([
        supabase
          .from("formations")
          .select("id, titre, slug, description, description_courte, niveau, duree_estimee_minutes, domaine, thematique, public_cible")
          .eq("slug", slug)
          .single(),
        supabase.from("profils").select("id, prenom, nom").eq("id", user.id).single(),
      ])

      if (!f) { setNotFound(true); setLoading(false); return }
      setFormation(f as unknown as Formation)
      if (p) setProfil(p)

      const [{ data: mods }, { data: prog }, { data: attest }, { data: ip }] = await Promise.all([
        supabase.from("modules").select("id, titre, description, ordre, duree_minutes, type").eq("formation_id", f.id).order("ordre"),
        supabase.from("progression").select("module_id, statut").eq("profil_id", user.id).eq("formation_id", f.id),
        supabase.from("attestations").select("id, formation_id, pdf_url, created_at").eq("profil_id", user.id).eq("formation_id", f.id).maybeSingle(),
        supabase.from("institution_profils").select("institution_id").eq("profil_id", user.id).maybeSingle(),
      ])

      if (mods) setModules(mods)
      if (prog) setProgression(prog)
      if (attest) setAttestation(attest)

      if (ip?.institution_id) {
        const { data: inst } = await supabase.from("institutions").select("nom").eq("id", ip.institution_id).single()
        if (inst) setInstitutionNom(inst.nom)
      }

      setLoading(false)
    }
    getData()
  }, [pathname, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex">
        <Sidebar pageActive="catalogue" />
        <div className="flex-1 flex items-center justify-center">
          <div className="space-y-4 w-full max-w-4xl px-8">
            <div className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
            <div className="h-8 bg-gray-100 rounded w-2/3 animate-pulse" />
            <div className="h-4 bg-gray-100 rounded w-full animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  if (notFound || !formation) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex">
        <Sidebar pageActive="catalogue" />
        <main className="flex-1 flex flex-col items-center justify-center">
          <p className="text-[#1B2D5B] text-lg font-bold mb-2">Formation introuvable</p>
          <a href="/catalogue" className="text-[#3DBFA0] hover:underline text-sm">← Retour au catalogue</a>
        </main>
      </div>
    )
  }

  const domaines = getDomaineArray(formation.domaine)
  const firstDomaine = domaines[0] || null
  const cfg = firstDomaine ? DOMAINE_CONFIG[firstDomaine] : null

  const nbTermines = progression.filter((p) => p.statut === "termine").length
  const nbModules = modules.length
  const isTermine = !!attestation
  const isEnCours = !isTermine && nbTermines > 0

  const handleDownloadAttestation = async () => {
    if (!attestation || !profil || !formation) return
    setDownloadingAttestation(true)
    try {
      await downloadAttestation({
        prenom: profil.prenom,
        nom: profil.nom,
        formation_titre: formation.titre,
        formation_categorie: firstDomaine || "Formation",
        duree_heures: dureeHeuresFromMinutes(formation.duree_estimee_minutes || 0),
        date_obtention: attestation.created_at
          ? new Date(attestation.created_at).toLocaleDateString("fr-FR")
          : new Date().toLocaleDateString("fr-FR"),
        modules_completes: nbTermines,
        modules_total: nbModules,
        institution_nom: institutionNom || "Institution",
        numero_verification: `LEARNA-${attestation.id.replace(/-/g, "").slice(0, 4).toUpperCase()}-${attestation.id.replace(/-/g, "").slice(4, 8).toUpperCase()}`,
        profil_id: profil.id,
        formation_slug: formation.slug,
        attestation_id: attestation.id,
      })
    } catch {
      // Ignore
    }
    setDownloadingAttestation(false)
  }

  const moduleAccessible = (ordre: number) => {
    if (ordre === 1) return true
    const prev = modules.find((m) => m.ordre === ordre - 1)
    if (!prev) return false
    return progression.find((p) => p.module_id === prev.id)?.statut === "termine"
  }

  const getStatutModule = (moduleId: string) => {
    return progression.find((p) => p.module_id === moduleId)?.statut || "non_commence"
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <Sidebar pageActive="catalogue" />
      <div className="flex-1 flex flex-col min-w-0 overflow-auto">
        {/* Hero pleine largeur avec overlay navy */}
        <div className="relative" style={{ minHeight: 280 }}>
          <div className="w-full" style={{ height: 280 }}>
            <HeroIllustration domaine={firstDomaine} />
          </div>
          {/* Overlay navy */}
          <div className="absolute inset-0 bg-[#1B2D5B]/75" />
          {/* Content over overlay */}
          <div className="absolute inset-0 flex flex-col justify-end px-8 pb-8">
            <a href="/catalogue" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors mb-4 self-start">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
              </svg>
              Catalogue
            </a>
            <div className="flex flex-wrap gap-2 mb-3">
              {domaines.map((d) => {
                const dcfg = DOMAINE_CONFIG[d]
                return dcfg ? (
                  <span
                    key={d}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: dcfg.badgeBg, color: dcfg.badgeText }}
                  >
                    {d}
                  </span>
                ) : null
              })}
              {formation.thematique && (
                <span className="text-xs font-medium bg-white/15 text-white px-2.5 py-1 rounded-full">
                  {formation.thematique}
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight max-w-2xl">
              {formation.titre}
            </h1>
            {formation.description_courte && (
              <p className="text-white/75 text-sm mt-2 max-w-xl">{formation.description_courte}</p>
            )}
          </div>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-8 px-8 py-8 max-w-7xl w-full mx-auto">
          {/* Left column 70% */}
          <div className="flex-1 min-w-0 space-y-8">
            {/* Description */}
            {formation.description && (
              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-lg font-bold text-[#1B2D5B] mb-3">Description</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{formation.description}</p>
              </section>
            )}

            {/* Informations */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-[#1B2D5B] mb-4">Informations</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Durée</p>
                  <p className="text-sm font-semibold text-[#1B2D5B]">{dureeFormat(formation.duree_estimee_minutes)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Niveau</p>
                  <p className="text-sm font-semibold text-[#1B2D5B]">{formation.niveau || "–"}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Modules</p>
                  <p className="text-sm font-semibold text-[#1B2D5B]">{nbModules} modules</p>
                </div>
                {formation.public_cible && (
                  <div className="col-span-2">
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Public cible</p>
                    <p className="text-sm font-semibold text-[#1B2D5B]">{formation.public_cible}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Modules */}
            {modules.length > 0 && (
              <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-[#1B2D5B]">Contenu de la formation</h2>
                  <span className="text-sm text-gray-400">{nbModules} modules</span>
                </div>
                {isEnCours && (
                  <div className="mb-5 p-3 bg-[#3DBFA0]/5 rounded-xl border border-[#3DBFA0]/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 font-medium">Votre progression</span>
                      <span className="text-sm font-bold text-[#3DBFA0]">{nbTermines}/{nbModules}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-[#3DBFA0] h-2 rounded-full transition-all"
                        style={{ width: `${(nbTermines / nbModules) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  {modules.map((mod) => {
                    const statut = getStatutModule(mod.id)
                    const accessible = moduleAccessible(mod.ordre)
                    return (
                      <div
                        key={mod.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                          statut === "termine"
                            ? "bg-green-50/50 border-green-200"
                            : accessible
                            ? "bg-white border-gray-100 hover:border-[#3DBFA0]/30 hover:bg-[#3DBFA0]/2 cursor-pointer"
                            : "bg-gray-50/50 border-gray-100 opacity-50 cursor-not-allowed"
                        }`}
                        onClick={() => {
                          if (accessible) router.push(`/formations/${formation.slug}/modules/${mod.id}`)
                        }}
                      >
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                            statut === "termine"
                              ? "bg-green-500 text-white"
                              : statut === "en_cours"
                              ? "bg-[#3DBFA0] text-white"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {statut === "termine" ? "✓" : mod.ordre}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#1B2D5B] truncate">{mod.titre}</p>
                          {mod.description && (
                            <p className="text-xs text-gray-400 mt-0.5 truncate">{mod.description}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs text-gray-400">{mod.duree_minutes} min</span>
                          {!accessible && (
                            <svg className="w-4 h-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                            </svg>
                          )}
                          {statut === "en_cours" && (
                            <span className="text-xs font-medium text-[#3DBFA0]">En cours</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            )}
          </div>

          {/* Right column 30% — sticky card */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                {/* State indicator */}
                {isTermine && (
                  <div className="flex items-center gap-2 mb-4 p-3 bg-green-50 border border-green-200 rounded-xl">
                    <span className="text-green-600 font-bold text-lg">✓</span>
                    <div>
                      <p className="text-sm font-bold text-green-700">Formation terminée</p>
                      <p className="text-xs text-green-600">Félicitations !</p>
                    </div>
                  </div>
                )}
                {isEnCours && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Progression</span>
                      <span className="text-sm font-bold text-[#3DBFA0]">{Math.round((nbTermines / nbModules) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div
                        className="bg-[#3DBFA0] h-2.5 rounded-full transition-all"
                        style={{ width: `${(nbTermines / nbModules) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{nbTermines}/{nbModules} modules complétés</p>
                  </div>
                )}

                {/* Metadata */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400">Durée estimée</p>
                      <p className="text-sm font-semibold text-[#1B2D5B]">{dureeFormat(formation.duree_estimee_minutes)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-400">Modules</p>
                      <p className="text-sm font-semibold text-[#1B2D5B]">{nbModules} modules</p>
                    </div>
                  </div>
                  {formation.niveau && (
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-400">Niveau</p>
                        <p className="text-sm font-semibold text-[#1B2D5B]">{formation.niveau}</p>
                      </div>
                    </div>
                  )}
                  {formation.public_cible && (
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-400">Public cible</p>
                        <p className="text-sm font-semibold text-[#1B2D5B]">{formation.public_cible}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA buttons */}
                {isTermine ? (
                  <div className="space-y-3">
                    <button
                      onClick={handleDownloadAttestation}
                      disabled={downloadingAttestation}
                      className="w-full py-3 px-4 bg-[#3DBFA0] text-white text-sm font-semibold rounded-xl hover:bg-[#2ea88b] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {downloadingAttestation ? "Génération..." : "Télécharger l'attestation"}
                    </button>
                    <a
                      href={`/formations/${formation.slug}`}
                      className="w-full py-3 px-4 bg-gray-100 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center"
                    >
                      Revoir la formation
                    </a>
                  </div>
                ) : isEnCours ? (
                  <a
                    href={`/formations/${formation.slug}`}
                    className="w-full py-3 px-4 bg-[#1B2D5B] text-white text-sm font-semibold rounded-xl hover:bg-[#1B2D5B]/90 transition-colors flex items-center justify-center"
                  >
                    Continuer →
                  </a>
                ) : (
                  <a
                    href={`/formations/${formation.slug}`}
                    className="w-full py-3 px-4 bg-[#3DBFA0] text-white text-sm font-semibold rounded-xl hover:bg-[#2ea88b] transition-colors flex items-center justify-center"
                  >
                    Commencer la formation →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg z-20">
          {isTermine ? (
            <div className="flex gap-3">
              <button
                onClick={handleDownloadAttestation}
                disabled={downloadingAttestation}
                className="flex-1 py-3 bg-[#3DBFA0] text-white text-sm font-semibold rounded-xl hover:bg-[#2ea88b] transition-colors disabled:opacity-50"
              >
                {downloadingAttestation ? "..." : "Télécharger attestation"}
              </button>
              <a href={`/formations/${formation.slug}`} className="flex-1 py-3 bg-gray-100 text-gray-600 text-sm font-semibold rounded-xl text-center">
                Revoir
              </a>
            </div>
          ) : isEnCours ? (
            <a href={`/formations/${formation.slug}`} className="block w-full py-3 bg-[#1B2D5B] text-white text-sm font-semibold rounded-xl text-center">
              Continuer →
            </a>
          ) : (
            <a href={`/formations/${formation.slug}`} className="block w-full py-3 bg-[#3DBFA0] text-white text-sm font-semibold rounded-xl text-center">
              Commencer →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
