import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3PPH() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Agir sur l'environnement"
        titre="Du diagnostic à l'action"
        titrePart2="transformer l'environnement"
        sousTitre="Apprendre à traduire une analyse PPH en actions concrètes sur les environnements physique, social et organisationnel."
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Compétences visées" titre="Ce que vous allez apprendre">
            <Liste items={[
              "Identifier les différents types d'environnements dans le modèle PPH",
              "Mobiliser les leviers d'action adaptés à chaque situation",
              "Appliquer les trois principes d'action du PPH",
              "Concevoir une mesure environnementale à partir d'une analyse PPH"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="De l'observation à la transformation">
          <Texte>L'analyse PPH n'a de valeur que si elle débouche sur des actions concrètes. Ce module franchit le pas entre comprendre et agir.</Texte>
          <PullQuote>
            Le PPH nous invite à déplacer la focale : du déficit de la personne vers la responsabilité collective de l'environnement.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3.1" titre="Les types d'environnements dans le PPH">
          <Texte>Le PPH distingue cinq grandes catégories d'environnements. Chacune offre des leviers d'action spécifiques.</Texte>
          <HighlightBox label="Principe fondamental" couleur="bleu">
            <Texte>Tout facteur environnemental peut être soit un obstacle soit un facilitateur — selon le contexte et la personne. Notre rôle est de transformer les obstacles en facilitateurs.</Texte>
          </HighlightBox>
          <HighlightBox label="Les 5 types d'environnements" couleur="vert">
            <Liste items={[
              "Physique et architectural : accessibilité, aménagement des espaces, transports, équipements",
              "Social et humain : attitudes des proches et professionnels, soutiens disponibles, relations",
              "Institutionnel et organisationnel : règles, procédures, horaires, ressources humaines",
              "Technologique : outils, aides techniques, numérique, domotique",
              "Politique et juridique : lois, droits, financement, politiques d'inclusion"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.2" titre="Les leviers d'action dans les pratiques professionnelles">
          <Texte>Pour chaque type d'environnement, des leviers d'action concrets existent. Voici les principaux :</Texte>
          <HighlightBox label="Levier matériel" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Aménager les locaux pour une meilleure accessibilité",
              "Adapter les équipements et outils utilisés",
              "Faciliter les transports et déplacements",
              "Introduire des aides techniques pertinentes"
            ]} />
          </HighlightBox>
          <HighlightBox label="Levier relationnel" couleur="vert">
            <Liste items={[
              "Former les équipes à une communication adaptée",
              "Travailler les attitudes et représentations des professionnels",
              "Renforcer le réseau de soutien de la personne",
              "Favoriser les relations de pair à pair"
            ]} />
          </HighlightBox>
          <HighlightBox label="Levier organisationnel" couleur="jaune">
            <Liste items={[
              "Adapter les horaires et rythmes aux besoins de la personne",
              "Modifier les règles et procédures institutionnelles",
              "Réorganiser les espaces et temps collectifs",
              "Renforcer la coordination interdisciplinaire"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.3" titre="Les trois principes d'action du PPH">
          <HighlightBox label="Principe 1 — Co-construction" couleur="bleu">
            <Texte>Toute action doit être construite avec la personne, pas pour elle. L'autodétermination est le point de départ et l'horizon de toute mesure PPH.</Texte>
          </HighlightBox>
          <HighlightBox label="Principe 2 — Pertinence contextuelle" couleur="vert">
            <Texte>Une action est pertinente si elle répond à un obstacle identifié dans l'analyse PPH. On n'agit pas sur des suppositions mais sur des obstacles constatés et documentés.</Texte>
          </HighlightBox>
          <HighlightBox label="Principe 3 — Durabilité" couleur="jaune">
            <Texte>Les facilitateurs créés doivent s'inscrire dans la durée. Une action ponctuelle qui disparaît n'améliore pas la participation sociale de façon durable.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.4 — Étude de cas" titre="Sophie et le travail en atelier protégé">
          <HighlightBox label="Contexte" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Sophie, 32 ans, travaille en atelier protégé depuis 3 ans",
              "Elle souhaite participer aux réunions d'équipe hebdomadaires",
              "Actuellement : elle n'y assiste pas, les informations lui sont transmises par son référent",
              "Habitude de vie visée : participation aux réunions collectives"
            ]} />
          </HighlightBox>
          <Texte>L'analyse PPH de la situation de Sophie révèle plusieurs obstacles environnementaux : la salle de réunion n'est pas accessible en fauteuil, les réunions durent 90 minutes sans pause, le vocabulaire utilisé est très technique, aucun support visuel n'est utilisé.</Texte>
          <HighlightBox label="Résultat attendu" couleur="vert">
            <Liste items={[
              "Salle de réunion accessible et aménagée avec espace fauteuil",
              "Réunions structurées avec pauses toutes les 30 minutes",
              "Ordre du jour illustré envoyé 48h avant",
              "Sophie participe à au moins 3 réunions sur 4 avec satisfaction exprimée"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.5 — Outil pratique" titre="Checklist de conception d'une mesure">
          <HighlightBox label="Avant de mettre en place une mesure, vérifiez :" couleur="vert">
            <Liste items={[
              "L'habitude de vie visée est clairement identifiée",
              "L'obstacle environnemental est documenté par l'analyse PPH",
              "La mesure a été co-construite avec la personne concernée",
              "Des indicateurs de participation sociale ont été définis",
              "Un calendrier de mise en œuvre et d'évaluation est prévu",
              "Les ressources nécessaires sont identifiées et disponibles",
              "L'équipe est informée et formée à la mise en œuvre"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce qu'il faut retenir">
          <HighlightBox label="Les points essentiels" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Agir sur l'environnement est plus efficace que de tenter de modifier la personne",
              "Cinq types d'environnements offrent autant de catégories de leviers d'action",
              "Toute action doit être co-construite, contextualisée et durable",
              "La checklist est un outil pratique pour concevoir des mesures robustes"
            ]} />
          </HighlightBox>
          <PullQuote>
            Le PPH n'est pas un modèle d'observation, c'est un modèle d'action.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
  questions={[
    {
      question: "Quel est le levier d'action prioritaire dans l'approche PPH ?",
      reponses: [
        "Modifier le comportement de la personne",
        "Agir sur l'environnement",
        "Augmenter les soins médicaux",
        "Réduire les activités difficiles"
      ],
      bonneReponse: 1,
      explication: "Le PPH place l'environnement comme levier d'action principal. Transformer les obstacles environnementaux en facilitateurs est plus efficace que de tenter de modifier la personne."
    },
    {
      question: "Les trois principes d'action du PPH sont :",
      reponses: [
        "Évaluer, planifier, exécuter",
        "Diagnostiquer, traiter, réévaluer",
        "Co-construire, pertinence contextuelle, durabilité",
        "Observer, analyser, documenter"
      ],
      bonneReponse: 2,
      explication: "Les trois principes d'action PPH sont : co-construction avec la personne, pertinence contextuelle (agir sur des obstacles documentés) et durabilité des facilitateurs créés."
    },
    {
      question: "La checklist de conception d'une mesure sert à :",
      reponses: [
        "Évaluer les compétences de la personne",
        "Vérifier qu'une mesure environnementale est bien construite avant sa mise en œuvre",
        "Établir un diagnostic médical",
        "Planifier les soins infirmiers"
      ],
      bonneReponse: 1,
      explication: "La checklist PPH permet de vérifier que toutes les conditions sont réunies avant de mettre en place une mesure : habitude de vie identifiée, obstacle documenté, co-construction, indicateurs définis, ressources disponibles."
    },
    {
      question: "Dans l'étude de cas de Sophie, les obstacles identifiés étaient :",
      reponses: [
        "Ses capacités cognitives insuffisantes",
        "Son manque de motivation",
        "La salle inaccessible, la durée des réunions, le vocabulaire technique et l'absence de supports visuels",
        "Son refus de participer aux activités collectives"
      ],
      bonneReponse: 2,
      explication: "Les obstacles étaient tous environnementaux : salle inaccessible en fauteuil, réunions trop longues sans pause, vocabulaire technique, absence de support visuel. Aucun ne concernait Sophie elle-même."
    }
  ]}
  onTermine={function() {}}
/>
    </div>
  )
}
