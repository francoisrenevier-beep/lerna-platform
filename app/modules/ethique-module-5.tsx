import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module5Ethique() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Éthique professionnelle"
        titre="Éthique et justice sociale"
        sousTitre="Agir professionnellement dans des institutions imparfaites"
        duree="30 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="L'éthique au-delà de la relation">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre le lien entre éthique individuelle et structures sociales",
              "Identifier les inégalités systémiques qui affectent les personnes accompagnées",
              "Développer une posture professionnelle engagée et critique",
              "Articuler éthique du care et justice sociale"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Au-delà de la relation : l'éthique dans les structures">
          <Texte>L'éthique ne se joue pas seulement dans la relation interpersonnelle. Les structures sociales, institutionnelles et politiques conditionnent les possibilités d'action.</Texte>
          <PullQuote>
            Être éthique dans une institution imparfaite, ce n'est pas seulement bien se comporter individuellement — c'est aussi interroger et transformer les structures.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les inégalités structurelles et leurs effets sur les personnes accompagnées">
          <Texte>Les personnes accompagnées sont souvent victimes d'inégalités multiples : pauvreté, discrimination, stigmatisation. Ces inégalités ne sont pas des fatalités — elles sont le résultat de choix politiques et institutionnels.</Texte>
          <HighlightBox label="Posture professionnelle éthique" couleur="bleu">
            <Texte>Un professionnel éthique ne se contente pas d'adapter les personnes à un système injuste. Il contribue à rendre le système plus juste.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="La posture professionnelle engagée">
          <Texte>S'engager éthiquement ne signifie pas militer politiquement dans le cadre professionnel. Cela signifie :</Texte>
          <Liste items={[
            "Nommer les injustices quand elles se produisent",
            "Refuser de participer à des pratiques dégradantes",
            "Soutenir les personnes dans la défense de leurs droits",
            "Contribuer à améliorer les pratiques institutionnelles"
          ]} />
          <PullQuote>
            Le courage éthique, c'est dire ce qui est juste même quand c'est difficile.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Synthèse" titre="Intégrer l'éthique dans sa pratique quotidienne">
          <HighlightBox label="Ce que vous pouvez faire dès aujourd'hui" couleur="vert">
            <Liste items={[
              "Utiliser la grille d'analyse éthique face à une situation complexe",
              "Proposer un espace de délibération éthique dans votre équipe",
              "Nommer une valeur mise en tension dans votre prochain colloque",
              "Relire une décision passée à la lumière des théories éthiques étudiées"
            ]} />
          </HighlightBox>
          <PullQuote>
            L'éthique n'est pas une destination. C'est une manière de voyager.
          </PullQuote>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "L'éthique professionnelle se joue :",
            reponses: [
              "Uniquement dans la relation interpersonnelle",
              "Uniquement dans les grandes décisions institutionnelles",
              "À la fois dans les relations individuelles et dans les structures sociales et institutionnelles",
              "Uniquement dans les textes de loi et règlements"
            ],
            bonneReponse: 2,
            explication: "L'éthique ne se joue pas seulement dans la relation de soin. Les structures sociales et institutionnelles conditionnent les possibilités d'action et relèvent aussi d'une responsabilité éthique."
          },
          {
            question: "Face aux inégalités structurelles, un professionnel éthique :",
            reponses: [
              "Aide uniquement les personnes à s'adapter au système existant",
              "Ne s'implique pas dans les questions qui dépassent sa mission",
              "Contribue à rendre le système plus juste tout en accompagnant les personnes",
              "Dénonce publiquement les injustices sur les réseaux sociaux"
            ],
            bonneReponse: 2,
            explication: "Un professionnel éthique ne se contente pas d'adapter les personnes à un système injuste. Il contribue, dans son rôle, à améliorer les pratiques et à défendre les droits des personnes."
          },
          {
            question: "Le courage éthique professionnel signifie :",
            reponses: [
              "Prendre des risques inutiles dans l'exercice professionnel",
              "Dire ce qui est juste même quand c'est difficile, dans le cadre professionnel",
              "Résister systématiquement à toute autorité institutionnelle",
              "Agir seul sans consulter l'équipe"
            ],
            bonneReponse: 1,
            explication: "Le courage éthique, c'est nommer les injustices, refuser les pratiques dégradantes et soutenir les droits des personnes — même quand c'est inconfortable."
          },
          {
            question: "Intégrer l'éthique dans sa pratique quotidienne, c'est :",
            reponses: [
              "Attendre les grandes décisions éthiques pour s'interroger",
              "Une posture continue qui s'exerce dans chaque situation professionnelle",
              "Se former une seule fois à l'éthique et appliquer mécaniquement les règles",
              "Réserver les questions éthiques aux réunions institutionnelles"
            ],
            bonneReponse: 1,
            explication: "L'éthique n'est pas une destination mais une manière de voyager. Elle s'exerce au quotidien, dans chaque décision, chaque relation, chaque situation complexe."
          }
        ]}
        onTermine={function() {}}
      />
    </div>
  )
}
