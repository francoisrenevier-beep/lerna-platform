import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module1PPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
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
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Expliquer les limites du modèle biomédical de la CIH (1980)",
              "Décrire les concepts fondamentaux du PPH",
              "Distinguer situation de participation sociale et situation de handicap",
              "Identifier en quoi le PPH transforme la posture professionnelle"
            ]} />
          </ConceptBox>
          <Texte>Pour les professionnels du secteur, la manière dont nous conceptualisons le handicap définit le cœur même de nos pratiques. Pendant longtemps, notre regard a été façonné par un modèle biomédical centré sur l'individu.</Texte>
          <Texte>Ce modèle générait une posture de compensation : identifier les déficiences, y répondre par des soins, des aides techniques, des adaptations individuelles. La question de l'environnement restait secondaire.</Texte>
          <Texte>Le PPH propose un changement radical : le handicap n'est pas dans la personne, il est produit par l'interaction entre la personne et son environnement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1.1" titre="Le modèle biomédical : la CIH de 1980">
          <Texte>La Classification Internationale du Handicap de 1980 proposait une séquence linéaire qui attribuait la responsabilité du désavantage social à l'individu.</Texte>

          <SchemaEtapes
            titre="Le modèle linéaire de la CIH (OMS, 1980)"
            etapes={[
              { niveau: "Niveau 1", nom: "Déficience", definition: "Altération d'une structure ou fonction du corps" },
              { niveau: "Niveau 2", nom: "Incapacité", definition: "Réduction de la capacité à accomplir une activité" },
              { niveau: "Niveau 3", nom: "Désavantage", definition: "Obstacle à l'accomplissement d'un rôle social" }
            ]}
            note="Séquence causale linéaire : la responsabilité est attribuée à la personne"
          />

          <PullQuote source="CIH, OMS, 1980">
            La responsabilité d'un désavantage est attribuée à l'individu et aux déficiences dont il est porteur.
          </PullQuote>

          <HighlightBox label="Point clé" couleur="jaune">
            <Texte>Le modèle biomédical place la personne comme source du problème. L'environnement n'est pas questionné.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1.2" titre="Le PPH : une révolution conceptuelle">
          <Texte>Patrick Fougeyrollas a développé le Modèle de Développement Humain - Processus de Production du Handicap. Le PPH est un modèle explicatif qui rend compte de la dynamique liant facteurs personnels et facteurs environnementaux.</Texte>
          <Texte>Son postulat central : le handicap n'est pas une caractéristique de la personne, mais une situation résultant de l'interaction entre ses facteurs personnels et les facteurs environnementaux.</Texte>

          <PullQuote source="Patrick Fougeyrollas, RIPPH">
            Le handicap n'est pas une caractéristique de la personne, mais une situation résultant de l'interaction entre ses facteurs personnels et les facteurs environnementaux.
          </PullQuote>

          <HighlightBox label="Les trois composantes du PPH" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Facteurs personnels : systèmes organiques, aptitudes, facteurs identitaires",
              "Facteurs environnementaux : tout ce qui est extérieur — obstacles ou facilitateurs",
              "Habitudes de vie : activités courantes et rôles sociaux réalisés au quotidien"
            ]} />
          </HighlightBox>

          <Texte>L'environnement agit soit comme un obstacle (qui limite la réalisation des habitudes de vie), soit comme un facilitateur (qui la soutient). Cette distinction est fondamentale : elle déplace notre regard de la personne vers son milieu de vie.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1.3" titre="Participation sociale vs situation de handicap">
          <Texte>Le PPH s'intéresse au résultat de l'interaction. Ce résultat s'exprime en termes de qualité de réalisation des habitudes de vie.</Texte>

          <SchemaEtapes
            titre="Résultats possibles de l'interaction PPH"
            etapes={[
              { niveau: "Résultat positif", nom: "Participation sociale", definition: "Les habitudes de vie sont réalisées pleinement" },
              { niveau: "Résultat négatif", nom: "Situation de handicap", definition: "Les habitudes de vie sont perturbées par des obstacles" }
            ]}
            note="Le même individu peut vivre participation sociale dans un contexte et situation de handicap dans un autre"
          />

          <HighlightBox label="Distinction fondamentale" couleur="vert">
            <Liste items={[
              "Situation de participation sociale : l'environnement facilite la réalisation des habitudes de vie",
              "Situation de handicap : des obstacles environnementaux empêchent cette réalisation",
              "Une même personne peut alterner entre ces deux situations selon les contextes"
            ]} />
          </HighlightBox>

          <Texte>Cette distinction est politiquement et pratiquement décisive. Elle signifie que réduire les situations de handicap est possible sans modifier la personne : il suffit de transformer l'environnement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1.4" titre="PPH et CIF : convergences et divergences">
          <Texte>Le modèle PPH a fortement influencé la Classification Internationale du Fonctionnement (CIF) de l'OMS (2001). Toutefois, une divergence fondamentale demeure.</Texte>

          <HighlightBox label="Comparaison PPH vs CIF" couleur="bleu">
  <Liste couleur="bleu" items={[
    "PPH : modèle explicatif — comprendre la dynamique",
    "CIF : classification — catégoriser les situations",
    "PPH : sépare aptitudes et situation de handicap",
    "CIF : ne distingue pas activité et participation"
  ]} />
