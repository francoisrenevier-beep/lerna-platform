"use client"

import { createContext, useContext, type ReactNode } from "react"

/**
 * Mode fiche : le module rendu pour être imprimé, depuis l'admin.
 *
 * Les modules sont pensés pour l'écran. Le quiz n'y montre qu'une question à la
 * fois et mélange ses réponses, et l'introduction de certains modules est une
 * vidéo : imprimés tels quels, ils perdraient l'essentiel de leur quiz.
 *
 * Plutôt qu'une seconde version imprimable de chaque module — qui dériverait de
 * l'originale à la première correction de texte —, la page de fiche rend le
 * module lui-même sous ce contexte, et seuls les composants concernés changent
 * d'allure. Hors de ce contexte, rien ne change pour l'apprenant.
 */
export type ModeFiche = {
  /** Bonne réponse et explication imprimées sous chaque question du quiz. */
  corrige: boolean
}

const ModeFicheContexte = createContext<ModeFiche | null>(null)

export function ModeFicheFourni({ corrige, children }: ModeFiche & { children: ReactNode }) {
  return <ModeFicheContexte.Provider value={{ corrige }}>{children}</ModeFicheContexte.Provider>
}

export function useModeFiche(): ModeFiche | null {
  return useContext(ModeFicheContexte)
}
