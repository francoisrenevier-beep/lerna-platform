import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module2ProtectionDonnees({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Protection des données : Transversal"
        titre="Les bons réflexes"
        titrePart2="au quotidien"
        sousTitre="Quatre principes simples, traduits en gestes concrets pour les situations que vous rencontrez vraiment."
        duree="≈ 30 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Quatre questions valent mieux qu'un code de loi">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Mémoriser quatre réflexes simples qui couvrent l'essentiel des situations",
              "Les appliquer à des situations concrètes du terrain",
              "Adopter le réflexe-clé : « dans le doute, je m'abstiens et je demande »",
            ]} />
          </ConceptBox>
          <Texte>Le premier module a ouvert les yeux ; celui-ci ouvre les mains. Savoir voir les données ne suffit pas, encore faut-il savoir quoi faire quand on les manipule. Et la bonne nouvelle, c'est qu'il n'est nul besoin de connaître la loi par cœur pour bien agir.</Texte>
          <Texte>La protection des données repose, dans les textes, sur une série de principes juridiques. Mais sur le terrain, on peut les ramener à quatre questions simples qu'il suffit de se poser. Ces quatre questions couvrent la quasi-totalité des situations que vous rencontrez. Elles ne demandent aucune expertise : juste l'habitude de marquer un temps d'arrêt avant d'agir. Avec un peu de pratique, elles deviennent un réflexe, presque une seconde nature, et c'est exactement le but.</Texte>

          <HighlightBox label="Les quatre réflexes" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Le nécessaire : Ai-je vraiment besoin de cette information, ou de la transmettre ? (principe de minimisation)",
              "La bonne raison : Est-ce pour une finalité légitime, liée à l'accompagnement ? (principe de finalité)",
              "La bonne personne : Mon interlocuteur a-t-il le droit et le besoin de savoir ? (principe de confidentialité)",
              "En sécurité : Est-ce que je protège correctement le support ? (principe de sécurité)",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1 : Le nécessaire" titre="En dire assez, mais pas plus">
          <Texte>La première question est celle du <em>nécessaire</em>, et elle va à l'encontre d'un réflexe pourtant bien intentionné. Lorsqu'on transmet une information sur une personne accompagnée, on a tendance à en dire beaucoup, pour que l'équipe « comprenne bien la situation ». L'intention est louable, mais chaque détail ajouté est une donnée de plus qui circule, qui se répète, qui s'éloigne de son contexte d'origine. Le principe de minimisation invite à inverser ce réflexe : ne transmettre que ce qui est <strong>utile à l'accompagnement</strong>, et laisser de côté ce qui relève de la curiosité, du commentaire ou du jugement.</Texte>
          <Texte>Ce tri n'a rien d'évident, parce que la frontière entre « utile » et « de trop » se trace au cas par cas. Une bonne boussole consiste à se demander : cette information aidera-t-elle un collègue à mieux accompagner la personne demain matin ? Si oui, elle a sa place. Sinon, même vraie, même intéressante, elle peut rester de côté.</Texte>

          <HighlightBox label="La transmission qui en dit trop" couleur="jaune">
            <p className="text-gray-800 text-sm leading-relaxed font-medium italic mb-3">
              « Madame L. était encore insupportable ce matin, remarquez, depuis son divorce qui se passe mal, son ex serait parti avec une collègue à ce qu'on raconte, forcément ça la travaille… »
            </p>
            <Texte>Décortiquons. Qu'est-ce qui, là-dedans, aide l'équipe à accompagner Madame L. aujourd'hui ? Son état du matin, oui : encore que « insupportable » soit un jugement plus qu'une observation, et qu'on gagnerait à décrire ce qu'on a réellement vu. Le divorce, les rumeurs sur son ex-conjoint, les conjectures sur ce qui « la travaille » : rien de tout cela n'est nécessaire, rien n'est vérifié, et tout cela expose l'intimité de Madame L. bien au-delà de ce que son accompagnement réclame.</Texte>
            <Texte>Le bon réflexe : transmettre le fait utile, formulé sans jugement, et laisser le reste (la rumeur, le commentaire, le diagnostic improvisé) à la porte.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2 : La bonne raison" titre="Une finalité claire, et une seule à la fois">
          <Texte>La deuxième question porte sur la <em>raison</em> pour laquelle on traite une information. Le principe de finalité énonce une règle de bon sens : toute donnée recueillie ou transmise doit l'être pour un but déterminé, légitime et lié à la mission d'accompagnement. « Parce que ça m'intéresse », « parce que c'est plus pratique » ou « parce qu'on ne sait jamais » ne sont pas des finalités acceptables.</Texte>
          <Texte>Ce principe protège aussi contre une dérive plus insidieuse, qu'on appelle le <strong>détournement de finalité</strong> : utiliser pour un nouveau but une donnée qui avait été recueillie pour une raison précise. C'est un piège fréquent, parce qu'il part presque toujours d'une bonne intention. On a recueilli une information dans un cadre, on la réutilise dans un autre « puisqu'on l'a sous la main », et l'on franchit, sans s'en rendre compte, une ligne importante.</Texte>

          <HighlightBox label="La photo « souvenir » qui change de destination" couleur="jaune">
            <p className="text-gray-800 text-sm leading-relaxed font-medium italic mb-3">
              Lors d'une sortie de groupe particulièrement réussie, un collaborateur prend des photos des résidents. De retour, enthousiaste, il propose de les publier sur la page Facebook de l'institution, « pour montrer la belle journée qu'on a passée ».
            </p>
            <Texte>L'intention est généreuse, et pourtant le réflexe doit s'enclencher. La finalité initiale (garder une trace, animer la vie du groupe) ne couvre pas du tout la finalité nouvelle : diffuser publiquement l'image de personnes vulnérables. Publier l'image de quelqu'un est un traitement à part entière, avec ses propres exigences : il suppose que les personnes concernées (ou leurs représentants) aient été informées et aient donné leur accord, en connaissant l'usage exact qui sera fait des images.</Texte>
            <Texte>Tant que ce cadre n'est pas réuni, la réponse est simple : on ne publie pas. Et dans le doute sur ce qui a été convenu, on ne publie pas non plus : on demande.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3 : La bonne personne" titre="Le besoin de savoir prime sur tout le reste">
          <Texte>La troisième question est sans doute la plus délicate, parce qu'elle oppose la protection des données à des mouvements humains très naturels : la bienveillance, la serviabilité, l'envie d'aider. Le principe de confidentialité pose pourtant une règle claire : une information ne se partage qu'avec quelqu'un qui a, à la fois, le <strong>droit</strong> et le <strong>besoin</strong> de la connaître pour l'accompagnement. Le critère n'est ni la sympathie, ni le lien de parenté, ni même le fait d'appartenir à l'institution.</Texte>
          <Texte>Concrètement, partager une information avec un collègue qui accompagne la même personne, dans le cadre du travail, est légitime. La confier à quelqu'un qui n'a ni ce rôle ni ce besoin ne l'est pas, fût-ce un collègue d'un autre service, ou un proche manifestement inquiet et bien intentionné. Deux situations, parmi les plus fréquentes, méritent qu'on s'y arrête.</Texte>

          <HighlightBox label="La famille au téléphone" couleur="jaune">
            <p className="text-gray-800 text-sm leading-relaxed font-medium italic mb-3">
              « Bonjour, je suis la sœur de Monsieur M. Je m'inquiète un peu, je voulais savoir comment il va en ce moment, et s'il a bien pu aller à ses rendez-vous cette semaine. »
            </p>
            <Texte>La demande est touchante, la voix est sincère, et c'est précisément ce qui rend la situation piégeuse. Deux problèmes se posent en même temps. D'abord, une voix au téléphone n'est pas une identité vérifiée : rien ne garantit que cette personne est bien qui elle dit être. Ensuite, et même si elle l'était, un lien de parenté ne donne pas automatiquement accès aux informations d'un adulte.</Texte>
            <Texte>Le bon geste consiste à ne rien confirmer ni infirmer sur la situation de Monsieur M., à expliquer avec ménagement qu'on ne transmet pas d'informations de cette manière, et à renvoyer vers le cadre prévu : passer par le responsable, ou recueillir l'accord de la personne concernée. On peut être chaleureux dans la forme tout en restant ferme sur le fond. Protéger n'oblige pas à blesser.</Texte>
          </HighlightBox>

          <HighlightBox label="Le stagiaire curieux" couleur="jaune">
            <p className="text-gray-800 text-sm leading-relaxed font-medium italic mb-3">
              Un stagiaire, motivé et désireux de bien faire, consulte de son propre chef les dossiers de résidents qu'il n'accompagne pas, « pour mieux connaître la maison et les situations ».
            </p>
            <Texte>Ici encore, l'intention désamorce la méfiance, et c'est bien le problème. Le droit d'accéder à un dossier ne découle pas de la curiosité, même la plus professionnelle, mais du <strong>besoin lié à l'accompagnement</strong>. On consulte les données des personnes que l'on accompagne effectivement, pas celles des autres.</Texte>
            <Texte>Plutôt que de laisser ce comportement s'installer comme une habitude anodine, c'est l'occasion d'expliquer le principe au stagiaire : ce n'est pas une question de confiance en lui, c'est une règle qui protège chaque résident, et qui le protégera lui aussi, demain, dans sa pratique.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4 : En sécurité" titre="Protéger le support, par des gestes ordinaires">
          <Texte>La quatrième et dernière question est la plus concrète, et peut-être la plus facile à appliquer. Une fois qu'on a établi qu'on manipule une donnée pour une bonne raison, avec la bonne personne, dans la juste mesure, il reste à ne pas l'exposer matériellement. C'est le principe de sécurité, et il tient tout entier dans une poignée de gestes quotidiens : rien de technique, rien qui demande une formation d'informaticien.</Texte>
          <Texte>Verrouiller sa session dès qu'on s'éloigne d'un poste, même pour une minute, parce que c'est en une minute que tout se joue. Ranger les documents papier, ne pas laisser un dossier ouvert sur un bureau ni une feuille de transmission traîner près de l'imprimante. Préférer les canaux de l'institution aux outils privés, éviter le WhatsApp personnel et le téléphone privé pour ce qui touche aux usagers. Vérifier le destinataire d'un message ou d'un e-mail, et le périmètre exact d'un groupe, avant d'appuyer sur « envoyer ». Ne pas laisser traîner mots de passe, badges et codes d'accès. Aucun de ces gestes n'est compliqué ; leur seule difficulté est d'y penser, à chaque fois, jusqu'à ce qu'ils deviennent automatiques.</Texte>

          <HighlightBox label="Le réflexe qui résume tout le module" couleur="bleu">
            <Texte>Vous l'aurez remarqué : aucune des situations de ce module ne demandait de connaissances juridiques. Toutes se résolvaient par le même geste mental, s'arrêter un instant et se poser la bonne question. Et quand même cette question laisse un doute, il existe une réponse universelle, qui n'a jamais fait de tort à personne : <strong>dans le doute, je m'abstiens et je demande à mon responsable.</strong> Mieux vaut une question de trop qu'une donnée de travers.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce qu'il faut retenir du module 2" couleur="vert">
            <Liste items={[
              "Le nécessaire : transmettre l'utile, formulé sans jugement, pas la rumeur.",
              "La bonne raison : une finalité claire, et se méfier du détournement vers un autre usage.",
              "La bonne personne : le besoin de savoir prime sur le lien, la sympathie ou la curiosité.",
              "En sécurité : écran verrouillé, papier rangé, bons canaux, destinataire vérifié.",
              "Et toujours, en cas de doute : je m'abstiens et je demande.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Une personne affirme au téléphone être le fils d'un résident et demande des nouvelles de sa santé. Quel est le bon réflexe ?",
              reponses: [
                "Je réponds, c'est de la famille proche",
                "Je ne confirme rien et je renvoie vers le cadre prévu par l'institution",
                "Je donne seulement les informations médicales les plus importantes",
              ],
              bonneReponse: 1,
              explication: "Une identité non vérifiée et un lien de parenté ne donnent pas droit aux données sensibles d'un adulte. On protège, et on oriente sans blesser.",
            },
            {
              question: "Vous souhaitez publier sur les réseaux de l'institution de belles photos des résidents prises lors d'une sortie. Que faites-vous ?",
              reponses: [
                "Je publie, c'est valorisant pour l'institution et les familles aiment",
                "Je publie en floutant simplement les visages",
                "Je ne publie pas sans information et accord préalables ; dans le doute, je demande",
              ],
              bonneReponse: 2,
              explication: "Publier une image est un traitement nouveau, avec sa propre finalité, qui suppose information et accord des personnes concernées ou de leurs représentants.",
            },
            {
              question: "Quel est le réflexe-clé, valable dans toutes les situations incertaines ?",
              reponses: [
                "Demander vite l'avis du premier collègue venu",
                "Dans le doute, je m'abstiens et je demande à mon responsable",
                "Agir rapidement pour ne pas bloquer le travail de l'équipe",
              ],
              bonneReponse: 1,
              explication: "L'abstention prudente, suivie d'une question au responsable, évite l'immense majorité des incidents.",
            },
          ]}
        />

      </div>
    </div>
  )
}
