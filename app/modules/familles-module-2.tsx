import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module2FamillesSecteurAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Collaboration famille-institution"
        titre="Les dynamiques psychiques à l'œuvre"
        titrePart2="pacte dénégatif, minorisation et défenses institutionnelles"
        sousTitre="Derrière les difficultés relationnelles famille-institution se jouent des processus non conscients. Les comprendre permet de sortir des impasses sans culpabiliser ni les familles ni les équipes."
        duree="55 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Ce qui se joue sous la surface">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre le concept de pacte dénégatif et identifier comment il s'organise dans la relation famille-institution",
              "Nommer le phénomène de minorisation et ses effets sur l'identité de la personne adulte accompagnée",
              "Reconnaître les défenses institutionnelles face aux familles et leur fonction",
              "Comprendre ce que ces dynamiques font vivre à la personne au cœur du triangle",
            ]} />
          </ConceptBox>
          <Texte>Les difficultés dans la relation famille-institution sont rarement l'expression de mauvaises volontés. Elles sont plus souvent le produit de dynamiques psychiques collectives, des processus qui s'organisent en dehors de la conscience de chacun et qui, faute d'être nommés, se cristallisent en conflits ou en évitements durables.</Texte>
          <Texte>Ce module s'appuie sur les travaux de René Kaës sur les processus groupaux, de Paul Fustier sur la subjectivité institutionnelle, et de Frédéric Perez sur la minorisation. Il propose des grilles de lecture, non pour juger, mais pour comprendre et agir autrement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le pacte dénégatif : les non-dits qui organisent la relation">
          <Texte>René Kaës a introduit le concept de <strong>pacte dénégatif</strong> pour décrire des accords implicites et inconscients au sein d'un groupe : des conventions tacites selon lesquelles certaines réalités ne seront pas nommées, certaines questions ne seront pas posées, certaines angoisses ne seront pas abordées, car les maintenir dans l'impensé est la condition du lien.</Texte>

          <ConceptBox label="Le pacte dénégatif" titre="Un accord silencieux pour ne pas penser l'insupportable">
            <Texte>Dans la relation famille-institution autour d'un adulte en situation de handicap, plusieurs réalités constituent des zones d'impensé organisé :</Texte>
            <Liste items={[
              "La dépendance à vie : personne ne nomme explicitement que la personne ne sera jamais totalement autonome",
              "La mort : la mort possible de la personne handicapée avant ses parents, ou la mort des parents qui approche, restent souvent inabordées",
              "La sexualité : la vie affective et sexuelle de l'adulte handicapé est contournée par les deux parties",
              "L'après-nous : qui prendra le relais quand les parents ne pourront plus ? La question est différée en permanence",
            ]} />
          </ConceptBox>

          <HighlightBox label="Pourquoi ce pacte se forme-t-il ?" couleur="jaune">
            <Texte>Le pacte dénégatif n'est pas une lâcheté. Il est la réponse collective à une angoisse partagée. Nommer certaines réalités (la dépendance définitive, la mort, la sexualité d'un adulte que tout le monde traite encore comme un enfant) génère des angoisses insupportables des deux côtés. L'évitement mutuel est une solution de survie psychique à court terme. À long terme, il empêche toute élaboration et prépare des crises.</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Vignette clinique</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Julien et Mireille, suite.</strong> Lors des réunions de projet, l'équipe et Mireille évitent soigneusement le sujet de l'avenir de Julien "quand elle ne sera plus là". L'équipe dit : "C'est trop douloureux pour elle, on ne va pas la brusquer." Mireille dit : "Ce n'est pas à moi de leur en parler, c'est leur rôle." Et Julien, lui, entend parfois des bribes de conversations : "quand maman ne sera plus là", sans que jamais personne ne lui parle directement de ce qui l'attend. Le pacte dénégatif fonctionne à plein, et c'est Julien qui en paye le prix.</p>
            </div>
          </div>

          <HighlightBox label="Sortir du pacte : des conditions nécessaires" couleur="vert">
            <Texte>Le pacte dénégatif ne se brise pas par une décision unilatérale. Il se défait progressivement, dans un espace suffisamment sécurisé pour que les angoisses qu'il masque puissent être traversées. Pour l'institution, cela suppose :</Texte>
            <Liste items={[
              "Des espaces réguliers de supervision ou d'analyse des pratiques pour que les équipes élaborent leurs propres angoisses",
              "Une formation spécifique aux sujets évités : sexualité, mort, après-nous",
              "Un travail de légitimation de la parole : créer des espaces explicites où ces sujets peuvent être abordés avec la famille",
              "Une posture institutionnelle qui accepte l'inconfort de nommer ce que tout le monde évite",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La minorisation : traiter l'adulte comme un enfant perpétuel">
          <Texte>Le terme de <strong>minorisation</strong> désigne un ensemble de pratiques, souvent non conscientes, par lesquelles un adulte en situation de handicap se voit traiter comme un mineur, un enfant, une personne dont les désirs et décisions ne comptent pas vraiment. Frédéric Perez (2006) a analysé ce phénomène dans le secteur du handicap adulte comme une forme de violence douce, institutionnalisée et relationnelle.</Texte>

          <HighlightBox label="La minorisation : de quoi s'agit-il ?" couleur="bleu">
            <Texte>La minorisation opère à plusieurs niveaux :</Texte>
            <Liste items={[
              "Linguistique : utiliser le prénom seul, des diminutifs, des formulations enfantines avec un adulte de 40 ans",
              "Décisionnel : décider à sa place ce qui est bon pour lui, sans le consulter, au motif de ses limitations cognitives",
              "Affectif : exprimer de la tendresse protectrice là où l'adulte réclame de la considération",
              "Spatial : maintenir un adulte dans des espaces et des activités conçus pour des enfants, faute d'avoir repensé l'offre",
            ]} />
          </HighlightBox>

          <PullQuote source="Frédéric Perez, 2006">
            La minorisation n'est pas le propre des équipes mal intentionnées. Elle est le produit d'un système qui n'a pas encore achevé de penser l'adulte avec handicap comme un adulte à part entière, avec ses désirs, ses droits, sa vie affective et sexuelle, son rapport à la mort et au futur.
          </PullQuote>

          <Texte>La minorisation n'est pas exclusivement le fait de l'institution. Les familles, elles aussi, maintiennent parfois leur proche dans un statut d'enfant : par amour, par habitude, par peur de le voir prendre des risques. La particularité du secteur adulte, c'est que les deux systèmes, famille et institution, peuvent se renforcer mutuellement dans cette minorisation, au détriment de la personne accompagnée.</Texte>

          <TableauComparaison
            titre="Expressions de la minorisation selon les acteurs"
            colonnes={[
              { titre: "Dans les pratiques institutionnelles", contenu: [
                "Choisir les activités sans demander à la personne",
                "Parler de la personne devant elle comme si elle n'était pas là",
                "Signer des documents sans lui expliquer leur contenu",
                "Appliquer des règles sans les expliquer ni les négocier",
              ]},
              { titre: "Dans les pratiques familiales", contenu: [
                "Répondre à la place de leur proche lors des réunions",
                "Interdire des activités jugées risquées sans consulter la personne",
                "Continuer à appeler un adulte de 40 ans par son surnom d'enfance dans les réunions institutionnelles",
                "Décider du devenir de la personne entre les parents et l'institution sans jamais l'impliquer",
              ]},
            ]}
          />

          <HighlightBox label="Les effets de la minorisation sur la personne" couleur="jaune">
            <Texte>La minorisation chronique produit des effets sur l'identité et le comportement de la personne :</Texte>
            <Liste items={[
              "Perte progressive de l'initiative et de la confiance en soi",
              "Comportements de régression : se conformer au statut d'enfant qu'on lui assigne",
              "Agressivité ou opposition comme seule façon de manifester une volonté propre",
              "Désinvestissement des projets, des activités, de la relation, car 'ça ne sert à rien, c'est toujours les autres qui décident'",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les défenses institutionnelles face aux familles">
          <Texte>Paul Fustier (1999) a décrit comment les institutions développent des mécanismes de défense collectifs face aux angoisses que génèrent les personnes qu'elles accompagnent, et, par extension, face aux familles de ces personnes. Ces défenses sont fonctionnelles : elles permettent aux équipes de travailler. Mais elles peuvent aussi devenir des obstacles à la relation.</Texte>

          <SchemaEtapes
            titre="Trois défenses institutionnelles fréquentes face aux familles"
            etapes={[
              { niveau: "Défense 1", nom: "La routinisation", definition: "Traiter les échanges avec la famille de façon procédurale, protocolaire, sans espace pour l'imprévu. Les réunions de projet deviennent des formalités à accomplir plutôt que des espaces de dialogue vivant. La famille s'y conforme ou s'y soustrait." },
              { niveau: "Défense 2", nom: "L'évitement du conflit", definition: "Ne rien dire qui pourrait générer une tension avec la famille, ni sur les pratiques que l'équipe désapprouve, ni sur les difficultés observées. Ce silence protège la paix à court terme et accumule les non-dits qui explosent lors des crises." },
              { niveau: "Défense 3", nom: "La délégation excessive", definition: "Confier à la famille des responsabilités qui relèvent de l'institution, les soins, les décisions administratives, la gestion des comportements. Sous couvert de 'partenariat', l'institution se décharge d'une partie de son travail." },
            ]}
            note="Ces défenses ne sont pas des pathologies institutionnelles, elles témoignent d'une organisation qui n'a pas encore trouvé les ressources pour travailler autrement."
          />

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Vignette clinique</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>L'équipe face à Mireille.</strong> Lors de la dernière réunion de projet, Mireille a évoqué son inquiétude sur la prise de médicaments de Julien : elle trouvait qu'il semblait "trop endormi". L'équipe a répondu que "c'était le médecin qui gérait ça" et a changé de sujet. En salle de réunion après le départ de Mireille, l'éducatrice référente a dit : "Elle est épuisante avec ses questions." Cette réponse défensive (délégation au médecin, clôture du sujet, dévalorisation de la famille) empêche d'entendre une observation potentiellement utile et renforce la méfiance de Mireille.</p>
            </div>
          </div>

          <HighlightBox label="Reconnaître ses propres défenses sans se flageller" couleur="vert">
            <Texte>L'objectif de ce module n'est pas de culpabiliser les équipes. Les défenses institutionnelles sont des réponses humaines à des situations difficiles. Reconnaître une défense, c'est pouvoir travailler avec elle (en supervision, en réunion d'équipe, dans une analyse des pratiques) plutôt que de la laisser organiser la relation à l'insu de tous.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="La personne au cœur : ce que ces dynamiques lui font vivre">
          <Texte>Le pacte dénégatif, la minorisation et les défenses institutionnelles ont en commun de se jouer autour de la personne sans véritablement l'impliquer. Elle est l'objet des arrangements implicites entre famille et institution, mais elle en est aussi le principal destinataire, souvent sans avoir les mots pour nommer ce qu'elle perçoit.</Texte>

          <HighlightBox label="Le splitting ou les loyautés impossibles" couleur="jaune">
            <Texte>Quand la tension entre famille et institution est forte, la personne accompagnée se retrouve dans une position de loyauté impossible. Dire du bien de l'institution à sa mère, c'est la trahir. Dire du bien de sa mère aux éducateurs, c'est parfois être mal regardé. Certaines personnes développent des comportements apparemment contradictoires : elles se conforment à la norme institutionnelle en présence des professionnels, et retrouvent des comportements infantiles en présence de leurs parents. Ce phénomène de <strong>splitting</strong> n'est pas de la manipulation, c'est une réponse adaptative à deux systèmes d'attentes contradictoires.</Texte>
          </HighlightBox>

          <Texte>Denis Mellier (2006) souligne que la personne en situation de handicap perçoit souvent, sans les conceptualiser, les tensions relationnelles qui l'entourent. Son comportement (régression, agitation, retrait) peut être une réponse à cette tension plutôt qu'une expression de son handicap ou de sa pathologie.</Texte>

          <TableauComparaison
            titre="Lire autrement les comportements de la personne"
            colonnes={[
              { titre: "Comportement observé", contenu: [
                "Régression après chaque visite familiale",
                "Agitation les jours de réunion de projet",
                "Refus d'activités après un conflit entre famille et équipe",
                "Propos contradictoires sur sa famille selon l'interlocuteur",
              ]},
              { titre: "Lecture systémique possible", contenu: [
                "La visite réveille des émotions que la personne n'a pas de mots pour traverser",
                "Elle perçoit la tension de l'événement à venir : et son exclusion implicite",
                "Elle exprime son désarroi face à un environnement devenu imprévisible",
                "Elle adapte son discours selon les attentes perçues de chaque milieu",
              ]},
            ]}
          />

          <PullQuote source="Denis Mellier, 2006">
            Ce que la personne handicapée ne peut pas dire, elle le montre. Ce qu'elle montre, elle le vit. Notre rôle n'est pas seulement de gérer le symptôme, c'est de comprendre ce qu'il signifie dans la relation.
          </PullQuote>

          <HighlightBox label="Ce que le professionnel peut faire" couleur="bleu">
            <Liste items={[
              "Nommer la tension devant la personne : 'Je sais que ce n'est pas toujours facile quand ta famille et nous ne sommes pas tout à fait d'accord'",
              "Lui donner une position active : 'Qu'est-ce que toi tu voudrais ?'",
              "Éviter de la prendre à témoin des désaccords entre adultes",
              "Signaler en équipe quand un comportement semble corrélé à une tension famille-institution",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Le pacte dénégatif, la minorisation et les défenses institutionnelles sont trois dynamiques psychiques qui s'organisent souvent sans que personne ne les ait choisies. Elles répondent à des angoisses réelles, servent à court terme, et produisent à long terme des blocages relationnels dont la personne accompagnée paye le prix. Les nommer est la première condition pour commencer à les travailler.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le pacte dénégatif est un accord silencieux de ne pas penser ensemble les sujets qui font peur",
              "La minorisation est un processus qui prive l'adulte handicapé de son statut de sujet, famille et institution peuvent y contribuer ensemble",
              "Les défenses institutionnelles protègent les équipes mais peuvent bloquer la collaboration avec les familles",
              "La personne accompagnée perçoit les tensions qui l'entourent et y répond par ses comportements",
              "Reconnaître ces dynamiques sans culpabiliser est la première étape du changement",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Qu'est-ce que le 'pacte dénégatif' dans la relation famille-institution ?",
            reponses: [
              "Un accord formel signé entre la famille et l'institution pour délimiter leurs rôles respectifs",
              "Un accord implicite et inconscient de ne pas aborder certaines réalités anxiogènes, la mort, la sexualité, l'après-nous",
              "Une stratégie institutionnelle pour éviter les conflits avec les familles difficiles",
              "Un contrat de soins établi avec la famille lors de l'entrée en institution",
            ],
            bonneReponse: 1,
            explication: "Le pacte dénégatif est un concept de René Kaës décrivant des accords implicites et inconscients au sein d'un groupe : certaines réalités ne seront pas nommées parce que les maintenir dans l'impensé est la condition du lien. Dans le secteur adulte du handicap, il organise le silence autour de sujets comme la dépendance à vie, la mort, la sexualité et l'après-nous.",
          },
          {
            question: "La sexualité d'un adulte en situation de handicap est souvent évitée lors des échanges entre famille et institution. Cela illustre :",
            reponses: [
              "Une décision éthique appropriée pour protéger la personne",
              "Le pacte dénégatif : un non-dit partagé qui protège les deux parties d'une angoisse commune",
              "L'absence de formation des professionnels sur ce sujet",
              "Une règle institutionnelle implicite décidée en direction",
            ],
            bonneReponse: 1,
            explication: "L'évitement de la sexualité dans les échanges famille-institution illustre le pacte dénégatif : les deux parties évitent le sujet, non par manque d'information, mais parce que l'aborder générerait des angoisses que personne ne se sent prêt à affronter. Ce pacte prive souvent la personne d'un accompagnement adapté à sa vie affective.",
          },
          {
            question: "La minorisation d'un adulte en situation de handicap se manifeste notamment par :",
            reponses: [
              "Le fait de lui proposer des activités adaptées à son niveau de compétences",
              "Décider à sa place ce qui est bon pour lui, lui parler en diminutifs, répondre à sa place lors des réunions",
              "Le fait de lui appliquer le même règlement qu'aux autres résidents",
              "Le fait de lui proposer des soins médicaux réguliers",
            ],
            bonneReponse: 1,
            explication: "La minorisation est un ensemble de pratiques qui traitent l'adulte comme un mineur : décider à sa place, utiliser des formulations infantilisantes, répondre à sa place, le maintenir dans des espaces conçus pour des enfants. Elle est souvent non consciente et peut être le fait de l'institution comme de la famille.",
          },
          {
            question: "Selon Paul Fustier, la 'routinisation' dans la relation avec les familles est :",
            reponses: [
              "Une bonne pratique qui assure la cohérence des échanges",
              "Une défense institutionnelle qui traite les échanges de façon procédurale, évitant l'espace pour le dialogue vivant",
              "Un protocole recommandé par les autorités de tutelle",
              "Une stratégie de gestion du temps des équipes éducatives",
            ],
            bonneReponse: 1,
            explication: "La routinisation est une défense institutionnelle décrite par Paul Fustier : traiter les échanges avec la famille de façon protocolaire transforme les réunions de projet en formalités à accomplir plutôt qu'en espaces de dialogue. Elle protège l'équipe de l'imprévu et de l'émotion, mais prive la relation de sa dimension vivante.",
          },
          {
            question: "Qu'est-ce que le 'splitting' observé chez certaines personnes accompagnées en institution ?",
            reponses: [
              "Un trouble du comportement lié à leur diagnostic psychiatrique",
              "Une réponse adaptative à deux systèmes d'attentes contradictoires, famille et institution, qui place la personne en loyauté impossible",
              "Une technique éducative utilisée par l'équipe pour gérer les comportements difficiles",
              "Un phénomène propre aux personnes avec déficience intellectuelle sévère",
            ],
            bonneReponse: 1,
            explication: "Le splitting n'est pas de la manipulation. Quand famille et institution sont en tension, la personne se trouve dans une position de loyauté impossible. Elle adapte ses comportements et ses discours selon l'interlocuteur, se conformant à la norme institutionnelle avec les professionnels, retrouvant des comportements infantiles avec ses parents. C'est une réponse adaptative, pas une pathologie.",
          },
          {
            question: "Selon Denis Mellier, pourquoi un comportement de régression après chaque visite familiale mérite-t-il d'être analysé systémiquement ?",
            reponses: [
              "Parce que cela indique que la famille ne devrait pas visiter aussi souvent",
              "Parce que la régression est toujours le signe d'un trouble neurologique à investiguer",
              "Parce que la personne peut exprimer par son comportement une tension relationnelle qu'elle perçoit sans pouvoir la nommer",
              "Parce que les visites familiales perturbent toujours la stabilité émotionnelle des résidents",
            ],
            bonneReponse: 2,
            explication: "Denis Mellier souligne que la personne en situation de handicap perçoit souvent, sans les conceptualiser, les tensions relationnelles qui l'entourent. Un comportement apparemment lié au handicap peut être une réponse à une dynamique famille-institution, ce qui invite à ne pas traiter le symptôme seul, mais à comprendre ce qu'il signifie dans la relation.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
