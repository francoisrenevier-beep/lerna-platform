import Link from "next/link"

import { moduleLibreDeFormation } from "@/content/decouverte"
import type { FormationPublique } from "@/lib/catalogue-public"
import {
  IconeNiveau,
  VignetteVitrine,
  getDomaineVitrineOuNeutre,
  getNiveauVitrine,
} from "@/components/vitrine/domaines"

/**
 * Carte de formation du catalogue public.
 *
 * Reprend la carte du catalogue connecté (app/catalogue/page.tsx) : vignette
 * teintée par domaine, badges de domaine et de niveau, bande de niveau, puis
 * le bloc de texte et sa ligne de métadonnées. Un visiteur qui découvre le
 * catalogue sur le site public retrouve ainsi les mêmes cartes une fois
 * connecté.
 *
 * Server Component : aucun état, aucun hook. La carte ne connaît que le type
 * `FormationPublique` — elle ignore d'où viennent les données.
 *
 * Deux écarts avec la carte connectée, imposés par ce que la page publique
 * sait et ne sait pas :
 *   — pas de badge d'avancement (« En cours », « Terminé »), qui suppose un
 *     compte ;
 *   — le bouton d'action ne mène quelque part que si la formation a un module
 *     en accès libre ; sinon il n'y a pas de bouton, plutôt qu'un bouton qui
 *     renvoie à un mur de connexion.
 *
 * Toute métadonnée absente est simplement omise : ni tiret, ni « — », ni
 * valeur approchée. Sur une page commerciale, une information manquante se
 * tait.
 */

function formaterDuree(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  const heures = Math.floor(minutes / 60)
  const reste = minutes % 60
  return reste > 0 ? `${heures} h ${reste}` : `${heures} h`
}

export function CarteFormationPublique({ formation }: { formation: FormationPublique }) {
  const domaine = getDomaineVitrineOuNeutre(formation.domaine)
  const niveau = getNiveauVitrine(formation.niveau)
  // `undefined` pour toute formation sans module ouvert : la carte est alors
  // rendue sans badge ni bouton d'accès libre.
  const libre = moduleLibreDeFormation(formation.slug)

  const metadonnees: string[] = []
  if (formation.nbModules !== null) {
    metadonnees.push(`${formation.nbModules} module${formation.nbModules > 1 ? "s" : ""}`)
  }
  if (formation.dureeMinutes !== null) {
    metadonnees.push(formaterDuree(formation.dureeMinutes))
  }
  if (niveau) {
    metadonnees.push(niveau.label)
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      {/* Vignette */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: 184 }}>
        <VignetteVitrine
          titre={formation.titre}
          titreCourt={formation.titreCourt}
          domaine={domaine}
        />

        {libre && (
          <span className="absolute left-3 top-3 rounded-full bg-[#3DBFA0] px-2.5 py-1 text-xs font-bold text-white shadow-sm">
            Accès libre
          </span>
        )}

        {domaine.label && (
          <span
            className="absolute bottom-3 right-3 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm"
            style={{ backgroundColor: domaine.badgeBg, color: domaine.badgeText }}
          >
            {domaine.label}
          </span>
        )}

        {niveau && (
          <span
            className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold shadow-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.85)", color: niveau.couleur }}
          >
            <IconeNiveau />
            {niveau.label}
          </span>
        )}
      </div>

      {/* Bande de niveau */}
      <div
        aria-hidden="true"
        style={{ height: 4, flexShrink: 0, backgroundColor: niveau?.couleur ?? "#E2E8F0" }}
      />

      {/* Texte */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="mb-2 text-base font-bold leading-snug text-[#1B2D5B]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {formation.titre}
        </h3>

        {formation.description && (
          <p
            className="text-sm leading-relaxed text-gray-500"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {formation.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-5">
          {metadonnees.length > 0 && (
            <ul className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-400">
              {metadonnees.map((valeur, i) => (
                <li key={valeur} className="flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-gray-300">
                      ·
                    </span>
                  )}
                  {valeur}
                </li>
              ))}
            </ul>
          )}

          {libre && (
            <Link
              href={`/decouvrir/${libre.slug}`}
              className="flex-shrink-0 rounded-lg bg-[#3DBFA0] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#2ea88b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DBFA0]"
            >
              Suivre un module →
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
