import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module5PPH() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Synthèse et posture professionnelle"
        titre="Intégrer le PPH"
        titrePart2="dans sa posture professionnelle"
        sousTitre="Consolider le changement de posture induit par le PPH et ancrer l'autodétermination comme finalité de l'accompagnement."
        duree="30 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Compétences visées" titre="Ce que vous allez consolider">
            <Liste items={[
              "Synthétiser les apprentissages des 4 modules précédents",
              "Comprendre le changement de posture induit par le PPH",
              "Intégrer l'autodétermination comme boussole de l'action",
              "Identifier votre rôle d'acteur du changement environnemental"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Le chemin parcouru">
          <Texte>Avant d'aller plus loin, rappelons le chemin parcouru ensemble au fil de cette formation :</Texte>
          <HighlightBox label="Les 4 modules en un coup d'œil" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Module 1 : Nous avons quitté le modèle biomédical pour adopter une conception sociale du handicap",
              "Module 2 : Nous avons appris à analyser les situations en partant toujours de l'habitude de vie",
              "Module 3 : Nous avons compris que notre levier principal est l'environnement, pas la personne",
              "Module 4 : Nous avons appris à formuler des objectifs concrets qui mesurent l'efficacité de nos actions"
            ]} />
          </HighlightBox>
          <Texte>Ce module de synthèse ne présente pas de nouveaux concepts. Il vous invite à intégrer ce que vous avez appris et à le traduire dans votre posture professionnelle quotidienne.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 5.1" titre="Du réparer au permettre">
          <Texte>Le changement le plus profond que le PPH opère dans nos pratiques est peut-être le plus simple à formuler : nous passons de réparer à permettre.</Texte>
          <HighlightBox label="Le changement de paradigme" couleur="vert">
            <Liste items={[
              "Avant : identifier ce qui ne fonctionne pas chez la personne et tenter de le corriger",
              "Après : identifier ce qui bloque dans l'environnement et le transformer",
              "Avant : la personne est le problème à résoudre",
              "Après : l'environnement est le levier à actionner"
            ]} />
          </HighlightBox>
          <Texte>Ce déplacement n'est pas seulement conceptuel. Il change nos questions, nos observations, nos réunions d'équipe, nos écrits professionnels et nos relations avec les personnes accompagnées.</Texte>
          <PullQuote>
            Notre rôle devient celui d'un ingénieur de l'environnement social.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 5.2" titre="L'autodétermination : la boussole de l'action PPH">
          <Texte>L'autodétermination est la capacité d'une personne à faire ses propres choix et à agir en fonction de ses valeurs, préférences et projets. Elle est au cœur du modèle PPH.</Texte>
          <HighlightBox label="Point clé" couleur="bleu">
            <Texte>L'analyse PPH n'a de sens que si elle est mise au service de l'autodétermination de la personne. Ce n'est pas nous qui décidons quelles habitudes de vie sont importantes — c'est elle.</Texte>
          </HighlightBox>
          <Texte>Soutenir l'autodétermination, c'est offrir des choix réels, soutenir le pouvoir d'agir, respecter le droit à l'expérience — y compris le droit à l'erreur.</Texte>
          <PullQuote>
            L'analyse PPH n'a de sens que si elle est mise au service de l'autodétermination de la personne.
          </PullQuote>
          <HighlightBox label="En pratique, soutenir l'autodétermination signifie :" couleur="vert">
            <Liste items={[
              "Demander à la personne ce qu'elle veut faire, pas ce que vous pensez qu'elle devrait faire",
              "Co-construire l'analyse PPH avec elle, pas sur elle",
              "Respecter ses choix même quand ils diffèrent de vos recommandations",
              "Évaluer les actions à l'aune de sa satisfaction, pas seulement de vos critères professionnels"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5.3" titre="L'acteur du changement, c'est vous">
          <Texte>Le PPH place les professionnels de l'accompagnement dans un rôle nouveau et exigeant : celui d'acteur du changement environnemental.</Texte>
          <HighlightBox label="Votre nouveau rôle" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Observateur : identifier systématiquement les obstacles et facilitateurs environnementaux",
              "Analyste : documenter les interactions personne-environnement avec le cadre PPH",
              "Concepteur : imaginer et proposer des mesures environnementales adaptées",
              "Évaluateur : mesurer l'impact de vos actions sur la participation sociale",
              "Ambassadeur : diffuser la culture PPH dans votre équipe et votre institution"
            ]} />
          </HighlightBox>
          <PullQuote>
            Votre seule mission : ouvrir les portes du possible.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 5.4 — Récapitulatif" titre="Les concepts clés de la formation">
          <HighlightBox label="Glossaire essentiel" couleur="bleu">
            <Liste couleur="bleu" items={[
              "PPH : Processus de Production du Handicap — modèle explicatif de Fougeyrollas",
              "Habitude de vie : activité courante ou rôle social que la personne souhaite réaliser",
              "Facteurs personnels : aptitudes et caractéristiques propres à la personne",
              "Facteurs environnementaux : éléments extérieurs — obstacles ou facilitateurs",
              "Situation de handicap : quand l'interaction personne-environnement empêche la réalisation des habitudes de vie",
              "Participation sociale : quand cette interaction permet la réalisation pleine des habitudes de vie",
              "Autodétermination : capacité de la personne à faire ses propres choix et à agir selon ses valeurs",
              "Objectif PPH-SMART : objectif spécifique, mesurable, atteignable, pertinent et temporellement défini"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Félicitations — vous avez terminé la formation PPH">
          <Texte>Vous avez parcouru l'ensemble des cinq modules de cette formation sur le Processus de Production du Handicap. Vous disposez maintenant des outils conceptuels et pratiques pour transformer vos pratiques d'accompagnement.</Texte>
          <HighlightBox label="Ce que vous pouvez faire dès aujourd'hui" couleur="vert">
            <Liste items={[
              "Utiliser le vocabulaire PPH dans vos écrits et réunions professionnels",
              "Appliquer la méthode d'analyse en six étapes à une situation concrète",
              "Formuler un objectif PPH-SMART pour un accompagnement en cours",
              "Partager les concepts clés avec un collègue ou votre équipe",
              "Identifier un obstacle environnemental et proposer une mesure concrète"
            ]} />
          </HighlightBox>
          <PullQuote>
            Le PPH n'est pas une théorie de plus. C'est une invitation à regarder autrement — et à agir autrement. Votre mission : ouvrir les portes du possible.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
  questions={[
    {
      question: "Le changement fondamental opéré par le PPH dans nos pratiques est :",
      reponses: [
        "De réparer à permettre",
        "De soigner à rééduquer",
        "D'évaluer à planifier",
        "De diagnostiquer à traiter"
      ],
      bonneReponse: 0,
      explication: "Le PPH opère un passage de réparer (corriger les déficiences de la personne) à permettre (transformer l'environnement pour que la personne réalise ses habitudes de vie)."
    },
    {
      question: "L'autodétermination dans le PPH signifie :",
      reponses: [
        "La personne doit être indépendante dans toutes ses activités",
        "La personne décide seule sans soutien professionnel",
        "La capacité de la personne à faire ses propres choix et à agir selon ses valeurs et projets",
        "L'absence de toute aide technique ou humaine"
      ],
      bonneReponse: 2,
      explication: "L'autodétermination est la capacité de la personne à faire ses propres choix et agir selon ses valeurs. Elle est la boussole de toute action PPH — on part de ce que la personne veut, pas de ce qu'on pense bon pour elle."
    },
    {
      question: "Le rôle du professionnel dans le PPH est celui de :",
      reponses: [
        "Thérapeute qui soigne les déficiences",
        "Évaluateur qui mesure les incapacités",
        "Ingénieur de l'environnement social qui transforme les obstacles en facilitateurs",
        "Coordinateur administratif qui gère les dossiers"
      ],
      bonneReponse: 2,
      explication: "Le PPH définit le professionnel comme un ingénieur de l'environnement social — son rôle est d'identifier les obstacles et de les transformer en facilitateurs pour ouvrir les portes du possible."
    },
    {
      question: "Pour intégrer le PPH dès aujourd'hui dans sa pratique, on peut :",
      reponses: [
        "Attendre une formation complémentaire avant d'agir",
        "Utiliser le vocabulaire PPH, appliquer la méthode d'analyse et formuler un objectif PPH-SMART",
        "Remplacer tous les outils existants par des outils PPH",
        "Demander une validation institutionnelle avant toute action"
      ],
      bonneReponse: 1,
      explication: "Le PPH peut être intégré progressivement : utiliser le vocabulaire dans les écrits, appliquer la méthode d'analyse à une situation, formuler un objectif PPH-SMART. Pas besoin d'attendre une transformation complète."
    }
  ]}
  onTermine={function() {}}
/>
    </div>
  )
}
