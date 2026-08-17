import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module2GestionProjetAvance({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Gestion de projet : Niveau Avancé"
        titre="L'approche agile"
        titrePart2="adaptée au social"
        sousTitre="L'agilité est née dans le développement informatique, mais son intuition centrale (avancer par petits pas, ajuster en continu plutôt que tout planifier d'avance) résonne profondément avec l'accompagnement de personnes dont les besoins évoluent."
        duree="≈ 25-30 minutes"
        niveau="Avancé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Avancer par cycles courts là où le besoin évolue">
          <Texte>Le niveau intermédiaire vous a appris à planifier : organiser le projet dans le temps, anticiper le déroulé. L'approche agile vient nuancer, et non contredire, cette logique. Elle part d'un constat simple : <strong>il existe des situations où l'on ne peut pas tout planifier d'avance, parce que la réalité elle-même est mouvante</strong>. Et nos métiers regorgent de telles situations.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Pourquoi parler d'agilité dans le social">
          <Texte>L'agilité est née dans le monde du développement logiciel, en réaction à des projets trop longs, trop planifiés, qui aboutissaient à des produits inadaptés parce que les besoins avaient changé entre-temps. Sa réponse a été de renverser la logique : plutôt que de tout définir au départ puis d'exécuter un long plan, avancer par <strong>cycles courts</strong>, livrer rapidement quelque chose d'utilisable, recueillir les retours, et ajuster au cycle suivant. L'idée n'est pas de renoncer à la direction, mais de découvrir le chemin en marchant, par approximations successives.</Texte>

          <Texte>Présenté ainsi, on comprend pourquoi cette intuition parle au secteur social et médico-social. <strong>L'accompagnement de personnes est, par nature, une activité où le besoin évolue et où l'on ne peut pas tout prévoir.</strong> Une personne change, ses besoins se déplacent, ce qui fonctionnait hier ne fonctionne plus aujourd'hui. Vouloir tout planifier d'avance, dans ce contexte, c'est se condamner à appliquer un plan devenu faux. La posture agile (avancer, observer, ajuster) est en réalité familière à tout professionnel de l'accompagnement, même s'il ne l'a jamais nommée ainsi.</Texte>

          <PullQuote>
            L'agilité ne nous est pas étrangère. Avancer à petits pas, observer ce qui se passe, ajuster en fonction de la personne : c'est la posture quotidienne de l'accompagnement. L'agilité ne fait que la nommer et l'organiser à l'échelle d'un projet.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="L'esprit agile, pas le framework technique">
          <Texte>Il faut être très clair sur ce qu'on retient de l'agilité, car le mot recouvre deux choses très différentes qu'il importe de ne pas confondre.</Texte>

          <Texte>D'un côté, il y a un <strong>état d'esprit</strong> : avancer par étapes courtes, privilégier l'adaptation à la planification rigide, associer en continu ceux que le projet concerne, accepter de ne pas tout savoir au départ et d'apprendre en faisant. C'est cela qui nous intéresse, et qui est précieux pour le secteur.</Texte>

          <Texte>De l'autre, il y a un ensemble de <strong>méthodes techniques</strong> (Scrum, sprints, rôles codifiés, rituels précis, vocabulaire spécialisé) développées pour des équipes de développement logiciel. Ces méthodes sont des outils conçus pour un contexte particulier, et il serait absurde de les transposer mécaniquement à l'accompagnement social.</Texte>

          <ConceptBox label="Concept clé" titre="On retient l'esprit agile, on laisse le framework technique.">
            <p>L'esprit agile tient en quelques principes transposables : avancer par cycles courts plutôt que par un grand plan figé ; livrer ou tester quelque chose de concret rapidement, pour apprendre ; associer en continu les parties prenantes, dont les personnes accompagnées ; ajuster à chaque cycle en fonction de ce qu'on a appris. Ces principes n'exigent aucun outil sophistiqué ni aucun vocabulaire spécialisé : ils décrivent une manière de conduire un projet quand le besoin est mouvant.</p>
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Avancer par cycles : la logique itérative">
          <Texte>Le cœur de l'approche agile est la logique <strong>itérative</strong> : procéder par cycles successifs, chacun produisant un résultat concret, observé, qui informe le cycle suivant. Cette logique s'oppose à l'approche dite « en cascade », où l'on planifie tout d'avance puis on exécute le plan du début à la fin sans s'arrêter.</Texte>

          <Texte>Dans un environnement stable et prévisible, l'approche en cascade fonctionne très bien. Mais dans un environnement mouvant, où le besoin se précise au fur et à mesure qu'on avance, l'approche itérative est supérieure, parce qu'elle <strong>intègre l'apprentissage dans le processus</strong> : chaque cycle rend le suivant plus juste.</Texte>

          <Texte>L'avantage décisif de l'itération est qu'elle <strong>réduit le coût de l'erreur</strong>. Dans un grand plan exécuté d'un bloc, une erreur de départ ne se révèle qu'à la fin, quand tout est fait et qu'il est très coûteux de revenir en arrière. Dans une démarche itérative, chaque cycle court est l'occasion de détecter une erreur tôt, quand elle est encore facile à corriger. On ne mise pas tout sur un plan dont on découvrirait la fausseté trop tard ; on avance par petits paris réversibles.</Texte>

          <PullQuote>
            L'itération transforme l'erreur en apprentissage. Un cycle court qui révèle qu'une piste ne fonctionne pas n'est pas un échec : c'est un apprentissage peu coûteux qui oriente la suite.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="La pertinence pour l'accompagnement, et ses raisons">
          <Texte>Pourquoi cette approche est-elle particulièrement adaptée à nos métiers ? Il y a des raisons précises qui méritent d'être explicitées, car elles touchent à la nature même de l'accompagnement.</Texte>

          <Texte>La première raison est que <strong>les personnes ne sont pas des problèmes à résoudre, mais des réalités qui évoluent</strong>. Un plan figé suppose qu'on connaît d'avance la bonne réponse. Or, dans l'accompagnement, la bonne réponse se découvre dans la relation, au fil du temps, en observant comment la personne réagit. L'approche itérative épouse cette réalité : elle fait de l'observation continue et de l'ajustement le cœur de la démarche, au lieu de les traiter comme des correctifs à un plan.</Texte>

          <Texte>La deuxième raison est que <strong>l'itération permet d'associer réellement les personnes accompagnées</strong>. On retrouve ici le fil rouge des niveaux précédents, le « faire avec ». Une démarche qui avance par cycles courts, observe les retours et ajuste, intègre naturellement la parole et l'expérience des personnes à chaque étape. L'agilité, bien comprise, est une manière de tenir l'exigence éthique du secteur dans la méthode même.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à un changement que vous avez piloté ou observé dans votre institution. A-t-il été conduit comme un grand plan exécuté d'un bloc, ou par cycles courts avec ajustements ? Si des difficultés sont apparues, auraient-elles été détectées plus tôt, et à moindre coût, dans une démarche itérative qui aurait testé à petite échelle avant de généraliser ?</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Les limites : ce que l'agilité ne remplace pas">
          <Texte>Il serait malhonnête, et dangereux, de présenter l'agilité comme une solution universelle. Elle a des limites précises, et les ignorer conduit à des dérives.</Texte>

          <Texte>D'abord, l'agilité ne remplace pas <strong>le cadre et la direction</strong>. Avancer par cycles courts ne signifie pas avancer sans cap : l'itération porte sur le chemin, pas sur la destination. Une démarche agile sans direction claire n'est pas agile, elle est désorientée : une succession de petits pas qui ne mènent nulle part. La souplesse sur les moyens suppose la fermeté sur le sens. Confondre agilité et absence de cadre est l'erreur la plus commune et la plus coûteuse.</Texte>

          <Texte>Ensuite, l'agilité ne remplace pas <strong>le sens</strong>. La logique itérative est une méthode ; elle ne dit rien, par elle-même, de la direction juste. Dans nos métiers, où la finalité est le respect et l'accompagnement des personnes, cette question prime sur toute considération de méthode. L'agilité est au service du sens, jamais l'inverse.</Texte>

          <Texte>Enfin, certaines choses <strong>ne se prêtent pas à l'itération</strong>. Tout ce qui touche à la sécurité, au cadre légal, aux droits fondamentaux des personnes ne peut pas s'expérimenter par essais-erreurs. On ne « teste pas à petite échelle » le respect de la dignité ou une obligation légale.</Texte>

          <ConceptBox label="Concept clé" titre="L'agilité est un outil au service du sens, dans son domaine propre.">
            <p>Elle excelle là où le besoin évolue et où l'on apprend en faisant ; elle est dangereuse si on l'érige en principe universel. Elle suppose toujours un cadre ferme (une direction, un sens), et elle s'arrête là où commencent les domaines qui ne tolèrent pas l'expérimentation : sécurité, droit, dignité. Un pilote avisé retient l'esprit agile pour ce qu'il apporte, sans en faire une idéologie.</p>
          </ConceptBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "L'agilité part d'un constat juste pour le secteur : on ne peut pas tout planifier d'avance quand le besoin évolue, comme c'est le cas dans l'accompagnement de personnes.",
              "On retient l'esprit agile (avancer par cycles courts, observer, apprendre, ajuster, associer en continu), pas le framework technique du développement logiciel.",
              "La logique itérative intègre l'apprentissage dans le processus et réduit le coût de l'erreur : on détecte tôt, par petits paris réversibles, au lieu de tout miser sur un grand plan.",
              "L'approche est particulièrement pertinente pour l'accompagnement parce que les personnes évoluent et que l'itération permet de les associer réellement, le « faire avec » dans la méthode même.",
              "Limites essentielles : l'agilité ne remplace ni le cadre et la direction, ni le sens, et elle s'arrête là où commencent les domaines qui ne tolèrent pas l'expérimentation (sécurité, droit, dignité).",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Que retient-on de l'agilité pour le secteur social et médico-social ?",
              reponses: [
                "Le framework technique complet (Scrum, sprints, rôles codifiés) appliqué tel quel",
                "L'esprit : avancer par cycles courts, observer, apprendre, ajuster, associer en continu les parties prenantes",
                "L'idée qu'il ne faut jamais planifier",
                "Le vocabulaire informatique adapté au social",
              ],
              bonneReponse: 1,
              explication: "On retient l'esprit agile, pas le framework technique. L'esprit se résume en quelques principes transposables : avancer par cycles courts, tester rapidement, apprendre de l'expérience, associer en continu ceux que le projet concerne, ajuster à chaque cycle.",
            },
            {
              question: "Quel est l'avantage décisif de la logique itérative dans une transformation incertaine ?",
              reponses: [
                "Elle élimine toute erreur dès le départ",
                "Elle réduit le coût de l'erreur : on détecte tôt, par petits paris réversibles, au lieu de tout miser sur un grand plan dont on découvrirait la fausseté trop tard",
                "Elle supprime le besoin de direction",
                "Elle va toujours plus vite qu'un plan linéaire",
              ],
              bonneReponse: 1,
              explication: "L'avantage décisif de l'itération est de réduire le coût de l'erreur. On avance par petits cycles réversibles, ce qui permet de détecter les problèmes tôt. Un cycle court qui révèle qu'une piste ne fonctionne pas n'est pas un échec : c'est un apprentissage peu coûteux qui oriente la suite.",
            },
            {
              question: "Pourquoi l'approche itérative est-elle particulièrement adaptée à l'accompagnement ?",
              reponses: [
                "Parce que les personnes sont des problèmes à résoudre une fois pour toutes",
                "Parce que les personnes évoluent et que l'itération, en observant et ajustant en continu, permet de les associer réellement : le « faire avec » dans la méthode",
                "Parce qu'elle évite d'avoir à observer les personnes",
                "Parce qu'elle est plus rapide à documenter que les autres méthodes",
              ],
              bonneReponse: 1,
              explication: "Deux raisons précises : les personnes ne sont pas des problèmes figés mais des réalités qui évoluent (la bonne réponse se découvre dans la relation) ; et l'itération permet d'associer réellement les personnes accompagnées à chaque cycle, incarnant l'exigence éthique du « faire avec ».",
            },
            {
              question: "Vrai ou faux : « Une démarche agile peut se passer de cap et de sens, puisqu'elle s'ajuste en permanence. »",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Faux. L'itération porte sur le chemin, pas sur la destination. Une démarche agile sans direction n'est pas agile, elle est désorientée. L'agilité suppose toujours un cadre ferme et un sens ; elle est au service du sens, jamais l'inverse. Et elle s'arrête là où commencent les domaines qui ne tolèrent pas l'expérimentation : sécurité, droit, dignité.",
            },
          ]}
        />

      </div>
    </div>
  )
}
