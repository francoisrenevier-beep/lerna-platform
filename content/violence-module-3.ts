// ─────────────────────────────────────────────────────────────────────────────
// CONTENU — Module 3 : La logique d'intervention : désamorcer l'escalade
// Formation : Prévenir et gérer la violence envers les professionnel·les
// Modifiez ce fichier pour adapter le texte sans toucher au code.
// Pour le texte en gras, utilisez **mot** (ex: "Bonjour **Julien**")
// ─────────────────────────────────────────────────────────────────────────────

export const hero = {
  numero: 3,
  categorie: "Prévention et gestion de la violence",
  titre: "La logique d'intervention",
  titrePart2: "Désamorcer l'escalade",
  sousTitre:
    "Face à la tension qui monte, il existe des attitudes qui apaisent et des attitudes qui enflamment. Elles s'apprennent — et elles se partagent.",
  duree: "40 minutes",
  niveau: "Base",
}

export const sFilRouge = {
  eyebrow: "Fil rouge",
  titre: "Rejouer la scène",
  highlight_label: "La situation, au ralenti",
  texte1:
    "Revenons au bureau, vendredi 17h15. M. Keller vient d'apprendre le refus. Il se lève, hausse le ton : « Vous décidez de ma vie sans moi ! » Sarah, surprise, répond : « Monsieur Keller, calmez-vous, c'est le règlement, la décision a été prise en équipe. » Il fait un pas vers elle : « Le règlement ! Toujours le règlement ! » Elle recule contre le bureau : « Si vous continuez sur ce ton, l'entretien est terminé. » Le classeur vole.",
  texte2:
    "Chaque réplique de Sarah est compréhensible — et chacune, on va le voir, a probablement alimenté l'escalade. Ce module ne juge pas Sarah : il donne à toute l'institution ce qu'elle n'avait pas ce jour-là — une grammaire commune de la désescalade.",
}

export const sIntroduction = {
  eyebrow: "Introduction",
  titre: "La désescalade : une compétence relationnelle, pas un don",
  objectifs_label: "Objectifs",
  objectifs_titre: "À l'issue de ce module, vous serez en mesure de :",
  objectifs: [
    "Situer votre marge d'action selon la phase du cycle de l'agression",
    "Appliquer les principes de la désescalade verbale validés par la recherche (Richmond et al., 2012 ; Price & Baker, 2012)",
    "Reconnaître les attitudes qui, involontairement, alimentent l'escalade",
    "Savoir quand la désescalade s'arrête et où commence la priorité à la sécurité",
  ],
  texte1:
    "La désescalade verbale est l'ensemble des attitudes, paroles et comportements qui aident une personne en montée de tension à retrouver un état où le dialogue redevient possible. Longtemps considérée comme un talent personnel (« elle sait y faire »), elle est aujourd'hui décrite par la recherche comme une **compétence structurée**, dont les composantes ont fait l'objet d'un consensus international d'experts (Richmond et al., 2012), d'une synthèse systématique (Price & Baker, 2012) et d'une analyse conceptuelle actualisée (Hallett & Dickens, 2017) qui en dégage le cœur : établir les conditions d'une communication sûre, clarifier la préoccupation de la personne et tenter d'y répondre, manifester respect et empathie, et réguler les émotions — les siennes comprises. Autrement dit : cela s'apprend, cela se nomme, cela se partage.",
  texte2:
    "Un mot d'honnêteté scientifique, car il fonde la conception même de ce parcours : les revues systématiques récentes montrent que les formations à la désescalade améliorent les connaissances et la confiance des équipes, mais qu'aucun format court et théorique n'a, à lui seul, démontré rigoureusement une réduction des incidents (Price et al., 2015). C'est pourquoi la recherche actuelle développe des programmes co-construits avec les équipes et les usager·ères, combinant apports théoriques, entraînement pratique et travail sur l'environnement (programme EDITION, Price et al., 2024). Ce module vous donne la première brique — le langage et les repères communs — et assume que la suite passe par des mises en situation en présentiel et par le travail organisationnel du module 2. Prétendre le contraire serait précisément le genre de promesse que la littérature invite à ne pas faire.",
  texte3:
    "Un préalable essentiel : la désescalade repose sur un renversement de posture. Face à la tension, notre réflexe est de **défendre la décision** (expliquer, justifier, invoquer le cadre). La désescalade demande l'inverse : **s'occuper d'abord de la personne, ensuite du problème.** Tant que l'émotion est haute, aucun contenu ne passe. C'est le principe le plus contre-intuitif — et le plus important — de tout ce module.",
  pullquote_texte: "On ne calme pas une émotion avec un argument. On la calme avec une relation.",
}

