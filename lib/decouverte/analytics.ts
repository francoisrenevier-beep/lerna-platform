// ─────────────────────────────────────────────────────────────────────────────
// Événements du module en accès libre.
//
// S'appuie sur @vercel/analytics, déjà monté dans app/layout.tsx. `track()` est
// silencieux tant que <Analytics /> n'est pas rendu (hors production) : aucun
// garde-fou supplémentaire n'est nécessaire ici.
//
// Aucune propriété ne contient de donnée personnelle : ni e-mail, ni contenu de
// réponse, seulement le slug du module et des valeurs agrégées.
// ─────────────────────────────────────────────────────────────────────────────

import { track } from "@vercel/analytics"

/**
 * L'écran de fin compte trois appels à l'action cliquables : le partage par
 * e-mail et la copie du lien, qui sont les deux mécanismes de « Envoyer ce
 * module à mes collègues », puis le contact. Le dépôt d'e-mail est mesuré à
 * part, c'est un formulaire et non un appel à l'action.
 */
export type EvenementDecouverte =
  | "decouverte_page_vue"
  | "decouverte_demarrage"
  | "decouverte_progression"
  | "decouverte_quiz_termine"
  | "decouverte_partage_email"
  | "decouverte_partage_copie"
  | "decouverte_contact"
  | "decouverte_email_depose"

type Proprietes = Record<string, string | number | boolean | null>

function envoyer(nom: EvenementDecouverte, proprietes: Proprietes): void {
  try {
    track(nom, proprietes)
  } catch {
    // La mesure ne doit jamais interrompre la lecture du module.
  }
}

export const mesure = {
  pageVue: (slug: string) => envoyer("decouverte_page_vue", { module: slug }),

  /** Émis une seule fois, au premier franchissement de section. */
  demarrage: (slug: string) => envoyer("decouverte_demarrage", { module: slug }),

  progression: (slug: string, jalon: number) =>
    envoyer("decouverte_progression", { module: slug, jalon }),

  quizTermine: (slug: string, score: number, total: number) =>
    envoyer("decouverte_quiz_termine", { module: slug, score, total }),

  partageEmail: (slug: string) => envoyer("decouverte_partage_email", { module: slug }),

  partageCopie: (slug: string) => envoyer("decouverte_partage_copie", { module: slug }),

  contact: (slug: string) => envoyer("decouverte_contact", { module: slug }),

  emailDepose: (slug: string) => envoyer("decouverte_email_depose", { module: slug }),
}
