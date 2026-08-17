import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3GestionProjetBase({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Gestion de projet : Niveau Base"
        titre="Le projet d'accompagnement"
        titrePart2="un projet du quotidien"
        sousTitre="La démarche projet, vous la pratiquez déjà au cœur de votre métier. Ce module le montre."
        duree="≈ 20-25 minutes"
        niveau="Base"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le projet qui est au cœur du métier">
          <Texte>Les deux premiers modules ont posé une logique générale : ce qu'est un projet, comment il se déroule. Ce module-ci fait une chose décisive, il montre que cette logique n'est pas une importation venue du monde de l'entreprise ou du management, mais qu'elle est <strong>déjà au centre de votre métier</strong>, sous un nom que vous connaissez tous : le projet d'accompagnement individualisé.</Texte>
          <Texte>Selon les institutions et les secteurs, on l'appelle projet personnalisé, projet individuel, projet de vie, projet pédagogique individualisé. Les termes varient ; la réalité est la même. C'est la démarche, et pas seulement le document, qui organise l'accompagnement d'une personne autour de ses besoins, de ses attentes et de ses objectifs propres. C'est le cœur battant du travail social et médico-social, ce qui distingue un accompagnement digne de ce nom d'une simple prise en charge standardisée.</Texte>
          <Texte>Or ce projet d'accompagnement est un <strong>exemple parfait de démarche projet</strong>. Tous les éléments vus au module 1 s'y retrouvent : une intention (que la situation de la personne évolue favorablement), des objectifs (concrets, propres à elle), un déroulé dans le temps (avec des points de révision), un changement visé (une progression, un mieux-être, le maintien d'une autonomie). Et les quatre phases du module 2 s'y déploient naturellement.</Texte>
          <Texte>Comprendre cela a une portée qui dépasse l'exercice intellectuel. Cela signifie que la démarche projet n'est pas une couche administrative ajoutée à votre travail, une contrainte de plus venue d'en haut. Elle est consubstantielle à ce que vous faites déjà de plus essentiel. Maîtriser la logique projet, ce n'est donc pas apprendre à faire « autre chose » que votre métier : c'est mieux faire le cœur même de votre métier.</Texte>
        </SectionModule>

        <PullQuote source="">
          Le projet d'accompagnement n'est pas un papier à remplir pour l'administration. C'est une démarche vivante : chercher, avec la personne, ce vers quoi on veut aller, et s'organiser pour y parvenir.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Les quatre phases à l'œuvre dans l'accompagnement">
          <Texte>Reprenons le cycle de vie du module 2 et observons comment il structure, naturellement, un projet d'accompagnement. L'intérêt de l'exercice n'est pas de plaquer un schéma sur votre pratique, mais de vous faire reconnaître, dans ce que vous faites déjà, une démarche dont vous maîtrisez désormais la logique.</Texte>

          <SchemaEtapes
            titre="Les 4 phases appliquées à un projet d'accompagnement"
            etapes={[
              {
                niveau: "IMAGINER",
                nom: "Observer et écouter",
                definition: "Comprendre ses besoins, attentes, ressources avant de définir quoi que ce soit",
              },
              {
                niveau: "PRÉPARER",
                nom: "Construire avec elle",
                definition: "Définir les objectifs, identifier les moyens, répartir les rôles",
              },
              {
                niveau: "RÉALISER",
                nom: "Accompagner au quotidien",
                definition: "Mettre en œuvre l'accompagnement, observer, ajuster",
              },
              {
                niveau: "ÉVALUER",
                nom: "Faire le point",
                definition: "Mesurer le chemin avec la personne, réorienter si besoin",
              },
            ]}
          />

          <Texte><strong>Imaginer</strong>, ici, c'est la phase d'observation et d'écoute. Avant de définir quoi que ce soit, on cherche à comprendre cette personne-là : ses besoins réels, ses attentes, ses envies, mais aussi, et c'est essentiel, ses ressources, ses capacités, ce sur quoi elle peut s'appuyer. Cette phase rejoint exactement la retenue dont on parlait au module 2 : comprendre avant de vouloir résoudre. Un projet d'accompagnement qui partirait des cases d'un formulaire plutôt que de la personne réelle sonnerait faux, parce qu'il aurait sauté ce travail de compréhension. C'est souvent ici que se joue la qualité de tout le reste.</Texte>
          <Texte><strong>Préparer</strong>, c'est construire le projet à proprement parler : définir des objectifs, idéalement <em>avec</em> la personne —, identifier les moyens, préciser qui fait quoi dans l'équipe, fixer des échéances de révision. C'est la colonne vertébrale de l'accompagnement, ce qui lui donne une direction au lieu de le laisser au gré des jours.</Texte>
          <Texte><strong>Réaliser</strong>, c'est le cœur vivant et quotidien : l'accompagnement de chaque jour, où l'on met en œuvre ce qui a été préparé tout en restant attentif à ce qui se passe réellement. Comme dans tout projet, la personne évolue, des imprévus surviennent, et l'on ajuste, sans perdre de vue les objectifs.</Texte>
          <Texte><strong>Évaluer</strong>, c'est faire le point, à intervalles réguliers et avec la personne : a-t-elle progressé vers ses objectifs ? Ceux-ci sont-ils toujours pertinents, ou la situation a-t-elle changé au point qu'il faille les revoir ?</Texte>

          <ConceptBox label="Concept clé" titre="Un cycle qui se renouvelle, et non un projet qui se termine">
            <p>C'est la grande spécificité du projet d'accompagnement par rapport à un projet ponctuel. Un projet classique s'achève quand son objectif est atteint. L'accompagnement d'une personne, lui, se poursuit : on repasse régulièrement par les quatre phases, chaque révision rouvrant un nouveau tour du cycle. Le projet d'accompagnement n'est jamais « fini » tant que dure l'accompagnement ; il se réévalue et se réécrit au fil du temps, épousant l'évolution de la personne.</p>
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La personne : actrice de son projet, et non destinataire">
          <Texte>Voici le point le plus important de ce module, et l'une des spécificités les plus fortes du secteur. Il mérite qu'on s'y arrête longuement, parce qu'il touche à la fois à l'efficacité de l'accompagnement et à son sens éthique.</Texte>
          <Texte>Dans la plupart des projets, il y a une asymétrie simple : ceux qui conçoivent et réalisent d'un côté, ceux qui reçoivent de l'autre. Le projet d'accompagnement bouscule cette asymétrie. <strong>La personne accompagnée n'est pas seulement la destinataire de son projet : elle en est une actrice.</strong> Son projet ne se conçoit pas <em>pour</em> elle dans son absence, puis ne s'applique à elle ; il se construit <em>avec</em> elle, en tenant compte de sa parole, de ses choix, de son rythme.</Texte>

          <ConceptBox label="Concept clé" titre="Faire « avec » plutôt que « pour »">
            <p>Un projet d'accompagnement réussi n'est pas celui que l'équipe a élaboré seule, aussi compétente soit-elle, pour l'appliquer ensuite à la personne. C'est celui qui associe la personne aux décisions qui la concernent, à la mesure de ses capacités et de ses souhaits. On parle parfois de <strong>pouvoir d'agir</strong> : la visée d'aider la personne à rester actrice de sa propre vie, plutôt que de décider à sa place ce qui est bon pour elle.</p>
          </ConceptBox>

          <Texte>Cette distinction entre « faire avec » et « faire pour » paraît subtile ; elle est en réalité un partage des eaux. Elle change la nature même de l'accompagnement. « Faire pour », même avec les meilleures intentions, installe la personne dans une position passive : on s'occupe d'elle, on décide pour son bien. « Faire avec » la maintient en position de sujet : on l'accompagne à conduire sa propre vie. La première posture peut être bienveillante et rester, pourtant, une forme de dépossession. La seconde demande plus de temps, plus de patience, parfois l'acceptation que la personne ne fasse pas le choix qu'on aurait fait pour elle, mais c'est elle qui respecte pleinement sa dignité.</Texte>
          <Texte>Car ce point n'est pas seulement une question d'efficacité ; c'est une <strong>exigence éthique fondamentale</strong>. Respecter la personne comme un sujet, jamais comme un simple objet de soins ou d'éducation, est au principe même du travail d'accompagnement. Le projet construit « avec » est la traduction très concrète de ce respect dans l'organisation quotidienne.</Texte>
        </SectionModule>

        <PullQuote source="">
          Rien sur la personne sans la personne. Son projet lui appartient ; nous l'accompagnons à le construire, nous ne le construisons pas à sa place.
        </PullQuote>

        <HighlightBox label="Point de réflexion" couleur="jaune">
          <Texte>Repensez à un projet d'accompagnement auquel vous avez participé. La personne a-t-elle été associée à la définition de ses propres objectifs, ou ceux-ci ont-ils été fixés par l'équipe puis présentés ? Il n'y a pas de réponse honteuse : la pression du temps pousse souvent au « faire pour ». Mais prendre conscience de ce glissement est le premier pas pour, la prochaine fois, ménager un peu plus d'espace à la parole de la personne.</Texte>
        </HighlightBox>

        <SectionModule eyebrow="Section 3" titre="Un projet qui se construit à plusieurs">
          <Texte>Le projet d'accompagnement n'est pas davantage l'affaire d'un seul professionnel qu'il n'est l'affaire de la seule équipe sans la personne. Il se nourrit de plusieurs regards, et cette pluralité est une condition de sa justesse, pas un simple supplément.</Texte>
          <Texte>Le professionnel référent y joue un rôle central de coordination, mais il n'est pas seul à détenir la vérité de la situation. Chaque professionnel qui croise la personne en perçoit une facette particulière, nous verrons au module suivant à quel point cette diversité de regards est précieuse. S'y ajoutent, très souvent, <strong>la famille et les proches</strong>, dont la connaissance de la personne (son histoire, ses goûts, ce qui compte pour elle) est irremplaçable, et dont l'implication peut être déterminante dans la réussite de l'accompagnement.</Texte>
          <Texte>Retenez l'essentiel : <strong>un projet d'accompagnement de qualité est un projet partagé</strong>, qui assume de croiser les regards plutôt que de s'en remettre à un seul. La personne, sa famille, le référent, l'équipe pluridisciplinaire : chacun apporte une part de la compréhension, et c'est leur mise en commun qui rend l'accompagnement juste.</Texte>

          <HighlightBox label="Lien avec votre quotidien" couleur="bleu">
            <Texte>La prochaine fois que vous participerez à l'élaboration ou à la révision d'un projet d'accompagnement, gardez en tête deux réflexes simples issus de ce module. D'abord, repérez les quatre phases, où en est-on : observe-t-on encore, prépare-t-on, réalise-t-on, évalue-t-on ? Ensuite, posez-vous la question qui change tout : « Construit-on ce projet <em>avec</em> la personne, ou seulement <em>pour</em> elle ? » Ces deux réflexes, à eux seuls, élèvent la qualité d'un accompagnement.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Le projet d'accompagnement individualisé est un exemple parfait de démarche projet : il en réunit tous les éléments et toutes les phases. La logique projet n'est donc pas une contrainte ajoutée, mais le cœur même du métier d'accompagnement.",
              "Les quatre phases s'y déploient : imaginer (observer, écouter, comprendre avant de résoudre), préparer (définir les objectifs et les moyens avec la personne), réaliser (accompagner au quotidien en ajustant), évaluer (faire le point et réorienter).",
              "C'est un cycle qui se renouvelle, et non un projet qui se termine : on repasse régulièrement par les quatre phases tant que dure l'accompagnement.",
              "La personne est actrice de son projet, pas seulement destinataire : « faire avec » plutôt que « faire pour » n'est pas une nuance, c'est un partage des eaux, à la fois plus efficace et plus respectueux de sa dignité.",
              "Un bon projet d'accompagnement est partagé : il croise les regards de la personne, de la famille, du référent et de l'équipe.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Pourquoi dit-on que le projet d'accompagnement individualisé est un « exemple parfait de démarche projet » ?",
              reponses: [
                "Parce qu'il est obligatoire et encadré par la loi",
                "Parce qu'il réunit tous les éléments d'un projet (intention, objectifs, déroulé dans le temps, changement visé), et que les quatre phases s'y déploient",
                "Parce qu'il est rédigé par la direction",
                "Parce qu'une fois écrit, il ne change plus",
              ],
              bonneReponse: 1,
              explication: "Le projet d'accompagnement réunit exactement les quatre éléments d'un projet (intention, objectifs, temps, changement) et les quatre phases (imaginer, préparer, réaliser, évaluer) s'y déploient naturellement.",
            },
            {
              question: "Qu'est-ce qui distingue le projet d'accompagnement d'un projet ponctuel classique ?",
              reponses: [
                "Il n'a pas d'objectif",
                "Il ne concerne qu'une personne",
                "C'est un cycle qui se renouvelle : on repasse régulièrement par les quatre phases tant que dure l'accompagnement, au lieu de s'achever une fois l'objectif atteint",
                "Il ne nécessite pas d'évaluation",
              ],
              bonneReponse: 2,
              explication: "Contrairement à un projet ponctuel qui s'achève quand son objectif est atteint, le projet d'accompagnement se renouvelle : chaque révision repart d'un nouveau tour du cycle.",
            },
            {
              question: "Que signifie « faire avec plutôt que pour » la personne accompagnée, et pourquoi est-ce important ?",
              reponses: [
                "Faire le projet à sa place pour lui épargner l'effort",
                "Associer la personne aux décisions qui la concernent, selon ses capacités et ses souhaits, pour la maintenir en position de sujet et respecter sa dignité",
                "La laisser entièrement seule face à ses choix",
                "Confier toutes les décisions à la famille",
              ],
              bonneReponse: 1,
              explication: "« Faire pour », même bienveillant, peut être une forme de dépossession ; « faire avec » maintient la personne actrice de sa propre vie. C'est à la fois plus efficace et plus respectueux de sa dignité.",
            },
            {
              question: "Une fois rédigé, le projet d'accompagnement est figé jusqu'au départ de la personne. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "C'est un cycle qui se renouvelle : on le réévalue régulièrement, avec la personne, et on le réoriente dès que ses besoins ou ses objectifs évoluent.",
            },
          ]}
        />

      </div>
    </div>
  )
}
