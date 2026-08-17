import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module2Demence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Démence : sensibilisation générale"
        titre="Qu'est-ce que la démence,"
        titrePart2="concrètement ?"
        sousTitre="Ce qui se passe dans le cerveau, les principales formes, et surtout : ce que la personne vit de l'intérieur. Comprendre l'expérience vécue change radicalement l'accompagnement."
        duree="30 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Comprendre pour mieux accompagner">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Définir ce qu'est (et ce que n'est pas) la démence avec des mots simples",
              "Distinguer le vieillissement normal d'un trouble pathologique avec des exemples concrets",
              "Nommer les quatre principales formes de démence et leurs caractéristiques de base",
              "Décrire ce que la personne atteinte vit de l'intérieur, émotions, perceptions, besoins",
              "Appliquer le repère essentiel : reconnaître des signes n'est pas diagnostiquer",
            ]} />
          </ConceptBox>
          <Texte>Comprendre la démence de l&apos;intérieur, ce qui se passe dans le cerveau, ce que la personne ressent, ce qu&apos;elle traverse, est le fondement de tout accompagnement juste. Sans cette compréhension, les comportements semblent inexplicables, voire perturbants. Avec elle, ils deviennent lisibles.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Ce qui se passe dans le cerveau : une définition simple">
          <HighlightBox label="Définition : OMS" couleur="bleu">
            <Texte>La démence est un <strong>terme générique</strong> qui regroupe plusieurs maladies du cerveau. Ces maladies détruisent peu à peu les cellules nerveuses (neurones), entraînant un déclin progressif et irréversible de plusieurs capacités cognitives.</Texte>
          </HighlightBox>

          <Texte>Pour comprendre ce que cela signifie concrètement, imaginez le cerveau comme un réseau de routes très complexe. Chaque route relie deux zones et permet à l&apos;information de circuler : vous voyez une personne, vous reconnaissez son visage, vous retrouvez son prénom, vous formulez une phrase de salutation. Tout cela implique de multiples connexions.</Texte>
          <Texte>Dans les maladies démentielles, certaines de ces routes se dégradent progressivement, puis se ferment. Le trafic ne peut plus passer normalement. Selon quelles routes sont touchées en premier, les symptômes sont différents, et c&apos;est ce qui explique la diversité des formes de démence.</Texte>

          <SchemaEtapes
            titre="Les capacités touchées progressivement"
            etapes={[
              {
                niveau: "Mémoire",
                nom: "Surtout les événements récents, au début",
                definition: "La personne oublie des conversations qui ont eu lieu le matin même, ne se souvient pas d'avoir pris son repas, redemande la même chose à intervalles rapprochés. Les souvenirs anciens (l'enfance, le travail, les personnes chères) restent souvent accessibles bien plus longtemps."
              },
              {
                niveau: "Orientation",
                nom: "Dans le temps et dans l'espace",
                definition: "Ne plus savoir quel jour on est, quelle saison, quelle année. Se perdre dans un lieu pourtant familier, son propre domicile, les couloirs de l'institution. Ces désorientation peuvent provoquer une angoisse intense."
              },
              {
                niveau: "Langage",
                nom: "Trouver ses mots, comprendre, s'exprimer",
                definition: "Difficulté à trouver le bon mot («le truc pour ouvrir la porte» au lieu de «la clé»), à terminer ses phrases, à suivre une conversation rapide. Dans les stades avancés, la communication verbale peut devenir très limitée."
              },
              {
                niveau: "Raisonnement",
                nom: "Planifier, décider, évaluer",
                definition: "Difficultés à gérer les tâches complexes : préparer un repas (qui implique plusieurs étapes à coordonner), gérer des papiers administratifs, évaluer un risque. Les tâches habituelles peuvent devenir inexécutables."
              },
            ]}
            note="L'OMS précise un point crucial : la conscience de la personne n'est pas affectée. Elle reste pleinement une personne, avec ses émotions et sa sensibilité. C'est ce qui rend la démence à la fois difficile à vivre de l'intérieur, et riche de possibilités d'accompagnement."
          />

          <HighlightBox label="Repère LEARNA : observer vs diagnostiquer" couleur="jaune">
            <Texte>Reconnaître des signes observables est une compétence professionnelle précieuse. <strong>Poser un diagnostic est une compétence médicale strictement réservée au médecin.</strong> La distinction est fondamentale et définit le rôle de chacun.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Vieillissement normal ou signe d'alerte ?">
          <Texte>C&apos;est l&apos;une des questions les plus fréquentes dans les équipes professionnelles et dans les familles : comment distinguer ce qui relève du vieillissement normal de ce qui mérite une attention particulière ?</Texte>
          <Texte>Ce tableau aide à comprendre la différence. Il n&apos;est <strong>pas un outil de dépistage</strong>, il aide à comprendre la ligne de démarcation. Tout doute se transmet aux professionnels de santé compétents.</Texte>

          <TableauComparaison
            titre="Distinguer le normal du pathologique"
            colonnes={[
              {
                titre: "Vieillissement normal",
                contenu: [
                  "Oublier parfois un prénom, puis s'en souvenir quelques instants plus tard",
                  "Chercher ses mots occasionnellement, surtout sous fatigue ou stress",
                  "Se tromper de jour, puis se corriger spontanément",
                  "Ranger un objet au mauvais endroit par inattention et le retrouver",
                  "Ralentissement général des apprentissages nouveaux",
                  "Être moins alerte en soirée qu'en matinée",
                ]
              },
              {
                titre: "Signe pouvant évoquer une démence",
                contenu: [
                  "Oublier des événements récents entiers, de façon répétée, sans s'en souvenir plus tard",
                  "Perdre le fil d'une conversation, ne plus trouver des mots simples et courants",
                  "Être désorienté·e dans un lieu familier, ne pas savoir quel mois ou quelle année on est",
                  "Égarer des objets et ne plus pouvoir reconstituer ses déplacements pour les retrouver",
                  "Incapacité à réaliser des tâches pourtant habituelles et familières",
                  "Changements durables d'humeur, de personnalité ou de comportement",
                ]
              }
            ]}
          />

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation, réflexion</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Monsieur A., 78 ans</p>
              <p className="text-gray-700 text-sm leading-relaxed">Monsieur A. oublie parfois le prénom des nouveaux membres du personnel. Il doit parfois relire les instructions écrites pour une activité nouvelle. Mais quand il parle de sa vie passée, il est précis, vivace, plein d&apos;humour. Quand vous lui demandez comment il va, il répond avec pertinence. Il se souvient du repas de la veille.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">En vous appuyant sur le tableau, comment qualifieriez-vous la situation de Monsieur A. ? Qu&apos;est-ce qui oriente votre lecture ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Les oublis de Monsieur A. sont compatibles avec un vieillissement normal : ils concernent des informations nouvelles et récentes (les noms du nouveau personnel), et non des événements importants de sa vie quotidienne. Sa mémoire des événements récents (repas de la veille) est préservée. Son discours est cohérent et pertinent. Rien dans ce tableau ne nécessite une transmission urgente, mais rester attentif à l&apos;évolution dans le temps reste toujours pertinent.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les principales formes : repères accessibles">
          <Texte>D&apos;après l&apos;OMS, les frontières entre formes de démence ne sont pas nettes et les <strong>formes mixtes sont fréquentes</strong>. Ces repères aident à comprendre sans prétendre à l&apos;exhaustivité médicale, le diagnostic précis relève toujours du spécialiste.</Texte>

          <div className="space-y-4 my-6">
            <div className="border border-[#BFDBFE] bg-[#EFF6FF] rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="bg-[#1D4ED8] text-white text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5">60–70 %</div>
                <div>
                  <p className="text-sm font-bold text-[#1D4ED8] mb-2">Maladie d&apos;Alzheimer, la plus fréquente</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">Environ 60 % des cas en Suisse selon l&apos;OFSP. Débute typiquement par des <strong>troubles de la mémoire récente</strong> : la personne oublie des événements récents mais ses souvenirs anciens restent longtemps préservés. Puis d&apos;autres capacités s&apos;altèrent progressivement.</p>
                  <p className="text-gray-700 text-sm leading-relaxed"><em>Évolution :</em> lente et progressive, sur plusieurs années. La personne passe par des phases où elle est consciente de ses difficultés (ce qui peut provoquer anxiété et tristesse) puis, à mesure que la maladie avance, cette conscience s&apos;estompe.</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Démence vasculaire</p>
              <p className="text-gray-700 text-sm leading-relaxed">Liée à des problèmes d&apos;irrigation du cerveau, micro-infarctus répétés ou accident vasculaire cérébral. Les symptômes peuvent apparaître de façon soudaine (après un AVC) ou s&apos;installer progressivement. Les capacités de raisonnement et de planification sont souvent touchées en premier, parfois avant la mémoire. La progression peut se faire par <em>paliers</em> plutôt que de façon continue.</p>
            </div>

            <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Démence à corps de Lewy</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">Caractérisée par des <strong>fluctuations marquées</strong> de la vigilance et des capacités cognitives, la personne peut paraître très présente à certains moments, et très confuse à d&apos;autres dans la même journée. On peut observer des troubles du mouvement proches de Parkinson (rigidité, lenteur), et parfois des <strong>hallucinations visuelles</strong> (la personne «voit» des personnes ou des animaux qui ne sont pas là).</p>
              <p className="text-gray-700 text-sm leading-relaxed"><em>Important :</em> ces hallucinations ne sont pas une «invention» volontaire. Elles sont réelles pour la personne. La réaction juste n&apos;est pas de les nier frontalement.</p>
            </div>

            <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Démence fronto-temporale</p>
              <p className="text-gray-700 text-sm leading-relaxed">Touche les lobes frontaux et temporaux du cerveau, qui gèrent le comportement social, le langage et la personnalité. Peut débuter dès 50–60 ans, souvent plus tôt qu&apos;Alzheimer. Les <strong>changements de comportement sont souvent au premier plan</strong> : désinhibition, impulsivité, perte d&apos;empathie, comportements inappropriés socialement. La mémoire peut être longtemps relativement préservée, ce qui rend le diagnostic difficile et retardé.</p>
            </div>
          </div>

          <HighlightBox label="Les formes mixtes : la réalité la plus fréquente" couleur="jaune">
            <Texte>Dans la pratique clinique, les formes pures sont moins fréquentes que les formes mixtes, notamment la combinaison Alzheimer + vasculaire. C&apos;est pourquoi les symptômes d&apos;une même personne peuvent ne pas correspondre parfaitement à un seul tableau clinique. L&apos;important n&apos;est pas de «deviner» la forme, c&apos;est le rôle du médecin, mais de bien observer et de transmettre.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Ce que la personne vit de l'intérieur">
          <Texte>C&apos;est la section la plus importante de ce module pour la pratique professionnelle. Comprendre l&apos;expérience vécue de l&apos;intérieur change radicalement la façon d&apos;accompagner.</Texte>

          <HighlightBox label="Un monde qui devient imprévisible" couleur="bleu">
            <Texte>Imaginez que vous vous réveillez un matin dans un lieu qui vous est vaguement familier, mais dont vous ne savez plus exactement où il se situe. Vous ne savez pas quel jour on est, ni tout à fait l&apos;heure. Les personnes autour de vous attendent que vous fassiez des choses, mais vous ne comprenez pas toujours ce qui est attendu.</Texte>
            <Texte>C&apos;est une approximation de ce que peut vivre une personne atteinte de démence à un stade modéré. Le monde est devenu <strong>imprévisible et difficile à déchiffrer</strong>. Les repères habituels (temps, espace, personnes) ne fonctionnent plus de façon fiable.</Texte>
          </HighlightBox>

          <Texte>Face à ce monde devenu imprévisible, la personne développe des stratégies, souvent inconscientes, pour naviguer. Elle peut chercher des repères rassurants, poser les mêmes questions (pour se rassurer, pas par oubli pur), s&apos;agiter quand quelque chose la perturbe, refuser ce qu&apos;elle ne comprend pas.</Texte>

          <HighlightBox label="Des émotions fortes et réelles" couleur="jaune">
            <Liste items={[
              "L'anxiété est très fréquente : ne pas savoir où on est, ce qui va se passer, si on est en sécurité",
              "La tristesse face aux pertes ressenties, même quand les mots pour les nommer manquent",
              "La frustration quand on n'arrive plus à exprimer ce qu'on veut dire",
              "La colère, qui peut être une réaction à une situation incomprise ou à une atteinte à la dignité",
              "La joie, l'affection, la reconnaissance, qui restent accessibles et réelles très longtemps",
            ]} />
          </HighlightBox>

          <PullQuote source="OMS : Aide-mémoire Démence, 2025">
            Les changements d&apos;humeur et de comportement précèdent parfois les troubles de mémoire, et ils restent présents tout au long de la maladie.
          </PullQuote>

          <Texte>L&apos;un des messages les plus importants de toute la recherche sur la démence est celui-ci : <strong>les émotions persistent après que les mots ont disparu</strong>. Une personne qui ne peut plus vous dire qu&apos;elle est heureuse peut néanmoins vous sourire. Une personne qui ne peut plus nommer sa peur peut néanmoins la vivre intensément. Le lien émotionnel reste possible, et il est thérapeutique.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Madame B., 84 ans, maladie d&apos;Alzheimer à un stade avancé</p>
              <p className="text-gray-700 text-sm leading-relaxed">Madame B. ne parle presque plus. Elle ne reconnaît plus les membres de sa famille. Lors des repas, elle semble absente. Mais chaque après-midi, quand un membre du personnel préféré entre dans la chambre en lui disant bonjour avec un sourire chaleureux, son visage s&apos;éclaire. Elle tend parfois la main.</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Ce que cela nous dit</p>
              <p className="text-gray-700 text-sm leading-relaxed">Madame B. ne peut plus accéder aux mots ni aux souvenirs. Mais elle perçoit encore l&apos;émotion qui lui est adressée. La chaleur, le sourire, la présence bienveillante : tout cela passe et touche. Le lien est encore là, sous une autre forme. C&apos;est précisément pourquoi la qualité du non-verbal (ton de voix, regard, geste doux) est si déterminante dans l&apos;accompagnement des démences avancées.</p>
            </div>
          </div>

          <PullQuote>
            Derrière chaque comportement, il y a une personne qui cherche à se repérer et à se sentir en sécurité.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "La démence est un terme générique : plusieurs maladies, pas une seule",
              "Ce qui distingue vieillissement normal et démence : la répétition, l'intensité, l'impact sur l'autonomie",
              "Alzheimer représente 60–70 % des cas ; les formes mixtes sont fréquentes",
              "Observer des signes ≠ diagnostiquer : le diagnostic relève toujours du médecin",
              "La conscience et les émotions ne disparaissent pas avec la mémoire",
              "Le lien émotionnel reste possible même aux stades avancés, c'est un levier thérapeutique réel",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Madame G., 77 ans, oublie parfois le prénom de sa petite-fille lors des visites, mais le retrouve quelques secondes plus tard. Elle se rappelle en revanche très bien du repas d'hier, de l'heure de l'activité et des événements de la semaine. Son comportement est :",
            reponses: [
              "Probablement compatible avec un vieillissement normal, retrouver le mot après un délai est rassurant",
              "Un signe précoce d'Alzheimer à surveiller de près, car les prénoms sont normalement bien conservés",
              "Caractéristique d'une démence vasculaire débutante, qui touche d'abord les noms propres",
              "Un signe inquiétant car à 77 ans, les oublis de prénoms ne sont plus normaux",
            ],
            bonneReponse: 0,
            explication: "Ce qui distingue le vieillissement normal de la démence, c'est moins l'oubli lui-même que sa nature : chercher un prénom et le retrouver spontanément est banal et bénin. Ce qui serait préoccupant : oublier des événements entiers sans les retrouver, se désorientater dans des lieux familiers, ou ne plus pouvoir réaliser des tâches habituelles. Ici, la mémoire des événements récents (repas, programme) est préservée : signe rassurant.",
          },
          {
            question: "Une résidente décrit chaque soir des personnages qui marchent dans sa chambre. Elle semble effrayée. Quelle est la réponse la plus adaptée ?",
            reponses: [
              "Lui expliquer calmement et avec douceur qu'il n'y a personne, la réassurer par les faits",
              "Accueillir sa peur, rester présent·e, et signaler ce symptôme nouveau à l'équipe soignante",
              "Allumer toutes les lumières pour lui montrer que la chambre est vide",
              "Ne pas répondre à ces descriptions pour ne pas les renforcer",
            ],
            bonneReponse: 1,
            explication: "Dans certaines démences (notamment à corps de Lewy), les hallucinations visuelles sont un symptôme réel : la personne voit réellement ces personnages. Nier les faits («il n'y a personne») peut aggraver son angoisse car elle se sent incomprise. L'attitude juste : accueillir la peur («je vois que vous avez peur, je suis là»), rassurer par la présence, et signaler ce symptôme nouveau à l'équipe soignante qui évaluera s'il s'agit d'un changement à investiguer.",
          },
          {
            question: "Quelle forme de démence peut débuter principalement par des changements de comportement et de personnalité, avant même les troubles de mémoire ?",
            reponses: [
              "La maladie d'Alzheimer, dans sa forme typique",
              "La démence vasculaire, surtout après un AVC",
              "La démence fronto-temporale, qui touche d'abord les lobes frontaux",
              "La démence à corps de Lewy, liée aux fluctuations de vigilance",
            ],
            bonneReponse: 2,
            explication: "La démence fronto-temporale touche les lobes frontaux et temporaux, qui gèrent le comportement social et la personnalité. Elle peut se manifester d'abord par de la désinhibition, de l'impulsivité, une perte d'empathie ou des comportements socialement inappropriés, alors que la mémoire reste relativement préservée. Cela rend le diagnostic difficile et souvent retardé, car ni l'entourage ni les médecins ne pensent d'emblée à une démence.",
          },
          {
            question: "Madame B. ne reconnaît plus les visages, ne parle presque plus, et semble absente. Pourtant, elle sourit et tend la main quand un soignant qu'elle apprécie entre dans la chambre. Qu'est-ce que cela nous apprend ?",
            reponses: [
              "Qu'elle reconnaît probablement encore les visages malgré les apparences",
              "Que c'est un comportement réflexe automatique, sans signification affective réelle",
              "Que le lien émotionnel et la perception de la bienveillance persistent au-delà des capacités cognitives",
              "Que son diagnostic de démence sévère est probablement inexact",
            ],
            bonneReponse: 2,
            explication: "La situation de Madame B. illustre un phénomène documenté : les émotions et la perception affective persistent souvent bien au-delà du déclin des capacités cognitives. Elle ne reconnaît pas le visage au sens intellectuel, mais elle perçoit la chaleur, la présence bienveillante, la sécurité que cette personne lui apporte. Ce lien émotionnel est réel et c'est un levier thérapeutique concret, il justifie l'attention portée au ton de voix, au regard, à la façon d'entrer dans une chambre.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
