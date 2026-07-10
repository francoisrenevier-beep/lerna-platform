import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module1GestionProjetAvance({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Gestion de projet — Niveau Avancé"
        titre="Du projet d'équipe"
        titrePart2="au projet d'établissement"
        sousTitre="Conduire un projet d'équipe et piloter une transformation d'établissement ne sont pas la même activité à deux tailles différentes : ce sont deux métiers, qui demandent des postures distinctes."
        duree="≈ 25-30 minutes"
        niveau="Avancé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Changer d'échelle, de complexité et d'horizon">
          <Texte>Aux niveaux précédents, vous avez appris à reconnaître, comprendre et conduire des projets. Le niveau avancé suppose un déplacement : vous n'êtes plus seulement celui qui mène un projet, mais celui qui <strong>pilote des projets structurants</strong>, ceux qui engagent l'institution dans la durée et transforment ses manières de faire. Ce déplacement n'est pas qu'une affaire d'ampleur. Il change la nature même de l'activité.</Texte>
          <Texte>Un projet d'équipe a des contours relativement nets : un besoin identifiable, un périmètre maîtrisable, une équipe restreinte, un horizon de quelques semaines ou quelques mois. Un projet d'établissement — réorganiser un service, faire évoluer un mode d'accompagnement, transformer une culture de travail — obéit à une autre logique. Ses contours sont flous, ses effets se diffusent dans tout le système, son horizon se compte en années, et personne ne peut en tenir seul tous les fils. <strong>On ne le conduit pas, on le pilote</strong> : on lui donne une direction et un cap, sans maîtriser chacun de ses mouvements.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Un changement de nature, pas seulement de taille">
          <ConceptBox label="Concept clé" titre="Piloter n'est pas conduire à plus grande échelle.">
            <p>Conduire un projet, c'est maîtriser un déroulé qu'on peut embrasser. Piloter une transformation, c'est orienter un système qu'on ne maîtrise pas entièrement : on fixe une direction, on crée des conditions, on ajuste en continu, mais on accepte de ne pas tout contrôler. Le pilote agit moins par l'exécution directe que par les conditions qu'il met en place pour que le changement advienne.</p>
          </ConceptBox>

          <Texte>Cette distinction a des conséquences très concrètes sur la posture. Celui qui croit pouvoir piloter une transformation comme il conduisait un projet d'équipe — en tenant tous les fils, en contrôlant chaque détail — s'épuise et échoue, parce que le système lui échappe par nature. Celui qui comprend qu'il pilote adopte une autre posture : il accepte une part d'incertitude, il travaille sur les conditions plus que sur les actions, il fait confiance à d'autres pour porter des pans du changement qu'il ne peut tenir lui-même. <strong>Le passage à l'échelle institutionnelle est d'abord un passage de posture.</strong></Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les spécificités des projets structurants">
          <Texte>Qu'est-ce qui distingue concrètement un projet de transformation d'un projet ordinaire ? Quatre caractéristiques, qu'il faut comprendre pour les piloter sans s'y briser.</Texte>

          <Texte>La première est la <strong>diffusion systémique des effets</strong>. Dans un projet d'équipe, on peut délimiter un périmètre clair. Dans une transformation, toute modification se propage : changer l'organisation d'un service modifie les rythmes, qui modifient les relations, qui modifient l'ambiance, qui modifient l'accompagnement. Les effets débordent toujours le périmètre prévu, dans des directions qu'on n'avait pas anticipées. Le pilote doit penser en termes de système, et non de chaîne linéaire de causes et d'effets.</Texte>

          <Texte>La deuxième est la <strong>temporalité longue</strong>. Un projet structurant ne produit ses effets qu'à l'échelle d'années, ce qui crée une difficulté propre : il faut tenir un cap dans la durée, alors que l'élan initial retombe, que les équipes changent, que le contexte évolue. Tenir ensemble le temps long du changement et le temps court du quotidien est l'un des défis centraux du pilotage.</Texte>

          <Texte>La troisième est l'<strong>implication humaine profonde</strong>. Un projet d'équipe demande de la coopération ; une transformation touche aux habitudes, aux repères, parfois à l'identité professionnelle des personnes. Elle ne se décrète pas : elle suppose que des personnes acceptent de changer leur manière de travailler, ce qui est exigeant et jamais acquis d'avance.</Texte>

          <Texte>La quatrième est l'<strong>irréductible incertitude</strong>. Une transformation comporte une part d'inconnu : on ne sait pas entièrement, au départ, où elle mènera, ni quels obstacles surgiront. Le pilote avance avec une vision claire de la direction, mais sans carte complète du chemin. Cette incertitude n'est pas un défaut de préparation : elle est inhérente à la nature des transformations, et savoir l'habiter sans s'y dissoudre fait partie du métier.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à une transformation que votre institution a traversée (ou tente de traverser). Reconnaissez-vous ces quatre caractéristiques — diffusion des effets au-delà du prévu, temps long difficile à tenir, implication profonde des personnes, part d'incertitude ? Et la difficulté rencontrée venait-elle souvent d'avoir piloté cette transformation comme un projet ordinaire, en sous-estimant l'une de ces dimensions ?</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Le projet d'établissement comme cadre de référence">
          <Texte>Dans le secteur, les transformations ne flottent pas dans le vide : elles s'inscrivent — ou devraient s'inscrire — dans un cadre qui leur donne sens et cohérence, le <strong>projet d'établissement</strong>. Comprendre son rôle est essentiel pour qui pilote, car c'est lui qui distingue une transformation cohérente d'une succession de changements dispersés.</Texte>

          <ConceptBox label="Concept clé" titre="Le projet d'établissement est la boussole des projets de transformation.">
            <p>Il exprime les valeurs, les missions et les orientations d'une institution. Il dit ce que l'institution est, ce qu'elle vise, et la manière dont elle entend accompagner. Un projet structurant pertinent est celui qui sert les orientations du projet d'établissement, et non celui qui les contredit ou s'en écarte au gré des opportunités.</p>
          </ConceptBox>

          <Texte>Le projet d'établissement joue un double rôle pour le pilote. Il est d'abord une <strong>source de légitimité</strong> : un projet de transformation qui s'appuie explicitement sur les orientations institutionnelles est plus solide, plus facile à défendre et à faire partager. S'ancrer dans le projet d'établissement, c'est rattacher le changement à quelque chose de plus grand et de partagé que soi.</Texte>

          <Texte>Il est ensuite un <strong>critère de cohérence</strong>. Une institution mène toujours plusieurs projets à la fois, et le risque permanent est qu'ils tirent dans des directions divergentes, voire contradictoires. Le projet d'établissement permet d'arbitrer : un projet qui sert les orientations mérite d'être soutenu ; un projet qui s'en éloigne doit être réinterrogé. Sans cette boussole, l'institution s'épuise en transformations qui se neutralisent.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Articuler les échelles : du quotidien aux orientations">
          <Texte>Le pilote de transformation occupe une position particulière : il fait le lien entre des échelles qui, sans lui, ne se parleraient pas. En haut, les orientations institutionnelles, abstraites et de long terme. En bas, le quotidien des équipes et des personnes accompagnées, concret et immédiat. <strong>Le travail du pilote est précisément d'articuler ces deux mondes</strong> — de traduire les orientations en changements concrets, et de faire remonter ce que le terrain enseigne sur la pertinence de ces orientations.</Texte>

          <Texte>Cette articulation se joue dans les deux sens. Dans le sens descendant, il s'agit de <strong>traduire</strong> : une orientation institutionnelle (« développer le pouvoir d'agir des personnes accompagnées ») ne devient réelle que déclinée en changements concrets dans les pratiques quotidiennes. Dans le sens ascendant, il s'agit d'<strong>écouter le terrain</strong> : ce que les équipes vivent, ce qui résiste, ce qui fonctionne, informe en retour la pertinence des orientations. Un pilote qui n'écoute que le haut applique mécaniquement des directives déconnectées ; un pilote qui n'écoute que le bas perd le cap. Tenir les deux est l'essence du métier.</Texte>

          <PullQuote>
            Le pilote est un passeur entre les échelles. Sa valeur ne tient pas à sa capacité à exécuter, mais à sa capacité à relier : traduire les orientations en changements vivants, et faire remonter ce que le terrain enseigne. Piloter, c'est tenir le fil entre le sens et le réel.
          </PullQuote>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Passer du projet d'équipe au projet d'établissement n'est pas un changement de taille mais de nature : on pilote un système qu'on ne contrôle pas entièrement.",
              "Piloter, c'est orienter par les conditions plus que par l'exécution directe, et accepter une part d'incertitude inhérente aux transformations.",
              "Les projets structurants ont quatre spécificités : diffusion systémique des effets, temporalité longue, implication humaine profonde, irréductible incertitude. Les sous-estimer, c'est piloter une transformation comme un projet ordinaire — et échouer.",
              "Le projet d'établissement est la boussole : source de légitimité et critère de cohérence pour arbitrer entre des projets qui pourraient diverger.",
              "Le pilote est un passeur entre les échelles : il traduit les orientations en changements concrets et fait remonter ce que le terrain enseigne.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "En quoi piloter une transformation diffère-t-il de conduire un projet d'équipe ?",
              reponses: [
                "C'est exactement la même chose à plus grande échelle",
                "On oriente un système qu'on ne maîtrise pas entièrement, par les conditions plus que par l'exécution directe, en acceptant une part d'incertitude",
                "C'est plus simple, car on délègue tout",
                "Cela ne demande aucune posture particulière",
              ],
              bonneReponse: 1,
              explication: "Piloter n'est pas conduire à plus grande échelle : c'est un changement de nature. On oriente un système qu'on ne peut pas entièrement maîtriser — on fixe la direction, on crée des conditions, on ajuste en continu, mais on accepte de ne pas tout contrôler.",
            },
            {
              question: "Quelles sont les quatre spécificités d'un projet structurant ?",
              reponses: [
                "Un périmètre étroit, des effets limités, un horizon court, aucune implication des personnes",
                "Diffusion systémique des effets, temporalité longue, implication humaine profonde, irréductible incertitude",
                "Un horizon de quelques jours, des ressources abondantes, une équipe stable, une direction claire",
                "Des indicateurs précis, un budget fixe, un calendrier rigide, une évaluation finale",
              ],
              bonneReponse: 1,
              explication: "Les quatre spécificités sont : diffusion systémique des effets (les effets débordent le périmètre prévu), temporalité longue (à l'échelle d'années), implication humaine profonde (identité professionnelle touchée) et irréductible incertitude (inhérente à la nature des transformations).",
            },
            {
              question: "Quel rôle joue le projet d'établissement pour le pilote de transformation ?",
              reponses: [
                "Aucun, c'est un document purement administratif",
                "Il est la boussole : source de légitimité et critère de cohérence pour arbitrer entre projets divergents",
                "Il remplace la conduite du changement",
                "Il fige l'institution dans ses pratiques passées",
              ],
              bonneReponse: 1,
              explication: "Le projet d'établissement joue un double rôle : source de légitimité (ancrer le changement dans des orientations partagées, ce qui le rend plus solide) et critère de cohérence (permettre d'arbitrer entre plusieurs projets qui pourraient tirer en directions divergentes).",
            },
            {
              question: "Vrai ou faux : « Le pilote efficace est celui qui tient seul tous les fils de la transformation et contrôle chaque détail. »",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Faux. Une transformation est un système qu'on ne maîtrise pas entièrement. Vouloir tout tenir épuise et échoue. Le pilote oriente par les conditions, accepte une part d'incertitude, et fait confiance à d'autres pour porter des pans du changement. C'est un passeur entre les échelles, pas un exécutant omniscient.",
            },
          ]}
        />

      </div>
    </div>
  )
}
