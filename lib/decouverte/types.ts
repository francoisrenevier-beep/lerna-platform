// ─────────────────────────────────────────────────────────────────────────────
// Types du module en accès libre.
//
// Un module libre est décrit par un descripteur (content/decouverte/<slug>.ts)
// qui réutilise le contenu déjà écrit pour la plateforme (content/<slug>.ts).
// Le texte n'est donc jamais dupliqué : le descripteur ne fait que déclarer
// l'ordre des sections et le type de rendu de chaque bloc.
// ─────────────────────────────────────────────────────────────────────────────

/** Question de QCM. Forme identique à celle attendue par components/module/Quiz.tsx. */
export type QuestionQuiz = {
  question: string
  reponses: string[]
  bonneReponse: number
  explication: string
}

/**
 * Un bloc de contenu, rendu par components/decouverte/RenduBloc.tsx.
 *
 * Chaque variante correspond à une primitive existante de components/module/ :
 * le module libre a exactement l'apparence de la plateforme, sans nouvelle
 * identité visuelle.
 *
 * Les chaînes acceptent la syntaxe **gras** utilisée par les fichiers content/.
 */
export type Bloc =
  | { type: "texte"; texte: string }
  | { type: "pullquote"; texte: string; source?: string }
  | { type: "liste"; items: string[]; couleur?: "bleu" | "vert" }
  | {
      type: "concept"
      label: string
      titre: string
      /** Rendu en liste à puces ; le gras y est interprété. */
      items?: string[]
      textes?: string[]
    }
  | {
      type: "highlight"
      label: string
      couleur?: "bleu" | "vert" | "jaune"
      textes?: string[]
      items?: string[]
    }
  | { type: "tableau"; titre?: string; colonnes: { titre: string; contenu: string[] }[] }
  | {
      type: "schema"
      titre: string
      etapes: { niveau: string; nom: string; definition: string }[]
      note?: string
    }
  // Réservé. La plateforme ne diffuse aujourd'hui ni vidéo ni audio : ce bloc
  // n'est utilisé par aucun module libre. Il est déclaré pour que l'ajout d'un
  // média plus tard n'impose pas de refondre le renderer — voir docs/module-libre.md.
  | {
      type: "media"
      format: "video" | "audio"
      source: string
      titre: string
      /** Pistes de sous-titres. Un média sans piste ni transcription ne doit pas être publié. */
      pistes?: { langue: string; libelle: string; src: string }[]
      transcription?: string
      poster?: string
    }

/**
 * Une section du module. `id` sert d'ancre, de cible du sommaire et d'unité
 * de progression : c'est le franchissement des sections qui fait avancer la
 * barre. Il doit rester stable, un changement invalide la progression déjà
 * enregistrée chez les visiteurs.
 */
export type SectionLibre = {
  id: string
  eyebrow?: string
  titre: string
  blocs: Bloc[]
}

/** En-tête du module, repris de `hero` dans les fichiers content/. */
export type HeroLibre = {
  numero: number
  categorie: string
  titre: string
  titrePart2?: string
  sousTitre: string
  duree: string
  niveau: string
}

export type ModuleLibre = {
  /** Segment d'URL : /decouvrir/<slug>. Ne jamais le changer une fois publié. */
  slug: string
  hero: HeroLibre
  /** Durée en minutes, pour les données structurées et l'e-mail de suivi. */
  dureeMinutes: number
  seo: {
    titre: string
    description: string
    /** Chemin absolu depuis /public. À défaut, l'image par défaut du site. */
    ogImage?: string
  }
  /** Formation dont ce module est extrait, pour le badge du catalogue public. */
  formationSlug: string
  formationTitre: string
  sections: SectionLibre[]
  quiz: QuestionQuiz[]
  /** Rappel, sur l'écran de fin, de ce que le module a couvert. */
  acquis: string[]
  /** Ce que la licence ajoute et qui n'est pas dans la version libre. */
  licenceAjoute: { titre: string; texte: string }[]
  /** Valeur passée à /contact?sujet=… par le CTA de fin. */
  contactSujet: string
}
