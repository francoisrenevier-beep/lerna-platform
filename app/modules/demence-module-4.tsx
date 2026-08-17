import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4Demence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Démence : sensibilisation générale"
        titre="Communiquer entre professionnel·le·s :"
        titrePart2="ce que l'on voit, tel qu'on le voit"
        sousTitre="Chacun·e perçoit une partie de la réalité d'une personne. Partager ce que l'on observe (de façon factuelle, sans interprétation) est ce qui permet à l'équipe d'agir de façon cohérente et adaptée."
        duree="25 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="De quoi parle ce module">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre pourquoi la communication entre professionnel·le·s est centrale dans l'accompagnement de la démence",
              "Distinguer une observation objective d'une interprétation ou d'un jugement",
              "Formuler une transmission utile pour l'équipe",
              "Reconnaître la valeur de ce que vous observez, quel que soit votre secteur d'activité",
            ]} />
          </ConceptBox>
          <Texte>Dans l&apos;accompagnement des personnes atteintes de démence, plusieurs professionnel·le·s interviennent : parfois de secteurs très différents. Chacun·e voit la personne dans un contexte particulier, à un moment particulier. Seule, chaque observation est partielle. Ensemble, elles permettent de construire une image plus complète et de mieux soutenir la personne dans son quotidien.</Texte>
          <Texte>Ce module ne porte pas sur les décisions à prendre ni sur les rôles de chacun·e. Il porte sur <strong>la qualité de ce qui est partagé</strong> entre collègues et équipes.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Chaque professionnel·le a une vue partielle : et c'est normal">
          <Texte>Une personne atteinte de démence n&apos;est jamais observée de la même façon par tout le monde. Elle se comporte différemment selon les moments de la journée, selon les personnes présentes, selon les activités. Ce n&apos;est pas une incohérence, c&apos;est la réalité de la démence.</Texte>

          <HighlightBox label="Des regards différents sur la même personne" couleur="bleu">
            <Texte>L&apos;infirmier·ère de nuit sait comment Monsieur D. dort et s&apos;il se lève. L&apos;animatrice sait comment il réagit dans un groupe. La personne qui prépare les repas sait ce qu&apos;il mange vraiment. Le membre du pool qui l&apos;a accompagné le week-end a vu comment il était dimanche matin.</Texte>
            <Texte>Aucun de ces regards n&apos;est plus légitime que les autres. Tous ensemble, ils permettent de comprendre comment Monsieur D. va, vraiment, et d&apos;ajuster l&apos;accompagnement en conséquence.</Texte>
          </HighlightBox>

          <Texte>Ce qui relie ces regards partiels, c&apos;est la communication entre professionnel·le·s. Quand elle fonctionne bien (quand ce qui est observé est partagé, de façon précise et sans filtre interprétatif), l&apos;équipe dispose d&apos;une base solide pour accompagner. Quand elle est défaillante, chacun·e travaille dans son coin avec une image fragmentée.</Texte>

          <PullQuote>
            Ce n&apos;est pas ce que vous savez faire qui détermine la valeur de ce que vous observez. C&apos;est la précision avec laquelle vous le partagez avec l&apos;équipe.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La différence entre observer et interpréter">
          <Texte>C&apos;est le point central de ce module. Une observation factuelle et une interprétation ne sont pas la même chose, et les confondre dans une transmission a des conséquences réelles sur l&apos;équipe qui la reçoit.</Texte>

          <Texte>Une observation décrit ce qui est visible, audible, mesurable. Une interprétation explique pourquoi, et cette explication peut être fausse, partielle, ou teintée d&apos;un a priori.</Texte>

          <div className="space-y-4 my-6">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Exemple 1 : Comportement alimentaire</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-4">
                  <p className="text-xs font-semibold text-red-600 mb-2">❌ Interprétation</p>
                  <p className="text-sm text-gray-700 italic">«Elle ne mange plus, elle déprime.»</p>
                  <p className="text-xs text-gray-400 mt-2">La cause est supposée, pas observée.</p>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#15803D] mb-2">✓ Observation objective</p>
                  <p className="text-sm text-gray-700 italic">«Depuis lundi, elle laisse plus de la moitié de son assiette à chaque repas. Elle ne l&apos;a pas signalé elle-même.»</p>
                  <p className="text-xs text-gray-400 mt-2">Faits précis, datés, observables.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Exemple 2 : Comportement physique</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-4">
                  <p className="text-xs font-semibold text-red-600 mb-2">❌ Jugement</p>
                  <p className="text-sm text-gray-700 italic">«Monsieur T. fait sa difficile avec les soins du matin.»</p>
                  <p className="text-xs text-gray-400 mt-2">Cela dit quelque chose sur le comportement mais pas sur ce qui se passe.</p>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#15803D] mb-2">✓ Observation objective</p>
                  <p className="text-sm text-gray-700 italic">«Depuis mercredi, il grimace et détourne le bras quand on l&apos;aide à se lever. Ce n&apos;est pas habituel.»</p>
                  <p className="text-xs text-gray-400 mt-2">Le changement est décrit ; la cause reste ouverte à évaluation.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Exemple 3 : Humeur et comportement</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-4">
                  <p className="text-xs font-semibold text-red-600 mb-2">❌ Vague</p>
                  <p className="text-sm text-gray-700 italic">«Elle n&apos;est pas bien en ce moment.»</p>
                  <p className="text-xs text-gray-400 mt-2">Impossible d&apos;agir sur cette base.</p>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#15803D] mb-2">✓ Observation objective</p>
                  <p className="text-sm text-gray-700 italic">«Depuis lundi, elle répond peu quand on lui parle et n&apos;a pas participé à l&apos;activité du mardi, alors qu&apos;elle le fait habituellement.»</p>
                  <p className="text-xs text-gray-400 mt-2">Comparaison avec l&apos;état habituel, éléments concrets.</p>
                </div>
              </div>
            </div>
          </div>

          <HighlightBox label="Pourquoi cette distinction est importante" couleur="jaune">
            <Texte>Une interprétation transmise comme un fait peut orienter l&apos;évaluation d&apos;un·e collègue dans une direction qui n&apos;est peut-être pas la bonne. Si vous dites «elle déprime», les personnes qui reçoivent cette information commencent peut-être à chercher une cause psychologique, alors que la vraie raison est une douleur physique non identifiée.</Texte>
            <Texte>Les observations factuelles laissent le champ ouvert. Elles donnent à l&apos;équipe les éléments bruts à partir desquels construire une évaluation juste, sans a priori, sans filtres.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Transmettre : à qui, quand, comment">
          <Texte>La transmission utile est celle qui arrive à la bonne personne, au bon moment, sous une forme utilisable. Voici trois questions simples pour guider la décision.</Texte>

          <div className="space-y-3 my-4">
            <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-xl p-5">
              <p className="text-sm font-bold text-[#5B21B6] mb-2">À qui ?</p>
              <p className="text-sm text-gray-700 leading-relaxed">Aux professionnel·le·s concerné·e·s dans votre contexte, équipe soignante, référent·e, responsable, selon les structures de votre institution. Pas besoin de savoir exactement à qui : si vous ne savez pas, adressez-vous à votre supérieur·e direct·e ou à l&apos;infirmier·ère disponible.</p>
            </div>
            <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-xl p-5">
              <p className="text-sm font-bold text-[#5B21B6] mb-2">Quand ?</p>
              <p className="text-sm text-gray-700 leading-relaxed">Dès que vous observez quelque chose d&apos;inhabituel. Pas en attendant la prochaine réunion d&apos;équipe, pas «si ça continue». Dans la démence, les changements peuvent évoluer vite. Un changement brusque mérite une transmission rapide. Un changement plus progressif peut aller dans le cahier de transmissions, mais sans attendre plusieurs jours.</p>
            </div>
            <div className="bg-[#F5F3FF] border border-[#DDD6FE] rounded-xl p-5">
              <p className="text-sm font-bold text-[#5B21B6] mb-2">Comment ?</p>
              <p className="text-sm text-gray-700 leading-relaxed">En décrivant ce que vous avez observé, quand, et en quoi c&apos;est différent de l&apos;habituel. Sans diagnostic, sans conclusion. La structure est simple : <em>«J&apos;ai remarqué que [fait observé], depuis [quand], et c&apos;est inhabituel parce que [comparaison avec l&apos;état de base].»</em></p>
            </div>
          </div>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Mise en pratique</p>
              <p className="text-gray-700 text-sm leading-relaxed">Monsieur L. vous dit depuis deux jours qu&apos;il a «quelque chose qui tire» dans le bas du dos quand il se lève. Vous n&apos;êtes pas soignant·e.</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Formulation adaptée</p>
              <p className="text-gray-700 text-sm italic leading-relaxed">«Monsieur L. m&apos;a dit hier et aujourd&apos;hui qu&apos;il a une douleur dans le bas du dos quand il se lève. Il ne l&apos;a pas signalé lui-même à l&apos;équipe soignante à ma connaissance.»</p>
              <p className="text-gray-700 text-sm leading-relaxed mt-2">Ni diagnostic, ni conclusion, ni jugement. Des faits, datés, transmis aux personnes concernées. C&apos;est suffisant, et c&apos;est précieux pour l&apos;équipe.</p>
            </div>
          </div>

          <HighlightBox label="Dans le doute, on transmet" couleur="bleu">
            <Texte>La crainte de «signaler pour rien» est normale. Mais dans l&apos;accompagnement de la démence, une transmission inutile ne coûte pas grand-chose. Un changement qui passe sous le radar peut coûter beaucoup à la personne. Ce n&apos;est pas à vous de trancher si c&apos;est important. C&apos;est à vous de partager ce que vous avez observé.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Ce que la communication entre équipes change : concrètement">
          <Texte>La qualité de la communication professionnelle a un impact direct sur la qualité de l&apos;accompagnement. Ce ne sont pas des généralités, voici trois exemples concrets de ce qui se passe quand les observations circulent bien dans une équipe.</Texte>

          <div className="space-y-3 my-4">
            <div className="flex gap-4 items-start border border-gray-200 rounded-xl p-4">
              <span className="text-xl flex-shrink-0 mt-0.5">→</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Un comportement est mieux compris</p>
                <p className="text-sm text-gray-600 leading-relaxed">Monsieur T. est agité chaque après-midi depuis mercredi. L&apos;équipe cherche pourquoi. La personne qui l&apos;a accompagné mercredi matin signale qu&apos;il a glissé dans la douche et s&apos;est rattrapé au mur. Sans cette information, l&apos;agitation est attribuée à «sa démence». Avec elle, l&apos;équipe suspecte une douleur physique et demande une évaluation.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-gray-200 rounded-xl p-4">
              <span className="text-xl flex-shrink-0 mt-0.5">→</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Un changement est détecté à temps</p>
                <p className="text-sm text-gray-600 leading-relaxed">Madame R. a toujours participé à l&apos;atelier du mardi. Depuis deux semaines, elle refuse. L&apos;animatrice le signale à l&apos;équipe soignante. Une évaluation révèle un début d&apos;infection urinaire, fréquente dans la démence, et qui peut se manifester d&apos;abord par un changement comportemental. Le traitement est mis en place rapidement.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-gray-200 rounded-xl p-4">
              <span className="text-xl flex-shrink-0 mt-0.5">→</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">L&apos;équipe agit de façon cohérente</p>
                <p className="text-sm text-gray-600 leading-relaxed">Plusieurs professionnel·le·s remarquent que Monsieur D. est plus calme quand on lui parle avec une voix douce et lente. Cette observation, une fois partagée et intégrée dans les transmissions, devient une pratique commune. Chacun·e adopte cette approche, et les situations d&apos;agitation se raréfient.</p>
              </div>
            </div>
          </div>

          <PullQuote>
            Une équipe bien informée n&apos;est pas une équipe qui sait tout. C&apos;est une équipe où ce que chacun·e observe est partagé sans filtre, et peut être utile à quelqu&apos;un d&apos;autre.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Synthèse de la formation" titre="Les 5 idées essentielles à emporter">
          <HighlightBox label="Ce que cette formation a posé" couleur="vert">
            <Liste items={[
              "La démence touche ~161'100 personnes en Suisse, en forte hausse. Ce n'est ni de la folie, ni une étape normale du vieillissement.",
              "La conscience et les émotions restent. Derrière chaque comportement difficile, il y a un besoin à identifier.",
              "Une posture calme, des mots simples, les routines préservées et le non-verbal soigné font une différence réelle au quotidien.",
              "Tout comportement inhabituel est une tentative de communication, cherchez le besoin avant d'agir sur le comportement.",
              "Partager ce que vous observez (de façon factuelle, sans interprétation) permet à l'équipe d'agir de façon cohérente et adaptée.",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Plusieurs professionnel·le·s observent une personne atteinte de démence dans des contextes différents. Pourquoi cette multiplicité de regards est-elle utile ?",
            reponses: [
              "Pour s'assurer que les informations importantes sont confirmées par plusieurs sources avant d'agir",
              "Parce que la personne se comporte différemment selon les contextes, chaque regard partiel contribue à une image plus complète",
              "Pour que l'équipe soignante puisse déléguer l'observation aux autres professionnel·le·s",
              "Parce que la démence affecte la personne de façon homogène dans tous les contextes",
            ],
            bonneReponse: 1,
            explication: "La démence peut se manifester différemment selon les moments, les personnes présentes et les activités. L'animatrice voit quelque chose que l'infirmière de nuit ne verra pas, et réciproquement. Ce n'est pas une redondance, c'est une complémentarité. La communication entre professionnel·le·s permet de relier ces vues partielles pour construire une image cohérente de comment la personne va réellement.",
          },
          {
            question: "Une collègue transmet : «Madame K. est anxieuse depuis hier.» Quelle limite présente cette formulation ?",
            reponses: [
              "Elle est trop courte, une transmission utile doit toujours comporter au moins cinq éléments",
              "«Anxieuse» est une interprétation qui peut orienter à tort l'évaluation, ce qui a été observé concrètement n'est pas décrit",
              "Elle ne précise pas le secteur d'activité de la collègue qui transmet",
              "Elle n'indique pas si Madame K. a été informée de la transmission",
            ],
            bonneReponse: 1,
            explication: "«Anxieuse» est une interprétation d'un état intérieur, pas une description d'un comportement observable. L'équipe qui reçoit cette information ne sait pas ce qui a réellement été observé : la personne ne mangeait plus ? elle marchait dans les couloirs ? elle pleurait ? elle répétait la même phrase ? Ces éléments sont ceux qui permettent une évaluation juste, pas une étiquette affective.",
          },
          {
            question: "Vous travaillez dans la cuisine d'un EMS. Vous remarquez que Madame L. laisse systématiquement son assiette à moitié pleine depuis lundi, alors qu'elle mangeait bien avant. Que faites-vous ?",
            reponses: [
              "Vous le signalez à l'équipe soignante en décrivant ce que vous avez observé, depuis quand, et en quoi c'est différent de l'habituel",
              "Vous adaptez les portions pour qu'elle n'ait pas l'air de ne pas manger",
              "Vous attendez que ça dure une semaine pour être sûr·e que c'est un vrai changement",
              "Vous en parlez à la famille lors de la prochaine visite pour avoir leur avis",
            ],
            bonneReponse: 0,
            explication: "L'observation d'un changement dans les habitudes alimentaires, même faite par quelqu'un qui n'est pas soignant·e, est une information précieuse pour l'équipe. La transmettre de façon factuelle (depuis quand, à quels repas, en quoi c'est différent de l'habituel) permet aux personnes concernées de l'évaluer. Attendre, adapter les portions ou contourner ne remplace pas la transmission.",
          },
          {
            question: "Quelle formulation est la plus utile pour une équipe soignante qui reçoit une transmission ?",
            reponses: [
              "«Monsieur P. n'est vraiment pas bien depuis quelques jours, vous devriez aller le voir.»",
              "«Je pense que Monsieur P. a besoin d'un ajustement de son traitement, il est très agité.»",
              "«Depuis mardi, Monsieur P. est agité entre 15h et 17h, il marche dans les couloirs et répète «je veux partir». Ce comportement est nouveau pour lui.»",
              "«Monsieur P. fait une crise en ce moment, c'est urgent.»",
            ],
            bonneReponse: 2,
            explication: "La troisième formulation est immédiatement exploitable : elle décrit un comportement précis (agitation, déambulation, paroles répétées), un moment (depuis mardi, entre 15h et 17h), et une comparaison avec l'état habituel (comportement nouveau). Les autres options contiennent des jugements («n'est pas bien»), des conclusions diagnostiques («ajustement de traitement») ou des évaluations de gravité («c'est urgent») qui ne sont pas de la compétence de la personne qui transmet.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
