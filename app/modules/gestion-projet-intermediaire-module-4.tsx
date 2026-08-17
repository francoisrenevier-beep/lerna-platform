import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4GestionProjetIntermediaire({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Gestion de projet : Niveau Intermédiaire"
        titre="Planifier : étapes,"
        titrePart2="jalons, séquençage"
        sousTitre="Organiser le projet dans le temps, sans usine à gaz. Planifier, c'est se donner une carte du chemin pour avancer sereinement."
        duree="≈ 20-25 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi planifier, même modestement">
          <Texte>Vous avez un besoin clair, des parties prenantes identifiées, des objectifs décomposés en sous-objectifs. Il reste à organiser tout cela dans le temps : c'est la <strong>planification</strong>. Elle répond à des questions simples : dans quel ordre fait-on les choses ? Quand ? Combien de temps cela prendra-t-il ? À quels moments fait-on le point ?</Texte>
          <Texte>Il faut lever d'emblée une appréhension fréquente : planifier n'est pas synonyme de tableaux compliqués, de logiciels intimidants, de plannings rigides qu'on subit. Pour la plupart des projets d'équipe du secteur, <strong>une planification simple suffit largement</strong>, et vaut mieux qu'un dispositif lourd que personne ne tient à jour. L'enjeu n'est pas la sophistication de l'outil, mais la clarté qu'il apporte sur le déroulé.</Texte>
          <Texte>Pourquoi planifier, alors ? Pour trois raisons concrètes. Pour <strong>anticiper</strong> : en se projetant dans le déroulé, on repère à l'avance les moments de tension, les dépendances, les périodes chargées. Pour <strong>coordonner</strong> : quand plusieurs personnes contribuent, un déroulé partagé permet à chacun de savoir quand intervient sa part. Et pour <strong>se rassurer collectivement</strong> : un projet qui n'a pas de déroulé visible inquiète ; un déroulé clair, même simple, donne à l'équipe le sentiment de maîtrise qui soutient l'engagement.</Texte>
        </SectionModule>

        <PullQuote>
          Planifier, ce n'est pas se mettre une pression inutile. C'est se donner une carte du chemin : on sait par où on passe, on voit les obstacles venir, et on avance plus sereinement.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Étapes et jalons : structurer le déroulé">
          <Texte>Pour organiser un projet dans le temps, deux notions vues au niveau base reprennent ici toute leur utilité concrète : les <strong>étapes</strong> et les <strong>jalons</strong>. Elles sont les briques de base de toute planification.</Texte>

          <ConceptBox label="Concept clé" titre="Étapes et jalons : deux notions complémentaires">
            <p><strong>Une étape</strong> est une grande phase du projet, un segment du chemin entre le départ et le but. Les étapes découlent souvent des sous-objectifs : chaque sous-objectif à atteindre correspond à une étape du déroulé.</p>
            <p><strong>Un jalon</strong> est un point de repère précis dans le temps : un moment clé où l'on vérifie que tout avance comme prévu, où une décision se prend, ou qu'une échéance importante marque. Là où l'étape est une durée, le jalon est un instant : un rendez-vous.</p>
          </ConceptBox>

          <Texte>La distinction est utile en pratique. Les étapes décrivent <strong>ce qu'on fait</strong> et combien de temps cela dure ; les jalons marquent <strong>les moments où l'on fait le point</strong>. Un projet bien planifié alterne les deux : des étapes de travail, ponctuées de jalons qui permettent de vérifier le cap avant de poursuivre.</Texte>
          <Texte>Les jalons sont particulièrement précieux parce qu'ils créent des <strong>moments de décision conscients</strong> : plutôt que de laisser le projet filer, on s'arrête à intervalles définis pour constater où l'on en est et décider de continuer, d'ajuster, ou parfois d'arrêter. Placer quelques jalons bien choisis évite l'effet « tunnel », où un projet avance sans qu'on sache jamais s'il va dans le bon sens jusqu'à ce qu'il soit trop tard.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Repensez à un projet récent. Aviez-vous défini des jalons, des moments prévus à l'avance pour faire le point ? Ou le projet a-t-il avancé dans un « tunnel » sans point de vérification défini ? Ce dernier scénario explique souvent pourquoi les ajustements arrivent trop tard, quand corriger coûte cher.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le Gantt simplifié : visualiser sans se compliquer">
          <Texte>Pour représenter un déroulé, il existe un outil très répandu : le <strong>diagramme de Gantt</strong>. Présentons-le simplement, dans sa logique, sans entrer dans une technique qui n'a pas sa place ici.</Texte>

          <ConceptBox label="Concept clé" titre="Un diagramme de Gantt est une représentation visuelle du projet dans le temps.">
            <p>Les étapes sont figurées par des barres horizontales, dont la longueur indique la durée, placées sur une ligne de temps. D'un coup d'œil, on voit quelles étapes se succèdent, lesquelles se chevauchent, et où se situent les jalons. C'est, au fond, une frise du projet.</p>
          </ConceptBox>

          <Texte>L'intérêt du Gantt n'est pas l'outil en lui-même, mais <strong>ce qu'il rend visible</strong>. En posant les étapes sur une ligne de temps, on voit immédiatement deux choses cruciales. On voit les <strong>dépendances</strong> : telle étape ne peut commencer qu'une fois telle autre terminée (on ne teste pas l'activité avant d'avoir recueilli les envies). Et on voit les <strong>chevauchements et les périodes de charge</strong> : les moments où plusieurs étapes se mènent en parallèle, qui demanderont plus de monde et plus d'attention.</Texte>

          <HighlightBox label="L'outil au service de la clarté, jamais l'inverse" couleur="bleu">
            <Texte>Pour un projet d'équipe modeste, un Gantt peut tenir sur une feuille ou un simple tableau : quelques lignes pour les étapes, une échelle de temps en haut, des barres, des jalons marqués d'un repère. Inutile de viser la sophistication : un schéma clair que toute l'équipe comprend et consulte vaut infiniment mieux qu'un logiciel complexe que personne n'ouvre. Si la planification devient plus lourde à tenir que le projet à mener, c'est qu'on s'est trompé d'échelle.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Estimer le temps avec réalisme, et tenir compte du terrain">
          <Texte>La partie la plus délicate de la planification n'est pas de dessiner le déroulé, mais d'<strong>estimer les durées</strong> avec justesse. Et c'est ici que l'expérience du terrain compte plus que n'importe quel outil.</Texte>
          <Texte>L'erreur la plus commune est l'<strong>excès d'optimisme</strong> : on estime les durées comme si tout allait se dérouler parfaitement, sans imprévu, sans absence, sans urgence venant bousculer le planning. Or les projets se déroulent dans la vraie vie, où les imprévus sont la règle. Une estimation réaliste intègre une marge pour l'inattendu : il vaut mieux prévoir un peu large et tenir ses délais que prévoir au plus juste et accumuler les retards qui démoralisent.</Texte>
          <Texte>Mais il y a, dans le secteur, une contrainte spécifique qu'aucune planification ne peut ignorer : <strong>la continuité de l'accompagnement passe toujours avant le projet.</strong> Les professionnels qui contribuent à un projet ont d'abord une mission première, accompagner les personnes, qui ne s'interrompt pas et qui, légitimement, prime. Un projet qui planifierait le temps des équipes comme si elles étaient disponibles à plein pour lui se heurterait à la réalité dès la première semaine.</Texte>

          <ConceptBox label="Concept clé" titre="Une bonne estimation, dans le secteur, est une estimation humble.">
            <p>Elle part du temps réellement disponible une fois la mission d'accompagnement assurée, intègre une marge pour les imprévus, et préfère un rythme lent mais soutenable à un calendrier ambitieux mais irréaliste. Un projet qui avance doucement mais sûrement aboutit ; un projet au calendrier intenable décourage et s'enlise.</p>
          </ConceptBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Planifier, c'est organiser le projet dans le temps : ordre, durées, moments de point. Une planification simple suffit pour la plupart des projets d'équipe, mieux vaut simple et tenu que sophistiqué et abandonné.",
              "On planifie pour anticiper (repérer les tensions à l'avance), coordonner (chacun sait quand intervient sa part) et se rassurer collectivement (un déroulé visible soutient l'engagement).",
              "Les étapes décrivent ce qu'on fait et sa durée ; les jalons marquent les moments de point et de décision. Quelques jalons bien placés évitent l'effet « tunnel ».",
              "Le diagramme de Gantt est une frise du projet qui rend visibles les dépendances et les périodes de charge. Sa valeur est la clarté qu'il apporte, pas sa sophistication.",
              "L'estimation des durées doit être réaliste et humble : partir du temps réellement disponible une fois l'accompagnement assuré, intégrer une marge, et préférer un rythme soutenable à un calendrier intenable.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Pour la plupart des projets d'équipe du secteur, quel type de planification est recommandé ?",
              reponses: [
                "Un logiciel sophistiqué et détaillé, le plus complet possible",
                "Une planification simple, claire et tenue à jour, plutôt qu'un dispositif lourd que personne ne maintient",
                "Aucune planification, pour rester souple",
                "Une planification figée qu'on ne modifie jamais",
              ],
              bonneReponse: 1,
              explication: "Un schéma clair que toute l'équipe comprend et consulte vaut infiniment mieux qu'un logiciel complexe que personne n'ouvre. Si la planification devient plus lourde à tenir que le projet à mener, c'est qu'on s'est trompé d'échelle.",
            },
            {
              question: "Quelle est la différence entre une étape et un jalon ?",
              reponses: [
                "Aucune, ce sont deux mots pour la même chose",
                "L'étape est une phase qui dure (ce qu'on fait) ; le jalon est un point précis dans le temps (un moment de point ou de décision)",
                "L'étape concerne les cadres, le jalon les équipes",
                "Le jalon dure plus longtemps que l'étape",
              ],
              bonneReponse: 1,
              explication: "Les étapes décrivent ce qu'on fait et combien de temps cela dure. Les jalons sont des points de repère précis, des rendez-vous, qui permettent de vérifier le cap avant de poursuivre. Quelques jalons bien placés évitent l'effet « tunnel ».",
            },
            {
              question: "Quelle contrainte spécifique au secteur doit guider l'estimation des durées ?",
              reponses: [
                "Le projet prime toujours sur l'accompagnement",
                "La continuité de l'accompagnement passe avant le projet ; on planifie à partir du temps réellement disponible, avec humilité",
                "Les équipes sont disponibles à plein temps pour le projet",
                "Il faut viser le calendrier le plus ambitieux possible",
              ],
              bonneReponse: 1,
              explication: "Les professionnels qui contribuent à un projet ont d'abord une mission première, accompagner les personnes, qui ne s'interrompt pas. Planifier en ignorant cette réalité conduit à des retards dès la première semaine.",
            },
            {
              question: "Une bonne estimation de durée prévoit au plus juste, sans marge, pour ne pas perdre de temps. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "L'erreur la plus commune est l'excès d'optimisme. Une bonne estimation intègre une marge pour les imprévus, qui sont la règle, et préfère un rythme soutenable. Mieux vaut prévoir un peu large et tenir ses délais que prévoir au plus juste et accumuler des retards démoralisants.",
            },
          ]}
        />

      </div>
    </div>
  )
}
