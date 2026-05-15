import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module4VieillissementBases({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Accompagner le vieillissement en institution — Les bases"
        titre="Ne pas rester seul :"
        titrePart2="s'appuyer sur le réseau"
        sousTitre="À qui s'adresser, quand, et comment transmettre une observation utile — les réflexes professionnels du quotidien."
        duree="30 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Vous n'êtes pas seul à décider">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier les acteurs clés du réseau autour d'une personne vieillissante en institution",
              "Savoir quand et comment solliciter le médecin référent",
              "Comprendre le rôle des partenaires externes (Spitex, gériatrie, Pro Infirmis, Pro Senectute)",
              "Formuler une observation transmissible et utile",
              "Comprendre que travailler en réseau protège la personne accompagnée — et le professionnel"
            ]} />
          </ConceptBox>
          <Texte>Les trois modules précédents vous ont donné des bases pour comprendre, observer et adapter votre pratique face au vieillissement. Ce quatrième module répond à une question pratique essentielle : quand j&apos;observe quelque chose, à qui est-ce que je m&apos;adresse ? Et comment ?</Texte>
          <Texte>Accompagner une personne en situation de handicap vieillissante dépasse toujours les seules compétences d&apos;un professionnel, d&apos;une équipe, ou même d&apos;une institution. Tôt ou tard, cela nécessite de faire appel à d&apos;autres acteurs. Savoir qui appeler, quand, et avec quelle information, c&apos;est une compétence professionnelle concrète.</Texte>
          <HighlightBox label="Une posture professionnelle fondamentale" couleur="bleu">
            <Texte>En tant que professionnel du travail social et éducatif, votre rôle face au vieillissement n&apos;est pas de diagnostiquer ni de traiter. Il est d&apos;<strong>observer, de documenter et de transmettre</strong> — et de contribuer activement au réseau de personnes qui entoure et protège la personne accompagnée.</Texte>
            <Texte>Rester seul avec une observation inquiétante sans la partager n&apos;est pas une posture professionnelle. C&apos;est une surcharge inutile pour vous, et un risque pour la personne.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="À l'intérieur de l'institution : votre première ligne de réseau">
          <Texte>Avant même de penser aux acteurs externes, le réseau commence à l&apos;intérieur de l&apos;institution. C&apos;est là que se fait la majorité du travail de détection et de coordination au quotidien.</Texte>

          <HighlightBox label="Les transmissions d'équipe : première étape indispensable" couleur="vert">
            <Texte>Lorsque vous observez un changement chez une personne accompagnée, la première étape n&apos;est pas d&apos;appeler le médecin — c&apos;est de partager votre observation avec l&apos;équipe. Deux raisons :</Texte>
            <Liste items={[
              "Valider l'observation : d'autres collègues ont peut-être observé la même chose. La confrontation des regards affine la compréhension.",
              "Construire une tendance : une observation isolée peut être un incident. La même observation rapportée par trois professionnels sur deux semaines est un signal qui mérite d'être transmis au médecin."
            ]} />
            <Texte>Ne minimisez pas vos observations parce que vous n&apos;êtes &quot;que&quot; un éducateur, &quot;que&quot; un animateur. Votre regard quotidien sur la personne est irremplaçable.</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="Circuit de l'information en institution"
            etapes={[
              { niveau: "Étape 1", nom: "Vous observez", definition: "Un changement, un signal, quelque chose d'inhabituel par rapport à l'état de base de la personne" },
              { niveau: "Étape 2", nom: "Vous notez", definition: "Dans les transmissions, avec précision : quoi, quand, depuis quand, par rapport à quoi" },
              { niveau: "Étape 3", nom: "L'équipe valide", definition: "En réunion ou lors d'une transmission, les observations sont croisées et une tendance se dessine" },
              { niveau: "Étape 4", nom: "Le médecin est informé", definition: "Avec une description factuelle et documentée — pas une interprétation médicale" }
            ]}
          />

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Vous avez observé quelque chose — mais vous ne savez pas si c&apos;est important</p>
              <p className="text-gray-700 text-sm leading-relaxed">Depuis une semaine, vous avez remarqué que Monique, 57 ans, déficience intellectuelle modérée, mange beaucoup plus lentement qu&apos;avant et tousse deux ou trois fois pendant le repas. Ce n&apos;est pas spectaculaire, mais c&apos;est différent. Vous hésitez à en parler — vous ne voulez pas &quot;faire une montagne de rien&quot;.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quelle est la bonne décision ? Et quelle serait la conséquence de ne rien dire ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">La bonne décision est de noter et de partager. La règle professionnelle est simple : si vous vous posez la question de savoir si c&apos;est important, c&apos;est que c&apos;est important. C&apos;est à l&apos;équipe et au médecin de juger de la suite — pas à vous de filtrer l&apos;information en amont. Si Monique développe un trouble de la déglutition non détecté, les conséquences peuvent être graves. Vous avez l&apos;information en premier — c&apos;est votre responsabilité de la transmettre.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le médecin référent : votre interlocuteur médical principal">
          <HighlightBox label="Le rôle pivot du médecin référent" couleur="bleu">
            <Texte>Dans le système de santé suisse, le médecin de famille (ou médecin référent en contexte institutionnel) joue un rôle central de coordination médicale. C&apos;est lui qui coordonne les différents intervenants, prescrit les bilans spécialisés et assure la continuité des soins dans le temps.</Texte>
            <Texte>La relation avec le médecin référent doit être <strong>active et bidirectionnelle</strong> : l&apos;institution transmet ses observations cliniques et ses préoccupations ; le médecin informe des diagnostics, traitements et précautions à prendre. Cette communication ne devrait pas se limiter aux situations d&apos;urgence.</Texte>
          </HighlightBox>

          <Texte>Vous connaissez la personne dans sa globalité et dans le quotidien. Le médecin connaît les aspects cliniques. Les deux sont nécessaires. Ni l&apos;un ni l&apos;autre ne peut travailler correctement sans l&apos;autre.</Texte>

          <HighlightBox label="Comment transmettre une observation au médecin de façon utile" couleur="vert">
            <Texte>Une transmission efficace au médecin contient quatre éléments :</Texte>
            <Liste items={[
              "Ce que vous avez observé — description factuelle, sans interprétation médicale",
              "Depuis quand — date approximative du début du changement",
              "La fréquence — tous les jours, plusieurs fois par semaine, une fois isolée ?",
              "L'écart avec l'habituel — en quoi c'est différent du comportement habituel de cette personne"
            ]} />
          </HighlightBox>

          <div className="grid grid-cols-1 gap-4 my-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-2">À éviter</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">&quot;Je pense que Jean-Paul fait peut-être une dépression, il faudrait changer son traitement.&quot;</p>
              <p className="text-gray-500 text-xs mt-2">Interprétation médicale + prescription — ce n&apos;est pas votre rôle</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">À privilégier</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">&quot;Depuis environ 3 semaines, Jean-Paul (63 ans, déficience intellectuelle légère) refuse de venir aux ateliers alors qu&apos;il y participait tous les jours depuis des années. Il mange moins et a perdu environ 2-3 kg. Il dit &apos;j&apos;ai pas envie&apos; quand on l&apos;encourage. Ce comportement est nouveau pour lui.&quot;</p>
              <p className="text-gray-500 text-xs mt-2">Description factuelle + écart avec l&apos;habituel — le médecin peut travailler avec ça</p>
            </div>
          </div>

          <PullQuote>
            C&apos;est votre rôle d&apos;observer le quotidien. C&apos;est le rôle du médecin de poser un diagnostic.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les partenaires externes : qui fait quoi en Suisse romande">
          <Texte>Au-delà du médecin référent, plusieurs acteurs du système médico-social suisse peuvent être mobilisés selon les besoins de la personne accompagnée. Les connaître vous permet de savoir vers qui orienter quand la situation le demande.</Texte>

          <TableauComparaison
            titre="Acteurs clés en Suisse romande"
            colonnes={[
              {
                titre: "Acteur",
                contenu: ["Spitex / NOMAD / APAC", "Gériatrie hospitalière", "Équipes mobiles gériatriques", "Psychiatrie de l'âge avancé", "Pro Infirmis", "Pro Senectute"]
              },
              {
                titre: "Mission",
                contenu: [
                  "Soins infirmiers et aide — peut intervenir en institution",
                  "Évaluation spécialisée : démence, fragilité, chutes, dénutrition",
                  "Se déplacent en institution pour des évaluations",
                  "Troubles psychiques se complexifiant avec l'âge",
                  "Démarches sociales, défense des droits — champ handicap",
                  "Aide à domicile, soutien aux aidants — champ vieillesse"
                ]
              },
              {
                titre: "Quand faire appel",
                contenu: [
                  "Besoins médicaux dépassant les compétences éducatives",
                  "Diagnostic gériatrique complexe nécessitant un bilan spécialisé",
                  "Personne supportant mal les déplacements ou hospitalisations",
                  "Démence + troubles psychiques, dépression sévère",
                  "Transitions, soutien famille, transition AI/AVS",
                  "Maintien de liens sociaux, soutien aux familles vieillissantes"
                ]
              }
            ]}
          />

          <HighlightBox label="La Spitex en institution — un partenaire souvent sous-utilisé" couleur="jaune">
            <Texte>La Spitex peut intervenir en institution pour compléter l&apos;offre de soins : injections, soins de plaies, surveillance médicale, bilans infirmiers. Ces interventions permettent souvent de <strong>maintenir une personne dans son institution d&apos;origine plus longtemps</strong>, en évitant un transfert vers un EMS parfois prématuré. Si votre institution n&apos;a pas encore de convention avec la Spitex locale, c&apos;est une question à soulever auprès de votre hiérarchie.</Texte>
          </HighlightBox>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Daniel, 68 ans — des soins que l&apos;équipe ne peut pas assurer</p>
              <p className="text-gray-700 text-sm leading-relaxed">Daniel a une lésion médullaire. Depuis quelques mois, il présente des plaies de pression qui nécessitent des soins infirmiers réguliers. L&apos;équipe éducative n&apos;a pas les compétences pour réaliser ces soins. La direction hésite à impliquer des partenaires externes, craignant de trop &quot;médicaliser&quot; l&apos;accompagnement.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quel argument pourriez-vous apporter pour qu&apos;un partenariat avec la Spitex soit envisagé, tout en respectant la vocation éducative de l&apos;institution ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Faire intervenir la Spitex pour les soins infirmiers spécifiques ne transforme pas l&apos;institution en EMS — cela lui permet de maintenir sa mission éducative en s&apos;appuyant sur des compétences complémentaires. C&apos;est précisément cette complémentarité qui permet à Daniel de rester dans son environnement familier, auprès des personnes qu&apos;il connaît depuis des années. Rester dans son institution est la meilleure chose pour Daniel — à condition que ses besoins soient correctement couverts.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Les transitions : le moment où le réseau est le plus important">
          <Texte>Il arrive un moment où l&apos;institution ne peut plus, seule, répondre aux besoins d&apos;une personne vieillissante. Une hospitalisation, un transfert vers un EMS, un changement de structure : ces transitions sont parmi les moments les plus délicats du parcours de vie d&apos;une personne en situation de handicap vieillissante.</Texte>

          <div className="bg-gray-50 rounded-xl p-6 my-6 border-l-4 border-[#3DBFA0]">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-3">Mise en situation</p>
            <p className="text-gray-700 leading-relaxed italic">Imaginez que vous avez vécu dans le même endroit depuis 30 ans. Vous connaissez chaque recoin, chaque visage, chaque bruit familier. Vous savez qu&apos;après le repas du midi il y a toujours une période de calme, que le mercredi c&apos;est la sortie au marché, que c&apos;est Fatima qui vous aide le matin et qu&apos;elle est douce. Tout cela structure votre monde et vous donne un sentiment de sécurité.</p>
            <p className="text-gray-700 leading-relaxed italic mt-3">Maintenant imaginez que tout cela disparaisse en quelques jours. Pour une personne avec des difficultés cognitives ou relationnelles, ce changement peut être profondément déstabilisant — particulièrement si la transition n&apos;a pas été préparée.</p>
          </div>

          <SchemaEtapes
            titre="Principes d'une transition préparée et digne"
            etapes={[
              { niveau: "Étape 1", nom: "Anticiper tôt", definition: "Idéalement plusieurs mois avant que la transition soit urgente — pas dans l'urgence d'une hospitalisation" },
              { niveau: "Étape 2", nom: "Introduire progressivement", definition: "Visites non médicalisées dans le futur lieu, en atmosphère détendue, pour se familiariser" },
              { niveau: "Étape 3", nom: "Préparer avec supports", definition: "Album photo du nouveau lieu, vidéo courte, rencontre avec des résidents de la structure d'accueil" },
              { niveau: "Étape 4", nom: "Maintenir le lien", definition: "Un professionnel connu accompagne lors du déménagement et maintient le contact dans les premières semaines" }
            ]}
            note="Ne pas couper les liens trop vite : des visites et des appels pendant quelques mois maintiennent une continuité relationnelle précieuse"
          />

          <HighlightBox label="La transition AI → AVS : une étape à anticiper" couleur="jaune">
            <Texte>Parmi les transitions importantes dans le parcours d&apos;une personne en situation de handicap vieillissante, celle des 65 ans est particulière : c&apos;est une transition administrative, souvent invisible, mais qui peut avoir des conséquences très concrètes. À 65 ans, les prestations AI s&apos;arrêtent. La personne passe du régime de l&apos;Assurance Invalidité — pensé pour développer les capacités et soutenir l&apos;autonomie — à celui de l&apos;Assurance Vieillesse et Survivants, conçu pour le maintien du revenu à la retraite. Ce changement de logique s&apos;accompagne d&apos;un changement d&apos;interlocuteurs administratifs : de l&apos;Office AI cantonal vers la caisse AVS compétente, et souvent un recalcul des droits aux prestations complémentaires.</Texte>
            <Texte>Pour la personne accompagnée, les effets concrets peuvent varier selon le canton et la situation individuelle : montant de la rente potentiellement différent, recalcul de la participation aux frais de séjour, changements dans certaines prestations disponibles. Ces modifications, même techniques, peuvent créer une inquiétude chez une personne qui perçoit que &quot;quelque chose change&quot; sans comprendre exactement quoi.</Texte>
            <Texte>En tant que professionnel de terrain, votre rôle n&apos;est pas d&apos;assurer le suivi administratif de cette transition — c&apos;est celui de la direction et des assistants sociaux. Mais vous pouvez être attentif à ses effets sur la personne : exprime-t-elle de l&apos;inquiétude autour de &quot;ses papiers&quot; ou de sa situation ? Perçoit-elle des changements sans pouvoir les nommer ? Lui proposer des explications simples — en FALC si nécessaire — fait partie de l&apos;accompagnement. Et alerter si quelque chose semble la perturber, c&apos;est votre rôle.</Texte>
          </HighlightBox>

          <HighlightBox label="Le document de transmission — la carte d'identité de la personne" couleur="bleu">
            <Texte>Lorsqu&apos;une personne change de structure — même temporairement pour une hospitalisation — son histoire ne doit pas rester dans la tête des professionnels qui la connaissent. Un bon document de transmission contient :</Texte>
            <Liste items={[
              "Informations d'identité et histoire institutionnelle, personnes de référence",
              "État fonctionnel actuel : ce que la personne fait seule, ce qui nécessite de l'aide",
              "Habitudes et préférences importantes : alimentation, rythmes, activités aimées, rituels, aversions",
              "Signaux d'alerte comportementaux : que signifie tel comportement, comment l'équipe y répond",
              "Informations médicales essentielles : traitements, allergies, précautions spécifiques",
              "Directives anticipées si elles existent"
            ]} />
          </HighlightBox>

          <PullQuote>
            Ce document doit accompagner la personne à chaque transition. Il est l&apos;une des plus grandes protections que vous pouvez offrir à quelqu&apos;un qui ne peut pas se présenter lui-même.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Accompagner le vieillissement en institution, c&apos;est un travail d&apos;équipe — et de réseau. Vous n&apos;êtes pas seul à décider, seul à observer, seul à agir. Vous êtes un maillon essentiel dans une chaîne qui protège la personne.</Texte>
          <Texte>Vos observations quotidiennes, partagées avec rigueur, transmises avec précision, sont irremplaçables. Elles sont ce que le système médical ne peut pas produire sans vous.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Partager une observation avec l'équipe est la première étape — avant d'appeler le médecin",
              "Si vous vous posez la question de savoir si c'est important, c'est que c'est important",
              "Une description factuelle (quoi, quand, depuis quand, par rapport à quoi) est plus utile qu'une interprétation",
              "Connaître les acteurs du réseau suisse romand vous permet de savoir vers qui orienter",
              "Le document de transmission protège la personne lors de chaque transition",
              "Travailler en réseau vous protège aussi — vous n'êtes plus seul à porter la responsabilité"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la première étape lorsque vous observez un changement inhabituel chez une personne accompagnée ?",
            reponses: [
              "Appeler immédiatement le médecin référent",
              "Attendre de voir si le changement persiste avant d'agir",
              "Partager l'observation avec l'équipe et la noter dans les transmissions",
              "En parler directement à la famille de la personne"
            ],
            bonneReponse: 2,
            explication: "Avant de solliciter un acteur externe, la première étape est interne : partager avec l'équipe pour valider l'observation et construire une tendance documentée. Une observation isolée peut être un incident. Plusieurs observations convergentes sur plusieurs jours constituent un signal qui mérite d'être transmis."
          },
          {
            question: "Parmi ces descriptions, laquelle est la plus utile à transmettre au médecin ?",
            reponses: [
              "\"Je pense que Sylvie fait une dépression, il faudrait changer son traitement.\"",
              "\"Sylvie n'est plus la même depuis quelque temps, quelque chose a changé.\"",
              "\"Depuis 3 semaines, Sylvie refuse de venir aux ateliers — elle y allait tous les jours. Elle mange moins et dit 'j'ai pas envie'. Ce comportement est nouveau pour elle.\"",
              "\"Sylvie devrait voir un spécialiste, elle ne répond plus bien aux activités.\""
            ],
            bonneReponse: 2,
            explication: "Une bonne transmission médicale décrit les faits (quoi), la durée (depuis quand), la fréquence, et l'écart avec le comportement habituel. Elle ne contient pas d'interprétation diagnostique ni de prescription. C'est le rôle du médecin d'interpréter — pas le vôtre."
          },
          {
            question: "Quel est le rôle de la Spitex en contexte institutionnel ?",
            reponses: [
              "Remplacer l'équipe éducative lors des congés et absences",
              "Assurer les soins infirmiers spécialisés que l'équipe éducative ne peut pas réaliser",
              "Évaluer si une personne doit être transférée en EMS",
              "Intervenir uniquement à domicile, jamais en institution"
            ],
            bonneReponse: 1,
            explication: "La Spitex peut intervenir en institution pour compléter l'offre de soins : injections, soins de plaies, bilans infirmiers. Ces interventions permettent souvent de maintenir une personne dans son institution d'origine plus longtemps, en évitant un transfert prématuré vers un EMS."
          },
          {
            question: "Pourquoi un document de transmission est-il important lors d'une hospitalisation d'urgence ?",
            reponses: [
              "Pour que l'hôpital puisse facturer correctement les prestations",
              "Parce que la loi suisse l'impose pour toute personne en situation de handicap",
              "Parce que la personne ne peut souvent pas se présenter elle-même et que les informations essentielles doivent être immédiatement disponibles",
              "Pour permettre à la famille d'être informée des décisions médicales"
            ],
            bonneReponse: 2,
            explication: "Lors d'une hospitalisation d'urgence, le personnel hospitalier a besoin immédiatement d'informations essentielles : allergies, médicaments, habitudes de communication, signaux comportementaux. Si ces informations ne sont pas dans un document accessible et à jour, la personne est vulnérable."
          },
          {
            question: "Quelle est la différence principale entre Pro Infirmis et Pro Senectute ?",
            reponses: [
              "Pro Infirmis est cantonale et Pro Senectute est nationale",
              "Pro Infirmis intervient dans le champ du handicap (droits, démarches sociales), Pro Senectute dans le champ de la vieillesse (aide, soutien aux aidants)",
              "Les deux organisations ont fusionné récemment",
              "Pro Infirmis s'occupe des enfants, Pro Senectute des adultes"
            ],
            bonneReponse: 1,
            explication: "Pro Infirmis est spécialisée dans le handicap : démarches sociales, défense des droits, soutien aux familles. Pro Senectute est spécialisée dans la vieillesse : aide à domicile, soutien aux aidants, activités sociales. Les deux peuvent être utiles pour une personne en situation de handicap vieillissante."
          },
          {
            question: "Vous avez 'un feeling' que quelque chose ne va pas, mais rien de concret à formuler. Que faites-vous ?",
            reponses: [
              "Vous ne dites rien — sans élément concret, vous risquez de vous tromper",
              "Vous appelez immédiatement le médecin pour lui faire part de votre impression",
              "Vous observez de manière plus structurée pendant quelques jours pour transformer votre impression en observation factualisable, puis vous partagez",
              "Vous notez \"impression que ça ne va pas\" dans le dossier et vous passez à autre chose"
            ],
            bonneReponse: 2,
            explication: "Une impression professionnelle est le point de départ d'une observation, pas son aboutissement. En cherchant à préciser ce qui vous dérange — est-il plus silencieux ? mange-t-il moins ? — vous transformez une intuition diffuse en observation transmissible. Si toute l'équipe partage cette impression, c'est déjà un signal collectif significatif."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
