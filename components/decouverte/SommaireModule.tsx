"use client"

import type { SectionLibre } from "@/lib/decouverte/types"

/**
 * Sommaire du module. Entièrement navigable au clavier : ce sont de vrais
 * liens d'ancrage, ils fonctionnent donc aussi sans JavaScript et se partagent.
 *
 * `aria-current` suit la section à l'écran, et les sections déjà atteintes sont
 * marquées pour qu'un visiteur qui revient voie d'un coup d'œil où il en était.
 */
export function SommaireModule({
  sections,
  sectionActive,
  sectionMax,
}: {
  sections: SectionLibre[]
  sectionActive: number
  sectionMax: number
}) {
  return (
    <nav aria-label="Sommaire du module" className="mb-12 rounded-xl border border-gray-200 p-5">
      <h2 className="mb-4 text-xs font-medium uppercase tracking-widest text-[#3DBFA0]">
        Sommaire
      </h2>
      <ol className="space-y-1">
        {sections.map((section, i) => {
          const active = i === sectionActive
          const atteinte = i <= sectionMax
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active ? "true" : undefined}
                className={`flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[#3DBFA0]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0] ${
                  active ? "bg-[#3DBFA0]/10 font-semibold text-[#1B2D5B]" : "text-gray-600"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 flex-shrink-0 translate-y-1 rounded-full ${
                    atteinte ? "bg-[#3DBFA0]" : "bg-gray-200"
                  }`}
                />
                <span>
                  {section.titre}
                  {atteinte && <span className="sr-only"> — déjà lue</span>}
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
