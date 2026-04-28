import React from "react"

type HighlightBoxProps = {
  label: string
  children: React.ReactNode
  couleur?: "bleu" | "vert" | "jaune"
}

export function HighlightBox({ label, children, couleur = "vert" }: HighlightBoxProps) {
  const styles = {
    bleu: "bg-[#1B2D5B]/5 border-[#1B2D5B] text-[#1B2D5B]",
    vert: "bg-[#3DBFA0]/10 border-[#3DBFA0] text-[#3DBFA0]",
    jaune: "bg-amber-50 border-amber-400 text-amber-700"
  }
  return (
    <div className={"border rounded-xl p-6 mb-6 " + styles[couleur]}>
      <p className="text-xs font-medium tracking-widest uppercase mb-3">{label}</p>
      <div className="text-gray-700 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}