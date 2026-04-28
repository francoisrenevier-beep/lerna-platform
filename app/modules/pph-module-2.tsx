import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"

export function Module2PPH() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Analyse pratique"
        titre="Lire et analyser une situation"
        titrePart2="avec le PPH"
        sousTitre="Du cadre conceptuel a la grille d analyse pratique : apprendre a decrypter une situation d accompagnement pour identifier les vrais leviers d action."
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le role de l analyse PPH : changer de regard">
          <ConceptBox label="Ce que permet l analyse PPH" titre="Quatre transformations professionnelles">
            <Liste items={[
              "Sortir du jugement subjectif : passer de commentaires reducteurs a une description objective des interactions personne-environnement",
              "Identifier les leviers d action : l analyse est tournee vers ce qui peut etre modifie dans l environnement",
              "Changer de responsable : le PPH incarne le glissement de personne handicapee a personne en situation de handicap",
              "Travailler en coherence : offrir un langage commun pour co-construire une representation partagee"
            ]} />
          </ConceptBox>
          <Texte>L objectif n est pas de poser un diagnostic sur la personne. C est de comprendre la dynamique qui produit la situation de handicap — et d agir sur elle.</Texte>
          <PullQuote>
            Le PPH est un modele interactionniste : il analyse l interaction entre les facteurs personnels et environnementaux pour expliquer la qualite de la participation sociale.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2.1" titre="Une methode d analyse en six etapes">
          <Texte>Pour analyser une situation avec le PPH, la methode se decompose en six etapes cles. Chaque etape prepare la suivante.</Texte>
          <HighlightBox label="Principe fondateur" couleur="bleu">
            <Texte>Cette methode ne cherche pas a evaluer la personne. Elle cherche a auditer son ecosysteme pour comprendre ce qui freine ou facilite sa participation sociale.</Texte>
          </HighlightBox>
          <SchemaEtapes
            titre="Les 6 etapes de l analyse PPH"
            etapes={[
              { niveau: "Etape 1", nom: "Habitude de vie", definition: "Identifier l habitude de vie ciblee" },
              { niveau: "Etape 2", nom: "Participation", definition: "Evaluer la qualite de la participation" },
              { niveau: "Etape 3", nom: "Aptitudes", definition: "Reperer les aptitudes pertinentes" }
            ]}
          />
          <SchemaEtapes
            titre=""
            etapes={[
              { niveau: "Etape 4", nom: "Environnement", definition: "Identifier les facteurs environnementaux" },
              { niveau: "Etape 5", nom: "Hypotheses", definition: "Formuler les hypotheses PPH" },
              { niveau: "Etape 6", nom: "Plan d action", definition: "Construire le plan d action" }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Etape 1" titre="Identifier l habitude de vie ciblee">
          <ConceptBox label="Definition cle" titre="Qu est-ce qu une habitude de vie ?">
            <Texte>Une habitude de vie est une activite courante (se nourrir, se deplacer, se soigner) ou un role social (travailler, etre parent, avoir des loisirs, participer a la vie citoyenne) que la personne souhaite ou doit realiser.</Texte>
            <Texte>C est ce qui donne du sens a sa participation sociale. C est son projet de vie, ses droits, ses aspirations.</Texte>
          </ConceptBox>
          <HighlightBox label="Point cle" couleur="vert">
            <Texte>On part toujours du choix ou du projet de la personne (son autodetermination) — et non du regard institutionnel ou du probleme percu.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Etape 2" titre="Evaluer la qualite de la participation">
          <Texte>Le PPH mesure la qualite de la participation sur un continuum — pas seulement oui ou non. On s interroge sur quatre dimensions :</Texte>
          <HighlightBox label="Les 4 dimensions" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Degre de realisation : la participation est-elle complete, partielle, ou absente ?",
              "Satisfaction : comment la personne vit-elle cette participation ?",
              "Stabilite : cette participation est-elle reguliere ou fragilisee ?",
              "Effort requis : quels efforts sont necessaires ? (fatigue, stress, temps)"
            ]} />
          </HighlightBox>
          <PullQuote>
            Julien souhaite participer a l atelier cuisine. Il y participe partiellement et aime cela — mais se fatigue vite. L objectif n est pas de changer d activite, mais de consolider cette participation en reduisant les obstacles a l effort.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Etape 3" titre="Reperer les aptitudes pertinentes">
          <Texte>Les aptitudes sont les capacites propres a la personne — l un des facteurs personnels du PPH. Elles incluent les capacites motrices, cognitives, communicationnelles, affectives, sensorielles.</Texte>
          <HighlightBox label="Ce que le PPH nous demande" couleur="vert">
            <Liste items={[
              "Cibler uniquement les aptitudes pertinentes pour l habitude de vie visee",
              "Ne pas lister toutes les deficiences — cela n est ni utile ni respectueux",
              "Decrire les aptitudes de facon fonctionnelle et contextualisee",
              "Garder le regard positif : ce que la personne peut faire, pas seulement ce qu elle ne peut pas"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Etape 4" titre="Identifier les facteurs environnementaux">
          <Texte>C est le coeur de l analyse PPH. L environnement agit soit comme facilitateur, soit comme obstacle. On distingue cinq dimensions environnementales :</Texte>
          <HighlightBox label="Les 5 dimensions de l environnement" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Physique et architectural : accessibilite des lieux, transports, equipements",
              "Social et humain : attitudes des proches et professionnels, soutiens disponibles",
              "Institutionnel et organisationnel : regles, procedures, horaires, ressources",
              "Technologique : outils, aides techniques, numerique",
              "Politique et juridique : lois, droits, financement"
            ]} />
          </HighlightBox>
          <PullQuote>
            Un environnement facilitateur compense les limitations d aptitudes. Un environnement obstacle les amplifie. La meme personne peut etre en situation de participation dans un contexte et de handicap dans un autre.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Etape 5" titre="Formuler les hypotheses PPH">
          <Texte>Une hypothese PPH relie les observations pour comprendre comment la situation de handicap est produite. Elle prend toujours la forme : telle aptitude, en interaction avec tel obstacle environnemental, produit telle restriction dans la realisation de telle habitude de vie.</Texte>
          <HighlightBox label="Structure d une hypothese PPH" couleur="vert">
            <Liste items={[
              "Identifier l aptitude concernee (facteur personnel)",
              "Identifier l obstacle ou facilitateur environnemental",
              "Decrire l effet sur la realisation de l habitude de vie",
              "Formuler en termes d interaction, pas de causalite unidirectionnelle"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Etape 6" titre="Construire le plan d action">
          <Texte>Le plan d action PPH decoule directement des hypotheses. Il cible les obstacles environnementaux identifes et les transforme en facilitateurs.</Texte>
          <HighlightBox label="Principes du plan d action PPH" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Agir prioritairement sur l environnement, pas sur la personne",
              "Co-construire avec la personne concernee",
              "Definir des objectifs mesurables en termes de participation sociale",
              "Prevoir une evaluation reguliere de l effet des actions"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="L analyse PPH en pratique quotidienne">
          <Texte>La methode en six etapes n est pas un formulaire a remplir. C est une discipline du regard — une facon de regarder systematiquement au-dela de la personne pour auditer son ecosysteme.</Texte>
          <HighlightBox label="A retenir" couleur="vert">
            <Liste items={[
              "Toujours partir de l habitude de vie et du projet de la personne",
              "Mesurer la qualite de la participation sur quatre dimensions",
              "Cibler les aptitudes pertinentes sans dresser un bilan de deficiences",
              "Analyser systematiquement les cinq dimensions de l environnement",
              "Formuler des hypotheses qui relient personne et environnement",
              "Construire un plan d action centre sur la transformation de l environnement"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>
    </div>
  )
}