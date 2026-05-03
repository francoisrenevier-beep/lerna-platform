import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module2Ethique({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Éthique professionnelle"
        titre="Vie bonne, dignité et éthique du care"
        sousTitre="Penser l'accompagnement à partir de la relation, de la vulnérabilité et de la pratique"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Trois piliers pour penser l'accompagnement">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre la notion de vie bonne et ses implications concrètes dans la pratique",
              "Définir la dignité comme principe éthique fondamental et fragile",
              "Comprendre les fondements de l'éthique du care et ses quatre dimensions",
              "Identifier les risques et dérives du care",
              "Articuler ces trois approches dans les pratiques d'accompagnement"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La vie bonne : une question éthique au cœur de l'action">
          <Texte>La notion de vie bonne ne désigne pas un idéal abstrait ou universel. Elle renvoie à ce qui, pour une personne donnée, dans une situation donnée, fait sens, permet de se projeter, de se reconnaître comme sujet de sa propre existence.</Texte>
          <Texte>Dans la pratique professionnelle, cette question se pose de manière très concrète :</Texte>
          <Liste items={[
            "Faut-il encourager une personne à accepter un projet qui correspond aux normes institutionnelles mais pas à ses aspirations ?",
            "Faut-il prioriser la sécurité au détriment d'un choix de vie risqué mais porteur de sens ?",
            "Faut-il maintenir un accompagnement qui protège, au risque de restreindre la liberté ?"
          ]} />
          <Texte>Chaque fois qu'un professionnel agit, il fait une hypothèse sur la vie bonne. L'enjeu éthique est de rendre ces hypothèses conscientes, explicites et discutables.</Texte>
          <HighlightBox label="3 questions de travail éthique en situation" couleur="vert">
            <Liste items={[
              "Qu'est-ce qui est important pour cette personne, selon elle ?",
              "En quoi ma propre conception d'une vie réussie influence-t-elle mon intervention ?",
              "Suis-je en train d'aider la personne à faire ses propres choix, ou de l'orienter vers ce que je juge préférable ?"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La dignité : un principe fondamental mais fragile">
          <Texte>La dignité affirme que toute personne possède une valeur intrinsèque, indépendamment de son âge, de son état de santé, de ses capacités, de son comportement ou de son utilité sociale. Si la dignité est inconditionnelle sur le plan des principes, elle est vulnérable dans les pratiques quotidiennes.</Texte>
          <Texte>Elle peut être mise à mal sans intention de nuire, par des gestes, des paroles ou des organisations qui dépossèdent la personne de sa place de sujet. Exemples concrets :</Texte>
          <Liste items={[
            "Décider d'un projet sans associer réellement la personne",
            "Parler d'elle en termes exclusivement techniques ou diagnostiques",
            "Imposer un rythme sans tenir compte de ses capacités du moment",
            "Invoquer le cadre institutionnel sans l'expliquer"
          ]} />
          <PullQuote>
            Respecter la dignité, ce n'est pas seulement éviter de blesser. C'est créer activement les conditions pour que la personne puisse se sentir digne.
          </PullQuote>
          <HighlightBox label="La dignité dans les micro-pratiques du quotidien" couleur="bleu">
            <Liste couleur="bleu" items={[
              "La personne est-elle actrice ou simplement bénéficiaire de l'accompagnement ?",
              "Peut-elle exprimer un désaccord sans être disqualifiée ?",
              "Sa parole est-elle prise en compte, même lorsqu'elle dérange le cadre ?"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Vulnérabilité et interdépendance : changer de cadre de pensée">
          <Texte>L'éthique du care propose un déplacement du regard : la vulnérabilité n'est pas une exception, mais une dimension constitutive de la condition humaine. Nous sommes tous, à différents moments de notre vie, dépendants des autres, exposés à la perte et à l'incertitude.</Texte>
          <Texte>Dans le travail social, certaines vulnérabilités sont plus visibles et plus durables, mais elles ne sont pas d'une autre nature que celles que chacun peut traverser. Cela invite à penser l'accompagnement non pas uniquement comme un chemin vers l'autonomie, mais comme une gestion ajustée des dépendances et des interdépendances.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Les fondements de l'éthique du care">
          <Texte>L'éthique du care met au centre la relation concrète, située, incarnée. Elle repose sur quatre dimensions fondamentales :</Texte>
          <Liste items={[
            "L'attention — percevoir ce que vit la personne, au-delà de ce qui est formellement exprimé. Observer les signes de fatigue, de résistance, d'adhésion ou de retrait, et ajuster son intervention.",
            "La responsabilité — elle naît du fait que l'autre dépend, au moins partiellement, de mon action. Cela implique de mesurer l'impact de ses décisions, mais aussi de ses non-décisions.",
            "L'ajustement — adapter l'intervention à la singularité des situations, chercher ce qui est possible, soutenable et pertinent ici et maintenant.",
            "La limite — reconnaître les limites du rôle professionnel, ses limites personnelles et institutionnelles. Prendre soin ne signifie pas tout faire, ni se substituer à l'autre."
          ]} />
          <HighlightBox label="Le care n'est pas de la compassion" couleur="bleu">
            <Texte>Le care n'est pas de la compassion. C'est une pratique professionnelle réfléchie qui engage la responsabilité.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Les risques et dérives du care">
          <Texte>L'éthique du care n'est pas sans risques si elle est mal comprise. Le premier risque est le paternalisme : vouloir le bien de l'autre sans lui laisser de place réelle dans la décision. Le second est le surengagement, lorsque le professionnel prend sur lui des responsabilités qui devraient être partagées ou institutionnelles.</Texte>
          <Texte>Signaux d'alerte à surveiller :</Texte>
          <Liste items={[
            "Difficulté à poser des limites dans la relation d'accompagnement",
            "Sentiment de porter seul des situations complexes",
            "Justification de transgressions par la bonne intention",
            "Épuisement émotionnel croissant"
          ]} />
          <Texte>Le care ne peut être éthique que s'il est pensé collectivement, soutenu par des espaces de discussion et une reconnaissance institutionnelle.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 6" titre="Articuler vie bonne, dignité et care dans la pratique">
          <HighlightBox label="Trois piliers complémentaires" couleur="vert">
            <Liste items={[
              "La vie bonne donne une orientation à l'action, sans imposer un modèle universel",
              "La dignité pose une limite infranchissable à toute intervention",
              "Le care offre une manière concrète de penser la relation, la vulnérabilité et l'ajustement"
            ]} />
          </HighlightBox>
          <Texte>L'éthique professionnelle consiste à tenir ensemble ces dimensions, à les mettre en tension lorsque nécessaire, et à accepter qu'aucune ne fournisse, à elle seule, une réponse définitive.</Texte>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Que signifie la notion de 'vie bonne' dans le contexte de l'accompagnement ?",
            reponses: [
              "Définir le bonheur idéal pour la personne accompagnée, selon les standards professionnels",
              "Créer les conditions pour que la personne puisse poursuivre ses propres aspirations",
              "Imposer un cadre de vie sain, équilibré et conforme aux normes sociales",
              "Satisfaire l'ensemble des besoins de base de la personne"
            ],
            bonneReponse: 1,
            explication: "La vie bonne n'est pas un idéal universel défini par le professionnel. Elle renvoie à ce qui fait sens pour la personne dans sa singularité. Notre rôle est de rendre conscientes nos hypothèses sur la vie bonne et de créer les conditions pour que la personne puisse faire ses propres choix."
          },
          {
            question: "La dignité d'une personne est-elle conditionnelle à son comportement ?",
            reponses: [
              "Oui, certains comportements peuvent justifier une mise en retrait de la dignité",
              "Non, la dignité est un statut inaliénable indépendant des capacités ou de la situation",
              "Oui, selon les circonstances et les contraintes institutionnelles",
              "Non, mais seulement pour les personnes en situation de grande vulnérabilité"
            ],
            bonneReponse: 1,
            explication: "La dignité est un statut absolu et inaliénable. Toute personne a une dignité quelles que soient ses capacités, son comportement ou sa situation. Elle peut cependant être fragilisée dans les pratiques quotidiennes par des gestes ou des mots qui dépossèdent la personne de sa place de sujet."
          },
          {
            question: "Selon l'éthique du care, la vulnérabilité est :",
            reponses: [
              "Une faiblesse propre aux personnes accompagnées, à compenser par l'intervention",
              "Une condition humaine universelle qui concerne aussi les professionnels",
              "Un obstacle à une relation professionnelle équilibrée et neutre",
              "Un facteur de risque à gérer dans le cadre du mandat"
            ],
            bonneReponse: 1,
            explication: "L'éthique du care propose un déplacement fondamental : la vulnérabilité n'est pas une exception, c'est une dimension constitutive de la condition humaine. Reconnaître cette vulnérabilité partagée, c'est reconnaître la pleine humanité de la personne accompagnée."
          },
          {
            question: "Laquelle de ces dimensions n'appartient PAS aux quatre fondements du care ?",
            reponses: [
              "L'attention",
              "La responsabilité",
              "La neutralité",
              "L'ajustement"
            ],
            bonneReponse: 2,
            explication: "Les quatre dimensions du care sont : l'attention (percevoir ce que vit la personne), la responsabilité (mesurer l'impact de ses décisions), l'ajustement (adapter l'intervention à la singularité) et la limite (reconnaître les frontières du rôle). La neutralité n'en fait pas partie — le care est au contraire un engagement situé et responsable."
          },
          {
            question: "Le paternalisme dans le care correspond à :",
            reponses: [
              "Une attention excessive aux besoins matériels de la personne",
              "Vouloir le bien de l'autre sans lui laisser de place réelle dans la décision",
              "Un manque d'engagement émotionnel dans la relation d'accompagnement",
              "Le respect trop strict des règles institutionnelles au détriment de la relation"
            ],
            bonneReponse: 1,
            explication: "Le paternalisme est le premier risque du care mal compris : agir pour le bien de l'autre en le privant de sa capacité de décision. C'est paradoxalement une atteinte à la dignité de la personne, même lorsque l'intention est bienveillante."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
