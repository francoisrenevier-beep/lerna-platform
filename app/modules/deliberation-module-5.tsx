import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module5Deliberation({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Éthique professionnelle"
        titre="Mise en Pratique"
        titrePart2="Le cas de Madame De Montmollin"
        sousTitre="Mobiliser tous les outils conceptuels de la formation pour analyser et délibérer autour d'un dilemme éthique réel — tel qu'il se présente vraiment sur le terrain."
        duree="45 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le cœur pratique de la formation">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Analyser un dilemme éthique complexe à travers les quatre prismes de la formation",
              "Identifier les tensions éthiques réelles et les distinguer des tensions apparentes",
              "Lire un comportement problématique comme signal d'un besoin non comblé",
              "Formuler des orientations délibératives argumentées et humainement cohérentes"
            ]} />
          </ConceptBox>
          <Texte>Nous avons passé quatre modules à construire des outils conceptuels. Ce module vous demande de les utiliser ensemble, dans toute leur complexité, sur une situation réelle. Le cas de Madame De Montmollin n'est pas un exercice pédagogique artificiel — il est représentatif d'une catégorie de situations que vous rencontrez régulièrement : un comportement qui transgresse une règle, une institution qui a ses propres intérêts, une personne dont la vulnérabilité est visible mais dont la vie intérieure reste opaque, et une équipe qui doit décider sans certitude.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le cas complet — Ce que Jean sait et ce qu'il ne sait pas">
          <HighlightBox label="Les faits — Ce que Jean observe" couleur="bleu">
            <Liste items={[
              "Madame De Montmollin, 80 ans — résidente depuis 3 ans dans un EMS de psychogériatrie, placement volontaire suite au décès de son époux",
              "Vit sur un étage en libre circulation avec une grande liberté de déplacement quotidien — promenades en forêt, sorties libres dans le quartier",
              "Jean, éducateur, découvre qu'elle achète régulièrement du vin au Denner (100 mètres de l'institution) et le cache au pied d'un arbre en forêt",
              "Consommation estimée à environ une bouteille et demie par semaine — dépasse la limite autorisée par le règlement de l'EMS",
              "Risques médicaux identifiés : interaction médicamenteuse (anticoagulants), risque de chute augmenté, rupture de transparence dans la relation soignant-résidente",
              "La direction propose de l'intégrer à un projet pilote de bracelet GPS, avec couverture médiatique et opportunités de financement de recherche pour l'établissement"
            ]} />
          </HighlightBox>
          <HighlightBox label="Ce que Jean ne sait pas encore" couleur="jaune">
            <Texte>Jean ne sait pas pourquoi Mme De Montmollin cache son vin. Il suppose une transgression des règles — mais il n'a pas encore demandé. Il ne sait pas ce que représente ce rituel pour elle. Il ne sait pas si elle est consciente des risques médicaux. Il ne sait pas ce qu'elle pense du projet GPS. Il ne sait pas ce que sa fille en pense réellement. Ces inconnues sont importantes — elles rappellent que la délibération doit commencer par l'écoute, pas par la décision.</Texte>
          </HighlightBox>
          <Texte>Avant d'analyser, une pause s'impose. Reprenez votre intuition initiale du module 1 : que pensiez-vous qu'il faudrait faire ? Maintenant que vous avez quatre prismes d'analyse, allons voir ce qu'ils révèlent — et si votre intuition initiale résiste à l'examen.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Identifier les tensions éthiques réelles">
          <Texte>La première étape de la délibération de Legault — discerner — exige d'identifier les tensions éthiques réelles, et de les distinguer des tensions apparentes. Toutes les tensions ne méritent pas le même niveau d'analyse. Certaines se résolvent facilement une fois nommées. D'autres sont des dilemmes authentiques qui résistent à toute solution simple.</Texte>
          <SchemaEtapes
            titre="Les trois tensions du cas De Montmollin"
            etapes={[
              { niveau: "Tension 1", nom: "Autonomie vs sécurité physique", definition: "Mme De Montmollin est un sujet autonome en placement volontaire. Elle a le droit à la liberté de circulation et le droit de faire des choix qui comportent des risques. Mais la consommation d'alcool avec ses anticoagulants représente un risque médical documenté et sérieux. Ces deux droits légitimes — le droit à l'autonomie et le droit à la protection — entrent en conflit." },
              { niveau: "Tension 2", nom: "Dignité et vie privée vs surveillance technologique", definition: "Le GPS géolocalise les déplacements de la résidente et transforme chaque sortie en donnée traçable. Dans un contexte où elle dissimule son comportement précisément pour maintenir un espace de liberté perçu, la surveillance permanente représente une atteinte à son intimité et à sa capacité d'autodétermination — même si elle est présentée comme une mesure de sécurité." },
              { niveau: "Tension 3", nom: "Intérêts institutionnels vs intérêts de la résidente", definition: "Le projet GPS est motivé par des enjeux extérieurs à la situation de Mme De Montmollin : couverture médiatique, financement de recherche, image de modernité de l'établissement. L'institution risque d'instrumentaliser la résidente pour ses propres objectifs — c'est une dérive fondamentale du triangle de Ricœur, où l'Institution cesse de servir la vie bonne pour servir ses propres intérêts." }
            ]}
          />
          <HighlightBox label="La tension souvent oubliée — et pourtant décisive" couleur="jaune">
            <Texte>La troisième tension est souvent la plus difficile à nommer en équipe, parce qu'elle met en cause l'institution elle-même — et que l'institution est aussi l'employeur de ceux qui délibèrent. Il faut du courage professionnel pour dire, dans un colloque, que le projet GPS semble davantage motivé par l'intérêt de l'établissement que par celui de la résidente. Pourtant, c'est précisément ce que la délibération éthique demande : nommer ce qui est inconfortable à nommer.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Délibération guidée — Quatre prismes d'analyse">
          <Texte>Appliquons les quatre approches éthiques de la formation à la situation de Mme De Montmollin. Cet exercice illustre comment des prismes différents éclairent des aspects différents — et parfois contradictoires — d'une même situation. Aucun prisme seul ne suffit. C'est leur mise en tension qui produit la richesse de la délibération.</Texte>
          <HighlightBox label="Prisme utilitariste — Le calcul des conséquences" couleur="jaune">
            <Texte>On cherche l'action qui produit le plus grand bien pour le plus grand nombre. Pour le GPS : il réduit l'anxiété de l'équipe soignante et de la fille de Mme De Montmollin, prévient les coûts d'une chute grave, et produit des données scientifiques potentiellement utiles à d'autres résidents. Le calcul semble pencher en faveur du projet. Mais l'utilitarisme bien appliqué doit aussi compter les coûts : l'atteinte à l'autonomie, la dégradation de la relation de confiance avec l'équipe, la démoralisation de la résidente. Ce calcul est moins favorable.</Texte>
          </HighlightBox>
          <HighlightBox label="Prisme déontologique — Les droits et la dignité" couleur="bleu">
            <Texte>Kant : « Agis de telle sorte que tu traites l'humanité toujours comme une fin et jamais seulement comme un moyen. » La surveillance GPS imposée à une résidente non consentante, pour servir une recherche institutionnelle et une opération médiatique, est moralement condamnable quelle que soit son utilité calculée. Le Code d'Avenir Social Suisse est explicite : l'autodétermination est un droit fondamental qui ne peut être restreint que dans des circonstances très précises et avec le consentement éclairé de la personne. La proportionnalité est également en question : le Denner est à 100 mètres de l'institution. La mesure est-elle proportionnée au risque réel ?</Texte>
          </HighlightBox>
          <HighlightBox label="Prisme de l'éthique des vertus — La phronesis de Jean" couleur="vert">
            <Texte>Jean doit exercer sa phronesis. Ni le gardien panoptique — signaler immédiatement à la direction, faire équiper la résidente d'un GPS, appliquer le règlement au détriment de la relation — ni le soignant démissionnaire — fermer les yeux sur un risque médical réel au nom d'un respect de l'autonomie qui ressemble davantage à de l'évitement. Le juste milieu exige une conversation directe avec Mme De Montmollin, une écoute de ses besoins réels, une créativité institutionnelle qui cherche comment tenir ensemble la sécurité et la liberté. Quelle sorte de professionnel Jean veut-il être dans cette situation ? La réponse à cette question oriente tout le reste.</Texte>
          </HighlightBox>
          <HighlightBox label="Prisme de l'éthique du care — La question du soin réel" couleur="vert">
            <Texte>Ce prisme pose la question autrement : pas « comment surveiller cette résidente » ou « comment appliquer le règlement », mais « de quoi a-t-elle besoin, au fond ? ». La consommation de vin — surtout cachée — est peut-être le symptôme visible d'un besoin invisible. Une femme de 80 ans, veuve depuis 3 ans, entrée en EMS suite au décès de son mari : le deuil n'est peut-être pas achevé. L'isolement relationnel est réel. Le sentiment de ne plus contrôler sa propre vie est documenté chez les résidents d'EMS. Le rituel de la sortie quotidienne, de l'achat au Denner, du verre de vin caché en forêt est peut-être le dernier espace où elle est encore l'auteure de sa propre existence. La vraie question du care n'est pas « comment l'arrêter » mais « quel soin lui manque-t-il pour qu'elle n'ait plus besoin de cacher ce qui lui tient à cœur » ?</Texte>
          </HighlightBox>
          <PullQuote>
            Le GPS géolocalise le corps — mais peut égarer la personne.
          </PullQuote>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Avez-vous déjà vécu une situation similaire — un comportement « problématique » d'une personne accompagnée qui, une fois qu'on a pris le temps de comprendre, révélait un besoin profond non comblé ? Que s'est-il passé quand vous avez traité le comportement comme un problème à résoudre plutôt que comme un signal à décoder ?</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Orientations délibératives — Décider et assumer">
          <Texte>La délibération ne se termine pas par une analyse — elle se termine par une décision et un engagement à l'assumer. Voici les orientations que produirait une délibération de qualité dans ce cas.</Texte>
          <HighlightBox label="Orientation 1 — Commencer par la conversation" couleur="vert">
            <Texte>Avant toute décision institutionnelle, Jean doit rencontrer Mme De Montmollin. Non pas pour la confronter à sa transgression, mais pour l'écouter. Qu'est-ce que cette sortie représente pour elle ? Que sait-elle des risques médicaux de sa consommation ? Serait-elle prête à en parler avec son médecin ? Cette conversation est à la fois une obligation éthique — l'autorité épistémique de la résidente sur sa propre vie — et un préalable pratique : toute décision prise sans avoir entendu la personne est fragile et risque d'être perçue comme une trahison.</Texte>
          </HighlightBox>
          <HighlightBox label="Orientation 2 — Concernant la consommation d'alcool" couleur="vert">
            <Texte>Abandonner la logique de l'interdiction pour celle de la médiation. Si la résidente est informée des risques et choisit de continuer à consommer, il est possible de proposer une renégociation du contrat de soins : la possibilité de consommer son verre de vin dans un cadre connu et sécurisé (le salon de l'EMS, par exemple), en échange d'une transparence sur sa consommation permettant d'ajuster sa médication. Cette approche respecte l'autonomie de la résidente tout en réduisant le risque médical. Elle transforme une transgression cachée en accord co-construit — et préserve l'alliance thérapeutique.</Texte>
          </HighlightBox>
          <HighlightBox label="Orientation 3 — Concernant le bracelet GPS" couleur="bleu">
            <Texte>Refuser l'intégration au projet pilote sous sa forme actuelle. Les motifs sont multiples et convergents : la résidente n'a pas été consultée, la mesure est disproportionnée à la distance réelle (100 mètres), les intérêts institutionnels contaminent la décision. Si une forme de surveillance devait être discutée dans l'avenir pour des raisons médicales sérieuses, ce ne pourrait être qu'avec le consentement éclairé de Mme De Montmollin, hors de toute pression médiatique ou de prestige institutionnel, et avec une évaluation honnête de la proportionnalité.</Texte>
          </HighlightBox>
          <HighlightBox label="Orientation 4 — Concernant l'équipe et l'institution" couleur="jaune">
            <Texte>Jean ne peut pas porter seul la charge de cette situation. L'équipe soignante doit bénéficier d'un espace de délibération structuré pour travailler ensemble les enjeux, et pour assumer collectivement les risques résiduels de la décision choisie. Il y aura un risque résiduel quelle que soit la décision — aucune option n'est parfaite. Le consensus à rechercher n'est pas « tout le monde est d'accord sur la même solution » mais « tout le monde comprend les motifs de la décision et peut l'assumer face à la résidente, à sa famille et à la direction ».</Texte>
          </HighlightBox>
          <Texte>Ces orientations ne constituent pas la « bonne réponse » — elles constituent le résultat d'une délibération rigoureuse, à partir des outils de la formation. Dans votre propre contexte, avec vos propres informations sur la situation et les personnes, votre délibération produira peut-être des orientations différentes. Ce qui compte, c'est la qualité du processus qui y conduit.</Texte>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "La troisième tension éthique dans le cas de Madame De Montmollin oppose :",
            reponses: [
              "L'autonomie de la résidente et la sécurité physique",
              "Les intérêts institutionnels et les intérêts de la résidente",
              "La vie privée de la résidente et la surveillance technologique",
              "La famille de la résidente et l'équipe soignante"
            ],
            bonneReponse: 1,
            explication: "Cette tension souvent oubliée est pourtant décisive — le projet GPS est motivé par des enjeux de prestige et de recherche qui risquent d'instrumentaliser la résidente. L'institution ne peut pas utiliser une personne accompagnée comme moyen pour ses propres fins."
          },
          {
            question: "L'éthique du care invite à se demander :",
            reponses: [
              "Comment punir le comportement problématique pour l'avenir",
              "Quel soin manque-t-il à cette personne ?",
              "Comment appliquer le règlement de façon équitable pour tous",
              "Quelles sont les conséquences légales pour l'institution"
            ],
            bonneReponse: 1,
            explication: "Le prisme du care déplace la question — pas comment surveiller ou interdire, mais quel besoin relationnel ou existentiel se cache derrière ce comportement. L'alcool comme dernier espace de contrôle mérite une réponse humaine."
          },
          {
            question: "L'orientation délibérative recommandée concernant l'alcool est :",
            reponses: [
              "Interdire strictement toute consommation et en informer la famille",
              "Ignorer le comportement pour respecter entièrement l'autonomie",
              "Proposer une renégociation du contrat de soins avec un cadre co-construit",
              "Signaler immédiatement à la direction pour qu'elle décide"
            ],
            bonneReponse: 2,
            explication: "La médiation remplace l'interdiction — une solution co-construite avec la résidente qui respecte son autonomie tout en réduisant le risque médical. C'est la piste la plus cohérente avec la phronesis, l'éthique de la discussion et la protection de l'alliance thérapeutique."
          },
          {
            question: "Dans cette situation, le consensus réel de l'équipe signifie :",
            reponses: [
              "Que tout le monde est d'accord sur la même solution",
              "Que tout le monde comprend et peut assumer les motifs de la décision",
              "Que la majorité de l'équipe a voté pour une option",
              "Que le médecin a validé et approuvé la décision finale"
            ],
            bonneReponse: 1,
            explication: "Le consensus réel ne requiert pas l'unanimité — il requiert que chaque membre de l'équipe puisse comprendre et assumer collectivement la décision et ses motifs, y compris face à la personne accompagnée et à sa famille."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
