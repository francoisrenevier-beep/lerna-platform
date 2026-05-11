import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module1Deliberation({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Éthique professionnelle"
        titre="Le Paysage de l'Éthique"
        titrePart2="Rappels fondamentaux"
        sousTitre="Comprendre pourquoi les professionnels du travail social ont besoin de plus qu'un code de conduite pour traverser les situations complexes."
        duree="35 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Ce que ce module pose">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Distinguer éthique et morale dans la pratique professionnelle",
              "Identifier les trois pôles du triangle éthique de Ricœur",
              "Reconnaître les quatre approches éthiques fondamentales",
              "Identifier une situation à enjeu éthique dans sa pratique"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Éthique ou Morale ? Une distinction qui change tout">
          <Texte>Paul Ricœur distingue la morale — domaine des normes, obligations et interdits — de l'éthique, qui interroge ce que signifie bien agir dans un contexte donné. Pour le professionnel de terrain, cette distinction se manifeste dès lors qu'une règle institutionnelle entre en conflit avec la réalité d'une personne accompagnée.</Texte>
          <Texte>L'infirmier qui doit appliquer un règlement sur la consommation d'alcool, tout en respectant l'autonomie d'une résidente, ne peut pas se contenter de « suivre le protocole ». Il est confronté à une tension éthique authentique — et c'est précisément dans cet espace que la délibération éthique devient nécessaire.</Texte>
          <Texte>Selon Georges Legault, l'éthique appliquée est un système ouvert qui part de la complexité des situations et exige d'exposer la justification réelle des choix. Cette posture transforme le professionnel : il ne subit plus les dilemmes, il les travaille.</Texte>
          <PullQuote>
            L'éthique n'est pas un module parmi d'autres dans un cursus — elle est transversale à toute pratique professionnelle.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le Triangle Éthique de Ricœur : Je, Tu, Institution">
          <Texte>Ricœur propose une formule dense pour définir l'éthique : « la visée de la vie bonne, avec et pour autrui, dans des institutions justes. » Cette définition structure une architecture éthique en trois pôles indissociables.</Texte>
          <SchemaEtapes
            titre="Les trois pôles du triangle éthique"
            etapes={[
              { niveau: "Pôle 1", nom: "Je — Estime de soi", definition: "L'aspiration personnelle à l'accomplissement. Quelle sorte de personne est-ce que je veux être ?" },
              { niveau: "Pôle 2", nom: "Tu — Sollicitude", definition: "Se soucier de l'autre, reconnaître sa vulnérabilité, ajuster son action à ce qu'il vit réellement." },
              { niveau: "Pôle 3", nom: "Institution — Sens de la justice", definition: "Le cadre collectif qui organise l'accès équitable aux ressources et aux droits." }
            ]}
          />
          <HighlightBox label="Illustration — Un dilemme typique" couleur="bleu">
            <Texte>L'EMS qui veut équiper une résidente d'un GPS au nom de sa sécurité (Institution) contre sa volonté autonome (Je) sans écoute de sa relation au monde (Tu) illustre ce conflit. Un dilemme éthique survient quand ces trois pôles entrent en tension — le triangle de Ricœur aide à nommer les forces en présence.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Panorama des approches : Quatre boussoles éthiques">
          <Texte>Le professionnel du travail social est traversé, dans ses pratiques, par des raisonnements éthiques implicites qui correspondent à des traditions philosophiques bien identifiées. Les connaître permet de les utiliser consciemment plutôt que de les subir.</Texte>
          <SchemaEtapes
            titre="Quatre approches complémentaires"
            etapes={[
              { niveau: "Approche 1", nom: "Éthique des vertus", definition: "Qui dois-je être pour bien agir ? Sagesse pratique et développement du caractère (Aristote)." },
              { niveau: "Approche 2", nom: "Déontologisme", definition: "Quelles règles respecter ? Principes universels, dignité, confidentialité (Code Avenir Social Suisse)." },
              { niveau: "Approche 3", nom: "Utilitarisme", definition: "Quelles conséquences pour tous ? Quelle action produit le plus grand bien pour le plus grand nombre ?" },
              { niveau: "Approche 4", nom: "Éthique du care", definition: "Quel soin pour cette personne ? Vulnérabilité, relation et singularité au centre de la décision." }
            ]}
          />
          <HighlightBox label="Comment utiliser ces quatre approches" couleur="jaune">
            <Texte>Ces quatre approches fonctionnent comme des prismes — chacune éclaire un aspect différent de la situation. C'est précisément quand elles entrent en tension que la délibération éthique devient nécessaire.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Fil rouge — Madame De Montmollin">
          <HighlightBox label="La situation qui traversera toute la formation" couleur="jaune">
            <Texte>Jean, éducateur dans un EMS, découvre que Madame De Montmollin, 80 ans, résidente depuis 3 ans, achète et cache du vin lors de ses sorties libres. Sa consommation dépasse la limite du règlement et crée un risque médical réel. Jean hésite : signaler à la direction, parler directement à la résidente, ou proposer la situation au colloque d'équipe.</Texte>
            <Texte>Cette situation sera analysée progressivement à travers chaque cadre théorique de la formation — transformant un cas clinique concret en laboratoire vivant de la délibération éthique.</Texte>
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Selon Ricœur, l'éthique est :",
            reponses: [
              "L'ensemble des règles interdisant les mauvaises actions",
              "La visée de la vie bonne, avec et pour autrui, dans des institutions justes",
              "Un code professionnel déterminé par l'institution",
              "Une décision individuelle fondée sur la conscience"
            ],
            bonneReponse: 1,
            explication: "La définition de Ricœur intègre les trois pôles du triangle éthique — le Je (visée personnelle), le Tu (relation à l'autre) et l'Institution (cadre collectif juste)."
          },
          {
            question: "Quelle est la principale différence entre éthique et morale ?",
            reponses: [
              "La morale est plus importante que l'éthique",
              "L'éthique concerne le sens et le discernement, la morale les règles et obligations",
              "L'éthique s'applique uniquement aux médecins",
              "La morale est propre à chaque culture"
            ],
            bonneReponse: 1,
            explication: "La morale renvoie aux normes et obligations (il faut / il ne faut pas). L'éthique interroge le sens de l'action dans une situation singulière — elle apparaît précisément quand les règles ne suffisent plus."
          },
          {
            question: "L'éthique du care met principalement l'accent sur :",
            reponses: [
              "Les règles universelles et les obligations",
              "Le calcul des conséquences collectives",
              "La vulnérabilité, la relation et le soin singulier",
              "Les vertus individuelles du professionnel"
            ],
            bonneReponse: 2,
            explication: "L'éthique du care interroge comment une décision affecte le tissu relationnel et prend soin de la singularité de la personne — contrepoids précieux aux logiques trop abstraites."
          },
          {
            question: "Dans le triangle de Ricœur, le pôle Institution représente :",
            reponses: [
              "Le directeur de l'établissement",
              "Le cadre collectif et le sens de la justice",
              "Les règlements administratifs uniquement",
              "La hiérarchie médicale"
            ],
            bonneReponse: 1,
            explication: "L'Institution chez Ricœur désigne le cadre collectif du vivre-ensemble — les règles qui organisent l'accès équitable aux ressources et aux droits. Elle est une condition de la vie bonne, à condition d'être juste."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
