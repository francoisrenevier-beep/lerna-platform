import React from "react"

type ConceptBoxProps = {
  label: string
  titre: string
  children: React.ReactNode
}

export function ConceptBox({ label, titre, children }: ConceptBoxProps) {
  return (
    <div className="bg-[#1B2D5B]/5 border-l-4 border-[#1B2D5B] rounded-r-xl p-6 mb-8">
      <p className="text-xs font-medium tracking-widest uppercase text-[#1B2D5B] mb-2">{label}</p>
      <p className="font-semibold text-[#1B2D5B] mb-4">{titre}</p>
      <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  )
}