</HighlightBox>

          <PullQuote>
            En opérant cette distinction, le PPH rend impossible l'attribution à la personne de la responsabilité des situations de handicap.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que le PPH change pour votre pratique">
          <Texte>Adopter le PPH change notre posture professionnelle de façon fondamentale. L'accompagnement ne vise plus à compenser les incapacités, mais à identifier et réduire les obstacles dans le milieu de vie.</Texte>

          <HighlightBox label="Le changement de paradigme" couleur="vert">
            <Liste items={[
              "De personne handicapée à personne en situation de handicap",
              "De la compensation des déficiences à la transformation de l'environnement",
              "De la prise en charge à l'accompagnement centré sur l'autodétermination",
              "De l'individu comme problème à l'environnement comme levier d'action"
            ]} />
          </HighlightBox>

          <Texte>Ce changement de paradigme n'est pas seulement sémantique. Il redéfinit notre rôle, nos priorités et nos critères de succès. Réussir un accompagnement PPH, c'est avoir réduit les obstacles environnementaux et renforcé les facilitateurs pour que la personne réalise ses habitudes de vie.</Texte>

          <PullQuote source="Loi du 11 février 2005, France">
            Constitue un handicap toute limitation d'activité ou restriction de participation à la vie en société subie dans son environnement par une personne en raison d'une altération substantielle, durable ou définitive.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
  questions={[
    {
      question: "Selon le modèle PPH, le handicap est :",
      reponses: [
        "Une caractéristique permanente de la personne",
        "Une situation résultant de l'interaction entre la personne et son environnement",
        "Une déficience physique ou mentale",
        "Un statut administratif reconnu par la loi"
      ],
      bonneReponse: 1,
      explication: "Le PPH définit le handicap comme une situation produite par l'interaction entre les facteurs personnels et les facteurs environnementaux — pas comme une caractéristique de la personne."
    },
    {
      question: "Dans le modèle PPH, l'environnement peut être :",
      reponses: [
        "Uniquement un obstacle à surmonter",
        "Uniquement un facilitateur à valoriser",
        "À la fois un obstacle ou un facilitateur selon le contexte",
        "Neutre et sans influence sur la participation"
      ],
      bonneReponse: 2,
      explication: "L'environnement agit soit comme obstacle (il limite la réalisation des habitudes de vie) soit comme facilitateur (il la soutient). Cette distinction est au cœur du PPH."
    },
    {
      question: "Qu'est-ce qu'une habitude de vie dans le PPH ?",
      reponses: [
        "Une routine quotidienne imposée par l'institution",
        "Une activité courante ou un rôle social que la personne souhaite réaliser",
        "Un exercice de rééducation prescrit par un médecin",
        "Un comportement automatique lié à une déficience"
      ],
      bonneReponse: 1,
      explication: "Les habitudes de vie sont les activités courantes et rôles sociaux que la personne souhaite ou doit réaliser. Elles constituent le cœur de la participation sociale."
    },
    {
      question: "La principale différence entre le PPH et le modèle biomédical est :",
      reponses: [
        "Le PPH est plus récent",
        "Le PPH attribue la responsabilité du handicap à l'environnement, pas à la personne",
        "Le PPH ne s'intéresse pas aux déficiences",
        "Le PPH est utilisé uniquement en France"
      ],
      bonneReponse: 1,
      explication: "Le modèle biomédical attribuait la responsabilité du désavantage à la personne. Le PPH déplace cette responsabilité vers l'interaction personne-environnement, ce qui change radicalement la posture professionnelle."
    }
  ]}
  onValiderModule={onValiderModule}
/>
    </div>
  )
}
