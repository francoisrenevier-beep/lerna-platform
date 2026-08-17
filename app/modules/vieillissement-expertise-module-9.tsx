import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module9VieillissementExpertise({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={9}
        categorie="Handicap et vieillissement : Pratique avancée"
        titre="Dilemmes éthiques et"
        titrePart2="autodétermination qui s'efface"
        sousTitre="Tenir sa posture professionnelle quand les capacités de décision diminuent, sans substituer son jugement à celui de la personne."
        duree="45 minutes"
        niveau="Pratique avancée"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Quand décider avec devient décider pour">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre ce que signifie l'autodétermination quand les capacités cognitives déclinent",
              "Identifier les situations où le risque de substitution de jugement est le plus élevé",
              "Appliquer des méthodes concrètes pour maintenir la participation de la personne",
              "Naviguer dans les dilemmes éthiques réels sans recette universelle",
              "Tenir une posture professionnelle dans les situations de désaccord entre acteurs"
            ]} />
          </ConceptBox>
          <Texte>L&apos;autodétermination, le droit de choisir et de décider pour soi-même, est un principe fondamental dans le secteur du handicap. La Convention de l&apos;ONU relative aux droits des personnes handicapées, ratifiée par la Suisse, l&apos;affirme explicitement. Dans les modules précédents, nous avons évoqué ce principe. Ce module le prend à bras-le-corps dans sa dimension la plus difficile : que se passe-t-il quand la personne perd progressivement ses capacités à exercer cette autodétermination ?</Texte>
          <Texte>Le vieillissement avec handicap crée une situation particulièrement complexe. Une personne qui a toujours eu des capacités de décision limitées, et qui voit ces capacités se réduire encore avec l&apos;âge, se retrouve dans une zone grise où la frontière entre soutien à la décision et substitution de jugement devient floue. C&apos;est précisément dans cette zone grise que se jouent les dilemmes éthiques les plus difficiles du travail social avec des personnes vieillissantes.</Texte>
          <Texte>Ce module n&apos;est pas un cours d&apos;éthique abstraite. Il est ancré dans des situations concrètes que vous vivez ou que vous vivrez : une personne qui refuse des soins nécessaires, une famille qui prend des décisions à la place de son proche, une équipe divisée sur ce qu&apos;il convient de faire. Ces situations ne se résolvent pas avec des règles, elles se naviguent avec une méthode, des outils, et une boussole claire.</Texte>
          <PullQuote>
            La personne qui vieillit et devient plus dépendante n&apos;est pas une personne qui perd son droit à la parole. Elle est une personne dont le droit à la parole a besoin d&apos;une protection accrue.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="L'autodétermination : ce que ça signifie vraiment">
          <Texte>L&apos;autodétermination ne signifie pas que chaque personne doit prendre toutes ses décisions de manière totalement indépendante. Cela n&apos;est pas possible pour beaucoup de personnes en situation de handicap, et ce n&apos;est d&apos;ailleurs pas toujours souhaitable, même pour les personnes neurotypiques. L&apos;autodétermination, dans le contexte du handicap, désigne quelque chose de plus nuancé : la capacité à orienter sa propre vie selon ses valeurs, ses préférences et ses intérêts, avec le soutien nécessaire pour exercer cette capacité.</Texte>

          <Texte>Il faut distinguer deux notions que l&apos;on confond souvent : la capacité légale et la capacité fonctionnelle. La capacité légale est définie par le droit, une personne sous curatelle de portée générale a juridiquement des capacités d&apos;exercice réduites. La capacité fonctionnelle, elle, décrit ce que la personne est réellement en mesure de comprendre, d&apos;évaluer et de décider dans une situation donnée. Ces deux notions ne coïncident pas toujours. Une personne sous mesure de protection peut conserver une capacité fonctionnelle réelle pour des décisions du quotidien. À l&apos;inverse, une personne sans mesure légale peut traverser une période de crise qui affecte temporairement son discernement. Le rôle du professionnel n&apos;est pas de trancher les questions juridiques, c&apos;est d&apos;observer et de documenter la capacité fonctionnelle, et de la transmettre aux personnes compétentes pour en tirer les conclusions.</Texte>

          <HighlightBox label="Trois niveaux de participation à la décision" couleur="bleu">
            <Texte>Selon les capacités de la personne et la nature de la décision, la participation peut prendre différentes formes :</Texte>
            <Liste items={[
              "Décision autonome : la personne choisit seule, avec ou sans information préalable",
              "Décision soutenue : la personne choisit avec l'aide d'un tiers qui l'aide à comprendre les options et leurs conséquences, sans orienter le choix",
              "Décision représentée : un tiers décide à la place de la personne, en se fondant sur ses valeurs et préférences connues, pas sur ce que le tiers jugerait préférable"
            ]} />
            <Texte>Le vieillissement cognitif fait glisser progressivement d&apos;un niveau vers l&apos;autre. La difficulté professionnelle consiste à suivre ce glissement sans l&apos;anticiper trop vite ni le nier trop longtemps, et à ne jamais descendre plus bas dans l&apos;échelle que la situation ne le requiert réellement.</Texte>
          </HighlightBox>

          <Texte>Dans la pratique, évaluer la capacité résiduelle de participer à une décision implique de se poser quatre questions concrètes. La personne comprend-elle les informations pertinentes, même présentées de façon adaptée ? Peut-elle mesurer les conséquences de ses options, même approximativement ? Peut-elle exprimer un choix, même de manière non verbale ? Et ce choix est-il cohérent avec ce qu&apos;on connaît de ses valeurs et préférences ? Quand ces quatre conditions sont réunies, même partiellement, on est face à une personne qui peut participer, et qui doit participer. Descendre vers la décision représentée avant que cela soit nécessaire est une forme de substitution de jugement anticipée.</Texte>

          <Texte>La substitution de jugement est le risque central. Elle consiste à remplacer le choix de la personne par ce que le professionnel, ou la famille, ou l&apos;institution, juge être le meilleur pour elle. Même bien intentionnée, cette substitution est une atteinte à la dignité de la personne. Ce qui la rend particulièrement difficile à détecter, c&apos;est qu&apos;elle ne se présente jamais comme telle. Elle se présente comme de la protection, de la bienveillance, du pragmatisme. &quot;C&apos;est pour son bien.&quot; &quot;Elle ne comprend pas vraiment.&quot; &quot;Ça lui évite de se faire du souci.&quot; Ces formulations sont des signaux d&apos;alerte, pas des justifications.</Texte>

          <TableauComparaison
            titre="Soutien à la décision vs substitution de jugement"
            colonnes={[
              {
                titre: "Soutien à la décision",
                contenu: [
                  "La personne reste le sujet de la décision",
                  "On adapte la communication pour qu'elle comprenne",
                  "On lui présente des options concrètes",
                  "On respecte son choix même s'il nous semble risqué",
                  "On documente sa participation au processus"
                ]
              },
              {
                titre: "Substitution de jugement",
                contenu: [
                  "Le professionnel ou la famille devient le sujet de la décision",
                  "On décide 'pour son bien'",
                  "On lui présente la décision déjà prise",
                  "On écarte son choix parce qu'il nous semble inapproprié",
                  "On ne documente pas sa position"
                ]
              }
            ]}
          />

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Maurice, 68 ans : la décision a été prise sans lui</p>
              <p className="text-gray-700 text-sm leading-relaxed">Maurice a une déficience intellectuelle modérée et une trisomie 21. Il montre des signes de déclin cognitif depuis un an. L&apos;équipe et la famille ont décidé ensemble qu&apos;il ne participera plus aux sorties en ville, jugées &quot;trop risquées&quot; depuis qu&apos;il s&apos;est perdu une fois. Maurice, lors d&apos;une activité, dit à un éducateur : &quot;Je veux aller au marché. Pourquoi je peux plus ?&quot; L&apos;éducateur ne sait pas quoi répondre.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">S&apos;agit-il d&apos;un soutien à la décision ou d&apos;une substitution de jugement ? Qu&apos;aurait-on pu faire différemment dans le processus de décision ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Il s&apos;agit d&apos;une substitution de jugement. Maurice n&apos;a pas participé à la décision qui le concerne directement. L&apos;équipe et la famille ont évalué le risque et ont décidé à sa place, sans lui présenter les options, sans explorer avec lui ce qui lui tient à cœur dans ces sorties, sans chercher d&apos;alternatives qui auraient pu concilier sécurité et maintien de cette activité. Un processus de soutien à la décision aurait pu inclure : expliquer à Maurice, avec des supports adaptés, ce qui s&apos;est passé et pourquoi on s&apos;inquiète ; lui demander ce que le marché représente pour lui ; explorer ensemble des alternatives (sortie accompagnée, trajet plus court, sortie avec un pair) ; respecter son avis même s&apos;il diffère de celui de l&apos;équipe, ou, s&apos;il est écarté pour des raisons de sécurité, le lui expliquer et documenter sa position.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les dilemmes éthiques réels : quand les valeurs entrent en tension">
          <Texte>Les dilemmes éthiques dans l&apos;accompagnement des personnes vieillissantes en situation de handicap ne sont pas des situations où l&apos;on ne sait pas ce qui est bien. Ce sont des situations où plusieurs valeurs légitimes entrent en tension, et où chaque option a un coût. La tâche du professionnel n&apos;est pas d&apos;éliminer ce coût, mais de le nommer, de le peser collectivement, et d&apos;assumer la décision qui en découle.</Texte>

          <HighlightBox label="Les tensions éthiques les plus fréquentes" couleur="jaune">
            <Texte><strong>Autonomie vs sécurité :</strong> La personne veut continuer une activité que l&apos;équipe juge risquée. Respecter son choix, c&apos;est accepter un risque. Imposer la sécurité, c&apos;est réduire sa liberté. Il n&apos;y a pas de réponse universelle, il y a une pesée des valeurs à faire au cas par cas, avec la personne, l&apos;équipe, la famille et, si nécessaire, un éthicien.</Texte>
            <Texte><strong>Volonté exprimée vs intérêt présumé :</strong> La personne exprime un souhait qui semble aller à l&apos;encontre de son intérêt (refuser des soins nécessaires, vouloir rester dans une situation inconfortable). Quelle valeur prime ? Le respect de la volonté exprimée est en principe prioritaire, mais il est tempéré par l&apos;évaluation de la capacité de discernement.</Texte>
            <Texte><strong>Loyauté envers la famille vs loyauté envers la personne :</strong> La famille demande quelque chose que la personne n&apos;a pas demandé, ou qui contredit ses préférences connues. L&apos;institution doit naviguer entre ces loyautés, en gardant pour boussole le meilleur intérêt de la personne accompagnée.</Texte>
            <Texte><strong>Équité entre résidents vs réponses individualisées :</strong> Certaines adaptations nécessaires pour une personne vieillissante créent une inégalité perçue avec les autres résidents. Comment justifier ces différences sans créer des tensions dans le groupe ?</Texte>
          </HighlightBox>

          <Texte>Le dilemme autonomie/sécurité mérite une attention particulière parce qu&apos;il est de loin le plus fréquent, et parce qu&apos;il tend à être résolu trop vite, et toujours dans le même sens : en faveur de la sécurité. Cette asymétrie est compréhensible : les conséquences d&apos;un accident sont visibles, immédiates, documentables. Les conséquences d&apos;une privation de liberté sont diffuses, progressives, difficiles à relier à une décision précise. Une personne qui chute lors d&apos;une sortie génère un rapport d&apos;incident. Une personne qui se retire progressivement, perd le goût de participer et s&apos;ennuie dans sa chambre ne génère aucun document. Cette asymétrie de visibilité biaise la prise de décision institutionnelle, systématiquement au détriment de la qualité de vie.</Texte>

          <Texte>Pour contrebalancer ce biais, une grille utile consiste à se poser quatre questions avant toute décision restrictive. Quel est le risque réel, pas le risque imaginé ou le risque légal ? Quel est le coût en qualité de vie de la mesure envisagée ? Existe-t-il une alternative qui réduit le risque sans supprimer l&apos;activité ou la liberté ? La personne a-t-elle été informée du risque et a-t-elle pu exprimer un choix ? Si l&apos;équipe ne peut pas répondre à ces quatre questions, la décision n&apos;est pas mûre. Elle doit être reportée jusqu&apos;à ce que ces réponses existent.</Texte>

          <SchemaEtapes
            titre="Démarche de délibération éthique en équipe"
            etapes={[
              { niveau: "Étape 1", nom: "Poser la situation", definition: "Décrire les faits sans interprétation : qui, quoi, depuis quand, quels enjeux" },
              { niveau: "Étape 2", nom: "Identifier les valeurs en tension", definition: "Nommer explicitement les valeurs qui s'affrontent : autonomie, sécurité, dignité, équité..." },
              { niveau: "Étape 3", nom: "Recueillir la position de la personne", definition: "Par tous les moyens disponibles, parole, comportement, histoire de vie, préférences connues" },
              { niveau: "Étape 4", nom: "Explorer les options", definition: "Lister toutes les options possibles, y compris celles qui semblent impossibles au premier abord" },
              { niveau: "Étape 5", nom: "Décider et documenter", definition: "Prendre une décision collective, la documenter avec le raisonnement éthique, et prévoir une réévaluation" }
            ]}
          />

          <Texte>Face à ces tensions, le travail social ne dispose pas de recettes. Il dispose de méthodes, notamment la délibération éthique en équipe, et de repères. Le premier repère est le suivant : quand vous ne savez pas quoi faire, commencez par vous demander ce que la personne elle-même dirait si elle pouvait s&apos;exprimer pleinement. Pas ce qu&apos;elle dit aujourd&apos;hui avec des capacités réduites, mais ce qu&apos;elle a toujours valorisé, ce qui lui a toujours été important, ce qu&apos;elle a toujours cherché à préserver. Cette question oriente sans trancher.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Odette, 74 ans : refuser les soins qu&apos;on juge nécessaires</p>
              <p className="text-gray-700 text-sm leading-relaxed">Odette a un polyhandicap. Elle ne communique pas verbalement mais exprime clairement ses refus par des mouvements de retrait et des cris. Depuis quelques semaines, elle refuse systématiquement les soins de la plaie de pression à son talon gauche. Le médecin dit que sans soins quotidiens, la plaie va s&apos;aggraver et pourrait nécessiter une amputation. L&apos;équipe est divisée : certains pensent qu&apos;il faut respecter son refus, d&apos;autres qu&apos;il faut passer outre pour éviter une complication grave.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quelles valeurs sont en tension dans cette situation ? Quelle démarche permettrait de prendre une décision éthiquement défendable ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Les valeurs en tension sont : l&apos;autonomie et le respect du refus d&apos;Odette d&apos;un côté, sa sécurité et l&apos;évitement d&apos;une complication grave de l&apos;autre. Il n&apos;y a pas de réponse simple. La démarche éthique : d&apos;abord, explorer pourquoi Odette refuse, est-ce que le soin est douloureux ? Mal réalisé ? Mal expliqué ? Peut-on modifier le soin pour le rendre moins pénible ? Ensuite, réunir l&apos;équipe, le médecin et la famille pour une délibération formelle. Consulter si possible un éthicien clinique ou un référent éthique institutionnel. Documenter la délibération et le raisonnement. Et quelle que soit la décision prise, veiller à ce qu&apos;elle soit réévaluée régulièrement, pas figée une fois pour toutes.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Maintenir la participation : méthodes concrètes">
          <Texte>Maintenir la participation d&apos;une personne dont les capacités cognitives déclinent n&apos;est pas une question de bonne volonté, c&apos;est une question de méthode. Les bonnes intentions ne suffisent pas si les outils et les pratiques ne sont pas adaptés. La participation n&apos;a pas besoin d&apos;être verbale, formelle ou conforme à un standard adulte pour être réelle. Elle a besoin d&apos;être recherchée activement, et documentée.</Texte>

          <HighlightBox label="Adapter la communication pour maintenir la participation" couleur="vert">
            <Texte>Plusieurs outils permettent de maintenir une participation réelle même quand la communication verbale devient difficile :</Texte>
            <Liste items={[
              "Les choix concrets et visuels : présenter deux objets réels ou deux photos plutôt que de poser une question abstraite",
              "L'observation comportementale systématique : noter comment la personne réagit dans différentes situations, qu'est-ce qui la fait sourire, se détendre, s'engager ?",
              "Le FALC (Facile à Lire et à Comprendre) : adapter les documents écrits pour les rendre accessibles",
              "L'histoire de vie comme boussole : s'appuyer sur ce qu'on sait des valeurs et préférences de la personne à des moments où elle pouvait les exprimer",
              "La personne de confiance : impliquer systématiquement quelqu'un que la personne a choisi ou avec qui elle a un lien fort"
            ]} />
          </HighlightBox>

          <Texte>L&apos;observation comportementale systématique est sous-utilisée comme outil éthique. Elle permet pourtant de recueillir une forme de &quot;vote&quot; de la personne sur ce qui lui convient et ce qui lui convient moins. Une personne qui, systématiquement, s&apos;anime et sourit lors de la séance de musique du mercredi, mais qui reste prostrée lors de l&apos;atelier peinture du vendredi, exprime quelque chose d&apos;important sur ses préférences. Ce signal n&apos;est pas moins valide qu&apos;une préférence verbale. Il l&apos;est parfois davantage, parce qu&apos;il échappe au biais de désirabilité sociale, la tendance à répondre ce qu&apos;on croit que l&apos;autre attend.</Texte>

          <Texte>Pour formaliser cette observation, certaines équipes tiennent un journal de bien-être : un document simple où les professionnels de chaque quart notent brièvement les moments où la personne a semblé à l&apos;aise, engagée, souriante, et ceux où elle a semblé inconfortable, retirée ou agitée. Sur quelques semaines, ce journal constitue une cartographie précieuse de ce qui fait du bien à la personne. C&apos;est une cartographie qui peut alimenter directement la révision du PPA, les délibérations éthiques, et les prises de décision sur les activités et les soins, avec une légitimité que l&apos;intuition d&apos;un seul professionnel n&apos;a pas.</Texte>

          <Texte>L&apos;histoire de vie mérite une attention particulière. Pour les personnes qui ont vécu longtemps en institution, il existe souvent une connaissance collective de ce qui leur a toujours été important : certaines activités, certains aliments, certains rituels, certaines personnes. Cette connaissance collective est une ressource éthique précieuse : elle permet de prendre des décisions &quot;dans l&apos;esprit&quot; de la personne, même quand elle ne peut plus exprimer ses souhaits de manière claire. Le risque est que cette connaissance soit concentrée dans un ou deux professionnels anciens, et qu&apos;elle disparaisse avec leur départ. La formaliser dans un document d&apos;histoire de vie accessible à toute l&apos;équipe est une mesure de protection de la personne.</Texte>

          <HighlightBox label="Documenter la participation : une obligation éthique" couleur="bleu">
            <Texte>Toute décision significative concernant une personne dont les capacités sont réduites doit être documentée avec la trace de sa participation au processus. Cette documentation n&apos;est pas une formalité administrative, c&apos;est une protection pour la personne et pour les professionnels.</Texte>
            <Texte>Elle doit contenir : les moyens utilisés pour recueillir la position de la personne, ce qu&apos;elle a exprimé (verbalement ou comportementalement), les autres positions en présence (famille, équipe, médecin), et le raisonnement qui a conduit à la décision finale. Cette trace permet de revenir sur la décision si la situation évolue, et de justifier les choix faits si des questions sont soulevées ultérieurement.</Texte>
          </HighlightBox>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Révision du PPA de Renée, comment l&apos;inclure vraiment ?</p>
              <p className="text-gray-700 text-sm leading-relaxed">Renée, 71 ans, déficience intellectuelle sévère avec déclin cognitif avancé. La révision annuelle de son PPA approche. L&apos;équipe se demande comment l&apos;inclure dans ce processus, elle ne comprend plus les questions abstraites, ne peut pas suivre une réunion d&apos;une heure, et ses réponses verbales sont souvent incohérentes. La cheffe d&apos;équipe propose de faire la révision &quot;en son nom&quot; avec la famille.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">La proposition de faire la révision &quot;en son nom&quot; vous semble-t-elle suffisante ? Quelles alternatives permettraient une participation réelle de Renée, même partielle ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Faire la révision uniquement &quot;en son nom&quot; est insuffisant, c&apos;est une substitution de jugement, même bien intentionnée. Des alternatives pour une participation réelle, même partielle : organiser plusieurs courts moments d&apos;observation structurée avec Renée dans les semaines précédant la révision, en notant ses réactions à différentes activités, aliments, personnes et situations. Utiliser des photos des activités proposées pour observer ses réactions. Inclure dans la réunion un moment où une personne qui connaît bien Renée partage ces observations comportementales. S&apos;appuyer sur l&apos;histoire de vie pour identifier ce qui lui a toujours été important. Renée ne peut peut-être pas &quot;participer&quot; à une réunion, mais elle peut contribuer au processus si on adapte la forme de cette contribution.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Tenir sa posture dans les désaccords">
          <Texte>Les dilemmes éthiques génèrent souvent des désaccords, entre professionnels, entre l&apos;équipe et la famille, entre l&apos;institution et le médecin. Ces désaccords sont normaux et légitimes. Ils reflètent la complexité réelle des situations. La difficulté professionnelle est de maintenir sa posture dans ces désaccords, sans céder à la pression, sans s&apos;isoler dans sa conviction, et sans perdre de vue la personne au centre.</Texte>

          <Texte>Le désaccord en équipe est souvent vécu comme un problème à résoudre, quelque chose qu&apos;il faudrait faire disparaître pour avancer. C&apos;est une erreur de lecture. Un désaccord en équipe sur une décision éthique est un signal précieux : il indique que la situation est suffisamment complexe pour que des professionnels compétents et bien intentionnés n&apos;arrivent pas à la même conclusion. Ce signal doit déclencher une délibération formelle, pas un vote à la majorité ou une décision du chef. La délibération éthique n&apos;est pas une discussion, c&apos;est une méthode structurée, avec des étapes et une documentation.</Texte>

          <HighlightBox label="Quand vous êtes en désaccord avec la famille" couleur="jaune">
            <Texte>La famille a une légitimité réelle dans les décisions qui concernent leur proche. Elle connaît souvent la personne depuis des décennies, a une histoire partagée, porte une charge émotionnelle et souvent physique considérable. Mais la famille n&apos;est pas toujours alignée avec les intérêts de la personne accompagnée, parfois par épuisement, parfois par projection de ses propres peurs, parfois par méconnaissance des capacités réelles de la personne.</Texte>
            <Texte>Dans ces situations, votre rôle n&apos;est pas de vous opposer frontalement à la famille, c&apos;est d&apos;être l&apos;avocat de la personne accompagnée, en vous fondant sur des observations factuelles et en maintenant la boussole de ses intérêts propres. Cette posture demande du tact, de la patience, et souvent l&apos;appui de votre hiérarchie ou d&apos;un tiers médiateur.</Texte>
          </HighlightBox>

          <Texte>Dans les situations de désaccord avec la famille, une technique utile est de séparer soigneusement ce que la famille ressent, ce qui est légitime et doit être entendu, de ce qu&apos;elle demande, ce qui peut être discuté. &quot;Je comprends que vous soyez inquiet pour votre mère et que vous vouliez la protéger. En même temps, ce que nous observons est différent de ce que vous décrivez, et je voudrais qu&apos;on puisse en parler ensemble.&quot; Cette formulation valide l&apos;émotion tout en maintenant l&apos;espace pour un dialogue factuel. Elle évite la confrontation directe sans capituler sur les observations professionnelles.</Texte>

          <HighlightBox label="Quand vous êtes en désaccord avec votre équipe" couleur="bleu">
            <Texte>Le désaccord au sein de l&apos;équipe est parfois le signe d&apos;une situation éthiquement complexe, et c&apos;est précisément ce signal qui doit déclencher une délibération formelle plutôt qu&apos;une décision majoritaire. Une décision prise à la majorité sans délibération sérieuse n&apos;est pas une décision éthiquement fondée, c&apos;est une décision de confort collectif.</Texte>
            <Texte>Si vous êtes dans la minorité et que vous estimez que la décision de l&apos;équipe n&apos;est pas dans l&apos;intérêt de la personne, vous avez la responsabilité de le nommer : calmement, avec des arguments factuels, en proposant une démarche de délibération plutôt qu&apos;en imposant votre position. Et si la situation vous semble grave au point de mettre en danger la personne, vous avez le droit et le devoir de remonter la préoccupation à votre hiérarchie.</Texte>
          </HighlightBox>

          <Texte>Tenir sa posture dans la durée demande aussi de prendre soin de soi. Les situations de désaccord éthique prolongé sont épuisantes. Elles activent des mécanismes de doute, d&apos;isolement, parfois de culpabilité. Un professionnel qui se retrouve seul à porter une préoccupation éthique que personne autour de lui ne semble partager a besoin de deux choses : d&apos;un espace pour exprimer sa position formellement et de manière documentée, et d&apos;un soutien extérieur, supervision individuelle, référent éthique, ou collègue de confiance hors de l&apos;équipe. Ce n&apos;est pas une faiblesse de chercher ce soutien, c&apos;est une exigence professionnelle.</Texte>

          <PullQuote>
            Tenir sa posture éthique ne signifie pas avoir raison seul. Cela signifie rester fidèle à la personne accompagnée, même quand c&apos;est inconfortable.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Les dilemmes éthiques liés au vieillissement n&apos;ont pas de solution parfaite. Ils ont des démarches rigoureuses, des méthodes de délibération, des outils de participation, et une boussole : le meilleur intérêt de la personne accompagnée, défini au plus près de ses propres valeurs et préférences. Cette boussole ne suffit pas toujours, mais elle oriente toujours.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "L'autodétermination ne disparaît pas avec le déclin cognitif, elle nécessite un soutien adapté",
              "Distinguer capacité légale et capacité fonctionnelle : une personne sous mesure de protection peut conserver des capacités de participation réelles",
              "La substitution de jugement est souvent imperceptible et bien intentionnée, se présente toujours comme de la protection",
              "Les dilemmes éthiques réels mettent en tension des valeurs légitimes, pas le bien contre le mal",
              "L'observation comportementale est un outil éthique à part entière, la formaliser dans un journal de bien-être",
              "La délibération éthique en équipe est une méthode structurée, pas une discussion informelle",
              "Documenter la participation de la personne et le raisonnement éthique est une obligation professionnelle",
              "Tenir sa posture dans les désaccords, c'est rester l'avocat de la personne accompagnée"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Qu'est-ce que la substitution de jugement ?",
            reponses: [
              "Le fait de demander l'avis d'un juge pour les décisions complexes",
              "Remplacer le choix de la personne par ce que le professionnel ou la famille juge être le meilleur pour elle",
              "Déléguer une décision à un collègue plus expérimenté",
              "Appliquer un protocole institutionnel standardisé"
            ],
            bonneReponse: 1,
            explication: "La substitution de jugement consiste à remplacer le choix de la personne par celui d'un tiers, même bien intentionné. C'est une atteinte à la dignité de la personne, même quand elle est progressive et imperceptible. Elle se distingue du soutien à la décision, où la personne reste le sujet de la décision avec l'aide d'un tiers."
          },
          {
            question: "Dans une situation de dilemme éthique, quelle est la première question à se poser ?",
            reponses: [
              "Quelle est la position de la famille ?",
              "Que dit le protocole institutionnel ?",
              "Que dirait la personne si elle pouvait s'exprimer pleinement, en se fondant sur ses valeurs et préférences connues ?",
              "Quelle est l'option la moins risquée pour l'institution ?"
            ],
            bonneReponse: 2,
            explication: "La boussole centrale d'un dilemme éthique est toujours la personne accompagnée, pas la famille, pas l'institution, pas le protocole. Se demander ce que la personne dirait si elle pouvait s'exprimer pleinement, en s'appuyant sur ce qu'on sait de ses valeurs et préférences, oriente la délibération sans la clore."
          },
          {
            question: "Lequel de ces éléments doit figurer dans la documentation d'une décision éthique ?",
            reponses: [
              "Uniquement la décision finale prise par l'équipe",
              "Les moyens utilisés pour recueillir la position de la personne, ce qu'elle a exprimé, et le raisonnement qui a conduit à la décision",
              "La signature de la famille approuvant la décision",
              "L'accord du médecin référent"
            ],
            bonneReponse: 1,
            explication: "Documenter une décision éthique, c'est documenter le processus, pas seulement le résultat. Les moyens utilisés pour recueillir la position de la personne, ce qu'elle a exprimé, les autres positions en présence, et le raisonnement final. Cette trace protège la personne et les professionnels, et permet de réévaluer la décision si la situation évolue."
          },
          {
            question: "Qu'est-ce que la délibération éthique en équipe ?",
            reponses: [
              "Un vote à la majorité pour décider de la meilleure option",
              "Une discussion informelle entre collègues pour trouver un consensus",
              "Une méthode structurée pour identifier les valeurs en tension, recueillir la position de la personne et décider de manière documentée",
              "Une consultation obligatoire avec un éthicien externe"
            ],
            bonneReponse: 2,
            explication: "La délibération éthique est une méthode structurée, pas un vote ni une discussion informelle. Elle comprend la description de la situation, l'identification des valeurs en tension, le recueil de la position de la personne, l'exploration des options et une décision documentée avec son raisonnement."
          },
          {
            question: "Quand vous êtes en désaccord avec votre équipe sur une décision concernant une personne accompagnée, que devez-vous faire ?",
            reponses: [
              "Accepter la décision majoritaire sans la remettre en question",
              "Refuser d'appliquer la décision de l'équipe",
              "Nommer votre désaccord avec des arguments factuels et proposer une démarche de délibération, et remonter à la hiérarchie si vous estimez la situation grave",
              "Contacter directement la famille pour l'informer du désaccord"
            ],
            bonneReponse: 2,
            explication: "Le désaccord dans une équipe face à un dilemme éthique est souvent le signal qu'une délibération formelle est nécessaire. Votre responsabilité est de nommer votre désaccord, avec des arguments factuels, et de proposer une démarche plus rigoureuse. Si la situation vous semble grave, remonter à la hiérarchie est légitime : c'est exercer votre rôle d'avocat de la personne accompagnée."
          },
          {
            question: "Pour une personne dont les capacités cognitives sont très réduites, comment maintenir une participation réelle à la révision de son PPA ?",
            reponses: [
              "Faire la révision uniquement avec la famille : c'est plus efficace",
              "Attendre que la personne aille mieux pour faire la révision",
              "Observer ses réactions comportementales à différentes situations dans les semaines précédant la révision, et s'appuyer sur son histoire de vie",
              "Lui poser les questions habituelles en parlant plus fort et plus lentement"
            ],
            bonneReponse: 2,
            explication: "Même quand la participation verbale est impossible, une participation réelle reste possible par d'autres voies : observation comportementale systématique, photos des activités, histoire de vie, présence d'une personne de confiance. La participation n'a pas besoin d'être verbale pour être réelle, elle a besoin d'être recherchée activement et documentée."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
