import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import { AccrocheScenario } from "@/components/module/AccrocheScenario"

export function Module4PPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Objectifs et évaluation"
        titre="Définir des objectifs"
        titrePart2="PPH-SMART"
        sousTitre="Traduire une analyse PPH en objectifs opérationnels concrets, mesurables et co-construits — pour rendre les actions évaluables et efficaces."
        duree="50 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Compétences visées" titre="Ce que vous allez apprendre">
            <Liste items={[
              "Comprendre pourquoi les objectifs flous sont contre-productifs",
              "Maîtriser les cinq critères SMART appliqués au PPH",
              "Distinguer objectif de participation et objectif environnemental",
              "Formuler des objectifs PPH-SMART à partir d'une analyse de situation",
              "Utiliser les objectifs comme outil de dialogue et d'évaluation"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="De l'action à l'objectif mesurable">
          <AccrocheScenario titre="Un objectif qui ne dit rien">
            <p>Réunion d'équipe. Le projet de vie de Julien est relu. Un professionnel propose : "L'objectif pour le prochain trimestre : améliorer l'autonomie de Julien." Tout le monde acquiesce. Six mois plus tard : a-t-on réussi ? Personne ne sait. Pourquoi ? Parce que "améliorer l'autonomie" ne définit ni quelle autonomie, ni dans quel contexte, ni comment la mesurer, ni à quelle échéance.</p>
          </AccrocheScenario>

          <Texte>Les objectifs flous sont l'un des obstacles les plus fréquents dans les pratiques d'accompagnement. Ils semblent raisonnables mais sont inopérants : ils ne permettent pas d'évaluer si on a réussi, ni de savoir sur quoi agir en priorité.</Texte>

          <HighlightBox label="Ce qu'un objectif PPH-SMART doit faire" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Décrire précisément ce qui va changer dans la participation sociale de la personne",
              "Identifier les actions concrètes que le professionnel va mener sur l'environnement",
              "Permettre d'évaluer objectivement si l'objectif est atteint",
              "Servir d'outil de dialogue avec la personne accompagnée — pas de contrôle"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4.1" titre="Objectifs flous vs objectifs SMART : la différence en pratique">
          <TableauComparaison
            titre="Objectifs flous vs objectifs PPH-SMART"
            colonnes={[
              {
                titre: "Objectif flou (à éviter)",
                contenu: [
                  "Améliorer l'autonomie de Thomas",
                  "Favoriser la participation de Marie aux activités",
                  "Travailler la communication de Lucas",
                  "Soutenir l'intégration professionnelle de Sophie"
                ]
              },
              {
                titre: "Objectif PPH-SMART (à formuler)",
                contenu: [
                  "Thomas prépare seul son repas du soir 4 fois sur 7, sans aide humaine, d'ici le 1er mars",
                  "Marie participe à l'atelier peinture du mardi matin à raison de 3 séances sur 4, avec satisfaction exprimée ≥ 6/10",
                  "Lucas utilise sa tablette de CAA pour saluer et demander une aide 2 fois par séance d'ici fin du mois",
                  "Sophie participe à 3 réunions d'équipe sur 4, prend la parole au moins une fois, d'ici 3 mois"
                ]
              }
            ]}
          />

          <Texte>La différence n'est pas stylistique. Elle est opérationnelle : un objectif SMART définit exactement la situation à atteindre, comment la mesurer, et à quelle date. Il rend l'évaluation incontestable.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4.2" titre="Décomposer le PPH-SMART">
          <Texte>La méthode SMART (Doran, 1981) est ici adaptée au cadre PPH pour cibler la participation sociale, pas les déficiences.</Texte>

          <HighlightBox label="S — Spécifique" couleur="bleu">
            <Texte>L'objectif est ciblé sur une seule habitude de vie concrète, dans un contexte précis, pour une personne donnée. Pas d'objectifs généraux ou multi-niveaux.</Texte>
            <Texte>Question à se poser : Quelle habitude de vie exactement ? Dans quel contexte précis ? Pour cette personne spécifiquement ?</Texte>
            <Texte>Exemple : "Sophie participera aux réunions d'équipe hebdomadaires dans la salle B."</Texte>
          </HighlightBox>

          <HighlightBox label="M — Mesurable" couleur="vert">
            <Texte>L'objectif est quantifiable en termes de participation sociale : fréquence, niveau d'aide, satisfaction, durée, nombre d'interventions. On ne mesure pas des efforts ou des intentions — on mesure la participation.</Texte>
            <Texte>Question à se poser : Comment saura-t-on que l'objectif est atteint ? Quel indicateur chiffré ?</Texte>
            <Texte>Exemple : "Sophie participe à au moins 3 réunions sur 4 et prend la parole au moins une fois."</Texte>
          </HighlightBox>

          <HighlightBox label="A — Atteignable" couleur="jaune">
            <Texte>L'objectif devient atteignable parce que l'environnement est modifié — pas parce que la personne est changée. La transformation environnementale est la condition de l'atteignabilité. Un objectif irréaliste sans modification de l'environnement ne respecte pas le cadre PPH.</Texte>
            <Texte>Question à se poser : Quelles modifications de l'environnement rendront cet objectif réellement atteignable ?</Texte>
          </HighlightBox>

          <HighlightBox label="R — Relevant (pertinent)" couleur="bleu">
            <Texte>L'objectif est connecté au projet et au désir de la personne — son autodétermination. Il a du sens pour elle, pas seulement pour l'équipe ou l'institution. Un objectif pertinent répond à la question : "Est-ce que c'est ce que la personne veut ?"</Texte>
            <Texte>Question à se poser : Cet objectif correspond-il à ce que la personne souhaite réellement ? A-t-il été validé avec elle ?</Texte>
          </HighlightBox>

          <HighlightBox label="T — Temporellement défini" couleur="vert">
            <Texte>L'objectif a une date butoir claire pour évaluer l'atteinte. Cette échéance structure l'action, permet de réajuster si nécessaire, et évite que les objectifs restent ouverts indéfiniment sans évaluation.</Texte>
            <Texte>Question à se poser : Quelle est la date d'évaluation ? Qui est responsable de l'évaluation ?</Texte>
            <Texte>Exemple : "D'ici le 1er mars, évaluation en réunion d'équipe."</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4.3" titre="Deux niveaux d'objectifs complémentaires">
          <Texte>Dans le cadre PPH, on formule toujours deux types d'objectifs qui se complètent : un objectif pour la personne, et un objectif pour le professionnel. Ces deux niveaux sont indissociables.</Texte>

          <HighlightBox label="Niveau 1 — Objectif de participation (pour la personne)" couleur="bleu">
            <Texte>Décrit l'amélioration de la réalisation d'une habitude de vie. C'est le résultat attendu pour la personne en termes de participation sociale. C'est ce qui se mesurera dans sa vie réelle.</Texte>
            <Texte>Exemple : "Julien participera au repas collectif du vendredi midi de façon autonome, sans aide physique, pendant au moins 45 minutes, à raison de 3 fois sur 4 — d'ici le 15 mars."</Texte>
          </HighlightBox>

          <HighlightBox label="Niveau 2 — Objectif environnemental (pour le professionnel)" couleur="vert">
            <Texte>Décrit l'action concrète que le professionnel ou l'équipe va mener sur l'environnement. C'est ce que l'équipe s'engage à faire — la condition nécessaire à l'atteinte de l'objectif de participation.</Texte>
            <Texte>Exemple : "L'équipe mettra en place des couverts adaptés, un placement stratégique à côté d'un pair aidant, et un système de signal discret — avant le 1er mars."</Texte>
          </HighlightBox>

          <PullQuote>
            L'objectif environnemental (ce que fait le professionnel) est la condition qui rend l'objectif de participation (ce que vit la personne) réellement atteignable. Sans action sur l'environnement, l'objectif de participation reste une intention.
          </PullQuote>

          <AccrocheScenario type="reflexion">
            <p>Si l'objectif de participation n'est pas atteint, la première question n'est pas "qu'est-ce qui ne va pas chez la personne ?", mais "est-ce que l'objectif environnemental a été atteint ?" Si l'environnement n'a pas été transformé comme prévu, c'est là que se situe le problème — pas chez la personne.</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Section 4.4 — Étude de cas" titre="Les objectifs PPH-SMART de Sophie">
          <HighlightBox label="Rappel de l'analyse (module 3)" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Habitude de vie : participation aux réunions d'équipe hebdomadaires",
              "Obstacles : salle inaccessible en fauteuil, durée de 90 min sans pause, vocabulaire technique, pas de support visuel",
              "Facilitateurs : équipe engagée, salle B accessible disponible, tablette avec messagerie"
            ]} />
          </HighlightBox>

          <HighlightBox label="Objectif environnemental — Ce que l'équipe s'engage à faire" couleur="vert">
            <Texte>D'ici le 1er du mois prochain, l'équipe :</Texte>
            <Liste items={[
              "Déplace toutes les réunions dans la salle B (accessible en fauteuil, espace prévu)",
              "Prépare un ordre du jour illustré et l'envoie à Sophie 48h avant via messagerie",
              "Instaure une pause de 10 minutes après 30 minutes de réunion",
              "Reformule les décisions importantes en langage simple en fin de séance"
            ]} />
          </HighlightBox>

          <HighlightBox label="Objectif de participation — Ce que Sophie pourra réaliser" couleur="bleu">
            <Texte>D'ici 3 mois (date d'évaluation fixée en réunion d'équipe), Sophie :</Texte>
            <Liste couleur="bleu" items={[
              "Participera à au moins 3 réunions sur 4",
              "Exprimera sa satisfaction à 7/10 minimum (mesurée par auto-évaluation adaptée)",
              "Interviendra au moins une fois par réunion sur un sujet qui la concerne"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4.5 — Pour pratiquer" titre="Grille de formulation d'un objectif PPH-SMART">
          <Texte>Avant de finaliser un objectif, posez-vous ces six questions :</Texte>

          <div className="space-y-3 mb-6">
            {[
              { lettre: "S", question: "Quelle habitude de vie précise, dans quel contexte, pour qui ?" },
              { lettre: "M", question: "Quel indicateur chiffré permettra de savoir si c'est atteint ?" },
              { lettre: "A", question: "Quelles modifications de l'environnement rendent cela atteignable ?" },
              { lettre: "R", question: "Est-ce que la personne veut vraiment ça ? A-t-elle validé cet objectif ?" },
              { lettre: "T", question: "Quelle est la date d'évaluation ? Qui est responsable ?" },
              { lettre: "+", question: "Avez-vous formulé l'objectif environnemental (ce que vous allez faire) en plus de l'objectif de participation ?" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#1B2D5B]/3 border border-[#1B2D5B]/10 rounded-lg px-4 py-3">
                <span className="text-[#1B2D5B] font-bold text-sm w-6 flex-shrink-0 mt-0.5">{item.lettre}</span>
                <p className="text-gray-700 text-sm leading-relaxed">{item.question}</p>
              </div>
            ))}
          </div>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce qu'il faut retenir">
          <HighlightBox label="Les points essentiels" couleur="vert">
            <Liste items={[
              "Les objectifs flous ne permettent pas d'évaluer le succès — SMART y remédie",
              "Chaque critère SMART répond à une question précise sur la participation et l'action",
              "Deux niveaux indissociables : objectif de participation (personne) + objectif environnemental (professionnel)",
              "L'objectif environnemental est la condition nécessaire à l'atteinte de l'objectif de participation",
              "Si la participation n'est pas atteinte : vérifier d'abord si l'environnement a bien été transformé"
            ]} />
          </HighlightBox>

          <PullQuote>
            L'objectif PPH-SMART n'est pas un outil de contrôle. C'est un outil de dialogue, de co-construction et d'évaluation honnête. Il permet de mesurer ce qui compte vraiment : l'augmentation de la participation sociale.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
        questions={[
          {
            question: "Pourquoi les objectifs flous sont-ils contre-productifs ?",
            reponses: [
              "Ils sont trop ambitieux pour être atteints",
              "Ils ne permettent pas d'évaluer objectivement si on a réussi",
              "Ils demandent trop de ressources humaines",
              "Ils ne respectent pas le cadre légal de l'accompagnement"
            ],
            bonneReponse: 1,
            explication: "Des objectifs comme 'améliorer l'autonomie' ne définissent ni quelle autonomie, ni dans quel contexte, ni comment la mesurer, ni à quelle échéance. Sans ces précisions, il est impossible d'évaluer le succès — ou l'échec."
          },
          {
            question: "Que signifie le R dans PPH-SMART ?",
            reponses: [
              "Réaliste — l'objectif ne doit pas être trop ambitieux",
              "Relevant (pertinent) — l'objectif est connecté au projet et au désir de la personne",
              "Répétable — l'objectif peut être évalué plusieurs fois",
              "Réévaluable — l'objectif peut être modifié en cours de route"
            ],
            bonneReponse: 1,
            explication: "R signifie Relevant (pertinent) : l'objectif doit être connecté au projet et aux désirs de la personne — son autodétermination. Il doit avoir du sens pour elle, pas seulement pour l'équipe ou l'institution."
          },
          {
            question: "Quelle est la différence entre l'objectif de participation et l'objectif environnemental ?",
            reponses: [
              "Il n'y a pas de différence, c'est la même chose formulée différemment",
              "L'objectif de participation décrit ce que la personne réalisera ; l'objectif environnemental décrit ce que le professionnel fera sur l'environnement",
              "L'objectif de participation est à long terme ; l'objectif environnemental est à court terme",
              "L'objectif environnemental est rédigé par le médecin ; l'objectif de participation par l'éducateur"
            ],
            bonneReponse: 1,
            explication: "L'objectif de participation décrit ce que la personne va pouvoir réaliser (participation sociale). L'objectif environnemental décrit ce que le professionnel va faire sur l'environnement pour rendre cela possible. Les deux sont indissociables."
          },
          {
            question: "Si un objectif de participation n'est pas atteint, la première question PPH est :",
            reponses: [
              "Qu'est-ce qui ne va pas chez la personne ?",
              "L'objectif était-il trop ambitieux ?",
              "L'objectif environnemental a-t-il été atteint — l'environnement a-t-il bien été transformé ?",
              "Faut-il changer de professionnel référent ?"
            ],
            bonneReponse: 2,
            explication: "Dans la logique PPH, si la participation n'est pas atteinte, on vérifie d'abord si l'environnement a bien été transformé comme prévu. Si l'objectif environnemental n'est pas atteint, c'est là que se situe le problème — pas chez la personne."
          },
          {
            question: "Un objectif PPH-SMART vise principalement à :",
            reponses: [
              "Rééduquer la personne pour réduire ses déficiences",
              "Mesurer la réduction des obstacles environnementaux et l'amélioration de la participation sociale",
              "Évaluer les compétences professionnelles de l'équipe d'accompagnement",
              "Établir un diagnostic de la situation de handicap de la personne"
            ],
            bonneReponse: 1,
            explication: "Un objectif PPH-SMART ne vise pas à rééduquer la personne. Il mesure l'amélioration de la participation sociale — résultat de la transformation de l'environnement — et permet d'évaluer l'efficacité des actions menées."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