export const sSeSituer = {
  eyebrow: "Section 1",
  titre: "D'abord : se situer dans le cycle",
  texte_intro:
    "Le module 1 a présenté le cycle de l'agression (Kaplan & Wheeler, 1983). Il devient ici un outil d'action : **la première question face à une tension n'est pas « que dire ? » mais « où en sommes-nous ? »**",
  schema_titre: "Quelle marge d'action selon la phase ?",
  schema_etapes: [
    {
      niveau: "Déclenchement",
      nom: "Marge maximale",
      definition:
        "Nommer ce qui se passe, écouter, ajuster le cadre de l'échange (s'asseoir, différer, proposer une pause). La plupart des crises évitées le sont ici — invisiblement.",
    },
    {
      niveau: "Escalade",
      nom: "Marge réelle mais exigeante",
      definition:
        "C'est le territoire de la désescalade verbale : les dix repères de la section suivante. Objectif unique : faire redescendre la tension, pas résoudre le problème.",
    },
    {
      niveau: "Crise",
      nom: "Marge relationnelle nulle",
      definition:
        "Priorité absolue à la sécurité : se mettre à distance, protéger les tiers, alerter selon la procédure de l'institution. On ne raisonne pas une crise.",
    },
    {
      niveau: "Récupération",
      nom: "Marge fragile",
      definition:
        "Présence calme, pas de reproches, pas de retour immédiat sur l'incident : la personne reste hyperréactive et peut « repartir ».",
    },
    {
      niveau: "Post-crise",
      nom: "Marge de reconstruction",
      definition:
        "À froid, reprise relationnelle avec la personne : que s'est-il passé pour elle ? qu'est-ce qui aurait pu l'aider ? Cette reprise est un acte d'accompagnement à part entière.",
    },
  ],
  highlight_label: "Un point de vocabulaire commun",
  highlight_texte:
    "« Désescalade » ne signifie pas « obtenir que la personne obéisse » ni « gagner la discussion ». Une désescalade réussie peut se terminer par un désaccord intact — mais exprimé sans violence, et par une relation préservée qui permettra d'y revenir. **Le succès se mesure à la baisse de la tension, pas au ralliement de la personne à notre point de vue.**",
}

