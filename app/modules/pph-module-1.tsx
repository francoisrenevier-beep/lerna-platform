import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module1PPH() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Handicap et participation sociale"
        titre="Du handicap-attribut"
        titrePart2="au handicap-situation"
        sousTitre="Comprendre le Processus de Production du Handicap pour transformer nos pratiques."
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi la conceptualisation du handicap est-elle centrale ?">
          <ConceptBox label="Objectifs" titre="A l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Expliquer les limites du modele biomedical de la CIH (1980)",
              "Decrire les concepts fondamentaux du PPH",
              "Distinguer situation de participation sociale et situation de handicap",
              "Identifier en quoi le PPH transforme la posture professionnelle"
            ]} />
          </ConceptBox>
          <Texte>Pour les professionnels du secteur, la maniere dont nous conceptualisons le handicap definit le coeur meme de nos pratiques. Pendant longtemps, notre regard a ete faconne par un modele biomedical centre sur l'individu.</Texte>
          <Texte>Ce modele generait une posture de compensation : identifier les deficiences, y repondre par des soins, des aides techniques, des adaptations individuelles. La question de l'environnement restait secondaire.</Texte>
          <Texte>Le PPH propose un changement radical : le handicap n'est pas dans la personne, il est produit par l'interaction entre la personne et son environnement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1.1" titre="Le modele biomedical : la CIH de 1980">
          <Texte>La Classification Internationale du Handicap de 1980 proposait une sequence lineaire qui attribuait la responsabilite du desavantage social a l'individu.</Texte>

          <SchemaEtapes
            titre="Le modele lineaire de la CIH (OMS, 1980)"
            etapes={[
              { niveau: "Niveau 1", nom: "Deficience", definition: "Alteration d'une structure ou fonction du corps" },
              { niveau: "Niveau 2", nom: "Incapacite", definition: "Reduction de la capacite a accomplir une activite" },
              { niveau: "Niveau 3", nom: "Desavantage", definition: "Obstacle a l'accomplissement d'un role social" }
            ]}
            note="Sequence causale lineaire : la responsabilite est attribuee a la personne"
          />

          <PullQuote source="CIH, OMS, 1980">
            La responsabilite d'un desavantage est attribuee a l'individu et aux deficiences dont il est porteur.
          </PullQuote>

          <HighlightBox label="Point cle" couleur="jaune">
            <Texte>Le modele biomedical place la personne comme source du probleme. L'environnement n'est pas questionne.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1.2" titre="Le PPH : une revolution conceptuelle">
          <Texte>Patrick Fougeyrollas a developpe le Modele de Developpement Humain - Processus de Production du Handicap. Le PPH est un modele explicatif qui rend compte de la dynamique liant facteurs personnels et facteurs environnementaux.</Texte>
          <Texte>Son postulat central : le handicap n'est pas une caracteristique de la personne, mais une situation resultant de l'interaction entre ses facteurs personnels et les facteurs environnementaux.</Texte>

          <PullQuote source="Patrick Fougeyrollas, RIPPH">
            Le handicap n'est pas une caracteristique de la personne, mais une situation resultant de l'interaction entre ses facteurs personnels et les facteurs environnementaux.
          </PullQuote>

          <HighlightBox label="Les trois composantes du PPH" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Facteurs personnels : systemes organiques, aptitudes, facteurs identitaires",
              "Facteurs environnementaux : tout ce qui est exterieur — obstacles ou facilitateurs",
              "Habitudes de vie : activites courantes et roles sociaux realises au quotidien"
            ]} />
          </HighlightBox>

          <Texte>L'environnement agit soit comme un obstacle (qui limite la realisation des habitudes de vie), soit comme un facilitateur (qui la soutient). Cette distinction est fondamentale : elle deplace notre regard de la personne vers son milieu de vie.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1.3" titre="Participation sociale vs situation de handicap">
          <Texte>Le PPH s'interesse au resultat de l'interaction. Ce resultat s'exprime en termes de qualite de realisation des habitudes de vie.</Texte>

          <SchemaEtapes
            titre="Resultats possibles de l'interaction PPH"
            etapes={[
              { niveau: "Resultat positif", nom: "Participation sociale", definition: "Les habitudes de vie sont realisees pleinement" },
              { niveau: "Resultat negatif", nom: "Situation de handicap", definition: "Les habitudes de vie sont perturbees par des obstacles" }
            ]}
            note="Le meme individu peut vivre participation sociale dans un contexte et situation de handicap dans un autre"
          />

          <HighlightBox label="Distinction fondamentale" couleur="vert">
            <Liste items={[
              "Situation de participation sociale : l'environnement facilite la realisation des habitudes de vie",
              "Situation de handicap : des obstacles environnementaux empechent cette realisation",
              "Une meme personne peut alterner entre ces deux situations selon les contextes"
            ]} />
          </HighlightBox>

          <Texte>Cette distinction est politiquement et pratiquement decisive. Elle signifie que reduire les situations de handicap est possible sans modifier la personne : il suffit de transformer l'environnement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1.4" titre="PPH et CIF : convergences et divergences">
          <Texte>Le modele PPH a fortement influence la Classification Internationale du Fonctionnement (CIF) de l'OMS (2001). Toutefois, une divergence fondamentale demeure.</Texte>

          <HighlightBox label="Comparaison PPH vs CIF" couleur="bleu">
  <Liste couleur="bleu" items={[
    "PPH : modele explicatif — comprendre la dynamique",
    "CIF : classification — categoriser les situations",
    "PPH : separe aptitudes et situation de handicap",
    "CIF : ne distingue pas activite et participation"
  ]} />
