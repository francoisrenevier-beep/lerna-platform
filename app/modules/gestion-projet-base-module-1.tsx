import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module1GestionProjetBase({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Gestion de projet — Niveau Base"
        titre="Qu'est-ce qu'un projet ?"
        titrePart2="Reconnaître la démarche là où on ne la nomme pas"
        sousTitre="Vous menez probablement déjà des projets sans le savoir. Ce module met des mots et une logique sur ce que vous faites déjà."
        duree="≈ 20-25 minutes"
        niveau="Base"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Un mot que tout le monde emploie, que peu définissent">
          <Texte>Dans une institution, le mot « projet » est partout. Projet d'accompagnement, projet d'animation, projet pédagogique, projet d'établissement, projet de service, projet de vie. On l'emploie des dizaines de fois par semaine. Et pourtant, c'est l'un des mots les plus flous du vocabulaire professionnel.</Texte>
          <Texte>Ce flou mérite qu'on s'y arrête, parce qu'il n'est pas anodin. Quand un mot aussi central est compris différemment par chacun, plusieurs choses se produisent, discrètement, et finissent par coûter cher.</Texte>
          <Texte><strong>D'abord, on croit se comprendre alors qu'on ne parle pas de la même chose.</strong> Pour l'un, un projet est forcément un grand chantier institutionnel avec un comité, des réunions et un document officiel. Pour l'autre, c'est simplement une bonne idée qu'on aimerait mettre en place. Ces deux personnes peuvent travailler côte à côte des mois sans réaliser qu'elles ne mettent pas la même réalité derrière le mot — jusqu'au jour où le malentendu produit une déception ou un blocage.</Texte>
          <Texte><strong>Ensuite, le flou crée de l'exclusion.</strong> Si « projet » évoque quelque chose de grand, de formel, de réservé aux cadres, alors une partie des professionnels en conclut, logiquement, que « ça ne les concerne pas ». La veilleuse de nuit, l'agent d'intendance, la secrétaire se mettent en retrait d'une dynamique à laquelle ils auraient pourtant beaucoup à apporter.</Texte>
          <Texte>Enfin, le flou empêche d'apprendre. On ne peut pas progresser dans une pratique qu'on n'arrive pas à nommer. Tant qu'on ne sait pas reconnaître un projet, on ne peut pas se demander si on le mène bien. Poser une définition claire et partagée n'est donc pas un exercice scolaire — c'est une condition pratique pour travailler ensemble.</Texte>
        </SectionModule>

        <PullQuote source="">
          Un projet, ce n'est pas forcément quelque chose de grand ou de compliqué. C'est d'abord une intention : vouloir que quelque chose change, et s'organiser pour y arriver.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Quatre éléments qui font qu'un projet est un projet">
          <Texte>Plutôt que d'apprendre une définition par cœur, il est plus utile de retenir ce qui <em>compose</em> un projet. Dès que ces quatre éléments sont réunis, vous avez affaire à un projet — quelle que soit sa taille, qu'il soit écrit ou non, officiel ou informel.</Texte>

          <ConceptBox label="Concept clé" titre="Un projet, c'est une démarche organisée pour atteindre un objectif précis, dans un temps donné, qui aboutit à un changement.">
            <p>Quatre éléments le caractérisent : une intention, un objectif, un temps donné, un changement.</p>
          </ConceptBox>

          <Texte><strong>L'intention</strong> est le point de départ, et c'est le plus déterminant. Un projet naît toujours d'une intention : vouloir que quelque chose change, s'améliore, ou apparaisse. C'est ce qui distingue le projet de tout ce qui « tourne » sans qu'on l'ait voulu. L'intention donne le sens — au double sens du terme : la signification (pourquoi on le fait) et la direction (vers où on va). Un projet sans intention claire est un projet qui dérive. C'est pourquoi, dans toute la suite du parcours, on reviendra sans cesse à cette question : <strong>quelle est l'intention ?</strong></Texte>
          <Texte><strong>L'objectif</strong> est l'intention rendue concrète. L'intention peut être large et un peu vague (« qu'on se sente mieux ici ») ; l'objectif la traduit en un but qu'on peut viser et reconnaître (« que les résidents aient un endroit calme où se retirer dans la journée »). Le passage de l'intention à l'objectif est un moment clé : c'est là qu'un désir devient un projet réalisable. Beaucoup d'élans généreux ne deviennent jamais des projets faute d'avoir franchi cette étape.</Texte>
          <Texte><strong>Le temps donné</strong> signifie qu'un projet a un début et une fin. Cette caractéristique est essentielle, et souvent sous-estimée. Ce qui n'a pas de fin n'est pas un projet : c'est un fonctionnement. Un projet, lui, est par nature temporaire — il existe pour produire un changement, puis il s'achève. Cette dimension temporaire est libératrice : elle veut dire qu'un projet n'est pas un engagement infini, qu'il a un terme, et qu'on pourra à un moment dire « c'est fait ».</Texte>
          <Texte><strong>Le changement</strong> est ce à quoi on reconnaît qu'un projet a eu lieu. À la fin, quelque chose est différent d'avant. S'il n'y a aucune différence entre l'avant et l'après, soit le projet a échoué, soit ce n'était pas un projet. Ce critère oblige à se demander, dès le départ, « qu'est-ce qui aura changé quand ce sera terminé ? » — une question simple mais redoutablement éclairante.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à une chose que vous aimeriez voir changer dans votre quotidien professionnel. Posez-vous les quatre questions : Quelle est mon intention ? Quel objectif concret pourrait la traduire ? Sur quel horizon de temps ? Qu'est-ce qui aurait changé à la fin ? Si vous pouvez répondre aux quatre, vous tenez peut-être votre premier projet conscient.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La taille ne fait pas le projet">
          <Texte>Une idée reçue mérite d'être démontée tout de suite, parce qu'elle bloque beaucoup de monde : l'idée qu'un projet serait forcément quelque chose de grand.</Texte>
          <Texte>Rien n'est plus faux. Ce qui définit un projet, ce n'est pas son ampleur, c'est sa <strong>structure</strong> : la présence des quatre éléments. Réaménager un coin d'une salle pour qu'il devienne un espace de retrait apaisant est un projet aussi complet, dans sa logique, que la réorganisation d'un service entier. Les deux ont une intention, un objectif, un temps donné, un changement visé. Ils diffèrent par l'échelle, par le nombre de personnes impliquées, par les moyens — pas par leur nature.</Texte>
          <Texte>Cette idée a une conséquence directe et importante pour vous : <strong>les petits projets sont la meilleure école.</strong> C'est en menant consciemment des démarches modestes — bien cadrées, bien conduites, bien évaluées — qu'on développe le réflexe projet. Ceux qui pilotent un jour de grands projets ont presque toujours commencé par bien mener de petits.</Texte>

          <HighlightBox label="À retenir" couleur="vert">
            <Texte>Ne cherchez pas à « faire grand » pour faire un vrai projet. Un changement modeste, mené avec intention, méthode et évaluation, est un projet pleinement abouti — et un excellent terrain d'apprentissage. La maturité projet ne se mesure pas à la taille de ce qu'on entreprend, mais à la conscience avec laquelle on le mène.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Projet, tâche, routine : trois choses qu'on confond">
          <Texte>Pour cerner ce qu'est un projet, le plus efficace est de le situer par rapport à deux notions voisines avec lesquelles on le confond constamment : la routine et la tâche. Comprendre ces différences, ce n'est pas jouer sur les mots — c'est comprendre pourquoi certaines activités font avancer un changement et d'autres non.</Texte>

          <SchemaEtapes
            titre="Trois notions à distinguer"
            etapes={[
              {
                niveau: "ROUTINE",
                nom: "Maintenir",
                definition: "Se répète à l'identique · pas de fin prévue · maintient le fonctionnement",
              },
              {
                niveau: "TÂCHE",
                nom: "Exécuter",
                definition: "Action ponctuelle · a une fin · ne vise pas en soi un changement",
              },
              {
                niveau: "PROJET",
                nom: "Changer",
                definition: "Organise des tâches · vise un changement · début et fin définis",
              },
            ]}
          />

          <Texte>La distinction entre ces trois notions tient à deux questions : <strong>« Est-ce que ça vise un changement ? »</strong> et <strong>« Est-ce que ça a une fin ? »</strong> La routine ne vise pas de changement et n'a pas de fin. La tâche a une fin mais ne vise pas, à elle seule, de changement. Le projet vise un changement et a une fin. Ces deux critères suffisent presque toujours à trancher.</Texte>
          <Texte>Cette distinction éclaire un piège très répandu dans les institutions : <strong>confondre l'activité et l'avancement.</strong> On peut être débordé, enchaîner les tâches du matin au soir, et constater en fin de semaine qu'aucun projet n'a réellement progressé. L'agitation donne le sentiment de faire avancer les choses, mais multiplier les tâches ne fait pas avancer un projet si personne ne tient le cap de l'objectif.</Texte>
          <Texte>Cette confusion a un coût humain, pas seulement organisationnel. Des équipes peuvent s'épuiser dans une intense activité tout en ayant le sentiment frustrant de « faire du surplace ». Souvent, le problème n'est pas le manque de travail — c'est l'absence d'un cap clair qui relierait les tâches entre elles. Nommer cette différence, c'est déjà se donner les moyens d'en sortir.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Repensez à votre semaine de travail. Distinguez mentalement ce qui relevait de la routine (le fonctionnement à maintenir), de la tâche (les actions ponctuelles), et du projet (ce qui visait un changement). Cette répartition vous surprend-elle ? Beaucoup de professionnels découvrent qu'ils consacrent très peu de temps conscient au registre du projet — non par manque d'idées, mais parce que les routines et les tâches absorbent toute l'attention.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Une démarche avant d'être un outil">
          <Texte>Il faut lever un dernier malentendu, et il est de taille, parce qu'il décourage beaucoup de gens dès le départ : l'idée que la gestion de projet serait d'abord une affaire d'outils — des tableaux, des logiciels, des plannings, une méthode technique à maîtriser.</Texte>
          <Texte>C'est une inversion. Un projet est d'abord une <strong>démarche</strong> : une manière de penser et de s'organiser. L'outil n'intervient qu'ensuite, et seulement s'il sert réellement la démarche. On peut mener un excellent petit projet avec une feuille de papier, quelques échanges bien menés et une attention constante à l'objectif. À l'inverse, aucun outil, si sophistiqué soit-il, ne sauvera un projet dont personne n'a clarifié l'intention ni défini ce qu'on cherche à changer.</Texte>
          <Texte>Cette priorité de la démarche sur l'outil a deux conséquences majeures. La première est qu'elle <strong>rend la démarche projet accessible à tous</strong>. Si l'essentiel était technique, il faudrait une formation d'expert pour commencer. Mais puisque l'essentiel est une façon de penser — savoir où l'on va, s'organiser pour y parvenir, avancer avec les autres — alors chacun peut y entrer, quel que soit son métier et sans prérequis.</Texte>
          <Texte>La seconde est qu'elle <strong>protège contre une erreur fréquente</strong> : commencer par l'outil. Des équipes se lancent parfois dans un nouveau tableau de suivi ou un logiciel de planification avant même d'avoir clarifié ce qu'elles veulent faire. Elles s'épuisent à remplir des cases, et le projet patine — non par manque d'outil, mais parce que la démarche n'a jamais été posée. L'outil ne crée pas la clarté ; il ne fait que mettre en forme une clarté déjà là.</Texte>
        </SectionModule>

        <PullQuote source="">
          L'outil est au service de la démarche, jamais l'inverse. Commencer par l'outil, c'est habiller un vide ; commencer par l'intention, c'est donner une colonne vertébrale à ce qu'on entreprend.
        </PullQuote>

        <SectionModule eyebrow="Section 5" titre="Des projets, vous en menez déjà">
          <Texte>Toute cette réflexion conduit à un constat qui est le vrai message de ce module. La démarche projet n'est pas un savoir étranger qu'il faudrait acquérir de zéro. Elle est <strong>déjà présente</strong> dans votre pratique, simplement non nommée.</Texte>
          <Texte>Songez à ce que vous faites quand vous décidez d'améliorer un moment de la journée qui se passe mal, quand vous préparez l'arrivée d'une nouvelle personne, quand vous adaptez une organisation qui ne convient plus. Dans chacune de ces situations, sans peut-être l'avoir formulé ainsi, vous mobilisez une intention, vous visez un objectif, vous agissez sur une certaine durée, vous cherchez à produire un changement. Vous faites du projet.</Texte>
          <Texte>Ce que ce parcours va vous apporter n'est donc pas une compétence qui vous manquerait, mais quelque chose de plus subtil et de plus utile : <strong>de la conscience et des repères.</strong> Conscience de ce que vous faites déjà, pour le faire plus délibérément. Repères pour le faire mieux — plus clairement, plus sereinement, et surtout plus collectivement.</Texte>

          <HighlightBox label="Le déclic de ce module" couleur="bleu">
            <Texte>Vous n'avez pas à apprendre à faire des projets à partir de rien — vous en menez déjà. Ce parcours vous donne les mots pour les nommer, les repères pour les structurer, et la logique pour les conduire avec vos collègues. Vous ne partez pas de zéro ; vous partez de votre expérience, à laquelle on va donner un cadre.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Le mot « projet » est partout mais souvent flou ; ce flou crée des malentendus, de l'exclusion et empêche de progresser. Une définition partagée est une condition pratique pour travailler ensemble.",
              "Quatre éléments font un projet : une intention, un objectif, un temps donné, un changement.",
              "La taille ne fait pas le projet : un petit changement bien mené est un projet complet et la meilleure école pour apprendre.",
              "Il faut distinguer routine (se répète, pas de fin), tâche (ponctuelle, sans visée de changement) et projet (organise des tâches vers un changement). Activité n'est pas avancement.",
              "Un projet est d'abord une démarche, pas un outil : c'est ce qui le rend accessible à tous et ce qui protège de l'erreur de commencer par l'outil.",
              "Vous menez déjà des projets sans les nommer ; ce parcours vous apporte conscience et repères, pas un savoir parti de zéro.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Parmi ces situations, laquelle correspond à un projet ?",
              reponses: [
                "Faire les transmissions de fin de service",
                "Commander des fournitures",
                "Repenser l'organisation d'un moment de la journée qui se passe mal, pour qu'il devienne plus apaisant",
                "Ouvrir les volets chaque matin",
              ],
              bonneReponse: 2,
              explication: "On y trouve les quatre éléments : intention, objectif, temps donné, changement visé. Les autres sont des routines (transmissions, ouvrir les volets) ou des tâches isolées (commander des fournitures).",
            },
            {
              question: "Quels sont les deux critères qui suffisent presque toujours à distinguer un projet d'une routine ou d'une tâche ?",
              reponses: [
                "Son coût et sa durée",
                "Le fait qu'il vise un changement et qu'il a une fin",
                "Le fait qu'il soit écrit et validé par la direction",
                "Le nombre de personnes impliquées",
              ],
              bonneReponse: 1,
              explication: "La routine ne vise pas de changement et n'a pas de fin ; la tâche a une fin mais ne vise pas en soi un changement ; le projet réunit les deux.",
            },
            {
              question: "Pourquoi dit-on qu'un projet est « d'abord une démarche, pas un outil » ?",
              reponses: [
                "Parce que les outils sont interdits dans les petits projets",
                "Parce que la démarche — savoir où l'on va et s'organiser — est l'essentiel, ce qui rend le projet accessible à tous ; l'outil ne fait que mettre en forme une clarté déjà là",
                "Parce que les outils ne servent jamais à rien",
                "Parce que seuls les experts utilisent des outils",
              ],
              bonneReponse: 1,
              explication: "Si l'essentiel était technique, il faudrait une formation d'expert pour commencer. Mais puisque l'essentiel est une façon de penser, chacun peut y entrer quel que soit son métier.",
            },
            {
              question: "Être très occupé et enchaîner les tâches signifie qu'un projet avance. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Activité n'est pas avancement. On peut multiplier les tâches sans qu'aucun projet ne progresse, si personne ne tient le cap de l'objectif. À l'inverse, un projet peut avancer nettement avec peu d'agitation, parce que les bonnes actions sont menées au bon moment.",
            },
          ]}
        />

      </div>
    </div>
  )
}
