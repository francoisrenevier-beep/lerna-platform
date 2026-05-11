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
        sousTitre="Comment le caractère professionnel et la sagesse pratique transforment la qualité de l'action éthique."
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
              "Reconnaître les figures exemplaires dans sa pratique"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Aristote revisité : Le caractère comme outil professionnel">
          <Texte>Aristote pose une question radicale : peut-on être un bon professionnel sans être une bonne personne ? Pour lui, l'excellence professionnelle et l'excellence morale sont profondément liées. Ce n'est pas parce qu'on connaît les règles qu'on agit bien — c'est parce qu'on est un certain type de personne qu'on agit bien.</Texte>
          <Texte>Le grand déplacement opéré par Aristote est de passer de la question « Comment faire pour bien faire ? » à une interrogation plus profonde : « Quelle sorte de personne dois-je devenir ? » La première cherche une méthode. La seconde cherche une identité professionnelle.</Texte>
          <PullQuote>
            Il ne suffit pas d'enseigner des protocoles. Il faut former le caractère.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La phronesis : La sagesse qui ne s'apprend pas dans les livres">
          <Texte>La phronesis — sagesse pratique — est la capacité à bien juger dans des situations particulières, en tenant compte de tous les paramètres du contexte. C'est ce qui distingue le professionnel expérimenté du débutant : non pas plus de connaissances théoriques, mais une plus grande capacité à lire la situation avec finesse et à y répondre avec justesse.</Texte>
          <Texte>La phronesis ne s'enseigne pas directement. Elle se développe par l'expérience, la réflexion sur les pratiques passées, et — cruciale dans la théorie aristotélicienne — l'observation de personnes qui en font preuve. En côtoyant un professionnel dont le jugement est reconnu comme juste, le novice intègre progressivement une façon d'être et de penser qui dépasse la simple application de règles.</Texte>
          <HighlightBox label="Les espaces de modelage de la phronesis" couleur="vert">
            <Texte>Les pratiques de supervision, les colloques de cas et les formations continues ne sont pas seulement des espaces de transmission de connaissances. Ce sont des espaces de modelage de la phronesis — des lieux où le jugement professionnel se forme et se raffine par la confrontation avec d'autres regards.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Le Phronesis Loop : Développer ses vertus professionnelles">
          <Texte>Le développement de la sagesse pratique suit un cycle — une boucle sans fin qui constitue le cœur du perfectionnement professionnel.</Texte>
          <SchemaEtapes
            titre="Le cycle de développement de la phronesis"
            etapes={[
              { niveau: "Étape 1", nom: "Observer des figures exemplaires", definition: "Identifier des professionnels dont le jugement éthique est reconnu et observer comment ils délibèrent." },
              { niveau: "Étape 2", nom: "Exercer sa phronesis en situation", definition: "Affronter les dilemmes réels avec attention et ne pas fuir la complexité." },
              { niveau: "Étape 3", nom: "Identifier ses limites de jugement", definition: "Reconnaître ses excès (sur-protection) et ses manques (indifférence) dans les situations passées." },
              { niveau: "Étape 4", nom: "Intégrer les vertus manquantes", definition: "Travailler consciemment les vertus qui font défaut — le cycle recommence sans fin." }
            ]}
          />
          <HighlightBox label="Les pièges professionnels courants" couleur="jaune">
            <Liste items={[
              "Sur-protection — excès de prudence au détriment de l'autonomie de la personne",
              "Indifférence administrative — manque de sollicitude, délégation aux procédures",
              "Délégation excessive — évitement de la responsabilité personnelle derrière les règles",
              "Hyperinvestissement émotionnel — perte de la distance critique nécessaire au jugement"
            ]} />
          </HighlightBox>
          <PullQuote>
            La phronesis, c'est naviguer entre ces écueils avec discernement.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Retour sur Madame De Montmollin — Prisme des vertus">
          <HighlightBox label="Comment la phronesis s'applique à ce cas" couleur="bleu">
            <Texte>Jean doit exercer sa phronesis. Ni le gardien panoptique (excès de protection), ni le soignant indifférent (défaut de sollicitude). Le juste milieu exige une conversation directe avec Madame De Montmollin, une écoute de ses besoins réels, une créativité institutionnelle qui n'écrase pas la liberté sous la sécurité.</Texte>
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
            explication: "La phronesis est la capacité à bien juger dans des situations particulières en tenant compte de tous les paramètres du contexte — ce qui distingue le professionnel expérimenté du débutant."
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
            explication: "L'éthique des vertus déplace la question de l'acte vers le caractère — qui suis-je et qui est-ce que je veux devenir comme professionnel ? C'est un changement de focale fondamental."
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
            explication: "La sagesse pratique ne s'enseigne pas directement — elle se construit par l'expérience vécue, la réflexivité et l'observation de professionnels dont le jugement est reconnu comme juste."
          },
          {
            question: "Dans le cas de Madame De Montmollin, le prisme des vertus invite Jean à :",
            reponses: [
              "Signaler immédiatement à la direction pour décision",
              "Ignorer le problème pour respecter son autonomie",
              "Trouver le juste milieu entre protection et respect de l'autonomie",
              "Appliquer strictement le règlement sur la consommation"
            ],
            bonneReponse: 2,
            explication: "La phronesis exige de naviguer entre l'excès de protection et l'indifférence — trouver la réponse juste dans la singularité de cette situation, par une conversation directe et une écoute réelle."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
