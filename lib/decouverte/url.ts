/**
 * Adresses publiques du module libre.
 *
 * Le lien circule par e-mail et en messagerie interne : il doit être absolu
 * partout — métadonnées Open Graph, lien canonique, message de partage — et
 * identique dans les trois, sans quoi la mesure de l'audience se disperserait
 * entre plusieurs variantes de la même adresse.
 *
 * Avec le `www` : la production redirige `learna.ch` vers `www.learna.ch` en
 * 307. Sans lui, la page se déclarait canonique sur une adresse qui redirige,
 * en contradiction avec la redirection du site, et chaque lien partagé payait
 * un saut supplémentaire — sur la page faite pour circuler, c'est précisément
 * là que cela se paie.
 */
export const SITE_URL = "https://www.learna.ch"

export function urlModuleLibre(slug: string): string {
  return `${SITE_URL}/decouvrir/${slug}`
}
