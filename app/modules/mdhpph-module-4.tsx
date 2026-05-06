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

        <SectionModule eyebrow="Introduction" titre="Un plan de vie, pas un catalogue de soins">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Formuler des objectifs d'accompagnement en termes de rôles sociaux et d'habitudes de vie",
              "Prioriser les interventions en croisant importance et insatisfaction",
              "Mobiliser les trois leviers d'intervention du MDH-PPH",
              "Utiliser les outils MHAVIE et MQE pour objectiver et mesurer",
              "Appliquer la logique du flux temporel pour évaluer l'efficacité des interventions"
            ]} />
          </ConceptBox>
          <Texte>Un plan d'accompagnement construit avec le MDH-PPH n'est pas un catalogue de soins. C'est un plan de modification des interactions personne-environnement, orienté vers la participation sociale. Cette distinction fondamentale change radicalement la façon de formuler les objectifs, de choisir les priorités et de mesurer le succès.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Leçon 4.1" titre="De l'évaluation au projet personnalisé">
          <Texte>La construction du plan d'accompagnement suit trois étapes articulées.</Texte>

          <SchemaEtapes
            titre="Les trois étapes du plan d'accompagnement MDH-PPH"
            etapes={[
              { niveau: "Étape 1", nom: "Formuler les objectifs en termes de vie", definition: "Non pas en termes de fonctions organiques, mais en termes de rôles sociaux et d'habitudes de vie. Au lieu de « Améliorer la coordination oculo-motrice de Sara », on écrira « Sara reprend une activité de loisir hebdomadaire avec des pairs, de façon satisfaisante »." },
              { niveau: "Étape 2", nom: "Prioriser", definition: "En croisant l'importance accordée par la personne à chaque habitude de vie et son niveau d'insatisfaction actuel, on identifie les priorités absolues. Une situation de handicap sur une activité jugée secondaire ne justifie pas la même mobilisation qu'une sur une habitude de vie centrale à l'identité de la personne." },
              { niveau: "Étape 3", nom: "Définir la stratégie d'intervention", definition: "Le MDH-PPH propose trois leviers complémentaires : agir sur les facteurs personnels (réadaptation, apprentissage), agir sur les facteurs environnementaux (aides techniques, aménagements, modification des règles), ou redéfinir les objectifs de vie lorsque l'obstacle ne peut être levé." }
            ]}
            note="Les recherches montrent que l'action sur l'environnement est souvent plus efficiente et plus durable que la rééducation des aptitudes"
          />

          <TableauComparaison
            titre="Reformuler les objectifs en termes de vie"
            colonnes={[
              { titre: "Formulation médicale (à éviter)", contenu: [
                "Améliorer la coordination oculo-motrice de Sara",
                "Réduire les comportements d'agitation de Marco",
                "Travailler l'autonomie aux soins personnels de Lena",
              ]},
              { titre: "Formulation MDH-PPH (recommandée)", contenu: [
                "Sara reprend une activité de loisir hebdomadaire avec des pairs, de façon satisfaisante",
                "Marco peut accéder à son club de loisirs deux fois par semaine",
                "Lena réalise sa toilette du matin de façon satisfaisante, avec le niveau d'aide qu'elle choisit",
              ]},
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Leçon 4.2" titre="Autodétermination et co-construction du projet">
          <PullQuote>
            L'autodétermination signifie que la personne accompagnée est l'auteure principale de son projet de vie — pas le professionnel, pas l'institution, pas la famille.
          </PullQuote>

          <Texte>Dans la pratique institutionnelle suisse, l'autodétermination se heurte souvent à des résistances réelles : familles aux attentes protectrices mais réductrices, règlements institutionnels qui uniformisent les rythmes de vie, équipes qui projettent leurs propres valeurs sur les choix des résidents. Le MDH-PPH aide à identifier ces obstacles pour y répondre de façon structurée.</Texte>

          <HighlightBox label="La co-construction en pratique" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Conduire des entretiens réguliers centrés sur les habitudes de vie valorisées par la personne",
              "Utiliser l'outil MHAVIE comme support : il permet à la personne de s'exprimer sur ce qui lui importe et sur sa satisfaction",
              "Pour les personnes ayant des difficultés de communication verbale : intégrer des méthodes de communication alternative et augmentée (CAA)",
              "Garantir que les choix de la personne orientent le plan, même lorsqu'ils diffèrent des préférences des professionnels"
            ]} />
          </HighlightBox>

          <ConceptBox label="Les obstacles à l'autodétermination" titre="Les identifier pour les lever">
            <Liste items={[
              "Obstacles micro-environnementaux : équipes qui décident à la place de la personne, horaires imposés sans consultation",
              "Obstacles méso-environnementaux : familles surprotectrices, règlement intérieur rigide",
              "Obstacles macro-environnementaux : politiques de financement qui limitent les choix individuels, normes culturelles restrictives"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 4.3" titre="Les outils MHAVIE et MQE en pratique">
          <SchemaEtapes
            titre="Deux outils complémentaires"
            etapes={[
              { niveau: "Outil 1", nom: "MHAVIE — Mesure des Habitudes de Vie", definition: "Questionnaire standardisé évaluant le niveau de réalisation des douze catégories d'habitudes de vie, le type d'aide requise (humaine ou technique) et le niveau de satisfaction. Peut être administré en entretien direct, avec soutien, ou rempli par un professionnel de référence." },
              { niveau: "Outil 2", nom: "MQE — Mesure de la Qualité de l'Environnement", definition: "Évalue précisément les facteurs environnementaux présents dans les trois sphères (micro, méso, macro), leur rôle (facilitateur ou obstacle) et leur intensité (de mineur à majeur). Aide l'équipe à prioriser les modifications environnementales les plus efficaces." }
            ]}
            note="Comparer les scores MHAVIE entre T et T+6 mois permet de valider scientifiquement l'efficacité des interventions"
          />

          <HighlightBox label="Utilisation du score MHAVIE" couleur="vert">
            <Liste items={[
              "Objectiver la situation de participation ou de handicap",
              "Hiérarchiser les priorités d'intervention",
              "Mesurer l'évolution de la situation dans le temps",
              "Valider ou réviser la stratégie d'intervention à 6 mois"
            ]} />
          </HighlightBox>

          <Texte>Dans le contexte des institutions suisses, ces outils ne sont pas encore systématiquement utilisés — mais leur pertinence est croissante à mesure que les institutions s'orientent vers des pratiques centrées sur la personne et la qualité. Plusieurs ESE romands ont déjà intégré des éléments de MHAVIE dans leurs processus d'élaboration des projets personnalisés.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Leçon 4.4" titre="Le flux temporel : évaluer, ajuster, mesurer">
          <Texte>Le flux temporel est une innovation conceptuelle clé de la version 2018 du MDH-PPH. Il signifie que toute situation de handicap est dynamique et évolutive. Une évaluation à un instant T n'est jamais définitive : elle sert de photographie de référence pour mesurer l'évolution après intervention.</Texte>

          <HighlightBox label="Implications pratiques du flux temporel" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Réévaluations régulières et structurées — pas seulement lors de crises ou de changements institutionnels",
              "Réévaluation annuelle minimum ; semestrielle recommandée pour les situations complexes",
              "Anticiper les transitions : chaque reconfiguration peut transformer d'anciens facilitateurs en obstacles",
              "Intégrer les facteurs de risque (perte d'un proche, changement institutionnel brutal) et de protection (réseau social stable, histoire de réussites)"
            ]} />
          </HighlightBox>

          <PullQuote>
            Le flux temporel rappelle que l'accompagnement n'est jamais terminé. Ce qui fonctionne aujourd'hui doit être réévalué demain — non par défiance, mais par rigueur professionnelle.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Quiz" titre="Testez votre compréhension">
          <Quiz
            questions={[{
              question: "Selon le MDH-PPH, quel est le bon objectif d'accompagnement pour Sara ?",
              reponses: [
                "Améliorer la coordination oculo-motrice de Sara à 70% des essais",
                "Réduire de 50% les épisodes d'agitation de Sara en deux mois",
                "Sara reprend une activité de loisir hebdomadaire avec des pairs, de façon satisfaisante",
                "Augmenter l'autonomie de Sara dans les soins personnels",
              ],
              bonneReponse: 2,
              explication: "Le MDH-PPH formule les objectifs en termes de rôles sociaux et d'habitudes de vie, pas en termes de fonctions organiques ou de comportements. L'objectif doit être centré sur la participation sociale et inclure la dimension de satisfaction de la personne.",
            }]}
            onValiderModule={onValiderModule}
          />
        </SectionModule>

      </div>
    </div>
  )
}
