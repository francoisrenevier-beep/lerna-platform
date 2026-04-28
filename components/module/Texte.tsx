import React from "react"

type TexteProps = {
  children: React.ReactNode
}

export function Texte({ children }: TexteProps) {
  return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
}

export function TexteGras({ children }: TexteProps) {
  return <p className="text-gray-800 font-semibold leading-relaxed mb-4">{children}</p>
}

type ListeProps = {
  items: string[]
  couleur?: "bleu" | "vert"
}

export function Liste({ items, couleur = "vert" }: ListeProps) {
  const dotColor = couleur === "vert" ? "bg-[#3DBFA0]" : "bg-[#1B2D5B]"
  return (
    <ul className="space-y-2 mb-6">
      {items.map(function(item, i) {
        return (
          <li key={i} className="flex items-start gap-3">
            <span className={"w-2 h-2 rounded-full mt-2 flex-shrink-0 " + dotColor} />
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        )
      })}
    </ul>
  )
}