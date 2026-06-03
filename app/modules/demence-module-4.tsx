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
        titre="Mon rôle"
        titrePart2="et le réseau"
        sousTitre="Se situer dans son rôle, savoir observer et transmettre avec justesse, identifier quand alerter, connaître les ressources — et prendre soin de soi dans un accompagnement exigeant."
        duree="25 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Chacun·e a un rôle dans l'accompagnement">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Situer votre rôle dans l'accompagnement des personnes atteintes de démence, quel que soit votre poste",
              "Formuler une observation factuelle et utile pour l'équipe soignante",
              "Identifier les situations qui nécessitent une transmission rapide",
              "Nommer les ressources disponibles en Suisse pour les personnes et les professionnels",
              "Reconnaître l'importance de prendre soin de soi et les premières actions pour y parvenir",
            ]} />
          </ConceptBox>
          <Texte>Ce dernier module vous aide à vous situer dans le système — à comprendre où s&apos;arrête votre rôle et où commence celui d&apos;autres professionnels, et comment relier ces rôles de façon fluide et efficace au bénéfice de la personne accompagnée.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Se situer dans son rôle — le principe de base">
          <Texte>Dans toute institution qui accueille des personnes atteintes de démence, <strong>chaque membre du personnel contribue à l&apos;accompagnement</strong> — y compris ceux dont le rôle n&apos;est pas directement soignant.</Texte>

          <HighlightBox label="L'impact de chaque rôle" couleur="bleu">
            <div className="space-y-3 mt-2">
              <div className="flex gap-3 items-start">
                <span className="bg-[#1B2D5B] text-white text-xs px-2 py-0.5 rounded font-semibold flex-shrink-0 mt-0.5">Soignant·e / aide-soignant·e</span>
                <p className="text-sm text-gray-600">En contact direct pour les soins, les repas, la toilette. Premières lignes d&apos;observation des signes physiques et comportementaux. Role central dans la continuité des soins et la transmission.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="bg-[#1B2D5B] text-white text-xs px-2 py-0.5 rounded font-semibold flex-shrink-0 mt-0.5">Animateur·trice</span>
                <p className="text-sm text-gray-600">Observe les capacités préservées, les goûts, les réactions aux activités. Contribue à maintenir les liens sociaux et à stimuler doucement les ressources de la personne.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="bg-[#1B2D5B] text-white text-xs px-2 py-0.5 rounded font-semibold flex-shrink-0 mt-0.5">Agent d&apos;entretien</span>
                <p className="text-sm text-gray-600">Présence régulière et souvent rassurante. Peut observer des changements d&apos;état ou des situations inhabituelles. Sa façon d&apos;entrer dans une chambre, de saluer, de ne pas déranger — tout cela compte.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="bg-[#1B2D5B] text-white text-xs px-2 py-0.5 rounded font-semibold flex-shrink-0 mt-0.5">Cuisinier·ère</span>
                <p className="text-sm text-gray-600">Les odeurs, les textures, les goûts familiers peuvent déclencher des souvenirs positifs et un sentiment de confort. Le personnel de cuisine contribue au bien-être par des choix sensoriels.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="bg-[#1B2D5B] text-white text-xs px-2 py-0.5 rounded font-semibold flex-shrink-0 mt-0.5">Pool / remplaçant·e</span>
                <p className="text-sm text-gray-600">Même sans connaître la personne en profondeur, adopter une attitude calme, se présenter, respecter les routines observées — c&apos;est déjà de l&apos;accompagnement de qualité.</p>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox label="Le principe constant" couleur="jaune">
            <Texte>Chaque rôle a ses <strong>limites de compétence</strong>. Selon l&apos;institution et la fonction, ces limites varient — elles ne sont pas figées. Le principe reste constant : <strong>on accompagne dans son périmètre, et on transmet ce qui dépasse ce périmètre.</strong></Texte>
            <Texte>Les éléments cliniques — médicaments, traitements, diagnostic, évolution médicale — relèvent strictement du médecin et de l&apos;équipe soignante qualifiée. Toute situation complexe doit être référée.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Observer et transmettre — l'art de la transmission utile">
          <Texte>Observer et transmettre des informations pertinentes fait partie du rôle de chacun·e — même sans formation soignante spécialisée. Une bonne observation peut déclencher une intervention médicale qui change tout.</Texte>
          <Texte>Mais toutes les transmissions ne se valent pas. Une transmission vague ou interprétée peut retarder une réponse adaptée. Une transmission factuelle et précise est immédiatement utile.</Texte>

          <div className="space-y-3 my-6">
            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-2">❌ Transmissions à éviter</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-700 italic">«Madame R. fait sa difficile encore aujourd&apos;hui.»</p>
                <p className="text-sm text-gray-700 italic">«Monsieur T. commence à perdre la tête.»</p>
                <p className="text-sm text-gray-700 italic">«Elle n&apos;est pas bien en ce moment.»</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">→ Ces formulations sont des jugements ou des interprétations. Elles n&apos;apportent pas d&apos;information clinique utilisable.</p>
            </div>
            <div className="border-l-4 border-[#3DBFA0] bg-[#F0FDF4] rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">✓ Transmissions factuelles et utiles</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-700 italic">«Madame R. a refusé de déjeuner trois fois cette semaine (lundi, mercredi, vendredi). Elle ne mange qu&apos;une partie de ce qu&apos;on lui propose.»</p>
                <p className="text-sm text-gray-700 italic">«Monsieur T. tient sa main droite contre lui depuis hier matin. Il grimace quand on touche son bras pour l&apos;aider à se lever.»</p>
                <p className="text-sm text-gray-700 italic">«Madame S. a été agitée entre 15h et 17h depuis lundi. Elle pleure et dit qu&apos;elle a peur. Ce comportement est nouveau pour elle.»</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">→ Faits observés, datés, comparés à l&apos;état habituel. Utiles pour le médecin et l&apos;équipe soignante.</p>
            </div>
          </div>

          <HighlightBox label="La structure d'une bonne observation" couleur="bleu">
            <Liste items={[
              "Quoi : quel comportement ou signe précis avez-vous observé ?",
              "Quand : depuis quand ? À quels moments de la journée ?",
              "Intensité : une fois, plusieurs fois, de façon continue ?",
              "Comparaison : est-ce nouveau ou inhabituel par rapport à ce que vous connaissez de la personne ?",
              "Contexte : y a-t-il quelque chose qui a précédé ou qui semble lié ?",
            ]} />
          </HighlightBox>

          <PullQuote>
            On transmet les faits observés, pas un jugement ni une conclusion médicale. C&apos;est le médecin qui interprète — c&apos;est vous qui voyez.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Quand alerter — et vers qui ?">
          <Texte>Certaines situations nécessitent une transmission <strong>rapide</strong>, sans attendre la réunion d&apos;équipe suivante. Dans le doute, on transmet. Mieux vaut un signalement «pour rien» qu&apos;un signe d&apos;alerte ignoré.</Texte>

          <div className="space-y-4 my-4">
            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-3">🚨 Alerter sans délai — situations urgentes</p>
              <Liste items={[
                "Chute, blessure visible, douleur aiguë exprimée ou suspectée",
                "Confusion brusque et inhabituelle — différente de l'état de base habituel",
                "Propos ou comportements faisant craindre pour la sécurité de la personne ou d'autrui",
                "Fièvre, pâleur importante, difficulté à respirer, perte de connaissance",
                "Ingestion accidentelle d'un médicament ou d'un produit inadapté",
              ]} />
            </div>
            <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-700 mb-3">⚠️ Transmettre à l&apos;équipe soignante — situations à surveiller</p>
              <Liste items={[
                "Refus répété de manger ou de boire sur plusieurs repas consécutifs",
                "Changement durable de comportement, d'humeur ou d'état général (sur plusieurs jours)",
                "Agitation ou anxiété inhabituelles et persistantes",
                "Signe physique nouveau : boiterie, posture inhabituelle, grimaces récurrentes",
                "Tout ce qui vous inquiète, même si vous n'êtes pas sûr·e de son importance",
              ]} />
            </div>
          </div>

          <HighlightBox label="Vers qui transmettre ?" couleur="bleu">
            <Liste items={[
              "En urgence : l'infirmier·ère de service, le médecin de garde, selon les protocoles de votre institution",
              "Pour les observations régulières : le ou la référent·e infirmier·ère de la personne, le cahier de transmissions, la réunion d'équipe",
              "En cas de doute sur à qui s'adresser : votre responsable direct·e direct",
            ]} />
          </HighlightBox>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation — mise en pratique</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Vous êtes agent d&apos;entretien. En passant dans la chambre de Madame L. pour faire le ménage, vous remarquez qu&apos;elle est assise par terre entre son lit et le mur. Elle vous regarde mais ne répond pas quand vous lui parlez.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Que faites-vous ?</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Est-ce une urgence ? Qui appelez-vous ? Que dites-vous exactement ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">C&apos;est une situation d&apos;alerte immédiate. Vous ne savez pas si Madame L. est tombée, si elle est blessée, si elle est consciente pleinement. <strong>Vous n&apos;essayez pas de la relever seul·e</strong> — vous appelez immédiatement l&apos;infirmier·ère de service. Vous restez avec elle en attendant, vous lui parlez doucement pour la rassurer : «Je suis là, je reste avec vous, j&apos;ai appelé quelqu&apos;un qui arrive.» Vous transmettez ce que vous avez vu : «Madame L. est assise par terre dans sa chambre entre le lit et le mur. Elle est consciente mais ne répond pas à mes questions. Je ne sais pas si elle est tombée.»</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Prendre soin de soi — une nécessité professionnelle">
          <Texte>Accompagner des personnes atteintes de démence est émotionnellement et cognitivement exigeant. L&apos;OMS le reconnaît explicitement : l&apos;impact sur la santé et le bien-être des aidants — professionnels comme proches — est réel et documenté.</Texte>
          <Texte>Ce n&apos;est pas un signe de faiblesse de ressentir de la fatigue, de la tristesse, de la frustration, ou même parfois de l&apos;impuissance face à une situation difficile. C&apos;est une réaction normale à un travail intense qui implique de côtoyer régulièrement la souffrance, la perte et la vulnérabilité.</Texte>

          <HighlightBox label="Les signaux à reconnaître" couleur="jaune">
            <Liste items={[
              "Fatigue persistante qui ne récupère pas avec le repos habituel",
              "Irritabilité inhabituelle envers les résidents, les collègues ou la famille",
              "Sentiment d'impuissance ou de résignation («de toute façon, ça ne sert à rien»)",
              "Difficultés à «décrocher» du travail dans les moments de repos",
              "Tristesse durable, anxiété, manque de plaisir dans des activités habituellement appréciées",
            ]} />
          </HighlightBox>

          <Texte>Ces signaux ne doivent pas être ignorés. Ils indiquent que la charge dépasse les ressources disponibles — et que sans ajustement, la qualité de l&apos;accompagnement en pâtira aussi.</Texte>

          <HighlightBox label="Ce qui fait la différence au quotidien" couleur="bleu">
            <div className="space-y-3 mt-2">
              <div className="flex gap-3 items-start">
                <span className="text-[#3DBFA0] font-bold flex-shrink-0">→</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Parler en équipe — débriefer les moments difficiles</p>
                  <p className="text-sm text-gray-600">Ne pas garder seul·e les situations qui ont été éprouvantes. En parler à un·e collègue, au responsable, dans les espaces de supervision prévus à cet effet. Mettre des mots, c&apos;est déjà alléger.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#3DBFA0] font-bold flex-shrink-0">→</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">S&apos;appuyer sur le collectif</p>
                  <p className="text-sm text-gray-600">On n&apos;accompagne jamais seul·e. Le travail en équipe — se relayer, se soutenir, partager les situations difficiles — est la ressource centrale. Isoler la charge en la portant personnellement aggrave l&apos;épuisement.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#3DBFA0] font-bold flex-shrink-0">→</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Marquer la transition travail / vie privée</p>
                  <p className="text-sm text-gray-600">Développer un petit rituel de fin de service qui signale au corps et à l&apos;esprit que le travail est terminé — même quelques minutes de marche, un changement de tenue, un moment de silence. Cela aide à ne pas «ramener» le travail à la maison.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#3DBFA0] font-bold flex-shrink-0">→</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Utiliser les ressources institutionnelles</p>
                  <p className="text-sm text-gray-600">Certaines institutions proposent des supervisions, des groupes de parole ou un soutien psychologique. Les utiliser n&apos;est pas un aveu de faiblesse — c&apos;est un acte de professionnalisme.</p>
                </div>
              </div>
            </div>
          </HighlightBox>

          <PullQuote source="OMS — rapport sur les aidants, 2025">
            Le bien-être des aidants est indissociable de la qualité des soins. Prendre soin de soi n&apos;est pas un luxe : c&apos;est une condition de l&apos;accompagnement durable.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Les ressources de référence en Suisse">
          <Texte>Ces ressources existent pour soutenir les personnes concernées, leurs proches, et les professionnels. Les connaître permet de les recommander ou de les utiliser le moment venu.</Texte>

          <div className="space-y-4 my-4">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#EEF2FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#3730A3] text-lg font-bold">A</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1B2D5B] mb-1">Alzheimer Suisse — et ses sections cantonales</p>
                  <p className="text-sm text-gray-600 mb-2">Information, conseil et soutien pour les personnes atteintes et leurs proches. La Ligne Alzheimer (téléphone) offre une écoute et des conseils pratiques.</p>
                  <p className="text-xs text-gray-400">alzheimer-schweiz.ch · Ligne Alzheimer : 058 058 80 00</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F0FDFA] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0F766E] text-lg font-bold">O</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1B2D5B] mb-1">Office fédéral de la santé publique (OFSP) — plateforme nationale démence</p>
                  <p className="text-sm text-gray-600 mb-2">Ressources, données épidémiologiques et guides pratiques pour les professionnels et les institutions.</p>
                  <p className="text-xs text-gray-400">bag.admin.ch/fr/demence</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#F5F3FF] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#5B21B6] text-lg font-bold">I</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1B2D5B] mb-1">Au sein de votre institution</p>
                  <p className="text-sm text-gray-600 mb-2">Équipe soignante, infirmier·ère référent·e, médecin coordonnateur, direction — et dispositifs internes de soutien (supervision, groupes de parole, formation continue).</p>
                  <p className="text-xs text-gray-400">En cas de doute sur à qui s&apos;adresser, commencez par votre responsable direct·e.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Synthèse de la formation" titre="Les 6 points essentiels à emporter">
          <HighlightBox label="Ce que cette formation a posé" couleur="vert">
            <Liste items={[
              "La démence est un enjeu massif : ~161'100 personnes en Suisse, un chiffre en forte hausse. Elle touche aussi des personnes de moins de 65 ans.",
              "C'est une maladie du cerveau — pas une fatalité du vieillissement, pas de la folie. La conscience et les émotions restent.",
              "Alzheimer représente 60–70 % des cas. Les formes mixtes sont fréquentes. Le diagnostic relève toujours du médecin.",
              "Tout comportement difficile est un message : chercher le besoin derrière le signe, pas comment «faire cesser» le comportement.",
              "Une posture calme, des phrases simples, le non-verbal soigné, les routines préservées — voilà les leviers quotidiens accessibles à tous.",
              "Chacun·e accompagne dans son rôle, observe et transmet des faits — et prend soin de soi pour tenir dans la durée.",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Vous êtes agent d'entretien et vous trouvez une résidente assise par terre. Que faites-vous en premier ?",
            reponses: [
              "Vous essayez de la relever vous-même pour ne pas l'embarrasser",
              "Vous appelez immédiatement l'infirmier·ère de service et restez avec elle",
              "Vous attendez qu'un soignant passe naturellement",
              "Vous repartez pour ne pas interférer avec le travail des soignants",
            ],
            bonneReponse: 1,
            explication: "Ne jamais relever seul·e une personne qui est au sol — risque de blessure. Appeler immédiatement l'infirmier·ère de service. Rester avec la personne pour la rassurer. Transmettre une observation factuelle : où elle est, son état apparent, ce que vous avez observé.",
          },
          {
            question: "Laquelle de ces transmissions est la plus utile pour l'équipe soignante ?",
            reponses: [
              "«Madame B. n'est pas bien depuis quelques jours.»",
              "«Madame B. a refusé le petit-déjeuner et le déjeuner aujourd'hui — c'est la troisième fois cette semaine.»",
              "«Je pense que Madame B. déprime.»",
              "«Madame B. fait des caprices au moment des repas.»",
            ],
            bonneReponse: 1,
            explication: "Une transmission utile est factuelle, précise et datée : elle décrit ce qui a été observé (refus de repas), la fréquence (3e fois cette semaine), et le contexte. Les jugements («déprime», «caprices») ou les formulations vagues («pas bien») ne permettent pas à l'équipe soignante d'évaluer la situation correctement.",
          },
          {
            question: "Ressentir de la fatigue ou de la tristesse après une situation difficile avec un résident est :",
            reponses: [
              "Un signe que l'on n'est pas fait pour ce travail",
              "Une réaction normale à un travail émotionnellement exigeant, qui mérite attention",
              "Un problème personnel à gérer seul en dehors du travail",
              "Quelque chose qu'un bon professionnel doit ignorer pour rester efficace",
            ],
            bonneReponse: 1,
            explication: "L'OMS reconnaît que l'impact sur la santé et le bien-être des aidants professionnels est réel. Ressentir fatigue ou tristesse est une réaction normale à un travail intense. L'ignorer mène à l'épuisement professionnel. En parler en équipe, utiliser les ressources institutionnelles et prendre soin de soi sont des actes de professionnalisme, pas de faiblesse.",
          },
          {
            question: "En cas de doute sur l'importance d'une observation, la bonne attitude est :",
            reponses: [
              "Ne rien dire pour ne pas déranger inutilement l'équipe soignante",
              "Transmettre quand même — mieux vaut un signalement «pour rien» qu'un signe ignoré",
              "Attendre de voir si la situation s'aggrave avant d'en parler",
              "En parler aux autres résidents pour avoir leur avis",
            ],
            bonneReponse: 1,
            explication: "Le repère LEARNA est clair : en cas de doute, on transmet. L'équipe soignante est formée pour évaluer la pertinence de l'information — votre rôle est de lui donner l'information. Un signalement «inutile» ne coûte rien. Un signe d'alerte ignoré peut avoir des conséquences graves.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
