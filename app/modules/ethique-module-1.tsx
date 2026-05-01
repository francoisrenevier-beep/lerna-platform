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
        titre="Comprendre ce que l'éthique engage"
        sousTitre="Dans les pratiques professionnelles du travail social"
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi l'éthique est au cœur des métiers du terrain ?">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre ce que recouvre le terme éthique et ce qui le distingue de la morale",
              "Identifier pourquoi les questions éthiques sont omniprésentes dans les métiers du social",
              "Saisir en quoi l'éthique n'est ni une opinion personnelle ni une simple application de règles",
              "Reconnaître une situation à enjeu éthique dans sa pratique"
            ]} />
          </ConceptBox>
          <Texte>Les professionnels sont confrontés à des situations complexes où plusieurs valeurs entrent en tension. Ce malaise diffus renvoie à une question éthique : ai-je agi de la bonne manière ? ai-je respecté la personne dans sa dignité ?</Texte>
          <Texte>L'éthique est au cœur de l'action professionnelle, non pas comme un supplément théorique, mais comme une dimension constitutive du métier.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Éthique et morale : une distinction nécessaire">
          <Texte>La morale renvoie aux normes, devoirs, interdits et obligations (il faut / il ne faut pas). Elle s'exprime dans les lois, codes de déontologie, directives institutionnelles.</Texte>
          <Texte>L'éthique ne commence pas par la règle mais par la question du sens : qu'est-ce qu'une bonne action dans cette situation singulière ? La déontologie est l'éthique appliquée à une profession : elle traduit des valeurs en obligations concrètes.</Texte>
          <SchemaEtapes
            titre="De la règle au discernement"
            etapes={[
              { niveau: "Niveau 1", nom: "Morale", definition: "Règles et obligations — il faut / il ne faut pas" },
              { niveau: "Niveau 2", nom: "Déontologie", definition: "Éthique appliquée à la profession — traduction des valeurs en obligations concrètes" },
              { niveau: "Niveau 3", nom: "Éthique", definition: "Sens et discernement — qu'est-ce qu'une bonne action dans cette situation singulière ?" }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="La contribution de Paul Ricœur : une éthique de la vie bonne">
          <PullQuote source="Paul Ricœur">
            La visée de la vie bonne, avec et pour les autres, dans des institutions justes.
          </PullQuote>
          <Texte>Cette formule articule trois dimensions fondamentales de l'éthique :</Texte>
          <HighlightBox label="Les trois dimensions de Ricœur" couleur="bleu">
            <Liste couleur="bleu" items={[
              "La visée d'une vie bonne — l'estime de soi : chacun aspire à une vie qui ait du sens, une vie réussie selon ses propres valeurs",
              "Avec et pour les autres — la sollicitude : l'éthique ne peut pas être solitaire, elle implique la relation à autrui",
              "Dans des institutions justes — le sens de la justice : l'éthique dépasse la relation interpersonnelle pour atteindre la dimension institutionnelle et sociale"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Quand une situation devient-elle une question éthique ?">
          <Texte>Une situation devient éthique quand elle implique une tension entre des valeurs légitimes, quand la règle ne suffit pas, quand la décision engage la dignité d'une personne, quand on ne peut pas agir sans renoncer à quelque chose d'important.</Texte>
          <HighlightBox label="Signaux d'une question éthique" couleur="vert">
            <Liste items={[
              "Malaise diffus après une intervention",
              "Sentiment d'avoir dû choisir entre deux maux",
              "Impression que la règle ne s'applique pas bien",
              "Questionnement sur le respect de la dignité de la personne"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="L'éthique comme compétence professionnelle">
          <PullQuote>
            L'éthique n'est pas un frein à l'action. Elle en est au contraire une condition de qualité, de légitimité et de responsabilité.
          </PullQuote>
          <Texte>L'éthique professionnelle se développe, se travaille, s'apprend. Elle comprend :</Texte>
          <Liste items={[
            "La capacité à identifier les enjeux éthiques d'une situation",
            "La capacité à délibérer et argumenter",
            "La capacité à décider et assumer",
            "La capacité à évaluer après coup"
          ]} />
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Valeurs, principes et règles : une hiérarchie qui structure l'action">
          <HighlightBox label="De l'abstrait au concret" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Valeurs — ce qui compte fondamentalement : dignité, autonomie, justice",
              "Principes — traductions opérationnelles des valeurs : non-malfaisance, bienfaisance, autonomie",
              "Règles — applications concrètes dans un contexte institutionnel"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Mise en pratique" titre="Analyser une situation à enjeu éthique">
          <Texte>Grille d'analyse en 4 questions pour toute situation complexe :</Texte>
          <Liste items={[
            "Quelles valeurs sont en jeu ?",
            "Qui est concerné et quels sont leurs intérêts ?",
            "Quelles options sont possibles ?",
            "Quelle option respecte le mieux la dignité de la personne ?"
          ]} />
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quelle est la principale différence entre éthique et morale ?",
            reponses: [
              "La morale concerne les grandes questions",
              "L'éthique concerne les règles et la morale le sens",
              "L'éthique est le registre du sens et du discernement, la morale celui des règles et obligations",
              "Il n'y a pas de différence"
            ],
            bonneReponse: 2,
            explication: "La morale renvoie aux normes et obligations. L'éthique commence par la question du sens dans une situation singulière."
          },
          {
            question: "Selon Ricœur, l'éthique vise :",
            reponses: [
              "L'application stricte des règles",
              "La vie bonne avec et pour les autres dans des institutions justes",
              "L'obéissance aux supérieurs hiérarchiques",
              "L'efficacité professionnelle"
            ],
            bonneReponse: 1,
            explication: "La formule de Ricœur articule trois dimensions : la vie bonne (estime de soi), avec et pour les autres (sollicitude), dans des institutions justes (justice)."
          },
          {
            question: "Une situation devient une question éthique quand :",
            reponses: [
              "Elle est difficile à gérer",
              "Elle implique une tension entre des valeurs légitimes et engage la dignité d'une personne",
              "Elle concerne plusieurs personnes",
              "Elle n'est pas prévue dans le règlement"
            ],
            bonneReponse: 1,
            explication: "Une question éthique implique toujours une tension entre valeurs légitimes et engage la dignité d'une personne — ce n'est pas seulement une question de difficulté pratique."
          },
          {
            question: "L'éthique professionnelle est :",
            reponses: [
              "Une opinion personnelle qu'on ne peut pas discuter",
              "Un don inné qu'on a ou qu'on n'a pas",
              "Une compétence qui se développe et se travaille",
              "Un obstacle à l'action efficace"
            ],
            bonneReponse: 2,
            explication: "L'éthique professionnelle est une compétence qui comprend la capacité à identifier les enjeux, délibérer, décider et évaluer. Elle se développe avec la pratique et la formation."
          }
        ]}
        onTermine={function() {}}
      />
    </div>
  )
}
