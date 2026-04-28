import React from "react"

type SectionModuleProps = {
  eyebrow?: string
  titre: string
  children: React.ReactNode
}

export function SectionModule({ eyebrow, titre, children }: SectionModuleProps) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="text-xs font-medium tracking-widest uppercase text-[#3DBFA0] mb-3">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-bold text-[#1B2D5B] mb-6 leading-tight">{titre}</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  )
}