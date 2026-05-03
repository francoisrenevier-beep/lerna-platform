import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module2PPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Analyse pratique"
        titre="Lire et analyser une situation"
        titrePart2="avec le PPH"
        sousTitre="Du cadre conceptuel à la grille d'analyse pratique : apprendre à décrypter une situation d'accompagnement pour identifier les vrais leviers d'action."
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le rôle de l'analyse PPH : changer de regard">
          <ConceptBox label="Ce que permet l'analyse PPH" titre="Quatre transformations professionnelles">
            <Liste items={[
              "Sortir du jugement subjectif : passer de commentaires réducteurs à une description objective des interactions personne-environnement",
              "Identifier les leviers d'action : l'analyse est tournée vers ce qui peut être modifié dans l'environnement",
              "Changer de responsable : le PPH incarne le glissement de personne handicapée à personne en situation de handicap",
              "Travailler en cohérence : offrir un langage commun pour co-construire une représentation partagée"
            ]} />
          </ConceptBox>
          <Texte>L'objectif n'est pas de poser un diagnostic sur la personne. C'est de comprendre la dynamique qui produit la situation de handicap — et d'agir sur elle.</Texte>
          <PullQuote>
            Le PPH est un modèle interactionniste : il analyse l'interaction entre les facteurs personnels et environnementaux pour expliquer la qualité de la participation sociale.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2.1" titre="Une méthode d'analyse en six étapes">
          <Texte>Pour analyser une situation avec le PPH, la méthode se décompose en six étapes clés. Chaque étape prépare la suivante.</Texte>
          <HighlightBox label="Principe fondateur" couleur="bleu">
            <Texte>Cette méthode ne cherche pas à évaluer la personne. Elle cherche à auditer son écosystème pour comprendre ce qui freine ou facilite sa participation sociale.</Texte>
          </HighlightBox>
          <SchemaEtapes
            titre="Les 6 étapes de l'analyse PPH"
            etapes={[
              { niveau: "Étape 1", nom: "Habitude de vie", definition: "Identifier l'habitude de vie ciblée" },
              { niveau: "Étape 2", nom: "Participation", definition: "Évaluer la qualité de la participation" },
              { niveau: "Étape 3", nom: "Aptitudes", definition: "Repérer les aptitudes pertinentes" }
            ]}
          />
          <SchemaEtapes
            titre=""
            etapes={[
              { niveau: "Étape 4", nom: "Environnement", definition: "Identifier les facteurs environnementaux" },
              { niveau: "Étape 5", nom: "Hypothèses", definition: "Formuler les hypothèses PPH" },
              { niveau: "Étape 6", nom: "Plan d'action", definition: "Construire le plan d'action" }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Étape 1" titre="Identifier l'habitude de vie ciblée">
          <ConceptBox label="Définition clé" titre="Qu'est-ce qu'une habitude de vie ?">
            <Texte>Une habitude de vie est une activité courante (se nourrir, se déplacer, se soigner) ou un rôle social (travailler, être parent, avoir des loisirs, participer à la vie citoyenne) que la personne souhaite ou doit réaliser.</Texte>
            <Texte>C'est ce qui donne du sens à sa participation sociale. C'est son projet de vie, ses droits, ses aspirations.</Texte>
          </ConceptBox>
          <HighlightBox label="Point clé" couleur="vert">
            <Texte>On part toujours du choix ou du projet de la personne (son autodétermination) — et non du regard institutionnel ou du problème perçu.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Étape 2" titre="Évaluer la qualité de la participation">
          <Texte>Le PPH mesure la qualité de la participation sur un continuum — pas seulement oui ou non. On s'interroge sur quatre dimensions :</Texte>
          <HighlightBox label="Les 4 dimensions" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Degré de réalisation : la participation est-elle complète, partielle, ou absente ?",
              "Satisfaction : comment la personne vit-elle cette participation ?",
              "Stabilité : cette participation est-elle régulière ou fragilisée ?",
              "Effort requis : quels efforts sont nécessaires ? (fatigue, stress, temps)"
            ]} />
          </HighlightBox>
          <PullQuote>
            Julien souhaite participer à l'atelier cuisine. Il y participe partiellement et aime cela — mais se fatigue vite. L'objectif n'est pas de changer d'activité, mais de consolider cette participation en réduisant les obstacles à l'effort.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Étape 3" titre="Repérer les aptitudes pertinentes">
          <Texte>Les aptitudes sont les capacités propres à la personne — l'un des facteurs personnels du PPH. Elles incluent les capacités motrices, cognitives, communicationnelles, affectives, sensorielles.</Texte>
          <HighlightBox label="Ce que le PPH nous demande" couleur="vert">
            <Liste items={[
              "Cibler uniquement les aptitudes pertinentes pour l'habitude de vie visée",
              "Ne pas lister toutes les déficiences — cela n'est ni utile ni respectueux",
              "Décrire les aptitudes de façon fonctionnelle et contextualisée",
              "Garder le regard positif : ce que la personne peut faire, pas seulement ce qu'elle ne peut pas"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Étape 4" titre="Identifier les facteurs environnementaux">
          <Texte>C'est le cœur de l'analyse PPH. L'environnement agit soit comme facilitateur, soit comme obstacle. On distingue cinq dimensions environnementales :</Texte>
          <HighlightBox label="Les 5 dimensions de l'environnement" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Physique et architectural : accessibilité des lieux, transports, équipements",
              "Social et humain : attitudes des proches et professionnels, soutiens disponibles",
              "Institutionnel et organisationnel : règles, procédures, horaires, ressources",
              "Technologique : outils, aides techniques, numérique",
              "Politique et juridique : lois, droits, financement"
            ]} />
          </HighlightBox>
          <PullQuote>
            Un environnement facilitateur compense les limitations d'aptitudes. Un environnement obstacle les amplifie. La même personne peut être en situation de participation dans un contexte et de handicap dans un autre.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Étape 5" titre="Formuler les hypothèses PPH">
          <Texte>Une hypothèse PPH relie les observations pour comprendre comment la situation de handicap est produite. Elle prend toujours la forme : telle aptitude, en interaction avec tel obstacle environnemental, produit telle restriction dans la réalisation de telle habitude de vie.</Texte>
          <HighlightBox label="Structure d'une hypothèse PPH" couleur="vert">
            <Liste items={[
              "Identifier l'aptitude concernée (facteur personnel)",
              "Identifier l'obstacle ou facilitateur environnemental",
              "Décrire l'effet sur la réalisation de l'habitude de vie",
              "Formuler en termes d'interaction, pas de causalité unidirectionnelle"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Étape 6" titre="Construire le plan d'action">
          <Texte>Le plan d'action PPH découle directement des hypothèses. Il cible les obstacles environnementaux identifiés et les transforme en facilitateurs.</Texte>
          <HighlightBox label="Principes du plan d'action PPH" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Agir prioritairement sur l'environnement, pas sur la personne",
              "Co-construire avec la personne concernée",
              "Définir des objectifs mesurables en termes de participation sociale",
              "Prévoir une évaluation régulière de l'effet des actions"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="L'analyse PPH en pratique quotidienne">
          <Texte>La méthode en six étapes n'est pas un formulaire à remplir. C'est une discipline du regard — une façon de regarder systématiquement au-delà de la personne pour auditer son écosystème.</Texte>
          <HighlightBox label="À retenir" couleur="vert">
            <Liste items={[
              "Toujours partir de l'habitude de vie et du projet de la personne",
              "Mesurer la qualité de la participation sur quatre dimensions",
              "Cibler les aptitudes pertinentes sans dresser un bilan de déficiences",
              "Analyser systématiquement les cinq dimensions de l'environnement",
              "Formuler des hypothèses qui relient personne et environnement",
              "Construire un plan d'action centré sur la transformation de l'environnement"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>
      <Quiz
  questions={[
    {
      question: "Par quoi commence toujours une analyse PPH ?",
      reponses: [
        "Par l'évaluation des déficiences de la personne",
        "Par l'identification de l'habitude de vie ciblée",
        "Par l'analyse de l'environnement physique",
        "Par la consultation du dossier médical"
      ],
      bonneReponse: 1,
      explication: "L'analyse PPH commence toujours par l'habitude de vie — ce que la personne souhaite réaliser. On part de son projet, pas de ses déficiences."
    },
    {
      question: "Combien de dimensions environnementales distingue le PPH ?",
      reponses: [
        "Deux : physique et social",
        "Trois : physique, social et institutionnel",
        "Quatre : physique, social, technologique et juridique",
        "Cinq : physique, social, institutionnel, technologique et politique"
      ],
      bonneReponse: 3,
      explication: "Le PPH distingue cinq dimensions environnementales : physique, social et humain, institutionnel et organisationnel, technologique, et politique et juridique."
    },
    {
      question: "Une hypothèse PPH relie :",
      reponses: [
        "Un diagnostic médical et un traitement",
        "Une aptitude personnelle et un obstacle environnemental pour expliquer une restriction de participation",
        "Un objectif professionnel et un résultat attendu",
        "Une déficience et une incapacité"
      ],
      bonneReponse: 1,
      explication: "Une hypothèse PPH relie une aptitude (facteur personnel) avec un obstacle ou facilitateur environnemental pour expliquer comment la situation de handicap est produite."
    },
    {
      question: "L'étape 3 de l'analyse PPH consiste à :",
      reponses: [
        "Lister toutes les déficiences de la personne",
        "Évaluer la qualité de la participation",
        "Repérer uniquement les aptitudes pertinentes pour l'habitude de vie ciblée",
        "Construire le plan d'action"
      ],
      bonneReponse: 2,
      explication: "L'étape 3 consiste à repérer les aptitudes pertinentes — uniquement celles qui concernent l'habitude de vie ciblée. On ne dresse pas un bilan exhaustif des déficiences."
    }
  ]}
  onValiderModule={onValiderModule}
/>
    </div>
  )
}
