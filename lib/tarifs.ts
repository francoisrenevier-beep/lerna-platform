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

/** Socle institutionnel, en francs. Couvre l'accès de l'institution. */
export const SOCLE_CHF = 3000

/** ETP couverts par le seul socle, sans supplément. */
export const ETP_INCLUS = 50

/** Montant par ETP au-delà de `ETP_INCLUS`, en francs. */
export const PRIX_PAR_ETP_SUPPLEMENTAIRE = 25

/** Au-delà de cet effectif, aucun montant n'est affiché : proposition sur mesure. */
export const SEUIL_DEVIS = 400

/** Remise consentie pendant la phase de lancement. */
export const REMISE_LANCEMENT = 0.3

/** Bornes du champ de saisie du calculateur. */
export const ETP_MIN = 1
export const ETP_MAX = 2000

/** Effectif proposé par défaut dans le calculateur. */
export const ETP_DEFAUT = 80

/** Effectifs illustrés par le tableau de référence de la page /tarifs. */
export const LIGNES_REFERENCE = [30, 50, 75, 100, 150, 200, 300, 400] as const

/** Arrondi au multiple de 100 supérieur. */
function arrondiCentaineSuperieure(montant: number): number {
  return Math.ceil(montant / 100) * 100
}

/**
 * Licence annuelle au tarif catalogue, en francs.
 *
 * Défini pour tout effectif, y compris au-delà de `SEUIL_DEVIS` : c'est
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

/**
 * Licence annuelle au tarif de lancement, en francs.
 *
 * L'ordre des opérations compte : le prix catalogue est arrondi *avant* que la
 * remise s'applique. Arrondir après donnerait d'autres montants (p. ex. 3'625 ×
 * 0,7 = 2'537,50 → 2'600 au lieu de 3'700 × 0,7 = 2'590 → 2'600 ; l'écart se
 * creuse sur d'autres effectifs).
 *
 * La remise est appliquée en arithmétique entière (× 7 / 10 plutôt que × 0,7) :
 * `prixCatalogue` renvoie toujours un multiple de 100, le résultat est donc
 * exact, sans le résidu binaire que produirait une multiplication par 0,7.
 */
export function prixLancement(etp: number): number {
  const remise = (1 - REMISE_LANCEMENT) * 10 // 7, en dixièmes
  return arrondiCentaineSuperieure((prixCatalogue(etp) * remise) / 10)
}

export type TarifSurDevis = {
  surDevis: true
  etp: number
}

export type TarifChiffre = {
  surDevis: false
  etp: number
  /** Licence annuelle au tarif catalogue, en francs. */
  catalogue: number
  /** Licence annuelle au tarif de lancement, en francs. */
  lancement: number
  /** Coût annuel par ETP, calculé sur le tarif catalogue. */
  coutParEtpCatalogue: number
  /** Coût annuel par ETP, calculé sur le tarif de lancement. */
  coutParEtpLancement: number
  /** Coût mensuel par ETP, calculé sur le tarif de lancement. */
  coutParEtpMoisLancement: number
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
  const lancement = prixLancement(etp)

  return {
    surDevis: false,
    etp,
    catalogue,
    lancement,
    coutParEtpCatalogue: catalogue / etp,
    coutParEtpLancement: lancement / etp,
    coutParEtpMoisLancement: lancement / etp / 12,
  }
}

/** Contraint un effectif saisi aux bornes du calculateur. */
export function bornerEtp(etp: number): number {
  if (!Number.isFinite(etp)) return ETP_DEFAUT
  return Math.min(ETP_MAX, Math.max(ETP_MIN, Math.trunc(etp)))
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
