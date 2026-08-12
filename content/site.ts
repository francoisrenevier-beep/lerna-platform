// ─────────────────────────────────────────────────────────────────────────────
// Contenu éditorial des pages publiques.
//
// Source unique de vérité pour les textes partagés entre l'accueil et
// /la-solution. Modifier ici plutôt que dans les composants.
//
// Registre : complémentarité avec le présentiel, jamais comparaison
// d'efficacité. Vocabulaire de référence — éveiller, sensibiliser, base
// commune, porte d'entrée, regard partagé, socle commun.
//
// ⚠️ Ne pas réintroduire de référence chiffrée au nombre de formations ou de
// domaines : ces valeurs périment à chaque publication au catalogue.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Hero de l'accueil ───────────────────────────────────────────────────────

export type HeroMention = {
  /** Mention principale, mise en avant typographiquement. Jamais un chiffre. */
  mention: string
  /** Précision secondaire, affichée sous la mention. */
  precision: string
}

export const hero = {
  titre: "Former les équipes, élargir les regards",
  soutitre:
    "L'offre de formation n'a jamais été aussi riche. Mais elle passe encore par des parcours individuels, auxquels une partie seulement des équipes accède. Learna rend ces connaissances disponibles au sein de l'institution, pour l'ensemble des collaborateurs.",
  mentions: [
    { mention: "Accès illimité", precision: "Tous les collaborateurs de l'institution" },
    { mention: "Nouvelles formations incluses", precision: "Sans supplément" },
    { mention: "Modules courts", precision: "20 à 60 minutes" },
  ] satisfies HeroMention[],
}

// ─── Bloc constat / réponse (accueil + /la-solution) ─────────────────────────

export const constat = {
  titre: "Une offre riche, un accès inégal",
  problemes: [
    "Formations continues, journées thématiques, cursus spécialisés : l'offre est nombreuse et de qualité. Elle repose sur des inscriptions individuelles — une ou deux personnes partent, l'équipe reste.",
    "Libérer un collaborateur suppose un remplacement, un budget, une réorganisation du service. Toutes les fonctions n'y ont pas le même accès.",
    "Équipes de nuit, remplaçant·es, personnel administratif, intendance et technique figurent rarement dans les plans de formation — alors qu'ils croisent quotidiennement les personnes accompagnées.",
  ],
  reponseTitre: "Ce que Learna ajoute",
  solutions: [
    "Une offre qui complète les formations présentielles et s'adresse à l'ensemble des secteurs de l'institution.",
    "Un socle commun de réflexion, avec des outils directement mobilisables sur le terrain.",
    "Une sensibilisation qui atteint aussi les fonctions habituellement en périphérie des plans de formation.",
  ],
}

// ─── Section blended learning (accueil) ──────────────────────────────────────

export const blendedLearning = {
  titre: "Avant, pendant, après le présentiel",
  introduction:
    "Le numérique ne remplace pas la formation en présentiel — il ouvre de nouvelles complémentarités. C'est la logique du blended learning, appliquée aux réalités institutionnelles.",
  colonnes: [
    {
      titre: "Préparer",
      texte:
        "Une équipe arrive à la journée thématique avec un vocabulaire commun déjà posé. Le temps en présentiel est consacré à l'approfondissement plutôt qu'aux bases.",
    },
    {
      titre: "Prolonger",
      texte:
        "La formation ne s'arrête pas à la fin de la journée. Chacun peut y revenir, à son rythme, quand la question se repose sur le terrain.",
    },
    {
      titre: "Nourrir les échanges",
      texte:
        "Un module suivi par toute l'équipe devient un point de départ en colloque — un support de discussion partagé plutôt qu'un savoir individuel.",
    },
  ],
}

// ─── Section parcours en partenariat (/la-solution) ──────────────────────────

export const parcoursPartenariat = {
  titre: "Des parcours développés avec votre institution",
  paragraphes: [
    "Le catalogue Learna évolue au fil des besoins identifiés sur le terrain. Certains de ces besoins sont propres à une institution, à un secteur ou à un projet en cours. Nous développons également des parcours en partenariat, construits à partir de vos priorités et mis à disposition de vos équipes sur la plateforme.",
    "Ces parcours suivent la même démarche que les formations du catalogue : ils partent d'une question de terrain et se construisent avec les professionnel·les concerné·es.",
  ],
  cta: {
    libelle: "Discuter d'un parcours sur mesure →",
    href: "/contact?sujet=parcours-mesure",
  },
}

// ─── Témoignages ─────────────────────────────────────────────────────────────

export type Temoignage = {
  /** Verbatim réel. Un témoignage sans citation n'est pas affiché. */
  quote: string
  author: string
  /** Fonction exercée — ex. « Éducatrice ». */
  role: string
  /**
   * Type d'institution, affiché à la suite de la fonction :
   * « Éducatrice — foyer pour adultes en situation de handicap ».
   * Laisser vide tant que l'information n'est pas confirmée.
   */
  typeInstitution?: string
  /** Nom de l'institution, affiché en emerald si renseigné. */
  institution?: string
}

// Ajouter ici d'autres témoignages au fil des retours.
// Un témoignage dont le champ `quote` est vide n'est pas rendu — c'est ce qui
// permet de réserver l'emplacement direction ci-dessous sans afficher de carte
// vide ni inventer de contenu.
export const temoignages: Temoignage[] = [
  {
    quote:
      "Je travaille depuis quinze ans et j'ai quand même appris des choses. Le découpage en niveaux m'a permis d'aller à mon rythme sans me sentir perdue.",
    author: "Nathalie C.",
    role: "Éducatrice",
    typeInstitution: "",
  },
  {
    quote:
      "J'ai suivi une formation en trois fois, sans perdre le fil. Le découpage en sections aide à reprendre là où on s'est arrêté.",
    author: "Patrick",
    role: "Assistant socio-éducatif",
    typeInstitution: "",
  },
  {
    quote:
      "Pouvoir avancer quand je veux, sans date imposée, ça correspond à mon emploi du temps en horaires décalés.",
    author: "Samira",
    role: "Veilleuse",
    typeInstitution: "",
  },
  // ⚠️ EMPLACEMENT RÉSERVÉ — témoignage de direction.
  // Les trois témoignages ci-dessus portent tous sur le rythme et le découpage,
  // c'est-à-dire sur le confort de l'apprenant. Il manque une voix de direction
  // portant sur la portée institutionnelle (accès élargi, socle commun).
  // Remplir `quote`, `author`, `role` et `typeInstitution` avec un verbatim réel
  // pour que la carte apparaisse.
  {
    quote: "",
    author: "",
    role: "",
    typeInstitution: "",
  },
]
