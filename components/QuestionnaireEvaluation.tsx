"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

type Props = {
  profilId: string
  formationId: string
  dejaEvalue: boolean
}

type Reponses = {
  clarte: number
  pertinenceTerrain: number
  nouveautesApprises: "oui" | "plutot-oui" | "plutot-non" | "non" | null
  recommandation: number
  commentaire: string
}

function EtoilesInput({ valeur, onChange }: { valeur: number; onChange: (v: number) => void }) {
  const [survol, setSurvol] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const active = i <= (survol || valeur)
        return (
          <button
            key={i}
            type="button"
            onMouseEnter={() => setSurvol(i)}
            onMouseLeave={() => setSurvol(0)}
            onClick={() => onChange(i)}
            className="transition-transform hover:scale-110 focus:outline-none"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill={active ? "#3DBFA0" : "none"} stroke={active ? "#3DBFA0" : "#d1d5db"} strokeWidth="1.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </button>
        )
      })}
    </div>
  )
}

const NOUVEAUTES_OPTIONS: { value: "oui" | "plutot-oui" | "plutot-non" | "non"; label: string }[] = [
  { value: "oui", label: "Oui" },
  { value: "plutot-oui", label: "Plutôt oui" },
  { value: "plutot-non", label: "Plutôt non" },
  { value: "non", label: "Non" },
]

export function QuestionnaireEvaluation({ profilId, formationId, dejaEvalue }: Props) {
  const [reponses, setReponses] = useState<Reponses>({
    clarte: 0,
    pertinenceTerrain: 0,
    nouveautesApprises: null,
    recommandation: 0,
    commentaire: "",
  })
  const [envoi, setEnvoi] = useState<"idle" | "loading" | "succes" | "erreur">("idle")
  const [erreurMsg, setErreurMsg] = useState("")

  if (dejaEvalue) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
        <div className="w-10 h-10 rounded-full bg-[#3DBFA0]/10 flex items-center justify-center mx-auto mb-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DBFA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <p className="text-[#1B2D5B] font-medium text-sm">Vous avez déjà évalué cette formation. Merci pour votre retour.</p>
      </div>
    )
  }

  if (envoi === "succes") {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[#3DBFA0] flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-[#1B2D5B] font-semibold text-base mb-2">Merci pour votre retour !</h3>
        <p className="text-gray-500 text-sm">Il nous aide à améliorer nos formations.</p>
      </div>
    )
  }

  const handleSubmit = async () => {
    if (!reponses.clarte || !reponses.pertinenceTerrain || !reponses.nouveautesApprises || !reponses.recommandation) {
      setErreurMsg("Veuillez répondre à toutes les questions obligatoires.")
      return
    }
    setErreurMsg("")
    setEnvoi("loading")

    const { error } = await supabase.from("evaluations_formations").insert({
      profil_id: profilId,
      formation_id: formationId,
      clarte: reponses.clarte,
      pertinence_terrain: reponses.pertinenceTerrain,
      nouveautes_apprises: reponses.nouveautesApprises,
      recommandation: reponses.recommandation,
      commentaire: reponses.commentaire || null,
    })

    if (error) {
      setErreurMsg("Une erreur est survenue. Veuillez réessayer.")
      setEnvoi("idle")
    } else {
      setEnvoi("succes")
    }
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-50">
        <h2 className="font-semibold text-[#1B2D5B] text-base">Votre avis nous aide à améliorer cette formation</h2>
        <p className="text-sm text-gray-400 mt-0.5">2 minutes pour partager votre expérience.</p>
      </div>

      <div className="px-6 py-5 space-y-6">
        {/* Q1 — Clarté */}
        <div>
          <p className="text-sm font-medium text-[#1B2D5B] mb-2">
            Le contenu était-il clair et accessible ?
          </p>
          <EtoilesInput valeur={reponses.clarte} onChange={(v) => setReponses((r) => ({ ...r, clarte: v }))} />
        </div>

        {/* Q2 — Pertinence terrain */}
        <div>
          <p className="text-sm font-medium text-[#1B2D5B] mb-2">
            Les exemples étaient-ils proches de votre réalité terrain ?
          </p>
          <EtoilesInput valeur={reponses.pertinenceTerrain} onChange={(v) => setReponses((r) => ({ ...r, pertinenceTerrain: v }))} />
        </div>

        {/* Q3 — Nouveautés */}
        <div>
          <p className="text-sm font-medium text-[#1B2D5B] mb-2">
            Avez-vous appris quelque chose de nouveau ?
          </p>
          <div className="flex flex-wrap gap-2">
            {NOUVEAUTES_OPTIONS.map((opt) => {
              const selectionne = reponses.nouveautesApprises === opt.value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setReponses((r) => ({ ...r, nouveautesApprises: opt.value }))}
                  className={
                    "px-4 py-2 rounded-lg text-sm font-medium border transition-colors " +
                    (selectionne
                      ? "bg-[#3DBFA0] text-white border-[#3DBFA0]"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#3DBFA0] hover:text-[#3DBFA0]")
                  }
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Q4 — Recommandation */}
        <div>
          <p className="text-sm font-medium text-[#1B2D5B] mb-2">
            Recommanderiez-vous cette formation à un collègue ?
          </p>
          <EtoilesInput valeur={reponses.recommandation} onChange={(v) => setReponses((r) => ({ ...r, recommandation: v }))} />
        </div>

        {/* Q5 — Commentaire */}
        <div>
          <p className="text-sm font-medium text-[#1B2D5B] mb-2">
            Un commentaire ou une suggestion ? <span className="font-normal text-gray-400">(optionnel)</span>
          </p>
          <textarea
            value={reponses.commentaire}
            onChange={(e) => setReponses((r) => ({ ...r, commentaire: e.target.value }))}
            placeholder="Partagez votre expérience..."
            rows={3}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#1B2D5B] placeholder-gray-400 focus:outline-none focus:border-[#3DBFA0] resize-none"
          />
        </div>

        {erreurMsg && (
          <p className="text-sm text-red-500">{erreurMsg}</p>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={envoi === "loading"}
          className="w-full py-3 rounded-lg bg-[#3DBFA0] text-white font-medium text-sm hover:bg-[#35a88e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {envoi === "loading" ? "Envoi en cours..." : "Envoyer mon évaluation"}
        </button>
      </div>
    </div>
  )
}
