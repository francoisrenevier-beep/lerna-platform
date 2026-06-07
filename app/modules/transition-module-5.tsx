import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module5TransitionAgeAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Transition vers l'âge adulte"
        titre="Comment accompagner"
        titrePart2="la transition ?"
        sousTitre="Identifier les pratiques professionnelles qui soutiennent réellement les familles dans cette période — et distinguer ce qui aide de ce qui fragilise."
        duree="45 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="La famille de Julien visite l'ESE">
          <HighlightBox label="La première rencontre" couleur="bleu">
            <Texte>La famille de Julien est invitée à visiter l'ESE qui pourrait l'accueillir. Ils arrivent avec beaucoup d'inquiétudes et quelques idées préconçues — nourries par des expériences précédentes et par ce qu'ils ont entendu de proches qui ont déjà vécu cette transition. L'équipe éducative se prépare à les recevoir. Comment transformer cette première rencontre en une expérience positive qui pose les bases d'un partenariat durable ?</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Des pratiques qui font la différence">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Reconnaître l'expertise parentale et comprendre comment s'en servir comme fondement du partenariat",
              "Identifier les conditions pour construire un espace de travail réel avec les familles",
              "Distinguer ce qui aide de ce qui fragilise dans l'accompagnement des transitions",
              "Comprendre la notion de 'bonne distance' et ses implications pour la posture professionnelle",
            ]} />
          </ConceptBox>
          <Texte>Les modules précédents ont posé un diagnostic : les transitions sont des moments complexes, chargés émotionnellement, traversés par des dynamiques souvent non conscientes. Ce module tourne le regard vers la pratique : que peut faire l'ESE, concrètement, pour que cette transition se passe bien ? Pas de façon abstraite — mais dans les détails de la relation, de la communication, de l'organisation.</Texte>
          <Texte>La recherche et l'expérience clinique convergent : ce qui fait la différence lors d'une transition réussie, ce n'est généralement pas une procédure extraordinaire. C'est la qualité de la relation ordinaire — l'attention, la cohérence, la reconnaissance.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Reconnaître l'expertise parentale : un fondement, pas une option">
          <Texte>Françoise Peille rappelle un principe fondamental trop souvent oublié : pour aider les parents, il faut d'abord les reconnaître comme parents compétents pour cet enfant-là. Non pas des parents parfaits, non pas des parents sans limites — mais des parents qui ont développé, dans l'adversité, une expertise singulière sur leur proche.</Texte>

          <PullQuote source="Françoise Peille, psychologue clinicienne">
            Aux conseils qui nous placent comme détenteurs d'un savoir, il faut préférer le soutien au narcissisme des parents et l'éclaircissement des comportements dans l'histoire familiale. Il faut aider les parents à faire leur propre découverte.
          </PullQuote>

          <HighlightBox label="Ce qu'est vraiment l'expertise parentale" couleur="bleu">
            <Texte>Après des années d'accompagnement intensif, beaucoup de parents ont développé une connaissance de leur proche que les professionnels ne peuvent acquérir qu'après des mois de côtoiement quotidien :</Texte>
            <Liste items={[
              "Les signaux non verbaux qui précèdent une crise — et ce qui l'évite",
              "Les préférences alimentaires, sensorielles, relationnelles les plus fines",
              "La différence entre un comportement passager et un comportement qui signale quelque chose d'important",
              "Ce qui rassure, ce qui stresse, ce qui motive — dans les détails",
              "L'histoire des crises précédentes et ce qui a aidé dans ces moments",
            ]} />
            <Texte>Cette expertise est une ressource institutionnelle précieuse. Mais les institutions ont souvent du mal à la reconnaître, la percevant comme une intrusion ou une mise en cause implicite de leur compétence. Ce malentendu est l'une des principales sources de tensions évitables.</Texte>
          </HighlightBox>

          <Texte>Reconnaître l'expertise parentale ne signifie pas valider tout ce que les parents disent ou font. Cela signifie signifier que leur savoir sur leur proche est pris au sérieux — qu'il entre dans l'évaluation initiale, qu'il est intégré dans les transmissions, qu'il est consulté en cas de situation difficile.</Texte>

          <ConceptBox label="En pratique — quelques formulations" titre="Reconnaître sans se déposséder">
            <Texte>Des formulations simples changent radicalement la dynamique d'une réunion :</Texte>
            <Liste items={[
              "« Avant de vous présenter ce qu'on a observé, qu'est-ce que vous avez vous-mêmes observé ces derniers mois ? »",
              "« Sur ce point précis, vous connaissez Julien bien mieux que nous — qu'est-ce que vous nous conseillez ? »",
              "« Ce que vous nous dites sur les signaux qui précèdent ses crises est très précieux. On peut le mettre par écrit pour toute l'équipe ? »",
              "« On a une hypothèse sur ce comportement — est-ce que ça correspond à ce que vous observez à la maison ? »",
            ]} />
          </ConceptBox>

          <HighlightBox label="Le paradoxe de la croissance parentale" couleur="vert">
            <Texte>Françoise Peille observe que beaucoup de parents, après une période dépressive et difficile, expriment que cet enfant marqué du sceau de la différence les a "révélés à eux-mêmes" bien davantage que leurs autres enfants. Cette capacité de croissance existe — mais elle se construit dans la relation avec les professionnels, pas malgré eux. L'institution qui reconnaît les parents n'est pas seulement plus efficace dans sa mission de soin — elle contribue aussi au développement personnel des familles qu'elle accompagne.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Construire un espace de travail réel avec les familles">
          <Texte>Jean-François Gomez insiste sur la nécessité de créer un espace intermédiaire structuré, qui n'est ni l'espace de la famille ni celui de l'institution — un tiers espace où l'élaboration commune devient possible. Cet espace ne peut pas se créer "sur le pas d'une porte" ou lors d'un passage rapide. Il nécessite des conditions.</Texte>

          <TableauComparaison
            titre="Ce qui crée l'espace de travail / Ce qui le détruit"
            colonnes={[
              {
                titre: "Ce qui crée cet espace",
                contenu: [
                  "Des rendez-vous périodiques convenus à l'avance, pas seulement en cas de crise",
                  "Un temps de préparation en équipe avant les rencontres avec la famille",
                  "La présence du jeune comme règle, non comme exception",
                  "Un collectif professionnel pluridisciplinaire — pas un seul interlocuteur qui porte tout",
                  "Un débrief en équipe après les rencontres pour capitaliser sur ce qui a été dit",
                ]
              },
              {
                titre: "Ce qui détruit cet espace",
                contenu: [
                  "Les rencontres uniquement en cas de crise ou de problème",
                  "Travailler uniquement avec la mère, en oubliant le père et la fratrie",
                  "Éviter les sujets difficiles au nom de la bienséance",
                  "Des décisions communiquées sans espace de dialogue préalable",
                  "Un seul professionnel qui 'gère' la famille — point de contact unique, surcharge garantie",
                ]
              },
            ]}
          />

          <HighlightBox label="La première rencontre comme fondation" couleur="bleu">
            <Texte>La première rencontre entre la famille et l'ESE est particulièrement déterminante. Elle pose les bases de la relation pour longtemps. Quelques éléments qui font la différence :</Texte>
            <Liste items={[
              "Prévoir un temps d'écoute libre avant de présenter la structure — laisser la famille s'exprimer sur ce qu'elle vit avant de parler de ce que l'ESE fait",
              "Présenter les personnes présentes, leur rôle, et la façon dont la famille pourra les contacter — réduire l'anonymat de l'institution",
              "Clarifier qui fait quoi dans l'accompagnement quotidien — les familles ont besoin de savoir à qui s'adresser et pour quoi",
              "Reconnaître explicitement l'expertise de la famille — pas comme une politesse, mais comme une posture fondamentale",
              "Préparer Julien à cette visite avec des supports visuels en amont — lui permettre de comprendre ce qui se passe et d'y participer",
            ]} />
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">La famille de Julien — la visite</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Lors de la visite.</strong> L'équipe de l'ESE avait préparé la rencontre. La directrice commence par : "Avant de vous présenter notre fonctionnement, on voulait d'abord vous donner du temps pour nous dire où vous en êtes, ce qui vous préoccupe. On sait que ce n'est pas votre première transition institutionnelle." Nathalie parle pendant dix minutes — des inquiétudes sur la continuité des acquis de Julien, sur sa capacité à faire de nouvelles amitiés, sur la distance avec leur domicile. Marc, qui n'avait pas prévu de dire grand-chose, finit par poser une question sur l'organisation des week-ends. Julien, à qui on avait montré des photos de l'ESE la veille, regarde autour de lui avec intérêt. La directrice prend des notes. Elle dit : "On va intégrer tout ça dans la façon dont on prépare son arrivée."</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Ce qui aide / ce qui fragilise : une cartographie pratique">
          <Texte>À partir de la littérature clinique et des retours d'expérience, il est possible d'identifier avec précision les pratiques qui soutiennent les familles dans les transitions et celles qui les fragilisent. Ces listes ne sont pas des jugements — elles sont des outils de réflexion sur la pratique.</Texte>

          <SchemaEtapes
            titre="Ce qui aide dans l'accompagnement des transitions"
            etapes={[
              {
                niveau: "Levier 1",
                nom: "Donner du temps",
                definition: "Du temps pour les premières rencontres, du temps pour que la confiance se construise, du temps pour que la famille prépare cette transition à son rythme. La précipitation institutionnelle — 'il faut que tout soit réglé avant la rentrée' — est souvent le premier facteur de tension."
              },
              {
                niveau: "Levier 2",
                nom: "Informer clairement et de façon cohérente",
                definition: "Des informations concrètes sur ce qui va se passer, par qui, à quel rythme. La même information donnée par tous les membres de l'équipe. Des engagements tenus. Les familles supportent bien les mauvaises nouvelles — elles supportent mal les contradictions et les silences."
              },
              {
                niveau: "Levier 3",
                nom: "Reconnaître l'expertise parentale",
                definition: "Consulter les parents comme experts de leur proche, intégrer leur savoir dans l'évaluation initiale et les révisions de projet, nommer explicitement ce qu'ils apportent. Cette reconnaissance est la condition d'un partenariat qui dure."
              },
              {
                niveau: "Levier 4",
                nom: "Impliquer le jeune",
                definition: "Le préparer aux réunions, lui adresser la parole directement, lui permettre de visiter les lieux avant les décisions, lui donner des prises réelles sur son quotidien. Sa participation n'est pas un luxe — c'est une condition de la qualité de la transition."
              },
              {
                niveau: "Levier 5",
                nom: "Anticiper",
                definition: "Ne pas attendre la crise pour aborder les sujets difficiles. Prendre l'initiative des contacts réguliers. Informer les familles avant qu'elles aient à demander. L'anticipation réduit l'incertitude — qui est le principal générateur d'angoisse."
              },
            ]}
            note="Ces cinq leviers ne sont pas des cases à cocher. Ce sont des orientations dans la relation — une façon d'être professionnel qui se construit progressivement, dans la régularité des pratiques quotidiennes."
          />

          <HighlightBox label="Ce qui fragilise — les erreurs les plus fréquentes" couleur="jaune">
            <Liste items={[
              "Informations contradictoires selon l'interlocuteur : la famille ne sait plus à qui se fier",
              "Décisions peu expliquées : 'c'est comme ça' sans espace de dialogue fragilise durablement la confiance",
              "Absence d'anticipation : la famille apprend les changements en dernière minute, sans avoir pu se préparer",
              "Silence institutionnel entre les réunions formelles : les familles imaginent le pire faute d'information",
              "Un seul interlocuteur qui porte toute la relation : en cas d'absence, la famille se retrouve sans contact",
              "Réunions uniquement en cas de problème : le contact devient systématiquement associé à une difficulté",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="La bonne distance : ni trop loin, ni trop près">
          <Texte>Jean-François Gomez met en garde contre une confusion fréquente dans le travail social et éducatif : celle entre "la distance" et "la bonne distance". Ce ne sont pas la même chose — et les confondre peut mener à des postures qui nuisent à la relation.</Texte>

          <ConceptBox label="La distance vs. la bonne distance" titre="Une distinction fondamentale">
            <Texte>La "distance professionnelle" — au sens d'une non-implication émotionnelle totale — est une illusion. Les situations familiales que traversent les équipes en période de transition sont des situations humaines intenses. Prétendre ne pas être affecté par elles est une forme de déni — et non de professionnalisme.</Texte>
            <Texte>La "bonne distance", c'est quelque chose de différent : c'est la capacité à rester affecté — à laisser les situations compter, à laisser les émotions informer le regard — sans être submergé au point de ne plus pouvoir fonctionner avec lucidité. C'est une position mobile, ajustée en permanence, et qui nécessite du soutien.</Texte>
          </ConceptBox>

          <PullQuote source="Jean-François Gomez, VST n°110">
            La toute-puissance dans laquelle nous instaure l'enfant-adulte produit une certaine gêne. Ce qu'on peut encore dire : le professionnel formalise car l'informel n'a besoin de personne, la vie s'en charge.
          </PullQuote>

          <HighlightBox label="Ce que la bonne distance demande aux équipes" couleur="bleu">
            <Texte>Maintenir la bonne distance est un travail collectif, pas individuel. Il nécessite :</Texte>
            <Liste items={[
              "Des espaces réguliers d'analyse des pratiques ou de supervision pour déposer ce que les situations font vivre",
              "Une équipe suffisamment soudée pour que les professionnels puissent se dire 'cette famille m'affecte beaucoup en ce moment'",
              "Une culture institutionnelle qui reconnaît que les émotions professionnelles sont de l'information, pas de la faiblesse",
              "Une distinction claire entre ce qui appartient au professionnel et ce qui appartient à la famille — pour ne pas projeter ses propres angoisses sur la situation",
            ]} />
          </HighlightBox>

          <Texte>La bonne distance bénéficie aussi aux familles. Un professionnel qui prétend ne pas être affecté est un professionnel que la famille ne peut pas vraiment rencontrer — parce qu'elle sent l'absence derrière la façade. Un professionnel qui dit "cette situation me touche, je comprends combien c'est difficile" — sans pour autant se laisser envahir — est un professionnel avec qui quelque chose peut se construire.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="L'accueil comme processus : les dispositifs progressifs">
          <Texte>L'accueil d'un jeune et de sa famille dans un ESE n'est pas un événement — c'est un processus. Cette distinction a des implications pratiques importantes. Un accueil traité comme un événement (une réunion d'admission, une visite, une signature de contrat) laisse la famille seule avec ses questions dès que la formalité est accomplie. Un accueil traité comme un processus crée des jalons progressifs qui permettent à la confiance de se construire dans la durée.</Texte>

          <SchemaEtapes
            titre="Les étapes d'un accueil processus"
            etapes={[
              {
                niveau: "Avant l'entrée",
                nom: "La préparation conjointe",
                definition: "Des visites à plusieurs reprises, pas une seule. Des échanges avec les professionnels référents avant le premier jour. La transmission du savoir de l'EPS vers l'ESE — avec la participation de la famille et du jeune. L'identification des premières inquiétudes et des premières priorités."
              },
              {
                niveau: "Les premières semaines",
                nom: "L'accueil actif",
                definition: "Des contacts réguliers avec la famille — appels, messages, courriers — pas seulement pour signaler les problèmes mais pour partager ce qui se passe bien. Un référent identifié joignable. Des ajustements rapides aux premiers signaux difficiles."
              },
              {
                niveau: "Le premier bilan",
                nom: "La rétroaction",
                definition: "Un bilan explicitement dédié à la transition — pas seulement au projet personnalisé de Julien mais à comment la famille vit ce passage. Qu'est-ce qui s'est passé comme prévu ? Qu'est-ce qui les a surpris ? Qu'est-ce qu'ils ont besoin d'ajuster ?"
              },
              {
                niveau: "La durée",
                nom: "Le maintien du dialogue",
                definition: "Des contacts réguliers maintenus dans la durée, pas seulement pendant la phase de transition aiguë. Les tensions qui surviennent un an après l'entrée ont souvent des racines dans ce qui n'a pas été élaboré lors de l'accueil."
              },
            ]}
            note="Un accueil comme processus n'exige pas nécessairement plus de ressources qu'un accueil événementiel. Il exige surtout une organisation différente : planifier les jalons à l'avance, ne pas attendre que les problèmes se posent pour créer les contacts."
          />

          <HighlightBox label="La médiation dans les deux sens" couleur="vert">
            <Texte>Une des missions centrales de l'ESE lors de la transition est la médiation — non pas entre la famille et le jeune, mais entre deux logiques : la logique institutionnelle et la logique familiale. Cette médiation va dans les deux sens :</Texte>
            <Liste items={[
              "Vers la famille : traduire les contraintes institutionnelles, expliquer pourquoi certaines choses sont organisées d'une certaine façon, nommer les limites sans s'en défendre",
              "Vers l'équipe : faire entendre ce que vit la famille, relayer ses inquiétudes, contextualiser ses comportements dans leur histoire",
            ]} />
            <Texte>Cette médiation bidirectionnelle est une compétence professionnelle centrale. Elle ne se fait pas naturellement — elle nécessite une équipe suffisamment structurée pour que quelqu'un puisse jouer ce rôle sans être pris entre deux loyautés contradictoires.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Accompagner une transition réussie n'est pas une question de procédures extraordinaires. C'est une question de pratiques ordinaires bien conduites : reconnaître l'expertise des parents, créer des espaces de dialogue réels, tenir ses engagements, impliquer le jeune, anticiper plutôt qu'attendre les crises. Ces pratiques ne demandent pas des ressources supplémentaires — elles demandent une conviction que la qualité de la relation est au cœur de la qualité de l'accompagnement.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Reconnaître l'expertise parentale avant de livrer l'expertise professionnelle — cette inversion simple change radicalement la dynamique",
              "L'espace de travail avec les familles se construit intentionnellement : il nécessite des rendez-vous réguliers, de la préparation, et un collectif pluridisciplinaire",
              "Ce qui aide : donner du temps, informer clairement, reconnaître, impliquer, anticiper. Ce qui fragilise : contradictions, silence, décisions non expliquées, contacts uniquement en cas de crise",
              "La bonne distance n'est pas la non-implication — c'est la capacité à rester affecté sans être submergé, et cela se travaille collectivement",
              "L'accueil est un processus — ses jalons se planifient, ses bilans se programment, son maintien dans la durée ne va pas de soi",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Comment reconnaître concrètement l'expertise parentale en début de réunion ?",
            reponses: [
              "En remerciant les parents d'être présents et en présentant le programme de la réunion",
              "En demandant aux parents, avant de présenter les observations professionnelles, ce qu'ils ont eux-mêmes observé ces derniers mois",
              "En montrant aux parents les résultats des évaluations récentes de leur proche",
              "En invitant les parents à valider les objectifs du projet personnalisé proposé par l'équipe",
            ],
            bonneReponse: 1,
            explication: "Commencer une réunion par 'qu'est-ce que vous avez observé ?' avant de livrer les observations professionnelles est une inversion simple qui change radicalement la dynamique. Elle signifie à la famille que son savoir est premier, pas secondaire. Elle ouvre un espace où le parent est expert avant d'être éduqué. Et elle génère souvent des informations que les professionnels n'avaient pas — sur des comportements à la maison, des signaux, des histoires récentes.",
          },
          {
            question: "Parmi les éléments suivants, lequel 'détruit' l'espace de travail avec les familles selon Jean-François Gomez ?",
            reponses: [
              "Prévoir un temps de préparation en équipe avant les rencontres",
              "Travailler uniquement avec la mère en oubliant le père et la fratrie",
              "Impliquer un collectif professionnel pluridisciplinaire",
              "Maintenir des rendez-vous périodiques convenus à l'avance",
            ],
            bonneReponse: 1,
            explication: "Travailler uniquement avec la mère est une erreur fréquente qui fragmente la relation familiale autour de la transition. Elle surcharge la mère d'un rôle d'intermédiaire, exclut le père de décisions qui le concernent, et ignore la fratrie. L'espace de travail avec les familles doit intégrer, dans la mesure du possible, tous les membres significatifs du système familial — pas seulement l'interlocuteur le plus disponible.",
          },
          {
            question: "L'accueil est décrit comme un 'processus' plutôt qu'un 'événement'. Quelle en est la principale implication pratique ?",
            reponses: [
              "L'accueil doit durer au moins six mois pour être efficace",
              "Des jalons progressifs sont planifiés à l'avance — visites multiples, contacts réguliers, bilan dédié à la transition — plutôt que d'attendre que des problèmes surviennent",
              "La famille doit participer à tous les temps institutionnels pendant la période d'accueil",
              "L'accueil nécessite un professionnel dédié à temps plein",
            ],
            bonneReponse: 1,
            explication: "Traiter l'accueil comme un processus signifie en organiser les jalons à l'avance : visites multiples avant le premier jour, contacts réguliers dans les premières semaines (pas seulement pour signaler des problèmes), un bilan explicitement dédié à comment la famille vit la transition. Ces jalons ne coûtent pas nécessairement plus de ressources — ils nécessitent surtout une organisation différente : planifier plutôt qu'attendre.",
          },
          {
            question: "Qu'est-ce que la 'bonne distance' professionnelle selon Jean-François Gomez ?",
            reponses: [
              "L'absence totale d'implication émotionnelle dans les situations familiales",
              "La capacité à rester affecté — à laisser les situations compter — sans être submergé au point de ne plus fonctionner avec lucidité",
              "Le maintien d'une relation strictement professionnelle sans jamais dépasser le cadre des missions définies",
              "La délégation de la relation familiale à un spécialiste (psychologue, assistante sociale) dès que la situation devient émotionnelle",
            ],
            bonneReponse: 1,
            explication: "La bonne distance n'est pas la non-implication — cette dernière est une illusion dans le travail d'accompagnement. C'est la capacité à rester affecté (à laisser les situations humaines avoir de l'importance) sans être submergé. Un professionnel qui prétend ne pas être touché est un professionnel que la famille ne peut pas vraiment rencontrer. La bonne distance se travaille collectivement, dans des espaces de supervision et d'analyse des pratiques.",
          },
          {
            question: "La médiation lors de la transition va dans les deux sens. Que signifie 'médier vers l'équipe' ?",
            reponses: [
              "Défendre les décisions de l'institution auprès de la famille",
              "Faire entendre à l'équipe ce que vit la famille — relayer ses inquiétudes, contextualiser ses comportements dans leur histoire",
              "Organiser des réunions d'équipe sur les situations familiales difficiles",
              "Former l'équipe aux droits des familles dans le secteur du handicap",
            ],
            bonneReponse: 1,
            explication: "La médiation bidirectionnelle est une compétence centrale lors des transitions. Vers la famille : traduire les contraintes institutionnelles, expliquer l'organisation, nommer les limites. Vers l'équipe : faire entendre ce que vit la famille, relayer ses inquiétudes, contextualiser ses comportements. Cette deuxième direction est souvent négligée — et c'est pourtant celle qui permet à l'équipe de ne pas lire les comportements familiaux comme de simples oppositions.",
          },
          {
            question: "Parmi les pratiques suivantes, laquelle fragilise le plus la relation avec les familles en période de transition ?",
            reponses: [
              "Préparer les réunions en équipe avant de rencontrer la famille",
              "Contacts institutionnels qui ne surviennent qu'en cas de problème",
              "Impliquer le père et la fratrie dans les rencontres",
              "Prévoir un bilan dédié à la transition dans les premiers mois",
            ],
            bonneReponse: 1,
            explication: "Quand l'institution ne contacte la famille qu'en cas de problème, elle conditionne progressivement la famille à associer tout contact avec une mauvaise nouvelle. La famille qui ne reçoit de nouvelles que lorsque quelque chose va mal finit par redouter les appels de l'institution — et par développer une anxiété de fond qui rend la relation difficile. Des contacts réguliers, même brefs, pour partager ce qui va bien, construisent une relation de confiance fondée sur autre chose que les crises.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
