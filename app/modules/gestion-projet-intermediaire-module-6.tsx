import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module6GestionProjetIntermediaire({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={6}
        categorie="Gestion de projet — Niveau Intermédiaire"
        titre="Faire vivre le projet :"
        titrePart2="communiquer, animer, ajuster"
        sousTitre="Maintenir la dynamique collective de la première réunion au bilan. Un projet bien cadré peut s'éteindre faute d'être entretenu."
        duree="≈ 20-25 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Conduire ne s'arrête pas à organiser">
          <Texte>Les modules précédents vous ont outillé pour préparer un projet : le cadrer, identifier ses acteurs, fixer ses objectifs, le planifier, répartir les responsabilités. Mais un projet ne se réduit pas à sa préparation. Une fois lancé, il faut le <strong>faire vivre</strong> — et c'est un travail à part entière, souvent sous-estimé, qui fait la différence entre un projet qui aboutit et un projet qui s'essouffle.</Texte>
          <Texte>Pourquoi un projet bien préparé peut-il s'éteindre ? Parce qu'un projet repose sur l'énergie et l'attention de personnes, et que cette énergie se disperse naturellement si rien ne l'entretient. Les priorités du quotidien reprennent le dessus, l'élan initial retombe, l'information cesse de circuler, et le projet s'efface peu à peu sans que personne ne l'ait décidé. Le faire vivre, c'est lutter contre cette entropie : maintenir l'attention, la coordination et la motivation jusqu'au bout.</Texte>
          <Texte>Ce travail repose sur trois gestes : <strong>communiquer</strong> pour que l'information circule et que chacun reste relié au projet ; <strong>animer</strong> les temps collectifs pour qu'ils servent vraiment à quelque chose ; <strong>ajuster</strong> face aux imprévus et aux résistances, sans renoncer ni s'entêter. Ces trois gestes, menés dans la durée, sont ce qui transforme un plan en réalité.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Communiquer : faire circuler l'information juste">
          <Texte>La première cause de mort lente d'un projet est l'arrêt de la circulation de l'information. Quand chacun ne voit plus que sa part et perd de vue l'ensemble, le projet se fragmente et perd son sens collectif. <strong>Communiquer, dans un projet, c'est entretenir le lien entre les contributeurs et maintenir vivante la vision commune.</strong></Texte>
          <Texte>Bien communiquer ne veut pas dire communiquer beaucoup. Une erreur fréquente est de noyer l'équipe sous les messages, les comptes rendus, les sollicitations — au point que plus personne ne lit. La bonne communication est <strong>juste</strong> : la bonne information, à la bonne personne, au bon moment. Elle relie à ce besoin d'implication différencié vu au module 2 : ceux qu'on a choisi d'associer ont besoin d'une information riche et régulière ; ceux qu'on tient informés, d'un point ponctuel ; inutile d'inonder tout le monde de tout.</Texte>

          <ConceptBox label="Concept clé" titre="Communiquer dans un projet, c'est répondre à trois questions : qui a besoin de quoi, et quand ?">
            <p>Tenir les contributeurs reliés à l'avancement, signaler les difficultés assez tôt pour qu'on puisse réagir, partager les réussites pour entretenir la motivation. Une communication juste n'est pas abondante : elle est pertinente. Mieux vaut un point régulier et clair qu'un flot continu que plus personne ne suit.</p>
          </ConceptBox>

          <Texte>Il y a une dimension propre au secteur à garder à l'esprit : la communication d'un projet inclut souvent <strong>les personnes accompagnées et leurs proches</strong>, quand le projet les concerne. Les tenir informés de ce qui change dans leur cadre de vie, recueillir leurs réactions en cours de route, n'est pas une formalité : c'est la suite logique de leur statut de partie prenante. Un projet qui modifie le quotidien des personnes sans jamais les tenir au courant manque à la fois d'efficacité et de respect.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Animer les temps collectifs : des réunions qui servent">
          <Texte>Tout projet d'équipe suppose des temps collectifs — réunions de lancement, points d'avancement, bilans. Ces moments sont précieux, mais ils sont aussi le lieu d'un gâchis fréquent : la réunion qui dure, qui tourne en rond, dont on ressort sans savoir ce qui a été décidé. <strong>Animer un temps collectif, c'est faire en sorte qu'il produise quelque chose d'utile et respecte le temps de chacun.</strong></Texte>
          <Texte>Une réunion de projet utile obéit à quelques principes simples, qui tiennent moins à une technique qu'à une intention. Elle a un <strong>but clair</strong> : on sait pourquoi on se réunit, et ce n'est pas « parce qu'on se réunit toujours ». Elle reste <strong>centrée</strong> : l'animateur veille à ce qu'on traite ce pour quoi on est là, sans se disperser. Elle aboutit à des <strong>décisions et des suites explicites</strong> : on ressort en sachant qui fait quoi pour la prochaine fois. Et elle <strong>respecte le temps prévu</strong> : une réunion qui déborde systématiquement use les participants et nourrit le sentiment que ces temps sont une corvée.</Texte>

          <HighlightBox label="Le rôle de l'animateur n'est pas de parler le plus, mais de faire parler juste" couleur="bleu">
            <Texte>Animer, ce n'est pas occuper l'espace : c'est veiller à ce que chacun puisse contribuer, à ce que les plus discrets soient entendus autant que les plus expansifs, et à ce que la discussion avance vers des décisions. Dans une équipe pluridisciplinaire, c'est particulièrement important : le regard partagé ne se forme que si chaque métier ose prendre la parole. Un bon animateur crée les conditions pour que cela arrive — il ouvre l'espace plutôt qu'il ne le remplit.</Texte>
          </HighlightBox>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à la dernière réunion de projet à laquelle vous avez participé. En êtes-vous ressorti en sachant ce qui avait été décidé et qui ferait quoi ? Si non, qu'est-ce qui a manqué : un but clair, un animateur qui recentre, une conclusion explicite ? Ces trois manques expliquent la grande majorité des réunions vécues comme une perte de temps.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Ajuster : ni renoncer, ni s'entêter">
          <Texte>Aucun projet ne se déroule exactement comme prévu. Des imprévus surgissent, des hypothèses se révèlent fausses, des résistances apparaissent. Conduire un projet, c'est donc savoir <strong>ajuster</strong> en cours de route — et cet ajustement est un art d'équilibre entre deux écueils opposés.</Texte>
          <Texte>Le premier écueil est de <strong>renoncer trop vite</strong> : à la première difficulté, on abandonne, ou on dénature le projet pour éviter l'obstacle. Le second, symétrique, est de <strong>s'entêter</strong> : on s'accroche au plan initial alors que la réalité montre qu'il ne fonctionne pas, par fierté ou par refus de reconnaître qu'on s'était trompé. Entre les deux, l'ajustement juste consiste à modifier les moyens tout en gardant le cap sur l'objectif — la fermeté sur le but, la souplesse sur le chemin.</Texte>
          <Texte>Un cas particulier mérite attention : les <strong>résistances</strong>. Quand un projet rencontre des oppositions, le réflexe est de les voir comme des obstacles à vaincre. C'est souvent une erreur. Une résistance est presque toujours porteuse d'une information : elle signale un besoin qu'on n'a pas vu, une crainte légitime, un effet de bord qu'on a négligé. Écouter une résistance plutôt que la combattre permet fréquemment d'améliorer le projet — et de rallier celui qui résistait.</Texte>

          <ConceptBox label="Concept clé" titre="Ajuster, c'est garder le cap en changeant de route si nécessaire.">
            <p>L'objectif reste ; les moyens s'adaptent. Cela suppose de surveiller le déroulé (d'où l'utilité des jalons), d'accepter de reconnaître ce qui ne marche pas, et de traiter les résistances comme des informations plutôt que comme des obstacles. Ni le renoncement à la première difficulté, ni l'entêtement aveugle : la voie juste est celle de l'adaptation lucide.</p>
          </ConceptBox>

          <PullQuote>
            Conduire un projet jusqu'au bout, c'est savoir tenir sans s'entêter, et adapter sans renoncer.
          </PullQuote>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Un projet bien préparé peut s'éteindre faute d'être entretenu : le faire vivre est un travail à part entière, qui lutte contre la dispersion naturelle de l'énergie collective.",
              "Communiquer, c'est faire circuler l'information juste — la bonne information, à la bonne personne, au bon moment — et non communiquer beaucoup. Dans le secteur, cela inclut souvent les personnes accompagnées et leurs proches.",
              "Animer un temps collectif, c'est le rendre utile : un but clair, une discussion centrée, des décisions et des suites explicites, le temps respecté. L'animateur ouvre l'espace de parole plutôt qu'il ne le remplit.",
              "Ajuster, c'est tenir entre deux écueils : ni renoncer trop vite, ni s'entêter. On garde le cap sur l'objectif en adaptant les moyens.",
              "Les résistances sont porteuses d'information : les écouter améliore souvent le projet et rallie ceux qui résistaient. À entendre avant de chercher à surmonter.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Pourquoi un projet bien préparé peut-il quand même s'éteindre ?",
              reponses: [
                "Parce que la préparation est inutile",
                "Parce que l'énergie et l'attention collectives se dispersent naturellement si rien ne les entretient ; le faire vivre lutte contre cette dispersion",
                "Parce qu'il y a trop de réunions",
                "Parce que les objectifs étaient trop précis",
              ],
              bonneReponse: 1,
              explication: "Les priorités du quotidien reprennent le dessus, l'élan initial retombe, l'information cesse de circuler. Faire vivre un projet, c'est maintenir activement l'attention, la coordination et la motivation — un travail à part entière, distinct de la préparation.",
            },
            {
              question: "Qu'est-ce qu'une bonne communication de projet ?",
              reponses: [
                "Communiquer le plus possible, à tout le monde, en permanence",
                "Faire circuler l'information juste : la bonne information, à la bonne personne, au bon moment",
                "Ne communiquer qu'à la fin du projet",
                "Réserver l'information aux décideurs",
              ],
              bonneReponse: 1,
              explication: "Noyer l'équipe sous les messages est aussi problématique que ne pas communiquer. La bonne communication est juste : pertinente, différenciée selon les niveaux d'implication, et régulière sans être excessive.",
            },
            {
              question: "Comment conduire un ajustement juste face à un imprévu ?",
              reponses: [
                "Renoncer dès la première difficulté",
                "S'entêter sur le plan initial coûte que coûte",
                "Garder le cap sur l'objectif tout en adaptant les moyens — ni renoncement, ni entêtement",
                "Changer d'objectif à chaque obstacle",
              ],
              bonneReponse: 2,
              explication: "L'ajustement juste tient entre deux écueils : renoncer trop vite (abandonner ou dénaturer le projet) et s'entêter (s'accrocher au plan alors que la réalité montre qu'il ne fonctionne pas). La voie juste : fermeté sur le but, souplesse sur le chemin.",
            },
            {
              question: "Face à une résistance, le bon réflexe est de la combattre pour qu'elle ne bloque pas le projet. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Une résistance est presque toujours porteuse d'information : un besoin non vu, une crainte légitime, un effet de bord négligé. L'écouter plutôt que la combattre permet souvent d'améliorer le projet et de rallier celui qui résistait.",
            },
          ]}
        />

      </div>
    </div>
  )
}
