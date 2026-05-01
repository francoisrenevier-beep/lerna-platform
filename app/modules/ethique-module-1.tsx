import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module1Ethique() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Éthique professionnelle"
        titre="Introduction à l'éthique"
        sousTitre="Comprendre ce que l'éthique engage dans les pratiques professionnelles du travail social"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi parler d'éthique aujourd'hui dans les métiers du terrain ?">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre ce que recouvre le terme éthique et ce qui le distingue de la morale",
              "Identifier pourquoi les questions éthiques sont omniprésentes dans les métiers du social",
              "Saisir en quoi l'éthique n'est ni une opinion personnelle ni une simple application de règles",
              "Reconnaître une situation à enjeu éthique dans sa pratique"
            ]} />
          </ConceptBox>
          <Texte>Dans les métiers du travail social, du soin, de l'éducation ou de l'accompagnement, il est rare de pouvoir agir en s'appuyant uniquement sur des procédures claires ou des règles univoques. Les professionnels sont quotidiennement confrontés à des situations complexes, singulières, parfois contradictoires, dans lesquelles plusieurs valeurs entrent en tension. Ces situations prennent souvent la forme d'un malaise diffus : "Quelque chose ne va pas, mais je ne saurais pas exactement dire quoi."</Texte>
          <Texte>Ce malaise n'est pas nécessairement lié à une faute ou à une transgression. Il renvoie bien souvent à une question éthique. L'éthique apparaît ainsi au cœur de l'action professionnelle, non pas comme un supplément théorique, mais comme une dimension constitutive du métier.</Texte>
          <PullQuote>
            Quelque chose ne va pas, mais je ne saurais pas exactement dire quoi. Ce malaise est souvent l'indicateur d'une question éthique.
          </PullQuote>
          <HighlightBox label="Questions éthiques fréquentes dans la pratique" couleur="jaune">
            <Liste items={[
              "Ai-je agi de la bonne manière ?",
              "Ai-je respecté la personne dans sa dignité ?",
              "Ai-je été trop loin, ou pas assez ?",
              "Ai-je fait primer une règle au détriment d'une situation humaine ?",
              "Ai-je laissé mes propres valeurs influencer excessivement mon intervention ?"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Éthique et morale : une distinction nécessaire">
          <Texte>La morale renvoie principalement à l'idée de normes, de devoirs, d'interdits et d'obligations. Elle s'exprime sous la forme : il faut / il ne faut pas, c'est permis / c'est interdit. Dans le champ professionnel, la morale est incarnée par les lois et règlements, les codes de déontologie, les directives institutionnelles, les standards professionnels.</Texte>
          <Texte>L'éthique, quant à elle, ne commence pas par la règle, mais par la question du sens de l'action. Elle interroge ce que signifie bien agir dans une situation donnée, ce que l'on cherche à préserver à travers l'action, comment articuler règles, valeurs, personnes et contexte. L'éthique apparaît précisément quand plusieurs règles entrent en contradiction, quand l'application stricte d'une norme semble produire une injustice, quand la singularité d'une situation ne rentre pas dans les cadres existants.</Texte>
          <SchemaEtapes
            titre="De la règle au discernement"
            etapes={[
              { niveau: "Niveau 1", nom: "Morale", definition: "Registre des règles et obligations — il faut / il ne faut pas, c'est permis / c'est interdit" },
              { niveau: "Niveau 2", nom: "Déontologie", definition: "Éthique appliquée à la profession — traduction des valeurs en obligations concrètes" },
              { niveau: "Niveau 3", nom: "Éthique", definition: "Registre du sens et du discernement — qu'est-ce qu'une bonne action dans cette situation singulière ?" }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La contribution de Paul Ricœur : une éthique de la vie bonne">
          <PullQuote source="Paul Ricœur">
            L'éthique est la visée d'une vie bonne, avec et pour les autres, dans des institutions justes.
          </PullQuote>
          <Texte>Cette formule articule trois dimensions fondamentales de l'éthique professionnelle :</Texte>
          <Texte><strong>a) La visée d'une vie bonne</strong> — L'éthique ne commence pas par l'obéissance à une règle, mais par une orientation : celle de la vie bonne. Il ne s'agit pas d'un idéal abstrait, mais d'une question concrète : qu'est-ce qu'une vie qui mérite d'être vécue pour les personnes concernées ? Dans le travail social, cette question traverse toutes les interventions : autonomie, dignité, sécurité, reconnaissance, participation, qualité de vie.</Texte>
          <Texte><strong>b) Avec et pour les autres</strong> — L'éthique engage une relation à autrui. Agir éthiquement implique de reconnaître l'autre comme un sujet, porteur d'une histoire, de valeurs, de vulnérabilités et de capacités. L'asymétrie des relations professionnelles appelle vigilance et responsabilité.</Texte>
          <Texte><strong>c) Dans des institutions justes</strong> — L'éthique s'inscrit toujours dans un cadre institutionnel. Les institutions peuvent soutenir l'éthique mais aussi la contraindre. Penser l'éthique, c'est aussi interroger les cadres dans lesquels l'action professionnelle prend place.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Quand une situation devient-elle une question éthique ?">
          <Texte>Une situation devient une situation à enjeu éthique lorsqu'elle met en tension des valeurs fondamentales sans qu'une solution évidente ne s'impose. Les enjeux éthiques sont souvent discrets, quotidiens, parfois invisibles. Exemples fréquents dans la pratique :</Texte>
          <Liste items={[
            "Respecter l'autonomie d'une personne tout en assurant sa sécurité",
            "Préserver la confidentialité tout en travaillant en réseau",
            "Appliquer une règle institutionnelle tout en tenant compte de la singularité d'une situation",
            "Concilier les attentes d'une personne accompagnée avec les contraintes du mandat"
          ]} />
          <Texte>Dans ces situations, aucune option n'est totalement satisfaisante. L'éthique consiste à rendre le choix pensable, discutable et justifiable.</Texte>
          <HighlightBox label="Signaux d'une question éthique" couleur="vert">
            <Liste items={[
              "Malaise diffus après une intervention",
              "Sentiment d'avoir dû choisir entre deux maux",
              "Impression que la règle ne s'applique pas bien à la situation",
              "Questionnement sur le respect de la dignité de la personne",
              "Désaccord entre collègues sur la manière d'agir"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="L'éthique comme compétence professionnelle">
          <PullQuote>
            L'éthique n'est pas un frein à l'action. Elle en est au contraire une condition de qualité, de légitimité et de responsabilité.
          </PullQuote>
          <Texte>L'éthique professionnelle repose sur un ensemble de capacités qui se développent, se travaillent et s'apprennent :</Texte>
          <Liste items={[
            "La capacité à identifier les enjeux éthiques d'une situation",
            "La capacité à expliciter les valeurs en tension",
            "La capacité à argumenter une décision",
            "La capacité à dialoguer avec d'autres points de vue",
            "La capacité à assumer la part d'incertitude inhérente à l'action"
          ]} />
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Valeurs, principes et règles : une hiérarchie qui structure l'action">
          <HighlightBox label="De l'abstrait au concret" couleur="bleu">
            <SchemaEtapes
              titre="Trois niveaux de l'éthique professionnelle"
              etapes={[
                { niveau: "Niveau 1", nom: "Valeurs", definition: "Ce qui compte fondamentalement : dignité, autonomie, justice, solidarité" },
                { niveau: "Niveau 2", nom: "Principes", definition: "Traductions opérationnelles des valeurs : non-malfaisance, bienfaisance, équité" },
                { niveau: "Niveau 3", nom: "Règles", definition: "Applications concrètes dans le contexte institutionnel et professionnel" }
              ]}
            />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>L'éthique n'est ni une morale rigide, ni une opinion personnelle, ni un luxe théorique. Elle est au cœur des pratiques professionnelles dès lors que l'on travaille avec des personnes, dans des contextes complexes, sous contraintes institutionnelles.</Texte>
          <Texte>Ce premier module a posé les bases : comprendre ce qu'est l'éthique, saisir pourquoi elle est incontournable, identifier ce qui fait émerger une question éthique. Les modules suivants approfondiront chaque dimension : la dignité, le care, les grandes théories éthiques, la délibération et la justice sociale.</Texte>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la principale différence entre éthique et morale ?",
            reponses: [
              "La morale concerne les grandes questions philosophiques, l'éthique les petits gestes du quotidien",
              "L'éthique est le registre du sens et du discernement, la morale celui des règles et obligations",
              "Il n'y a pas de différence significative entre les deux termes",
              "L'éthique s'applique aux institutions, la morale aux individus"
            ],
            bonneReponse: 1,
            explication: "La morale renvoie aux normes et obligations (il faut / il ne faut pas). L'éthique commence par la question du sens dans une situation singulière — elle apparaît précisément quand les règles ne suffisent plus ou entrent en contradiction."
          },
          {
            question: "Dans la formule de Ricœur, 'avec et pour les autres' signifie que l'éthique :",
            reponses: [
              "Exige de sacrifier ses propres valeurs pour servir les autres",
              "Ne peut être solitaire et implique de reconnaître l'autre comme un sujet",
              "Dépend uniquement de l'accord des personnes concernées",
              "Consiste à appliquer des règles identiques pour tout le monde"
            ],
            bonneReponse: 1,
            explication: "Cette dimension de la formule de Ricœur souligne que l'éthique engage une relation à autrui. Agir éthiquement implique de reconnaître l'autre comme un sujet porteur d'une histoire, de valeurs, de vulnérabilités et de capacités — et non comme un objet d'intervention."
          },
          {
            question: "Une situation devient une question éthique quand :",
            reponses: [
              "Elle est difficile à gérer sur le plan pratique ou organisationnel",
              "Elle implique une tension entre des valeurs fondamentales sans solution évidente",
              "Elle concerne plusieurs personnes ayant des intérêts différents",
              "Elle n'est pas expressément prévue dans le règlement intérieur"
            ],
            bonneReponse: 1,
            explication: "Une question éthique implique toujours une tension entre valeurs légitimes — et aucune option n'est totalement satisfaisante. Ce n'est pas seulement une question de difficulté pratique ou d'absence de règle."
          },
          {
            question: "Le malaise diffus ressenti après une intervention est :",
            reponses: [
              "Le signe d'une incompétence professionnelle à corriger",
              "Un indicateur qu'une question éthique est en jeu",
              "Une réaction émotionnelle à ne pas prendre en compte professionnellement",
              "La preuve qu'une règle a été transgressée"
            ],
            bonneReponse: 1,
            explication: "Le malaise diffus est souvent l'indicateur d'une question éthique. Il n'est pas nécessairement lié à une faute ou une transgression — il signale simplement que des valeurs importantes ont été mises en tension dans la situation."
          },
          {
            question: "Dans la hiérarchie éthique, les 'principes' correspondent à :",
            reponses: [
              "Les lois et règlements en vigueur dans l'institution",
              "Les traductions opérationnelles des valeurs : non-malfaisance, bienfaisance, équité",
              "Les opinions personnelles des professionnels expérimentés",
              "Les décisions prises lors des réunions d'équipe"
            ],
            bonneReponse: 1,
            explication: "Les principes sont intermédiaires entre les valeurs abstraites (dignité, autonomie, justice) et les règles concrètes. Ils traduisent les valeurs en orientations opérationnelles — comme la non-malfaisance ou la bienfaisance — qui guident l'action sans en dicter mécaniquement le détail."
          },
          {
            question: "L'éthique professionnelle est décrite dans ce module comme :",
            reponses: [
              "Une opinion personnelle que chacun développe librement",
              "Un don inné qu'on a ou qu'on n'a pas",
              "Une compétence qui se développe et se travaille",
              "Un obstacle potentiel à l'efficacité de l'action"
            ],
            bonneReponse: 2,
            explication: "L'éthique professionnelle est une compétence qui comprend la capacité à identifier les enjeux, expliciter les valeurs en tension, argumenter une décision, dialoguer et assumer l'incertitude. Elle se développe avec la pratique, la formation et la délibération collective."
          }
        ]}
        onTermine={function() {}}
      />
    </div>
  )
}
