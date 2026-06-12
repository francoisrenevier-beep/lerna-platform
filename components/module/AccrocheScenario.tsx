import React from "react"

type AccrocheScenarioProps = {
  titre?: string
  children: React.ReactNode
  type?: "scenario" | "question" | "reflexion"
}

export function AccrocheScenario({ titre, children, type = "scenario" }: AccrocheScenarioProps) {
  const labels = {
    scenario: "Situation pour réfléchir",
    question: "Question clé",
    reflexion: "Réflexion professionnelle",
  }
  return (
    <div className="my-6 bg-gradient-to-br from-[#1B2D5B]/5 to-[#3DBFA0]/5 border border-[#3DBFA0]/20 rounded-xl p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-[#3DBFA0] mb-3">
        {titre || labels[type]}
      </p>
      <div className="text-gray-700 text-sm leading-relaxed space-y-2 italic">
        {children}
      </div>
    </div>
  )
}
