// ─────────────────────────────────────────────────────────────────────────────
// Modèle tarifaire Learna — source unique de vérité.
//
// Toute la page /tarifs (formule, calculateur, grille, conditions) dérive de ce
// module. Aucun montant ne doit être saisi en dur ailleurs : deux barèmes qui
// divergent, c'est un prix annoncé au prospect qui ne correspond pas au contrat.
//
// Barème continu, sans effet de seuil : un socle institutionnel, puis un
// montant par collaborateur au-delà d'un effectif inclus.
// ─────────────────────────────────────────────────────────────────────────────

/** Socle institutionnel, en CHF. Couvre l'accès de l'institution. */
export const SOCLE_CHF = 1500

/** ETP couverts par le seul socle, sans supplément. */
export const SEUIL_SOCLE_ETP = 10

/** Montant par ETP au-delà de `SEUIL_SOCLE_ETP`, en francs. */
export const TAUX_PAR_ETP = 27

/** Au-delà de cet effectif, aucun montant n'est affiché : proposition sur mesure. */
export const PLAFOND_DEVIS_ETP = 400

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

/**
 * Ratio moyen collaborateurs / ETP du secteur social et médico-social, où le
 * temps partiel est la norme.
 *
 * Sert au seul coût par collaborateur *estimé*, affiché tant que l'institution
 * n'a pas donné son propre effectif. Toujours l'annoncer comme une moyenne :
 * ce n'est pas le ratio d'une institution particulière, et le montant qui en
 * découle n'est pas un prix contractuel.
 */
export const RATIO_COLLABORATEURS_PAR_ETP = 1.4

/** Effectifs illustrés par le tableau de référence de la page /tarifs. */
export const LIGNES_REFERENCE = [20, 30, 50, 75, 100, 150, 200, 300, 400] as const

// ─── Prestations de production ───────────────────────────────────────────────
//
// L'ancienne « formation signature » couvrait deux choses très inégales en
// charge de production : retravailler un module du catalogue aux couleurs de
// l'institution, et écrire un module entier à partir de ses documents. Les
// facturer à l'identique — c'est-à-dire les inclure toutes deux dans le socle —
// rendait la charge annuelle impossible à borner.
//
// Les deux prestations sont donc distinctes : l'adaptation contextuelle est
// comprise dans toute licence, le module entièrement sur mesure est facturé à
// part. La terminologie publique « votre formation signature » désigne
// désormais la première.

/** Bornes de l'enveloppe de travail d'une adaptation contextuelle, en heures. */
export const ADAPTATION_HEURES_MIN = 8
export const ADAPTATION_HEURES_MAX = 10

/**
 * Mois de licence à partir duquel l'adaptation contextuelle est ouverte.
 *
 * Les premiers mois servent à l'appropriation du catalogue : adapter un module
 * avant que l'institution sache lesquels comptent pour elle produit un travail
 * mal ciblé.
 */
export const ADAPTATION_DISPONIBLE_DES_MOIS = 6

/**
 * Fourchette indicative du module entièrement sur mesure, en CHF.
 *
 * Indicative et non contractuelle : le forfait est arrêté sur devis, selon
 * l'ampleur. Ne jamais l'afficher comme un prix ferme.
 */
export const SUR_MESURE_MIN_CHF = 3500
export const SUR_MESURE_MAX_CHF = 4500

/** Effectif à partir duquel le module sur mesure est compris sans supplément. */
export const SUR_MESURE_INCLUS_DES_ETP = 150

/** Durée d'engagement ouvrant le gel du tarif, en années. */
export const ENGAGEMENT_GEL_ANNEES = 3

/** Plafond de l'indexation annuelle, en pourcent. */
export const INDEXATION_PLAFOND_POURCENT = 3

/** Préavis d'annonce de l'indexation avant échéance, en mois. */
export const INDEXATION_PREAVIS_MOIS = 3

// ─── Calcul ──────────────────────────────────────────────────────────────────

/** Arrondi au multiple de 100 supérieur. */
function arrondiCentaineSuperieure(montant: number): number {
  return Math.ceil(montant / 100) * 100
}

/**
 * Licence annuelle, en francs.
 *
 * Définie pour tout effectif, y compris au-delà de `PLAFOND_DEVIS_ETP` : c'est
 * `calculerTarif` qui décide de ne pas l'afficher. Garder la fonction totale
 * permet de la tester sur ses propres bornes.
 */
export function prixCatalogue(etp: number): number {
  const brut =
    etp <= SEUIL_SOCLE_ETP
      ? SOCLE_CHF
      : SOCLE_CHF + TAUX_PAR_ETP * (etp - SEUIL_SOCLE_ETP)

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
  /**
   * Coût annuel estimé par collaborateur, sur `RATIO_COLLABORATEURS_PAR_ETP`.
   *
   * Estimation, jamais un montant facturé : l'institution qui déclare son
   * effectif réel obtient un chiffre plus juste via `coutParCollaborateur`.
   */
  coutParCollaborateurEstime: number
}

export type Tarif = TarifSurDevis | TarifChiffre

/**
 * Tarification complète pour un effectif donné.
 *
 * Au-delà de `PLAFOND_DEVIS_ETP`, aucun montant n'est renvoyé : l'interface
 * doit inviter au contact plutôt qu'extrapoler un barème qui n'engage personne.
 */
export function calculerTarif(etp: number): Tarif {
  if (etp > PLAFOND_DEVIS_ETP) return { surDevis: true, etp }

  const catalogue = prixCatalogue(etp)

  return {
    surDevis: false,
    etp,
    catalogue,
    coutParEtp: catalogue / etp,
    coutParCollaborateurEstime: catalogue / (etp * RATIO_COLLABORATEURS_PAR_ETP),
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
 * Affiché au centime lorsque le montant tombe juste (33,5 → « 33.50 »), sinon
 * arrondi au franc (35,33… → « 35 »). Un coût par ETP n'est pas un montant
 * facturé mais un ordre de grandeur : afficher « 35.33 » suggérerait une
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
