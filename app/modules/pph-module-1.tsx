import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"

export function Module1PPH() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Handicap et participation sociale"
        titre="Du handicap-attribut"
        titrePart2="au handicap-situation"
        sousTitre="Comprendre le Processus de Production du Handicap pour transformer nos pratiques d'accompagnement."
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule
          eyebrow="Introduction"
          titre="Pourquoi la conceptualisation du handicap est-elle centrale pour nos pratiques ?"
        >
          <ConceptBox
            label="Objectifs d'apprentissage"
            titre="A l'issue de ce module, vous serez en mesure de :"
          >
            <Liste items={[
              "Expliquer les limites du modele biomedical de la CIH (1980)",
              "Decrire les concepts fondamentaux du PPH : facteurs personnels, environnementaux, habitudes de vie",
              "Distinguer situation de participation sociale et situation de handicap",
              "Identifier en quoi le PPH transforme la posture professionnelle"
            ]} />
          </ConceptBox>
          <Texte>Pour les professionnels du secteur, la maniere dont nous conceptualisons le handicap n est pas un simple debat theorique — elle definit le coeur meme de nos pratiques d accompagnement. Pendant longtemps, notre regard a ete faconne par un modele biomedical, centre sur l individu.</Texte>
        </SectionModule>

        <SectionModule
          eyebrow="Section 1.1"
          titre="Le modele biomedical : la CIH de 1980"
        >
          <Texte>La Classification Internationale du Handicap (CIH) de 1980 illustrait parfaitement cette vision. Elle proposait une sequence lineaire qui attribuait la responsabilite du desavantage social a l individu et a ses deficiences.</Texte>

          <SchemaEtapes
            titre="Le modele lineaire de la CIH (OMS, 1980)"
            etapes={[
              { niveau: "Niveau 1", nom: "Deficience", definition: "Alteration d une structure ou d une fonction du corps" },
              { niveau: "Niveau 2", nom: "Incapacite", definition: "Reduction de la capacite a accomplir une activite" },
              { niveau: "Niveau 3", nom: "Desavantage", definition: "Obstacle a l accomplissement d un role social normal" }
            ]}
            note="Une sequence causale lineaire : la responsabilite du desavantage est attribuee a la personne"
          />

          <PullQuote source="CIH, OMS, 1980">
            A travers ce modele, la responsabilite d un desavantage (le handicap) est attribuee a l individu et aux deficiences dont il est porteur.
          </PullQuote>

          <HighlightBox label="Point cle" couleur="jaune">
            <Texte>Le modele biomedical place la personne comme source du probleme. C est cette vision qui correspondait a la terminologie de la personne handicapee inscrite dans la loi de 1975.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule
          eyebrow="Section 1.2"
          titre="Le PPH : une revolution conceptuelle"
        >
          <Texte>Face aux limites de cette approche, Patrick Fougeyrollas a developpe le Modele de Developpement Humain - Processus de Production du Handicap (MDH-PPH). Le PPH est un modele explicatif dont l objectif est de rendre compte de la dynamique liant les facteurs personnels et les facteurs environnementaux.</Texte>

          <PullQuote source="Patrick Fougeyrollas, RIPPH">
            Le handicap n est pas une caracteristique de la personne, mais une situation resultant de l interaction entre ses facteurs personnels et les facteurs environnementaux.
          </PullQuote>

          <HighlightBox label="Les trois composantes du PPH" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Facteurs personnels : systemes organiques, aptitudes, facteurs identitaires",
              "Facteurs environnementaux : tout ce qui est exterieur (physique, social, culturel) — obstacles ou facilitateurs",
              "Habitudes de vie : activites courantes et roles sociaux que la personne realise au quotidien"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule
          eyebrow="Section 1.3"
          titre="Participation sociale vs situation de handicap"
        >
          <Texte>Le PPH s interesse au resultat de l interaction entre la personne et son environnement. Ce resultat s exprime en termes de qualite de realisation des habitudes de vie.</Texte>

          <SchemaEtapes
            titre="Le modele interactionniste du PPH"
            etapes={[
              { niveau: "Personne", nom: "Aptitudes", definition: "Capacites propres a la personne" },
              { niveau: "Interaction", nom: "Habitudes de vie", definition: "Activites et roles sociaux vises" },
              { niveau: "Environnement", nom: "Facilitateurs / Obstacles", definition: "Ce qui soutient ou freine la participation" }
            ]}
            note="Le resultat de l interaction determine la qualite de participation sociale"
          />

          <HighlightBox label="Distinction fondamentale" couleur="vert">
            <Liste items={[
              "Situation de participation sociale : l interaction entre aptitudes et environnement facilitant permet la realisation des habitudes de vie",
              "Situation de handicap : des obstacles environnementaux empechent la realisation des habitudes de vie"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule
          eyebrow="Section 1.4"
          titre="PPH et CIF : convergences et divergences"
        >
          <Texte>Le modele PPH a fortement influence la Classification Internationale du Fonctionnement (CIF) de l OMS (2001), qui a integre la notion de facteurs environnementaux. Toutefois, une divergence fondamentale demeure.</Texte>

          <TableauComparaison
            titre="PPH vs CIF : comparaison"
            colonnes={[
              {
                titre: "Critere",
                contenu: ["Nature", "Objectif", "Distinction cle", "Responsabilite"]
              },
              {
                titre: "PPH (Fougeyrollas)",
                contenu: [
                  "Modele explicatif",
                  "Comprendre la dynamique",
                  "Separe aptitudes et situation de handicap",
                  "Renvoyee a l environnement"
                ]
              },
              {
                titre: "CIF (OMS)",
                contenu: [
                  "Classification",
                  "Categoriser les situations",
                  "Ne distingue pas activite et participation",
                  "Partagee personne/environnement"
                ]
              }
            ]}
          />

          <PullQuote>
            En operant cette distinction, le PPH rend impossible l attribution a la personne de la responsabilite de situations de handicap.
          </PullQuote>
        </SectionModule>

        <SectionModule
          eyebrow="Conclusion"
          titre="Ce que le PPH change pour votre pratique"
        >
          <Texte>Adopter le PPH change notre posture professionnelle de facon fondamentale. L accompagnement ne vise plus seulement a compenser les incapacites de la personne, mais a identifier et reduire les obstacles dans son milieu de vie.</Texte>

          <HighlightBox label="Le changement de paradigme en pratique" couleur="vert">
            <Liste items={[
              "De personne handicapee a personne en situation de handicap",
              "De la compensation des deficiences a la transformation de l environnement",
              "De la prise en charge a l accompagnement centre sur l autodetermination",
              "De l individu comme probleme a l environnement comme levier d action"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>
    </div>
  )
}