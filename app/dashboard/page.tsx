"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { getCouleurEtiquette } from "@/lib/etiquettes"

type Profil = {
  prenom: string
  nom: string
}

type Institution = {
  nom: string
  statut: string
}

type FormationCompacte = {
  id: string
  titre: string
  slug: string
  categorie: string
  duree_estimee_minutes: number
  domaine: string | null
  thematique: string | null
}

function dureeFormat(minutes: number) {
  if (minutes < 60) return minutes + " min"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

export default function DashboardPage() {
  const [profil, setProfil] = useState<Profil | null>(null)
  const [institution, setInstitution] = useState<Institution | null>(null)
  const [nbFormations, setNbFormations] = useState(0)
  const [nbEnCours, setNbEnCours] = useState(0)
  const [nbAttestations, setNbAttestations] = useState(0)
  const [formationsPreview, setFormationsPreview] = useState<FormationCompacte[]>([])
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

      const { data: p } = await supabase
        .from("profils")
        .select("prenom, nom")
        .eq("id", user.id)
        .single()
      if (p) setProfil(p)

      const { data: ip } = await supabase
        .from("institution_profils")
        .select("institutions(nom, statut)")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()
      if (ip?.institutions) setInstitution(ip.institutions as unknown as Institution)

      const { count: countFormations } = await supabase
        .from("formations")
        .select("id", { count: "exact" })
        .eq("est_publie", true)
        .eq("est_privee", false)
      setNbFormations(countFormations || 0)

      const { data: progData } = await supabase
        .from("progression")
        .select("formation_id")
        .eq("profil_id", user.id)
      const formationsEnCours = new Set(progData?.map((p) => p.formation_id) ?? [])
      setNbEnCours(formationsEnCours.size)

      const { count: countAttestations } = await supabase
        .from("attestations")
        .select("id", { count: "exact" })
        .eq("profil_id", user.id)
      setNbAttestations(countAttestations || 0)

      const { data: preview } = await supabase
        .from("formations")
        .select("id, titre, slug, categorie, duree_estimee_minutes, domaine, thematique")
        .eq("est_publie", true)
        .eq("est_privee", false)
        .order("ordre")
        .limit(3)
      if (preview) setFormationsPreview(preview)

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
      <Sidebar pageActive="dashboard" institution={institution?.nom} />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">
            Bonjour{profil?.prenom ? ", " + profil.prenom : ""} 👋
          </h2>
          <p className="text-gray-500 mt-1">Bienvenue sur votre espace de formation Learna.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Formations disponibles</p>
            <p className="text-3xl font-bold text-[#1B2D5B] mt-1">{nbFormations}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">En cours</p>
            <p className="text-3xl font-bold text-[#3DBFA0] mt-1">{nbEnCours}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Attestations obtenues</p>
            <p className="text-3xl font-bold text-[#1B2D5B] mt-1">{nbAttestations}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1B2D5B]">Formations disponibles</h3>
            <a href="/catalogue" className="text-sm text-[#3DBFA0] hover:underline">
              Voir toutes les formations →
            </a>
          </div>
          <div className="space-y-3">
            {formationsPreview.map((formation) => (
              <a
                key={formation.id}
                href={"/formations/" + formation.slug}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1B2D5B] group-hover:text-[#3DBFA0] transition-colors truncate">
                    {formation.titre}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    {formation.domaine && (
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCouleurEtiquette("domaine", formation.domaine)}`}>
                        {formation.domaine}
                      </span>
                    )}
                    {!formation.domaine && (
                      <span className="text-xs text-gray-400">{formation.categorie}</span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">
                  {dureeFormat(formation.duree_estimee_minutes)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
