import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module2Curatelle({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Curatelles et protection de l'adulte"
        titre="Ce que vit la personne"
        titrePart2="la mesure de protection au quotidien"
        sousTitre="Les impacts concrets d'une curatelle sur la vie quotidienne, l'identité et l'autonomie de la personne accompagnée — pour mieux y répondre."
        duree="35 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Comprendre ce que vit la personne">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre ce que signifie concrètement apprendre qu'on est sous curatelle",
              "Identifier les impacts d'une curatelle sur la gestion de l'argent et les droits conservés",
              "Reconnaître les enjeux émotionnels et identitaires liés à la mesure",
              "Expliquer les droits de recours de la personne protégée",
              "Situer le PAFA dans le dispositif de protection et ses garanties fondamentales",
            ]} />
          </ConceptBox>
          <Texte>Comprendre le cadre légal, c'est indispensable. Mais ce qui compte le plus dans votre pratique quotidienne, c'est de comprendre ce que vit concrètement la personne que vous accompagnez lorsqu'une mesure de protection est en place.</Texte>
          <Texte>Une curatelle n'est pas un événement neutre. Elle touche à des dimensions fondamentales de la vie : la liberté de décider, la relation à l'argent, le sentiment de compétence et d'autonomie, le regard des autres, la confiance en soi. Pour certaines personnes, l'annonce est vécue comme un soulagement. Pour d'autres, c'est une épreuve douloureuse. Ce module vous invite à vous mettre à la place de la personne accompagnée, pour mieux comprendre ce qu'elle traverse — et mieux y répondre.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="L'annonce de la mesure : un moment charnière">
          <Texte>Imaginez qu'on vous annonce qu'à partir d'aujourd'hui, une autre personne devra cosigner vos décisions financières, ou que quelqu'un d'autre gérera votre argent à votre place. Même si cette décision vise à vous protéger, même si elle est prise avec bienveillance, elle porte un message difficile à entendre : "Tu n'es plus tout à fait capable de te gérer seul."</Texte>

          <TableauComparaison
            titre="Deux vécus possibles face à l'annonce"
            colonnes={[
              {
                titre: "Le soulagement",
                contenu: [
                  "La personne se sentait dépassée par des responsabilités trop lourdes",
                  "Elle vivait dans l'angoisse des fins de mois, des dettes, des décisions",
                  "La mesure est accueillie comme une aide attendue",
                  "Elle dit : « Enfin, je n'aurai plus à gérer tout ça seul·e »",
                ],
              },
              {
                titre: "La douleur",
                contenu: [
                  "La mesure est vécue comme une confirmation de sa « différence »",
                  "Sentiment de perte de contrôle sur sa propre vie",
                  "Humiliation possible, honte, révolte",
                  "Elle dit : « On m'a enlevé mon droit de décider »",
                ],
              },
            ]}
          />

          <HighlightBox label="Le rôle de l'équipe dans ce moment" couleur="bleu">
            <Texte>En tant que professionnel de terrain, vous n'êtes généralement pas celui qui annonce la mesure — c'est le rôle de l'APEA. Mais vous êtes souvent présent dans les jours et semaines qui suivent, quand la personne digère l'information, pose des questions, exprime des émotions.</Texte>
            <Texte>Votre rôle dans ce moment est précieux : être un espace de parole, permettre à la personne d'exprimer ce qu'elle ressent sans minimiser ni dramatiser. L'aider à comprendre concrètement ce que change et ne change pas la mesure dans son quotidien, avec des mots simples, des exemples concrets, des supports adaptés si nécessaire.</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Fil rouge — Nadia</p>
              <p className="text-gray-700 text-sm leading-relaxed">Nadia a appris la décision lors d'une séance à l'APEA. Une curatelle de représentation portant sur la gestion de ses finances a été instaurée. Un curateur professionnel a été désigné. Elle est rentrée au foyer silencieuse, visiblement perturbée. C'est <strong>Fabrice</strong>, son éducateur référent, qui a passé la soirée avec elle. Il ne cherche pas à "expliquer" la mesure. Il est là. Il écoute. Il lui pose des questions simples : "Est-ce qu'il y a des choses que tu n'as pas comprises aujourd'hui ?" "Est-ce qu'il y a quelque chose qui t'inquiète en particulier ?"</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les impacts concrets dans la vie quotidienne">
          <Texte>Pour Nadia, comme pour de nombreuses personnes sous curatelle de représentation financière, le changement le plus immédiat concerne l'argent. Son curateur gère désormais ses prestations AI et son salaire d'atelier. Il verse à Nadia un montant hebdomadaire pour ses dépenses courantes. Il paie directement le loyer, les assurances, les factures régulières.</Texte>
          <Texte>Sur le papier, cela peut sembler simple. Dans la réalité du quotidien, c'est une transformation profonde. Nadia ne voit plus son compte en banque. Elle doit demander à son curateur si elle veut faire un achat un peu plus important. Pour certaines personnes, cette prise en charge est vécue positivement. Pour Nadia, c'est d'abord une sensation d'infantilisation, un sentiment de perte de contrôle.</Texte>

          <HighlightBox label="Ce que vous devez savoir : les droits qui restent" couleur="vert">
            <Texte>L'une des confusions les plus fréquentes — chez les personnes concernées, chez les familles, et parfois chez les professionnels eux-mêmes — est de croire qu'une curatelle retire à la personne l'ensemble de ses droits. C'est faux.</Texte>
            <Liste items={[
              "La gestion quotidienne de l'argent de poche reste dans les mains de la personne — le curateur ne contrôle pas chaque achat",
              "Les « affaires mineures du quotidien » sont protégées par la loi, même sous curatelle de portée générale",
              "Les droits strictement personnels (religion, relations, loisirs, soins médicaux) appartiennent à la personne si elle a le discernement",
              "La personne reste actrice de sa propre vie — le curateur est un partenaire, pas un remplaçant",
            ]} />
          </HighlightBox>

          <ConceptBox label="La relation avec le curateur" titre="Entre aide et tension">
            <Texte>La loi (art. 405 CC) oblige le curateur à établir une <strong>relation de confiance</strong>, à consulter la personne sur ses décisions, et à respecter son autonomie autant que possible. Dans la réalité, cette relation prend des formes très variées.</Texte>
            <Texte>Pour Nadia, les premières semaines sont tendues. Son curateur professionnel gère de nombreux dossiers, la contacte principalement par courrier, et répond à ses appels avec un délai parfois frustrant. Nadia vient régulièrement voir Fabrice pour lui demander d'expliquer un courrier, de l'aider à formuler une demande, de médiatiser une difficulté. Ce rôle de soutien dans la relation avec le curateur est l'une de vos responsabilités professionnelles les plus concrètes.</Texte>
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les émotions et l'identité : ce qui se joue en profondeur">
          <HighlightBox label="La question du regard des autres" couleur="jaune">
            <Texte>Pour Nadia, l'un des aspects les plus difficiles à vivre est le regard des autres résidents du foyer. Certains savent qu'elle est sous curatelle. L'un d'eux lui a dit un jour, sans malveillance mais avec maladresse : "Toi, tu n'as pas le droit de gérer ton argent tout seul." Cette phrase a résonné longtemps.</Texte>
            <Texte>La curatelle peut devenir une étiquette — un marqueur de différence dans un lieu où les personnes accompagnées ont déjà souvent l'impression d'être différentes de "la norme". La façon dont vous parlez de la curatelle — avec neutralité, sans la présenter comme une "sanction" ou une "preuve d'incapacité" — influence la façon dont la personne et ses pairs la perçoivent.</Texte>
          </HighlightBox>

          <Texte>Beaucoup de personnes sous curatelle ressentent de la honte, au moins dans un premier temps. Honte de ne pas "savoir gérer", honte d'avoir besoin d'aide pour des choses que les autres font seuls. Cette honte est compréhensible, mais elle n'est pas inévitable. Elle peut évoluer avec le temps, avec un bon accompagnement, et avec une compréhension progressive de ce que la mesure apporte réellement.</Texte>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Fil rouge — Nadia, quelques mois plus tard</p>
              <p className="text-gray-700 text-sm leading-relaxed">Plusieurs mois après le début de la curatelle, Nadia commence à parler différemment de sa situation. Elle dit : "Maintenant j'ai de l'argent jusqu'à la fin de la semaine. Avant, j'avais tout dépensé le mardi." Cette phrase est le signe qu'elle commence à percevoir la mesure comme un outil au service de sa qualité de vie, et non plus uniquement comme une restriction.</p>
            </div>
          </div>

          <HighlightBox label="Le droit d'être entendu et de contester" couleur="bleu">
            <Texte>Il est essentiel que les personnes accompagnées sachent qu'elles ne sont pas sans recours face au système de protection. La loi prévoit des droits importants :</Texte>
            <Liste items={[
              "Saisir l'APEA en cas de désaccord avec une décision du curateur (art. 419 CC)",
              "Demander le remplacement du curateur si la relation de confiance est rompue",
              "Demander la levée ou la réduction de la curatelle si la situation s'est améliorée",
              "Délai de recours : 30 jours pour les décisions ordinaires de l'APEA",
            ]} />
            <Texte>En tant que professionnel, vous pouvez aider la personne à connaître ces droits et à les exercer : l'accompagner dans la rédaction d'une lettre, l'aider à préparer un entretien, ou l'orienter vers Pro Infirmis ou un service juridique si nécessaire.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Le placement à des fins d'assistance (PAFA) : la mesure de dernière extrémité">
          <Texte>Le Placement à des fins d'assistance (PAFA, ou PLA selon les cantons) est la mesure la plus restrictive du dispositif. Elle consiste à placer une personne dans une institution — hôpital psychiatrique, EMS ou autre structure adaptée — <strong>contre son gré</strong>.</Texte>

          <ConceptBox label="Conditions légales — art. 426 CC" titre="Trois conditions cumulatives sont requises">
            <Liste items={[
              "La présence de troubles psychiques, d'une déficience mentale, ou d'un grave état d'abandon",
              "L'insuffisance de toute aide ambulatoire pour protéger la personne",
              "Un risque sérieux pour la personne elle-même",
            ]} />
          </ConceptBox>

          <HighlightBox label="Qui peut ordonner un PAFA ?" couleur="jaune">
            <Liste items={[
              "L'APEA (pour une durée illimitée, avec révision régulière)",
              "Un médecin désigné par le canton, pour une durée maximale de 6 semaines en situation d'urgence",
              "En cas d'urgence : l'APEA peut agir sans entendre les parties, avec une possibilité de prise de position ultérieure",
            ]} />
          </HighlightBox>

          <HighlightBox label="Les droits de la personne placée" couleur="vert">
            <Texte>Même dans cette situation extrême, la loi protège la personne :</Texte>
            <Liste items={[
              "Droit d'être entendue avant toute décision",
              "Droit de désigner une personne de confiance (art. 432 CC) pour l'accompagner dans la procédure",
              "Délai de recours de 10 jours — et le recours n'a pas besoin d'être motivé pour être recevable",
              "L'APEA doit vérifier régulièrement la proportionnalité du maintien du placement",
              "Toute personne placée peut demander sa libération en tout temps",
            ]} />
            <Texte>Dans votre pratique, vous pouvez être appelé à jouer ce rôle de personne de confiance, ou à aider la personne à identifier quelqu'un qui pourrait l'assumer.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "L'annonce d'une curatelle est un moment charnière qui demande présence et écoute, pas d'abord des explications",
              "Une curatelle ne retire pas l'ensemble des droits : les droits strictement personnels et la gestion du quotidien restent à la personne",
              "La honte et l'infantilisation sont des risques réels — la façon dont vous nommez la mesure compte",
              "La personne sous curatelle a des droits de recours effectifs : les connaître et l'y aider est votre rôle",
              "Le PAFA est une mesure de dernière extrémité, entourée de garanties importantes, mais que vous pouvez rencontrer dans votre pratique",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Une personne sous curatelle de portée générale peut-elle décider seule de ses activités de loisirs ?",
            reponses: [
              "Non, le curateur décide de tout",
              "Oui, si elle a le discernement pour ces actes — ce sont des droits strictement personnels",
              "Seulement avec l'accord de l'institution",
              "Non, elle doit toujours demander l'autorisation de son curateur",
            ],
            bonneReponse: 1,
            explication: "Même sous curatelle de portée générale, les droits strictement personnels (art. 19c CC) restent à la personne si elle a le discernement pour les exercer. Le curateur ne peut pas décider à sa place pour les activités de loisirs, les relations amicales ou amoureuses, les choix du quotidien.",
          },
          {
            question: "Quelle est la durée maximale d'un placement à des fins d'assistance ordonné par un médecin ?",
            reponses: [
              "72 heures",
              "2 semaines",
              "6 semaines",
              "3 mois",
            ],
            bonneReponse: 2,
            explication: "Les cantons peuvent désigner des médecins habilités à ordonner un PAFA d'urgence pour une durée maximale de 6 semaines (art. 426 CC). Au-delà, c'est l'APEA qui est compétente.",
          },
          {
            question: "Que signifie que le curateur doit « établir une relation de confiance » avec la personne protégée ?",
            reponses: [
              "Le curateur doit devenir l'ami de la personne",
              "Le curateur a l'obligation légale de consulter la personne et de respecter son autonomie autant que possible",
              "La personne doit accepter toutes les décisions du curateur sans les questionner",
              "L'institution doit garantir que la personne est satisfaite de son curateur",
            ],
            bonneReponse: 1,
            explication: "L'article 405 CC impose au curateur une obligation légale de relation de confiance : il doit prendre contact personnellement avec la personne, tenir compte de son avis, respecter son droit à l'autonomie, et n'ouvrir son courrier ou pénétrer dans son logement qu'avec son consentement ou l'autorisation de l'APEA.",
          },
          {
            question: "Quel est le délai de recours contre une décision ordinaire de l'APEA ?",
            reponses: [
              "10 jours",
              "20 jours",
              "30 jours",
              "60 jours",
            ],
            bonneReponse: 2,
            explication: "Le délai de recours est de 30 jours pour les décisions ordinaires de l'APEA. Pour les placements à des fins d'assistance (PAFA), le délai est plus court : 10 jours. Particularité importante : le recours contre un PAFA n'a pas besoin d'être motivé pour être recevable.",
          },
          {
            question: "Une personne sous curatelle peut-elle demander le remplacement de son curateur ?",
            reponses: [
              "Non, seule la famille peut demander un changement",
              "Non, seule l'APEA peut décider de changer de curateur",
              "Oui, elle peut saisir l'APEA pour demander un changement si la relation de confiance est rompue",
              "Oui, mais uniquement après 2 ans de curatelle",
            ],
            bonneReponse: 2,
            explication: "La personne protégée peut saisir l'APEA à tout moment pour contester les actes ou omissions de son curateur (art. 419 CC), demander son remplacement si la relation de confiance est rompue, ou demander une révision de sa curatelle. Ces droits de recours sont effectifs et ne sont pas conditionnés à une durée minimale.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
