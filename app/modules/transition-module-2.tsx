import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module2TransitionAgeAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Transition vers l'âge adulte"
        titre="Ce que vivent réellement les parents"
        titrePart2="deuil, inquiétudes et réactivation des vécus anciens"
        sousTitre="Comprendre les émotions qui accompagnent cette période — et pourquoi elles sont légitimes, même quand elles compliquent la relation avec les professionnels."
        duree="45 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="Nathalie — extrait d'entretien fictif">
          <HighlightBox label="Ce que disent les parents" couleur="bleu">
            <Texte>« J'ai peur de ce qui va arriver après l'école. Depuis dix-sept ans, j'organise tout. Je connais les intervenants, je sais ce qui fonctionne avec Julien. Et là, il va falloir tout recommencer dans un endroit qu'on ne connaît pas, avec des gens qu'on ne connaît pas. Ce n'est pas que je ne leur fais pas confiance — c'est que je ne les connais pas encore. Et Julien, lui, ne peut pas me dire comment ça se passe. »</Texte>
            <Texte>Ce témoignage fictif condense ce que de nombreuses recherches et expériences cliniques documentent : la transition vers le dispositif adulte est vécue par les parents comme une confrontation à plusieurs peurs simultanées. Ces peurs ne disparaissent pas parce qu'on les ignore. Elles s'expriment — parfois de façon indirecte, parfois lors des moments les moins attendus.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Des émotions légitimes qui méritent d'être comprises">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre le concept de deuil de l'enfant idéalisé et ce qui le rend singulier dans le contexte du handicap",
              "Identifier les étapes du processus de deuil et leurs manifestations dans la relation avec les institutions",
              "Nommer les grandes inquiétudes des parents à l'approche de la transition",
              "Comprendre le phénomène de réactivation des vécus anciens et son impact sur les comportements familiaux",
            ]} />
          </ConceptBox>
          <Texte>Les émotions que vivent les parents à l'approche de la transition vers le dispositif adulte ne sont pas des obstacles à l'accompagnement professionnel. Ce sont des signaux sur ce que porte la famille — et des informations précieuses pour construire un accueil adapté. Un professionnel qui comprend ces émotions ne sera pas déstabilisé par elles. Il saura les lire, les accueillir, et s'en servir comme leviers plutôt que les vivre comme des attaques.</Texte>
          <Texte>Ce module s'appuie notamment sur les travaux de Françoise Peille, psychologue clinicienne, et sur le modèle d'Elisabeth Kübler-Ross appliqué aux processus de deuil non ordinaires.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le deuil de l'enfant idéalisé : un deuil sans fin">
          <Texte>Avant même la naissance, chaque parent construit une représentation imaginaire de l'enfant à venir : beau, en bonne santé, conforme à ses attentes. Cette représentation — parfois désignée comme "l'enfant imaginaire" — est normale et universelle. Lorsque la réalité s'éloigne profondément de cette image, les parents traversent un processus qui ressemble à un deuil, sans que leur enfant soit décédé.</Texte>

          <ConceptBox label="Le deuil de l'enfant idéalisé" titre="Un deuil sans corps, sans rite — et sans résolution possible">
            <Texte>Ce deuil présente des caractéristiques qui le rendent particulièrement difficile à traverser :</Texte>
            <Liste items={[
              "Il est socialement non reconnu : il n'y a pas de funérailles, pas de rituel, personne ne vous dit 'toutes mes condoléances'",
              "L'objet du deuil est vivant : l'enfant réel est là, présent, aimé — ce qui rend impossible le travail de séparation ordinaire",
              "Il se répète : chaque nouvelle étape de vie (scolarité, orientation, transition à l'âge adulte) réactive le deuil de ce qu'aurait pu être l'enfant sans handicap",
              "Il coexiste avec l'amour : ce double registre simultané — deuil et attachement — est psychiquement très coûteux",
            ]} />
          </ConceptBox>

          <PullQuote source="Françoise Peille, psychologue clinicienne, Empan n°104">
            Il s'agit d'une perte : perte de l'enfant rêvé quand il s'agit d'un enfant porteur d'un handicap à la naissance, ou perte de la relation antérieure si le handicap est survenu plus tard. On peut parler de "deuil tronqué ou entravé" : s'il n'y a pas mort, il y a toujours perte avec son cortège de souffrance, d'incompréhension, de disparition d'une relation suffisamment satisfaisante.
          </PullQuote>

          <HighlightBox label="Ce que la transition réactive dans ce deuil" couleur="jaune">
            <Texte>La transition vers l'ESE est l'une des étapes qui réactivent le plus intensément ce deuil de l'enfant idéalisé. Elle confronte les parents à plusieurs réalités douloureuses simultanément :</Texte>
            <Liste items={[
              "La scolarité se termine — et avec elle, le dernier espace où leur enfant était parmi d'autres enfants, dans un dispositif conçu pour le faire progresser",
              "L'entrée dans le dispositif adulte rend visible, de façon définitive, que les acquis scolaires n'ouvriront pas les portes que les parents avaient peut-être encore espérées",
              "Le regard de la société change : un enfant différent peut susciter de la sympathie, un adulte différent suscite souvent de la gêne ou de l'indifférence",
              "Le corps de Julien a changé — il est devenu un homme, et cette transformation physique rappelle l'écart entre l'adulte qu'il est et l'adulte qu'on avait imaginé",
            ]} />
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Vignette — Nathalie</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Nathalie, suite.</strong> Un soir, Nathalie range les photos de la dernière fête de l'EPS. Elle tombe sur une photo de Julien à 6 ans, le jour de sa première rentrée scolaire. Elle pleure, sans pouvoir tout à fait expliquer pourquoi. Ce ne sont pas des larmes pour Julien tel qu'il est — elle l'aime profondément. Ce sont des larmes pour celui qu'il n'est pas, celui qu'elle avait imaginé. Ces larmes-là, elle ne les a jamais vraiment terminées. Et la fin de l'école les a réveillées.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le processus de deuil : des étapes non linéaires">
          <Texte>Les réactions des parents face aux moments de transition suivent souvent un processus comparable aux étapes décrites par Elisabeth Kübler-Ross, initialement développées pour le deuil par décès. Ces étapes ne sont pas des cases à cocher dans un ordre préétabli — elles peuvent se chevaucher, revenir, s'exprimer avec des intensités très différentes selon l'histoire de chaque famille et selon la qualité de l'accompagnement reçu.</Texte>

          <SchemaEtapes
            titre="Les étapes du processus de deuil appliqué au handicap"
            etapes={[
              {
                niveau: "Étape 1",
                nom: "Le choc et la sidération",
                definition: "Réaction immédiate face à l'annonce ou à un moment de transition majeur. Le parent peut sembler absent, incapable de réagir, comme figé. Ce n'est pas de l'indifférence : c'est un mécanisme de protection psychique — le cerveau met le traumatisme à distance pour permettre la survie immédiate."
              },
              {
                niveau: "Étape 2",
                nom: "Le déni",
                definition: "« Ce n'est pas possible. » Le parent peut minimiser la situation, refuser d'envisager l'avenir, retarder les démarches. Ce n'est pas de la mauvaise volonté — c'est un temps nécessaire pour que la réalité puisse être intégrée progressivement, à un rythme qui ne soit pas destructeur."
              },
              {
                niveau: "Étape 3",
                nom: "Le marchandage",
                definition: "Recherche d'explications rationnelles, parfois illogiques. Tentatives de trouver des responsables, de comprendre 'pourquoi nous'. Cette phase cherche à reprendre du contrôle sur une situation vécue comme hors de contrôle. Elle peut s'exprimer par une multiplication des démarches, des questions incessantes, une tendance à contester les orientations."
              },
              {
                niveau: "Étape 4",
                nom: "La colère et la tristesse",
                definition: "Phase souvent la plus longue. Pleurs, colère, sentiment d'injustice, sentiment d'être abandonné par les institutions. Cette colère est parfois dirigée vers les professionnels — non parce qu'ils ont mal agi, mais parce qu'ils sont disponibles. Elle ne signifie pas un rejet de l'équipe : c'est une souffrance qui cherche à s'exprimer et qui a besoin d'un espace pour le faire."
              },
              {
                niveau: "Étape 5",
                nom: "L'acceptation",
                definition: "Capacité à envisager un avenir avec l'enfant tel qu'il est, dans le dispositif tel qu'il est. Ce n'est pas une résignation — c'est une réorganisation psychique. Elle est grandement soutenue par la qualité de l'accompagnement reçu : des équipes qui reconnaissent les parents, qui tiennent leurs engagements, qui maintiennent le dialogue."
              },
            ]}
            note="Une même famille peut traverser plusieurs étapes lors d'une même réunion. La colère du début peut se transformer en tristesse, puis en quelque chose qui ressemble à de la confiance. Ces mouvements ne sont pas des signes d'instabilité — ce sont des signes que quelque chose se travaille."
          />

          <HighlightBox label="Ce que vivent les professionnels face à ces étapes" couleur="bleu">
            <Texte>Les professionnels qui reçoivent la colère d'un parent ont tendance à réagir de deux façons : se défendre (justifier leurs décisions, rappeler le cadre) ou se distancer (prendre la 'bonne distance professionnelle'). Ces deux réactions, si elles dominent, risquent de fermer le dialogue. Une troisième voie existe : accueillir la colère comme une information — "quelque chose d'important se joue ici, ce parent me dit quelque chose sur ce qu'il vit" — sans pour autant tout valider.</Texte>
          </HighlightBox>

          <Texte>Ce que disent les professionnels de terrain est remarquablement cohérent avec ces étapes. Ceux qui accompagnent des familles dans des moments de transition décrivent régulièrement : "Il y a d'abord la fermeture, puis à un moment quelque chose se brise et on voit les pleurs, la peur de l'avenir." Ou encore : "Parfois la colère est dirigée contre nous, mais on se rend compte que c'est important de rester, d'être tolérant — parce que quelque chose finit toujours par s'ouvrir."</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les grandes inquiétudes des parents à l'approche de la transition">
          <Texte>Au-delà des processus psychiques, les parents de jeunes entrant dans le dispositif adulte portent des inquiétudes très concrètes. Ces inquiétudes ne sont pas irrationnelles — elles correspondent à des réalités objectives et à des expériences vécues. Les nommer aide les équipes à y répondre de façon ajustée, plutôt que de les balayer d'un "vous verrez, tout ira bien".</Texte>

          <TableauComparaison
            titre="Les grandes inquiétudes et ce qu'elles demandent"
            colonnes={[
              {
                titre: "L'inquiétude",
                contenu: [
                  "L'avenir : Où vivra-t-il ? Que fera-t-il de ses journées ?",
                  "La sécurité : Sera-t-il bien accompagné ? Qui le connaîtra vraiment ?",
                  "La continuité : Les acquis de l'EPS seront-ils préservés ?",
                  "L'après-nous : Qui sera là quand les parents ne seront plus là ?",
                ]
              },
              {
                titre: "Ce qu'elle demande à l'institution",
                contenu: [
                  "Des informations concrètes sur l'organisation quotidienne, les activités, les sorties",
                  "Une présentation des professionnels référents et de leur façon de travailler",
                  "Un bilan d'entrée qui prend en compte ce que l'EPS a transmis",
                  "Un espace pour aborder progressivement cette question — sans la fuir ni la brusquer",
                ]
              },
            ]}
          />

          <HighlightBox label="L'inquiétude sur l'après-nous : une question que tout le monde évite" couleur="jaune">
            <Texte>L'inquiétude sur l'après-nous — qui prendra soin de Julien quand ses parents ne seront plus là ? — est la plus douloureuse et la plus systématiquement évitée dans les relations famille-institution. Les parents n'osent pas l'aborder parce qu'ils ne veulent pas accabler les équipes. Les équipes ne l'abordent pas parce qu'elles ne savent pas quoi dire. Et Julien grandit dans un flou sur son propre avenir à long terme.</Texte>
            <Texte>Cette question ne requiert pas une réponse immédiate. Elle requiert d'abord d'être nommée : "On sait que cette question de l'avenir à long terme est présente pour vous. On n'a pas toutes les réponses, mais on peut construire progressivement un chemin ensemble." Cette formulation simple — qui reconnaît la réalité sans la résoudre — est souvent ce que les parents attendent.</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Ce que dit Marc</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Marc, père de Julien, suite.</strong> Marc n'a jamais dit à Nathalie qu'il pense à sa propre mort depuis que Julien approche des 18 ans. La question est là, silencieuse : "Qui sera là pour lui quand on ne sera plus là ?" Il ne la pose pas dans les réunions — il ne sait pas si c'est le bon endroit. Personne ne la lui a jamais posée directement non plus. Cette question non posée pèse pourtant sur chacun de ses comportements dans la relation avec l'institution : son besoin que tout soit parfait, son irritation quand quelque chose ne fonctionne pas, son incapacité à déléguer vraiment.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="La réactivation des vécus anciens : comprendre le bagage que porte la famille">
          <Texte>La transition vers l'ESE réactive fréquemment des vécus antérieurs douloureux qui n'ont rien à voir avec l'institution présente. Ces vécus incluent l'annonce initiale du diagnostic, les orientations scolaires vécues comme imposées, les démarches administratives épuisantes, les professionnels qui ont blessé ou déçu. Les parents arrivent à cette étape chargés de toute cette histoire.</Texte>

          <PullQuote source="Patricia Gomes, article de référence de la formation">
            L'entrée en ESE réactive des vécus anciens de dépendance aux décisions institutionnelles, de perte de maîtrise et d'incertitude face à l'avenir.
          </PullQuote>

          <HighlightBox label="Pourquoi comprendre ce bagage est essentiel" couleur="bleu">
            <Texte>Quand une famille manifeste de la méfiance, de la colère ou de l'exigence dès les premières rencontres avec l'ESE, il est tentant d'interpréter ces comportements comme des réactions à ce que fait l'institution présente. Dans la plupart des cas, c'est inexact. Ces comportements sont des réponses à une histoire institutionnelle longue — une histoire dans laquelle l'institution présente n'a aucune part mais dans laquelle elle hérite d'une position.</Texte>
            <Texte>Cette distinction est décisive. Si l'équipe prend la méfiance comme une attaque personnelle, elle entre dans une dynamique défensive qui ne fera qu'accentuer la distance. Si elle comprend que cette méfiance vient d'ailleurs — et qu'elle mérite d'être accueillie comme telle — elle peut poser les bases d'une confiance nouvelle.</Texte>
          </HighlightBox>

          <ConceptBox label="Les vécus antérieurs les plus fréquemment réactivés" titre="Ce que la famille porte en entrant">
            <Liste items={[
              "L'annonce du diagnostic : souvent vécue de façon traumatique, parfois avec des mots maladroits qui restent des décennies plus tard",
              "Les orientations scolaires : la plupart des familles ont vécu au moins une orientation subie, sans avoir le sentiment d'avoir été réellement entendues",
              "Les périodes d'attente : les mois ou années passés sans solution, à attendre une place, sont souvent des périodes d'épuisement psychique intense",
              "Les ruptures avec des professionnels de confiance : chaque changement d'équipe réactive la question de la continuité et le risque de la perte",
              "Les évaluations vécues comme des jugements : bilans, diagnostics, évaluations fonctionnelles qui ont parfois été vécus comme des réductions de leur enfant à ses limitations",
            ]} />
          </ConceptBox>

          <HighlightBox label="Ce que l'institution peut faire avec ce bagage" couleur="vert">
            <Texte>Il n'est pas possible — ni souhaitable — d'effacer ou de nier le bagage que porte une famille. Ce qui est possible, c'est de lui signifier qu'il a été entendu et qu'il ne déterminera pas à lui seul la relation future. En pratique :</Texte>
            <Liste items={[
              "Prendre du temps lors des premières rencontres pour entendre l'histoire de la famille — pas seulement le dossier du jeune",
              "Nommer explicitement que l'on comprend que cette transition n'est pas la première et qu'elle porte le poids des précédentes",
              "Ne pas promettre ce qu'on ne peut pas tenir — la confiance se construit sur des actes, pas sur des discours",
              "Tenir les engagements pris : rappeler quand on a dit qu'on rappellerait, répondre aux courriels, être ponctuel aux rendez-vous",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Épuisement psychique et réassurance : ce dont les parents ont réellement besoin">
          <Texte>Un point souvent sous-estimé par les institutions : les parents qui arrivent à l'ESE sont, pour la plupart, psychiquement épuisés. Cet épuisement est rarement visible dans les réunions. Il se cache derrière l'organisation, la compétence, la vigilance. Mais il est là — et il conditionne la capacité des parents à s'engager dans un partenariat.</Texte>

          <HighlightBox label="L'épuisement silencieux" couleur="jaune">
            <Texte>L'épuisement psychique des parents d'enfants en situation de handicap est souvent silencieux parce que :</Texte>
            <Liste items={[
              "Ils ont appris très tôt qu'ils ne pouvaient pas se permettre de craquer — l'enfant a besoin d'eux",
              "La société valorise leur résilience et leur courage — ils ont intériorisé l'obligation de ne pas se plaindre",
              "Les professionnels de l'institution sont souvent les seuls interlocuteurs — et on ne se plaint pas devant quelqu'un dont on dépend",
              "L'épuisement est difficile à exprimer sans avoir l'air de rejeter son enfant",
            ]} />
          </HighlightBox>

          <Texte>Ce que les recherches sur le soutien parental montrent de façon convergente, c'est que les parents ont besoin avant tout d'être <strong>réassurés dans leurs compétences parentales</strong>. Non pas flattés, non pas encensés — mais reconnus comme parents compétents pour cet enfant-là, dans cette histoire-là. Cette réassurance est le fondement de toute collaboration durable.</Texte>

          <PullQuote source="Castanié, 2007, cité par Françoise Peille">
            Les parents ont besoin de réassurance en leur compétence de parents — pas de jugement, pas de conseil non sollicité, pas de la pitié. Ils expriment le souhait d'être relayés sans être remplacés — une distinction essentielle.
          </PullQuote>

          <TableauComparaison
            titre="Relayer sans remplacer : la distinction essentielle"
            colonnes={[
              {
                titre: "Relayer",
                contenu: [
                  "Prendre en charge certains aspects de l'accompagnement quotidien pour permettre aux parents de souffler",
                  "Apporter une expertise professionnelle complémentaire au savoir parental",
                  "Permettre au jeune de construire des liens autres que familiaux",
                  "Offrir un regard extérieur sans nier la légitimité du regard parental",
                ]
              },
              {
                titre: "Remplacer",
                contenu: [
                  "Décider à la place des parents ce qui est bon pour leur enfant",
                  "Ignorer ou minimiser le savoir parental au motif qu'il n'est pas 'professionnel'",
                  "Réduire le rôle des parents à celui de visiteurs occasionnels",
                  "Traiter les parents comme des obstacles à l'autonomie du jeune",
                ]
              },
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Les parents qui arrivent en ESE lors de la transition de leur enfant ne sont pas des partenaires neutres en attente d'être formés par l'institution. Ce sont des personnes qui portent un deuil de l'enfant idéalisé qui se réactive à chaque grande étape, un processus émotionnel non linéaire qui peut ressembler à de la colère ou de la méfiance, des inquiétudes concrètes et légitimes, et un bagage institutionnel qui colore leur lecture de tout ce que l'ESE fait ou ne fait pas. Comprendre tout cela n'est pas un préalable facultatif — c'est la condition d'un accueil professionnel digne de ce nom.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le deuil de l'enfant idéalisé est un deuil sans rite qui se répète à chaque grande transition — la fin de scolarité en est l'une des réactivations les plus intenses",
              "Les étapes du processus de deuil (choc, déni, marchandage, colère, acceptation) ne sont pas linéaires et peuvent toutes s'exprimer dans une même réunion",
              "Les grandes inquiétudes des parents (avenir, sécurité, après-nous) sont légitimes et appellent des réponses concrètes, pas des rassurances générales",
              "La méfiance que montre une famille n'est pas dirigée contre l'institution présente — elle est la trace d'une histoire institutionnelle longue que l'ESE hérite sans en être responsable",
              "Les parents ont besoin d'être relayés sans être remplacés — reconnaître cette distinction est le fondement de tout partenariat durable",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Qu'est-ce qui rend le 'deuil de l'enfant idéalisé' particulièrement difficile à traverser, par rapport à un deuil ordinaire ?",
            reponses: [
              "Il est plus douloureux parce que les parents n'ont pas choisi d'avoir un enfant handicapé",
              "Il est socialement non reconnu, l'objet du deuil est vivant, et il se répète à chaque nouvelle étape de vie",
              "Il est plus difficile parce que les parents manquent de soutien professionnel",
              "Il est plus long parce que les parents refusent généralement d'accepter la réalité",
            ],
            bonneReponse: 1,
            explication: "Le deuil de l'enfant idéalisé présente trois caractéristiques qui le distinguent d'un deuil ordinaire : il n'est pas reconnu socialement (pas de rituel, pas de condoléances), l'objet du deuil est bien vivant ce qui rend impossible le travail de séparation, et il se répète à chaque nouvelle étape de vie — scolarité, orientation, transition à l'âge adulte. Ce triple handicap du deuil explique pourquoi il n'est jamais vraiment terminé.",
          },
          {
            question: "Un parent en colère lors d'une réunion de projet à l'ESE — quelle posture professionnelle est la plus productive ?",
            reponses: [
              "Se défendre en expliquant que l'institution fait tout son possible",
              "Clore la réunion et proposer de reprendre lorsque le parent sera dans un meilleur état",
              "Accueillir la colère comme une information sur ce que vit le parent, sans valider nécessairement son contenu",
              "Demander au parent de rédiger ses griefs par écrit pour pouvoir les traiter correctement",
            ],
            bonneReponse: 2,
            explication: "La colère d'un parent en réunion est rarement une attaque personnelle contre l'équipe. Elle est souvent une souffrance qui cherche à s'exprimer — parfois la première fois qu'elle peut le faire dans un espace qui semble suffisamment sûr. L'accueillir comme une information ('quelque chose d'important se joue ici') sans fermer ni valider systématiquement, c'est ce qui permet à la colère de se transformer progressivement en dialogue.",
          },
          {
            question: "L'inquiétude sur l'après-nous est souvent évitée dans les relations famille-institution. Quelle est la réponse professionnelle la plus adaptée ?",
            reponses: [
              "Rassurer les parents en leur disant que l'institution s'occupera toujours de leur enfant",
              "Éviter d'aborder ce sujet car il risque de traumatiser les parents",
              "Nommer la question et reconnaître qu'on n'a pas toutes les réponses, tout en proposant de la construire progressivement ensemble",
              "Orienter immédiatement vers un juriste pour les questions de tutelle et d'héritage",
            ],
            bonneReponse: 2,
            explication: "L'après-nous est une question que tout le monde évite — parents et professionnels — parce qu'elle est douloureuse et qu'il n'y a pas de réponse simple. Mais l'évitement mutuel empêche toute élaboration. La posture la plus utile est de nommer la question sans la résoudre : 'On sait que cette question est présente. On n'a pas toutes les réponses, mais on peut construire un chemin ensemble.' Cette reconnaissance simple est souvent ce que les parents attendent.",
          },
          {
            question: "Une famille manifeste de la méfiance et de l'exigence dès les premières rencontres avec l'ESE. Quelle est la lecture la plus juste ?",
            reponses: [
              "La famille a un profil 'difficile' qui nécessite un cadrage ferme dès le début",
              "La famille réagit probablement à quelque chose que l'ESE a mal fait lors de la première rencontre",
              "La famille porte la trace d'une histoire institutionnelle longue — sa méfiance est une réponse à ce passé, pas à l'ESE présente",
              "La famille est dans le déni et n'a pas encore accepté le handicap de son proche",
            ],
            bonneReponse: 2,
            explication: "La méfiance d'une famille qui arrive en ESE est rarement dirigée contre cette institution en particulier. Elle est la trace d'une histoire avec les institutions — des promesses non tenues, des orientations subies, des professionnels changeants. L'ESE hérite de cette histoire sans en être responsable. Comprendre cela évite d'entrer dans une dynamique défensive et permet d'aborder la construction de la confiance comme un chantier actif.",
          },
          {
            question: "Quelle est la distinction essentielle entre 'relayer' et 'remplacer' les parents ?",
            reponses: [
              "Relayer signifie prendre en charge l'enfant à la place des parents ; remplacer signifie le faire temporairement",
              "Relayer signifie apporter une complémentarité professionnelle en reconnaissant le rôle parental ; remplacer signifie décider à la place des parents et minimiser leur savoir",
              "Il n'y a pas de différence réelle — les deux termes désignent la même réalité",
              "Relayer concerne les soins quotidiens ; remplacer concerne les décisions éducatives importantes",
            ],
            bonneReponse: 1,
            explication: "La distinction entre relayer et remplacer est fondamentale pour la qualité du partenariat. Relayer, c'est prendre en charge des aspects de l'accompagnement tout en reconnaissant la légitimité et la compétence parentales — les parents restent les experts de leur proche, l'institution apporte une complémentarité. Remplacer, c'est décider à leur place, minimiser leur savoir parce qu'il n'est pas 'professionnel', réduire les parents à un rôle de visiteurs. Les familles sentent très bien cette distinction.",
          },
          {
            question: "Pourquoi l'épuisement psychique des parents est-il souvent invisible lors des réunions institutionnelles ?",
            reponses: [
              "Parce que les parents font semblant d'aller bien pour ne pas inquiéter l'équipe",
              "Parce qu'ils ont intériorisé l'obligation de ne pas se plaindre, qu'ils dépendent de l'institution et qu'exprimer un épuisement risque de sembler rejeter leur enfant",
              "Parce que l'épuisement ne se manifeste que dans la sphère privée et jamais dans les relations institutionnelles",
              "Parce que les professionnels n'ont pas la formation pour le détecter",
            ],
            bonneReponse: 1,
            explication: "L'épuisement psychique des parents se cache pour plusieurs raisons cumulatives : ils ont appris très tôt à ne pas montrer leur fragilité (l'enfant a besoin d'eux), la société valorise leur 'courage', et ils ne se plaignent pas devant des interlocuteurs dont ils dépendent. Ce silence ne signifie pas que tout va bien — il signifie que l'institution doit créer activement des espaces où quelque chose peut être dit.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
