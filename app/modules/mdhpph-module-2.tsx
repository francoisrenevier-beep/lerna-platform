import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

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

        <SectionModule eyebrow="Introduction" titre="Du concept à l'outil opérationnel">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Distinguer les trois sous-composantes des facteurs personnels et leurs implications pratiques",
              "Analyser l'environnement selon ses trois échelles (micro, méso, macro) et deux dimensions (physique/sociale)",
              "Identifier les douze catégories d'habitudes de vie et comprendre le double critère réalisation/satisfaction",
              "Distinguer facilitateurs et obstacles et comprendre leur dynamique"
            ]} />
          </ConceptBox>
          <Texte>Comprendre les trois dimensions du MDH-PPH, c'est se doter d'une grille de lecture systématique pour décrypter n'importe quelle situation d'accompagnement. Chaque dimension est à la fois un objet d'évaluation et un terrain d'action.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Leçon 2.1" titre="Les facteurs personnels en profondeur">
          <Texte>Comprendre les facteurs personnels dans le cadre du MDH-PPH exige de dépasser la simple lecture du dossier médical. La version 2018 distingue trois sous-composantes aux implications très différentes pour la pratique.</Texte>

          <SchemaEtapes
            titre="Les trois sous-composantes des facteurs personnels"
            etapes={[
              { niveau: "Sous-composante 1", nom: "Facteurs identitaires", definition: "Âge, sexe, histoire de vie, croyances, valeurs, appartenance culturelle et communautaire. Déterminent ce qui compte pour la personne, ce qui donne sens à son accompagnement." },
              { niveau: "Sous-composante 2", nom: "Systèmes organiques", definition: "Composantes corporelles (système nerveux, cardiovasculaire, moteur…) mesurées sur un spectre de l'intégrité à la déficience. Nécessaires, mais insuffisantes pour prédire la participation sociale." },
              { niveau: "Sous-composante 3", nom: "Aptitudes", definition: "Possibilité pour une personne d'accomplir une activité physique ou mentale, de la pleine capacité à l'incapacité totale. Une aptitude réduite n'est pas synonyme de situation de handicap." }
            ]}
            note="Les facteurs identitaires sont souvent les plus négligés dans les institutions — et pourtant les plus déterminants"
          />

          <HighlightBox label="Un exemple concret" couleur="jaune">
            <Texte>Un résident qui présente des difficultés d'orientation spatiale peut être parfaitement autonome dans un quartier qu'il connaît depuis dix ans, et se retrouver en situation de handicap soudaine si son institution déménage dans un nouveau bâtiment. L'aptitude n'a pas changé — l'environnement, si.</Texte>
          </HighlightBox>

          <Texte>Les facteurs identitaires constituent souvent la dimension la plus négligée en institution. Ignorer ce qui compte pour la personne, c'est risquer de construire des projets d'accompagnement techniquement irréprochables mais totalement déconnectés de ce qui importe pour elle.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Leçon 2.2" titre="L'architecture de l'environnement">
          <Texte>L'environnement est le terrain d'action principal des équipes éducatives et sociales. Dans le cadre du MDH-PPH, il est structuré selon deux dimensions (physique et sociale) et trois échelles de proximité.</Texte>

          <SchemaEtapes
            titre="Les trois échelles de l'environnement"
            etapes={[
              { niveau: "Niveau 1", nom: "Micro-environnement", definition: "Le contexte immédiat et personnel : logement, équipe éducative directe, aides techniques spécifiques, membres de la famille proche. Sphère la plus directement modifiable par les professionnels à court terme." },
              { niveau: "Niveau 2", nom: "Méso-environnement", definition: "Le contexte communautaire : quartier, transports publics, clubs et associations, commerces locaux, structures de soins ou de loisirs. Niveau où se jouent la plupart des situations d'inclusion et d'exclusion sociale." },
              { niveau: "Niveau 3", nom: "Macro-environnement", definition: "Les dimensions sociétales : politiques des assurances sociales, lois cantonales et fédérales, normes culturelles, systèmes économiques. En Suisse : AI, LAA, LAMal et dispositions cantonales en matière de handicap." }
            ]}
            note="Chaque niveau peut contenir des facteurs physiques (architecture, technologies, bruit) ou des facteurs sociaux (attitudes, règles, réseaux de soutien)"
          />

          <ConceptBox label="L'exemple de Paul" titre="Un obstacle méso-environnemental invisible">
            <Texte>Paul se rend depuis des années à son club de sarbacane. Suite au déménagement du club et à un changement d'horaires de l'équipe, il ne peut plus y aller. Sa déficience neurologique n'a pas changé. C'est son environnement communautaire (méso) qui a produit une nouvelle situation de handicap — invisible si on ne regarde que ses facteurs personnels.</Texte>
          </ConceptBox>

          <TableauComparaison
            titre="Les deux dimensions à chaque niveau"
            colonnes={[
              { titre: "Dimension physique", contenu: [
                "Architecture adaptée, aides techniques, accessibilité",
                "Accessibilité des transports, aménagement du quartier",
                "Normes architecturales, politiques de construction",
              ]},
              { titre: "Dimension sociale", contenu: [
                "Attitudes des pairs, attitudes des professionnels",
                "Réseau de soutien communautaire, clubs inclusifs",
                "Lois, assurances sociales, normes culturelles",
              ]},
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Leçon 2.3" titre="Les habitudes de vie : indicateur central de participation">
          <Texte>Les habitudes de vie constituent la finalité du modèle. Ce sont elles qui permettent de mesurer si une personne vit en situation de participation sociale ou en situation de handicap.</Texte>

          <HighlightBox label="Les douze catégories d'habitudes de vie" couleur="bleu">
            <Liste couleur="bleu" items={[
              "6 activités courantes : nutrition, condition physique et psychique, soins personnels, habitation, déplacements, communication",
              "6 rôles sociaux : responsabilités familiales, relations interpersonnelles, vie associative et communautaire, éducation, travail, loisirs"
            ]} />
          </HighlightBox>

          <Texte>Les rôles sociaux donnent du sens à la vie sociale de la personne et sont souvent les premiers à être sacrifiés dans une logique institutionnelle centrée sur les soins. Pourtant, c'est précisément dans ces rôles que réside la qualité de vie.</Texte>

          <PullQuote>
            Une participation n'est réelle que si elle est jugée satisfaisante par la personne elle-même. L'outil MHAVIE mesure précisément ce double niveau : réalisation et satisfaction.
          </PullQuote>

          <HighlightBox label="Le double critère essentiel" couleur="vert">
            <Texte>Une personne qui réalise une activité de loisir avec une aide permanente et intrusive — sans avoir eu son mot à dire — est en situation de handicap quant à sa satisfaction, même si l'activité est « techniquement réalisée ». Réalisation ne suffit pas : il faut aussi la satisfaction.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 2.4" titre="Facilitateurs et obstacles : la dynamique de l'interaction">
          <Texte>C'est ici que se joue le cœur opérationnel du MDH-PPH pour les équipes de terrain.</Texte>

          <TableauComparaison
            titre="Facilitateurs vs Obstacles"
            colonnes={[
              { titre: "Facilitateur", contenu: [
                "Aide technique adaptée",
                "Attitude bienveillante d'un pair",
                "Horaire de transport flexible",
                "Espace physique adapté",
              ]},
              { titre: "Obstacle", contenu: [
                "Escalier sans rampe",
                "Préjugé d'un professionnel",
                "Règlement institutionnel rigide",
                "Information non accessible",
              ]},
            ]}
          />

          <PullQuote>
            Si l'on peut transformer un obstacle en facilitateur, on réduit la situation de handicap — sans nécessairement changer les déficiences ou les aptitudes de la personne.
          </PullQuote>

          <HighlightBox label="Attention : les facilitateurs et obstacles sont dynamiques" couleur="jaune">
            <Liste items={[
              "Ce qui est un facilitateur pour une personne peut être un obstacle pour une autre",
              "Ce qui était un facilitateur hier peut devenir un obstacle demain si les conditions changent",
              "Le professionnel doit développer un regard attentif aux variations de l'environnement"
            ]} />
          </HighlightBox>

          <ConceptBox label="L'outil MQE" titre="Mesure de la Qualité de l'Environnement">
            <Texte>L'outil MQE permet de quantifier précisément les facilitateurs et obstacles dans les trois sphères (micro, méso, macro) et selon leur intensité (de mineur à majeur). Il constitue un outil d'évaluation structuré pour les équipes souhaitant objectiver leur analyse environnementale.</Texte>
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Quiz" titre="Testez votre compréhension">
          <Quiz
            questions={[{
              question: "Les facteurs identitaires incluent :",
              reponses: [
                "Les systèmes nerveux et cardiovasculaire",
                "Les capacités motrices et cognitives",
                "L'âge, l'histoire de vie, les valeurs et l'appartenance culturelle",
                "Les obstacles physiques de l'environnement",
              ],
              bonneReponse: 2,
              explication: "Les facteurs identitaires regroupent les éléments qui définissent l'unicité de la personne — ce qu'elle est par son parcours, ses valeurs, sa culture. Ils sont souvent négligés dans l'évaluation institutionnelle mais sont décisifs pour construire un accompagnement pertinent.",
            }]}
            onValiderModule={onValiderModule}
          />
        </SectionModule>

      </div>
    </div>
  )
}
