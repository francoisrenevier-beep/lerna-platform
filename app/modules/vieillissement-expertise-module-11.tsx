import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module11VieillissementExpertise({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={11}
        categorie="Handicap et vieillissement : Pratique avancée"
        titre="Porter et adapter le projet"
        titrePart2="individualisé vieillissement"
        sousTitre="Construire un PPA qui évolue avec la personne, tenir le cap dans la durée, et être l'avocat de la personne dans son institution."
        duree="45 minutes"
        niveau="Pratique avancée"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le projet individualisé comme outil vivant de toute une vie">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre comment le PPA doit évoluer avec le vieillissement de la personne",
              "Construire des objectifs de qualité de vie adaptés aux personnes vieillissantes",
              "Articuler le PPA avec les évaluations médicales et les partenaires externes",
              "Porter le projet individualisé dans la durée face aux résistances institutionnelles",
              "Être l'avocat de la personne dans les décisions qui la concernent"
            ]} />
          </ConceptBox>
          <Texte>Le Projet Personnalisé d&apos;Accompagnement est l&apos;outil central du travail social institutionnel. Il formalise les objectifs, les modalités d&apos;accompagnement et les ressources mobilisées pour chaque personne. Dans les modules précédents, nous avons évoqué le PPA sous plusieurs angles. Ce module lui est entièrement consacré, avec un focus sur ce qu&apos;il doit devenir quand la personne vieillit.</Texte>
          <Texte>Un PPA de vieillissement n&apos;est pas simplement un PPA avec moins d&apos;objectifs. C&apos;est un PPA dont l&apos;orientation change fondamentalement : de la progression vers la qualité de vie, de l&apos;acquisition vers le maintien, de l&apos;indépendance vers la dignité dans la dépendance. Ce changement d&apos;orientation n&apos;est pas une réduction, c&apos;est une transformation. Elle demande de la réflexion, du courage, et souvent une conversation difficile avec la personne elle-même et avec sa famille.</Texte>
          <Texte>Dans la pratique, cette transformation est rarement planifiée. Elle se produit par défaut, des objectifs qui ne sont plus révisés, des activités qui cessent sans être remplacées, un PPA qui date de plusieurs années et ne correspond plus à la personne qu&apos;on accompagne aujourd&apos;hui. Ce module propose d&apos;en faire un acte conscient, structuré et éthiquement solide.</Texte>
          <PullQuote>
            Un projet individualisé qui ne change pas quand la personne change n&apos;est pas un outil d&apos;accompagnement. C&apos;est un document administratif.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Comment le PPA doit évoluer avec le vieillissement">
          <Texte>Le PPA d&apos;une personne vieillissante doit être relu à la lumière d&apos;une question fondamentale : est-ce que ce que nous visons encore correspond à ce que cette personne peut faire et à ce qui lui fait du bien maintenant ? Cette question peut sembler évidente, mais dans la pratique, les PPA ont tendance à évoluer lentement, par inertie, en modifiant à la marge des objectifs qui n&apos;ont plus de sens.</Texte>

          <Texte>Cette inertie a plusieurs causes. La révision annuelle du PPA est souvent vécue comme une contrainte administrative, pas comme un temps de réflexion clinique. Les objectifs &quot;historiques&quot; sont reconduits parce qu&apos;ils sont là depuis toujours, parce qu&apos;il faudrait du temps pour les repenser, parce que personne ne veut avoir la conversation difficile avec la famille sur ce qui n&apos;est plus possible. Et progressivement, un fossé se creuse entre le PPA, qui décrit une personne qui n&apos;existe plus tout à fait, et la réalité de la personne que l&apos;équipe accompagne au quotidien. Ce fossé est coûteux : il crée de la confusion pour les nouveaux professionnels, des tensions avec les familles, et une forme de dissonance pour la personne elle-même, qui perçoit l&apos;écart entre ce qu&apos;on attend d&apos;elle et ce qu&apos;elle peut faire.</Texte>

          <TableauComparaison
            titre="Du PPA de développement au PPA de qualité de vie"
            colonnes={[
              {
                titre: "PPA de développement (personne plus jeune)",
                contenu: [
                  "Objectifs centrés sur l'acquisition de compétences",
                  "Logique de progression : aller vers plus d'autonomie",
                  "Évaluation par l'atteinte des objectifs",
                  "Valorisation de la participation active",
                  "Focus sur l'avenir : ce que la personne pourra faire"
                ]
              },
              {
                titre: "PPA de qualité de vie (personne vieillissante)",
                contenu: [
                  "Objectifs centrés sur le maintien et le confort",
                  "Logique de préservation : maintenir ce qui existe",
                  "Évaluation par la qualité de vie et le bien-être",
                  "Valorisation de la participation adaptée",
                  "Focus sur le présent : ce qui importe à la personne maintenant"
                ]
              }
            ]}
          />

          <Texte>Ce glissement d&apos;un type de PPA vers l&apos;autre n&apos;est pas brutal, il est progressif et doit suivre le rythme de la personne. Il est possible qu&apos;une personne de 65 ans ait encore des objectifs de développement dans certains domaines, tout en ayant des objectifs de qualité de vie dans d&apos;autres. Le PPA doit refléter cette complexité, pas l&apos;effacer.</Texte>

          <HighlightBox label="Les six dimensions revisitées pour le vieillissement" couleur="bleu">
            <Texte>Les six dimensions d&apos;une réévaluation orientée vieillissement (vues dans les modules précédents) se déclinent en objectifs concrets dans le PPA :</Texte>
            <Liste items={[
              "Dimension somatique, objectifs de surveillance, de prévention et de coordination médicale",
              "Dimension fonctionnelle, objectifs de maintien des capacités préservées, d'adaptation des activités",
              "Dimension cognitive, objectifs de maintien des repères, de stimulation adaptée, de documentation de l'état de base",
              "Dimension psychique et affective, objectifs de soutien aux deuils, de maintien des liens significatifs",
              "Dimension sociale et relationnelle, objectifs de maintien des liens avec la famille, les pairs, la communauté",
              "Dimension anticipative, objectifs de préparation aux transitions prévisibles, de recueil des volontés"
            ]} />
          </HighlightBox>

          <Texte>Un outil pratique pour conduire la révision &quot;vieillissement&quot; d&apos;un PPA est de reprendre chaque objectif existant et de se poser deux questions : cet objectif est-il encore réaliste au regard des capacités actuelles de la personne ? Et s&apos;il n&apos;est plus réaliste, qu&apos;est-ce qui le remplace pour préserver la dignité et la qualité de vie dans ce domaine ? La deuxième question est la plus importante. Supprimer un objectif sans le remplacer n&apos;est pas une adaptation, c&apos;est un appauvrissement. Adapter un objectif pour qu&apos;il reste porteur de sens, même avec des capacités réduites, c&apos;est le cœur du travail de révision.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Le PPA de Christiane n&apos;a pas suivi son vieillissement</p>
              <p className="text-gray-700 text-sm leading-relaxed">Christiane a 67 ans et une déficience intellectuelle modérée. Son PPA contient encore des objectifs rédigés il y a 4 ans : &quot;développer l&apos;autonomie dans les transports en commun&quot; et &quot;acquérir de nouvelles compétences culinaires&quot;. Depuis 18 mois, Christiane ne prend plus les transports seule (chutes d&apos;équilibre) et participe aux ateliers cuisine en position assise uniquement. L&apos;équipe a adapté ses activités dans les faits, mais le PPA ne reflète pas ces réalités.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quelles sont les conséquences d&apos;un PPA déconnecté de la réalité ? Comment reconstruire les objectifs de Christiane en cohérence avec sa situation actuelle ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Un PPA déconnecté de la réalité crée plusieurs problèmes : il donne une image fausse de la situation à tout nouveau professionnel ou partenaire qui le consulte, il empêche de formaliser les adaptations réellement en place, et il peut créer de la confusion sur ce qu&apos;on attend encore de Christiane. Les nouveaux objectifs pourraient être : maintenir une participation active à l&apos;atelier cuisine en position assise, avec un rôle adapté (supervision, organisation, choix des recettes) ; maintenir les déplacements à l&apos;intérieur de l&apos;institution de manière autonome et sécurisée ; documenter l&apos;état de base moteur pour détecter toute évolution ; prévoir avec l&apos;équipe une évaluation de l&apos;équilibre et une consultation médicale pour les chutes.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Construire des objectifs de qualité de vie">
          <Texte>Formuler des objectifs de qualité de vie est moins intuitif que formuler des objectifs de développement. On sait facilement mesurer si quelqu&apos;un a appris à prendre le bus seul. On sait moins facilement mesurer si quelqu&apos;un passe de bonnes journées. Pourtant, c&apos;est précisément cette deuxième dimension qui devient centrale dans l&apos;accompagnement des personnes vieillissantes.</Texte>

          <Texte>La difficulté ne vient pas d&apos;une absence de critères, elle vient d&apos;une résistance culturelle. Le secteur socio-éducatif est structuré autour de la performance, de la progression, de l&apos;évaluation des acquis. Ces référentiels, utiles pour une grande partie de l&apos;accompagnement, deviennent inadaptés en fin de parcours. Passer d&apos;une logique de performance à une logique de bien-être demande un effort conscient, un changement de regard sur ce qui compte et sur ce qui mérite d&apos;être mesuré.</Texte>

          <HighlightBox label="Les caractéristiques d'un bon objectif de qualité de vie" couleur="vert">
            <Texte>Un objectif de qualité de vie bien construit doit être :</Texte>
            <Liste items={[
              "Ancré dans ce que la personne valorise, pas dans ce que l'équipe juge bon pour elle",
              "Observable : on doit pouvoir décrire comment on sait que l'objectif est atteint",
              "Réaliste au regard des capacités actuelles, pas de ce qu'elle pouvait faire avant",
              "Révisable, les objectifs de qualité de vie évoluent avec la situation de la personne",
              "Formulé positivement, 'maintenir la participation à l'atelier' plutôt que 'éviter le déclin'"
            ]} />
          </HighlightBox>

          <Texte>Un outil utile pour construire des objectifs de qualité de vie est la question : &quot;Comment saurons-nous dans six mois que la vie de cette personne a été bonne ?&quot; Cette question déplace le focus de la performance vers le bien-être, et oblige à nommer des indicateurs concrets qui peuvent être observés au quotidien. Ces indicateurs peuvent être très simples : &quot;elle a ri au moins une fois par jour&quot;, &quot;elle a participé à une activité avec un pair cette semaine&quot;, &quot;elle a mangé avec appétit&quot;, &quot;elle a demandé à appeler sa sœur&quot;. Ces indicateurs sont observables, documentables, et directement liés à ce qui compte pour la personne.</Texte>

          <Texte>La construction de ces indicateurs demande de connaître la personne. Ce n&apos;est pas un travail de bureau, c&apos;est un travail d&apos;observation et d&apos;écoute, mené sur la durée, avec la personne elle-même quand c&apos;est possible, et avec les membres de l&apos;équipe qui la connaissent le mieux. Un bon objectif de qualité de vie n&apos;est pas universel, il est spécifique à cette personne, à ce moment de sa vie, à ce qui lui est encore accessible et qui lui importe encore.</Texte>

          <TableauComparaison
            titre="Exemples d'objectifs de qualité de vie bien formulés"
            colonnes={[
              {
                titre: "Domaine",
                contenu: ["Participation sociale", "Confort physique", "Repères cognitifs", "Liens affectifs", "Dignité"]
              },
              {
                titre: "Objectif bien formulé",
                contenu: [
                  "Participer à au moins une activité de groupe par jour, adaptée à son niveau d'énergie",
                  "Ne pas présenter de signes comportementaux de douleur non traitée",
                  "Maintenir la capacité à se repérer seule dans les espaces de vie habituels",
                  "Recevoir la visite d'un proche au moins deux fois par mois",
                  "Être consulté sur les décisions qui la concernent, avec les adaptations nécessaires"
                ]
              }
            ]}
          />

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Exercice</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Reformuler ces objectifs</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">Ces objectifs sont formulés de manière problématique. Reformulez-les en objectifs de qualité de vie bien construits :</p>
              <Liste items={[
                "\"Éviter que Daniel ne perde la marche.\"",
                "\"Maintenir le niveau de Sylvie.\"",
                "\"Limiter les comportements difficiles de Marc.\""
              ]} />
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Exemples de reformulation</p>
              <p className="text-gray-700 text-sm leading-relaxed">1. &quot;Maintenir la capacité de déplacement autonome de Daniel dans les espaces de vie en adaptant l&apos;environnement (barres d&apos;appui, chaussures adaptées) et en signalant au médecin tout changement d&apos;équilibre.&quot; — 2. &quot;Permettre à Sylvie de participer aux activités qu&apos;elle apprécie, en adaptant leur forme à son niveau d&apos;énergie actuel.&quot; — 3. &quot;Identifier et traiter les causes sous-jacentes des comportements de Marc (douleur, désorientation, changement) pour améliorer son confort quotidien.&quot;</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Articuler le PPA avec les partenaires">
          <Texte>Le PPA d&apos;une personne vieillissante ne peut pas être construit en vase clos. Il doit être articulé avec les évaluations médicales, les interventions thérapeutiques (ergothérapie, physiothérapie), les bilans gériatriques, et les réflexions de la famille. Cette articulation est souvent le maillon le plus fragile, non par manque de volonté, mais par manque de pratiques formalisées et de temps dédié à ce travail de coordination.</Texte>

          <Texte>Le médecin référent joue un rôle central dans cette coordination. Mais ce rôle n&apos;est pas toujours bien défini du côté de l&apos;institution. Beaucoup d&apos;équipes contactent le médecin uniquement en cas d&apos;urgence ou pour des prescriptions. La collaboration proactive, partager les observations de l&apos;équipe sur l&apos;état fonctionnel de la personne, solliciter un avis préventif sur un changement observé, demander une synthèse médicale intégrable dans le PPA : est une pratique encore peu répandue. Elle est pourtant au cœur d&apos;un accompagnement vieillissement de qualité.</Texte>

          <HighlightBox label="Le PPA comme document de coordination" couleur="bleu">
            <Texte>Pour jouer ce rôle de coordination, le PPA doit contenir des éléments qui permettent aux différents acteurs de se repérer et de contribuer :</Texte>
            <Liste items={[
              "Un résumé de l'état de santé actuel rédigé en lien avec le médecin référent, pas un copier-coller du dossier médical, mais une synthèse fonctionnelle accessible à l'équipe",
              "Une liste des partenaires actuellement impliqués et leur rôle respectif",
              "Les informations médicales essentielles pour l'équipe : précautions, signaux d'alerte, que faire en cas de...",
              "Les décisions prises lors des dernières réunions de coordination et leur suivi",
              "Les questions en suspens qui nécessitent une réponse, médicale, sociale, familiale"
            ]} />
          </HighlightBox>

          <Texte>Cette dimension de coordination est particulièrement importante lors des transitions. Quand une personne est hospitalisée et revient dans son institution, le PPA doit être mis à jour immédiatement avec les informations reçues de l&apos;hôpital. Quand une évaluation gériatrique est réalisée, ses conclusions doivent être intégrées dans le PPA. Ce travail d&apos;intégration est souvent laissé à des moments opportuns qui ne viennent jamais, il doit être systématisé.</Texte>

          <Texte>Une pratique utile est d&apos;instituer un &quot;check post-hospitalisation&quot; systématique : dans les 48 heures suivant le retour d&apos;une personne après une hospitalisation, le référent organise un point de 30 minutes pour intégrer les recommandations hospitalières dans le PPA et dans le document de transmission, identifier ce qui a changé dans la situation de la personne, et planifier les suivis nécessaires. Ce check n&apos;est pas une réunion, c&apos;est une mise à jour documentaire systématique. Il prend 30 minutes. Il peut éviter des incidents graves et assure que toute l&apos;équipe dispose des mêmes informations.</Texte>

          <SchemaEtapes
            titre="Check post-hospitalisation : que faire dans les 48h"
            etapes={[
              { niveau: "Immédiat", nom: "Récupérer le compte-rendu", definition: "Obtenir le compte-rendu de sortie hospitalière et identifier les recommandations clés pour l'équipe" },
              { niveau: "Jour J", nom: "Mettre à jour le PPA", definition: "Intégrer les précautions, les changements de traitement, et les adaptations dans le PPA et le document de transmission" },
              { niveau: "Jour J", nom: "Informer toute l'équipe", definition: "Par écrit, y compris les professionnels absents, pas uniquement ceux présents au moment du retour" },
              { niveau: "Jour J", nom: "Alerter la cuisine et les soins", definition: "Si des adaptations alimentaires ou médicales ont été prescrites, les transmettre aux services concernés" },
              { niveau: "J+14", nom: "Révision complète du PPA", definition: "Planifier une révision du PPA dans les deux semaines pour intégrer l'ensemble des changements liés à l'hospitalisation" }
            ]}
          />

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Après l&apos;hospitalisation de Bernard, le PPA n&apos;a pas été mis à jour</p>
              <p className="text-gray-700 text-sm leading-relaxed">Bernard, 64 ans, paralysie cérébrale, est rentré il y a trois semaines après une hospitalisation de 12 jours pour une pneumonie. L&apos;hôpital a recommandé une alimentation texturée et une position assise stricte pendant les repas suite à un trouble de la déglutition détecté. Ces recommandations ont été transmises oralement à l&apos;équipe de jour, mais elles ne figurent pas dans le PPA, ni dans le document de transmission. L&apos;équipe de week-end n&apos;en a pas été informée.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quels risques cette situation crée-t-elle pour Bernard ? Que devrait-il se passer dès maintenant ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Le risque est immédiat et grave : l&apos;équipe de week-end peut servir à Bernard une alimentation non adaptée, ce qui peut provoquer une fausse route et une nouvelle pneumonie. Les recommandations médicales transmises oralement uniquement sont des recommandations qui n&apos;existent pas pour la moitié de l&apos;équipe. La démarche immédiate : intégrer les recommandations hospitalières dans le PPA et dans le document de transmission ce jour même. Informer tous les membres de l&apos;équipe par écrit, pas seulement ceux présents. Vérifier que la cuisine est informée de la texture requise. Et planifier une révision du PPA dans les deux semaines suivantes pour intégrer l&apos;ensemble des changements liés à cette hospitalisation.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Porter le projet dans la durée : être l'avocat de la personne">
          <Texte>Porter un projet individualisé dans la durée, c&apos;est exercer un rôle d&apos;avocat, défendre les intérêts de la personne accompagnée face aux résistances institutionnelles, aux habitudes qui prennent le dessus, aux décisions prises sans elle, aux glissements progressifs vers la standardisation des réponses.</Texte>

          <Texte>Ce rôle d&apos;avocat ne signifie pas être en conflit permanent avec l&apos;institution. Il signifie maintenir une vigilance active sur l&apos;adéquation entre ce que le PPA prévoit et ce qui se passe réellement, et nommer les écarts quand ils apparaissent. Ces écarts sont souvent involontaires, ils résultent de la pression du quotidien, du turnover des équipes, de l&apos;épuisement. Les nommer sans accusation, avec des faits, en proposant des ajustements concrets : c&apos;est exercer ce rôle d&apos;avocat de manière professionnelle.</Texte>

          <HighlightBox label="Les glissements les plus fréquents à surveiller" couleur="jaune">
            <Texte>Dans l&apos;accompagnement des personnes vieillissantes, certains glissements sont particulièrement fréquents :</Texte>
            <Liste items={[
              "La sur-protection : on supprime des activités ou des libertés au nom de la sécurité, sans mesurer le coût en qualité de vie",
              "La standardisation : on traite la personne vieillissante comme toutes les autres personnes âgées de l'institution, sans tenir compte de son histoire et de ses spécificités",
              "L'infantilisation progressive : on lui parle différemment, on prend des décisions sans elle, on cesse de lui demander son avis",
              "Le désinvestissement : on réduit progressivement les objectifs du PPA sans l'avoir décidé explicitement, par découragement face aux pertes",
              "La médicalisation excessive : on délègue de plus en plus au médical ce qui relève encore du social et du relationnel"
            ]} />
          </HighlightBox>

          <Texte>Ces glissements ont en commun d&apos;être progressifs et invisibles. Aucun professionnel ne décide un matin de &quot;standardiser&quot; l&apos;accompagnement d&apos;une personne ou de &quot;l&apos;infantiliser&quot;. Cela arrive par accumulation de petites décisions, de raccourcis pris faute de temps, d&apos;habitudes qui s&apos;installent. C&apos;est précisément cette progressivité qui les rend difficiles à détecter de l&apos;intérieur. Une équipe qui accompagne la même personne depuis dix ans a progressivement perdu la capacité de voir ce qui a changé dans sa façon de faire, elle s&apos;est adaptée si progressivement qu&apos;elle ne perçoit plus l&apos;écart.</Texte>

          <Texte>Détecter ces glissements demande du recul, et parfois un regard extérieur. Un nouveau collègue, un stagiaire, ou une supervision externe peut voir des choses que l&apos;équipe ne voit plus parce qu&apos;elle est trop proche. Créer des occasions de ce regard extérieur est une pratique de qualité professionnelle. Une révision du PPA conduite avec un professionnel qui ne connaît pas la personne peut révéler des présupposés que l&apos;équipe n&apos;aperçoit plus, sur ce que la personne peut faire, sur ce qu&apos;elle veut, sur ce qui lui convient. Ce regard neuf est une ressource, pas une menace.</Texte>

          <Texte>En pratique, le rôle d&apos;avocat s&apos;exerce au quotidien dans des gestes simples : signaler en réunion d&apos;équipe quand une activité a été supprimée sans décision formelle, demander à documenter les raisons d&apos;une restriction de liberté, poser la question &quot;est-ce que la personne a été consultée sur cette décision ?&quot;, proposer une réévaluation quand une situation dure depuis plusieurs mois sans avoir été rediscutée. Ces gestes ne nécessitent pas de courage particulier, ils nécessitent une habitude professionnelle et un cadre d&apos;équipe qui valorise cette vigilance.</Texte>

          <PullQuote>
            Porter le projet individualisé d&apos;une personne vieillissante, c&apos;est résister à la tentation de simplifier. La personne est complexe. Son projet doit l&apos;être aussi.
          </PullQuote>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Élise, 70 ans : un glissement progressif vers la sur-protection</p>
              <p className="text-gray-700 text-sm leading-relaxed">Élise a une déficience intellectuelle légère. Elle a toujours été autonome pour ses achats au village les mercredis. Depuis un an, l&apos;équipe a progressivement réduit ces sorties : d&apos;abord une fois sur deux, puis une fois par mois, puis elles ont cessé. Aucune décision formelle n&apos;a été prise, c&apos;est arrivé progressivement, &quot;pour sa sécurité&quot;, suite à une chute lors d&apos;une sortie il y a un an. Élise demande régulièrement quand elle pourra aller au village. L&apos;équipe dit &quot;on verra&quot;.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quel glissement s&apos;est produit ici ? Comment le référent d&apos;Élise pourrait-il porter son intérêt dans cette situation ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Il s&apos;agit d&apos;un glissement progressif vers la sur-protection, sans décision formelle et sans consultation d&apos;Élise. Une activité qui lui était précieuse a été supprimée par défaut, pas par décision réfléchie. Le référent d&apos;Élise peut : d&apos;abord nommer ce glissement en réunion d&apos;équipe, non pas comme une faute, mais comme un drift à corriger. Ensuite, proposer une réévaluation formelle : qu&apos;est-ce qui a changé depuis la chute ? Est-ce que les conditions de la sortie peuvent être adaptées pour maintenir cette activité en sécurité ? Inclure Élise dans cette réflexion, qu&apos;est-ce que cette sortie représente pour elle ? Et si la sortie ne peut pas reprendre dans sa forme d&apos;origine, quelle alternative maintient quelque chose d&apos;important pour elle ? L&apos;objectif n&apos;est pas de nier le risque, c&apos;est de ne pas sacrifier la qualité de vie sur l&apos;autel de la sécurité absolue, sans pesée réelle.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Porter le projet individualisé d&apos;une personne vieillissante, c&apos;est un engagement dans la durée qui demande de la rigueur, de la présence et du courage. Rigueur dans la documentation et la mise à jour. Présence dans la relation et la vigilance quotidienne. Courage pour nommer les glissements, défendre les intérêts de la personne, et résister à la tentation de simplifier ce qui est complexe.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le PPA de vieillissement passe de la logique de développement à la logique de qualité de vie, c'est une transformation consciente, pas un appauvrissement",
              "L'inertie du PPA est le risque principal : des objectifs non révisés créent un fossé entre le document et la réalité",
              "Un bon objectif de qualité de vie est ancré dans ce que la personne valorise, observable, réaliste et révisable",
              "La question clé : 'Comment saurons-nous dans six mois que la vie de cette personne a été bonne ?'",
              "Le PPA doit intégrer les informations médicales et les décisions de coordination, pas les laisser dans des silos",
              "Un check post-hospitalisation systématique dans les 48h protège la personne et garantit l'information de toute l'équipe",
              "Les glissements vers la sur-protection, l'infantilisation et le désinvestissement sont progressifs et invisibles : créer des occasions de regard extérieur",
              "Porter le projet d'une personne, c'est être son avocat dans l'institution, avec des faits, sans accusation"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la différence principale entre un PPA de développement et un PPA de qualité de vie ?",
            reponses: [
              "Le PPA de qualité de vie a moins d'objectifs",
              "Le PPA de développement vise la progression et l'acquisition ; le PPA de qualité de vie vise le maintien, le confort et le bien-être",
              "Le PPA de qualité de vie est rédigé par le médecin, pas par l'équipe éducative",
              "Il n'y a pas de différence, c'est le même document avec des objectifs différents"
            ],
            bonneReponse: 1,
            explication: "Ce n'est pas une question de quantité d'objectifs, c'est une transformation de l'orientation. Le PPA de développement vise la progression vers plus d'autonomie. Le PPA de qualité de vie vise le maintien de ce qui existe, le confort et la dignité dans la dépendance croissante. Cette transformation est profonde et demande un effort conscient de l'équipe."
          },
          {
            question: "Qu'est-ce qu'un bon objectif de qualité de vie ?",
            reponses: [
              "Un objectif centré sur ce que l'équipe juge bon pour la personne, exprimé en termes de performance",
              "Un objectif ancré dans ce que la personne valorise, observable dans le quotidien, réaliste et révisable",
              "Un objectif médical rédigé avec le médecin référent",
              "Un objectif formulé négativement pour mesurer ce qu'on veut éviter"
            ],
            bonneReponse: 1,
            explication: "Un bon objectif de qualité de vie est ancré dans les valeurs et préférences de la personne, pas celles de l'équipe. Il est observable (on sait comment mesurer son atteinte), réaliste au regard des capacités actuelles, formulé positivement, et révisable quand la situation évolue."
          },
          {
            question: "Pourquoi les recommandations médicales post-hospitalisation doivent-elles être intégrées immédiatement dans le PPA ?",
            reponses: [
              "Pour des raisons légales : la loi l'impose",
              "Pour que tous les membres de l'équipe, y compris ceux absents lors du retour, disposent des informations essentielles",
              "Pour faciliter la facturation des soins à l'assurance",
              "Pour informer la famille des décisions médicales prises"
            ],
            bonneReponse: 1,
            explication: "Les recommandations médicales transmises oralement uniquement n'existent pas pour la moitié de l'équipe. Un risque concret en résulte : l'équipe de nuit ou de week-end peut ne pas être informée de précautions vitales. L'intégration immédiate dans le PPA protège la personne en garantissant que tous les professionnels disposent des mêmes informations."
          },
          {
            question: "Qu'est-ce que la sur-protection dans l'accompagnement des personnes vieillissantes ?",
            reponses: [
              "Le fait de porter trop d'attention aux besoins médicaux d'une personne",
              "Le fait de supprimer des activités ou des libertés au nom de la sécurité, sans mesurer le coût en qualité de vie",
              "Le fait d'impliquer trop de partenaires externes dans l'accompagnement",
              "Le fait de réviser le PPA trop fréquemment"
            ],
            bonneReponse: 1,
            explication: "La sur-protection consiste à sacrifier la qualité de vie sur l'autel de la sécurité absolue, sans pesée réelle des bénéfices et des coûts. Une activité supprimée 'pour sa sécurité' après un incident peut représenter une perte majeure de sens et de plaisir pour la personne, sans que personne ne l'ait explicitement décidé ni évalué."
          },
          {
            question: "Comment exercer le rôle d'avocat de la personne face aux glissements institutionnels ?",
            reponses: [
              "En s'opposant frontalement à la direction quand on n'est pas d'accord",
              "En nommant les écarts avec des faits, sans accusation, et en proposant des ajustements concrets",
              "En contactant directement les autorités cantonales",
              "En rédigeant des rapports d'incident formels"
            ],
            bonneReponse: 1,
            explication: "Porter le projet d'une personne, c'est nommer les glissements quand ils apparaissent, non pas comme des fautes, mais comme des drifts à corriger. Avec des faits observables, sans accusation, en proposant des ajustements concrets. C'est exercer un rôle professionnel, pas politique."
          },
          {
            question: "Lequel de ces objectifs est le mieux formulé pour une personne vieillissante ?",
            reponses: [
              "\"Éviter que Pierre ne perde ses capacités cognitives.\"",
              "\"Maintenir le niveau de Pierre.\"",
              "\"Permettre à Pierre de se repérer seul dans les espaces de vie habituels, en maintenant les repères visuels et les routines qui structurent sa journée.\"",
              "\"Pierre doit participer à toutes les activités proposées par l'équipe.\""
            ],
            bonneReponse: 2,
            explication: "Le troisième objectif est bien formulé : il est ancré dans une capacité concrète (se repérer seul), observable (on peut vérifier), formulé positivement (maintenir, pas éviter), et précise les leviers d'action (repères visuels, routines). Les autres formulations sont soit négatives, soit vagues, soit imposées sans tenir compte des capacités réelles de la personne."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
