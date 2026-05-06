import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module1MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="MDH-PPH 2018"
        titre="Le changement de paradigme"
        titrePart2="du modèle médical au modèle interactionnel"
        sousTitre="Comprendre pourquoi le regard que nous portons sur le handicap définit le cœur même de nos pratiques — et comment le MDH-PPH transforme radicalement cette question."
        duree="40 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Un changement de regard fondamental">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Expliquer les limites du modèle médical traditionnel dans les pratiques d'accompagnement",
              "Décrire le changement de paradigme introduit par le MDH-PPH 2018",
              "Comprendre l'équation fondamentale Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie",
              "Identifier comment le flux temporel transforme la lecture d'une situation"
            ]} />
          </ConceptBox>
          <Texte>La manière dont nous conceptualisons le handicap définit nos pratiques professionnelles dans leur totalité. Si le handicap est une caractéristique de la personne, nous cherchons à la réparer. S'il est produit par une interaction avec l'environnement, nous cherchons à transformer cette interaction.</Texte>
          <PullQuote>
            Le MDH-PPH ne nie pas l'existence des déficiences. Il change radicalement la question : au lieu de demander « Qu'est-ce que la personne ne peut pas faire ? », il invite à demander « Dans quelle mesure l'environnement empêche-t-il cette personne de réaliser ce qui compte pour elle ? »
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Leçon 1.1" titre="Pourquoi le modèle médical ne suffit plus">
          <Texte>Pendant des décennies, les professionnels du travail social et du soin ont exercé dans un cadre dominé par le modèle médical du handicap. Dans ce paradigme, la déficience est perçue comme une caractéristique intrinsèque de la personne : c'est elle qui est « anormale », c'est à elle de s'adapter, c'est sa pathologie qui explique ses difficultés.</Texte>

          <HighlightBox label="Les effets pervers du modèle médical" couleur="jaune">
            <Liste items={[
              "L'évaluation se concentre sur les déficiences plutôt que sur les ressources",
              "Les projets d'accompagnement se centrent sur les soins et la rééducation, au détriment de la participation sociale",
              "Les personnes sont stigmatisées en étant réduites à leur diagnostic",
              "L'environnement est déresponsabilisé : si c'est la personne qui est « le problème », l'institution n'a pas à changer"
            ]} />
          </HighlightBox>

          <Texte>Dans les structures socio-éducatives suisses — ESE en Valais, foyer de vie vaudois, service d'accompagnement à domicile genevois — cette logique médicale se manifeste encore régulièrement. Un professionnel qui dit « Marc ne peut pas aller à l'atelier parce qu'il a une déficience cognitive » adopte sans le savoir un raisonnement médical.</Texte>

          <TableauComparaison
            titre="Deux lectures d'une même situation"
            colonnes={[
              { titre: "Lecture médicale", contenu: [
                "Marc ne peut pas aller à l'atelier à cause de sa déficience cognitive",
                "Sophie est agitée à cause de sa schizophrénie",
                "Il faut compenser les manques de Paul",
              ]},
              { titre: "Lecture MDH-PPH", contenu: [
                "Quels obstacles environnementaux empêchent Marc d'accéder à l'atelier ?",
                "Quelles conditions de l'unité produisent cette agitation chez Sophie ?",
                "Comment transformer l'environnement de Paul pour qu'il réalise ses habitudes de vie ?",
              ]},
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Leçon 1.2" titre="Le MDH-PPH 2018 : une révolution anthropologique">
          <Texte>Le Modèle de Développement Humain – Processus de Production du Handicap (MDH-PPH), élaboré par Patrick Fougeyrollas et l'équipe du RIPPH, a connu plusieurs versions depuis les années 1990. La version bonifiée de 2018 constitue une avancée majeure.</Texte>

          <PullQuote source="Patrick Fougeyrollas, RIPPH 2018">
            Le handicap n'est plus une identité, c'est un résultat. C'est le produit d'une interaction dynamique entre les caractéristiques d'une personne et les conditions de son environnement.
          </PullQuote>

          <Texte>Une même personne peut être en situation de participation sociale dans un contexte adapté, et en situation de handicap dans un contexte inadapté — sans que ses déficiences aient changé d'un iota.</Texte>

          <HighlightBox label="L'exemple de Stephen Hawking" couleur="bleu">
            <Texte>Des déficiences organiques majeures, des incapacités motrices sévères — et pourtant une participation sociale optimale de physicien de renommée mondiale, grâce à des facilitateurs technologiques de pointe. Ce n'est pas la biologie qui produit le handicap : c'est l'interaction entre la personne et son milieu.</Texte>
          </HighlightBox>

          <Texte>La version 2018 introduit deux innovations cruciales : l'intégration transversale des facteurs de risque et de protection dans toutes les dimensions du modèle, et le flux temporel qui rappelle qu'une situation de handicap n'est jamais figée.</Texte>

          <HighlightBox label="Ancrage juridique en Suisse" couleur="vert">
            <Texte>Le MDH-PPH s'aligne avec les principes de la Convention internationale des droits des personnes handicapées (CIDPH) de l'ONU, ratifiée par la Suisse en 2014. Adopter le MDH-PPH, c'est s'inscrire dans un cadre éthique et juridique international.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 1.3" titre="L'équation fondamentale du modèle">
          <Texte>Au cœur du MDH-PPH se trouve une équation conceptuelle d'une clarté remarquable :</Texte>

          <ConceptBox label="L'équation centrale" titre="Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie">
            <Texte>Le signe de multiplication (et non d'addition) signifie que les deux dimensions interagissent et se conditionnent mutuellement. Modifier l'une transforme le résultat.</Texte>
          </ConceptBox>

          <SchemaEtapes
            titre="Les trois composantes du MDH-PPH"
            etapes={[
              { niveau: "Ce que la personne est", nom: "Facteurs Personnels", definition: "Identité (âge, histoire de vie, valeurs, culture), systèmes organiques (état du corps, de l'intégrité à la déficience) et aptitudes (capacités à accomplir des activités physiques ou mentales)" },
              { niveau: "Ce qui entoure la personne", nom: "Facteurs Environnementaux", definition: "Ensemble des dimensions physiques et sociales du milieu de vie, du micro (logement, équipe éducative, proches) au macro (politiques cantonales, assurances sociales, normes culturelles)" },
              { niveau: "Ce que la personne fait", nom: "Habitudes de Vie", definition: "Activités courantes et rôles sociaux qui assurent sa survie et son épanouissement — indicateur de participation sociale ou de situation de handicap" }
            ]}
            note="Le flux temporel traverse l'ensemble : cette interaction est dynamique et évolutive"
          />

          <Texte>Les habitudes de vie constituent le résultat mesurable de l'interaction : soit la personne les réalise de façon pleine et satisfaisante (participation sociale), soit elle en est empêchée ou insatisfaite (situation de handicap).</Texte>

          <HighlightBox label="Le flux temporel" couleur="bleu">
            <Texte>Une évaluation à un moment donné sert de référence pour mesurer l'évolution six mois ou deux ans plus tard, après intervention. L'accompagnement n'est jamais terminé, il doit être régulièrement réévalué.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Quiz" titre="Testez votre compréhension">
          <Quiz
            questions={[{
              question: "Dans le modèle médical, le handicap est considéré comme :",
              reponses: [
                "Le résultat d'une interaction entre la personne et son environnement",
                "Une caractéristique intrinsèque de la personne",
                "Un processus dynamique et modifiable",
                "Une situation temporaire liée à l'environnement",
              ],
              bonneReponse: 1,
              explication: "Dans le modèle médical, le handicap est vu comme un attribut de la personne, lié à sa pathologie. C'est précisément ce que le MDH-PPH remet en question en montrant que le handicap est un résultat interactionnel.",
            }]}
            onValiderModule={onValiderModule}
          />
        </SectionModule>

      </div>
    </div>
  )
}
