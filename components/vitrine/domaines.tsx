import type { ReactElement } from "react"

/**
 * Métadonnées et illustrations de domaine pour le site vitrine.
 *
 * Copie adaptée de `lib/formationMeta.ts`, qui ne peut pas être réutilisé ici :
 * ce module est déclaré `"use client"` et expose des icônes `lucide-react`,
 * alors que les pages vitrine sont des Server Components et que la charte
 * interdit toute bibliothèque d'icônes.
 *
 * Deux écarts assumés par rapport à la copie d'origine :
 *   — palette restreinte au navy #1B2D5B, à l'emerald #3DBFA0 et aux gris,
 *     là où le catalogue authentifié utilise une teinte par domaine ;
 *   — illustrations en SVG géométrique inline, sans dépendance.
 *
 * Aucun composant du catalogue authentifié n'est modifié.
 */

const NAVY = "#1B2D5B"
const EMERALD = "#3DBFA0"

export type DomaineVitrine = {
  /** Valeur normalisée telle que stockée en base. */
  value: string
  label: string
}

/**
 * Domaines dans leur ordre d'affichage sur la page publique.
 *
 * Un domaine sans formation publiée n'est pas rendu : c'est la page qui
 * l'écarte, cette liste ne décrit que l'ordre.
 */
export const DOMAINES_VITRINE: readonly DomaineVitrine[] = [
  { value: "handicap", label: "Handicap" },
  { value: "pedagogie-specialisee", label: "Pédagogie spécialisée" },
  { value: "protection-mineurs", label: "Protection des mineurs" },
  { value: "transversal", label: "Transversal" },
  { value: "vieillissement-grand-age", label: "Vieillissement et grand âge" },
]

