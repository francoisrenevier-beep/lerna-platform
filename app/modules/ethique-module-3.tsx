import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3Ethique() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Éthique professionnelle"
        titre="Utilitarisme, déontologisme et éthique des vertus"
        sousTitre="Penser les choix professionnels et arbitrer dans la complexité"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi plusieurs manières de penser l'éthique ?">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre les trois grandes théories éthiques et leur logique propre",
              "Identifier l'apport et les limites de chaque approche",
              "Savoir mobiliser chaque théorie selon la nature de la situation",
              "Développer une posture éthique pluraliste et réflexive"
            ]} />
          </ConceptBox>
          <Texte>Dans la pratique professionnelle, les professionnel·les ne choisissent pas entre ces approches — ils naviguent constamment entre elles. Les grandes approches éthiques ne sont pas des théories éloignées du terrain. Elles structurent, souvent de manière implicite, les raisonnements à l'œuvre dans les décisions quotidiennes.</Texte>
          <Texte>Les rendre explicites permet non seulement de mieux comprendre les désaccords au sein des équipes, mais aussi de sortir d'une logique de culpabilité individuelle pour entrer dans un raisonnement éthique partagé.</Texte>
          <SchemaEtapes
            titre="Trois grandes traditions éthiques"
            etapes={[
              { niveau: "Tradition 1", nom: "Utilitarisme", definition: "Agir en pensant aux conséquences — maximiser le bien-être collectif" },
              { niveau: "Tradition 2", nom: "Déontologisme", definition: "Poser des limites à l'action — respecter des principes et des droits fondamentaux" },
              { niveau: "Tradition 3", nom: "Éthique des vertus", definition: "Penser la posture professionnelle — cultiver les qualités morales de l'acteur" }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="L'utilitarisme : agir en pensant aux conséquences">
          <Texte>L'utilitarisme propose de juger une action à partir de ses effets. Une décision est juste lorsqu'elle produit globalement plus de bien que de mal pour l'ensemble des personnes concernées.</Texte>
          <Texte>Dans les métiers du social, cette manière de raisonner est très présente lorsque les ressources sont limitées. Le manque de temps, de places, de personnel ou de moyens financiers oblige à faire des choix qui privilégient certaines situations au détriment d'autres.</Texte>
          <PullQuote>
            L'utilitarisme nous force à penser aux conséquences réelles de nos actions — pas seulement à nos intentions.
          </PullQuote>
          <HighlightBox label="Apport et limite de l'utilitarisme" couleur="jaune">
            <Liste items={[
              "Apport : utile pour les décisions collectives, la gestion des ressources, l'évaluation des politiques institutionnelles",
              "Limite importante : en se focalisant sur les effets globaux, l'utilitarisme peut conduire à invisibiliser la situation d'une personne particulière, dont les intérêts ou la dignité sont sacrifiés au nom du plus grand nombre"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le déontologisme : poser des limites à l'action">
          <Texte>Le déontologisme affirme que certaines actions sont moralement inacceptables, indépendamment de leurs conséquences. Ce qui fonde la justesse d'un acte, c'est le respect de principes et de devoirs considérés comme fondamentaux.</Texte>
          <Texte>Dans le travail social, cette approche est omniprésente à travers les droits humains, les lois, les règles professionnelles et les codes de déontologie. Elle permet de poser des limites claires à l'action et de protéger les personnes contre des pratiques arbitraires. Elle offre un appui aux professionnels lorsqu'ils doivent refuser certaines demandes, même sous pression institutionnelle.</Texte>
          <HighlightBox label="Apport et limite du déontologisme" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Apport : protège les droits individuels, garantit la prévisibilité et l'égalité de traitement",
              "Offre un appui ferme pour refuser des pratiques inacceptables, même sous pression",
              "Limite : l'application stricte de règles peut produire des tensions quand les principes entrent en conflit les uns avec les autres — en déontologie, certaines actions sont inacceptables quelles que soient leurs conséquences"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'éthique des vertus : penser la posture professionnelle">
          <Texte>L'éthique des vertus déplace le regard : elle ne se centre ni sur les conséquences, ni uniquement sur les règles, mais sur la qualité de l'acteur et de son engagement dans l'action. La question n'est pas seulement ce qu'il faut faire, mais quel type de professionnel se construit à travers ses choix.</Texte>
          <Texte>Les vertus professionnelles essentielles comprennent la prudence, le sens de la justice, l'humilité, la bienveillance et la capacité de discernement. Ces qualités ne sont pas innées — elles se développent à travers l'expérience, la réflexion et le travail collectif.</Texte>
          <PullQuote>
            La vertu n'est pas ce qu'on fait quand on est surveillé. C'est ce qu'on fait quand personne ne regarde.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Tenir ensemble les approches : une exigence professionnelle">
          <Texte>Dans la réalité des pratiques, les professionnels naviguent constamment entre ces approches. Une décision peut être prise en pensant aux conséquences, justifiée par des règles, puis interrogée à l'aune de la posture professionnelle qu'elle engage.</Texte>
          <Texte>Cette pluralité n'est pas un problème à résoudre, mais une tension à habiter. L'éthique professionnelle ne consiste pas à éliminer les contradictions, mais à les reconnaître, les travailler et les rendre discutables.</Texte>
          <HighlightBox label="Comment mobiliser les trois approches" couleur="vert">
            <Liste items={[
              "Utilitarisme : quelles sont les conséquences prévisibles pour toutes les personnes concernées ?",
              "Déontologisme : quels droits et devoirs fondamentaux sont en jeu ? Existe-t-il une limite infranchissable ?",
              "Éthique des vertus : que ferait un professionnel de bonne vertu dans cette situation ? Quelle posture cette décision engage-t-elle ?"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "L'utilitarisme évalue une action selon :",
            reponses: [
              "Les intentions de celui qui agit et sa bienveillance",
              "Les règles universelles auxquelles elle se conforme",
              "Les conséquences qu'elle produit pour l'ensemble des personnes concernées",
              "Les vertus qu'elle exprime chez le professionnel"
            ],
            bonneReponse: 2,
            explication: "L'utilitarisme juge les actions à l'aune de leurs conséquences : une décision est juste lorsqu'elle produit globalement plus de bien que de mal pour le plus grand nombre. Cette approche est très présente dans la gestion des ressources limitées du travail social."
          },
          {
            question: "Quelle est la limite principale de l'utilitarisme dans les métiers du social ?",
            reponses: [
              "Il est trop complexe à mettre en œuvre dans des situations d'urgence",
              "Il peut conduire à sacrifier les intérêts ou la dignité d'une personne au nom du plus grand nombre",
              "Il ne prend pas en compte les règles institutionnelles en vigueur",
              "Il ignore les intentions des professionnels"
            ],
            bonneReponse: 1,
            explication: "En se focalisant sur les effets globaux, l'utilitarisme peut invisibiliser la situation d'une personne particulière. C'est sa limite fondamentale dans les métiers qui travaillent avec des individus singuliers — le bien collectif ne justifie pas toujours le sacrifice d'une personne."
          },
          {
            question: "Le déontologisme se distingue de l'utilitarisme principalement parce qu'il :",
            reponses: [
              "Prend en compte les émotions du professionnel",
              "Affirme que certaines actions sont inacceptables quelle que soit leur conséquence",
              "Encourage les professionnels à suivre leur instinct moral",
              "Privilégie toujours les intérêts individuels sur les intérêts collectifs"
            ],
            bonneReponse: 1,
            explication: "Le déontologisme affirme que certaines actions sont moralement inacceptables indépendamment de leurs conséquences. Ce rigorisme est une force — il protège contre les dérives justificatrices — mais aussi une limite quand des principes entrent en conflit entre eux."
          },
          {
            question: "L'éthique des vertus s'intéresse principalement à :",
            reponses: [
              "Les règles et obligations que le professionnel doit respecter",
              "Les conséquences prévisibles de chaque décision",
              "Le caractère et les qualités morales de la personne qui agit",
              "Les droits et devoirs légaux encadrant l'intervention"
            ],
            bonneReponse: 2,
            explication: "L'éthique des vertus (héritée d'Aristote) s'intéresse à qui on est, pas seulement à ce qu'on fait. Elle pose la question : quel type de professionnel se construit à travers mes choix ? Les vertus comme la prudence, le sens de la justice ou l'humilité se développent avec l'expérience et la réflexion."
          },
          {
            question: "Dans la pratique professionnelle, mobiliser les trois théories éthiques permet de :",
            reponses: [
              "Trouver une réponse certaine et définitive à chaque situation",
              "Éviter d'avoir à prendre des décisions difficiles",
              "Éclairer les différentes dimensions d'une situation et enrichir la délibération",
              "Se conformer automatiquement aux règles institutionnelles en vigueur"
            ],
            bonneReponse: 2,
            explication: "Les trois approches ne sont pas concurrentes mais complémentaires. Mobilisées ensemble comme outils de questionnement, elles éclairent les conséquences (utilitarisme), les droits en jeu (déontologisme) et la posture professionnelle engagée (vertus) — sans prétendre éliminer la tension éthique."
          }
        ]}
        onTermine={function() {}}
      />
    </div>
  )
}
