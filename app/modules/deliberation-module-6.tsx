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
              "Définir la posture professionnelle éthiquement orientée dans votre propre pratique",
              "Comprendre comment créer — et défendre — une culture éthique d'équipe",
              "Maîtriser le modèle de l'équilibre réfléchi dans des situations concrètes",
              "Identifier les conditions structurelles et relationnelles de la délibération durable"
            ]} />
          </ConceptBox>
          <Texte>Vous avez traversé cinq modules qui ont construit, couche par couche, un outillage conceptuel pour penser l'éthique dans le travail social. Ce sixième module ne vous demande pas d'en apprendre davantage. Il vous demande de regarder ce que vous avez appris différemment : non plus comme des concepts à connaître, mais comme des pratiques à habiter. Comment est-ce que tout cela prend vie dans votre quotidien professionnel ?</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La posture professionnelle éthique : Au-delà du rôle fonctionnel">
          <Texte>L'objectif final de cette formation n'est pas de produire des experts en éthique. C'est de former des professionnels dont la posture est éthiquement orientée. Cette distinction est importante.</Texte>
          <Texte>La posture éthique n'est pas une compétence supplémentaire que l'on ajoute à son répertoire — comme on ajouterait la maîtrise d'un logiciel ou la connaissance d'une procédure. C'est une manière d'habiter son rôle professionnel — d'y être présent avec l'intégralité de son attention morale. C'est une disponibilité à la question éthique quand elle se pose, même quand ce n'est pas le moment, même quand personne d'autre ne la pose, même quand il serait plus confortable de ne pas la voir.</Texte>
          <Texte>Cette posture se manifeste dans des gestes ordinaires : prendre le temps de se demander « qui est vraiment concerné par cette décision, et est-ce que je l'ai entendu ? » avant de rédiger un rapport. Oser soulever une tension éthique lors d'un colloque même quand c'est inconfortable, même quand tout le monde semble d'accord. Refuser de réduire une personne accompagnée à son diagnostic, à sa problématique, à son dossier. S'arrêter une minute dans une situation difficile pour se demander : « quelle sorte de professionnel est-ce que je veux être dans ce moment-là ? »</Texte>
          <HighlightBox label="Le Code de déontologie d'Avenir Social Suisse" couleur="bleu">
            <Texte>Le Code n'est pas une contrainte extérieure à la pratique — c'est l'expression institutionnalisée de cette posture. Il rappelle que l'autodétermination est un droit fondamental et que le devoir de vigilance du professionnel existe précisément pour protéger l'intégrité de la personne, non pour la contrôler. Relire le Code avec la posture éthique, c'est y trouver non pas une liste d'obligations, mais un miroir de ce qu'on aspire à être.</Texte>
          </HighlightBox>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>À la fin d'une journée de travail difficile — une situation qui vous a pesé, une décision que vous n'avez pas aimée prendre — est-ce que vous vous accordez le temps de vous demander : « Ai-je été le professionnel que je voulais être aujourd'hui ? » Ce n'est pas pour nourrir la culpabilité — c'est pour nourrir la phronesis. C'est ainsi que les vertus professionnelles se développent.</Texte>
          </HighlightBox>
          <PullQuote>
            Quelle sorte de personnes voulons-nous être ensemble — et quelle sorte d'institution voulons-nous construire ?
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Créer une culture éthique d'équipe">
          <Texte>La délibération éthique ne peut pas reposer sur les seules épaules des individus les plus sensibles à ces questions. Dans une équipe, il y a souvent une ou deux personnes qui soulèvent les questions éthiques — et si elles partent, la pratique éthique s'affaiblit ou disparaît. C'est fragile. L'objectif est de construire quelque chose de plus robuste : une culture éthique d'équipe, c'est-à-dire une façon collective et institutionnalisée de traiter les dilemmes.</Texte>
          <Texte>Cette culture ne se décrète pas par une charte ou une formation. Elle se construit par des pratiques répétées — des habitudes collectives qui rendent la délibération normale, attendue, valorisée. Elle demande aussi du courage institutionnel : reconnaître que certaines décisions ont été prises trop vite, que certaines voix n'ont pas été entendues, que certaines situations auraient mérité plus de délibération.</Texte>
          <HighlightBox label="Conditions structurelles d'une culture éthique" couleur="vert">
            <Liste items={[
              "Espaces de délibération réguliers — colloques de cas éthiques distincts des colloques opérationnels, supervision d'équipe",
              "Personnes ressources identifiées et formées au sein des équipes — qui peuvent animer une délibération et garantir la qualité du processus",
              "Chartes institutionnelles vivantes — relues et discutées collectivement, pas rangées dans un tiroir après leur rédaction",
              "Reconnaissance institutionnelle du temps consacré à la délibération — qui signifie que l'éthique n'est pas une activité facultative mais une responsabilité professionnelle"
            ]} />
          </HighlightBox>
          <HighlightBox label="Les pièges à nommer et travailler" couleur="jaune">
            <Liste items={[
              "Pression au consensus artificiel dans les colloques — l'harmonie de surface au détriment de la rigueur",
              "Déférence excessive envers la hiérarchie médicale ou administrative — qui empêche les éducateurs et assistants sociaux de porter leur lecture de la situation",
              "Tendance à normaliser les situations limites par habitude — « on a toujours fait comme ça »",
              "Épuisement professionnel qui réduit la capacité délibérative — on ne peut pas bien délibérer quand on est en surcharge"
            ]} />
          </HighlightBox>
          <Texte>Ce dernier piège mérite une attention particulière. L'épuisement professionnel — le burnout, la fatigue de compassion — est un enjeu éthique en soi. Un professionnel épuisé a tendance à appliquer mécaniquement les règles, à réduire les personnes accompagnées à leurs dossiers, à éviter les questions difficiles. Prendre soin de soi et de l'équipe n'est pas un luxe — c'est une condition de la pratique éthique.</Texte>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Dans votre équipe actuelle, y a-t-il un espace régulier de délibération éthique ? Est-ce que les désaccords peuvent être exprimés sans que cela soit vécu comme une attaque ? Y a-t-il des sujets tabous — des situations ou des décisions qu'on n'ose pas questionner ? Ces angles morts sont souvent les endroits où les dilemmes éthiques les plus sérieux se cachent.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'équilibre réfléchi : Naviguer entre principes et situations">
          <Texte>Keeling et Bellefleur proposent un modèle d'équilibre réfléchi particulièrement utile pour les professionnels. Il s'agit d'un processus de va-et-vient permanent entre les principes moraux généraux et les jugements fondés sur les cas particuliers. Ce mouvement n'est pas un signe d'indécision — c'est la marque d'une pratique éthique vivante.</Texte>
          <Texte>Concrètement : vous lisez un cas difficile à travers les principes de votre formation (le triangle de Ricœur, les quatre approches, la méthode de Legault). Ces principes vous donnent des repères. Mais la singularité de la situation — ce que cette personne vit, ce que cette équipe peut porter, ce que ce contexte institutionnel permet — affine et nuance l'application de ces principes. Et inversement : l'analyse de cas difficiles enrichit votre compréhension des principes eux-mêmes. Vous les comprenez mieux après les avoir appliqués à des situations réelles.</Texte>
          <SchemaEtapes
            titre="Le mouvement perpétuel de la pratique éthique"
            etapes={[
              { niveau: "Pôle 1", nom: "Principes généraux", definition: "Codes déontologiques, valeurs institutionnelles, cadres éthiques — ils éclairent le cas et fournissent un langage commun et des repères stables. Sans eux, chaque situation est une terra incognita." },
              { niveau: "Mouvement", nom: "Confrontation avec le cas particulier", definition: "La singularité de la personne, le contexte spécifique, ce que la situation signifie pour elle — et pour l'équipe qui doit décider. Le cas résiste toujours aux principes appliqués trop mécaniquement." },
              { niveau: "Pôle 2", nom: "Affinage mutuel", definition: "Le cas modifie l'application des principes. Les principes éclairent le cas. Ni les principes ni les faits ne sont absolus ou définitifs. La compréhension s'enrichit dans les deux sens." },
              { niveau: "Résultat", nom: "Décision éthique vivante", definition: "Ce mouvement perpétuel constitue la pratique éthique vivante — pas une destination, mais une façon de voyager. La décision n'est pas parfaite, mais elle est assumable et argumentable." }
            ]}
          />
          <HighlightBox label="Un exemple concret — Retour au cas De Montmollin" couleur="bleu">
            <Texte>Le principe dit : « L'autodétermination est un droit fondamental » (Avenir Social). Le cas dit : une résidente de 80 ans avec des anticoagulants qui cache du vin en forêt. Comment appliquer le principe à ce cas particulier ? Le principe vous empêche d'ignorer la volonté de la résidente. Le cas vous empêche d'ignorer le risque médical. L'équilibre réfléchi produit une réponse qui tient les deux : une conversation respectueuse avec la résidente, une renégociation du contrat de soins, une décision co-construite. Ni le principe seul, ni le cas seul ne pouvaient produire cette réponse.</Texte>
          </HighlightBox>
          <PullQuote>
            L'éthique n'est pas une destination. C'est une manière de voyager — avec et pour autrui, dans des institutions justes.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Synthèse — Ce que vous emportez">
          <Texte>Vous arrivez au terme de cette formation. Voici les outils que vous avez développés — non pas pour les réciter, mais pour les utiliser dans les situations que vous traverserez après cette formation.</Texte>
          <HighlightBox label="Les outils que vous avez développés" couleur="vert">
            <Liste items={[
              "Le triangle éthique de Ricœur pour cartographier les tensions (Je — Tu — Institution) et ne pas oublier un pôle",
              "Les quatre prismes éthiques pour analyser une situation sous plusieurs angles et identifier où les lectures divergent",
              "La phronesis comme boussole du jugement professionnel au cas par cas — développée par la réflexivité et l'expérience",
              "Le décentrement d'Habermas pour enrichir la délibération collective et entendre les voix qui manquent",
              "La méthode de Legault pour structurer la décision (discerner les enjeux — décider avec rigueur — assumer collectivement)",
              "La distinction consensus réel vs artificiel pour protéger la qualité délibérative de vos équipes"
            ]} />
          </HighlightBox>
          <Texte>Ces outils ne vous diront pas quoi décider. Ils vous diront comment penser — et comment penser ensemble. La délibération éthique n'est pas un luxe réservé aux institutions qui ont le temps. C'est une compétence professionnelle fondamentale, qui protège les personnes accompagnées, protège les professionnels, et contribue à des institutions qui méritent la confiance de ceux qui les fréquentent.</Texte>
          <Texte>La question que Ricœur posait — comment vivre une vie bonne, avec et pour autrui, dans des institutions justes — n'a pas de réponse définitive. Mais elle mérite d'être posée sérieusement, encore et encore, dans chaque situation difficile, dans chaque colloque d'équipe, dans chaque décision qui touche à la vie des personnes que vous accompagnez. C'est cela, la pratique éthique.</Texte>
          <HighlightBox label="Pour continuer à travailler cette posture..." couleur="jaune">
            <Texte>Après cette formation, une pratique simple : à la fin d'une situation difficile que vous avez traversée — une décision prise en équipe, un dilemme que vous avez géré seul — prenez cinq minutes pour vous demander : « Ai-je utilisé les outils de la formation ? Ai-je entendu toutes les voix ? Ai-je distingué le consensus réel de l'artificiel ? La décision que nous avons prise peut-elle être justifiée à toutes les personnes concernées ? » Ce n'est pas un examen de passage — c'est l'alimentation du cycle de développement de la phronesis.</Texte>
          </HighlightBox>
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
