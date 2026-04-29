"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"

type Profil = {
  prenom: string
  nom: string
}

type Institution = {
  nom: string
  statut: string
}

export default function DashboardPage() {
  const [profil, setProfil] = useState<Profil | null>(null)
  const [institution, setInstitution] = useState<Institution | null>(null)
  const [nbFormations, setNbFormations] = useState(0)
  const [nbTerminees, setNbTerminees] = useState(0)
  const [nbAttestations, setNbAttestations] = useState(0)
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
      if (ip?.institutions) setInstitution(ip.institutions as Institution)

      const { count: countFormations } = await supabase
        .from("formations")
        .select("id", { count: "exact" })
        .eq("est_publie", true)
        .eq("est_privee", false)
      setNbFormations(countFormations || 0)

      const { count: countAttestations } = await supabase
        .from("attestations")
        .select("id", { count: "exact" })
        .eq("profil_id", user.id)
      setNbAttestations(countAttestations || 0)

      setLoading(false)
    }
    getData()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

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
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold">LERNA</h1>
          <p className="text-xs text-white/50 mt-1">ancrer les compétences</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium">
            🏠 Accueil
          </a>
          <a href="/formations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors">
            📚 Mes formations
          </a>
          <a href="/progression" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors">
            📈 Ma progression
          </a>
          <a href="/attestations" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors">
            🎓 Attestations
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          {institution && (
            <div className="px-3 py-2 mb-2 rounded-lg bg-white/5">
              <p className="text-xs text-white/40">Institution</p>
              <p className="text-xs text-white/80 font-medium">{institution.nom}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
          >
            → Se déconnecter
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">
            Bonjour{profil?.prenom ? ", " + profil.prenom : ""} 👋
          </h2>
          <p className="text-gray-500 mt-1">Bienvenue sur votre espace de formation LERNA.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Formations disponibles</p>
            <p className="text-3xl font-bold text-[#1B2D5B] mt-1">{nbFormations}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">En cours</p>
            <p className="text-3xl font-bold text-[#3DBFA0] mt-1">{nbTerminees}</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-500">Attestations obtenues</p>
            <p className="text-3xl font-bold text-[#1B2D5B] mt-1">{nbAttestations}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1B2D5B]">Formations disponibles</h3>
            <a href="/formations" className="text-sm text-[#3DBFA0] hover:underline">Voir tout →</a>
          </div>
          <div className="text-center py-12 text-gray-400">
            <p className="text-4xl mb-3">📚</p>
            <p className="text-sm">Accédez au catalogue complet de formations.</p>
            <a href="/formations" className="mt-3 inline-block text-sm font-medium text-[#3DBFA0] hover:underline">
              Voir les formations →
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}