import React, { useState } from "react"

type Question = {
  question: string
  reponses: string[]
  bonneReponse: number
  explication: string
}

type QuizProps = {
  questions: Question[]
  onTermine: () => void
}

export function Quiz({ questions, onTermine }: QuizProps) {
  const [etape, setEtape] = useState<"quiz" | "resultat">("quiz")
  const [reponsesChoisies, setReponsesChoisies] = useState<number[]>(Array(questions.length).fill(-1))
  const [questionActuelle, setQuestionActuelle] = useState(0)
  const [reponseValidee, setReponseValidee] = useState(false)

  const choisirReponse = (index: number) => {
    if (reponseValidee) return
    const newReponses = [...reponsesChoisies]
    newReponses[questionActuelle] = index
    setReponsesChoisies(newReponses)
  }

  const valider = () => {
    if (reponsesChoisies[questionActuelle] === -1) return
    setReponseValidee(true)
  }

  const suivant = () => {
    setReponseValidee(false)
    if (questionActuelle < questions.length - 1) {
      setQuestionActuelle(questionActuelle + 1)
    } else {
      setEtape("resultat")
    }
  }

  const score = reponsesChoisies.filter(function(r, i) {
    return r === questions[i].bonneReponse
  }).length

  const q = questions[questionActuelle]
  const reponseChoisie = reponsesChoisies[questionActuelle]
  const estCorrect = reponseChoisie === q.bonneReponse

  if (etape === "resultat") {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-6">
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"
            style={{ backgroundColor: score >= questions.length * 0.6 ? "#3DBFA0" : "#f59e0b", color: "white" }}>
            {score}/{questions.length}
          </div>
          <h3 className="text-xl font-bold text-[#1B2D5B] mb-2">
            {score === questions.length ? "Parfait !" : score >= questions.length * 0.6 ? "Bien joue !" : "A revoir !"}
          </h3>
          <p className="text-gray-500 text-sm">
            {score === questions.length
              ? "Vous avez repondu correctement a toutes les questions."
              : "Ce quiz est formatif — vous pouvez valider le module et revoir les notions."}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {questions.map(function(question, i) {
            const correct = reponsesChoisies[i] === question.bonneReponse
            return (
              <div key={i} className={"rounded-lg p-4 " + (correct ? "bg-[#3DBFA0]/10 border border-[#3DBFA0]/30" : "bg-red-50 border border-red-200")}>
                <p className="text-sm font-medium text-[#1B2D5B] mb-1">{question.question}</p>
                <p className="text-xs text-gray-500 mb-1">
                  Votre reponse : {reponsesChoisies[i] >= 0 ? question.reponses[reponsesChoisies[i]] : "Sans reponse"}
                </p>
                {!correct && (
                  <p className="text-xs text-[#3DBFA0] font-medium">
                    Bonne reponse : {question.reponses[question.bonneReponse]}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-2 italic">{question.explication}</p>
              </div>
            )
          })}
        </div>

        <button
          onClick={onTermine}
          className="w-full bg-[#3DBFA0] text-white py-3 rounded-lg font-medium hover:bg-[#2ea88b] transition-colors"
        >
          Valider le module et continuer
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Quiz du module</p>
          <h3 className="text-lg font-bold text-[#1B2D5B]">Verifiez votre comprehension</h3>
        </div>
        <span className="text-sm text-gray-400">{questionActuelle + 1} / {questions.length}</span>
      </div>

      <div className="w-full bg-gray-100 rounded-full h-1 mb-8">
        <div
          className="bg-[#3DBFA0] h-1 rounded-full transition-all"
          style={{ width: ((questionActuelle + 1) / questions.length * 100) + "%" }}
        />
      </div>

      <p className="text-base font-semibold text-[#1B2D5B] mb-6">{q.question}</p>

      <div className="space-y-3 mb-6">
        {q.reponses.map(function(reponse, i) {
          let style = "border border-gray-200 text-gray-700 hover:border-[#3DBFA0] hover:bg-[#3DBFA0]/5"
          if (reponseChoisie === i && !reponseValidee) {
            style = "border-2 border-[#3DBFA0] bg-[#3DBFA0]/10 text-[#1B2D5B] font-medium"
          }
          if (reponseValidee && i === q.bonneReponse) {
            style = "border-2 border-[#3DBFA0] bg-[#3DBFA0]/10 text-[#1B2D5B] font-medium"
          }
          if (reponseValidee && reponseChoisie === i && i !== q.bonneReponse) {
            style = "border-2 border-red-400 bg-red-50 text-red-700"
          }
          return (
            <button
              key={i}
              onClick={function() { choisirReponse(i) }}
              className={"w-full text-left px-4 py-3 rounded-lg text-sm transition-all " + style}
            >
              {reponse}
            </button>
          )
        })}
      </div>

      {reponseValidee && (
        <div className={"rounded-lg p-4 mb-4 " + (estCorrect ? "bg-[#3DBFA0]/10 border border-[#3DBFA0]/30" : "bg-red-50 border border-red-200")}>
          <p className={"text-sm font-medium mb-1 " + (estCorrect ? "text-[#3DBFA0]" : "text-red-600")}>
            {estCorrect ? "Correct !" : "Pas tout a fait..."}
          </p>
          <p className="text-xs text-gray-600">{q.explication}</p>
        </div>
      )}

      {!reponseValidee ? (
        <button
          onClick={valider}
          disabled={reponseChoisie === -1}
          className="w-full bg-[#1B2D5B] text-white py-3 rounded-lg font-medium hover:bg-[#152347] transition-colors disabled:opacity-40"
        >
          Valider ma reponse
        </button>
      ) : (
        <button
          onClick={suivant}
          className="w-full bg-[#3DBFA0] text-white py-3 rounded-lg font-medium hover:bg-[#2ea88b] transition-colors"
        >
          {questionActuelle < questions.length - 1 ? "Question suivante" : "Voir mes resultats"}
        </button>
      )}
    </div>
  )
}