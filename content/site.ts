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
//
// ⚠️ Aucun montant ni aucune valeur du barème ne s'écrit en clair ici : tout
// vient de `lib/tarifs`, seule source de vérité tarifaire.
// ─────────────────────────────────────────────────────────────────────────────

import {
  ADAPTATION_DISPONIBLE_DES_MOIS,
  ADAPTATION_HEURES_MAX,
  ADAPTATION_HEURES_MIN,
  ENGAGEMENT_GEL_ANNEES,
  formaterCHF,
  INDEXATION_PLAFOND_POURCENT,
  INDEXATION_PREAVIS_MOIS,
  SUR_MESURE_INCLUS_DES_ETP,
  SUR_MESURE_MIN_CHF,
  SUR_MESURE_MAX_CHF,
} from "@/lib/tarifs"

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
    "Formations continues, journées thématiques, cursus spécialisés : l'offre est nombreuse et de qualité. Elle repose sur des inscriptions individuelles, une ou deux personnes partent, l'équipe reste.",
    "Libérer un collaborateur suppose un remplacement, un budget, une réorganisation du service. Toutes les fonctions n'y ont pas le même accès.",
    "Équipes de nuit, remplaçant·es, personnel administratif, intendance et technique figurent rarement dans les plans de formation : alors qu'ils croisent quotidiennement les personnes accompagnées.",
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
    "Le numérique ne remplace pas la formation en présentiel, il ouvre de nouvelles complémentarités. C'est la logique du blended learning, appliquée aux réalités institutionnelles.",
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
        "Un module suivi par toute l'équipe devient un point de départ en colloque, un support de discussion partagé plutôt qu'un savoir individuel.",
    },
  ],
}

// ─── Formation signature — repères partagés ──────────────────────────────────
//
// « Votre formation signature » désigne l'adaptation contextuelle : un module
// existant du catalogue, retravaillé avec les situations, le vocabulaire et les
// références de l'institution. Elle est comprise dans toute licence.
//
// Le module écrit entièrement sur mesure est une prestation distincte, facturée
// à part (voir `moduleSurMesure`). Les deux étaient auparavant confondus sous
// le même nom, pour une charge de production sans commune mesure.
//
// Le délai de production est annoncé par /tarifs, par la FAQ et par
// /la-solution. Trois formulations en dur, c'est une divergence garantie à la
// première révision : /tarifs comptait depuis le cadrage, la FAQ depuis la
// réception des contenus validés, et un directeur qui lisait les deux pages en
// concluait que l'un des deux chiffres était faux.
//
// Ne jamais réécrire un délai, une enveloppe ni un montant en clair dans une
// page : consommer ces valeurs.

const DELAI_SUR_MESURE = "environ trois mois"

/** Enveloppe de travail d'une adaptation, en clair : « 8 à 10 heures ». */
const ENVELOPPE_ADAPTATION = `${ADAPTATION_HEURES_MIN} à ${ADAPTATION_HEURES_MAX} heures`

/** Ouverture de l'adaptation dans l'année de licence. */
const DISPONIBILITE_ADAPTATION = `dès le ${ADAPTATION_DISPONIBLE_DES_MOIS}e mois`

export const formationSignature = {
  /** Intitulé public, au fil du texte. */
  intitule: "votre formation signature",

  /** Ce que la prestation est, en une phrase. */
  definition:
    "Un module du catalogue retravaillé pour votre institution : vos situations, votre vocabulaire, vos références internes à la place des exemples génériques.",

  /** Le rythme et la disponibilité, pour les phrases qui les nomment. */
  rythme: "une adaptation par année de licence",
  disponibilite: DISPONIBILITE_ADAPTATION,

  /**
   * L'enveloppe de travail, annoncée explicitement.
   *
   * Elle est publique et non négociable : c'est elle qui rend la charge de
   * production prévisible, et elle qui distingue l'adaptation du module écrit
   * de bout en bout. La taire ferait attendre un travail sans limite.
   */
  enveloppe: ENVELOPPE_ADAPTATION,

  /** Réponse de référence à « combien de temps ? », reprise par les deux FAQ. */
  reponseDelai: `L'adaptation représente une enveloppe de ${ENVELOPPE_ADAPTATION} de travail, ouverte ${DISPONIBILITE_ADAPTATION} : les premiers mois servent à identifier les modules qui comptent pour vos équipes. Une fois le module choisi et vos éléments réunis, la mise en ligne intervient sous quelques semaines.`,
}

// ─── Module entièrement sur mesure — prestation distincte ────────────────────

export const moduleSurMesure = {
  /** Intitulé public. */
  intitule: "un module entièrement sur mesure",

  definition:
    "Une formation écrite de bout en bout à partir de vos documents et des échanges avec vos équipes, sur un sujet qui n'existe pas au catalogue.",

  /**
   * Fourchette indicative, jamais un prix ferme : le forfait dépend de
   * l'ampleur et s'arrête sur devis.
   */
  fourchette: `${formaterCHF(SUR_MESURE_MIN_CHF)} à ${formaterCHF(SUR_MESURE_MAX_CHF)} CHF`,

  /** Les deux cas où la prestation est comprise sans supplément. */
  inclusionSansSupplement: `au-delà de ${SUR_MESURE_INCLUS_DES_ETP} ETP, ou en cas d'engagement sur ${ENGAGEMENT_GEL_ANNEES} ans`,

  delai: DELAI_SUR_MESURE,
  delaiBorne: `${DELAI_SUR_MESURE} entre le premier entretien de cadrage et la mise en ligne`,
}

