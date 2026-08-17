import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4GestionProjetAvance({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Gestion de projet : Niveau Avancé"
        titre="Conduire le changement"
        titrePart2="et accompagner les résistances"
        sousTitre="On ne décrète pas un changement : on l'accompagne. Une transformation, aussi bien pensée soit-elle, ne se réalise que si des personnes acceptent de modifier leur manière de travailler, et cette acceptation ne s'obtient pas par la contrainte."
        duree="≈ 25-30 minutes"
        niveau="Avancé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Embarquer les équipes plutôt que d'imposer">
          <Texte>Le module 1 l'a posé : une transformation touche aux habitudes, aux repères, parfois à l'identité professionnelle des personnes. C'est ce qui la distingue radicalement d'un projet technique, et ce qui explique une vérité que tout pilote finit par rencontrer : <strong>un changement décrété d'en haut, sans l'adhésion de ceux qui doivent le vivre, ne se réalise pas vraiment</strong>. Il peut s'imposer en surface (les procédures changent, les organigrammes sont redessinés), mais les pratiques réelles, elles, résistent, contournent, reviennent insidieusement à l'état antérieur.</Texte>

          <Texte>La raison est profonde. Une manière de travailler n'est pas un simple ensemble de procédures interchangeables : c'est un équilibre que les professionnels ont construit, qui leur donne des repères, un sentiment de compétence, une identité. Demander à quelqu'un de changer sa façon de travailler, c'est lui demander de renoncer à une part de cet équilibre pour entrer dans un inconnu où il se sentira, au moins temporairement, moins compétent et moins assuré. Vu ainsi, <strong>la résistance au changement n'est pas de la mauvaise volonté : c'est une réaction humaine compréhensible</strong> face à la perte de repères.</Texte>

          <ConceptBox label="Concept clé" titre="Conduire le changement, c'est accompagner un passage, pas imposer un état.">
            <p>Le changement n'est pas un interrupteur qu'on bascule ; c'est une transition que des personnes doivent traverser, avec ce que cela suppose de perte de repères avant l'acquisition de nouveaux. Le rôle du pilote n'est pas de forcer ce passage, mais de le rendre possible et supportable : donner du sens, sécuriser, accompagner le temps de l'adaptation. On accompagne les équipes dans le changement, on ne le fait pas « sur » elles.</p>
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Les leviers de l'adhésion : sens, participation, rythme">
          <Texte>Si la contrainte ne fonctionne pas, qu'est-ce qui fait qu'une équipe s'engage dans un changement ? Trois leviers principaux, qu'un pilote avisé actionne ensemble.</Texte>

          <Texte>Le premier levier est le <strong>sens</strong>. Une personne accepte d'autant mieux de changer qu'elle comprend pourquoi, et qu'elle adhère à ce pourquoi. Un changement dont la raison reste obscure, ou qui semble n'obéir qu'à une logique gestionnaire déconnectée du terrain, suscite légitimement la résistance. À l'inverse, un changement relié à une finalité qui parle aux professionnels (mieux accompagner les personnes, retrouver du sens dans le travail) mobilise. Le premier travail du pilote est donc un travail de sens : expliquer, relier le changement aux valeurs partagées, montrer en quoi il sert ce à quoi les équipes tiennent.</Texte>

          <Texte>Le deuxième levier est la <strong>participation</strong>. On adhère à ce qu'on a contribué à construire ; on résiste à ce qu'on subit. Associer les équipes à la conception du changement (recueillir leur expérience, tenir compte de leurs objections, leur laisser une marge pour façonner la mise en œuvre) transforme leur posture : de destinataires passifs, elles deviennent actrices. Un changement co-construit n'est pas seulement mieux accepté : il est souvent meilleur, parce qu'il intègre la connaissance du terrain que le pilote seul n'a pas.</Texte>

          <Texte>Le troisième levier est le <strong>rythme</strong>. Un changement imposé trop vite ne laisse pas le temps de l'adaptation et provoque le rejet ; un changement trop lent s'enlise et perd son élan. Le bon rythme tient compte de la capacité réelle des personnes à absorber le changement, sans les brusquer ni les épuiser. Il rejoint la logique itérative du module 2 : avancer par étapes assimilables, laisser à chacune le temps de se stabiliser avant la suivante, plutôt que tout bouleverser d'un coup.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à un changement bien accepté dans votre institution, et à un autre qui a échoué ou résisté. En quoi différaient-ils du point de vue de ces trois leviers, le sens était-il clair et partagé, les équipes ont-elles participé à la conception, le rythme était-il tenable ? Le plus souvent, l'échec d'un changement se lit dans l'absence d'un ou plusieurs de ces leviers.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les résistances comme information, non comme obstacle">
          <Texte>Voici le retournement de perspective le plus important de ce module. Face à une résistance, le réflexe spontané du pilote est de la voir comme un obstacle à surmonter, à vaincre, à contourner. Ce réflexe est presque toujours une erreur. <strong>Une résistance est avant tout une information</strong>, et la traiter comme telle change radicalement la manière de piloter.</Texte>

          <Texte>Que nous dit une résistance ? Souvent, l'une de ces choses. Elle peut signaler un <strong>besoin légitime</strong> que le changement néglige : la personne qui résiste défend quelque chose d'important qu'on n'avait pas pris en compte. Elle peut révéler un <strong>effet de bord non anticipé</strong> : celui qui résiste a vu une conséquence problématique que le pilote, à sa hauteur, n'avait pas perçue. Elle peut exprimer une <strong>crainte réelle</strong> qui, si elle n'est pas entendue, minera le changement souterrainement. Dans tous ces cas, la résistance porte un message que le pilote a intérêt à recevoir.</Texte>

          <ConceptBox label="Concept clé" titre="Écouter une résistance avant de chercher à la surmonter.">
            <p>La résistance n'est pas l'ennemi du changement : elle en est souvent le meilleur informateur. Celui qui résiste voit quelque chose (un besoin, un risque, une crainte) que le pilote gagnerait à comprendre. La première réponse à une résistance n'est donc pas de la combattre, mais de l'interroger : qu'est-ce qui s'exprime ici, et qu'est-ce que cela m'apprend ? Cette écoute, loin d'affaiblir le changement, le solidifie, et rallie fréquemment celui qui résistait, parce qu'il se sent entendu.</p>
          </ConceptBox>

          <HighlightBox label="Toutes les résistances ne se valent pas, mais toutes méritent d'être entendues." couleur="bleu">
            <Texte>Écouter une résistance ne signifie pas y céder. Certaines révèlent un vrai problème qu'il faut corriger ; d'autres expriment une crainte qu'il suffit d'accompagner ; d'autres encore traduisent un attachement légitime à un état antérieur qu'il faudra, avec ménagement, aider à dépasser. Le discernement consiste à entendre d'abord, puis à distinguer ce qui demande de modifier le changement de ce qui demande d'accompagner la transition. Mais aucune résistance ne mérite d'être balayée sans avoir été comprise.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="La posture du pilote face aux tensions">
          <Texte>Conduire un changement expose inévitablement à des tensions, entre des personnes, entre des points de vue, entre l'ancien et le nouveau. La manière dont le pilote habite ces tensions détermine largement le climat de la transformation. Quelques traits de posture sont décisifs, et ils relèvent de l'accompagnement, non de la technique managériale.</Texte>

          <Texte>Le premier est la <strong>constance dans le cap, la souplesse dans les moyens</strong>, on retrouve ce principe à chaque niveau du parcours, ici à son échelle la plus exigeante. Le pilote tient fermement la direction et le sens, ce qui rassure dans la tourmente, tout en restant ouvert sur la manière d'y parvenir. Une institution en changement a besoin de sentir que quelqu'un tient le cap ; elle a aussi besoin de sentir que ce quelqu'un écoute.</Texte>

          <Texte>Le deuxième est la <strong>présence dans la durée</strong>. Une transformation se joue dans le temps long, et les équipes ont besoin de sentir que le pilote ne les lâchera pas à mi-chemin, au premier obstacle ou dès que l'attention se portera ailleurs. La constance de la présence est en soi un facteur de sécurité : elle signale que le changement est sérieux et qu'on ne sera pas laissé seul à le porter.</Texte>

          <Texte>Le troisième est l'<strong>exemplarité</strong>. Dans un changement, les équipes observent moins ce que le pilote dit que ce qu'il fait. Un pilote qui demande aux autres de changer sans changer lui-même, ou qui prône une valeur qu'il ne respecte pas dans sa propre manière de conduire, perd toute crédibilité. La cohérence entre le discours et la pratique est, dans la conduite du changement, le socle de la confiance.</Texte>

          <HighlightBox label="La frontière du métier" couleur="bleu">
            <Texte>Conduire le changement relève de l'accompagnement humain : donner du sens, écouter, sécuriser, tenir le cap. Cela ne recouvre pas la gestion technique des ressources humaines (les entretiens formels, les questions statutaires, le cadre juridique du travail) qui relève d'une autre expertise. Quand une situation de changement soulève ces questions, le pilote les oriente vers la compétence RH appropriée, sans chercher à les traiter lui-même. Le pilote accompagne le changement ; il n'est pas le gestionnaire du personnel.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Un changement ne se décrète pas : imposé sans adhésion, il s'installe en surface mais les pratiques réelles résistent. Le changement est un passage que des personnes doivent traverser, pas un état qu'on impose.",
              "La résistance n'est pas de la mauvaise volonté, mais une réaction humaine à la perte de repères. On accompagne les équipes dans le changement, on ne le fait pas « sur » elles.",
              "Trois leviers de l'adhésion : le sens (comprendre et adhérer au pourquoi), la participation (on adhère à ce qu'on a contribué à construire), le rythme (tenable, ni brusque ni enlisé).",
              "Une résistance est d'abord une information : elle signale un besoin négligé, un effet de bord non vu, une crainte réelle. L'écouter avant de la surmonter solidifie le changement et rallie souvent celui qui résistait. Écouter n'est pas céder.",
              "La posture du pilote face aux tensions : constance dans le cap et souplesse dans les moyens, présence dans la durée, exemplarité. Cela relève de l'accompagnement humain, non de la technique RH.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Pourquoi un changement décrété sans adhésion échoue-t-il généralement ?",
              reponses: [
                "Parce que les équipes sont de mauvaise volonté",
                "Parce qu'il s'impose en surface mais que les pratiques réelles résistent : changer sa façon de travailler suppose de renoncer à des repères, ce qui ne se force pas",
                "Parce que les procédures ne changent jamais",
                "Parce qu'il va trop lentement dans sa mise en œuvre",
              ],
              bonneReponse: 1,
              explication: "Une manière de travailler n'est pas un simple ensemble de procédures : c'est un équilibre construit par les professionnels. La résistance au changement n'est pas de la mauvaise volonté, c'est une réaction humaine compréhensible face à la perte de repères. Un changement imposé peut s'installer en surface mais les pratiques réelles reviennent.",
            },
            {
              question: "Quels sont les trois leviers de l'adhésion à un changement ?",
              reponses: [
                "La contrainte, la sanction, le contrôle",
                "Le sens (comprendre le pourquoi), la participation (co-construire), le rythme (tenable)",
                "La vitesse d'exécution, l'autorité hiérarchique, la communication descendante",
                "Le budget alloué, les délais respectés, les indicateurs atteints",
              ],
              bonneReponse: 1,
              explication: "Les trois leviers de l'adhésion sont : le sens (une personne accepte de changer si elle comprend pourquoi et y adhère), la participation (on adhère à ce qu'on a contribué à construire, on résiste à ce qu'on subit), et le rythme (tenable, ni trop brusque ni trop lent).",
            },
            {
              question: "Comment un pilote avisé considère-t-il une résistance au changement ?",
              reponses: [
                "Comme un obstacle à briser ou contourner au plus vite",
                "Comme une information : elle signale souvent un besoin négligé, un effet de bord non vu ou une crainte réelle ; il faut l'écouter avant de chercher à la surmonter",
                "Comme une attaque personnelle à laquelle répondre par l'autorité",
                "Comme un signe qu'il faut abandonner le changement",
              ],
              bonneReponse: 1,
              explication: "La résistance n'est pas l'ennemi du changement : elle en est souvent le meilleur informateur. Écouter n'est pas céder : on entend d'abord, puis on distingue ce qui demande de modifier le changement de ce qui demande d'accompagner la transition.",
            },
            {
              question: "Vrai ou faux : « Conduire le changement inclut la gestion technique des ressources humaines : entretiens formels, questions statutaires, cadre juridique. »",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Faux. Conduire le changement relève de l'accompagnement humain : donner du sens, écouter, sécuriser, tenir le cap. La gestion technique des RH relève d'une autre expertise, vers laquelle le pilote oriente quand la situation le soulève. Le pilote accompagne le changement ; il n'est pas le gestionnaire du personnel.",
            },
          ]}
        />

      </div>
    </div>
  )
}
