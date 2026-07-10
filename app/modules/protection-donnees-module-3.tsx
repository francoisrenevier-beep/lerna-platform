import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3ProtectionDonnees({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Protection des données — Transversal"
        titre="Droits des personnes"
        titrePart2="& que faire en cas de problème"
        sousTitre="Les données appartiennent d'abord aux personnes accompagnées. Les respecter prolonge la bientraitance — et savoir réagir quand quelque chose dérape en fait partie."
        duree="≈ 25 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Changer de point de vue : celui de la personne">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Connaître les principaux droits des personnes sur leurs propres données",
              "Relier ces droits à la dignité et à la bientraitance",
              "Réagir avec le bon réflexe en cas d'incident : signaler plutôt que taire",
              "Savoir vers qui orienter une demande ou un problème",
            ]} />
          </ConceptBox>
          <Texte>Les deux premiers modules ont parlé de nous — de notre regard, de nos gestes. Ce dernier module opère un déplacement décisif : il adopte le point de vue de la personne accompagnée. Car au fond, ces données dont nous prenons soin ne sont pas les nôtres. Elles sont les siennes.</Texte>
          <Texte>Cette idée mérite qu'on s'y arrête, parce qu'elle éclaire tout le reste. Lorsqu'une institution détient des informations sur une personne, elle n'en est pas propriétaire : elle en est dépositaire, le temps de l'accompagnement, et au service de cette personne. L'histoire racontée par ces données — la santé, le parcours, les difficultés, les liens — reste l'histoire de quelqu'un qui a le droit d'en rester maître. Protéger ces données n'est donc pas une formalité bureaucratique que l'on accomplirait pour se mettre en règle. C'est une forme concrète de respect, dans le prolongement direct de la bientraitance qui oriente déjà chaque geste du métier. On ne traite pas bien une personne dont on traite mal l'intimité.</Texte>
        </SectionModule>

        <PullQuote source="">
          Respecter les données d'une personne, c'est reconnaître qu'elle reste maîtresse de son histoire, même quand c'est nous qui la consignons.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Les droits des personnes sur leurs données">
          <Texte>De cette idée découlent des droits très concrets, que la loi reconnaît à toute personne sur les informations qui la concernent. Il n'est pas nécessaire de les maîtriser comme un juriste — vous n'aurez pas à les mettre en œuvre vous-même. Mais en connaître l'esprit permet d'adopter la bonne posture lorsqu'une personne les exerce, et d'orienter correctement sa demande plutôt que de la recevoir comme un problème.</Texte>

          <HighlightBox label="Les principaux droits (nLPD)" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Droit à l'information (art. 19) — la personne doit être informée que des données la concernant sont collectées, et dans quel but. La nLPD a élargi ce devoir à toute collecte, et non plus aux seules données sensibles.",
              "Droit d'accès (art. 25) — la personne peut demander quelles données sont traitées à son sujet. Ce droit est strictement personnel, en principe gratuit, et la réponse intervient en général dans un délai de trente jours.",
              "Droit de rectification (art. 32) — la personne peut faire corriger des données inexactes la concernant.",
              "Droit à l'effacement (art. 32) — sous certaines conditions, elle peut demander la suppression de données.",
              "Droit à la remise ou au transfert (art. 28) — dite « portabilité », la possibilité de récupérer certaines de ses données.",
            ]} />
          </HighlightBox>

          <Texte>Derrière ce vocabulaire un peu administratif se cache quelque chose de très humain. Le droit d'accès, par exemple, répond à une question que toute personne accompagnée peut légitimement se poser : « qu'est-ce qui est écrit sur moi ? » Le droit de rectification répond à une autre : « et si ce qui est écrit est faux ? » Ces droits ne sont pas des armes dirigées contre l'institution ; ils sont l'expression du fait que la personne reste un sujet, et non un objet de dossier.</Texte>
          <Texte>Sur le terrain, votre rôle est limité et clair, ce qui devrait rassurer : vous n'avez pas à traiter ces demandes vous-même, ni à juger si elles sont fondées. Votre rôle est de les <strong>reconnaître</strong> et de les <strong>transmettre</strong> à la bonne personne — le responsable données, la direction. Si un résident ou un proche vous dit « je veux savoir ce qui figure dans mon dossier », ce n'est ni une menace, ni un caprice, ni une remise en cause de votre travail : c'est l'exercice d'un droit. La seule posture juste consiste à l'accueillir avec respect et à l'orienter. La balayer, la minimiser ou la prendre comme une attaque serait, en soi, un manquement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Quand quelque chose dérape : la culture du signalement">
          <Texte>Il faut maintenant aborder ce que personne n'aime envisager : l'erreur. Car malgré toute la vigilance du monde, des incidents surviennent. Un e-mail part au mauvais destinataire. Un dossier s'égare. Un message atterrit dans le mauvais groupe. Un classeur reste ouvert dans un lieu accessible. Ces choses arrivent, y compris aux professionnels les plus consciencieux, et prétendre le contraire serait naïf.</Texte>
          <Texte>Ce qui distingue une institution mûre d'une institution fragile, ce n'est donc pas l'absence d'incidents — personne ne peut la garantir. C'est sa capacité à les faire <strong>remonter vite</strong> plutôt qu'à les enfouir. Or l'instinct, quand on commet une erreur, pousse exactement dans l'autre sens : on a honte, on craint les reproches, on espère que « ça passera inaperçu ». Cet instinct est humain, mais il est le pire des conseillers, car un incident tu ne disparaît pas : il continue de produire ses effets, hors de tout contrôle, pendant qu'on espère en silence.</Texte>

          <HighlightBox label="Le réflexe en cas d'incident" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Ne pas masquer. Un incident dissimulé s'aggrave toujours ; signalé, il peut être contenu.",
              "Signaler sans délai à son responsable ou à sa direction, selon la procédure interne.",
              "Décrire les faits simplement : quoi, quand, quelles données, qui pourrait être concerné.",
              "Ne pas tenter de « réparer » seul en effaçant des traces : on informe, et on laisse les personnes compétentes décider de la suite.",
            ]} />
          </HighlightBox>

          <Texte>Il y a une raison de fond à cette urgence du signalement. Certaines violations de données doivent, selon leur gravité, être annoncées à l'autorité compétente, voire aux personnes concernées elles-mêmes, et parfois dans des délais courts. Décider si une telle annonce s'impose n'est pas de votre ressort — et c'est tant mieux. Mais cette décision ne peut être prise que si l'information remonte à temps. Votre signalement rapide est donc le maillon sans lequel l'institution ne peut pas faire son travail. En signalant vite, vous ne vous accusez pas : vous protégez les personnes concernées, et vous protégez l'institution.</Texte>

          <HighlightBox label="L'e-mail parti trop vite" couleur="jaune">
            <p className="text-gray-800 text-sm leading-relaxed font-medium italic mb-3">
              Deux minutes après l'envoi, vous réalisez avec effroi qu'un e-mail contenant la liste des résidents et leurs mesures de protection vient de partir à un destinataire externe, ajouté par erreur par l'autocomplétion.
            </p>
            <Texte>Le premier mouvement, presque irrésistible, est d'espérer : « peut-être qu'il ne l'ouvrira pas », « peut-être que ça n'a pas d'importance ». C'est exactement le mouvement à ne pas suivre.</Texte>
            <Texte>Le bon réflexe est de signaler immédiatement la situation à son responsable ou à sa direction, en décrivant les faits sans les minimiser. C'est ensuite à l'institution de décider des suites — tenter un rappel du message, informer le destinataire, évaluer s'il faut annoncer l'incident. Ce qui était une erreur isolée et compréhensible deviendrait une faute si elle était dissimulée. Votre transparence, ici, est ce qui protège le mieux les personnes dont les données ont fuité.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Vers qui se tourner">
          <Texte>Tout ce parcours converge vers une même idée, simple et rassurante : face à un doute, une demande ou un incident, vous n'êtes jamais seul. Il existe, autour de vous, des relais dont c'est précisément le rôle. Les connaître à l'avance, c'est s'épargner l'hésitation au mauvais moment.</Texte>
          <Texte>Le premier relais, le plus proche, est le <strong>responsable à la protection des données</strong> dans votre institution. C'est votre interlocuteur naturel pour toute question ou toute demande qui vous dépasse. Au-dessus, la <strong>direction</strong> intervient pour les incidents et les décisions qui engagent l'institution dans son ensemble. Au-delà des murs, deux autorités font référence : le <strong>préposé cantonal à la protection des données</strong>, particulièrement pour les institutions relevant du droit cantonal, et le <strong>Préposé fédéral à la protection des données et à la transparence (PFPDT)</strong> au niveau fédéral. Vous n'aurez généralement pas à contacter ces autorités vous-même — c'est le rôle de votre responsable et de votre direction — mais savoir qu'elles existent rappelle que la protection des données s'inscrit dans un cadre solide, où chacun a sa place et personne ne porte seul le poids des décisions.</Texte>

          <HighlightBox label="Les bons relais, en résumé" couleur="vert">
            <Liste items={[
              "Le responsable des données de l'institution : premier interlocuteur pour toute question ou demande.",
              "La direction : pour les incidents et les décisions qui engagent l'institution.",
              "Le préposé cantonal : autorité de référence, notamment pour les institutions relevant du droit cantonal.",
              "Le PFPDT : autorité de référence au niveau fédéral.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Texte>Au terme de ce parcours, une dernière idée mérite d'être emportée, parce qu'elle en est le fil rouge. La protection des données, on l'a vue, n'est ni technique, ni juridique, ni administrative dans son essence. Elle est <strong>relationnelle</strong>. Elle parle de la confiance qu'une personne vulnérable place en celles et ceux qui l'accompagnent, et de la manière dont on honore cette confiance jusque dans le traitement de la plus petite information. Vue ainsi, elle n'est pas une contrainte qui s'ajouterait au métier : elle en fait déjà partie, au même titre que l'écoute, le respect et le soin.</Texte>

        <PullQuote source="Fil rouge du parcours LEARNA">
          La protection des données n'est pas une contrainte de plus. C'est une manière de prendre soin des personnes — au même titre que tout ce que vous faites déjà.
        </PullQuote>

        <HighlightBox label="Ce qu'il faut retenir du module 3" couleur="vert">
          <Liste items={[
            "Les personnes ont des droits sur leurs données : information, accès, rectification, effacement, portabilité.",
            "Votre rôle est de reconnaître et d'orienter ces demandes, avec respect — pas de les traiter ni de les juger.",
            "En cas d'incident : signaler vite, ne jamais masquer. La transparence protège les personnes et l'institution.",
            "En cas de doute : responsable, direction, préposé cantonal ou PFPDT.",
            "Au fond, protéger les données, c'est prolonger la bientraitance.",
          ]} />
        </HighlightBox>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Un résident vous dit : « Je veux voir ce qui est écrit sur moi dans mon dossier. » Comment l'interpréter ?",
              reponses: [
                "Comme une marque de défiance qu'il vaut mieux décourager",
                "Comme un droit (droit d'accès) à accueillir et à orienter vers le responsable",
                "Comme une demande recevable seulement avec l'accord de la famille",
              ],
              bonneReponse: 1,
              explication: "Le droit d'accès est strictement personnel. La bonne posture est d'accueillir la demande avec respect et de la transmettre à la personne compétente.",
            },
            {
              question: "Vous venez d'envoyer par erreur des données sensibles au mauvais destinataire. Que faites-vous en premier ?",
              reponses: [
                "J'attends de voir si quelqu'un réagit ou s'en aperçoit",
                "J'efface discrètement les traces pour éviter les ennuis",
                "Je signale sans délai à mon responsable ou à ma direction",
              ],
              bonneReponse: 2,
              explication: "Le signalement interne rapide permet à l'institution de limiter les conséquences et de respecter ses obligations. Dissimuler aggrave tout.",
            },
            {
              question: "Quelle phrase résume le mieux l'esprit de ce parcours ?",
              reponses: [
                "La protection des données est l'affaire des juristes et de l'informatique",
                "Protéger les données, c'est une dimension du respect et de la bientraitance",
                "Mieux vaut ne rien écrire ni rien transmettre pour éviter les problèmes",
              ],
              bonneReponse: 1,
              explication: "Le parcours relie la protection des données au cœur même des métiers de l'accompagnement : une affaire de respect, pas de technique.",
            },
          ]}
        />

      </div>
    </div>
  )
}
