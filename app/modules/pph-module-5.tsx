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
        categorie="Synthese et posture professionnelle"
        titre="Integrer le PPH"
        titrePart2="dans sa posture professionnelle"
        sousTitre="Consolider le changement de posture induit par le PPH et ancrer l autodetermination comme finalite de l accompagnement."
        duree="30 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="A l issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Competences visees" titre="Ce que vous allez consolider">
            <Liste items={[
              "Synthetiser les apprentissages des 4 modules precedents",
              "Comprendre le changement de posture induit par le PPH",
              "Integrer l autodetermination comme boussole de l action",
              "Identifier votre role d acteur du changement environnemental"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Le chemin parcouru">
          <Texte>Avant d aller plus loin, rappelons le chemin parcouru ensemble au fil de cette formation :</Texte>
          <HighlightBox label="Les 4 modules en un coup d oeil" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Module 1 : Nous avons quitte le modele biomedical pour adopter une conception sociale du handicap",
              "Module 2 : Nous avons appris a analyser les situations en partant toujours de l habitude de vie",
              "Module 3 : Nous avons compris que notre levier principal est l environnement, pas la personne",
              "Module 4 : Nous avons appris a formuler des objectifs concrets qui mesurent l efficacite de nos actions"
            ]} />
          </HighlightBox>
          <Texte>Ce module de synthese ne presente pas de nouveaux concepts. Il vous invite a integrer ce que vous avez appris et a le traduire dans votre posture professionnelle quotidienne.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 5.1" titre="Du reparer au permettre">
          <Texte>Le changement le plus profond que le PPH opere dans nos pratiques est peut-etre le plus simple a formuler : nous passons de reparer a permettre.</Texte>
          <HighlightBox label="Le changement de paradigme" couleur="vert">
            <Liste items={[
              "Avant : identifier ce qui ne fonctionne pas chez la personne et tenter de le corriger",
              "Apres : identifier ce qui bloque dans l environnement et le transformer",
              "Avant : la personne est le probleme a resoudre",
              "Apres : l environnement est le levier a actionner"
            ]} />
          </HighlightBox>
          <Texte>Ce deplacement n est pas seulement conceptuel. Il change nos questions, nos observations, nos reunions d equipe, nos ecrits professionnels et nos relations avec les personnes accompagnees.</Texte>
          <PullQuote>
            Notre role devient celui d un ingenieur de l environnement social.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 5.2" titre="L autodetermination : la boussole de l action PPH">
          <Texte>L autodetermination est la capacite d une personne a faire ses propres choix et a agir en fonction de ses valeurs, preferences et projets. Elle est au coeur du modele PPH.</Texte>
          <HighlightBox label="Point cle" couleur="bleu">
            <Texte>L analyse PPH n a de sens que si elle est mise au service de l autodetermination de la personne. Ce n est pas nous qui decidons quelles habitudes de vie sont importantes — c est elle.</Texte>
          </HighlightBox>
          <Texte>Soutenir l autodetermination, c est offrir des choix reels, soutenir le pouvoir d agir, respecter le droit a l experience — y compris le droit a l erreur.</Texte>
          <PullQuote>
            L analyse PPH n a de sens que si elle est mise au service de l autodetermination de la personne.
          </PullQuote>
          <HighlightBox label="En pratique, soutenir l autodetermination signifie :" couleur="vert">
            <Liste items={[
              "Demander a la personne ce qu elle veut faire, pas ce que vous pensez qu elle devrait faire",
              "Co-construire l analyse PPH avec elle, pas sur elle",
              "Respecter ses choix meme quand ils different de vos recommandations",
              "Evaluer les actions a l aune de sa satisfaction, pas seulement de vos criteres professionnels"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5.3" titre="L acteur du changement, c est vous">
          <Texte>Le PPH place les professionnels de l accompagnement dans un role nouveau et exigeant : celui d acteur du changement environnemental.</Texte>
          <HighlightBox label="Votre nouveau role" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Observateur : identifier systematiquement les obstacles et facilitateurs environnementaux",
              "Analyste : documenter les interactions personne-environnement avec le cadre PPH",
              "Concepteur : imaginer et proposer des mesures environnementales adaptees",
              "Evaluateur : mesurer l impact de vos actions sur la participation sociale",
              "Ambassadeur : diffuser la culture PPH dans votre equipe et votre institution"
            ]} />
          </HighlightBox>
          <PullQuote>
            Votre seule mission : ouvrir les portes du possible.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 5.4 — Recapitulatif" titre="Les concepts cles de la formation">
          <HighlightBox label="Glossaire essentiel" couleur="bleu">
            <Liste couleur="bleu" items={[
              "PPH : Processus de Production du Handicap — modele explicatif de Fougeyrollas",
              "Habitude de vie : activite courante ou role social que la personne souhaite realiser",
              "Facteurs personnels : aptitudes et caracteristiques propres a la personne",
              "Facteurs environnementaux : elements exterieurs — obstacles ou facilitateurs",
              "Situation de handicap : quand l interaction personne-environnement empeche la realisation des habitudes de vie",
              "Participation sociale : quand cette interaction permet la realisation pleine des habitudes de vie",
              "Autodetermination : capacite de la personne a faire ses propres choix et a agir selon ses valeurs",
              "Objectif PPH-SMART : objectif specifique, mesurable, atteignable, pertinent et temporellement defini"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Felicitations — vous avez termine la formation PPH">
          <Texte>Vous avez parcouru l ensemble des cinq modules de cette formation sur le Processus de Production du Handicap. Vous disposez maintenant des outils conceptuels et pratiques pour transformer vos pratiques d accompagnement.</Texte>
          <HighlightBox label="Ce que vous pouvez faire des aujourd hui" couleur="vert">
            <Liste items={[
              "Utiliser le vocabulaire PPH dans vos ecrits et reunions professionnels",
              "Appliquer la methode d analyse en six etapes a une situation concrete",
              "Formuler un objectif PPH-SMART pour un accompagnement en cours",
              "Partager les concepts cles avec un collegue ou votre equipe",
              "Identifier un obstacle environnemental et proposer une mesure concretes"
            ]} />
          </HighlightBox>
          <PullQuote>
            Le PPH n est pas une theorie de plus. C est une invitation a regarder autrement — et a agir autrement. Votre mission : ouvrir les portes du possible.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
  questions={[
    {
      question: "Le changement fondamental opere par le PPH dans nos pratiques est :",
      reponses: [
        "De reparer a permettre",
        "De soigner a reeduquer",
        "D evaluer a planifier",
        "De diagnostiquer a traiter"
      ],
      bonneReponse: 0,
      explication: "Le PPH opere un passage de reparer (corriger les deficiences de la personne) a permettre (transformer l environnement pour que la personne realise ses habitudes de vie)."
    },
    {
      question: "L autodetermination dans le PPH signifie :",
      reponses: [
        "La personne doit etre independante dans toutes ses activites",
        "La personne decide seule sans soutien professionnel",
        "La capacite de la personne a faire ses propres choix et a agir selon ses valeurs et projets",
        "L absence de toute aide technique ou humaine"
      ],
      bonneReponse: 2,
      explication: "L autodetermination est la capacite de la personne a faire ses propres choix et agir selon ses valeurs. Elle est la boussole de toute action PPH — on part de ce que la personne veut, pas de ce qu on pense bon pour elle."
    },
    {
      question: "Le role du professionnel dans le PPH est celui de :",
      reponses: [
        "Therapeute qui soigne les deficiences",
        "Evaluateur qui mesure les incapacites",
        "Ingenieur de l environnement social qui transforme les obstacles en facilitateurs",
        "Coordinateur administratif qui gere les dossiers"
      ],
      bonneReponse: 2,
      explication: "Le PPH definit le professionnel comme un ingenieur de l environnement social — son role est d identifier les obstacles et de les transformer en facilitateurs pour ouvrir les portes du possible."
    },
    {
      question: "Pour integrer le PPH des aujourd hui dans sa pratique, on peut :",
      reponses: [
        "Attendre une formation complementaire avant d agir",
        "Utiliser le vocabulaire PPH, appliquer la methode d analyse et formuler un objectif PPH-SMART",
        "Remplacer tous les outils existants par des outils PPH",
        "Demander une validation institutionnelle avant toute action"
      ],
      bonneReponse: 1,
      explication: "Le PPH peut etre integre progressivement : utiliser le vocabulaire dans les ecrits, appliquer la methode d analyse a une situation, formuler un objectif PPH-SMART. Pas besoin d attendre une transformation complete."
    }
  ]}
  onTermine={function() {}}
/>
    </div>
  )
}