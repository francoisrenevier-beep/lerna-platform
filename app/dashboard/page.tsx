"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import {
  GraduationCap, LayoutGrid, TrendingUp, Library, Award, User,
  Clock, Users, Heart, Star, ArrowRight,
} from "lucide-react"
import { Sidebar } from "@/components/Sidebar"
import { BottomNav } from "@/components/BottomNav"
import { PageHeader } from "@/components/PageHeader"
import { getDomaineMeta } from "@/lib/formationMeta"

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
}

type FormationPopulaire = {
  id: string
  titre: string
  slug: string
  participantsCount: number
  noteMoyenne: number | null
  nbEvaluations: number
}

// Ligne brute renvoyée par la fonction SQL `get_formations_populaires`
// (agrégats anonymes, toutes institutions confondues — voir migration
// 20260706_fn_formations_populaires.sql).
type FormationPopulaireRow = {
  formation_id: string
  titre: string
  slug: string
  participants_count: number
  note_moyenne: number | null
  nb_evaluations: number
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
  formationsPopulaires: FormationPopulaire[]
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function heuresFormat(minutes: number) {
  if (minutes === 0) return "0h"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (h === 0) return m + " min"
  if (m === 0) return h + "h"
  return h + "h" + m
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

// ── Cartes d'accès rapide ──────────────────────────────────────────────────────

type QuickAccess = {
  href: string
  titre: string
  description: string
  Icon: typeof GraduationCap
  accent: string
  badge?: number
}

function QuickAccessCard({ c }: { c: QuickAccess }) {
  return (
    <a
      href={c.href}
      className="group relative flex flex-col gap-3 bg-white rounded-2xl border border-gray-100 p-5 pl-6 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: c.accent }} />

      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: c.accent + "1A", color: c.accent }}
        >
          <c.Icon className="w-5 h-5" />
        </div>
        {c.badge !== undefined && c.badge > 0 && (
          <span
            className="text-xs font-bold px-2 py-1 rounded-full"
            style={{ backgroundColor: c.accent + "1A", color: c.accent }}
          >
            {c.badge}
          </span>
        )}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#1B2D5B]">{c.titre}</h3>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">{c.description}</p>
      </div>

      <ArrowRight
        className="w-4 h-4 absolute bottom-5 right-5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
        style={{ color: c.accent }}
      />
    </a>
  )
}

// ── Populaires dans l'institution — rang + étoiles ─────────────────────────────

function RangBadge({ rang, accent }: { rang: number; accent: string }) {
  const colore = rang <= 2
  return (
    <span
      className="w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-bold"
      style={colore ? { backgroundColor: accent + "1A", color: accent } : { backgroundColor: "#F1F5F9", color: "#94A3B8" }}
    >
      {rang}
    </span>
  )
}

