import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4Ethique() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Éthique professionnelle"
        titre="Le dilemme et la délibération éthique"
        sousTitre="Décider lorsqu'aucune solution n'est pleinement satisfaisante"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Quand la règle ne suffit plus">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier un vrai dilemme éthique",
              "Distinguer dilemme et simple difficulté",
              "Maîtriser une méthode de délibération",
              "Développer la capacité à décider et assumer"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Qu'est-ce qu'un vrai dilemme éthique ?">
          <Texte>Un dilemme éthique n'est pas une simple difficulté. C'est une situation où deux valeurs légitimes s'opposent et où chaque option implique un sacrifice.</Texte>
          <HighlightBox label="Exemples de dilemmes réels" couleur="jaune">
            <Liste items={[
              "Respect de l'autonomie vs protection",
              "Confidentialité vs sécurité",
              "Vérité vs protection psychologique"
            ]} />
          </HighlightBox>
          <PullQuote>
            Un dilemme éthique ne se résout pas — il se tranche. La question n'est pas de trouver la bonne réponse, mais d'assumer la meilleure décision possible dans le contexte.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La méthode de délibération éthique en 6 étapes">
          <SchemaEtapes
            titre="Les trois temps de la délibération"
            etapes={[
              { niveau: "Temps 1", nom: "Identifier", definition: "Nommer le dilemme et les valeurs en tension" },
              { niveau: "Temps 2", nom: "Analyser", definition: "Examiner les options et leurs conséquences" },
              { niveau: "Temps 3", nom: "Décider", definition: "Trancher et assumer" }
            ]}
          />
          <Texte>Les 6 étapes complètes de la délibération :</Texte>
          <Liste items={[
            "1) Identifier la situation et les personnes concernées",
            "2) Nommer les valeurs en tension",
            "3) Examiner les options possibles",
            "4) Évaluer les conséquences de chaque option",
            "5) Décider en référence aux valeurs prioritaires",
            "6) Évaluer après coup et tirer des enseignements"
          ]} />
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'espace éthique : délibérer en équipe">
          <Texte>La délibération éthique ne se fait pas seul. L'espace éthique est un temps structuré de réflexion collective.</Texte>
          <HighlightBox label="Conditions de la délibération collective" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Bienveillance — accueillir les points de vue sans jugement",
              "Suspension du jugement — s'autoriser à douter",
              "Argumentation — fonder les positions sur des raisons",
              "Respect des désaccords — la divergence enrichit la réflexion"
            ]} />
          </HighlightBox>
          <PullQuote>
            La décision éthique n'est pas celle sur laquelle tout le monde est d'accord. C'est celle que tout le monde peut comprendre et respecter, même en désaccord.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Assumer et évaluer">
          <Texte>Décider c'est aussi assumer. L'éthique ne s'arrête pas à la décision.</Texte>
          <HighlightBox label="Questions d'évaluation après coup" couleur="vert">
            <Liste items={[
              "Ai-je respecté la dignité de la personne ?",
              "Ai-je agi selon mes valeurs ?",
              "Que ferais-je différemment ?"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Un vrai dilemme éthique se caractérise par :",
            reponses: [
              "Une situation difficile à gérer pratiquement",
              "L'opposition de deux valeurs légitimes où chaque option implique un sacrifice",
              "Un conflit entre deux personnes ayant des intérêts différents",
              "L'absence de règle applicable dans le règlement"
            ],
            bonneReponse: 1,
            explication: "Un dilemme éthique n'est pas une simple difficulté pratique. Il implique l'opposition de deux valeurs légitimes — et chaque option force à renoncer à quelque chose d'important."
          },
          {
            question: "La méthode de délibération éthique commence par :",
            reponses: [
              "Décider rapidement pour agir efficacement",
              "Consulter le cadre réglementaire applicable",
              "Identifier la situation et les valeurs en tension",
              "Demander l'avis du supérieur hiérarchique"
            ],
            bonneReponse: 2,
            explication: "La délibération commence toujours par identifier : nommer la situation, les personnes concernées et les valeurs en tension. C'est le préalable à toute analyse."
          },
          {
            question: "L'espace éthique en équipe se caractérise par :",
            reponses: [
              "Un vote majoritaire sur la décision à prendre",
              "Un temps structuré de réflexion collective avec bienveillance et argumentation",
              "Une discussion informelle entre collègues",
              "La recherche d'un consensus obligatoire"
            ],
            bonneReponse: 1,
            explication: "L'espace éthique est un temps structuré avec des conditions précises : bienveillance, suspension du jugement, argumentation et respect des désaccords. Il ne vise pas le consensus mais la compréhension partagée."
          },
          {
            question: "Après une décision éthique difficile, l'évaluation après coup permet de :",
            reponses: [
              "Trouver un coupable si la décision était mauvaise",
              "Justifier la décision prise auprès de la hiérarchie",
              "Tirer des enseignements pour enrichir la pratique éthique future",
              "Vérifier la conformité aux règles institutionnelles"
            ],
            bonneReponse: 2,
            explication: "L'évaluation après coup est la 6e étape de la délibération. Elle permet d'apprendre : ai-je respecté la dignité de la personne ? ai-je agi selon mes valeurs ? que ferais-je différemment ?"
          }
        ]}
        onTermine={function() {}}
      />
    </div>
  )
}
