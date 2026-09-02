"use client"

import { useEffect, useRef, useState } from "react"

import { mesure } from "@/lib/decouverte/analytics"
import type { ModuleLibre } from "@/lib/decouverte/types"
import { urlModuleLibre } from "@/lib/decouverte/url"

/**
 * « Envoyer ce module à mes collègues ».
 *
 * Deux mécanismes pour une même intention : l'e-mail pré-rédigé pour qui a une
 * messagerie configurée, la copie du message pour qui travaille dans une
 * messagerie interne, un intranet ou un groupe de discussion. Les deux sont
 * mesurés séparément, ce sont deux gestes différents.
 *
 * La copie a un repli : `navigator.clipboard` n'existe pas hors contexte
 * sécurisé et peut être refusé par le navigateur. Dans ce cas le message
 * s'affiche, présélectionné, prêt à être copié à la main — plutôt qu'un bouton
 * qui ne fait rien.
 */
function messagePartage(m: ModuleLibre): { sujet: string; corps: string } {
  const url = urlModuleLibre(m.slug)
  const titre = m.hero.titrePart2 ? `${m.hero.titre} — ${m.hero.titrePart2}` : m.hero.titre

  return {
    sujet: `Un module de formation en accès libre : ${m.hero.titre}`,
    corps: [
      "Bonjour,",
      "",
      `Je viens de suivre « ${titre} », un module de formation complet mis en accès libre par LEARNA.`,
      "",
      `Il dure environ ${m.dureeMinutes} minutes et se termine par un questionnaire. Il n'y a ni compte à créer ni formulaire à remplir :`,
      url,
      "",
      `Ce module est le premier de la formation « ${m.formationTitre} ».`,
    ].join("\n"),
  }
}

export function PartagerModule({ module: moduleLibre }: { module: ModuleLibre }) {
  const { sujet, corps } = messagePartage(moduleLibre)
  const [copie, setCopie] = useState(false)
  const [copieManuelle, setCopieManuelle] = useState(false)
  const zoneManuelle = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!copie) return
    const minuteur = setTimeout(() => setCopie(false), 4000)
    return () => clearTimeout(minuteur)
  }, [copie])

  useEffect(() => {
    if (copieManuelle) zoneManuelle.current?.select()
  }, [copieManuelle])

  const copier = async () => {
    mesure.partageCopie(moduleLibre.slug)
    try {
      await navigator.clipboard.writeText(corps)
      setCopie(true)
      setCopieManuelle(false)
    } catch {
      setCopieManuelle(true)
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`}
          onClick={() => mesure.partageEmail(moduleLibre.slug)}
          className="flex-1 rounded-lg bg-[#1B2D5B] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#152347] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2D5B]"
        >
          Envoyer par e-mail
        </a>
        <button
          type="button"
          onClick={copier}
          className="flex-1 rounded-lg border border-[#1B2D5B]/30 px-5 py-3 text-sm font-semibold text-[#1B2D5B] transition-colors hover:bg-[#1B2D5B]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2D5B]"
        >
          Copier le message
        </button>
      </div>

      <p aria-live="polite" className="mt-2 min-h-5 text-xs text-[#3DBFA0]">
        {copie && "Message copié. Vous pouvez le coller dans votre messagerie."}
      </p>

      {copieManuelle && (
        <div className="mt-2">
          <label htmlFor="partage-manuel" className="mb-2 block text-xs text-gray-500">
            Votre navigateur n&apos;autorise pas la copie automatique. Le message est sélectionné,
            copiez-le avec Ctrl+C ou Cmd+C.
          </label>
          <textarea
            id="partage-manuel"
            ref={zoneManuelle}
            readOnly
            rows={7}
            value={corps}
            className="w-full rounded-lg border border-gray-200 p-3 text-xs text-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0]"
          />
        </div>
      )}
    </div>
  )
}
