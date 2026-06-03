import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module2Demence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Démence : sensibilisation générale"
        titre="Qu'est-ce que la démence,"
        titrePart2="concrètement ?"
        sousTitre="Ce qui se passe dans le cerveau, les principales formes, et surtout : ce que la personne vit de l'intérieur."
        duree="30 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Comprendre pour mieux accompagner">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Définir ce qu'est (et ce que n'est pas) la démence",
              "Distinguer le vieillissement normal d'un trouble pathologique",
              "Nommer les quatre principales formes de démence et leurs caractéristiques",
              "Comprendre ce que la personne atteinte vit de l'intérieur",
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Une définition simple">
          <HighlightBox label="Définition — OMS" couleur="bleu">
            <Texte>La démence est un <strong>terme générique</strong> qui regroupe plusieurs maladies du cerveau. Ces maladies détruisent peu à peu les cellules nerveuses, ce qui entraîne un déclin progressif de plusieurs capacités.</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="Les capacités touchées"
            etapes={[
              { niveau: "Mémoire", nom: "Surtout les événements récents au début", definition: "Oublis répétés, incapacité à se souvenir d'une conversation de la veille, perte de fil dans les récits" },
              { niveau: "Orientation", nom: "Dans le temps et l'espace", definition: "Ne plus savoir quel jour, quelle année on est — se perdre dans un lieu pourtant familier" },
              { niveau: "Langage", nom: "Trouver ses mots, suivre une conversation", definition: "Difficultés à trouver des mots simples, à terminer ses phrases, à comprendre ce qu'on lui dit" },
              { niveau: "Raisonnement", nom: "Prise de décision et jugement", definition: "Difficultés à planifier, à gérer des tâches quotidiennes, à évaluer les risques" },
            ]}
            note="L'OMS précise un point essentiel : la conscience de la personne n'est pas affectée. Elle reste une personne, avec ses émotions, son histoire et sa sensibilité — même lorsque la communication devient difficile."
          />

          <HighlightBox label="Repère LEARNA" couleur="jaune">
            <Texte>Reconnaître des signes observables n&apos;est pas poser un diagnostic. Le diagnostic relève toujours du médecin.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Vieillissement normal ou signe d'alerte ?">
          <Texte>Ce tableau aide à comprendre la différence entre les oublis bénins liés à l&apos;âge et les signes qui peuvent évoquer une démence. Il n&apos;est pas un outil de dépistage — tout doute se transmet aux professionnels compétents.</Texte>

          <TableauComparaison
            titre="Distinguer le normal du pathologique"
            colonnes={[
              {
                titre: "Vieillissement normal",
                contenu: [
                  "Oublier parfois un nom, puis s'en souvenir",
                  "Chercher ses mots occasionnellement",
                  "Se tromper de jour, puis se corriger",
                  "Ranger un objet au mauvais endroit par inattention",
                  "Ralentissement général des apprentissages",
                ]
              },
              {
                titre: "Signe pouvant évoquer une démence",
                contenu: [
                  "Oublier des événements récents entiers, de façon répétée",
                  "Perdre le fil d'une conversation, ne plus trouver des mots simples",
                  "Être désorienté·e dans un lieu pourtant familier",
                  "Égarer des objets et ne plus pouvoir reconstituer ses gestes",
                  "Incapacité à réaliser des tâches habituelles et familières",
                ]
              }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Les principales formes — repères">
          <Texte>D&apos;après l&apos;OMS, les frontières entre formes ne sont pas nettes et les <strong>formes mixtes sont fréquentes</strong>. Ces repères aident à comprendre sans prétendre à l&apos;exhaustivité médicale.</Texte>

          <div className="space-y-4 my-6">
            <div className="border border-[#BFDBFE] bg-[#EFF6FF] rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-2">Maladie d&apos;Alzheimer — la plus fréquente</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>60 à 70 % des cas</strong> (environ 60 % selon l&apos;OFSP). Débute souvent par des troubles de la mémoire récente. C&apos;est la forme la plus connue et la plus répandue.</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Démence vasculaire</p>
              <p className="text-gray-700 text-sm leading-relaxed">Liée à des problèmes d&apos;irrigation du cerveau, par exemple après un accident vasculaire cérébral. Peut survenir de façon soudaine ou progressive.</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Démence à corps de Lewy</p>
              <p className="text-gray-700 text-sm leading-relaxed">Associée notamment à des fluctuations de la vigilance, des troubles moteurs proches de Parkinson, et parfois des hallucinations visuelles.</p>
            </div>
            <div className="border border-gray-200 bg-gray-50 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">Démence fronto-temporale</p>
              <p className="text-gray-700 text-sm leading-relaxed">Touche surtout le comportement et le langage. Peut débuter plus jeune (50–65 ans). Les troubles du comportement sont souvent au premier plan avant les troubles de mémoire.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Ce que la personne vit de l'intérieur">
          <Texte>Comprendre l&apos;expérience vécue change la manière d&apos;accompagner. Derrière les comportements observés, il y a une personne qui tente de naviguer dans un monde devenu imprévisible.</Texte>

          <HighlightBox label="Le monde vu de l'intérieur" couleur="bleu">
            <Liste items={[
              "Un monde qui devient imprévisible : ne plus reconnaître un lieu, un visage, ne plus savoir quel moment de la journée on est",
              "Des émotions fortes et réelles : anxiété, tristesse, colère face aux pertes ressenties — les émotions restent intactes même quand les mots manquent",
              "Un besoin constant de sécurité et de repères",
              "L'OMS note que les changements d'humeur précèdent parfois les troubles de mémoire",
            ]} />
          </HighlightBox>

          <PullQuote>
            Derrière chaque comportement, il y a une personne qui cherche à se repérer et à se sentir en sécurité.
          </PullQuote>

          <Texte>La personne atteinte de démence ne perd pas sa personnalité d&apos;un coup. Elle reste elle-même — ses goûts, ses émotions, ses réactions affectives persistent longtemps, même lorsque les capacités cognitives déclinent. C&apos;est cette continuité de la personne que l&apos;accompagnement doit s&apos;attacher à reconnaître et à nourrir.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "La démence est un terme générique regroupant plusieurs maladies du cerveau — pas une seule maladie",
              "La conscience de la personne n'est pas perdue : elle reste une personne avec ses émotions",
              "Alzheimer représente 60–70 % des cas — les formes mixtes sont fréquentes",
              "Reconnaître des signes n'est pas diagnostiquer — c'est observer et transmettre",
              "Comprendre ce que la personne vit de l'intérieur change radicalement l'accompagnement",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "La démence est :",
            reponses: [
              "Une seule maladie précise du cerveau",
              "Un terme générique regroupant plusieurs maladies du cerveau",
              "Une maladie mentale causée par le stress",
              "Un stade avancé du vieillissement normal",
            ],
            bonneReponse: 1,
            explication: "La démence est un terme générique (utilisé par l'OMS) qui regroupe plusieurs maladies du cerveau différentes — Alzheimer, vasculaire, corps de Lewy, fronto-temporale, etc. Ces maladies partagent des symptômes communs mais ont des mécanismes et des évolutions différentes.",
          },
          {
            question: "Quelle est la forme de démence la plus fréquente ?",
            reponses: [
              "La démence vasculaire",
              "La maladie d'Alzheimer",
              "La démence à corps de Lewy",
              "La démence fronto-temporale",
            ],
            bonneReponse: 1,
            explication: "La maladie d'Alzheimer représente 60 à 70 % des cas de démence selon l'OMS (environ 60 % selon l'OFSP en Suisse). Elle débute souvent par des troubles de la mémoire récente et progresse progressivement.",
          },
          {
            question: "Chez une personne atteinte de démence, la conscience est totalement perdue.",
            reponses: [
              "Vrai — la personne n'est plus consciente de ce qui l'entoure",
              "Faux — la conscience n'est pas affectée, la personne reste elle-même avec ses émotions",
              "Vrai — c'est ce qui distingue la démence des autres maladies",
              "Faux — mais la personne n'a plus d'émotions",
            ],
            bonneReponse: 1,
            explication: "Faux. L'OMS précise que la conscience de la personne n'est pas affectée par la démence. La personne reste une personne avec ses émotions, son histoire et sa sensibilité — même lorsque la mémoire, le langage ou le raisonnement déclinent. Les émotions persistent souvent longtemps.",
          },
          {
            question: "Reconnaître des signes observables de démence équivaut à poser un diagnostic.",
            reponses: [
              "Vrai — les professionnels de terrain peuvent diagnostiquer",
              "Faux — le diagnostic relève toujours du médecin",
              "Vrai — après une formation, on peut diagnostiquer",
              "Faux — les signes observables ne sont jamais fiables",
            ],
            bonneReponse: 1,
            explication: "Faux. Reconnaître des signes observables est une compétence de l'accompagnant — c'est observer et transmettre. Le diagnostic, lui, relève strictement du médecin. Cette distinction est fondamentale : elle définit le rôle de chaque professionnel.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