export const sReperes = {
  eyebrow: "Section 2",
  titre: "Les dix repères de la désescalade verbale",
  texte_intro:
    "Le consensus international « Project BETA » (Richmond et al., 2012) a formalisé dix domaines de la désescalade verbale. Ils sont présentés ici adaptés au champ social — et chacun est illustré par ce qui s'est passé, ou aurait pu se passer, dans le bureau de Sarah.",
  concept_label: "Outil central",
  concept_titre: "Les dix repères (d'après Richmond et al., 2012)",
  concept_items: [
    "**1. Respecter l'espace personnel** : garder une distance d'au moins deux longueurs de bras, laisser à la personne — et à soi — un accès dégagé vers la sortie. Sarah, adossée au bureau, porte fermée : personne n'avait d'issue.",
    "**2. Ne pas provoquer** : mains visibles et détendues, posture de trois-quarts plutôt que face à face, ton bas et lent, pas de doigt pointé, pas de bras croisés. Le corps parle avant les mots.",
    "**3. Établir un contact verbal unique** : une seule personne parle avec la personne en tension. Si d'autres arrivent, elles sécurisent l'espace sans intervenir dans l'échange à plusieurs voix.",
    "**4. Être concis et répéter simplement** : sous tension, la capacité de traitement de l'information s'effondre. Phrases courtes, un message à la fois, répété calmement si nécessaire. Les longues explications sont inaudibles.",
    "**5. Identifier les besoins et les émotions** : derrière « vous décidez de ma vie sans moi ! », il y a un besoin de prise sur sa propre existence. L'entendre ne coûte rien et change tout : « Vous avez le sentiment qu'on décide sans vous. »",
    "**6. Écouter vraiment** : laisser finir les phrases, reformuler, tolérer les silences. L'écoute active est l'ingrédient le plus cité des études sur la désescalade (Price & Baker, 2012).",
    "**7. Trouver un point d'accord — ou acter le désaccord avec respect** : « Vous avez raison sur un point : cette décision a été prise sans vous, et je comprends que ce soit difficile à recevoir. » Donner raison sur ce qui est vrai n'est pas céder sur la décision.",
    "**8. Poser des limites claires et calmes** : nommer la limite sans menace ni ultimatum, en la reliant à la sécurité et non au pouvoir : « Je veux continuer cette discussion. Je ne peux pas le faire si les objets volent. » Comparer avec la version de Sarah : « Si vous continuez sur ce ton, l'entretien est terminé » — une menace qui acculait.",
    "**9. Offrir des choix réalistes** : le choix rend une prise à la personne — exactement ce dont la frustration l'a privée. « On peut continuer maintenant, ou je reviens vers vous demain matin avec le responsable. Qu'est-ce que vous préférez ? » Ne jamais proposer un choix qu'on ne peut pas tenir.",
    "**10. Débriefer — la personne et l'équipe** : après tout épisode de tension, une reprise a lieu : avec la personne (à froid), et en équipe. Ce dixième repère fait le pont avec la postvention (module 4).",
  ],
  tableau_titre: "Ce qui enflamme / ce qui apaise — synthèse pratique",
  tableau_col1_titre: "Attitudes qui alimentent l'escalade",
  tableau_col1_items: [
    "« Calmez-vous » (injonction paradoxale : personne ne s'est jamais calmé sur ordre)",
    "Justifier la décision par le règlement pendant que l'émotion monte",
    "Hausser le ton pour « reprendre la main »",
    "Menacer d'une conséquence (« sinon l'entretien est terminé »)",
    "Bloquer physiquement ou psychologiquement l'issue",
    "Prendre les insultes personnellement et y répondre",
  ],
  tableau_col2_titre: "Attitudes qui favorisent la désescalade",
  tableau_col2_items: [
    "Nommer l'émotion : « Je vois que cette décision vous met en colère »",
    "S'occuper de la personne d'abord, du problème ensuite",
    "Baisser le volume et ralentir le débit — la personne tend à s'accorder",
    "Poser une limite reliée à la sécurité, sans ultimatum",
    "Garantir une issue — spatiale et relationnelle — à chacun",
    "Se rappeler que la colère vise la situation et la fonction, rarement la personne",
  ],
  highlight_label: "Et les insultes ?",
  highlight_texte:
    "Ne pas répondre aux insultes pendant l'escalade ne signifie pas les accepter. Cela signifie **choisir le moment** : pendant la crise, la priorité est la sécurité et la baisse de tension ; après, à froid, la limite est reposée clairement avec la personne — car laisser les insultes sans reprise serait à la fois une banalisation de la violence et un abandon éducatif. Différer n'est pas renoncer.",
}

export const sSecurite = {
  eyebrow: "Section 3",
  titre: "Quand la désescalade s'arrête : la priorité à la sécurité",
  texte_intro:
    "La désescalade verbale a des limites, et les connaître fait partie de la compétence. Quand la personne entre en phase de crise — passage à l'acte imminent ou engagé — la posture change entièrement : **il ne s'agit plus d'accompagner, mais de protéger.**",
  concept_label: "Repères",
  concept_titre: "Les trois gestes de la phase de crise",
  concept_items: [
    "**Se mettre en sécurité** : augmenter la distance, quitter la pièce si nécessaire. Quitter n'est pas fuir ni abandonner la personne : c'est retirer de la situation l'un de ses combustibles.",
    "**Protéger les tiers** : éloigner les autres personnes présentes, en particulier les plus vulnérables.",
    "**Alerter** : selon la procédure de votre institution — collègues, cadre de permanence, et si nécessaire la police. Appeler à l'aide est un acte professionnel, jamais un échec.",
  ],
  highlight_label: "Ce que cette formation ne couvre pas — volontairement",
  highlight_texte:
    "Cette formation ne présente **aucune technique d'intervention physique**. Ces gestes ne s'apprennent pas en ligne : ils relèvent de formations spécialisées en présentiel, strictement encadrées, et de décisions institutionnelles qui dépassent le cadre de ce parcours. De même, les repères de désescalade présentés ici demandent à être **incarnés par des mises en situation en présentiel** pour devenir des réflexes. Ce module vous donne le vocabulaire et la grille de lecture communs — le terrain et la formation en présentiel vous donneront le geste. C'est la séquence LEARNA : éveiller, puis approfondir, puis se spécialiser.",
  pullquote_texte:
    "Savoir jusqu'où va la désescalade — et où commence la protection — fait partie de la désescalade elle-même.",
}

