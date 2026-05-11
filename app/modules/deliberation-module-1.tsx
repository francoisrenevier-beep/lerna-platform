import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module1Deliberation({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Éthique professionnelle"
        titre="Le Paysage de l'Éthique"
        titrePart2="Rappels fondamentaux"
        sousTitre="Comprendre pourquoi les professionnels du travail social ont besoin de plus qu'un code de conduite pour traverser les situations complexes."
        duree="35 minutes"
        niveau="Intermédiaire"
        videoYoutube="icKz8P2Hf2o"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Ce que ce module pose">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Distinguer éthique et morale dans la pratique professionnelle",
              "Identifier les trois pôles du triangle éthique de Ricœur",
              "Reconnaître les quatre approches éthiques fondamentales",
              "Identifier une situation à enjeu éthique dans sa pratique"
            ]} />
          </ConceptBox>
          <Texte>Chaque jour, vous prenez des décisions qui ne figurent dans aucun protocole. Un résident mange moins depuis une semaine — insistez-vous ou respectez-vous son refus ? Une personne accompagnée refuse une aide pourtant nécessaire à sa sécurité — à quel moment l'accompagnement devient-il ingérence ? Un collègue minimise une situation préoccupante lors d'un colloque — prenez-vous la parole ou vous taisez-vous ?</Texte>
          <Texte>Ces moments sont des moments éthiques. Ils ne demandent pas seulement de savoir ce que dit le règlement — ils demandent de savoir qui vous êtes en tant que professionnel, et sur quelles bases vous prenez vos décisions. La formation que vous commencez ne cherche pas à vous donner des réponses toutes faites. Elle cherche à vous donner des outils pour travailler ces questions avec rigueur, en équipe, et avec les personnes que vous accompagnez.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Éthique ou Morale ? Une distinction qui change tout">
          <Texte>Paul Ricœur distingue la morale — domaine des normes, obligations et interdits — de l'éthique, qui interroge ce que signifie bien agir dans un contexte donné. Cette distinction n'est pas un jeu de mots philosophique : elle a des conséquences directes sur votre façon de travailler.</Texte>
          <Texte>La morale dit : « Tu dois respecter la confidentialité. » La règle est claire, générale, applicable à tous les cas. L'éthique dit : « Dans cette situation précise, avec cette personne, au vu de tout ce que tu sais, que signifie bien agir ? » Elle accepte la complexité que la morale simplifie. La morale est nécessaire — elle pose un cadre commun. Mais elle ne suffit pas, parce que la réalité des personnes dépasse toujours les règles générales.</Texte>
          <Texte>Pensez à l'infirmier qui doit appliquer un règlement sur la consommation d'alcool, tout en respectant l'autonomie d'une résidente de 80 ans dont le rituel du vin du soir est peut-être le dernier espace de liberté qu'elle maîtrise. Suivre le protocole à la lettre, c'est techniquement correct — mais est-ce juste ? Ignorer le règlement, c'est peut-être juste pour elle — mais est-ce tenable sur le plan de la responsabilité professionnelle ? Il ne peut pas se contenter de « suivre le protocole ». Il est confronté à une tension éthique authentique — et c'est précisément dans cet espace que la délibération éthique devient nécessaire.</Texte>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Pensez à une situation récente où vous avez appliqué une règle institutionnelle et où quelque chose ne vous semblait pas juste. La règle était peut-être claire, mais la situation était plus complexe. Peut-être que l'application stricte de la règle produisait un résultat qui heurtait votre sens du bien agir. C'est exactement là qu'éthique et morale divergent — dans le terrain, au quotidien.</Texte>
          </HighlightBox>
          <Texte>Selon Georges Legault, l'éthique appliquée est un système ouvert qui part de la complexité des situations et exige d'exposer la justification réelle des choix. Cette posture transforme le professionnel : il ne subit plus les dilemmes, il les travaille. Il ne cherche pas à appliquer mécaniquement une règle, mais à construire une réponse argumentée qui tient compte de toutes les dimensions de la situation.</Texte>
          <Texte>Il existe un piège courant dans les équipes : celui de l'éthique par l'intuition. On entend souvent « je le sens, c'est pas bien » ou « instinctivement, je pense qu'il faut faire ça ». Cette formule est réelle — les intuitions morales ont une valeur, elles signalent quelque chose d'important. Mais elles ne suffisent pas. Une décision éthique dans le travail social doit pouvoir être expliquée, défendue, partagée. « Je le sens » est un point de départ, jamais une conclusion. Le travail de délibération consiste précisément à transformer cette intuition en raisonnement partageable.</Texte>
          <PullQuote>
            L'éthique n'est pas un module parmi d'autres dans un cursus — elle est transversale à toute pratique professionnelle.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le Triangle Éthique de Ricœur : Je, Tu, Institution">
          <Texte>Ricœur propose une formule dense pour définir l'éthique : « la visée de la vie bonne, avec et pour autrui, dans des institutions justes. » Cette définition structure une architecture éthique en trois pôles indissociables. Ce qui est remarquable dans cette formule, c'est qu'elle ne choisit pas un camp — elle tient ensemble l'individu, la relation et le collectif.</Texte>
          <Texte>Dans votre pratique quotidienne, ces trois pôles sont constamment en jeu. Quand vous accompagnez une personne, vous ne le faites jamais en dehors d'un contexte institutionnel, jamais sans que votre propre identité professionnelle soit engagée, jamais de façon purement technique. Un éducateur qui accompagne une personne avec un handicap dans un foyer mobilise simultanément qui il veut être (Je), comment il se relation à cette personne singulière (Tu), et dans quel cadre collectif cet accompagnement s'inscrit (Institution). Ces trois dimensions sont toujours présentes — la question est de savoir si on les reconnaît toutes.</Texte>
          <SchemaEtapes
            titre="Les trois pôles du triangle éthique"
            etapes={[
              { niveau: "Pôle 1", nom: "Je — Estime de soi", definition: "L'aspiration personnelle à l'accomplissement. Quelle sorte de personne est-ce que je veux être ? Quelle sorte de professionnel suis-je en train de devenir ? Ce pôle ancre l'éthique dans l'identité — pas seulement dans la conformité à des règles." },
              { niveau: "Pôle 2", nom: "Tu — Sollicitude", definition: "Se soucier de l'autre, reconnaître sa vulnérabilité, ajuster son action à ce qu'il vit réellement. Ce pôle exige une écoute qui dépasse la collecte d'informations — une présence authentique à la singularité de la personne." },
              { niveau: "Pôle 3", nom: "Institution — Sens de la justice", definition: "Le cadre collectif qui organise l'accès équitable aux ressources et aux droits. Ce pôle rappelle que nos décisions individuelles ont des effets sur le tissu social plus large, et que la justice n'est pas qu'affaire personnelle." }
            ]}
          />
          <HighlightBox label="Illustration — Le dilemme du GPS" couleur="bleu">
            <Texte>Un EMS qui veut équiper une résidente d'un GPS au nom de sa sécurité (Institution) contre sa volonté autonome (Je) sans écoute de ce que représente pour elle sa liberté de circulation (Tu) illustre ce conflit. La direction peut légitimement invoquer la sécurité. La résidente peut légitimement revendiquer sa liberté. Jean, l'éducateur, est pris entre les trois pôles — et il ne peut en ignorer aucun sans trahir quelque chose d'essentiel. Un dilemme éthique survient quand ces trois pôles entrent en tension — le triangle de Ricœur aide à nommer les forces en présence avant de délibérer.</Texte>
          </HighlightBox>
          <Texte>Ce triangle est un outil de cartographie, pas de résolution. Il ne dit pas quoi décider — il dit où regarder avant de décider. C'est un outil pour ne rien oublier dans l'analyse : ne pas oublier la personne dans la règle, ne pas oublier la règle dans la relation, ne pas oublier la relation dans les intérêts institutionnels.</Texte>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Repensez à une décision récente prise en équipe. Quel pôle était dominant dans la discussion ? L'Institution a-t-elle pris toute la place (« le règlement dit... ») ? Ou au contraire, la relation individuelle a-t-elle effacé la dimension collective ? Y avait-il un pôle que personne n'a mentionné ? Le triangle aide à voir ces angles morts.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Panorama des approches : Quatre boussoles éthiques">
          <Texte>Le professionnel du travail social est traversé, dans ses pratiques, par des raisonnements éthiques implicites qui correspondent à des traditions philosophiques bien identifiées. Les connaître permet de les utiliser consciemment plutôt que de les subir.</Texte>
          <Texte>La plupart d'entre nous utilisons plusieurs de ces approches en même temps, sans en avoir conscience. Quand vous dites « je dois signaler, c'est mon obligation », vous raisonnez de façon déontologique. Quand vous dites « si je signale, qu'est-ce que ça va changer concrètement pour elle ? », vous raisonnez de façon utilitariste. Quand vous dites « comment est-ce qu'elle vit ça, au fond ? Qu'est-ce qu'elle a vraiment besoin d'entendre ? », vous adoptez le prisme du care. Ces quatre approches fonctionnent comme des boussoles — chacune pointe vers un aspect différent du nord éthique.</Texte>
          <SchemaEtapes
            titre="Quatre approches complémentaires"
            etapes={[
              { niveau: "Approche 1", nom: "Éthique des vertus", definition: "Qui dois-je être pour bien agir ? La question n'est pas d'abord ce qu'il faut faire, mais quelle sorte de professionnel on est en train de devenir. Sagesse pratique (phronesis) et développement du caractère (Aristote). → Approfondi au Module 2." },
              { niveau: "Approche 2", nom: "Déontologisme", definition: "Quelles règles respecter, quelle que soit l'utilité ? Principes universels, dignité, confidentialité. Certaines actions sont interdites même si elles produiraient de bons résultats. Le Code Avenir Social Suisse s'inscrit dans cette logique." },
              { niveau: "Approche 3", nom: "Utilitarisme", definition: "Quelles conséquences pour tous ? Quelle action produit le plus grand bien pour le plus grand nombre ? Indispensable en gestion de ressources limitées — mais peut conduire à sacrifier des individus si appliqué sans garde-fou." },
              { niveau: "Approche 4", nom: "Éthique du care", definition: "Quel soin pour cette personne singulière ? Vulnérabilité, relation et singularité au centre de la décision. Ce prisme interroge ce que signifie vraiment prendre soin — et ce dont cette personne, dans ce contexte précis, a réellement besoin." }
            ]}
          />
          <HighlightBox label="Quand les approches entrent en tension" couleur="bleu">
            <Texte>Dans la majorité des situations courantes, ces quatre approches convergent — et il n'y a pas de vrai dilemme. Un résident qui chute régulièrement mérite protection (déontologie), la prévention réduit aussi les coûts médicaux (utilitarisme), un bon professionnel prend soin (vertus), et cette personne-là a besoin d'un suivi individualisé (care). Le dilemme éthique authentique apparaît quand les quatre prismes donnent des réponses différentes ou contradictoires — et c'est précisément là que la délibération collective devient indispensable. On ne peut pas sortir seul d'un vrai dilemme éthique.</Texte>
          </HighlightBox>
          <HighlightBox label="Et dans votre pratique..." couleur="jaune">
            <Texte>Quelle approche utilisez-vous le plus spontanément dans votre travail ? Êtes-vous naturellement porté à chercher les règles à appliquer (déontologie) ? À peser les conséquences pour tous (utilitarisme) ? À vous demander ce que la personne ressent vraiment (care) ? À vous interroger sur quel type de professionnel vous voulez être (vertus) ? Identifier sa boussole dominante, c'est aussi identifier ses angles morts.</Texte>
          </HighlightBox>
          <PullQuote>
            Ces quatre approches ne s'excluent pas — elles s'éclairent mutuellement. C'est précisément quand elles entrent en tension que la délibération éthique devient nécessaire.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Fil rouge — Madame De Montmollin">
          <HighlightBox label="La situation qui traversera toute la formation" couleur="jaune">
            <Texte>Jean, éducateur dans un EMS, découvre que Madame De Montmollin, 80 ans, résidente depuis 3 ans suite au décès de son mari, achète et cache du vin lors de ses sorties libres dans le quartier. Sa consommation — environ une bouteille et demie par semaine — dépasse la limite autorisée par le règlement et crée un risque médical réel en interaction avec ses médicaments. La direction de l'EMS propose de l'intégrer à un projet pilote de bracelet GPS, avec couverture médiatique et opportunités de recherche à la clé. Jean hésite entre trois options : signaler à la direction, parler directement à Mme De Montmollin, ou proposer la situation au colloque d'équipe.</Texte>
          </HighlightBox>
          <Texte>Ce cas concentre des tensions que beaucoup d'entre vous reconnaîtront dans leur propre pratique. Une personne accompagnée dont le comportement crée un risque. Une institution qui a ses propres intérêts — pas nécessairement malveillants, mais qui peuvent interférer avec les intérêts de la personne. Un professionnel pris entre sa relation de confiance avec la résidente et ses obligations institutionnelles. Et une solution technologique proposée comme réponse à ce qui est peut-être avant tout un besoin humain non comblé.</Texte>
          <Texte>Regardons-la à travers nos quatre boussoles, juste pour percevoir les tensions : La morale institutionnelle dit que le règlement s'applique. L'utilitarisme dit qu'une chute grave coûterait cher à tout le monde. L'éthique du care dit qu'une femme qui cache du vin depuis la mort de son mari exprime peut-être quelque chose de bien plus profond qu'une simple transgression des règles. Et l'éthique des vertus dit : quel professionnel est-ce que Jean veut être dans cette situation ?</Texte>
          <Texte>Cette situation sera analysée progressivement à travers chaque module. Au module 2, le prisme des vertus. Au module 3, la discussion en équipe. Au module 4, la méthode de délibération structurée. Et au module 5, une analyse complète et approfondie. L'objectif n'est pas d'arriver à une « bonne réponse » — c'est d'apprendre à penser avec rigueur face à des situations qui résistent aux réponses simples.</Texte>
          <HighlightBox label="Avant d'aller plus loin..." couleur="vert">
            <Texte>Quelle serait votre première réaction face à la situation de Jean ? Notez-la mentalement. À la fin du module 5, vous verrez si votre intuition initiale résiste à la délibération collective — ou si elle s'est affinée et enrichie.</Texte>
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Selon Ricœur, l'éthique est :",
            reponses: [
              "L'ensemble des règles interdisant les mauvaises actions",
              "La visée de la vie bonne, avec et pour autrui, dans des institutions justes",
              "Un code professionnel déterminé par l'institution",
              "Une décision individuelle fondée sur la conscience"
            ],
            bonneReponse: 1,
            explication: "La définition de Ricœur intègre les trois pôles du triangle éthique — le Je (visée personnelle), le Tu (relation à l'autre) et l'Institution (cadre collectif juste)."
          },
          {
            question: "Quelle est la principale différence entre éthique et morale ?",
            reponses: [
              "La morale est plus importante que l'éthique",
              "L'éthique concerne le sens et le discernement, la morale les règles et obligations",
              "L'éthique s'applique uniquement aux médecins",
              "La morale est propre à chaque culture"
            ],
            bonneReponse: 1,
            explication: "La morale renvoie aux normes et obligations (il faut / il ne faut pas). L'éthique interroge le sens de l'action dans une situation singulière — elle apparaît précisément quand les règles ne suffisent plus."
          },
          {
            question: "L'éthique du care met principalement l'accent sur :",
            reponses: [
              "Les règles universelles et les obligations",
              "Le calcul des conséquences collectives",
              "La vulnérabilité, la relation et le soin singulier",
              "Les vertus individuelles du professionnel"
            ],
            bonneReponse: 2,
            explication: "L'éthique du care interroge comment une décision affecte le tissu relationnel et prend soin de la singularité de la personne — contrepoids précieux aux logiques trop abstraites."
          },
          {
            question: "Dans le triangle de Ricœur, le pôle Institution représente :",
            reponses: [
              "Le directeur de l'établissement",
              "Le cadre collectif et le sens de la justice",
              "Les règlements administratifs uniquement",
              "La hiérarchie médicale"
            ],
            bonneReponse: 1,
            explication: "L'Institution chez Ricœur désigne le cadre collectif du vivre-ensemble — les règles qui organisent l'accès équitable aux ressources et aux droits. Elle est une condition de la vie bonne, à condition d'être juste."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