</HighlightBox>

          <PullQuote>
            En operant cette distinction, le PPH rend impossible l'attribution a la personne de la responsabilite des situations de handicap.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que le PPH change pour votre pratique">
          <Texte>Adopter le PPH change notre posture professionnelle de facon fondamentale. L'accompagnement ne vise plus a compenser les incapacites, mais a identifier et reduire les obstacles dans le milieu de vie.</Texte>

          <HighlightBox label="Le changement de paradigme" couleur="vert">
            <Liste items={[
              "De personne handicapee a personne en situation de handicap",
              "De la compensation des deficiences a la transformation de l'environnement",
              "De la prise en charge a l'accompagnement centre sur l'autodetermination",
              "De l'individu comme probleme a l'environnement comme levier d'action"
            ]} />
          </HighlightBox>

          <Texte>Ce changement de paradigme n'est pas seulement semantique. Il redefinit notre role, nos priorites et nos criteres de succes. Reussir un accompagnement PPH, c'est avoir reduit les obstacles environnementaux et renforce les facilitateurs pour que la personne realise ses habitudes de vie.</Texte>

          <PullQuote source="Loi du 11 fevrier 2005, France">
            Constitue un handicap toute limitation d'activite ou restriction de participation a la vie en societe subie dans son environnement par une personne en raison d'une alteration substantielle, durable ou definitive.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
  questions={[
    {
      question: "Selon le modele PPH, le handicap est :",
      reponses: [
        "Une caracteristique permanente de la personne",
        "Une situation resultant de l'interaction entre la personne et son environnement",
        "Une deficience physique ou mentale",
        "Un statut administratif reconnu par la loi"
      ],
      bonneReponse: 1,
      explication: "Le PPH definit le handicap comme une situation produite par l'interaction entre les facteurs personnels et les facteurs environnementaux — pas comme une caracteristique de la personne."
    },
    {
      question: "Dans le modele PPH, l'environnement peut etre :",
      reponses: [
        "Uniquement un obstacle a surmonter",
        "Uniquement un facilitateur a valoriser",
        "A la fois un obstacle ou un facilitateur selon le contexte",
        "Neutre et sans influence sur la participation"
      ],
      bonneReponse: 2,
      explication: "L'environnement agit soit comme obstacle (il limite la realisation des habitudes de vie) soit comme facilitateur (il la soutient). Cette distinction est au coeur du PPH."
    },
    {
      question: "Qu'est-ce qu'une habitude de vie dans le PPH ?",
      reponses: [
        "Une routine quotidienne imposee par l'institution",
        "Une activite courante ou un role social que la personne souhaite realiser",
        "Un exercice de reeducation prescrit par un medecin",
        "Un comportement automatique lie a une deficience"
      ],
      bonneReponse: 1,
      explication: "Les habitudes de vie sont les activites courantes et roles sociaux que la personne souhaite ou doit realiser. Elles constituent le coeur de la participation sociale."
    },
    {
      question: "La principale difference entre le PPH et le modele biomedical est :",
      reponses: [
        "Le PPH est plus recent",
        "Le PPH attribue la responsabilite du handicap a l'environnement, pas a la personne",
        "Le PPH ne s'interesse pas aux deficiences",
        "Le PPH est utilise uniquement en France"
      ],
      bonneReponse: 1,
      explication: "Le modele biomedical attribuait la responsabilite du desavantage a la personne. Le PPH deplace cette responsabilite vers l'interaction personne-environnement, ce qui change radicalement la posture professionnelle."
    }
  ]}
  onTermine={function() {}}
/>
    </div>
  )
}
