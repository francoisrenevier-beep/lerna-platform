"use client"

export const dynamic = "force-dynamic"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"
import { numeroAttestation } from "@/lib/generateAttestation"

type Attestation = {
  id: string
  created_at: string
  profil_id: string
  formation_id: string
  pdf_url: string | null
  formations: {
    titre: string
    duree_estimee_minutes: number
  } | null
}

type Profil = {
  prenom: string
  nom: string
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function dureeHeures(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (m === 0) return h + "h"
  return h + "h" + m
}

export default function AttestationsPage() {
  const [attestations, setAttestations] = useState<Attestation[]>([])
  const [profil, setProfil] = useState<Profil | null>(null)
  const [loading, setLoading] = useState(true)
  const [institution, setInstitution] = useState<string | undefined>(undefined)
  const [downloadingId, setDownloadingId] = useState<string | null>(null)
  const [userEmail, setUserEmail] = useState<string>("")
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) {
        router.push("/connexion")
        return
      }
      setUserEmail(user.email ?? "")

      const { data: profilData } = await supabase
        .from("profils")
        .select("prenom, nom")
        .eq("id", user.id)
        .single()

      if (profilData) setProfil(profilData)

      const { data: institutionData } = await supabase
        .from("institution_profils")
        .select("institutions(nom)")
        .eq("profil_id", user.id)
        .eq("statut", "actif")
        .maybeSingle()

      if (institutionData?.institutions) {
        const inst = institutionData.institutions as unknown as { nom: string }
        setInstitution(inst.nom)
      }

      const { data } = await supabase
        .from("attestations")
        .select("id, created_at, profil_id, formation_id, pdf_url, formations(titre, duree_estimee_minutes)")
        .eq("profil_id", user.id)
        .order("created_at", { ascending: false })

      if (data) setAttestations(data as unknown as Attestation[])
      setLoading(false)
    }
    getData()
  }, [router])

  const handleDownload = async (attestation: Attestation) => {
    setDownloadingId(attestation.id)
    try {
      const { generateAttestationPDF } = await import("@/lib/generateAttestation")
      const prenom = profil?.prenom ?? userEmail.split("@")[0] ?? ""
      const nom = profil?.nom ?? ""
      const blob = await generateAttestationPDF({
        prenom,
        nom,
        formationTitre: attestation.formations?.titre ?? "Formation",
        dureeMinutes: attestation.formations?.duree_estimee_minutes ?? 0,
        dateObtention: attestation.created_at,
        attestationId: attestation.id,
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `attestation-lerna-${attestation.id.slice(0, 8)}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch (e) {
      console.error("Erreur téléchargement PDF:", e)
      alert("Erreur lors de la génération du PDF. Vérifiez la console.")
    } finally {
      setDownloadingId(null)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  const nb = attestations.length

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar pageActive="attestations" institution={institution} />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1B2D5B]">Mes attestations</h2>
          <p className="text-gray-500 mt-1">
            {nb === 0
              ? "Aucune attestation pour le moment."
              : nb + " attestation" + (nb > 1 ? "s" : "") + " obtenue" + (nb > 1 ? "s" : "")}
          </p>
        </div>

        {nb === 0 ? (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-16 text-center max-w-lg">
            <div className="w-16 h-16 rounded-full bg-[#3DBFA0]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3DBFA0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1B2D5B] mb-2">Aucune attestation</h3>
            <p className="text-gray-500 text-sm mb-6">
              Terminez une formation pour obtenir votre première attestation.
            </p>
            <a
              href="/formations"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#3DBFA0] hover:underline"
            >
              Voir les formations →
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-4 max-w-3xl">
            {attestations.map(function (attestation) {
              const f = attestation.formations
              const isDownloading = downloadingId === attestation.id
              return (
                <div
                  key={attestation.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div className="h-1 bg-gradient-to-r from-[#1B2D5B] to-[#3DBFA0]" />
                  <div className="p-6 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-5 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-[#3DBFA0]/10 flex items-center justify-center flex-shrink-0">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3DBFA0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="6"/>
                          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-[#1B2D5B] truncate">
                          {f ? f.titre : "Formation"}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-1">
                          <span className="text-xs text-gray-400">
                            Obtenu le {formatDate(attestation.created_at)}
                          </span>
                          <span className="text-gray-200 text-xs">·</span>
                          <span className="text-xs text-gray-400">
                            {f ? dureeHeures(f.duree_estimee_minutes) : "—"}
                          </span>
                          <span className="text-gray-200 text-xs">·</span>
                          <span className="text-xs font-mono text-[#3DBFA0]">
                            {numeroAttestation(attestation.id)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDownload(attestation)}
                      disabled={isDownloading}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1B2D5B] text-white text-sm font-medium hover:bg-[#1B2D5B]/90 transition-colors flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isDownloading ? (
                        <>
                          <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                          </svg>
                          Génération...
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                          </svg>
                          Télécharger PDF
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
