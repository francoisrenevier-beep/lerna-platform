"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { InstitutionSidebar } from "@/components/InstitutionSidebar"

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

export default function InstitutionDashboardPage() {
  const [institution, setInstitution] = useState<InstitutionData | null>(null)
  const [nbCollaborateurs, setNbCollaborateurs] = useState(0)
  const [nbFormations, setNbFormations] = useState(0)
  const [nbAttestations, setNbAttestations] = useState(0)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) { router.push("/connexion"); return }

      const { data: ip } = await supabase
        .from("institution_profils")
        .select("role, institution_id, institutions(id, nom, statut, licence_expiration, code_acces)")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()

      if (!ip || ip.role !== "responsable") { router.push("/dashboard"); return }

      const inst = ip.institutions as InstitutionData
      setInstitution(inst)
      const institutionId = inst.id

      const { count: countCollab } = await supabase
        .from("institution_profils")
        .select("profil_id", { count: "exact" })
        .eq("institution_id", institutionId)
        .eq("role", "collaborateur")
      setNbCollaborateurs(countCollab || 0)

      const { count: countFormations } = await supabase
        .from("formations")
        .select("id", { count: "exact" })
        .eq("est_publie", true)
        .eq("est_privee", false)
      setNbFormations(countFormations || 0)

      const { data: collabIds } = await supabase
        .from("institution_profils")
        .select("profil_id")
        .eq("institution_id", institutionId)
        .eq("role", "collaborateur")

      if (collabIds && collabIds.length > 0) {
        const ids = collabIds.map((c) => c.profil_id)
        const { count: countAtt } = await supabase
          .from("attestations")
          .select("id", { count: "exact" })
          .in("profil_id", ids)
        setNbAttestations(countAtt || 0)
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

  const statut = institution ? statutLabel(institution.statut) : null

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <InstitutionSidebar pageActive="dashboard" institution={institution?.nom} />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Tableau de bord</h2>
          <p className="text-gray-500 mt-1">Vue d'ensemble de votre institution.</p>
        </div>

        {/* Infos institution */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#1B2D5B]">{institution?.nom}</h3>
              <p className="text-sm text-gray-400 mt-0.5">Code d'accès : <span className="font-mono font-medium text-gray-600">{institution?.code_acces || "—"}</span></p>
            </div>
            {statut && (
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statut.color}`}>
                Licence {statut.label}
              </span>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Date d'expiration de la licence :{" "}
              <span className="font-medium text-gray-700">{dateFormat(institution?.licence_expiration)}</span>
            </p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Collaborateurs</p>
            <p className="text-3xl font-bold text-[#1B2D5B] mt-1">{nbCollaborateurs}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Formations disponibles</p>
            <p className="text-3xl font-bold text-[#3DBFA0] mt-1">{nbFormations}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Attestations obtenues</p>
            <p className="text-3xl font-bold text-[#1B2D5B] mt-1">{nbAttestations}</p>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="grid grid-cols-2 gap-4">
          <a href="/institution/collaborateurs" className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#3DBFA0] transition-colors group">
            <span className="text-2xl">👥</span>
            <p className="text-sm font-semibold text-[#1B2D5B] mt-2 group-hover:text-[#3DBFA0] transition-colors">Gérer les collaborateurs</p>
            <p className="text-xs text-gray-400 mt-0.5">Activer, désactiver, consulter</p>
          </a>
          <a href="/institution/progression" className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#3DBFA0] transition-colors group">
            <span className="text-2xl">📈</span>
            <p className="text-sm font-semibold text-[#1B2D5B] mt-2 group-hover:text-[#3DBFA0] transition-colors">Progression de l'équipe</p>
            <p className="text-xs text-gray-400 mt-0.5">Suivi par formation</p>
          </a>
        </div>
      </main>
    </div>
  )
}
