import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module8VieillissementApprofondissement({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={8}
        categorie="Handicap et vieillissement : Approfondissement"
        titre="Signaler efficacement :"
        titrePart2="quand, comment et à qui"
        sousTitre="Construire des signalements utiles, naviguer dans les circuits internes et externes, et assurer le suivi dans la durée."
        duree="45 minutes"
        niveau="Confirmé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le signalement : un acte professionnel, pas un aveu d'échec">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre ce qui déclenche un signalement professionnel",
              "Distinguer les circuits de signalement internes et externes",
              "Construire un signalement structuré et exploitable",
              "Gérer les situations où le signalement n'est pas suivi d'effet",
              "Assurer un suivi dans la durée après un signalement"
            ]} />
          </ConceptBox>
          <Texte>Le signalement est l&apos;un des actes professionnels les plus importants dans l&apos;accompagnement des personnes vieillissantes en situation de handicap. C&apos;est lui qui déclenche les évaluations spécialisées, les adaptations de traitement, les réévaluations du projet personnalisé. Sans signalement, les observations restent dans la tête des professionnels de terrain, et les personnes accompagnées ne bénéficient pas des réponses dont elles ont besoin.</Texte>
          <Texte>Pourtant, le signalement est souvent vécu avec ambivalence. On hésite à &quot;faire du bruit pour rien&quot;. On craint de passer pour quelqu&apos;un qui dramatise. On attend que la situation soit suffisamment grave pour justifier d&apos;agir. Ces résistances sont compréhensibles, mais elles coûtent cher aux personnes accompagnées.</Texte>
          <PullQuote>
            Un signalement précoce et imprécis vaut mieux qu&apos;un signalement tardif et précis. Il est toujours temps d&apos;affiner, il n&apos;est pas toujours temps de rattraper.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Quand signaler ? Les déclencheurs professionnels">
          <Texte>La question &quot;quand signaler ?&quot; est souvent celle qui génère le plus d&apos;hésitation. La réponse professionnelle repose sur deux principes : signaler par rapport à un état de base, et signaler dès qu&apos;une tendance se dessine, pas seulement lors d&apos;un incident isolé.</Texte>

          <HighlightBox label="Les déclencheurs clairs" couleur="bleu">
            <Texte>Certaines situations nécessitent un signalement immédiat, sans attendre :</Texte>
            <Liste items={[
              "Tout changement brutal et inexpliqué dans le comportement, la mobilité ou l'état général",
              "Toute chute, même sans blessure apparente : les chutes à répétition sont un signal sérieux",
              "Tout signe évocateur de trouble de la déglutition (toux aux repas, voix mouillée)",
              "Tout changement comportemental survenant dans les jours suivant une modification thérapeutique",
              "Toute expression de douleur, verbale ou comportementale, inhabituelle",
              "Toute perte de compétences précédemment bien établies"
            ]} />
          </HighlightBox>

          <HighlightBox label="Les déclencheurs progressifs" couleur="jaune">
            <Texte>D&apos;autres situations nécessitent un signalement lorsqu&apos;une tendance se confirme sur plusieurs observations :</Texte>
            <Liste items={[
              "Une fatigue croissante qui modifie progressivement la participation aux activités",
              "Un ralentissement progressif de la marche ou une modification de la posture",
              "Une modification progressive des habitudes alimentaires",
              "Une apathie ou un retrait social progressif",
              "Des troubles du sommeil qui s'installent sur plusieurs semaines",
              "Une impression d'équipe que 'quelque chose a changé', même sans pouvoir le préciser"
            ]} />
            <Texte>Pour ces situations progressives, la règle est : documenter d&apos;abord, signaler quand la tendance est confirmée par au moins deux observations convergentes sur une période significative.</Texte>
          </HighlightBox>

          <Texte>La frontière entre &quot;incident isolé&quot; et &quot;tendance&quot; n&apos;est pas toujours évidente. Une bonne pratique : si vous hésitez à signaler, notez l&apos;observation et fixez-vous mentalement un délai de réévaluation. &quot;Je note cela aujourd&apos;hui, et si je vois la même chose dans les 7 prochains jours, je signale.&quot; Ce délai évite les signalements intempestifs sur un incident isolé, tout en garantissant que les tendances ne passent pas inaperçues.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Deux situations, faut-il signaler ?</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3"><strong>Situation A :</strong> Gilles, 59 ans, a refusé de venir à l&apos;atelier ce matin. Il semble de mauvaise humeur. C&apos;est la première fois cette semaine.</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Situation B :</strong> Gilles a refusé de venir à l&apos;atelier lundi, mercredi et vendredi cette semaine. La semaine dernière, il y avait participé tous les jours. Il dit &quot;j&apos;ai pas envie&quot; sans autre explication. Il mange moins depuis environ 10 jours.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Dans quelle situation faut-il signaler, et à qui ? Dans quelle situation faut-il plutôt documenter et surveiller ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Situation A : documenter et surveiller. Un refus isolé, sans autres signes associés, ne justifie pas un signalement immédiat, mais il mérite d&apos;être noté pour pouvoir identifier une tendance si ça se reproduit. Situation B : signaler au référent de Gilles et à l&apos;équipe. Trois refus en une semaine sur une activité habituellement appréciée, combinés à une diminution de l&apos;appétit depuis 10 jours, constituent une tendance documentée et significative. Ce tableau peut évoquer une dépression, une douleur non exprimée, ou un début de déclin cognitif : l&apos;équipe ne peut pas le savoir sans évaluation. La prochaine étape : synthétiser les observations et les transmettre au médecin référent de manière factuelle.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Comment signaler : construire un signalement exploitable">
          <Texte>Un signalement efficace n&apos;est pas une liste de plaintes ou d&apos;inquiétudes. C&apos;est un document structuré qui donne à celui qui le reçoit les informations nécessaires pour agir. La structure d&apos;un bon signalement reprend les éléments d&apos;une bonne transmission, mais va plus loin en incluant le contexte de la personne et une formulation claire de ce qu&apos;on demande.</Texte>

          <SchemaEtapes
            titre="Structure d'un signalement efficace"
            etapes={[
              { niveau: "1", nom: "Qui", definition: "Nom, âge, type de handicap, durée d'accompagnement dans l'institution" },
              { niveau: "2", nom: "Quoi", definition: "Description factuelle des observations, comportement, mobilité, alimentation, communication" },
              { niveau: "3", nom: "Depuis quand et fréquence", definition: "Date d'apparition, fréquence, évolution dans le temps" },
              { niveau: "4", nom: "Par rapport à quoi", definition: "Comparaison explicite avec l'état de base habituel de la personne" },
              { niveau: "5", nom: "Ce qu'on demande", definition: "Formuler clairement ce qu'on attend du destinataire : évaluation, consultation, visite, modification" }
            ]}
          />

          <HighlightBox label="Formuler ce qu'on demande : une étape souvent oubliée" couleur="bleu">
            <Texte>Beaucoup de signalements décrivent bien la situation, mais n&apos;indiquent pas clairement ce qu&apos;on attend en retour. &quot;À surveiller&quot;, &quot;à noter&quot;, &quot;pour information&quot; : ces formulations ne produisent généralement aucune action concrète. Un signalement efficace formule une demande explicite :</Texte>
            <Liste items={[
              "\"Nous demandons une consultation médicale pour évaluer une possible douleur sous-jacente\"",
              "\"Nous souhaitons qu'un bilan cognitif adapté soit réalisé\"",
              "\"Nous demandons l'avis du médecin sur l'opportunité d'une évaluation logopédique\"",
              "\"Nous souhaitons que la question de la douleur soit explorée lors de la prochaine visite\""
            ]} />
            <Texte>Une demande explicite peut toujours être refusée ou modifiée par le destinataire, mais elle crée une dynamique d&apos;action là où une simple description crée une dynamique d&apos;attente.</Texte>
          </HighlightBox>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Exercice</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Améliorer ce signalement</p>
              <p className="text-gray-700 text-sm leading-relaxed">Voici un signalement rédigé par un professionnel de terrain : &quot;Monsieur Dupont semble fatigué depuis quelques semaines. Il dort beaucoup et participe moins aux activités. Nous pensons qu&apos;il faudrait peut-être faire quelque chose. Merci.&quot;</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Qu&apos;est-ce qui manque dans ce signalement ? Réécrivez-le en appliquant les cinq éléments de la structure d&apos;un signalement efficace.</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Exemple de signalement amélioré</p>
              <p className="text-gray-700 text-sm leading-relaxed">&quot;Monsieur Dupont, 63 ans, déficience intellectuelle légère, accompagné depuis 18 ans dans notre institution. Depuis environ 3 semaines, nous observons : somnolence pendant l&apos;atelier du matin (il s&apos;endort 2-3 fois par semaine, ce qu&apos;il ne faisait jamais auparavant), refus de participer aux activités de l&apos;après-midi 4 jours sur 5 (habituellement il y participait tous les jours), et diminution notable de sa prise alimentaire au déjeuner depuis 2 semaines. Il dit &apos;j&apos;ai pas de force&apos; quand on l&apos;encourage. Aucune chute, aucun changement de traitement récent. Nous demandons une consultation médicale pour évaluer la cause de cette fatigue et explorer une possible douleur non exprimée ou un début de syndrome dépressif.&quot;</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="À qui signaler : naviguer dans les circuits">
          <Texte>Un signalement efficace doit atteindre la bonne personne. Selon la nature de la situation, le destinataire prioritaire n&apos;est pas toujours le même. Naviguer dans ces circuits est une compétence professionnelle que l&apos;on développe avec l&apos;expérience, et qui peut s&apos;apprendre.</Texte>

          <TableauComparaison
            titre="À qui s'adresser selon la situation"
            colonnes={[
              {
                titre: "Situation",
                contenu: [
                  "Changement comportemental ou fonctionnel observé",
                  "Suspicion de douleur physique ou de pathologie",
                  "Suspicion de déclin cognitif",
                  "Question sur le projet d'accompagnement ou le PPA",
                  "Besoins dépassant les compétences de l'équipe (mobilité, transferts, gestes du quotidien)",
                  "Transition vers un autre lieu de vie envisagée"
                ]
              },
              {
                titre: "Destinataire prioritaire",
                contenu: [
                  "Référent de la personne + équipe en réunion",
                  "Médecin référent : avec une description factuelle",
                  "Médecin référent : en précisant la comparaison avec l'état de base",
                  "Référent de la personne + hiérarchie directe",
                  "Médecin référent (pour évaluer l'indication d'un bilan (ergothérapie, physiothérapie)), et hiérarchie directe",
                  "Référent + hiérarchie + famille : idéalement bien avant l'urgence"
                ]
              }
            ]}
          />

          <Texte>Dans la pratique, beaucoup de signalements passent d&apos;abord par le référent de la personne, qui est le pivot naturel de la coordination interne. Mais il est important de ne pas s&apos;arrêter là si la situation le demande. Si le référent ne donne pas suite à un signalement que vous estimez sérieux, vous avez la responsabilité professionnelle de remonter la préoccupation à votre hiérarchie directe. Ce n&apos;est pas une trahison, c&apos;est exercer votre rôle de défenseur de la personne accompagnée.</Texte>

          <HighlightBox label="Quand le signalement ne produit pas d'effet" couleur="jaune">
            <Texte>Il arrive que vous signalez une situation et que rien ne se passe. Le médecin dit &quot;c&apos;est normal pour son âge&quot;. Le référent dit qu&apos;il va &quot;surveiller&quot; sans fixer de délai. La direction dit qu&apos;il faut attendre. Dans ces situations, votre responsabilité professionnelle est de ne pas abandonner le signalement si vous estimez que la situation le justifie.</Texte>
            <Texte>Les options disponibles : documenter formellement votre signalement et sa réponse dans le dossier, cela crée une trace. Redemander une réévaluation en précisant ce qui a changé depuis le premier signalement. Impliquer la famille si elle ne l&apos;est pas encore. Solliciter un deuxième avis médical si la situation se dégrade. Et si vous estimez que la personne est en situation de souffrance non prise en charge, vous avez toujours la possibilité de remonter la situation à votre hiérarchie.</Texte>
          </HighlightBox>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Le médecin dit &quot;c&apos;est normal&quot; — mais vous n&apos;êtes pas convaincu</p>
              <p className="text-gray-700 text-sm leading-relaxed">Vous avez signalé au médecin référent que Christine, 61 ans, trisomie 21, perd progressivement ses repères depuis deux mois : elle ne reconnaît plus certains collègues, oublie le programme de la journée, et s&apos;est perdue deux fois dans l&apos;institution. Le médecin a répondu lors d&apos;une visite courte : &quot;À son âge avec une trisomie 21, c&apos;est attendu. On verra à la prochaine visite dans trois mois.&quot; Vous n&apos;êtes pas satisfait de cette réponse.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">La réponse du médecin vous semble-t-elle satisfaisante ? Quelles options professionnelles avez-vous dans cette situation ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">La réponse du médecin est insuffisante pour une personne avec trisomie 21 présentant ces signes. &quot;C&apos;est attendu&quot; est une forme d&apos;overshadowing, et &quot;on verra dans trois mois&quot; est un délai trop long face à un déclin potentiellement rapide. Vos options : premièrement, transmettez votre signalement par écrit au médecin plutôt qu&apos;oralement, une trace écrite crée une responsabilité différente. Deuxièmement, parlez-en à votre hiérarchie en expliquant que la réponse médicale ne vous semble pas à la hauteur de la situation. Troisièmement, impliquez la famille, qui peut exercer une pression légitime pour obtenir une évaluation spécialisée. L&apos;objectif n&apos;est pas de contester le médecin frontalement, mais de s&apos;assurer que Christine bénéficie d&apos;une évaluation adaptée à la réalité de son profil.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Assurer le suivi dans la durée">
          <Texte>Un signalement sans suivi est un signalement à moitié fait. Après avoir signalé, votre responsabilité professionnelle continue : vérifier que le signalement a bien été reçu et traité, documenter les réponses obtenues, et maintenir la vigilance même si la situation semble se stabiliser.</Texte>

          <HighlightBox label="Le suivi post-signalement" couleur="vert">
            <Texte>Après un signalement, trois questions doivent trouver une réponse dans un délai raisonnable :</Texte>
            <Liste items={[
              "Le signalement a-t-il bien été reçu par le destinataire ? — Confirmez par écrit si vous n'avez pas eu de retour",
              "Quelle action a été décidée en réponse ? — Consultation planifiée, adaptation du traitement, réévaluation du PPA ?",
              "Dans quel délai cette action doit-elle se produire ? — Un suivi sans délai précis est un suivi qui ne se fait souvent pas"
            ]} />
          </HighlightBox>

          <Texte>La vigilance post-signalement est particulièrement importante dans le contexte du vieillissement, où les situations peuvent évoluer rapidement. Après une consultation médicale ou une évaluation spécialisée, votre rôle reprend : observer si les adaptations prescrites produisent un effet, documenter l&apos;évolution, et signaler à nouveau si la situation se modifie, en mieux ou en moins bien.</Texte>

          <Texte>Cette boucle observation, signalement, action, observation est le cœur du travail d&apos;accompagnement d&apos;une personne vieillissante. Elle n&apos;est jamais terminée. Le vieillissement est un processus continu, et le regard professionnel doit l&apos;être aussi.</Texte>

          <PullQuote>
            Signaler n&apos;est pas la fin de votre responsabilité. C&apos;est le début d&apos;une boucle qui ne se ferme que lorsque la personne a reçu la réponse dont elle avait besoin.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Signaler efficacement, c&apos;est exercer pleinement son rôle professionnel dans la chaîne de protection d&apos;une personne vieillissante. C&apos;est transformer une observation en action, une inquiétude en démarche, une impression en information utilisable. Cette compétence s&apos;apprend, se structure et se perfectionne, et elle fait une différence réelle dans la qualité de vie des personnes que vous accompagnez.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Signaler tôt et imprécisément vaut mieux que signaler tard et précisément",
              "Les déclencheurs immédiats : chute, changement brutal, signe de déglutition, modification post-traitement",
              "Un bon signalement contient : qui, quoi, depuis quand, par rapport à quoi, et ce qu'on demande",
              "Formuler une demande explicite, 'nous demandons une consultation', crée une dynamique d'action",
              "Si le signalement ne produit pas d'effet, documenter, relancer, impliquer la famille, remonter à la hiérarchie",
              "Le suivi post-signalement est aussi votre responsabilité : vérifier, documenter, observer à nouveau"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Pourquoi est-il souvent préférable de signaler tôt même avec peu d'éléments ?",
            reponses: [
              "Pour se protéger juridiquement en cas de problème ultérieur",
              "Parce qu'un signalement précoce permet d'agir avant que la situation ne se dégrade, même si les éléments sont encore incomplets",
              "Parce que le médecin préfère recevoir beaucoup de signalements",
              "Pour montrer à la hiérarchie qu'on est vigilant"
            ],
            bonneReponse: 1,
            explication: "Un signalement précoce, même imprécis, déclenche une attention et un suivi qui peuvent éviter une dégradation. Un signalement tardif, même très précis, intervient parfois trop tard pour prévenir des conséquences graves. Il est toujours possible d'affiner un signalement, il n'est pas toujours possible de rattraper une situation qui a évolué."
          },
          {
            question: "Lequel de ces éléments est souvent oublié dans un signalement ?",
            reponses: [
              "Le nom de la personne concernée",
              "La description des comportements observés",
              "La formulation explicite de ce qu'on attend du destinataire",
              "La date du signalement"
            ],
            bonneReponse: 2,
            explication: "Beaucoup de signalements décrivent bien la situation mais n'indiquent pas ce qu'on attend en retour. 'À surveiller' ou 'pour information' ne produisent généralement pas d'action. Formuler une demande explicite, 'nous demandons une consultation médicale', crée une dynamique d'action là où une simple description crée une dynamique d'attente."
          },
          {
            question: "Face à un changement progressif (fatigue croissante, retrait social), quand faut-il signaler ?",
            reponses: [
              "Immédiatement, à la première observation",
              "Uniquement après un incident grave",
              "Lorsque la tendance est confirmée par au moins deux observations convergentes sur une période significative",
              "Seulement lors de la prochaine révision annuelle du PPA"
            ],
            bonneReponse: 2,
            explication: "Pour les changements progressifs, la règle est de documenter d'abord, puis de signaler quand la tendance est confirmée. Un incident isolé peut être une variabilité normale. La même observation répétée par plusieurs professionnels sur plusieurs jours constitue un signal qui mérite un signalement."
          },
          {
            question: "Que faire si un signalement ne produit pas d'effet satisfaisant ?",
            reponses: [
              "Accepter la décision du médecin ou de la hiérarchie et ne plus y revenir",
              "Documenter formellement le signalement et sa réponse, relancer si la situation évolue, impliquer la famille, remonter à la hiérarchie si nécessaire",
              "Attendre la prochaine visite médicale programmée",
              "Informer directement les autorités cantonales"
            ],
            bonneReponse: 1,
            explication: "Si un signalement ne produit pas d'effet satisfaisant et que vous estimez la situation toujours préoccupante, votre responsabilité professionnelle continue. Documenter formellement, relancer avec de nouveaux éléments, impliquer la famille qui peut exercer une pression légitime, et remonter à la hiérarchie si nécessaire : ce sont des options professionnelles légitimes."
          },
          {
            question: "Parmi ces situations, laquelle justifie un signalement immédiat sans attendre ?",
            reponses: [
              "Une personne de 58 ans qui semble un peu moins motivée que d'habitude",
              "Une personne qui a refusé de venir à l'atelier une fois cette semaine",
              "Une chute sans blessure apparente chez une personne de 62 ans avec paralysie cérébrale",
              "Une légère modification de l'appétit observée une seule fois"
            ],
            bonneReponse: 2,
            explication: "Toute chute, même sans blessure apparente visible, justifie un signalement immédiat chez une personne vieillissante. Les chutes sont un signal sérieux de fragilité de l'équilibre et de la mobilité, et leurs conséquences peuvent être catastrophiques. De plus, une première chute augmente statistiquement le risque d'une seconde."
          },
          {
            question: "Qu'est-ce qui distingue un signalement exploitable d'un signalement vague ?",
            reponses: [
              "Sa longueur : un signalement long est toujours plus utile",
              "Le fait qu'il soit rédigé par un professionnel expérimenté",
              "Il contient une description factuelle, une référence temporelle précise, une comparaison avec l'état de base, et une demande explicite",
              "Il est cosigné par plusieurs membres de l'équipe"
            ],
            bonneReponse: 2,
            explication: "Un signalement exploitable n'est pas forcément long, il est précis. Il décrit factuellement ce qui a été observé, indique depuis quand et à quelle fréquence, compare avec l'état de base habituel de la personne, et formule clairement ce qu'on attend du destinataire. Ces quatre éléments permettent au destinataire d'agir de manière ciblée."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
