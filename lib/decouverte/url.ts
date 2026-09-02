/**
 * Adresses publiques du module libre.
 *
 * Le lien circule par e-mail et en messagerie interne : il doit être absolu
 * partout — métadonnées Open Graph, message de partage, e-mail de suivi — et
 * identique dans les trois, sans quoi la mesure de l'audience se disperserait
 * entre plusieurs variantes de la même adresse.
 */
export const SITE_URL = "https://learna.ch"

export function urlModuleLibre(slug: string): string {
  return `${SITE_URL}/decouvrir/${slug}`
}
