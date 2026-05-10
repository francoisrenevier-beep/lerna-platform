"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter, usePathname } from "next/navigation"
import { QuestionnaireEvaluation } from "@/components/QuestionnaireEvaluation"

type Formation = {
  id: string
  titre: string
  slug: string
  duree_estimee_minutes: number
}

type ModuleSimple = {
  id: string
  titre: string
  ordre: number
}

type Profil = {
  prenom: string
  nom: string
}

type QuizModule = {
  moduleId: string
  moduleTitre: string
  score: number
  total: number
  savedAt: number
  questions: {
    question: string
    reponses: string[]
    bonneReponse: number
    explication: string
  }[]
  reponses: number[]
}

function dureeFormat(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  })
}

export default function BilanPage() {
  const pathname = usePathname()
  const router = useRouter()

  const [formation, setFormation] = useState<Formation | null>(null)
  const [modules, setModules] = useState<ModuleSimple[]>([])
  const [profil, setProfil] = useState<Profil | null>(null)
  const [userEmail, setUserEmail] = useState("")
  const [attestationDate, setAttestationDate] = useState<string | null>(null)
  const [attestationId, setAttestationId] = useState<string | null>(null)
  const [attestationPdfBase64, setAttestationPdfBase64] = useState<string | null>(null)
  const [quizRecap, setQuizRecap] = useState<QuizModule[]>([])
  const [loading, setLoading] = useState(true)
  const [downloadingAttestation, setDownloadingAttestation] = useState(false)
  const [downloadingMemo, setDownloadingMemo] = useState(false)
  const [openQuiz, setOpenQuiz] = useState<number | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [dejaEvalue, setDejaEvalue] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (!user) { router.push("/connexion"); return }
      setUserEmail(user.email ?? "")
      setUserId(user.id)

      const slug = pathname.split("/")[2]

      const { data: f } = await supabase
        .from("formations")
        .select("id, titre, slug, duree_estimee_minutes")
        .eq("slug", slug)
        .single()
      if (!f) { router.push("/formations"); return }
      setFormation(f)

      const { data: profilData } = await supabase
        .from("profils")
        .select("prenom, nom")
        .eq("id", user.id)
        .single()
      if (profilData) setProfil(profilData)

      // created_at peut ne pas exister : on essaie avec puis sans
      let att: { id: string; created_at?: string } | null = null
      const { data: attWithDate, error: attDateErr } = await supabase
        .from("attestations")
        .select("id, created_at")
        .eq("profil_id", user.id)
        .eq("formation_id", f.id)
        .maybeSingle()

      if (attDateErr?.message?.includes("created_at")) {
        const { data: attNoDate } = await supabase
          .from("attestations")
          .select("id")
          .eq("profil_id", user.id)
          .eq("formation_id", f.id)
          .maybeSingle()
        att = attNoDate ?? null
      } else {
        att = attWithDate
      }

      if (!att) {
        const { data: newAtt, error: upsertErr } = await supabase
          .from("attestations")
          .upsert({ profil_id: user.id, formation_id: f.id }, { onConflict: "profil_id,formation_id" })
          .select("id")
          .single()
        if (!upsertErr) att = newAtt
      }

      if (att) {
        setAttestationDate(att.created_at ?? null)
        setAttestationId(att.id)
        // Récupérer pdf_base64 séparément (colonne optionnelle selon migration)
        const { data: pdfData } = await supabase
          .from("attestations")
          .select("pdf_base64")
          .eq("id", att.id)
          .single()
        if (pdfData?.pdf_base64) setAttestationPdfBase64(pdfData.pdf_base64)
      }

      const { data: mods } = await supabase
        .from("modules")
        .select("id, titre, ordre")
        .eq("formation_id", f.id)
        .order("ordre")
      if (mods) setModules(mods)

      try {
        const key = "lerna_quiz_" + slug
        const raw = localStorage.getItem(key)
        if (raw) setQuizRecap(JSON.parse(raw))
      } catch {}

      // Vérifie si l'utilisateur a déjà évalué cette formation
      const { data: evalExistante } = await supabase
        .from("evaluations_formations")
        .select("id")
        .eq("profil_id", user.id)
        .eq("formation_id", f.id)
        .maybeSingle()
      setDejaEvalue(!!evalExistante)

      setLoading(false)
    }
    getData()
  }, [pathname, router])

  const handleDownloadAttestation = async () => {
    if (!formation) return
    setDownloadingAttestation(true)
    try {
      const filename = "attestation-lerna-" + (attestationId ?? formation.id).slice(0, 8) + ".pdf"
      const { downloadFromBase64, generateAttestation } = await import("@/lib/attestation")

      if (attestationPdfBase64) {
        downloadFromBase64(attestationPdfBase64, filename)
      } else {
        // Fallback : générer à la volée
        const { data: instData } = await supabase
          .from("institution_profils")
          .select("institutions(nom)")
          .eq("profil_id", (await supabase.auth.getUser()).data.user!.id)
          .eq("statut", "actif")
          .maybeSingle()
        const institution = instData?.institutions
          ? (instData.institutions as unknown as { nom: string }).nom
          : undefined
        const base64 = await generateAttestation({
          prenom: profil?.prenom ?? userEmail.split("@")[0] ?? "",
          nom: profil?.nom ?? "",
          formationTitre: formation.titre,
          dureeMinutes: formation.duree_estimee_minutes,
          dateObtention: attestationDate ?? new Date().toISOString(),
          attestationId: attestationId ?? formation.id,
          nbModules: modules.length,
          institution,
        })
        downloadFromBase64(base64, filename)
      }
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e)
      console.error("Erreur attestation:", e)
      alert("Erreur attestation : " + msg)
    } finally {
      setDownloadingAttestation(false)
    }
  }

  const handleDownloadMemo = async () => {
    if (!formation) return
    setDownloadingMemo(true)
    try {
      const { generateFicheMemo } = await import("@/lib/generateFicheMemo")
      const prenom = profil?.prenom ?? userEmail.split("@")[0] ?? ""
      const nom = profil?.nom ?? ""
      const blob = await generateFicheMemo({
        prenom,
        nom,
        formationTitre: formation.titre,
        dureeMinutes: formation.duree_estimee_minutes,
        dateCompletion: attestationDate ?? new Date().toISOString(),
        modules,
        quizRecap,
      })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "fiche-memo-" + formation.slug + ".pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e)
      console.error("Erreur fiche mémo:", e)
      alert("Erreur fiche mémo : " + msg)
    } finally {
      setDownloadingMemo(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#1B2D5B] text-sm">Chargement...</p>
      </div>
    )
  }

  const prenom = profil?.prenom ?? userEmail.split("@")[0] ?? ""

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1B2D5B] text-white">
        <div className="max-w-3xl mx-auto px-6 py-10 text-center">
          <div className="w-16 h-16 rounded-full bg-[#3DBFA0] flex items-center justify-center mx-auto mb-5">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            Félicitations{prenom ? ", " + prenom : ""} !
          </h1>
          <p className="text-white/70 text-base mb-1">
            Vous avez terminé la formation
          </p>
          <p className="text-[#3DBFA0] font-semibold text-lg">{formation?.titre}</p>
          {attestationDate && (
            <p className="text-white/50 text-sm mt-2">
              Complétée le {formatDate(attestationDate)}
              {formation && <> · {dureeFormat(formation.duree_estimee_minutes)}</>}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">

        {/* Téléchargements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={handleDownloadAttestation}
            disabled={downloadingAttestation || !formation}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-left hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1B2D5B]/10 flex items-center justify-center mb-3 group-hover:bg-[#1B2D5B]/20 transition-colors">
              {downloadingAttestation ? (
                <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2D5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2D5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              )}
            </div>
            <p className="font-semibold text-[#1B2D5B] text-sm mb-0.5">
              {downloadingAttestation ? "Génération..." : "Télécharger mon attestation"}
            </p>
            <p className="text-xs text-gray-400">Certificat officiel Learna en PDF</p>
          </button>

          <button
            onClick={handleDownloadMemo}
            disabled={downloadingMemo}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-left hover:shadow-md transition-shadow disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#3DBFA0]/10 flex items-center justify-center mb-3 group-hover:bg-[#3DBFA0]/20 transition-colors">
              {downloadingMemo ? (
                <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DBFA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DBFA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              )}
            </div>
            <p className="font-semibold text-[#1B2D5B] text-sm mb-0.5">
              {downloadingMemo ? "Génération..." : "Télécharger la fiche mémo"}
            </p>
            <p className="text-xs text-gray-400">Points clés et quiz de la formation</p>
          </button>
        </div>

        {/* Récapitulatif quiz */}
        {quizRecap.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-50">
              <h2 className="font-semibold text-[#1B2D5B]">Récapitulatif des quiz</h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Score global : {quizRecap.reduce((a, q) => a + q.score, 0)}/{quizRecap.reduce((a, q) => a + q.total, 0)} questions
              </p>
            </div>
            <div className="divide-y divide-gray-50">
              {quizRecap.map(function(qm, idx) {
                const pct = Math.round((qm.score / qm.total) * 100)
                const isOpen = openQuiz === idx
                return (
                  <div key={idx}>
                    <button
                      onClick={() => setOpenQuiz(isOpen ? null : idx)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${pct >= 70 ? "bg-[#3DBFA0]" : "bg-amber-400"}`}>
                          {qm.score}/{qm.total}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#1B2D5B]">{qm.moduleTitre || "Module " + (idx + 1)}</p>
                          <p className="text-xs text-gray-400">{pct}% de bonnes réponses</p>
                        </div>
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={"transition-transform flex-shrink-0 " + (isOpen ? "rotate-180" : "")}
                      >
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-4 space-y-3">
                        {qm.questions.map(function(q, qi) {
                          const choix = qm.reponses[qi]
                          const correct = choix === q.bonneReponse
                          return (
                            <div key={qi} className={"rounded-lg p-4 " + (correct ? "bg-[#3DBFA0]/8 border border-[#3DBFA0]/20" : "bg-red-50 border border-red-100")}>
                              <p className="text-sm font-medium text-[#1B2D5B] mb-2">{q.question}</p>
                              <div className="space-y-1 mb-2">
                                {q.reponses.map(function(r, ri) {
                                  const isChosen = ri === choix
                                  const isBonne = ri === q.bonneReponse
                                  let cls = "text-xs px-3 py-1.5 rounded-md "
                                  if (isBonne) cls += "bg-[#3DBFA0]/15 text-[#1B2D5B] font-medium"
                                  else if (isChosen && !correct) cls += "bg-red-100 text-red-700 line-through"
                                  else cls += "text-gray-400"
                                  return (
                                    <div key={ri} className={cls}>
                                      {isBonne ? "✓ " : isChosen && !correct ? "✗ " : "  "}{r}
                                    </div>
                                  )
                                })}
                              </div>
                              <p className="text-xs text-gray-500 italic">{q.explication}</p>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Questionnaire de satisfaction */}
        {formation && userId && (
          <QuestionnaireEvaluation
            profilId={userId}
            formationId={formation.id}
            dejaEvalue={dejaEvalue}
          />
        )}

        {/* Modules complétés */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50">
            <h2 className="font-semibold text-[#1B2D5B]">Modules complétés</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {modules.map(function(m) {
              return (
                <div key={m.id} className="px-6 py-3 flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#3DBFA0] flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#1B2D5B]">{m.titre}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-center pb-4">
          <a
            href="/formations"
            className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-500 hover:border-gray-300 transition-colors"
          >
            Mes formations
          </a>
          <a
            href="/attestations"
            className="px-5 py-2.5 rounded-lg bg-[#1B2D5B] text-white text-sm font-medium hover:bg-[#152347] transition-colors"
          >
            Voir mes attestations
          </a>
        </div>
      </div>
    </div>
  )
}
