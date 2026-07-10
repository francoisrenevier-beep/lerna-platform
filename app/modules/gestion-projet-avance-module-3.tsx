import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module3GestionProjetAvance({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Gestion de projet — Niveau Avancé"
        titre="Le modèle d'impact :"
        titrePart2="raisonner en effets sur les personnes"
        sousTitre="Comment savoir si ce que fait une institution sociale produit réellement un effet sur la vie des personnes ? La question est légitime, mais elle est piégée : mal posée, elle conduit à mesurer ce qui se compte au détriment de ce qui compte."
        duree="≈ 25-30 minutes"
        niveau="Avancé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Construire une logique d'impact sans tomber dans la performance déshumanisante">
          <Texte>Une institution sociale ou médico-sociale mobilise des moyens considérables — du temps, des compétences, de l'argent public — au service des personnes qu'elle accompagne. Il est légitime, et même sain, de se demander : <strong>tout cela produit-il réellement les effets espérés sur la vie de ces personnes ?</strong> Cette question n'est pas une intrusion gestionnaire dans le travail social : c'est une exigence de responsabilité envers les personnes elles-mêmes, qui méritent un accompagnement qui change vraiment quelque chose pour elles, et envers la collectivité qui finance.</Texte>
          <Texte>Mais cette question légitime est piégée : <strong>dès qu'on cherche à mesurer l'effet d'un accompagnement, on est tenté de ne retenir que ce qui se mesure facilement</strong> — des chiffres, des taux, des indicateurs — au risque de passer à côté de l'essentiel, qui dans nos métiers est souvent qualitatif, relationnel, intime. Le mieux-être d'une personne, la qualité d'un lien, le sentiment retrouvé d'avoir une place, la dignité préservée : rien de tout cela ne se laisse réduire à un nombre sans perdre justement ce qui en fait le prix.</Texte>

          <PullQuote>
            La vraie question n'est pas « comment mesurer ce que nous faisons », mais « comment savoir si nous faisons du bien aux personnes ». La première mène aux indicateurs ; la seconde nous garde reliés à l'essentiel.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La théorie du changement : une chaîne logique">
          <Texte>L'outil que nous allons présenter s'appelle la <strong>théorie du changement</strong>, ou modèle d'impact. C'est une manière de rendre explicite le raisonnement qui relie ce qu'une institution fait à ce qu'elle vise pour les personnes.</Texte>

          <ConceptBox label="Concept clé" titre="La théorie du changement est une chaîne logique en quatre maillons.">
            <p><strong>Ressources</strong> — ce qu'on mobilise : personnel, temps, compétences, budget, locaux.</p>
            <p><strong>Activités</strong> — ce qu'on fait concrètement avec ces ressources : les actions d'accompagnement.</p>
            <p><strong>Effets</strong> — ce que ces activités produisent pour les personnes : les changements dans leur situation, leur vécu, leurs capacités.</p>
            <p><strong>Impact</strong> — le changement profond et durable visé à terme : la transformation de fond dans la vie des personnes.</p>
          </ConceptBox>

          <Texte>L'intérêt de cette chaîne n'est pas de produire des chiffres, mais de <strong>rendre explicite un raisonnement</strong> qui reste, le plus souvent, implicite. Une institution agit toujours en supposant que ses activités produisent des effets — sinon elle ne les mènerait pas. Mais ce lien supposé est rarement formulé. La théorie du changement oblige à le dire : nous faisons telle activité parce que nous pensons qu'elle produit tel effet, qui contribue à tel impact. Formuler cette chaîne, c'est se donner les moyens d'interroger chacun de ses maillons.</Texte>

          <Texte>Le maillon le plus important, et le plus souvent escamoté, est le passage des <strong>activités aux effets</strong>. Il est facile de décrire ce qu'on fait (les activités) ; il est facile aussi d'invoquer de grandes finalités (l'impact). Ce qui est exigeant, c'est d'articuler honnêtement les deux : en quoi, précisément, cette activité contribue-t-elle à ce changement pour la personne ?</Texte>

          <HighlightBox label="Distinguer l'activité de l'effet : une discipline salutaire" couleur="bleu">
            <Texte>Une confusion fréquente consiste à prendre l'activité pour l'effet : « nous avons organisé dix ateliers » décrit une activité, pas un effet. L'effet serait : « les personnes qui ont participé ont retrouvé un sentiment d'utilité ». Compter les activités est facile et rassurant, mais ne dit rien des effets réels. La théorie du changement force à dépasser le décompte des activités pour regarder ce qui change vraiment pour les personnes.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Adapter la chaîne au social : la primauté du qualitatif">
          <Texte>La théorie du changement, telle qu'on vient de la présenter, est un outil général. L'adapter au secteur social et médico-social demande une transformation profonde, qui touche à la nature même de ce qu'on appelle « effet » et « impact ».</Texte>

          <Texte>Dans beaucoup de domaines, les effets se mesurent en quantités : unités produites, délais réduits, coûts diminués. Dans l'accompagnement, <strong>les effets les plus importants sont qualitatifs et touchent à l'expérience vécue des personnes</strong> : se sentir respecté, retrouver une forme d'autonomie, renouer un lien, vivre avec un peu plus de sérénité, avoir le sentiment d'une place dans un collectif. Ces effets sont réels — ils sont même la raison d'être de l'accompagnement — mais ils ne se laissent pas enfermer dans des chiffres sans se dénaturer.</Texte>

          <ConceptBox label="Concept clé" titre="Dans le social, raisonner en effets ne veut pas dire raisonner en chiffres.">
            <p>L'effet d'un accompagnement se constate souvent dans des signes qualitatifs : une personne qui ose à nouveau prendre la parole, qui renoue avec un proche, qui retrouve une activité qui a du sens pour elle, qui exprime se sentir mieux. Documenter ces effets demande de l'observation fine, de l'écoute, le recueil de la parole des personnes — non des tableaux de bord chiffrés. La théorie du changement, adaptée au social, est d'abord un outil de discernement qualitatif, pas de mesure quantitative.</p>
          </ConceptBox>

          <Texte>Cette adaptation a une conséquence méthodologique forte : <strong>les indicateurs quantitatifs gardent une place, mais une place seconde et encadrée</strong>. On peut compter certaines choses — c'est parfois utile, notamment pour rendre compte aux financeurs — mais à deux conditions strictes. D'abord, que les chiffres ne soient jamais pris pour la réalité qu'ils approchent. Ensuite, que le quantitatif reste subordonné au qualitatif. Une institution qui inverse cet ordre — qui se met à poursuivre les chiffres plutôt que les effets réels — a basculé dans la dérive que ce module veut précisément éviter.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à une activité régulière de votre institution. Pouvez-vous formuler honnêtement la chaîne : quelles ressources, quelle activité, et surtout quel effet réel attendu pour les personnes — au-delà du simple fait que l'activité a lieu ? Si l'effet est difficile à nommer autrement que par « l'activité a été réalisée », c'est peut-être le signe qu'il faut réinterroger ce qu'on en attend vraiment.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="La tension éthique : mesurer sans réduire">
          <Texte>Nous arrivons au cœur éthique de ce module, le point qui justifie qu'il soit le module différenciant du parcours. Raisonner en termes d'impact fait courir un risque éthique précis : <strong>le risque que la mesure réduise ce qu'elle prétend saisir</strong>, et qu'à force de vouloir évaluer l'accompagnement, on finisse par l'appauvrir.</Texte>

          <Texte>Ce risque tient à un mécanisme bien connu : <strong>ce qu'on mesure tend à devenir ce qu'on poursuit</strong>. Dès qu'une institution fixe un indicateur, les énergies se tournent vers cet indicateur — parfois au détriment de ce qu'il était censé représenter. Si l'on mesure le nombre d'activités, on multiplie les activités, sans garantie qu'elles fassent du bien. La mesure n'est jamais neutre : elle façonne ce qu'elle observe. C'est pourquoi mal mesurer un accompagnement peut activement le dégrader.</Texte>

          <ConceptBox label="Concept clé" titre="La tension éthique du modèle d'impact : mesurer sans réduire.">
            <p>D'un côté, le devoir de responsabilité invite à s'assurer que l'accompagnement produit de réels effets pour les personnes. De l'autre, toute mesure risque de réduire l'accompagnement à ce qu'elle sait saisir, et d'évincer ce qui fait son cœur — la relation, la singularité de chaque personne, ce qui ne se compte pas. Tenir cette tension, c'est utiliser le raisonnement d'impact pour rester honnête sur les effets, tout en refusant que la grille de mesure devienne la mesure de toute chose. Le discernement, ici, ne peut jamais être délégué à un outil.</p>
          </ConceptBox>

          <Texte>Comment tenir cette tension en pratique ? Par quelques principes de prudence. <strong>Garder le qualitatif premier</strong> : la parole des personnes, l'observation fine, le jugement professionnel priment toujours sur les chiffres. <strong>Refuser le réductionnisme</strong> : accepter que l'essentiel de ce qui compte ne soit pas mesurable, et ne pas le négliger pour autant — au contraire, lui accorder le plus d'attention. <strong>Se méfier des effets pervers</strong> : surveiller que la recherche d'un effet mesuré ne dégrade pas la qualité réelle de l'accompagnement. <strong>Maintenir la finalité</strong> : ne jamais perdre de vue que le but est le bien des personnes, pas la satisfaction d'un tableau de bord.</Texte>

          <PullQuote>
            Mesurer un accompagnement n'est jamais un geste neutre : ce qu'on choisit de mesurer, on le fait grandir. D'où la responsabilité de ne mesurer qu'au service des personnes, et de tenir farouchement à ce qui compte sans se compter.
          </PullQuote>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "La question de l'impact est légitime — savoir si l'accompagnement produit de réels effets pour les personnes — mais piégée : elle pousse à ne retenir que ce qui se mesure, au risque de la dérive vers une performance déshumanisante.",
              "La théorie du changement relie en une chaîne logique : ressources → activités → effets → impact. Son intérêt est de rendre explicite un raisonnement implicite, surtout au maillon décisif activités → effets.",
              "Il faut distinguer l'activité de l'effet : « nous avons fait dix ateliers » est une activité, pas un effet. Compter les activités ne dit rien de ce qui change pour les personnes.",
              "Adaptée au social, la chaîne raisonne en effets qualitatifs (se sentir respecté, retrouver de l'autonomie, renouer un lien), pas en chiffres. Le quantitatif garde une place seconde et encadrée.",
              "La tension éthique centrale est de mesurer sans réduire : ce qu'on mesure tend à devenir ce qu'on poursuit. C'est une question éthique, pas une question technique.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Quels sont les quatre maillons de la théorie du changement (modèle d'impact) ?",
              reponses: [
                "Budget, dépenses, recettes, bénéfice",
                "Ressources → activités → effets → impact",
                "Objectifs → tâches → délais → livrables",
                "Besoin → solution → exécution → clôture",
              ],
              bonneReponse: 1,
              explication: "La chaîne du modèle d'impact relie : les Ressources (ce qu'on mobilise), aux Activités (ce qu'on fait concrètement), aux Effets (ce que cela produit pour les personnes), à l'Impact (le changement profond et durable visé). C'est une chaîne logique qui rend explicite un raisonnement trop souvent implicite.",
            },
            {
              question: "Pourquoi faut-il distinguer l'activité de l'effet ?",
              reponses: [
                "Parce que ce sont des synonymes dans le secteur social",
                "Parce que décrire une activité (« nous avons fait dix ateliers ») ne dit rien de l'effet réel pour les personnes (« elles ont retrouvé un sentiment d'utilité ») ; compter les activités est rassurant mais trompeur",
                "Parce que les activités n'ont pas d'importance pour les financeurs",
                "Parce que l'effet se mesure toujours en chiffres alors que l'activité est qualitative",
              ],
              bonneReponse: 1,
              explication: "La distinction activité/effet est au cœur du raisonnement d'impact. Compter les activités est facile et rassurant, mais ne dit rien de ce qui change pour les personnes. La théorie du changement force à dépasser ce décompte pour regarder les effets réels.",
            },
            {
              question: "Comment la théorie du changement doit-elle être adaptée au secteur social ?",
              reponses: [
                "En ne retenant que des indicateurs chiffrés, les plus nombreux possible",
                "En raisonnant en effets qualitatifs sur l'expérience vécue des personnes, le quantitatif gardant une place seconde et encadrée",
                "En supprimant entièrement la notion d'effet pour se concentrer sur les activités",
                "En la copiant telle quelle du monde de l'entreprise et de la gestion de projet industrielle",
              ],
              bonneReponse: 1,
              explication: "Dans l'accompagnement, les effets les plus importants sont qualitatifs : se sentir respecté, retrouver de l'autonomie, renouer un lien. Ces effets ne se laissent pas enfermer dans des chiffres sans se dénaturer. Le quantitatif garde une place, mais seconde et encadrée.",
            },
            {
              question: "En quoi consiste la tension éthique centrale du modèle d'impact ?",
              reponses: [
                "Il n'y a aucune tension éthique dans le fait de mesurer",
                "Mesurer sans réduire : ce qu'on mesure tend à devenir ce qu'on poursuit, donc toute mesure risque de réduire l'accompagnement à ce qu'elle sait saisir et d'évincer son cœur relationnel",
                "Choisir entre mesurer beaucoup ou pas du tout selon les exigences des financeurs",
                "Décider quel logiciel d'indicateurs acheter pour satisfaire les tutelles",
              ],
              bonneReponse: 1,
              explication: "La tension éthique est de mesurer sans réduire. Ce qu'on mesure tend à devenir ce qu'on poursuit — donc une mauvaise mesure peut activement dégrader l'accompagnement. Tenir cette tension demande de garder le qualitatif premier et de ne jamais perdre de vue le bien des personnes. C'est une question éthique, pas technique.",
            },
            {
              question: "Vrai ou faux : « Si une activité est difficile à mesurer en chiffres, c'est qu'elle a peu de valeur et qu'on peut la négliger. »",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Faux. Dans l'accompagnement, l'essentiel de ce qui compte — la relation, la dignité, le mieux-être — n'est précisément pas mesurable en chiffres. Refuser le réductionnisme, c'est accorder le plus d'attention à ce qui ne se compte pas, au lieu de le négliger sous prétexte qu'il échappe à la grille.",
            },
          ]}
        />

      </div>
    </div>
  )
}
