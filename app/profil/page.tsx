"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"

export default function ProfilPage() {
  const [userId, setUserId] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [institution, setInstitution] = useState("")
  const [dateInscription, setDateInscription] = useState("")
  const [nbFormationsCompletes, setNbFormationsCompletes] = useState(0)
  const [nbAttestations, setNbAttestations] = useState(0)
  const [nouveauMdp, setNouveauMdp] = useState("")
  const [confirmMdp, setConfirmMdp] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [messageProfil, setMessageProfil] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [messageMdp, setMessageMdp] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) {
        router.push("/connexion")
        return
      }

      setUserId(user.id)
      setEmail(user.email || "")

      const date = new Date(user.created_at)
      setDateInscription(date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }))

      const { data: p } = await supabase
        .from("profils")
        .select("prenom, nom")
        .eq("id", user.id)
        .single()
      if (p) {
        setPrenom(p.prenom || "")
        setNom(p.nom || "")
      }

      const { data: ip } = await supabase
        .from("institution_profils")
        .select("institutions(nom)")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()
      if (ip?.institutions) {
        const inst = ip.institutions as { nom: string }
        setInstitution(inst.nom || "")
      }

      const { count: countAttestations } = await supabase
        .from("attestations")
        .select("id", { count: "exact" })
        .eq("profil_id", user.id)
      const total = countAttestations || 0
      setNbFormationsCompletes(total)
      setNbAttestations(total)

      setLoading(false)
    }
    getData()
  }, [router])

  const handleSaveProfil = async () => {
    if (!userId) return
    setSaving(true)
    setMessageProfil(null)

    const { error } = await supabase
      .from("profils")
      .update({ prenom, nom })
      .eq("id", userId)

    setSaving(false)
    if (error) {
      setMessageProfil({ type: "error", text: "Erreur lors de la sauvegarde." })
    } else {
      setMessageProfil({ type: "success", text: "Profil mis à jour avec succès." })
    }
  }

  const handleChangeMdp = async () => {
    setMessageMdp(null)
    if (nouveauMdp !== confirmMdp) {
      setMessageMdp({ type: "error", text: "Les mots de passe ne correspondent pas." })
      return
    }
    if (nouveauMdp.length < 6) {
      setMessageMdp({ type: "error", text: "Le mot de passe doit contenir au moins 6 caractères." })
      return
    }

    const { error } = await supabase.auth.updateUser({ password: nouveauMdp })
    if (error) {
      setMessageMdp({ type: "error", text: "Erreur : " + error.message })
    } else {
      setMessageMdp({ type: "success", text: "Mot de passe modifié avec succès." })
      setNouveauMdp("")
      setConfirmMdp("")
    }
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
      <Sidebar pageActive="profil" institution={institution} />

      <main className="flex-1 p-8">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#1B2D5B]">Mon profil</h2>
            <p className="text-gray-500 mt-1">Gérez vos informations personnelles et votre mot de passe.</p>
          </div>

          {/* Informations personnelles */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-semibold text-[#1B2D5B] mb-5">Informations personnelles</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                readOnly
                className="w-full border border-gray-100 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
              />
            </div>

            {messageProfil && (
              <div
                className={
                  "mb-4 px-4 py-3 rounded-lg text-sm border " +
                  (messageProfil.type === "success"
                    ? "bg-[#3DBFA0]/10 text-[#3DBFA0] border-[#3DBFA0]/20"
                    : "bg-red-50 text-red-600 border-red-200")
                }
              >
                {messageProfil.text}
              </div>
            )}

            <button
              onClick={handleSaveProfil}
              disabled={saving}
              className="bg-[#1B2D5B] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#1B2D5B]/90 transition-colors disabled:opacity-50"
            >
              {saving ? "Enregistrement..." : "Enregistrer"}
            </button>
          </div>

          {/* Changer le mot de passe */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-semibold text-[#1B2D5B] mb-5">Changer le mot de passe</h3>

            <div className="space-y-4 mb-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                <input
                  type="password"
                  value={nouveauMdp}
                  onChange={(e) => setNouveauMdp(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                <input
                  type="password"
                  value={confirmMdp}
                  onChange={(e) => setConfirmMdp(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] focus:border-transparent"
                />
              </div>
            </div>

            {messageMdp && (
              <div
                className={
                  "mb-4 px-4 py-3 rounded-lg text-sm border " +
                  (messageMdp.type === "success"
                    ? "bg-[#3DBFA0]/10 text-[#3DBFA0] border-[#3DBFA0]/20"
                    : "bg-red-50 text-red-600 border-red-200")
                }
              >
                {messageMdp.text}
              </div>
            )}

            <button
              onClick={handleChangeMdp}
              disabled={!nouveauMdp || !confirmMdp}
              className="bg-[#1B2D5B] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#1B2D5B]/90 transition-colors disabled:opacity-50"
            >
              Modifier le mot de passe
            </button>
          </div>

          {/* Informations du compte */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#1B2D5B] mb-5">Informations du compte</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-1">Institution</p>
                <p className="text-sm font-medium text-gray-700">{institution || "—"}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-1">Membre depuis</p>
                <p className="text-sm font-medium text-gray-700">{dateInscription}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-1">Formations complétées</p>
                <p className="text-2xl font-bold text-[#3DBFA0]">{nbFormationsCompletes}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-1">Attestations obtenues</p>
                <p className="text-2xl font-bold text-[#1B2D5B]">{nbAttestations}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
