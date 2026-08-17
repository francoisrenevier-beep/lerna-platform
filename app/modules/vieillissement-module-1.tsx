import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module1Vieillissement({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Handicap et vieillissement"
        titre="Comprendre le vieillissement"
        titrePart2="des personnes en situation de handicap"
        sousTitre="Bases définitionnelles, données démographiques et mécanismes du vieillissement prématuré selon les profils."
        duree="45 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Une révolution silencieuse qui transforme les institutions">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Définir précisément ce qu'est une personne en situation de handicap vieillissante",
              "Distinguer les deux trajectoires 'ageing with disability' et 'disability into ageing'",
              "Comprendre les données démographiques qui transforment les institutions",
              "Expliquer le mécanisme de vieillissement prématuré et la notion de réserve fonctionnelle",
              "Identifier les profils spécifiques par type de handicap"
            ]} />
          </ConceptBox>
          <Texte>Pendant longtemps, le vieillissement des personnes en situation de handicap a été considéré comme un phénomène marginal. Les personnes avec une déficience intellectuelle sévère mouraient jeunes. Celles avec un polyhandicap n'atteignaient que rarement l'âge adulte. Cette réalité a profondément changé en l'espace de deux générations.</Texte>
          <Texte>Aujourd'hui, les institutions socio-éducatives accompagnent des personnes de 60, 65, voire 70 ans, qui vivent dans la même structure depuis 30 ou 40 ans. Ces personnes ont vieilli "en place", et les équipes qui les accompagnent ont parfois du mal à nommer ce qu'elles observent, à comprendre ce qui se passe, et à savoir comment adapter leur pratique.</Texte>
          <PullQuote source="René Lenoir, médecin, 1976">
            Les personnes avec des déficiences intellectuelles sévères mouraient presque toutes à l'adolescence. Elles atteignent maintenant l'âge mûr et nous aurons dans dix ou quinze ans de grands handicapés du troisième âge.
          </PullQuote>
          <Texte>Ce pronostic, formulé en 1976, s'est pleinement réalisé. Cette "révolution discrète", parce qu'elle ne fait pas la une des journaux, est néanmoins en train de transformer profondément le paysage des institutions sociales en Suisse et dans les pays voisins.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Définitions et terminologie : de quoi parle-t-on exactement ?">
          <HighlightBox label="Définition fondamentale" couleur="bleu">
            <Texte>Une <strong>personne en situation de handicap vieillissante</strong> est une personne dont le handicap, quelle qu'en soit la nature ou l'origine, a précédé les effets du vieillissement. Autrement dit : la personne a d'abord vécu avec son handicap, puis le vieillissement est venu s'y superposer.</Texte>
          </HighlightBox>
          <Texte>Cette définition peut sembler évidente, mais elle a des implications pratiques importantes. Elle signifie que l'on ne parle pas de personnes âgées qui développent un handicap en vieillissant, mais de personnes qui ont grandi et vécu avec leur handicap et qui commencent maintenant à ressentir les effets de l'âge en plus.</Texte>

          <TableauComparaison
            titre="Deux trajectoires à bien distinguer"
            colonnes={[
              {
                titre: "Ageing with disability",
                contenu: [
                  "Vieillir avec un handicap préexistant",
                  "Personne a construit sa vie adulte avec son handicap",
                  "A développé des stratégies d'adaptation propres",
                  "Situation des institutions socio-éducatives suisses",
                  "Seuil d'alerte : dès 45-50 ans"
                ]
              },
              {
                titre: "Disability into ageing",
                contenu: [
                  "Acquérir un handicap en vieillissant",
                  "Personne sans antécédent de handicap",
                  "AVC, démence sénile, fracture invalidante...",
                  "Réalité des EMS (établissements médico-sociaux)",
                  "Seuil : généralement après 65-70 ans"
                ]
              }
            ]}
          />

          <HighlightBox label="Pourquoi le seuil de 45-50 ans ?" couleur="jaune">
            <Texte>Les personnes vivant depuis des années avec un handicap neurologique ont souvent consommé davantage leurs ressources physiologiques. Leur corps a dû compenser en permanence des dysfonctionnements, s'adapter à des postures contraignantes, faire face à des traitements répétés, gérer une fatigue chronique. Ce surcoût biologique accélère l'apparition des effets de l'âge.</Texte>
            <Texte><strong>Ce seuil est un repère de vigilance, pas un diagnostic automatique.</strong></Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Données démographiques : une transformation profonde">
          <Texte>Les données disponibles en France et en Belgique, dont les systèmes sont comparables à la Suisse, montrent des évolutions spectaculaires :</Texte>

          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">+30%</p>
              <p className="text-sm text-white/70 leading-snug">de personnes de plus de 50 ans en institution (2010–2014)</p>
            </div>
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">+64%</p>
              <p className="text-sm text-white/70 leading-snug">de personnes de plus de 60 ans en institution sur la même période</p>
            </div>
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">+6%</p>
              <p className="text-sm text-white/70 leading-snug">seulement pour la population générale dans la même tranche d'âge</p>
            </div>
          </div>

          <Texte>Ces chiffres reflètent une réalité que les professionnels suisses reconnaissent immédiatement : dans de nombreuses institutions, la moyenne d'âge des résidents a considérablement augmenté en l'espace de 10 à 15 ans.</Texte>

          <HighlightBox label="3 facteurs expliquent cet allongement de l'espérance de vie" couleur="vert">
            <Liste items={[
              "L'amélioration des soins médicaux : meilleures prise en charge de l'épilepsie, nutrition entérale, gestion de la neurovessie",
              "Le diagnostic plus précoce et le suivi structuré : surveillance systématique des comorbidités dès l'enfance",
              "La structuration des accompagnements : prise en charge éducative, thérapeutique et sociale cohérente depuis l'enfance"
            ]} />
          </HighlightBox>

          <HighlightBox label="Tension structurelle en Suisse" couleur="jaune">
            <Texte>En Suisse, l'Assurance Invalidité (AI) cesse ses prestations à 65 ans, âge auquel les personnes basculent vers l'AVS. Cette transition administrative ne correspond pas à la réalité vécue : les personnes restent dans les mêmes institutions avec des besoins qui augmentent, alors que les modalités de financement changent radicalement.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Le vieillissement prématuré : comprendre les mécanismes">
          <HighlightBox label="Concept clé" couleur="bleu">
            <Texte>La <strong>réserve fonctionnelle</strong> désigne la capacité de notre organisme à compenser les défaillances au fil de la vie. À la naissance, chaque système (cardiaque, neurologique, musculaire, rénal) dispose d'une certaine réserve. Avec l'âge, cette réserve diminue naturellement. Chez les personnes en situation de handicap, elle peut être plus faible dès le départ, et se consommer plus rapidement.</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="L'effet additif : cascade de dépendance"
            etapes={[
              { niveau: "Point de départ", nom: "Réserve réduite", definition: "Handicap initial : réserve fonctionnelle déjà plus faible" },
              { niveau: "Processus", nom: "Double charge", definition: "Limitations du handicap + effets naturels du vieillissement s'additionnent" },
              { niveau: "Résultat", nom: "Amplification", definition: "Déclin plus rapide et plus intense que dans la population générale" }
            ]}
            note="Exemple : paralysie cérébrale + sarcopénie → perte de la marche accélérée, douleurs, dépression"
          />

          <Texte>Comprendre cet effet additif permet de ne pas être surpris par la rapidité de certaines évolutions, et d'anticiper les besoins qui vont émerger.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Portraits spécifiques : quelles populations, quels enjeux ?">
          <Texte>Le vieillissement prématuré ne se manifeste pas de la même façon selon le type de handicap. Voici les profils les plus fréquemment rencontrés dans les institutions socio-éducatives suisses.</Texte>

          <TableauComparaison
            titre="Profils de vieillissement selon le type de handicap"
            colonnes={[
              {
                titre: "Type de handicap",
                contenu: [
                  "Trisomie 21",
                  "Paralysie cérébrale",
                  "Lésions médullaires",
                  "Polyhandicap",
                  "Traumatisme crânien"
                ]
              },
              {
                titre: "Enjeu principal",
                contenu: [
                  "Alzheimer précoce (>80% après 60 ans)",
                  "Dégradation motrice dès 35-45 ans",
                  "Complications secondaires cumulées",
                  "Fragilité sanitaire croissante",
                  "Pathologies neurodégénératives"
                ]
              },
              {
                titre: "Signal d'alerte",
                contenu: [
                  "Bilan cognitif adapté dès 40-45 ans",
                  "Douleurs articulaires, fatigue accrue",
                  "Infections urinaires, apnées du sommeil",
                  "Troubles déglutition, crises épileptiques",
                  "Déclin cognitif à ne pas attribuer aux séquelles"
                ]
              }
            ]}
          />

          <HighlightBox label="Focus trisomie 21 : une vigilance dès 40 ans" couleur="vert">
            <Texte>Presque toutes les personnes trisomiques développent après 40 ans des modifications anatomiques caractéristiques de la maladie d'Alzheimer. La prévalence clinique dépasse 80% après 60 ans. Il est recommandé d'établir un <strong>bilan cognitif de référence dès 40 ans</strong> avec un outil adapté (CAMCOG-DS en français) et de le renouveler régulièrement.</Texte>
          </HighlightBox>

          <PullQuote>
            La connaissance du profil de la personne que vous accompagnez est un outil de soin en soi.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Ce premier module pose les bases indispensables : le vieillissement des personnes en situation de handicap est une réalité démographique majeure, en pleine accélération. Il se caractérise par des mécanismes biologiques spécifiques (réserve fonctionnelle réduite, effet additif) et des profils différenciés selon le type de handicap.</Texte>
          <Texte>Les institutions qui s'en sortent le mieux sont celles qui <strong>anticipent</strong> : en analysant leur pyramide des âges, en formant leurs équipes, en adaptant leurs espaces et leurs partenariats avant que les situations ne deviennent urgentes.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "La vigilance commence dès 45-50 ans, parfois 40 ans pour la trisomie 21",
              "Observer n'est pas diagnostiquer : le médecin valide, le professionnel de terrain détecte",
              "Deux trajectoires distinctes : ageing with disability ≠ disability into ageing",
              "L'effet additif explique la rapidité et l'intensité des évolutions observées"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Qu'est-ce qu'une personne en situation de handicap vieillissante ?",
            reponses: [
              "Une personne âgée qui développe un handicap suite à une maladie dégénérative",
              "Une personne dont le handicap a précédé les effets du vieillissement, et qui subit maintenant les deux",
              "Toute personne en situation de handicap de plus de 65 ans",
              "Une personne âgée placée dans une institution spécialisée handicap"
            ],
            bonneReponse: 1,
            explication: "'Ageing with disability' désigne une personne qui a d'abord vécu avec son handicap, puis qui subit les effets du vieillissement en plus. C'est fondamentalement différent d'une personne âgée qui acquiert un handicap (disability into ageing)."
          },
          {
            question: "Pourquoi le seuil d'alerte est-il fixé à 45-50 ans pour les personnes en situation de handicap ?",
            reponses: [
              "Parce que c'est l'âge légal de la retraite anticipée en Suisse",
              "Parce que les études montrent que les maladies chroniques apparaissent à cet âge",
              "Parce que la mobilisation prolongée des ressources physiologiques consomme la réserve fonctionnelle plus vite",
              "Parce que c'est l'âge à partir duquel les prestations AI sont révisées"
            ],
            bonneReponse: 2,
            explication: "Les personnes en situation de handicap ont souvent une réserve fonctionnelle plus faible dès le départ, et la compensent en permanence. Cette mobilisation accrue épuise la réserve plus rapidement, faisant apparaître les effets de l'âge plus tôt que dans la population générale."
          },
          {
            question: "Qu'est-ce que l'effet additif dans le vieillissement des personnes handicapées ?",
            reponses: [
              "Le fait que plusieurs médicaments s'accumulent avec l'âge",
              "L'interaction entre les déficiences liées au handicap initial et les limitations liées à l'âge, qui s'amplifient mutuellement",
              "La somme des besoins d'accompagnement de plusieurs résidents vieillissants",
              "Le cumul de plusieurs handicaps acquis progressivement"
            ],
            bonneReponse: 1,
            explication: "L'effet additif signifie que les déficiences préexistantes et les limitations liées à l'âge ne s'additionnent pas simplement, elles interagissent et s'amplifient mutuellement. Exemple : paralysie cérébrale + sarcopénie = perte de la marche accélérée, douleurs chroniques, dépression."
          },
          {
            question: "Quel est le risque spécifique majeur pour les personnes avec trisomie 21 vieillissantes ?",
            reponses: [
              "Un risque élevé d'insuffisance rénale chronique",
              "Une dégradation motrice accélérée à partir de 35 ans",
              "Un risque très élevé de développer une maladie d'Alzheimer précoce",
              "Des complications cardiovasculaires importantes"
            ],
            bonneReponse: 2,
            explication: "Les personnes avec trisomie 21 présentent une surexpression du gène de la protéine amyloïde sur le chromosome 21. La prévalence de la maladie d'Alzheimer dépasse 80% après 60 ans, avec des signes cliniques pouvant apparaître dès 45-50 ans. Un bilan cognitif adapté est recommandé dès 40 ans."
          },
          {
            question: "La transition AI → AVS à 65 ans pose un problème majeur dans les institutions suisses car :",
            reponses: [
              "Les personnes doivent changer d'institution obligatoirement à 65 ans",
              "Le financement change alors que la personne reste dans la même institution avec des besoins qui augmentent",
              "Les équipes ne sont plus formées pour accompagner les personnes âgées",
              "Les EMS refusent systématiquement les personnes en situation de handicap"
            ],
            bonneReponse: 1,
            explication: "Cette transition administrative ne correspond pas à la réalité vécue : les personnes restent dans les mêmes institutions, leurs besoins augmentent, mais les modalités de financement changent radicalement. C'est l'une des tensions structurelles les plus importantes du secteur suisse."
          },
          {
            question: "Quelle est la principale caractéristique du vieillissement des personnes avec paralysie cérébrale ?",
            reponses: [
              "Un risque élevé d'Alzheimer précoce similaire à la trisomie 21",
              "Une dégradation progressive des capacités motrices à partir de 40 ans, liée aux douleurs et à la fatigue",
              "Des complications respiratoires liées aux fausses routes",
              "Un isolement social progressif dû à la perte de communication"
            ],
            bonneReponse: 1,
            explication: "Les études norvégiennes montrent qu'une majorité de personnes avec paralysie cérébrale ambulantes constatent une dégradation de leur marche entre 35 et 45 ans, liée à une combinaison de douleurs articulaires, de spasticité accrue et de fatigue chronique. Ce n'est pas une aggravation du handicap initial mais un effet du vieillissement prématuré."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
