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
        titre="Communiquer et transmettre :"
        titrePart2="le maillon qui change tout"
        sousTitre="La personne atteinte de démence ne peut pas toujours dire ce qu'elle ressent. Chaque observation transmise — par n'importe qui — peut changer le cours de ce qu'elle vit."
        duree="25 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi ce module existe">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre pourquoi la transmission d'information est un acte de soin à part entière",
              "Distinguer une observation factuelle d'une interprétation ou d'un jugement",
              "Reconnaître la valeur de vos observations, quel que soit votre rôle ou votre secteur",
              "Identifier à qui et comment transmettre ce que vous observez",
            ]} />
          </ConceptBox>
          <Texte>Ce module ne vous dira pas comment faire votre métier. Il pose une question simple : quand vous remarquez quelque chose qui semble inhabituel chez une personne atteinte de démence — est-ce que vous le dites ? Et si oui, comment ?</Texte>
          <Texte>Ces deux questions sont au cœur de ce que ce module veut explorer.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La personne atteinte de démence a besoin que vous parliez pour elle">
          <Texte>Une personne atteinte de démence perd progressivement la capacité d&apos;articuler ce qu&apos;elle ressent, ce qu&apos;elle perçoit, ce qui lui fait mal ou ce qui la perturbe. Elle peut ne plus trouver les mots pour dire qu&apos;elle a mal. Elle peut ne pas savoir qu&apos;elle doit signaler quelque chose. Elle peut avoir signalé une chose à une personne — et ne pas se souvenir de l&apos;avoir dit.</Texte>

          <HighlightBox label="Un déficit de voix" couleur="bleu">
            <Texte>Là où une personne sans démence peut dire «j&apos;ai mal au dos depuis hier» ou «je n&apos;ai pas dormi depuis trois nuits», une personne atteinte de démence peut exprimer ces mêmes réalités par des comportements : agitation, refus, repli, cris. Ou ne pas les exprimer du tout.</Texte>
            <Texte>Ce sont les personnes qui l&apos;entourent qui deviennent ses yeux et sa voix. Pas parce qu&apos;elles le décident, mais parce que c&apos;est structurellement ce qui se passe. <strong>Chaque personne en contact avec elle est un capteur d&apos;information que personne d&apos;autre n&apos;a.</strong></Texte>
          </HighlightBox>

          <Texte>Cela vaut quel que soit votre secteur d&apos;activité, quel que soit votre poste, quel que soit le temps que vous passez auprès d&apos;elle. L&apos;agent d&apos;entretien qui passe dix minutes dans la chambre le matin voit quelque chose que l&apos;infirmière de nuit ne verra pas. Le cuisinier qui observe une résidente repousser systématiquement son assiette a une information que personne d&apos;autre ne compile.</Texte>

          <PullQuote>
            Ce n&apos;est pas votre formation qui détermine la valeur de ce que vous observez. C&apos;est la précision avec laquelle vous le transmettez.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Ce qui rend une transmission utile — ou inutile">
          <Texte>Il ne suffit pas de dire quelque chose. Ce que vous dites, et comment vous le dites, détermine si votre observation sera exploitable par les professionnels qui en ont besoin.</Texte>
          <Texte>La différence fondamentale est entre <strong>ce que vous observez</strong> et <strong>ce que vous en concluez</strong>. Le premier est une donnée. Le second est une interprétation — et elle peut être fausse, biaisée, ou tout simplement hors de votre portée.</Texte>

          <div className="space-y-4 my-6">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Exemple 1</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-4">
                  <p className="text-xs font-semibold text-red-600 mb-2">❌ Interprétation</p>
                  <p className="text-sm text-gray-700 italic">«Madame R. déprime depuis lundi.»</p>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#15803D] mb-2">✓ Observation factuelle</p>
                  <p className="text-sm text-gray-700 italic">«Depuis lundi, Madame R. répond peu quand on lui parle et n&apos;a pas regardé la télévision, alors qu&apos;elle le fait habituellement tous les après-midis.»</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Exemple 2</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-4">
                  <p className="text-xs font-semibold text-red-600 mb-2">❌ Jugement</p>
                  <p className="text-sm text-gray-700 italic">«Monsieur T. fait sa difficile avec la nourriture.»</p>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#15803D] mb-2">✓ Observation factuelle</p>
                  <p className="text-sm text-gray-700 italic">«Monsieur T. a laissé plus de la moitié de son assiette trois fois cette semaine — lundi, mercredi et aujourd&apos;hui.»</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="px-5 py-3 bg-gray-50 border-b border-gray-200">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Exemple 3</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-4">
                  <p className="text-xs font-semibold text-red-600 mb-2">❌ Vague</p>
                  <p className="text-sm text-gray-700 italic">«Il n&apos;est pas bien en ce moment.»</p>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#15803D] mb-2">✓ Observation factuelle</p>
                  <p className="text-sm text-gray-700 italic">«Depuis ce matin, il tient sa main droite contre lui et grimace quand on l&apos;aide à se lever — ce n&apos;est pas son comportement habituel.»</p>
                </div>
              </div>
            </div>
          </div>

          <HighlightBox label="Pourquoi cette distinction est cruciale" couleur="jaune">
            <Texte>Les professionnels de santé qui reçoivent votre transmission ne peuvent travailler qu&apos;avec ce que vous leur donnez. Une interprétation («elle déprime») peut fermer une piste diagnostique importante — et en ouvrir de mauvaises. Une observation factuelle («elle ne mange plus, elle ne parle plus depuis lundi») laisse le champ ouvert à une évaluation juste.</Texte>
            <Texte>Ce n&apos;est pas une question de hiérarchie ou de qui a le droit d&apos;interpréter. C&apos;est une question d&apos;efficacité : <strong>les faits aident. Les conclusions prématurées peuvent nuire.</strong></Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Quand transmettre — et à qui">
          <Texte>La règle est simple, et elle s&apos;applique quel que soit votre poste : <strong>si quelque chose vous semble inhabituel par rapport à ce que vous connaissez de la personne, vous le transmettez.</strong> Pas demain. Pas lors de la prochaine réunion. Aux personnes concernées, dans les meilleurs délais.</Texte>

          <Texte>«Les personnes concernées», dans votre contexte, ce sont les professionnels habilités à évaluer et agir — équipe soignante, infirmier·ère, médecin, responsable, selon les structures de votre institution. Vous ne choisissez pas d&apos;agir à leur place. Vous leur donnez l&apos;information pour qu&apos;ils puissent le faire.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Vous êtes en train de faire le ménage dans la chambre de Monsieur L.</p>
              <p className="text-gray-700 text-sm leading-relaxed">Monsieur L. vous dit depuis deux jours qu&apos;il a «quelque chose qui tire» dans le bas du dos quand il se lève. Il ne se plaint pas à l&apos;équipe soignante. Ce matin, il vous le dit encore.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Que faites-vous ? Et comment formulez-vous votre transmission ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Vous transmettez à l&apos;infirmier·ère ou au responsable disponible, maintenant. Formulation : <em>«Monsieur L. me dit depuis deux jours qu&apos;il a une douleur dans le dos quand il se lève — il me l&apos;a dit encore ce matin. Je ne sais pas s&apos;il l&apos;a dit à l&apos;équipe soignante.»</em></p>
              <p className="text-gray-700 text-sm leading-relaxed mt-2">Vous ne diagnostiquez pas. Vous ne décidez pas si c&apos;est grave. Vous transmettez ce que vous avez entendu, de façon factuelle. C&apos;est suffisant — et c&apos;est précieux.</p>
            </div>
          </div>

          <HighlightBox label="Le principe : dans le doute, on transmet" couleur="bleu">
            <Texte>La crainte de «déranger pour rien» est compréhensible. Mais dans le contexte de la démence, où la personne ne peut pas toujours porter elle-même sa propre information, une transmission inutile coûte peu. Un signal ignoré peut coûter cher.</Texte>
            <Texte>Ce n&apos;est pas à vous de trancher si c&apos;est important. C&apos;est votre rôle de le signaler. C&apos;est le rôle de quelqu&apos;un d&apos;autre de l&apos;évaluer.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Ce que la communication change — concrètement">
          <Texte>La qualité de la communication autour d&apos;une personne atteinte de démence détermine directement la qualité de sa prise en charge. Ce n&apos;est pas une métaphore — c&apos;est mécanique.</Texte>

          <div className="space-y-3 my-4">
            <div className="flex gap-4 items-start border border-gray-200 rounded-xl p-4">
              <span className="text-2xl flex-shrink-0">🔗</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Une douleur transmise = une douleur traitée</p>
                <p className="text-sm text-gray-600 leading-relaxed">Si personne ne dit que Monsieur L. se plaint depuis deux jours, la douleur n&apos;est pas traitée. S&apos;il porte une douleur non soignée, il devient peut-être agité — et cette agitation sera lue comme «un symptôme de sa démence» plutôt que comme le signal d&apos;un problème physique résolvable.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-gray-200 rounded-xl p-4">
              <span className="text-2xl flex-shrink-0">🔗</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Un changement noté = une évolution suivie</p>
                <p className="text-sm text-gray-600 leading-relaxed">La démence évolue. Les changements rapides ou inhabituels peuvent signaler une complication médicale (infection, AVC, chute). Une observation transmise à temps peut permettre une intervention précoce — avec des conséquences très différentes pour la personne.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start border border-gray-200 rounded-xl p-4">
              <span className="text-2xl flex-shrink-0">🔗</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Une information partagée = une équipe cohérente</p>
                <p className="text-sm text-gray-600 leading-relaxed">Une personne atteinte de démence peut agir différemment selon les personnes et les moments. Si chaque professionnel garde ses observations pour lui, l&apos;équipe navigue à vue. Quand les observations circulent, l&apos;équipe peut construire une image cohérente et adapter l&apos;accompagnement.</p>
              </div>
            </div>
          </div>

          <PullQuote>
            Vous n&apos;avez pas besoin de savoir ce que signifie ce que vous observez. Vous avez besoin de le dire.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Synthèse de la formation" titre="Les 5 idées essentielles à emporter">
          <HighlightBox label="Ce que cette formation a posé" couleur="vert">
            <Liste items={[
              "La démence touche ~161'100 personnes en Suisse — en forte hausse. Ce n'est ni de la folie, ni une fatalité du vieillissement.",
              "La conscience et les émotions restent. Derrière chaque comportement difficile, il y a une personne qui cherche à se faire comprendre.",
              "Une posture calme, des mots simples, le respect des routines et le non-verbal soigné font une différence réelle au quotidien.",
              "Tout comportement inhabituel est d'abord une tentative de communication — cherchez le besoin avant d'agir.",
              "Ce que vous observez a de la valeur. Transmettez-le, de façon factuelle, aux personnes concernées. Peu importe votre rôle.",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Pourquoi la transmission d'information autour d'une personne atteinte de démence est-elle particulièrement importante ?",
            reponses: [
              "Parce que les professionnels de santé ont besoin de documentation pour les dossiers administratifs",
              "Parce que la personne ne peut pas toujours exprimer ce qu'elle ressent — les observations des uns compensent ce que les autres ne voient pas",
              "Parce que c'est une obligation légale dans les établissements médico-sociaux",
              "Parce que cela permet à l'équipe de décider collectivement de la marche à suivre",
            ],
            bonneReponse: 1,
            explication: "La démence altère progressivement la capacité à verbaliser ses besoins, sa douleur, ses perceptions. La personne devient dépendante des observations des personnes qui l'entourent pour que ses besoins soient identifiés et pris en charge. Chaque professionnel — quel que soit son rôle — voit des choses que les autres ne verront pas. C'est cela qui donne de la valeur à chaque observation transmise.",
          },
          {
            question: "Une collègue vous dit : «Madame R. ne mange plus vraiment, je pense qu'elle est déprimée.» Quelle partie de cette phrase est une observation factuelle ?",
            reponses: [
              "Les deux parties — observer et interpréter font partie du même acte professionnel",
              "Uniquement «elle est déprimée» — c'est l'information exploitable pour les soignants",
              "Uniquement «elle ne mange plus vraiment» — c'est un fait observable ; «elle est déprimée» est une interprétation",
              "Aucune des deux — sans données précises sur les quantités, rien n'est exploitable",
            ],
            bonneReponse: 2,
            explication: "«Elle ne mange plus vraiment» décrit un comportement observable — même si l'expression pourrait être plus précise (depuis quand ? à quels repas ?). «Elle est déprimée» est une interprétation : elle suppose une cause qui reste à évaluer par les professionnels de santé. Transmettre les deux comme équivalents peut orienter l'évaluation à tort. La valeur professionnelle de la transmission repose sur les faits, pas sur leur explication.",
          },
          {
            question: "Vous n'êtes pas soignant·e. Vous remarquez que Monsieur P. semble tenir son bras différemment ce matin et grimace légèrement quand il se déplace. Quelle est la bonne attitude ?",
            reponses: [
              "Ne pas intervenir — ce type d'observation relève uniquement du personnel soignant qualifié",
              "Observer encore quelques jours pour être sûr·e avant d'en parler",
              "Demander à Monsieur P. si ça va, et si la réponse est oui, ne rien signaler",
              "Transmettre aux personnes concernées ce que vous avez observé, de façon factuelle, maintenant",
            ],
            bonneReponse: 3,
            explication: "Votre formation n'est pas ce qui détermine la valeur de votre observation — c'est sa précision. Un changement dans la posture ou les mouvements d'une personne atteinte de démence peut signaler une douleur qu'elle ne peut pas exprimer autrement. Attendre «pour être sûr» ou considérer que ce n'est pas votre rôle, c'est laisser passer une information qui pourrait changer quelque chose. La transmission factuelle aux personnes concernées est toujours la bonne réponse.",
          },
          {
            question: "Quelle formulation est la plus utile pour une équipe soignante ?",
            reponses: [
              "«Madame L. semble aller moins bien depuis quelques jours — je voulais vous le signaler.»",
              "«Madame L. est très agitée — je pense qu'elle a besoin d'un ajustement de traitement.»",
              "«Depuis mardi matin, Madame L. est agitée entre 15h et 17h — elle marche dans les couloirs et répète «je veux partir». Ce n'est pas son comportement habituel.»",
              "«Madame L. fait une crise — venez vite.»",
            ],
            bonneReponse: 2,
            explication: "La troisième formulation donne une information immédiatement exploitable : le comportement précis (agitation, déambulation, paroles répétées), le moment (depuis mardi, entre 15h et 17h), et le contexte (inhabituel). La première est trop vague. La deuxième contient une hypothèse diagnostique hors de portée. La quatrième est une alerte mais sans information utilisable pour évaluer la situation.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
