import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module4Vieillissement({ onValiderModule }: { onValiderModule?: () => void } = {}) {
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
          <Texte>Parmi les défis les plus difficiles que rencontrent les équipes, les comportements dits "défis" occupent une place particulière. Ces comportements — agression, automutilation, agitation, repli extrême, comportements stéréotypés — sont non seulement éprouvants pour l'équipe, mais ils signalent souvent une souffrance réelle de la personne qui mérite une réponse sérieuse et structurée.</Texte>
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
              { niveau: "B", nom: "Comportement", definition: "Description factuelle et précise, sans interprétation — 'Robert frappe la table' plutôt que 'Robert est agressif'" },
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

          <PullQuote>
            Des comportements qui semblaient ingérables depuis des mois s'améliorent parfois spectaculairement lorsqu'un déclencheur anodin est identifié et modifié.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Réponses pratiques et postures professionnelles en situation de crise">
          <HighlightBox label="Réguler avant d'intervenir" couleur="bleu">
            <Texte>L'état émotionnel du professionnel influence directement le niveau d'agitation de la personne. Un professionnel qui arrive en situation de crise avec une posture tendue, une voix élevée, des gestes brusques va amplifier l'agitation. Un professionnel qui arrive calme, parle lentement, garde une distance respectueuse va contribuer à l'apaisement.</Texte>
          </HighlightBox>

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
                  "Jamais répondre à la violence par la contrainte physique — sauf danger immédiat"
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

          <HighlightBox label="Responsabilité de la direction" couleur="bleu">
            <Texte>Les équipes sans espaces de débriefing et de supervision se retrouvent dans un cycle épuisant : accumulation de tension, réponses de moins en moins adaptées, sentiment d'échec, risque de burn-out. <strong>La direction de l'institution a la responsabilité de créer et de maintenir ces espaces.</strong></Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Les comportements défis, particulièrement lorsqu'ils apparaissent ou s'intensifient avec le vieillissement, sont des signaux qui méritent une réponse structurée et collective. La méthode A-B-C offre un cadre rigoureux pour comprendre avant d'intervenir, et le débriefing d'équipe permet de prendre soin à la fois des personnes accompagnées et des professionnels.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Tout comportement est une communication — chercher ce que la personne exprime",
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
            explication: "Tout comportement, aussi difficile soit-il à vivre pour l'entourage, constitue une forme de communication. La personne exprime quelque chose. Cette perspective est fondamentale — elle oriente vers la compréhension plutôt que vers la gestion ou la suppression du comportement."
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
            explication: "'Robert est agressif' n'est pas une description comportementale utile — c'est une interprétation. 'Robert frappe la table avec son poing, crie, et repousse les professionnels qui s'approchent' permet à toute l'équipe de parler de la même chose et de travailler ensemble."
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
            explication: "Si une personne obtient systématiquement la fin d'une activité pénible en se comportant de manière agressive, elle a toutes les raisons de répéter ce comportement. La conséquence peut donc involontairement renforcer le comportement — il faut l'analyser pour ne pas reproduire ce schéma."
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
            explication: "Le débriefing d'équipe est une nécessité professionnelle — pas un luxe. Il permet de prendre soin des professionnels (exprimer ce qu'on a vécu), d'améliorer la compréhension de la situation (observations A-B-C), et de préparer des réponses plus cohérentes. Sans cet espace, les équipes s'épuisent."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
