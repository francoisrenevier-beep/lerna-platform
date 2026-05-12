import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module3FamillesSecteurAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Collaboration famille-institution"
        titre="L'autodétermination au cœur"
        titrePart2="de la relation famille-institution"
        sousTitre="Comprendre ce que l'autodétermination signifie vraiment dans le handicap adulte — et comment famille et institution, souvent sans le vouloir, peuvent en freiner l'exercice."
        duree="50 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="L'autodétermination : un droit, pas une capacité">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Définir l'autodétermination dans le contexte du handicap adulte et distinguer le droit de la capacité",
              "Identifier les situations où la famille freine l'autodétermination sans mauvaise intention",
              "Reconnaître les pratiques institutionnelles qui limitent l'autodétermination de façon routinière",
              "Proposer des outils concrets pour co-construire l'autodétermination avec la famille et la personne",
            ]} />
          </ConceptBox>
          <Texte>L'autodétermination est l'un des principes les plus cités dans les politiques du handicap — et l'un des plus rarement mis en œuvre dans leur plénitude. Entre le discours de principes et la réalité des pratiques quotidiennes, il existe un écart que ce module invite à mesurer honnêtement.</Texte>
          <Texte>Dans le secteur adulte du handicap, l'autodétermination s'exerce dans un triangle complexe : la personne, sa famille, et l'institution. Ces trois acteurs peuvent tour à tour soutenir ou contraindre l'exercice de ce droit — souvent simultanément, souvent sans en avoir pleinement conscience.</Texte>
          <PullQuote>
            L'autodétermination n'est pas réservée à ceux qui peuvent décider seuls. Elle est le droit de tout être humain à être le principal auteur de sa propre vie — même si cela nécessite un soutien pour être exercé.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Comprendre l'autodétermination dans le handicap adulte">
          <Texte>Michael Wehmeyer a défini l'autodétermination comme "la combinaison d'habiletés, de connaissances et de croyances qui permettent à une personne d'agir de façon autonome, autorégulée, habilitée et tournée vers ses propres buts." Cette définition est précieuse — mais elle peut induire en erreur si l'on confond l'autodétermination avec la capacité à décider seul.</Texte>

          <HighlightBox label="Autodétermination ≠ autonomie totale" couleur="bleu">
            <Texte>Une personne peut s'autodéterminer tout en ayant besoin d'un soutien important pour exprimer ses choix. L'autodétermination, c'est :</Texte>
            <Liste items={[
              "Être entendu et pris au sérieux dans ses préférences — même quand elles ne peuvent pas toujours être satisfaites",
              "Participer aux décisions qui concernent sa vie — même si l'on ne peut pas signer les documents légaux",
              "Avoir accès à une information adaptée pour choisir de façon éclairée",
              "Pouvoir refuser — et que ce refus soit respecté comme une décision valide",
            ]} />
          </HighlightBox>

          <ConceptBox label="Le cadre légal" titre="Entre protection et autodétermination : les mesures tutélaires">
            <Texte>En Suisse, le droit civil prévoit des mesures de protection (curatelle de représentation, curatelle de coopération) qui peuvent restreindre légalement la capacité de décision d'une personne. Ces mesures sont parfois nécessaires — mais elles peuvent aussi devenir un obstacle à l'autodétermination si elles sont utilisées de façon extensive, ou si le curateur (souvent un membre de la famille) confond sa mission de protection avec un droit de décider à la place de la personne. L'institution a un rôle à jouer dans la vigilance sur cet équilibre.</Texte>
          </ConceptBox>

          <SchemaEtapes
            titre="Les quatre dimensions de l'autodétermination (Wehmeyer)"
            etapes={[
              { niveau: "Dimension 1", nom: "L'agentivité", definition: "La personne est l'acteur principal de sa vie, pas seulement le destinataire de décisions prises par d'autres. Elle initie, elle demande, elle choisit — même si elle le fait avec du soutien." },
              { niveau: "Dimension 2", nom: "L'autorégulation", definition: "La personne peut gérer ses propres comportements et émotions de façon adaptée à ses objectifs. Elle peut différer une satisfaction, anticiper des conséquences, ajuster ses stratégies." },
              { niveau: "Dimension 3", nom: "La conscience de soi", definition: "La personne a une connaissance de ses propres forces, limites, désirs et valeurs. Elle peut les exprimer et les défendre — à sa façon." },
              { niveau: "Dimension 4", nom: "L'habilitation psychologique", definition: "La personne croit en sa capacité à influencer son environnement. Elle ne s'est pas résignée à ce que les autres décident toujours à sa place." },
            ]}
            note="L'autodétermination se développe — elle n'est pas figée. Un environnement qui soutient activement chacune de ces dimensions peut transformer radicalement la situation d'une personne."
          />
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Quand la famille freine l'autodétermination — sans mauvaise intention">
          <Texte>Les familles qui freinent l'autodétermination de leur proche adulte ne le font presque jamais par malveillance. Elles le font le plus souvent par amour, par peur et par habitude — trois forces puissantes qui méritent d'être comprises avant d'être travaillées.</Texte>

          <HighlightBox label="La surprotection comme expression d'amour" couleur="jaune">
            <Texte>Des décennies à veiller sur un proche vulnérable produisent une vigilance structurelle que les parents ne peuvent pas désactiver sur commande. Cette vigilance a été utile, souvent vitale. Elle continue d'agir même quand la personne a vieilli, même quand ses capacités se sont développées, même quand l'institution offre un cadre sécurisé. La surprotection familiale n'est pas un défaut de caractère — c'est un réflexe construit dans l'adversité.</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Vignette clinique</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Julien et la sortie au marché.</strong> L'équipe a proposé à Julien de participer à un groupe "sorties autonomes" : aller acheter des légumes au marché du village, en binôme avec un autre résident, sans professionnel. Julien était enthousiaste. Mireille a téléphoné le lendemain pour dire qu'elle était contre — trop risqué, que se passerait-il si Julien se perdait ? L'équipe a annulé l'activité sans en discuter davantage. Julien n'a pas été consulté. Trois semaines plus tard, il a manifesté une agitation accrue que l'équipe a attribuée à "sa pathologie".</p>
            </div>
          </div>

          <TableauComparaison
            titre="Comprendre les comportements familiaux qui limitent l'autodétermination"
            colonnes={[
              { titre: "Comportement familial", contenu: [
                "Répondre à la place de la personne lors des réunions",
                "Interdire des activités jugées risquées",
                "Décider du programme des visites sans demander à la personne",
                "Refuser que la personne ait de l'argent de poche",
              ]},
              { titre: "Ce que cela exprime souvent", contenu: [
                "Une anxiété sur ce que la personne pourrait dire 'de mal' — ou une habitude de 40 ans",
                "Une peur fondée sur des expériences passées de situations non maîtrisées",
                "Une difficulté à voir la personne comme un sujet ayant ses propres désirs",
                "Une peur de la désorganisation ou de la manipulation",
              ]},
            ]}
          />

          <HighlightBox label="La posture professionnelle face à la surprotection familiale" couleur="vert">
            <Texte>Face à une famille qui freine l'autodétermination, le professionnel ne peut pas se contenter d'opposer la loi ou les droits de la personne. Il doit :</Texte>
            <Liste items={[
              "Valider l'inquiétude de la famille sans valider sa décision restrictive",
              "Informer sur les sécurités mises en place — pour que la confiance se construise sur des faits, pas sur des promesses",
              "Impliquer la famille dans la préparation de la prise de risque : qu'est-ce qui vous rassurerait ?",
              "Documenter les succès et les partager avec la famille : renforcer la confiance par la preuve",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'institution complice — les angles morts des pratiques">
          <Texte>Avant de pointer les freins familiaux à l'autodétermination, les équipes professionnelles doivent se livrer à un examen honnête de leurs propres pratiques. L'institution peut, elle aussi, contraindre l'autodétermination — souvent sous des formes institutionnalisées et donc invisibles.</Texte>

          <HighlightBox label="Les formes routinières de contrainte institutionnelle" couleur="jaune">
            <Liste items={[
              "Les horaires fixés sans concertation : lever, coucher, repas — imposés au nom de l'organisation collective",
              "Le projet personnalisé rédigé par les professionnels et 'présenté' à la personne plutôt que co-construit avec elle",
              "Les activités proposées selon l'offre institutionnelle plutôt que selon les désirs de la personne",
              "Les règles de vie affichées et appliquées sans avoir été discutées ni comprises par les résidents",
              "Les décisions médicales prises avec la famille mais sans la personne concernée",
            ]} />
          </HighlightBox>

          <ConceptBox label="Participation formelle vs. participation réelle" titre="Un écart souvent invisible">
            <Texte>Beaucoup d'institutions ont mis en place des "instances de participation" : conseils de résidents, commissions de vie institutionnelle. Ces instances existent formellement — mais si les personnes accompagnées ne comprennent pas les enjeux discutés, si leurs avis ne sont pas vraiment pris en compte dans les décisions, si les réunions se tiennent dans un format inadapté à leurs capacités de communication, la participation reste formelle. Elle légitime l'institution sans changer les pratiques.</Texte>
          </ConceptBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Auto-évaluation des pratiques</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">Pour chacune des questions suivantes, interrogez-vous honnêtement sur votre pratique :</p>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Lors de la dernière réunion de projet de la personne, a-t-elle pu s'exprimer directement — pas uniquement via un porte-parole professionnel ou familial ?</li>
                <li>• A-t-elle reçu les informations qui lui permettaient de comprendre ce dont il allait être question ?</li>
                <li>• Ses refus et désaccords ont-ils été documentés et respectés, ou atténués dans les comptes rendus ?</li>
                <li>• Les objectifs de son projet personnalisé reflètent-ils ses priorités à elle — ou les priorités de l'équipe ?</li>
              </ul>
            </div>
          </div>

          <PullQuote>
            Le droit à l'autodétermination n'est pas un supplément d'âme que l'on accorde quand l'organisation le permet. C'est un droit fondamental qui doit réorganiser les pratiques — et non l'inverse.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Co-construire l'autodétermination : famille, institution, personne">
          <Texte>L'autodétermination ne se décrète pas. Elle se construit dans la relation — entre la personne et son institution, entre la personne et sa famille, et entre l'institution et la famille. Cette co-construction suppose des outils, des espaces dédiés, et une posture institutionnelle qui place la personne au centre sans la couper de ses liens.</Texte>

          <HighlightBox label="Des outils pour soutenir l'expression des désirs" couleur="bleu">
            <Texte>Pour les personnes avec des difficultés de communication verbale, exprimer des choix nécessite des supports adaptés :</Texte>
            <Liste items={[
              "Les planches de communication : images, pictogrammes, photos permettant de désigner des préférences",
              "Les entretiens motivationnels adaptés : des conversations régulières qui explorent ce que la personne aime, craint, désire",
              "Le plan de soutien à l'autodétermination : un document vivant qui liste les domaines où la personne peut et veut choisir, et ceux où elle a besoin de soutien",
              "Les cercles de soutien : un groupe de personnes (famille, amis, professionnels) qui accompagnent la personne dans ses projets de vie",
            ]} />
          </HighlightBox>

          <SchemaEtapes
            titre="Gérer les désaccords entre famille et personne"
            etapes={[
              { niveau: "Étape 1", nom: "Écouter séparément", definition: "Rencontrer la personne et la famille séparément pour comprendre les positions de chacun sans la pression de l'autre présent. Ne pas présenter l'un à l'autre comme 'ayant tort'." },
              { niveau: "Étape 2", nom: "Nommer le désaccord sans le dramatiser", definition: "En réunion tripartite : 'Julien nous dit qu'il souhaite X. Mireille, vous avez des inquiétudes sur ce sujet. Je vous propose qu'on explore ensemble ce qui serait nécessaire pour que cette activité soit possible dans de bonnes conditions.'" },
              { niveau: "Étape 3", nom: "Chercher les convergences", definition: "Famille et institution veulent toutes deux le bien de la personne — ce point d'accord est toujours là. Partir de là : 'Nous voulons tous que Julien soit épanoui et en sécurité. Comment concilier ces deux objectifs ?'" },
              { niveau: "Étape 4", nom: "Décider avec la personne", definition: "La décision finale doit être celle de la personne — informée, soutenue, mais pas substituée. Si elle choisit quelque chose que la famille ou l'institution désapprouve, documenter le désaccord et respecter le choix dans le cadre des limites légales." },
            ]}
            note="Ce processus est exigeant. Il suppose du temps, de la formation et un soutien institutionnel aux équipes qui le portent."
          />

          <HighlightBox label="L'alliance thérapeutique à trois" couleur="vert">
            <Texte>La relation la plus favorable à l'autodétermination est celle où la personne, sa famille et l'institution fonctionnent en alliance — non pas d'accord sur tout, mais engagés dans un dialogue honnête où la personne est le sujet, pas l'objet. Cela suppose que l'institution ait clairement établi, avec les familles, que le mandat premier des professionnels est envers la personne accompagnée — et que cette loyauté première ne menace pas le lien avec la famille, mais le clarifie.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>L'autodétermination est un droit que famille et institution peuvent tour à tour soutenir ou contraindre — souvent simultanément. La distinguer de la capacité à décider seul permet de la penser comme un droit universel qui nécessite du soutien. La co-construire suppose des outils, des espaces de dialogue et une posture institutionnelle claire : la personne est au centre.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "L'autodétermination est le droit d'être l'auteur principal de sa vie — pas l'obligation de décider seul",
              "La surprotection familiale est une réponse à une histoire — elle se travaille avec la famille, pas contre elle",
              "L'institution peut elle-même contraindre l'autodétermination à travers ses pratiques routinières",
              "La participation formelle (conseils de résidents) ne garantit pas la participation réelle",
              "Les désaccords entre famille et personne doivent être gérés avec la personne — pas autour d'elle",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la distinction essentielle entre autodétermination et autonomie totale ?",
            reponses: [
              "Il n'y a pas de distinction : une personne autodéterminée est par définition autonome",
              "L'autodétermination est le droit d'être l'auteur principal de sa vie, même avec un soutien important — l'autonomie totale n'est pas une condition préalable",
              "L'autodétermination ne s'applique qu'aux personnes avec une déficience légère ou modérée",
              "L'autonomie totale est nécessaire pour exercer l'autodétermination dans les décisions importantes",
            ],
            bonneReponse: 1,
            explication: "L'autodétermination n'exige pas de pouvoir décider seul. Une personne peut s'autodéterminer tout en ayant besoin d'un soutien important pour exprimer ses choix — à condition que ce soutien respecte sa volonté plutôt qu'il ne la substitue. Confondre autodétermination et autonomie totale prive de fait les personnes avec des limitations importantes de ce droit fondamental.",
          },
          {
            question: "Une famille refuse qu'un adulte de 44 ans participe à une sortie autonome organisée par l'institution. Quelle est la posture professionnelle la plus appropriée ?",
            reponses: [
              "Annuler l'activité par respect de la volonté familiale",
              "Imposer l'activité en invoquant les droits de la personne adulte",
              "Valider l'inquiétude de la famille, informer sur les sécurités mises en place, et impliquer la famille dans la préparation de la prise de risque",
              "Demander à la personne de convaincre elle-même sa famille",
            ],
            bonneReponse: 2,
            explication: "Ni annuler sans dialogue, ni imposer sans travailler avec la famille. La posture juste consiste à valider l'inquiétude familiale (elle est légitime), à informer sur les mesures de sécurité, et à impliquer la famille dans la réflexion sur les conditions qui rendraient l'activité acceptable. Ce processus prend du temps — mais il construit la confiance.",
          },
          {
            question: "Quelle est la différence entre 'participation formelle' et 'participation réelle' dans les instances institutionnelles ?",
            reponses: [
              "La participation formelle implique la signature de documents, la participation réelle implique la présence physique",
              "La participation formelle existe structurellement (conseils de résidents) mais sans réelle prise en compte des avis exprimés, contrairement à la participation réelle",
              "La participation réelle est réservée aux personnes capables de s'exprimer verbalement",
              "La participation formelle est obligatoire légalement, la participation réelle est facultative",
            ],
            bonneReponse: 1,
            explication: "De nombreuses institutions ont mis en place des instances formelles (conseils de résidents, commissions) qui existent sur le papier mais ne transforment pas réellement les pratiques. Si les personnes ne comprennent pas les enjeux, si leurs avis ne sont pas pris en compte dans les décisions, ou si le format est inadapté à leurs capacités, la participation reste formelle — et légitime l'institution sans changer ce qui compte.",
          },
          {
            question: "La mesure de curatelle de représentation peut-elle entrer en tension avec le droit à l'autodétermination ?",
            reponses: [
              "Non, la curatelle est précisément conçue pour garantir les droits de la personne",
              "Oui, si le curateur (souvent un membre de la famille) confond sa mission de protection avec un droit de décider à la place de la personne",
              "Non, la curatelle ne s'applique pas aux décisions concernant la vie quotidienne",
              "Oui, mais uniquement dans les situations de désaccord entre le curateur et l'institution",
            ],
            bonneReponse: 1,
            explication: "La curatelle de représentation est nécessaire dans certaines situations — mais elle peut devenir un obstacle à l'autodétermination si le curateur l'utilise pour décider à la place de la personne dans tous les domaines, y compris ceux où elle pourrait exprimer des préférences et être entendue. L'institution a un rôle de vigilance sur cet équilibre.",
          },
          {
            question: "Lors d'un désaccord entre Julien et sa mère sur une activité, quelle est la première étape recommandée pour le professionnel ?",
            reponses: [
              "Réunir Julien et sa mère ensemble pour qu'ils règlent le désaccord en présence d'un professionnel médiateur",
              "Écouter Julien et sa mère séparément pour comprendre les positions de chacun sans la pression de l'autre",
              "Appliquer la décision de la mère comme tutrice légale de Julien",
              "Demander à la direction de l'institution de trancher",
            ],
            bonneReponse: 1,
            explication: "La première étape est d'écouter séparément les deux parties pour comprendre la position de chacun sans la pression relationnelle de l'autre. Cela permet au professionnel d'arriver en réunion tripartite avec une connaissance des positions de part et d'autre — et de faciliter un dialogue où la personne reste le sujet, pas l'enjeu du désaccord.",
          },
          {
            question: "Qu'est-ce qu'un 'plan de soutien à l'autodétermination' ?",
            reponses: [
              "Un document légal définissant les droits de la personne dans l'institution",
              "Un document vivant qui liste les domaines où la personne peut et veut choisir, et ceux où elle a besoin de soutien",
              "Un protocole de prise en charge médicale centré sur l'autonomie fonctionnelle",
              "Un contrat signé entre la famille et l'institution sur les responsabilités de chacun",
            ],
            bonneReponse: 1,
            explication: "Le plan de soutien à l'autodétermination est un outil pratique, co-construit avec la personne, qui identifie les domaines de vie où elle peut exercer des choix, ceux où elle a besoin d'un soutien adapté, et les personnes qui l'accompagnent dans ce processus. C'est un outil vivant — il évolue avec la personne et ses circonstances.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
