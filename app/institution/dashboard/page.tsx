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
  const [nbCollaborateursActifs, setNbCollaborateursActifs] = useState(0)
  const [nbFormationsCompletes, setNbFormationsCompletes] = useState(0)
  const [nbAttestations, setNbAttestations] = useState(0)
  const [tauxMoyen, setTauxMoyen] = useState(0)
  const [loading, setLoading] = useState(true)
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

          const actifIds = collabIps
            ?.filter((c) => {
              // actifs only for rate calculation
            })
            .map((c) => c.profil_id) ?? collabIds

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

        {/* 4 cartes de statistiques */}
        <div className="grid grid-cols-2 gap-4 mb-6 xl:grid-cols-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Collaborateurs actifs</p>
            <p className="text-3xl font-bold text-[#1B2D5B] mt-1">{nbCollaborateursActifs}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Formations complétées</p>
            <p className="text-3xl font-bold text-[#3DBFA0] mt-1">{nbFormationsCompletes}</p>
            <p className="text-xs text-gray-400 mt-1">formations distinctes</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Attestations obtenues</p>
            <p className="text-3xl font-bold text-[#1B2D5B] mt-1">{nbAttestations}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Taux moyen de complétion</p>
            <p className="text-3xl font-bold text-[#3DBFA0] mt-1">{tauxMoyen} %</p>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="grid grid-cols-2 gap-4">
          <a href="/institution/collaborateurs" className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#3DBFA0] transition-colors group">
            <p className="text-sm font-semibold text-[#1B2D5B] group-hover:text-[#3DBFA0] transition-colors">Gérer les collaborateurs</p>
            <p className="text-xs text-gray-400 mt-0.5">Activer, désactiver, consulter les secteurs</p>
          </a>
          <a href="/institution/statistiques" className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:border-[#3DBFA0] transition-colors group">
            <p className="text-sm font-semibold text-[#1B2D5B] group-hover:text-[#3DBFA0] transition-colors">Voir les statistiques</p>
            <p className="text-xs text-gray-400 mt-0.5">Progression par formation, attestations</p>
          </a>
        </div>
      </main>
    </div>
  )
}
