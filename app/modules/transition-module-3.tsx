import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module3TransitionAgeAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Transition vers l'âge adulte"
        titre="Pourquoi certaines relations"
        titrePart2="deviennent difficiles ?"
        sousTitre="Comprendre les sources de tension entre familles et institutions, et apprendre à lire derrière les comportements apparents pour ne pas répondre à côté."
        duree="40 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="La famille de Julien face au premier refus">
          <HighlightBox label="La situation" couleur="bleu">
            <Texte>La famille de Julien refuse une première proposition d'orientation vers un ESE éloigné de leur domicile. L'équipe éducative de l'EPS ne comprend pas ce refus, la place est rare, d'autres familles l'auraient acceptée sans hésiter. La coordinatrice note dans son compte-rendu : "famille peu coopérante, réticente au changement".</Texte>
            <Texte>Cette lecture est-elle juste ? Ce module propose d'autres grilles de lecture, non pour invalider le ressenti des professionnels, mais pour enrichir leur compréhension et éviter des malentendus durables.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="De la tension à la compréhension">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre l'asymétrie structurelle entre familles et institutions et ses effets sur les comportements",
              "Décrypter les comportements apparents (opposition, méfiance, exigence) en identifiant ce qu'ils signifient réellement",
              "Distinguer les tensions liées à la situation actuelle de celles héritées d'une histoire institutionnelle longue",
              "Identifier les dynamiques qui amplifient les tensions et celles qui les réduisent",
            ]} />
          </ConceptBox>
          <Texte>Les tensions dans la relation famille-institution sont presque inévitables lors des moments de transition. Elles ne sont pas un signe d'échec, elles sont le signe que quelque chose d'important se joue. Le problème n'est pas leur existence mais leur interprétation. Quand un professionnel lit une tension comme une opposition, il entre dans une dynamique défensive. Quand il la lit comme un signal sur ce que vit la famille, il ouvre un espace de dialogue.</Texte>
          <PullQuote source="Jean-François Gomez, éducateur spécialisé, VST n°110">
            Les tensions avec les familles sont souvent le signe d'une souffrance qui cherche à s'exprimer, et non d'un refus de coopération. Une réussite de la personne suivie n'est pas grand chose quand elle n'est pas reçue, comprise, approuvée par la famille. Faire du bien à une personne accueillie, c'est souvent faire du bien à ses parents.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="L'asymétrie structurelle : comprendre la position de dépendance">
          <Texte>Pour comprendre les comportements familiaux lors de la transition, il faut d'abord comprendre la structure de la relation entre familles et institutions. Cette relation n'est pas symétrique, et cette asymétrie est la source de nombreuses tensions.</Texte>

          <ConceptBox label="Deux logiques en présence" titre="Ce que l'institution perçoit ne reflète pas toujours ce que la famille vit">
            <Texte>L'institution médico-sociale fonctionne selon sa propre logique interne :</Texte>
            <Liste items={[
              "Des critères d'admission définis par des contraintes réglementaires et financières",
              "Des délais et des procédures qui lui sont propres",
              "Une logique de groupe : ce qui convient à Julien doit aussi être compatible avec ce qui convient aux autres résidents",
              "Des contraintes organisationnelles que les familles ne voient pas",
            ]} />
            <Texte>Les familles, elles, vivent dans une logique radicalement différente :</Texte>
            <Liste items={[
              "Une logique de parcours de vie : l'histoire singulière de leur enfant, ses besoins spécifiques, ses relations particulières",
              "Une logique d'urgence subjective : l'école se termine dans quelques mois, il n'y a pas de place, le temps presse",
              "Une logique émotionnelle : derrière chaque décision se joue l'avenir de leur enfant, son bonheur, sa sécurité",
              "Une logique de méfiance héritée : les institutions ont souvent décidé à leur place par le passé",
            ]} />
          </ConceptBox>

          <PullQuote source="Patricia Gomes, article de référence de la formation">
            L'incertitude quant à l'accès effectif à une place en ESE organise les parcours selon une logique d'opportunité plus que de projet, plaçant les familles dans une position de dépendance vis-à-vis des décisions institutionnelles.
          </PullQuote>

          <HighlightBox label="La charge psychique de l'incertitude" couleur="jaune">
            <Texte>La position de dépendance génère une charge psychique importante que les équipes sous-estiment souvent. Les familles qui attendent une place :</Texte>
            <Liste items={[
              "Ne peuvent pas se projeter, l'avenir est suspendu à une décision qui ne leur appartient pas",
              "Ne peuvent pas anticiper, comment préparer Julien à une transition vers une institution qu'on ne connaît pas encore ?",
              "Vivent dans une incertitude chronique qui épuise progressivement leurs ressources",
              "Développent une hypervigilance qui sera ensuite interprétée comme du contrôle par les équipes",
            ]} />
            <Texte>Cette charge psychique a des conséquences directes sur leurs comportements lors des réunions, des entretiens, des annonces d'orientation. Un parent épuisé par des mois d'incertitude ne réagit pas comme un parent serein, et cette différence de réaction ne dit rien sur sa qualité de parent.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Décrypter les comportements apparents">
          <Texte>La plupart des comportements qui inquiètent les professionnels lors de la transition ont une signification que leur apparence masque. Apprendre à lire derrière le comportement visible pour identifier ce qu'il exprime réellement est une compétence professionnelle centrale dans l'accompagnement des transitions.</Texte>

          <SchemaEtapes
            titre="Décryptage des comportements apparents"
            etapes={[
              {
                niveau: "Comportement",
                nom: "La contestation",
                definition: "Ce que l'on voit : un parent qui refuse une orientation, qui remet en cause les décisions professionnelles, qui exige des explications. Ce que cela exprime réellement : une peur de mal choisir, de ne pas pouvoir revenir en arrière, de trahir son enfant en acceptant quelque chose qui ne lui convient pas. La contestation est souvent une tentative de reprendre du contrôle dans une situation où la famille ne décide pas vraiment."
              },
              {
                niveau: "Comportement",
                nom: "Les demandes d'information répétées",
                definition: "Ce que l'on voit : un parent qui rappelle plusieurs fois, qui demande les mêmes informations sous différentes formes, qui interroge plusieurs membres de l'équipe. Ce que cela exprime réellement : une tentative de construire une représentation fiable d'un futur inconnu. Dans un système peu lisible, l'accumulation d'informations est la seule stratégie disponible pour réduire l'angoisse de l'inconnu."
              },
              {
                niveau: "Comportement",
                nom: "La méfiance",
                definition: "Ce que l'on voit : un parent qui doute des intentions de l'institution, qui interprète les gestes professionnels de façon négative, qui semble incapable de faire confiance. Ce que cela exprime réellement : des expériences passées douloureuses avec des institutions. La méfiance n'est pas irrationnelle, elle est fondée sur une histoire. Ce qui est irrationnel, c'est d'attendre que cette méfiance disparaisse sans que rien ne la démente dans le présent."
              },
              {
                niveau: "Comportement",
                nom: "L'effondrement émotionnel",
                definition: "Ce que l'on voit : un parent qui pleure en réunion, qui semble incapable de prendre des décisions, qui n'est 'pas en état' de collaborer. Ce que cela exprime réellement : un espace suffisamment sûr s'est ouvert pour que quelque chose qui était retenu depuis longtemps puisse enfin s'exprimer. L'effondrement en réunion est souvent un signe de confiance naissante, pas d'incapacité à collaborer."
              },
            ]}
            note="Ces comportements ne sont pas mutuellement exclusifs. Un même parent peut passer de la contestation à l'effondrement dans une même réunion, ce n'est pas de l'instabilité, c'est le signe que plusieurs couches de la situation se remuent simultanément."
          />

          <HighlightBox label="Le refus de la famille de Julien : une nouvelle lecture" couleur="bleu">
            <Texte>Revenons à la situation du fil rouge. La famille de Julien refuse l'ESE éloigné. La coordinatrice note "famille peu coopérante". Que se passe-t-il si on applique le décryptage ?</Texte>
            <Liste items={[
              "La distance géographique n'est pas qu'un inconvénient logistique, pour une famille qui a construit sa vie d'accompagnant autour de la proximité, c'est une rupture d'un lien vital",
              "Julien ne peut pas dire lui-même si cet endroit lui convient ou non, le refus des parents est aussi une forme de protection de sa parole non exprimable",
              "Accepter une place 'par défaut', c'est risquer de fermer la porte à une autre place plus adaptée qui pourrait se libérer",
              "Le refus peut aussi exprimer une loyauté envers Julien : 'Il ne mérite pas juste n'importe quoi, il mérite ce qui lui convient vraiment'",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'exemple de la place inadaptée : quand une décision techniquement correcte génère des tensions durables">
          <Texte>La recherche documente des situations où une orientation objectivement correcte sur le plan administratif génère des tensions durables avec la famille. Ces situations sont éclairantes parce qu'elles montrent que la logique institutionnelle et la logique familiale peuvent être simultanément cohérentes et incompatibles.</Texte>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation documentée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Une jeune adulte a été orientée vers un ESE éloigné, seule place disponible, dans un groupe composé de personnes nettement plus âgées qu'elle. Ses parents ont exprimé le sentiment que leur fille se retrouvait dans un environnement qui ressemblait à un EMS (établissement médico-social pour personnes âgées). Cette réaction renvoyait moins à une critique du dispositif en tant que tel qu'à la crainte d'un vieillissement prématuré symbolique : "Elle a 20 ans, et on la place avec des personnes de 60 ans : c'est comme si on lui disait que sa vie active est terminée avant même d'avoir commencé."</p>
            </div>
          </div>

          <HighlightBox label="Ce que cette situation illustre" couleur="jaune">
            <Texte>Cette situation montre comment une orientation "par défaut" (techniquement correcte, conforme aux procédures) peut générer des tensions durables avec la famille si elle n'est pas accompagnée d'une reconnaissance explicite de ce qu'elle implique pour la personne et ses proches.</Texte>
            <Texte>L'institution avait raison d'un point de vue logistique. La famille avait raison d'un point de vue symbolique et développemental. Ces deux vérités n'étaient pas incompatibles, elles appelaient simplement à être nommées et travaillées ensemble, plutôt que laissées en opposition silencieuse.</Texte>
          </HighlightBox>

          <Texte>Le point crucial de cette situation n'est pas la décision elle-même, il était peut-être impossible de faire autrement compte tenu des contraintes. Le point crucial est ce qui a été dit autour de la décision : a-t-on pris le temps de reconnaître ce que cette orientation avait de difficile pour la famille ? A-t-on nommé l'écart entre ce qui était souhaitable et ce qui était possible ? A-t-on ouvert un espace pour que la famille exprime ce que cette situation lui faisait vivre ?</Texte>

          <ConceptBox label="Reconnaître sans nécessairement changer" titre="La puissance de la nomination">
            <Texte>Il existe une croyance répandue dans les institutions : nommer les difficultés d'une situation, c'est ouvrir une boîte de Pandore, cela va amplifier les tensions, les plaintes, les demandes. L'expérience clinique montre généralement l'inverse. Quand un professionnel dit : "On comprend que cette orientation n'est pas idéale pour votre fille sur le plan de la mixité des âges. On n'a pas pu faire autrement pour l'instant, et on est prêts à travailler avec vous sur la façon de rendre ce placement aussi adapté que possible", il fait plusieurs choses simultanément :</Texte>
            <Liste items={[
              "Il signifie à la famille que son observation est pertinente et a été entendue",
              "Il évite que la famille ait à se battre pour que quelque chose d'évident soit reconnu",
              "Il ouvre un espace de travail commun plutôt qu'une opposition",
              "Il construit la confiance, pas en promettant des solutions, mais en restant dans la réalité",
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Ce que vivent simultanément les trois acteurs">
          <Texte>Les tensions lors de la transition ne s'expliquent pas seulement par ce que vit la famille. Elles résultent d'une conjonction de vécus simultanés : ce que vit le parent, ce que vit le professionnel, et ce que vit Julien, dont la parole est souvent la grande absente.</Texte>

          <TableauComparaison
            titre="Trois vécus simultanés lors du refus d'orientation"
            colonnes={[
              {
                titre: "Ce que vit le parent",
                contenu: [
                  "La peur de mal choisir pour quelqu'un qui ne peut pas défendre lui-même ses intérêts",
                  "La culpabilité de refuser une place rare alors que d'autres familles attendent",
                  "La colère d'être placé devant un choix impossible : accepter l'inadapté ou attendre l'incertain",
                  "La conviction que personne ne comprend vraiment ce dont Julien a besoin",
                ]
              },
              {
                titre: "Ce que vit le professionnel",
                contenu: [
                  "La pression du temps : la place se libère maintenant, elle ne sera plus là demain",
                  "L'incompréhension face à un refus qui semble aller à l'encontre de l'intérêt du jeune",
                  "La frustration d'avoir travaillé sur un dossier pour qu'il soit refusé",
                  "La crainte que Julien se retrouve sans solution à la fin de l'année scolaire",
                ]
              },
            ]}
          />

          <HighlightBox label="Et Julien dans tout ça ?" couleur="bleu">
            <Texte>Dans cette situation de tension entre famille et institution, Julien est souvent absent de la discussion : littéralement et symboliquement. On discute de son avenir, on pèse les options, on exprime des positions. Mais lui n'a généralement pas été préparé à la discussion, n'a pas visité l'ESE en question, et n'a pas pu exprimer ce que lui en pensait. Ce point sera développé dans le module suivant, mais il est important de le noter ici : les tensions famille-institution se nourrissent souvent du fait que la parole du principal intéressé est manquante.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Les dynamiques qui amplifient et celles qui réduisent les tensions">
          <Texte>Toutes les relations famille-institution ne deviennent pas difficiles lors de la transition. Certaines traversent des moments de tension et s'en sortent renforcées. D'autres s'enlisent dans des conflits durables qui finissent par nuire à la personne accompagnée. Qu'est-ce qui fait la différence ?</Texte>

          <TableauComparaison
            titre="Ce qui amplifie / ce qui réduit les tensions"
            colonnes={[
              {
                titre: "Ce qui amplifie les tensions",
                contenu: [
                  "Des informations contradictoires selon l'interlocuteur",
                  "Des décisions annoncées sans espace de dialogue préalable",
                  "Un sentiment que la famille doit s'estimer heureuse d'avoir une place",
                  "Des comportements familiaux interprétés comme de l'opposition sans chercher à les comprendre",
                  "L'absence de suivi entre les réunions : un appel promis non donné amplifie l'angoisse",
                ]
              },
              {
                titre: "Ce qui réduit les tensions",
                contenu: [
                  "Un interlocuteur référent identifié qui prend des messages et rappelle",
                  "Des décisions expliquées : pas seulement annoncées",
                  "La reconnaissance explicite des contraintes de la situation : 'on sait que ce n'est pas idéal'",
                  "Des comportements familiaux accueillis comme des signaux plutôt que des obstacles",
                  "Des engagements tenus, même petits : la confiance se construit sur les détails",
                ]
              },
            ]}
          />

          <HighlightBox label="La cohérence institutionnelle comme facteur de sécurité" couleur="vert">
            <Texte>Les familles sont particulièrement sensibles à la cohérence interne de l'institution. Non pas qu'elles attendent la perfection, elles savent que les institutions fonctionnent avec des contraintes. Mais elles ont besoin de sentir que quelqu'un tient les fils : que le professionnel A et le professionnel B disent la même chose, que ce qui a été dit en réunion est suivi d'effets, que les engagements pris ont une valeur réelle.</Texte>
            <Texte>Cette cohérence est rassurante parce qu'elle réduit l'incertitude, et c'est l'incertitude, rappelons-le, qui est le principal générateur d'angoisse dans le processus de transition.</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">La famille de Julien, suite</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Deux semaines après le refus.</strong> L'équipe de l'EPS a rappelé Nathalie, comme promis. Elle lui a dit : "On comprend que l'ESE de Gland n'est pas idéal pour vous. On sait que la distance est un vrai problème. On cherche avec vous d'autres options. En attendant, on continue à préparer Julien à cette transition de façon générale : les habiletés sociales qu'il travaille maintenant seront utiles quelle que soit la structure qui l'accueillera." Nathalie a raccroché différemment qu'habituellement. Elle n'avait pas de solution. Mais quelqu'un avait tenu parole, reconnu sa réalité, et continuait à travailler. C'était suffisant pour le moment.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Les tensions dans la relation famille-institution lors de la transition ne sont pas des accidents. Elles sont le produit d'une asymétrie structurelle, de vécus simultanés qui s'ignorent, et d'une série de comportements dont la signification réelle est souvent plus complexe que leur apparence. Un professionnel qui sait lire derrière les comportements apparents, sans valider nécessairement leur contenu, dispose d'un levier puissant pour transformer les tensions en dialogue.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "L'asymétrie structurelle place la famille dans une position de dépendance qui génère de l'incertitude, comprendre cela change la lecture des comportements de contrôle et d'exigence",
              "Derrière la contestation se cache souvent une peur ; derrière les demandes d'information, une tentative de reprendre du contrôle ; derrière la méfiance, une histoire",
              "Une décision techniquement correcte peut générer des tensions durables si elle n'est pas accompagnée d'une reconnaissance de ce qu'elle implique pour la famille",
              "Les trois acteurs de la situation (parent, professionnel, jeune) vivent des réalités simultanées qui s'ignorent : les rendre visibles est la première étape pour sortir des impasses",
              "La cohérence institutionnelle (tenir ses engagements, parler d'une même voix) est un facteur de sécurité majeur pour les familles en période de transition",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "En quoi l'asymétrie structurelle entre famille et institution explique-t-elle certains comportements familiaux lors de la transition ?",
            reponses: [
              "Elle explique pourquoi les familles ont moins de ressources intellectuelles pour comprendre les décisions institutionnelles",
              "Elle place la famille dans une position de dépendance qui génère de l'incertitude chronique, source principale de l'hypervigilance et du contrôle",
              "Elle montre que les institutions ont toujours tort dans leurs décisions d'orientation",
              "Elle n'explique rien, les comportements familiaux difficiles sont simplement le signe d'une mauvaise parentalité",
            ],
            bonneReponse: 1,
            explication: "L'institution détient le pouvoir de décision, elle détermine si une place est disponible, quand elle l'est, et pour qui. La famille en est dépendante. Cette asymétrie génère une incertitude chronique : impossible de se projeter, d'anticiper, de préparer le jeune à une transition dont les contours restent flous. Cette incertitude épuise progressivement les ressources de la famille et produit des comportements (hypervigilance, contrôle, exigence) que les équipes lisent souvent comme de l'opposition.",
          },
          {
            question: "Un parent s'effondre en larmes lors d'une réunion de réseau. Quelle est la lecture professionnelle la plus utile ?",
            reponses: [
              "Ce parent n'est pas en état de participer à la réunion : il faut la reporter",
              "Ce parent exprime un rejet de l'institution et de ses professionnels",
              "Un espace suffisamment sûr s'est ouvert pour que quelque chose de longtemps retenu puisse s'exprimer, c'est souvent un signe de confiance naissante",
              "Ce parent souffre d'une pathologie émotionnelle qui nécessite un suivi psychologique urgent",
            ],
            bonneReponse: 2,
            explication: "Les larmes en réunion institutionnelle sont souvent le signe d'une ouverture, pas d'une fermeture. Ce parent qui pleure est un parent qui a senti, peut-être pour la première fois dans ce contexte, qu'il était dans un espace où quelque chose pouvait être dit. Reporter la réunion ou attendre qu'il 'se reprenne' risque de refermer cette ouverture. Accueillir l'émotion, 'prenez le temps qu'il vous faut', et ne pas s'en défendre est généralement la posture la plus productive.",
          },
          {
            question: "Une orientation administrative correcte peut générer des tensions durables avec la famille. Quelle est la condition pour limiter ces tensions ?",
            reponses: [
              "Imposer la décision fermement pour éviter que la famille ne pense qu'elle peut la remettre en cause",
              "Accompagner la décision d'une reconnaissance explicite de ce qu'elle a de difficile pour la famille, sans nécessairement changer la décision",
              "Présenter la décision comme temporaire pour ménager les sensibilités",
              "Éviter tout contact avec la famille jusqu'à ce qu'elle accepte la décision",
            ],
            bonneReponse: 1,
            explication: "Nommer la difficulté d'une situation ne l'amplifie pas, cela l'apaise. Quand un professionnel dit 'on comprend que cette orientation n'est pas idéale sur ce point', il signifie à la famille que son observation est légitime et a été entendue. Il évite que la famille ait à se battre pour faire reconnaître quelque chose d'évident. Il construit la confiance non pas en promettant des solutions mais en restant dans la réalité partagée.",
          },
          {
            question: "Parmi les éléments suivants, lequel réduit le plus efficacement les tensions lors d'une transition ?",
            reponses: [
              "Multiplier les réunions formelles pour s'assurer que tout est documenté",
              "Tenir les engagements pris, même petits : rappeler quand on a dit qu'on rappellerait",
              "Demander à la famille de formuler ses attentes par écrit pour éviter les malentendus",
              "Limiter les contacts avec la famille pour éviter que les échanges ne génèrent de nouvelles tensions",
            ],
            bonneReponse: 1,
            explication: "La confiance se construit sur les détails. Un professionnel qui rappelle à l'heure dite, qui donne suite à ce qu'il a promis, qui dit 'je ne sais pas mais je me renseigne et je vous rappelle', et qui rappelle, bâtit une relation de confiance progressive. Ce sont les petites cohérences répétées qui démentent la méfiance héritée du passé institutionnel, bien plus que les grandes déclarations d'intention.",
          },
          {
            question: "Lors d'un refus d'orientation par une famille, quelle est la première question à se poser en tant que professionnel ?",
            reponses: [
              "Comment convaincre cette famille d'accepter l'orientation proposée ?",
              "Cette famille est-elle apte à prendre des décisions pour son proche ?",
              "Qu'est-ce que ce refus exprime réellement, quelle peur, quelle contrainte, quelle loyauté se cache derrière ce comportement apparent ?",
              "Faut-il signaler ce refus à l'OFAS pour éviter que le jeune se retrouve sans solution ?",
            ],
            bonneReponse: 2,
            explication: "La première question à se poser face à un refus n'est pas comment contourner ce refus ou comment le qualifier, c'est ce qu'il exprime. Un refus d'orientation peut exprimer une peur de l'éloignement géographique, une loyauté envers le jeune ('il ne mérite pas n'importe quoi'), une crainte de fermer une porte, ou encore une tentative de protéger la parole d'un jeune qui ne peut pas s'exprimer lui-même. Comprendre ce que signifie le refus est la condition pour y répondre de façon ajustée.",
          },
          {
            question: "Pourquoi les familles sont-elles particulièrement sensibles à la cohérence institutionnelle lors de la transition ?",
            reponses: [
              "Parce que les familles sont naturellement méfiantes envers toute forme d'autorité",
              "Parce que la cohérence institutionnelle réduit l'incertitude, qui est le principal générateur d'angoisse dans le processus de transition",
              "Parce que les familles ont généralement suivi des formations sur les droits des patients et savent reconnaître les manquements",
              "Parce que la législation sur le handicap exige une communication cohérente de la part des institutions",
            ],
            bonneReponse: 1,
            explication: "L'incertitude est le principal générateur d'angoisse dans le processus de transition. Une institution cohérente (dont le professionnel A et le professionnel B tiennent le même discours, dont les engagements ont une valeur réelle) réduit l'incertitude. Cette cohérence est rassurante non pas parce qu'elle répond à toutes les questions mais parce qu'elle signifie que quelqu'un tient les fils : que les choses ne sont pas aléatoires, qu'on peut s'y fier.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
