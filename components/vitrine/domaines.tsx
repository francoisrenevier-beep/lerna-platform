import type { ReactElement } from "react"

/**
 * Métadonnées, icônes et vignettes de domaine pour le site vitrine.
 *
 * Transposition de `lib/formationMeta.ts`, qui ne peut pas être réutilisé ici :
 * ce module est déclaré `"use client"` et expose des composants `lucide-react`,
 * alors que les pages vitrine sont des Server Components sans dépendance
 * d'icônes. Les valeurs de couleur et les tracés d'icône sont repris à
 * l'identique, pour qu'une carte du catalogue public et une carte du catalogue
 * connecté se ressemblent trait pour trait.
 *
 * Si une teinte change dans lib/formationMeta.ts, elle doit changer ici aussi :
 * c'est le prix de la duplication, assumé pour ne pas tirer tout le catalogue
 * authentifié dans le bundle du site public.
 */

export type DomaineVitrine = {
  /** Valeur normalisée telle que stockée en base. */
  value: string
  label: string
  /** Fond de la vignette (très clair). */
  tintBg: string
  /** Fond de la pastille d'icône, et des cercles décoratifs. */
  iconBg: string
  iconColor: string
  badgeBg: string
  badgeText: string
  icone: () => ReactElement
}

export type NiveauVitrine = {
  value: string
  label: string
  couleur: string
}

// ─── Icônes ──────────────────────────────────────────────────────────────────
// Tracés repris des icônes lucide-react utilisées par le catalogue connecté :
// accessibility, book-open, shield-check, share-2, heart.

const TRAIT = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-5 w-5",
  "aria-hidden": true,
} as const

function IconeAccessibilite() {
  return (
    <svg {...TRAIT}>
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  )
}

function IconeLivre() {
  return (
    <svg {...TRAIT}>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>
  )
}

