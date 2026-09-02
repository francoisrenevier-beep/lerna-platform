"use client"

import { useState } from "react"

import type { QuestionQuiz } from "@/lib/decouverte/types"

/**
 * Questionnaire du module en accès libre.
 *
 * Reprend le déroulé et l'apparence de components/module/Quiz.tsx — questions
 * et réponses mélangées, correction immédiate, explication à chaque réponse —
 * avec trois différences voulues par l'accès libre :
 *
 *   — aucun seuil de réussite. La version plateforme bloque en dessous de 70 %
 *     et ne propose que de recommencer : c'est cohérent quand le module doit
 *     être validé, c'est une friction quand il sert de preuve ;
 *   — aucun compte, aucune écriture de validation, aucun e-mail demandé ni
 *     pour répondre ni pour voir le résultat ;
 *   — le résultat est rendu par l'écran de fin, qui l'inscrit dans son ordre à
 *     lui : ce qui a été appris d'abord, l'offre ensuite.
 *
 * Le composant plateforme n'est pas modifié : il est utilisé par plus de
 * quatre-vingts modules dont la validation dépend du seuil.
 */

function melangerTableau<T>(source: T[]): T[] {
  const resultat = [...source]
  for (let i = resultat.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[resultat[i], resultat[j]] = [resultat[j], resultat[i]]
  }
  return resultat
}

export function melanger(questions: QuestionQuiz[]): QuestionQuiz[] {
  return melangerTableau(questions).map((q) => {
    const indices = melangerTableau(q.reponses.map((_, i) => i))
    return {
      ...q,
      reponses: indices.map((i) => q.reponses[i]),
      bonneReponse: indices.indexOf(q.bonneReponse),
    }
  })
}

export function QuizLibre({
  questions,
  onTermine,
}: {
  questions: QuestionQuiz[]
  onTermine: (score: number, total: number, detail: { questions: QuestionQuiz[]; reponses: number[] }) => void
}) {
  const [melangees] = useState(() => melanger(questions))
  const [reponses, setReponses] = useState<number[]>(() => Array(questions.length).fill(-1))
  const [index, setIndex] = useState(0)
  const [validee, setValidee] = useState(false)

  const question = melangees[index]
  const choisie = reponses[index]
  const correct = choisie === question.bonneReponse
  const derniere = index === melangees.length - 1

  const valider = () => {
    if (choisie === -1) return
    setValidee(true)
  }

  const suivant = () => {
    setValidee(false)
    if (!derniere) {
      setIndex(index + 1)
      return
    }
    const score = reponses.filter((r, i) => r === melangees[i].bonneReponse).length
    onTermine(score, melangees.length, { questions: melangees, reponses })
  }

  return (
    <section
      aria-labelledby="quiz-titre"
      className="mb-6 rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="mb-1 text-xs uppercase tracking-widest text-gray-400">Quiz du module</p>
          <h2 id="quiz-titre" className="text-lg font-bold text-[#1B2D5B]">
            Vérifiez votre compréhension
          </h2>
        </div>
        <span className="flex-shrink-0 text-sm text-gray-400">
          {index + 1} / {melangees.length}
        </span>
      </div>

      <div
        className="mb-8 h-1 w-full rounded-full bg-gray-100"
        role="progressbar"
        aria-valuenow={index + 1}
        aria-valuemin={1}
        aria-valuemax={melangees.length}
        aria-label="Avancement dans le questionnaire"
      >
        <div
          className="h-1 rounded-full bg-[#3DBFA0] transition-all"
          style={{ width: `${((index + 1) / melangees.length) * 100}%` }}
        />
      </div>

      {/* De vrais boutons radio : la navigation aux flèches entre les réponses
          d'une même question est attendue par les lecteurs d'écran, et c'est
          ce que la liste de <button> de la version plateforme ne donne pas. */}
      <fieldset disabled={validee} className="mb-6">
        <legend className="mb-6 text-base font-semibold text-[#1B2D5B]">{question.question}</legend>
        <div className="space-y-3">
          {question.reponses.map((reponse, i) => {
            let style = "border-gray-200 text-gray-700 hover:border-[#3DBFA0] hover:bg-[#3DBFA0]/5"
            if (choisie === i && !validee) {
              style = "border-[#3DBFA0] border-2 bg-[#3DBFA0]/10 text-[#1B2D5B] font-medium"
            }
            if (validee && i === question.bonneReponse) {
              style = "border-[#3DBFA0] border-2 bg-[#3DBFA0]/10 text-[#1B2D5B] font-medium"
            }
            if (validee && choisie === i && i !== question.bonneReponse) {
              style = "border-red-400 border-2 bg-red-50 text-red-700"
            }
            return (
              <label
                key={i}
                className={`block cursor-pointer rounded-lg border px-4 py-3 text-sm transition-all peer-focus-visible:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#3DBFA0] ${style}`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  className="sr-only"
                  checked={choisie === i}
                  onChange={() => {
                    const suivantes = [...reponses]
                    suivantes[index] = i
                    setReponses(suivantes)
                  }}
                />
                {reponse}
              </label>
            )
          })}
        </div>
      </fieldset>

      {/* `aria-live` : sans lui, la correction s'affiche sans être annoncée et
          reste invisible pour qui n'a pas l'écran sous les yeux. */}
      <div aria-live="polite">
        {validee && (
          <div
            className={`mb-4 rounded-lg p-4 ${
              correct
                ? "border border-[#3DBFA0]/30 bg-[#3DBFA0]/10"
                : "border border-red-200 bg-red-50"
            }`}
          >
            <p
              className={`mb-1 text-sm font-medium ${correct ? "text-[#3DBFA0]" : "text-red-600"}`}
            >
              {correct ? "Correct !" : "Pas tout à fait…"}
            </p>
            {!correct && (
              <p className="mb-2 text-xs text-gray-600">
                Bonne réponse : {question.reponses[question.bonneReponse]}
              </p>
            )}
            <p className="text-xs text-gray-600">{question.explication}</p>
          </div>
        )}
      </div>

      {!validee ? (
        <button
          type="button"
          onClick={valider}
          disabled={choisie === -1}
          className="w-full rounded-lg bg-[#1B2D5B] py-3 font-medium text-white transition-colors hover:bg-[#152347] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2D5B] disabled:opacity-40"
        >
          Valider ma réponse
        </button>
      ) : (
        <button
          type="button"
          onClick={suivant}
          className="w-full rounded-lg bg-[#3DBFA0] py-3 font-medium text-white transition-colors hover:bg-[#2ea88b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0]"
        >
          {derniere ? "Voir mes résultats" : "Question suivante"}
        </button>
      )}
    </section>
  )
}
