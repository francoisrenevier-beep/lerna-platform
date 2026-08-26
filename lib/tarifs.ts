// ─────────────────────────────────────────────────────────────────────────────
// Modèle tarifaire Learna — source unique de vérité.
//
// Toute la page /tarifs (tableau de référence et calculateur) dérive de ce
// module. Aucun montant ne doit être saisi en dur ailleurs : deux barèmes qui
// divergent, c'est un prix annoncé au prospect qui ne correspond pas au contrat.
//
// Barème continu, sans effet de seuil : un socle institutionnel, puis un
// montant par collaborateur au-delà d'un effectif inclus.
// ─────────────────────────────────────────────────────────────────────────────

/** Socle institutionnel, en CHF. Couvre l'accès de l'institution. */
export const SOCLE_CHF = 2000

/** ETP couverts par le seul socle, sans supplément. */
export const ETP_INCLUS = 10

/** Montant par ETP au-delà de `ETP_INCLUS`, en francs. */
export const PRIX_PAR_ETP_SUPPLEMENTAIRE = 25

/** Au-delà de cet effectif, aucun montant n'est affiché : proposition sur mesure. */
export const SEUIL_DEVIS = 400

/** Bornes du champ de saisie du calculateur. */
export const ETP_MIN = 1
export const ETP_MAX = 2000

/** Effectif proposé par défaut dans le calculateur. */
export const ETP_DEFAUT = 80

/**
 * Bornes du champ facultatif « nombre de collaborateurs » du calculateur.
 *
 * Une institution emploie toujours plus de personnes que d'ETP, jamais moins ;
 * la borne haute est donc plus large que `ETP_MAX`.
 */
export const COLLABORATEURS_MIN = 1
export const COLLABORATEURS_MAX = 5000

/** Effectifs illustrés par le tableau de référence de la page /tarifs. */
export const LIGNES_REFERENCE = [20, 30, 50, 75, 100, 150, 200, 300, 400] as const

/** Arrondi au multiple de 100 supérieur. */
function arrondiCentaineSuperieure(montant: number): number {
  return Math.ceil(montant / 100) * 100
}

/**
 * Licence annuelle, en francs.
 *
 * Définie pour tout effectif, y compris au-delà de `SEUIL_DEVIS` : c'est
 * `calculerTarif` qui décide de ne pas l'afficher. Garder la fonction totale
 * permet de la tester sur ses propres bornes.
 */
export function prixCatalogue(etp: number): number {
  const brut =
    etp <= ETP_INCLUS
      ? SOCLE_CHF
      : SOCLE_CHF + PRIX_PAR_ETP_SUPPLEMENTAIRE * (etp - ETP_INCLUS)

  return arrondiCentaineSuperieure(brut)
}

export type TarifSurDevis = {
  surDevis: true
  etp: number
}

export type TarifChiffre = {
  surDevis: false
  etp: number
  /** Licence annuelle, en francs. */
  catalogue: number
  /** Coût annuel par ETP, calculé sur la licence annuelle pleine. */
  coutParEtp: number
  /** Coût mensuel par ETP, calculé sur la licence annuelle pleine. */
  coutParEtpMois: number
}

export type Tarif = TarifSurDevis | TarifChiffre

/**
 * Tarification complète pour un effectif donné.
 *
 * Au-delà de `SEUIL_DEVIS`, aucun montant n'est renvoyé : l'interface doit
 * inviter au contact plutôt qu'extrapoler un barème qui n'engage personne.
 */
export function calculerTarif(etp: number): Tarif {
  if (etp > SEUIL_DEVIS) return { surDevis: true, etp }

  const catalogue = prixCatalogue(etp)

  return {
    surDevis: false,
    etp,
    catalogue,
    coutParEtp: catalogue / etp,
    coutParEtpMois: catalogue / etp / 12,
  }
}

/** Contraint un effectif saisi aux bornes du calculateur. */
export function bornerEtp(etp: number): number {
  if (!Number.isFinite(etp)) return ETP_DEFAUT
  return Math.min(ETP_MAX, Math.max(ETP_MIN, Math.trunc(etp)))
}

/** Coût de la licence rapporté à une personne, en francs. */
export type CoutParPersonne = {
  /** Coût annuel. */
  an: number
  /** Coût mensuel. */
  mois: number
}

/**
 * Coût de la licence rapporté au nombre de collaborateurs déclaré.
 *
 * Renvoie `null` — et non un montant — dans tous les cas où la saisie ne
 * permettrait pas un affichage honnête :
 *
 * - champ vide, zéro, valeur non numérique ou hors bornes : rien à diviser ;
 * - moins de collaborateurs que d'ETP : arithmétiquement calculable, mais un
 *   effectif ne peut pas être inférieur au nombre d'ETP qu'il produit. La
 *   saisie est vraisemblablement une erreur, et le coût affiché serait
 *   trompeur. On n'affiche rien plutôt qu'un chiffre faux, sans bloquer la
 *   saisie ni signaler une erreur : le reste du résultat, lui, reste juste.
 *
 * Le montant de la licence ne dépend jamais de ce nombre : ce calcul n'a
 * d'effet que sur l'affichage du coût unitaire.
 */
export function coutParCollaborateur(
  licence: number,
  collaborateurs: number,
  etp: number
): CoutParPersonne | null {
  if (!Number.isFinite(collaborateurs)) return null

  const effectif = Math.trunc(collaborateurs)
  if (effectif < COLLABORATEURS_MIN || effectif > COLLABORATEURS_MAX) return null
  if (effectif < etp) return null

  return { an: licence / effectif, mois: licence / effectif / 12 }
}

/**
 * Montant en francs, séparateur de milliers suisse : 3000 → « 3’000 ».
 *
 * Apostrophe typographique (U+2019), cohérente avec le reste du site.
 */
export function formaterCHF(montant: number): string {
  const entier = Math.round(montant)
  return String(entier).replace(/\B(?=(\d{3})+(?!\d))/g, "’")
}

/**
 * Coût par ETP.
 *
 * Affiché au centime lorsque le montant tombe juste (29,5 → « 29.50 »), sinon
 * arrondi au franc (36,66… → « 37 »). Un coût par ETP n'est pas un montant
 * facturé mais un ordre de grandeur : afficher « 49.33 » suggérerait une
 * précision que le barème n'a pas.
 */
export function formaterCoutParEtp(montant: number): string {
  if (Number.isInteger(montant)) return String(montant)

  const centimes = montant * 100
  if (Number.isInteger(Math.round(centimes * 1e6) / 1e6)) {
    return montant.toFixed(2)
  }

  return String(Math.round(montant))
}

/**
 * Coût mensuel par ETP, arrondi aux 5 centimes — l'usage suisse.
 * 2,583… → « 2.60 ».
 */
export function formaterCoutMensuel(montant: number): string {
  return (Math.round(montant * 20) / 20).toFixed(2)
}
