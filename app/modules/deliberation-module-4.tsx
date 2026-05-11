import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4Deliberation({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Éthique professionnelle"
        titre="La Méthode de Délibération"
        titrePart2="Structurer pour décider"
        sousTitre="Traduire les fondements théoriques en une méthode concrète applicable dans les colloques d'équipe et les instances éthiques."
        duree="45 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le cœur opérationnel de la formation">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre l'approche de Legault sur la délibération éthique",
              "Maîtriser les trois objectifs de la délibération",
              "Connaître le fonctionnement des comités d'éthique",
              "Distinguer consensus réel et consensus artificiel"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La délibération selon Legault : Un système ouvert">
          <Texte>Georges Legault, philosophe québécois spécialisé en éthique appliquée, formalise une approche particulièrement adaptée aux professions du social. Son point de départ est une critique des approches trop légalistes : dans la réalité des situations complexes, l'application mécanique de règles préétablies est insuffisante.</Texte>
          <Texte>La délibération est une étude collective et argumentée visant une décision ou une marche à suivre. Elle se distingue radicalement d'un vote ou d'une décision hiérarchique. Elle suppose un processus de mise à plat collective des enjeux, des valeurs en tension et des options possibles, avant d'arrêter une position.</Texte>
          <PullQuote>
            La délibération ne part pas d'une obligation légale pour en déduire mécaniquement la bonne conduite. Elle part de la réalité des personnes.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les trois objectifs de la délibération : Discerner, décider, assumer">
          <Texte>Legault identifie trois objectifs que la délibération éthique doit poursuivre simultanément. Ces trois mouvements ne sont pas des étapes séquentielles mais des dimensions entrelacées d'un même processus.</Texte>
          <SchemaEtapes
            titre="Les trois dimensions de la délibération"
            etapes={[
              { niveau: "Objectif 1", nom: "Discerner", definition: "Identifier les enjeux éthiques réels — valeurs en tension, droits en conflit, intérêts divergents des parties prenantes." },
              { niveau: "Objectif 2", nom: "Décider", definition: "Délibérer sur le meilleur choix possible selon les circonstances. Non pas le choix parfait — qui n'existe pas — mais le plus raisonnable compte tenu de toutes les contraintes." },
              { niveau: "Objectif 3", nom: "Assumer", definition: "Dialoguer pour porter collectivement les motifs de la décision et en rendre compte à la personne, sa famille et l'institution." }
            ]}
          />
          <HighlightBox label="Dans le cas de Madame De Montmollin" couleur="bleu">
            <Texte>Les enjeux à discerner incluent : l'autonomie de la résidente, sa sécurité physique, sa dignité, la vie bonne telle qu'elle la définit, l'intégrité de la relation soignant-résidente, et les intérêts institutionnels liés au projet GPS.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les comités d'éthique : Architecture et fonctionnement">
          <Texte>Les comités d'éthique sont les instances formelles dans lesquelles la méthode délibérative prend vie à l'échelle institutionnelle. Leur existence témoigne d'une reconnaissance collective que certaines décisions dépassent la compétence d'un individu ou d'une équipe restreinte.</Texte>
          <HighlightBox label="Deux types de comités d'éthique" couleur="vert">
            <Liste items={[
              "Comités d'éthique de la recherche — pouvoir décisionnel : ils approuvent ou refusent des protocoles de recherche",
              "Comités d'éthique clinique — pouvoir de recommandation : ils éclairent les professionnels mais ne se substituent pas à leur responsabilité décisionnelle"
            ]} />
          </HighlightBox>
          <Texte>La multidisciplinarité n'est pas une option décorative — c'est une condition de validité des recommandations. La pluralité des regards (médical, psychosocial, juridique, éthique, communautaire) est le seul rempart contre l'aveuglement corporatiste.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Consensus réel vs consensus artificiel : Les pièges du collectif">
          <HighlightBox label="Les formes du consensus artificiel" couleur="jaune">
            <Liste items={[
              "Ralliement silencieux à l'option majoritaire par désir de paix",
              "Crainte d'être marginalisé par le groupe ou jugé par les collègues",
              "Soumission à un savoir supposé supérieur — « le médecin a dit... »",
              "Évitement du conflit au détriment de l'analyse rigoureuse"
            ]} />
          </HighlightBox>
          <HighlightBox label="Les conditions du consensus réel" couleur="vert">
            <Texte>Le consensus réel est une entente authentique fondée sur une compréhension commune et intelligente de la situation. Il implique que chaque participant a eu la possibilité de s'exprimer, que les désaccords ont été explorés, et que la solution retenue est rationnellement acceptable par tous.</Texte>
          </HighlightBox>
          <PullQuote>
            La condition du consensus réel est le décentrement de l'ego — soumettre ses propres certitudes à la discussion.
          </PullQuote>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "La délibération selon Legault est :",
            reponses: [
              "Un vote à la majorité sur la meilleure option disponible",
              "Une étude collective et argumentée visant une décision",
              "Une décision prise par le responsable d'équipe après consultation",
              "Un processus individuel de réflexion sur la règle à appliquer"
            ],
            bonneReponse: 1,
            explication: "La délibération chez Legault est collective, argumentée et vise une justification réelle des choix — pas une légitimation après coup. Elle part de la complexité des situations, non d'une obligation légale."
          },
          {
            question: "Les trois objectifs de la délibération sont :",
            reponses: [
              "Observer, analyser, documenter",
              "Discerner, décider, assumer",
              "Évaluer, planifier, agir",
              "Diagnostiquer, traiter, évaluer"
            ],
            bonneReponse: 1,
            explication: "Ces trois mouvements sont entrelacés — identifier les enjeux éthiques, délibérer sur le meilleur choix, et porter collectivement la responsabilité de la décision et ses motifs."
          },
          {
            question: "La différence entre comité d'éthique clinique et comité de recherche est que :",
            reponses: [
              "Le comité clinique a un pouvoir décisionnel, le comité de recherche un pouvoir de recommandation",
              "Le comité clinique recommande sans décider, le comité de recherche approuve ou refuse",
              "Ils ont les mêmes pouvoirs mais dans des domaines différents",
              "Seul le comité de recherche est reconnu légalement en Suisse"
            ],
            bonneReponse: 1,
            explication: "Le comité clinique éclaire la décision des professionnels mais ne se substitue pas à leur responsabilité décisionnelle. Un comité clinique ne décide pas à la place des soignants, il éclaire leur décision."
          },
          {
            question: "Un consensus artificiel se caractérise par :",
            reponses: [
              "Un accord obtenu après une discussion approfondie et ouverte",
              "Un ralliement apparent qui laisse intacts les désaccords de fond",
              "Un désaccord explicite sur les valeurs fondamentales en jeu",
              "Une décision prise à l'unanimité après délibération complète"
            ],
            bonneReponse: 1,
            explication: "Le consensus artificiel est un pseudo-accord qui évite le conflit — les désaccords de fond resurgiront dans la pratique. Il se manifeste par le ralliement silencieux, la peur de la marginalisation, ou la déférence à l'autorité."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
