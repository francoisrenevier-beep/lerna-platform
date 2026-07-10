import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module5GestionProjetBase({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Gestion de projet — Niveau Base"
        titre="Le vocabulaire de base"
        titrePart2="du projet"
        sousTitre="Quelques mots clés pour parler le même langage et participer pleinement à une démarche projet."
        duree="≈ 20-25 minutes"
        niveau="Base"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi les mots comptent">
          <Texte>Vous voici au dernier module du niveau base. Le chemin parcouru est déjà considérable : vous savez reconnaître un projet, vous en connaissez les phases, vous le voyez à l'œuvre dans l'accompagnement, vous comprenez pourquoi tous les métiers y ont leur place. Il reste un dernier outil à partager, et c'est le plus simple en apparence, mais loin d'être le moins important : <strong>les mots.</strong></Texte>
          <Texte>On pourrait croire le vocabulaire secondaire, une question de forme. C'est une erreur. Quand plusieurs personnes travaillent ensemble sur un projet, les mots qu'elles emploient sont le matériau même de leur coordination. Si l'un dit « objectif » en pensant à une grande intention générale, et l'autre en pensant à une petite action très concrète, ils croiront se comprendre tout en parlant de deux choses différentes — et le malentendu ne se révélera, parfois, qu'au moment où il produit une déception.</Texte>
          <Texte>Un langage commun minimal a donc une fonction très précise : il garantit que, lorsqu'un mot est prononcé dans une réunion de projet, <strong>tout le monde comprend la même chose.</strong> Cela permet à chacun — quel que soit son métier, quelle que soit son habitude des projets — de suivre les échanges, de comprendre un plan d'action, et de poser les bonnes questions sans se sentir perdu ni illégitime. Le vocabulaire est, en ce sens, un outil d'inclusion : il abaisse la barrière d'entrée dans la démarche projet.</Texte>
          <Texte>L'idée n'est surtout pas de vous transformer en spécialistes qui manieraient un jargon. C'est l'inverse : vous donner <strong>six mots clés, et six seulement,</strong> qui reviennent constamment dans tout projet, avec pour chacun une définition simple et un repère pour le retenir. Six mots suffisent à se sentir chez soi dans une démarche projet.</Texte>
        </SectionModule>

        <PullQuote source="">
          Partager un vocabulaire, ce n'est pas faire du jargon — c'est tout le contraire. C'est s'assurer que, quand on prononce un mot, chacun y met bien la même chose.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Les six mots clés du projet">
          <Texte>Voici les six mots à retenir. Chacun répond à une question simple ; c'est par cette question, plus que par une définition abstraite, qu'on les retient le mieux.</Texte>

          <ConceptBox label="Mot clé 1" titre="L'objectif — « Pour aller où ? »">
            <p>C'est ce que le projet cherche à obtenir, le résultat visé, la direction. L'objectif est la traduction concrète de l'intention dont on parlait au module 1. Tout, dans un projet, se rapporte à lui : si une action ne sert pas l'objectif, on peut légitimement se demander pourquoi on la mène.</p>
          </ConceptBox>

          <ConceptBox label="Mot clé 2" titre="L'étape — « Par où passe-t-on ? »">
            <p>C'est une grande phase du projet, un palier sur le chemin vers l'objectif. Un projet ne se franchit pas d'un bond : il se découpe en étapes successives, qui rendent le chemin praticable. Découper en étapes, c'est transformer un objectif intimidant en une suite de pas réalisables.</p>
          </ConceptBox>

          <ConceptBox label="Mot clé 3" titre="Le jalon — « Quels rendez-vous clés ? »">
            <p>C'est un point de repère marquant : un moment où l'on vérifie que tout avance comme prévu, ou une échéance importante à ne pas manquer. Là où l'étape est un segment du chemin, le jalon est un point précis — le rendez-vous du projet, celui où l'on fait le point avant de continuer.</p>
          </ConceptBox>

          <ConceptBox label="Mot clé 4" titre="Le rôle — « Qui fait quoi ? »">
            <p>C'est la fonction de chacun dans le projet : qui porte, qui contribue, qui décide, comme on l'a vu au module 4. Le rôle répartit le travail et les responsabilités, pour que chacun sache ce qu'on attend de lui et que rien ne tombe entre les mailles.</p>
          </ConceptBox>

          <ConceptBox label="Mot clé 5" titre="Le livrable — « Qu'est-ce qu'on produit ? »">
            <p>C'est ce que le projet produit concrètement, le résultat tangible auquel on reconnaît qu'une étape, ou le projet entier, est « fait ». Le livrable est important parce qu'il rend l'avancement vérifiable : tant qu'on ne sait pas ce qu'on doit produire, on ne peut pas savoir si on l'a produit.</p>
          </ConceptBox>

          <ConceptBox label="Mot clé 6" titre="L'échéance — « Pour quand ? »">
            <p>C'est la date limite, le moment où quelque chose doit être terminé. L'échéance donne le tempo : sans elle, un projet a tendance à s'étirer indéfiniment, faute d'un horizon qui mette sous tension. Une échéance réaliste n'est pas une pression abusive ; c'est ce qui donne au projet sa réalité dans le temps.</p>
          </ConceptBox>

          <HighlightBox label="La clé pour retenir les six mots" couleur="bleu">
            <Texte>Plutôt que d'apprendre six définitions, retenez six questions.</Texte>
            <Liste items={[
              "Objectif → pour aller où ?",
              "Étape → par où passe-t-on ?",
              "Jalon → quels rendez-vous clés ?",
              "Rôle → qui fait quoi ?",
              "Livrable → qu'est-ce qu'on produit ?",
              "Échéance → pour quand ?",
            ]} />
            <Texte>Poser ces six questions sur n'importe quel projet, c'est déjà l'avoir compris dans ses grandes lignes.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les six mots fonctionnent ensemble">
          <Texte>Ces six mots ne sont pas une liste à mémoriser séparément : ils s'articulent, et c'est leur articulation qui décrit un projet. <strong>L'objectif</strong> donne la direction ; <strong>les étapes</strong> tracent le chemin pour y parvenir ; <strong>les jalons</strong> ponctuent ce chemin de points de vérification ; <strong>les rôles</strong> disent qui avance sur quel segment ; <strong>les livrables</strong> matérialisent ce qui est produit à chaque pas ; <strong>l'échéance</strong> fixe l'horizon temporel de l'ensemble.</Texte>
          <Texte>On voit alors que ces mots se répondent. Un objectif sans étapes reste un vœu ; des étapes sans échéance s'étirent sans fin ; des rôles sans livrables ne permettent pas de vérifier que le travail a porté ses fruits. C'est pourquoi, dès qu'on regarde un projet à travers ces six mots, on repère vite ce qui lui manque : <strong>le vocabulaire n'est donc pas seulement un moyen de se comprendre : c'est aussi une grille de lecture qui révèle la solidité d'un projet.</strong></Texte>

          <HighlightBox label="Vous savez désormais lire un projet" couleur="bleu">
            <Texte>Avec ces six mots, vous pouvez suivre une réunion de projet, comprendre un plan d'action, et surtout poser les questions qui comptent : « Quel est l'objectif ? », « Quelle est la prochaine étape ? », « Qui porte ce rôle ? », « Quel est le livrable attendu ? », « Pour quelle échéance ? ». Poser ces questions, ce n'est pas étaler un savoir : c'est exactement ce qu'on attend d'un participant utile à un projet. Et vous pouvez le faire dès aujourd'hui.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Le chemin parcouru, et la suite">
          <Texte>Vous arrivez au terme du niveau base. Il vaut la peine de mesurer ce qui est désormais acquis, car c'est un socle réel.</Texte>
          <Texte>Vous savez reconnaître un projet et le distinguer d'une tâche ou d'une routine — vous ne confondez plus l'activité et l'avancement. Vous connaissez les quatre phases du cycle de vie et vous savez qu'aucune n'est facultative. Vous voyez la démarche projet à l'œuvre au cœur de votre métier, dans l'accompagnement des personnes, et vous mesurez ce que change le fait de « faire avec » plutôt que « pour ». Vous comprenez pourquoi tous les métiers comptent et ce qu'est le regard partagé. Et vous disposez maintenant d'un vocabulaire commun pour participer pleinement à une démarche projet.</Texte>
          <Texte>Ce socle a une qualité particulière : il est <strong>commun.</strong> Si vos collègues, quels que soient leurs métiers, ont suivi ce même niveau, alors vous partagez désormais une même façon de penser et de nommer les projets. C'est exactement ce que vise la culture commune : non pas que chacun devienne expert, mais que tous parlent le même langage et partagent les mêmes repères de base. C'est sur ce socle partagé que tout le reste peut se construire.</Texte>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Les mots ne sont pas secondaires : ils sont le matériau de la coordination. Un même mot compris différemment crée des malentendus coûteux.",
              "Un langage commun minimal garantit que chacun comprend la même chose, et abaisse la barrière d'entrée dans la démarche projet : c'est un outil d'inclusion.",
              "Six mots clés, retenus par six questions : objectif (pour aller où), étape (par où passe-t-on), jalon (quels rendez-vous clés), rôle (qui fait quoi), livrable (qu'est-ce qu'on produit), échéance (pour quand).",
              "Ces six mots s'articulent et se répondent ; ensemble, ils forment aussi une grille de lecture qui révèle la solidité d'un projet.",
              "Le niveau base est complété : vous disposez d'un socle commun — compréhension, repères et vocabulaire — sur lequel le niveau intermédiaire construira le passage à l'action.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Lequel de ces mots désigne « le résultat tangible que le projet produit, ce à quoi on reconnaît qu'une étape est faite » ?",
              reponses: [
                "Le jalon",
                "Le livrable",
                "L'échéance",
                "Le rôle",
              ],
              bonneReponse: 1,
              explication: "Le livrable est ce que le projet produit concrètement. Il rend l'avancement vérifiable : tant qu'on ne sait pas ce qu'on doit produire, on ne peut pas savoir si on l'a produit. Le jalon est un rendez-vous, l'échéance est une date limite, le rôle est la fonction de chacun.",
            },
            {
              question: "À quelle question correspond la notion de « jalon » ?",
              reponses: [
                "Pour aller où ? (c'est l'objectif)",
                "Qui fait quoi ? (c'est le rôle)",
                "Quels sont les rendez-vous clés du projet ?",
                "Qu'est-ce qu'on produit ? (c'est le livrable)",
              ],
              bonneReponse: 2,
              explication: "Le jalon est un point de repère marquant : un moment de vérification ou une échéance importante. Là où l'étape est un segment du chemin, le jalon est un point précis — le rendez-vous du projet.",
            },
            {
              question: "Pourquoi dit-on que les six mots forment aussi une « grille de lecture » de la solidité d'un projet ?",
              reponses: [
                "Parce qu'ils permettent de noter les collègues",
                "Parce qu'en les passant en revue, on repère ce qui manque à un projet — livrable non nommé, échéance absente, rôles flous — autant de signes de difficultés à venir",
                "Parce qu'ils remplacent le travail de préparation",
                "Parce qu'ils ne servent qu'aux grands projets",
              ],
              bonneReponse: 1,
              explication: "Un projet dont personne ne sait nommer le livrable, ou dont aucune échéance n'est fixée, ou dont les rôles restent flous, porte déjà en lui la trace de ses futures difficultés. Le vocabulaire révèle ainsi la solidité d'un projet.",
            },
            {
              question: "Pour participer utilement à un projet, il faut maîtriser un vocabulaire technique complexe. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Quelques mots clés simples, compris de tous, suffisent. Le but d'un langage commun est de se comprendre et d'inclure chacun, pas de faire du jargon. Six mots suffisent à se sentir chez soi dans une démarche projet.",
            },
          ]}
        />

      </div>
    </div>
  )
}
