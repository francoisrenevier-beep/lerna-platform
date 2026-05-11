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
              "Saisir le concept de décentrement de l'ego et l'appliquer en équipe",
              "Reconnaître l'autorité épistémique de chaque participant — y compris la personne accompagnée",
              "Distinguer consensus réel et consensus artificiel dans les décisions d'équipe"
            ]} />
          </ConceptBox>
          <Texte>Combien de fois avez-vous vécu une réunion d'équipe où tout le monde semblait d'accord — mais où, à la sortie, vous aviez l'impression que rien n'avait vraiment été discuté ? Où la décision avait été prise avant même que la discussion commence ? Où certaines personnes n'avaient pas osé parler, ou avaient été interrompues ? Ce module s'intéresse précisément à ce phénomène — et propose des outils pour transformer la qualité de vos discussions collectives.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le séisme Habermas : La vérité se construit ensemble">
          <Texte>Jürgen Habermas, philosophe allemand contemporain, a opéré une transformation radicale dans la façon de penser la morale. Chez Kant, l'individu cherche seul, par la raison, une loi universelle qu'il peut ensuite imposer à sa propre action. L'individu est le siège de la loi morale — il pense seul, et s'il pense juste, il arrive à la bonne réponse.</Texte>
          <Texte>Habermas déplace ce siège : la validité d'une norme ne peut pas être décrétée unilatéralement par un individu isolé, aussi rationnel soit-il. Seules peuvent prétendre à la validité les normes susceptibles de rencontrer l'adhésion de tous les intéressés en tant que participants d'une discussion pratique. Ce n'est plus le raisonnement solitaire qui valide une décision éthique — c'est la discussion avec les autres.</Texte>
          <Texte>Pour les professionnels du travail social, ce déplacement est fondamental. Cela signifie qu'une décision institutionnelle — même parfaitement conforme aux règles, même prise par des professionnels compétents — n'est pas éthiquement légitime si elle n'a pas été soumise à l'examen des personnes qu'elle affecte. La conformité aux procédures ne suffit pas. La compétence technique ne suffit pas. Ce qui valide une décision éthique, c'est la qualité du processus délibératif qui y a conduit.</Texte>
          <PullQuote>
            Une décision institutionnelle n'est pas éthiquement valide parce qu'elle respecte les procédures. Elle l'est si elle peut être reconnue comme juste par toutes les personnes qu'elle affecte.
          </PullQuote>
          <HighlightBox label="Conséquence directe pour vos équipes" couleur="bleu">
            <Texte>Cela implique de repenser qui est autour de la table lors des prises de décision importantes. Qui manque ? Dont la voix n'est pas entendue ? Dans une décision concernant une résidente, est-ce que la résidente elle-même — ou sa représentante légale — a été consultée de façon réelle, pas seulement formelle ? Dans un colloque sur un bénéficiaire, est-ce que les éducateurs de terrain, qui le voient tous les jours, ont autant de poids que le médecin-chef ?</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le décentrement de l'ego : La condition cognitive du dialogue">
          <Texte>La discussion éthique selon Habermas ne se réduit pas à une réunion où chacun exprime son opinion tour à tour. Elle requiert une transformation cognitive profonde : le décentrement de l'ego. Il s'agit de l'effort intellectuel de sortir de son propre cadre de référence — de son « moi ethnocentrique » — pour tenter d'adopter sincèrement le point de vue de l'autre.</Texte>
          <Texte>Ce n'est pas une question de tolérance ou de politesse. Ce n'est pas simplement « respecter les autres opinions ». C'est un exercice intellectuel rigoureux qui demande réellement quelque chose : suspendre provisoirement ses propres certitudes, ses habitudes de pensée, ses réponses automatiques, pour essayer de voir la situation avec les yeux d'une autre personne. Cet exercice transforme la qualité de la délibération — parce qu'il ouvre des angles morts.</Texte>
          <Texte>Dans la pratique quotidienne, le décentrement est difficile parce qu'on arrive toujours à une discussion avec son histoire, ses valeurs, ses expériences. Un éducateur qui a lui-même vécu des difficultés avec l'alcool dans sa famille aura une réaction émotionnelle différente face à la situation de Mme De Montmollin que celui qui n'a pas ce vécu. Ces réactions sont légitimes — mais elles doivent être reconnues, pas ignorées. Le décentrement ne demande pas d'effacer son point de vue : il demande de le mettre provisoirement entre parenthèses pour entendre celui des autres.</Texte>
          <HighlightBox label="Questions de décentrement — Cas De Montmollin" couleur="bleu">
            <Texte>Avant de décider quoi faire avec Madame De Montmollin, l'éthique de la discussion invite l'équipe à se poser ces questions :</Texte>
            <Liste items={[
              "Comment cette décision serait-elle vécue si j'étais Madame De Montmollin — 80 ans, veuve depuis 3 ans, placement volontaire ?",
              "Comment la vivrait la collègue qui connaît la résidente depuis son arrivée et a une relation de confiance avec elle ?",
              "Comment la vivrait le médecin-chef, qui porte la responsabilité médicale des interactions médicamenteuses ?",
              "Comment la vivrait la fille de Mme De Montmollin, qui vit loin et se sent coupable de ne pas être là ?",
              "Comment la vivrait le professionnel junior qui n'ose peut-être pas contredire la position de l'infirmier référent ?"
            ]} />
          </HighlightBox>
          <PullQuote>
            L'empathie change de statut — elle n'est plus un sentiment moral louable mais une vertu cognitive indispensable à la délibération.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'autorité épistémique : Chacun est expert de sa propre expérience">
          <Texte>L'éthique de la discussion reconnaît à chaque participant une autorité épistémique en première personne : chaque individu est le mieux placé pour parler de sa propre expérience, de ses valeurs et de ce que les normes en discussion signifient pour lui. Cette idée a des conséquences importantes pour la façon dont on organise les discussions en équipe.</Texte>
          <Texte>Dans une équipe pluridisciplinaire, il existe souvent une hiérarchie implicite des savoirs. Le médecin parle au nom de la médecine — et sa parole a un poids institutionnel important. L'infirmier parle au nom du soin quotidien. L'assistant social parle au nom du lien familial et communautaire. L'éducateur parle au nom de l'accompagnement au quotidien. Chacun a une expertise légitime. Mais personne dans cette équipe n'a l'autorité epistémique que possède Mme De Montmollin sur ce que sa liberté signifie pour elle, sur ce que représente son rituel du vin dans le contexte de son deuil, sur ce qu'elle est prête à risquer pour maintenir un espace d'autonomie.</Texte>
          <HighlightBox label="L'autorité de Madame De Montmollin" couleur="vert">
            <Texte>Madame De Montmollin est l'autorité première sur sa propre expérience de vie. Ce que représente pour elle sa sortie quotidienne au Denner, le rituel du verre de vin, la sensation de maîtriser encore quelque chose dans une vie qui a été profondément restructurée par le deuil et l'entrée en EMS — aucun professionnel, aussi bien intentionné soit-il, ne peut parler à sa place de ce que cela signifie. Aucune évaluation médicale, aussi rigoureuse soit-elle, ne peut se substituer à cette autorité-là.</Texte>
            <Texte>La discussion éthique qui ne l'inclut pas — au moins de manière indirecte, par la prise en compte de son point de vue tel qu'elle l'a exprimé — est incomplète. Une décision prise « pour son bien » sans l'avoir entendue sur ce qu'est son bien est éthiquement fragile, même si elle est médicalement justifiée.</Texte>
          </HighlightBox>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Dans vos colloques d'équipe, les personnes accompagnées sont-elles présentes — ou seulement représentées ? Leurs proches sont-ils invités à s'exprimer sur ce que la décision signifie pour eux ? Y a-t-il des membres de l'équipe dont la voix est systématiquement sous-pondérée parce qu'ils ont moins de statut ? L'éthique de la discussion demande de remettre en question ces hiérarchies implicites.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Le processus délibératif en quatre temps">
          <Texte>Morale traditionnelle et éthique de la discussion suivent deux logiques très différentes de validation éthique. Comprendre cette différence permet de choisir consciemment quelle logique on mobilise — et quand.</Texte>
          <SchemaEtapes
            titre="Les quatre temps d'une délibération habermasienne"
            etapes={[
              { niveau: "Temps 1", nom: "Examen critique", definition: "Chaque participant expose sa lecture de la situation et les valeurs qu'il mobilise. Les faits sont examinés sans être interprétés directement. L'objectif est de mettre à plat les différentes lectures de la situation sans hiérarchiser d'emblée." },
              { niveau: "Temps 2", nom: "Décentrement", definition: "Chaque participant tente d'adopter sincèrement le point de vue des autres — des autres professionnels, de la personne accompagnée, des proches. Ce n'est pas un exercice rhétorique : il s'agit réellement d'essayer de voir la situation avec d'autres yeux." },
              { niveau: "Temps 3", nom: "Universalisation", definition: "On teste si la norme proposée peut être reconnue comme valide par tous les concernés. Peut-elle être justifiée à chaque partie prenante de façon qu'elle puisse l'accepter raisonnablement ? Si certains ne peuvent pas l'accepter, pourquoi ?" },
              { niveau: "Temps 4", nom: "Accord raisonné", definition: "L'accord auquel on parvient n'est pas nécessairement unanime, mais il est raisonné : chacun comprend les motifs de la décision et peut les endosser même s'il aurait préféré une autre option. Ce n'est pas un compromis mou — c'est une convergence argumentée." }
            ]}
          />
          <HighlightBox label="Attention au consensus artificiel" couleur="jaune">
            <Texte>Dans les équipes sous pression, le consensus artificiel est un piège fréquent. Il se reconnaît à certains signes : la décision était prévisible avant même que la discussion commence. Certains membres de l'équipe n'ont pas osé exprimer leurs réserves. Les désaccords ont été balayés rapidement. « Tout le monde est d'accord » mais à la sortie de la réunion, des conversations de couloir laissent apparaître des doutes non exprimés. Ce consensus-là est « psychologiquement réconfortant et politiquement utile » — mais il laisse intact les tensions qui ressortiront dans la pratique.</Texte>
          </HighlightBox>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Pensez à la dernière décision importante prise en équipe dans votre institution. Comment s'est déroulée la discussion ? Y avait-il des personnes qui n'ont pas parlé ? Des arguments qui n'ont pas été entendus ? La décision finale pouvait-elle être justifiée à la personne concernée de façon qu'elle puisse l'accepter ? Ces questions ne visent pas à remettre en cause la décision — elles visent à évaluer la qualité du processus délibératif.</Texte>
          </HighlightBox>
          <PullQuote>
            Une boussole partagée n'est pas une boussole sur laquelle tout le monde est d'accord — c'est une boussole dont tout le monde comprend la logique et peut assumer la direction.
          </PullQuote>
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
            question: "Un consensus artificiel se reconnaît notamment à :",
            reponses: [
              "L'unanimité des membres de l'équipe sur la décision finale",
              "Des conversations de couloir qui révèlent des doutes non exprimés en réunion",
              "La présence de désaccords explicites pendant la discussion",
              "Le fait que la décision a été prise rapidement"
            ],
            bonneReponse: 1,
            explication: "Le consensus artificiel laisse intact les désaccords de fond — ils resurgiront dans la pratique. Ses signes : décision prévisible d'avance, réserves non exprimées, arguments balayés trop vite."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
