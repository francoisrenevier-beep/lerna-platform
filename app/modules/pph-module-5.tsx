import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import { AccrocheScenario } from "@/components/module/AccrocheScenario"
import { SchemaMDHPPH } from "@/components/module/SchemaMDHPPH"

export function Module5PPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Synthèse et posture professionnelle"
        titre="Intégrer le PPH"
        titrePart2="dans sa posture professionnelle"
        sousTitre="Consolider le changement de regard opéré par le PPH, ancrer l'autodétermination comme finalité de l'accompagnement, et devenir acteur du changement environnemental."
        duree="45 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Compétences visées" titre="Ce que vous allez consolider">
            <Liste items={[
              "Synthétiser les apprentissages des quatre modules précédents",
              "Expliquer le changement de paradigme opéré par le PPH",
              "Positionner l'autodétermination comme finalité de tout accompagnement PPH",
              "Identifier votre rôle d'acteur du changement environnemental",
              "Identifier les prochaines étapes pour intégrer le PPH dans votre pratique quotidienne"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Le chemin parcouru ensemble">
          <Texte>Avant d'aller plus loin, rappelons le parcours accompli au fil de cette formation. Quatre modules, une transformation en profondeur :</Texte>

          <HighlightBox label="Les 4 modules en un coup d'œil" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Module 1 : Nous avons quitté le modèle biomédical pour adopter une conception interactionniste du handicap, le PPH de Fougeyrollas",
              "Module 2 : Nous avons appris à analyser les situations en partant de l'habitude de vie, avec la méthode en six étapes",
              "Module 3 : Nous avons compris que notre levier principal est l'environnement, avec cinq dimensions à analyser et à transformer",
              "Module 4 : Nous avons appris à formuler des objectifs PPH-SMART qui rendent nos actions évaluables et co-construites"
            ]} />
          </HighlightBox>

          <Texte>Ce module de synthèse ne présente pas de nouveaux concepts. Il vous invite à intégrer ce que vous avez appris, à ancrer ce changement de posture, et à partir avec des outils concrets pour agir dès aujourd'hui.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 5.1" titre="Le modèle MDH-PPH : une dernière lecture globale">
          <Texte>Avant de passer à la posture professionnelle, revoyons le modèle dans sa globalité : cette fois avec le recul des quatre modules.</Texte>

          <SchemaMDHPPH />

          <Texte>Ce schéma résume tout ce que nous avons vu : les facteurs personnels et environnementaux interagissent pour produire soit la participation sociale, soit la situation de handicap dans la réalisation des habitudes de vie. Notre rôle professionnel est de déplacer la situation vers la participation, en agissant sur les facteurs environnementaux.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 5.2" titre="Du réparer au permettre : le changement fondamental">
          <Texte>Le changement le plus profond que le PPH opère dans nos pratiques est peut-être le plus simple à formuler : nous passons de réparer à permettre.</Texte>

          <TableauComparaison
            titre="Le changement de posture opéré par le PPH"
            colonnes={[
              {
                titre: "Posture de réparation (avant PPH)",
                contenu: [
                  "Identifier ce qui ne fonctionne pas chez la personne",
                  "La personne est le problème à résoudre",
                  "Corriger, compenser, pallier",
                  "Professionnel expert qui prescrit",
                  "Succès = réduction des déficiences",
                  "\"Prise en charge\"",
                ]
              },
              {
                titre: "Posture PPH",
                contenu: [
                  "Identifier ce qui bloque dans l'environnement",
                  "L'environnement est le levier à actionner",
                  "Transformer, adapter, ouvrir des possibles",
                  "Professionnel co-constructeur qui accompagne",
                  "Succès = augmentation de la participation sociale",
                  "\"Accompagnement vers l'autodétermination\"",
                ]
              }
            ]}
          />

          <Texte>Ce déplacement n'est pas seulement conceptuel. Il change nos questions, nos observations, nos écrits professionnels, nos réunions d'équipe et notre relation aux personnes accompagnées : au quotidien.</Texte>

          <PullQuote>
            Notre rôle devient celui d'un ingénieur de l'environnement social, quelqu'un qui audite les milieux de vie, identifie les obstacles, et conçoit des facilitateurs durables.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 5.3" titre="L'autodétermination : la boussole de toute action PPH">
          <Texte>L'autodétermination est la capacité d'une personne à faire ses propres choix, à définir ses objectifs de vie et à agir en fonction de ses valeurs, préférences et projets. Elle est au cœur du modèle PPH, et au cœur de l'éthique de l'accompagnement contemporain.</Texte>

          <HighlightBox label="Ce qu'est l'autodétermination" couleur="bleu">
            <Texte>Wehmeyer (1996, 2003) définit l'autodétermination comme "la combinaison d'habiletés, de connaissances et de croyances qui permettent à une personne d'adopter des comportements autonomes, autorégulés et dirigés vers des buts." Elle inclut : la capacité à faire des choix, à prendre des décisions, à résoudre des problèmes, à se fixer des objectifs, à s'auto-défendre et à exercer un contrôle sur sa propre vie.</Texte>
          </HighlightBox>

          <AccrocheScenario titre="Autodétermination et PPH : le lien essentiel">
            <p>L'analyse PPH n'a de sens que si elle est mise au service de l'autodétermination de la personne. Ce n'est pas nous qui décidons quelles habitudes de vie sont importantes, c'est elle. Si nous analysons une situation sans partir de ce que la personne veut, nous faisons du PPH pour l'institution, pas pour la personne.</p>
          </AccrocheScenario>

          <HighlightBox label="En pratique, soutenir l'autodétermination signifie :" couleur="vert">
            <Liste items={[
              "Demander à la personne ce qu'elle veut faire, pas ce que vous pensez qu'elle devrait faire",
              "Co-construire l'analyse PPH avec elle, pas sur elle ni pour elle",
              "Respecter ses choix, même quand ils diffèrent de vos recommandations professionnelles",
              "Reconnaître son droit à l'expérience, y compris le droit à l'erreur",
              "Évaluer les actions à l'aune de sa satisfaction, pas seulement de vos critères professionnels"
            ]} />
          </HighlightBox>

          <PullQuote>
            L'analyse PPH n'a de sens que si elle est mise au service de l'autodétermination de la personne. Ce n'est pas nous qui décidons : c'est elle.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 5.4" titre="Votre rôle : acteur du changement environnemental">
          <Texte>Le PPH place les professionnels de l'accompagnement dans un rôle nouveau, exigeant et valorisant : celui d'acteur du changement environnemental. Ce rôle comporte cinq dimensions.</Texte>

          <HighlightBox label="Vos cinq rôles dans le cadre PPH" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Observateur : identifier systématiquement les obstacles et facilitateurs dans les cinq dimensions environnementales",
              "Analyste : documenter les interactions personne-environnement avec le cadre PPH et ses six étapes",
              "Concepteur : imaginer et proposer des mesures environnementales adaptées, co-construites et durables",
              "Évaluateur : mesurer l'impact des actions sur la participation sociale avec des objectifs PPH-SMART",
              "Ambassadeur : diffuser la culture PPH dans votre équipe, vos écrits et vos pratiques institutionnelles"
            ]} />
          </HighlightBox>

          <AccrocheScenario type="reflexion">
            <p>Chacun de ces rôles peut s'exercer dès aujourd'hui, à votre échelle. Vous n'avez pas besoin que toute l'institution ait adopté le PPH pour commencer. Votre regard change d'abord. Vos questions changent. Vos écrits changent. Puis progressivement, le collectif s'aligne.</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Section 5.5" titre="Le PPH en équipe : un langage commun">
          <Texte>Le PPH offre un langage commun qui transforme la qualité des échanges en équipe. Quand tous les membres d'une équipe partagent le même cadre conceptuel, les réunions cliniques, les projets de vie et les transmissions changent de nature.</Texte>

          <HighlightBox label="Ce que le PPH transforme dans le travail d'équipe" couleur="vert">
            <Liste items={[
              "Les réunions cliniques passent de 'ce qui ne va pas chez la personne' à 'quels obstacles identifier et modifier'",
              "Les projets de vie sont rédigés à partir des habitudes de vie et des désirs de la personne, pas des déficiences",
              "Les transmissions professionnelles décrivent des obstacles et facilitateurs, pas des comportements problématiques",
              "Les désaccords d'équipe ont un cadre commun pour être tranchés : est-ce que c'est ce que la personne veut ?"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5.6 : Référence" titre="Glossaire essentiel de la formation">
          <HighlightBox label="Les concepts clés à maîtriser" couleur="bleu">
            <Liste couleur="bleu" items={[
              "MDH-PPH : Modèle de Développement Humain, Processus de Production du Handicap (Fougeyrollas et al., RIPPH, 2010)",
              "Habitudes de vie : activités courantes et rôles sociaux que la personne souhaite ou doit réaliser (12 catégories MHAVIE)",
              "Facteurs personnels : systèmes organiques, aptitudes et facteurs identitaires propres à la personne",
              "Facteurs environnementaux : éléments extérieurs à la personne agissant comme obstacles ou facilitateurs (5 dimensions)",
              "Situation de participation sociale : l'interaction personne-environnement permet la réalisation pleine des habitudes de vie",
              "Situation de handicap : des obstacles environnementaux perturbent ou empêchent la réalisation des habitudes de vie",
              "Autodétermination : capacité de la personne à faire ses propres choix et à agir selon ses valeurs et projets de vie",
              "Objectif PPH-SMART : objectif spécifique, mesurable, atteignable, pertinent et temporellement défini, à deux niveaux (participation + environnemental)",
              "MHAVIE : Mesure des Habitudes de Vie, outil d'évaluation de la participation sociale développé par le RIPPH"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que vous pouvez faire dès aujourd'hui">
          <Texte>Vous avez parcouru l'ensemble des cinq modules de cette formation sur le Processus de Production du Handicap. Vous disposez maintenant des outils conceptuels et pratiques pour transformer votre regard et vos pratiques d'accompagnement.</Texte>

          <HighlightBox label="Actions concrètes à mettre en place dès maintenant" couleur="vert">
            <Liste items={[
              "Utiliser le vocabulaire PPH dans vos écrits et réunions professionnels : 'obstacle', 'facilitateur', 'habitude de vie'",
              "Appliquer la méthode en six étapes à une situation d'accompagnement en cours, choisissez une habitude de vie",
              "Formuler un objectif PPH-SMART pour un accompagnement en cours : participation + environnemental",
              "Identifier un obstacle attitudinal dans votre équipe et ouvrir un dialogue sur ses effets",
              "Partager les concepts clés avec un collègue : l'ambassadeur PPH, c'est vous"
            ]} />
          </HighlightBox>

          <AccrocheScenario type="reflexion">
            <p>Le PPH ne demande pas une transformation institutionnelle immédiate. Il demande une transformation du regard, qui commence avec vous, maintenant, dans votre prochain échange avec une personne accompagnée.</p>
          </AccrocheScenario>

          <PullQuote>
            Le PPH n'est pas une théorie de plus. C'est une invitation à regarder autrement, et à agir autrement. Votre mission : identifier les obstacles, transformer les environnements, et ouvrir les portes du possible.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
        questions={[
          {
            question: "Le changement fondamental opéré par le PPH dans nos pratiques est :",
            reponses: [
              "De soigner à rééduquer",
              "De réparer à permettre",
              "D'évaluer à planifier",
              "De diagnostiquer à traiter"
            ],
            bonneReponse: 1,
            explication: "Le PPH opère un passage de 'réparer' (corriger les déficiences de la personne) à 'permettre' (transformer l'environnement pour que la personne réalise ses habitudes de vie selon ses propres choix)."
          },
          {
            question: "L'autodétermination dans le PPH signifie :",
            reponses: [
              "La personne doit être indépendante dans toutes ses activités sans aide",
              "La personne décide seule, sans soutien professionnel",
              "La capacité de la personne à faire ses propres choix et à agir selon ses valeurs et projets",
              "L'absence de toute aide technique ou humaine"
            ],
            bonneReponse: 2,
            explication: "L'autodétermination (Wehmeyer, 1996) est la capacité à faire ses propres choix et à agir selon ses valeurs. Elle est la boussole de toute action PPH, on part de ce que la personne veut, pas de ce qu'on pense bon pour elle."
          },
          {
            question: "Le rôle du professionnel dans le PPH est celui de :",
            reponses: [
              "Thérapeute qui soigne les déficiences",
              "Évaluateur qui mesure les incapacités de la personne",
              "Ingénieur de l'environnement social qui observe, analyse, conçoit et évalue",
              "Coordinateur administratif qui gère les dossiers MDPH"
            ],
            bonneReponse: 2,
            explication: "Le PPH définit le professionnel comme un ingénieur de l'environnement social, un observateur, analyste, concepteur, évaluateur et ambassadeur qui transforme les obstacles en facilitateurs pour ouvrir les portes du possible."
          },
          {
            question: "Le PPH transforme le travail d'équipe en :",
            reponses: [
              "Remplaçant tous les outils existants par des outils PPH",
              "Offrant un langage commun pour décrire les obstacles, les facilitateurs et la participation",
              "Exigeant une validation institutionnelle avant toute action",
              "Centralisant toutes les décisions chez le référent PPH"
            ],
            bonneReponse: 1,
            explication: "Le PPH offre un langage commun qui transforme les réunions cliniques, les projets de vie et les transmissions. Les échanges passent de 'ce qui ne va pas chez la personne' à 'quels obstacles identifier et modifier'."
          },
          {
            question: "Pour intégrer le PPH dès aujourd'hui dans sa pratique, on peut :",
            reponses: [
              "Attendre que l'institution adopte officiellement le modèle",
              "Remplacer tous les outils existants par des outils PPH avant de commencer",
              "Utiliser le vocabulaire PPH, appliquer la méthode d'analyse à une situation concrète et formuler un objectif SMART",
              "Demander une validation de la direction avant toute action PPH"
            ],
            bonneReponse: 2,
            explication: "Le PPH peut s'intégrer progressivement : utiliser le vocabulaire dans les écrits, appliquer la méthode à une situation concrète, formuler un objectif PPH-SMART. Le changement commence par votre regard, maintenant."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
