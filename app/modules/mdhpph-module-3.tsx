import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="MDH-PPH 2018"
        titre="Analyser une situation complexe"
        titrePart2="avec le MDH-PPH"
        sousTitre="De la lecture systémique des situations complexes à l'analyse interprofessionnelle : apprendre à voir avant d'intervenir."
        duree="55 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Voir avant d'intervenir">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Appliquer la démarche d'analyse MDH-PPH en trois étapes à une situation réelle",
              "Relire les comportements défis comme des indicateurs d'une situation de handicap environnementale",
              "Anticiper les situations de handicap émergentes liées au vieillissement et aux transitions",
              "Utiliser le MDH-PPH comme langage commun dans une équipe interdisciplinaire"
            ]} />
          </ConceptBox>
          <Texte>Analyser une situation avec le MDH-PPH ne consiste pas à remplir un formulaire. C'est une démarche de lecture systémique qui requiert une discipline intellectuelle et une humilité professionnelle : avant de conclure, il faut décrire. Avant d'intervenir, il faut comprendre l'interaction.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Leçon 3.1" titre="Lire une situation avec les lunettes du modèle">
          <Texte>L'analyse MDH-PPH se déroule en trois étapes séquentielles. Aucune intervention ne devrait précéder leur achèvement.</Texte>

          <SchemaEtapes
            titre="La démarche d'analyse MDH-PPH en trois étapes"
            etapes={[
              { niveau: "Étape 1", nom: "Identifier les facteurs personnels", definition: "Collecter des informations sur les systèmes organiques (déficiences constatées), les aptitudes (ce que la personne peut ou ne peut pas accomplir) et les facteurs identitaires (histoire, valeurs, priorités de vie). Cette dernière dimension exige un entretien qualitatif approfondi." },
              { niveau: "Étape 2", nom: "Cartographier les facteurs environnementaux", definition: "Pour chaque sphère (micro, méso, macro), lister les obstacles et les facilitateurs présents, en précisant s'ils sont physiques ou sociaux. Une grille structurée aide à ne rien oublier : espace de vie, équipes, transports, réseaux de soutien, politiques institutionnelles, ressources communautaires." },
              { niveau: "Étape 3", nom: "Analyser les habitudes de vie", definition: "Pour chacune des douze catégories, évaluer le niveau de réalisation (de la pleine participation à la non-réalisation) et le niveau de satisfaction. Les habitudes de vie pour lesquelles la personne exprime à la fois une forte importance et une forte insatisfaction deviennent les priorités du plan d'accompagnement." }
            ]}
            note="C'est seulement après ces trois étapes qu'il devient possible d'identifier les interactions clés — là où les facteurs personnels rencontrent les obstacles environnementaux"
          />

          <HighlightBox label="Principe fondateur de l'analyse" couleur="bleu">
            <Texte>L'analyse MDH-PPH cherche à identifier où se situent les vrais leviers d'intervention — c'est-à-dire les obstacles environnementaux qui, une fois transformés en facilitateurs, modifieront le résultat de l'équation et amélioreront la participation sociale.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 3.2" titre="Situations complexes : comportements défis et santé mentale">
          <Texte>Le MDH-PPH est particulièrement puissant dans l'analyse des situations dites « complexes » : comportements défis, troubles du comportement associés à une pathologie psychiatrique, crises d'agitation ou d'automutilation.</Texte>

          <PullQuote>
            Lorsqu'un résident s'agite ou manifeste des comportements perturbateurs, la première question n'est pas « Quelle est sa pathologie ? » mais « Que produit son environnement actuel ? »
          </PullQuote>

          <Texte>Les comportements défis sont souvent des indicateurs d'une situation de handicap non résolue : une habitude de vie importante pour la personne est entravée par un obstacle environnemental qu'elle ne peut pas nommer verbalement ou résoudre par elle-même.</Texte>

          <ConceptBox label="Le cas de Paul" titre="Une lecture MDH-PPH transforme le diagnostic">
            <Texte>Après le déménagement de son club de sarbacane, Paul manifeste des « gestes répétitifs » et de l'énervement. Une lecture médicale attribue ces comportements à l'évolution de sa pathologie neurologique. La lecture MDH-PPH révèle qu'il s'agit d'une réponse comportementale à une situation de handicap environnementale : l'incapacité d'accéder à une habitude de vie valorisée (ses loisirs). Supprimer l'obstacle — accompagnement, transport adapté — résout le comportement, sans médicament, sans contention.</Texte>
          </ConceptBox>

          <HighlightBox label="En santé mentale aussi" couleur="jaune">
            <Texte>Une personne hospitalisée en milieu psychiatrique qui résiste aux soins n'est peut-être pas « non-compliant » : le cadre de soin lui-même produit peut-être des obstacles à son autodétermination qui génèrent une résistance légitime. Ces signaux doivent être lus comme des indicateurs d'inadéquation environnementale, pas uniquement comme des symptômes.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 3.3" titre="Vieillissement, transitions et situations de handicap émergentes">
          <Texte>Une des forces du MDH-PPH 2018 est de s'appliquer tout au long du parcours de vie, y compris dans la période du vieillissement. Pour les institutions suisses accueillant des adultes en situation de handicap, cette dimension est de plus en plus centrale.</Texte>

          <Texte>Une personne qui était en situation de participation sociale à 30 ans dans son foyer peut se retrouver progressivement en situation de handicap à 55 ans, non pas parce que son handicap d'origine s'est aggravé, mais parce que ses capacités organiques ont diminué avec l'âge et que son environnement n'a pas été adapté en conséquence.</Texte>

          <HighlightBox label="Les signaux à surveiller" couleur="jaune">
            <Liste items={[
              "Retraits progressifs des activités",
              "Refus d'activités autrefois appréciées",
              "Fatigue accrue et irritabilité croissante",
              "Aides techniques devenues insuffisantes",
              "Trajets devenus trop fatigants"
            ]} />
          </HighlightBox>

          <PullQuote>
            Ces signaux ne sont pas uniquement médicaux : ils peuvent indiquer que l'environnement n'est plus adapté aux nouvelles capacités de la personne.
          </PullQuote>

          <HighlightBox label="La réévaluation comme obligation professionnelle" couleur="bleu">
            <Texte>Le MDH-PPH invite les équipes à anticiper les transitions plutôt qu'à les subir. Cela exige des réévaluations régulières — au minimum annuelles — de la situation de chaque personne, avec une attention particulière aux transitions : changement de résidence, passage à l'accompagnement à domicile, modification de l'environnement familial.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 3.4" titre="L'analyse interprofessionnelle : langage commun et postures">
          <Texte>L'une des contributions majeures du MDH-PPH dans les institutions est de fournir un langage commun à des équipes interdisciplinaires. Sans cadre commun, les réunions de synthèse deviennent des dialogues de sourds où chacun défend sa lecture disciplinaire.</Texte>

          <ConceptBox label="Le MDH-PPH comme traducteur" titre="Reformuler pour agir">
            <Texte>Quand un éducateur dit « Marco est agité depuis le changement d'équipe » et qu'un infirmier dit « Marco montre des signes d'anxiété », le cadre MDH-PPH permet de reformuler : « Un obstacle environnemental social (méso-micro) — le changement d'équipe — a généré une situation de handicap pour Marco dans ses habitudes de vie relationnelles ».</Texte>
            <Texte>Ce reformatage déplace le débat de la pathologie vers l'interaction, et ouvre immédiatement l'espace de discussion vers des solutions concrètes.</Texte>
          </ConceptBox>

          <HighlightBox label="Les conditions du changement" couleur="jaune">
            <Liste items={[
              "Une formation de l'équipe ancrée dans les situations réelles de l'institution",
              "Un portage institutionnel fort : la direction doit incarner le modèle",
              "Des espaces de réflexion collective réguliers : supervisions, retours d'expérience",
              "Du temps : le changement de paradigme ne s'impose pas par décret"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Quiz" titre="Testez votre compréhension">
          <Quiz
            questions={[{
              question: "Selon le MDH-PPH, les comportements défis d'un résident sont en priorité :",
              reponses: [
                "Un signe d'aggravation de sa pathologie nécessitant une révision du traitement médicamenteux",
                "Des indicateurs d'une situation de handicap environnementale non résolue",
                "Une manipulation intentionnelle visant à attirer l'attention des professionnels",
                "Une réaction normale au vieillissement en institution",
              ],
              bonneReponse: 1,
              explication: "Pour le MDH-PPH, les comportements défis sont souvent des indicateurs qu'une habitude de vie importante est entravée par un obstacle environnemental que la personne ne peut pas nommer ou résoudre par elle-même. L'analyse de l'environnement prime sur la révision médicamenteuse.",
            }]}
            onValiderModule={onValiderModule}
          />
        </SectionModule>

      </div>
    </div>
  )
}
