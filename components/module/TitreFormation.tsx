"use client"

import { createContext, useContext, type ReactNode } from "react"

/**
 * Titre de la formation, tel que la base le porte.
 *
 * Le nom d'une formation se change depuis l'admin ; les modules, eux, sont des
 * fichiers du dépôt et portent un libellé figé, écrit le jour de leur
 * rédaction. Les deux finissent par diverger, et la même formation s'affiche
 * alors sous deux noms : celui de la carte du catalogue, et celui de l'en-tête
 * du module.
 *
 * Ce contexte laisse la page — qui, elle, a lu la base — imposer le nom courant
 * à l'en-tête et au message de partage, sans que les quelque soixante-dix
 * modules du dépôt aient à être touchés. Renommer une formation dans l'admin
 * suffit désormais à corriger le site.
 *
 * Le libellé écrit dans le module reste le repli : base injoignable, formation
 * non publiée, module rendu hors d'une page qui fournit le contexte — le module
 * s'affiche alors comme avant, plutôt que sans nom.
 */
const TitreFormationContexte = createContext<string | null>(null)

export function TitreFormationFourni({
  titre,
  children,
}: {
  titre: string | null
  children: ReactNode
}) {
  return <TitreFormationContexte.Provider value={titre}>{children}</TitreFormationContexte.Provider>
}

export function useTitreFormation(repli: string): string {
  return useContext(TitreFormationContexte)?.trim() || repli
}
