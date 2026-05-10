"use client"

import { useState } from "react"

const DEFAULT_DATA = {
  prenom: "Jean",
  nom: "Dupont",
  formation_titre: "Protection de la personnalité et handicap (PPH)",
  formation_categorie: "Accompagnement",
  duree_heures: "8h",
  date_obtention: new Date().toISOString().slice(0, 10),
  modules_completes: 5,
  modules_total: 5,
  institution_nom: "Fondation Les Buissonnets",
  numero_verification: "LEARNA-A1B2-C3D4",
}

export default function TestAttestationPage() {
  const [data, setData] = useState(DEFAULT_DATA)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      const res = await fetch("/api/attestation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? `Erreur HTTP ${res.status}`)
      }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `test-attestation-${data.nom.toLowerCase()}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => URL.revokeObjectURL(url), 1000)
      setSuccess(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e))
    } finally {
      setLoading(false)
    }
  }

  const field = (
    label: string,
    key: keyof typeof DEFAULT_DATA,
    type: "text" | "number" | "date" = "text"
  ) => (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      <input
        type={type}
        value={String(data[key])}
        onChange={(e) =>
          setData((d) => ({
            ...d,
            [key]: type === "number" ? Number(e.target.value) : e.target.value,
          }))
        }
        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
      />
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1B2D5B]">Test génération attestation</h1>
          <p className="text-gray-500 text-sm mt-1">
            Page de test — modifie les données et génère le PDF directement.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
          {field("Prénom", "prenom")}
          {field("Nom", "nom")}
          {field("Titre de la formation", "formation_titre")}
          {field("Catégorie", "formation_categorie")}
          {field("Durée (ex: 8h, 12h30)", "duree_heures")}
          {field("Date d'obtention", "date_obtention", "date")}
          {field("Modules complétés", "modules_completes", "number")}
          {field("Modules total", "modules_total", "number")}
          {field("Institution (laisser vide si aucune)", "institution_nom")}
          {field("Numéro de vérification", "numero_verification")}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
              {error}
            </div>
          )}
          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm text-green-700">
              PDF généré et téléchargé avec succès.
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-2 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1B2D5B] text-white text-sm font-medium hover:bg-[#1B2D5B]/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Génération en cours…
              </>
            ) : (
              "Générer le PDF"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
