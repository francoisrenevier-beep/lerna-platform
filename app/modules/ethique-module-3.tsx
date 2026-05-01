import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3Ethique() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Éthique professionnelle"
        titre="Utilitarisme, déontologisme et éthique des vertus"
        sousTitre="Penser les choix professionnels et arbitrer dans la complexité"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi plusieurs manières de penser l'éthique ?">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre les trois grandes théories éthiques",
              "Identifier leur apport et leurs limites",
              "Savoir mobiliser chaque théorie selon la situation",
              "Développer une posture éthique pluraliste"
            ]} />
          </ConceptBox>
          <Texte>Dans la pratique, certaines situations résistent à toute solution évidente. Chaque option comporte une part de renoncement. Trois grandes traditions philosophiques offrent des grilles de lecture complémentaires.</Texte>
          <SchemaEtapes
            titre="Trois grandes traditions éthiques"
            etapes={[
              { niveau: "Tradition 1", nom: "Utilitarisme", definition: "Maximiser le bien-être collectif — évaluer selon les conséquences" },
              { niveau: "Tradition 2", nom: "Déontologisme", definition: "Respecter les règles et devoirs — agir selon des principes universaux" },
              { niveau: "Tradition 3", nom: "Éthique des vertus", definition: "Être un professionnel de caractère — cultiver les qualités morales" }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="L'utilitarisme : maximiser le bien-être collectif">
          <Texte>Principe : une action est bonne si elle produit le plus grand bien pour le plus grand nombre.</Texte>
          <HighlightBox label="Apport et limite" couleur="jaune">
            <Liste items={[
              "Apport : utile pour les décisions collectives, la gestion des ressources, les politiques institutionnelles",
              "Limite : risque de sacrifier les droits individuels au nom du collectif"
            ]} />
          </HighlightBox>
          <PullQuote>
            L'utilitarisme nous force à penser aux conséquences réelles de nos actions — pas seulement à nos intentions.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le déontologisme : respecter les règles et les droits">
          <Texte>Principe (Kant) : agis selon des principes que tu pourrais vouloir universels. Certaines actions sont intrinsèquement mauvaises, quelles que soient leurs conséquences.</Texte>
          <HighlightBox label="Apport et limite" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Apport : protège les droits individuels, garantit la prévisibilité",
              "Limite : peut conduire à des rigidités face à des situations complexes",
              "En déontologie, mentir est toujours mal — même si un mensonge pourrait sauver une vie. Ce rigorisme est une force et une limite."
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'éthique des vertus : être un professionnel de caractère">
          <Texte>Aristote : ce qui compte n'est pas seulement ce qu'on fait, mais qui on est. Les vertus professionnelles : prudence, justice, bienveillance, honnêteté, courage moral.</Texte>
          <PullQuote>
            La vertu n'est pas ce qu'on fait quand on est surveillé. C'est ce qu'on fait quand personne ne regarde.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Comment articuler ces trois approches ?">
          <Texte>Plutôt que de choisir une théorie et l'appliquer mécaniquement, le professionnel éthique mobilise les trois comme outils de questionnement :</Texte>
          <HighlightBox label="Grille d'analyse pluraliste" couleur="vert">
            <Liste items={[
              "Utilitarisme → quelles sont les conséquences prévisibles de chaque option ?",
              "Déontologisme → quels droits et devoirs sont en jeu ?",
              "Éthique des vertus → que ferait un professionnel de bonne vertu dans cette situation ?"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "L'utilitarisme évalue une action selon :",
            reponses: [
              "Les intentions de celui qui agit",
              "Les règles universelles auxquelles elle se conforme",
              "Les conséquences qu'elle produit pour le plus grand nombre",
              "Les vertus qu'elle exprime"
            ],
            bonneReponse: 2,
            explication: "L'utilitarisme juge les actions à l'aune de leurs conséquences : est-ce que cette action produit le plus grand bien pour le plus grand nombre ?"
          },
          {
            question: "Le principe fondamental du déontologisme (Kant) est :",
            reponses: [
              "Agir pour maximiser le bonheur collectif",
              "Agir selon des principes universalisables, quelles que soient les conséquences",
              "Agir selon son intuition morale personnelle",
              "Agir en accord avec les règles institutionnelles"
            ],
            bonneReponse: 1,
            explication: "Kant formule l'impératif catégorique : agis selon des principes que tu pourrais vouloir universels. Certaines actions sont mauvaises indépendamment de leurs conséquences."
          },
          {
            question: "L'éthique des vertus s'intéresse principalement à :",
            reponses: [
              "Les règles et obligations",
              "Les conséquences de l'action",
              "Le caractère et les qualités morales de la personne qui agit",
              "Les droits et devoirs légaux"
            ],
            bonneReponse: 2,
            explication: "L'éthique des vertus (Aristote) s'intéresse à qui on est, pas seulement à ce qu'on fait. Elle cultive les vertus professionnelles : prudence, justice, bienveillance, honnêteté, courage moral."
          },
          {
            question: "Face à une situation complexe, mobiliser les trois théories éthiques permet de :",
            reponses: [
              "Trouver une réponse certaine et définitive",
              "Éclairer les différentes dimensions de la situation et enrichir la délibération",
              "Éviter d'avoir à prendre une décision",
              "Se conformer automatiquement aux règles institutionnelles"
            ],
            bonneReponse: 1,
            explication: "Les trois théories ne sont pas concurrentes mais complémentaires. Mobilisées ensemble, elles éclairent les conséquences, les droits en jeu et le caractère professionnel requis."
          }
        ]}
        onTermine={function() {}}
      />
    </div>
  )
}
