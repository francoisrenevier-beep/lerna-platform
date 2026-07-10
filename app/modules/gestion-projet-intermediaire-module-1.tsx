import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module1GestionProjetIntermediaire({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Gestion de projet — Niveau Intermédiaire"
        titre="Cadrer un projet :"
        titrePart2="du besoin à l'intention"
        sousTitre="Avant de chercher comment faire, savoir ce qu'on cherche vraiment. Le cadrage est l'investissement le plus rentable de toute la conduite de projet."
        duree="≈ 20-25 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le moment où tout se joue">
          <Texte>Au niveau base, vous avez appris à reconnaître un projet et à en suivre les phases. Vous voici à présent du côté de celui qui le conduit. Et la première chose à conduire, avant toute action, c'est le <strong>cadrage</strong> : ce travail de départ qui transforme une intention vague en un projet clair, partageable, sur lequel une équipe peut se mettre d'accord.</Texte>
          <Texte>Ce moment paraît modeste — on n'a encore rien « fait » — mais il est déterminant. Un projet mal cadré ne se rattrape presque jamais en cours de route : les difficultés qu'on n'a pas vues au départ ressurgissent en pleine réalisation, au pire moment, quand corriger coûte cher. À l'inverse, un projet bien cadré semble ensuite se dérouler de lui-même, parce que les bonnes questions ont été posées avant de partir. <strong>Le cadrage est l'investissement le plus rentable de toute la conduite de projet.</strong></Texte>
          <Texte>Cadrer, ce n'est pas remplir un document administratif. C'est répondre, honnêtement et avec l'équipe, à quelques questions simples mais redoutables : de quel besoin part-on vraiment ? Qu'est-ce qu'on cherche à changer ? Jusqu'où va ce projet, et où s'arrête-t-il ? À quoi saura-t-on qu'il est réussi ? Tant que ces questions n'ont pas de réponse claire, le projet n'est pas prêt à démarrer, quelle que soit l'envie d'agir.</Texte>
        </SectionModule>

        <PullQuote>
          Un projet bien cadré est à moitié réussi. Le temps passé à clarifier ce qu'on veut faire n'est jamais du temps perdu : c'est du temps gagné sur tout ce qui suit.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Partir du besoin réel, pas de la solution">
          <Texte>Voici le piège le plus fréquent, et le plus coûteux, du démarrage d'un projet : <strong>confondre le besoin et la solution</strong>. C'est une erreur si naturelle qu'on la commet presque toujours sans s'en apercevoir.</Texte>
          <Texte>Le scénario est typique. Quelqu'un arrive avec une idée déjà formée : « Il faudrait créer un atelier cuisine », « On devrait réaménager la salle commune », « Il nous faut un nouveau logiciel de transmissions ». L'idée est présentée comme le projet. Mais une idée de ce type est déjà une <strong>solution</strong> — et une solution répond toujours, implicitement, à un besoin qu'on n'a pas pris la peine de formuler. En sautant directement à la solution, on s'interdit de vérifier qu'elle répond au bon besoin, et on se prive de toutes les autres solutions qu'on n'a pas envisagées.</Texte>

          <ConceptBox label="Concept clé" titre="Le besoin est ce qui manque ou ce qui pose problème ; la solution est une façon d'y répondre.">
            <p>« Les résidents s'ennuient l'après-midi » est un besoin. « Créer un atelier cuisine » est une solution possible parmi d'autres. Cadrer, c'est remonter de la solution proposée au besoin qu'elle vise, pour vérifier que c'est bien le bon besoin — et, alors seulement, choisir la meilleure réponse, qui ne sera pas forcément celle de départ.</p>
          </ConceptBox>

          <Texte>Pourquoi remonter ainsi au besoin ? Pour trois raisons concrètes. D'abord, parce que <strong>la première solution n'est pas toujours la meilleure</strong> : en clarifiant le besoin, on découvre souvent des réponses plus simples, moins coûteuses ou plus justes que l'idée initiale. Ensuite, parce qu'un projet construit sur un besoin clair <strong>embarque plus facilement l'équipe</strong> : chacun comprend pourquoi on le mène. Enfin, parce que c'est le seul moyen de <strong>savoir plus tard si le projet a réussi</strong> : on ne mesure pas la réussite à « l'atelier cuisine a été créé », mais à « les résidents s'ennuient-ils moins ? ».</Texte>
          <Texte>Une technique simple aide à remonter au besoin : se demander <strong>« pourquoi ? »</strong> quelques fois de suite. « On veut un atelier cuisine. — Pourquoi ? — Pour occuper les après-midi. — Pourquoi est-ce un problème ? — Parce que l'ennui génère de l'agitation et du repli. » On voit alors que le vrai besoin n'est pas « un atelier cuisine » mais « réduire l'ennui et ses effets » — et que d'autres réponses sont possibles.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à un projet récent de votre service présenté d'emblée comme une solution (« il faut faire X »). Quel besoin réel cherchait-il à satisfaire ? Ce besoin a-t-il été formulé explicitement, ou est-on passé directement à la solution ? Et avec le recul : était-ce la meilleure réponse au besoin, ou la première qui s'est présentée ?</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Délimiter le périmètre : ce que le projet fait, et ne fait pas">
          <Texte>Une fois le besoin clarifié, le deuxième geste du cadrage consiste à <strong>tracer les limites du projet</strong>. C'est ce qu'on appelle définir le périmètre : dire ce que le projet inclut, et tout aussi important, ce qu'il exclut.</Texte>
          <Texte>Ce geste est souvent négligé, parce qu'il paraît restrictif. En réalité, un périmètre clair est une protection. La première raison est qu'un projet sans limites définies a une tendance naturelle à <strong>grossir indéfiniment</strong> : on part d'un objectif modeste, puis « tant qu'on y est » on ajoute, on élargit, et le projet devient peu à peu ingérable. La seconde est qu'un périmètre flou <strong>crée des malentendus</strong> : les uns croient que le projet couvre telle chose, les autres non, et la déception surgit quand on découvre le désaccord.</Texte>

          <ConceptBox label="Concept clé" titre="Le périmètre, c'est la frontière du projet.">
            <p>Il répond à deux questions : qu'est-ce qui fait partie de ce projet, et qu'est-ce qui n'en fait pas partie ? Énoncer clairement ce que le projet ne fera <em>pas</em> est aussi utile que d'énoncer ce qu'il fera — c'est ce qui évite qu'il s'étende sans fin et que les attentes divergent.</p>
          </ConceptBox>

          <Texte>Délimiter un périmètre ne veut pas dire être étriqué. Cela veut dire être <strong>explicite</strong>. Un projet peut tout à fait être ambitieux, mais il doit savoir où il s'arrête. Dire « ce point est important mais il ne fait pas partie de ce projet-ci, on le traitera après » n'est pas un renoncement : c'est une condition pour que le projet en cours reste faisable. C'est aussi, dans le secteur, une manière de tenir la frontière des compétences : un projet d'accompagnement social sait où il s'arrête et vers qui orienter.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Nommer le livrable et le critère de réussite">
          <Texte>Le dernier geste du cadrage consiste à se projeter à la fin du projet, pour répondre à une question simple : <strong>à quoi reconnaîtra-t-on que c'est fait, et que c'est réussi ?</strong> Ce sont deux choses distinctes, et toutes deux importantes.</Texte>
          <Texte>Le <strong>livrable</strong> est ce que le projet produit concrètement. C'est le résultat tangible : une nouvelle organisation écrite et mise en place, un espace réaménagé, un outil disponible et utilisé. Nommer le livrable dès le cadrage rend l'avancement vérifiable : tant qu'on ne sait pas ce qu'on doit produire, on ne peut pas savoir si on l'a produit, ni où on en est.</Texte>
          <Texte>Mais le livrable ne suffit pas, et c'est un point subtil. Qu'un livrable existe ne dit pas que le besoin a été satisfait. On peut avoir créé l'atelier cuisine (le livrable est là) sans que l'ennui ait reculé (le besoin n'est pas satisfait). D'où la nécessité d'un <strong>critère de réussite</strong> distinct : un repère, défini à l'avance, qui dira si le projet a réellement produit le changement visé.</Texte>

          <ConceptBox label="Concept clé" titre="Livrable et réussite ne se confondent pas.">
            <p>Le livrable répond à « qu'avons-nous produit ? ». Le critère de réussite répond à « le besoin est-il satisfait ? ». Un projet peut livrer ce qui était prévu sans atteindre son but, si la solution n'était pas la bonne. Définir les deux dès le cadrage, c'est se donner les moyens d'évaluer honnêtement le projet à la fin.</p>
          </ConceptBox>

          <Texte>Définir le critère de réussite au moment du cadrage a un autre mérite : cela oblige à être réaliste dès le départ. Si l'on n'arrive pas à formuler à quoi ressemblerait la réussite, c'est souvent le signe que le besoin n'est pas assez clair, ou que l'objectif est trop vague — et il vaut mieux s'en rendre compte maintenant qu'à la fin.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Le cadrage est un acte collectif">
          <Texte>Une dernière précision. Tout ce travail de cadrage — clarifier le besoin, délimiter le périmètre, nommer le livrable et le critère de réussite — ne se fait pas seul dans son bureau. Il gagne énormément à être mené <strong>avec les autres</strong>.</Texte>
          <Texte>Le besoin réel, les limites pertinentes, les critères de réussite justes apparaissent rarement à une seule personne. Celui qui cadre un projet seul risque de passer à côté d'une dimension qu'un autre métier aurait vue immédiatement. Associer quelques personnes clés dès le cadrage n'allonge pas le projet : cela le solidifie, en évitant les angles morts du départ et en construisant, dès l'origine, l'adhésion de ceux qui devront le porter.</Texte>

          <PullQuote>
            On ne cadre pas bien un projet tout seul. Les bonnes limites, le vrai besoin, les justes critères se trouvent en croisant les regards — dès le départ, pas une fois qu'il est trop tard pour en tenir compte.
          </PullQuote>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Le cadrage transforme une idée floue en projet clair et partageable ; c'est le moment le plus déterminant et l'investissement le plus rentable de la conduite de projet.",
              "Il faut partir du besoin réel, pas de la solution : remonter de la solution proposée au besoin qu'elle vise (en se demandant « pourquoi ? »), pour vérifier que c'est le bon besoin et choisir la meilleure réponse.",
              "Délimiter le périmètre — ce que le projet fait et ne fait pas — protège du gonflement sans fin et des malentendus ; c'est aussi ce qui tient la frontière des compétences.",
              "Nommer le livrable (ce qu'on produit) et le critère de réussite (le besoin est-il satisfait ?) : ce sont deux choses distinctes, et un projet peut livrer sans réussir.",
              "Le cadrage est un acte collectif : mené avec quelques personnes clés, il évite les angles morts et construit l'adhésion dès le départ.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Quelle est l'erreur la plus fréquente au démarrage d'un projet ?",
              reponses: [
                "Passer trop de temps à préparer",
                "Confondre le besoin et la solution, en partant directement d'une idée toute faite sans formuler le besoin qu'elle vise",
                "Associer trop de monde au cadrage",
                "Définir un critère de réussite trop tôt",
              ],
              bonneReponse: 1,
              explication: "Confondre le besoin et la solution est l'erreur la plus naturelle et la plus coûteuse. En sautant directement à la solution, on s'interdit de vérifier qu'elle répond au bon besoin et on se prive d'autres solutions souvent meilleures.",
            },
            {
              question: "Pourquoi est-il utile d'énoncer ce que le projet ne fera pas ?",
              reponses: [
                "Pour décourager l'équipe",
                "Pour protéger le projet du gonflement sans fin et éviter les malentendus sur son périmètre",
                "Parce que c'est obligatoire administrativement",
                "Pour réduire l'ambition du projet",
              ],
              bonneReponse: 1,
              explication: "Un périmètre clair protège contre deux risques : le gonflement progressif du projet (qui devient ingérable) et les malentendus sur ce que le projet couvre ou non. Un projet ambitieux peut tout à fait avoir un périmètre clair.",
            },
            {
              question: "Quelle est la différence entre le livrable et le critère de réussite ?",
              reponses: [
                "Il n'y en a aucune",
                "Le livrable est ce qu'on produit concrètement ; le critère de réussite dit si le besoin a réellement été satisfait — on peut livrer sans réussir",
                "Le livrable concerne les cadres, la réussite les équipes",
                "Le critère de réussite se définit seulement à la fin du projet",
              ],
              bonneReponse: 1,
              explication: "On peut avoir créé l'atelier cuisine (le livrable est là) sans que l'ennui ait reculé (le besoin n'est pas satisfait). Définir les deux dès le cadrage évite de confondre « on a fait ce qu'on avait dit » avec « ça a marché ».",
            },
            {
              question: "Pour aller vite, mieux vaut cadrer un projet seul puis le présenter à l'équipe. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Le cadrage gagne à être collectif : le vrai besoin, les bonnes limites et les justes critères se trouvent en croisant les regards. Cadrer seul expose à des angles morts coûteux et prive le projet de l'adhésion construite dès le départ.",
            },
          ]}
        />

      </div>
    </div>
  )
}
