import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module4VieillissementApprofondissement({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Handicap et vieillissement"
        titre="Gestion des situations complexes"
        titrePart2="et comportements défis"
        sousTitre="Comprendre avant d'intervenir : analyse fonctionnelle, régulation en crise et postures professionnelles."
        duree="45 minutes"
        niveau="Confirmé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Comprendre avant d'intervenir">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre le comportement défi comme une forme de communication",
              "Identifier les facteurs déclencheurs liés spécifiquement au vieillissement",
              "Appliquer la méthode A-B-C d'analyse fonctionnelle",
              "Conduire un débriefing d'équipe structuré après un incident",
              "Adopter les postures professionnelles adaptées en situation de crise"
            ]} />
          </ConceptBox>
          <Texte>Parmi les défis les plus difficiles que rencontrent les équipes, les comportements dits "défis" occupent une place particulière. Ces comportements (agression, automutilation, agitation, repli extrême, comportements stéréotypés) sont non seulement éprouvants pour l'équipe, mais ils signalent souvent une souffrance réelle de la personne qui mérite une réponse sérieuse et structurée.</Texte>
          <Texte>Ce module propose une approche qui prend le contre-pied des réponses instinctives (contrainte, médication, isolement) pour revenir à l'essentiel :</Texte>
          <PullQuote>
            Comprendre avant d'intervenir.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le comportement comme langage : nouveaux facteurs liés au vieillissement">
          <Texte>La première chose à comprendre est que tout comportement, aussi difficile soit-il à vivre pour l'entourage, constitue une forme de communication. La personne exprime quelque chose : une douleur, une peur, un besoin non satisfait, une souffrance liée à un changement qu'elle ne comprend pas.</Texte>

          <Texte>Avec le vieillissement, des facteurs déclencheurs nouveaux apparaissent qui n'existaient pas dans la biographie comportementale antérieure de la personne.</Texte>

          <TableauComparaison
            titre="Facteurs déclencheurs liés au vieillissement"
            colonnes={[
              {
                titre: "Facteur",
                contenu: ["Douleur physique", "Effets médicamenteux", "Désorientation (démence)"]
              },
              {
                titre: "Mécanisme",
                contenu: [
                  "Sources multipliées avec l'âge : arthrose, douleurs neuropathiques, problèmes dentaires, constipation",
                  "Polymédication croissante, effets paradoxaux : agitation, confusion, troubles de l'équilibre",
                  "Panique intense liée à l'impossibilité de se situer dans le temps et l'espace"
                ]
              },
              {
                titre: "Signal comportemental",
                contenu: [
                  "Agitation, agressivité, automutilation, refus d'activités, insomnie",
                  "Agitation au lieu du calme attendu après une modification thérapeutique",
                  "Comportements agressifs ou d'opposition, panique, cris"
                ]
              }
            ]}
          />

          <Texte>Ces trois facteurs méritent d&apos;être développés, car ils changent fondamentalement la lecture que l&apos;on peut faire d&apos;un comportement défi chez une personne vieillissante.</Texte>

          <Texte>La <strong>douleur physique</strong> est probablement le facteur le plus fréquent et le plus sous-estimé. Avec l&apos;âge, les sources de douleur se multiplient : arthrose des hanches et des genoux chez les personnes qui ont compensé une mobilité difficile pendant des décennies, douleurs neuropathiques chez les personnes blessées médullaires, problèmes dentaires négligés faute de détection, constipation sévère chez les personnes peu mobiles. Chacune de ces sources peut générer ou amplifier des comportements qui, vus de l&apos;extérieur, semblent inexpliqués. La personne qui se met à frapper lors des soins du matin n&apos;est peut-être pas devenue &quot;agressive&quot; — elle exprime peut-être une douleur articulaire que les gestes de la toilette aggravent.</Texte>

          <Texte>Les <strong>effets médicamenteux paradoxaux</strong> constituent un piège fréquent. La polymédication augmente avec l&apos;âge, et certains médicaments courants (neuroleptiques, benzodiazépines, certains antihypertenseurs) peuvent produire chez des personnes âgées des effets inverses à ceux attendus : agitation au lieu du calme, confusion, troubles de l&apos;équilibre qui génèrent de l&apos;angoisse. Tout changement comportemental apparaissant dans les jours qui suivent une modification thérapeutique doit être signalé au médecin, pas interprété comme une évolution du handicap.</Texte>

          <Texte>La <strong>désorientation liée à une démence débutante</strong> génère une expérience intérieure que l&apos;on sous-estime souvent. Imaginez vous réveiller dans un lieu que vous ne reconnaissez plus, entouré de visages familiers dont vous avez oublié les noms, sans savoir quel jour on est ni pourquoi on vous demande de vous habiller. Cette expérience de confusion profonde peut provoquer une panique intense, qui s&apos;exprime par des comportements agressifs ou d&apos;opposition que l&apos;équipe perçoit comme une escalade soudaine, sans en comprendre la source.</Texte>

          <HighlightBox label="La douleur : facteur le plus sous-estimé" couleur="jaune">
            <Texte>Les personnes en situation de handicap, particulièrement celles avec des difficultés de communication, ont souvent du mal à identifier et exprimer la douleur. Elles peuvent ne pas utiliser le mot "douleur" même quand elles souffrent intensément. <strong>La douleur s'exprime alors par le comportement.</strong></Texte>
            <Texte>Tout changement comportemental apparaissant à la suite d'une modification thérapeutique doit être immédiatement signalé au médecin.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La méthode A-B-C : analyser pour comprendre">
          <Texte>Face à un comportement défi récurrent, l'improvisation est l'ennemie de l'efficacité. Chaque professionnel réagit différemment, la personne reçoit des messages contradictoires, et le comportement souvent s'intensifie.</Texte>

          <HighlightBox label="Le modèle A-B-C" couleur="bleu">
            <Texte>L'<strong>analyse fonctionnelle</strong> repose sur une méthode structurée permettant à l'équipe de travailler ensemble, de manière systématique, pour comprendre la fonction d'un comportement et construire une réponse cohérente.</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="Le modèle A-B-C (Antécédent – Comportement – Conséquence)"
            etapes={[
              { niveau: "A", nom: "Antécédent", definition: "Tout ce qui précède : lieu, heure, activité, personnes présentes, état physique, événements récents" },
              { niveau: "B", nom: "Comportement", definition: "Description factuelle et précise, sans interprétation : 'Robert frappe la table' plutôt que 'Robert est agressif'" },
              { niveau: "C", nom: "Conséquence", definition: "Ce qui se passe immédiatement après : réaction de l'équipe, ce que la personne obtient ou subit" }
            ]}
          />

          <HighlightBox label="Attention aux conséquences qui renforcent le comportement" couleur="jaune">
            <Texte>La Conséquence est importante parce qu'elle peut involontairement "renforcer" le comportement : si une personne obtient systématiquement la fin d'une activité pénible en se comportant de manière agressive, elle a toutes les raisons de répéter ce comportement.</Texte>
          </HighlightBox>

          <Texte>La réunion d'analyse comportementale est un temps clinique sérieux :</Texte>
          <Liste items={[
            "Chaque membre de l'équipe présente ses observations A-B-C pour les incidents de la période d'observation",
            "L'équipe cherche ensemble les régularités : heure, lieu, personne, contexte qui revient",
            "Des hypothèses sont formulées sur la fonction du comportement",
            "Une ou deux modifications du contexte ou de la réponse sont décidées à titre expérimental",
            "Une date de bilan est fixée (2 à 4 semaines) pour évaluer l'effet des modifications"
          ]} />

          <Texte>Concrètement, comment se déroule une réunion d&apos;analyse comportementale efficace ? Elle commence par un temps d&apos;observation structurée : pendant une à deux semaines, chaque professionnel note ses observations selon le modèle A-B-C à chaque incident. Lors de la réunion, ces observations sont mises en commun. L&apos;équipe cherche des régularités : est-ce que les incidents surviennent toujours à la même heure ? Toujours avec le même professionnel ? Toujours dans le même espace ? Ces régularités, quand elles apparaissent, sont souvent révélatrices. Un comportement qui semblait aléatoire devient soudainement lisible.</Texte>

          <Texte>L&apos;équipe formule ensuite des hypothèses, pas des certitudes. &quot;On pense que Marc frappe lors des soins du matin parce qu&apos;il a mal au dos depuis sa chute en janvier&quot; est une hypothèse. Elle sera testée : on informe le médecin, on adapte les gestes de soin, on observe pendant deux semaines. Si le comportement diminue, l&apos;hypothèse était probablement juste. Si rien ne change, on reformule. Cette démarche itérative demande de la patience, mais elle produit des résultats là où l&apos;improvisation a échoué.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Robert, 61 ans, des coups de poing sur la table chaque matin depuis six semaines</p>
              <p className="text-gray-700 text-sm leading-relaxed">Robert a une déficience intellectuelle modérée. Depuis six semaines, il frappe la table avec son poing chaque matin pendant le petit-déjeuner. L&apos;équipe a essayé de le rediriger, de le changer de table. Rien n&apos;a fonctionné durablement. En réunion d&apos;analyse A-B-C, une éducatrice remarque que les incidents surviennent systématiquement le matin, jamais l&apos;après-midi, et toujours quand Robert est assis depuis plus de 15 minutes.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Que révèle la régularité &quot;matin uniquement, après 15 minutes assis&quot; ? Quelle hypothèse formuleriez-vous, et comment la testeriez-vous ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Cette régularité oriente fortement vers une douleur physique liée à la position assise prolongée, potentiellement une douleur lombaire ou articulaire qui s&apos;intensifie le matin. L&apos;hypothèse à tester : informer le médecin référent de ces observations en décrivant le pattern précis, et parallèlement proposer à Robert de se lever et marcher un peu après 10 minutes. Si le comportement diminue, l&apos;hypothèse se confirme. Ce n&apos;est pas à l&apos;équipe de diagnostiquer, mais c&apos;est à l&apos;équipe de formuler l&apos;hypothèse et de la tester de manière structurée.</p>
            </div>
          </div>

          <PullQuote>
            Des comportements qui semblaient ingérables depuis des mois s'améliorent parfois spectaculairement lorsqu'un déclencheur anodin est identifié et modifié.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Réponses pratiques et postures professionnelles en situation de crise">
          <HighlightBox label="Réguler avant d'intervenir" couleur="bleu">
            <Texte>L'état émotionnel du professionnel influence directement le niveau d'agitation de la personne. Un professionnel qui arrive en situation de crise avec une posture tendue, une voix élevée, des gestes brusques va amplifier l'agitation. Un professionnel qui arrive calme, parle lentement, garde une distance respectueuse va contribuer à l'apaisement.</Texte>
          </HighlightBox>

          <Texte>Cette régulation émotionnelle préalable n&apos;est pas un concept abstrait. Elle s&apos;apprend et se pratique. Concrètement, avant d&apos;entrer dans une pièce où un incident est en cours, prenez deux ou trois secondes : respirez, détendez vos épaules, baissez consciemment votre débit de parole intérieur. Ce geste simple modifie votre posture corporelle, et c&apos;est cette posture que la personne en crise perçoit en premier, bien avant vos mots.</Texte>

          <Texte>Plusieurs recherches en psychologie clinique confirment que les personnes en état de grande agitation sont extrêmement sensibles aux signaux non verbaux de leur environnement. Une voix légèrement plus grave, un mouvement ralenti, une distance maintenue : ces signaux communiquent la sécurité et contribuent à abaisser le niveau d&apos;activation émotionnelle de la personne. À l&apos;inverse, un professionnel qui entre rapidement, parle fort, se rapproche trop vite, même avec les meilleures intentions, aggrave l&apos;état qu&apos;il cherche à calmer.</Texte>

          <TableauComparaison
            titre="Principes d'intervention en situation de crise"
            colonnes={[
              {
                titre: "Principe",
                contenu: ["Réduire les stimuli", "Posture ouverte", "Communication calme", "Proposer des alternatives", "Ne pas contraindre"]
              },
              {
                titre: "Comment faire",
                contenu: [
                  "Baisser la voix, réduire le bruit ambiant, demander aux autres de s'éloigner",
                  "Pas de bras croisés, pas de regard fixe et menaçant, distance respectueuse",
                  "Phrases très courtes, nommer la personne, débit lent",
                  "'Je vois que tu es en colère, veux-tu aller dans ta chambre calme ?'",
                  "Jamais répondre à la violence par la contrainte physique : sauf danger immédiat"
                ]
              }
            ]}
          />

          <HighlightBox label="Documentation immédiate après l'apaisement" couleur="vert">
            <Texte>La documentation de l'incident doit intervenir dès que la situation est apaisée, avant que les détails ne s'effacent. Ces notes constituent la base de l'analyse fonctionnelle en équipe.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Le débriefing d'équipe : une nécessité professionnelle">
          <Texte>Les comportements défis intenses sont éprouvants pour les professionnels. Être frappé, insulté, ou exposé à l'automutilation d'une personne que l'on accompagne depuis des années est une expérience difficile qui peut générer un sentiment d'impuissance, de culpabilité, ou d'épuisement.</Texte>

          <HighlightBox label="Le débriefing n'est pas un luxe" couleur="jaune">
            <Texte>Le débriefing d'équipe après un incident significatif est une nécessité professionnelle qui permet à la fois de <strong>prendre soin des professionnels</strong> et d'<strong>améliorer la compréhension de la situation</strong>. Il doit permettre à chacun :</Texte>
            <Liste items={[
              "D'exprimer ce qu'il a vécu et ressenti",
              "De partager ses observations selon le modèle A-B-C",
              "De réfléchir ensemble à ce qui pourrait être fait différemment"
            ]} />
          </HighlightBox>

          <Texte>Comment conduire un débriefing d&apos;équipe efficace ? Il ne s&apos;agit pas d&apos;une réunion de bilan où l&apos;on analyse froidement ce qui s&apos;est passé. C&apos;est d&apos;abord un espace où chacun peut exprimer ce qu&apos;il a vécu, la peur, l&apos;impuissance, la colère, la tristesse. Ces émotions sont légitimes et normales face à des situations intenses.</Texte>

          <Texte>Le débriefing suit généralement trois temps. Un premier temps émotionnel : chacun exprime brièvement ce qu&apos;il a ressenti pendant et après l&apos;incident. Un deuxième temps factuel : l&apos;équipe reconstitue ensemble la séquence des événements selon le modèle A-B-C. Un troisième temps prospectif : que pourrait-on faire différemment la prochaine fois ? Ce dernier temps est crucial, c&apos;est lui qui transforme un incident douloureux en apprentissage professionnel.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Après une agression, l&apos;équipe ne sait pas comment reprendre le travail</p>
              <p className="text-gray-700 text-sm leading-relaxed">Hier, Sylvain, 64 ans, déficience intellectuelle sévère, a mordu violemment une éducatrice lors du soin du matin. L&apos;éducatrice a dû partir en urgence. Aujourd&apos;hui, l&apos;équipe reprend le travail. Personne ne sait comment aborder l&apos;événement. Le chef d&apos;équipe dit qu&apos;il faudra &quot;faire un point&quot; mais sans fixer de moment précis.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quelles sont les conséquences probables si aucun débriefing n&apos;est organisé ? Que devrait faire le chef d&apos;équipe dans les prochaines heures ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Sans débriefing, l&apos;éducatrice blessée risque de se sentir seule, certains collègues développeront de l&apos;appréhension face à Sylvain, et les réponses lors des prochains soins seront moins cohérentes : augmentant le risque de récidive. Le chef d&apos;équipe doit organiser un temps dédié dans les 24 à 48 heures. Même 30 minutes suffisent pour les trois temps : émotionnel (&quot;comment vous sentez-vous aujourd&apos;hui ?&quot;), factuel (&quot;que s&apos;est-il passé exactement ?&quot;) et prospectif (&quot;que pourrait-on adapter pour le prochain soin de Sylvain ?&quot;).</p>
            </div>
          </div>

          <HighlightBox label="Responsabilité de la direction" couleur="bleu">
            <Texte>Les équipes sans espaces de débriefing et de supervision se retrouvent dans un cycle épuisant : accumulation de tension, réponses de moins en moins adaptées, sentiment d'échec, risque de burn-out. <strong>La direction de l'institution a la responsabilité de créer et de maintenir ces espaces.</strong></Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Les comportements défis, particulièrement lorsqu'ils apparaissent ou s'intensifient avec le vieillissement, sont des signaux qui méritent une réponse structurée et collective. La méthode A-B-C offre un cadre rigoureux pour comprendre avant d'intervenir, et le débriefing d'équipe permet de prendre soin à la fois des personnes accompagnées et des professionnels.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Tout comportement est une communication : chercher ce que la personne exprime",
              "La douleur est le facteur le plus fréquemment sous-estimé chez les personnes vieillissantes",
              "La méthode A-B-C structure l'observation : Antécédent, Comportement factuel, Conséquence",
              "En crise : réguler sa propre émotion d'abord",
              "Le débriefing d'équipe est une nécessité, pas un luxe",
              "L'improvisation aggrave les comportements défis : la cohérence d'équipe est une protection"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Selon ce module, qu'est-ce qu'un comportement défi exprime en premier lieu ?",
            reponses: [
              "Une résistance délibérée aux règles de l'institution",
              "Une forme de communication : douleur, peur, besoin non satisfait, souffrance",
              "Une régression liée à l'aggravation du handicap initial",
              "Un manque de stimulation ou d'activités adaptées"
            ],
            bonneReponse: 1,
            explication: "Tout comportement, aussi difficile soit-il à vivre pour l'entourage, constitue une forme de communication. La personne exprime quelque chose. Cette perspective est fondamentale, elle oriente vers la compréhension plutôt que vers la gestion ou la suppression du comportement."
          },
          {
            question: "Pourquoi la douleur est-elle considérée comme le facteur le plus sous-estimé dans les comportements défis ?",
            reponses: [
              "Parce que les personnes en situation de handicap ne ressentent pas la douleur comme les autres",
              "Parce que les personnes avec difficultés de communication peuvent ne pas utiliser le mot 'douleur' même en souffrant intensément",
              "Parce que la douleur est toujours visible lors des bilans médicaux réguliers",
              "Parce que les médicaments utilisés suppriment la sensibilité à la douleur"
            ],
            bonneReponse: 1,
            explication: "Les personnes avec difficultés de communication peuvent ne pas utiliser le mot 'douleur' même en souffrant intensément. La douleur s'exprime alors par le comportement : agitation, agressivité, automutilation, refus d'activités, insomnie. Avec l'âge, les sources de douleur se multiplient."
          },
          {
            question: "Dans le modèle A-B-C, que doit décrire le 'B' (Comportement) ?",
            reponses: [
              "L'interprétation du comportement par le professionnel",
              "Le ressenti émotionnel de la personne lors de l'incident",
              "Une description factuelle et précise du comportement, sans interprétation",
              "La cause probable du comportement selon le contexte"
            ],
            bonneReponse: 2,
            explication: "'Robert est agressif' n'est pas une description comportementale utile, c'est une interprétation. 'Robert frappe la table avec son poing, crie, et repousse les professionnels qui s'approchent' permet à toute l'équipe de parler de la même chose et de travailler ensemble."
          },
          {
            question: "Pourquoi la Conséquence (C) est-elle importante dans le modèle A-B-C ?",
            reponses: [
              "Elle permet de sanctionner le comportement de façon cohérente",
              "Elle peut involontairement renforcer le comportement si la personne obtient quelque chose d'avantageux",
              "Elle est la seule variable que l'équipe peut modifier",
              "Elle permet d'identifier le diagnostic médical sous-jacent"
            ],
            bonneReponse: 1,
            explication: "Si une personne obtient systématiquement la fin d'une activité pénible en se comportant de manière agressive, elle a toutes les raisons de répéter ce comportement. La conséquence peut donc involontairement renforcer le comportement, il faut l'analyser pour ne pas reproduire ce schéma."
          },
          {
            question: "En situation de crise, quelle est la première ressource professionnelle ?",
            reponses: [
              "Appeler immédiatement le médecin de l'institution",
              "Isoler la personne dans un espace sécurisé",
              "La propre régulation émotionnelle du professionnel",
              "Appliquer le protocole de contention prévu"
            ],
            bonneReponse: 2,
            explication: "L'état émotionnel du professionnel influence directement le niveau d'agitation de la personne. Un professionnel tendu amplifie l'agitation. Un professionnel calme contribue à l'apaisement. Se réguler soi-même est donc la première et la plus importante des interventions."
          },
          {
            question: "Le débriefing d'équipe après un incident est :",
            reponses: [
              "Une obligation administrative à remplir pour le dossier",
              "Un luxe réservé aux grosses institutions avec des ressources humaines",
              "Une nécessité professionnelle qui prend soin des professionnels et améliore la compréhension",
              "Une réunion de sanction pour analyser les erreurs commises"
            ],
            bonneReponse: 2,
            explication: "Le débriefing d'équipe est une nécessité professionnelle, pas un luxe. Il permet de prendre soin des professionnels (exprimer ce qu'on a vécu), d'améliorer la compréhension de la situation (observations A-B-C), et de préparer des réponses plus cohérentes. Sans cet espace, les équipes s'épuisent."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
