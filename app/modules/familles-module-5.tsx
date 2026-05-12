import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module5FamillesSecteurAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Collaboration famille-institution"
        titre="Construire une collaboration famille-institution"
        titrePart2="postures, outils et pratiques"
        sousTitre="La posture professionnelle juste, la réunion de projet repensée, la gestion des conflits, et des outils concrets pour une collaboration qui dure."
        duree="55 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="La collaboration ne va pas de soi — elle se construit">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier et adopter la posture professionnelle qui favorise la collaboration avec les familles",
              "Repenser la réunion de projet personnalisé comme espace de dialogue plutôt que de présentation",
              "Gérer les situations de tension et de conflit avec les familles de façon constructive",
              "Connaître des outils concrets pour bâtir une collaboration durable",
            ]} />
          </ConceptBox>
          <Texte>La collaboration famille-institution ne s'improvise pas lors d'une réunion annuelle de projet. Elle se construit dans l'accumulation de petits gestes — une question bien posée, un désaccord bien géré, une reconnaissance bien formulée — qui tissent progressivement un lien de confiance suffisamment robuste pour traverser les moments difficiles.</Texte>
          <Texte>Ce module propose des outils et des postures concrets, issus des pratiques les plus éprouvées dans le secteur. Ils ne sont pas des recettes universelles — ils doivent être adaptés à chaque famille, à chaque personne, à chaque équipe.</Texte>
          <PullQuote>
            La qualité de la collaboration avec les familles est souvent le reflet de la qualité de la culture institutionnelle. Une institution qui traite bien ses familles traite bien ses professionnels — et vice-versa.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La posture professionnelle : entre empathie et cadre">
          <Texte>La posture professionnelle est l'ensemble des attitudes, des croyances et des comportements qui orientent la façon dont un professionnel entre en relation avec les familles. Elle n'est pas une technique — c'est une position éthique et clinique qui se cultive et s'ajuste en permanence.</Texte>

          <HighlightBox label="Les deux écueils à éviter" couleur="jaune">
            <TableauComparaison
              titre="Entre fusion et distanciation"
              colonnes={[
                { titre: "La fusion", contenu: [
                  "S'identifier à la famille au point de perdre sa position professionnelle",
                  "Prendre le parti de la famille contre l'institution",
                  "Ne plus pouvoir nommer ce qui pose problème dans les pratiques familiales",
                  "Être débordé émotionnellement par les récits familiaux",
                ]},
                { titre: "La distanciation", contenu: [
                  "Traiter la famille comme un interlocuteur administratif",
                  "Ne jamais laisser de place à l'émotion ou à l'imprévu",
                  "Répondre à toutes les demandes familiales par un protocole",
                  "Se défendre derrière le règlement quand la situation est inconfortable",
                ]},
              ]}
            />
          </HighlightBox>

          <ConceptBox label="La juste distance" titre="Une position à trouver et à maintenir">
            <Texte>La juste distance n'est pas un point fixe — c'est un espace dynamique que le professionnel cherche en permanence. Elle suppose :</Texte>
            <Liste items={[
              "Une empathie réelle : comprendre ce que vit la famille de l'intérieur — sans pour autant y habiter",
              "Une différenciation : savoir où finit la réalité de la famille et où commence ma propre réaction",
              "Un cadre clair : des règles du jeu institutionnelles nommées et tenues — sans rigidité, mais sans ambiguïté",
              "Une supervision régulière : un espace professionnel où travailler les résonances émotionnelles que les familles génèrent",
            ]} />
          </ConceptBox>

          <HighlightBox label="Le non-jugement comme posture de fond" couleur="bleu">
            <Texte>Le non-jugement ne signifie pas l'absence d'évaluation. Il signifie que le professionnel évalue les comportements (cette pratique est-elle adaptée à la personne ?) sans évaluer les personnes (cette famille est-elle une bonne ou mauvaise famille ?). Cette distinction est décisive : une famille peut avoir des pratiques qui méritent d'être travaillées, tout en étant portée par un amour réel et des ressources authentiques.</Texte>
          </HighlightBox>

          <HighlightBox label="Prendre soin de soi pour prendre soin des autres" couleur="vert">
            <Texte>Les professionnels qui travaillent durablement avec des familles en situation de grande fragilité — épuisement aidant, deuil, conflits intrafamiliaux — s'exposent à un transfert émotionnel intense. Des espaces de supervision, d'analyse des pratiques, d'intervision entre collègues ne sont pas des luxes : ils sont des conditions de qualité du travail et de prévention du burnout.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La réunion de projet personnalisé repensée">
          <Texte>La réunion de projet personnalisé (PP) est l'espace formel majeur de rencontre entre famille, institution et personne accompagnée. Dans sa forme habituelle, elle peut devenir un exercice de présentation institutionnelle auquel la famille assiste — et auquel la personne concernée participe du bout des lèvres. Repensée, elle peut devenir un espace vivant de dialogue et de co-construction.</Texte>

          <HighlightBox label="Les écueils de la réunion PP classique" couleur="jaune">
            <Liste items={[
              "La famille arrive sans avoir été préparée — elle ne sait pas ce qui va être dit, et se retrouve en position de réagir plutôt que de participer",
              "La personne est présente physiquement mais pas vraiment impliquée — on parle d'elle à la troisième personne",
              "Les objectifs sont présentés comme déjà décidés — la réunion sert à les valider, pas à les co-construire",
              "Les désaccords sont évités ou atténués dans les comptes rendus",
              "La réunion est trop longue, dans un format administratif qui épuise tout le monde",
            ]} />
          </HighlightBox>

          <SchemaEtapes
            titre="Repenser la réunion de projet : avant, pendant, après"
            etapes={[
              { niveau: "Avant la réunion", nom: "Préparer la famille et la personne", definition: "Envoyer à la famille, deux semaines avant, un résumé des observations de l'équipe — pas pour qu'elle valide, mais pour qu'elle arrive avec ses propres questions et observations. Rencontrer la personne concernée pour lui expliquer ce qui va être discuté et lui demander ce qu'elle veut que l'équipe sache ou défende pour elle." },
              { niveau: "Pendant la réunion", nom: "Commencer par la parole de la famille et de la personne", definition: "Inverser l'ordre habituel : commencer par 'Qu'avez-vous observé de votre côté ces derniers mois ?' et 'Qu'est-ce qui est important pour vous ?' avant de livrer les observations de l'équipe. Cela signifie que leur parole a de la valeur — et cela change radicalement la dynamique." },
              { niveau: "Après la réunion", nom: "Assurer la continuité", definition: "Envoyer le compte rendu dans les deux semaines. Vérifier que les engagements pris sont tenus. Revenir vers la famille entre les réunions formelles — un appel, un message — pour partager une observation positive. La confiance se construit dans les petits gestes entre les grands rendez-vous." },
            ]}
            note="Ces ajustements ne nécessitent pas de révolution organisationnelle. Ils demandent un changement de posture — et une conviction que cela vaut la peine."
          />

          <ConceptBox label="La place de la personne dans sa propre réunion" titre="Du témoin au sujet">
            <Texte>L'enjeu le plus fort de la réunion de projet est de faire passer la personne accompagnée du statut de témoin à celui de sujet. Concrètement :</Texte>
            <Liste items={[
              "La réunion se déroule dans un lieu et à une heure qu'elle a contribué à choisir",
              "Elle a été préparée par un entretien individuel avec son éducateur référent",
              "Elle peut s'appuyer sur des supports visuels pour exprimer ses souhaits",
              "Elle choisit qui est présent dans la pièce — et peut demander à ce que certaines personnes n'y soient pas",
              "Ses désaccords sont documentés dans le compte rendu — pas lissés",
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="La gestion des situations de tension et de conflit">
          <Texte>Les conflits avec les familles sont inévitables dans le travail institutionnel. Ils ne sont pas des échecs — ils sont des moments de crise qui, bien traversés, peuvent renforcer la relation. Mal gérés, ils laissent des séquelles durables et parfois irréparables.</Texte>

          <HighlightBox label="Distinguer le conflit utile du conflit destructeur" couleur="bleu">
            <Texte>Tous les conflits ne se valent pas :</Texte>
            <TableauComparaison
              titre="Conflit utile vs. conflit destructeur"
              colonnes={[
                { titre: "Conflit utile", contenu: [
                  "Porte sur des pratiques ou des décisions concrètes",
                  "Permet de mettre à jour des désaccords réels sur ce qui est bon pour la personne",
                  "Génère de l'inconfort — mais aussi de la clarté",
                  "Se règle par le dialogue et parfois par la médiation",
                ]},
                { titre: "Conflit destructeur", contenu: [
                  "Porte sur les personnes plutôt que sur les pratiques",
                  "Génère des alliances et des oppositions figées",
                  "Mobilise la personne accompagnée comme enjeu ou otage",
                  "Ne se règle plus par le dialogue direct — nécessite une intervention extérieure",
                ]},
              ]}
            />
          </HighlightBox>

          <SchemaEtapes
            titre="Les étapes de la désescalade en situation de tension"
            etapes={[
              { niveau: "Étape 1", nom: "Reconnaître l'émotion avant de répondre au fond", definition: "Face à une famille en colère : ne pas contre-argumenter immédiatement. Commencer par 'Je vois que vous êtes très préoccupé·e. Je vous entends.' Ce geste simple désarme souvent une grande partie de l'escalade." },
              { niveau: "Étape 2", nom: "Clarifier le désaccord", definition: "Nommer précisément ce sur quoi il y a désaccord : 'Si je comprends bien, vous estimez que... et nous estimons que... C'est bien ce qui nous sépare ?' Cette formulation précise empêche le conflit de s'élargir à l'ensemble de la relation." },
              { niveau: "Étape 3", nom: "Proposer un espace tiers", definition: "Quand le dialogue direct semble bloqué : proposer l'intervention d'un tiers — un cadre de l'institution, un médiateur externe, un professionnel de l'AI. Cela ne signifie pas que l'institution capitule — cela signifie qu'elle prend le conflit suffisamment au sérieux pour lui donner un espace digne." },
              { niveau: "Étape 4", nom: "Soutenir l'équipe", definition: "Les situations de conflit intense épuisent les équipes. Le soutien institutionnel — disponibilité de l'encadrement, espaces de débriefing, reconnaissance de la difficulté — est une condition pour que les professionnels puissent continuer à travailler avec la famille sans se fermer." },
            ]}
            note="En Suisse romande, des services de médiation spécialisés existent dans plusieurs cantons. Les connaître et les mobiliser est une compétence institutionnelle à développer."
          />

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Vignette clinique — le conflit, suite</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Mireille dépose une plainte.</strong> Suite à un incident lors duquel Julien s'est blessé légèrement pendant une activité extérieure, Mireille a envoyé un courrier recommandé à la direction demandant des explications et menaçant de "saisir les autorités". L'équipe s'est sentie accusée et s'est fermée. La direction a répondu par un courrier formel. Le dialogue a été rompu pendant trois semaines. Ce qui aurait pu être résolu en une conversation téléphonique s'est transformé en procédure. Ce n'était pas la faute de Mireille — c'était le signe que la confiance n'était pas suffisamment construite pour traverser cet incident sans escalade.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Des outils concrets pour une collaboration durable">
          <Texte>Au-delà des postures et des processus, la collaboration famille-institution s'appuie sur des outils concrets qui, intégrés dans la culture institutionnelle, transforment la qualité des relations dans la durée.</Texte>

          <HighlightBox label="Le carnet de liaison repensé" couleur="bleu">
            <Texte>Dans sa forme traditionnelle, le carnet de liaison sert à transmettre des informations factuelles et des consignes. Repensé comme outil de collaboration, il peut devenir un espace de dialogue :</Texte>
            <Liste items={[
              "Des rubriques pour les observations de la famille, pas seulement de l'institution",
              "Des questions ouvertes : 'Qu'avez-vous observé lors de la dernière visite ?'",
              "Des partages de moments positifs — pas seulement des signalements de problèmes",
              "Un espace pour que la personne elle-même s'exprime — en mots, en dessins, en pictogrammes",
            ]} />
          </HighlightBox>

          <HighlightBox label="Les groupes de parole famille-institution" couleur="vert">
            <Texte>Des groupes réguliers (4 à 6 fois par an) réunissant des familles et des professionnels autour d'un thème commun — la sexualité, l'après-nous, les comportements défis — créent un espace de dialogue informel que les réunions de projet ne peuvent pas offrir. Ces groupes :</Texte>
            <Liste items={[
              "Permettent aux familles de rencontrer d'autres familles en situation similaire",
              "Humanisent les professionnels aux yeux des familles — et vice-versa",
              "Permettent d'aborder des sujets difficiles dans un cadre moins formel",
              "Produisent souvent des solutions innovantes que ni les familles ni les équipes n'auraient trouvées seules",
            ]} />
          </HighlightBox>

          <ConceptBox label="Évaluer la qualité de la collaboration" titre="Des indicateurs simples mais révélateurs">
            <Texte>Comment savoir si la collaboration avec les familles fonctionne vraiment ? Quelques indicateurs simples :</Texte>
            <Liste items={[
              "Les familles appellent-elles pour partager des nouvelles positives — ou uniquement en cas de problème ?",
              "Les familles expriment-elles librement leur désaccord — ou attendent-elles une réunion formelle pour le faire ?",
              "La personne accompagnée parle-t-elle de sa famille à l'équipe — et vice-versa ?",
              "L'équipe connaît-elle le prénom du conjoint du parent, la profession de la fratrie, le nom du chien de la famille ?",
              "Les familles reviennent-elles après un conflit — ou s'éloignent-elles ?",
            ]} />
          </ConceptBox>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">80%</p>
              <p className="text-sm text-white/70 leading-snug">des conflits famille-institution auraient pu être évités ou résolus plus tôt avec une communication préventive plus régulière</p>
            </div>
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">3×</p>
              <p className="text-sm text-white/70 leading-snug">les familles impliquées dans la co-construction du projet personnalisé adhèrent trois fois plus aux décisions institutionnelles</p>
            </div>
          </div>

          <HighlightBox label="Le bilan de formation : ce que vous avez construit" couleur="vert">
            <Texte>Au terme de cette formation, vous disposez d'une grille de lecture théorique et clinique pour comprendre les dynamiques famille-institution — et d'outils concrets pour les transformer. Ce travail ne s'arrête pas à la fin de ce module. Il se poursuit dans chaque réunion de projet, chaque appel téléphonique avec une famille, chaque moment où vous choisissez de voir la famille comme un partenaire plutôt qu'un problème à gérer.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que cette formation a construit">
          <Texte>Tout au long de ces cinq modules, nous avons suivi Mireille et Julien — et à travers eux, toutes les familles et toutes les personnes accompagnées dont vous êtes les professionnels. Nous avons vu que la relation famille-institution est un territoire complexe, traversé par des dynamiques psychiques puissantes, des histoires longues et des enjeux éthiques fondamentaux.</Texte>
          <Texte>Travailler avec les familles dans le secteur adulte du handicap, c'est accepter de se laisser affecter par ce qu'elles vivent — sans s'y perdre. C'est construire, patiemment, une confiance qui permet de traverser ensemble les moments les plus difficiles. C'est placer la personne accompagnée au cœur — non comme objet de soins, mais comme sujet de sa propre vie.</Texte>
          <HighlightBox label="Les cinq apprentissages fondamentaux de cette formation" couleur="vert">
            <Liste items={[
              "La famille porte une histoire longue — la comprendre est la condition de tout partenariat digne",
              "Les dynamiques psychiques (pacte dénégatif, minorisation, défenses) opèrent en dehors de la conscience — les nommer permet de commencer à les travailler",
              "L'autodétermination est un droit universel qui se soutient — pas une capacité qui se juge",
              "Les transitions critiques (après-nous, vieillissement, deuil) nécessitent une anticipation institutionnelle structurée",
              "La collaboration se construit par des postures, des outils et une culture institutionnelle — pas par de bonnes intentions seules",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Qu'est-ce que la 'juste distance' dans la relation professionnelle avec les familles ?",
            reponses: [
              "Une position fixe de neutralité que le professionnel adopte en toutes circonstances",
              "Un espace dynamique entre empathie réelle et différenciation — ni fusion, ni distanciation — que le professionnel cherche en permanence",
              "La distance physique appropriée lors des réunions de projet",
              "La règle institutionnelle définissant le nombre de contacts autorisés avec chaque famille",
            ],
            bonneReponse: 1,
            explication: "La juste distance n'est pas une règle fixe — c'est un espace dynamique. Elle suppose une empathie réelle (comprendre de l'intérieur sans s'y perdre), une différenciation (savoir où finit la réalité de la famille et où commencent ses propres réactions), un cadre clair et une supervision régulière pour travailler les résonances émotionnelles.",
          },
          {
            question: "Dans une réunion de projet personnalisé repensée, quel changement simple transforme le plus radicalement la dynamique ?",
            reponses: [
              "Allonger la durée de la réunion pour avoir le temps d'aborder tous les sujets",
              "Commencer par la parole de la famille et de la personne, avant de livrer les observations de l'équipe",
              "Inviter un médiateur externe à chaque réunion",
              "Supprimer la présence des éducateurs pour ne garder que les cadres",
            ],
            bonneReponse: 1,
            explication: "Commencer la réunion par 'Qu'avez-vous observé de votre côté ?' et 'Qu'est-ce qui est important pour vous ?' — avant de livrer les observations institutionnelles — signifie à la famille que sa parole a de la valeur. Ce geste simple change fondamentalement la posture de tous les participants : d'une réunion de présentation à un espace de dialogue.",
          },
          {
            question: "Comment distinguer un 'conflit utile' d'un 'conflit destructeur' avec une famille ?",
            reponses: [
              "Le conflit utile est porté par la famille, le conflit destructeur est généré par l'institution",
              "Le conflit utile porte sur des pratiques ou décisions concrètes et permet de clarifier des désaccords réels ; le conflit destructeur porte sur les personnes et génère des alliances figées",
              "Le conflit utile se résout en moins d'une réunion, le conflit destructeur dure plus de six mois",
              "Le conflit utile est verbal, le conflit destructeur implique des plaintes écrites",
            ],
            bonneReponse: 1,
            explication: "Un conflit est utile quand il porte sur des pratiques ou des décisions concrètes et permet de mettre à jour des désaccords réels sur ce qui est bon pour la personne. Il devient destructeur quand il porte sur les personnes, génère des alliances figées, et mobilise la personne accompagnée comme enjeu ou otage. Cette distinction oriente la réponse professionnelle.",
          },
          {
            question: "Parmi les indicateurs de qualité d'une collaboration famille-institution, lequel est le plus révélateur ?",
            reponses: [
              "Le nombre de réunions de projet organisées par an",
              "Le taux de participation des familles aux événements institutionnels",
              "Le fait que les familles appellent aussi pour partager des nouvelles positives — pas seulement en cas de problème",
              "Le nombre de plaintes écrites déposées par les familles au cours de l'année",
            ],
            bonneReponse: 2,
            explication: "Une famille qui appelle aussi pour partager de bonnes nouvelles — 'Julien a adoré la sortie de la semaine dernière' — signale que le lien avec l'institution va au-delà de la gestion des problèmes. Cet indicateur révèle que la confiance est suffisamment établie pour que la famille investisse la relation de façon positive, pas seulement défensive.",
          },
          {
            question: "Pourquoi les groupes de parole famille-institution permettent-ils d'aborder des sujets difficiles plus facilement que les réunions de projet individuelles ?",
            reponses: [
              "Parce que l'anonymat y est garanti et que les familles peuvent s'exprimer librement",
              "Parce qu'ils se déroulent hors de l'institution, dans un lieu neutre",
              "Parce qu'ils créent un espace informel où les familles peuvent rencontrer d'autres familles et où les professionnels sont humanisés — hors du cadre formel de la réunion de projet",
              "Parce que la direction y est systématiquement absente, ce qui libère la parole",
            ],
            bonneReponse: 2,
            explication: "Les groupes de parole famille-institution créent un espace distinct de la réunion de projet formelle. Les familles y rencontrent d'autres familles en situation similaire, les professionnels y apparaissent de façon moins institutionnelle, et les sujets difficiles (après-nous, sexualité, fin de vie) peuvent être abordés avec moins de pression. L'informel du cadre favorise des échanges plus authentiques.",
          },
          {
            question: "Face à une famille qui menace d'une plainte formelle après un incident, quelle est la première réponse institutionnelle la plus appropriée ?",
            reponses: [
              "Envoyer immédiatement une réponse formelle par courrier recommandé pour documenter la position de l'institution",
              "Demander à la famille d'attendre l'issue de l'enquête interne avant tout échange",
              "Reconnaître l'émotion de la famille, proposer une rencontre directe rapidement, et éviter d'escalader vers une procédure formelle si le dialogue reste possible",
              "Transmettre immédiatement la gestion à l'équipe juridique de l'institution",
            ],
            bonneReponse: 2,
            explication: "La menace de plainte signale souvent que la famille se sent non entendue plutôt qu'une intention réelle de procédure formelle. Une réponse institutionnelle formelle immédiate confirme la rupture du dialogue. La réponse la plus appropriée est de reconnaître l'émotion, de proposer une rencontre directe rapide, et de vérifier si un dialogue direct est encore possible — avant de basculer vers une procédure qui coûte à tout le monde.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
