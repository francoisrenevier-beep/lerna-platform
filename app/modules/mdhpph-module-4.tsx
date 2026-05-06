import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module4MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="MDH-PPH 2018"
        titre="Construire un plan d'accompagnement"
        titrePart2="centré participation"
        sousTitre="De l'évaluation MDH-PPH au projet personnalisé : formuler des objectifs en termes de vie, co-construire avec la personne et mesurer les progrès dans le temps."
        duree="50 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <div className="bg-gray-50 border-l-4 border-[#1B2D5B] rounded-r-xl px-6 py-5 mb-10">
          <p className="text-xs font-semibold text-[#1B2D5B] uppercase tracking-wider mb-2">Fil rouge — Lena, 42 ans</p>
          <p className="text-gray-700 text-sm leading-relaxed">L'analyse MDH-PPH conduite en équipe a mis en lumière la situation de Lena : sa trisomie 21, ses ressources affectives et créatives, et les obstacles environnementaux qui l'empêchent de vivre comme elle le souhaite. L'équipe dispose maintenant d'un tableau complet. La question qui se pose est : <strong>que fait-on avec ce tableau ?</strong> Comment passe-t-on de l'analyse à l'action ? De l'évaluation à un vrai plan de vie — co-construit avec Lena elle-même ?</p>
        </div>

        <SectionModule eyebrow="Introduction" titre="Un plan de vie, pas un catalogue de soins">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Formuler des objectifs d'accompagnement en termes de rôles sociaux et d'habitudes de vie",
              "Prioriser les interventions en croisant importance accordée et niveau d'insatisfaction",
              "Mobiliser les trois leviers d'intervention du MDH-PPH",
              "Utiliser les outils MHAVIE et MQE pour objectiver et mesurer les situations",
              "Appliquer la logique du flux temporel pour évaluer l'efficacité des interventions dans le temps"
            ]} />
          </ConceptBox>
          <Texte>Un plan d'accompagnement construit avec le MDH-PPH n'est pas un catalogue de soins. C'est un plan de modification des interactions personne-environnement, orienté vers la participation sociale. Cette distinction fondamentale change radicalement la façon de formuler les objectifs, de choisir les priorités et de mesurer le succès.</Texte>
          <Texte>Un catalogue de soins dit : "On va travailler la coordination motrice de Lena." Un plan centré participation dit : "Lena va reprendre son atelier cuisine hebdomadaire avec les pairs qu'elle choisit, de façon satisfaisante." L'un décrit une technique. L'autre décrit une vie.</Texte>

          <PullQuote>
            Le plan d'accompagnement MDH-PPH n'est pas écrit pour les professionnels. Il est écrit avec la personne, pour la personne.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Leçon 4.1" titre="De l'évaluation au projet personnalisé">
          <Texte>La construction du plan d'accompagnement suit trois étapes articulées. Chacune découle directement des concepts que nous avons explorés dans les modules précédents.</Texte>

          <SchemaEtapes
            titre="Les trois étapes du plan d'accompagnement MDH-PPH"
            etapes={[
              {
                niveau: "Étape 1",
                nom: "Formuler les objectifs en termes de vie",
                definition: "Non pas en termes de fonctions organiques ou de comportements, mais en termes de rôles sociaux et d'habitudes de vie. Au lieu de « Améliorer la coordination oculo-motrice de Lena », on écrira : « Lena reprend une activité de loisir hebdomadaire avec des pairs, de façon satisfaisante »."
              },
              {
                niveau: "Étape 2",
                nom: "Prioriser en croisant importance et insatisfaction",
                definition: "En croisant l'importance accordée par la personne à chaque habitude de vie et son niveau d'insatisfaction actuel, on identifie les priorités absolues. Une situation de handicap sur une activité jugée secondaire ne justifie pas la même mobilisation qu'une sur une habitude centrale à l'identité de la personne."
              },
              {
                niveau: "Étape 3",
                nom: "Définir la stratégie d'intervention",
                definition: "Le MDH-PPH propose trois leviers complémentaires : agir sur les facteurs personnels (réadaptation, apprentissage), agir sur les facteurs environnementaux (aides techniques, aménagements, modification des règles et attitudes), ou redéfinir les objectifs de vie lorsque certains obstacles ne peuvent pas être levés."
              }
            ]}
            note="Les recherches montrent que l'action sur l'environnement est souvent plus efficiente et plus durable que la rééducation des aptitudes"
          />

          <TableauComparaison
            titre="Reformuler les objectifs en termes de vie"
            colonnes={[
              {
                titre: "Formulation médicale (à éviter)",
                contenu: [
                  "Améliorer la coordination oculo-motrice de Lena",
                  "Réduire les comportements d'agitation de Marco",
                  "Travailler l'autonomie aux soins personnels de Sara",
                  "Développer la mémoire de travail de Pablo"
                ]
              },
              {
                titre: "Formulation MDH-PPH (recommandée)",
                contenu: [
                  "Lena reprend son atelier cuisine hebdomadaire avec des pairs, de façon satisfaisante",
                  "Marco peut accéder à son club de loisirs deux fois par semaine",
                  "Sara réalise sa toilette du matin de façon satisfaisante, avec le niveau d'aide qu'elle choisit",
                  "Pablo participe aux réunions du foyer et peut exprimer ses opinions"
                ]
              }
            ]}
          />

          <HighlightBox label="La règle des priorités absolues" couleur="jaune">
            <Texte>Quand on croise importance (ce qui compte pour la personne) et insatisfaction (ce qui ne va pas), on obtient quatre quadrants. Seul le quadrant "importance haute + insatisfaction haute" mérite une action immédiate. Lena tient par-dessus tout à sa cuisine et à ses liens avec ses amis du groupe — et elle ne peut plus y participer : c'est là que l'équipe doit agir en premier.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 4.2" titre="Autodétermination et co-construction du projet">
          <PullQuote>
            L'autodétermination signifie que la personne accompagnée est l'auteure principale de son projet de vie — pas le professionnel, pas l'institution, pas la famille.
          </PullQuote>

          <Texte>Dans la pratique institutionnelle, l'autodétermination se heurte souvent à des résistances réelles. Des familles aux attentes protectrices mais réductrices. Des règlements qui uniformisent les rythmes de vie. Des équipes qui projettent leurs propres valeurs sur les choix des résidents. Le MDH-PPH aide à identifier ces obstacles pour y répondre de façon structurée.</Texte>

          <ConceptBox label="Lena parle pour elle-même" titre="La co-construction en pratique">
            <Texte>Avant la révision de son projet personnalisé, l'équipe de Lena conduit trois entretiens avec elle, en s'appuyant sur un support visuel adapté. Lena exprime clairement ce qu'elle veut : cuisiner avec Mia et Theo le mercredi, chanter dans la chorale le vendredi, et avoir sa propre chambre rangée "à sa façon, pas à la façon de Maëlle". Ces préférences — et non les déficits — deviennent le point de départ du plan.</Texte>
          </ConceptBox>

          <HighlightBox label="La co-construction en pratique" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Conduire des entretiens réguliers centrés sur les habitudes de vie valorisées par la personne",
              "Utiliser l'outil MHAVIE comme support : il permet à la personne de s'exprimer sur ce qui lui importe et sur sa satisfaction actuelle",
              "Pour les personnes ayant des difficultés de communication verbale : intégrer des méthodes de communication alternative et augmentée (CAA)",
              "Garantir que les choix de la personne orientent le plan, même lorsqu'ils diffèrent des préférences des professionnels ou de la famille",
              "Documenter explicitement les choix exprimés par la personne dans le projet écrit"
            ]} />
          </HighlightBox>

          <ConceptBox label="Les obstacles à l'autodétermination" titre="Les identifier pour les lever">
            <Liste items={[
              "Obstacles micro-environnementaux : équipes qui décident à la place de la personne, horaires imposés sans consultation, activités non choisies",
              "Obstacles méso-environnementaux : familles surprotectrices, règlement intérieur rigide, manque d'espaces de parole pour la personne",
              "Obstacles macro-environnementaux : politiques de financement qui limitent les choix individuels, normes culturelles qui infantilisent les adultes en situation de handicap"
            ]} />
          </ConceptBox>

          <Texte>Il ne s'agit pas de nier que la famille de Lena la connaît bien, ni que l'institution a des contraintes réelles. Il s'agit de garantir que la voix de Lena elle-même — pas seulement ce que les autres pensent pour elle — est au centre du projet.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Leçon 4.3" titre="Les outils MHAVIE et MQE en pratique">
          <Texte>Le MDH-PPH est soutenu par deux outils standardisés complémentaires qui permettent d'objectiver l'évaluation et de mesurer les progrès dans le temps. Ces outils transforment une impression clinique en données comparables.</Texte>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#3DBFA0] mb-2">MHAVIE</p>
              <p className="text-sm text-white/70 leading-snug">Mesure des Habitudes de Vie — évalue 12 catégories d'habitudes, le niveau d'aide requis et la satisfaction</p>
            </div>
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#3DBFA0] mb-2">MQE</p>
              <p className="text-sm text-white/70 leading-snug">Mesure de la Qualité de l'Environnement — identifie et quantifie facilitateurs et obstacles dans les trois sphères</p>
            </div>
          </div>

          <SchemaEtapes
            titre="Deux outils complémentaires"
            etapes={[
              {
                niveau: "Outil 1",
                nom: "MHAVIE — Mesure des Habitudes de Vie",
                definition: "Questionnaire standardisé évaluant le niveau de réalisation des douze catégories d'habitudes de vie, le type d'aide requise (humaine ou technique) et le niveau de satisfaction de la personne. Peut être administré en entretien direct, avec soutien de communication, ou complété par un professionnel de référence en observation."
              },
              {
                niveau: "Outil 2",
                nom: "MQE — Mesure de la Qualité de l'Environnement",
                definition: "Évalue précisément les facteurs environnementaux présents dans les trois sphères (micro, méso, macro), leur rôle (facilitateur ou obstacle) et leur intensité (de mineur à majeur). Permet à l'équipe de prioriser les modifications environnementales les plus efficaces et les plus accessibles."
              }
            ]}
            note="Comparer les scores MHAVIE entre deux temps d'évaluation permet de valider l'efficacité des interventions de façon objective"
          />

          <HighlightBox label="Utilisation du score MHAVIE pour Lena" couleur="vert">
            <Texte>Avant la révision du projet de Lena, l'équipe administre le MHAVIE. Lena obtient un score de réalisation faible sur les activités de loisirs (3/9) et les relations interpersonnelles (4/9), avec une satisfaction exprimée très basse. Six mois après les interventions, les scores progressent à 7/9 et 7/9. C'est la preuve objective que le plan fonctionne — et une base pour décider si on continue, ajuste ou réoriente.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce que mesure réellement le score MHAVIE" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Objectiver la situation de participation ou de handicap au temps T",
              "Hiérarchiser les priorités d'intervention selon l'importance et l'insatisfaction",
              "Mesurer l'évolution de la situation dans le temps (T vs T+6 mois)",
              "Valider ou réviser la stratégie d'intervention à intervalle régulier",
              "Alimenter la réflexion collective de l'équipe avec des données partagées"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 4.4" titre="Le flux temporel : évaluer, ajuster, mesurer">
          <Texte>Le flux temporel est une innovation conceptuelle clé de la version 2018 du MDH-PPH. Il signifie que toute situation de handicap est dynamique et évolutive. Une évaluation à un instant T n'est jamais définitive : elle sert de photographie de référence pour mesurer l'évolution après intervention.</Texte>

          <HighlightBox label="Ce que le flux temporel change dans la pratique" couleur="jaune">
            <Texte>Sans flux temporel, le projet personnalisé est un document figé qu'on révise une fois par an parce que c'est obligatoire. Avec le flux temporel, c'est un outil vivant qu'on utilise pour piloter l'accompagnement : on évalue, on intervient, on réévalue, on ajuste.</Texte>
          </HighlightBox>

          <HighlightBox label="Implications pratiques du flux temporel" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Planifier des réévaluations régulières et structurées — pas seulement lors de crises ou de changements",
              "Réévaluation annuelle minimum ; semestrielle recommandée pour les situations complexes",
              "Anticiper les transitions : chaque reconfiguration (déménagement, changement d'équipe, départ d'un proche) peut transformer d'anciens facilitateurs en obstacles",
              "Intégrer les facteurs de risque (perte d'un proche, rupture de lien, déclin organique) et de protection (réseau stable, histoire de réussites, ressources identitaires)",
              "Ne jamais présupposer que ce qui fonctionnait il y a un an fonctionne encore aujourd'hui"
            ]} />
          </HighlightBox>

          <div className="bg-gray-50 border-l-4 border-[#3DBFA0] rounded-r-xl px-6 py-5 my-8">
            <p className="text-xs font-semibold text-[#1B2D5B] uppercase tracking-wider mb-2">Fil rouge — Lena, 6 mois plus tard</p>
            <p className="text-gray-700 text-sm leading-relaxed">Six mois après la mise en œuvre du plan co-construit, l'équipe réévalue la situation de Lena avec le MHAVIE. Les scores ont progressé significativement sur les loisirs et les relations interpersonnelles. Lena cuisine à nouveau le mercredi, elle a retrouvé ses amies, et elle est moins agitée le soir. Un nouvel obstacle est apparu : la cuisinière référente de l'atelier a changé, et Lena a du mal avec cette nouvelle personne. Le flux temporel ne signifie pas qu'on repart de zéro — il signifie qu'on reste attentif à ce qui évolue et qu'on ajuste sans attendre.</p>
          </div>

          <PullQuote>
            Le flux temporel rappelle que l'accompagnement n'est jamais terminé. Ce qui fonctionne aujourd'hui doit être réévalué demain — non par défiance, mais par rigueur professionnelle.
          </PullQuote>

          <SchemaEtapes
            titre="Le cycle du projet personnalisé MDH-PPH"
            etapes={[
              { niveau: "Phase 1", nom: "Évaluer", definition: "Recueillir la perspective de la personne. Administrer MHAVIE et MQE. Identifier obstacles et facilitateurs. Photographier la situation au temps T." },
              { niveau: "Phase 2", nom: "Co-construire", definition: "Formuler les objectifs en termes de vie avec la personne. Prioriser selon importance et insatisfaction. Choisir les leviers d'intervention (personne, environnement, redéfinition)." },
              { niveau: "Phase 3", nom: "Agir", definition: "Mettre en œuvre les interventions. Modifier l'environnement. Soutenir les apprentissages. Impliquer les proches et partenaires." },
              { niveau: "Phase 4", nom: "Réévaluer", definition: "À T+6 mois : re-administrer MHAVIE. Comparer les scores. Identifier ce qui a fonctionné, ce qui a bloqué, ce qui a évolué. Ajuster le plan." }
            ]}
            note="Ce cycle n'est pas linéaire : une nouvelle évaluation peut intervenir à tout moment si la situation change de façon significative"
          />
        </SectionModule>

      </div>

      <div className="bg-[#F0F4FF] py-16 px-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <Quiz
            questions={[
              {
                question: "Selon le MDH-PPH, quel est le bon objectif d'accompagnement pour Lena ?",
                reponses: [
                  "Améliorer la coordination oculo-motrice de Lena à 70% des essais en deux mois",
                  "Réduire de 50% les épisodes d'agitation de Lena en séance de rééducation",
                  "Lena reprend son atelier cuisine hebdomadaire avec des pairs, de façon satisfaisante",
                  "Augmenter l'autonomie de Lena dans les soins personnels selon les standards du foyer"
                ],
                bonneReponse: 2,
                explication: "Le MDH-PPH formule les objectifs en termes de rôles sociaux et d'habitudes de vie, pas en termes de fonctions organiques ou de comportements mesurés en rééducation. L'objectif doit être centré sur la participation sociale et inclure la dimension de satisfaction de la personne."
              },
              {
                question: "Comment le MDH-PPH recommande-t-il de prioriser les interventions ?",
                reponses: [
                  "En commençant par les déficits les plus importants identifiés par l'équipe médicale",
                  "En croisant l'importance accordée par la personne à chaque habitude et son niveau d'insatisfaction actuel",
                  "En traitant d'abord les situations qui mobilisent le moins de ressources institutionnelles",
                  "En suivant l'ordre des 12 catégories d'habitudes de vie dans le MHAVIE"
                ],
                bonneReponse: 1,
                explication: "La priorité absolue est déterminée par le croisement de deux dimensions : l'importance que la personne accorde elle-même à l'habitude de vie (pas celle que les professionnels lui attribuent), et le niveau d'insatisfaction ressenti. Ce qui compte pour la personne ET qui va mal = action prioritaire."
              },
              {
                question: "Dans le contexte de l'autodétermination, quel obstacle relève du niveau méso-environnemental ?",
                reponses: [
                  "L'équipe décide à la place de Lena sans lui demander son avis",
                  "Les politiques nationales de financement qui limitent les choix individuels",
                  "Le règlement intérieur rigide du foyer qui uniformise les rythmes de vie",
                  "Lena a des difficultés cognitives qui rendent la décision difficile"
                ],
                bonneReponse: 2,
                explication: "Le niveau méso-environnemental correspond aux environnements proches mais dépassant la relation directe (famille, règlement de l'institution, communauté de quartier). Le micro désigne les interactions directes avec les personnes (équipe). Le macro désigne les systèmes sociaux larges (lois, politiques, normes culturelles)."
              },
              {
                question: "À quoi sert principalement le score MHAVIE dans le suivi d'un projet personnalisé ?",
                reponses: [
                  "À classer la personne dans une catégorie de handicap pour le financement",
                  "À documenter les déficits de la personne pour les partenaires médicaux",
                  "À mesurer objectivement l'évolution de la participation entre deux temps d'évaluation",
                  "À remplacer l'observation clinique quotidienne de l'équipe éducative"
                ],
                bonneReponse: 2,
                explication: "Le MHAVIE est un outil de mesure standardisé qui permet de comparer deux photographies d'une même situation à des temps différents. Il ne classe pas les personnes et ne remplace pas l'observation — il l'objective et la rend comparable, pour valider ou ajuster la stratégie d'intervention."
              },
              {
                question: "Qu'est-ce que le 'flux temporel' apporte à la compréhension du handicap dans le MDH-PPH 2018 ?",
                reponses: [
                  "Il signifie que le handicap s'aggrave toujours avec le temps et demande plus de soins",
                  "Il rappelle que toute situation de handicap est dynamique : les obstacles et facilitateurs évoluent",
                  "Il indique que les projets personnalisés doivent être revus uniquement lors de crises",
                  "Il décrit la durée pendant laquelle une personne reste dans une institution"
                ],
                bonneReponse: 1,
                explication: "Le flux temporel est l'idée que la situation de handicap n'est pas figée : les facteurs personnels évoluent (vieillissement, apprentissage, santé), les facteurs environnementaux changent (déménagement, changement d'équipe, nouvelles aides). Une évaluation à T est une photographie, pas un diagnostic définitif — d'où la nécessité de réévaluations régulières."
              },
              {
                question: "Lequel de ces éléments correspond à un levier d'intervention sur les facteurs environnementaux selon le MDH-PPH ?",
                reponses: [
                  "Une rééducation orthophonique pour améliorer la communication de Lena",
                  "Un programme de renforcement musculaire pour compenser une motricité réduite",
                  "L'installation d'un plan de travail adapté dans la cuisine du foyer",
                  "Un bilan neuropsychologique pour préciser le profil cognitif de Lena"
                ],
                bonneReponse: 2,
                explication: "Agir sur les facteurs environnementaux signifie modifier l'environnement physique, humain, attitudinal ou institutionnel pour lever les obstacles. L'installation d'un plan de travail adapté est une modification de l'environnement physique micro. Les autres options relèvent d'interventions sur les facteurs personnels (aptitudes) de la personne."
              }
            ]}
            onValiderModule={onValiderModule}
          />
        </div>
      </div>

    </div>
  )
}
