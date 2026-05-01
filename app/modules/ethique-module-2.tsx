import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module2Ethique() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Éthique professionnelle"
        titre="Vie bonne, dignité et éthique du care"
        sousTitre="Penser l'accompagnement à partir de la relation, de la vulnérabilité et de la pratique"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Trois piliers pour penser l'accompagnement">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre la notion de vie bonne et ses implications concrètes",
              "Définir la dignité comme principe éthique fondamental",
              "Comprendre les fondements de l'éthique du care",
              "Articuler ces trois approches dans les pratiques d'accompagnement"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La vie bonne comme horizon de l'accompagnement">
          <Texte>Reprendre Ricœur : la vie bonne n'est pas une vie parfaite mais une vie qui a du sens pour la personne qui la vit.</Texte>
          <Texte>Implication pour l'accompagnement : notre rôle n'est pas de définir ce qu'est une bonne vie pour la personne, mais de créer les conditions pour qu'elle puisse poursuivre ses propres aspirations.</Texte>
          <HighlightBox label="Question centrale de l'accompagnement" couleur="vert">
            <Texte>"Qu'est-ce qui compte pour vous dans votre vie ?" — pas "qu'est-ce qui vous manque ?"</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La dignité : un principe absolu et opérationnel">
          <Texte>La dignité n'est pas un sentiment, c'est un statut. Toute personne a une dignité inaliénable, quelles que soient ses capacités, son comportement ou sa situation.</Texte>
          <SchemaEtapes
            titre="Les deux dimensions de la dignité"
            etapes={[
              { niveau: "Dimension 1", nom: "Dignité absolue", definition: "Statut inaliénable de toute personne — ne dépend d'aucune condition" },
              { niveau: "Dimension 2", nom: "Dignité relative", definition: "Sentiment de dignité, estime de soi — peut être fragilisée" },
              { niveau: "Dimension 3", nom: "Accompagnement digne", definition: "Pratiques qui préservent et renforcent les deux dimensions" }
            ]}
          />
          <PullQuote>
            Respecter la dignité, ce n'est pas seulement éviter de blesser. C'est créer activement les conditions pour que la personne puisse se sentir digne.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'éthique du care : prendre soin comme engagement moral">
          <Texte>Le care (prendre soin) n'est pas une attitude spontanée ou naturelle — c'est une pratique éthique structurée. Joan Tronto et Carol Gilligan ont montré que le care implique :</Texte>
          <Liste items={[
            "L'attention — percevoir les besoins",
            "La responsabilité — s'engager à y répondre",
            "La compétence — avoir les moyens d'y répondre",
            "La réactivité — prendre en compte la réponse de la personne aidée"
          ]} />
          <HighlightBox label="Le care en pratique" couleur="bleu">
            <Texte>Le care n'est pas de la compassion. C'est une pratique professionnelle réfléchie qui engage la responsabilité.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Vulnérabilité et réciprocité">
          <Texte>La vulnérabilité n'est pas une faiblesse à compenser, c'est une condition humaine universelle. Les professionnels sont aussi vulnérables. La relation de soin est toujours une relation de réciprocité — même asymétrique.</Texte>
          <PullQuote>
            Prendre soin de l'autre sans nier sa vulnérabilité, c'est lui reconnaître sa pleine humanité.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Mise en pratique" titre="3 questions pour une pratique care">
          <HighlightBox label="Questions de réflexivité professionnelle" couleur="vert">
            <Liste items={[
              "Est-ce que j'ai vraiment perçu le besoin de cette personne, ou ai-je projeté ce que je pensais qu'elle devait vouloir ?",
              "Est-ce que ma réponse préserve son autonomie et sa dignité, ou crée-t-elle une dépendance ?",
              "Est-ce que je prends en compte sa réponse à mon aide, ou est-ce que je considère que je sais mieux qu'elle ?"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Que signifie la notion de 'vie bonne' dans le contexte de l'accompagnement ?",
            reponses: [
              "Définir le bonheur pour la personne accompagnée",
              "Créer les conditions pour que la personne poursuive ses propres aspirations",
              "Imposer un cadre de vie sain et équilibré",
              "Satisfaire tous les besoins de base de la personne"
            ],
            bonneReponse: 1,
            explication: "La vie bonne n'est pas une vie parfaite définie par le professionnel. Notre rôle est de créer les conditions pour que la personne poursuive ses propres aspirations."
          },
          {
            question: "La dignité d'une personne est :",
            reponses: [
              "Un sentiment qui dépend de son comportement",
              "Un statut inaliénable indépendant des capacités ou de la situation",
              "Un droit qui peut être retiré en cas de comportement problématique",
              "Une qualité que certaines personnes n'ont pas"
            ],
            bonneReponse: 1,
            explication: "La dignité est un statut absolu et inaliénable. Toute personne a une dignité quelles que soient ses capacités, son comportement ou sa situation."
          },
          {
            question: "L'éthique du care, selon Tronto et Gilligan, implique :",
            reponses: [
              "Une attitude spontanée de bienveillance",
              "Une pratique éthique structurée incluant attention, responsabilité, compétence et réactivité",
              "Un sentiment de compassion envers les personnes vulnérables",
              "Un engagement politique en faveur des plus démunis"
            ],
            bonneReponse: 1,
            explication: "Le care est une pratique éthique structurée, pas une attitude spontanée. Il implique quatre dimensions : attention, responsabilité, compétence et réactivité."
          },
          {
            question: "Dans une relation de soin, la vulnérabilité est :",
            reponses: [
              "Une faiblesse à compenser chez la personne accompagnée",
              "Une condition humaine universelle qui concerne aussi les professionnels",
              "Un obstacle à une relation professionnelle équilibrée",
              "Un facteur de risque à gérer"
            ],
            bonneReponse: 1,
            explication: "La vulnérabilité est une condition humaine universelle — les professionnels sont aussi vulnérables. La reconnaître, c'est reconnaître la pleine humanité de la personne accompagnée."
          }
        ]}
        onTermine={function() {}}
      />
    </div>
  )
}
