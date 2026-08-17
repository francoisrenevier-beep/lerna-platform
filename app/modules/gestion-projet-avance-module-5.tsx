import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module5GestionProjetAvance({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Gestion de projet : Niveau Avancé"
        titre="Gouvernance"
        titrePart2="et pilotage"
        sousTitre="Un projet de transformation engage des moyens, des personnes et du temps sur la durée : il a besoin d'une structure de pilotage qui lui donne une colonne vertébrale, sans l'alourdir."
        duree="≈ 25-30 minutes"
        niveau="Avancé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Structurer la conduite d'un projet d'envergure et décider dans l'incertitude">
          <Texte>Aux niveaux précédents, la question « qui décide quoi » se réglait à l'échelle d'une équipe. À l'échelle d'une transformation institutionnelle, elle change de dimension : plusieurs équipes, plusieurs niveaux de responsabilité, des arbitrages qui engagent des moyens importants et des effets durables. Sans une structure claire pour porter ces décisions, un projet d'envergure se disperse, s'enlise dans les hésitations, ou se bloque dans des conflits sans arbitre. C'est le rôle de la <strong>gouvernance</strong> : donner au projet une structure de décision et de suivi à la hauteur de son ampleur.</Texte>

          <Texte>Il faut d'emblée écarter un malentendu : la gouvernance n'est pas de la bureaucratie. Une structure de gouvernance n'a de valeur que si elle <strong>sert le projet</strong>, si elle accélère et clarifie les décisions au lieu de les ralentir. La bonne gouvernance est la plus légère possible tout en restant suffisante : juste ce qu'il faut de structure pour que les décisions se prennent au bon niveau, au bon moment, par les bonnes personnes.</Texte>

          <ConceptBox label="Concept clé" titre="La gouvernance d'un projet, c'est l'organisation des décisions et du suivi.">
            <p>Elle répond à des questions structurantes : qui décide quoi, à quel niveau ? Comment et quand les décisions se prennent-elles ? Comment le projet est-il suivi et rendu compte ? Une bonne gouvernance clarifie ces points sans les alourdir : elle est la colonne vertébrale du projet, pas son corset. Son test ultime est simple : facilite-t-elle les décisions, ou les entrave-t-elle ?</p>
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Les instances de pilotage : comité de pilotage et arbitrages">
          <Texte>Pour structurer la décision sur un projet d'envergure, on s'appuie généralement sur des instances dédiées. La plus courante est le <strong>comité de pilotage</strong>, souvent abrégé en « COPIL ».</Texte>

          <ConceptBox label="Concept clé" titre="Un comité de pilotage est l'instance qui oriente et arbitre un projet de transformation.">
            <p>Il réunit les responsables concernés à intervalles réguliers pour faire le point sur l'avancement, prendre les décisions importantes, arbitrer les questions qui dépassent le niveau opérationnel, et réorienter si nécessaire. C'est le lieu où le projet est piloté au sens fort : où l'on tient le cap, où l'on tranche, où l'on engage les moyens. Le comité de pilotage est aux jalons du niveau intermédiaire ce que la transformation est au projet d'équipe : des rendez-vous de décision, à l'échelle institutionnelle.</p>
          </ConceptBox>

          <Texte>L'utilité d'une telle instance tient à ce qu'elle <strong>crée des moments de décision assumés</strong>. Sans comité de pilotage, les décisions importantes se prennent au fil de l'eau, dans des couloirs, sans qu'on sache jamais vraiment qui a tranché ni sur quelle base : ce qui fragilise le projet et nourrit les contestations. Avec lui, les décisions ont un lieu, un moment, des responsables identifiés ; elles sont prises en conscience et peuvent être assumées et expliquées.</Texte>

          <Texte>La fonction la plus délicate du pilotage est l'<strong>arbitrage</strong> : trancher entre des options qui ont chacune leurs raisons, allouer des ressources toujours limitées entre des besoins concurrents, décider de ce qu'on fait et de ce qu'on renonce à faire. Arbitrer, c'est accepter de ne pas pouvoir tout satisfaire, et d'assumer un choix qui fera des mécontents. Un bon arbitrage n'est pas celui qui contente tout le monde, c'est impossible, mais celui qui sert le mieux la finalité du projet et qui peut être expliqué honnêtement à ceux qu'il défavorise.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Mobiliser et arbitrer les ressources">
          <Texte>Piloter une transformation, c'est piloter des ressources rares : du temps de professionnels, des compétences, des moyens matériels et financiers. La manière dont ces ressources sont mobilisées et réparties conditionne largement le sort du projet.</Texte>

          <Texte>La première exigence est le <strong>réalisme des moyens</strong>. Un projet de transformation qui sous-estime les ressources qu'il requiert, en particulier le temps des équipes, se condamne à l'échec ou à l'épuisement. On retrouve ici la contrainte fondamentale du secteur : la continuité de l'accompagnement prime, et le temps consacré à la transformation se prend toujours sur un temps déjà compté. Un pilotage responsable dimensionne le projet en fonction des ressources réellement disponibles, et non d'un idéal qui ferait abstraction de la charge quotidienne. <strong>Mieux vaut une ambition modeste tenue qu'une ambition vaste qui épuise les équipes et compromet l'accompagnement.</strong></Texte>

          <Texte>La seconde exigence est la <strong>cohérence des arbitrages avec la finalité</strong>. Quand on répartit des ressources rares, le critère ne peut pas être seulement gestionnaire ; il doit rester relié au sens. La question n'est pas seulement « qu'est-ce qui coûte le moins » mais « qu'est-ce qui sert le mieux les personnes accompagnées ». Un arbitrage qui économiserait des moyens au prix de la qualité de l'accompagnement trahirait la finalité même de l'institution.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à un arbitrage de ressources que vous avez eu à faire ou à observer. Le critère décisif a-t-il été purement gestionnaire (le moindre coût), ou est-il resté relié à la finalité (ce qui sert le mieux les personnes) ? Et l'estimation des moyens nécessaires tenait-elle compte honnêtement de la charge réelle des équipes, ou supposait-elle une disponibilité qui n'existait pas ?</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Le tableau de bord : suivre sans étouffer">
          <Texte>Pour piloter dans la durée, le pilote a besoin de voir où en est la transformation. C'est la fonction du <strong>tableau de bord de pilotage</strong>, un outil dont il faut, là encore, retenir la logique sans tomber dans la dérive de la mesure dénoncée au module 3.</Texte>

          <ConceptBox label="Concept clé" titre="Un tableau de bord de pilotage est un ensemble réduit de repères.">
            <p>Son but n'est pas de tout mesurer, mais de donner au pilote les quelques signaux dont il a besoin pour savoir si le projet avance dans la bonne direction, où sont les points de tension, et quand il faut réagir. Un bon tableau de bord est sobre : quelques repères pertinents valent mieux qu'une profusion d'indicateurs qui noie le signal.</p>
          </ConceptBox>

          <Texte>Le tableau de bord de pilotage hérite directement de la vigilance éthique du module 3. Le risque est de le remplir de ce qui se mesure facilement, des chiffres d'activité, en croyant ainsi suivre la transformation, alors qu'on ne suit que sa surface quantifiable. Un pilotage de transformation sociale doit intégrer dans ses repères des éléments qualitatifs : le climat des équipes, le vécu des personnes accompagnées, la qualité réelle de l'accompagnement, qui ne se lisent pas dans des chiffres mais dans l'écoute, l'observation, la présence sur le terrain.</Texte>

          <HighlightBox label="Sobriété du tableau de bord" couleur="bleu">
            <Texte><strong>Le meilleur instrument de pilotage du pilote n'est pas son tableau de bord, c'est sa présence attentive auprès des équipes et des personnes.</strong> Le tableau de bord complète cette présence ; il ne la remplace jamais. La tentation est de croire qu'on pilote mieux en mesurant plus. C'est l'inverse : un tableau de bord surchargé noie l'information utile et déporte l'attention vers ce qui se compte au détriment de ce qui compte. Un pilote qui ne connaît son projet que par des chiffres ne le pilote pas vraiment.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Décider en situation d'incertitude">
          <Texte>Nous arrivons à ce qui est sans doute le cœur du métier de pilote : <strong>décider alors qu'on n'a pas toutes les informations</strong>. Le module 1 l'a posé : l'incertitude est inhérente aux transformations. Le pilote ne décide donc presque jamais en pleine connaissance de cause ; il décide dans un brouillard plus ou moins épais.</Texte>

          <Texte>L'erreur symétrique guette des deux côtés. D'un côté, la <strong>paralysie</strong> : attendre d'avoir toutes les informations pour décider, ce qui revient à ne jamais décider, car la certitude complète n'arrive jamais. De l'autre, la <strong>précipitation</strong> : décider vite et sans discernement, en confondant la nécessité d'avancer avec l'absence de réflexion. La voie juste est entre les deux : décider avec le discernement possible, sur la base des informations disponibles, en assumant la part d'incertitude résiduelle.</Texte>

          <ConceptBox label="Concept clé" titre="Décider dans l'incertitude, c'est trancher avec le discernement possible, sans exiger une certitude qui n'existe pas.">
            <p>Cela suppose de rassembler les informations accessibles dans un temps raisonnable, de consulter ceux qui éclairent la décision (le regard partagé, encore), d'identifier le choix qui sert le mieux la finalité au vu de ce qu'on sait, puis d'assumer ce choix tout en restant prêt à le corriger si la suite révèle qu'il était mauvais. La réversibilité, quand elle est possible, est précieuse : une décision qu'on peut ajuster est moins risquée qu'un pari irréversible, ce qui rejoint la logique itérative du module 2.</p>
          </ConceptBox>

          <Texte>Une qualité aide le pilote à décider dans l'incertitude : l'acceptation de l'<strong>imperfection assumée</strong>. Le pilote qui exige de lui-même des décisions parfaites se condamne à la paralysie. Le pilote mûr accepte de prendre, en conscience, des décisions imparfaites mais nécessaires, et de les corriger ensuite si besoin, sans y voir un échec personnel mais le cours normal d'un pilotage honnête.</Texte>

          <PullQuote>
            Le pilote ne décide jamais avec toutes les cartes en main : c'est la nature de son métier. Son art n'est pas d'attendre la certitude, mais de trancher avec discernement dans l'incertitude, et d'assumer de corriger en chemin.
          </PullQuote>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Un projet d'envergure a besoin d'une gouvernance : une structure de décision et de suivi. Mais la gouvernance n'est pas de la bureaucratie, la bonne gouvernance est la plus légère possible tout en restant suffisante, et son test est de faciliter les décisions.",
              "Le comité de pilotage est l'instance qui oriente et arbitre ; il crée des moments de décision assumés et traçables. L'arbitrage est la fonction la plus délicate : il ne contente pas tout le monde mais sert la finalité et peut s'expliquer.",
              "Mobiliser les ressources suppose le réalisme des moyens (la continuité de l'accompagnement prime) et la cohérence des arbitrages avec la finalité (servir les personnes, pas seulement économiser).",
              "Le tableau de bord doit être sobre et intégrer des repères qualitatifs. Le meilleur instrument du pilote n'est pas son tableau de bord, mais sa présence attentive sur le terrain.",
              "Décider dans l'incertitude est le cœur du métier : ni paralysie, ni précipitation. On tranche avec le discernement possible, on privilégie la réversibilité, et on assume des décisions imparfaites quitte à les corriger.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Qu'est-ce qui caractérise une bonne gouvernance de projet ?",
              reponses: [
                "Le maximum d'instances et de circuits de validation, pour tout contrôler",
                "La structure la plus légère possible tout en restant suffisante ; son test est de faciliter les décisions, pas de les entraver",
                "L'absence totale de structure, pour rester souple et réactif",
                "Une gouvernance purement gestionnaire, déconnectée de la finalité sociale",
              ],
              bonneReponse: 1,
              explication: "La bonne gouvernance n'est pas de la bureaucratie. Une gouvernance lourde étouffe le projet qu'elle prétend servir. La bonne gouvernance est la plus légère possible tout en restant suffisante : juste ce qu'il faut pour que les décisions se prennent au bon niveau, au bon moment, par les bonnes personnes. Son test : facilite-t-elle les décisions ?",
            },
            {
              question: "Qu'est-ce qu'un arbitrage réussi dans le pilotage d'une transformation ?",
              reponses: [
                "Celui qui contente tout le monde",
                "Celui qui sert le mieux la finalité du projet et qui peut être expliqué honnêtement à ceux qu'il défavorise",
                "Celui qui coûte le moins cher, quel que soit l'effet sur les personnes",
                "Celui qui évite toute décision difficile ou impopulaire",
              ],
              bonneReponse: 1,
              explication: "Un bon arbitrage n'est pas celui qui contente tout le monde, c'est impossible. C'est celui qui sert le mieux la finalité du projet et qui peut être expliqué honnêtement. L'arbitrage doit rester relié au sens : non seulement « qu'est-ce qui coûte le moins » mais « qu'est-ce qui sert le mieux les personnes ».",
            },
            {
              question: "Quel est le meilleur instrument de pilotage d'une transformation ?",
              reponses: [
                "Un tableau de bord le plus complet possible, rempli d'indicateurs chiffrés",
                "La présence attentive du pilote auprès des équipes et des personnes, complétée par un tableau de bord sobre intégrant des repères qualitatifs",
                "Les seuls chiffres d'activité fournis par le service statistiques",
                "L'absence de tout suivi formel pour rester agile",
              ],
              bonneReponse: 1,
              explication: "Le meilleur instrument de pilotage n'est pas le tableau de bord, c'est la présence attentive sur le terrain. Le tableau de bord complète cette présence ; il ne la remplace jamais. Un tableau de bord surchargé noie l'information utile. Quelques repères bien choisis, dont des repères qualitatifs assumés, suffisent.",
            },
            {
              question: "Comment décider en situation d'incertitude ?",
              reponses: [
                "Attendre d'avoir toutes les informations avant de trancher",
                "Décider très vite, sans réflexion, pour avancer coûte que coûte",
                "Trancher avec le discernement possible sur la base des informations disponibles, privilégier la réversibilité, et assumer des décisions imparfaites quitte à les corriger",
                "Déléguer toute décision pour ne pas porter la responsabilité",
              ],
              bonneReponse: 2,
              explication: "La voie juste est entre paralysie et précipitation : décider avec le discernement possible, en assumant la part d'incertitude résiduelle. La réversibilité est précieuse quand elle est possible. Le pilote mûr accepte des décisions imparfaites mais nécessaires, et les corrige si besoin sans y voir un échec.",
            },
            {
              question: "Vrai ou faux : « Un bon pilote ne prend que des décisions parfaites, en s'assurant d'avoir une information complète. »",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Faux. L'information complète n'existe pas dans une transformation : l'incertitude est inhérente. Exiger des décisions parfaites mène à la paralysie. Le pilote mûr assume des décisions imparfaites mais nécessaires, en conscience, et les corrige si besoin, sans y voir un échec mais le cours normal d'un pilotage honnête.",
            },
          ]}
        />

      </div>
    </div>
  )
}
