import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"

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
            titre="À l'issue de ce module, vous serez en mesure de :"
          >
            <Liste items={[
              "Expliquer les limites du modèle biomédical de la CIH (1980)",
              "Décrire les concepts fondamentaux du PPH : facteurs personnels, environnementaux, habitudes de vie",
              "Distinguer situation de participation sociale et situation de handicap",
              "Identifier en quoi le PPH transforme la posture professionnelle"
            ]} />
          </ConceptBox>

          <Texte>
            Pour les professionnels du secteur, la manière dont nous conceptualisons le handicap n'est pas un simple débat théorique — elle définit le cœur même de nos pratiques d'accompagnement. Pendant longtemps, notre regard a été façonné par un modèle biomédical, centré sur l'individu.</Texte>
        </SectionModule>

        <SectionModule
          eyebrow="Section 1.1"
          titre="Le modèle biomédical : la CIH de 1980"
        >
          <Texte>
            La Classification Internationale du Handicap (CIH) de 1980 illustrait parfaitement cette vision. Elle proposait une séquence linéaire qui attribuait la responsabilité du désavantage social à l'individu et à ses déficiences.
          </Texte>

          <SchemaEtapes
            titre="Le modèle linéaire de la CIH (OMS, 1980)"
            etapes={[
              { niveau: "Niveau 1", nom: "Déficience", definition: "Altération d'une structure ou d'une fonction du corps" },
              { niveau: "Niveau 2", nom: "Incapacité", definition: "Réduction de la capacité à accomplir une activité" },
              { niveau: "Niveau 3", nom: "Désavantage", definition: "Obstacle à l'accomplissement d'un rôle social normal" }
            ]}
            note="Une séquence causale linéaire : la responsabilité du désavantage est attribuée à la personne"
          />

          <PullQuote source="CIH, OMS, 1980">
            À travers ce modèle, la responsabilité d'un désavantage (le handicap) est attribuée à l'individu et aux déficiences dont il est porteur.
          </PullQuote>

          <HighlightBox label="Point clé" couleur="jaune">
            <Texte>Le modèle biomédical place la personne comme source du problème. C'est cette vision qui correspondait à la terminologie de la "personne handicapée" inscrite dans la loi de 1975.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule
          eyebrow="Section 1.2"
          titre="Le PPH : une révolution conceptuelle"
        >
          <Texte>
            Face aux limites de cette approche, Patrick Fougeyrollas a développé le Modèle de Développement Humain - Processus de Production du Handicap (MDH-PPH). Le PPH est un modèle explicatif dont l'objectif est de rendre compte de la dynamique liant les facteurs personnels et les facteurs environnementaux.
          </Texte>

          <PullQuote source="Patrick Fougeyrollas, RIPPH">
            Le handicap n'est pas une caractéristique de la personne, mais une situation résultant de l'interaction entre ses facteurs personnels et les facteurs environnementaux.
          </PullQuote>

          <HighlightBox label="Les trois composantes du PPH" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Facteurs personnels : systèmes organiques, aptitudes, facteurs identitaires",
              "Facteurs environnementaux : tout ce qui est extérieur (physique, social, culturel) — obstacles ou facilitateurs",
              "Habitudes de vie : activités courantes et rôles sociaux que la personne réalise au quotidien"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule
          eyebrow="Section 1.3"
          titre="Participation sociale vs situation de handicap"
        >
          <Texte>
            Le PPH s'intéresse au résultat de l'interaction entre la personne et son environnement. Ce résultat s'exprime en termes de qualité de réalisation des habitudes de vie.
          </Texte>

          <SchemaEtapes
            titre="Le modèle interactionniste du PPH"
            etapes={[
              { niveau: "Personne", nom: "Aptitudes", definition: "Capacités propres à la personne" },
              { niveau: "Interaction", nom: "Habitudes de vie", definition: "Activités et rôles sociaux visés" },
              { niveau: "Environnement", nom: "Facilitateurs / Obstacles", definition: "Ce qui soutient ou freine la participation" }
            ]}
            note="Le résultat de l'interaction détermine la qualité de participation sociale"
          />

          <HighlightBox label="Distinction fondamentale" couleur="vert">
            <Liste items={[
              "Situation de participation sociale : l'interaction entre aptitudes et environnement facilitant permet la réalisation des habitudes de vie",
              "Situation de handicap : des obstacles environnementaux empêchent la réalisation des habitudes de vie"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule
          eyebrow="Section 1.4"
          titre="PPH et CIF : convergences et divergences"
        >
          <Texte>
            Le modèle PPH a fortement influencé la Classification Internationale du Fonctionnement (CIF) de l'OMS (2001), qui a intégré la notion de facteurs environnementaux. Toutefois, une divergence fondamentale demeure.
          </Texte>

          <TableauComparaison
            titre="PPH vs CIF : comparaison"
            colonnes={[
              {
                titre: "Critère",
                contenu: ["Nature", "Objectif", "Distinction clé", "Responsabilité"]
              },
              {
                titre: "PPH (Fougeyrollas)",
                contenu: [
                  "Modèle explicatif",
                  "Comprendre la dynamique",
                  "Sépare aptitudes et situation de handicap",
                  "Renvoyée à l'environnement"
                ]
              },
              {
                titre: "CIF (OMS)",
                contenu: [
                  "Classification",
                  "Catégoriser les situations",
                  "Ne distingue pas activité et participation",
                  "Partagée personne/environnement"
                ]
              }
            ]}
          />

          <PullQuote>
            En opérant cette distinction, le PPH rend impossible l'attribution à la personne de la responsabilité de situations de handicap.
          </PullQuote>
        </SectionModule>

        <SectionModule
          eyebrow="Conclusion"
          titre="Ce que le PPH change pour votre pratique"
        >
          <Texte>
            Adopter le PPH change notre posture professionnelle de façon fondamentale. L'accompagnement ne vise plus seulement à compenser les incapacités de la personne, mais à identifier et réduire les obstacles dans son milieu de vie.
          </Texte>

          <HighlightBox label="Le changement de paradigme en pratique" couleur="vert">
            <Liste items={[
              "De 'personne handicapée' à 'personne en situation de handicap' — un glissement sémantique politique",
              "De la compensation des déficiences à la transformation de l'environnement",
              "De la prise en charge à l'accompagnement centré sur l'autodétermination",
              "De l'individu comme problème à l'environnement comme levier d'action"
            ]} />
          </HighlightBox>

          <PullQuote source="Loi du 11 février 2005, France">
            Constitue un handicap toute limitation d'activité ou restriction de participation à la vie en société subie dans son environnement par une personne en raison d'une altération substantielle, durable ou définitive d'une ou plusieurs fonctions.
          </PullQuote>
        </SectionModule>

      </div>
    </div>
  )
}