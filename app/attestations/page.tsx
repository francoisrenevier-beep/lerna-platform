"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/Sidebar"

type Attestation = {
  id: string
  created_at: string
  profil_id: string
  formation_id: string
  formations: {
    titre: string
    duree_estimee_minutes: number
  } | null
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

function numeroAttestation(id: string) {
  return "LERNA-" + id.slice(0, 8).toUpperCase()
}

function telechargerPDF(attestation: Attestation) {
  if (!attestation.formations) return
  const titre = attestation.formations.titre
  const date = formatDate(attestation.created_at)
  const duree = dureeHeures(attestation.formations.duree_estimee_minutes)
  const numero = numeroAttestation(attestation.id)

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Attestation — ${titre}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Georgia, 'Times New Roman', serif; background: white; color: #1B2D5B; }
    .page {
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto;
      padding: 24mm 20mm;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #eee;
    }
    .bandeau {
      width: 100%;
      height: 6px;
      background: linear-gradient(to right, #1B2D5B, #3DBFA0);
      margin-bottom: 40px;
      border-radius: 3px;
    }
    .logo { font-size: 36px; font-weight: bold; letter-spacing: 6px; color: #1B2D5B; margin-bottom: 6px; }
    .tagline { font-size: 11px; color: #3DBFA0; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 56px; }
    .titre-doc {
      font-size: 12px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #aaa;
      margin-bottom: 40px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      padding: 12px 32px;
    }
    .intro { font-size: 15px; color: #666; margin-bottom: 20px; font-style: italic; }
    .formation-titre {
      font-size: 30px;
      font-weight: bold;
      color: #1B2D5B;
      text-align: center;
      margin-bottom: 40px;
      line-height: 1.3;
      max-width: 460px;
    }
    .separateur { width: 64px; height: 4px; background: #3DBFA0; margin: 0 auto 48px; border-radius: 2px; }
    .infos { display: flex; gap: 64px; margin-bottom: 56px; }
    .info-item { text-align: center; }
    .info-label {
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #bbb;
      margin-bottom: 6px;
      font-family: Arial, sans-serif;
    }
    .info-valeur { font-size: 20px; font-weight: bold; color: #1B2D5B; }
    .numero {
      font-size: 9px;
      color: #ccc;
      letter-spacing: 2px;
      font-family: monospace;
      margin-top: 32px;
    }
    .bandeau-bas {
      width: 100%;
      height: 4px;
      background: linear-gradient(to right, #3DBFA0, #1B2D5B);
      margin-top: 40px;
      border-radius: 2px;
    }
    @media print {
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .page { border: none; }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="bandeau"></div>
    <div class="logo">LERNA</div>
    <div class="tagline">Ancrer les compétences</div>
    <div class="titre-doc">Attestation de formation</div>
    <div class="intro">certifie que la formation suivante a été complétée avec succès</div>
    <div class="formation-titre">${titre}</div>
    <div class="separateur"></div>
    <div class="infos">
      <div class="info-item">
        <div class="info-label">Date d'obtention</div>
        <div class="info-valeur">${date}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Durée de formation</div>
        <div class="info-valeur">${duree}</div>
      </div>
    </div>
    <div class="numero">N° ${numero}</div>
    <div class="bandeau-bas"></div>
  </div>
</body>
</html>`

  const fenetre = window.open("", "_blank")
  if (fenetre) {
    fenetre.document.write(html)
    fenetre.document.close()
    fenetre.focus()
    setTimeout(function () {
      fenetre.print()
    }, 400)
  }
}

export default function AttestationsPage() {
  const [attestations, setAttestations] = useState<Attestation[]>([])
  const [loading, setLoading] = useState(true)
  const [institution, setInstitution] = useState<string | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) {
        router.push("/connexion")
        return
      }

      const { data: profil } = await supabase
        .from("profils")
        .select("prenom")
        .eq("id", user.id)
        .single()

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
        .select("id, created_at, profil_id, formation_id, formations(titre, duree_estimee_minutes)")
        .eq("profil_id", user.id)
        .order("created_at", { ascending: false })

      if (data) setAttestations(data as unknown as Attestation[])
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
              <span className="text-3xl">🎓</span>
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
              return (
                <div
                  key={attestation.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex items-center justify-between gap-6"
                >
                  <div className="flex items-center gap-5 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-[#3DBFA0]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎓</span>
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
                          N° {numeroAttestation(attestation.id)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={function () {
                      telechargerPDF(attestation)
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1B2D5B] text-white text-sm font-medium hover:bg-[#1B2D5B]/90 transition-colors flex-shrink-0"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Télécharger PDF
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
