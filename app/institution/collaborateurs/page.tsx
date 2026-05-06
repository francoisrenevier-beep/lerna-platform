"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { InstitutionSidebar } from "@/components/InstitutionSidebar"

type Collaborateur = {
  profil_id: string
  statut: string
  created_at: string | null
  prenom: string
  nom: string
  secteur: string | null
  nb_formations_completes: number
}

type ModalConfirmation = {
  profilId: string
  nomComplet: string
}

function dateFormat(d: string | null) {
  if (!d) return "—"
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
}

export default function CollaborateursPage() {
  const [institutionId, setInstitutionId] = useState<string | null>(null)
  const [institutionNom, setInstitutionNom] = useState("")
  const [codeAcces, setCodeAcces] = useState("")
  const [collaborateurs, setCollaborateurs] = useState<Collaborateur[]>([])
  const [recherche, setRecherche] = useState("")
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [modal, setModal] = useState<ModalConfirmation | null>(null)
  const router = useRouter()

  const loadCollaborateurs = async (instId: string) => {
    const { data: ips, error: ipsError } = await supabase
      .from("institution_profils")
      .select("profil_id, statut, secteur, created_at")
      .eq("institution_id", instId)
      .eq("role", "collaborateur")
      .order("created_at", { ascending: false, nullsFirst: false })

    if (!ips || ips.length === 0) { setCollaborateurs([]); return }

    const profilIds = ips.map((ip) => ip.profil_id)
    const { data: profils } = await supabase
      .from("profils")
      .select("id, prenom, nom")
      .in("id", profilIds)
    const profilMap = new Map(profils?.map((p) => [p.id, p]) ?? [])

    const collabs: Collaborateur[] = await Promise.all(
      ips.map(async (ip) => {
        const profil = profilMap.get(ip.profil_id)

        const { count: nbAtt } = await supabase
          .from("attestations")
          .select("id", { count: "exact" })
          .eq("profil_id", ip.profil_id)

        return {
          profil_id: ip.profil_id,
          statut: ip.statut,
          created_at: (ip as any).created_at ?? null,
          prenom: profil?.prenom || "",
          nom: profil?.nom || "",
          secteur: ip.secteur || null,
          nb_formations_completes: nbAtt || 0,
        }
      })
    )
    setCollaborateurs(collabs)
  }

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
      setInstitutionId(institutionId)

      const { data: inst } = await supabase
        .from("institutions")
        .select("nom, code_acces")
        .eq("id", institutionId)
        .single()

      setInstitutionNom(inst?.nom || "")
      setCodeAcces(inst?.code_acces || "")

      await loadCollaborateurs(institutionId)
      setLoading(false)
    }
    getData()
  }, [router])

  const supprimerAcces = async (profilId: string) => {
    if (!institutionId) return
    setActionLoading(profilId)
    await supabase
      .from("institution_profils")
      .update({ statut: "inactif" })
      .eq("profil_id", profilId)
      .eq("institution_id", institutionId)
    setModal(null)
    await loadCollaborateurs(institutionId)
    setActionLoading(null)
  }

  const reactiver = async (profilId: string) => {
    if (!institutionId) return
    setActionLoading(profilId)
    await supabase
      .from("institution_profils")
      .update({ statut: "actif" })
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

  const collaborateursFiltres = collaborateurs.filter((c) => {
    if (!recherche) return true
    const nom = `${c.prenom} ${c.nom}`.toLowerCase()
    return nom.includes(recherche.toLowerCase())
  })

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
        <div className="flex items-start justify-between mb-6">
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

        {/* Recherche */}
        <div className="mb-4">
          <input
            type="text"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher par nom..."
            className="w-full max-w-sm border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Collaborateur</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Secteur / Groupe</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Inscription</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formations</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {collaborateursFiltres.map((c) => (
                <tr
                  key={c.profil_id}
                  className={`border-b border-gray-50 last:border-0 transition-opacity ${c.statut === "inactif" ? "opacity-40" : ""}`}
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-[#1B2D5B]">{c.prenom} {c.nom}</p>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-sm">{c.secteur || <span className="text-gray-300 italic">—</span>}</td>
                  <td className="px-4 py-3 text-gray-500">{dateFormat(c.created_at)}</td>
                  <td className="px-4 py-3 text-center font-medium text-[#3DBFA0]">{c.nb_formations_completes}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.statut === "actif" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {c.statut === "actif" ? "Actif" : "Inactif"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    {c.statut === "actif" ? (
                      <button
                        onClick={() => setModal({ profilId: c.profil_id, nomComplet: `${c.prenom} ${c.nom}` })}
                        disabled={actionLoading === c.profil_id}
                        className="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 bg-red-50 text-red-600 hover:bg-red-100"
                      >
                        Supprimer l'accès
                      </button>
                    ) : (
                      <button
                        onClick={() => reactiver(c.profil_id)}
                        disabled={actionLoading === c.profil_id}
                        className="text-xs px-3 py-1.5 rounded-lg font-medium transition-colors disabled:opacity-50 bg-green-50 text-green-600 hover:bg-green-100"
                      >
                        {actionLoading === c.profil_id ? "..." : "Réactiver"}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {collaborateursFiltres.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-400 text-sm">
                    {recherche ? "Aucun collaborateur ne correspond à cette recherche." : "Aucun collaborateur inscrit pour le moment."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal de confirmation */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-bold text-[#1B2D5B] mb-3">Supprimer l'accès</h3>
            <p className="text-sm text-gray-600 mb-6">
              Êtes-vous sûr de vouloir supprimer l'accès de <span className="font-semibold text-[#1B2D5B]">{modal.nomComplet}</span> ?
              Cette personne ne pourra plus se connecter à la plateforme.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setModal(null)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => supprimerAcces(modal.profilId)}
                disabled={actionLoading === modal.profilId}
                className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50 font-medium"
              >
                {actionLoading === modal.profilId ? "Suppression..." : "Supprimer l'accès"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
