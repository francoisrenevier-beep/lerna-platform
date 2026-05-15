import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module10VieillissementExpertise({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={10}
        categorie="Handicap et vieillissement — Pratique avancée"
        titre="Posture face à"
        titrePart2="la fin de vie en institution"
        sousTitre="Accompagner dignement la fin de vie des personnes en situation de handicap vieillissantes — sans sortir du champ du travail social."
        duree="45 minutes"
        niveau="Pratique avancée"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Une réalité que les institutions ne peuvent plus éviter">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre ce que signifie accompagner la fin de vie du point de vue du travail social",
              "Identifier le rôle spécifique de l'éducateur/accompagnant face à la fin de vie",
              "Utiliser des outils adaptés pour recueillir les volontés d'une personne en situation de handicap",
              "Soutenir les résidents témoins de la mort d'un pair",
              "Prendre soin de soi et de son équipe dans ces situations éprouvantes"
            ]} />
          </ConceptBox>
          <Texte>Pendant longtemps, la question de la fin de vie était absente des préoccupations des institutions socio-éducatives. Les personnes en situation de handicap mouraient jeunes, souvent à l&apos;hôpital, et l&apos;institution n&apos;était pas perçue comme un lieu où l&apos;on accompagnait la mort. Cette réalité a profondément changé. L&apos;allongement de l&apos;espérance de vie des personnes en situation de handicap — qui rejoint progressivement celle de la population générale pour certains profils — signifie que des personnes accompagnées depuis 30 ou 40 ans dans la même institution y vieillissent, y déclinent, et parfois y meurent.</Texte>
          <Texte>Cette évolution pose aux institutions socio-éducatives une question pour laquelle elles n&apos;ont pas été conçues : sont-elles équipées — humainement, organisationnellement, culturellement — pour accompagner la fin de vie ? La réponse honnête est souvent : pas encore. Les équipes se retrouvent face à des situations pour lesquelles elles n&apos;ont souvent pas été formées, dans des locaux qui n&apos;ont pas été pensés pour cela, avec des protocoles inexistants ou inadaptés.</Texte>
          <Texte>Ce module ne forme pas aux soins palliatifs — c&apos;est un domaine spécialisé qui dépasse le champ du travail social. Il forme à la posture : comment rester un professionnel du travail social utile, présent et compétent face à la fin de vie, sans déborder sur des compétences qui ne sont pas les vôtres. Et comment préparer ces situations avant qu&apos;elles ne surviennent — parce qu&apos;une fin de vie bien accompagnée se prépare toujours à l&apos;avance.</Texte>
          <PullQuote>
            La mort fait partie de la vie que vous accompagnez. L&apos;ignorer ne la fait pas disparaître — elle laisse seulement la personne et votre équipe traverser cette épreuve sans préparation.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le rôle du travail social face à la fin de vie">
          <Texte>La première chose à clarifier est ce que le travail social apporte — et ce qu&apos;il n&apos;apporte pas — dans l&apos;accompagnement de la fin de vie. Cette clarté protège les professionnels du sentiment d&apos;échec ou d&apos;inadéquation, et permet de mobiliser les bons partenaires au bon moment. Un professionnel qui croit devoir tout faire risque de s&apos;épuiser sur des tâches qui ne lui appartiennent pas, tout en négligeant celles qui lui appartiennent vraiment.</Texte>

          <TableauComparaison
            titre="Ce que le travail social apporte — et ce qu'il ne remplace pas"
            colonnes={[
              {
                titre: "Rôle du travail social",
                contenu: [
                  "Maintenir la qualité de la relation et de la présence",
                  "Assurer la continuité des repères et de l'environnement familier",
                  "Recueillir et transmettre les volontés et préférences de la personne",
                  "Soutenir les proches et les autres résidents",
                  "Coordonner avec les partenaires médicaux et palliatifs",
                  "Prendre soin de l'équipe après un décès"
                ]
              },
              {
                titre: "Ce qui relève d'autres compétences",
                contenu: [
                  "L'évaluation et la gestion de la douleur — médecin, infirmier",
                  "Les décisions médicales de fin de vie — médecin, équipe médicale",
                  "Le soutien psychologique approfondi — psychologue",
                  "Les soins du corps après le décès — infirmier, pompes funèbres",
                  "Les questions juridiques (tutelle, héritage) — juriste, curateur",
                  "Les soins palliatifs spécialisés — équipe mobile de soins palliatifs"
                ]
              }
            ]}
          />

          <Texte>Ce tableau montre quelque chose d&apos;important : le travail social a un rôle central et irremplaçable dans l&apos;accompagnement de la fin de vie — mais ce rôle est relationnel, coordonnateur et humain, pas médical ou technique. Vous n&apos;avez pas à gérer la douleur. Vous avez à être là, à maintenir le lien, à assurer que la personne n&apos;est pas seule et ne perd pas ses repères dans les dernières semaines de sa vie.</Texte>

          <Texte>Ce rôle de présence relationnelle est profondément sous-estimé dans notre culture institutionnelle, qui valorise l&apos;action et l&apos;intervention. Être présent, sans rien &quot;faire&quot; de technique, peut sembler insuffisant. C&apos;est pourtant souvent ce dont la personne a le plus besoin. Être reconnu, regardé, appelé par son prénom, entouré de visages familiers, dans un espace qu&apos;on connaît — ces éléments ont une valeur thérapeutique réelle en fin de vie. Et ils ne peuvent être fournis que par des professionnels qui accompagnent la personne depuis longtemps, dans son environnement habituel. C&apos;est exactement ce que le travail social institutionnel apporte, et que l&apos;hôpital ne peut pas remplacer.</Texte>

          <HighlightBox label="Le passage de la logique éducative à la logique de confort" couleur="jaune">
            <Texte>L&apos;une des transitions les plus difficiles pour les équipes socio-éducatives est le changement de paradigme qui accompagne la fin de vie. Pendant des années — parfois des décennies — vous avez travaillé à développer les capacités de la personne, à maintenir ses acquis, à proposer des stimulations. Progressivement, cet objectif devient moins pertinent. L&apos;enjeu n&apos;est plus de progresser — c&apos;est de maintenir la qualité de vie, le confort, la dignité.</Texte>
            <Texte>Ce changement de paradigme est difficile émotionnellement. Il peut être vécu comme un abandon — &quot;on renonce à la personne&quot;. Ce n&apos;est pas cela. C&apos;est reconnaître que les besoins de la personne ont changé, et que la réponse professionnelle doit changer avec eux. C&apos;est une forme d&apos;accompagnement qui demande autant de compétence et d&apos;humanité que tout ce qui a précédé — peut-être davantage.</Texte>
          </HighlightBox>

          <Texte>Ce changement de paradigme implique en pratique de revoir certains réflexes professionnels bien établis. La stimulation cognitive, le maintien des compétences, la progression dans les activités — ces objectifs sont pertinents sur la majeure partie de la vie d&apos;une personne. En fin de vie, les proposer de manière insistante peut devenir une source d&apos;inconfort. La question à se poser n&apos;est plus &quot;comment faire progresser cette personne ?&quot; mais &quot;qu&apos;est-ce qui lui fait du bien aujourd&apos;hui ?&quot; Et &quot;qu&apos;est-ce qui l&apos;épuise ?&quot; Ce déplacement d&apos;attention, des capacités vers le confort, est au cœur de la posture palliative en travail social.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Recueillir les volontés : un acte de respect">
          <Texte>Une personne en situation de handicap a le droit d&apos;exprimer ses volontés concernant sa fin de vie — ses peurs, ses souhaits, où elle voudrait mourir, avec qui, ce qui lui importe. Ce droit est souvent non exercé — non parce que la personne n&apos;a pas de volontés, mais parce que personne ne lui a posé la question. La crainte de &quot;mettre des idées en tête&quot; ou de &quot;faire peur&quot; est compréhensible, mais elle repose sur une prémisse fausse : les personnes en situation de handicap pensent à la mort. Ce qui leur fait du mal, c&apos;est souvent que personne n&apos;ose en parler avec elles.</Texte>

          <Texte>Ce travail de recueil des volontés ne se fait pas le jour où la personne entre dans sa phase terminale. Il se fait bien avant — idéalement dans le cadre d&apos;une révision du PPA qui intègre explicitement ces questions pour toutes les personnes de plus de 60 ans ou présentant des signes de déclin. Aborder ce sujet dans un moment calme, sans urgence médicale, permet à la personne de s&apos;exprimer sans pression, à son rythme, et à l&apos;équipe de documenter ces volontés avec soin. Quand la fin de vie arrive, il est souvent trop tard pour une conversation sereine.</Texte>

          <SchemaEtapes
            titre="Comment aborder les volontés de fin de vie avec la personne"
            etapes={[
              { niveau: "Étape 1", nom: "Choisir le bon moment", definition: "Un moment calme, hors de toute urgence, quand la personne est en forme et en confiance avec vous" },
              { niveau: "Étape 2", nom: "Adapter le langage", definition: "FALC, supports visuels, phrases courtes — et accepter que la personne ne réponde pas à tout" },
              { niveau: "Étape 3", nom: "Poser des questions concrètes", definition: "Pas 'qu'est-ce que tu veux pour ta fin de vie ?' mais 'si tu étais malade, tu voudrais rester ici ou aller à l'hôpital ?'" },
              { niveau: "Étape 4", nom: "Écouter le non-verbal", definition: "Les réactions comportementales face à certains sujets ou options sont aussi des réponses" },
              { niveau: "Étape 5", nom: "Documenter et partager", definition: "Consigner ce qui a été dit et ce qui a été observé, partager avec l'équipe et le médecin référent" }
            ]}
          />

          <Texte>L&apos;adaptation du langage est une compétence technique à part entière. &quot;Qu&apos;est-ce que tu veux pour ta fin de vie ?&quot; est une question trop abstraite pour la plupart des personnes, avec ou sans handicap. En revanche, &quot;Si tu étais très malade et qu&apos;il fallait te soigner, tu préférerais rester ici ou aller à l&apos;hôpital ?&quot; ou &quot;Qui voudrais-tu que l&apos;équipe appelle en premier si tu te sentais très mal ?&quot; sont des questions concrètes, ancrées dans la réalité de la personne, qui permettent de recueillir des volontés réelles. La règle est simple : une question qui ne peut pas être répondue avec un geste, une image ou un mot de deux syllabes est probablement trop abstraite.</Texte>

          <HighlightBox label="Les questions concrètes à explorer" couleur="bleu">
            <Texte>Voici des questions concrètes adaptées à ce contexte, qui peuvent être posées avec les adaptations nécessaires :</Texte>
            <Liste items={[
              "Où voudrait-elle mourir si possible — dans son institution, à l'hôpital, chez un proche ?",
              "Qui voudrait-elle avoir auprès d'elle — certains membres de l'équipe, des membres de sa famille, des résidents amis ?",
              "Y a-t-il des rituels, des objets, de la musique qui lui sont importants ?",
              "A-t-elle des croyances religieuses ou spirituelles à respecter ?",
              "Y a-t-il des personnes qu'elle ne voudrait pas voir à ce moment ?",
              "Qu'est-ce qui est important pour elle dans sa vie quotidienne actuelle et qu'on doit maintenir le plus longtemps possible ?"
            ]} />
          </HighlightBox>

          <Texte>La question de l&apos;hospitalisation mérite une attention particulière. Pour beaucoup de personnes en situation de handicap ayant vécu la majeure partie de leur vie en institution, l&apos;hôpital est un environnement anxiogène — bruyant, impersonnel, avec des visages inconnus, des routines brisées, des règles incompréhensibles. Des études sur la fin de vie des personnes avec déficience intellectuelle montrent systématiquement que beaucoup d&apos;entre elles expriment le souhait de mourir dans leur lieu de vie habituel — et que ce souhait est systématiquement moins respecté que celui de la population générale, parce que les équipes ne l&apos;ont pas recueilli, ou parce que l&apos;institution n&apos;a pas les ressources pour l&apos;honorer. Recueillir et documenter ce souhait est la première étape pour qu&apos;il puisse être respecté.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Gilbert, 73 ans — aborder le sujet sans l&apos;effrayer</p>
              <p className="text-gray-700 text-sm leading-relaxed">Gilbert a une déficience intellectuelle légère. Il est en bonne santé relative, mais il a 73 ans et la direction a demandé à l&apos;équipe d&apos;initier un recueil de ses volontés. Son référent ne sait pas comment aborder le sujet sans &quot;lui faire peur&quot; ou &quot;lui mettre des idées en tête&quot;. Gilbert parle parfois de la mort de manière spontanée — il a dit un jour &quot;quand je serai plus là, vous me manquerez&quot;.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Comment le référent pourrait-il aborder ce sujet avec Gilbert ? La phrase spontanée de Gilbert est-elle une ouverture à saisir ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">La phrase de Gilbert est une ouverture précieuse — il aborde lui-même le sujet. La crainte de &quot;lui faire peur&quot; ou de &quot;lui mettre des idées en tête&quot; est compréhensible mais souvent infondée : les personnes en situation de handicap pensent à la mort, comme tout le monde. Ce qui leur fait du mal, c&apos;est souvent que personne n&apos;ose en parler avec elles. Le référent peut partir de cette phrase spontanée lors d&apos;un moment calme : &quot;Tu as dit un jour que tu nous manqueras quand tu seras parti. Ça m&apos;a touché. Est-ce que tu penses parfois à ça ?&quot; Puis laisser la conversation se développer à son rythme, sans objectif immédiat. Ce premier échange ouvre la porte à des conversations plus structurées par la suite.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Soutenir les résidents témoins d'un décès">
          <Texte>Quand un résident meurt dans une institution, les autres résidents — qui vivent avec lui depuis parfois des décennies — vivent une perte réelle. Cette perte est souvent insuffisamment reconnue. L&apos;équipe, absorbée par la gestion du décès, de la famille, des formalités, n&apos;a parfois pas les ressources pour accompagner les autres résidents dans ce deuil. Or ce deuil est réel, souvent profond, et peut se manifester de façon inattendue chez des personnes qui n&apos;ont pas toujours les mots pour exprimer leur peine.</Texte>

          <Texte>La façon dont les personnes en situation de handicap intellectuel vivent le deuil présente des spécificités que les professionnels doivent connaître. Le deuil peut être retardé — la personne semble d&apos;abord indifférente, puis décompense plusieurs semaines après. Il peut se manifester par des troubles du comportement, des régressions, des modifications du sommeil ou de l&apos;appétit, des demandes répétées de nouvelles du défunt, ou une recherche de la personne disparue. Il peut aussi être exprimé très directement, avec une simplicité qui déstabilise les professionnels — &quot;il est mort et moi aussi je vais mourir un jour, c&apos;est ça ?&quot; Ces manifestations ne sont pas des signes de pathologie. Elles sont les formes que prend un deuil réel chez des personnes dont les capacités d&apos;élaboration symbolique sont limitées.</Texte>

          <Texte>Pourtant, la façon dont l&apos;institution gère un décès est une information pour tous les résidents sur la façon dont ils seront eux-mêmes accompagnés quand leur tour viendra. Un décès mal géré — nié, tu, expédié — communique un message implicite sur la valeur accordée à la vie et à la mort dans cette institution. Un décès accompagné avec soin communique le contraire.</Texte>

          <HighlightBox label="Ce que les résidents ont besoin après un décès" couleur="vert">
            <Texte>Les résidents qui ont perdu un pair ont besoin de plusieurs choses que l&apos;équipe peut fournir :</Texte>
            <Liste items={[
              "Une information honnête et adaptée : dire que la personne est morte — pas 'partie en voyage' ou 'chez sa famille'. La vérité, formulée avec douceur et des mots accessibles.",
              "Un espace pour exprimer leurs émotions : tristesse, colère, peur pour eux-mêmes. Ces émotions sont normales et ne doivent pas être minimisées.",
              "Des rituels de mémoire collectifs : une photo dans un lieu commun, un moment dédié pour parler de la personne, un geste symbolique selon les croyances de chacun.",
              "Une présence accrue de l'équipe dans les jours qui suivent : certains résidents peuvent décompenser ou montrer des signes de deuil inhabituels — une vigilance renforcée est nécessaire.",
              "Des réponses honnêtes à leurs questions sur leur propre mort, si elles surviennent — sans les éviter ni les dramatiser."
            ]} />
          </HighlightBox>

          <Texte>Sur la question de la vérité : le mensonge — &quot;il est parti en voyage&quot; — ne protège pas le résident. Il retarde et complique son deuil. Quand la vérité émerge (et elle émerge toujours — un autre résident le dit, une famille le mentionne, la chambre est vidée), la confusion est doublée d&apos;une trahison de confiance. &quot;Pourquoi tu m&apos;as menti ?&quot; Cette question, posée par une personne en situation de handicap à son référent après la mort d&apos;un pair, est une des plus difficiles à entendre dans ce métier. La vérité, formulée avec douceur et des mots adaptés, permet un deuil réel et préserve la relation de confiance qui est le fondement de tout accompagnement.</Texte>

          <Texte>Les rituels de mémoire ont une importance que l&apos;on sous-estime souvent. Pour des personnes dont la vie est structurée par des rituels et des routines, la disparition soudaine d&apos;un pair sans aucun marquage symbolique peut être déstabilisante. Un moment de parole collectif, une photo affichée dans le couloir, une sortie en mémoire de la personne, une chanson qu&apos;elle aimait jouée lors d&apos;un repas — ces gestes simples permettent à la communauté résidentielle de marquer la perte, d&apos;honorer la personne disparue, et de clore symboliquement quelque chose qui a commencé. Ils ne remplacent pas le deuil individuel, mais ils lui donnent un cadre collectif.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Le décès de Jean-Pierre — l&apos;équipe ne sait pas quoi dire</p>
              <p className="text-gray-700 text-sm leading-relaxed">Jean-Pierre, 69 ans, est décédé hier à l&apos;hôpital après une hospitalisation de trois semaines. Il vivait dans l&apos;institution depuis 31 ans. Ce matin, plusieurs résidents demandent où il est. L&apos;équipe a dit &quot;il est à l&apos;hôpital&quot;, puis &quot;il reviendra bientôt&quot;. Un éducateur est mal à l&apos;aise avec ces réponses. Certains résidents ont des liens très forts avec Jean-Pierre — notamment Rémi, 61 ans, son ami depuis 25 ans.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">L&apos;éducateur a raison d&apos;être mal à l&apos;aise. Que devrait faire l&apos;équipe maintenant ? Et comment accompagner Rémi spécifiquement ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">L&apos;éducateur a raison — &quot;il reviendra bientôt&quot; est une réponse qui ne tient pas et qui complique le deuil quand la vérité finit par émerger. L&apos;équipe doit décider collectivement comment annoncer le décès, avec quels mots simples et adaptés. Pour les résidents en groupe : un moment réuni, avec une formulation simple : &quot;Jean-Pierre est mort hier. Ça veut dire qu&apos;il ne reviendra pas. C&apos;est triste et c&apos;est normal d&apos;être triste.&quot; Laisser les réactions se produire, répondre aux questions honnêtement. Pour Rémi spécifiquement : lui annoncer séparément, avec son référent, avant ou après le groupe selon ce qui lui convient mieux. Lui donner le temps d&apos;exprimer ce qu&apos;il ressent. Lui proposer un rituel — peut-être écrire une lettre à Jean-Pierre, faire quelque chose qui lui était cher ensemble. Et renforcer la présence de l&apos;équipe auprès de lui dans les prochains jours.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Prendre soin de soi et de son équipe">
          <Texte>Accompagner la fin de vie d&apos;une personne que l&apos;on connaît depuis des années est une expérience humaine intense. Ce n&apos;est pas une expérience professionnelle ordinaire. La perte d&apos;un résident que l&apos;on accompagnait depuis longtemps génère un deuil réel chez les professionnels — qui n&apos;est pas toujours reconnu comme tel, ni par l&apos;institution, ni parfois par le professionnel lui-même.</Texte>

          <HighlightBox label="Le deuil professionnel — une réalité souvent niée" couleur="jaune">
            <Texte>Dans beaucoup d&apos;institutions, la mort d&apos;un résident est traitée comme un événement administratif : les formalités sont gérées, la chambre est nettoyée, un nouveau résident arrive. Les professionnels sont censés continuer à travailler comme si de rien n&apos;était. Cette attente implicite est un déni de la réalité émotionnelle du travail.</Texte>
            <Texte>Les professionnels qui ont accompagné une personne pendant 10, 15 ou 20 ans vivent une perte réelle à son décès. Nier cette perte — ou la minimiser — génère un cumul émotionnel qui s&apos;exprime tôt ou tard : épuisement, cynisme, désengagement, burn-out. Reconnaître ce deuil professionnel, lui donner un espace, est une nécessité institutionnelle — pas un luxe réservé aux professionnels fragiles.</Texte>
          </HighlightBox>

          <Texte>Il faut distinguer deux types de difficultés émotionnelles que les professionnels rencontrent en accompagnant la fin de vie. La première est l&apos;empathie — la capacité à se mettre à la place de la personne et de ressentir quelque chose de ce qu&apos;elle vit. L&apos;empathie est une ressource professionnelle précieuse ; elle permet une présence authentique et une compréhension fine des besoins. La deuxième est la fusion émotionnelle — la difficulté à maintenir une frontière entre soi et la personne accompagnée, au point que sa souffrance devient la sienne. La fusion émotionnelle est un signal d&apos;alerte : elle signale un besoin de soutien, pas une force de caractère. Apprendre à nommer cette distinction est une compétence professionnelle.</Texte>

          <SchemaEtapes
            titre="Comment prendre soin de l'équipe après un décès"
            etapes={[
              { niveau: "Immédiat", nom: "Annonce à l'équipe", definition: "Informer tous les membres de l'équipe — y compris ceux absents ce jour-là — de manière humaine, pas par un simple message" },
              { niveau: "48-72h", nom: "Espace d'expression", definition: "Un temps dédié où chacun peut exprimer ce qu'il ressent, sans obligation d'avoir les 'bonnes' émotions" },
              { niveau: "1-2 semaines", nom: "Débriefing de l'accompagnement", definition: "Revenir sur les dernières semaines : qu'est-ce qui a bien fonctionné, qu'est-ce qui a été difficile, qu'est-ce qu'on ferait différemment ?" },
              { niveau: "Dans la durée", nom: "Mémoire collective", definition: "Maintenir une trace de la personne dans l'institution — photo, livre de mémoire, moment annuel de commémoration si l'équipe le souhaite" }
            ]}
          />

          <Texte>La direction de l&apos;institution a une responsabilité directe dans la création de ces espaces. Mais les professionnels de terrain ont aussi un rôle : nommer leurs besoins, demander ces espaces quand ils n&apos;existent pas, et reconnaître le deuil de leurs collègues. Une équipe qui traverse ensemble la mort d&apos;un résident sort souvent plus soudée — à condition que cette traversée soit accompagnée et non niée.</Texte>

          <Texte>La question de la préparation mérite aussi d&apos;être abordée. Une fin de vie bien accompagnée ne commence pas au moment où la personne entre en phase terminale. Elle commence des mois ou des années avant, quand l&apos;équipe a eu le temps de parler de la mort, d&apos;établir des protocoles, de recueillir les volontés de la personne, et de réfléchir ensemble à la façon dont elle voudrait accompagner cet événement. Les équipes qui ont traversé ce travail préparatoire rapportent systématiquement moins d&apos;état de sidération, moins de conflits, et plus de sentiment d&apos;avoir bien fait leur travail — même dans des situations difficiles. La préparation n&apos;enlève pas la douleur. Elle lui donne un cadre.</Texte>

          <PullQuote>
            Prendre soin de vous après la mort d&apos;un résident n&apos;est pas de la faiblesse. C&apos;est la condition pour que vous soyez présent pour les prochains.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>La fin de vie en institution n&apos;est pas un échec — c&apos;est une étape de vie à accompagner avec la même rigueur et la même humanité que toutes les autres. Le travail social y a un rôle central et irremplaçable : maintenir la relation, assurer la continuité des repères, recueillir et respecter les volontés, soutenir les proches et les pairs, prendre soin de l&apos;équipe. Ce rôle ne nécessite pas de compétences médicales — il nécessite du courage, de la présence, et une préparation sérieuse.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le rôle du travail social face à la fin de vie est relationnel et coordonnateur — pas médical",
              "La présence familière et la continuité des repères sont une valeur thérapeutique réelle — uniquement disponible en institution",
              "Le changement de paradigme (éducatif → confort) est difficile mais nécessaire — c'est une forme d'accompagnement, pas un abandon",
              "Recueillir les volontés se fait avant l'urgence, avec des questions concrètes et des supports adaptés",
              "Les personnes en situation de handicap pensent à la mort — ce qui leur fait du mal, c'est que personne n'en parle avec elles",
              "Le deuil des résidents peut être retardé, atypique, exprimé par des troubles comportementaux — le reconnaître et lui faire de la place",
              "Le deuil professionnel est réel — il mérite un espace institutionnel, pas un déni",
              "Une fin de vie bien accompagnée se prépare toujours en amont — protocoles, volontés, formation de l'équipe"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quel est le rôle principal du travail social face à la fin de vie ?",
            reponses: [
              "Gérer la douleur et les symptômes physiques de la personne",
              "Prendre les décisions médicales en l'absence de la famille",
              "Maintenir la relation, assurer la continuité des repères et coordonner avec les partenaires médicaux",
              "Rédiger les directives anticipées de la personne"
            ],
            bonneReponse: 2,
            explication: "Le rôle du travail social face à la fin de vie est relationnel, humain et coordonnateur — pas médical ou technique. Maintenir la qualité de la présence, assurer que la personne reste dans un environnement familier, recueillir et transmettre ses volontés, soutenir les proches : c'est ce que le travail social apporte de façon irremplaçable."
          },
          {
            question: "Pourquoi le passage de la logique éducative à la logique de confort est-il difficile pour les équipes ?",
            reponses: [
              "Parce qu'il nécessite une formation médicale supplémentaire",
              "Parce qu'il peut être vécu comme un abandon de la personne, alors que c'est une adaptation légitime aux besoins qui ont changé",
              "Parce que les familles refusent généralement ce changement",
              "Parce que les financements institutionnels ne couvrent pas les soins de confort"
            ],
            bonneReponse: 1,
            explication: "Ce passage peut être vécu comme 'renoncer à la personne'. C'est une erreur de lecture : c'est reconnaître que les besoins ont changé et y répondre avec la même compétence. Ce changement demande autant d'humanité et de professionnalisme que tout ce qui a précédé."
          },
          {
            question: "Quand doit-on idéalement aborder les volontés de fin de vie avec une personne en situation de handicap ?",
            reponses: [
              "Le jour où son état de santé se dégrade significativement",
              "Uniquement à la demande de la famille",
              "Bien avant l'urgence, dans le cadre d'une révision du PPA incluant ces questions pour les personnes de plus de 60 ans",
              "Seulement si la personne aborde elle-même le sujet spontanément"
            ],
            bonneReponse: 2,
            explication: "Le recueil des volontés ne se fait pas dans l'urgence — il se fait avant, dans un moment calme, quand la personne est en forme et en confiance. L'intégrer dans la révision du PPA des personnes de plus de 60 ans est une bonne pratique qui évite d'aborder ce sujet pour la première fois dans une situation de crise."
          },
          {
            question: "Pourquoi faut-il dire honnêtement à un résident que son ami est mort — et non 'il est parti en voyage' ?",
            reponses: [
              "Parce que la loi suisse impose cette transparence",
              "Parce que le mensonge ne tient pas et complique le deuil quand la vérité émerge, en plus de priver le résident d'un deuil réel",
              "Parce que les résidents ne comprennent pas les métaphores",
              "Pour éviter les questions gênantes sur la mort"
            ],
            bonneReponse: 1,
            explication: "Le mensonge — 'il est parti en voyage' — ne protège pas le résident : il retarde et complique son deuil. Quand la vérité émerge (et elle émerge toujours), la confusion est doublée d'une trahison de confiance. La vérité, formulée avec douceur et des mots adaptés, permet un deuil réel et respecte la dignité du résident."
          },
          {
            question: "Qu'est-ce que le deuil professionnel ?",
            reponses: [
              "La procédure administrative après le décès d'un résident",
              "La perte réelle vécue par les professionnels après le décès d'une personne accompagnée depuis de nombreuses années",
              "Un congé spécial accordé aux professionnels après un décès",
              "La formation aux soins palliatifs dispensée après chaque décès"
            ],
            bonneReponse: 1,
            explication: "Le deuil professionnel est la perte réelle vécue par les professionnels qui ont accompagné une personne pendant des années. Nier cette perte génère un cumul émotionnel qui s'exprime tôt ou tard. Lui donner un espace institutionnel — un temps d'expression, un débriefing, une mémoire collective — est une nécessité, pas un luxe."
          },
          {
            question: "Parmi ces actions, laquelle ne relève PAS du rôle du travail social face à la fin de vie ?",
            reponses: [
              "Maintenir la présence et la relation avec la personne en fin de vie",
              "Coordonner l'intervention d'une équipe mobile de soins palliatifs",
              "Prescrire et gérer les médicaments antidouleur",
              "Soutenir les résidents témoins du décès d'un pair"
            ],
            bonneReponse: 2,
            explication: "La prescription et la gestion des médicaments antidouleur relèvent des compétences médicales et infirmières — pas du travail social. Le travail social peut et doit signaler des signes de douleur et coordonner avec les professionnels médicaux, mais ne peut pas prescrire ni gérer directement les traitements."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
