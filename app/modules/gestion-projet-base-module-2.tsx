import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module2GestionProjetBase({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Gestion de projet : Niveau Base"
        titre="Le cycle de vie"
        titrePart2="d'un projet"
        sousTitre="Quatre phases pour ne pas avancer à l'aveugle. Chaque phase évite une catégorie d'erreurs."
        duree="≈ 20-25 minutes"
        niveau="Base"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Un projet se déroule dans le temps">
          <Texte>Le premier module a posé ce qu'est un projet. Ce module-ci pose comment il <em>vit</em> : car un projet n'est pas un bloc qu'on réaliserait d'un seul geste, c'est un parcours qui se déploie dans le temps.</Texte>
          <Texte>On parle de <strong>cycle de vie</strong> pour souligner cette dimension. Un projet « naît » d'un besoin ou d'une idée, il « se développe » au fil de sa préparation et de sa réalisation, puis il « s'achève » par une forme de bilan. Cette image du vivant n'est pas qu'une métaphore commode : elle dit quelque chose de juste sur la manière dont un projet réclame, à chaque moment, une attention différente. On ne fait pas la même chose au début et à la fin, et confondre les moments est l'une des premières sources d'échec.</Texte>
          <Texte>L'intérêt de connaître ces phases est éminemment pratique : <strong>elles permettent de se situer.</strong> Savoir à quelle phase on se trouve, c'est savoir ce qu'on doit faire maintenant, ce qui peut attendre, et ce qui aurait dû être fait avant. Sans ce repère, on avance à l'aveugle : on agit sans savoir si le moment est venu d'agir, on saute des étapes sans s'en rendre compte, on s'étonne ensuite que le projet patine.</Texte>
          <Texte>C'est un point que l'expérience confirme constamment : la grande majorité des projets qui s'enlisent ne le font pas par manque de moyens ou de bonne volonté, mais parce qu'<strong>une phase a été escamotée</strong>. On s'est lancé dans l'action sans avoir pris le temps de préparer ; ou bien on a « terminé » sans jamais évaluer, si bien que le changement n'a pas tenu. Connaître le cycle de vie, c'est se donner les moyens de ne sauter aucune phase sciemment.</Texte>
        </SectionModule>

        <PullQuote source="">
          Savoir où l'on en est dans un projet, c'est comme savoir où l'on en est sur une route : sans ce repère, on ne sait jamais s'il faut accélérer, ralentir, ou s'arrêter pour vérifier la direction.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Les quatre phases du cycle de vie">
          <Texte>Nous retiendrons une formulation simple en quatre temps (<strong>imaginer, préparer, réaliser, évaluer</strong>) valable pour tout projet quelle que soit son ampleur. L'important n'est pas le nom des phases, mais de comprendre ce qui se joue dans chacune, et pourquoi aucune n'est facultative.</Texte>

          <SchemaEtapes
            titre="Le cycle de vie d'un projet en 4 phases"
            etapes={[
              {
                niveau: "PHASE 1",
                nom: "Imaginer",
                definition: "D'où vient le besoin ? Que veut-on vraiment changer ? Est-ce réaliste ?",
              },
              {
                niveau: "PHASE 2",
                nom: "Préparer",
                definition: "Quels objectifs, quelles étapes, qui fait quoi, dans quel délai ?",
              },
              {
                niveau: "PHASE 3",
                nom: "Réaliser",
                definition: "On agit, on suit l'avancement, on ajuste en cours de route.",
              },
              {
                niveau: "PHASE 4",
                nom: "Évaluer",
                definition: "Qu'est-ce que ça a changé ? Qu'a-t-on appris ? Que garde-t-on ?",
              },
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Imaginer : comprendre avant de vouloir résoudre">
          <Texte>C'est le point de départ, et c'est une phase de retenue plus que d'action. Un besoin émerge, une difficulté se fait sentir, une envie d'améliorer apparaît. La tentation naturelle est de sauter immédiatement à la solution. Or la première phase demande exactement l'inverse : <strong>prendre le temps de comprendre le besoin avant de chercher comment y répondre.</strong></Texte>
          <Texte>Cette retenue est difficile, parce qu'elle va contre un réflexe professionnel légitime : celui d'agir, de régler les choses. Mais une solution apportée à un besoin mal compris est une solution qui rate sa cible. La phase « imaginer » consiste donc à creuser : d'où vient réellement ce besoin ? Qu'est-ce qu'on cherche vraiment à changer, derrière le symptôme visible ? Et, question décisive, est-ce que c'est réaliste avec nos moyens ?</Texte>
          <Texte>C'est ici qu'on décide, en conscience, si un projet vaut la peine d'être lancé, et il est parfaitement sain qu'une partie des idées s'arrêtent à ce stade, faute de besoin réel ou de moyens suffisants.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Préparer : la phase qu'on néglige et qui change tout">
          <Texte>Une fois l'intention clarifiée, on organise. C'est la phase où une idée devient un plan : on précise l'objectif, on découpe le projet en étapes, on répartit les rôles, on estime le temps nécessaire, on anticipe les difficultés.</Texte>
          <Texte>C'est, de loin, <strong>la phase la plus négligée</strong>, et le paradoxe mérite qu'on s'y arrête. On la néglige précisément parce qu'elle ne « produit » rien de visible : pendant qu'on prépare, rien ne semble avancer, et l'impatience d'agir pousse à l'écourter. Pourtant, c'est l'investissement le plus rentable de tout le projet. <strong>Un projet bien préparé se réalise beaucoup plus facilement</strong>, parce que les difficultés ont été anticipées plutôt que découvertes en pleine action, là où elles coûtent le plus cher à corriger.</Texte>
          <Texte>Le temps « perdu » à préparer est presque toujours du temps gagné sur la réalisation. C'est une des leçons les plus contre-intuitives, et les plus précieuses, de la conduite de projet.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Réaliser : agir tout en restant attentif">
          <Texte>On passe à l'action ; les choses se concrétisent. Cette phase, la plus visible, demande la tenue simultanée de deux postures qui peuvent sembler en tension.</Texte>
          <Texte>D'un côté, <strong>avancer</strong> : faire ce qui était prévu, tenir le rythme, ne pas se laisser distraire. De l'autre, <strong>rester attentif</strong> : observer ce qui se passe réellement, repérer ce qui dévie du plan. Car un projet ne se déroule presque jamais exactement comme prévu, des imprévus surgissent, des hypothèses de départ se révèlent fausses, le contexte bouge. Savoir ajuster en cours de route, sans pour autant abandonner le cap, fait partie intégrante du métier.</Texte>
          <Texte>La réalisation n'est donc pas l'exécution aveugle d'un plan : c'est un pilotage, qui combine la fermeté sur l'objectif et la souplesse sur les moyens.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Évaluer : la phase oubliée qui fait grandir">
          <Texte>Le projet touche à sa fin. Avant de tourner la page, on prend un temps pour regarder en arrière : qu'est-ce qui a changé ? A-t-on atteint l'objectif ? Qu'a-t-on appris pour la prochaine fois ?</Texte>
          <Texte>C'est la phase <strong>la plus systématiquement oubliée</strong>, et c'est un vrai gâchis, car c'est elle qui transforme une simple action en expérience. Quand un projet se termine, l'élan naturel est d'enchaîner sur le suivant ; l'évaluation paraît un luxe qu'on n'a pas le temps de s'offrir. Mais sans elle, deux choses se perdent. <strong>On répète les mêmes erreurs</strong>, faute d'en avoir tiré les leçons. Et <strong>on ne consolide pas les réussites</strong>, faute d'avoir identifié ce qui a marché et pourquoi.</Texte>
          <Texte>L'évaluation est ce qui capitalise : elle fait que l'équipe ressort d'un projet un peu plus compétente qu'elle n'y était entrée. Elle ne réclame pas forcément un grand dispositif, souvent, un échange honnête de trente minutes suffit à tirer l'essentiel.</Texte>

          <HighlightBox label="Le déséquilibre à corriger" couleur="jaune">
            <Texte>Spontanément, les équipes consacrent l'essentiel de leur énergie à la phase « réaliser » : la plus visible, la plus gratifiante. « Imaginer », « préparer » et « évaluer » sont compressées au minimum. Or ce sont précisément ces trois phases discrètes qui font la différence entre un projet qui aboutit durablement et une agitation sans lendemain. Rééquilibrer son attention vers elles est l'un des progrès les plus rentables qu'on puisse faire.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 6" titre="Pourquoi chaque phase est une protection">
          <Texte>Il serait tentant de voir ces quatre phases comme une procédure un peu formelle, et de penser qu'on gagne du temps en sautant celles qui paraissent superflues. C'est l'inverse qui est vrai : <strong>chaque phase protège contre une catégorie d'erreurs bien identifiée.</strong></Texte>

          <ConceptBox label="Ce qui se perd quand on saute une phase" titre="Quatre erreurs, quatre causes">
            <p><strong>Sauter « imaginer »</strong>, c'est se lancer dans un projet dont on n'a pas cerné le vrai besoin. On risque de déployer beaucoup d'énergie pour résoudre un faux problème, l'erreur la plus coûteuse de toutes, parce qu'elle se révèle tard.</p>
            <p><strong>Sauter « préparer »</strong>, c'est agir dans le désordre. On découvre les obstacles en pleine action, au moment où il est le plus difficile de les contourner.</p>
            <p><strong>Bâcler « réaliser »</strong>, c'est livrer quelque chose d'incomplet ou de fragile, qui ne produira pas vraiment le changement visé.</p>
            <p><strong>Oublier « évaluer »</strong>, c'est se priver de tout apprentissage, et souvent laisser le changement se déliter, faute d'avoir vérifié qu'il tenait.</p>
          </ConceptBox>
        </SectionModule>

        <PullQuote source="">
          Les quatre phases ne sont pas une contrainte. Elles sont une assurance : chacune vous prémunit contre une manière précise de rater un projet.
        </PullQuote>

        <SectionModule eyebrow="Section 7" titre="Un cycle, pas une ligne droite">
          <Texte>Une précision importante, pour éviter une lecture trop rigide. Les quatre phases se suivent dans un ordre logique, mais un projet réel n'est pas un long fleuve tranquille où l'on passerait proprement d'une case à la suivante.</Texte>
          <Texte>Il arrive (et c'est fréquent, et c'est sain) qu'on doive <strong>revenir en arrière</strong>. On peut découvrir, en pleine réalisation, que l'objectif fixé pendant la préparation n'était pas le bon, et qu'il faut donc réajuster. On peut, au moment d'évaluer, réaliser que le besoin de départ a évolué, et qu'un nouveau cycle doit s'amorcer. Ces allers-retours ne sont pas des ratés : ils sont la marque d'un projet vivant, qui s'adapte à la réalité au lieu de s'enfermer dans un plan initial devenu faux.</Texte>
          <Texte>Ce que le cycle de vie apporte, ce n'est donc pas une procédure rigide, mais <strong>une boussole</strong>. Il donne un cap et un ordre de référence, tout en laissant la place aux ajustements. L'essentiel n'est pas de ne jamais revenir en arrière, c'est de toujours savoir où l'on se trouve et pourquoi on y revient. Un retour en arrière conscient et décidé est une force ; une dérive dont on n'a pas conscience est un danger.</Texte>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Un projet se déroule dans le temps en quatre phases : imaginer, préparer, réaliser, évaluer ; chacune réclame une attention différente.",
              "Connaître ces phases permet de se situer : savoir ce qu'on doit faire maintenant, et ce qui aurait dû être fait avant.",
              "« Imaginer » demande de comprendre le besoin avant de chercher la solution. « Préparer » est la phase la plus négligée alors qu'elle est l'investissement le plus rentable. « Réaliser » combine fermeté sur l'objectif et souplesse sur les moyens. « Évaluer » est la plus oubliée, mais c'est elle qui fait grandir l'équipe.",
              "Chaque phase est une protection contre une catégorie précise d'erreurs ; en sauter une, c'est s'exposer à l'erreur correspondante.",
              "Le cycle donne un cap mais autorise les allers-retours : l'important est de toujours savoir où l'on en est et pourquoi.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Dans quel ordre se déroulent les quatre phases du cycle de vie d'un projet ?",
              reponses: [
                "Réaliser, imaginer, préparer, évaluer",
                "Imaginer, préparer, réaliser, évaluer",
                "Préparer, réaliser, imaginer, évaluer",
                "Imaginer, réaliser, préparer, évaluer",
              ],
              bonneReponse: 1,
              explication: "L'ordre logique est : d'abord comprendre le besoin (imaginer), puis organiser (préparer), ensuite passer à l'action (réaliser), et enfin tirer les leçons (évaluer).",
            },
            {
              question: "Pourquoi la phase « préparer » est-elle décrite comme l'investissement le plus rentable, malgré le fait qu'on la néglige souvent ?",
              reponses: [
                "Parce qu'elle est la plus visible et la plus gratifiante",
                "Parce qu'elle ne sert à rien mais rassure",
                "Parce qu'elle anticipe les difficultés au lieu de les découvrir en pleine action, où elles coûtent le plus cher à corriger",
                "Parce qu'elle remplace l'évaluation",
              ],
              bonneReponse: 2,
              explication: "Le temps « perdu » à préparer est presque toujours du temps gagné sur la réalisation. Les difficultés anticipées coûtent bien moins cher à gérer que celles découvertes en cours d'action.",
            },
            {
              question: "Que se passe-t-il, le plus souvent, quand on oublie la phase « évaluer » ?",
              reponses: [
                "Le projet va plus vite et tout le monde y gagne",
                "On répète les mêmes erreurs, on ne consolide pas les réussites, et le changement risque de ne pas tenir",
                "Le projet devient officiel",
                "Rien, l'évaluation est optionnelle",
              ],
              bonneReponse: 1,
              explication: "L'évaluation est ce qui capitalise l'expérience : sans elle, on répète les mêmes erreurs et on ne peut pas ancrer les réussites. Le changement risque de se déliter faute d'avoir été vérifié.",
            },
            {
              question: "Revenir à une phase précédente est toujours le signe que le projet est mal mené. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Les allers-retours sont fréquents et sains : ils marquent un projet vivant qui s'adapte à la réalité. Ce qui compte, c'est de revenir en arrière en conscience, en sachant où l'on est et pourquoi : un retour décidé est une force, une dérive inconsciente est un danger.",
            },
          ]}
        />

      </div>
    </div>
  )
}
