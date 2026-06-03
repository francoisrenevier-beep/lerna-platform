import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3Demence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Démence : sensibilisation générale"
        titre="Reconnaître et bien réagir"
        titrePart2="au quotidien"
        sousTitre="Des repères concrets pour comprendre les comportements difficiles comme des messages, et adopter des attitudes justes dans les situations du quotidien."
        duree="35 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le comportement comme communication">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier les signes observables courants d'une démence",
              "Expliquer pourquoi un comportement difficile est presque toujours l'expression d'un besoin",
              "Appliquer les attitudes justes dans les situations courantes du quotidien",
              "Analyser des situations concrètes : répétitions, refus, agitation, déambulation",
              "Distinguer ce que vous pouvez gérer dans votre rôle de ce qui nécessite une transmission",
            ]} />
          </ConceptBox>
          <Texte>Ce module est le plus directement ancré dans la pratique quotidienne. Il s&apos;appuie sur un principe central : <strong>les comportements que nous percevons comme «difficiles» sont presque toujours des tentatives de communication</strong>. Quand les mots ne sont plus disponibles, ou ne suffisent plus, le corps, les émotions et les comportements prennent le relais.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Les signes observables courants">
          <Texte>Ces signes <strong>ne se transmettent pas comme un diagnostic</strong> mais comme des <strong>observations factuelles</strong> utiles à l&apos;équipe et aux professionnels de santé compétents. Les observer et les noter précisément est déjà une contribution précieuse.</Texte>

          <HighlightBox label="Signes fréquemment observés — liste OMS" couleur="bleu">
            <div className="space-y-3 mt-2">
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1B2D5B] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">1</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Oublis d&apos;événements récents, objets égarés</p>
                  <p className="text-sm text-gray-600">La personne oublie des faits récents entiers (une visite de famille, un repas), pas seulement des détails. Elle égare des objets et ne peut plus reconstituer où elle les a posés.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1B2D5B] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">2</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Désorientation dans le temps et l&apos;espace</p>
                  <p className="text-sm text-gray-600">Se perdre dans un lieu familier, ne plus savoir quel jour ou quelle saison on est. Une personne peut chercher à «rentrer chez elle» alors qu&apos;elle est dans son lieu de vie depuis des années — car elle se trouve mentalement dans un autre temps.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1B2D5B] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">3</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Difficultés de langage et de communication</p>
                  <p className="text-sm text-gray-600">Perdre le fil d&apos;une conversation, chercher ses mots sur des termes simples et courants, mal comprendre ce qu&apos;on lui dit, répéter les mêmes questions ou les mêmes histoires.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1B2D5B] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">4</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Difficultés avec les tâches familières</p>
                  <p className="text-sm text-gray-600">Ne plus pouvoir réaliser des activités qu&apos;elle faisait aisément avant : préparer un repas simple, utiliser le téléphone, gérer ses médicaments, s&apos;habiller dans le bon ordre.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1B2D5B] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">5</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Changements d&apos;humeur ou de comportement</p>
                  <p className="text-sm text-gray-600">Anxiété inhabituelle, repli social, irritabilité ou tristesse. Des comportements nouveaux qui tranchent avec ce que l&apos;on connaissait de la personne : désinhibition, suspicion, agitation en fin de journée.</p>
                </div>
              </div>
            </div>
          </HighlightBox>

          <HighlightBox label="Le «sundowning» — l'agitation en fin de journée" couleur="jaune">
            <Texte>De nombreuses personnes atteintes de démence présentent une aggravation de la confusion, de l&apos;agitation ou de l&apos;anxiété en fin d&apos;après-midi et en soirée — un phénomène appelé «sundowning» (du coucher de soleil). La fatigue cognitive accumulée dans la journée, la diminution de la lumière naturelle, et la perturbation des repères temporels contribuent à ce phénomène. Le savoir aide à mieux l&apos;anticiper : un environnement plus calme, une activité douce, une présence rassurante à ces moments-là peuvent faire une vraie différence.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le comportement comme communication — le principe fondateur">
          <Texte>Voici le principe le plus important de ce module : <strong>un comportement qui semble «difficile» est presque toujours une tentative d&apos;exprimer un besoin non satisfait.</strong></Texte>
          <Texte>La personne atteinte de démence n&apos;a pas les outils habituels pour communiquer sa détresse, sa douleur ou son malaise. Quand le langage devient insuffisant, le corps et les comportements prennent le relais. L&apos;agitation, le refus, les cris, la déambulation — tout cela «dit» quelque chose.</Texte>

          <HighlightBox label="Les besoins derrière les comportements les plus fréquents" couleur="bleu">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Agitation / cris</p>
                <Liste items={["Douleur physique non verbalisée", "Peur, insécurité", "Besoin d'aller aux toilettes", "Environnement trop stimulant"]} />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Refus de soin</p>
                <Liste items={["Peur de ne pas comprendre ce qui va se passer", "Douleur anticipée ou vécue", "Atteinte à la pudeur ou à la dignité", "Fatigue ou manque de confiance"]} />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Déambulation</p>
                <Liste items={["Besoin d'activité physique", "Chercher quelqu'un ou quelque chose", "Revenir à un lieu chargé de sens", "Anxiété sans objet précis"]} />
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-3">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Répétitions</p>
                <Liste items={["Inquiétude ou anxiété persistante", "Besoin de réassurance", "Absence de repère temporel", "Chercher un ancrage dans l'environnement"]} />
              </div>
            </div>
          </HighlightBox>

          <PullQuote>
            La bonne question n&apos;est pas «comment faire cesser ce comportement ?» mais «qu&apos;est-ce que la personne cherche à me dire ?»
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Attitudes justes : les repères de base">
          <Texte>Ces repères s&apos;appliquent à toutes les situations de contact avec une personne atteinte de démence, quel que soit votre rôle dans l&apos;institution.</Texte>

          <div className="space-y-3 my-4">
            {[
              {
                n: "1",
                titre: "Approche calme et visible",
                texte: "Se présenter à la vue de la personne (pas par derrière), se mettre à sa hauteur, la regarder dans les yeux avant de parler. Un contact visuel bienveillant dit déjà «tu es en sécurité» avant même les mots.",
              },
              {
                n: "2",
                titre: "Phrases courtes, une information à la fois",
                texte: "Éviter les phrases longues ou les questions multiples. «Il est midi. On va manger.» plutôt que «Tu te rappelles qu'il est midi et qu'on devait aller au réfectoire parce que le repas est servi maintenant ?» Laisser le temps de répondre — la personne peut avoir besoin de plusieurs secondes.",
              },
              {
                n: "3",
                titre: "Ne pas corriger, ne pas argumenter",
                texte: "Si la personne croit que sa mère est en vie, qu'elle est encore au travail, ou qu'elle est dans sa maison d'enfance — ne pas la corriger frontalement. Cela ne «remet pas les choses en ordre» : ça provoque seulement de la détresse et de la confusion supplémentaire. Entrer dans son monde, accueillir l'émotion, rassurer.",
              },
              {
                n: "4",
                titre: "Préserver les routines et les repères",
                texte: "Un environnement stable et prévisible est sécurisant pour une personne dont le cerveau ne peut plus créer de nouveaux repères efficacement. Les rituels du quotidien — même simples — aident à structurer la journée et à réduire l'anxiété.",
              },
              {
                n: "5",
                titre: "Valoriser ce qui reste",
                texte: "S'appuyer sur ce que la personne peut encore faire, ses goûts persistants, son histoire de vie. Une personne qui ne peut plus lire peut encore apprécier la musique qu'elle a aimée toute sa vie. Une personne qui ne reconnaît plus les visages peut encore apprécier le toucher d'une main.",
              },
              {
                n: "6",
                titre: "Soigner le non-verbal — il prime sur les mots",
                texte: "Le ton de voix, le rythme, le sourire, la posture, le geste doux — tout cela est perçu et ressenti bien au-delà des mots, souvent jusqu'aux stades très avancés. Un professionnel pressé et tendu transmet sa tension. Un professionnel calme et chaleureux transmet sa sécurité.",
              },
            ].map(({ n, titre, texte }) => (
              <div key={n} className="flex gap-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
                <span className="text-[#15803D] font-bold text-lg flex-shrink-0 mt-0.5">{n}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{titre}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{texte}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionModule>

        <SectionModule eyebrow="Situation concrète 1" titre="La répétition">
          <div className="space-y-4 my-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Madame R., 79 ans, Alzheimer modéré.</strong> Elle demande dix fois en une heure à quelle heure sa fille vient la voir. À chaque fois, l&apos;équipe lui répond — et quelques minutes plus tard, Madame R. pose à nouveau la question, comme si elle ne l&apos;avait jamais posée.</p>
            </div>
            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-1">❌ À éviter</p>
              <p className="text-sm text-gray-700 italic">«Je viens de vous répondre ! Sa fille vient à 15h, comme je vous l&apos;ai dit quatre fois déjà.»</p>
              <p className="text-sm text-gray-500 mt-1">→ Cette réponse est compréhensible humainement mais contre-productive : elle provoque de la honte et de la détresse chez Madame R., sans apporter de réassurance durable.</p>
            </div>
            <div className="border-l-4 border-[#3DBFA0] bg-[#F0FDF4] rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-1">✓ Attitude juste</p>
              <Liste items={[
                "Répondre calmement à chaque fois, d'un ton constant — Madame R. n'a pas accès au souvenir de sa question précédente",
                "Explorer ce qui se cache derrière : «Vous avez hâte de la voir ? Elle vous manque ?» — souvent, la répétition exprime une inquiétude ou un besoin de connexion",
                "Proposer un repère concret : un post-it visible indiquant l'heure de la visite, un objet qui rappelle la fille",
                "Détourner doucement vers une activité valorisante en attendant",
              ]} />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Comprendre</p>
              <p className="text-sm text-gray-700">Madame R. ne «fait pas exprès» de répéter. Sa mémoire de travail ne peut plus enregistrer la réponse. Mais son anxiété de fond — «est-ce que ma fille viendra ?» — persiste. C&apos;est cette anxiété qu&apos;il faut adresser, pas seulement l&apos;information manquante.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Situation concrète 2" titre="Le refus">
          <div className="space-y-4 my-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Monsieur T., 82 ans, démence vasculaire.</strong> Il refuse catégoriquement de se lever pour le repas et hausse le ton quand on insiste. Il dit «laissez-moi tranquille» et tourne la tête.</p>
            </div>
            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-1">❌ À éviter</p>
              <p className="text-sm text-gray-700 italic">Insister, argumenter («mais il faut manger pour votre santé !»), prendre physiquement le bras.</p>
              <p className="text-sm text-gray-500 mt-1">→ La contrainte aggraverait la résistance et risquerait de déclencher une réaction de défense vive. Elle est aussi potentiellement non éthique.</p>
            </div>
            <div className="border-l-4 border-[#3DBFA0] bg-[#F0FDF4] rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-1">✓ Attitude juste</p>
              <Liste items={[
                "Reculer, baisser la tension — dire «D'accord, je reviens dans un moment» et respecter ce temps",
                "Chercher la cause : douleur ? fatigue particulière ? mauvaise nuit ? contrariété antérieure ? médicament ?",
                "Revenir quelques minutes plus tard avec une approche différente : ton plus léger, proposition d'un choix simple",
                "Si possible, proposer le repas autrement — dans sa chambre, avec un aliment préféré en premier",
                "Transmettre l'observation à l'équipe si le refus se répète sur plusieurs repas",
              ]} />
            </div>
            <HighlightBox label="Repère LEARNA" couleur="jaune">
              <Texte>Face à un refus de soin répété, à une douleur suspectée ou à un changement brusque de comportement, on <strong>transmet</strong> aux professionnels compétents — on ne décide pas seul·e.</Texte>
            </HighlightBox>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Situation concrète 3" titre="L'agitation et les pleurs">
          <div className="space-y-4 my-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Madame S., 76 ans, démence à corps de Lewy.</strong> Elle pleure depuis une heure, ne répond pas aux questions, semble chercher quelqu&apos;un. Elle dit qu&apos;elle a peur. L&apos;équipe ne comprend pas ce qui a déclenché cet état — le matin s&apos;était passé normalement.</p>
            </div>
            <div className="border-l-4 border-[#3DBFA0] bg-[#F0FDF4] rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-1">✓ Attitude juste</p>
              <Liste items={[
                "S'asseoir à côté d'elle, à sa hauteur, sans urgence — la seule présence calme est déjà thérapeutique",
                "Accueillir l'émotion sans chercher à l'expliquer immédiatement : «Je suis là. Vous n'êtes pas seule.»",
                "Ne pas chercher à «raisonner» la peur — la peur est réelle même si son objet n'est pas identifiable",
                "Chercher des repères rassurants : un objet familier, une musique connue, le nom d'une personne chère",
                "Si l'agitation persiste ou s'intensifie, signaler à l'infirmier·ère référent·e — une douleur physique peut se manifester ainsi",
              ]} />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">À savoir</p>
              <p className="text-sm text-gray-700">Dans la démence à corps de Lewy, les fluctuations de l&apos;état peuvent être très rapides. Un état d&apos;agitation intense peut succéder à une période de calme, sans raison apparente. Le comprendre évite de chercher systématiquement une «cause externe» et aide à mieux ajuster la réponse.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Situation concrète 4" titre="La déambulation — «je veux rentrer chez moi»">
          <div className="space-y-4 my-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Monsieur F., 81 ans, Alzheimer modéré à sévère.</strong> Il vit dans l&apos;institution depuis deux ans. Chaque après-midi, il se lève, prend son manteau et répète : «Je dois rentrer, ma femme m&apos;attend.» Sa femme est décédée il y a six ans.</p>
            </div>
            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-1">❌ À éviter</p>
              <p className="text-sm text-gray-700 italic">«Monsieur F., votre femme est décédée, vous ne pouvez pas rentrer ici.»</p>
              <p className="text-sm text-gray-500 mt-1">→ Annoncer un deuil à une personne atteinte de démence qui ne s&apos;en souvient plus revient à le lui annoncer pour la première fois, à chaque fois. C&apos;est cruel et inutile.</p>
            </div>
            <div className="border-l-4 border-[#3DBFA0] bg-[#F0FDF4] rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-1">✓ Attitude juste</p>
              <Liste items={[
                "Entrer dans son monde : «Vous pensez à elle ? Elle vous manque ?»",
                "Détourner doucement vers l'émotion plutôt que vers les faits : l'accompagner dans son sentiment de manque",
                "Proposer une activité de transition : «Avant de partir, vous voulez bien venir prendre quelque chose à boire avec moi ?»",
                "Utiliser des éléments de sa vie : une photo, un objet personnel, une musique qu'il aimait — pour le ramener dans le présent par les émotions positives",
              ]} />
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Comprendre</p>
              <p className="text-sm text-gray-700">Monsieur F. ne «veut pas rentrer chez lui» au sens littéral — il exprime un besoin de retourner vers quelque chose de connu et de sécurisant. «Chez moi» représente souvent la sécurité, l&apos;amour, la familiarité. L&apos;accompagnement juste cherche à répondre à ce besoin sous-jacent, pas à corriger le désir exprimé.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Un comportement «difficile» est presque toujours une tentative d'exprimer un besoin",
              "La bonne question : «qu'est-ce que la personne cherche à me dire ?»",
              "Approche calme, phrases courtes, non-verbal soigné — les bases de toute interaction",
              "Ne pas corriger ni argumenter : entrer dans le monde de la personne",
              "La répétition exprime souvent une inquiétude — y répondre calmement à chaque fois",
              "Face à un refus, reculer et revenir — jamais forcer",
              "«Je veux rentrer chez moi» est un besoin de sécurité, pas une demande littérale",
              "Tout changement persistant ou brusque se transmet à l'équipe soignante",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Monsieur T. refuse de se lever pour le repas et hausse le ton. La meilleure réaction est de reculer et de revenir plus tard. Pourquoi cette approche est-elle plus efficace qu'insister ?",
            reponses: [
              "Parce que l'insistance est toujours interdite dans les EMS par la réglementation",
              "Parce que le refus cache souvent un besoin non identifié — douleur, peur, fatigue — et que la confrontation ferme la porte à cette exploration",
              "Parce qu'un repas manqué est sans conséquence médicale à court terme",
              "Parce qu'il faut respecter l'autonomie totale de la personne, même si elle s'affame",
            ],
            bonneReponse: 1,
            explication: "Le refus est presque toujours l'expression d'un besoin non satisfait. Insister ferme la communication et aggrave la résistance sans résoudre le problème de fond. Reculer permet de baisser la tension, d'explorer la cause (a-t-il mal ? est-il fatigué ? le bruit le dérange-t-il ?), puis de revenir avec une approche différente. Ce n'est pas une question d'autonomie absolue ou de règlement, mais d'efficacité thérapeutique.",
          },
          {
            question: "Madame R. demande pour la dixième fois à quelle heure vient sa fille. Une collègue propose de lui répondre «je vous l'ai déjà dit» pour l'aider à prendre conscience de ses répétitions. Est-ce une bonne idée ?",
            reponses: [
              "Oui — lui faire remarquer peut l'aider à mieux mémoriser par la suite",
              "Oui — si on ne le dit pas, elle va continuer indéfiniment et c'est épuisant pour l'équipe",
              "Non — elle n'a pas accès au souvenir de ses questions précédentes, donc cette réponse provoque de la honte sans apporter de réassurance",
              "Non — uniquement parce que cela pourrait la mettre en colère",
            ],
            bonneReponse: 2,
            explication: "Dire «je vous l'ai déjà dit» suppose que la personne peut se souvenir d'avoir posé la question — ce qu'elle ne peut pas faire. La démence a effacé cette information. La réponse provoque de la honte ou de la confusion sans aucun bénéfice. Ce qui est utile : répondre calmement à chaque fois, explorer l'anxiété sous-jacente («vous avez hâte de la voir ?»), et proposer un repère concret comme un post-it avec l'heure.",
          },
          {
            question: "Monsieur F. veut «rentrer chez lui voir sa femme» — décédée il y a six ans. Un collègue suggère de lui rappeler gentiment ce deuil. Quelle est la limite de cette approche ?",
            reponses: [
              "Aucune — rappeler la réalité avec douceur est toujours préférable à entrer dans son monde",
              "Elle suppose que la personne peut intégrer une information nouvelle, ce qu'elle ne peut plus faire — chaque rappel devient une première annonce du décès",
              "Elle est valable dans les stades légers, mais pas dans les stades avancés",
              "Elle fonctionne si on l'accompagne d'une preuve concrète comme une photo",
            ],
            bonneReponse: 1,
            explication: "La démence altère la capacité à créer de nouveaux souvenirs. Annoncer à Monsieur F. que sa femme est décédée ne l'aide pas à «accepter» — il l'oubliera quelques minutes plus tard et vivra à nouveau ce deuil. C'est une souffrance répétée pour rien. L'attitude juste consiste à entrer dans son émotion (le manque, le besoin de sécurité), à accueillir ce ressenti, et à détourner doucement vers quelque chose de rassurant.",
          },
          {
            question: "Depuis lundi, Madame A. devient très agitée chaque jour entre 16h et 18h — alors que ses matins se passent normalement. L'équipe pense que «sa démence évolue». Quelle lecture est plus précise ?",
            reponses: [
              "L'équipe a raison — une aggravation progressive à heures fixes est un signe d'Alzheimer avancé",
              "C'est probablement un effet secondaire de ses médicaments du matin qui s'estompe en fin de journée",
              "Ce pattern horaire prévisible évoque un sundowning — un phénomène atténuable par des adaptations en fin de journée",
              "Cela signifie qu'elle anticipe quelque chose de désagréable qui se passe à 16h",
            ],
            bonneReponse: 2,
            explication: "Une aggravation régulière et prévisible en fin d'après-midi est caractéristique du sundowning — lié à la fatigue cognitive accumulée et à la baisse de lumière naturelle. Ce n'est pas une «évolution» générale de la maladie, c'est un pattern temporel identifiable. Le reconnaître permet d'agir : environnement plus calme, activité douce, présence rassurante dans ce créneau — ce qui peut significativement réduire l'agitation.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
