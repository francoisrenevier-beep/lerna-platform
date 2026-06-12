import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"
import { AccrocheScenario } from "@/components/module/AccrocheScenario"

export function Module3MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="MDH-PPH 2018"
        titre="Analyser une situation complexe"
        titrePart2="avec le MDH-PPH"
        sousTitre="De la lecture systémique des situations difficiles à l'analyse interprofessionnelle : apprendre à voir avant d'intervenir."
        duree="55 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="Lena — la crise de l'atelier cuisine">
          <AccrocheScenario type="scenario">
            <p>Suite à des travaux dans le foyer, l'atelier cuisine de Lena a été déplacé dans un local provisoire : lumineux mais bruyant, avec des ventilations intenses qui dégagent des odeurs fortes. Lena, qui n'a jamais manqué une séance depuis trois ans, refuse désormais d'y aller. Elle manifeste des comportements d'agitation et d'évitement en début de semaine — exactement les jours où l'atelier est programmé. L'équipe est désemparée. Qu'est-ce que le MDH-PPH permet de voir ici que le regard clinique habituel manque ?</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Voir avant d'intervenir">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Appliquer la démarche d'analyse MDH-PPH en trois étapes à une situation réelle",
              "Relire les comportements défis comme des indicateurs d'une situation de handicap non résolue",
              "Anticiper les situations de handicap émergentes liées au vieillissement et aux transitions",
              "Utiliser le MDH-PPH comme langage commun dans une équipe interdisciplinaire",
            ]} />
          </ConceptBox>
          <Texte>Analyser une situation avec le MDH-PPH ne consiste pas à remplir un formulaire. C'est une démarche de lecture systémique qui requiert une discipline intellectuelle et une humilité professionnelle fondamentale : <strong>avant de conclure, il faut décrire. Avant d'intervenir, il faut comprendre l'interaction.</strong></Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La démarche d'analyse en trois étapes">
          <Texte>L'analyse MDH-PPH suit une séquence en trois étapes. Aucune intervention ne devrait précéder leur achèvement — car intervenir avant d'avoir compris l'interaction, c'est risquer d'agir sur la mauvaise cible.</Texte>

          <SchemaEtapes
            titre="Les trois étapes de l'analyse MDH-PPH"
            etapes={[
              { niveau: "Étape 1", nom: "Identifier les facteurs personnels", definition: "Collecter des informations sur les systèmes organiques (déficiences constatées), les aptitudes (ce que la personne peut ou ne peut pas accomplir) et surtout les facteurs identitaires (histoire, valeurs, priorités de vie). Cette dernière dimension exige un entretien qualitatif approfondi — souvent négligé au profit des données médicales." },
              { niveau: "Étape 2", nom: "Cartographier les facteurs environnementaux", definition: "Pour chaque sphère (micro, méso, macro), lister les obstacles et les facilitateurs, en précisant s'ils sont physiques ou sociaux. Une grille structurée aide à ne rien oublier : espace de vie, équipes, transports, réseaux de soutien, règles institutionnelles, ressources communautaires." },
              { niveau: "Étape 3", nom: "Analyser les habitudes de vie", definition: "Pour chacune des douze catégories, évaluer le niveau de réalisation (de la pleine participation à la non-réalisation) et le niveau de satisfaction. Les habitudes de vie pour lesquelles la personne exprime à la fois une forte importance et une forte insatisfaction deviennent les priorités du plan d'accompagnement." },
            ]}
            note="C'est seulement après ces trois étapes qu'il devient possible d'identifier les interactions clés — là où les facteurs personnels rencontrent les obstacles environnementaux pour produire une situation de handicap"
          />

          <HighlightBox label="L'analyse du cas de Lena — étape par étape" couleur="bleu">
            <Texte><strong>Étape 1 — Facteurs personnels :</strong> Trisomie 21, hypersensibilité sensorielle (bruits forts, odeurs intenses), aptitudes langagières réduites, mémoire procédurale préservée. Facteur identitaire central : la cuisine est liée à des rituels familiaux profonds, c'est le lieu où Lena se sent compétente et reconnue.</Texte>
            <Texte><strong>Étape 2 — Environnement :</strong> Obstacle physique micro : le nouveau local est inadapté sensoriellement (bruit, odeurs). Facilitateur perdu : l'ancien local calme et familier était un facilitateur physique majeur pour Lena.</Texte>
            <Texte><strong>Étape 3 — Habitudes de vie :</strong> L'habitude de vie « loisirs » est non réalisée depuis les travaux. La satisfaction de Lena est nulle. Cette habitude de vie est la plus importante pour elle — et la plus insatisfaisante actuellement. C'est donc la priorité absolue du plan d'accompagnement.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Situations complexes : comportements défis et santé mentale">
          <Texte>Le MDH-PPH est particulièrement puissant dans l'analyse des situations dites « complexes » : comportements défis, troubles du comportement associés à une pathologie psychiatrique, crises d'agitation ou d'automutilation. Ces situations sont souvent abordées sous l'angle médical, avec une réponse pharmacologique ou contentive comme première réponse.</Texte>

          <PullQuote>
            Lorsqu'un résident s'agite ou manifeste des comportements perturbateurs, la première question n'est pas « Quelle est sa pathologie ? » mais « Que produit son environnement actuel ? »
          </PullQuote>

          <Texte>Les comportements défis sont souvent des indicateurs d'une situation de handicap non résolue : une habitude de vie importante pour la personne est entravée par un obstacle environnemental qu'elle ne peut pas nommer verbalement ou résoudre par elle-même. Le comportement devient le seul langage disponible pour exprimer cette inadéquation.</Texte>

          <ConceptBox label="Lena — relire l'agitation" titre="Ce que le comportement dit réellement">
            <Texte>L'agitation de Lena en début de semaine n'est pas une aggravation de sa trisomie. C'est une réponse comportementale à une situation de handicap environnementale : l'incapacité d'accéder à une habitude de vie valorisée (la cuisine) à cause d'un obstacle physique micro (le local inadapté). Une fois l'obstacle identifié, la solution devient claire — et ne passe pas par un ajustement médicamenteux.</Texte>
          </ConceptBox>

          <HighlightBox label="Ce raisonnement s'applique largement" couleur="jaune">
            <Texte>Une personne hospitalisée en milieu psychiatrique qui résiste aux soins n'est peut-être pas « non-compliant » : le cadre de soin lui-même produit peut-être des obstacles à son autodétermination qui génèrent une résistance légitime. L'équipe doit apprendre à lire ces signaux comme des indicateurs d'inadéquation environnementale — pas uniquement comme des symptômes à réduire.</Texte>
          </HighlightBox>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#3DBFA0] mb-2">1ère question</p>
              <p className="text-sm text-white/70 leading-snug">à poser face à un comportement défi : « Que produit l'environnement actuel de cette personne ? »</p>
            </div>
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#3DBFA0] mb-2">Non</p>
              <p className="text-sm text-white/70 leading-snug">ce n'est pas la pathologie qui explique le comportement — c'est l'interaction personne-environnement</p>
            </div>
          </div>
        </SectionModule>

        <AccrocheScenario type="reflexion">
          <p>Pensez à une personne que vous accompagnez et qui présente des comportements difficiles à comprendre. Avez-vous cartographié systématiquement les facteurs environnementaux physiques et sociaux de son contexte de vie — à chacun des trois niveaux ? Qu'est-ce que vous ne savez peut-être pas encore sur ce qui l'entrave quotidiennement ?</p>
        </AccrocheScenario>

        <SectionModule eyebrow="Section 3" titre="Vieillissement, transitions et situations de handicap émergentes">
          <Texte>Une des forces du MDH-PPH 2018 est de s'appliquer tout au long du parcours de vie, y compris dans la période du vieillissement. Pour les institutions accueillant des adultes en situation de handicap, cette dimension est de plus en plus centrale : les personnes accompagnées vieillissent, et le vieillissement modifie profondément l'équation personne-environnement.</Texte>

          <Texte>Une personne qui était en situation de participation sociale à 30 ans peut se retrouver progressivement en situation de handicap à 50 ans — non pas parce que son handicap d'origine s'est aggravé, mais parce que ses capacités organiques ont diminué avec l'âge et que son environnement n'a pas été adapté en conséquence.</Texte>

          <HighlightBox label="Les signaux à surveiller — ne pas attribuer à la pathologie" couleur="jaune">
            <Liste items={[
              "Retraits progressifs des activités autrefois appréciées",
              "Refus ou difficultés nouvelles dans des habitudes de vie maîtrisées",
              "Fatigue accrue, irritabilité croissante",
              "Aides techniques devenues insuffisantes",
              "Trajets devenus trop fatigants ou trop longs",
            ]} />
          </HighlightBox>

          <PullQuote>
            Ces signaux ne sont pas uniquement médicaux. Ils peuvent indiquer que l'environnement n'est plus adapté aux nouvelles capacités de la personne — et qu'une réévaluation MDH-PPH s'impose.
          </PullQuote>

          <HighlightBox label="Anticiper plutôt que subir" couleur="vert">
            <Texte>Le MDH-PPH invite les équipes à planifier des réévaluations régulières — au minimum annuelles — de la situation de chaque personne accompagnée. Ces réévaluations doivent être proactives, pas seulement déclenchées par des crises. Chaque transition (déménagement, changement d'équipe, retraite d'un proche aidant) reconfigure les interactions personne-environnement et mérite une analyse dédiée.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="L'analyse interprofessionnelle : un langage commun">
          <Texte>L'une des contributions majeures du MDH-PPH dans les institutions est de fournir un langage commun à des équipes interdisciplinaires. Éducateurs, infirmiers, ergothérapeutes, psychologues, responsables de secteur : chaque professionnel arrive avec sa propre grille de lecture. Sans cadre commun, les réunions de synthèse deviennent des dialogues de sourds où chacun défend sa lecture disciplinaire.</Texte>

          <ConceptBox label="Le MDH-PPH comme traducteur" titre="Reformuler pour agir ensemble">
            <Texte>Quand un éducateur dit « Marco est agité depuis le changement d'équipe » et qu'un infirmier dit « Marco montre des signes d'anxiété », le MDH-PPH permet de reformuler : <em>« Un obstacle environnemental social (méso-micro) — le changement d'équipe — a généré une situation de handicap pour Marco dans ses habitudes de vie relationnelles. »</em></Texte>
            <Texte>Ce reformatage déplace le débat de la pathologie vers l'interaction — et ouvre immédiatement l'espace de discussion vers des solutions concrètes plutôt que vers des explications diagnostiques.</Texte>
          </ConceptBox>

          <HighlightBox label="Les conditions du changement de langage" couleur="bleu">
            <Liste items={[
              "Une formation pratique de l'équipe, ancrée dans les situations réelles de l'institution",
              "Des espaces de réflexion collective réguliers : supervisions, retours d'expérience structurés",
              "Un portage institutionnel fort : la direction doit incarner et soutenir le modèle",
              "Du temps et de la persévérance : le changement de paradigme ne s'impose pas par décret",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Lena — retour au fil rouge" titre="L'équipe réunit ses observations">
          <Texte>Avec la grille MDH-PPH, l'équipe de Lena peut maintenant nommer clairement ce qui se passe : l'obstacle physique du nouveau local (bruit, odeurs) rencontre l'hypersensibilité sensorielle de Lena (facteur personnel organique), et entrave une habitude de vie centrale à son identité (les loisirs — cuisine). Le comportement d'agitation est un signal, pas un symptôme.</Texte>
          <Texte>Dans le module suivant, l'équipe va construire avec Lena un plan d'accompagnement qui lève cet obstacle et renforce les facilitateurs.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>L'analyse MDH-PPH est une démarche de lecture systémique en trois étapes — facteurs personnels, facteurs environnementaux, habitudes de vie — qui permet d'identifier les vrais leviers d'action. Les comportements défis ne sont pas des symptômes à réduire mais des signaux d'une interaction inadéquate à corriger. Le vieillissement appelle des réévaluations proactives. Et le MDH-PPH offre à l'équipe interdisciplinaire un langage commun pour agir ensemble.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Avant d'intervenir : décrire l'interaction personne-environnement, pas poser un diagnostic",
              "Les comportements défis sont des indicateurs d'une situation de handicap non résolue",
              "Réévaluer régulièrement et de façon proactive — ne pas attendre la crise",
              "Le MDH-PPH offre un langage commun à l'équipe interdisciplinaire",
              "Reformuler en termes d'interaction ouvre l'espace vers des solutions concrètes",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la première étape de l'analyse MDH-PPH avant toute intervention ?",
            reponses: [
              "Proposer un plan d'action à la personne et à sa famille",
              "Contacter le médecin référent pour un bilan diagnostic",
              "Identifier les facteurs personnels, cartographier l'environnement et analyser les habitudes de vie",
              "Réduire les comportements problématiques par un ajustement du programme d'activités",
            ],
            bonneReponse: 2,
            explication: "L'analyse MDH-PPH suit trois étapes séquentielles avant toute intervention : identifier les facteurs personnels, cartographier les facteurs environnementaux, analyser les habitudes de vie. Intervenir sans avoir complété ces étapes, c'est risquer d'agir sur la mauvaise cible.",
          },
          {
            question: "Lena refuse d'aller à l'atelier cuisine depuis que celui-ci a été déplacé dans un local bruyant. Elle manifeste de l'agitation. Selon le MDH-PPH, quelle est la lecture correcte ?",
            reponses: [
              "Lena régresse : sa trisomie 21 génère des comportements régressifs avec l'âge",
              "Un obstacle physique micro-environnemental entrave une habitude de vie centrale à son identité",
              "Lena manifeste de l'opposition : il faut maintenir le cadre",
              "L'agitation est un signe d'anxiété généralisée nécessitant un suivi psychiatrique",
            ],
            bonneReponse: 1,
            explication: "L'obstacle physique (local inadapté sensoriellement) rencontre la sensibilité sensorielle de Lena (facteur personnel organique) et entrave son habitude de vie la plus valorisée (cuisine / loisirs). L'agitation est un signal comportemental — la seule façon pour Lena d'exprimer cette inadéquation environnementale.",
          },
          {
            question: "Pour quelles habitudes de vie les interventions doivent-elles être priorisées selon le MDH-PPH ?",
            reponses: [
              "Les activités courantes de base : nutrition, soins, déplacements",
              "Les habitudes de vie pour lesquelles la personne exprime à la fois une forte importance et une forte insatisfaction",
              "Les habitudes de vie les plus faciles à modifier par l'environnement",
              "Les rôles sociaux car ils sont les plus significatifs pour la participation",
            ],
            bonneReponse: 1,
            explication: "La priorité est déterminée en croisant deux critères : l'importance accordée par la personne à une habitude de vie, et son niveau d'insatisfaction actuel. Une situation de handicap sur une activité jugée secondaire par la personne ne justifie pas la même mobilisation que sur une habitude centrale à son identité.",
          },
          {
            question: "Une personne hospitalisée résiste systématiquement aux soins. L'équipe pense qu'elle est « non-compliant ». Quelle lecture MDH-PPH permet d'enrichir cette analyse ?",
            reponses: [
              "La résistance confirme la sévérité de la pathologie psychiatrique",
              "Le cadre de soin lui-même crée peut-être des obstacles à l'autodétermination qui génèrent une résistance légitime",
              "Il faut renforcer le protocole de soin pour obtenir l'adhésion",
              "La non-compliance est un facteur personnel sur lequel on ne peut pas agir",
            ],
            bonneReponse: 1,
            explication: "Le MDH-PPH invite à lire la résistance aux soins comme un signal d'inadéquation environnementale : le cadre de soin produit peut-être des obstacles à l'autodétermination qui génèrent une résistance légitime. Identifier ces obstacles environnementaux est la première étape.",
          },
          {
            question: "Comment le MDH-PPH transforme-t-il une réunion de synthèse interdisciplinaire ?",
            reponses: [
              "Il permet à chaque professionnel de défendre sa lecture disciplinaire de façon plus structurée",
              "Il fournit un langage commun qui déplace le débat de la pathologie vers l'interaction personne-environnement",
              "Il remplace les observations cliniques par des données statistiques",
              "Il impose un ordre du jour standardisé à toutes les équipes",
            ],
            bonneReponse: 1,
            explication: "Le MDH-PPH offre une nomenclature partagée. Au lieu que chaque professionnel défende sa lecture disciplinaire, l'équipe reformule ensemble en termes d'interaction : quel facteur environnemental a produit quelle situation de handicap dans quelle habitude de vie ? Cela ouvre vers des solutions concrètes.",
          },
          {
            question: "Pourquoi les réévaluations MDH-PPH doivent-elles être planifiées et proactives, pas seulement réactives aux crises ?",
            reponses: [
              "Pour respecter les exigences administratives de qualité institutionnelle",
              "Parce que le flux temporel rappelle que les situations évoluent — et que le vieillissement ou une transition peut transformer d'anciens facilitateurs en obstacles",
              "Pour justifier les dépenses liées à l'accompagnement auprès des financeurs",
              "Parce que les personnes en situation de handicap ne signalent jamais elles-mêmes leurs difficultés",
            ],
            bonneReponse: 1,
            explication: "Le flux temporel est au cœur du MDH-PPH 2018 : les situations évoluent en permanence. Le vieillissement, un déménagement, un changement d'équipe ou de proche aidant peuvent transformer d'anciens facilitateurs en obstacles. Anticiper ces transitions plutôt que les subir est l'un des apports majeurs du modèle.",
          },
          {
            question: "Selon le MDH-PPH, pourquoi une personne de 50 ans accompagnée depuis longtemps peut-elle se retrouver en situation de handicap croissante sans que son handicap d'origine se soit aggravé ?",
            reponses: [
              "Parce que les traitements médicaux deviennent moins efficaces avec l'âge",
              "Parce que le vieillissement modifie les facteurs personnels (systèmes organiques), et si l'environnement n'est pas adapté en conséquence, une nouvelle situation de handicap émerge",
              "Parce que les institutions deviennent moins attentives aux personnes après 40 ans",
              "Parce que les habitudes de vie deviennent moins importantes pour les personnes âgées",
            ],
            bonneReponse: 1,
            explication: "Le flux temporel du MDH-PPH 2018 intègre le vieillissement comme une évolution des facteurs personnels (capacités organiques). Si l'environnement n'est pas adapté en conséquence — mêmes horaires, mêmes trajets, mêmes formats d'activité —, la situation de handicap s'aggrave progressivement. L'enjeu est d'anticiper ces évolutions par des réévaluations proactives, pas de les traiter comme des fatalités.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