function IconeBouclier() {
  return (
    <svg {...TRAIT}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function IconePartage() {
  return (
    <svg {...TRAIT}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  )
}

function IconeCoeur() {
  return (
    <svg {...TRAIT}>
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  )
}

/** Icône du badge de niveau : lucide `signal`. */
export function IconeNiveau() {
  return (
    <svg {...TRAIT} className="h-3 w-3">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}

// ─── Domaines ────────────────────────────────────────────────────────────────

/**
 * Domaines dans leur ordre d'affichage sur la page publique.
 *
 * Un domaine sans formation publiée n'est pas rendu : c'est la page qui
 * l'écarte, cette liste ne décrit que l'ordre.
 */
export const DOMAINES_VITRINE: readonly DomaineVitrine[] = [
  {
    value: "handicap",
    label: "Handicap",
    tintBg: "#EEF2FF",
    iconBg: "#C7D2FE",
    iconColor: "#3730A3",
    badgeBg: "#EEF2FF",
    badgeText: "#3730A3",
    icone: IconeAccessibilite,
  },
  {
    value: "pedagogie-specialisee",
    label: "Pédagogie spécialisée",
    tintBg: "#F0FDFA",
    iconBg: "#99F6E4",
    iconColor: "#0F766E",
    badgeBg: "#F0FDFA",
    badgeText: "#0F766E",
    icone: IconeLivre,
  },
  {
    value: "protection-mineurs",
    label: "Enfance et adolescence",
    tintBg: "#FFF7ED",
    iconBg: "#FED7AA",
    iconColor: "#C2410C",
    badgeBg: "#FFF7ED",
    badgeText: "#C2410C",
    icone: IconeBouclier,
  },
  {
    value: "transversal",
    label: "Transversal",
    tintBg: "#F8FAFC",
    iconBg: "#E2E8F0",
    iconColor: "#475569",
    badgeBg: "#F1F5F9",
    badgeText: "#475569",
    icone: IconePartage,
  },
  {
    value: "vieillissement-grand-age",
    label: "Vieillissement et grand âge",
    tintBg: "#F5F3FF",
    iconBg: "#DDD6FE",
    iconColor: "#5B21B6",
    badgeBg: "#F5F3FF",
    badgeText: "#5B21B6",
    icone: IconeCoeur,
  },
]

/**
 * Vignette d'un domaine inconnu : la carte garde sa forme, sans annoncer un
 * domaine inventé. `label` vide, le badge n'est alors pas rendu.
 */
const DOMAINE_NEUTRE: DomaineVitrine = {
  value: "",
  label: "",
  tintBg: "#F8FAFC",
  iconBg: "#E2E8F0",
  iconColor: "#94A3B8",
  badgeBg: "#F1F5F9",
  badgeText: "#64748B",
  icone: IconePartage,
}

// ─── Niveaux ─────────────────────────────────────────────────────────────────
// Couleurs reprises de `NIVEAUX` dans lib/formationMeta.ts.

export const NIVEAUX_VITRINE: readonly NiveauVitrine[] = [
  { value: "base", label: "Base", couleur: "#378ABD" },
  { value: "intermediaire", label: "Intermédiaire", couleur: "#EF9F27" },
  { value: "avance", label: "Avancé", couleur: "#D85A30" },
  { value: "tous", label: "Tous niveaux", couleur: "#888780" },
]

// ─── Normalisation et accès ──────────────────────────────────────────────────

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

/** Métadonnées du domaine, neutres si la valeur est absente ou inconnue. */
export function getDomaineVitrineOuNeutre(valeur: string | null | undefined): DomaineVitrine {
  return getDomaineVitrine(valeur) ?? DOMAINE_NEUTRE
}

/** `null` si le niveau est absent ou inconnu : la carte omet alors le badge. */
export function getNiveauVitrine(valeur: string | null | undefined): NiveauVitrine | null {
  if (!valeur) return null
  const direct = NIVEAUX_VITRINE.find((n) => n.value === valeur)
  if (direct) return direct
  const slug = normaliserSlug(valeur)
  return NIVEAUX_VITRINE.find((n) => n.value === slug) ?? null
}

/**
 * Titre court de la vignette. Même règle que `titreVignette` de
 * lib/formationMeta.ts : le titre court saisi en base d'abord, sinon la coupe
 * sur la ponctuation séparatrice, sinon les quatre ou cinq premiers mots.
 */
export function titreVignette(titre: string, titreCourt: string | null): string {
  if (titreCourt?.trim()) return titreCourt.trim()

  const complet = titre.trim()
  if (!complet) return ""

  const debut = complet.slice(0, 42)
  const separateur = debut.match(/^(.{3,}?)(?:\s*[—–]\s*|\s*:\s*|\s+-\s+)/)
  if (separateur) return separateur[1].trim()

  const mots = complet.split(/\s+/)
  let resultat = ""
  let nb = 0
  for (const mot of mots) {
    resultat = resultat ? `${resultat} ${mot}` : mot
    nb++
    if (nb >= 4 && resultat.length >= 20) break
    if (nb >= 5) break
  }
  return resultat.trim()
}

// ─── Vignette ────────────────────────────────────────────────────────────────

/**
 * Vignette typographique d'une carte de formation : teinte du domaine, cercles
 * décoratifs, pastille d'icône et titre court. Reprise de `VignetteTypo`
 * (components/formations-preview.tsx), à une différence près : la pastille est
 * placée en haut à droite, là où le catalogue connecté la superpose au badge
 * de domaine.
 */
export function VignetteVitrine({
  titre,
  titreCourt,
  domaine,
}: {
  titre: string
  titreCourt: string | null
  domaine: DomaineVitrine
}) {
  const Icone = domaine.icone

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ backgroundColor: domaine.tintBg }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 130,
          height: 130,
          bottom: -35,
          right: -35,
          backgroundColor: domaine.iconBg,
          opacity: 0.4,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 195,
          height: 195,
          bottom: -68,
          right: -68,
          backgroundColor: domaine.iconBg,
          opacity: 0.18,
        }}
      />

      <div
        className="absolute rounded-2xl p-2.5 shadow-sm"
        style={{ top: 12, right: 12, backgroundColor: domaine.iconBg, color: domaine.iconColor }}
      >
        <Icone />
      </div>

      <div className="absolute flex items-center" style={{ top: 0, bottom: 0, left: 14, right: "38%" }}>
        <p
          className="font-medium leading-snug"
          style={{
            color: "#1B2D5B",
            fontSize: 17,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {titreVignette(titre, titreCourt)}
        </p>
      </div>
    </div>
  )
}
