import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module6GestionProjetAvance({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={6}
        categorie="Gestion de projet — Niveau Avancé"
        titre="Évaluer, pérenniser,"
        titrePart2="et la posture éthique du pilote"
        sousTitre="Un changement réussi n'est pas un changement réalisé, mais un changement qui dure. Ce module rassemble ce qui ancre une transformation dans le temps et culmine sur la posture éthique du pilote, garante du sens d'un bout à l'autre."
        duree="≈ 25-30 minutes"
        niveau="Avancé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Section 1" titre="Évaluer une transformation : au-delà du « c'est fait »">
          <Texte>Le cycle de vie du projet, posé dès le niveau base, se terminait par l'évaluation — la phase la plus souvent négligée. À l'échelle d'une transformation institutionnelle, cette négligence est encore plus tentante et encore plus dommageable. Une fois le changement mis en place, l'attention se porte ailleurs, vers les urgences suivantes, et personne ne prend le temps de se demander : <strong>ce changement a-t-il réellement produit les effets que nous visions ?</strong></Texte>

          <Texte>Évaluer une transformation, ce n'est pas constater qu'elle a eu lieu. C'est interroger ses effets réels, et cette interrogation réinvestit directement le modèle d'impact du module 3. La question n'est pas « avons-nous fait ce que nous avions prévu ? » — c'est une question d'activité — mais « cela a-t-il changé quelque chose pour les personnes accompagnées et pour la qualité de l'accompagnement ? » — une question d'effet. Un changement peut être parfaitement réalisé sur le papier et n'avoir rien amélioré dans la réalité vécue ; seule l'évaluation des effets permet de le savoir.</Texte>

          <ConceptBox label="Concept clé" titre="Évaluer une transformation, c'est interroger ses effets réels sur les personnes, pas constater sa réalisation.">
            <p>Cela suppose de revenir aux effets visés lors du cadrage (le critère de réussite du niveau intermédiaire, le modèle d'impact du module 3), et de regarder honnêtement ce qui s'est réellement produit — en privilégiant les signes qualitatifs et la parole des personnes sur les seuls chiffres. Une évaluation honnête accepte de constater les demi-réussites et les échecs partiels : c'est à cette condition qu'elle fait apprendre.</p>
          </ConceptBox>

          <Texte>L'honnêteté de l'évaluation est ici décisive, et difficile. Il est tentant, après l'effort considérable d'une transformation, de ne voir que ses réussites et de minimiser ce qui n'a pas fonctionné. Cette complaisance prive l'institution de tout apprentissage. L'évaluation a de la valeur précisément quand elle ose nommer ce qui n'a pas marché, sans en faire un procès, mais pour en tirer les leçons. Le pilote mûr accueille les résultats décevants non comme une remise en cause personnelle, mais comme une information précieuse pour la suite.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Pérenniser : ancrer le changement dans les pratiques">
          <Texte>Voici l'enjeu spécifique de ce module, et l'un des plus sous-estimés de toute la conduite du changement : la <strong>pérennisation</strong>. Un changement peut être mis en place avec succès, puis se déliter lentement jusqu'à ce que les anciennes pratiques reviennent, comme l'eau reprend son lit. Réussir une transformation, ce n'est pas l'installer ; c'est faire qu'elle tienne quand l'attention du pilote se sera portée ailleurs.</Texte>

          <Texte>Pourquoi les changements se délitent-ils ? Parce qu'un changement récent est fragile : il repose encore sur l'effort conscient, sur l'impulsion du pilote, sur une vigilance qui ne peut pas durer éternellement. Tant que la nouvelle pratique demande un effort, elle reste vulnérable au retour des anciennes habitudes, plus faciles parce que mieux ancrées. <strong>Pérenniser, c'est faire passer le changement de l'effort conscient à l'évidence partagée</strong> — le moment où la nouvelle manière de faire n'est plus « le nouveau projet » mais simplement « notre manière de faire ».</Texte>

          <ConceptBox label="Concept clé" titre="Pérenniser, c'est ancrer le changement au point qu'il se maintienne sans effort conscient.">
            <p>Cela passe par plusieurs leviers : inscrire la nouvelle pratique dans les fonctionnements habituels (les manières de faire, les temps d'équipe, les repères communs), s'assurer qu'elle a du sens pour ceux qui la portent (un changement compris se maintient, un changement subi se délite), et accompagner le relais (transmettre aux nouveaux arrivants, ne pas faire reposer la pratique sur quelques personnes seulement). Un changement pérennisé est un changement devenu culture commune.</p>
          </ConceptBox>

          <Texte>On retrouve ici, à son point d'aboutissement, le fil rouge du parcours : la <strong>culture commune</strong>. Un changement n'est vraiment ancré que lorsqu'il est devenu une référence partagée, intégrée aux manières de faire de tous, transmise naturellement aux nouveaux. C'est l'aboutissement de toute la démarche : non pas qu'un projet ait été mené, mais qu'il ait modifié durablement la culture de l'institution, au bénéfice des personnes accompagnées.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à un changement qui, dans votre institution, a tenu dans la durée, et à un autre qui s'est délité après quelques mois. Qu'est-ce qui distinguait le premier ? Le plus souvent, le changement qui dure est celui qui a fait sens pour ceux qui le portaient et qui s'est intégré aux fonctionnements habituels, tandis que celui qui se délite était resté un effort conscient jamais devenu évidence partagée.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="La posture éthique du pilote : le sens jusqu'au bout">
          <Texte>Nous arrivons au point culminant de ce module et de tout le parcours. Tout ce que nous avons exploré — piloter, raisonner en impact, conduire le changement, gouverner, évaluer — n'a de valeur que porté par une certaine <strong>posture éthique</strong>. Sans elle, ces outils peuvent servir n'importe quoi, y compris ce qui dégrade l'accompagnement. Avec elle, ils servent ce qui fonde le travail social : le respect et le service des personnes. La posture éthique n'est pas un supplément au pilotage ; elle en est le fondement.</Texte>

          <ConceptBox label="Concept clé" titre="La posture éthique du pilote tient en trois exigences indissociables : le sens, la participation, le respect des personnes.">
            <p><strong>Le sens</strong> : ne jamais perdre de vue la finalité — le bien des personnes accompagnées — et y rapporter chaque décision. Un pilotage qui perd le sens, fût-il techniquement irréprochable, trahit sa raison d'être.</p>
            <p><strong>La participation</strong> : associer ceux que les changements concernent, des équipes aux personnes accompagnées. Le « faire avec » n'est pas qu'une méthode ; c'est une exigence éthique qui traverse tout le parcours.</p>
            <p><strong>Le respect des personnes</strong> : tenir, dans chaque transformation, que les personnes accompagnées sont des sujets et jamais des objets — ni de soins, ni de gestion, ni de performance.</p>
          </ConceptBox>

          <Texte>Cette posture se manifeste avec une acuité particulière dans les <strong>moments de tension</strong>, là où les exigences entrent en conflit. Quand la contrainte des moyens pousse à rogner sur la qualité ; quand la pression des indicateurs incite à privilégier ce qui se mesure ; quand la fatigue du changement tente de faire passer en force plutôt que d'accompagner — c'est dans ces moments que la posture éthique se révèle et se prouve. Elle ne consiste pas à tenir de beaux principes quand tout va bien, mais à les défendre quand ils coûtent.</Texte>

          <PullQuote>
            Piloter une transformation dans le social, ce n'est pas seulement la mener à bien : c'est veiller, à chaque étape, à ce qu'elle serve réellement les personnes. La compétence technique organise le changement ; la posture éthique lui donne sa valeur.
          </PullQuote>

          <HighlightBox label="Conclusion du parcours" couleur="bleu">
            <Texte>Vous voici au terme du parcours « Gestion de projet en contexte institutionnel ». Le <strong>niveau base</strong> vous a fait comprendre la démarche projet. Le <strong>niveau intermédiaire</strong> vous a fait passer au faire : cadrer, planifier, clarifier les responsabilités. Le <strong>niveau avancé</strong> vous a fait accéder au piloter : conduire des transformations, raisonner en impact, accompagner le changement, gouverner, pérenniser, et tenir le sens.</Texte>
            <Texte>Un fil unique a traversé ces trois niveaux : la conviction que la démarche projet, dans nos métiers, est au service des personnes et de la culture commune, jamais une fin technique en soi. C'est lui, plus que toute technique, qui fait la valeur de ce que vous entreprenez.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Évaluer une transformation, c'est interroger ses effets réels sur les personnes (réinvestissant le modèle d'impact), pas constater sa réalisation. L'honnêteté de l'évaluation — oser nommer ce qui n'a pas marché — est ce qui fait apprendre.",
              "Pérenniser est l'enjeu sous-estimé : un changement non ancré se délite et les anciennes pratiques reviennent. Pérenniser, c'est faire passer le changement de l'effort conscient à l'évidence partagée — le moment où il devient culture commune.",
              "La culture commune est l'aboutissement du parcours : un changement n'est vraiment ancré que devenu référence partagée, intégrée et transmise.",
              "La posture éthique du pilote tient en trois exigences : le sens (rapporter chaque décision au bien des personnes), la participation (le « faire avec »), le respect des personnes comme sujets. Elle se prouve dans les moments de tension, quand les principes coûtent.",
              "Le pilote n'est pas seulement un organisateur efficace : il est le gardien du sens de la transformation. C'est sa responsabilité la plus haute.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Qu'est-ce qu'évaluer une transformation, au sens de ce module ?",
              reponses: [
                "Constater qu'elle a bien été réalisée comme prévu",
                "Interroger honnêtement ses effets réels sur les personnes et la qualité de l'accompagnement, en osant nommer ce qui n'a pas marché",
                "Compter le nombre d'actions menées et les comparer au plan initial",
                "Éviter de regarder les résultats décevants pour maintenir le moral des équipes",
              ],
              bonneReponse: 1,
              explication: "Évaluer une transformation, c'est interroger ses effets réels sur les personnes — pas constater sa réalisation. Un changement peut être parfaitement réalisé sur le papier et n'avoir rien amélioré dans la réalité vécue. L'honnêteté de l'évaluation — oser nommer ce qui n'a pas marché — est ce qui fait apprendre.",
            },
            {
              question: "Que signifie « pérenniser » un changement ?",
              reponses: [
                "Le mettre en place une fois, puis passer à autre chose",
                "Le faire passer de l'effort conscient à l'évidence partagée, en l'ancrant dans les fonctionnements habituels jusqu'à ce qu'il devienne culture commune",
                "Le documenter dans un rapport de clôture exhaustif",
                "Le confier à une seule personne référente pour en assurer la continuité",
              ],
              bonneReponse: 1,
              explication: "Pérenniser, c'est faire passer le changement de l'effort conscient à l'évidence partagée — le moment où la nouvelle manière de faire n'est plus « le nouveau projet » mais simplement « notre manière de faire ». Cela passe par l'ancrage dans les fonctionnements habituels, le sens pour ceux qui le portent, et l'accompagnement du relais.",
            },
            {
              question: "En quoi consiste la posture éthique du pilote ?",
              reponses: [
                "En une compétence technique de gestion de projet avancée",
                "En trois exigences indissociables : le sens (rapporter chaque décision au bien des personnes), la participation (le « faire avec »), le respect des personnes comme sujets ; elle se prouve quand les principes coûtent",
                "En l'application de beaux principes uniquement quand tout va bien",
                "En la recherche de la performance mesurée pour satisfaire les financeurs",
              ],
              bonneReponse: 1,
              explication: "La posture éthique tient en trois exigences : le sens, la participation, le respect des personnes. Elle n'est pas un supplément au pilotage ; elle en est le fondement. Et elle se prouve dans les moments de tension, quand il faut défendre les principes alors qu'ils coûtent.",
            },
            {
              question: "Vrai ou faux : « Une transformation réussie est une transformation réalisée, peu importe qu'elle dure ou non. »",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Faux. Un changement réussi n'est pas un changement réalisé, mais un changement qui dure. Sans pérennisation, un changement se délite et les anciennes pratiques reviennent. La réussite se mesure à ce que le changement tienne quand l'attention du pilote se porte ailleurs — qu'il soit devenu culture commune.",
            },
            {
              question: "Vrai ou faux : « La posture éthique est un supplément agréable mais accessoire au pilotage technique. »",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Faux. La posture éthique n'est pas un supplément : elle est le fondement. Sans elle, les outils du pilotage peuvent servir ce qui dégrade l'accompagnement. Le pilote est le gardien du sens de la transformation — c'est sa responsabilité la plus haute, ce qui distingue un pilotage de transformation sociale d'une simple gestion.",
            },
          ]}
        />

      </div>
    </div>
  )
}
