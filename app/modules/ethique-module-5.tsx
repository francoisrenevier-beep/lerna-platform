import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module5Ethique({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Éthique professionnelle"
        titre="Éthique et justice sociale"
        sousTitre="Agir professionnellement dans des institutions imparfaites"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="L'éthique au-delà de la relation">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre ce que recouvre la notion de justice sociale dans le travail social",
              "Identifier les tensions entre mission éthique et logiques institutionnelles",
              "Analyser le rôle des inégalités structurelles dans les situations rencontrées",
              "Développer une posture professionnelle responsable dans des institutions imparfaites",
              "Articuler justice sociale, dignité et décision éthique dans la pratique"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Justice sociale : de quoi parle-t-on ?">
          <Texte>La justice sociale renvoie à la manière dont une société organise la répartition des ressources, des droits, des opportunités et des protections. Dans le travail social, elle se manifeste concrètement à travers :</Texte>
          <Liste items={[
            "Des inégalités d'accès aux prestations et aux services",
            "Des différences de traitement selon les statuts administratifs",
            "Des parcours marqués par la précarité, la stigmatisation ou l'exclusion",
            "Des dispositifs qui protègent certains publics tout en en laissant d'autres en marge"
          ]} />
          <Texte>Les professionnels sont quotidiennement confrontés à ces réalités — ils en sont souvent les témoins privilégiés, parfois les médiateurs, et parfois aussi les exécutants involontaires de décisions produisant de l'injustice.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le travail social entre mission éthique et cadre institutionnel">
          <Texte>Le travail social porte historiquement une ambition forte de justice sociale : lutter contre les inégalités, soutenir les personnes vulnérables, promouvoir la dignité et l'inclusion. Cependant, cette mission se déploie dans des institutions qui fonctionnent avec leurs propres logiques : contraintes budgétaires, critères d'éligibilité, priorités politiques, objectifs de performance.</Texte>
          <Texte>Ces logiques peuvent entrer en tension avec les valeurs professionnelles. Les dilemmes éthiques ne sont plus seulement le produit de relations interpersonnelles complexes, mais le résultat de choix collectifs et structurels.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'éthique face aux inégalités structurelles">
          <Texte>Une approche éthique centrée uniquement sur la relation risque de passer à côté des causes structurelles des difficultés. Beaucoup de situations qualifiées de problématiques ne relèvent pas d'un déficit individuel, mais de conditions sociales injustes.</Texte>
          <Texte>La justice sociale invite à déplacer le regard :</Texte>
          <Liste items={[
            "De la responsabilité individuelle vers les conditions collectives",
            "De l'adaptation des personnes vers la transformation des cadres",
            "De la gestion des situations vers la compréhension des mécanismes d'exclusion"
          ]} />
          <Texte>Cela implique une posture délicate : ne pas naturaliser les inégalités, ne pas les considérer comme allant de soi ou relevant uniquement de la responsabilité des personnes accompagnées.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Les tensions éthiques liées à la justice sociale dans la pratique">
          <Texte>Dans la pratique quotidienne, les tensions liées à la justice sociale apparaissent lorsque les professionnels doivent appliquer des règles jugées injustes, constatent que certains publics sont systématiquement désavantagés, ou doivent trier, prioriser, exclure.</Texte>
          <Texte>Deux risques symétriques existent face à ces tensions : l'épuisement ou le désengagement d'un côté, la transgression isolée de l'autre — contourner des règles sans réflexion collective au nom d'une justice perçue comme plus immédiate.</Texte>
          <Texte>L'éthique professionnelle consiste à trouver une voie étroite entre la soumission passive et la désobéissance solitaire. Cette voie passe par la mise en discussion des cadres, la reconnaissance des tensions et la recherche de marges de manœuvre collectives.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="La responsabilité professionnelle face aux institutions imparfaites">
          <Texte>Agir éthiquement dans des institutions imparfaites signifie reconnaître les limites du cadre tout en refusant de s'y réduire. La responsabilité professionnelle consiste à :</Texte>
          <Liste items={[
            "Rendre visibles les effets des décisions institutionnelles sur les personnes",
            "Documenter les situations d'injustice répétées",
            "Porter une parole professionnelle argumentée",
            "Participer, lorsque c'est possible, à l'évolution des pratiques et des dispositifs"
          ]} />
          <Texte>Cette responsabilité s'inscrit dans une dynamique collective — elle ne repose pas sur des actes héroïques, mais sur un travail patient de mise en sens et de mise en débat.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 6" titre="Articuler justice sociale, dignité et décision éthique">
          <Texte>L'éthique professionnelle se situe à l'articulation de plusieurs niveaux :</Texte>
          <Liste items={[
            "Le niveau de la relation et de la dignité — chaque interaction compte",
            "Le niveau de la décision et de la responsabilité — chaque choix engage",
            "Le niveau institutionnel et politique de la justice sociale — chaque cadre conditionne"
          ]} />
          <Texte>Tenir ensemble ces niveaux permet d'éviter deux écueils : une éthique réduite à la bonne intention individuelle, ou une critique des institutions qui ne débouche sur aucune action concrète.</Texte>
          <PullQuote>
            L'éthique n'est pas une destination. C'est une manière de voyager.
          </PullQuote>
          <HighlightBox label="Ce que vous pouvez faire dès aujourd'hui" couleur="vert">
            <Liste items={[
              "Utiliser la grille d'analyse éthique face à une situation complexe",
              "Proposer un espace de délibération éthique dans votre équipe",
              "Nommer une valeur mise en tension dans votre prochain colloque",
              "Relire une décision passée à la lumière des théories éthiques étudiées",
              "Rendre visibles les effets d'une décision institutionnelle sur les personnes accompagnées"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Dans le travail social, la justice sociale se manifeste concrètement à travers :",
            reponses: [
              "Uniquement les grandes réformes politiques et législatives",
              "Des inégalités d'accès aux prestations, des différences de traitement selon les statuts et des parcours marqués par l'exclusion",
              "Les relations interpersonnelles entre professionnels et personnes accompagnées",
              "Les choix budgétaires des directions d'établissement"
            ],
            bonneReponse: 1,
            explication: "La justice sociale se manifeste au quotidien dans le travail social : inégalités d'accès aux services, différences de traitement selon les statuts administratifs, dispositifs qui laissent certains publics en marge. Les professionnels en sont souvent les témoins directs, parfois les médiateurs, parfois les exécutants involontaires."
          },
          {
            question: "Face aux inégalités structurelles, une approche éthique centrée uniquement sur la relation risque de :",
            reponses: [
              "Trop impliquer émotionnellement le professionnel",
              "Passer à côté des causes structurelles et de naturaliser les inégalités",
              "Fragiliser le lien de confiance avec la personne accompagnée",
              "Remettre en question les règles institutionnelles de manière inappropriée"
            ],
            bonneReponse: 1,
            explication: "Beaucoup de situations dites 'problématiques' ne relèvent pas d'un déficit individuel, mais de conditions sociales injustes. Une éthique purement relationnelle peut conduire à imputer aux personnes accompagnées des difficultés qui sont en réalité produites par des mécanismes structurels."
          },
          {
            question: "L'éthique professionnelle face à des institutions imparfaites consiste à :",
            reponses: [
              "Appliquer toutes les règles sans les questionner pour maintenir la cohérence institutionnelle",
              "Dénoncer publiquement les injustices sur les réseaux sociaux",
              "Reconnaître les limites du cadre tout en refusant de s'y réduire, et agir collectivement",
              "Contourner les règles injustes au nom de la bonne intention"
            ],
            bonneReponse: 2,
            explication: "L'éthique professionnelle consiste à trouver une voie entre la soumission passive et la désobéissance solitaire. Elle implique de rendre visibles les effets des décisions institutionnelles, de documenter les injustices répétées et de porter une parole professionnelle argumentée dans un cadre collectif."
          },
          {
            question: "La 'transgression isolée' est présentée dans ce module comme :",
            reponses: [
              "Un acte de courage éthique à encourager",
              "Un risque symétrique à l'épuisement — contourner des règles sans réflexion collective",
              "La réponse adaptée aux situations d'urgence éthique",
              "Une forme légitime de désobéissance civile professionnelle"
            ],
            bonneReponse: 1,
            explication: "La transgression isolée — contourner des règles au nom d'une justice perçue comme plus immédiate — est un risque réel, symétrique à l'épuisement ou au désengagement. Sans réflexion collective, elle peut fragiliser le professionnel et ne pas produire les effets escomptés sur les structures."
          },
          {
            question: "Tenir ensemble les trois niveaux (relation, décision, justice sociale) permet d'éviter :",
            reponses: [
              "Les désaccords au sein des équipes professionnelles",
              "Une éthique réduite à la bonne intention individuelle ou une critique sans action concrète",
              "Les conflits entre professionnels et institutions",
              "La nécessité de délibérer en équipe sur les situations complexes"
            ],
            bonneReponse: 1,
            explication: "Articuler le niveau relationnel (dignité), décisionnel (responsabilité) et structurel (justice sociale) permet d'éviter deux écueils symétriques : une éthique de la bonne intention qui ignore les structures, et une critique des institutions qui ne débouche sur aucune action concrète auprès des personnes."
          },
          {
            question: "L'affirmation 'L'éthique n'est pas une destination, c'est une manière de voyager' signifie :",
            reponses: [
              "Qu'on ne peut jamais atteindre un niveau satisfaisant d'éthique professionnelle",
              "Que l'éthique est une posture continue qui s'exerce dans chaque situation, pas un état à atteindre",
              "Que la formation éthique est sans fin et ne produit pas de résultats concrets",
              "Que l'éthique dépend uniquement du contexte et n'a pas de principes stables"
            ],
            bonneReponse: 1,
            explication: "Cette formule synthétise l'ensemble de la formation : l'éthique n'est pas un état définitif que l'on atteint après formation. C'est une posture permanente, une manière d'exercer sa responsabilité au quotidien — dans chaque relation, chaque décision, chaque situation complexe rencontrée dans la pratique."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
