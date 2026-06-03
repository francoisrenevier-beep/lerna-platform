import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module1Demence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Démence : sensibilisation générale"
        titre="La démence en chiffres"
        titrePart2="et en réalité"
        sousTitre="Une réalité massive et croissante, encore entourée de méconnaissance et de tabous. Comprendre l'ampleur du phénomène, c'est la première étape pour bien accompagner."
        duree="30 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi tout le monde sera concerné">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Situer l'ampleur de la démence en Suisse et dans le monde à l'aide de chiffres clés",
              "Comprendre pourquoi presque tout le monde croisera un jour la démence",
              "Corriger les trois idées reçues les plus fréquentes sur la démence",
              "Distinguer le terme médical «démence» de son usage courant négatif",
            ]} />
          </ConceptBox>
          <Texte>La démence n&apos;est pas un phénomène marginal : c&apos;est l&apos;un des grands enjeux de santé du vieillissement de la population. Que vous travailliez dans les soins, l&apos;accompagnement, l&apos;entretien ou la logistique, vous serez un jour en contact avec une personne concernée — directement ou dans son entourage.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Une réalité massive et croissante">
          <HighlightBox label="En Suisse — chiffres 2025 (source : OFSP / Alzheimer Suisse)" couleur="bleu">
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="bg-[#1B2D5B] text-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#3DBFA0] mb-1">161&apos;100</p>
                <p className="text-sm text-white/70 leading-snug">personnes vivent avec une démence en Suisse</p>
              </div>
              <div className="bg-[#1B2D5B] text-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#3DBFA0] mb-1">34&apos;800</p>
                <p className="text-sm text-white/70 leading-snug">nouveaux cas chaque année — soit 1 toutes les 15 minutes</p>
              </div>
              <div className="bg-[#1B2D5B] text-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#3DBFA0] mb-1">66 %</p>
                <p className="text-sm text-white/70 leading-snug">des personnes atteintes sont des femmes</p>
              </div>
              <div className="bg-[#1B2D5B] text-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#3DBFA0] mb-1">285&apos;700</p>
                <p className="text-sm text-white/70 leading-snug">personnes attendues d&apos;ici 2050 en Suisse</p>
              </div>
            </div>
            <Texte>Plus de <strong>8&apos;100 personnes</strong> (près de 5 %) sont touchées <strong>avant 65 ans</strong> : la démence n&apos;est donc pas exclusivement une maladie du grand âge. Et pour chaque personne malade, on compte <strong>un à trois proches aidants</strong> impliqués.</Texte>
          </HighlightBox>

          <HighlightBox label="Dans le monde — source : OMS, 2025" couleur="jaune">
            <Liste items={[
              "En 2021 : 57 millions de personnes vivaient avec une démence, dont plus de 60 % dans des pays à revenu faible ou intermédiaire",
              "Près de 10 millions de nouveaux cas chaque année",
              "La démence est la 7e cause de décès dans le monde et l'une des principales causes de dépendance chez les personnes âgées",
            ]} />
          </HighlightBox>

          <HighlightBox label="À retenir" couleur="vert">
            <Texte>Avec le vieillissement de la population, presque tout le monde croisera un jour la démence — dans son entourage, sa famille ou son travail. La connaître, c&apos;est mieux accompagner.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Une maladie encore mal comprise">
          <Texte>La démence reste entourée de méconnaissance et de tabous. L&apos;OMS souligne que cette incompréhension entraîne souvent une <strong>stigmatisation</strong> qui freine le diagnostic et l&apos;accès aux soins.</Texte>
          <Texte>Le mot «démence» lui-même est, dans le langage courant, chargé négativement et associé à tort à la «folie». Il s&apos;agit en réalité d&apos;un <strong>terme médical générique</strong> utilisé par l&apos;OMS pour désigner plusieurs maladies du cerveau qui se manifestent par des symptômes proches.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Trois idées reçues à corriger d'emblée">
          <div className="space-y-4">
            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-5">
              <p className="text-sm font-semibold text-red-700 mb-1">❌ «La démence, c&apos;est juste vieillir.»</p>
              <p className="text-sm text-gray-700">Le vieillissement normal n&apos;entraîne pas de perte d&apos;autonomie progressive ni de désorientation marquée. La démence est une maladie, pas une étape normale de la vieillesse.</p>
            </div>
            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-5">
              <p className="text-sm font-semibold text-red-700 mb-1">❌ «C&apos;est de la folie / une maladie mentale.»</p>
              <p className="text-sm text-gray-700">Ce sont des maladies du cerveau qui détruisent progressivement des cellules nerveuses. La conscience de la personne n&apos;est pas «perdue» — elle reste une personne à part entière avec ses émotions et son histoire.</p>
            </div>
            <div className="border-l-4 border-red-300 bg-red-50 rounded-r-xl p-5">
              <p className="text-sm font-semibold text-red-700 mb-1">❌ «Il n&apos;y a plus rien à faire.»</p>
              <p className="text-sm text-gray-700">S&apos;il n&apos;existe pas de traitement curatif, un bon accompagnement améliore réellement la qualité de vie et le bien-être de la personne.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "161'100 personnes vivent avec une démence en Suisse (2025) — un chiffre en forte hausse",
              "La démence touche aussi des personnes de moins de 65 ans (5 % des cas)",
              "Le terme «démence» est médical et générique — pas un synonyme de folie",
              "La stigmatisation retarde le diagnostic : notre regard compte",
              "Un bon accompagnement améliore la qualité de vie, même sans traitement curatif",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Environ combien de personnes vivent avec une démence en Suisse (2025) ?",
            reponses: [
              "Environ 50'000",
              "Environ 161'100",
              "Environ 500'000",
              "Environ 1 million",
            ],
            bonneReponse: 1,
            explication: "Selon l'OFSP et Alzheimer Suisse (2025), environ 161'100 personnes vivent avec une démence en Suisse. Ce chiffre devrait presque doubler d'ici 2050 avec le vieillissement de la population.",
          },
          {
            question: "La démence touche uniquement les personnes de plus de 65 ans.",
            reponses: [
              "Vrai — la démence est exclusivement liée au grand âge",
              "Faux — près de 5 % des personnes atteintes ont moins de 65 ans",
              "Vrai — avant 65 ans, ce sont d'autres maladies",
              "Faux — la moitié des cas survient avant 65 ans",
            ],
            bonneReponse: 1,
            explication: "Faux. Plus de 8'100 personnes en Suisse sont touchées avant 65 ans, ce qui représente près de 5 % des cas. La démence n'est donc pas exclusivement une maladie du grand âge.",
          },
          {
            question: "Quelle proportion des personnes atteintes de démence sont des femmes en Suisse ?",
            reponses: [
              "33 %",
              "50 %",
              "66 %",
              "80 %",
            ],
            bonneReponse: 2,
            explication: "Selon Alzheimer Suisse (2025), 66 % des personnes atteintes de démence en Suisse sont des femmes. Cette surreprésentation s'explique en partie par l'espérance de vie plus longue des femmes.",
          },
          {
            question: "La démence est une étape normale du vieillissement.",
            reponses: [
              "Vrai — tout le monde développera une démence avec l'âge",
              "Faux — c'est une maladie du cerveau, distincte du vieillissement normal",
              "Vrai — après 80 ans, c'est inévitable",
              "Faux — la démence n'a aucun lien avec l'âge",
            ],
            bonneReponse: 1,
            explication: "Faux. La démence est une maladie, pas une étape normale de la vieillesse. Le vieillissement normal peut entraîner quelques oublis bénins, mais pas la perte d'autonomie progressive et la désorientation caractéristiques de la démence.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