export function normaliserSlug(valeur: string): string {
  return valeur
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

/**
 * Retourne le domaine correspondant, ou `null` si la valeur est inconnue.
 *
 * `null` plutôt qu'un domaine de repli : un libellé inventé sur une page
 * commerciale vaut moins que l'absence d'étiquette.
 */
export function getDomaineVitrine(valeur: string | null | undefined): DomaineVitrine | null {
  if (!valeur) return null
  const direct = DOMAINES_VITRINE.find((d) => d.value === valeur)
  if (direct) return direct
  const slug = normaliserSlug(valeur)
  return DOMAINES_VITRINE.find((d) => d.value === slug) ?? null
}

// ─── Bandeaux illustrés ──────────────────────────────────────────────────────
// Chaque domaine se distingue par sa composition géométrique, pas par sa
// couleur : la charte n'autorise que le navy, l'emerald et les gris.

function Fond({ teinte }: { teinte: string }) {
  return (
    <>
      <rect width="400" height="120" fill="#F9FAFB" />
      <rect width="400" height="120" fill={teinte} fillOpacity="0.07" />
    </>
  )
}

const SVG_PROPS = {
  viewBox: "0 0 400 120",
  xmlns: "http://www.w3.org/2000/svg",
  className: "h-full w-full",
  preserveAspectRatio: "xMidYMid slice",
  "aria-hidden": true,
} as const

/** Ondes concentriques : l'ouverture du regard. */
function BandeauHandicap() {
  return (
    <svg {...SVG_PROPS}>
      <Fond teinte={EMERALD} />
      <circle cx="120" cy="60" r="14" fill={EMERALD} fillOpacity="0.55" />
      <circle cx="120" cy="60" r="30" fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.3" />
      <circle cx="120" cy="60" r="48" fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.2" />
      <circle cx="120" cy="60" r="66" fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.12" />
      <circle cx="300" cy="34" r="8" fill={NAVY} fillOpacity="0.18" />
      <circle cx="342" cy="86" r="12" fill={EMERALD} fillOpacity="0.28" />
    </svg>
  )
}

/** Marches ascendantes : la progression pédagogique. */
function BandeauPedagogie() {
  return (
    <svg {...SVG_PROPS}>
      <Fond teinte={NAVY} />
      <rect x="96" y="78" width="34" height="26" rx="4" fill={NAVY} fillOpacity="0.18" />
      <rect x="140" y="60" width="34" height="44" rx="4" fill={NAVY} fillOpacity="0.28" />
      <rect x="184" y="42" width="34" height="62" rx="4" fill={EMERALD} fillOpacity="0.42" />
      <rect x="228" y="24" width="34" height="80" rx="4" fill={NAVY} fillOpacity="0.42" />
      <line x1="70" y1="104" x2="330" y2="104" stroke={NAVY} strokeWidth="2" strokeOpacity="0.2" />
    </svg>
  )
}

/** Arcs enveloppants : ce qui protège sans enfermer. */
function BandeauProtectionMineurs() {
  return (
    <svg {...SVG_PROPS}>
      <Fond teinte={EMERALD} />
      <path d="M124 96 A 76 76 0 0 1 276 96" fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.16" />
      <path d="M146 96 A 54 54 0 0 1 254 96" fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.26" />
      <path d="M168 96 A 32 32 0 0 1 232 96" fill="none" stroke={EMERALD} strokeWidth="3" strokeOpacity="0.6" />
      <circle cx="200" cy="88" r="9" fill={NAVY} fillOpacity="0.4" />
      <line x1="108" y1="96" x2="292" y2="96" stroke={NAVY} strokeWidth="2" strokeOpacity="0.2" />
    </svg>
  )
}

/** Réseau de nœuds : ce qui traverse toutes les fonctions. */
function BandeauTransversal() {
  return (
    <svg {...SVG_PROPS}>
      <Fond teinte={NAVY} />
      <g stroke={NAVY} strokeWidth="2" strokeOpacity="0.22">
        <line x1="200" y1="60" x2="128" y2="28" />
        <line x1="200" y1="60" x2="272" y2="28" />
        <line x1="200" y1="60" x2="128" y2="92" />
        <line x1="200" y1="60" x2="272" y2="92" />
        <line x1="128" y1="28" x2="128" y2="92" />
        <line x1="272" y1="28" x2="272" y2="92" />
      </g>
      <circle cx="200" cy="60" r="15" fill={EMERALD} fillOpacity="0.55" />
      <circle cx="128" cy="28" r="9" fill={NAVY} fillOpacity="0.35" />
      <circle cx="272" cy="28" r="9" fill={NAVY} fillOpacity="0.35" />
      <circle cx="128" cy="92" r="9" fill={NAVY} fillOpacity="0.35" />
      <circle cx="272" cy="92" r="9" fill={NAVY} fillOpacity="0.35" />
    </svg>
  )
}

/** Anneaux décalés : les strates du temps. */
function BandeauVieillissement() {
  return (
    <svg {...SVG_PROPS}>
      <Fond teinte={EMERALD} />
      <circle cx="146" cy="60" r="34" fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.32" />
      <circle cx="184" cy="60" r="34" fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.24" />
      <circle cx="222" cy="60" r="34" fill="none" stroke={EMERALD} strokeWidth="3" strokeOpacity="0.6" />
      <circle cx="260" cy="60" r="34" fill="none" stroke={NAVY} strokeWidth="2" strokeOpacity="0.16" />
      <circle cx="203" cy="60" r="5" fill={NAVY} fillOpacity="0.4" />
    </svg>
  )
}

/** Trame neutre, pour un domaine non répertorié. */
function BandeauNeutre() {
  return (
    <svg {...SVG_PROPS}>
      <Fond teinte={NAVY} />
      <g fill={NAVY} fillOpacity="0.16">
        {[80, 128, 176, 224, 272, 320].map((x) =>
          [30, 60, 90].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" />),
        )}
      </g>
    </svg>
  )
}

const BANDEAUX: Record<string, () => ReactElement> = {
  handicap: BandeauHandicap,
  "pedagogie-specialisee": BandeauPedagogie,
  "protection-mineurs": BandeauProtectionMineurs,
  transversal: BandeauTransversal,
  "vieillissement-grand-age": BandeauVieillissement,
}

/** Bandeau décoratif du domaine. Server Component, sans état. */
export function BandeauDomaine({ domaine }: { domaine: string | null }) {
  const Bandeau = (domaine && BANDEAUX[domaine]) || BandeauNeutre
  return <Bandeau />
}