export const sConclusion = {
  eyebrow: "Conclusion",
  titre: "Ce que ce module a posé",
  texte:
    "L'intervention face à la tension commence par une question de position : où en sommes-nous dans le cycle ? En phase d'escalade, la désescalade verbale offre dix repères validés par la recherche, dont le cœur tient en une phrase : la personne d'abord, le problème ensuite. En phase de crise, la posture bascule vers la protection — se mettre en sécurité, protéger les tiers, alerter — sans que cela constitue un échec professionnel. Et dans tous les cas, l'épisode appelle une reprise : avec la personne, et pour les professionnel·les. C'est l'objet du dernier module.",
  retenir_label: "À retenir pour la pratique",
  retenir_items: [
    "Première question : dans quelle phase sommes-nous ? Chaque phase a ses gestes justes",
    "On ne calme pas une émotion avec un argument — la personne d'abord, le problème ensuite",
    "Une désescalade réussie peut se terminer sur un désaccord : le succès, c'est la baisse de tension",
    "Les limites se posent sans ultimatum, reliées à la sécurité et non au pouvoir",
    "Quitter et alerter sont des actes professionnels — jamais des échecs",
    "Différer la reprise des insultes n'est pas y renoncer",
  ],
}

export const quiz = [
  {
    question: "Le principe le plus fondamental de la désescalade verbale est :",
    reponses: [
      "Rappeler le cadre et le règlement le plus tôt possible",
      "S'occuper d'abord de la personne et de son émotion, ensuite du problème",
      "Montrer qu'on ne se laisse pas impressionner",
      "Promettre de réexaminer la décision contestée",
    ],
    bonneReponse: 1,
    explication:
      "Tant que l'émotion est haute, aucun contenu rationnel ne passe. Justifier la décision pendant l'escalade alimente la tension. La séquence validée par la recherche : reconnaître l'émotion et le besoin, faire baisser la tension — et seulement ensuite revenir au problème.",
  },
  {
    question:
      "« Si vous continuez sur ce ton, l'entretien est terminé. » Cette phrase pose problème en phase d'escalade parce que :",
    reponses: [
      "Elle est trop polie pour être efficace",
      "C'est un ultimatum qui accule la personne, alors qu'une limite efficace se pose sans menace et reliée à la sécurité",
      "Elle aurait dû être prononcée plus fort",
      "Elle ne cite pas l'article du règlement concerné",
    ],
    bonneReponse: 1,
    explication:
      "L'ultimatum retire à la personne toute issue honorable et transforme l'échange en épreuve de force. Une limite désescaladante préserve la relation : « Je veux continuer cette discussion. Je ne peux pas le faire si les objets volent. » — même fermeté, aucune menace.",
  },
  {
    question:
      "Offrir un choix réaliste (« on continue maintenant, ou je reviens demain avec le responsable ») est efficace parce que :",
    reponses: [
      "Cela permet de gagner du temps avant l'arrivée des collègues",
      "Cela redonne à la personne une prise sur la situation — exactement ce dont la frustration l'a privée",
      "Cela déplace la responsabilité de la décision sur la personne",
      "Cela montre que l'institution est flexible sur le fond",
    ],
    bonneReponse: 1,
    explication:
      "Le sentiment d'impuissance est l'un des principaux carburants de l'escalade (module 1). Le choix — à condition d'être réel et tenable — restitue de l'agentivité à la personne. C'est le repère n° 9 du consensus Richmond et al. (2012), en pleine cohérence avec le « faire avec plutôt que pour ».",
  },
  {
    question:
      "M. Keller entre en phase de crise : il jette le classeur. À ce moment précis, la priorité de Sarah est de :",
    reponses: [
      "Poursuivre la désescalade verbale en nommant les émotions",
      "Se mettre en sécurité, protéger les éventuels tiers et alerter selon la procédure",
      "Ramasser le classeur pour montrer que la situation reste sous contrôle",
      "Rappeler fermement la limite qui vient d'être franchie",
    ],
    bonneReponse: 1,
    explication:
      "En phase de crise, la personne n'est plus accessible à la relation : la marge relationnelle est nulle et la posture bascule de l'accompagnement vers la protection. La désescalade appartient à la phase d'escalade ; la reprise de la limite appartient à l'après, à froid.",
  },
  {
    question: "Une désescalade est considérée comme réussie lorsque :",
    reponses: [
      "La personne reconnaît le bien-fondé de la décision",
      "La tension est redescendue et la relation est préservée — même si le désaccord demeure",
      "La personne présente des excuses",
      "L'entretien a pu aller jusqu'au bout de l'ordre du jour prévu",
    ],
    bonneReponse: 1,
    explication:
      "Le but de la désescalade n'est ni l'obéissance ni le ralliement : c'est la baisse de la tension et la préservation d'une relation qui permettra de retravailler le désaccord à froid. Mesurer le succès au ralliement conduirait à confondre désescalade et rapport de force.",
  },
]
