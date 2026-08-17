import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module7VieillissementApprofondissement({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={7}
        categorie="Handicap et vieillissement : Approfondissement"
        titre="Observer et documenter"
        titrePart2="pour agir"
        sousTitre="Structurer l'observation professionnelle, construire un état de base solide et produire des transmissions cliniquement utiles."
        duree="45 minutes"
        niveau="Confirmé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="L'observation structurée : une compétence clinique à part entière">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Distinguer observation, interprétation et évaluation",
              "Construire et maintenir un état de base documenté pour les personnes vieillissantes",
              "Utiliser des grilles d'observation adaptées au quotidien institutionnel",
              "Produire des transmissions factuelles et cliniquement utiles",
              "Identifier les moments clés où l'observation doit être renforcée"
            ]} />
          </ConceptBox>
          <Texte>Dans les modules de sensibilisation, vous avez appris l&apos;importance d&apos;observer, noter et transmettre. Ce module va plus loin : il vous donne les outils concrets pour structurer cette observation de manière rigoureuse, construire une référence documentée dans le temps, et produire des transmissions qui permettent vraiment à d&apos;autres professionnels, y compris le médecin, d&apos;agir.</Texte>
          <Texte>Observer n&apos;est pas regarder. Observer de manière professionnelle, c&apos;est diriger son attention de façon intentionnelle, avec des repères clairs, dans le but de produire une information utilisable. Cette compétence s&apos;apprend et se développe, elle ne va pas de soi, même pour des professionnels expérimentés.</Texte>
          <PullQuote>
            La qualité de votre observation détermine la qualité de la réponse que la personne recevra. Une observation vague produit une réponse vague. Une observation précise rend possible une réponse précise.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Observer, interpréter, évaluer : trois actes distincts">
          <Texte>La première distinction fondamentale est celle entre observer, interpréter et évaluer. Ces trois actes sont souvent confondus dans la pratique, avec des conséquences importantes sur la qualité de l&apos;information produite.</Texte>

          <TableauComparaison
            titre="Trois actes professionnels distincts"
            colonnes={[
              {
                titre: "Acte",
                contenu: ["Observer", "Interpréter", "Évaluer"]
              },
              {
                titre: "Définition",
                contenu: [
                  "Décrire ce qui se passe de manière factuelle, sans jugement",
                  "Proposer une explication à ce qui est observé",
                  "Porter un jugement clinique sur la signification du phénomène"
                ]
              },
              {
                titre: "Exemple",
                contenu: [
                  "\"Marie a toussé trois fois pendant le repas, et a laissé la moitié de son assiette\"",
                  "\"Marie semble avoir des difficultés à avaler\"",
                  "\"Marie présente probablement un trouble de la déglutition nécessitant une évaluation logopédique\""
                ]
              },
              {
                titre: "Rôle",
                contenu: [
                  "Professionnel de terrain : c'est votre contribution essentielle",
                  "Professionnel de terrain en équipe : à partager et confronter",
                  "Médecin, logopédiste, spécialiste : pas votre rôle"
                ]
              }
            ]}
          />

          <Texte>Dans vos transmissions, l&apos;observation est toujours la bienvenue, c&apos;est elle qui donne la matière première. L&apos;interprétation peut être partagée, à condition d&apos;être clairement identifiée comme telle : &quot;j&apos;ai l&apos;impression que...&quot; ou &quot;je me demande si...&quot;. L&apos;évaluation, en revanche, ne vous appartient pas, et prétendre l&apos;exercer sans la compétence requise peut conduire à des conclusions erronées qui retardent la vraie prise en charge.</Texte>

          <HighlightBox label="Le piège de l'interprétation prématurée" couleur="jaune">
            <Texte>Quand vous observez quelque chose, votre cerveau cherche immédiatement une explication. C&apos;est un mécanisme cognitif normal, et souvent utile. Mais en contexte professionnel, cette interprétation automatique peut court-circuiter l&apos;observation elle-même. Si vous &quot;voyez&quot; une dépression, vous allez noter des comportements dépressifs et ignorer les signes qui ne correspondent pas à cette hypothèse. Si vous &quot;voyez&quot; une aggravation du handicap, vous n&apos;allez pas chercher d&apos;autres causes possibles.</Texte>
            <Texte>La discipline professionnelle consiste à décrire d&apos;abord, interpréter ensuite, et à maintenir plusieurs hypothèses ouvertes en parallèle jusqu&apos;à ce qu&apos;une évaluation spécialisée permette d&apos;en écarter certaines.</Texte>
          </HighlightBox>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Exercice</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Classer ces phrases dans la bonne catégorie</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">Pour chacune de ces phrases, identifiez s&apos;il s&apos;agit d&apos;une observation (O), d&apos;une interprétation (I) ou d&apos;une évaluation (E) :</p>
              <Liste items={[
                "\"Paul est agressif depuis lundi.\"",
                "\"Paul a frappé la table trois fois lundi matin et a renversé son verre mardi soir.\"",
                "\"Paul semble perturbé par quelque chose, peut-être la visite de sa famille ce week-end.\"",
                "\"Paul présente un trouble du comportement nécessitant un ajustement de son traitement.\"",
                "\"Paul a refusé de participer à l'atelier jeudi et vendredi, alors qu'il y va habituellement.\""
              ]} />
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponses</p>
              <p className="text-gray-700 text-sm leading-relaxed">1. Interprétation (I), &quot;agressif&quot; est un jugement, pas une description. 2. Observation (O), description factuelle de comportements précis. 3. Interprétation (I), hypothèse sur la cause, clairement identifiée comme telle. 4. Évaluation (E), jugement clinique et prescription, hors du rôle du professionnel de terrain. 5. Observation (O), description d&apos;un comportement inhabituel, avec la référence à l&apos;état habituel.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Construire et maintenir un état de base">
          <Texte>L&apos;état de base d&apos;une personne est la référence à partir de laquelle tout changement significatif peut être mesuré. Sans état de base documenté, il est impossible de dire si ce que vous observez aujourd&apos;hui représente un changement ou si c&apos;est simplement la variabilité normale de la personne.</Texte>

          <Texte>Pour les personnes vieillissantes en situation de handicap, l&apos;état de base est particulièrement important parce que les changements liés au vieillissement sont souvent progressifs et difficiles à percevoir quand on les vit au quotidien. La grenouille dans l&apos;eau qui chauffe : si le changement est lent, on ne le perçoit pas. Ce n&apos;est que par comparaison avec une référence documentée d&apos;il y a six mois ou un an que le changement devient visible.</Texte>

          <HighlightBox label="Que documente-t-on dans un état de base ?" couleur="bleu">
            <Texte>Un état de base utile couvre plusieurs dimensions de la vie quotidienne de la personne :</Texte>
            <Liste items={[
              "Mobilité et déplacements : la personne se déplace-t-elle seule ? Avec aide ? Avec quel équipement ? Quels espaces gère-t-elle seule ?",
              "Alimentation et déglutition : quels aliments ? Quelle texture ? Quelle durée de repas habituelle ? Incidents habituels ou non ?",
              "Communication : comment la personne exprime-t-elle ses besoins ? Ses refus ? Sa douleur ? Ses émotions ?",
              "Repères cognitifs : reconnaît-elle les membres de l'équipe ? Se repère-t-elle dans les espaces ? Suit-elle le programme de la semaine ?",
              "Participation aux activités : lesquelles ? À quelle fréquence ? Avec quel niveau d'engagement ?",
              "Sommeil et rythme : quel rythme veille/sommeil habituel ? Somnolence diurne habituelle ou non ?",
              "Comportements spécifiques : quels comportements sont habituels pour cette personne, et dans quel contexte ?"
            ]} />
          </HighlightBox>

          <Texte>Cet état de base doit être rédigé avec précision et mis à jour régulièrement, au minimum lors de chaque révision du PPA, et à chaque changement significatif. Il ne s&apos;agit pas d&apos;un long document littéraire, mais d&apos;une description structurée et factuelle, suffisamment précise pour qu&apos;un collègue qui ne connaît pas la personne puisse comprendre ce qu&apos;elle sait faire et comment elle fonctionne.</Texte>

          <HighlightBox label="Quand renforcer l'observation ?" couleur="vert">
            <Texte>Il existe des moments dans la vie d&apos;une personne vieillissante où l&apos;observation doit être renforcée de manière proactive, pas uniquement en réaction à un incident :</Texte>
            <Liste items={[
              "À partir de 45-50 ans, et dès 40 ans pour les personnes avec trisomie 21",
              "Dans les semaines qui suivent une hospitalisation : période de fragilité accrue",
              "Lors d'un changement de traitement médicamenteux",
              "Après un deuil ou un changement dans le réseau familial",
              "À l'approche de la retraite de l'atelier ou d'une activité structurante",
              "Lorsqu'un membre de l'équipe signale une impression de changement, même vague"
            ]} />
          </HighlightBox>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Joël, 54 ans : un état de base incomplet qui complique la détection</p>
              <p className="text-gray-700 text-sm leading-relaxed">Joël a une déficience intellectuelle modérée. Son PPA date de 8 mois. La section &quot;état de base&quot; contient une phrase : &quot;Joël est autonome dans ses déplacements et participe activement aux activités.&quot; Depuis quelques semaines, une éducatrice a l&apos;impression que Joël &quot;est moins là&quot;. Mais elle ne peut pas préciser davantage, elle ne sait pas si ce qu&apos;elle observe représente un changement réel ou si c&apos;est simplement une variabilité normale, car l&apos;état de base documenté ne lui donne pas de référence suffisamment précise.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Qu&apos;est-ce qui manque dans l&apos;état de base de Joël ? Comment l&apos;éducatrice pourrait-elle documenter son impression de manière plus utile ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">L&apos;état de base de Joël est trop vague pour être utile. &quot;Autonome dans ses déplacements&quot; ne dit pas quels espaces il gère seul, à quelle vitesse, avec quelles aides éventuelles. &quot;Participe activement aux activités&quot; ne dit pas lesquelles, à quelle fréquence, avec quel niveau d&apos;initiative. L&apos;éducatrice ne peut pas mesurer un changement parce qu&apos;elle n&apos;a pas de référence précise. La démarche : d&apos;abord, passer quelques jours à observer Joël de manière plus structurée, noter précisément ce qu&apos;il fait, comment, dans quel contexte. Ces observations constituent elles-mêmes un état de base partiel qui permet de mesurer l&apos;évolution dans les semaines suivantes. Parallèlement, proposer à l&apos;équipe de compléter l&apos;état de base lors de la prochaine réunion, en s&apos;appuyant sur la connaissance collective de la personne.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Produire des transmissions cliniquement utiles">
          <Texte>Une transmission cliniquement utile est une transmission qui permet à celui qui la reçoit (collègue, médecin, spécialiste) de comprendre ce qui s&apos;est passé et de décider d&apos;une suite. Une transmission vague, même bien intentionnée, ne remplit pas cette fonction. Pire, elle peut induire une fausse impression que la situation est gérée : alors qu&apos;elle ne l&apos;est pas.</Texte>

          <SchemaEtapes
            titre="Les quatre éléments d'une transmission utile"
            etapes={[
              { niveau: "1", nom: "Quoi", definition: "La description factuelle du comportement ou du changement observé, sans interprétation" },
              { niveau: "2", nom: "Quand et où", definition: "La date, l'heure, le contexte : repas, soin, activité, déplacement" },
              { niveau: "3", nom: "Depuis quand et à quelle fréquence", definition: "Première occurrence ou tendance ? Une fois, plusieurs fois, tous les jours ?" },
              { niveau: "4", nom: "Par rapport à quoi", definition: "En quoi c'est différent du comportement habituel de cette personne, l'écart avec l'état de base" }
            ]}
          />

          <HighlightBox label="Des transmissions qui permettent d'agir" couleur="vert">
            <Texte>Voici deux transmissions portant sur la même situation. Laquelle permet d&apos;agir ?</Texte>
            <Texte><strong>Transmission A :</strong> &quot;Nadège a été difficile cette semaine, elle ne mange plus bien et est agitée.&quot;</Texte>
            <Texte><strong>Transmission B :</strong> &quot;Nadège (65 ans, paralysie cérébrale) a refusé de terminer son repas lundi, mardi et mercredi midi. Elle tousse systématiquement après avoir mangé des aliments solides depuis environ 10 jours, ce qui ne se produisait pas avant. Mardi soir, sa voix était enrouée après le dîner. Elle a dit &apos;ça reste là&apos; en pointant sa gorge. Habituellement, elle termine toujours son assiette et n&apos;a pas de toux lors des repas.&quot;</Texte>
            <Texte>La transmission B permet au médecin d&apos;identifier immédiatement un tableau évocateur de trouble de la déglutition, de prescrire une évaluation logopédique, et d&apos;adapter l&apos;alimentation dans l&apos;attente. La transmission A ne permet rien de précis.</Texte>
          </HighlightBox>

          <Texte>Produire des transmissions de qualité demande du temps, mais moins qu&apos;on ne le croit. La clé est de noter au moment de l&apos;observation, pas plusieurs heures plus tard. Quand vous rentrez dans la salle de transmission après un incident ou une observation marquante, prenez deux minutes pour noter les quatre éléments. Ces deux minutes investies maintenant peuvent éviter des semaines de dérive non détectée.</Texte>

          <HighlightBox label="Les transmissions orales : un risque souvent sous-estimé" couleur="jaune">
            <Texte>Dans beaucoup d&apos;institutions, les transmissions entre équipes se font oralement, lors des passages de relais. Ces transmissions orales sont utiles pour le lien humain et la coordination immédiate, mais elles sont insuffisantes pour le suivi des personnes vieillissantes. Une information transmise oralement peut être mal comprise, partiellement retenue, ou ne pas atteindre tous les professionnels concernés.</Texte>
            <Texte>La règle professionnelle : toute observation concernant une modification du comportement, de la mobilité, de l&apos;alimentation ou de la communication d&apos;une personne vieillissante doit être <strong>écrite</strong>, en plus d&apos;être communiquée oralement si nécessaire. Ce n&apos;est pas de la méfiance envers les collègues. C&apos;est une protection pour la personne accompagnée.</Texte>
          </HighlightBox>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Améliorer une transmission, exercice pratique</p>
              <p className="text-gray-700 text-sm leading-relaxed">Vous trouvez cette note dans le cahier de transmission : &quot;Georges semble fatigué cette semaine et a eu du mal à participer aux activités. À surveiller.&quot; Georges a 58 ans et une déficience intellectuelle légère. Vous le connaissez depuis 6 ans.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quelles informations manquent dans cette transmission ? Quelles questions poseriez-vous au collègue qui l&apos;a écrite pour obtenir une transmission utile ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Cette transmission ne contient ni observation factuelle, ni repère temporel précis, ni comparaison avec l&apos;état de base. &quot;Semble fatigué&quot; et &quot;a eu du mal à participer&quot; sont des interprétations sans description sous-jacente. Les questions à poser : Qu&apos;a-t-il fait ou ne fait-il pas concrètement ? (s&apos;est-il endormi pendant l&apos;atelier ? a-t-il refusé de se lever ?) : Depuis quand exactement ? — Est-ce tous les jours ou certains moments ? — Est-ce habituel pour lui ou vraiment différent de d&apos;habitude ? Une fois ces informations obtenues, la transmission peut être complétée et devient exploitable. Et &quot;à surveiller&quot; sans date de bilan ni responsable désigné ne produit généralement aucun suivi concret, mieux vaut écrire &quot;à évoquer en réunion d&apos;équipe mardi&quot; ou &quot;à signaler au médecin si ça persiste cette semaine&quot;.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Organiser la veille collective en équipe">
          <Texte>L&apos;observation structurée ne peut pas reposer sur un seul professionnel. Elle doit être organisée collectivement, avec des moments dédiés et des outils partagés. Sans cette organisation, les observations restent éparpillées, les tendances ne se dessinent pas, et les signaux faibles se perdent.</Texte>

          <HighlightBox label="La grille de suivi partagée" couleur="bleu">
            <Texte>Pour les personnes de plus de 50 ans, ou pour toute personne chez qui un changement a été signalé, une grille de suivi partagée peut être mise en place. Cette grille n&apos;a pas besoin d&apos;être complexe, elle doit être simple pour être réellement utilisée. Elle couvre les domaines de l&apos;état de base : mobilité, alimentation, sommeil, communication, participation aux activités, comportement.</Texte>
            <Texte>Chaque professionnel qui travaille avec la personne note ses observations dans cette grille. En réunion d&apos;équipe, la grille est relue : y a-t-il une tendance ? Y a-t-il des observations convergentes de plusieurs professionnels ? Y a-t-il au contraire des observations discordantes qui méritent d&apos;être discutées ?</Texte>
          </HighlightBox>

          <Texte>Cette organisation de la veille collective est particulièrement importante pour les personnes avec qui vous travaillez depuis longtemps. La familiarité peut être un obstacle à la détection : on &quot;voit&quot; moins ce qu&apos;on croit connaître. Un regard structuré, partagé et confronté entre collègues compense ce biais naturel.</Texte>

          <PullQuote>
            Une équipe qui observe ensemble voit plus qu&apos;une somme d&apos;individus qui observent chacun de leur côté.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Observer de manière professionnelle, c&apos;est bien plus que regarder. C&apos;est diriger son attention avec intention, décrire avec précision, documenter avec rigueur, et partager avec pertinence. Ces compétences ne s&apos;improvisent pas, elles se construisent, s&apos;exercent et s&apos;organisent collectivement.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Observer ≠ interpréter ≠ évaluer, distinguer ces trois actes protège la qualité de l'information",
              "Un état de base précis et à jour est le seul outil qui permet de mesurer un changement",
              "Une transmission utile contient : quoi, quand, depuis quand, par rapport à quoi",
              "Les transmissions orales seules sont insuffisantes pour le suivi des personnes vieillissantes",
              "Renforcer l'observation aux moments clés : hospitalisation, changement de traitement, deuil",
              "La veille collective organisée voit plus que la somme des observations individuelles"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la différence entre observer et interpréter ?",
            reponses: [
              "Observer, c'est utiliser des outils médicaux ; interpréter, c'est le faire sans outils",
              "Observer, c'est décrire factuellement ce qui se passe ; interpréter, c'est proposer une explication",
              "Observer concerne les faits physiques ; interpréter concerne les émotions",
              "Il n'y a pas de différence, les deux termes sont synonymes en pratique professionnelle"
            ],
            bonneReponse: 1,
            explication: "Observer, c'est décrire ce qui se passe de manière factuelle et sans jugement. Interpréter, c'est proposer une explication à ce qui est observé. Dans vos transmissions, les deux ont leur place, mais ils doivent être clairement distingués. L'interprétation sans observation préalable précise est un raccourci qui nuit à la qualité de l'information."
          },
          {
            question: "Pourquoi un état de base documenté est-il indispensable pour détecter le vieillissement ?",
            reponses: [
              "Parce que la loi suisse l'impose pour toutes les personnes en institution",
              "Parce que les changements liés au vieillissement sont souvent progressifs et invisibles sans référence temporelle",
              "Parce qu'il remplace les bilans médicaux réguliers",
              "Parce qu'il permet d'établir le diagnostic de démence"
            ],
            bonneReponse: 1,
            explication: "Les changements liés au vieillissement sont souvent si progressifs qu'on ne les perçoit pas au quotidien. Sans référence documentée à un moment antérieur, il est impossible de mesurer l'évolution. C'est la comparaison avec l'état de base qui rend le changement visible, pas l'observation isolée du moment présent."
          },
          {
            question: "Parmi ces éléments, lequel ne doit PAS figurer dans un état de base ?",
            reponses: [
              "La description de comment la personne se déplace dans l'institution",
              "Le diagnostic médical posé par le médecin lors de l'entrée en institution",
              "Les comportements habituels de la personne face à la douleur ou au stress",
              "La liste des activités auxquelles la personne participe habituellement"
            ],
            bonneReponse: 1,
            explication: "Le diagnostic médical est une évaluation clinique qui appartient au dossier médical, pas à l'état de base fonctionnel que les professionnels de terrain construisent. L'état de base documente les capacités, comportements et habitudes observés dans le quotidien, pas les catégories diagnostiques."
          },
          {
            question: "Pourquoi les transmissions orales seules sont-elles insuffisantes pour le suivi des personnes vieillissantes ?",
            reponses: [
              "Parce qu'elles sont interdites par les protocoles institutionnels",
              "Parce qu'une information transmise oralement peut être mal comprise, partiellement retenue ou ne pas atteindre tous les professionnels concernés",
              "Parce que les professionnels de nuit ne participent jamais aux transmissions orales",
              "Parce que les médecins ne lisent jamais les transmissions orales"
            ],
            bonneReponse: 1,
            explication: "Les transmissions orales sont utiles pour le lien humain et la coordination immédiate, mais insuffisantes pour le suivi longitudinal. Une information transmise oralement peut être mal comprise, partiellement retenue, ou ne pas atteindre les collègues absents ce jour-là. Toute observation significative concernant une personne vieillissante doit être écrite."
          },
          {
            question: "Parmi ces moments, lequel justifie de renforcer l'observation de manière proactive ?",
            reponses: [
              "Lorsque la personne fête un anniversaire",
              "Dans les semaines qui suivent une hospitalisation",
              "Lorsque l'institution change son règlement intérieur",
              "Lorsqu'un nouveau professionnel rejoint l'équipe"
            ],
            bonneReponse: 1,
            explication: "Les semaines qui suivent une hospitalisation constituent une période de fragilité accrue pour les personnes vieillissantes, retour dans un environnement familier après une rupture, possible déconditionnement physique, effets de médicaments modifiés. L'observation doit être renforcée proactivement, pas uniquement en réaction à un incident."
          },
          {
            question: "Laquelle de ces transmissions est cliniquement utile ?",
            reponses: [
              "\"Nadège va moins bien depuis quelque temps, à surveiller.\"",
              "\"Nadège semble déprimée, elle mange peu et est agitée.\"",
              "\"Nadège (65 ans) tousse après chaque repas solide depuis 10 jours, laisse la moitié de son assiette, et sa voix est enrouée après les dîners. Cela ne se produisait pas avant.\"",
              "\"Nadège a besoin d'un bilan médical complet.\""
            ],
            bonneReponse: 2,
            explication: "La troisième transmission est utile parce qu'elle contient les quatre éléments : quoi (toux après repas solides, assiette non terminée, voix enrouée), quand (après chaque repas), depuis quand (10 jours), et par rapport à quoi (ne se produisait pas avant). Elle permet au médecin d'identifier un tableau évocateur et d'agir de manière ciblée."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
