import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module2VieillissementBases({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Accompagner le vieillissement en institution — Les bases"
        titre="Reconnaître les signaux"
        titrePart2="du vieillissement en institution"
        sousTitre="Signes physiques, cognitifs et comportementaux — et comment éviter le piège de l'overshadowing."
        duree="30 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Détecter tôt : une compétence professionnelle décisive">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier les principaux signes physiques et fonctionnels du vieillissement",
              "Reconnaître les signes évocateurs d'un trouble cognitif débutant",
              "Distinguer les manifestations psychiques liées au vieillissement",
              "Comprendre le phénomène d'overshadowing et savoir s'en prémunir",
              "Adopter une posture d'observation rigoureuse et systématique"
            ]} />
          </ConceptBox>
          <Texte>Reconnaître les signaux du vieillissement est l&apos;une des compétences les plus importantes — et les plus délicates — dans l&apos;accompagnement des personnes en situation de handicap vieillissantes.</Texte>
          <Texte>Délicate, parce que ces signaux sont souvent progressifs, discrets, et facilement confondus avec d&apos;autres phénomènes : une &quot;mauvaise période&quot;, une aggravation du handicap, un comportement habituel qui s&apos;intensifie.</Texte>
          <PullQuote>
            Un trouble de la déglutition détecté tôt permet d&apos;adapter l&apos;alimentation avant la première fausse route grave. Une démence identifiée à ses débuts permet d&apos;adapter l&apos;environnement avant que les symptômes deviennent ingérables.
          </PullQuote>
          <Texte>Vous êtes, en tant que professionnel du quotidien, souvent le premier à percevoir ces changements. Votre connaissance intime de la personne — ses habitudes, ses capacités habituelles, ses petits rituels — vous permet de détecter des changements infimes qu&apos;un médecin, vu la personne une fois par trimestre, ne pourrait pas percevoir.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Signes physiques et fonctionnels : ce que le corps exprime">

          <HighlightBox label="La mobilité et l'équilibre — signal d'alerte central" couleur="bleu">
            <Texte>L&apos;une des premières manifestations du vieillissement est souvent une modification de la mobilité. Soyez attentif aux signes suivants :</Texte>
            <Liste items={[
              "Ralentissement général du pas, marche moins assurée",
              "Prise d'appui plus fréquente sur les murs ou les meubles",
              "Hésitation devant les escaliers qui n'existait pas auparavant",
              "Évitement de certains espaces ou surfaces"
            ]} />
            <Texte><strong>Les chutes peuvent avoir des conséquences catastrophiques</strong> : fractures, hospitalisations prolongées, perte définitive de la marche. Signalez immédiatement tout changement observé.</Texte>
          </HighlightBox>

          <HighlightBox label="Les troubles de la déglutition (dysphagie) — un risque souvent invisible" couleur="jaune">
            <Texte>Fréquents chez les personnes avec paralysie cérébrale, polyhandicap ou trisomie 21. Une fausse route répétée peut entraîner des pneumonies d&apos;aspiration potentiellement mortelles. Signes à surveiller :</Texte>
            <Liste items={[
              "Mange plus lentement qu'avant, tousse pendant ou après les repas",
              "Garde des aliments dans la bouche sans les avaler",
              "Évite certains aliments (viandes dures, pain) sans explication",
              "Se plaint de 'quelque chose qui reste dans la gorge'",
              "Voix 'mouillée' ou enrouée après les repas",
              "Infections pulmonaires à répétition"
            ]} />
          </HighlightBox>

          <TableauComparaison
            titre="Autres signaux physiques à surveiller"
            colonnes={[
              {
                titre: "Domaine",
                contenu: ["Vision et audition", "Sommeil", "Douleur"]
              },
              {
                titre: "Manifestations",
                contenu: [
                  "Répond à côté, semble 'dans son monde', évite certaines activités",
                  "Somnolence diurne, réveils nocturnes, irritabilité accrue",
                  "Agitation, repli, refus d'activités sans cause visible"
                ]
              },
              {
                titre: "Risque si non détecté",
                contenu: [
                  "Diagnostic erroné de démence ou d'aggravation du handicap",
                  "Déclin cognitif amplifié, participation réduite",
                  "Comportements défis aggravés, sous-traitement chronique"
                ]
              }
            ]}
          />

          <HighlightBox label="Bilan sensoriel régulier" couleur="vert">
            <Texte>Un examen visuel et un audiogramme réalisés régulièrement <strong>à partir de 50 ans</strong> peuvent prévenir de nombreuses situations de dégradation évitable. Une perte auditive non corrigée peut être confondue avec une démence débutante.</Texte>
          </HighlightBox>

          <HighlightBox label="Observer, noter, transmettre — la triade indispensable" couleur="bleu">
            <Texte>La détection précoce repose sur une pratique rigoureuse : <strong>observer, noter, transmettre</strong>. Une chute, c&apos;est un incident. Trois chutes en deux mois, c&apos;est un signal. Un refus alimentaire répété deux semaines de suite, c&apos;est quelque chose à investiguer.</Texte>
            <Texte>Prenez l&apos;habitude de noter dans les transmissions tout changement fonctionnel que vous observez, même s&apos;il vous semble mineur.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Troubles cognitifs et neurodégénératifs : reconnaître ce qui change">
          <Texte>Reconnaître les débuts d&apos;un trouble cognitif chez une personne en situation de déficience intellectuelle est l&apos;un des défis les plus difficiles. Les outils d&apos;évaluation cognitive standard ont été conçus pour la population générale — ils sont souvent inadaptés.</Texte>

          <HighlightBox label="Le concept d'état de base — clé de l'évaluation" couleur="bleu">
            <Texte>L&apos;<strong>état de base</strong> désigne l&apos;ensemble des capacités, comportements, habitudes et compétences propres à une personne à un moment donné, documenté comme référence. Si vous accompagnez une personne depuis 10 ans, vous connaissez son état de base. C&apos;est par la <strong>comparaison avec cet état de base</strong> que vous pouvez détecter un déclin cognitif — et non par des tests standardisés inadaptés.</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="Signes évocateurs d'un trouble cognitif débutant"
            etapes={[
              { niveau: "Catégorie 1", nom: "Compétences", definition: "Perte de capacités bien établies : trajets habituels, tâches maîtrisées, reconnaissance de personnes familières" },
              { niveau: "Catégorie 2", nom: "Comportement", definition: "Apathie nouvelle, refus d'activités aimées, anxiété dans des situations habituellement gérables" },
              { niveau: "Catégorie 3", nom: "Rythme", definition: "Troubles veille-sommeil, déambulation, comportements répétitifs nouveaux" }
            ]}
          />

          <HighlightBox label="Principe fondamental" couleur="jaune">
            <Texte>Chez les personnes avec déficience intellectuelle, le signe le plus précoce d&apos;un déclin cognitif est souvent <strong>la perte de compétences spécifiques à leur niveau</strong>. Une personne qui n&apos;a jamais su lire ne perdra pas la lecture, mais peut perdre la capacité à reconnaître son propre nom sur sa porte si elle y était parvenue.</Texte>
          </HighlightBox>

          <Texte>Cette approche par l&apos;état de base a une implication directe sur la pratique : cet état doit avoir été documenté à un moment où la personne était stable. Une équipe qui commence à s&apos;inquiéter du déclin cognitif d&apos;une personne de 55 ans, sans avoir de traces de son fonctionnement à 40 ou 45 ans, se retrouve sans point de référence fiable. C&apos;est précisément pour cette raison que noter régulièrement les capacités, les habitudes et les comportements des personnes accompagnées — y compris quand tout va bien — est bien plus qu&apos;une formalité administrative. C&apos;est une protection anticipée, construite au fil des années de présence quotidienne.</Texte>

          <PullQuote>
            La documentation régulière et précise dans le dossier de la personne n&apos;est pas une formalité administrative. Elle est l&apos;outil qui permet de détecter les changements cognitifs précocement.
          </PullQuote>

          <HighlightBox label="Comment bien décrire dans une transmission" couleur="vert">
            <Texte>Une bonne observation se décrit en quatre éléments : <strong>quoi</strong> (le comportement ou changement, de manière factuelle), <strong>quand</strong> (date, heure, contexte), <strong>depuis quand</strong> (première fois ou tendance ?), et <strong>par rapport à quoi</strong> (en quoi c&apos;est différent du comportement habituel de cette personne).</Texte>
            <Liste items={[
              "À éviter : \"Robert est de plus en plus fatigué et difficile.\"",
              "À privilégier : \"Robert (lundi et mercredi cette semaine) s'est endormi pendant l'atelier, ce qu'il ne fait jamais habituellement. Il a dit 'j'en peux plus'. Ce comportement a commencé il y a environ 3 semaines.\""
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Manifestations psychiques : la dimension émotionnelle du vieillissement">
          <Texte>Le vieillissement n&apos;est pas uniquement une réalité biologique. C&apos;est aussi une expérience subjective : l&apos;expérience de la perte, du changement, de la finitude. Les personnes en situation de handicap perçoivent les changements dans leur corps, dans leurs capacités, dans leur vie sociale — même si elles ne peuvent pas toujours les nommer.</Texte>

          <HighlightBox label="La dépression — un risque majeur et sous-estimé" couleur="jaune">
            <Texte>Chez les personnes avec des difficultés de communication, la dépression s&apos;exprime souvent de manière somatique et comportementale :</Texte>
            <Liste items={[
              "Refus alimentaire, perturbations du sommeil",
              "Douleurs corporelles sans cause organique identifiée",
              "Agitation ou apathie marquée",
              "Régression des acquis, modification des interactions sociales"
            ]} />
            <Texte><strong>Ne banalisez pas ces manifestations en les attribuant au &apos;caractère&apos; de la personne ou à son handicap.</strong></Texte>
          </HighlightBox>

          <TableauComparaison
            titre="Les trois deuils du vieillissement"
            colonnes={[
              {
                titre: "Type de deuil",
                contenu: ["Deuil des capacités perdues", "Deuil des pairs", "Deuil du rôle social"]
              },
              {
                titre: "Description",
                contenu: [
                  "Passer d'une marche difficile au fauteuil roulant, mémoire défaillante perçue",
                  "Décès ou départ de résidents côtoyés depuis des décennies",
                  "Arrêt de l'atelier protégé ou de l'ESAT à la retraite"
                ]
              },
              {
                titre: "Réponse professionnelle",
                contenu: [
                  "Nommer la perte, ne pas minimiser, soutien psychologique",
                  "Reconnaître la perte, maintenir des rituels de mémoire",
                  "Préparer la transition 2-3 ans avant, proposer de nouveaux rôles"
                ]
              }
            ]}
          />

          <HighlightBox label="Anxiété face aux changements environnementaux" couleur="vert">
            <Texte>Avec le vieillissement, et particulièrement en présence d&apos;un déclin cognitif, une sensibilité accrue aux changements environnementaux peut apparaître. Un changement d&apos;équipe, une modification du programme, un déménagement de chambre peut devenir source d&apos;anxiété intense.</Texte>
            <Texte>Pratiques préventives : <strong>maintenir les routines, prévenir à l&apos;avance avec des supports visuels (photos, pictogrammes), réduire les changements simultanés</strong>.</Texte>
          </HighlightBox>

          <Texte>Il faut aussi prendre en compte la dimension existentielle du vieillissement pour ces personnes. Vivre en institution depuis des décennies signifie que cet environnement est souvent le monde entier — ou presque. Les pairs qui ont décliné avant elles. Les professionnels de référence qui sont partis. Les collègues d&apos;atelier qui ne sont plus là. Une personne de 60 ans accompagnée depuis l&apos;âge de 20 ans a traversé des dizaines de deuils — de pairs, de visages familiers, de capacités perdues — sans toujours disposer des mots pour les nommer, ni de l&apos;espace pour les traverser.</Texte>
          <Texte>Ce poids existentiel ne relève pas toujours du pathologique. Il relève de ce que tout être humain traverse en vieillissant : le sens de la vie passée, la place que l&apos;on occupe encore, la peur de ce qui vient. La spécificité, ici, est que ces personnes ont souvent peu d&apos;espaces pour formuler ces questions — et que les équipes qui les accompagnent ne sont pas toujours préparées à les accueillir.</Texte>
          <PullQuote>
            Accompagner le vieillissement, c&apos;est aussi tenir un espace pour que ces questions puissent exister — sans forcément y apporter de réponse.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Le phénomène d'overshadowing : le biais qui cache la réalité">
          <HighlightBox label="Définition" couleur="bleu">
            <Texte>L&apos;<strong>overshadowing</strong> (ou &quot;effet d&apos;éclipse&quot;) désigne la tendance à attribuer automatiquement tout changement observé chez une personne en situation de handicap à son handicap initial, sans chercher d&apos;autres causes possibles. Ce biais touche les médecins, les infirmiers, et les professionnels du quotidien. Il n&apos;est pas une faute — c&apos;est un biais cognitif naturel. Mais ses conséquences peuvent être graves.</Texte>
          </HighlightBox>

          <Texte>Voici trois situations d&apos;overshadowing typiques :</Texte>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation 1</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Marc, 58 ans, schizophrénie chronique.</strong> Devient progressivement plus agité. L&apos;équipe adapte son traitement psychotrope. Personne ne pense à évaluer sa douleur. Trois mois plus tard, une consultation dentaire révèle une carie profonde et un abcès important.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation 2</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Lucie, 54 ans, trisomie 21.</strong> Perd progressivement ses acquis. L&apos;équipe dit &quot;elle a toujours eu des difficultés, c&apos;est sa déficience qui évolue&quot;. La famille insiste pour une évaluation. Diagnostic posé : maladie d&apos;Alzheimer débutante. L&apos;institution n&apos;était pas préparée.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation 3</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Thomas, 61 ans, traumatisme crânien.</strong> Dort de plus en plus le jour, agité la nuit. L&apos;équipe pense que &quot;c&apos;est son caractère&quot;. Une évaluation révèle un syndrome d&apos;apnées du sommeil sévère, traitable.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation 4</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>David, 53 ans, autisme sévère.</strong> Ses vocalises — habituellement discrètes et rythmées — sont devenues intenses et répétées depuis deux mois, particulièrement le soir. L&apos;équipe note dans les transmissions : &quot;aggravation des comportements autistiques, probablement liée au vieillissement&quot;. Personne ne cherche à évaluer la douleur. Un bilan dentaire réalisé lors d&apos;une visite médicale de routine révèle plusieurs caries profondes et un abcès non traité.</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation 5</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Isabelle, 58 ans, déficience intellectuelle légère.</strong> Depuis quelques mois, elle répond à côté lors des activités de groupe, semble ne pas entendre certaines consignes, et s&apos;est progressivement mise à l&apos;écart des autres résidents. L&apos;équipe attribue ce changement à &quot;une évolution naturelle de sa déficience&quot;. Un audiogramme prescrit après signalement révèle une perte auditive bilatérale importante, facilement appareillable.</p>
            </div>
          </div>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Sandra, 52 ans, est &quot;de plus en plus difficile&quot;</p>
              <p className="text-gray-700 text-sm leading-relaxed">Sandra a un handicap moteur d&apos;origine neurologique. Depuis deux mois, elle refuse parfois de se lever le matin, repousse les professionnels qui s&apos;approchent pour l&apos;aide à la toilette, et présente des pleurs inexpliqués. L&apos;équipe note dans les transmissions : &quot;comportement difficile, opposition accrue&quot;. La cheffe d&apos;équipe propose d&apos;adapter le plan d&apos;intervention comportemental.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Y a-t-il un risque d&apos;overshadowing dans cette situation ? Quelle question essentielle n&apos;a pas encore été posée ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Oui, le risque d&apos;overshadowing est réel. Les comportements de Sandra sont directement interprétés comme un problème comportemental. La question qui n&apos;a pas été posée : Sandra a-t-elle mal ? Les douleurs articulaires, dorsales ou musculaires sont fréquentes chez les personnes avec handicap moteur vieillissantes, et peuvent rendre les gestes de soin très douloureux. Avant d&apos;adapter un plan comportemental, la première étape est d&apos;éliminer une cause somatique. La démarche : signaler au médecin référent en décrivant précisément le contexte des comportements — lors de la toilette, lors des mobilisations — et en posant explicitement la question de la douleur.</p>
            </div>
          </div>

          <TableauComparaison
            titre="Conséquences et prévention de l'overshadowing"
            colonnes={[
              {
                titre: "Conséquences",
                contenu: ["Retard de diagnostic", "Sous-traitement de la douleur", "Aggravation des comportements défis"]
              },
              {
                titre: "Comment s'en prémunir",
                contenu: [
                  "Se demander systématiquement : 'Ce changement pourrait-il avoir une autre cause ?'",
                  "Décrire factuellement (quoi, quand, depuis quand) avant d'interpréter",
                  "Demander que les causes somatiques soient éliminées avant de conclure"
                ]
              }
            ]}
          />

          <PullQuote>
            &quot;Ce changement est-il vraiment lié à son handicap, ou pourrait-il avoir une autre cause ?&quot; Cette question doit devenir un réflexe professionnel.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Reconnaître les signaux du vieillissement est une compétence professionnelle à part entière, qui repose sur la rigueur de l&apos;observation, la qualité de la documentation, et la conscience des biais cognitifs comme l&apos;overshadowing.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Observer, noter, transmettre : la triade de la détection précoce",
              "L'état de base documenté est l'outil de référence pour détecter un déclin cognitif",
              "La dépression s'exprime souvent par le corps chez les personnes avec peu de mots",
              "L'overshadowing est un biais naturel — en avoir conscience est le premier pas pour s'en prémunir",
              "Signaler un changement, même mineur, c'est une responsabilité professionnelle"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Pourquoi les professionnels de terrain sont-ils souvent mieux placés que les médecins pour détecter les signes de vieillissement ?",
            reponses: [
              "Parce qu'ils ont une formation médicale plus approfondie",
              "Parce qu'ils connaissent la personne dans sa globalité et voient les changements par rapport à son état de base",
              "Parce que les médecins ne s'intéressent pas au vieillissement des personnes handicapées",
              "Parce qu'ils ont accès aux dossiers médicaux complets"
            ],
            bonneReponse: 1,
            explication: "La connaissance intime de la personne — ses habitudes, ses capacités habituelles, ses petits rituels — permet aux professionnels de terrain de percevoir des changements infimes. Un médecin qui voit la personne une fois par trimestre ne dispose pas de cette perspective longitudinale."
          },
          {
            question: "Parmi ces signes, lequel est le plus évocateur d'un trouble de la déglutition ?",
            reponses: [
              "Agitation accrue pendant les activités",
              "Voix 'mouillée' ou enrouée après les repas, avec toux fréquente",
              "Difficultés à se souvenir des noms des collègues",
              "Somnolence diurne et réveils nocturnes"
            ],
            bonneReponse: 1,
            explication: "Les troubles de la déglutition (dysphagie) se manifestent particulièrement autour des repas : toux, voix mouillée, rétention alimentaire dans la bouche. Ils peuvent entraîner des pneumonies d'aspiration potentiellement mortelles et nécessitent une évaluation par un logopédiste spécialisé."
          },
          {
            question: "Qu'est-ce que le concept d'état de base ?",
            reponses: [
              "Le score obtenu lors d'un test cognitif standardisé",
              "L'ensemble des capacités, comportements et habitudes propres à une personne, documenté comme référence",
              "Le diagnostic médical initial posé lors de l'entrée en institution",
              "La liste des médicaments pris par une personne à un moment donné"
            ],
            bonneReponse: 1,
            explication: "L'état de base est la référence individuelle propre à chaque personne. C'est par la comparaison avec cet état de base — et non par des tests standardisés inadaptés — que l'on peut détecter un déclin cognitif chez une personne avec déficience intellectuelle."
          },
          {
            question: "Comment la dépression se manifeste-t-elle souvent chez les personnes avec peu de capacités de communication ?",
            reponses: [
              "Par une tristesse exprimée verbalement et des pleurs fréquents",
              "Par des plaintes concernant l'équipe et l'institution",
              "De manière somatique et comportementale : refus alimentaire, agitation, régression des acquis",
              "Par une demande accrue d'activités et de sorties"
            ],
            bonneReponse: 2,
            explication: "Chez les personnes avec difficultés de communication ou déficience intellectuelle, la dépression s'exprime rarement par de la tristesse verbalisée. Elle se manifeste souvent par le corps et le comportement : refus alimentaire, troubles du sommeil, agitation ou apathie, régression des acquis. Ces signes ne doivent pas être banalisés."
          },
          {
            question: "L'overshadowing est :",
            reponses: [
              "Une technique d'observation recommandée dans le travail social",
              "La tendance à attribuer tout changement observé au handicap initial, sans chercher d'autres causes",
              "Un outil d'évaluation cognitive adapté aux personnes avec déficience intellectuelle",
              "Un phénomène propre aux équipes sans formation spécifique"
            ],
            bonneReponse: 1,
            explication: "L'overshadowing est un biais cognitif naturel qui touche tous les professionnels, quel que soit leur niveau d'expérience. Il consiste à expliquer automatiquement tout changement par le handicap initial, sans explorer d'autres causes possibles. Ses conséquences : retard de diagnostic, sous-traitement de la douleur, aggravation des comportements."
          },
          {
            question: "Quelle est la pratique professionnelle centrale recommandée pour détecter précocement les signes de vieillissement ?",
            reponses: [
              "Organiser un bilan médical complet chaque mois",
              "Observer, noter systématiquement dans les transmissions, et transmettre",
              "Contacter la famille à chaque changement observé",
              "Demander à la personne elle-même de signaler ses changements"
            ],
            bonneReponse: 1,
            explication: "Observer, noter, transmettre : c'est la triade fondamentale de la détection précoce. Les observations informelles restent souvent dans la tête du professionnel sans être consignées. C'est l'accumulation d'observations sur la durée qui permet de percevoir une tendance et de distinguer un incident d'un signal."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
