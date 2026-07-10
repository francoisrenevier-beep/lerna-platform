import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3GestionProjetIntermediaire({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Gestion de projet — Niveau Intermédiaire"
        titre="Définir objectifs"
        titrePart2="et sous-objectifs"
        sousTitre="Transformer une intention en buts concrets et atteignables. Entre le souhait et l'action, il manque un maillon : l'objectif."
        duree="≈ 20-25 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Du flou de l'intention à la précision de l'objectif">
          <Texte>Le premier module a clarifié le besoin ; ce module-ci s'attaque à la suite logique : transformer ce besoin en <strong>objectifs</strong>. C'est une étape qu'on croit souvent évidente, et qui ne l'est pas. Beaucoup de projets restent bloqués au stade de l'intention généreuse mais vague — « améliorer la vie des résidents », « renforcer la cohésion d'équipe » — sans jamais la traduire en buts précis. Or une intention qu'on ne précise pas reste un vœu : on ne sait ni par où commencer, ni quand on l'a atteinte.</Texte>

          <ConceptBox label="Concept clé" titre="L'intention indique une direction générale ; l'objectif la traduit en un but précis qu'on peut viser et reconnaître.">
            <p>« Que les résidents s'ennuient moins l'après-midi » est une intention. « Mettre en place, d'ici trois mois, deux temps d'activité hebdomadaires adaptés aux envies des résidents » est un objectif. Le second n'est pas plus ambitieux que le premier — il est plus précis, donc actionnable et vérifiable.</p>
          </ConceptBox>

          <Texte>Pourquoi cette précision change tout ? Parce qu'un objectif précis rend trois choses possibles que l'intention vague interdit. Il rend l'<strong>action</strong> possible : on sait quoi faire concrètement. Il rend le <strong>suivi</strong> possible : on peut mesurer où on en est par rapport au but. Et il rend l'<strong>évaluation</strong> possible : on saura, à la fin, si on a réussi. Tant qu'on en reste à l'intention, ces trois choses restent hors de portée.</Texte>
          <Texte>Préciser l'objectif n'est pas trahir l'intention ni la rapetisser. C'est lui donner un corps. L'intention reste le sens, le pourquoi profond ; l'objectif est sa traduction opérationnelle, le quoi concret. Les deux sont nécessaires : une intention sans objectif reste un rêve, un objectif sans intention devient une tâche vide de sens.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Les qualités d'un bon objectif">
          <Texte>Comment reconnaître un objectif bien formulé ? Il existe un repère classique, résumé par le mot <strong>SMART</strong>, qui liste les qualités d'un objectif solide. Présentons-le pour ce qu'il est : une grille utile, à manier avec discernement, pas une formule rigide à appliquer mécaniquement.</Texte>

          <ConceptBox label="Concept clé" titre="Un bon objectif est généralement SMART :">
            <p><strong>Spécifique</strong> — précis, clair, sans ambiguïté sur ce qu'on vise.</p>
            <p><strong>Mesurable</strong> — on peut constater s'il est atteint, par un repère observable.</p>
            <p><strong>Atteignable</strong> — réaliste au regard des moyens et du contexte.</p>
            <p><strong>Réaliste / pertinent</strong> — utile, en lien réel avec le besoin de départ.</p>
            <p><strong>Temporellement défini</strong> — assorti d'un horizon de temps, d'une échéance.</p>
          </ConceptBox>

          <Texte>Ces cinq qualités méritent qu'on s'y arrête, parce que chacune corrige un défaut courant. <strong>Spécifique</strong> corrige le flou : « améliorer l'ambiance » ne dit rien d'actionnable, « instaurer un temps d'accueil convivial le matin » oui. <strong>Mesurable</strong> corrige l'impossibilité d'évaluer : si rien d'observable ne permet de dire si l'objectif est atteint, on ne saura jamais si le projet a réussi. <strong>Atteignable</strong> corrige l'irréalisme qui démoralise : un objectif hors de portée décourage l'équipe avant même de commencer. <strong>Pertinent</strong> corrige le hors-sujet : un objectif peut être parfaitement formulé et ne pas répondre au vrai besoin. <strong>Temporellement défini</strong> corrige l'étirement sans fin : sans échéance, un projet se dilue.</Texte>

          <HighlightBox label="SMART est un garde-fou, pas un carcan" couleur="bleu">
            <Texte>La grille SMART rend service en signalant ce qui manque à un objectif mal posé. Mais l'appliquer mécaniquement peut conduire à des dérives : à force de vouloir tout rendre « mesurable », on risque de ne retenir que ce qui se compte facilement, et de passer à côté de l'essentiel — qui, dans nos métiers, est souvent qualitatif. Le mieux-être d'une personne, la qualité d'une relation, le sens retrouvé d'une activité ne se réduisent pas à des chiffres. Utilisez SMART pour vérifier qu'un objectif est clair et réaliste, jamais pour évacuer ce qui compte vraiment sous prétexte qu'il est difficile à mesurer.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Décomposer en sous-objectifs : rendre le chemin praticable">
          <Texte>Un objectif d'une certaine ampleur peut intimider : il désigne un but qui paraît lointain, et on ne sait pas par où le prendre. C'est là qu'intervient la <strong>décomposition en sous-objectifs</strong> : découper le grand objectif en buts intermédiaires, plus petits et plus proches, qui jalonnent le chemin.</Texte>

          <ConceptBox label="Concept clé" titre="Un sous-objectif est une étape-but : un résultat intermédiaire qui contribue à l'objectif général.">
            <p>Si l'objectif est « mettre en place deux temps d'activité hebdomadaires d'ici trois mois », les sous-objectifs pourraient être : recueillir les envies des résidents, identifier les ressources et les animateurs possibles, tester un premier temps d'activité, l'ajuster, puis l'inscrire dans le planning. Chacun est un but en soi, atteignable, et tous ensemble mènent à l'objectif.</p>
          </ConceptBox>

          <Texte>Cette décomposition rend trois services. D'abord, elle <strong>rend le projet praticable</strong> : au lieu d'un grand but intimidant, on a une suite de pas réalisables, dont chacun semble à portée. Ensuite, elle <strong>permet de suivre l'avancement</strong> : chaque sous-objectif atteint est un progrès visible. Enfin, elle <strong>révèle l'ordre logique</strong> des choses : en décomposant, on s'aperçoit que certains sous-objectifs doivent précéder les autres.</Texte>

          <SchemaEtapes
            titre="De l'intention à l'action, en cascade"
            etapes={[
              {
                niveau: "INTENTION",
                nom: "La direction générale",
                definition: "« Que les résidents s'ennuient moins » — le sens, le pourquoi profond",
              },
              {
                niveau: "OBJECTIF",
                nom: "Le but précis et daté",
                definition: "« Deux temps d'activité hebdo d'ici trois mois » — actionnable et vérifiable",
              },
              {
                niveau: "SOUS-OBJECTIFS",
                nom: "Les buts intermédiaires",
                definition: "Recueillir les envies, tester, ajuster, inscrire dans le planning",
              },
              {
                niveau: "ACTIONS",
                nom: "Les tâches concrètes",
                definition: "Ce qu'on fait chaque jour pour réaliser chaque sous-objectif",
              },
            ]}
          />

          <Texte>Attention toutefois à ne pas sur-découper. Décomposer un objectif modeste en une multitude de micro-sous-objectifs crée une usine à gaz qui décourage plus qu'elle n'aide. Le bon niveau de découpage est celui qui rend le chemin clair sans l'alourdir : quelques sous-objectifs significatifs valent mieux qu'une longue liste qui se perd dans le détail.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Prenez une intention que vous aimeriez concrétiser dans votre travail. Essayez de la traduire en un objectif précis (que viser, pour quand ?), puis de décomposer cet objectif en trois ou quatre sous-objectifs. Où cela coince-t-il ? Souvent, c'est en faisant cet exercice qu'on découvre ce qui était encore flou dans notre intention de départ.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "L'intention indique une direction ; l'objectif la traduit en un but précis qu'on peut viser, suivre et reconnaître. Une intention non précisée reste un vœu.",
              "Préciser n'est pas rapetisser : l'objectif donne un corps à l'intention. Les deux sont nécessaires — une intention sans objectif reste un rêve, un objectif sans intention devient une tâche vide de sens.",
              "La grille SMART (spécifique, mesurable, atteignable, pertinent, temporellement défini) aide à vérifier qu'un objectif est solide ; mais c'est un garde-fou, pas un carcan.",
              "Attention à la dérive de la mesure : dans nos métiers, l'essentiel est souvent qualitatif. Un bon objectif reste relié au sens et ne réduit pas l'accompagnement à ce qui se compte.",
              "Décomposer en sous-objectifs rend le projet praticable, permet de suivre l'avancement et révèle l'ordre logique des étapes — sans sur-découper.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Quelle est la différence entre une intention et un objectif ?",
              reponses: [
                "Aucune, ce sont des synonymes",
                "L'intention indique une direction générale et le sens ; l'objectif la traduit en un but précis, daté et vérifiable",
                "L'objectif est toujours moins ambitieux que l'intention",
                "L'intention se définit à la fin du projet",
              ],
              bonneReponse: 1,
              explication: "L'intention (« que les résidents s'ennuient moins ») donne le sens et la direction. L'objectif (« deux temps d'activité hebdo d'ici trois mois ») la traduit en un but actionnable et vérifiable. Le second n'est pas moins ambitieux — il est plus précis.",
            },
            {
              question: "Comment faut-il utiliser la grille SMART dans le secteur social et médico-social ?",
              reponses: [
                "L'appliquer mécaniquement et ne retenir que des objectifs chiffrés",
                "Comme un garde-fou pour vérifier qu'un objectif est clair et réaliste, sans réduire l'accompagnement à ce qui se mesure",
                "L'ignorer totalement",
                "L'utiliser uniquement pour les objectifs financiers",
              ],
              bonneReponse: 1,
              explication: "SMART est utile pour repérer ce qui manque à un objectif mal posé. Mais vouloir tout rendre mesurable risque de passer à côté de l'essentiel qualitatif — mieux-être, qualité de la relation, sens retrouvé — qui ne se réduit pas à des chiffres.",
            },
            {
              question: "À quoi sert de décomposer un objectif en sous-objectifs ?",
              reponses: [
                "À allonger artificiellement le projet",
                "À rendre le projet praticable, à suivre l'avancement et à révéler l'ordre logique des étapes",
                "À éviter de définir une échéance",
                "À se passer d'objectif général",
              ],
              bonneReponse: 1,
              explication: "La décomposition rend le chemin praticable (chaque sous-objectif est à portée), permet de suivre l'avancement (chaque étape atteinte est un progrès visible), et révèle l'ordre logique (certains sous-objectifs doivent précéder les autres). Attention toutefois à ne pas sur-découper.",
            },
            {
              question: "Un objectif mesurable est toujours préférable, même si cela conduit à ne retenir que ce qui se compte facilement. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Dans nos métiers, l'essentiel est souvent qualitatif (mieux-être, qualité de la relation, sens). Vouloir tout mesurer risque de passer à côté de ce qui compte vraiment. La mesurabilité est utile, mais ne doit jamais évacuer l'essentiel sous prétexte qu'il est difficile à quantifier.",
            },
          ]}
        />

      </div>
    </div>
  )
}
