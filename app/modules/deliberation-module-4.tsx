import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4Deliberation({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Éthique professionnelle"
        titre="La Méthode de Délibération"
        titrePart2="Structurer pour décider"
        sousTitre="Traduire les fondements théoriques en une méthode concrète applicable dans les colloques d'équipe et les instances éthiques."
        duree="45 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le cœur opérationnel de la formation">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre l'approche de Legault sur la délibération éthique",
              "Maîtriser les trois objectifs de la délibération : discerner, décider, assumer",
              "Connaître les conditions d'une délibération réelle dans votre contexte",
              "Distinguer consensus réel et consensus artificiel, et savoir quand l'un se fait passer pour l'autre"
            ]} />
          </ConceptBox>
          <Texte>Les trois modules précédents vous ont donné des cadres pour penser les dilemmes éthiques : l'éthique des vertus, le triangle de Ricœur, l'éthique de la discussion d'Habermas. Ce module vous donne un outil pour agir. Comment structurer une délibération en équipe ? Comment passer de « tout le monde a un avis » à « nous avons une décision que nous pouvons assumer collectivement » ? Comment éviter que la réunion éthique ne soit qu'un rituel formel qui valide une décision déjà prise ?</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La délibération selon Legault : Un système ouvert">
          <Texte>Georges Legault, philosophe québécois spécialisé en éthique appliquée, formalise une approche particulièrement adaptée aux professions du social. Son point de départ est une critique des approches trop légalistes : dans la réalité des situations complexes, l'application mécanique de règles préétablies est insuffisante, non pas parce que les règles sont mauvaises, mais parce que la réalité dépasse toujours les règles.</Texte>
          <Texte>La délibération est une étude collective et argumentée visant une décision ou une marche à suivre. Elle se distingue radicalement d'un vote (qui compte les préférences sans les examiner), d'une décision hiérarchique (qui court-circuite la discussion collective), et d'un consensus mou (qui évite le conflit en sacrifiant la rigueur). Elle suppose un processus de mise à plat collective des enjeux, des valeurs en tension et des options possibles, avant d'arrêter une position.</Texte>
          <Texte>Ce qui est important à retenir : la délibération ne part pas d'une obligation légale pour en déduire mécaniquement la bonne conduite. Elle part de la réalité des personnes, de la complexité concrète de la situation, et remonte vers les valeurs et les principes. Ce mouvement inversé est décisif : il empêche que la règle écrase la réalité.</Texte>
          <HighlightBox label="La valeur ajoutée de la délibération" couleur="vert">
            <Liste items={[
              "Elle oblige à mettre en mots les enjeux implicites que l'on évite habituellement",
              "Elle force l'équipe à confronter des lectures différentes d'une même situation",
              "Elle produit une décision que chacun comprend et peut assumer, pas seulement appliquer",
              "Elle protège les professionnels : une décision collective délibérée est plus robuste qu'une décision individuelle face aux imprévus"
            ]} />
          </HighlightBox>
          <PullQuote>
            La délibération ne part pas d'une obligation légale pour en déduire mécaniquement la bonne conduite. Elle part de la réalité des personnes.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les trois objectifs de la délibération : Discerner, décider, assumer">
          <Texte>Legault identifie trois objectifs que la délibération éthique doit poursuivre simultanément. Ces trois mouvements ne sont pas des étapes séquentielles strictement ordonnées, ils s'entrelacent et se nourrissent mutuellement tout au long du processus. On peut discerner pendant qu'on assume, revenir sur ce qu'on avait cru décider après avoir entendu un nouvel argument.</Texte>
          <SchemaEtapes
            titre="Les trois dimensions de la délibération"
            etapes={[
              { niveau: "Objectif 1", nom: "Discerner", definition: "Identifier les enjeux éthiques réels, valeurs en tension, droits en conflit, intérêts divergents des parties prenantes. Ce n'est pas l'étape la plus longue mais c'est souvent la plus importante : les équipes qui se trompent de problème prennent de bonnes décisions pour le mauvais dilemme." },
              { niveau: "Objectif 2", nom: "Décider", definition: "Délibérer sur le meilleur choix possible selon les circonstances. Non pas le choix parfait, qui n'existe pas, mais le plus raisonnable compte tenu de toutes les contraintes. Une décision éthique assume ses imperfections et ses coûts, plutôt que de les nier." },
              { niveau: "Objectif 3", nom: "Assumer", definition: "Dialoguer pour porter collectivement les motifs de la décision et en rendre compte à la personne, à sa famille et à l'institution. Ce troisième objectif est souvent négligé, mais c'est lui qui transforme une décision en engagement professionnel partagé." }
            ]}
          />
          <HighlightBox label="Dans le cas de Madame De Montmollin" couleur="bleu">
            <Texte>Discerner, c'est nommer explicitement ce qui est vraiment en jeu : l'autonomie d'une résidente, sa sécurité physique, sa dignité, le projet de vie bonne qu'elle poursuit, l'intégrité de la relation soignant-résidente, les intérêts institutionnels liés au projet GPS. Décider, c'est choisir une orientation en sachant qu'aucune option n'est parfaite : chacune a un coût. Assumer, c'est être capable d'expliquer cette décision à Mme De Montmollin elle-même, à sa fille, et à la direction : « Voilà pourquoi nous avons choisi cela, voilà ce que nous avons pesé, voilà ce que nous avons écarté et pourquoi. »</Texte>
          </HighlightBox>
          <Texte>Cet objectif d'assumer est particulièrement important dans les professions du social. Les décisions difficiles créent souvent un sentiment de culpabilité collective, « avons-nous fait ce qu'il fallait ? ». La délibération, quand elle est bien menée, ne fait pas disparaître cette question, mais elle donne les moyens d'y répondre. On peut assumer une décision imparfaite quand on peut expliquer pourquoi c'était le meilleur choix possible dans ce contexte.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les conditions d'une délibération réelle">
          <Texte>Une délibération ne se décrète pas, elle se construit. Il existe des conditions qui la rendent possible, et des conditions qui la sabotent. Les connaître permet d'agir sur son contexte institutionnel pour améliorer la qualité des décisions collectives.</Texte>
          <HighlightBox label="Conditions d'une délibération réelle" couleur="vert">
            <Liste items={[
              "Un temps dédié, séparé des urgences opérationnelles : on ne délibère pas bien en cinq minutes entre deux urgences",
              "Un animateur ou une animatrice qui garantit que toutes les voix peuvent s'exprimer, y compris celles qui n'osent pas contredire la hiérarchie",
              "Une formulation claire du dilemme en amont, quel est exactement le problème éthique qu'on cherche à traiter ?",
              "La présence (directe ou indirecte) des personnes concernées, ou au moins une représentation fidèle de leur point de vue",
              "Une culture d'équipe qui valorise le désaccord argumenté plutôt que l'harmonie de surface"
            ]} />
          </HighlightBox>
          <Texte>Les comités d'éthique institutionnels sont les instances formelles dans lesquelles la méthode délibérative prend vie à l'échelle d'un établissement. Leur existence témoigne d'une reconnaissance collective que certaines décisions dépassent la compétence d'un individu ou d'une équipe restreinte. Ils ne remplacent pas les délibérations d'équipe, ils les complètent pour les cas qui nécessitent un regard plus large ou plus distancié.</Texte>
          <HighlightBox label="Deux types de comités d'éthique" couleur="bleu">
            <Liste items={[
              "Comités d'éthique de la recherche, pouvoir décisionnel : ils approuvent ou refusent des protocoles de recherche impliquant des êtres humains",
              "Comités d'éthique clinique, pouvoir de recommandation : ils éclairent les professionnels mais ne se substituent pas à leur responsabilité décisionnelle. Un comité clinique ne décide pas à la place de l'équipe, il l'aide à décider mieux."
            ]} />
          </HighlightBox>
          <Texte>La multidisciplinarité des comités n'est pas un détail organisationnel, c'est une condition de validité de leurs recommandations. La pluralité des regards (médical, psychosocial, juridique, éthique, communautaire) est le seul rempart contre l'aveuglement corporatiste. Une décision prise uniquement par des médecins sur une question qui touche à l'autonomie d'une personne est structurellement incomplète, même si les médecins sont excellents dans leur domaine.</Texte>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Votre institution dispose-t-elle d'espaces formels de délibération éthique ? Des colloques de cas réguliers ? Une supervision éthique ? Qui peut y accéder ? Qui anime ces espaces et avec quelle méthode ? Si ces espaces n'existent pas ou fonctionnent mal, quelles seraient les conditions minimales pour les améliorer ? Ce sont des questions que vous pouvez porter dans vos équipes.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Consensus réel vs consensus artificiel : Les pièges du collectif">
          <Texte>Le consensus artificiel est l'un des risques les plus sérieux dans les délibérations collectives. Il se présente comme un accord, mais cache des désaccords de fond qui ressortiront dans la pratique : sous forme de résistances silencieuses, d'applications incohérentes de la décision, ou de tensions relationnelles non réglées.</Texte>
          <HighlightBox label="Les formes du consensus artificiel" couleur="jaune">
            <Liste items={[
              "Ralliement silencieux à l'option majoritaire par désir de paix ou fatigue de la réunion",
              "Crainte d'être marginalisé par le groupe ou jugé comme difficile par les collègues",
              "Soumission à un savoir supposé supérieur, « le médecin a dit... » ou « la direction a décidé... »",
              "Évitement du conflit au détriment de l'analyse rigoureuse, « on va pas passer deux heures là-dessus »",
              "Pression au consensus pour satisfaire une contrainte temporelle ou administrative"
            ]} />
          </HighlightBox>
          <Texte>Le consensus artificiel a une caractéristique particulière : il est « psychologiquement réconfortant et politiquement utile ». Il clôt la discussion, décharge la tension de la réunion, et donne l'impression que la question est réglée. C'est pour cette raison qu'il est si difficile à résister, surtout dans des équipes sous pression, où le temps est rare et les situations urgentes s'accumulent.</Texte>
          <HighlightBox label="Les conditions du consensus réel" couleur="vert">
            <Texte>Le consensus réel est une entente authentique fondée sur une compréhension commune et intelligente de la situation. Il implique que chaque participant a eu la possibilité de s'exprimer, que les désaccords ont été explorés, pas étouffés, et que la solution retenue est rationnellement acceptable par tous, même par ceux qui auraient préféré une autre option. Il ne requiert pas l'unanimité des préférences, mais la compréhension partagée des motifs.</Texte>
          </HighlightBox>
          <Texte>Un test simple pour distinguer les deux : après la réunion, demandez à chaque membre de l'équipe d'expliquer la décision et ses motifs. Si les explications convergent, même avec des nuances, c'est un signe de consensus réel. Si chacun raconte une décision différente, ou si certains ne savent pas pourquoi la décision a été prise, c'est un consensus artificiel. La délibération de qualité produit une boussole partagée, pas seulement un accord de surface.</Texte>
          <PullQuote>
            La condition du consensus réel est le décentrement de l'ego, soumettre ses propres certitudes à la discussion collective.
          </PullQuote>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Après votre prochaine réunion d'équipe sur une situation difficile, proposez ce test : chacun dit en une phrase pourquoi la décision a été prise ainsi. Convergez-vous vraiment ? Ce n'est pas un exercice de contrôle, c'est un outil pour vérifier si la délibération a réellement eu lieu.</Texte>
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "La délibération selon Legault est :",
            reponses: [
              "Un vote à la majorité sur la meilleure option disponible",
              "Une étude collective et argumentée visant une décision",
              "Une décision prise par le responsable d'équipe après consultation",
              "Un processus individuel de réflexion sur la règle à appliquer"
            ],
            bonneReponse: 1,
            explication: "La délibération chez Legault est collective, argumentée et vise une justification réelle des choix, pas une légitimation après coup. Elle part de la complexité des situations, non d'une obligation légale."
          },
          {
            question: "Les trois objectifs de la délibération sont :",
            reponses: [
              "Observer, analyser, documenter",
              "Discerner, décider, assumer",
              "Évaluer, planifier, agir",
              "Diagnostiquer, traiter, évaluer"
            ],
            bonneReponse: 1,
            explication: "Ces trois mouvements sont entrelacés, identifier les enjeux éthiques, délibérer sur le meilleur choix, et porter collectivement la responsabilité de la décision et ses motifs."
          },
          {
            question: "La différence entre comité d'éthique clinique et comité de recherche est que :",
            reponses: [
              "Le comité clinique a un pouvoir décisionnel, le comité de recherche un pouvoir de recommandation",
              "Le comité clinique recommande sans décider, le comité de recherche approuve ou refuse",
              "Ils ont les mêmes pouvoirs mais dans des domaines différents",
              "Seul le comité de recherche est reconnu légalement en Suisse"
            ],
            bonneReponse: 1,
            explication: "Le comité clinique éclaire la décision des professionnels mais ne se substitue pas à leur responsabilité décisionnelle. Un comité clinique ne décide pas à la place des soignants, il éclaire leur décision."
          },
          {
            question: "Un consensus artificiel se caractérise par :",
            reponses: [
              "Un accord obtenu après une discussion approfondie et ouverte",
              "Un ralliement apparent qui laisse intacts les désaccords de fond",
              "Un désaccord explicite sur les valeurs fondamentales en jeu",
              "Une décision prise à l'unanimité après délibération complète"
            ],
            bonneReponse: 1,
            explication: "Le consensus artificiel est un pseudo-accord qui évite le conflit, les désaccords de fond resurgiront dans la pratique. Il se manifeste par le ralliement silencieux, la peur de la marginalisation, ou la déférence à l'autorité."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
