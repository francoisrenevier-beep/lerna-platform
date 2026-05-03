import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4PPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Objectifs et évaluation"
        titre="Définir des objectifs"
        titrePart2="PPH-SMART"
        sousTitre="Traduire une analyse PPH en objectifs opérationnels concrets, mesurables et co-construits avec la personne accompagnée."
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Compétences visées" titre="Ce que vous allez apprendre">
            <Liste items={[
              "Comprendre pourquoi les objectifs flous sont contre-productifs",
              "Maîtriser les cinq critères SMART appliqués au PPH",
              "Distinguer objectif de participation et objectif environnemental",
              "Formuler des objectifs PPH-SMART à partir d'une analyse de situation"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Du plan d'action à l'objectif ciblé">
          <Texte>L'analyse PPH a identifié les obstacles et les facilitateurs. Le plan d'action a déterminé les leviers à activer. Il reste maintenant à formuler des objectifs précis qui permettront d'évaluer l'efficacité de nos actions.</Texte>
          <HighlightBox label="Point clé" couleur="bleu">
            <Texte>Un objectif PPH-SMART ne vise pas à rééduquer la personne. Il vise à mesurer la réduction des obstacles environnementaux et l'amélioration de la participation sociale.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4.1" titre="Pourquoi SMART ? Sortir de l'intention floue">
          <Texte>Les objectifs flous sont l'un des obstacles les plus fréquents dans les pratiques d'accompagnement. Ils semblent raisonnables mais sont inopérants car ils ne permettent pas d'évaluer si on a réussi.</Texte>
          <HighlightBox label="Exemples d'objectifs flous — à éviter" couleur="jaune">
            <Liste items={[
              "Améliorer l'autonomie de Thomas",
              "Favoriser la participation de Marie aux activités",
              "Travailler la communication de Lucas",
              "Soutenir l'intégration professionnelle de Sophie"
            ]} />
          </HighlightBox>
          <Texte>Ces formulations ne disent pas : quelle autonomie ? dans quel contexte ? comment mesurer l'amélioration ? à quelle échéance ? La méthode SMART répond à ces questions.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4.2" titre="Décomposer le PPH-SMART">
          <HighlightBox label="S — Spécifique" couleur="bleu">
            <Texte>L'objectif est ciblé sur une seule habitude de vie concrète. Pas d'objectifs généraux : une situation, un contexte, une personne.</Texte>
            <Texte>Exemple : Permettre à Sophie de participer aux réunions d'équipe hebdomadaires dans la salle B.</Texte>
          </HighlightBox>
          <HighlightBox label="M — Mesurable" couleur="vert">
            <Texte>L'objectif est quantifiable en termes de qualité de participation sociale. On mesure la fréquence, le niveau d'aide, la satisfaction, la durée.</Texte>
            <Texte>Exemple : Sophie participe à au moins 3 réunions sur 4 avec un niveau d'aide réduit à zéro.</Texte>
          </HighlightBox>
          <HighlightBox label="A — Atteignable" couleur="jaune">
            <Texte>L'objectif est réaliste grâce aux facilitateurs mis en place par l'équipe. Il devient atteignable parce que l'environnement est modifié, pas parce que la personne est changée.</Texte>
          </HighlightBox>
          <HighlightBox label="R — Relevant (pertinent)" couleur="bleu">
            <Texte>L'objectif est connecté au projet et au désir de la personne, son autodétermination. Il a du sens pour elle — pas seulement pour l'institution.</Texte>
          </HighlightBox>
          <HighlightBox label="T — Temporellement défini" couleur="vert">
            <Texte>L'objectif a une date butoir claire pour évaluer l'atteinte. Cette échéance structure l'action et permet de réajuster si nécessaire.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4.3" titre="Deux niveaux d'objectifs PPH-SMART">
          <Texte>Dans le cadre PPH, on formule toujours deux types d'objectifs complémentaires :</Texte>
          <HighlightBox label="Objectif de participation — pour la personne" couleur="bleu">
            <Texte>Décrit l'amélioration de la réalisation d'une habitude de vie. C'est le résultat attendu pour la personne en termes de participation sociale.</Texte>
            <Texte>Exemple : Julien participera au repas collectif du vendredi midi de façon autonome, sans aide physique, pendant au moins 45 minutes, à raison de 3 fois sur 4.</Texte>
          </HighlightBox>
          <HighlightBox label="Objectif environnemental — pour le professionnel" couleur="vert">
            <Texte>Décrit l'action que le professionnel va mener sur l'environnement. C'est ce que l'équipe s'engage à faire.</Texte>
            <Texte>Exemple : L'équipe mettra en place des couverts adaptés, un placement stratégique et un système de signal discret d'ici le 15 du mois.</Texte>
          </HighlightBox>
          <PullQuote>
            C'est l'atteinte de l'objectif environnemental (action du professionnel) qui rend l'objectif de participation (résultat pour la personne) réellement atteignable.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4.4 — Étude de cas" titre="Les objectifs PPH-SMART de Sophie">
          <HighlightBox label="Rappel de l'analyse" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Habitude de vie : participation aux réunions d'équipe",
              "Obstacles : salle inaccessible, durée trop longue, vocabulaire technique, pas de support visuel",
              "Facilitateurs identifiés : engagement de l'équipe, salle B accessible, outils visuels disponibles"
            ]} />
          </HighlightBox>
          <HighlightBox label="Objectif 1 — Pour le professionnel" couleur="vert">
            <Texte>D'ici le 1er du mois prochain, l'équipe aménagera la salle B avec un espace fauteuil, préparera un ordre du jour illustré envoyé 48h avant, et instaurera une pause après 30 minutes.</Texte>
          </HighlightBox>
          <HighlightBox label="Objectif 2 — Pour Sophie" couleur="bleu">
            <Texte>D'ici 3 mois, Sophie participera à au moins 3 réunions d'équipe sur 4, exprimera sa satisfaction à 7/10 minimum, et interviendra au moins une fois par réunion.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce qu'il faut retenir">
          <HighlightBox label="Les points essentiels" couleur="vert">
            <Liste items={[
              "Les objectifs flous ne permettent pas d'évaluer le succès — la méthode SMART y remédie",
              "Chaque critère SMART répond à une question précise sur l'objectif",
              "Deux niveaux d'objectifs : participation (pour la personne) et environnemental (pour le professionnel)",
              "L'objectif environnemental est le levier qui rend l'objectif de participation atteignable"
            ]} />
          </HighlightBox>
          <PullQuote>
            L'objectif PPH-SMART n'est pas un outil de contrôle, mais un outil de dialogue et de co-construction. Il permet de mesurer ce qui compte vraiment : l'augmentation de la participation sociale.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
  questions={[
    {
      question: "Que signifie le S dans PPH-SMART ?",
      reponses: [
        "Simple",
        "Spécifique",
        "Systématique",
        "Structurel"
      ],
      bonneReponse: 1,
      explication: "S signifie Spécifique : l'objectif est ciblé sur une seule habitude de vie concrète, dans un contexte précis, pour une personne donnée."
    },
    {
      question: "Un objectif PPH-SMART vise principalement à :",
      reponses: [
        "Rééduquer la personne pour réduire ses déficiences",
        "Mesurer la réduction des obstacles environnementaux et l'amélioration de la participation sociale",
        "Évaluer les compétences professionnelles de l'équipe",
        "Établir un diagnostic de la situation de handicap"
      ],
      bonneReponse: 1,
      explication: "Un objectif PPH-SMART ne vise pas à rééduquer la personne. Il mesure la réduction des obstacles environnementaux et l'amélioration de la participation sociale."
    },
    {
      question: "Quelle est la différence entre l'objectif de participation et l'objectif environnemental ?",
      reponses: [
        "Il n'y a pas de différence, c'est la même chose",
        "L'objectif de participation concerne la personne, l'objectif environnemental concerne l'action du professionnel",
        "L'objectif de participation est à long terme, l'objectif environnemental est à court terme",
        "L'objectif environnemental est rédigé par le médecin, l'objectif de participation par l'éducateur"
      ],
      bonneReponse: 1,
      explication: "L'objectif de participation décrit ce que la personne va pouvoir réaliser. L'objectif environnemental décrit ce que le professionnel va faire sur l'environnement pour rendre cela possible."
    },
    {
      question: "Pourquoi les objectifs flous sont-ils contre-productifs ?",
      reponses: [
        "Ils sont trop ambitieux pour être atteints",
        "Ils ne permettent pas d'évaluer si on a réussi",
        "Ils demandent trop de ressources",
        "Ils ne respectent pas le cadre légal"
      ],
      bonneReponse: 1,
      explication: "Les objectifs flous comme améliorer l'autonomie ne disent pas quelle autonomie, dans quel contexte, comment la mesurer et à quelle échéance. Sans ces précisions, il est impossible d'évaluer le succès."
    }
  ]}
  onValiderModule={onValiderModule}
/>
    </div>
  )
}
