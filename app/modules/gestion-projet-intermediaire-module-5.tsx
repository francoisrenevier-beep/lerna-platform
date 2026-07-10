import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module5GestionProjetIntermediaire({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Gestion de projet — Niveau Intermédiaire"
        titre="Clarifier les"
        titrePart2="responsabilités"
        sousTitre="Répondre clairement au « qui fait quoi » en équipe pluridisciplinaire — sans alourdir ni hiérarchiser."
        duree="≈ 20-25 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le coût du flou sur les responsabilités">
          <Texte>Vous avez un projet cadré, des parties prenantes identifiées, des objectifs et un déroulé. Reste une question décisive, qui paraît évidente mais qui est l'une des premières causes d'échec des projets d'équipe : <strong>qui fait quoi ?</strong></Texte>
          <Texte>Le flou sur les responsabilités coûte cher, et de deux façons opposées et symétriques. D'un côté, des tâches <strong>tombent dans le vide</strong> : chacun croit qu'un autre s'en occupe, personne ne s'en charge, et on s'aperçoit trop tard qu'un maillon essentiel n'a jamais été pris en main. De l'autre, des tâches sont <strong>faites en double</strong> : deux personnes traitent la même chose, chacune ignorant que l'autre s'en occupait, et le temps gaspillé s'accompagne souvent d'agacement. Entre ces deux écueils, le flou génère aussi des <strong>tensions</strong> : quand une chose ne se fait pas, on cherche un responsable, et les reproches fusent d'autant plus que personne n'avait clairement la charge.</Texte>
          <Texte>Tous ces problèmes ont une cause unique : on a supposé que « qui fait quoi » allait de soi, sans le dire explicitement. Or dans une équipe pluridisciplinaire, où chacun a sa fonction propre et où les évidences des uns ne sont pas celles des autres, <strong>rien ne va de soi tant qu'on ne l'a pas formulé.</strong></Texte>
        </SectionModule>

        <PullQuote>
          La plupart des choses qui ne se font pas dans un projet ne sont pas refusées : elles tombent dans l'angle mort entre deux personnes qui croyaient chacune que l'autre s'en chargeait.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Distinguer les types de responsabilité">
          <Texte>Pour clarifier le « qui fait quoi », il faut d'abord comprendre qu'il existe <strong>plusieurs façons d'être responsable</strong> d'une chose dans un projet — et que les confondre est précisément ce qui crée le flou. Une personne peut réaliser une tâche, une autre en répondre, une troisième être consultée, une quatrième simplement informée. Ce sont quatre rôles distincts par rapport à une même action.</Texte>

          <ConceptBox label="Concept clé" titre="Quatre types de responsabilité face à une tâche (RACI) :">
            <p><strong>Réaliser</strong> — celui qui fait concrètement le travail.</p>
            <p><strong>Répondre / porter</strong> — celui qui est garant que la tâche soit faite, qui en répond même s'il ne la réalise pas lui-même. Pour chaque tâche, il est essentiel qu'une seule personne porte cette responsabilité, sans quoi elle se dilue.</p>
            <p><strong>Être consulté</strong> — celui dont on sollicite l'avis ou l'expertise avant d'agir, sans qu'il décide.</p>
            <p><strong>Être informé</strong> — celui qu'on tient au courant du résultat, sans qu'il intervienne.</p>
          </ConceptBox>

          <Texte>Cette distinction est précieuse parce qu'elle dissout la plupart des malentendus. Beaucoup de tensions naissent d'une confusion entre ces rôles : quelqu'un croyait devoir réaliser alors qu'il devait seulement être consulté ; quelqu'un pensait être informé alors qu'on attendait qu'il porte la tâche. Nommer, pour chaque tâche importante, qui réalise et surtout <strong>qui en répond</strong>, suffit à éviter l'essentiel de ces malentendus.</Texte>
          <Texte>Le point le plus important, s'il ne fallait en retenir qu'un, est celui-ci : <strong>pour chaque tâche, une personne et une seule doit en être garante.</strong> Ce n'est pas qu'elle fait tout — d'autres peuvent réaliser — mais elle veille à ce que ce soit fait. Quand cette responsabilité de garant est partagée entre plusieurs, elle s'évapore : chacun compte sur l'autre. Quand elle n'est attribuée à personne, la tâche tombe dans le vide.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La matrice des responsabilités : un outil de clarté">
          <Texte>Pour mettre en pratique cette distinction sur un projet réel, il existe un outil simple : la <strong>matrice des responsabilités</strong>. Présentons-la dans sa logique, sans la transformer en exercice administratif.</Texte>

          <ConceptBox label="Concept clé" titre="Une matrice des responsabilités croise les tâches du projet avec les personnes impliquées.">
            <p>Pour chaque tâche, elle indique le rôle de chacun : qui réalise, qui en répond, qui est consulté, qui est informé. D'un coup d'œil, on voit si chaque tâche a bien un garant, si personne n'est oublié, et si la charge est équilibrée.</p>
          </ConceptBox>

          <Texte>L'intérêt de poser ce tableau, même sommaire, n'est pas le tableau lui-même : c'est la <strong>conversation qu'il oblige à avoir</strong>. En remplissant la matrice avec l'équipe, on est forcé de dire explicitement, pour chaque tâche, qui en répond — et c'est précisément cette explicitation qui dissipe les malentendus. Souvent, c'est au moment de remplir la matrice qu'on découvre qu'une tâche importante n'avait été attribuée à personne, ou que deux personnes pensaient toutes deux en être chargées.</Texte>

          <HighlightBox label="La matrice est un déclencheur de clarté, pas une fin en soi" couleur="bleu">
            <Texte>Inutile d'en faire un document exhaustif et figé. Pour un projet d'équipe modeste, lister les quelques tâches importantes et nommer, pour chacune, qui en répond suffit déjà à éviter la plupart des angles morts. Ce qui compte, ce n'est pas la beauté du tableau, mais que la question « qui est garant de ça ? » ait été posée et tranchée pour chaque tâche qui compte.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Clarifier les rôles sans hiérarchiser les métiers">
          <Texte>Il faut conclure ce module sur un point qui touche au cœur du positionnement du secteur. Clarifier les responsabilités pourrait laisser croire qu'on établit une hiérarchie — qui commande, qui exécute. Ce serait un contresens, et il importe de le dissiper.</Texte>
          <Texte>Répartir les responsabilités dans un projet, ce n'est pas classer les personnes par ordre d'importance ; c'est <strong>organiser une collaboration</strong>. Le fait qu'une personne porte une tâche et qu'une autre soit consultée ne dit rien de leur valeur respective : cela dit seulement leur rôle sur cette tâche précise. Sur la tâche suivante, les rôles peuvent s'inverser. Dans une équipe pluridisciplinaire qui fonctionne bien, la responsabilité circule selon les compétences et les sujets, sans s'attacher à un statut.</Texte>
          <Texte>Au contraire, une répartition qui reconnaît à chaque métier la responsabilité de ce qu'il sait le mieux faire fait vivre concrètement la culture commune. Clarifier les responsabilités, bien compris, n'hiérarchise pas : cela permet à chacun de contribuer pleinement, à sa juste place.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Dans votre dernière expérience de projet collectif, le « qui fait quoi » avait-il été explicité, ou supposé aller de soi ? Si des choses sont tombées dans le vide ou ont été faites en double, demandez-vous : était-ce un problème de personnes, ou un problème de responsabilités jamais clairement attribuées ? La réponse oriente vers la solution.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Le flou sur « qui fait quoi » est l'une des premières causes d'échec des projets d'équipe : tâches qui tombent dans le vide, doublons, tensions. Rien ne va de soi tant qu'on ne l'a pas formulé.",
              "Il existe plusieurs façons d'être responsable d'une tâche : réaliser, en répondre (porter), être consulté, être informé. Les confondre crée le flou.",
              "Point essentiel : pour chaque tâche, une personne et une seule doit en être garante. Partagée, la responsabilité s'évapore ; attribuée à personne, la tâche tombe dans le vide.",
              "La matrice des responsabilités (RACI) croise tâches et personnes ; son vrai intérêt est la conversation qu'elle oblige à avoir, qui rend explicite ce qui était implicite. C'est un déclencheur de clarté, pas une fin en soi.",
              "Clarifier les responsabilités n'est pas hiérarchiser les métiers : c'est organiser une collaboration où la responsabilité circule selon les compétences.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Pourquoi le flou sur les responsabilités coûte-t-il cher dans un projet ?",
              reponses: [
                "Il fait gagner du temps",
                "Des tâches tombent dans le vide (chacun croit qu'un autre s'en occupe), d'autres sont faites en double, et des tensions naissent",
                "Il n'a aucun effet",
                "Il ne concerne que les grands projets",
              ],
              bonneReponse: 1,
              explication: "Dans une équipe pluridisciplinaire, les évidences des uns ne sont pas celles des autres. Supposer que « qui fait quoi » va de soi sans le formuler explicitement mène à des tâches oubliées, des doublons et des tensions évitables.",
            },
            {
              question: "Quel est le point le plus important pour clarifier les responsabilités ?",
              reponses: [
                "Que tout le monde soit responsable de tout",
                "Que, pour chaque tâche, une personne et une seule en soit garante",
                "Que les cadres décident de tout",
                "Qu'aucune responsabilité ne soit attribuée, pour rester souple",
              ],
              bonneReponse: 1,
              explication: "Quand la responsabilité est partagée entre plusieurs personnes, elle s'évapore (chacun compte sur l'autre). Quand elle n'est attribuée à personne, la tâche tombe dans le vide. Une responsabilité claire de garant, par tâche, est l'antidote le plus simple au flou.",
            },
            {
              question: "Quel est le véritable intérêt de la matrice des responsabilités ?",
              reponses: [
                "Produire un beau document administratif",
                "La conversation qu'elle oblige à avoir : en la remplissant, on rend explicite, pour chaque tâche, qui en répond, ce qui dissipe les malentendus",
                "Remplacer les réunions d'équipe",
                "Hiérarchiser les métiers",
              ],
              bonneReponse: 1,
              explication: "Le tableau ne fait que rendre visible ce qui était resté implicite. C'est souvent au moment de le remplir qu'on découvre qu'une tâche importante n'avait été attribuée à personne, ou que deux personnes pensaient toutes deux en être chargées.",
            },
            {
              question: "Répartir les responsabilités dans un projet revient à établir une hiérarchie entre les métiers. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Clarifier les responsabilités organise une collaboration, pas une hiérarchie. Les rôles portent sur des tâches précises et peuvent s'inverser d'une tâche à l'autre. La responsabilité circule selon les compétences — ce qui fait vivre la culture commune plutôt que de l'étouffer.",
            },
          ]}
        />

      </div>
    </div>
  )
}
