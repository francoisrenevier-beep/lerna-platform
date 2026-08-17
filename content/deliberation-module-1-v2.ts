// ─────────────────────────────────────────────────────────────────────────────
// CONTENU — Module 1 V2 : Le Paysage de l'Éthique — Fondements et délibération
// Modifiez ce fichier pour adapter les textes sans toucher au code de rendu.
// Pour le gras inline, utilisez **mot** (ex: "la **phronesis** d'Aristote")
// ─────────────────────────────────────────────────────────────────────────────

type Etape = {
  niveau: string
  nom: string
  definition: string
}

type Colonne = {
  titre: string
  contenu: string[]
}

type QuizQuestion = {
  question: string
  reponses: string[]
  bonneReponse: number
  explication: string
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export const hero: {
  numero: number
  categorie: string
  titre: string
  titrePart2: string
  sousTitre: string
  duree: string
  niveau: string
  videoYoutube: string
} = {
  numero: 1,
  categorie: "Éthique professionnelle",
  titre: "Le Paysage de l'Éthique",
  titrePart2: "Fondements et délibération",
  sousTitre:
    "L'éthique est présente chaque jour dans le travail social, pas seulement dans les grandes décisions. Ce module pose les outils pour y réfléchir avec rigueur, en équipe.",
  duree: "40 minutes",
  niveau: "Intermédiaire",
  videoYoutube: "icKz8P2Hf2o",
}

// ── Accroche & objectifs ──────────────────────────────────────────────────────

export const sAccroche: {
  eyebrow: string
  titre: string
  texte_ouverture: string
  situations: string[]
  texte1: string
  valeurs_label: string
  valeurs_question: string
  valeurs_note: string
  texte_reglementation: string
  texte_valeurs_perso: string
  texte2: string
  objectifs_label: string
  objectifs_titre: string
  objectifs: string[]
} = {
  eyebrow: "Introduction",
  titre: "L'éthique est là, chaque jour.",
  texte_ouverture:
    "L'éthique est souvent évoquée pour les grandes décisions ou les situations extraordinaires. Dans le travail social, elle est présente chaque jour : dans les gestes ordinaires, les petits arbitrages, les mots choisis au moment de l'accompagnement.",
  situations: [
    "Un résident mange moins depuis une semaine. Insistez-vous, au risque de heurter son autonomie, ou laissez-vous faire, au risque de négliger sa santé ?",
    "Une personne accompagnée refuse l'aide à la toilette dont elle a besoin pour sa sécurité. À quel moment le respect de son refus devient-il un abandon ?",
    "Un collègue minimise une situation préoccupante lors du colloque d'équipe. Prenez-vous la parole, au risque de créer un conflit, ou vous taisez-vous, au risque de manquer à votre responsabilité professionnelle ?",
  ],
  texte1:
    "Ces situations ont quelque chose en commun : **plusieurs valeurs importantes entrent en tension**. Ce n'est pas un manque de compétence, c'est la nature même du travail d'accompagnement.",
  valeurs_label: "La tension la plus fréquente",
  valeurs_question:
    "Une personne adulte que vous accompagnez souhaite fumer. Elle est consciente des risques. Elle fait ce choix librement. À quel moment votre rôle est-il de la protéger malgré elle ?",
  valeurs_note:
    "L'autonomie et la sécurité sont deux valeurs également légitimes. La délibération éthique ne cherche pas à contourner les règlements en place, elle pose la question de leur pertinence dans chaque situation concrète. Parfois, cela confirme le fonctionnement existant. Parfois, cela conduit à l'ajuster légèrement.",
  texte_reglementation:
    "Dans chaque équipe, des fonctionnements s'installent souvent de manière implicite : une tolérance tacite, une pratique normalisée sans qu'elle ait jamais été vraiment décidée. Les situations de tension éthique sont l'occasion de mettre ces fonctionnements à plat : vérifier si la règle, implicite ou explicite, est adaptée, partagée par tous, et mérite d'être maintenue ou légèrement affinée.",
  texte_valeurs_perso:
    "Nous portons aussi des valeurs personnelles, forgées par notre histoire, nos convictions, notre identité. Ces valeurs informent notre lecture des situations, parfois sans que nous en ayons conscience. Ce qui vous semble évident ne l'est pas forcément pour votre collègue, non par manque de compétence, mais parce que vos priorisations diffèrent. Sans espace de délibération partagé, chaque professionnel agit selon sa propre hiérarchie de valeurs. Cela peut fragiliser la **cohérence de l'accompagnement**.",
  texte2:
    "**Cette formation ne cherche pas à vous fournir des réponses.** Elle cherche à guider votre réflexion, pour que vos décisions s'appuient sur des éléments explicites et partagés. La délibération éthique en équipe permet, dans la majorité des cas, de rallier l'équipe autour d'une décision commune. Rallier une équipe à une décision partagée est l'un des leviers les plus puissants de l'accompagnement.",
  objectifs_label: "Ce que vous allez construire dans ce module",
  objectifs_titre: "À l'issue de ce module, vous serez en mesure de :",
  objectifs: [
    "Distinguer éthique et morale dans des situations concrètes de votre pratique",
    "Identifier les trois pôles du triangle éthique de Ricœur et les mobiliser pour cartographier une situation",
    "Nommer les quatre approches éthiques fondamentales et reconnaître laquelle vous utilisez le plus spontanément",
    "Formuler ce qui distingue un problème éthique authentique d'une simple question réglementaire",
  ],
}

// ── Section 1 — Éthique et morale ─────────────────────────────────────────────

export const sEthiqueMorale: {
  eyebrow: string
  titre: string
  texte_intro: string
  tableau_titre: string
  tableau_col_dim: Colonne
  tableau_col_morale: Colonne
  tableau_col_ethique: Colonne
  texte_apres_tableau: string
  terrain_label: string
  terrain_texte: string
  texte_legault: string
  pullquote: string
} = {
  eyebrow: "Section 1",
  titre: "Éthique et morale : deux registres complémentaires",
  texte_intro:
    "Paul Ricœur distingue la **morale** (domaine des normes, des obligations et des interdits) de l'**éthique**, qui interroge ce que signifie bien agir dans un contexte donné. Cette distinction n'est pas un jeu de mots philosophique : elle a des conséquences directes sur votre façon de travailler.",
  tableau_titre: "Morale et éthique : deux registres distincts",
  tableau_col_dim: {
    titre: "Dimension",
    contenu: [
      "Question centrale",
      "Mode de raisonnement",
      "Portée",
      "Quand elle intervient",
    ],
  },
  tableau_col_morale: {
    titre: "Morale",
    contenu: [
      "Qu'est-ce qui est permis ou interdit ?",
      "Application de règles et de normes",
      "Universelle : valable pour tous, dans tous les contextes",
      "Quand une règle claire couvre la situation",
    ],
  },
  tableau_col_ethique: {
    titre: "Éthique",
    contenu: [
      "Que signifie bien agir, ici, avec cette personne ?",
      "Délibération, discernement et argumentation en situation",
      "Singulière : liée au contexte, aux personnes, aux valeurs en jeu",
      "Quand la règle ne suffit plus ou quand plusieurs valeurs entrent en tension",
    ],
  },
  texte_apres_tableau:
    "La morale est nécessaire, elle pose le cadre commun sans lequel aucune institution ne peut fonctionner. Mais elle ne suffit pas, parce que la réalité des personnes accompagnées dépasse toujours les règles générales. L'éthique est précisément l'espace dans lequel vous travaillez quand le règlement ne vous donne pas la réponse.",
  terrain_label: "Sur le terrain",
  terrain_texte:
    "Pensez à l'éducateur confronté à une résidente de 80 ans dont le verre de vin du soir est peut-être son dernier espace de liberté autonome. Appliquer le règlement est techniquement correct, mais est-ce que ce règlement a été pensé pour une situation comme celle-ci ? Est-ce que toute l'équipe l'interprète de la même façon ? Ces questions ne visent pas à contourner la règle, elles visent à l'examiner collectivement, pour que la décision soit cohérente, explicite, et partagée. C'est précisément là que morale et éthique divergent, dans le terrain, face à des personnes réelles.",
  texte_legault:
    "Selon Georges Legault, l'éthique appliquée est un **système ouvert** qui part de la complexité des situations et exige d'exposer la **justification réelle** des choix. Cette posture transforme le professionnel : il ne subit plus les dilemmes, il les travaille. Il ne cherche pas à appliquer mécaniquement une règle, mais à construire une réponse argumentée qui tient compte de toutes les dimensions de la situation.",
  pullquote:
    "La morale dit ce qui est permis. L'éthique interroge ce qui est juste, dans ce contexte, avec ces personnes. Ces deux registres ne s'opposent pas : ils se complètent.",
}

// ── Section 2 — Triangle de Ricœur ───────────────────────────────────────────

export const sTriangle: {
  eyebrow: string
  titre: string
  texte_intro: string
  schema_titre: string
  schema_etapes: Etape[]
  schema_note: string
  terrain_label: string
  terrain_texte: string
  highlight_label: string
  highlight_texte: string
} = {
  eyebrow: "Section 2",
  titre: "Le triangle de Ricœur : Je, Tu, Institution",
  texte_intro:
    "Ricœur propose une formule dense pour définir l'éthique : **« la visée de la vie bonne, avec et pour autrui, dans des institutions justes. »** Cette définition structure une architecture éthique en trois pôles indissociables. Ce qui est remarquable, c'est qu'elle ne choisit pas un camp : elle tient ensemble l'individu, la relation et le collectif.",
  schema_titre: "Les trois pôles du triangle éthique",
  schema_etapes: [
    {
      niveau: "Pôle Je",
      nom: "Estime de soi",
      definition:
        "L'aspiration à l'accomplissement personnel. Quelle sorte de professionnel est-ce que je veux être ? Ce pôle ancre l'éthique dans l'identité, pas seulement dans la conformité aux règles.",
    },
    {
      niveau: "Pôle Tu",
      nom: "Sollicitude",
      definition:
        "Se soucier de l'autre dans sa singularité. Quelle est sa situation réelle ? Qu'est-ce qu'il vit vraiment ? Ce pôle exige une présence authentique qui dépasse la collecte d'informations.",
    },
    {
      niveau: "Pôle Institution",
      nom: "Justice",
      definition:
        "Le cadre collectif du vivre-ensemble. Les règles qui organisent l'accès équitable aux ressources et aux droits pour tous. Nos décisions individuelles ont des effets sur le tissu social plus large.",
    },
  ],
  schema_note:
    "Un dilemme éthique surgit quand ces trois pôles entrent en tension. Le triangle ne dit pas quoi décider, il dit où regarder avant de décider. Ne rien oublier : ni la personne dans la règle, ni la règle dans la relation, ni la relation dans les intérêts collectifs.",
  terrain_label: "Sur le terrain",
  terrain_texte:
    "Lors de votre prochain colloque d'équipe, observez quel pôle occupe spontanément le plus de place dans les discussions. L'**Institution** (« le règlement dit... ») ? Le **Tu** (« pour Monsieur Untel, il faudrait... ») ? Le **Je** (« moi, en tant que professionnel... ») ? Identifier l'angle mort collectif de votre équipe, c'est déjà un acte éthique.",
  highlight_label: "Illustration : le dilemme du bracelet GPS",
  highlight_texte:
    "Un EMS veut équiper une résidente d'un bracelet GPS au nom de sa sécurité (Institution). La résidente refuse, revendiquant sa liberté de se déplacer dans le quartier (Je). Jean, l'éducateur qui l'accompagne depuis deux ans, sait que cette liberté est centrale dans son identité (Tu). Il est pris entre les trois pôles, il ne peut en ignorer aucun sans trahir quelque chose d'essentiel. Nous retrouverons cette situation en Section 4.",
}

// ── Section 3 — Les quatre boussoles ──────────────────────────────────────────

export const sBoussoles: {
  eyebrow: string
  titre: string
  texte_intro: string
  texte2: string
  schema_titre: string
  schema_etapes: Etape[]
  schema_note: string
  convergence_label: string
  convergence_texte: string
  pullquote: string
} = {
  eyebrow: "Section 3",
  titre: "Les quatre boussoles éthiques",
  texte_intro:
    "Le professionnel du travail social est traversé, dans ses pratiques, par des raisonnements éthiques implicites qui correspondent à des traditions philosophiques bien identifiées. Les connaître permet de les utiliser consciemment, plutôt que de les subir.",
  texte2:
    "La plupart d'entre nous activons plusieurs de ces approches en même temps, sans en avoir conscience. Quand vous dites « je dois signaler, c'est mon obligation », vous raisonnez de façon **déontologique**. Quand vous dites « si je signale, qu'est-ce que ça va changer concrètement ? », vous raisonnez de façon **utilitariste**. Quand vous dites « comment est-ce qu'elle vit ça, au fond ? », vous adoptez le prisme du **care**. Ces quatre approches fonctionnent comme des boussoles, chacune pointe vers un aspect différent du nord éthique.",
  schema_titre: "Quatre approches : quatre perspectives sur la même situation",
  schema_etapes: [
    {
      niveau: "Approche 1",
      nom: "Vertus",
      definition:
        "Qui dois-je être pour bien agir ? Sagesse pratique (phronesis) et développement du caractère (Aristote). Moins une règle à appliquer qu'une orientation vers le professionnel que je veux devenir. — Approfondi au Module 2.",
    },
    {
      niveau: "Approche 2",
      nom: "Déontologie",
      definition:
        "Quelles règles s'appliquent, quelles que soient les conséquences ? Dignité, confidentialité, obligations. Le Code de déontologie d'AvenirSocial s'inscrit dans cette logique : certaines actions sont interdites indépendamment de leurs effets.",
    },
    {
      niveau: "Approche 3",
      nom: "Utilitarisme",
      definition:
        "Quelles conséquences pour toutes les personnes concernées ? L'action qui produit le meilleur résultat global. Indispensable pour évaluer les impacts, mais nécessite des garde-fous pour ne pas sacrifier les individus au profit du collectif.",
    },
    {
      niveau: "Approche 4",
      nom: "Care",
      definition:
        "Quel soin singulier pour cette personne-là ? Vulnérabilité, relation et contexte au centre de la décision. Ce prisme interroge ce que prendre soin signifie vraiment, ici, maintenant, avec cette personne.",
    },
  ],
  schema_note:
    "Les flèches ne signifient pas une hiérarchie ou une séquence, ces quatre approches sont complémentaires, non concurrentes.",
  convergence_label: "Quand les approches convergent : et quand elles entrent en tension",
  convergence_texte:
    "Dans la **majorité des situations courantes**, ces quatre boussoles convergent, et il n'y a pas de vrai dilemme. Un résident qui chute régulièrement mérite protection (déontologie), la prévention réduit les risques pour tous (utilitarisme), prendre soin c'est le cœur du métier (vertus), et ce résident-là a besoin d'un suivi individualisé (care) : toutes les boussoles pointent dans la même direction. Le **dilemme éthique authentique** surgit quand les prismes donnent des réponses contradictoires. C'est précisément là que la délibération collective devient indispensable, on ne peut pas sortir seul d'un vrai dilemme éthique.",
  pullquote:
    "Ces quatre approches ne s'excluent pas, elles s'éclairent mutuellement. C'est précisément quand elles entrent en tension que la délibération éthique devient nécessaire.",
}

// ── Section 4 — Fil rouge Mme De Montmollin ──────────────────────────────────

export const sFilRouge: {
  eyebrow: string
  titre: string
  cas_label: string
  texte_cas: string
  texte_intro_lectures: string
  lectures: string[]
  texte_annonce: string
  reflexion_label: string
  reflexion_texte: string
} = {
  eyebrow: "Section 4",
  titre: "Fil rouge : Madame De Montmollin",
  cas_label: "La situation qui traversera toute la formation",
  texte_cas:
    "**Jean**, éducateur dans un EMS, découvre que **Madame De Montmollin**, 80 ans, résidente depuis trois ans suite au décès de son mari, achète et cache du vin lors de ses sorties libres dans le quartier. Sa consommation, environ une bouteille et demie par semaine, dépasse la limite autorisée par le règlement et crée un risque réel en interaction avec ses médicaments. Par ailleurs, la direction de l'EMS propose de l'intégrer à un projet pilote de bracelet GPS, avec couverture médiatique à la clé. Jean hésite entre trois options : **signaler à la direction**, **parler directement à Mme De Montmollin**, ou **soumettre la situation au colloque d'équipe**.",
  texte_intro_lectures:
    "Ce cas concentre des tensions que beaucoup d'entre vous reconnaîtront. Pour l'instant, regardons-le à travers nos quatre boussoles, pas pour le résoudre, mais pour **percevoir** ce qui est en jeu de chaque côté.",
  lectures: [
    "**Vertus** : Quel professionnel Jean veut-il être dans cette situation ? La réponse engage son identité, pas seulement sa conformité à une procédure.",
    "**Déontologie** : Le règlement existe et s'applique. La confidentialité lie Jean vis-à-vis de Mme De Montmollin. Ces deux obligations peuvent entrer en tension.",
    "**Utilitarisme**, Une chute grave ou un accident médicamenteux coûterait cher à tout le monde, à Mme De Montmollin d'abord. Mais que coûte la perte de sa liberté de promenade ?",
    "**Care** : Une femme qui cache du vin depuis la mort de son mari exprime peut-être quelque chose de bien plus profond qu'une transgression des règles. Qu'est-ce que Jean entend, vraiment ?",
  ],
  texte_annonce:
    "Cette situation sera analysée progressivement à travers chaque module. Au module 2, le prisme des vertus. Au module 3, la discussion en équipe. Au module 4, la méthode de délibération structurée. Au module 5, une analyse complète et approfondie. L'objectif n'est pas d'arriver à une « bonne réponse », c'est d'apprendre à penser avec rigueur face à des situations qui résistent aux réponses simples.",
  reflexion_label: "Notez votre première intuition",
  reflexion_texte:
    "Avant de passer au quiz, arrêtez-vous un instant : **quelle serait votre première réaction face à la situation de Jean ?** Pas la réponse « correcte », votre réaction instinctive. Notez-la mentalement. Au fil des modules, vous verrez si cette intuition résiste à la délibération, ou si elle s'est affinée, nuancée, enrichie. Les deux trajectoires sont également précieuses.",
}

// ── Quiz ──────────────────────────────────────────────────────────────────────

export const quiz: QuizQuestion[] = [
  {
    question: "Selon Paul Ricœur, l'éthique peut se définir comme :",
    reponses: [
      "L'ensemble des règles professionnelles qui prohibent les mauvaises actions",
      "La visée de la vie bonne, avec et pour autrui, dans des institutions justes",
      "Un code de conduite établi par l'institution pour ses employés",
      "Une décision individuelle fondée uniquement sur la conscience personnelle",
    ],
    bonneReponse: 1,
    explication:
      "La définition de Ricœur intègre les trois pôles du triangle éthique : le Je (visée personnelle de la vie bonne), le Tu (relation à autrui) et l'Institution (cadre collectif juste). Elle tient ensemble ces trois dimensions sans sacrifier l'une à l'autre, c'est ce qui la rend si opérante dans le travail social.",
  },
  {
    question: "Quelle est la principale différence entre éthique et morale dans la pratique professionnelle ?",
    reponses: [
      "La morale s'applique aux médecins, l'éthique aux travailleurs sociaux",
      "L'éthique interroge le sens de l'action dans une situation singulière ; la morale pose les règles et obligations communes",
      "L'éthique est plus importante que la morale parce qu'elle vient de la conscience",
      "La morale est propre à chaque culture, l'éthique est universelle",
    ],
    bonneReponse: 1,
    explication:
      "La morale renvoie aux normes et obligations (il faut / il ne faut pas), elle pose un cadre commun nécessaire. L'éthique interroge le sens de l'action dans une situation singulière, elle apparaît précisément quand les règles ne suffisent plus ou entrent en tension. Les deux registres sont complémentaires, non opposés.",
  },
  {
    question: "L'éthique du care met principalement l'accent sur :",
    reponses: [
      "Les règles universelles et les obligations déontologiques",
      "Le calcul des conséquences pour l'ensemble des personnes concernées",
      "La vulnérabilité, la relation singulière et le soin contextualisé",
      "Le développement des vertus et du caractère professionnel",
    ],
    bonneReponse: 2,
    explication:
      "L'éthique du care interroge comment une décision affecte le tissu relationnel et prend soin de la singularité de la personne, ce qu'elle vit vraiment, dans ce contexte précis. C'est un contrepoids précieux aux logiques trop abstraites ou trop calculatoires, essentiel dans le travail social.",
  },
  {
    question: "Dans le triangle de Ricœur, le pôle « Institution » désigne :",
    reponses: [
      "Le directeur ou la direction de l'établissement",
      "Le cadre collectif du vivre-ensemble et le sens de la justice",
      "Les règlements administratifs et les procédures internes uniquement",
      "La hiérarchie des responsabilités au sein de l'équipe",
    ],
    bonneReponse: 1,
    explication:
      "L'Institution chez Ricœur désigne le cadre collectif du vivre-ensemble, les règles qui organisent l'accès équitable aux ressources et aux droits. Elle n'est pas réductible à une direction ou à une procédure : elle renvoie à la justice comme dimension du lien social. Elle est une condition de la vie bonne, à condition d'être juste.",
  },
  {
    question:
      "Dans la majorité des situations professionnelles courantes, les quatre approches éthiques (vertus, déontologie, utilitarisme, care) :",
    reponses: [
      "S'opposent systématiquement, rendant toute décision impossible sans arbitrage extérieur",
      "Sont trop abstraites pour guider des décisions concrètes dans le travail social quotidien",
      "Convergent vers une même direction, la délibération collective devient nécessaire quand elles entrent en tension",
      "Doivent être appliquées dans l'ordre hiérarchique : vertus, puis déontologie, puis utilitarisme, puis care",
    ],
    bonneReponse: 2,
    explication:
      "Le dilemme éthique authentique surgit précisément quand les quatre approches donnent des réponses contradictoires, ce qui est l'exception, pas la règle. Dans la majorité des situations courantes, les boussoles convergent et le professionnel dispose d'un cap clair. Identifier quand elles divergent, c'est identifier le moment où la délibération collective devient indispensable.",
  },
]
