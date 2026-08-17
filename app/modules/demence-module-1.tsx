import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
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
              "Expliquer la différence entre vieillissement normal et démence",
              "Corriger les trois idées reçues les plus fréquentes sur la démence",
              "Distinguer le terme médical «démence» de son usage courant négatif",
            ]} />
          </ConceptBox>

          <Texte>Vous travaillez peut-être dans un établissement médico-social, un foyer de jour, un service à domicile, ou dans une équipe d&apos;accompagnement. Quel que soit votre poste, soignant, accompagnant, agent d&apos;entretien, cuisinier, membre du pool : vous serez tôt ou tard en contact avec une personne touchée par la démence.</Texte>
          <Texte>C&apos;est non seulement vrai dans le cadre professionnel, mais aussi dans la vie personnelle. Avec le vieillissement de la population, la démence n&apos;est plus un phénomène réservé aux unités spécialisées ou aux grandes institutions. Elle entre dans les familles, dans les quartiers, dans les entreprises. La connaître est devenu une compétence de base.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Une réalité massive et croissante">
          <Texte>La démence n&apos;est pas un phénomène marginal : c&apos;est l&apos;un des grands enjeux de santé publique liés au vieillissement de la population. Les chiffres sont parlants.</Texte>

          <HighlightBox label="En Suisse, chiffres 2025 (source : OFSP / Alzheimer Suisse)" couleur="bleu">
            <div className="grid grid-cols-2 gap-4 my-4">
              <div className="bg-[#1B2D5B] text-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#3DBFA0] mb-1">161&apos;100</p>
                <p className="text-sm text-white/70 leading-snug">personnes vivent avec une démence en Suisse</p>
              </div>
              <div className="bg-[#1B2D5B] text-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#3DBFA0] mb-1">34&apos;800</p>
                <p className="text-sm text-white/70 leading-snug">nouveaux cas chaque année</p>
              </div>
              <div className="bg-[#1B2D5B] text-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#3DBFA0] mb-1">toutes les 15&apos;</p>
                <p className="text-sm text-white/70 leading-snug">une nouvelle personne est diagnostiquée en Suisse</p>
              </div>
              <div className="bg-[#1B2D5B] text-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-[#3DBFA0] mb-1">285&apos;700</p>
                <p className="text-sm text-white/70 leading-snug">personnes attendues d&apos;ici 2050, soit presque le double</p>
              </div>
            </div>
            <Liste items={[
              "66 % des personnes atteintes sont des femmes",
              "Plus de 8'100 personnes (près de 5 %) sont touchées avant 65 ans",
              "Pour chaque personne malade, on compte 1 à 3 proches aidants impliqués",
            ]} />
          </HighlightBox>

          <Texte>Pour donner une échelle : 161&apos;100 personnes, c&apos;est l&apos;équivalent de toute la population de la ville de Berne. Et ce chiffre ne cesse de croître.</Texte>

          <HighlightBox label="Dans le monde, source : OMS, 2025" couleur="jaune">
            <Liste items={[
              "En 2021 : 57 millions de personnes vivaient avec une démence dans le monde",
              "Plus de 60 % d'entre elles dans des pays à revenu faible ou intermédiaire, là où les ressources de soins sont les plus limitées",
              "Près de 10 millions de nouveaux cas chaque année à l'échelle mondiale",
              "La démence est la 7e cause de décès dans le monde",
              "C'est l'une des principales causes de dépendance et de perte d'autonomie chez les personnes âgées",
            ]} />
          </HighlightBox>

          <PullQuote>
            Avec le vieillissement de la population, presque tout le monde croisera un jour la démence : dans son entourage, sa famille ou son travail. La connaître, c&apos;est mieux accompagner.
          </PullQuote>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Madame K., 71 ans, résidente depuis 3 ans</p>
              <p className="text-gray-700 text-sm leading-relaxed">Madame K. habite depuis trois ans dans un foyer résidentiel. Elle a toujours été souriante, reconnaissait tout le personnel, participait aux activités. Depuis quelques mois, des changements subtils se sont installés : elle demande parfois à la même personne où se trouve la salle à manger, une salle qu&apos;elle connaît pourtant depuis des années. Elle oublie qu&apos;elle a déjà pris son médicament du matin. L&apos;équipe hésite : est-ce du vieillissement normal, ou quelque chose de plus sérieux ?</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Ce module vous donnera les repères pour</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Comprendre ce que vivent les personnes comme Madame K., distinguer le vieillissement normal de signes qui méritent attention, et savoir comment y répondre avec justesse dans votre rôle.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Une maladie encore mal comprise : et stigmatisée">
          <Texte>Malgré ces chiffres considérables, la démence reste entourée de méconnaissance. L&apos;OMS souligne que cette incompréhension entraîne souvent une <strong>stigmatisation</strong> qui a des conséquences réelles : elle retarde le diagnostic, freine l&apos;accès aux soins, isole les personnes touchées, et complique le quotidien de leurs proches.</Texte>

          <Texte>La stigmatisation, c&apos;est quand quelqu&apos;un est réduit à sa maladie. Quand on parle de lui comme d&apos;«un Alzheimer» plutôt que d&apos;«une personne qui vit avec Alzheimer». Quand on baisse d&apos;emblée les attentes, qu&apos;on parle de lui en sa présence comme s&apos;il n&apos;entendait pas ou ne comprenait rien. Ces attitudes, souvent involontaires, aggravent la souffrance de la personne.</Texte>

          <HighlightBox label="Le mot «démence» : un terme médical mal compris" couleur="bleu">
            <Texte>Dans le langage courant, «démence» est souvent utilisé comme synonyme de folie ou de comportement irrationnel. Ce n&apos;est pas ce que le terme signifie médicalement.</Texte>
            <Texte>Pour l&apos;OMS, <strong>«démence» est un terme générique et médical</strong> qui désigne plusieurs maladies du cerveau caractérisées par un déclin progressif de certaines capacités cognitives. Ce n&apos;est ni de la folie, ni une perte de conscience, ni un état permanent de confusion totale.</Texte>
            <Texte>Comprendre ce que le mot signifie réellement, c&apos;est déjà changer le regard, et changer le regard, c&apos;est changer l&apos;accompagnement.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Trois idées reçues à corriger d'emblée">
          <Texte>Ces idées reçues circulent dans la société et parfois aussi dans les équipes professionnelles. Les corriger est la base d&apos;un accompagnement juste.</Texte>

          <div className="space-y-5 my-4">
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="bg-red-50 border-b border-gray-200 px-5 py-3">
                <p className="text-sm font-bold text-red-700">❌ Idée reçue n°1 : «La démence, c&apos;est juste vieillir.»</p>
              </div>
              <div className="px-5 py-4 space-y-2">
                <p className="text-sm font-semibold text-gray-700">Pourquoi c&apos;est faux :</p>
                <p className="text-sm text-gray-600 leading-relaxed">Le vieillissement normal peut entraîner quelques oublis bénins, chercher un prénom, oublier momentanément où on a posé ses clés. Mais il n&apos;entraîne pas de perte d&apos;autonomie progressive, de désorientation marquée, ni d&apos;incapacité à réaliser des tâches du quotidien.</p>
                <p className="text-sm text-gray-600 leading-relaxed">La démence est une <strong>maladie</strong>, pas une étape inévitable de la vieillesse. Elle touche le cerveau d&apos;une façon pathologique, distincte du vieillissement ordinaire. Beaucoup de personnes très âgées ne développeront jamais de démence.</p>
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3 mt-2">
                  <p className="text-xs font-semibold text-[#15803D]">✓ À retenir : Vieillir, c&apos;est normal. Développer une démence, c&apos;est une maladie. La distinction est fondamentale.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="bg-red-50 border-b border-gray-200 px-5 py-3">
                <p className="text-sm font-bold text-red-700">❌ Idée reçue n°2 : «C&apos;est de la folie, la personne n&apos;est plus elle-même.»</p>
              </div>
              <div className="px-5 py-4 space-y-2">
                <p className="text-sm font-semibold text-gray-700">Pourquoi c&apos;est faux :</p>
                <p className="text-sm text-gray-600 leading-relaxed">La démence est une maladie du cerveau qui détruit progressivement des cellules nerveuses. Ce n&apos;est pas une maladie psychiatrique, et la personne ne «perd pas la tête» au sens péjoratif.</p>
                <p className="text-sm text-gray-600 leading-relaxed">L&apos;OMS est explicite : <strong>la conscience de la personne n&apos;est pas affectée</strong>. Elle continue de ressentir des émotions, de la peur, de la joie, de la tristesse, de l&apos;affection. Elle reste une personne à part entière, avec son histoire, ses goûts, ses attachements. Ces dimensions persistent longtemps, même quand la mémoire ou le langage déclinent.</p>
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3 mt-2">
                  <p className="text-xs font-semibold text-[#15803D]">✓ À retenir : Derrière la maladie, il y a toujours une personne. Avec une histoire, des émotions, une sensibilité.</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="bg-red-50 border-b border-gray-200 px-5 py-3">
                <p className="text-sm font-bold text-red-700">❌ Idée reçue n°3 : «Il n&apos;y a plus rien à faire.»</p>
              </div>
              <div className="px-5 py-4 space-y-2">
                <p className="text-sm font-semibold text-gray-700">Pourquoi c&apos;est faux :</p>
                <p className="text-sm text-gray-600 leading-relaxed">Il est vrai qu&apos;il n&apos;existe pas de traitement curatif permettant de guérir ou d&apos;arrêter la démence. Les traitements médicamenteux existants (mentionnés ici pour la culture générale uniquement) peuvent dans certains cas ralentir la progression ou soulager certains symptômes, mais ils ne guérissent pas.</p>
                <p className="text-sm text-gray-600 leading-relaxed">Mais cela ne signifie pas qu&apos;«il n&apos;y a rien à faire». Bien au contraire : <strong>un accompagnement de qualité améliore réellement et significativement la qualité de vie</strong> de la personne. La façon dont on lui parle, dont on organise son environnement, dont on répond à ses besoins : tout cela fait une différence réelle, mesurable, quotidienne.</p>
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-3 mt-2">
                  <p className="text-xs font-semibold text-[#15803D]">✓ À retenir : L&apos;accompagnement change tout. Votre façon d&apos;être présent·e compte, chaque jour.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="La démence avant 65 ans : une réalité moins connue">
          <Texte>L&apos;une des idées reçues les plus tenaces est que la démence touche uniquement les personnes très âgées. Les chiffres suisses rappellent que c&apos;est faux : <strong>plus de 8&apos;100 personnes</strong>, soit près de 5 % des personnes atteintes, développent une démence avant l&apos;âge de 65 ans.</Texte>

          <HighlightBox label="La démence dite «précoce» : quelques particularités" couleur="jaune">
            <Liste items={[
              "Elle survient souvent en pleine vie active, la personne travaille encore, a des enfants à charge, est au cœur de ses responsabilités familiales et professionnelles",
              "Le diagnostic est souvent retardé : ni les personnes elles-mêmes ni leur entourage ni les médecins n'envisagent d'emblée une démence chez quelqu'un de 50 ou 55 ans",
              "Les formes comme la démence fronto-temporale sont proportionnellement plus représentées dans les cas précoces",
              "L'impact sur la famille, les enfants, les finances est particulièrement brutal",
            ]} />
          </HighlightBox>

          <Texte>Dans votre institution, vous pourriez rencontrer des personnes accueillies pour ce type de démence précoce. Elles n&apos;ont pas le profil du «résident âgé», et c&apos;est précisément là que les idées reçues peuvent devenir des obstacles à un bon accompagnement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "161'100 personnes vivent avec une démence en Suisse (2025), un chiffre qui va presque doubler d'ici 2050",
              "34'800 nouveaux cas par an : une nouvelle personne toutes les 15 minutes",
              "5 % des cas surviennent avant 65 ans, la démence n'est pas qu'une maladie du grand âge",
              "La stigmatisation aggrave les situations : le regard professionnel compte",
              "«Démence» est un terme médical générique : pas un synonyme de folie",
              "Un accompagnement de qualité améliore réellement la qualité de vie, même sans traitement curatif",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Un collègue dit : «La démence, c'est normal à 85 ans, on n'y peut rien.» Quelle réponse est la plus juste ?",
            reponses: [
              "Il a raison : passé 80 ans, c'est inévitable pour la plupart des gens",
              "C'est une idée reçue : la démence est une maladie, pas une étape du vieillissement normal, et un bon accompagnement améliore réellement la qualité de vie",
              "Il a partiellement raison, on ne peut rien faire médicalement, mais l'accompagnement peut aider",
              "Il a raison sur le fait qu'on n'y peut rien, mais tort de dire que c'est normal",
            ],
            bonneReponse: 1,
            explication: "Les deux parties de l'affirmation sont fausses : la démence n'est pas une étape inévitable du vieillissement (beaucoup de personnes très âgées n'en développeront jamais), et l'accompagnement de qualité améliore réellement et significativement la qualité de vie, même s'il n'existe pas de traitement curatif.",
          },
          {
            question: "Monsieur P. a 58 ans. Depuis quelques mois, ses collègues remarquent qu'il oublie des réunions entières, se perd dans le parking de son bureau qu'il connaît depuis 10 ans, et répète plusieurs fois les mêmes questions dans la même conversation. Son médecin généraliste dit d'abord que «c'est le stress». Que retenir de cette situation ?",
            reponses: [
              "Le médecin a probablement raison : à 58 ans, une démence est très peu probable",
              "Ces signes méritent une investigation approfondie : la démence peut survenir avant 65 ans et est souvent diagnostiquée tardivement dans ces cas",
              "C'est clairement de la démence fronto-temporale : ce profil est typique",
              "À cet âge, il s'agit plus vraisemblablement d'un burnout ou d'une dépression",
            ],
            bonneReponse: 1,
            explication: "Près de 5 % des personnes atteintes de démence en Suisse ont moins de 65 ans (plus de 8'100 personnes). Le diagnostic est souvent retardé car ni les patients ni les médecins n'envisagent d'emblée une démence chez quelqu'un de 55-60 ans. Les signes décrits (oublis d'événements entiers, désorientation dans un lieu familier, répétitions) vont au-delà du stress ordinaire et méritent une évaluation spécialisée.",
          },
          {
            question: "Pourquoi la stigmatisation de la démence est-elle un problème médical et pas seulement social ?",
            reponses: [
              "Elle n'est pas vraiment un problème médical, elle affecte l'image de la maladie mais pas les soins reçus",
              "Parce qu'elle retarde le diagnostic et freine l'accès aux soins, ce qui aggrave concrètement l'évolution de la maladie",
              "Parce qu'elle provoque du stress qui accélère le déclin cognitif directement",
              "Elle est surtout un problème pour les proches, pas pour les personnes atteintes elles-mêmes",
            ],
            bonneReponse: 1,
            explication: "L'OMS documente un lien direct : quand la démence est perçue comme honteuse ou comme une «folie», les personnes et leurs proches hésitent à consulter, retardent le diagnostic, et accèdent plus tardivement aux aides disponibles. Ce retard aggrave objectivement la situation. La stigmatisation a donc un impact médical concret, et le regard des professionnels fait partie de la solution.",
          },
          {
            question: "Le terme «démence» dans son sens médical désigne :",
            reponses: [
              "Spécifiquement la maladie d'Alzheimer, qui est la plus fréquente",
              "Un ensemble de symptômes comportementaux liés à des troubles psychiatriques",
              "Un terme générique regroupant plusieurs maladies du cerveau avec des mécanismes distincts",
              "Le stade avancé de toute maladie neurologique dégénérative",
            ],
            bonneReponse: 2,
            explication: "«Démence» est un terme générique, comme «cancer» désigne de nombreuses maladies différentes. Il regroupe la maladie d'Alzheimer, la démence vasculaire, la démence à corps de Lewy, la démence fronto-temporale, et d'autres. Chacune a des mécanismes, une évolution et des caractéristiques propres. Confondre démence et Alzheimer, ou démence et maladie psychiatrique, mène à des accompagnements inadaptés.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
