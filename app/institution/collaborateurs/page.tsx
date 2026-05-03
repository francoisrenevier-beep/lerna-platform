"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { InstitutionSidebar } from "@/components/InstitutionSidebar"

type Collaborateur = {
  profil_id: string
  statut: string
  created_at: string
  prenom: string
  nom: string
  nb_formations: number
  nb_attestations: number
}

function dateFormat(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
}

export default function CollaborateursPage() {
  const [institutionId, setInstitutionId] = useState<string | null>(null)
  const [institutionNom, setInstitutionNom] = useState("")
  const [codeAcces, setCodeAcces] = useState("")
  const [collaborateurs, setCollaborateurs] = useState<Collaborateur[]>([])
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const router = useRouter()

  const loadCollaborateurs = async (instId: string) => {
    const { data: ips } = await supabase
      .from("institution_profils")
      .select("profil_id, statut, created_at, profils(prenom, nom)")
      .eq("institution_id", instId)
      .eq("role", "collaborateur")
      .order("created_at", { ascending: false })

    if (!ips) { setCollaborateurs([]); return }

    const collabs: Collaborateur[] = await Promise.all(
      ips.map(async (ip) => {
        const profil = ip.profils as { prenom: string; nom: string } | null

        const { data: prog } = await supabase
          .from("progression")
          .select("formation_id")
          .eq("profil_id", ip.profil_id)
        const nbFormations = new Set(prog?.map((p) => p.formation_id) ?? []).size

        const { count: nbAtt } = await supabase
          .from("attestations")
          .select("id", { count: "exact" })
          .eq("profil_id", ip.profil_id)

        return {
          profil_id: ip.profil_id,
          statut: ip.statut,
          created_at: ip.created_at,
          prenom: profil?.prenom || "",
          nom: profil?.nom || "",
          nb_formations: nbFormations,
          nb_attestations: nbAtt || 0,
        }
      })
    )
    setCollaborateurs(collabs)
  }

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) { router.push("/connexion"); return }

      const { data: ip } = await supabase
        .from("institution_profils")
        .select("role, institution_id, institutions(id, nom, code_acces)")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()

      if (!ip || ip.role !== "responsable") { router.push("/dashboard"); return }

      const inst = ip.institutions as { id: string; nom: string; code_acces: string }
      setInstitutionId(inst.id)
      setInstitutionNom(inst.nom)
      setCodeAcces(inst.code_acces || "")

      await loadCollaborateurs(inst.id)
      setLoading(false)
    }
    getData()
  }, [router])

  const toggleStatut = async (profilId: string, statutActuel: string) => {
    if (!institutionId) return
    setActionLoading(profilId)
    const newStatut = statutActuel === "actif" ? "inactif" : "actif"
    await supabase
      .from("institution_profils")
      .update({ statut: newStatut })
      .eq("profil_id", profilId)
      .eq("institution_id", institutionId)
    await loadCollaborateurs(institutionId)
    setActionLoading(null)
  }

  const copierCode = () => {
    navigator.clipboard.writeText(codeAcces)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
      <InstitutionSidebar pageActive="collaborateurs" institution={institutionNom} />
      <main className="flex-1 p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1B2D5B]">Mes collaborateurs</h2>
            <p className="text-gray-500 mt-1">{collaborateurs.length} collaborateur{collaborateurs.length !== 1 ? "s" : ""} dans votre institution.</p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
            <div>
              <p className="text-xs text-gray-400">Code institutionnel</p>
              <p className="text-sm font-mono font-bold text-[#1B2D5B]">{codeAcces}</p>
            </div>
            <button
              onClick={copierCode}
              className="ml-2 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#3DBFA0] text-white hover:bg-[#2ea88b] transition-colors"
            >
              {copied ? "Copié ✓" : "Copier"}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Collaborateur</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Inscription</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formations</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Attestations</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {collaborateurs.map((c) => (
                <tr
                  key={c.profil_id}
                  className={`border-b border-gray-50 last:border-0 ${c.statut === "inactif" ? "opacity-50" : ""}`}
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-[#1B2D5B]">{c.prenom} {c.nom}</p>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{dateFormat(c.created_at)}</td>
                  <td className="px-4 py-3 text-center font-medium text-gray-700">{c.nb_formations}</td>
                  <td className="px-4 py-3 text-center font-medium text-[#3DBFA0]">{c.nb_attestations}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.statut === "actif" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {c.statut === "actif" ? "Actif" : "Inactif"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => toggleStatut(c.profil_id, c.statut)}
                      disabled={actionLoading === c.profil_id}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 ${
                        c.statut === "actif"
                          ? "bg-red-50 text-red-600 hover:bg-red-100"
                          : "bg-green-50 text-green-600 hover:bg-green-100"
                      }`}
                    >
                      {actionLoading === c.profil_id ? "..." : c.statut === "actif" ? "Désactiver" : "Réactiver"}
                    </button>
                  </td>
                </tr>
              ))}
              {collaborateurs.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-400 text-sm">
                    Aucun collaborateur inscrit pour le moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