function StarsDisplay({ rating }: { rating: number }) {
  const pleines = Math.round(rating)
  return (
    <span className="inline-flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className="w-3 h-3"
          fill={i <= pleines ? "#f59e0b" : "none"}
          style={{ color: i <= pleines ? "#f59e0b" : "#D1D5DB" }}
        />
      ))}
    </span>
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
            <Pulse className="h-3 w-32 bg-white/10" />
            <Pulse className="h-8 w-48 md:w-64 bg-white/20" />
          </div>
          <Pulse className="h-6 w-24 md:w-36 bg-white/10" />
        </div>
        <div className="px-4 md:px-8 py-6 space-y-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map((i) => <Pulse key={i} className="h-32 rounded-2xl" />)}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              <Pulse className="h-24 rounded-xl" />
              <Pulse className="h-24 rounded-xl" />
            </div>
            <Pulse className="h-56 rounded-2xl" />
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
        { data: allFormationsForProgress },
        { data: progressionData },
        { count: countAttestations },
        { count: countBadges },
        { data: populairesData },
      ] = await Promise.all([
        supabase.from("profils").select("prenom, nom").eq("id", user.id).single(),
        supabase
          .from("institution_profils")
          .select("institutions(nom)")
          .eq("profil_id", user.id)
          .eq("statut", "actif")
          .limit(1)
          .single(),
        // Toutes les formations pour le calcul de progression
        supabase
          .from("formations")
          .select("id, duree_estimee_minutes, domaine"),
        supabase
          .from("progression")
          .select("formation_id, module_id, statut, updated_at")
          .eq("profil_id", user.id),
        supabase.from("attestations").select("id", { count: "exact" }).eq("profil_id", user.id),
        supabase.from("badges").select("badge_id", { count: "exact", head: true }).eq("profil_id", user.id),
        // Agrégats anonymes toutes institutions confondues (fonction SECURITY DEFINER)
        supabase.rpc("get_formations_populaires"),
      ])

      const prog = progressionData ?? []
      const formations = allFormationsForProgress ?? []
      const formationIds = [...new Set(prog.map((p) => p.formation_id))]

      // Détails des formations commencées
      let modulesData: { id: string; formation_id: string }[] = []
      let formationsEnCoursMeta: { id: string; titre: string; slug: string }[] = []
      if (formationIds.length > 0) {
        const [{ data: mods }, { data: fMeta }] = await Promise.all([
          supabase.from("modules").select("id, formation_id").in("formation_id", formationIds),
          supabase.from("formations").select("id, titre, slug").in("id", formationIds),
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
          })
        }
      }

      const formationsPopulaires: FormationPopulaire[] = ((populairesData as FormationPopulaireRow[]) ?? []).map((r) => ({
        id: r.formation_id,
        titre: r.titre,
        slug: r.slug,
        participantsCount: r.participants_count ?? 0,
        noteMoyenne: r.note_moyenne,
        nbEvaluations: r.nb_evaluations ?? 0,
      }))

      setData({
        profil: profilData ?? null,
        institution: (ipData?.institutions as unknown as Institution) ?? null,
        formationsEnCours: formationsEnCoursTout.slice(0, 3),
        totalEnCours: formationsEnCoursTout.length,
        formationsCompletees,
        totalMinutesCompletees,
        nbAttestations: countAttestations ?? 0,
        nbBadges: countBadges ?? 0,
        formationsPopulaires,
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
    formationsPopulaires,
  } = data

  const quickAccess: QuickAccess[] = [
    {
      href: "/catalogue",
      titre: "Catalogue",
      description: "Toutes les formations disponibles.",
      Icon: LayoutGrid,
      accent: "#7E22CE",
    },
    {
      href: "/formations",
      titre: "Mes formations",
      description: "Vos parcours en cours et à venir.",
      Icon: GraduationCap,
      accent: "#1D4ED8",
      badge: totalEnCours,
    },
    {
      href: "/ressources",
      titre: "Ressources",
      description: "Outils, fiches et références pratiques.",
      Icon: Library,
      accent: "#B45309",
    },
    {
      href: "/attestations",
      titre: "Attestations",
      description: "Vos justificatifs de formation.",
      Icon: Award,
      accent: "#D85A30",
      badge: nbAttestations,
    },
    {
      href: "/progression",
      titre: "Ma progression",
      description: "Votre avancement et vos badges.",
      Icon: TrendingUp,
      accent: "#3DBFA0",
    },
    {
      href: "/profil",
      titre: "Mon profil",
      description: "Vos informations personnelles.",
      Icon: User,
      accent: "#BE123C",
    },
  ]

  const plusSuivies = formationsPopulaires
    .filter((f) => f.participantsCount > 0)
    .sort((a, b) => b.participantsCount - a.participantsCount)
    .slice(0, 4)
  const plusAimees = formationsPopulaires
    .filter((f) => f.nbEvaluations > 0 && f.noteMoyenne !== null)
    .sort((a, b) => (b.noteMoyenne ?? 0) - (a.noteMoyenne ?? 0))
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex overflow-x-hidden">
      <Sidebar pageActive="dashboard" institution={institution?.nom} />

      <main className="flex-1 min-w-0 pb-20 md:pb-0">

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <PageHeader
          gradient
          surtitre="Espace de formation"
          titre={`Bonjour${profil?.prenom ? ", " + profil.prenom : ""} 👋`}
          right={
            <>
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
              <span className="text-sm capitalize" style={{ color: "rgba(255,255,255,0.45)" }}>
                {getDateFr()}
              </span>
            </>
          }
        />

        <div className="px-4 md:px-8 py-5 md:py-7 space-y-8 md:space-y-10 max-w-6xl">

          {/* ── Où souhaitez-vous aller ? ─────────────────────────────────── */}
          <section>
            <h2 className="text-lg font-bold text-[#1B2D5B] mb-4">Où souhaitez-vous aller ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickAccess.map((c) => (
                <QuickAccessCard key={c.href} c={c} />
              ))}
            </div>
          </section>

          {/* ── Reprendre + En un coup d'œil ──────────────────────────────── */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Reprendre où vous en étiez
              </h2>
              {formationsEnCours.length > 0 ? (
                <div className="space-y-3">
                  {formationsEnCours.map((f) => {
                    const pct = f.nbModules > 0 ? Math.round((f.nbTermines / f.nbModules) * 100) : 0
                    const domaineMeta = getDomaineMeta(f.domaine)
                    return (
                      <div key={f.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                        {f.domaine && domaineMeta.value && (
                          <span
                            className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full mb-2"
                            style={{ backgroundColor: domaineMeta.badgeBg, color: domaineMeta.badgeText }}
                          >
                            {domaineMeta.label}
                          </span>
                        )}
                        <h3 className="text-sm font-bold text-[#1B2D5B] mb-3">{f.titre}</h3>
                        <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                          <div
                            className="h-2 rounded-full transition-all"
                            style={{ width: pct + "%", background: "linear-gradient(90deg, #3DBFA0, #1B8B72)" }}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-400">{f.nbTermines}/{f.nbModules} modules</span>
                          <a
                            href={"/formations/" + f.slug}
                            className="text-xs font-semibold text-[#3DBFA0] hover:underline"
                          >
                            Continuer →
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                  <p className="text-sm font-semibold text-[#1B2D5B] mb-1">Aucune formation en cours</p>
                  <p className="text-xs text-gray-400 mb-3">Découvrez le catalogue pour démarrer une formation.</p>
                  <a href="/catalogue" className="text-xs font-semibold text-[#3DBFA0] hover:underline">
                    Voir le catalogue →
                  </a>
                </div>
              )}
              {totalEnCours > formationsEnCours.length && (
                <a href="/formations" className="inline-block mt-2.5 text-xs text-[#3DBFA0] hover:underline">
                  Voir toutes mes formations →
                </a>
              )}
            </div>

            <div>
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                En un coup d'œil
              </h2>
              <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ backgroundColor: "var(--learna-navy)" }}>
                {[
                  { icon: GraduationCap, valeur: formationsCompletees, label: "Formations complétées" },
                  { icon: Clock, valeur: totalMinutesCompletees > 0 ? heuresFormat(totalMinutesCompletees) : "—", label: "Heures de formation" },
                  { icon: Award, valeur: nbBadges, label: "Badges débloqués" },
                ].map((s, i) => (
                  <div key={i} className={`flex items-center gap-3 ${i > 0 ? "pt-4 border-t" : ""}`} style={i > 0 ? { borderColor: "rgba(255,255,255,0.1)" } : undefined}>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(61,191,160,0.15)", color: "#3DBFA0" }}
                    >
                      <s.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white leading-none">{s.valeur}</div>
                      <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Formations populaires (toutes institutions) ───────────────── */}
          <section className="pb-6">
            <div className="flex items-end justify-between mb-5">
              <div>
                <h2 className="text-lg font-bold text-[#1B2D5B]">Formations populaires</h2>
                <p className="text-xs text-gray-400 mt-0.5">Les plus suivies et les mieux notées, tous établissements LEARNA confondus</p>
              </div>
              <a href="/catalogue" className="text-sm font-semibold text-[#3DBFA0] hover:text-[#2ea88b] transition-colors hidden sm:block">
                Voir tout le catalogue →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-[#3DBFA0]" />
                  <h3 className="text-sm font-bold text-[#1B2D5B]">Les plus suivies</h3>
                </div>
                {plusSuivies.length > 0 ? (
                  <div className="space-y-3">
                    {plusSuivies.map((f, i) => (
                      <div key={f.id} className="flex items-center gap-3">
                        <RangBadge rang={i + 1} accent="#3DBFA0" />
                        <a href={"/catalogue/" + f.slug} className="flex-1 min-w-0 text-sm font-medium text-[#1B2D5B] truncate hover:underline">
                          {f.titre}
                        </a>
                        <span className="flex-shrink-0 text-xs text-gray-400 inline-flex items-center gap-1">
                          <Users className="w-3 h-3" /> {f.participantsCount}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400">Pas encore assez de données pour ce classement.</p>
                )}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-[#BE123C]" />
                  <h3 className="text-sm font-bold text-[#1B2D5B]">Les plus aimées</h3>
                </div>
                {plusAimees.length > 0 ? (
                  <div className="space-y-3">
                    {plusAimees.map((f, i) => (
                      <div key={f.id} className="flex items-center gap-3">
                        <RangBadge rang={i + 1} accent="#BE123C" />
                        <a href={"/catalogue/" + f.slug} className="flex-1 min-w-0 text-sm font-medium text-[#1B2D5B] truncate hover:underline">
                          {f.titre}
                        </a>
                        <div className="flex-shrink-0 flex items-center gap-2">
                          <StarsDisplay rating={f.noteMoyenne ?? 0} />
                          <span className="text-xs font-semibold text-gray-400">{f.noteMoyenne?.toFixed(1)}/5</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-400">Pas encore assez de données pour ce classement.</p>
                )}
              </div>
            </div>

            <a href="/catalogue" className="inline-block mt-3 text-xs text-[#3DBFA0] hover:underline sm:hidden">
              Voir tout le catalogue →
            </a>
          </section>

        </div>
      </main>
      <BottomNav pageActive="dashboard" institution={institution?.nom} />
    </div>
  )
}
