"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { AdminSidebar } from "@/components/AdminSidebar"

type StatCard = {
  label: string
  valeur: number | string
  couleur: string
  sousTitre?: string
}

type TopFormation = {
  id: string
  titre: string
  nb_apprenants: number
  pct: number
}

type DerniereInscription = {
  profil_id: string
  prenom: string
  nom: string
  institution_nom: string
  created_at: string
}

function dateFormat(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<StatCard[]>([])
  const [topFormations, setTopFormations] = useState<TopFormation[]>([])
  const [dernieresInscriptions, setDernieresInscriptions] = useState<DerniereInscription[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      const user = session?.user
      if (!user) { router.push("/connexion"); return }

      const { data: profil } = await supabase
        .from("profils")
        .select("est_super_admin")
        .eq("id", user.id)
        .single()

      if (!profil?.est_super_admin) { router.push("/dashboard"); return }

      // 1. Institutions actives (actif + essai)
      const { count: nbInstitutions } = await supabase
        .from("institutions")
        .select("id", { count: "exact" })
        .neq("statut", "inactif")

      // 2. Collaborateurs inscrits
      const { count: nbCollaborateurs } = await supabase
        .from("institution_profils")
        .select("profil_id", { count: "exact" })
        .eq("role", "collaborateur")
        .eq("statut", "actif")

      // 3. Formations complétées (attestations totales)
      const { count: nbFormationsCompletes } = await supabase
        .from("attestations")
        .select("id", { count: "exact" })

      // 4. Attestations générées
      const { count: nbAttestations } = await supabase
        .from("attestations")
        .select("id", { count: "exact" })

      // 5. Demandes de démo en attente
      const { count: nbDemandesEnAttente } = await supabase
        .from("demandes_demo")
        .select("id", { count: "exact" })
        .eq("traite", false)

      // 6. Évaluations reçues
      const { count: nbEvaluations } = await supabase
        .from("evaluations_formations")
        .select("id", { count: "exact" })

      setStats([
        { label: "Institutions actives", valeur: nbInstitutions || 0, couleur: "#1B2D5B" },
        { label: "Collaborateurs inscrits", valeur: nbCollaborateurs || 0, couleur: "#3DBFA0" },
        { label: "Formations complétées", valeur: nbFormationsCompletes || 0, couleur: "#1B2D5B", sousTitre: "attestations délivrées" },
        { label: "Attestations générées", valeur: nbAttestations || 0, couleur: "#3DBFA0" },
        { label: "Demandes de démo en attente", valeur: nbDemandesEnAttente || 0, couleur: nbDemandesEnAttente ? "#f59e0b" : "#1B2D5B" },
        { label: "Évaluations reçues", valeur: nbEvaluations || 0, couleur: "#1B2D5B" },
      ])

      // Top 5 formations les plus suivies
      const { data: attFormations } = await supabase
        .from("attestations")
        .select("formation_id")

      if (attFormations && attFormations.length > 0) {
        const comptage: Record<string, number> = {}
        attFormations.forEach((a) => {
          comptage[a.formation_id] = (comptage[a.formation_id] || 0) + 1
        })
        const sorted = Object.entries(comptage)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
        const formationIds = sorted.map(([id]) => id)
        const { data: formationsTitres } = await supabase
          .from("formations")
          .select("id, titre")
          .in("id", formationIds)

        const max = sorted[0]?.[1] || 1
        const titreMap = new Map(formationsTitres?.map((f) => [f.id, f.titre]) ?? [])
        setTopFormations(
          sorted.map(([id, nb]) => ({
            id,
            titre: titreMap.get(id) || "—",
            nb_apprenants: nb,
            pct: Math.round((nb / max) * 100),
          }))
        )
      }

      // 5 dernières inscriptions
      const { data: dernieresIps } = await supabase
        .from("institution_profils")
        .select("profil_id, institution_id, created_at")
        .eq("role", "collaborateur")
        .order("created_at", { ascending: false })
        .limit(5)

      if (dernieresIps && dernieresIps.length > 0) {
        const profilIds = dernieresIps.map((ip) => ip.profil_id)
        const institutionIds = dernieresIps.map((ip) => ip.institution_id)

        const [{ data: profils }, { data: institutions }] = await Promise.all([
          supabase.from("profils").select("id, prenom, nom").in("id", profilIds),
          supabase.from("institutions").select("id, nom").in("id", institutionIds),
        ])

        const profilMap = new Map(profils?.map((p) => [p.id, p]) ?? [])
        const institutionMap = new Map(institutions?.map((i) => [i.id, i]) ?? [])

        setDernieresInscriptions(
          dernieresIps.map((ip) => {
            const p = profilMap.get(ip.profil_id)
            const inst = institutionMap.get(ip.institution_id)
            return {
              profil_id: ip.profil_id,
              prenom: p?.prenom || "",
              nom: p?.nom || "",
              institution_nom: inst?.nom || "—",
              created_at: ip.created_at,
            }
          })
        )
      }

      setLoading(false)
    }
    getData()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar pageActive="dashboard" />
      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Tableau de bord</h2>
          <p className="text-gray-500 mt-1">Vue globale de la plateforme LERNA360.</p>
        </div>

        {/* 6 cartes statistiques */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500 mb-1">{s.label}</p>
              <p className="text-3xl font-bold" style={{ color: s.couleur }}>{s.valeur}</p>
              {s.sousTitre && <p className="text-xs text-gray-400 mt-1">{s.sousTitre}</p>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Top 5 formations */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-base font-semibold text-[#1B2D5B] mb-5">Top 5 formations les plus suivies</h3>
            {topFormations.length === 0 ? (
              <p className="text-sm text-gray-400">Aucune donnée disponible.</p>
            ) : (
              <div className="space-y-4">
                {topFormations.map((f, i) => (
                  <div key={f.id}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-[#1B2D5B] font-medium truncate max-w-[200px]">
                        {i + 1}. {f.titre}
                      </span>
                      <span className="text-sm font-semibold text-[#3DBFA0] ml-2 shrink-0">
                        {f.nb_apprenants}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-[#3DBFA0] transition-all"
                        style={{ width: `${f.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 5 dernières inscriptions */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-semibold text-[#1B2D5B]">Dernières inscriptions</h3>
            </div>
            {dernieresInscriptions.length === 0 ? (
              <div className="px-6 py-8 text-center">
                <p className="text-sm text-gray-400">Aucune inscription.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {dernieresInscriptions.map((insc) => (
                  <div key={insc.profil_id} className="px-6 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-[#1B2D5B]">{insc.prenom} {insc.nom}</p>
                      <p className="text-xs text-gray-400">{insc.institution_nom}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{dateFormat(insc.created_at)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
