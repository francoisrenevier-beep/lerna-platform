"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { InstitutionSidebar } from "@/components/InstitutionSidebar"
import { PageHeader } from "@/components/PageHeader"
import {
  Users, GraduationCap, Award, TrendingUp, ArrowRight,
  Copy, Check, CalendarClock, AlertTriangle, BarChart3, KeyRound,
} from "lucide-react"

type InstitutionData = {
  id: string
  nom: string
  statut: string
  licence_expiration?: string | null
  code_acces?: string
}

function statutLabel(statut: string) {
  if (statut === "actif") return { label: "Active", color: "bg-green-100 text-green-700" }
  if (statut === "essai") return { label: "Essai", color: "bg-yellow-100 text-yellow-700" }
  return { label: "Expirée", color: "bg-red-100 text-red-700" }
}

function dateFormat(d: string | null | undefined) {
  if (!d) return "—"
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
}

function joursRestants(d: string | null | undefined): number | null {
  if (!d) return null
  const diff = new Date(d).getTime() - Date.now()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

function getDateFr() {
  return new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

// ── Cartes ─────────────────────────────────────────────────────────────────────

type StatCard = {
  label: string
  valeur: string | number
  sousLabel?: string
  Icon: typeof Users
  accent: string
}

function StatCardView({ c }: { c: StatCard }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
        style={{ backgroundColor: c.accent + "1A", color: c.accent }}
      >
        <c.Icon className="w-5 h-5" />
      </div>
      <p className="text-3xl font-bold text-[#1B2D5B] leading-none">{c.valeur}</p>
      <p className="text-sm text-gray-500 mt-2">{c.label}</p>
      {c.sousLabel && <p className="text-xs text-gray-400 mt-0.5">{c.sousLabel}</p>}
    </div>
  )
}

type LienRapide = {
  href: string
  titre: string
  description: string
  Icon: typeof Users
  accent: string
}

function LienRapideCard({ l }: { l: LienRapide }) {
  return (
    <a
      href={l.href}
      className="group relative flex items-start gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 pl-6 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: l.accent }} />
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: l.accent + "1A", color: l.accent }}
      >
        <l.Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-[#1B2D5B]">{l.titre}</p>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">{l.description}</p>
      </div>
      <ArrowRight
        className="w-4 h-4 self-center flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
        style={{ color: l.accent }}
      />
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
      <div className="hidden md:block w-64 bg-[#1B2D5B] flex-shrink-0" />
      <main className="flex-1">
        <div className="bg-[#1B2D5B] px-4 md:px-8 py-6 flex justify-between items-center">
          <div className="space-y-2">
            <Pulse className="h-3 w-24 bg-white/10" />
            <Pulse className="h-8 w-56 bg-white/20" />
          </div>
          <Pulse className="h-6 w-32 bg-white/10" />
        </div>
        <div className="px-4 md:px-8 py-6 space-y-6 max-w-6xl">
          <Pulse className="h-28 rounded-2xl" />
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {[0, 1, 2, 3].map((i) => <Pulse key={i} className="h-36 rounded-2xl" />)}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Pulse className="h-24 rounded-2xl" />
            <Pulse className="h-24 rounded-2xl" />
          </div>
        </div>
      </main>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function InstitutionDashboardPage() {
  const [institution, setInstitution] = useState<InstitutionData | null>(null)
  const [nbCollaborateursActifs, setNbCollaborateursActifs] = useState(0)
  const [nbFormationsCompletes, setNbFormationsCompletes] = useState(0)
  const [nbAttestations, setNbAttestations] = useState(0)
  const [tauxMoyen, setTauxMoyen] = useState(0)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: ip, error: ipError } = await supabase
        .from("institution_profils")
        .select("role, institution_id")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()

      if (ipError || !ip || ip.role !== "responsable") { router.push("/dashboard"); return }

      const institutionId = ip.institution_id

      const { data: instData } = await supabase
        .from("institutions")
        .select("id, nom, statut, licence_expiration, code_acces")
        .eq("id", institutionId)
        .single()

      setInstitution((instData ?? { id: institutionId, nom: "", statut: "", licence_expiration: null, code_acces: "" }) as InstitutionData)


      // Collaborateurs actifs
      const { count: countActifs } = await supabase
        .from("institution_profils")
        .select("profil_id", { count: "exact" })
        .eq("institution_id", institutionId)
        .eq("role", "collaborateur")
        .eq("statut", "actif")
      const nbActifs = countActifs || 0
      setNbCollaborateursActifs(nbActifs)

      // IDs des collaborateurs (tous, pour les attestations)
      const { data: collabIps } = await supabase
        .from("institution_profils")
        .select("profil_id")
        .eq("institution_id", institutionId)
        .eq("role", "collaborateur")
      const collabIds = collabIps?.map((c) => c.profil_id) ?? []

      if (collabIds.length > 0) {
        // Attestations obtenues (total)
        const { count: countAtt } = await supabase
          .from("attestations")
          .select("id", { count: "exact" })
          .in("profil_id", collabIds)
        setNbAttestations(countAtt || 0)

        // Formations complétées = formations distinctes avec au moins une attestation
        const { data: attData } = await supabase
          .from("attestations")
          .select("formation_id")
          .in("profil_id", collabIds)
        const formationsDistinctes = new Set(attData?.map((a) => a.formation_id) ?? []).size
        setNbFormationsCompletes(formationsDistinctes)

        // Taux moyen de complétion
        if (nbActifs > 0) {
          const { data: formations } = await supabase
            .from("formations")
            .select("id")
            .eq("est_publie", true)

          const { data: attActifs } = await supabase
            .from("attestations")
            .select("formation_id, profil_id")
            .in("profil_id", collabIds)

          const nbFormationsTotal = formations?.length || 0
          if (nbFormationsTotal > 0 && attActifs) {
            const taux = Math.round((attActifs.length / (nbFormationsTotal * nbActifs)) * 100)
            setTauxMoyen(Math.min(taux, 100))
          }
        }
      }

      setLoading(false)
    }
    getData()
  }, [router])

  if (loading) return <DashboardSkeleton />

  const statut = institution ? statutLabel(institution.statut) : null
  const jours = joursRestants(institution?.licence_expiration)
  const licenceAlerte = jours !== null && jours <= 30

  const copierCode = () => {
    if (!institution?.code_acces) return
    navigator.clipboard.writeText(institution.code_acces)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const stats: StatCard[] = [
    { label: "Collaborateurs actifs", valeur: nbCollaborateursActifs, Icon: Users, accent: "#1D4ED8" },
    { label: "Formations complétées", sousLabel: "formations distinctes", valeur: nbFormationsCompletes, Icon: GraduationCap, accent: "#3DBFA0" },
    { label: "Attestations obtenues", valeur: nbAttestations, Icon: Award, accent: "#D85A30" },
    { label: "Taux moyen de complétion", valeur: tauxMoyen + " %", Icon: TrendingUp, accent: "#7E22CE" },
  ]

  const liensRapides: LienRapide[] = [
    {
      href: "/institution/collaborateurs",
      titre: "Gérer les collaborateurs",
      description: "Activer, désactiver, consulter les secteurs.",
      Icon: Users,
      accent: "#1D4ED8",
    },
    {
      href: "/institution/statistiques",
      titre: "Voir les statistiques",
      description: "Progression par formation, attestations.",
      Icon: BarChart3,
      accent: "#3DBFA0",
    },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <InstitutionSidebar pageActive="dashboard" institution={institution?.nom} />
      <main className="flex-1 min-w-0">
        <PageHeader
          gradient
          surtitre="Espace RH"
          titre={institution?.nom || "Tableau de bord"}
          right={
            <>
              {statut && (
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${statut.color}`}>
                  Licence {statut.label}
                </span>
              )}
              <span className="text-sm capitalize" style={{ color: "rgba(255,255,255,0.45)" }}>
                {getDateFr()}
              </span>
            </>
          }
        />

        <div className="px-4 md:px-8 py-6 space-y-6 max-w-6xl">

          {/* Alerte licence */}
          {licenceAlerte && (
            <div
              className={`flex items-start gap-3 p-4 rounded-2xl border text-sm ${
                jours! < 0
                  ? "bg-red-50 border-red-200 text-red-700"
                  : "bg-amber-50 border-amber-200 text-amber-800"
              }`}
              role="alert"
            >
              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>
                {jours! < 0
                  ? "La licence de votre institution est expirée. Contactez LEARNA pour la renouveler."
                  : `Votre licence expire dans ${jours} jour${jours! > 1 ? "s" : ""} (le ${dateFormat(institution?.licence_expiration)}). Pensez à la renouveler.`}
              </span>
            </div>
          )}

          {/* Licence & code d'accès */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#3DBFA0]/10 text-[#3DBFA0]">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Code d'accès institution</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <p className="text-base font-mono font-bold text-[#1B2D5B]">{institution?.code_acces || "—"}</p>
                    {institution?.code_acces && (
                      <button
                        onClick={copierCode}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors"
                      >
                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {copied ? "Copié" : "Copier"}
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">À transmettre aux collaborateurs pour créer leur compte.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:border-l sm:border-gray-100 sm:pl-8">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#1B2D5B]/5 text-[#1B2D5B]">
                  <CalendarClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Expiration de la licence</p>
                  <p className="text-sm font-semibold text-[#1B2D5B] mt-0.5">{dateFormat(institution?.licence_expiration)}</p>
                  {jours !== null && jours >= 0 && (
                    <p className="text-xs text-gray-400 mt-1">{jours} jour{jours > 1 ? "s" : ""} restant{jours > 1 ? "s" : ""}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {stats.map((c) => (
              <StatCardView key={c.label} c={c} />
            ))}
          </div>

          {/* Liens rapides */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {liensRapides.map((l) => (
              <LienRapideCard key={l.href} l={l} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
