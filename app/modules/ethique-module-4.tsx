import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4Ethique({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Éthique professionnelle"
        titre="Le dilemme et la délibération éthique"
        sousTitre="Décider lorsqu'aucune solution n'est pleinement satisfaisante"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Quand la règle ne suffit plus">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Distinguer enjeu éthique et dilemme éthique",
              "Comprendre pourquoi les dilemmes sont structurels dans le travail social",
              "Maîtriser une démarche structurée de délibération en 6 étapes",
              "Comprendre le rôle du collectif dans la délibération",
              "Accepter l'imperfection éthique comme condition de l'action responsable"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Dilemme éthique et enjeu éthique : clarifier les termes">
          <Texte>Un enjeu éthique apparaît lorsqu'une valeur importante est menacée ou mise en tension dans une situation donnée. Une réflexion éthique est nécessaire, mais une solution satisfaisante reste parfois possible.</Texte>
          <Texte>Le dilemme éthique, en revanche, correspond à une situation dans laquelle aucune option n'est pleinement acceptable. Chaque choix entraîne la transgression d'une valeur ou d'un principe jugé important. Dans le travail social, ces dilemmes apparaissent notamment quand :</Texte>
          <Liste items={[
            "Deux obligations professionnelles entrent en conflit",
            "La protection d'une personne implique une restriction de sa liberté",
            "Le respect d'une règle produit une injustice concrète",
            "L'intérêt d'une personne s'oppose à celui d'un collectif"
          ]} />
          <Texte>Reconnaître qu'une situation relève d'un dilemme permet de sortir d'une logique de faute individuelle.</Texte>
          <HighlightBox label="Un indicateur important" couleur="jaune">
            <Texte>Le malaise ressenti face à certaines décisions n'est pas un signe d'incompétence. C'est l'indicateur d'un enjeu éthique réel.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Pourquoi les dilemmes sont inévitables">
          <Texte>Les dilemmes éthiques ne sont pas des accidents — ils sont structurels. Ils émergent de la rareté des ressources, de la complexité des situations humaines, de la pluralité des valeurs en jeu, des contradictions internes aux institutions.</Texte>
          <Texte>Chercher à éliminer les dilemmes reviendrait à nier la réalité du travail social. L'enjeu éthique est d'apprendre à habiter ces tensions, à les rendre pensables et discutables, plutôt que de les subir en silence.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Le risque de la décision solitaire">
          <Texte>Face à un dilemme, les professionnels peuvent être tentés de décider seuls, dans l'urgence ou sous pression. Cette solitude décisionnelle est l'un des facteurs majeurs de souffrance éthique et d'épuisement professionnel.</Texte>
          <Texte>Décider seul expose à plusieurs risques :</Texte>
          <Liste items={[
            "Réduire la situation à un seul angle de lecture",
            "Porter seul la responsabilité morale d'un choix qui dépasse le rôle individuel",
            "Transformer un problème collectif ou institutionnel en problème personnel"
          ]} />
          <Texte>L'éthique professionnelle suppose des espaces, des méthodes et une culture de la discussion.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="La délibération éthique : un changement de posture">
          <Texte>La délibération éthique ne vise pas à produire une solution parfaite. Elle vise à transformer la manière dont une décision est prise. Il s'agit de passer d'une réaction immédiate à un processus réfléchi, argumenté et partagé. Délibérer, c'est accepter de suspendre momentanément l'action pour prendre du recul.</Texte>
          <Texte>Dans le travail social, la délibération éthique constitue un outil de sécurisation des pratiques. Elle permet de :</Texte>
          <Liste items={[
            "Clarifier ce qui est réellement en jeu dans la situation",
            "Expliciter les valeurs et principes mobilisés",
            "Rendre visibles les contraintes institutionnelles",
            "Partager la responsabilité de la décision"
          ]} />
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Une démarche structurée de délibération éthique en 6 étapes">
          <SchemaEtapes
            titre="Les trois premiers temps de la délibération"
            etapes={[
              { niveau: "Étape 1", nom: "Décrire", definition: "La situation avec précision — distinguer les faits des interprétations" },
              { niveau: "Étape 2", nom: "Identifier", definition: "Les personnes concernées directement et indirectement" },
              { niveau: "Étape 3", nom: "Mettre en lumière", definition: "Les valeurs et principes en tension — reconnaître leur légitimité respective" }
            ]}
          />
          <Texte>Les 6 étapes complètes de la démarche :</Texte>
          <Liste items={[
            "1) Décrire précisément la situation — distinguer les faits des interprétations",
            "2) Identifier toutes les personnes concernées, directement et indirectement",
            "3) Nommer les valeurs et principes en tension — reconnaître leur légitimité respective",
            "4) Explorer les options possibles — analyser les conséquences, les transgressions et les responsabilités",
            "5) Formuler une décision argumentée — la plus défendable dans ce contexte précis",
            "6) Évaluer après coup et tirer des enseignements pour la pratique future"
          ]} />
        </SectionModule>

        <SectionModule eyebrow="Section 6" titre="L'importance du collectif dans la délibération">
          <Texte>La délibération éthique prend toute sa valeur lorsqu'elle est collective. Le regard croisé des collègues permet de repérer des angles morts, d'éviter les décisions guidées uniquement par l'émotion ou l'habitude, de légitimer une décision difficile.</Texte>
          <Texte>Le collectif permet de transformer les dilemmes individuels en enjeux institutionnels, ouvrant parfois la voie à des ajustements organisationnels.</Texte>
          <HighlightBox label="Conditions de la délibération collective" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Bienveillance — accueillir les points de vue sans jugement",
              "Suspension du jugement — s'autoriser à douter avant de conclure",
              "Argumentation — fonder les positions sur des raisons explicitées",
              "Respect des désaccords — la divergence enrichit la réflexion"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 7" titre="Accepter l'imperfection éthique">
          <Texte>Une délibération éthique réussie n'aboutit pas nécessairement à un apaisement immédiat. Il est possible que le malaise persiste après la décision. L'éthique ne supprime pas la tragédie des choix. Elle permet de les habiter autrement, avec plus de lucidité, de responsabilité et de cohérence professionnelle.</Texte>
          <PullQuote>
            La décision éthique n'est pas celle sur laquelle tout le monde est d'accord. C'est celle que tout le monde peut comprendre et respecter, même en désaccord.
          </PullQuote>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la différence entre un enjeu éthique et un dilemme éthique ?",
            reponses: [
              "Il n'y a pas de différence significative, les deux termes sont synonymes",
              "Dans le dilemme, aucune option n'est pleinement acceptable — chaque choix transgresse une valeur importante",
              "Le dilemme concerne les grandes décisions, l'enjeu les petites situations du quotidien",
              "Un enjeu éthique est toujours collectif, un dilemme est toujours individuel"
            ],
            bonneReponse: 1,
            explication: "Un enjeu éthique met une valeur en tension, mais une solution satisfaisante reste possible. Le dilemme éthique est plus radical : toutes les options entraînent la transgression d'une valeur ou d'un principe légitime. Reconnaître cette différence permet de sortir d'une logique de faute individuelle."
          },
          {
            question: "Pourquoi les dilemmes éthiques dans le travail social sont-ils qualifiés de 'structurels' ?",
            reponses: [
              "Parce qu'ils sont liés aux structures architecturales des institutions",
              "Parce qu'ils émergent de la rareté des ressources, de la complexité humaine et des contradictions institutionnelles",
              "Parce qu'ils concernent uniquement l'organisation du travail en équipe",
              "Parce qu'ils sont liés à des lacunes dans la formation des professionnels"
            ],
            bonneReponse: 1,
            explication: "Les dilemmes ne sont pas des accidents — ils sont la conséquence structurelle de la rareté des ressources, de la pluralité des valeurs en jeu et des contradictions internes aux institutions. Chercher à les éliminer reviendrait à nier la réalité du travail social."
          },
          {
            question: "La décision solitaire face à un dilemme éthique comporte quel risque principal ?",
            reponses: [
              "Elle est toujours plus rapide et donc préférable en situation d'urgence",
              "Elle permet d'éviter les conflits d'équipe",
              "Elle transforme un problème collectif ou institutionnel en problème personnel",
              "Elle garantit la confidentialité de la situation"
            ],
            bonneReponse: 2,
            explication: "Décider seul expose à réduire la situation à un seul angle de lecture et à porter seul une responsabilité morale qui devrait être partagée. C'est l'un des facteurs majeurs de souffrance éthique et d'épuisement professionnel. La délibération collective distribue la responsabilité."
          },
          {
            question: "La délibération éthique commence par quelle étape ?",
            reponses: [
              "Formuler la décision la plus rapide possible",
              "Consulter le cadre réglementaire applicable",
              "Décrire précisément la situation en distinguant faits et interprétations",
              "Demander l'avis du supérieur hiérarchique"
            ],
            bonneReponse: 2,
            explication: "La première étape est toujours de décrire la situation avec précision en distinguant les faits des interprétations. C'est le préalable à toute analyse — sans cette clarification, les étapes suivantes risquent de reposer sur des représentations biaisées ou partielles."
          },
          {
            question: "Que signifie 'accepter l'imperfection éthique' après une délibération ?",
            reponses: [
              "Que la délibération était insuffisante et qu'il faut recommencer",
              "Que le professionnel a mal agi et doit s'en excuser",
              "Qu'un malaise peut persister après la décision — et que c'est normal",
              "Que l'éthique est inutile face à des situations vraiment complexes"
            ],
            bonneReponse: 2,
            explication: "L'éthique ne supprime pas la tragédie des choix. Il est tout à fait possible qu'un malaise persiste après une décision éthiquement fondée — c'est même souvent le signe que la situation était réellement un dilemme. L'éthique permet d'habiter cette tension avec plus de lucidité et de responsabilité."
          },
          {
            question: "Quel est le rôle des désaccords dans une délibération éthique collective ?",
            reponses: [
              "Ils doivent être éliminés pour aboutir à un consensus",
              "Ils enrichissent la réflexion en révélant des angles morts",
              "Ils indiquent que l'équipe n'est pas prête à délibérer",
              "Ils doivent être arbitrés par la hiérarchie"
            ],
            bonneReponse: 1,
            explication: "Le respect des désaccords est l'une des conditions de la délibération collective. La divergence enrichit la réflexion en révélant des angles morts et des valeurs que certains membres n'avaient pas perçus. La décision éthique n'est pas celle sur laquelle tout le monde est d'accord — c'est celle que tout le monde peut comprendre et respecter."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
