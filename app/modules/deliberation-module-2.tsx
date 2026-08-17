import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module2Deliberation({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Éthique professionnelle"
        titre="L'Éthique des Vertus"
        titrePart2="La sagesse pratique au cœur du professionnel"
        sousTitre="Comment le caractère professionnel et la sagesse pratique transforment la qualité de l'action éthique, et pourquoi les vertus se travaillent comme des muscles."
        duree="40 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Ce que ce module explore">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre l'apport d'Aristote pour les professions sociales",
              "Saisir le concept de phronesis et son développement",
              "Identifier les vertus professionnelles essentielles",
              "Reconnaître les pièges du caractère professionnel dans sa propre pratique"
            ]} />
          </ConceptBox>
          <Texte>Nous avons tous croisé un professionnel qui savait exactement quoi faire dans une situation difficile, pas parce qu'il avait consulté un protocole, mais parce qu'il avait une façon d'être qui guidait son action. Il posait la bonne question au bon moment. Il savait quand parler et quand se taire. Il sentait quand une règle devait être respectée à la lettre et quand elle demandait à être interprétée avec discernement. Cette qualité-là, Aristote l'appelle la phronesis : la sagesse pratique. Et elle est au cœur de ce module.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Aristote revisité : Le caractère comme outil professionnel">
          <Texte>Aristote pose une question radicale : peut-on être un bon professionnel sans être une bonne personne ? Pour lui, l'excellence professionnelle et l'excellence morale sont profondément liées. Ce n'est pas parce qu'on connaît les règles qu'on agit bien, c'est parce qu'on est un certain type de personne qu'on agit bien.</Texte>
          <Texte>Le grand déplacement opéré par Aristote est de passer de la question « Comment faire pour bien faire ? » à une interrogation plus profonde : « Quelle sorte de personne dois-je devenir ? » La première cherche une méthode. La seconde cherche une identité professionnelle. Dans les professions du social, cette distinction est fondamentale, parce que vous travaillez avec des personnes, pas avec des dossiers, et que votre façon d'être influence directement la qualité de la relation d'aide.</Texte>
          <Texte>Aristote décrit les vertus comme des dispositions stables du caractère, des habitudes bien ancrées qui orientent l'action vers le bien. Et ici vient une idée essentielle pour votre pratique : les vertus se développent comme des muscles. On ne naît pas courageux, juste ou tempérant. On le devient, à travers des actes répétés, des situations traversées, des expériences réflexivement travaillées. L'éducateur qui, après chaque situation difficile, prend le temps de se demander « ai-je bien agi ? qu'aurais-je pu faire différemment ? » est en train de développer ses vertus professionnelles.</Texte>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Pensez à un collègue dont vous admirez la façon de travailler, non pas parce qu'il connaît mieux les règles, mais parce qu'il a une qualité de présence et de jugement que vous trouvez exemplaire. Qu'est-ce qui caractérise sa façon d'être ? Comment est-ce qu'il réagit dans les situations difficiles ? C'est peut-être là la meilleure description que vous puissiez faire de la phronesis en action.</Texte>
          </HighlightBox>
          <PullQuote>
            Il ne suffit pas d'enseigner des protocoles. Il faut former le caractère.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La phronesis : La sagesse qui ne s'apprend pas dans les livres">
          <Texte>La phronesis, sagesse pratique, est la capacité à bien juger dans des situations particulières, en tenant compte de tous les paramètres du contexte. C'est ce qui distingue le professionnel expérimenté du débutant : non pas plus de connaissances théoriques, mais une plus grande capacité à lire la situation avec finesse et à y répondre avec justesse.</Texte>
          <Texte>Concrètement, la phronesis se manifeste dans des micro-décisions que vous prenez des dizaines de fois par jour : vous décidez de laisser passer une remarque d'un résident irritable parce que vous avez perçu qu'il est fatigué ce soir, plutôt que de vous braquer. Vous choisissez le bon moment pour aborder une question difficile avec une famille. Vous sentez quand un collègue a besoin d'être soutenu plutôt que challengé. Aucun protocole ne peut codifier ces jugements, ils viennent d'une connaissance fine de la situation et des personnes.</Texte>
          <Texte>La phronesis ne s'enseigne pas directement. Elle se développe par l'expérience vécue, la réflexion sur les pratiques passées, et, cruciale dans la théorie aristotélicienne, l'observation de personnes qui en font preuve. En côtoyant un professionnel dont le jugement est reconnu comme juste, le novice intègre progressivement une façon d'être et de penser qui dépasse la simple application de règles. C'est pour cette raison que la transmission de la culture professionnelle dans une équipe est un enjeu éthique majeur.</Texte>
          <HighlightBox label="Les espaces de développement de la phronesis" couleur="vert">
            <Texte>Les pratiques de supervision, les colloques de cas et les formations continues ne sont pas seulement des espaces de transmission de connaissances. Ce sont des espaces de développement de la phronesis, des lieux où le jugement professionnel se forme et se raffine par la confrontation avec d'autres regards. Quand une équipe analyse ensemble un cas difficile, pas pour savoir qui avait raison, mais pour comprendre ce qui s'est passé et ce qu'on ferait mieux la prochaine fois, elle est en train de travailler collectivement ses vertus professionnelles.</Texte>
          </HighlightBox>
          <Texte>Aristote introduit aussi le concept de « juste milieu », la vertu se situe entre deux excès. Le courage est entre la lâcheté et la témérité. La générosité est entre l'avarice et la prodigalité. Dans les professions sociales, ce juste milieu est particulièrement délicat. La bienveillance peut glisser vers le paternalisme ou vers l'indifférence. La fermeté peut glisser vers l'autoritarisme ou vers la pusillanimité. Trouver le juste milieu dans chaque situation concrète, c'est l'exercice quotidien de la phronesis.</Texte>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Quel est votre excès professionnel le plus fréquent ? Avez-vous tendance à trop protéger les personnes que vous accompagnez, au risque d'empiéter sur leur autonomie ? Ou au contraire, à respecter si scrupuleusement leur liberté que vous n'intervenez pas quand ce serait utile ? Le juste milieu ne se trouve pas une fois pour toutes, il se cherche dans chaque situation.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Le cycle de développement professionnel : Travailler ses vertus">
          <Texte>Le développement de la sagesse pratique suit un cycle, une boucle sans fin qui constitue le cœur du perfectionnement professionnel. Ce cycle est particulièrement visible dans les professions d'aide, où les situations répétées permettent d'accumuler une expérience réflexive qui affine progressivement le jugement.</Texte>
          <SchemaEtapes
            titre="Le cycle de développement de la phronesis"
            etapes={[
              { niveau: "Étape 1", nom: "Observer des figures exemplaires", definition: "Identifier des professionnels dont le jugement éthique est reconnu et observer comment ils délibèrent, non pour les imiter, mais pour comprendre ce qui guide leur action. Cela peut être un collègue, un superviseur, ou un professionnel décrit dans un cas clinique." },
              { niveau: "Étape 2", nom: "Exercer sa phronesis en situation", definition: "Affronter les dilemmes réels avec attention et ne pas fuir la complexité. Résister à la tentation de la réponse rapide. Accepter l'inconfort de ne pas savoir immédiatement quelle est la bonne réponse." },
              { niveau: "Étape 3", nom: "Identifier ses limites de jugement", definition: "Après coup, examiner honnêtement ses décisions. Reconnaître ses excès (sur-protection, hyperinvestissement) et ses manques (indifférence, délégation) dans les situations passées." },
              { niveau: "Étape 4", nom: "Intégrer les vertus manquantes", definition: "Travailler consciemment les vertus qui font défaut, par la formation, la supervision, la réflexivité. Le cycle recommence sans fin. La sagesse pratique est un horizon, pas une destination." }
            ]}
          />
          <HighlightBox label="Les pièges professionnels courants" couleur="jaune">
            <Liste items={[
              "Sur-protection, excès de prudence au détriment de l'autonomie : soigner au lieu d'accompagner, décider à la place de, protéger sans consentement",
              "Indifférence administrative, manque de sollicitude, délégation aux procédures : répondre à la demande sans entendre la personne derrière",
              "Délégation excessive, évitement de la responsabilité personnelle derrière les règles et les hiérarchies : « c'est pas ma décision »",
              "Hyperinvestissement émotionnel, perte de la distance critique nécessaire au jugement : confusion entre son propre besoin d'aider et le besoin réel de la personne"
            ]} />
          </HighlightBox>
          <Texte>Ces quatre pièges sont réels dans les équipes. Et ils ne sont pas des défauts de caractère, ce sont des réponses compréhensibles à des situations difficiles et des contextes institutionnels parfois peu porteurs. Un professionnel qui sur-protège fait souvent cela parce qu'il a peur des conséquences d'un accident. Un professionnel qui délègue fait cela parce qu'il se sent seul face à une décision trop lourde. La phronesis ne consiste pas à ne jamais tomber dans ces pièges, elle consiste à les reconnaître et à trouver, dans chaque situation, le chemin qui en sort.</Texte>
          <PullQuote>
            La phronesis, c'est naviguer entre ces écueils avec discernement, et recommencer à chaque situation.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Retour sur Madame De Montmollin : Prisme des vertus">
          <Texte>Revenons à Jean, l'éducateur du module 1. Que demande l'éthique des vertus dans sa situation ?</Texte>
          <HighlightBox label="La question des vertus dans ce cas" couleur="bleu">
            <Texte>Jean doit d'abord se demander : quelle sorte de professionnel est-ce que je veux être dans cette situation ? Pas « que dit le règlement », mais « qui est-ce que je veux être face à Madame De Montmollin » ? Un gardien qui surveille et signale ? Un soignant qui prend soin sans juger ? Un professionnel qui cherche à comprendre ce que signifie pour elle ce rituel du vin, avant de décider quoi faire avec ? La réponse à cette question de caractère orientera toute la suite.</Texte>
          </HighlightBox>
          <Texte>Le prisme des vertus révèle aussi quelque chose d'important sur les deux excès à éviter. Le premier excès est celui du gardien panoptique : signaler immédiatement à la direction, faire appliquer le règlement, équiper la résidente d'un bracelet GPS sans discussion. C'est une forme de sur-protection qui traite la résidente comme un problème à gérer plutôt que comme une personne à comprendre. Le deuxième excès est celui du soignant démissionnaire : fermer les yeux sur la consommation au nom du respect de l'autonomie, sans engager de conversation sur les risques réels. C'est une forme d'indifférence qui abandonne la personne à une situation qui peut lui faire du mal.</Texte>
          <Texte>La phronesis demande à Jean de trouver le juste milieu : une conversation directe avec Madame De Montmollin, à partir d'une écoute réelle de ce que représente ce rituel pour elle. Une créativité institutionnelle qui ne choisit pas entre la sécurité et la liberté, mais cherche comment les tenir ensemble. Et un engagement à assumer, avec son équipe, les risques résiduels de la décision choisie.</Texte>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Pensez à une situation récente où vous étiez confronté à un comportement d'une personne accompagnée qui vous posait question, quelque chose qui n'était ni clairement acceptable, ni clairement inacceptable. Quel type de professionnel avez-vous été dans cette situation ? Avez-vous eu tendance à sur-protéger, à déléguer, à vous engager ? Qu'est-ce que la phronesis vous aurait demandé ?</Texte>
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "La phronesis aristotélicienne désigne :",
            reponses: [
              "La connaissance théorique des règles éthiques",
              "La sagesse pratique permettant de bien juger dans des situations concrètes",
              "La capacité à appliquer des protocoles avec précision",
              "L'autorité morale du professionnel senior"
            ],
            bonneReponse: 1,
            explication: "La phronesis est la capacité à bien juger dans des situations particulières en tenant compte de tous les paramètres du contexte, ce qui distingue le professionnel expérimenté du débutant."
          },
          {
            question: "L'éthique des vertus demande en premier lieu :",
            reponses: [
              "Quelles sont les conséquences de cette action pour tous ?",
              "Quelle règle dois-je appliquer ici ?",
              "Quelle sorte de personne dois-je devenir ?",
              "Qu'est-ce que mes collègues feraient dans cette situation ?"
            ],
            bonneReponse: 2,
            explication: "L'éthique des vertus déplace la question de l'acte vers le caractère, qui suis-je et qui est-ce que je veux devenir comme professionnel ? C'est un changement de focale fondamental."
          },
          {
            question: "Selon Aristote, la phronesis se développe principalement par :",
            reponses: [
              "La lecture de manuels et de codes éthiques",
              "L'expérience, la réflexion et l'observation de figures exemplaires",
              "La participation à des comités d'éthique formels",
              "L'application stricte des codes de déontologie"
            ],
            bonneReponse: 1,
            explication: "La sagesse pratique ne s'enseigne pas directement, elle se construit par l'expérience vécue, la réflexivité et l'observation de professionnels dont le jugement est reconnu comme juste."
          },
          {
            question: "Dans le cas de Madame De Montmollin, le prisme des vertus invite Jean à :",
            reponses: [
              "Signaler immédiatement à la direction pour décision",
              "Ignorer le problème pour respecter son autonomie",
              "Trouver le juste milieu entre protection et respect de l'autonomie, par une conversation directe",
              "Appliquer strictement le règlement sur la consommation"
            ],
            bonneReponse: 2,
            explication: "La phronesis exige de naviguer entre l'excès de protection et l'indifférence, trouver la réponse juste dans la singularité de cette situation, par une conversation directe et une écoute réelle."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
