import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module4FamillesSecteurAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Familles et handicap adulte"
        titre="Les transitions critiques"
        titrePart2="vieillissement des parents et l'après-nous"
        sousTitre="L'épuisement aidant, le tabou de l'après-nous, les transitions résidentielles et le deuil parental — les moments charnières que l'institution doit anticiper."
        duree="55 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Anticiper l'inévitable : pourquoi ce module est crucial">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier les signes d'épuisement aidant chez les parents vieillissants et comprendre leur impact",
              "Comprendre le tabou de l'après-nous et les raisons du silence familial sur ce sujet",
              "Connaître les bonnes pratiques pour accompagner les transitions résidentielles",
              "Proposer un accompagnement institutionnel adapté au deuil parental de la personne accompagnée",
            ]} />
          </ConceptBox>
          <Texte>Dans le secteur adulte du handicap, les professionnels travaillent avec des personnes qui vieillissent — et avec des parents qui vieillissent en même temps. Cette réalité démographique, souvent évoquée en termes de "défi", est aussi une invitation à anticiper des transitions qui, si elles ne sont pas préparées, deviennent des crises.</Texte>
          <Texte>Serge Ebersold a documenté la notion d'"après-nous" comme l'une des angoisses les plus prégnantes dans les familles de personnes handicapées. L'institution qui sait nommer cette angoisse, qui crée des espaces pour la traverser ensemble, offre à la famille et à la personne accompagnée une ressource inestimable.</Texte>
          <PullQuote source="Serge Ebersold">
            La question de l'après-nous n'est pas une question d'organisation. C'est une question de sens : que restera-t-il de l'amour parental quand les parents ne seront plus là pour le porter ?
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le vieillissement des parents et ses effets sur la relation institution-famille">
          <Texte>En Suisse romande, comme dans toute l'Europe, la population des parents aidants vieillit parallèlement à celle de leurs proches en situation de handicap. On parle de "double vieillissement" — et il génère des dynamiques spécifiques que les institutions doivent apprendre à lire et à accompagner.</Texte>

          <HighlightBox label="Ce que le vieillissement des parents change dans la relation" couleur="bleu">
            <Liste items={[
              "Les parents visitent moins souvent — par fatigue physique, difficultés de transport, problèmes de santé propres",
              "Leur capacité à participer aux réunions de projet diminue — ils sont fatigués, parfois sourds, parfois désorientés",
              "Leur rôle d'aidant primaire se retourne : ils deviennent eux-mêmes des personnes qui ont besoin d'aide",
              "Leur investissement émotionnel reste intact, mais leur capacité à agir sur le terrain s'amenuise — ce décalage génère de la culpabilité",
            ]} />
          </HighlightBox>

          <ConceptBox label="L'épuisement aidant" titre="Une réalité sous-estimée dans le secteur adulte">
            <Texte>L'épuisement aidant (burnout aidant) est un état de fatigue physique, émotionnelle et psychique qui touche les proches qui ont accompagné intensément une personne sur une longue durée. Dans le secteur adulte du handicap, il peut survenir après des décennies d'investissement. Ses signaux :</Texte>
            <Liste items={[
              "Irritabilité accrue lors des contacts avec l'institution",
              "Pleurs ou effondrements inattendus lors des visites ou des réunions",
              "Demandes contradictoires ou changements de position fréquents",
              "Discours catastrophistes sur l'avenir, sentiment que 'personne ne pourra s'occuper de lui comme moi'",
              "Isolement social progressif du parent — plus de réseau propre, tout tourne autour du proche handicapé",
            ]} />
          </ConceptBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Vignette clinique</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Mireille, 68 ans.</strong> Ces derniers mois, l'équipe a observé que Mireille arrive aux réunions de projet visiblement épuisée. Elle a du mal à retenir les informations données. Lors de la dernière réunion, elle a fondu en larmes en disant : "Je ne sais plus ce que je ferais si Julien n'était plus là." L'éducatrice référente n'a pas su comment répondre et a rapidement changé de sujet. Une semaine plus tard, un médecin de l'institution a appris que Mireille avait été hospitalisée trois jours pour un "malaise général". Personne n'avait fait le lien.</p>
            </div>
          </div>

          <HighlightBox label="Ce que l'institution peut faire pour les parents vieillissants" couleur="vert">
            <Texte>L'institution n'a pas vocation à prendre en charge le parent — mais elle peut :</Texte>
            <Liste items={[
              "Adapter les modalités de participation : formats courts, réunions à l'heure qui convient, possibilité de participer à distance",
              "Nommer l'épuisement qu'elle observe : 'Vous semblez fatigué en ce moment. Comment vous portez-vous ?'",
              "Orienter vers des ressources : associations de familles, groupes de soutien, services de répit",
              "Anticiper le moment où le parent ne pourra plus assurer sa présence hebdomadaire — et préparer la personne accompagnée à cette évolution",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="L'après-nous : l'impensé qui devient urgence">
          <Texte>L'après-nous est la question que tout le monde évite et qui finit toujours par s'imposer dans les pires conditions : lors d'une hospitalisation d'urgence du parent, lors d'un décès brutal, lors d'un déménagement contraint. L'institution qui attend ces moments pour aborder le sujet rate l'occasion de préparer une transition digne.</Texte>

          <HighlightBox label="Pourquoi les familles évitent ce sujet" couleur="jaune">
            <Texte>Le silence sur l'après-nous n'est pas de l'irresponsabilité. Il est le produit de plusieurs mécanismes psychiques puissants :</Texte>
            <Liste items={[
              "La culpabilité : penser à l'après-nous, c'est admettre qu'on mourra avant son enfant — et que cet enfant sera livré à d'autres",
              "L'angoisse de délégation : qui prendra soin de lui comme moi ? Personne ne pourra",
              "La peur de le faire souffrir : parler à son proche adulte de la mort de ses parents, c'est lui infliger une douleur anticipée",
              "Le déni actif : 'On verra le moment venu' — car anticiper, c'est rendre réel ce que l'on refuse de voir",
            ]} />
          </HighlightBox>

          <SchemaEtapes
            titre="Un processus de planification de l'après-nous en trois temps"
            etapes={[
              { niveau: "Temps 1", nom: "Ouvrir l'espace (2 à 5 ans avant)", definition: "Introduire le sujet progressivement, sans pression. Pas une réunion spéciale 'sur l'après-nous' — mais des questions régulières intégrées aux échanges : 'Avez-vous des personnes de confiance dans votre entourage pour Julien si vous ne pouvez pas venir ?' L'objectif est de normaliser la question." },
              { niveau: "Temps 2", nom: "Explorer et documenter", definition: "Identifier les souhaits de la personne accompagnée pour son avenir, les contacts de confiance de la famille, les dispositions légales éventuelles (testament de vie, mandat anticipé), et les ressources existantes. Co-rédiger un 'document de transition' accessible à la direction." },
              { niveau: "Temps 3", nom: "Préparer la personne", definition: "Aborder avec la personne, à son rythme et avec des supports adaptés, la réalité du vieillissement de ses parents. Pas pour la préparer à 'se passer d'eux' — mais pour qu'elle ne soit pas complètement déstabilisée si une transition arrive rapidement." },
            ]}
            note="Ce processus demande du courage institutionnel. Il suppose que les équipes soient elles-mêmes soutenues dans la traversée de ces sujets difficiles."
          />

          <HighlightBox label="Les dispositifs existants en Suisse romande" couleur="bleu">
            <Texte>Plusieurs dispositifs existent pour soutenir les familles dans cette planification :</Texte>
            <Liste items={[
              "L'assurance invalidité (AI) : financement possible de certains soutiens à la planification",
              "Les associations d'aide aux familles : Pro Infirmis, INSIEME, qui offrent accompagnement juridique et émotionnel",
              "Le mandat pour cause d'inaptitude : outil légal permettant à une personne de désigner son représentant en cas d'incapacité",
              "Les groupes de parole inter-familles : espaces où des parents en situation similaire peuvent partager leurs expériences et avancer ensemble",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les transitions résidentielles : déménagements et changements de lieu de vie">
          <Texte>Les transitions résidentielles — entrée en institution, déménagement vers une autre structure, passage d'un foyer de vie à une unité spécialisée — sont des moments de vulnérabilité extrême pour les personnes en situation de handicap. Elles sollicitent toutes les ressources adaptatives de la personne, et leurs effets peuvent se prolonger bien au-delà du déménagement proprement dit.</Texte>

          <TableauComparaison
            titre="Types de transitions résidentielles et leurs enjeux spécifiques"
            colonnes={[
              { titre: "Type de transition", contenu: [
                "Entrée en institution depuis le domicile familial",
                "Déménagement entre deux foyers de la même fondation",
                "Transfert vers une unité avec encadrement renforcé",
                "Transition vers une structure spécialisée vieillissement",
              ]},
              { titre: "Enjeux spécifiques", contenu: [
                "Rupture du quotidien familial — perte de tous les repères simultanément",
                "Souvent vécue comme une punition même si c'est une décision organisationnelle",
                "Sentiment de régression et de perte de statut",
                "Deuil de la vie 'normale' et confrontation à la finitude",
              ]},
            ]}
          />

          <HighlightBox label="Bonnes pratiques pour accompagner une transition résidentielle" couleur="vert">
            <Texte>La qualité de la préparation est déterminante pour la qualité de la transition :</Texte>
            <Liste items={[
              "Annoncer la transition au moins 3 à 6 mois avant, avec des supports visuels adaptés à la personne",
              "Organiser des visites progressives du nouveau lieu avant le déménagement",
              "Maintenir des éléments de continuité : certains objets personnels, un professionnel de référence connu, le maintien d'un contact avec le lieu précédent",
              "Impliquer la famille dans la transition — elle doit connaître les lieux et les équipes pour maintenir sa confiance",
              "Assurer un suivi intensif dans les 3 premiers mois suivant la transition",
            ]} />
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Ce que la famille vit lors d'une transition résidentielle</p>
              <p className="text-gray-700 text-sm leading-relaxed">La transition résidentielle du proche est souvent vécue par la famille comme un second abandon — après celui qu'elle a déjà traversé lors de l'entrée en institution. Elle mobilise une culpabilité archaïque : "Est-ce que je fais le bon choix pour lui ?" Elle peut générer des conflits avec l'institution si la famille n'a pas été suffisamment associée à la décision. Les professionnels qui informent la famille, qui la visitent dans le nouveau lieu, qui lui racontent comment la personne s'adapte, construisent une confiance qui durera au-delà de la transition.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Accompagner le deuil et la mort des parents">
          <Texte>La mort des parents d'une personne en situation de handicap adulte reste l'un des sujets les plus difficiles à aborder dans les institutions. Elle est souvent traitée dans l'urgence — quand le décès est déjà survenu — sans préparation, sans rituel adapté, sans espace de deuil digne de ce nom.</Texte>

          <HighlightBox label="Comment la personne vit-elle la mort de ses parents ?" couleur="jaune">
            <Texte>Les personnes en situation de handicap vivent le deuil — souvent de façon très intense, parfois avec des manifestations atypiques que l'institution peut ne pas reconnaître comme du deuil :</Texte>
            <Liste items={[
              "Régression comportementale soudaine et inexpliquée",
              "Refus alimentaire ou troubles du sommeil",
              "Recherche répétée du parent disparu ('où est maman ?') — parfois pendant des mois",
              "Agitation ou violence contre soi ou les autres",
              "Retrait, apathie, perte d'intérêt pour les activités aimées",
            ]} />
            <Texte>Ces manifestations ne doivent pas être immédiatement traitées comme des symptômes pathologiques. Elles peuvent être l'expression d'un deuil non accompagné.</Texte>
          </HighlightBox>

          <ConceptBox label="L'accompagnement institutionnel du deuil" titre="Ce que l'institution peut faire">
            <Liste items={[
              "Annoncer le décès directement à la personne — avec les mots justes, adaptés à sa compréhension, en sa présence et non derrière son dos",
              "Proposer une participation aux rituels funéraires si la famille y consent et si la personne le souhaite",
              "Créer un espace de mémoire : un endroit dans la chambre ou l'espace commun où sont placés des photos, des objets du parent disparu",
              "Maintenir des rituels de mémoire réguliers : allumer une bougie à la date anniversaire, nommer le parent disparu lors d'occasions importantes",
              "Orienter vers un soutien psychologique adapté — psychologue habitué aux personnes avec déficience intellectuelle",
            ]} />
          </ConceptBox>

          <HighlightBox label="La fratrie face à la succession : enjeux complexes" couleur="bleu">
            <Texte>Lorsqu'un parent décède, la fratrie se retrouve souvent en première ligne — pour les démarches légales, les décisions sur le devenir du proche, et parfois les conflits sur l'héritage ou sur le choix de tuteur. Ces situations peuvent générer des tensions sévères avec l'institution, des décisions précipitées sur le lieu de vie, des désaccords entre frères et sœurs. L'institution doit :</Texte>
            <Liste items={[
              "Maintenir la stabilité de la vie quotidienne de la personne pendant la période de règlement successoral",
              "Éviter de prendre parti dans les conflits familiaux",
              "Rappeler que le proche adulte handicapé est une personne — pas un objet de succession",
              "Soutenir la personne dans ce qu'elle vit de la recomposition de sa famille",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Les transitions critiques — vieillissement des parents, anticipation de l'après-nous, déménagements résidentiels, deuil parental — sont des moments où la collaboration famille-institution est à la fois la plus nécessaire et la plus fragile. Les institutions qui savent les anticiper offrent à la personne accompagnée une continuité de soin qui transcende les ruptures inévitables de la vie.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "L'épuisement aidant est réel et ses signaux méritent d'être nommés — pas seulement gérés administrativement",
              "L'après-nous ne s'aborde pas lors d'une crise : il se prépare progressivement, sur plusieurs années",
              "Les transitions résidentielles sont des moments de grande vulnérabilité — leur qualité dépend de la qualité de leur préparation",
              "Le deuil parental mérite un accompagnement spécifique et adapté — pas une gestion des symptômes",
              "La fratrie devient l'interlocuteur principal de l'institution lors du décès des parents — la préparer à ce rôle est une responsabilité institutionnelle",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Qu'est-ce que le 'double vieillissement' dans le secteur adulte du handicap ?",
            reponses: [
              "Le vieillissement simultané des équipes professionnelles et des bâtiments institutionnels",
              "Le vieillissement parallèle de la personne en situation de handicap et de ses parents aidants",
              "Le double processus de vieillissement biologique et psychologique observé dans la déficience intellectuelle",
              "La tendance des institutions à accueillir simultanément des adultes jeunes et âgés",
            ],
            bonneReponse: 1,
            explication: "Le double vieillissement désigne le phénomène démographique où les personnes en situation de handicap vieillissent en même temps que leurs parents aidants. Cette réalité génère des dynamiques spécifiques : les parents deviennent moins capables d'assumer leur rôle d'aidants au moment où leur proche peut nécessiter un accompagnement plus intensif.",
          },
          {
            question: "Parmi les signaux d'épuisement aidant, lequel est le plus fréquemment mal interprété par les équipes professionnelles ?",
            reponses: [
              "L'irritabilité accrue lors des contacts avec l'institution",
              "Les demandes contradictoires et les changements de position fréquents",
              "Les pleurs inattendus lors des réunions",
              "L'isolement social progressif du parent",
            ],
            bonneReponse: 1,
            explication: "Les demandes contradictoires et les changements de position sont souvent interprétés comme de l'instabilité ou de la mauvaise foi familiale, alors qu'ils sont fréquemment des signes d'épuisement psychique — une difficulté à maintenir une cohérence face à une situation vécue comme dépassante. Reconnaître ce signal comme un signe d'épuisement change complètement la réponse professionnelle appropriée.",
          },
          {
            question: "Selon Serge Ebersold, pourquoi l'après-nous est-il si difficile à aborder pour les familles ?",
            reponses: [
              "Parce qu'il implique des questions juridiques complexes que les familles ne maîtrisent pas",
              "Parce que les institutions n'offrent pas de cadre pour en parler",
              "Parce que y penser génère de la culpabilité (admettre sa mort prochaine), de l'angoisse de délégation et parfois du déni actif",
              "Parce que les personnes en situation de handicap ne comprennent pas les enjeux de cette planification",
            ],
            bonneReponse: 2,
            explication: "L'après-nous est évité non par irresponsabilité, mais par des mécanismes psychiques puissants : la culpabilité de mourir avant son enfant, l'angoisse de ne pas pouvoir être remplacé, la peur de faire souffrir la personne en lui annonçant la réalité, et le déni actif comme protection. L'institution qui sait nommer ces mécanismes peut créer des espaces pour les traverser progressivement.",
          },
          {
            question: "Lors d'une transition résidentielle, quelle est la mesure la plus importante pour préserver la stabilité de la personne ?",
            reponses: [
              "Organiser la transition le plus rapidement possible pour limiter la période d'incertitude",
              "Préparer la transition au minimum 3 à 6 mois avant, avec visites progressives et maintien d'éléments de continuité",
              "Associer exclusivement les professionnels à la décision pour éviter que la famille n'interfère",
              "Choisir le moment de la transition lors d'une période de stabilité comportementale",
            ],
            bonneReponse: 1,
            explication: "La qualité de la préparation est déterminante pour la qualité de la transition. Une annonce précoce, des visites progressives du nouveau lieu, le maintien d'éléments de continuité (objets, professionnels connus, liens avec le lieu précédent) et l'implication de la famille permettent à la personne d'intégrer progressivement la réalité du changement plutôt que d'y être confrontée brutalement.",
          },
          {
            question: "Une personne résidente pose répétitivement la question 'où est maman ?' six mois après le décès de sa mère. Comment interpréter ce comportement ?",
            reponses: [
              "C'est un signe de déficience cognitive qui nécessite une évaluation neurologique",
              "C'est une forme de manipulation pour attirer l'attention de l'équipe",
              "C'est une expression possible d'un deuil non accompagné qui nécessite un soutien adapté — pas seulement un traitement symptomatique",
              "C'est un comportement habituel chez les personnes avec déficience intellectuelle, sans signification particulière",
            ],
            bonneReponse: 2,
            explication: "La recherche répétée du parent disparu est une expression fréquente du deuil chez les personnes en situation de handicap. Elle ne doit pas être immédiatement traitée comme un symptôme pathologique. Elle signifie que la personne cherche à comprendre et à traverser une réalité douloureuse — et qu'elle a besoin d'un accompagnement spécifique, adapté à ses capacités de communication.",
          },
          {
            question: "Quel est le rôle de l'institution lors du décès d'un parent, vis-à-vis de la fratrie ?",
            reponses: [
              "Déléguer immédiatement la gestion de la situation au membre de la fratrie désigné comme tuteur",
              "Maintenir la stabilité de la vie quotidienne de la personne, éviter de prendre parti dans les conflits familiaux, et rappeler que le proche adulte est un sujet — pas un objet de succession",
              "Interrompre les contacts avec la fratrie jusqu'à résolution du règlement successoral",
              "Demander à la fratrie de désigner rapidement un référent unique pour simplifier les échanges",
            ],
            bonneReponse: 1,
            explication: "Lors du décès d'un parent, l'institution doit maintenir la stabilité de la personne accompagnée, éviter de prendre parti dans les conflits familiaux fréquents lors des successions, et rappeler le droit de la personne à une vie stable et digne indépendamment des enjeux familiaux. Elle doit aussi soutenir la personne dans ce qu'elle vit de la recomposition de sa famille.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