// ─── Conditions de la licence ────────────────────────────────────────────────
//
// Source unique des trois règles contractuelles annoncées publiquement. La
// section « Conditions » de /tarifs et l'accordéon FAQ les consomment toutes
// deux : c'est ce qui garantit que la page et le balisage FAQPage disent la
// même chose.
//
// Registre : ces règles se constatent, elles ne se vendent pas. Le gel du tarif
// n'est jamais présenté comme un rabais, et aucune remise n'est mentionnée.

export type ConditionLicence = {
  /** Identifiant stable, réutilisé comme clé d'accordéon. */
  id: string
  titre: string
  /** Formulation courte, pour la section « Conditions » sous la grille. */
  texte: string
  /** La même règle en réponse à une question, pour la FAQ et son JSON-LD. */
  question: string
  reponse: string
}

export const conditionsLicence: ConditionLicence[] = [
  {
    id: "indexation",
    titre: "Indexation annuelle",
    texte: `Le tarif peut être indexé au renouvellement, dans la limite de ${INDEXATION_PLAFOND_POURCENT} % par année. Toute indexation est annoncée ${INDEXATION_PREAVIS_MOIS} mois avant l'échéance.`,
    question: "Le tarif peut-il évoluer d'une année à l'autre ?",
    reponse: `Le tarif est garanti pendant toute la durée du contrat. Au renouvellement, il peut être indexé dans la limite de ${INDEXATION_PLAFOND_POURCENT} % par année. Toute indexation vous est annoncée ${INDEXATION_PREAVIS_MOIS} mois avant l'échéance, de façon à ce qu'elle puisse être portée au budget.`,
  },
  {
    id: "engagement",
    titre: `Engagement sur ${ENGAGEMENT_GEL_ANNEES} ans`,
    texte: `Un engagement sur ${ENGAGEMENT_GEL_ANNEES} ans gèle le tarif sur toute la période : il n'est pas indexé.`,
    question: `Que change un engagement sur ${ENGAGEMENT_GEL_ANNEES} ans ?`,
    reponse: `Le tarif est gelé sur toute la période : il n'est pas indexé au renouvellement. Le module entièrement sur mesure est par ailleurs compris sans supplément. Le montant de la licence, lui, reste celui du barème.`,
  },
  {
    id: "prorata",
    titre: "Signature en cours d'année",
    texte:
      "La première année est facturée au prorata des mois restants, puis la licence s'aligne sur l'année civile. Une institution peut donc signer hors de son cycle budgétaire.",
    question: "Faut-il attendre le début de l'année pour souscrire ?",
    reponse:
      "Non. La première année est facturée au prorata des mois restants, puis la licence s'aligne sur l'année civile. Vous pouvez donc signer à n'importe quel moment de votre cycle budgétaire sans payer une année pleine pour quelques mois d'accès.",
  },
]

// ─── Section formation signature (accueil) ───────────────────────────────────

// Prestation comprise dans la licence : un module du catalogue retravaillé pour
// la seule institution cliente, hébergé aux côtés du catalogue commun. À
// distinguer des parcours en partenariat ci-dessous, qui enrichissent le
// catalogue partagé, et du module écrit sur mesure, facturé à part.
export const formationInstitution = {
  titre: "Votre formation signature",
  introduction:
    "Au-delà du catalogue commun, chaque licence comprend votre formation signature : un module existant, retravaillé avec les situations, le vocabulaire et les références de votre institution, et accessible à vos seules équipes. Vos exemples remplacent les exemples génériques, sans que vous ayez à écrire la formation.",
  colonnes: [
    {
      titre: "Accueillir",
      texte:
        "Un nouveau collaborateur, un·e remplaçant·e ou un·e veilleur·euse qui prend son premier service dispose des repères de la maison dès son arrivée, à toute heure et sans mobiliser l'équipe en place.",
    },
    {
      titre: "Harmoniser",
      texte:
        "Ce qui est transmis ne dépend plus de la personne disponible ce jour-là. Chacun reçoit les mêmes informations, dans la même forme, quelle que soit sa fonction ou son horaire.",
    },
    {
      titre: "Aller plus loin",
      texte:
        "Une adaptation est comprise chaque année dans la licence. Un module écrit entièrement sur mesure, sur un sujet absent du catalogue, relève d'un mandat distinct.",
    },
  ],
  cta: {
    libelle: "Parler de votre besoin →",
    href: "/contact",
  },
}

// ─── Section parcours en partenariat (/la-solution) ──────────────────────────

export const parcoursPartenariat = {
  titre: "Des parcours développés avec votre institution",
  paragraphes: [
    "Le catalogue Learna évolue au fil des besoins identifiés sur le terrain. Certains de ces besoins sont propres à une institution, à un secteur ou à un projet en cours. Nous développons également des parcours en partenariat, construits à partir de vos priorités et mis à disposition de vos équipes sur la plateforme.",
    "Ces parcours suivent la même démarche que les formations du catalogue : ils partent d'une question de terrain et se construisent avec les professionnel·les concerné·es.",
    `Chaque licence comprend par ailleurs votre formation signature, visible de vos seuls collaborateurs. ${formationSignature.definition} Comptez ${formationSignature.rythme}, ouverte ${formationSignature.disponibilite}, pour une enveloppe de ${formationSignature.enveloppe} de travail.`,
    `Écrire un module entièrement sur mesure, sur un sujet qui n'existe pas au catalogue, est une autre affaire : c'est une prestation distincte et facturée, sous forme d'un forfait selon l'ampleur, arrêté sur devis, dans une fourchette indicative de ${moduleSurMesure.fourchette}. Elle est comprise sans supplément ${moduleSurMesure.inclusionSansSupplement}.`,
  ],
  cta: {
    libelle: "Discuter d'un parcours co-développé pour le catalogue →",
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
