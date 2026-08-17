import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module1FamillesSecteurAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Collaboration famille-institution"
        titre="La famille face au handicap adulte"
        titrePart2="trajectoires, blessures et ressources"
        sousTitre="Comprendre d'où vient la famille, ce qu'elle porte et ce qu'elle apporte : condition première d'une collaboration qui ait du sens."
        duree="55 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="Mireille et son fils Julien : le début de l'histoire">
          <HighlightBox label="Notre fil rouge narratif" couleur="bleu">
            <Texte>Tout au long de cette formation, nous allons suivre <strong>Mireille</strong>, 68 ans, mère de <strong>Julien</strong>, 44 ans, qui réside depuis six ans dans un foyer de vie pour adultes. Julien présente une déficience intellectuelle modérée avec des troubles du comportement intermittents. Mireille vient lui rendre visite chaque samedi. Elle téléphone plusieurs fois par semaine. Elle répond à tous les rendez-vous avec une ponctualité irréprochable, mais les réunions de projet personnalisé se terminent souvent dans un malaise diffus que personne ne nomme.</Texte>
            <Texte>Au fil des cinq modules, nous verrons ce qui se joue dans cette relation, et comment l'équipe peut transformer ce malaise en partenariat vivant.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="La famille : premier acteur, dernier compris">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Comprendre le traumatisme inaugural lié à l'annonce du handicap et ses effets durables sur la famille",
              "Identifier les différentes trajectoires familiales face au handicap dans la durée",
              "Reconnaître la réalité spécifique des fratries dans les familles avec un membre handicapé",
              "Nommer les ressources et la résilience que portent les familles, au-delà de leurs blessures",
            ]} />
          </ConceptBox>
          <Texte>La famille précède l'institution. Elle a accompagné la personne durant les premières années, parfois les premières décennies, souvent dans l'isolement et sans soutien suffisant. Lorsqu'elle confie son proche à une institution, elle ne disparaît pas : elle se transforme, cherche un nouveau rôle, oscille entre soulagement et culpabilité, entre confiance et méfiance.</Texte>
          <Texte>Comprendre qui est cette famille (son histoire, ses blessures, ses ressources) n'est pas un luxe clinique. C'est une condition pratique pour toute collaboration qui dépasse le stade des informations administratives échangées lors des réunions de projet.</Texte>
          <PullQuote source="Régine Scelles, 2013">
            Les familles ne demandent pas à être prises en charge. Elles demandent à être reconnues, comme des sujets ayant une histoire, des compétences et des limites, pas comme des problèmes à gérer.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le traumatisme inaugural : l'annonce du handicap et ses effets dans le temps">
          <Texte>La plupart des familles accompagnant un adulte en situation de handicap ont vécu un moment inaugural : l'annonce du diagnostic. Cet événement, quel que soit le moment où il survient (à la naissance, dans l'enfance, à l'adolescence) constitue souvent un traumatisme psychique dont les effets se déploient sur des décennies.</Texte>

          <HighlightBox label="L'annonce comme rupture biographique" couleur="jaune">
            <Texte>L'annonce d'un handicap interrompt brutalement le scénario imaginaire que les parents avaient construit autour de leur enfant à venir ou de leur enfant déjà là. Cette rupture est d'autant plus profonde qu'elle touche l'image de soi des parents, leur identité de géniteurs, leur projet familial, leurs représentations de l'avenir.</Texte>
            <Liste items={[
              "Effondrement du projet parental imaginé : l'enfant qui sera avocat, qui se mariera, qui prendra soin de ses parents vieux",
              "Sentiment de honte sociale, particulièrement fort dans certaines cultures et milieux",
              "Sidération, déni, colère, puis réorganisation progressive : sans linéarité",
              "Isolement fréquent : les proches ne savent pas quoi dire, s'éloignent parfois",
            ]} />
          </HighlightBox>

          <Texte>Ce traumatisme n'est pas toujours conscient. Des années après l'annonce, il peut continuer d'agir sous forme de deuil non élaboré, de culpabilité diffuse, ou d'hypervigilance dont les équipes professionnelles perçoivent les effets : souvent sans en comprendre l'origine.</Texte>

          <ConceptBox label="Le deuil de l'enfant imaginaire" titre="Un deuil sans corps, sans rite : et sans fin">
            <Texte>Les parents font le deuil d'un enfant imaginaire qui n'existera pas : l'enfant sans handicap. Ce deuil est particulier parce qu'il n'est pas reconnu socialement (il n'y a pas de funérailles, pas de rituel), et parce que l'enfant réel est bien là : vivant, présent, aimé. Ce double registre, deuil et amour simultanés, est psychiquement très coûteux et peut produire des états qui ressemblent à de l'ambivalence ou de la distance, mais qui sont en réalité des formes d'adaptation.</Texte>
          </ConceptBox>

          <HighlightBox label="Les effets durables sur la conjugalité" couleur="bleu">
            <Texte>Le traumatisme inaugural peut fragmenter le couple parental. Les deux partenaires ne traversent pas les mêmes étapes au même rythme, n'ont pas les mêmes réponses défensives, ne trouvent pas les mêmes sens à ce qui arrive. L'un peut surinvestir l'enfant, l'autre peut s'éloigner. Ces asymétries, non nommées, fragilisent durablement la relation conjugale, et leur résolution, ou non-résolution, continuera d'influencer la relation à l'institution des décennies plus tard.</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Vignette clinique</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Mireille, suite.</strong> Julien est né avec une déficience intellectuelle qui n'a été diagnostiquée qu'à l'âge de 3 ans. Mireille se souvient encore de la phrase du pédiatre : "Votre fils ne sera jamais comme les autres enfants." Elle n'a jamais vraiment parlé de ce moment avec son mari, décédé huit ans plus tard. Elle garde au fond d'elle une conviction : "Si j'avais fait quelque chose différemment pendant la grossesse..." Cette culpabilité archaïque, jamais vraiment interrogée, colore encore aujourd'hui sa relation à l'institution : elle se sent jugée, même quand personne ne la juge.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Les trajectoires familiales : de la famille en choc à la famille experte">
          <Texte>Les familles ne restent pas figées dans la sidération de l'annonce. Elles évoluent, s'adaptent, développent des compétences remarquables, et parfois des stratégies de survie qui deviennent, avec le temps, des obstacles à la relation avec l'institution.</Texte>

          <SchemaEtapes
            titre="Trois grandes trajectoires familiales dans la durée"
            etapes={[
              { niveau: "Trajectoire 1", nom: "La famille surprotectrice", definition: "Elle a assumé seule, pendant des années, l'ensemble de l'accompagnement. Elle ne fait confiance qu'à elle-même. Elle surveille, contrôle, remplace parfois les professionnels. Cette position n'est pas de la malveillance, c'est la cicatrice d'un isolement long." },
              { niveau: "Trajectoire 2", nom: "La famille distante ou absente", definition: "Elle s'est progressivement mise en retrait, parfois par épuisement, parfois sous pression institutionnelle implicite, parfois par conviction que 'les professionnels s'en occupent mieux'. Ce retrait peut masquer une culpabilité intense ou une douleur non traitée." },
              { niveau: "Trajectoire 3", nom: "La famille partenaire active", definition: "Elle a trouvé une forme d'équilibre entre investissement et délégation, entre confiance et vigilance. Cette position n'est pas innée : elle résulte souvent d'un accompagnement institutionnel qui a su reconnaître et solliciter la famille de façon juste." },
            ]}
            note="Ces trajectoires ne sont pas des catégories fixes, une même famille peut osciller entre plusieurs selon les périodes, les équipes en place, les événements de vie."
          />

          <HighlightBox label="Le paradoxe du parent expert" couleur="bleu">
            <Texte>Après des années d'accompagnement intensif, beaucoup de parents développent une connaissance intime de leur proche (ses signaux non verbaux, ses déclencheurs de crise, ses préférences les plus fines) que les professionnels, même excellents, ne peuvent avoir qu'après des mois de côtoiement quotidien. Ce savoir parental est une ressource précieuse. Mais les institutions ont souvent du mal à le reconnaître, le percevant comme une intrusion ou une mise en cause implicite de leur compétence.</Texte>
            <Texte>Le professionnel qui sait dire "vous connaissez Julien mieux que nous sur ce point, qu'est-ce que vous observez ?" transforme une dynamique de méfiance en collaboration vivante.</Texte>
          </HighlightBox>

          <TableauComparaison
            titre="Deux lectures d'un même comportement familial"
            colonnes={[
              { titre: "Lecture réactionnelle", contenu: [
                "Mireille téléphone trop souvent : elle est envahissante",
                "Elle remet en cause le projet éducatif : elle ne fait pas confiance",
                "Elle apporte des cadeaux à chaque visite : elle infantilise son fils",
                "Elle s'effondre en réunion de projet : elle est trop fragile pour collaborer",
              ]},
              { titre: "Lecture compréhensive", contenu: [
                "Mireille téléphone souvent : elle n'a pas encore trouvé qu'elle peut faire confiance",
                "Elle interroge le projet : elle est porteuse d'un savoir spécifique sur son fils",
                "Elle apporte des cadeaux : c'est son langage d'amour depuis 44 ans",
                "Elle s'effondre en réunion : c'est l'espace le plus sûr qu'on lui ait jamais offert",
              ]},
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="La fratrie : une réalité souvent silencieuse">
          <Texte>Dans les familles où un membre présente un handicap, les frères et sœurs occupent une place particulière : souvent décisive, rarement nommée dans les échanges institution-famille. Régine Scelles (2013) a documenté de façon rigoureuse la réalité de ces fratries et ce qu'elles portent.</Texte>

          <HighlightBox label="Les rôles endossés par la fratrie" couleur="jaune">
            <Texte>Les frères et sœurs d'une personne handicapée grandissent souvent avec des rôles non choisis, non dits, parfois inconscients :</Texte>
            <Liste items={[
              "Le parentifié : celui ou celle qui compense le handicap en étant parfait·e, en ne demandant rien, en soutenant ses parents",
              "Le rival invisible : celui ou celle qui ressent de la jalousie pour l'attention reçue par le frère ou la sœur handicapée, puis de la honte de cette jalousie",
              "Le protecteur : celui ou celle qui assume un rôle de garde du corps affectif ou physique, parfois dès l'enfance",
              "L'absent·e : celui ou celle qui prend de la distance géographique ou psychique pour survivre à la charge familiale",
            ]} />
          </HighlightBox>

          <PullQuote source="Régine Scelles, Frères et sœurs, complices et rivaux, 2013">
            Les frères et sœurs sont rarement au centre des préoccupations institutionnelles. Pourtant, ce sont eux qui, dans trente ans, seront les interlocuteurs principaux de l'institution. Les préparer aujourd'hui, c'est aussi préparer l'avenir de la personne accompagnée.
          </PullQuote>

          <ConceptBox label="La fratrie imaginaire" titre="L'image du frère ou de la sœur sans handicap">
            <Texte>Marie-Thé Carton (2013) décrit le phénomène de la "fratrie imaginaire" : la représentation qu'un frère ou une sœur entretient de ce que serait son proche s'il n'avait pas eu de handicap. Cette image imaginaire, l'autre tel qu'il aurait pu être, est une réalité psychique puissante. Elle alimente à la fois la culpabilité (pourquoi moi j'ai échappé ?), la tendresse et parfois la rage. Comprendre cette fratrie imaginaire aide à comprendre les réactions parfois déroutantes des frères et sœurs lors des moments de transition ou de décision.</Texte>
          </ConceptBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Vignette clinique</p>
              <p className="text-gray-700 text-sm leading-relaxed"><strong>Claire, sœur de Julien.</strong> Claire a 51 ans. Elle vit à Lyon, à quatre heures de route du foyer. Elle ne vient voir Julien qu'une fois par an, lors des fêtes. L'équipe la perçoit comme désintéressée, "celle qui laisse tout faire à la mère". En réalité, Claire a grandi dans l'ombre de Julien, les yeux de sa mère toujours tournés vers son frère. Sa mise à distance géographique est une mise à distance psychique nécessaire à sa survie. Mais elle pense à l'après, qui prendra le relais quand sa mère ne pourra plus ? Elle n'en parle à personne, pas même à l'institution, qui ne le lui a jamais demandé.</p>
            </div>
          </div>

          <HighlightBox label="Ce que l'institution peut faire pour la fratrie" couleur="vert">
            <Liste items={[
              "Nommer la fratrie explicitement dans les réunions de projet : l'inviter, lui donner une place",
              "Distinguer le rôle de la fratrie de celui des parents : les frères et sœurs sont des proches, pas des aidants de substitution",
              "Préparer la fratrie aux enjeux de l'après-nous dès que les parents vieillissent",
              "Orienter vers des groupes de parole pour fratries, qui existent dans plusieurs cantons romands",
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Les ressources et la résilience familiale">
          <Texte>Les familles ne sont pas uniquement des porteurs de blessures et de traumatismes. Elles sont aussi, et souvent d'abord, des porteurs de ressources remarquables, construites dans l'adversité, qui constituent une base précieuse pour la collaboration.</Texte>

          <HighlightBox label="Les ressources construites dans la durée" couleur="vert">
            <Liste items={[
              "Une connaissance intime de la personne : ses signaux, ses préférences, ses peurs, son histoire",
              "Une capacité de plaidoyer : des années à se battre pour obtenir des soins, des places, des droits",
              "Un réseau informel de soutien : d'autres familles, des associations, des professionnels de confiance identifiés au fil du temps",
              "Une résilience éprouvée : elles ont traversé des crises que les professionnels n'imaginent pas",
            ]} />
          </HighlightBox>

          <Texte>La résilience familiale n'est pas un état, c'est un processus. Elle se construit dans l'interaction entre les ressources propres de la famille et les soutiens extérieurs qui l'ont accompagnée. Une famille qui n'a jamais reçu de soutien digne de ce nom n'est pas "moins résiliente", elle a simplement eu moins de leviers à sa disposition.</Texte>

          <TableauComparaison
            titre="Reconnaître et mobiliser les ressources familiales"
            colonnes={[
              { titre: "Ce que la famille apporte", contenu: [
                "Connaissance longitudinale de la personne",
                "Mémoire des crises et de ce qui a aidé",
                "Réseau affectif et social de la personne",
                "Légitimité affective unique",
              ]},
              { titre: "Ce que l'institution peut en faire", contenu: [
                "Intégrer ce savoir dans l'évaluation initiale et les révisions de projet",
                "Documenter les apprentissages familiaux dans les transmissions",
                "Soutenir et enrichir ces liens plutôt que les concurrencer",
                "S'appuyer sur ce lien pour traverser les moments de crise",
              ]},
            ]}
          />

          <PullQuote>
            La meilleure façon de construire une collaboration avec une famille, c'est de commencer par reconnaître ce qu'elle a déjà construit : seule, souvent dans l'adversité, avant que nous arrivions.
          </PullQuote>

          <HighlightBox label="La reconnaissance comme fondement du partenariat" couleur="bleu">
            <Texte>Reconnaître la famille, ce n'est pas valider tout ce qu'elle fait. C'est signifier que son histoire, son expertise et ses émotions ont une place légitime dans la relation. Cette reconnaissance n'est pas un préalable facultatif, c'est la condition sine qua non d'un partenariat qui dure.</Texte>
            <Texte>En pratique : commencer une réunion par "Avant de parler de ce que nous avons observé, qu'est-ce que vous avez vous-mêmes observé ces derniers mois ?" change radicalement la dynamique de l'échange.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>La famille qui accompagne un adulte en situation de handicap n'est pas un interlocuteur neutre. Elle porte une histoire longue, le traumatisme inaugural, les années d'adaptation, les reconfigurations identitaires, les deuils successifs. Elle a développé des ressources réelles et des stratégies de survie qui peuvent parfois ressembler à des obstacles à la collaboration. Comprendre cette histoire, c'est se donner les moyens de la dépasser.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "L'annonce du handicap est un traumatisme psychique dont les effets se déploient sur des décennies",
              "Le deuil de l'enfant imaginaire est un deuil sans rite, souvent non élaboré, qui continue d'agir",
              "Les trajectoires familiales sont diverses et évolutives, la surprotection d'aujourd'hui peut devenir la confiance de demain",
              "La fratrie est un acteur souvent invisible, décisif pour l'avenir de la personne",
              "Reconnaître les ressources familiales avant de pointer les difficultés est le fondement de tout partenariat digne",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Qu'est-ce que le 'deuil de l'enfant imaginaire' dans le contexte du handicap ?",
            reponses: [
              "Le deuil causé par le décès précoce d'un enfant en situation de handicap",
              "Le deuil de l'enfant tel qu'il aurait pu être sans handicap, un deuil sans rite, souvent non reconnu socialement",
              "La tristesse des parents face aux limitations fonctionnelles de leur enfant",
              "Le processus de séparation lorsque l'enfant entre en institution",
            ],
            bonneReponse: 1,
            explication: "Le deuil de l'enfant imaginaire est le deuil de l'enfant tel que les parents l'avaient imaginé, sans handicap. Ce deuil est particulièrement difficile car il n'est pas socialement reconnu (pas de funérailles, pas de rite) et coexiste avec l'amour pour l'enfant réel, bien vivant. Il peut continuer d'agir sous forme de culpabilité diffuse ou d'hypervigilance des années après.",
          },
          {
            question: "Un parent qui téléphone plusieurs fois par semaine à l'institution pour avoir des nouvelles de son proche adulte, quelle lecture professionnelle est la plus utile ?",
            reponses: [
              "Ce comportement envahissant doit être cadré par une limitation des contacts autorisés",
              "Ce comportement peut signaler un manque de confiance envers l'institution qui mérite d'être exploré",
              "Ce comportement est normal chez tous les parents de personnes handicapées",
              "Ce comportement indique que la personne devrait rentrer vivre dans la famille",
            ],
            bonneReponse: 1,
            explication: "Avant de cadrer un comportement, le professionnel gagne à le comprendre. Des appels fréquents signalent souvent que la confiance n'est pas encore construite, ce qui peut avoir des origines légitimes dans l'histoire de la famille. Explorer cette signification transforme une limitation en opportunité de travail relationnel.",
          },
          {
            question: "Selon Régine Scelles, pourquoi la fratrie des personnes handicapées mérite-t-elle une attention spécifique des institutions ?",
            reponses: [
              "Parce que les frères et sœurs sont les plus à risque de développer eux-mêmes un handicap",
              "Parce qu'ils constituent souvent les futurs interlocuteurs principaux de l'institution et doivent être préparés",
              "Parce qu'ils sont systématiquement absents des réunions de projet",
              "Parce que la loi impose leur présence dans les instances de décision",
            ],
            bonneReponse: 1,
            explication: "Régine Scelles souligne que la fratrie est souvent négligée par les institutions, alors qu'elle jouera un rôle décisif dans l'avenir, notamment lors du vieillissement et du décès des parents. Préparer la fratrie aujourd'hui, c'est préparer l'avenir de la personne accompagnée.",
          },
          {
            question: "Qu'est-ce que la 'fratrie imaginaire' décrite par Marie-Thé Carton ?",
            reponses: [
              "Les frères et sœurs imaginaires inventés par la personne handicapée pour combler sa solitude",
              "La représentation qu'un frère ou une sœur entretient de son proche tel qu'il aurait été sans handicap",
              "Les liens fraternels créés entre résidents d'une même institution",
              "Les groupes de soutien pour fratries organisés par les associations de familles",
            ],
            bonneReponse: 1,
            explication: "La fratrie imaginaire est la représentation psychique du frère ou de la sœur tel qu'il ou elle aurait pu être sans handicap. Cette image imaginaire alimente des dynamiques complexes : culpabilité (pourquoi moi j'ai échappé ?), tendresse, et parfois rage. Comprendre ce phénomène aide à décoder les réactions des frères et sœurs lors des moments de transition.",
          },
          {
            question: "Parmi les ressources que les familles développent dans la durée, laquelle les institutions ont-elles le plus de mal à reconnaître ?",
            reponses: [
              "La capacité de la famille à financer des activités de loisirs",
              "Le réseau d'autres familles en situation similaire",
              "La connaissance intime et longitudinale de la personne, ses signaux, ses préférences, son histoire",
              "La disponibilité des parents pour les sorties et activités",
            ],
            bonneReponse: 2,
            explication: "La connaissance intime de la personne, développée sur des décennies, est la ressource la plus précieuse des familles et paradoxalement celle qui est le moins intégrée dans les pratiques institutionnelles. Cette connaissance est souvent perçue comme une mise en cause implicite de la compétence professionnelle, alors qu'elle est une source inestimable d'information.",
          },
          {
            question: "Qu'implique concrètement 'reconnaître la famille' avant de construire un partenariat ?",
            reponses: [
              "Valider toutes les décisions et demandes de la famille",
              "Inviter la famille à participer à la gouvernance de l'institution",
              "Signifier à la famille que son histoire, son expertise et ses émotions ont une place légitime dans la relation",
              "Confier à la famille la rédaction du projet personnalisé de son proche",
            ],
            bonneReponse: 2,
            explication: "Reconnaître une famille, ce n'est pas acquiescer à tout ce qu'elle fait. C'est lui signifier que son parcours, sa connaissance et ses ressentis comptent. En pratique, cela peut être aussi simple que de commencer une réunion en demandant à la famille ce qu'elle a elle-même observé : avant de livrer les observations professionnelles.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
