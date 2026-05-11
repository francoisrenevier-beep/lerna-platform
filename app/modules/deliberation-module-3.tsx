import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3Deliberation({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Éthique professionnelle"
        titre="L'Éthique de la Discussion"
        titrePart2="De l'individu au collectif"
        sousTitre="Dans un monde pluraliste, la validité d'une décision éthique dépend de sa capacité à rencontrer l'adhésion raisonnée de toutes les personnes concernées."
        duree="40 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Un changement de paradigme décisif">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre le principe de base de l'éthique de la discussion d'Habermas",
              "Saisir le concept de décentrement de l'ego",
              "Reconnaître l'autorité épistémique de chaque participant",
              "Distinguer consensus réel et consensus artificiel"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le séisme Habermas : La vérité se construit ensemble">
          <Texte>Jürgen Habermas, philosophe allemand contemporain, a opéré une transformation radicale dans la façon de penser la morale. Chez Kant, l'individu cherche seul, par la raison, une loi universelle qu'il peut ensuite imposer à sa propre action. L'individu est le siège de la loi morale.</Texte>
          <Texte>Habermas déplace ce siège : la validité d'une norme ne peut pas être décrétée unilatéralement par un individu isolé, aussi rationnel soit-il. Seules peuvent prétendre à la validité les normes susceptibles de rencontrer l'adhésion de tous les intéressés en tant que participants d'une discussion pratique.</Texte>
          <PullQuote>
            Une décision institutionnelle n'est pas éthiquement valide parce qu'elle respecte les procédures. Elle l'est si elle peut être reconnue comme juste par toutes les personnes qu'elle affecte.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le décentrement de l'ego : La condition cognitive du dialogue">
          <Texte>La discussion éthique selon Habermas ne se réduit pas à une réunion où chacun exprime son opinion. Elle requiert une transformation cognitive profonde : le décentrement de l'ego. Il s'agit de l'effort cognitif de sortir de son propre cadre de référence — de son « moi ethnocentrique » — pour tenter d'adopter sincèrement le point de vue de l'autre.</Texte>
          <Texte>Ce n'est pas une question de tolérance ou de politesse. C'est un exercice intellectuel rigoureux qui transforme la qualité de la délibération.</Texte>
          <HighlightBox label="Questions de décentrement — Cas De Montmollin" couleur="bleu">
            <Liste items={[
              "Comment cette décision serait-elle vécue si j'étais Madame De Montmollin ?",
              "Si j'étais le collègue junior qui n'ose pas contredire le médecin ?",
              "Si j'étais la fille qui vit loin et se sent coupable ?"
            ]} />
          </HighlightBox>
          <PullQuote>
            L'empathie change de statut — elle n'est plus un sentiment moral louable mais une vertu cognitive indispensable.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'autorité épistémique : Chacun est expert de sa propre expérience">
          <Texte>L'éthique de la discussion reconnaît à chaque participant une autorité épistémique en première personne : chaque individu est le mieux placé pour parler de sa propre expérience, de ses valeurs et de ce que les normes en discussion signifient pour lui.</Texte>
          <HighlightBox label="L'autorité de Madame De Montmollin" couleur="vert">
            <Texte>Madame De Montmollin est l'autorité première sur ce que sa liberté de circulation signifie pour elle, sur ce que représente son rituel du vin dans le contexte de son deuil, sur ce qu'elle est prête à risquer pour maintenir un espace d'autonomie. Aucun professionnel, aussi bien intentionné soit-il, ne peut se substituer à cette autorité.</Texte>
            <Texte>La discussion éthique qui ne l'inclut pas — au moins de manière indirecte, par la prise en compte de son point de vue — est incomplète.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Morale traditionnelle vs Éthique de la discussion">
          <SchemaEtapes
            titre="Deux logiques de validation éthique"
            etapes={[
              { niveau: "Logique 1", nom: "Morale traditionnelle", definition: "Je raisonne seul et j'impose une maxime que je veux universelle. La validité vient de la cohérence logique interne de mon raisonnement." },
              { niveau: "Logique 2", nom: "Éthique de la discussion", definition: "Je soumets ma proposition à tous les intéressés pour examiner sa prétention à l'universalité par la discussion. La validité vient de l'adhésion collective raisonnée." }
            ]}
          />
          <HighlightBox label="Conséquence pratique pour les institutions" couleur="jaune">
            <Texte>Cela implique de repenser qui est autour de la table lors des prises de décision, et de créer des conditions réelles — non seulement formelles — permettant à chacun de s'exprimer librement. Y compris les personnes accompagnées.</Texte>
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Selon Habermas, la validité d'une norme éthique dépend de :",
            reponses: [
              "La cohérence logique du raisonnement individuel",
              "L'adhésion raisonnée de tous les intéressés dans une discussion pratique",
              "L'approbation de la direction et de la hiérarchie",
              "Le respect strict des procédures institutionnelles"
            ],
            bonneReponse: 1,
            explication: "Habermas déplace le siège de la validité morale de l'individu vers le collectif — une norme n'est valide que si elle peut rencontrer l'adhésion de tous ceux qu'elle affecte."
          },
          {
            question: "Le décentrement de l'ego consiste à :",
            reponses: [
              "Effacer sa propre identité professionnelle pour servir l'autre",
              "Sortir de son propre cadre de référence pour adopter sincèrement le point de vue de l'autre",
              "Accepter toutes les opinions sans les questionner",
              "Déléguer la décision à la hiérarchie compétente"
            ],
            bonneReponse: 1,
            explication: "Le décentrement est un exercice intellectuel rigoureux qui transforme la qualité de la délibération — pas de la simple tolérance, mais un effort cognitif réel pour adopter la perspective de l'autre."
          },
          {
            question: "L'autorité épistémique de Madame De Montmollin signifie que :",
            reponses: [
              "Elle a le droit de décider seule sans consulter les soignants",
              "Elle est la mieux placée pour parler de ce que sa liberté et ses choix signifient pour elle",
              "Son avis est toujours plus important que celui des professionnels",
              "Elle ne peut pas être incluse dans les discussions d'équipe"
            ],
            bonneReponse: 1,
            explication: "Chaque personne est l'autorité première sur sa propre expérience et ses valeurs. La discussion éthique qui n'intègre pas ce point de vue — au moins indirectement — est incomplète."
          },
          {
            question: "Une discussion éthique selon Habermas requiert :",
            reponses: [
              "Un vote majoritaire à la fin de la réunion",
              "Un animateur désigné par la direction institutionnelle",
              "La participation de tous les intéressés dans un processus structuré de délibération",
              "L'accord préalable de toutes les parties avant de débuter"
            ],
            bonneReponse: 2,
            explication: "Pas un échange informel ni une réunion d'information — mais un processus structuré de délibération où chaque voix compte et où les positions se confrontent réellement."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
