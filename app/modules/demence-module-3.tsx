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
              "Comprendre qu'un comportement difficile est presque toujours l'expression d'un besoin",
              "Adopter les attitudes justes dans les situations courantes du quotidien",
              "Gérer des situations concrètes comme la répétition ou le refus",
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Les signes observables courants (rappel OMS)">
          <Texte>Ces signes <strong>ne se transmettent pas comme un diagnostic</strong> mais comme des <strong>observations</strong> utiles à l&apos;équipe et aux professionnels compétents.</Texte>

          <HighlightBox label="Premiers signes fréquents" couleur="bleu">
            <Liste items={[
              "Oublis d'événements récents, objets égarés de façon répétée",
              "Se perdre, même dans un lieu familier ; perte de la notion du temps",
              "Difficulté à suivre une conversation ou à trouver ses mots",
              "Difficulté à réaliser des tâches familières (préparation d'un repas, gestion d'un médicament)",
              "Changements d'humeur ou de comportement : anxiété, repli, irritabilité",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le comportement comme communication">
          <Texte>Un comportement qui semble «difficile» — agitation, déambulation, refus, répétitions — est presque toujours une <strong>tentative d&apos;exprimer un besoin</strong> non satisfait.</Texte>

          <HighlightBox label="Les besoins derrière les comportements" couleur="jaune">
            <Liste items={[
              "Douleur physique non verbalisée",
              "Peur, insécurité, sentiment d'être seul·e",
              "Faim, soif, fatigue",
              "Besoin d'aller aux toilettes",
              "Environnement trop bruyant, trop stimulant ou trop peu stimulant",
              "Sentiment de ne pas être écouté·e ou compris·e",
            ]} />
          </HighlightBox>

          <PullQuote>
            La bonne question n&apos;est pas «comment faire cesser ce comportement ?» mais «qu&apos;est-ce que la personne cherche à me dire ?»
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Attitudes justes : les repères de base">
          <div className="space-y-3 my-4">
            <div className="flex gap-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
              <span className="text-[#15803D] font-bold text-lg flex-shrink-0">1</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Se présenter calmement</p>
                <p className="text-sm text-gray-600">Se mettre à hauteur de la personne, capter le regard avant de parler. Ne pas arriver par derrière.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
              <span className="text-[#15803D] font-bold text-lg flex-shrink-0">2</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Phrases courtes et simples</p>
                <p className="text-sm text-gray-600">Une information à la fois. Laisser le temps de répondre — ne pas répéter immédiatement si la personne ne répond pas.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
              <span className="text-[#15803D] font-bold text-lg flex-shrink-0">3</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Ne pas corriger ni argumenter</p>
                <p className="text-sm text-gray-600">Entrer dans le monde de la personne plutôt que de la confronter à la réalité. La corriger provoque souvent anxiété ou colère sans apporter de bénéfice.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
              <span className="text-[#15803D] font-bold text-lg flex-shrink-0">4</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Préserver les routines</p>
                <p className="text-sm text-gray-600">Un environnement stable et prévisible est sécurisant. Les repères rassurent là où les capacités cognitives faiblissent.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
              <span className="text-[#15803D] font-bold text-lg flex-shrink-0">5</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Valoriser ce qui reste</p>
                <p className="text-sm text-gray-600">Capacités préservées, goûts, histoire de vie — s&apos;appuyer sur ce que la personne peut encore faire plutôt que sur ses limitations.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-4">
              <span className="text-[#15803D] font-bold text-lg flex-shrink-0">6</span>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Soigner le non-verbal</p>
                <p className="text-sm text-gray-600">Ton de voix, sourire, gestes apaisants — ils comptent souvent plus que les mots. La personne perçoit l&apos;attitude même quand les mots ne passent plus.</p>
              </div>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Situation concrète 1" titre="La répétition">
          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Madame R. demande dix fois en une heure à quelle heure sa fille vient la voir.</strong></p>
            </div>

            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-1">❌ À éviter</p>
              <p className="text-sm text-gray-700 italic">«Vous me l&apos;avez déjà demandé, je viens de vous répondre.»</p>
            </div>

            <div className="border-l-4 border-[#3DBFA0] bg-[#F0FDF4] rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-1">✓ Attitude juste</p>
              <Liste items={[
                "Répondre calmement à chaque fois, d'un ton constant — la personne n'a pas accès au souvenir de la question précédente",
                "Détourner doucement vers une activité rassurante",
                "Vérifier si l'anxiété sous-jacente (peur d'être seule, inquiétude) peut être apaisée",
              ]} />
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Comprendre</p>
              <p className="text-sm text-gray-700">La répétition exprime souvent une <strong>inquiétude</strong>, pas un simple oubli. Madame R. n&apos;oublie pas qu&apos;elle a posé la question — c&apos;est la réassurance qu&apos;elle cherche.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Situation concrète 2" titre="Le refus">
          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Situation</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Monsieur T. refuse catégoriquement de se lever pour le repas et hausse le ton.</strong></p>
            </div>

            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-1">❌ À éviter</p>
              <p className="text-sm text-gray-700 italic">Insister, tirer sur le bras, raisonner longuement.</p>
            </div>

            <div className="border-l-4 border-[#3DBFA0] bg-[#F0FDF4] rounded-r-xl p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-1">✓ Attitude juste</p>
              <Liste items={[
                "Reculer, baisser la tension — ne pas maintenir la pression",
                "Revenir un peu plus tard quand la situation est apaisée",
                "Chercher la cause : douleur ? peur ? pas faim ? trop de bruit ? médicament ?",
                "Proposer un choix simple : «Vous préférez manger ici ou là-bas ?»",
                "Transmettre l'observation à l'équipe si le refus se répète",
              ]} />
            </div>

            <HighlightBox label="Repère LEARNA" couleur="jaune">
              <Texte>Face à un refus de soin répété, à une douleur suspectée ou à un changement brusque de comportement, on <strong>transmet</strong> aux professionnels compétents — on ne décide pas seul·e.</Texte>
            </HighlightBox>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Un comportement «difficile» est presque toujours une tentative d'exprimer un besoin non satisfait",
              "La bonne question : «qu'est-ce que la personne cherche à me dire ?»",
              "Ne pas corriger ni argumenter : entrer dans le monde de la personne",
              "La répétition exprime souvent une inquiétude — répondre calmement à chaque fois",
              "Face à un refus répété ou un changement brusque : transmettre à l'équipe soignante",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Un comportement «difficile» chez une personne atteinte de démence est le plus souvent :",
            reponses: [
              "De la méchanceté volontaire envers les soignants",
              "Une façon d'exprimer un besoin non satisfait",
              "Un signe que la maladie progresse vite",
              "Sans aucune cause identifiable",
            ],
            bonneReponse: 1,
            explication: "Presque tous les comportements difficiles (agitation, refus, répétitions, déambulation) sont des tentatives d'exprimer un besoin : douleur, peur, faim, besoin d'aller aux toilettes, environnement inadapté. La bonne question est «qu'est-ce que la personne cherche à me dire ?»",
          },
          {
            question: "Face à une personne désorientée qui croit que sa mère vient la chercher, il vaut mieux :",
            reponses: [
              "La corriger fermement en lui disant que sa mère est décédée",
              "Entrer dans son monde, rassurer, ne pas confronter à la réalité",
              "Ignorer ce qu'elle dit et changer de sujet brutalement",
              "Appeler immédiatement le médecin",
            ],
            bonneReponse: 1,
            explication: "Corriger une personne atteinte de démence sur la réalité provoque souvent de la détresse et de la colère sans aucun bénéfice, puisqu'elle ne peut pas enregistrer la correction. Entrer dans son monde — accueillir son émotion, rassurer — est l'attitude qui apaise.",
          },
          {
            question: "Quand Madame R. demande pour la dixième fois à quelle heure sa fille vient, c'est parce que :",
            reponses: [
              "Elle cherche à agacer le personnel",
              "Elle fait semblant d'oublier pour attirer l'attention",
              "Elle n'a pas accès au souvenir des questions précédentes et exprime souvent une inquiétude",
              "Elle n'a pas entendu les réponses précédentes",
            ],
            bonneReponse: 2,
            explication: "La répétition n'est pas de la manipulation — la personne n'a tout simplement pas accès au souvenir des questions précédentes. De plus, la répétition exprime souvent une anxiété ou un besoin de réassurance sous-jacent. Répondre calmement à chaque fois est la bonne attitude.",
          },
          {
            question: "Le langage non-verbal (ton de voix, regard, sourire) a peu d'importance avec les personnes atteintes de démence.",
            reponses: [
              "Vrai — ces personnes ne perçoivent plus les nuances",
              "Faux — le non-verbal compte souvent plus que les mots et reste perçu longtemps",
              "Vrai — seul le contenu verbal des messages compte",
              "Faux — mais uniquement dans les premiers stades",
            ],
            bonneReponse: 1,
            explication: "Faux. Le non-verbal (ton de voix, regard, posture, sourire) est souvent le dernier canal de communication qui reste accessible. Même quand les mots ne passent plus, la personne continue à percevoir l'attitude émotionnelle de l'accompagnant.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
