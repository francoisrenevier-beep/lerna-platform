import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module1Curatelle({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Curatelles et protection de l'adulte"
        titre="Le cadre légal"
        titrePart2="comprendre pour ne plus subir"
        sousTitre="Les principes fondateurs du droit suisse de la protection de l'adulte, les acteurs clés et les quatre types de curatelles : ce que tout professionnel du social doit savoir."
        duree="35 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="Nadia : le début de son histoire">
          <HighlightBox label="Notre fil rouge narratif" couleur="bleu">
            <Texte>Tout au long de cette formation, nous allons suivre <strong>Nadia</strong>, 34 ans, qui vit dans un foyer de vie depuis 5 ans. Accompagnée pour une déficience intellectuelle légère, elle travaille deux jours par semaine dans un atelier protégé. Elle a de bonnes relations avec l'équipe, mais peine à gérer son argent : elle dépense tout en début de mois, se retrouve sans rien à mi-mois, et a contracté plusieurs petites dettes auprès de collègues et de proches.</Texte>
            <Texte>Sa famille est peu présente. Après une période d'accompagnement renforcé insuffisante, l'institution a signalé la situation à l'APEA. Une mesure de curatelle est en cours. Au fil des trois modules, nous verrons ce que cela change, pour Nadia, et pour l'équipe qui l'accompagne.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Ces mots qui circulent sans qu'on les comprenne vraiment">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Expliquer les trois principes fondamentaux du droit suisse de la protection de l'adulte et leur logique concrète",
              "Identifier le rôle de l'APEA et comprendre comment elle prend ses décisions",
              "Expliquer la capacité de discernement et son caractère relatif",
              "Nommer les alternatives à la curatelle et la logique de subsidiarité",
              "Distinguer les quatre types de curatelles et leurs effets sur les droits civils",
            ]} />
          </ConceptBox>
          <Texte>Dans votre quotidien professionnel, vous entendez régulièrement des termes comme "curatelle", "APEA", "curateur", "mandat pour cause d'inaptitude". Ces mots circulent dans les réunions, apparaissent dans les dossiers, reviennent dans les discussions avec les familles. Et pourtant, ils restent souvent flous, sources de malentendus, parfois même d'inquiétude pour les personnes accompagnées.</Texte>
          <Texte>Ce premier module a un objectif simple : démystifier ce cadre légal. Non pas pour vous transformer en juriste, mais pour que vous compreniez la logique qui le gouverne, les acteurs qui y jouent un rôle, et les outils qu'il met à disposition. Cette compréhension est indispensable pour accompagner dignement une personne sous mesure de protection.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Une révolution silencieuse : le nouveau droit de la protection de l'adulte">
          <HighlightBox label="Avant 2013 : le régime de la tutelle" couleur="jaune">
            <Texte>Pendant des décennies, le droit suisse fonctionnait selon un système de tutelle hérité du XIXe siècle. Ce système était fondé sur une logique d'incapacité globale : une personne jugée "faible" se voyait retirer l'ensemble de ses droits civils, confiés à un tuteur qui décidait pour elle dans tous les domaines de sa vie. Cette approche était binaire, capable ou incapable, sans nuances, sans gradation.</Texte>
            <Texte>Pour les personnes en situation de handicap accompagnées en institution, cette logique était souvent vécue comme une mise à l'écart définitive. L'institution, la famille ou l'État décidaient à leur place. Leur parole comptait peu. Leur dignité en prenait un coup sérieux.</Texte>
          </HighlightBox>

          <Texte>L'entrée en vigueur du nouveau droit de la protection de l'adulte, intégré au Code civil suisse (CC) le <strong>1er janvier 2013</strong>, a marqué une rupture fondamentale. La logique a changé du tout au tout : on n'est plus dans une logique de remplacement de la personne, mais dans une logique de <strong>soutien ciblé et proportionné</strong>.</Texte>
          <Texte>La question n'est plus "cette personne est-elle capable ou incapable ?" mais "dans quels domaines précis a-t-elle besoin d'aide, et quelle forme d'aide est la moins restrictive possible pour sa liberté ?"</Texte>

          <SchemaEtapes
            titre="Les trois principes fondateurs"
            etapes={[
              {
                niveau: "1er principe",
                nom: "La subsidiarité",
                definition: "L'État intervient en dernier recours. Avant qu'une curatelle soit instaurée, la loi exige que l'on vérifie si la personne peut s'en sortir avec le soutien de ses proches, de sa famille, ou des services sociaux existants. En tant que professionnel, votre accompagnement quotidien peut parfois suffire à éviter une mesure formelle.",
              },
              {
                niveau: "2e principe",
                nom: "La proportionnalité",
                definition: "Toute restriction imposée à une personne doit être la moins importante possible. Si une personne a besoin d'aide uniquement pour gérer son argent, la mesure se limite à cela. Ce principe est une protection fondamentale de la dignité : il serait disproportionné de retirer également le droit de décider où l'on vit ou avec qui on passe son temps.",
              },
              {
                niveau: "3e principe",
                nom: "La complémentarité",
                definition: "La mesure doit compléter les capacités de la personne, pas les remplacer. L'État « ajoute » là où il manque quelque chose ; il ne supprime pas ce qui fonctionne encore. Une personne qui gère bien son quotidien mais qui a du mal avec un bailleur reçoit une aide ciblée pour ce domaine spécifique.",
              },
            ]}
            note="Ces trois principes forment un tout cohérent : ils garantissent que la protection reste au service de la personne, et non l'inverse."
          />
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="L'APEA : qui est cette autorité et comment fonctionne-t-elle ?">
          <ConceptBox label="Définition" titre="L'Autorité de Protection de l'Enfant et de l'Adulte (APEA)">
            <Texte>L'APEA est l'instance officielle chargée d'ordonner et de superviser les mesures de protection en Suisse. Elle est organisée au niveau cantonal. En Suisse romande, vous pouvez rencontrer des noms différents selon le canton : <strong>Tribunal de protection de l'adulte et de l'enfant (TPAE)</strong> à Genève, <strong>Justice de paix</strong> dans le canton de Vaud. La logique et les compétences restent les mêmes, même si les appellations varient.</Texte>
          </ConceptBox>

          <HighlightBox label="La maxime d'office" couleur="bleu">
            <Texte>L'APEA fonctionne selon la <strong>maxime d'office</strong> : elle ne se contente pas d'examiner ce que les parties lui soumettent. Elle est tenue de rechercher elle-même les faits, de consulter les personnes concernées, et de s'assurer que la mesure qu'elle ordonne est réellement proportionnée à la situation.</Texte>
            <Texte>Concrètement, avant d'instaurer une curatelle, l'APEA doit entendre la personne concernée, consulter les proches, les professionnels de santé, et parfois les travailleurs sociaux de l'institution. Votre regard de terrain est précieux et peut influencer la nature de la mesure ordonnée.</Texte>
          </HighlightBox>

          <HighlightBox label="Qui peut saisir l'APEA ?" couleur="vert">
            <Texte>Toute personne peut signaler une situation préoccupante à l'APEA : un proche, un médecin, un travailleur social, un professionnel d'institution, et même la personne elle-même. L'APEA peut également s'autosaisir.</Texte>
            <Texte>En tant que professionnel d'une institution, vous pouvez être amené à signaler une situation à l'APEA si vous estimez qu'une personne accompagnée a besoin d'une protection qu'elle ne peut pas obtenir autrement. Ce geste n'est pas une trahison : c'est une responsabilité professionnelle qui s'exerce avec discernement, en impliquant si possible la personne et votre hiérarchie.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="La capacité de discernement : le concept clé que tout le monde doit comprendre">
          <Texte>La capacité de discernement est la notion juridique et clinique autour de laquelle tourne l'ensemble du droit de la protection de l'adulte. L'<strong>article 16 du Code civil suisse</strong> la définit comme la faculté d'agir raisonnablement, ce qui suppose deux choses : que la personne comprend la portée de l'acte qu'elle s'apprête à accomplir, et qu'elle est capable d'agir selon sa propre volonté et non sous l'effet d'une pression ou d'une confusion.</Texte>

          <TableauComparaison
            titre="Deux composantes du discernement"
            colonnes={[
              {
                titre: "La conscience (composante intellectuelle)",
                contenu: [
                  "Comprendre le sens et la portée d'un acte",
                  "Mesurer les conséquences de sa décision",
                  "Exemple : comprendre qu'un crédit engage un remboursement sur 10 ans",
                ],
              },
              {
                titre: "La volonté (composante caractérielle)",
                contenu: [
                  "Agir selon sa propre compréhension",
                  "Résister aux pressions extérieures",
                  "Se comporter conformément à son propre jugement",
                ],
              },
            ]}
          />

          <HighlightBox label="Le caractère relatif du discernement" couleur="jaune">
            <Texte>Le discernement n'est pas une propriété globale et permanente. Il s'évalue toujours <strong>par rapport à un acte concret</strong> dans un moment précis. Une personne peut avoir le discernement pour ses achats quotidiens et ne pas l'avoir pour un engagement financier complexe.</Texte>
            <Texte>Le discernement n'est pas synonyme d'intelligence. Une personne avec une déficience intellectuelle légère peut parfaitement avoir la capacité de discernement pour de nombreux actes de sa vie quotidienne : choisir ses activités, exprimer une préférence médicale, décider de ses relations. La présence d'une curatelle ne signifie pas que la personne ne sait rien et ne peut rien décider.</Texte>
          </HighlightBox>

          <ConceptBox label="Causes légales d'altération" titre="Ce que la loi identifie comme pouvant altérer le discernement">
            <Liste items={[
              "La déficience mentale",
              "Les troubles psychiques (y compris les dépendances)",
              "La démence et les pathologies liées à l'âge",
              "L'ivresse ou états semblables (causes passagères)",
              "Tout autre état de faiblesse affectant la condition personnelle, formulation volontairement large",
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Avant la curatelle : les outils d'autodétermination et la solidarité familiale">
          <Texte>Le droit suisse de la protection de l'adulte est organisé comme un escalier. On ne monte une marche que si la précédente est insuffisante. Avant qu'une curatelle soit ordonnée par l'APEA, deux niveaux doivent être épuisés : les outils d'autodétermination, puis la solidarité familiale.</Texte>

          <SchemaEtapes
            titre="La cascade d'interventions prioritaires"
            etapes={[
              {
                niveau: "1re marche",
                nom: "Les outils d'autodétermination",
                definition: "Le mandat pour cause d'inaptitude (art. 360 CC) et les directives anticipées du patient (art. 370 CC). Une personne peut désigner elle-même qui gérera ses affaires si elle devient incapable, avant que l'État n'intervienne.",
              },
              {
                niveau: "2e marche",
                nom: "La solidarité familiale automatique",
                definition: "En l'absence de mandat, le conjoint ou partenaire vivant en ménage commun dispose d'un pouvoir automatique pour les actes courants (art. 374 CC). Pour les décisions médicales, une cascade de proches est définie par la loi (art. 378 CC).",
              },
              {
                niveau: "3e marche",
                nom: "L'intervention de l'APEA",
                definition: "Ce n'est que lorsque les deux premières marches sont absentes ou insuffisantes que l'APEA intervient avec une mesure de curatelle. Une curatelle n'est pas un événement anodin : elle signifie que les deux premières marches n'ont pas suffi.",
              },
            ]}
            note="Dans votre pratique, vous pouvez être amené à soutenir une personne dans la rédaction d'un mandat pour cause d'inaptitude, en l'orientant vers un service juridique ou Pro Infirmis."
          />

          <HighlightBox label="Le mandat pour cause d'inaptitude (art. 360 CC)" couleur="bleu">
            <Liste items={[
              "Permet de désigner une personne ou institution pour gérer ses affaires en cas d'incapacité",
              "Couvre trois domaines : assistance personnelle, gestion du patrimoine, représentation juridique",
              "Doit être entièrement écrit à la main, daté et signé (forme olographe) ou établi devant notaire",
              "Son existence peut être enregistrée auprès de l'état civil pour être retrouvé facilement",
              "Risque : le mandataire n'est pas tenu d'accepter et peut résilier moyennant 2 mois de préavis",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Les quatre types de curatelles : un outil modulaire">
          <Texte>L'un des apports les plus importants de la réforme de 2013 est la création d'un système modulaire de curatelles. L'APEA ne choisit plus entre "tout" et "rien" : elle dispose de quatre types qu'elle peut combiner, adapter et réviser en fonction de l'évolution de la situation. Pensez-y comme à un outil de précision chirurgicale : on n'opère que la partie du corps qui en a besoin, pas tout l'organisme.</Texte>

          <TableauComparaison
            titre="Les quatre types de curatelles : vue d'ensemble"
            colonnes={[
              {
                titre: "Type et article",
                contenu: [
                  "Accompagnement, art. 393 CC",
                  "Représentation, art. 394 CC",
                  "Coopération, art. 396 CC",
                  "Portée générale, art. 398 CC",
                ],
              },
              {
                titre: "Effet sur les droits civils",
                contenu: [
                  "Aucune restriction : droits maintenus intégralement",
                  "Variable : maintenus ou limités selon décision APEA",
                  "Limités pour les actes désignés",
                  "Retirés de plein droit",
                ],
              },
            ]}
          />

          <ConceptBox label="Curatelle d'accompagnement, art. 393 CC" titre="La mesure la plus légère">
            <Texte>C'est la mesure qui respecte le plus l'autonomie de la personne. Elle n'entraîne <strong>aucune restriction des droits civils</strong>. Le curateur joue un rôle de conseiller et d'assistant : il ne peut pas prendre de décisions à la place de la personne. Il intervient uniquement si la personne le demande ou y consent.</Texte>
            <Texte>Dans le contexte d'une ESE : cette mesure peut concerner une personne qui gère globalement bien sa vie mais qui a besoin d'un soutien ponctuel pour des démarches administratives complexes (litiges avec un bailleur, renouvellement de permis, démarches d'assurance).</Texte>
          </ConceptBox>

          <ConceptBox label="Curatelle de représentation, art. 394 CC" titre="Le curateur agit au nom de la personne">
            <Texte>Cette curatelle est instaurée lorsqu'une personne ne peut pas accomplir seule certains actes. Le curateur agit alors en son nom, dans les domaines confiés par l'APEA. L'APEA décide si la personne conserve ou non le droit d'agir elle-même dans ces domaines : <strong>représentation concurrente</strong> (les deux peuvent agir) ou <strong>représentation exclusive</strong> (seul le curateur agit).</Texte>
            <Texte>Lorsqu'elle porte sur la gestion du patrimoine (art. 395 CC), des règles strictes s'appliquent : inventaire des biens, gestion prudente, reddition de comptes à l'APEA.</Texte>
          </ConceptBox>

          <ConceptBox label="Curatelle de coopération, art. 396 CC" titre="La double signature obligatoire">
            <Texte>Ce type de curatelle s'applique lorsqu'une personne risque d'accomplir des actes contraires à ses propres intérêts, signer des contrats imprudents, se laisser exploiter financièrement. La signature du curateur est <strong>obligatoire en plus de celle de la personne</strong>. Sans cette double validation, l'acte est juridiquement invalide.</Texte>
            <Texte>Exemple concret : une personne facile à influencer qui a tendance à signer des documents sans les comprendre. Une curatelle de coopération peut couvrir tous les engagements financiers dépassant un certain montant, sans retirer à cette personne le droit de gérer son argent au quotidien.</Texte>
          </ConceptBox>

          <ConceptBox label="Curatelle de portée générale, art. 398 CC" titre="La mesure la plus restrictive">
            <Texte>Elle s'applique dans les situations où une personne a besoin d'aide dans tous les domaines de sa vie, généralement en raison d'une incapacité durable et profonde de discernement (démence sévère, handicap mental lourd). Elle entraîne le <strong>retrait de plein droit</strong> de l'exercice des droits civils. Le curateur devient représentant légal universel.</Texte>
            <Texte>C'est l'équivalent de l'ancienne tutelle, mais avec des garanties supplémentaires : la mesure doit être régulièrement révisée et levée dès que la situation s'améliore. Et même sous cette mesure, certains droits strictement personnels restent intacts si la personne a le discernement pour les exercer.</Texte>
          </ConceptBox>

          <HighlightBox label="Ce que la curatelle ne retire jamais" couleur="vert">
            <Texte>Même sous curatelle de portée générale, les <strong>droits strictement personnels (art. 19c CC)</strong> ne peuvent pas être exercés par un représentant si la personne a le discernement pour le faire elle-même : décider de sa religion, de ses relations amicales et amoureuses, de ses activités de loisirs, consentir à des soins médicaux.</Texte>
            <Texte>En tant que professionnel, vous êtes souvent le gardien de ces droits dans le quotidien. C'est vous qui dites : "Nadia, c'est toi qui décides si tu veux participer à cette sortie, pas ton curateur."</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Depuis 2013, le droit suisse a remplacé la tutelle par un système flexible : la curatelle en 4 formes combinables",
              "Trois principes fondateurs guident chaque décision de l'APEA : subsidiarité, proportionnalité, complémentarité",
              "La capacité de discernement est relative à un acte concret, pas une propriété globale de la personne",
              "Avant toute curatelle, deux marches doivent être épuisées : outils d'autodétermination, puis solidarité familiale",
              "La curatelle ne retire jamais les droits strictement personnels si la personne a le discernement pour les exercer",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Lequel de ces principes signifie que l'État ne doit intervenir qu'en dernier recours ?",
            reponses: [
              "La proportionnalité",
              "La complémentarité",
              "La subsidiarité",
              "La réciprocité",
            ],
            bonneReponse: 2,
            explication: "La subsidiarité impose que les ressources privées (famille, entourage, services sociaux) soient épuisées avant toute intervention de l'APEA. L'État est l'ultime rempart, pas le premier réflexe.",
          },
          {
            question: "La capacité de discernement est-elle une propriété globale et permanente d'une personne ?",
            reponses: [
              "Oui, une personne est soit capable, soit incapable de discernement",
              "Non, elle s'évalue par rapport à un acte concret et peut varier",
              "Oui, elle est évaluée une fois pour toutes par un médecin",
              "Non, mais uniquement pour les personnes avec déficience intellectuelle",
            ],
            bonneReponse: 1,
            explication: "Le discernement est relatif à l'acte : une personne peut avoir le discernement pour ses achats quotidiens et ne pas l'avoir pour un engagement financier complexe. Ce caractère relatif est fondamental pour ne pas sur-protéger des personnes qui ont encore des capacités de décision.",
          },
          {
            question: "Dans la curatelle d'accompagnement (art. 393 CC), que peut faire le curateur ?",
            reponses: [
              "Gérer les finances à la place de la personne",
              "Cosigner les actes importants",
              "Conseiller et assister si la personne y consent",
              "Représenter légalement la personne dans tous les domaines",
            ],
            bonneReponse: 2,
            explication: "La curatelle d'accompagnement est la mesure la moins invasive. Le curateur n'a aucun pouvoir de représentation ou d'administration. Il intervient uniquement à la demande ou avec le consentement de la personne. Les droits civils sont maintenus intégralement.",
          },
          {
            question: "Quel type de curatelle entraîne le retrait de plein droit de l'exercice des droits civils ?",
            reponses: [
              "La curatelle d'accompagnement",
              "La curatelle de coopération",
              "La curatelle de représentation",
              "La curatelle de portée générale",
            ],
            bonneReponse: 3,
            explication: "La curatelle de portée générale (art. 398 CC) est la mesure la plus restrictive. Elle couvre tous les domaines et prive la personne de l'exercice des droits civils. Elle correspond à l'ancienne tutelle, mais avec des garanties de révision régulière.",
          },
          {
            question: "Que doit vérifier l'APEA avant d'instaurer une curatelle ?",
            reponses: [
              "Uniquement l'état de santé de la personne",
              "Si des mesures d'autodétermination ou de solidarité familiale peuvent suffire",
              "Si l'institution est d'accord avec la mesure",
              "Si la personne a plus de 18 ans et est domiciliée en Suisse",
            ],
            bonneReponse: 1,
            explication: "En vertu du principe de subsidiarité, l'APEA doit s'assurer que les deux premières marches de la cascade d'intervention sont insuffisantes avant d'ordonner une curatelle : l'autodétermination (mandat pour cause d'inaptitude, directives anticipées) et la solidarité familiale (représentation automatique par le conjoint ou les proches).",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
