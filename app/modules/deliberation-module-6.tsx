import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module6Deliberation({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={6}
        categorie="Éthique professionnelle"
        titre="Intégration"
        titrePart2="L'éthique dans l'institution"
        sousTitre="Passer de la compréhension individuelle de la délibération éthique à son inscription dans les pratiques et les structures institutionnelles."
        duree="35 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Synthèse et transfert">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Définir la posture professionnelle éthiquement orientée",
              "Comprendre comment créer une culture éthique d'équipe",
              "Maîtriser le modèle de l'équilibre réfléchi",
              "Identifier les conditions structurelles de la délibération"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La posture professionnelle éthique : Au-delà du rôle fonctionnel">
          <Texte>L'objectif final de la formation n'est pas de produire des experts en éthique, mais des professionnels dont la posture est éthiquement orientée. Cette distinction est importante. La posture éthique n'est pas une compétence supplémentaire que l'on ajoute à son répertoire. C'est une manière d'habiter son rôle professionnel — d'y être présent avec l'intégralité de son attention morale.</Texte>
          <Texte>Cette posture se manifeste dans des gestes ordinaires : prendre le temps de se demander « qui est vraiment concerné par cette décision ? », oser soulever une tension éthique lors d'un colloque même quand c'est inconfortable, refuser de réduire une personne accompagnée à son diagnostic ou à sa problématique.</Texte>
          <HighlightBox label="Le Code de déontologie d'Avenir Social Suisse" couleur="bleu">
            <Texte>Le Code n'est pas une contrainte extérieure à la pratique — c'est l'expression institutionnalisée de cette posture. Il rappelle que l'autodétermination est un droit fondamental et que le devoir de vigilance du professionnel existe précisément pour protéger l'intégrité de la personne, non pour la contrôler.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Créer une culture éthique d'équipe">
          <Texte>La délibération éthique ne peut pas reposer sur les seules épaules des individus les plus sensibles à ces questions. Elle doit devenir une pratique collective institutionnalisée.</Texte>
          <HighlightBox label="Conditions structurelles d'une culture éthique" couleur="vert">
            <Liste items={[
              "Espaces de délibération réguliers — colloques de cas, supervision éthique",
              "Personnes ressources identifiées et formées au sein des équipes",
              "Chartes institutionnelles vivantes plutôt que documents figés",
              "Reconnaissance institutionnelle du temps consacré à la délibération"
            ]} />
          </HighlightBox>
          <HighlightBox label="Les pièges à nommer et travailler" couleur="jaune">
            <Liste items={[
              "Pression au consensus artificiel dans les colloques",
              "Déférence excessive envers la hiérarchie médicale",
              "Tendance à normaliser les situations limites par habitude",
              "Épuisement professionnel qui réduit la capacité délibérative"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'équilibre réfléchi : Naviguer entre principes et situations">
          <Texte>Keeling et Bellefleur proposent un modèle d'équilibre réfléchi particulièrement utile pour les professionnels. Il s'agit d'un processus de va-et-vient permanent entre les principes moraux généraux et les jugements fondés sur les cas particuliers.</Texte>
          <SchemaEtapes
            titre="Le mouvement perpétuel de la pratique éthique"
            etapes={[
              { niveau: "Pôle 1", nom: "Principes généraux", definition: "Codes déontologiques, valeurs institutionnelles, cadres éthiques — ils éclairent le cas et fournissent un langage commun et des repères stables." },
              { niveau: "Mouvement", nom: "Confrontation avec le cas particulier", definition: "La singularité de la personne, le contexte spécifique, ce que la situation signifie pour elle." },
              { niveau: "Pôle 2", nom: "Affinage mutuel", definition: "Le cas modifie l'application des principes, les principes éclairent le cas. Ni les principes ni les faits ne sont absolus." },
              { niveau: "Résultat", nom: "Décision éthique vivante", definition: "Ce mouvement perpétuel constitue la pratique éthique vivante — pas une destination, mais un voyage." }
            ]}
          />
          <HighlightBox label="L'éthique comme voyage" couleur="bleu">
            <Texte>Ni les principes ni les faits ne sont absolus. C'est ce mouvement perpétuel qui constitue la pratique éthique vivante — un processus sans fin de remise en question et d'ajustement au réel.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Synthèse — Ce que vous emportez">
          <HighlightBox label="Les outils que vous avez développés" couleur="vert">
            <Liste items={[
              "Le triangle éthique de Ricœur pour cartographier les tensions (Je — Tu — Institution)",
              "Les quatre prismes éthiques pour analyser sous plusieurs angles",
              "La phronesis comme boussole du jugement professionnel au cas par cas",
              "Le décentrement d'Habermas pour enrichir la délibération collective",
              "La méthode de Legault pour structurer la décision (discerner — décider — assumer)",
              "La distinction consensus réel vs artificiel pour protéger la qualité délibérative"
            ]} />
          </HighlightBox>
          <PullQuote>
            L'éthique n'est pas une destination. C'est une manière de voyager — avec et pour autrui, dans des institutions justes.
          </PullQuote>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "La posture professionnelle éthique est :",
            reponses: [
              "Une compétence supplémentaire à acquérir et à certifier",
              "Une manière d'habiter son rôle professionnel avec toute son attention morale",
              "Un diplôme spécialisé en éthique appliquée",
              "Une obligation légale imposée par les institutions médico-sociales"
            ],
            bonneReponse: 1,
            explication: "La posture éthique n'est pas un module parmi d'autres — c'est une façon d'être présent à son travail avec toute son attention morale, dans les gestes ordinaires du quotidien professionnel."
          },
          {
            question: "Une culture éthique d'équipe nécessite :",
            reponses: [
              "Uniquement des professionnels individuellement sensibles aux questions éthiques",
              "Des conditions structurelles — espaces de délibération, personnes ressources, reconnaissance institutionnelle",
              "L'accord de tous les membres de l'équipe sur les mêmes valeurs",
              "Un comité d'éthique formel dans chaque institution du secteur"
            ],
            bonneReponse: 1,
            explication: "La délibération éthique doit être institutionnalisée — elle ne peut pas reposer uniquement sur les individus les plus engagés. Les conditions structurelles sont les fondements d'une culture éthique durable."
          },
          {
            question: "Le modèle de l'équilibre réfléchi propose :",
            reponses: [
              "D'appliquer les principes généraux sans les adapter aux situations",
              "Un va-et-vient entre principes généraux et jugements fondés sur les cas particuliers",
              "De partir uniquement de la singularité des situations sans repères généraux",
              "De laisser la hiérarchie arbitrer les tensions entre principes et pratique"
            ],
            bonneReponse: 1,
            explication: "L'équilibre réfléchi est un mouvement perpétuel — les principes éclairent le cas, le cas affine l'application des principes. Ni les principes ni les faits ne sont absolus. C'est ce mouvement qui constitue la pratique éthique vivante."
          },
          {
            question: "La formule de Ricœur — visée de la vie bonne avec et pour autrui dans des institutions justes — signifie que l'éthique :",
            reponses: [
              "Est une affaire individuelle et privée qui ne concerne que la conscience personnelle",
              "Articule le soi, la relation à l'autre et le cadre institutionnel juste",
              "Ne concerne que les institutions et non les individus qui les composent",
              "Est une règle universelle à appliquer de façon identique partout"
            ],
            bonneReponse: 1,
            explication: "La formule de Ricœur intègre les trois dimensions indissociables de l'éthique professionnelle — la vie bonne (Je), la relation (Tu) et le cadre collectif juste (Institution). Ces trois pôles sont inséparables."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
