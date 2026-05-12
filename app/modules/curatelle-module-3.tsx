import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module3Curatelle({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Curatelles et protection de l'adulte"
        titre="Ma posture professionnelle"
        titrePart2="accompagner sous curatelle"
        sousTitre="Clarifier son rôle, maintenir l'autodétermination, collaborer avec le curateur et soutenir la personne dans l'exercice de ses droits."
        duree="35 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="De la compréhension à l'action">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Clarifier la distinction entre votre rôle et celui du curateur",
              "Identifier les risques de sur-protection et leurs effets sur l'autonomie de la personne",
              "Construire une collaboration constructive avec le curateur dans l'intérêt de la personne",
              "Soutenir la personne dans ses démarches et l'exercice de ses droits sans vous y substituer",
              "Communiquer autour de la curatelle dans l'institution dans le respect de la confidentialité",
            ]} />
          </ConceptBox>
          <Texte>Les deux premiers modules vous ont donné les clés pour comprendre le cadre légal et saisir ce que vit concrètement la personne sous mesure de protection. Ce troisième module est celui de l'action : comment vous, en tant que professionnel dans une institution, vous positionnez-vous et agissez-vous concrètement ?</Texte>
          <Texte>Ce module ne contient pas de réponses universelles. Les situations sont trop variées pour cela. Mais il propose des repères, des principes et des illustrations concrètes qui peuvent guider votre pratique au quotidien.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Clarifier son rôle : ce que je suis, ce que je ne suis pas">
          <TableauComparaison
            titre="Votre rôle et celui du curateur : une distinction fondamentale"
            colonnes={[
              {
                titre: "Le curateur",
                contenu: [
                  "Mandaté par l'APEA pour exercer des actes juridiques précis",
                  "Gère les finances, représente auprès d'administrations, co-signe des actes",
                  "Mandat légal avec responsabilités et obligations formelles",
                  "Rend des comptes à l'APEA régulièrement",
                  "Ne voit la personne que ponctuellement",
                ],
              },
              {
                titre: "Vous, professionnel d'institution",
                contenu: [
                  "Référent du quotidien et de la relation d'accompagnement",
                  "Accompagnez la personne dans ses activités, relations, développement, bien-être",
                  "Pas de mandat légal de représentation",
                  "Observez la personne au quotidien — information précieuse",
                  "Êtes présent au moment où les décisions ont des effets concrets",
                ],
              },
            ]}
          />

          <HighlightBox label="Le risque du brouillage des rôles" couleur="jaune">
            <Texte>Si vous commencez à gérer l'argent de la personne, à signer des documents à sa place, ou à prendre des décisions qui relèvent du mandat du curateur, vous créez une confusion des rôles qui peut nuire à la personne — et vous exposer à des responsabilités pour lesquelles vous n'êtes pas mandaté.</Texte>
            <Texte>À l'inverse, attendre que le curateur règle tous les problèmes de la personne serait aussi une erreur : votre rôle d'accompagnement au quotidien reste entier, et sa valeur est irremplaçable.</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Fil rouge — Fabrice et Nadia</p>
              <p className="text-gray-700 text-sm leading-relaxed">Quelques semaines après la mise en place de la curatelle, Nadia demande à Fabrice de l'aider à écrire un message à son curateur pour lui demander une avance sur son argent de poche. Elle a besoin d'acheter un cadeau pour l'anniversaire d'une amie.</p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">Fabrice aurait pu gérer lui-même la situation en donnant à Nadia l'argent de sa propre poche, "pour cette fois". Ce serait rapide et gentil. Mais ce serait aussi se substituer au curateur, court-circuiter le dispositif, et empêcher Nadia d'apprendre à naviguer dans ce nouveau cadre.</p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">Ce que Fabrice fait à la place : il aide Nadia à formuler sa demande par message. Il lui explique que le curateur a probablement un délai de réponse. Il discute avec elle de ce qui pourrait se passer si la réponse est non. Il la soutient dans ce processus sans le faire à sa place. Cette approche est plus longue, parfois frustrante. Mais elle respecte le cadre légal, maintient le rôle de chacun, et développe la capacité de Nadia à interagir avec son curateur.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Maintenir l'autodétermination au quotidien">
          <Texte>L'un des risques les plus insidieux dans l'accompagnement d'une personne sous curatelle est la <strong>sur-protection</strong>. Parce qu'une mesure légale a reconnu une certaine fragilité de la personne, les équipes peuvent — avec les meilleures intentions — commencer à décider pour elle dans des domaines où elle est parfaitement capable de décider seule.</Texte>

          <HighlightBox label="La sur-protection : contraire au droit et à l'éthique" couleur="jaune">
            <Texte>La sur-protection est contraire aux principes du droit de la protection de l'adulte (subsidiarité, proportionnalité) et à l'éthique professionnelle du travail social, qui place l'autodétermination de la personne au cœur de la relation d'accompagnement.</Texte>
            <Texte>Concrètement, cela signifie : ne pas présupposer qu'une personne sous curatelle ne peut pas prendre telle décision. Lui poser la question plutôt que décider pour elle. Lui laisser le temps de réfléchir. Accepter une décision avec laquelle vous n'êtes pas d'accord si elle relève de son droit strict à l'autodétermination.</Texte>
          </HighlightBox>

          <ConceptBox label="Outil pratique" titre="Distinguer ce qui relève de la curatelle et ce qui n'en relève pas">
            <Texte>Dans votre accompagnement quotidien, vous devez avoir une idée claire de ce que couvre la curatelle de la personne que vous accompagnez — et de ce qu'elle ne couvre pas.</Texte>
            <Texte>Si Nadia a une curatelle de représentation portant uniquement sur la gestion financière, cela signifie que son curateur gère son argent. Cela ne signifie pas que son curateur décide où elle passe ses vacances, avec qui elle se lie d'amitié, si elle veut changer de coiffure ou si elle veut participer à une activité. Ces décisions lui appartiennent entièrement.</Texte>
            <Texte><strong>En pratique :</strong> lisez attentivement le mandat de curatelle de chaque personne que vous accompagnez. Si ce document n'est pas accessible dans le dossier, demandez à votre responsable. Comprendre l'étendue précise de la mesure vous permet d'accompagner la personne de manière cohérente avec son cadre légal.</Texte>
          </ConceptBox>

          <PullQuote>
            La mesure de protection est au service de la personne — pas l'inverse. Ce principe vaut autant pour le curateur que pour le professionnel d'institution.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Collaborer avec le curateur : une relation à construire">
          <Texte>Le curateur et le professionnel d'institution ne se connaissent souvent pas. Ils n'ont pas été formés dans les mêmes cultures professionnelles. L'un est dans le juridique et l'administratif, l'autre dans le relationnel et le quotidien. Et pourtant, la qualité de l'accompagnement de la personne dépend en grande partie de la qualité de la relation entre ces deux acteurs.</Texte>

          <HighlightBox label="Les bases d'une collaboration constructive" couleur="bleu">
            <Liste items={[
              "Connaître son interlocuteur : lorsqu'une personne est sous curatelle, prendre l'initiative de contacter le curateur pour se présenter et établir un premier contact",
              "Partager les informations pertinentes : vous observez la personne au quotidien, le curateur ne la voit que ponctuellement — vos observations sont précieuses",
              "Établir un canal de communication régulier : un email mensuel, un appel trimestriel, pour partager les évolutions importantes",
              "Respecter les décisions du curateur même si vous n'y adhérez pas : votre rôle n'est pas de contourner ses décisions, mais d'aider la personne à les comprendre et, si elle est en désaccord, à l'exprimer",
            ]} />
          </HighlightBox>

          <HighlightBox label="Quand signaler un problème sérieux" couleur="jaune">
            <Texte>Si vous observez que le curateur ne remplit pas correctement sa mission — absence de contact avec la personne, décisions contraires à ses intérêts, rupture évidente de la relation de confiance — vous avez la <strong>responsabilité de le signaler</strong> à votre hiérarchie et, si nécessaire, à l'APEA.</Texte>
            <Texte>Ce n'est pas de la délation : c'est l'exercice de votre responsabilité professionnelle envers la personne accompagnée. L'APEA exerce une surveillance continue sur les curateurs et peut prendre des mesures si la mission est mal exercée.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Soutenir la personne dans ses démarches et ses droits">
          <Texte>L'un des rôles les plus importants que vous pouvez jouer est celui de soutien dans les démarches. Non pas en faisant les démarches à la place de la personne, mais en l'accompagnant pour qu'elle puisse les faire elle-même autant que possible.</Texte>

          <TableauComparaison
            titre="Soutien vs substitution : la distinction en pratique"
            colonnes={[
              {
                titre: "Soutien (à faire)",
                contenu: [
                  "Lire un courrier avec la personne et l'aider à en comprendre le contenu",
                  "L'accompagner à un rendez-vous à l'APEA ou avec son curateur",
                  "L'aider à préparer les questions qu'elle veut poser",
                  "Être présent lors d'un entretien difficile pour qu'elle se sente moins seule",
                  "L'orienter vers des ressources en FALC sur ses droits",
                ],
              },
              {
                titre: "Substitution (à éviter)",
                contenu: [
                  "Répondre à sa place à son courrier",
                  "Gérer ses finances ou ses affaires à sa place",
                  "Prendre des décisions qui relèvent de son mandat de curatelle",
                  "Décider pour elle de ce qu'elle doit demander ou ne pas demander",
                  "Régler ses conflits avec le curateur sans l'impliquer",
                ],
              },
            ]}
          />

          <HighlightBox label="Aider à exercer le droit d'être entendu" couleur="vert">
            <Texte>La personne accompagnée a le droit d'être entendue par l'APEA à tout moment. Elle peut demander une révision de sa curatelle, exprimer son désaccord avec son curateur, ou demander un changement si la relation de confiance est rompue.</Texte>
            <Texte>Ces démarches peuvent sembler intimidantes, particulièrement pour des personnes peu habituées aux procédures administratives ou qui ont un rapport difficile à l'autorité. Votre soutien pour franchir ces étapes peut faire une différence significative. Chaque démarche réussie renforce la confiance de la personne en elle-même.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Communiquer autour de la curatelle dans l'institution">
          <ConceptBox label="Obligation professionnelle" titre="La confidentialité">
            <Texte>Les informations relatives à la curatelle d'une personne accompagnée sont <strong>confidentielles</strong>. Elles ne doivent pas être partagées avec d'autres résidents, avec des membres de l'équipe qui n'ont pas à les connaître, ou avec des tiers extérieurs à l'institution sans l'accord de la personne.</Texte>
            <Texte>Cette obligation n'est pas uniquement légale : elle est éthique. Elle protège la dignité de la personne et sa vie privée. Dans une institution où la vie en communauté crée naturellement une certaine transparence, maintenir cette confidentialité demande une vigilance active.</Texte>
          </ConceptBox>

          <HighlightBox label="Parler de la curatelle avec la personne accompagnée" couleur="bleu">
            <Texte>La personne sous curatelle a le droit de savoir et de comprendre sa situation. Si elle ne comprend pas ce que signifie sa curatelle, ses droits et les responsabilités de son curateur, elle ne peut pas exercer ses droits de manière éclairée.</Texte>
            <Texte>Votre rôle peut inclure d'aider la personne à comprendre sa situation dans un langage accessible — explications orales simples, supports visuels, documents en FALC (Facile à Lire et à Comprendre). <strong>Pro Infirmis</strong> propose en Suisse des ressources en FALC sur les droits des personnes en situation de handicap et sur la protection de l'adulte — des ressources précieuses pour votre pratique.</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Fil rouge — Nadia, un an après</p>
              <p className="text-gray-700 text-sm leading-relaxed">Un an après la mise en place de la curatelle, Nadia participe à une réunion de son projet personnalisé. Pour la première fois, elle dit elle-même : "Je suis contente d'avoir Monsieur B. comme curateur, maintenant je comprends mieux mes factures. Mais j'aimerais qu'on revoie combien d'argent j'ai par semaine — je voudrais pouvoir mettre un peu de côté pour partir en vacances l'été prochain."</p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">Fabrice l'accompagne ensuite pour préparer une lettre à son curateur sur ce sujet. Ce n'est plus Fabrice qui parle pour Nadia — c'est Nadia qui parle, avec le soutien de Fabrice.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que cette formation vous a donné">
          <HighlightBox label="Les points clés de la formation" couleur="vert">
            <Liste items={[
              "Le droit suisse de la protection de l'adulte depuis 2013 repose sur trois principes : subsidiarité, proportionnalité, complémentarité",
              "Les quatre types de curatelles sont des outils modulaires — connaître le contenu exact du mandat de chaque personne est indispensable",
              "Une curatelle n'est pas l'ensemble des droits d'une personne — les droits strictement personnels lui appartiennent si elle a le discernement",
              "Votre rôle est distinct de celui du curateur : vous accompagnez le quotidien, il exerce des actes juridiques précis",
              "Maintenir l'autodétermination au quotidien est votre responsabilité professionnelle — pas seulement celle du curateur",
              "Soutenir la personne dans ses démarches sans vous y substituer est la posture juste",
            ]} />
          </HighlightBox>

          <PullQuote>
            La mesure de protection est un outil. C'est la relation d'accompagnement qui lui donne — ou non — un sens au service de la personne.
          </PullQuote>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la principale différence entre votre rôle et celui du curateur ?",
            reponses: [
              "Vous êtes responsable des finances, le curateur s'occupe du quotidien",
              "Vous accompagnez la personne dans son quotidien ; le curateur exerce des actes juridiques précis dans les domaines mandatés par l'APEA",
              "Il n'y a pas de différence claire, les rôles se confondent souvent dans la pratique",
              "Vous avez un rôle légal, le curateur a un rôle éducatif",
            ],
            bonneReponse: 1,
            explication: "Le curateur est mandaté par l'APEA pour exercer des actes juridiques précis : gérer les finances, représenter la personne auprès d'administrations, co-signer des actes. Vous, en tant que professionnel d'institution, accompagnez la personne dans son quotidien, ses activités, ses relations et son développement. Confondre ces rôles peut nuire à la personne et créer des responsabilités non assumées.",
          },
          {
            question: "Une personne a une curatelle de représentation limitée à la gestion financière. Qui décide de ses activités de loisirs et de ses sorties ?",
            reponses: [
              "Son curateur",
              "L'institution",
              "La personne elle-même",
              "La famille",
            ],
            bonneReponse: 2,
            explication: "La curatelle porte uniquement sur la gestion financière. Les activités de loisirs, les sorties, les relations relèvent de l'autodétermination de la personne — ils ne sont pas couverts par ce type de mandat. La sur-protection consisterait à laisser croire que le curateur décide de tout.",
          },
          {
            question: "Vous observez que le curateur d'une personne accompagnée ne la contacte jamais et prend des décisions contraires à ses souhaits exprimés. Quelle est votre responsabilité ?",
            reponses: [
              "Vous n'avez pas à intervenir dans la relation entre la personne et son curateur",
              "Vous le signalez à votre hiérarchie et, si nécessaire, à l'APEA",
              "Vous prenez en charge les responsabilités du curateur pour combler le manque",
              "Vous attendez que la personne elle-même fasse une démarche",
            ],
            bonneReponse: 1,
            explication: "Lorsque le curateur ne remplit pas correctement sa mission, vous avez la responsabilité de le signaler à votre hiérarchie et, si nécessaire, à l'APEA. Ce n'est pas de la délation : c'est l'exercice de votre responsabilité professionnelle envers la personne accompagnée. L'APEA exerce une surveillance continue sur les curateurs.",
          },
          {
            question: "Pourquoi est-il important de connaître précisément le contenu du mandat de curatelle d'une personne accompagnée ?",
            reponses: [
              "Pour pouvoir remplacer le curateur si nécessaire",
              "Pour savoir exactement quels droits la personne conserve et dans quels domaines elle a besoin de soutien",
              "Pour informer les autres résidents de la situation",
              "Ce n'est pas nécessaire, c'est le rôle du responsable d'unité",
            ],
            bonneReponse: 1,
            explication: "Connaître précisément le contenu du mandat vous permet d'accompagner la personne de manière cohérente avec son cadre légal : savoir ce qu'elle peut décider seule, où elle a besoin de soutien, et ce qui relève du curateur. Sans cette connaissance, vous risquez soit de sur-protéger, soit de laisser la personne sans soutien dans des domaines où elle en aurait besoin.",
          },
          {
            question: "Quelle ressource suisse propose des documents en FALC sur les droits des personnes en situation de handicap ?",
            reponses: [
              "L'APEA",
              "La Croix-Rouge suisse",
              "Pro Infirmis",
              "L'Office fédéral des assurances sociales",
            ],
            bonneReponse: 2,
            explication: "Pro Infirmis est l'organisation suisse spécialisée dans l'accompagnement des personnes en situation de handicap. Elle produit des ressources en FALC (Facile à Lire et à Comprendre) sur les droits des personnes en situation de handicap, notamment sur la protection de l'adulte. Ces ressources sont précieuses pour aider les personnes accompagnées à comprendre leur situation.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
