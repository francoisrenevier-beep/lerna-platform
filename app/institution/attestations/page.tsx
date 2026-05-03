"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { InstitutionSidebar } from "@/components/InstitutionSidebar"

type AttestationLigne = {
  id: string
  profil_id: string
  prenom: string
  nom: string
  formation_titre: string
  created_at: string
}

function dateFormat(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })
}

function idCourt(id: string) {
  return id.replace(/-/g, "").slice(0, 8).toUpperCase()
}

export default function AttestationsInstitutionPage() {
  const [institutionNom, setInstitutionNom] = useState("")
  const [attestations, setAttestations] = useState<AttestationLigne[]>([])
  const [filtreCollab, setFiltreCollab] = useState("")
  const [filtreFormation, setFiltreFormation] = useState("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) { router.push("/connexion"); return }

      const { data: ip } = await supabase
        .from("institution_profils")
        .select("role, institution_id, institutions(id, nom)")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .limit(1)
        .single()

      if (!ip || ip.role !== "responsable") { router.push("/dashboard"); return }

      const inst = ip.institutions as { id: string; nom: string }
      setInstitutionNom(inst.nom)

      const { data: collabIps } = await supabase
        .from("institution_profils")
        .select("profil_id")
        .eq("institution_id", inst.id)
        .eq("role", "collaborateur")

      const collabIds = collabIps?.map((c) => c.profil_id) ?? []
      if (collabIds.length === 0) { setLoading(false); return }

      const { data: atts } = await supabase
        .from("attestations")
        .select("id, profil_id, created_at, formations(titre)")
        .in("profil_id", collabIds)
        .order("created_at", { ascending: false })

      if (!atts) { setLoading(false); return }

      const profilIds = [...new Set(atts.map((a) => a.profil_id))]
      const { data: profils } = await supabase
        .from("profils")
        .select("id, prenom, nom")
        .in("id", profilIds)

      const profilMap = new Map(profils?.map((p) => [p.id, p]) ?? [])

      const lignes: AttestationLigne[] = atts.map((a) => {
        const p = profilMap.get(a.profil_id)
        const f = a.formations as { titre: string } | null
        return {
          id: a.id,
          profil_id: a.profil_id,
          prenom: p?.prenom || "",
          nom: p?.nom || "",
          formation_titre: f?.titre || "—",
          created_at: a.created_at,
        }
      })

      setAttestations(lignes)
      setLoading(false)
    }
    getData()
  }, [router])

  const lignesFiltrees = attestations.filter((a) => {
    const nomComplet = `${a.prenom} ${a.nom}`.toLowerCase()
    const matchCollab = filtreCollab === "" || nomComplet.includes(filtreCollab.toLowerCase())
    const matchFormation = filtreFormation === "" || a.formation_titre.toLowerCase().includes(filtreFormation.toLowerCase())
    return matchCollab && matchFormation
  })

  const exportCSV = () => {
    const header = ["Collaborateur", "Formation", "Date d'obtention", "Numéro unique"]
    const rows = lignesFiltrees.map((a) => [
      `${a.prenom} ${a.nom}`,
      a.formation_titre,
      dateFormat(a.created_at),
      idCourt(a.id),
    ])
    const csv = [header, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n")
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `attestations-${institutionNom.replace(/\s+/g, "-").toLowerCase()}.csv`
    a.click()
    URL.revokeObjectURL(url)
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
      <InstitutionSidebar pageActive="attestations" institution={institutionNom} />
      <main className="flex-1 p-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#1B2D5B]">Attestations de l'équipe</h2>
            <p className="text-gray-500 mt-1">{lignesFiltrees.length} attestation{lignesFiltrees.length !== 1 ? "s" : ""} affichée{lignesFiltrees.length !== 1 ? "s" : ""}.</p>
          </div>
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-[#1B2D5B] text-white text-sm font-medium rounded-lg hover:bg-[#152347] transition-colors"
          >
            ↓ Exporter CSV
          </button>
        </div>

        {/* Filtres */}
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={filtreCollab}
            onChange={(e) => setFiltreCollab(e.target.value)}
            placeholder="Filtrer par collaborateur..."
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
          />
          <input
            type="text"
            value={filtreFormation}
            onChange={(e) => setFiltreFormation(e.target.value)}
            placeholder="Filtrer par formation..."
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Collaborateur</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formation</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date d'obtention</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Numéro unique</th>
              </tr>
            </thead>
            <tbody>
              {lignesFiltrees.map((a) => (
                <tr key={a.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-3 font-medium text-[#1B2D5B]">{a.prenom} {a.nom}</td>
                  <td className="px-4 py-3 text-gray-700">{a.formation_titre}</td>
                  <td className="px-4 py-3 text-gray-500">{dateFormat(a.created_at)}</td>
                  <td className="px-4 py-3">
                    <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">{idCourt(a.id)}</span>
                  </td>
                </tr>
              ))}
              {lignesFiltrees.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-400 text-sm">
                    Aucune attestation trouvée.
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
