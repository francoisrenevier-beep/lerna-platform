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
        sousTitre="Mobiliser tous les outils conceptuels de la formation pour analyser et délibérer autour d'un dilemme éthique réel."
        duree="45 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le cœur pratique de la formation">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Analyser un dilemme éthique complexe à travers plusieurs prismes",
              "Identifier les tensions éthiques dans une situation concrète",
              "Appliquer la méthode de délibération de Legault",
              "Formuler une orientation délibérative argumentée"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Présentation complète du cas">
          <HighlightBox label="Madame De Montmollin — Les faits" couleur="bleu">
            <Liste items={[
              "Femme de 80 ans, résidente depuis 3 ans dans un EMS de psychogériatrie — placement volontaire suite au décès de son époux",
              "Réside sur un étage en libre circulation avec grande liberté de déplacement quotidien — promenades, sorties libres en forêt",
              "Jean, éducateur, découvre qu'elle achète régulièrement du vin au Denner (100 m de l'institution) et le cache au pied d'un arbre",
              "Elle consomme environ une bouteille et demie par semaine — dépasse la limite du règlement de l'EMS",
              "Risques identifiés : interaction médicamenteuse, risque de chute, rupture de transparence dans la relation soignant-résidente",
              "La direction propose de l'intégrer à un projet pilote de bracelet GPS, avec couverture médiatique et opportunités de recherche pour l'établissement"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Identification des tensions éthiques">
          <SchemaEtapes
            titre="Les trois tensions du cas De Montmollin"
            etapes={[
              { niveau: "Tension 1", nom: "Autonomie vs sécurité", definition: "Mme De Montmollin est un sujet autonome en placement volontaire. Elle a le droit à la liberté. Mais la consommation d'alcool avec sa médication représente un risque médical documenté." },
              { niveau: "Tension 2", nom: "Vie privée et dignité vs surveillance technologique", definition: "Le GPS transforme chaque déplacement en donnée traçable. Dans un contexte où elle dissimule son comportement pour maintenir une image d'elle-même, la surveillance permanente représente une atteinte à son intimité." },
              { niveau: "Tension 3", nom: "Intérêts institutionnels vs intérêts de la résidente", definition: "Le projet GPS est motivé par des enjeux extérieurs : couverture médiatique, financement, opportunité de recherche. L'institution risque d'instrumentaliser la résidente pour ses propres objectifs." }
            ]}
          />
          <HighlightBox label="La tension souvent oubliée" couleur="jaune">
            <Texte>La troisième tension est décisive — selon le triangle de Ricœur, l'institution risque de ne plus être garante de la vie bonne mais d'instrumentaliser la résidente pour ses propres objectifs. C'est une dérive éthique fondamentale.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Délibération guidée : Quatre prismes d'analyse">
          <Texte>Appliquons les quatre approches éthiques du module 1 à la situation de Madame De Montmollin. Cet exercice illustre comment des prismes différents produisent des conclusions différentes — et pourquoi la délibération collective est indispensable.</Texte>
          <HighlightBox label="Prisme utilitariste" couleur="jaune">
            <Texte>On cherche le plus grand bien pour le plus grand nombre. Le GPS réduit l'anxiété de l'équipe soignante et de la fille de Mme De Montmollin. Il prévient les coûts d'une chute grave et produit des données scientifiques utiles. En termes de calcul des conséquences, le projet semble justifié.</Texte>
          </HighlightBox>
          <HighlightBox label="Prisme déontologique" couleur="bleu">
            <Texte>Agis de telle sorte que tu traites l'humanité toujours comme une fin et jamais seulement comme un moyen (Kant). La surveillance GPS imposée à une résidente non consentante pour servir une recherche médiatique est moralement condamnable, quelle que soit son utilité. Le Code d'Avenir Social impose le respect strict de la sphère privée.</Texte>
          </HighlightBox>
          <HighlightBox label="Prisme de l'éthique des vertus" couleur="vert">
            <Texte>Jean doit exercer sa phronesis. Ni le gardien panoptique (excès), ni le soignant indifférent (défaut). Le juste milieu exige une conversation directe avec Mme De Montmollin, une écoute de ses besoins réels, une créativité institutionnelle qui n'écrase pas la liberté sous la sécurité.</Texte>
          </HighlightBox>
          <HighlightBox label="Prisme de l'éthique du care" couleur="vert">
            <Texte>La consommation de vin de Mme De Montmollin est peut-être le symptôme de besoins relationnels non comblés — deuil non élaboré, isolement, sentiment de ne plus contrôler sa propre vie. La vraie question n'est pas « comment surveiller cette résidente » mais « quel soin lui manque-t-il » ? L'alcool comme dernier espace de contrôle mérite une réponse humaine, pas technologique.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Orientations délibératives">
          <HighlightBox label="Concernant la consommation d'alcool" couleur="vert">
            <Texte>Abandonner la logique de l'interdiction pour celle de la médiation. Proposer à Mme De Montmollin une renégociation du contrat de soins qui inclut la possibilité de consommer son second verre dans un cadre sécurisé (le salon de l'EMS), en échange d'une transparence sur sa consommation permettant d'ajuster sa médication. Cette approche respecte son autonomie tout en réduisant le risque médical.</Texte>
          </HighlightBox>
          <HighlightBox label="Concernant le bracelet GPS" couleur="bleu">
            <Texte>Refuser l'intégration au projet pilote sous sa forme actuelle. La proximité du Denner (100 mètres) rend la mesure disproportionnée. Si une forme de surveillance devait être discutée dans l'avenir, elle ne pourrait l'être qu'avec le consentement éclairé de la résidente, hors de toute pression médiatique ou de recherche de prestige institutionnel.</Texte>
          </HighlightBox>
          <HighlightBox label="Concernant le processus d'équipe" couleur="jaune">
            <Texte>Jean et l'équipe soignante doivent bénéficier d'un espace de parole structuré pour assumer collectivement les risques résiduels de leur décision. Le consensus à rechercher n'est pas « tout le monde est d'accord » mais « tout le monde comprend et peut assumer les motifs de la décision choisie ».</Texte>
          </HighlightBox>
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
              "Proposer une renégociation du contrat de soins avec un cadre sécurisé",
              "Signaler immédiatement à la direction pour qu'elle décide"
            ],
            bonneReponse: 2,
            explication: "La médiation remplace l'interdiction — une solution co-construite avec la résidente qui respecte son autonomie tout en réduisant le risque médical. C'est la piste la plus cohérente avec la phronesis et l'éthique de la discussion."
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
