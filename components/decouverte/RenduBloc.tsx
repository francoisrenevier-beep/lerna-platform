import React from "react"

import { ConceptBox } from "@/components/module/ConceptBox"
import { HighlightBox } from "@/components/module/HighlightBox"
import { PullQuote } from "@/components/module/PullQuote"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Texte } from "@/components/module/Texte"
import type { Bloc } from "@/lib/decouverte/types"

/**
 * Rendu d'un bloc de module libre.
 *
 * Réutilise les primitives de components/module/ pour que le module libre soit
 * visuellement identique à la plateforme. Deux blocs sont réimplémentés ici,
 * uniquement parce que leur version plateforme n'est pas utilisable sur un
 * téléphone : le schéma d'étapes (cartes de largeur fixe) et les listes à
 * puces (qui n'interprètent pas le gras). Les composants d'origine ne sont pas
 * modifiés, la plateforme n'est pas touchée par ce chantier.
 */

/** Interprète la syntaxe **gras** des fichiers content/. */
export function gras(texte: string): React.ReactNode[] {
  return texte
    .split(/\*\*(.*?)\*\*/g)
    .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <React.Fragment key={i}>{part}</React.Fragment>))
}

function ListePuces({ items, couleur = "vert" }: { items: string[]; couleur?: "bleu" | "vert" }) {
  const puce = couleur === "vert" ? "bg-[#3DBFA0]" : "bg-[#1B2D5B]"
  return (
    <ul className="mb-6 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full ${puce}`} aria-hidden="true" />
          <span className="leading-relaxed text-gray-700">{gras(item)}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Schéma d'étapes. Empilé et fléché vers le bas sur téléphone, en ligne à
 * partir de `sm`. La version plateforme impose des cartes de 11rem qui se
 * replient mal en dessous de 400 px, en laissant des flèches horizontales
 * entre des cartes empilées.
 */
function SchemaEtapesResponsive({
  titre,
  etapes,
  note,
}: {
  titre: string
  etapes: { niveau: string; nom: string; definition: string }[]
  note?: string
}) {
  return (
    <div className="mb-8 rounded-xl bg-gray-50 p-5 sm:p-8">
      <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
        {titre}
      </p>
      <ol className="flex flex-col items-stretch gap-0 sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center">
        {etapes.map((etape, i) => (
          <React.Fragment key={i}>
            <li className="flex w-full flex-col gap-2 rounded-xl bg-white p-5 text-center shadow-sm sm:w-44">
              <p className="text-xs uppercase tracking-widest text-gray-400">{etape.niveau}</p>
              <p className="text-lg font-bold text-[#1B2D5B]">{etape.nom}</p>
              <p className="text-xs leading-relaxed text-gray-500">{etape.definition}</p>
            </li>
            {i < etapes.length - 1 && (
              <li
                aria-hidden="true"
                className="flex items-center justify-center py-2 text-xl font-bold text-[#3DBFA0] sm:px-2 sm:py-0"
              >
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
      {note && <p className="mt-4 text-center text-xs italic text-gray-400">{note}</p>}
    </div>
  )
}

/**
 * Lecteur média. Aucun module libre n'en utilise aujourd'hui — voir
 * lib/decouverte/types.ts. `preload="none"` garantit qu'un média n'entame
 * aucun téléchargement avant que le visiteur ne le demande. Les contrôles
 * natifs sont accessibles au clavier ; un média sans piste de sous-titres ni
 * transcription ne doit pas être publié.
 */
function Media({ bloc }: { bloc: Extract<Bloc, { type: "media" }> }) {
  const pistes = (bloc.pistes ?? []).map((piste, i) => (
    <track
      key={i}
      kind="subtitles"
      src={piste.src}
      srcLang={piste.langue}
      label={piste.libelle}
      default={i === 0}
    />
  ))

  return (
    <figure className="mb-8">
      {bloc.format === "video" ? (
        <video
          controls
          preload="none"
          poster={bloc.poster}
          className="w-full rounded-xl bg-black shadow-sm"
          title={bloc.titre}
        >
          {pistes}
        </video>
      ) : (
        <audio controls preload="none" className="w-full" title={bloc.titre}>
          {pistes}
        </audio>
      )}
      {bloc.transcription && (
        <details className="mt-3 rounded-lg border border-gray-200 p-4">
          <summary className="cursor-pointer text-sm font-medium text-[#1B2D5B]">
            Transcription
          </summary>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-gray-700">
            {bloc.transcription}
          </p>
        </details>
      )}
    </figure>
  )
}

export function RenduBloc({ bloc }: { bloc: Bloc }) {
  switch (bloc.type) {
    case "texte":
      return <Texte>{gras(bloc.texte)}</Texte>

    case "pullquote":
      return <PullQuote source={bloc.source}>{gras(bloc.texte)}</PullQuote>

    case "liste":
      return <ListePuces items={bloc.items} couleur={bloc.couleur} />

    case "concept":
      return (
        <ConceptBox label={bloc.label} titre={bloc.titre}>
          {bloc.textes?.map((texte, i) => <Texte key={i}>{gras(texte)}</Texte>)}
          {bloc.items && <ListePuces items={bloc.items} />}
        </ConceptBox>
      )

    case "highlight":
      return (
        <HighlightBox label={bloc.label} couleur={bloc.couleur}>
          {bloc.textes?.map((texte, i) => <Texte key={i}>{gras(texte)}</Texte>)}
          {bloc.items && <ListePuces items={bloc.items} />}
        </HighlightBox>
      )

    case "tableau":
      return <TableauComparaison titre={bloc.titre} colonnes={bloc.colonnes} />

    case "schema":
      return <SchemaEtapesResponsive titre={bloc.titre} etapes={bloc.etapes} note={bloc.note} />

    case "media":
      return <Media bloc={bloc} />
  }
}
