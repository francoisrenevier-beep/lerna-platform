import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module6TransitionAgeAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={6}
        categorie="Transition vers l'âge adulte"
        titre="Construire une transition"
        titrePart2="réussie"
        sousTitre="Synthétiser les apprentissages à travers le retour sur Julien — et identifier les 5 piliers d'une transition réussie."
        duree="30 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="Julien — deux scénarios">
          <Texte>Nous avons suivi Julien et sa famille tout au long de cette formation. Ce dernier module propose un arrêt réflexif : que se serait-il passé si les choses s'étaient déroulées différemment ? Deux scénarios de transition, pour le même Julien, la même famille, le même contexte institutionnel — avec des pratiques professionnelles différentes.</Texte>

          <TableauComparaison
            titre="Deux scénarios pour la même transition"
            colonnes={[
              {
                titre: "Scénario A — Transition subie",
                contenu: [
                  "Orientation imposée, peu expliquée — 'c'est la seule place disponible'",
                  "Famille exclue des décisions clés, informée des résultats",
                  "Julien jamais consulté, ni préparé aux visites",
                  "Tensions durables avec l'équipe — étiquette 'famille difficile' posée dès le premier mois",
                  "Rupture avec l'histoire du jeune — l'EPS n'a pas été impliqué dans la transmission",
                  "Julien en régression dans les premières semaines : les comportements difficiles augmentent",
                ]
              },
              {
                titre: "Scénario B — Transition préparée",
                contenu: [
                  "Processus anticipé, jalonné — visites multiples, échanges avec l'EPS, préparation de Julien",
                  "Parents reconnus comme partenaires experts — leur savoir intégré dans le projet initial",
                  "Julien impliqué à sa mesure — préparé aux réunions, consulté sur ses préférences",
                  "Dialogue maintenu, rôles clairs — la famille sait qui appeler et pour quoi",
                  "Continuité du lien soutenue — les professionnels de l'EPS ont participé à une réunion de transmission",
                  "Julien stable dans les premières semaines : des repères connus ont été transférés dans le nouveau contexte",
                ]
              },
            ]}
          />

          <HighlightBox label="Ce que montrent les deux scénarios" couleur="bleu">
            <Texte>Les deux scénarios ne se distinguent pas par des ressources différentes. Ils se distinguent par des <strong>pratiques</strong> différentes — et par une conviction : que la qualité de la transition conditionne la qualité de tout ce qui suit. Une transition mal vécue laisse des traces durables dans la relation famille-institution, et parfois dans le comportement même du jeune.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Ce que la clinique du handicap nous apprend">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Distinguer les caractéristiques d'une transition subie d'une transition préparée",
              "Comprendre pourquoi prendre soin des parents a des répercussions positives sur la personne accompagnée",
              "Nommer les 5 piliers d'une transition réussie et les articuler en une posture professionnelle cohérente",
              "Identifier un ou deux changements concrets dans votre propre pratique",
            ]} />
          </ConceptBox>
          <Texte>Régine Scelles insiste sur un enjeu majeur pour les pratiques professionnelles dans le secteur du handicap : entre enfants et parents, il y a une coconstruction du sens de la pathologie. Les effets sur chacun et sur le groupe familial sont le fruit de processus complexes dans lesquels chacun des membres peut, à un moment ou à un autre, avoir un rôle central.</Texte>
          <Texte>Cette coconstruction a une implication directe pour les équipes ESE lors des transitions : l'accompagnement de la personne ne peut pas faire l'impasse sur sa famille. Et inversement, prendre soin des parents — au sens du "take care", du souci de l'autre — a des répercussions positives sur la personne accompagnée elle-même. C'est un investissement, pas une charge.</Texte>
          <PullQuote source="Régine Scelles">
            Chaque personne doit pouvoir modifier la réalité froide du handicap en un objet transformé et intériorisé grâce au processus de subjectivation. Ce processus ne peut pas se faire seul — il se fait dans des relations.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Les 5 piliers d'une transition réussie">
          <Texte>Ces cinq piliers ne sont pas des cases à cocher — ils décrivent une posture professionnelle, une orientation dans la relation. Chacun s'articule aux autres : leur cohérence est ce qui fait leur force.</Texte>

          <SchemaEtapes
            titre="Les 5 piliers d'une transition réussie"
            etapes={[
              {
                niveau: "Pilier 01",
                nom: "Anticiper",
                definition: "Ne pas attendre la crise. Ne pas attendre que la place soit confirmée pour commencer à préparer la famille et le jeune. Anticiper les questions qu'ils se posent et y répondre avant qu'ils aient à les poser. Anticiper les difficultés prévisibles et les nommer avant qu'elles surgissent. L'anticipation réduit l'incertitude — qui est le principal générateur d'angoisse dans les transitions."
              },
              {
                niveau: "Pilier 02",
                nom: "Informer",
                definition: "Donner les moyens de se projeter. Informer clairement, de façon cohérente, avec tous les membres de l'équipe qui parlent d'une même voix. Informer sur l'organisation concrète du quotidien — pas seulement sur les valeurs et les missions. Informer Julien lui-même, avec les supports et le temps nécessaires. Une famille qui dispose d'informations claires et fiables peut se projeter — et une famille qui peut se projeter est une famille moins angoissée."
              },
              {
                niveau: "Pilier 03",
                nom: "Reconnaître",
                definition: "Nommer l'expertise des familles. Reconnaître l'histoire longue qu'elles portent — ses blessures et ses ressources. Reconnaître ce que la transition représente pour chaque membre de la famille, y compris le père et la fratrie souvent oubliés. Reconnaître les comportements difficiles pour ce qu'ils expriment plutôt que pour ce qu'ils semblent être. La reconnaissance n'est pas de la validation — c'est une condition de la rencontre."
              },
              {
                niveau: "Pilier 04",
                nom: "Associer",
                definition: "Faire de Julien un acteur, pas un objet. Faire de la famille un partenaire, pas un visiteur. Associer signifie co-construire — pas simplement informer ou consulter. La personne accompagnée doit pouvoir influencer réellement sa propre vie dans les domaines accessibles. La famille doit pouvoir contribuer à la qualité de l'accompagnement avec son savoir propre. Associer, c'est reconnaître que les professionnels n'ont pas toutes les réponses."
              },
              {
                niveau: "Pilier 05",
                nom: "Soutenir",
                definition: "Rester présent dans la durée — y compris quand la relation est difficile. Maintenir le dialogue dans les moments de tension plutôt que de s'en défendre. Soutenir la famille dans les moments où elle doute, où elle est épuisée, où elle ne sait plus comment faire confiance. Le soutien n'est pas de l'infantilisation — c'est une présence ajustée qui reconnaît que traverser une transition est difficile pour tout le monde."
              },
            ]}
            note="Ces cinq piliers fonctionnent ensemble. Anticiper sans informer génère des attentes sans contenu. Informer sans reconnaître crée un monologue institutionnel. Reconnaître sans associer reste de la bienveillance unilatérale. Et aucun de ces piliers ne vaut sans le cinquième : le soutien dans la durée."
          />
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="L'ESE comme espace de développement — une exigence éthique">
          <Texte>La transition vers l'ESE est souvent vécue — par les familles, et parfois par les professionnels — comme un "point d'arrivée". La scolarité est terminée, une place a été trouvée, l'admission est faite. Pour les familles qui ont attendu des mois ou des années, c'est parfois un soulagement tel qu'il masque ce qui reste à construire.</Texte>

          <PullQuote source="Article de référence de la formation">
            Faire de l'ESE un espace de développement et de reconnaissance du statut adulte, plutôt qu'un simple point d'arrivée imposé par la contrainte, constitue une exigence éthique et institutionnelle majeure.
          </PullQuote>

          <HighlightBox label="L'ESE comme début, pas comme fin" couleur="bleu">
            <Texte>Julien a 17 ans. Il entrera peut-être en ESE à 18 ou 19 ans. Il y passera potentiellement plusieurs décennies de sa vie. Ce qui se construit lors de la transition — la relation avec l'institution, la confiance de la famille, la perception que Julien a de lui-même dans ce nouveau contexte — conditionne profondément ce qui suivra.</Texte>
            <Texte>Une transition réussie n'est pas seulement une transition sans incident. C'est une transition qui pose les bases d'un développement possible : pour Julien, pour sa famille, et pour la relation entre les deux. C'est une transition qui commence à construire l'ESE comme un espace où quelque chose peut croître — pas seulement comme un espace où quelqu'un est pris en charge.</Texte>
          </HighlightBox>

          <Texte>Cela suppose que les équipes ESE abordent chaque nouveau résident non pas comme "un dossier à intégrer" mais comme une personne qui commence un nouveau chapitre — avec tout ce que cela implique d'espoir, d'appréhension, et de potentiel. Et que les pratiques professionnelles — de l'accueil à l'accompagnement quotidien — soient cohérentes avec cette vision.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Retour sur Julien — ce qu'il aurait pu dire">
          <Texte>Pendant toute cette formation, nous avons beaucoup parlé de Julien. Nous avons décrit ses caractéristiques (déficience intellectuelle modérée, TSA), ses parents (Nathalie et Marc), sa sœur (Léa). Nous l'avons vu en réunion, regarder par la fenêtre pendant que les adultes parlaient de son avenir.</Texte>
          <Texte>Si Julien avait pu s'exprimer — avec les supports, le temps et l'attention nécessaires — qu'aurait-il dit ? C'est une question qu'on ne lui a pas posée. Ce module se termine en posant cette question, non pas pour y répondre à sa place, mais pour remettre au centre ce qui devrait y être depuis le début.</Texte>

          <div className="space-y-4 my-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-2">Ce que Julien aurait peut-être dit</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">« J'aime les photos. J'aurais aimé voir les photos du nouvel endroit avant d'y aller. »</p>
              <p className="text-gray-700 text-sm leading-relaxed italic mt-2">« Les gens parlent vite. J'aimerais qu'ils me laissent le temps de répondre. »</p>
              <p className="text-gray-700 text-sm leading-relaxed italic mt-2">« Ma maman est inquiète. Moi aussi je suis inquiet. »</p>
              <p className="text-gray-700 text-sm leading-relaxed italic mt-2">« Je voudrais continuer à voir mon éducateur de l'EPS parfois. »</p>
              <p className="text-gray-700 text-sm leading-relaxed italic mt-2">« C'est bien quand on me dit ce qui va se passer avant que ça arrive. »</p>
            </div>
          </div>

          <HighlightBox label="Ce que ces phrases nous enseignent" couleur="vert">
            <Texte>Chacune de ces phrases fictives correspond à un besoin documenté par la recherche sur l'autodétermination et l'accompagnement des personnes avec TSA et déficience intellectuelle. Elles ne sont pas extraordinaires — elles sont simples, concrètes, accessibles. Et pourtant, dans combien de transitions institutionnelles ces besoins sont-ils réellement pris en compte ?</Texte>
            <Texte>C'est peut-être la question la plus importante que ce dernier module peut laisser : pas "est-ce qu'on fait bien notre travail institutionnel ?" mais "est-ce que Julien, lui, fait l'expérience que son avenir se construit avec lui ?"</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Du savoir à la pratique : un ou deux changements concrets">
          <Texte>Les formations changent peu de choses si elles restent dans le registre du savoir sans atteindre celui des pratiques. Ce module final invite à une étape supplémentaire : identifier, dans votre propre contexte professionnel, un ou deux changements concrets que les apprentissages de cette formation rendent possibles.</Texte>

          <ConceptBox label="Questions pour la pratique" titre="Du module à l'action">
            <Liste items={[
              "Dans la prochaine réunion de réseau ou d'admission, comment allez-vous modifier la place que vous donnez à la parole du jeune ?",
              "Quelle pratique de votre équipe renforce actuellement les tensions avec les familles — et comment pourrait-elle être modifiée ?",
              "Qu'est-ce que vous ne savez pas encore sur l'histoire de la famille que vous accompagnez — et comment pourriez-vous le découvrir ?",
              "Dans votre institution, qui 'médie' entre la logique familiale et la logique institutionnelle — et comment ce rôle est-il soutenu ?",
              "Comment votre équipe se soutient-elle collectivement pour maintenir la bonne distance dans les situations de transition difficiles ?",
            ]} />
          </ConceptBox>

          <HighlightBox label="Le changement de posture : une transformation progressive" couleur="bleu">
            <Texte>Les cinq piliers de cette formation ne se mettent pas en œuvre du jour au lendemain. Ils demandent une transformation progressive de la posture professionnelle — qui commence souvent par une transformation du regard. Voir une famille méfiante comme une famille chargée d'histoire. Voir un jeune silencieux comme un jeune à qui on n'a pas posé la question. Voir une tension comme un signal plutôt qu'une attaque. Ces déplacements de regard sont le début du changement.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que cette formation a posé">
          <Texte>Six modules, une histoire — Julien et sa famille — et une conviction : que la qualité d'une transition dépend avant tout de la qualité de la relation qui l'entoure. Pas des procédures. Pas des ressources. De la relation.</Texte>
          <Texte>Cette relation se construit dans des pratiques ordinaires : prendre le temps d'écouter avant de parler, tenir ses engagements, donner au jeune des prises réelles sur son existence, maintenir le dialogue quand c'est difficile. Elle se construit aussi collectivement : dans des équipes qui se soutiennent mutuellement, qui partagent le poids de la médiation, qui trouvent des espaces pour déposer ce que les situations leur font vivre.</Texte>
          <HighlightBox label="Les 5 piliers — synthèse finale" couleur="vert">
            <Liste items={[
              "01 — Anticiper : ne pas attendre la crise pour agir",
              "02 — Informer : donner les moyens de se projeter, de façon claire et cohérente",
              "03 — Reconnaître : nommer l'expertise des familles et l'histoire qu'elles portent",
              "04 — Associer : faire du jeune un acteur et de la famille un partenaire",
              "05 — Soutenir : rester présent dans la durée, y compris quand la relation est difficile",
            ]} />
          </HighlightBox>
          <Texte>Faire de l'ESE un espace de développement et de reconnaissance du statut adulte — plutôt qu'un simple point d'arrivée imposé par la contrainte — est une exigence éthique. Et cette exigence commence dans chaque réunion, chaque appel téléphonique, chaque geste professionnel ordinaire.</Texte>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Dans le scénario A (transition subie), Julien présente des comportements difficiles en augmentation dans les premières semaines. Quelle en est l'explication la plus cohérente avec le contenu de la formation ?",
            reponses: [
              "La structure n'est pas adaptée à son profil clinique",
              "La transition mal préparée — sans implication de Julien, sans continuité des repères — a généré une insécurité qui s'exprime dans les comportements",
              "Julien testait les limites de l'équipe, comme tout résident à l'arrivée",
              "Les comportements difficiles sont inévitables lors de toute transition — le scénario B ne changerait rien",
            ],
            bonneReponse: 1,
            explication: "Une transition non préparée génère de l'insécurité — pour Julien comme pour sa famille. Cette insécurité s'exprime souvent dans les comportements de la personne accompagnée. Les repères connus de l'EPS n'ont pas été transférés, Julien n'a pas été préparé au changement, ses préférences et signaux n'ont pas été transmis à la nouvelle équipe. Les comportements difficiles sont moins le signe d'un trouble clinique que le signal d'un contexte insécurisant.",
          },
          {
            question: "Pourquoi prendre soin des parents a-t-il des répercussions positives sur la personne accompagnée elle-même ?",
            reponses: [
              "Parce que des parents satisfaits participent plus aux activités de l'institution",
              "Parce que entre enfants et parents se construit une coconstruction du sens — et que le bien-être familial influence directement le bien-être de la personne",
              "Parce que les parents qui vont bien téléphonent moins, ce qui libère du temps pour l'accompagnement",
              "C'est une corrélation observée mais sans lien de causalité clairement établi",
            ],
            bonneReponse: 1,
            explication: "Régine Scelles documente cette coconstruction : entre la personne handicapée et ses proches, les processus de sens se co-construisent. La façon dont les parents traversent la transition, la qualité de leur relation avec l'institution, leur capacité à progressivement déléguer — tout cela influence le vécu subjectif de la personne accompagnée. Prendre soin des parents n'est pas un luxe ou une attention périphérique — c'est un investissement direct dans la qualité de l'accompagnement.",
          },
          {
            question: "Le cinquième pilier est 'Soutenir'. Qu'est-ce que ce pilier implique concrètement ?",
            reponses: [
              "Être toujours disponible pour répondre à toutes les demandes de la famille",
              "Rester présent dans la durée — y compris quand la relation est difficile — et maintenir le dialogue dans les moments de tension",
              "Soutenir émotionnellement les professionnels contre les comportements difficiles des familles",
              "Organiser un suivi psychologique pour toutes les familles qui vivent une transition",
            ],
            bonneReponse: 1,
            explication: "Soutenir, dans le sens des cinq piliers, signifie maintenir une présence professionnelle dans la durée — pas une disponibilité illimitée. Cela inclut notamment de rester dans le dialogue quand la relation est difficile, de ne pas se retirer derrière des procédures quand les tensions montent, et de rester attentif aux familles au-delà de la phase aiguë de la transition. Les tensions qui surviennent un an après l'entrée ont souvent des racines dans ce qui n'a pas été élaboré lors de l'accueil.",
          },
          {
            question: "Qu'est-ce qui distingue fondamentalement un 'espace de développement' d'un 'point d'arrivée' dans la façon dont l'ESE se pense ?",
            reponses: [
              "Un espace de développement propose plus d'activités — sport, ateliers, sorties",
              "Un espace de développement reconnaît que la transition est un début, non une fin — et oriente les pratiques vers la croissance de la personne et de sa relation avec son entourage",
              "Un espace de développement accueille des personnes avec des niveaux d'autonomie plus élevés",
              "Ce sont des termes administratifs distincts qui n'influencent pas les pratiques concrètes",
            ],
            bonneReponse: 1,
            explication: "La distinction entre 'point d'arrivée' et 'espace de développement' est une question de posture professionnelle fondamentale. Un point d'arrivée gère, accueille, maintient. Un espace de développement vise la croissance de la personne — construire son identité adulte, développer ses capacités, enrichir ses relations. Cette posture se traduit dans des pratiques concrètes : impliquer le jeune dans son projet, soutenir l'émancipation progressive, reconnaître les parents comme partenaires de ce développement.",
          },
          {
            question: "Les cinq piliers fonctionnent ensemble. Que se passe-t-il quand on applique 'Informer' sans 'Reconnaître' ?",
            reponses: [
              "Cela ne pose aucun problème — informer et reconnaître sont deux missions distinctes qui peuvent être menées séparément",
              "Cela crée un monologue institutionnel : l'institution livre ses informations sans prendre en compte ce que sait et vit la famille",
              "L'information est plus efficace quand elle n'est pas mêlée à des considérations émotionnelles",
              "Les familles reçoivent les informations plus facilement quand la relation n'est pas 'trop' chaleureuse",
            ],
            bonneReponse: 1,
            explication: "Informer sans reconnaître produit un déséquilibre : l'institution transmet son savoir à une famille dont le savoir propre n'est pas sollicité. Cette asymétrie reproduit une posture d'expert-profane qui fragilise le partenariat. L'information est bien reçue quand la famille se sent reconnue dans sa propre expertise — quand elle sent qu'elle reçoit une information qui s'ajoute à ce qu'elle sait, plutôt qu'une information qui prétend tout dire.",
          },
          {
            question: "Ce module propose d'identifier 'un ou deux changements concrets dans votre propre pratique'. Pourquoi cette étape est-elle présentée comme essentielle ?",
            reponses: [
              "Pour satisfaire les exigences de certification de la formation",
              "Parce que les formations changent peu de choses si elles restent dans le registre du savoir sans atteindre celui des pratiques — la transformation commence dans des gestes concrets",
              "Parce que les équipes sont évaluées sur l'application des formations suivies",
              "Pour permettre à l'institution de suivre l'impact de la formation sur le terrain",
            ],
            bonneReponse: 1,
            explication: "La formation est une condition nécessaire mais non suffisante du changement professionnel. Le savoir doit se traduire en pratiques concrètes — dans le prochain entretien, la prochaine réunion, la prochaine visite d'une famille. Identifier un ou deux changements précis et réalisables — plutôt qu'une transformation totale — est une façon de rendre le passage du savoir à l'action à la fois possible et mesurable.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
