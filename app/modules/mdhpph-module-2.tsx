import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import { AccrocheScenario } from "@/components/module/AccrocheScenario"

export function Module2MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="MDH-PPH 2018"
        titre="Les trois dimensions"
        titrePart2="du modèle MDH-PPH"
        sousTitre="Explorer en profondeur les facteurs personnels, l'architecture de l'environnement et les habitudes de vie pour maîtriser les leviers opérationnels du modèle."
        duree="55 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="Lena — l'équipe commence à regarder différemment">
          <HighlightBox label="Où en est Lena ?" couleur="bleu">
            <Texte>Après la formation du module précédent, l'équipe de Lena décide d'appliquer le MDH-PPH. Première étape : regarder Lena autrement. Non plus à travers ses déficiences, mais à travers ses facteurs personnels dans leur globalité, l'environnement qui l'entoure, et ce qu'elle fait réellement au quotidien. Ce module vous donne les outils pour mener cette lecture.</Texte>
          </HighlightBox>
        </SectionModule>

        <AccrocheScenario type="question">
          <p>Vous avez en face de vous le dossier d'une personne accompagnée. On y liste ses diagnostics, ses déficiences, ses traitements. Mais combien de pages décrivent ce qu'elle aime faire, ce qui l'émeut, ce qui lui donne de l'énergie ? Combien de lignes portent sur les obstacles concrets qui l'empêchent de mener la vie qu'elle souhaite ? Ce module vous donne les instruments pour aller au-delà du dossier médical.</p>
        </AccrocheScenario>

        <SectionModule eyebrow="Introduction" titre="Des concepts à l'outil opérationnel">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Distinguer les trois sous-composantes des facteurs personnels et leurs implications pratiques différentes",
              "Analyser l'environnement selon ses trois échelles (micro, méso, macro) et ses deux dimensions (physique / sociale)",
              "Identifier les douze catégories d'habitudes de vie et comprendre le double critère réalisation/satisfaction",
              "Distinguer facilitateurs et obstacles environnementaux et comprendre leur dynamique",
            ]} />
          </ConceptBox>
          <Texte>Comprendre les trois dimensions du MDH-PPH, c'est se doter d'une grille de lecture systématique applicable à n'importe quelle situation d'accompagnement. Chaque dimension est à la fois un objet d'évaluation et un terrain d'action.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Les facteurs personnels en profondeur">
          <Texte>Les facteurs personnels ne se résument pas au dossier médical. C'est l'erreur la plus fréquente dans les institutions. La version 2018 du MDH-PPH distingue trois sous-composantes aux implications très différentes pour la pratique.</Texte>

          <SchemaEtapes
            titre="Les trois sous-composantes des facteurs personnels"
            etapes={[
              { niveau: "Sous-composante 1", nom: "Facteurs identitaires", definition: "Caractéristiques sociodémographiques, économiques et culturelles propres à un individu et à son histoire de vie (âge, sexe, genre, orientation sexuelle, appartenance culturelle, statut économique, histoire de vie). Distinction clé du MDH-PPH 2018 : ces facteurs sont évalués sur un continuum allant de FACILITATEUR à OBSTACLE — un niveau d'éducation élevé peut faciliter la participation, un isolement social peut l'entraver." },
              { niveau: "Sous-composante 2", nom: "Systèmes organiques", definition: "Ensemble de composantes corporelles visant une fonction commune — système nerveux, cardiovasculaire, moteur, digestif, oculaire, auditif — mesurés sur un spectre allant de l'INTÉGRITÉ à la DÉFICIENCE. Ces données sont nécessaires, mais insuffisantes à elles seules pour prédire la participation sociale." },
              { niveau: "Sous-composante 3", nom: "Aptitudes", definition: "La possibilité pour une personne d'accomplir une activité physique ou mentale : marcher, mémoriser, communiquer, s'orienter. Mesurées de la CAPACITÉ SANS LIMITE à l'INCAPACITÉ COMPLÈTE. Une aptitude réduite n'est pas synonyme de situation de handicap — tout dépend de l'interaction avec l'environnement." },
            ]}
            note="Contrairement aux systèmes organiques et aptitudes, les facteurs identitaires peuvent être à la fois facilitateurs ET obstacles — leur impact sur la participation dépend du contexte"
          />

          <HighlightBox label="Un exemple concret" couleur="jaune">
            <Texte>Un résident qui présente des difficultés d'orientation spatiale peut être parfaitement autonome dans un quartier qu'il connaît depuis dix ans, et se retrouver en situation de handicap soudaine si son institution déménage dans un nouveau bâtiment. Son aptitude n'a pas changé d'un iota — mais l'interaction avec l'environnement a radicalement changé.</Texte>
          </HighlightBox>

          <ConceptBox label="Lena — ses facteurs personnels" titre="Ce que l'équipe découvre en creusant">
            <Texte><strong>Systèmes organiques :</strong> trisomie 21 (continuum intégrité → déficience), légère hypersensibilité sensorielle aux bruits forts et odeurs intenses.</Texte>
            <Texte><strong>Aptitudes :</strong> aptitudes langagières réduites, bonnes capacités motrices, mémoire procédurale préservée (elle retrouve facilement les gestes répétés).</Texte>
            <Texte><strong>Facteurs identitaires :</strong> Lena a grandi dans une famille où la cuisine était un rituel central. Elle aime créer, voir les résultats de son travail, être reconnue pour ses productions. Le jardinage lui procure un sentiment de soin. Le chant est lié à des souvenirs familiaux forts. <em>Dimension clé :</em> ses liens familiaux et son statut de membre actif de l'atelier sont des facteurs identitaires <strong>facilitateurs</strong> — ils soutiennent sa participation. Son isolement potentiel hors de l'atelier devient un facteur identitaire <strong>obstacle</strong>.</Texte>
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="L'architecture de l'environnement">
          <Texte>L'environnement est le terrain d'action principal des équipes éducatives et sociales. Dans le cadre du MDH-PPH, il se structure selon deux dimensions et trois échelles de proximité. Cette architecture fournit une grille précieuse pour identifier où agir en priorité.</Texte>

          <SchemaEtapes
            titre="Les trois échelles de l'environnement"
            etapes={[
              { niveau: "Niveau 1 — le plus modifiable", nom: "Micro-environnement", definition: "Le contexte immédiat et personnel : logement, équipe éducative directe, aides techniques, membres de la famille proche. C'est la sphère la plus proche de la personne, celle où les professionnels ont le plus d'impact à court terme." },
              { niveau: "Niveau 2 — inclus / excluant", nom: "Méso-environnement", definition: "Le contexte communautaire : quartier, transports, clubs et associations, commerces, structures de loisirs. C'est le niveau où se jouent la plupart des situations d'inclusion et d'exclusion sociale." },
              { niveau: "Niveau 3 — cadre systémique", nom: "Macro-environnement", definition: "Les dimensions sociétales : politiques sociales, lois, normes culturelles, systèmes économiques. Difficile à modifier à l'échelle individuelle, mais il constitue le cadre dans lequel s'inscrit tout accompagnement." },
            ]}
            note="Chaque niveau peut contenir des facteurs physiques (architecture, technologies, bruit) ou sociaux (attitudes, règles, réseaux de soutien)"
          />

          <ConceptBox label="L'exemple de Paul" titre="Un obstacle méso-environnemental révélateur">
            <Texte>Paul se rend depuis des années à son club de sarbacane. Suite au déménagement du club et à un changement d'horaires de l'équipe, il ne peut plus y aller. Sa déficience neurologique n'a pas bougé. C'est son environnement communautaire (méso) qui a produit une nouvelle situation de handicap. Sans la grille MDH-PPH, cet obstacle resterait invisible — on attribuerait l'agitation de Paul à son handicap.</Texte>
          </ConceptBox>

          <TableauComparaison
            titre="Les deux dimensions à analyser à chaque niveau"
            colonnes={[
              { titre: "Dimension physique", contenu: [
                "Architecture, aides techniques, accessibilité de l'espace de vie",
                "Accessibilité des transports, aménagement du quartier",
                "Normes de construction, politiques d'accessibilité",
              ]},
              { titre: "Dimension sociale", contenu: [
                "Attitudes de l'équipe directe, règles institutionnelles internes",
                "Ouverture des clubs et services, réseaux de soutien communautaires",
                "Lois, normes culturelles, représentations du handicap dans la société",
              ]},
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les habitudes de vie : indicateur central de participation">
          <Texte>Les habitudes de vie constituent la finalité du modèle. Ce sont elles qui permettent de mesurer si une personne vit en situation de participation sociale ou en situation de handicap. La nomenclature 2018 identifie douze catégories précises, réparties en deux grands groupes.</Texte>

          <HighlightBox label="Les douze catégories d'habitudes de vie (nomenclature officielle MDH-PPH 2018)" couleur="bleu">
            <Liste couleur="bleu" items={[
              "6 activités courantes : Communication · Déplacements · Nutrition · Condition physique et bien-être psychologique · Soins personnels et de santé · Habitation",
              "6 rôles sociaux : Responsabilités · Relations interpersonnelles · Vie associative et spirituelle · Éducation · Travail · Loisirs",
            ]} />
          </HighlightBox>

          <Texte>Les rôles sociaux donnent du sens à la vie sociale de la personne. Ils sont souvent les premiers à être sacrifiés dans une logique institutionnelle centrée sur les soins. Pourtant, c'est précisément dans ces rôles que réside la qualité de vie.</Texte>

          <PullQuote>
            Une participation n'est réelle que si elle est jugée satisfaisante par la personne elle-même. Réalisation sans satisfaction n'est pas participation.
          </PullQuote>

          <HighlightBox label="Le double critère essentiel — MHAVIE" couleur="vert">
            <Texte>L'outil MHAVIE (Mesure des Habitudes de Vie) évalue pour chaque catégorie à la fois <strong>le niveau de réalisation</strong> (de la pleine participation à la non-réalisation) et <strong>le niveau de satisfaction</strong> de la personne. Ces deux dimensions sont indissociables : une personne qui réalise une activité de loisir avec une aide permanente et intrusive — sans avoir eu son mot à dire — est en situation de handicap quant à sa satisfaction, même si l'activité est « techniquement réalisée ».</Texte>
          </HighlightBox>
        </SectionModule>

        <AccrocheScenario type="reflexion">
          <p>Parmi les douze habitudes de vie, quelle est celle qui compte le plus pour les personnes que vous accompagnez — et pour laquelle vous observez la plus grande insatisfaction ? Est-ce une activité courante ou un rôle social ? Et quel obstacle environnemental, micro ou méso, est à l'origine de cette insatisfaction ? C'est là votre prochain levier d'action concret.</p>
        </AccrocheScenario>

        <SectionModule eyebrow="Section 4" titre="Facilitateurs et obstacles : la dynamique de l'interaction">
          <Texte>C'est ici que se joue le cœur opérationnel du MDH-PPH pour les équipes de terrain. Un <strong>facilitateur</strong> est tout facteur environnemental qui favorise la réalisation des habitudes de vie. Un <strong>obstacle</strong> est tout facteur environnemental qui l'entrave.</Texte>

          <TableauComparaison
            titre="Facilitateurs vs Obstacles — exemples concrets"
            colonnes={[
              { titre: "Facilitateur", contenu: [
                "Aide technique adaptée aux besoins de la personne",
                "Attitude bienveillante et inclusive d'un pair ou d'un professionnel",
                "Horaire de transport flexible qui permet d'accéder à une activité valorisée",
                "Espace physique adapté aux besoins sensoriels et moteurs",
                "Règlement institutionnel souple permettant des choix individuels",
              ]},
              { titre: "Obstacle", contenu: [
                "Absence d'aide technique ou matériel inadapté",
                "Préjugé ou attitude réductrice d'un membre de l'équipe",
                "Absence de transport adapté ou changement d'horaire d'équipe",
                "Local bruyant ou à odeurs intenses pour une personne hypersensible",
                "Règlement institutionnel rigide imposant des activités uniformes",
              ]},
            ]}
          />

          <PullQuote>
            Si l'on peut transformer un obstacle en facilitateur, on réduit la situation de handicap — sans nécessairement changer les déficiences ou les aptitudes de la personne.
          </PullQuote>

          <HighlightBox label="Attention : les facilitateurs et obstacles ne sont pas fixes" couleur="jaune">
            <Liste items={[
              "Ce qui est un facilitateur pour une personne peut être un obstacle pour une autre",
              "Ce qui était un facilitateur hier peut devenir un obstacle demain si les conditions changent",
              "Un professionnel attentif développe un regard dynamique sur les variations de l'environnement",
              "L'outil MQE (Mesure de la Qualité de l'Environnement) permet de quantifier précisément intensité et localisation des obstacles",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Lena — retour au fil rouge" titre="Ce que l'analyse révèle">
          <Texte>En appliquant la grille MDH-PPH à Lena, l'équipe identifie plusieurs éléments qu'elle n'avait jamais formalisés : une hypersensibilité aux bruits et odeurs intenses (facteur personnel organique), un atelier cuisine qu'elle adore mais dont l'horaire est en conflit avec un soin hebdomadaire (obstacle micro-environnemental), un groupe de chant communautaire dans le quartier qu'elle ne peut pas rejoindre faute d'accompagnant disponible (obstacle méso-environnemental social).</Texte>
          <Texte>Ces éléments sont tous actionnables. Le prochain module montrera comment les analyser ensemble pour construire une image complète de la situation de Lena.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Les trois dimensions du MDH-PPH — facteurs personnels, facteurs environnementaux, habitudes de vie — forment un système cohérent. Comprendre les facteurs identitaires de la personne, cartographier les obstacles et facilitateurs à chaque niveau, et évaluer les habitudes de vie selon leur réalisation ET leur satisfaction : c'est cette trilogie qui permet de construire des interventions véritablement centrées sur la vie de la personne.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Les facteurs identitaires ont un continuum facilitateur → obstacle : ils ne sont pas neutres",
              "Les systèmes organiques vont de l'intégrité à la déficience ; les aptitudes de la capacité sans limite à l'incapacité complète",
              "L'environnement s'analyse à trois niveaux : micro (modifiable rapidement), méso, macro",
              "Les 12 habitudes de vie : 6 activités courantes + 6 rôles sociaux (dont vie associative ET spirituelle)",
              "Réalisation et satisfaction sont deux critères distincts et indissociables dans le MHAVIE",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Dans le MDH-PPH 2018, sur quel continuum sont évalués les facteurs identitaires ?",
            reponses: [
              "Intégrité → Déficience (comme les systèmes organiques)",
              "Capacité → Incapacité (comme les aptitudes)",
              "Facilitateur → Obstacle",
              "Ils ne sont pas évalués sur un continuum, seulement décrits",
            ],
            bonneReponse: 2,
            explication: "Contrairement aux systèmes organiques (intégrité → déficience) et aux aptitudes (capacité → incapacité), les facteurs identitaires sont évalués sur un continuum facilitateur → obstacle. Par exemple, un réseau social fort est un facteur identitaire facilitateur ; un isolement ou un faible niveau d'éducation peut devenir un obstacle. Cette distinction est une innovation de la nomenclature MDH-PPH 2018.",
          },
          {
            question: "Un résident autonome dans son quartier habituel se retrouve en difficulté après le déménagement de l'institution dans un nouveau bâtiment. Selon le MDH-PPH, que s'est-il passé ?",
            reponses: [
              "Sa pathologie s'est aggravée suite au stress du déménagement",
              "Son aptitude d'orientation spatiale a régressé",
              "Un obstacle micro-environnemental physique a créé une nouvelle situation de handicap",
              "Son environnement a changé, transformant d'anciens facilitateurs en obstacles",
            ],
            bonneReponse: 3,
            explication: "L'aptitude du résident n'a pas changé — c'est son environnement qui a changé. Ce qui était facilitateur (un quartier connu) est devenu obstacle (un environnement inconnu). Le MDH-PPH permet de l'identifier et d'agir sur l'environnement plutôt que sur la personne.",
          },
          {
            question: "Marie participe chaque semaine à son activité de loisir avec une aide permanente et intrusive. Elle n'a pas eu son mot à dire sur cette aide. Selon le MDH-PPH, Marie est-elle en situation de participation sociale ?",
            reponses: [
              "Oui, car elle réalise l'activité",
              "Non, car même si l'activité est réalisée, sa satisfaction n'est pas assurée",
              "Oui, dès lors que l'activité est adaptée à ses capacités",
              "Non, car toute aide constitue un obstacle à l'autodétermination",
            ],
            bonneReponse: 1,
            explication: "Le MDH-PPH exige deux critères : la réalisation ET la satisfaction. Une activité réalisée sans que la personne ait eu son mot à dire constitue une situation de handicap quant à la satisfaction. L'outil MHAVIE mesure précisément ces deux dimensions.",
          },
          {
            question: "L'équipe observe que Paul s'agite depuis que son club de sarbacane a déménagé. Quel niveau environnemental est concerné ?",
            reponses: [
              "Micro-environnemental, car le problème vient de l'équipe directe",
              "Méso-environnemental, car le club est une ressource communautaire",
              "Macro-environnemental, car il s'agit d'une politique de financement",
              "Aucun : l'agitation est un symptôme de la pathologie de Paul",
            ],
            bonneReponse: 1,
            explication: "Le club de sarbacane est une ressource du contexte communautaire — c'est le méso-environnement. Son déménagement a créé un obstacle méso-environnemental social (accès à une habitude de vie valorisée). Ce n'est pas l'aggravation du handicap de Paul qui explique son agitation.",
          },
          {
            question: "Un professionnel dit : « Sophie refuse toujours les activités que j'adapte pour elle. Pourtant je fais de mon mieux. » Que lui manque-t-il selon le MDH-PPH ?",
            reponses: [
              "Des compétences techniques en ergothérapie",
              "La prise en compte du critère de satisfaction et des facteurs identitaires de Sophie",
              "Une meilleure connaissance des systèmes organiques de Sophie",
              "Un soutien de la direction institutionnelle",
            ],
            bonneReponse: 1,
            explication: "Adapter une activité sans tenir compte de ce qui compte pour la personne (facteurs identitaires) et sans vérifier si elle en est satisfaite (double critère MHAVIE), c'est rester dans une logique médicale. Sophie refuse peut-être parce que ces activités ne correspondent pas à ses valeurs ou à son histoire de vie.",
          },
          {
            question: "Pourquoi dit-on que les facilitateurs et les obstacles ne sont pas fixes ?",
            reponses: [
              "Parce qu'ils changent automatiquement tous les six mois",
              "Parce qu'ils dépendent de l'humeur de la personne",
              "Parce qu'un même facteur peut être facilitateur pour une personne et obstacle pour une autre, et peut évoluer dans le temps",
              "Parce qu'ils sont subjectifs et non mesurables",
            ],
            bonneReponse: 2,
            explication: "Un même facteur environnemental peut avoir des effets opposés selon les personnes et évoluer dans le temps. Un local lumineux est un facilitateur pour certains et un obstacle pour une personne sensible à la lumière. Un accompagnant bienveillant peut devenir un obstacle si son style devient intrusif.",
          },
          {
            question: "En quoi la MQE (Mesure de la Qualité de l'Environnement) complète-t-elle le MHAVIE dans la démarche MDH-PPH ?",
            reponses: [
              "La MQE remplace le MHAVIE pour les personnes qui ne peuvent pas s'exprimer verbalement",
              "Le MHAVIE mesure le résultat (habitudes de vie), la MQE analyse les facteurs environnementaux qui l'expliquent",
              "La MQE évalue les aptitudes de la personne, le MHAVIE évalue son environnement",
              "Les deux outils mesurent la même chose mais à des niveaux d'intensité différents",
            ],
            bonneReponse: 1,
            explication: "MHAVIE et MQE sont complémentaires : le MHAVIE photographie le résultat de l'interaction (est-ce que la personne réalise ses habitudes de vie de façon satisfaisante ?), tandis que la MQE analyse les facteurs environnementaux qui expliquent ce résultat (quels obstacles et facilitateurs sont à l'œuvre, à quelle intensité ?). Ensemble, ils permettent une analyse complète et une mesure objective de l'évolution.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
