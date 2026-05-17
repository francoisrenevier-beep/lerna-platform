import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module1VieillissementBases({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Accompagner le vieillissement en institution — Les bases"
        titre="Comprendre le vieillissement"
        titrePart2="des personnes en situation de handicap"
        sousTitre="Bases définitionnelles, données démographiques et mécanismes du vieillissement prématuré selon les profils."
        duree="30 minutes"
        niveau="Sensibilisation"
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
          <Texte>Pendant longtemps, le vieillissement des personnes en situation de handicap a été considéré comme un phénomène marginal. Les personnes avec une déficience intellectuelle sévère mouraient jeunes. Celles avec un polyhandicap n&apos;atteignaient que rarement l&apos;âge adulte. Cette réalité a profondément changé en l&apos;espace de deux générations.</Texte>
          <Texte>Aujourd&apos;hui, les institutions socio-éducatives accompagnent des personnes de 60, 65, voire 70 ans, qui vivent dans la même structure depuis 30 ou 40 ans. Ces personnes ont vieilli &quot;en place&quot;, et les équipes qui les accompagnent ont parfois du mal à nommer ce qu&apos;elles observent, à comprendre ce qui se passe, et à savoir comment adapter leur pratique.</Texte>
          <PullQuote source="René Lenoir, médecin, 1976">
            Les personnes avec des déficiences intellectuelles sévères mouraient presque toutes à l&apos;adolescence. Elles atteignent maintenant l&apos;âge mûr et nous aurons dans dix ou quinze ans de grands handicapés du troisième âge.
          </PullQuote>
          <Texte>Ce pronostic, formulé en 1976, s&apos;est pleinement réalisé. Cette &quot;révolution discrète&quot; — parce qu&apos;elle ne fait pas la une des journaux — est néanmoins en train de transformer profondément le paysage des institutions sociales en Suisse et dans les pays voisins.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Définitions et terminologie : de quoi parle-t-on exactement ?">
          <HighlightBox label="Définition fondamentale" couleur="bleu">
            <Texte>Une <strong>personne en situation de handicap vieillissante</strong> est une personne dont le handicap — quelle qu&apos;en soit la nature ou l&apos;origine — a précédé les effets du vieillissement. Autrement dit : la personne a d&apos;abord vécu avec son handicap, puis le vieillissement est venu s&apos;y superposer.</Texte>
          </HighlightBox>
          <Texte>Cette définition peut sembler évidente, mais elle a des implications pratiques importantes. Elle signifie que l&apos;on ne parle pas de personnes âgées qui développent un handicap en vieillissant, mais de personnes qui ont grandi et vécu avec leur handicap et qui commencent maintenant à ressentir les effets de l&apos;âge en plus.</Texte>

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
            <Texte>Les personnes vivant depuis des années avec un handicap neurologique ont souvent consommé davantage leurs ressources physiologiques. Leur corps a dû compenser en permanence des dysfonctionnements, s&apos;adapter à des postures contraignantes, faire face à des traitements répétés, gérer une fatigue chronique. Ce surcoût biologique accélère l&apos;apparition des effets de l&apos;âge.</Texte>
            <Texte><strong>Ce seuil est un repère de vigilance, pas un diagnostic automatique.</strong></Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Données démographiques : une transformation profonde">
          <Texte>Les données disponibles en France et en Belgique — dont les systèmes sont comparables à la Suisse — montrent des évolutions spectaculaires :</Texte>

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
              <p className="text-sm text-white/70 leading-snug">seulement pour la population générale dans la même tranche d&apos;âge</p>
            </div>
          </div>

          <Texte>Ces chiffres reflètent une réalité que les professionnels suisses reconnaissent immédiatement : dans de nombreuses institutions, la moyenne d&apos;âge des résidents a considérablement augmenté en l&apos;espace de 10 à 15 ans.</Texte>

          <HighlightBox label="3 facteurs expliquent cet allongement de l'espérance de vie" couleur="vert">
            <Liste items={[
              "L'amélioration des soins médicaux : meilleures prise en charge de l'épilepsie, nutrition entérale, gestion de la neurovessie",
              "Le diagnostic plus précoce et le suivi structuré : surveillance systématique des comorbidités dès l'enfance",
              "La structuration des accompagnements : prise en charge éducative, thérapeutique et sociale cohérente depuis l'enfance"
            ]} />
          </HighlightBox>

          <HighlightBox label="L'AI : l'assurance du handicap jusqu'à 65 ans" couleur="bleu">
            <Texte><strong>L&apos;Assurance Invalidité (AI)</strong> est l&apos;assurance sociale fédérale qui accompagne les personnes en situation de handicap de la naissance à 65 ans. Elle contribue au financement des séjours en institution socio-éducative, de certaines thérapies (physiothérapie, ergothérapie, logopédie), des aides techniques, et verse une rente aux personnes dont le handicap les empêche de travailler. Sa logique est celle de la <strong>réhabilitation et du maintien des capacités</strong> : aider la personne à développer son autonomie et à trouver une place dans la société, quelles que soient ses déficiences.</Texte>
            <Texte>L&apos;AI est gérée par les Offices AI cantonaux (OAI), qui évaluent les droits individuels et statuent sur les prestations. Elle est financée par les cotisations salariales et la Confédération. Pour les institutions socio-éducatives, elle représente une source de financement majeure, via des forfaits journaliers et des contributions aux coûts d&apos;encadrement.</Texte>
          </HighlightBox>

          <HighlightBox label="L'AVS : le système de retraite universel dès 65 ans" couleur="jaune">
            <Texte><strong>L&apos;Assurance Vieillesse et Survivants (AVS)</strong> est le système de retraite universel suisse. À 65 ans, chaque personne bascule automatiquement de l&apos;AI vers l&apos;AVS — qu&apos;elle ait un handicap ou non. Elle perçoit une rente AVS calculée sur la base de ses cotisations passées, souvent minimale pour les personnes qui n&apos;ont pas ou peu travaillé. Des prestations complémentaires (PC AVS/AI) peuvent compléter cette rente si les revenus sont insuffisants pour couvrir les besoins vitaux.</Texte>
            <Texte>La logique de l&apos;AVS est fondamentalement différente de celle de l&apos;AI : elle est conçue pour <strong>maintenir le revenu à la retraite</strong>, pas pour financer un accompagnement spécialisé et intensif. Elle n&apos;a pas été pensée pour des personnes vivant depuis des décennies dans une institution socio-éducative avec des besoins croissants.</Texte>
          </HighlightBox>

          <Texte>Le nœud du problème est là : à 65 ans, les besoins d&apos;une personne en situation de handicap vivant en institution n&apos;ont pas diminué — souvent, ils ont augmenté. Mais le cadre de financement change radicalement. L&apos;institution doit composer avec de nouvelles modalités de prise en charge, des interlocuteurs différents et, dans certains cantons, des montants qui ne correspondent pas aux mêmes réalités de terrain.</Texte>
          <Texte>Pour la personne accompagnée, cette transition passe parfois inaperçue au quotidien. Parfois, elle entraîne des changements concrets dans sa participation aux frais de séjour ou dans certaines prestations disponibles — sans que personne ne lui ait clairement expliqué pourquoi. En tant que professionnel, vous n&apos;avez pas à gérer la complexité administrative de cette transition. Mais la comprendre vous permet d&apos;accompagner avec plus de justesse une personne qui traverse un moment de flottement institutionnel, souvent à un âge où le besoin de stabilité et de continuité est particulièrement fort.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Le vieillissement prématuré : comprendre les mécanismes">
          <HighlightBox label="Concept clé" couleur="bleu">
            <Texte>La <strong>réserve fonctionnelle</strong> désigne la capacité de notre organisme à compenser les défaillances au fil de la vie. À la naissance, chaque système — cardiaque, neurologique, musculaire, rénal — dispose d&apos;une certaine réserve. Avec l&apos;âge, cette réserve diminue naturellement. Chez les personnes en situation de handicap, elle peut être plus faible dès le départ, et se consommer plus rapidement.</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="L'effet additif — cascade de dépendance"
            etapes={[
              { niveau: "Point de départ", nom: "Réserve réduite", definition: "Handicap initial : réserve fonctionnelle déjà plus faible" },
              { niveau: "Processus", nom: "Double charge", definition: "Limitations du handicap + effets naturels du vieillissement s'additionnent" },
              { niveau: "Résultat", nom: "Amplification", definition: "Déclin plus rapide et plus intense que dans la population générale" }
            ]}
            note="Exemple : paralysie cérébrale + sarcopénie → perte de la marche accélérée, douleurs, dépression"
          />

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Ahmed, 47 ans, se plaint de fatigue depuis plusieurs mois</p>
              <p className="text-gray-700 text-sm leading-relaxed">Ahmed a une paralysie cérébrale. Il marche depuis toujours avec difficulté, mais il a toujours été autonome dans ses déplacements au sein de l&apos;institution. Depuis six mois, il dit qu&apos;il est &quot;épuisé&quot;, refuse certaines activités en fin de journée, et s&apos;assoit de plus en plus fréquemment pendant les ateliers. Un collègue pense qu&apos;il &quot;se laisse aller&quot;.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Comment comprenez-vous cette situation à la lumière du concept de réserve fonctionnelle ? Que serait une réponse professionnelle adaptée ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">La fatigue d&apos;Ahmed n&apos;est pas de la paresse. À 47 ans avec une paralysie cérébrale, sa réserve fonctionnelle s&apos;épuise plus vite que dans la population générale — toute sa vie, son organisme a fourni un effort supplémentaire pour compenser ses difficultés motrices. C&apos;est l&apos;effet additif en action. La réponse professionnelle : documenter les moments où la fatigue est la plus intense, signaler ce changement au médecin référent, et réfléchir avec l&apos;équipe à des adaptations de rythme — sans attendre que la situation se dégrade davantage.</p>
            </div>
          </div>

          <Texte>Comprendre cet effet additif permet de ne pas être surpris par la rapidité de certaines évolutions, et d&apos;anticiper les besoins qui vont émerger.</Texte>
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
                  "Traumatisme crânien",
                  "Trouble du spectre autistique",
                  "Déficience intellectuelle (hors trisomie 21)"
                ]
              },
              {
                titre: "Enjeu principal",
                contenu: [
                  "Alzheimer précoce (>80% après 60 ans)",
                  "Dégradation motrice dès 35-45 ans",
                  "Complications secondaires cumulées",
                  "Fragilité sanitaire croissante",
                  "Pathologies neurodégénératives",
                  "Perte du masquage, déclin cognitif, dépression",
                  "Risque de démence augmenté, comorbidités psychiatriques"
                ]
              },
              {
                titre: "Signal d'alerte",
                contenu: [
                  "Bilan cognitif adapté dès 40-45 ans",
                  "Douleurs articulaires, fatigue accrue",
                  "Infections urinaires, apnées du sommeil",
                  "Troubles déglutition, crises épileptiques",
                  "Déclin cognitif à ne pas attribuer aux séquelles",
                  "Comportements inhabituels, hypersensibilité accrue, épuisement visible",
                  "Déficits sensoriels non détectés, douleur non verbalisée, épilepsie changeante"
                ]
              }
            ]}
          />

          <Texte>Connaître ces profils, c&apos;est savoir où porter son attention. Pour une personne avec trisomie 21 de 48 ans, un bilan cognitif adapté est déjà pertinent. Pour une personne avec paralysie cérébrale de 42 ans qui se plaint de douleurs articulaires croissantes, il ne faut pas banaliser. Pour une personne blessée médullaire de 55 ans qui présente une fatigue nouvelle, une consultation spécialisée s&apos;impose. Ce n&apos;est pas à vous de diagnostiquer — c&apos;est à vous de signaler au bon moment.</Texte>

          <HighlightBox label="Focus trisomie 21 — une vigilance dès 40 ans" couleur="vert">
            <Texte>Presque toutes les personnes trisomiques développent après 40 ans des modifications anatomiques caractéristiques de la maladie d&apos;Alzheimer. La prévalence clinique dépasse 80% après 60 ans. Il est recommandé d&apos;établir un <strong>bilan cognitif de référence dès 40 ans</strong> avec un outil adapté (CAMCOG-DS en français) et de le renouveler régulièrement.</Texte>
          </HighlightBox>

          <HighlightBox label="Focus autisme — entre masquage et nouveaux signaux" couleur="bleu">
            <Texte>Le vieillissement des personnes autistes est une réalité encore insuffisamment documentée, mais qui concerne une part significative des personnes accompagnées dans les ESE suisses. Trois dynamiques méritent une attention particulière.</Texte>
            <Texte><strong>La perte du masquage :</strong> De nombreuses personnes autistes ont appris au fil des décennies à dissimuler certains de leurs comportements — répétitions, vocalises, comportements sensoriels — pour s&apos;adapter aux attentes de leur environnement social. Ce travail de compensation permanent est épuisant. Avec l&apos;âge, la fatigue et les éventuels troubles cognitifs, cette capacité peut s&apos;éroder progressivement. Des comportements que l&apos;équipe n&apos;avait jamais observés peuvent réapparaître ou s&apos;amplifier. Ce n&apos;est pas une aggravation du trouble en soi : c&apos;est l&apos;épuisement d&apos;une stratégie de compensation tenue pendant des décennies.</Texte>
            <Texte><strong>La vulnérabilité aux disruptions :</strong> Le vieillissement multiplie les ruptures — hospitalisations, adaptation des activités, changements d&apos;équipe. Pour les personnes autistes, dont le besoin de prévisibilité et de stabilité routinière est souvent central, chaque perturbation peut avoir un impact émotionnel et comportemental disproportionné. Préparer ces transitions avec anticipation et supports visuels est particulièrement important dans ce profil.</Texte>
            <Texte><strong>La douleur et la santé somatique :</strong> L&apos;évaluation de la douleur est particulièrement complexe dans l&apos;autisme. Certaines personnes sont hyposensibles — elles ne perçoivent pas clairement la douleur physique. D&apos;autres sont hypersensibles — tout contact peut devenir insupportable. Les troubles gastro-intestinaux et l&apos;épilepsie, fréquents dans cette population, peuvent se modifier avec l&apos;âge et nécessitent une surveillance régulière. <strong>Une modification des comportements habituels est souvent le seul signal disponible.</strong></Texte>
          </HighlightBox>

          <HighlightBox label="Focus déficience intellectuelle (hors trisomie 21) — des enjeux communs" couleur="vert">
            <Texte>La déficience intellectuelle recouvre une réalité très hétérogène — de légère à profonde, d&apos;origines génétiques, chromosomiques ou non déterminées. Malgré cette diversité, plusieurs enjeux communs émergent avec l&apos;âge.</Texte>
            <Texte><strong>Un risque de démence augmenté :</strong> Pour l&apos;ensemble des personnes avec DI (pas seulement la trisomie 21), le risque de développer une démence est significativement plus élevé que dans la population générale — estimé deux à quatre fois supérieur selon les études. La détection repose, comme toujours, sur la comparaison avec l&apos;état de base documenté de la personne, et non sur des tests standardisés inadaptés à son niveau de fonctionnement.</Texte>
            <Texte><strong>Les déficits sensoriels sous-détectés :</strong> Les problèmes visuels et auditifs sont extrêmement fréquents chez les personnes avec DI et systématiquement sous-diagnostiqués. Un bilan visuel et un audiogramme réguliers à partir de 50 ans peuvent éviter des erreurs d&apos;interprétation majeures : une perte auditive non traitée peut facilement passer pour un déclin cognitif ou un repli volontaire.</Texte>
            <Texte><strong>La douleur non verbalisée :</strong> Pour les personnes avec peu ou pas de langage, la douleur s&apos;exprime souvent par des changements comportementaux — agitation, repli, refus de soin, automutilation. L&apos;utilisation d&apos;échelles d&apos;évaluation comportementale de la douleur est indispensable, surtout avec l&apos;âge où les pathologies douloureuses (articulaires, dentaires, digestives) se multiplient et s&apos;accumulent.</Texte>
          </HighlightBox>

          <PullQuote>
            La connaissance du profil de la personne que vous accompagnez est un outil de soin en soi.
          </PullQuote>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Léa, 53 ans, trisomie 21 — l&apos;équipe remarque des changements</p>
              <p className="text-gray-700 text-sm leading-relaxed">Léa vit dans l&apos;institution depuis l&apos;âge de 28 ans. Elle a toujours été capable de se repérer seule dans les trois bâtiments, de reconnaître tous les membres du personnel, et de se souvenir du programme de la semaine. Depuis quelques mois, elle demande plusieurs fois par jour quel jour on est. Elle a semblé ne pas reconnaître un collègue qu&apos;elle côtoie depuis 10 ans. L&apos;équipe est partagée : certains pensent que &quot;c&apos;est sa déficience qui évolue&quot;, d&apos;autres s&apos;inquiètent.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">En vous appuyant sur ce que vous savez du profil trisomie 21, comment interprétez-vous ces observations ? Quelle devrait être la prochaine étape ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">À 53 ans avec une trisomie 21, ces signaux doivent être pris au sérieux. &quot;C&apos;est sa déficience qui évolue&quot; est une formulation qui ferme l&apos;investigation — c&apos;est une forme d&apos;overshadowing. La perte des repères temporels et la non-reconnaissance de personnes familières peuvent être les premiers signes d&apos;une démence de type Alzheimer, dont le risque est très élevé dans cette population dès 45-50 ans. La prochaine étape : signaler ces observations au médecin référent en décrivant précisément les changements par rapport à l&apos;état de base habituel de Léa. C&apos;est le médecin qui posera ou écartera un diagnostic — pas l&apos;équipe. Mais c&apos;est l&apos;équipe qui détecte.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Pour aller plus loin" titre="Vieillir avec un handicap : une expérience singulière">
          <Texte>Comprendre le vieillissement des personnes en situation de handicap ne se limite pas à des mécanismes biologiques et des données démographiques. C&apos;est aussi — et souvent avant tout — une expérience humaine singulière, qui mérite d&apos;être appréhendée dans sa dimension subjective.</Texte>
          <Texte>Une personne qui a grandi en institution, qui y a tissé ses relations, construit ses repères et développé ses compétences, a souvent édifié son identité entière dans cet environnement. Vieillir, pour elle, peut signifier voir s&apos;éroder progressivement les capacités sur lesquelles s&apos;était fondée sa place dans le groupe — ses savoir-faire, ses rôles habituels, ses relations familières. Cette perte peut être vécue avec une intensité particulière, précisément parce que les marges de compensation sont souvent plus étroites que pour une personne sans handicap préexistant.</Texte>
          <Texte>Les systèmes d&apos;accompagnement, construits historiquement de manière séparée pour le handicap d&apos;un côté et la vieillesse de l&apos;autre, ont souvent du mal à saisir ces personnes dans leur double réalité. On les perçoit comme <em>personnes handicapées</em> — ou comme <em>personnes âgées</em> — rarement comme les deux à la fois. Cette difficulté de regard peut se traduire par des retards de diagnostic, des accompagnements inadaptés, ou une invisibilisation des besoins spécifiques liés au vieillissement.</Texte>
          <PullQuote>
            Vieillir avec un handicap, c&apos;est souvent exister dans un angle mort des systèmes — entre deux âges, entre deux logiques. Reconnaître cette double appartenance est l&apos;une des premières formes de respect qu&apos;un professionnel peut offrir.
          </PullQuote>
          <Texte>Cette réalité ne diminue en rien la capacité de ces personnes à continuer de vivre, de s&apos;engager, de tisser des liens, de trouver du sens. Elle invite simplement les professionnels à ajuster leur regard : voir la personne entière — dans son histoire, dans ses capacités préservées, dans ce qu&apos;elle traverse — plutôt que de la réduire à un diagnostic ou à une catégorie administrative.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Ce premier module pose les bases indispensables : le vieillissement des personnes en situation de handicap est une réalité démographique majeure, en pleine accélération. Il se caractérise par des mécanismes biologiques spécifiques (réserve fonctionnelle réduite, effet additif) et des profils différenciés selon le type de handicap.</Texte>
          <Texte>Les institutions qui s&apos;en sortent le mieux sont celles qui <strong>anticipent</strong> : en analysant leur pyramide des âges, en formant leurs équipes, en adaptant leurs espaces et leurs partenariats avant que les situations ne deviennent urgentes.</Texte>
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
            explication: "L'effet additif signifie que les déficiences préexistantes et les limitations liées à l'âge ne s'additionnent pas simplement — elles interagissent et s'amplifient mutuellement. Exemple : paralysie cérébrale + sarcopénie = perte de la marche accélérée, douleurs chroniques, dépression."
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
            explication: "Les études norvégiennes montrent qu'une majorité de personnes avec paralysie cérébrale ambulantes constatent une dégradation de leur marche entre 35 et 45 ans — liée à une combinaison de douleurs articulaires, de spasticité accrue et de fatigue chronique. Ce n'est pas une aggravation du handicap initial mais un effet du vieillissement prématuré."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
