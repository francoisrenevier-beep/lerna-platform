import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module5VieillissementApprofondissement({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="Handicap et vieillissement"
        titre="Coordination interinstitutionnelle"
        titrePart2="en Suisse romande"
        sousTitre="Cartographie des acteurs, outils de coordination, gestion des transitions, pour que les mondes communicent."
        duree="40 minutes"
        niveau="Confirmé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Naviguer dans un paysage institutionnel complexe">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier les principaux acteurs de la coordination en Suisse romande",
              "Comprendre le rôle pivot du médecin référent",
              "Distinguer les missions de la gériatrie, des thérapeutes (ergothérapie, physiothérapie), de Pro Infirmis et Pro Senectute",
              "Construire des outils de coordination efficaces (conventions, documents de transmission)",
              "Préparer et accompagner une transition de manière digne"
            ]} />
          </ConceptBox>
          <Texte>L'accompagnement d'une personne en situation de handicap vieillissante dépasse toujours les seules compétences d'une institution. Tôt ou tard, il nécessite de faire appel à d'autres acteurs : médecins spécialistes, services de soins à domicile, structures d'hébergement gériatrique, services sociaux.</Texte>
          <Texte>En Suisse, ce paysage institutionnel est riche mais complexe. Il est organisé selon une logique cantonale, avec des disparités importantes d'un canton à l'autre. Les cultures professionnelles des secteurs "handicap" et "vieillesse" sont différentes, parfois incompatibles au premier abord. Les financements sont distincts.</Texte>
          <PullQuote>
            Et pourtant, les personnes que vous accompagnez ont besoin que ces mondes communiquent.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Cartographie des acteurs en Suisse romande">
          <HighlightBox label="Le médecin référent : pivot incontournable" couleur="bleu">
            <Texte>Dans le système de santé suisse, le médecin de famille (ou médecin référent en contexte institutionnel) joue un rôle central de coordination médicale. C'est lui qui coordonne les différents intervenants, prescrit les bilans spécialisés et assure la continuité des soins dans le temps.</Texte>
            <Texte>La relation avec le médecin référent doit être <strong>active et bidirectionnelle</strong> : l'institution transmet ses observations cliniques, le médecin informe des diagnostics et traitements. Cette communication ne devrait pas se limiter aux situations d'urgence.</Texte>
          </HighlightBox>

          <Texte>Dans la pratique, cette relation bidirectionnelle est souvent asymétrique. L&apos;institution transmet (parfois trop peu, parfois trop tardivement), et le médecin informe en retour lors de visites courtes. Pour que cette relation fonctionne vraiment, elle demande une clarté sur ce que chacun apporte.</Texte>

          <Texte>Ce que vous apportez au médecin : la connaissance longitudinale de la personne. Vous savez comment elle était il y a trois ans, ce qu&apos;elle pouvait faire, comment elle communiquait. Un médecin qui reçoit &quot;elle va moins bien depuis quelque temps&quot; ne peut pas agir. Un médecin qui reçoit &quot;depuis six semaines, elle ne reconnaît plus le trajet vers l&apos;atelier qu&apos;elle fait seule depuis 12 ans, et demande plusieurs fois par jour quel jour on est&quot; — peut agir.</Texte>

          <Texte>Ce que le médecin apporte à l&apos;institution : l&apos;expertise clinique, la capacité à poser ou écarter des diagnostics, à prescrire des bilans spécialisés, à coordonner les intervenants médicaux. L&apos;enjeu n&apos;est pas de savoir qui décide, c&apos;est de construire une compréhension partagée de la situation de la personne, où chacun contribue ce qu&apos;il est le seul à pouvoir apporter.</Texte>

          <TableauComparaison
            titre="Acteurs clés et leurs missions"
            colonnes={[
              {
                titre: "Acteur",
                contenu: ["Ergothérapie / physiothérapie", "Gériatrie hospitalière", "Équipes mobiles gériatriques", "Psychiatrie de l'âge avancé", "Pro Infirmis", "Pro Senectute"]
              },
              {
                titre: "Mission principale",
                contenu: [
                  "Mobilité, transferts, prévention des chutes, aides techniques, adaptation des gestes du quotidien",
                  "Évaluation spécialisée des syndromes gériatriques : fragilité, démence, chutes, dénutrition",
                  "Se déplacent en institution pour des évaluations, adapté aux personnes fragiles",
                  "Troubles psychiques se complexifiant avec l'âge",
                  "Démarches sociales, administratives, défense des droits : handicap",
                  "Services pour personnes âgées : aide à domicile, soutien aux aidants, activités sociales"
                ]
              },
              {
                titre: "Quand faire appel",
                contenu: [
                  "Perte de mobilité, chutes, difficultés croissantes dans les gestes du quotidien",
                  "Diagnostic gériatrique complexe, orientation thérapeutique",
                  "Personne supportant mal les déplacements ou les hospitalisations",
                  "Démence + troubles psychiques, diagnostic différentiel",
                  "Transitions, soutien famille, défense de droits",
                  "Maintien de liens sociaux, aide complémentaire"
                ]
              }
            ]}
          />

          <HighlightBox label="L'ergothérapie et la physiothérapie : des partenaires à mobiliser" couleur="vert">
            <Texte>Pour les institutions dont les résidents perdent progressivement en autonomie motrice, l'ergothérapie et la physiothérapie sont des partenaires essentiels : travail de la mobilité et des transferts, prévention des chutes, adaptation des gestes du quotidien, évaluation des aides techniques et de l'aménagement des espaces. Elles sont prescrites par un médecin, prises en charge par l'assurance-maladie de base, et peuvent intervenir sur le lieu de vie de la personne.</Texte>
            <Texte>Ces interventions permettent souvent de <strong>maintenir une personne dans son institution d'origine plus longtemps</strong>, en évitant un transfert vers un EMS.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Outils et processus de coordination">
          <HighlightBox label="L'erreur la plus fréquente" couleur="jaune">
            <Texte>Croire qu'une bonne relation informelle suffit : "On se connaît, on s'appelle quand il y a un problème." Cette approche fonctionne... jusqu'à ce que le professionnel référent parte, que la situation se complexifie, ou que l'urgence arrive.</Texte>
          </HighlightBox>

          <Texte>La formalisation des partenariats n'est pas de la bureaucratie. C'est une <strong>protection pour la personne accompagnée et pour les équipes</strong>. Elle garantit que la coordination fonctionne indépendamment des personnes en poste.</Texte>

          <HighlightBox label="Les conventions de collaboration, quoi formaliser ?" couleur="bleu">
            <Texte>Une convention de collaboration est un document signé entre deux institutions qui formalise : qui fait quoi, comment s'échangent les informations, comment se déroulent les interventions, quels sont les contacts à appeler, comment se gère la facturation.</Texte>
            <Texte>Les conventions prioritaires à établir :</Texte>
            <Liste items={[
              "Avec des ergothérapeutes et physiothérapeutes de la région : pour des bilans et des interventions sur le lieu de vie",
              "Avec un ou plusieurs EMS de référence : pour visites préalables, accueils temporaires, transitions planifiées",
              "Avec un service de gériatrie : pour consultations spécialisées ou interventions de l'équipe mobile"
            ]} />
          </HighlightBox>

          <Texte>Initier une convention de collaboration peut sembler intimidant. En réalité, c&apos;est souvent plus simple que prévu, à condition de ne pas attendre qu&apos;une crise l&apos;impose. Un premier contact informel, une visite, un appel téléphonique, une rencontre lors d&apos;une journée de réseau, suffit souvent pour poser les bases d&apos;une collaboration. Ce premier contact permet de comprendre les modalités d&apos;intervention du partenaire, ses limites, ses délais. Il humanise aussi la relation : quand une situation d&apos;urgence survient, vous appelez quelqu&apos;un que vous connaissez.</Texte>

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">L&apos;institution n&apos;a aucune convention formalisée, et une situation se complexifie</p>
              <p className="text-gray-700 text-sm leading-relaxed">Votre institution accompagne 45 résidents, dont 18 ont plus de 50 ans. Aucune collaboration formalisée n&apos;existe avec des thérapeutes de la région ni avec un EMS de référence. Cette semaine, un résident de 67 ans ne parvient plus à se déplacer seul jusqu&apos;au réfectoire et a chuté deux fois. L&apos;équipe ne sait pas vers qui se tourner. Parallèlement, une résidente de 72 ans montre des signes de déclin rapide : une transition vers un EMS pourrait être nécessaire dans les prochains mois, mais aucun EMS n&apos;a été identifié en amont.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Quelles sont les conséquences concrètes de l&apos;absence de conventions ? Si vous étiez référent de l&apos;une de ces deux personnes, quelles démarches pourriez-vous initier ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Les conséquences sont déjà visibles : la situation du résident de 67 ans traîne alors qu&apos;un bilan de physiothérapie ou d&apos;ergothérapie, prescrit par le médecin référent, pourrait sécuriser ses déplacements. Pour la résidente de 72 ans, le risque est d&apos;agir dans l&apos;urgence quand la transition sera inévitable. En tant que référent, vous pouvez : documenter précisément les chutes et les difficultés de déplacement et les transmettre au médecin référent, signaler à votre hiérarchie la nécessité d&apos;identifier des partenaires en amont, et demander qu&apos;une visite d&apos;un EMS soit organisée pour la résidente de 72 ans, non pour décider d&apos;une transition, mais pour la préparer.</p>
            </div>
          </div>

          <HighlightBox label="Le document de transmission : carte d'identité pour les transitions" couleur="vert">
            <Texte>Lorsqu'une personne change de structure, même temporairement pour une hospitalisation, elle emporte avec elle son histoire. Cette histoire ne doit pas rester dans la tête des professionnels. Un bon document de transmission comprend :</Texte>
            <Liste items={[
              "Informations d'identité et de contexte : diagnostic, histoire institutionnelle, personnes de référence",
              "Description de l'état fonctionnel actuel : ce que la personne fait seule, ce qui nécessite de l'aide",
              "Habitudes et préférences importantes : alimentation, rythmes, activités aimées, aversions, rituels",
              "Signaux d'alerte comportementaux : que signifie tel comportement, comment l'équipe y répond",
              "Informations médicales essentielles : traitements, allergies, précautions spécifiques",
              "Directives anticipées, si elles existent"
            ]} />
          </HighlightBox>

          <PullQuote>
            Ce document doit être tenu à jour, connu de l'équipe, et accompagner la personne à chaque transition. Il est l'une des plus grandes protections que vous pouvez offrir à quelqu'un qui ne peut pas se présenter lui-même.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Gérer les transitions et les ruptures de parcours">
          <Texte>Pour comprendre pourquoi les transitions sont si souvent vécues comme traumatisantes, mettez-vous à la place de la personne :</Texte>

          <div className="bg-gray-50 rounded-xl p-6 my-6 border-l-4 border-[#3DBFA0]">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-3">Mise en situation</p>
            <p className="text-gray-700 leading-relaxed italic">Imaginez que vous avez vécu dans le même endroit depuis 30 ans. Vous connaissez chaque recoin, chaque visage, chaque bruit familier. Vous savez qu'après le repas du midi il y a toujours une période de calme, que le mercredi c'est la sortie au marché, que c'est Fatima qui vous aide le matin et qu'elle est douce. Tout cela structure votre monde et vous donne un sentiment de sécurité.</p>
            <p className="text-gray-700 leading-relaxed italic mt-3">Maintenant imaginez que tout cela disparaisse en quelques jours. Un nouveau lieu, de nouvelles têtes, de nouveaux bruits, de nouvelles routines. Pour une personne avec des difficultés cognitives ou relationnelles, ce changement peut être profondément déstabilisant.</p>
          </div>

          <SchemaEtapes
            titre="Principes d'une transition préparée et digne"
            etapes={[
              { niveau: "Étape 1", nom: "Introduire progressivement", definition: "Visites non médicalisées, en atmosphère détendue, avant que la transition soit urgente" },
              { niveau: "Étape 2", nom: "Préparer avec supports", definition: "Album photo du nouveau lieu, vidéo courte, rencontres avec des résidents de la structure d'accueil" },
              { niveau: "Étape 3", nom: "Maintenir le lien", definition: "Un professionnel connu accompagne lors du déménagement et rend visite dans les premières semaines" }
            ]}
            note="Ne pas couper les liens trop vite : des visites et des appels pendant quelques mois maintiennent une continuité relationnelle précieuse"
          />

          <TableauComparaison
            titre="Ce qui fait la différence : transition préparée vs rupture subie"
            colonnes={[
              {
                titre: "Transition préparée",
                contenu: [
                  "Visites préalables dans le nouveau lieu",
                  "Document de transmission complet et à jour",
                  "Professionnel référent qui maintient le lien",
                  "Délai suffisant pour que la personne s'adapte",
                  "Famille informée et impliquée"
                ]
              },
              {
                titre: "Rupture subie",
                contenu: [
                  "Changement dans l'urgence, sans préparation",
                  "Informations dans la tête d'un seul professionnel",
                  "Coupure totale avec l'ancien lieu de vie",
                  "Adaptation imposée immédiatement",
                  "Famille informée après le fait"
                ]
              }
            ]}
          />

          <div className="space-y-3 my-6">
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1D4ED8] mb-2">Situation</p>
              <p className="text-gray-700 text-sm font-semibold mb-2">Hélène, 71 ans : une hospitalisation d&apos;urgence sans document de transmission</p>
              <p className="text-gray-700 text-sm leading-relaxed">Hélène, 71 ans, polyhandicap, est hospitalisée en urgence suite à une pneumonie. L&apos;ambulancier demande ses allergies, ses médicaments, comment elle communique. L&apos;équipe de nuit ne connaît pas tous ces détails. À l&apos;hôpital, le personnel ne comprend pas pourquoi Hélène s&apos;agite et refuse les soins, comportements pourtant bien connus de l&apos;équipe institutionnelle.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Question de réflexion</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">Qu&apos;est-ce que cette situation révèle sur l&apos;organisation de l&apos;institution ? Que pourriez-vous proposer concrètement pour éviter que cela se reproduise ?</p>
            </div>
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#15803D] mb-2">Réponse guidée</p>
              <p className="text-gray-700 text-sm leading-relaxed">Cette situation révèle l&apos;absence d&apos;un document de transmission accessible et à jour. Hélène subit les conséquences de cette lacune. Deux propositions concrètes : créer une fiche de transmission standardisée pour chaque résident, mise à jour régulièrement et accessible à toute l&apos;équipe y compris de nuit. Et prévoir une version résumée d&apos;une page qui accompagne physiquement la personne à chaque hospitalisation. Ce n&apos;est pas un travail de direction uniquement, les professionnels de terrain qui connaissent le mieux les personnes sont les mieux placés pour alimenter ces fiches.</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>La coordination interinstitutionnelle n'est pas une formalité optionnelle. C'est une condition de continuité et de qualité pour les personnes accompagnées. En Suisse romande, le paysage institutionnel est riche : il faut le connaître, le mobiliser, et l'organiser via des conventions formalisées et des outils de transmission rigoureux.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le médecin référent est le pivot : la communication doit être bidirectionnelle et régulière",
              "L'ergothérapie et la physiothérapie, sur prescription médicale, peuvent intervenir sur le lieu de vie et éviter des transferts prématurés vers l'EMS",
              "Une convention de collaboration protège la personne et les équipes",
              "Le document de transmission est la 'carte d'identité' de la personne pour toute transition",
              "La meilleure transition est celle qui a été préparée bien à l'avance",
              "Ne pas couper les liens trop vite après une transition"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quel est le rôle du médecin référent dans la coordination autour d'une personne vieillissante ?",
            reponses: [
              "Il remplace l'équipe éducative pour les décisions médicales importantes",
              "Il est le pivot de coordination médicale : coordonne les intervenants, prescrit les bilans et assure la continuité",
              "Il décide seul des transitions de structure à partir d'un certain âge",
              "Il intervient uniquement en cas d'urgence médicale"
            ],
            bonneReponse: 1,
            explication: "Le médecin référent joue un rôle central de coordination médicale. La relation avec lui doit être active et bidirectionnelle : l'institution transmet ses observations cliniques, le médecin informe des diagnostics et traitements. Cette communication ne doit pas se limiter aux urgences."
          },
          {
            question: "À quelles conditions l'ergothérapie ou la physiothérapie peuvent-elles intervenir auprès d'un résident ?",
            reponses: [
              "Jamais en institution, ces prestations sont réservées aux personnes vivant à domicile",
              "Uniquement après une hospitalisation",
              "Sur prescription médicale : le médecin évalue l'indication et les prestations sont prises en charge par l'assurance-maladie de base",
              "Uniquement à la demande et aux frais des familles"
            ],
            bonneReponse: 2,
            explication: "L'ergothérapie et la physiothérapie sont prescrites par un médecin et prises en charge par l'assurance-maladie de base. Elles peuvent intervenir sur le lieu de vie de la personne : mobilité, transferts, prévention des chutes, aides techniques, adaptation des gestes du quotidien. Le rôle de l'équipe est de documenter les difficultés observées et de les transmettre au médecin référent, qui évalue l'indication."
          },
          {
            question: "Pourquoi la formalisation des partenariats est-elle préférable aux relations informelles ?",
            reponses: [
              "Parce que les relations informelles sont interdites par la réglementation suisse",
              "Parce que les conventions sont nécessaires pour obtenir les financements cantonaux",
              "Parce qu'une bonne relation informelle ne fonctionne plus quand le professionnel référent part ou que l'urgence arrive",
              "Parce que les institutions sont légalement obligées de formaliser tous leurs partenariats"
            ],
            bonneReponse: 2,
            explication: "Une bonne relation informelle fonctionne... jusqu'à ce que le professionnel référent parte, que la situation se complexifie, ou que l'urgence arrive. La formalisation garantit que la coordination fonctionne indépendamment des personnes en poste et que les rôles sont clairs."
          },
          {
            question: "Qu'est-ce qu'un document de transmission et à quoi sert-il ?",
            reponses: [
              "Un résumé médical rédigé par le médecin pour l'EMS d'accueil",
              "Un document complet décrivant l'histoire, les habitudes, les préférences et les signaux d'alerte d'une personne, pour accompagner toute transition",
              "Un document administratif pour informer l'AI ou l'AVS d'un changement de structure",
              "Une fiche de soins infirmiers tenue à jour par l'infirmière de l'institution"
            ],
            bonneReponse: 1,
            explication: "Le document de transmission est la 'carte d'identité' de la personne pour toute transition. Il doit accompagner la personne à chaque changement de structure et contenir : histoire institutionnelle, état fonctionnel, habitudes, préférences, signaux d'alerte comportementaux, informations médicales et directives anticipées."
          },
          {
            question: "Quelle est la différence principale entre Pro Infirmis et Pro Senectute dans le contexte du vieillissement avec handicap ?",
            reponses: [
              "Pro Infirmis est cantonale, Pro Senectute est nationale",
              "Pro Infirmis intervient dans le handicap (droits, démarches sociales), Pro Senectute dans la vieillesse (aide domicile, soutien aidants)",
              "Pro Infirmis s'occupe des adultes, Pro Senectute des enfants",
              "Il n'y a pas de différence : les deux organisations ont été fusionnées"
            ],
            bonneReponse: 1,
            explication: "Pro Infirmis est spécialisée dans le handicap : démarches sociales, administratives, défense des droits, soutien aux familles. Pro Senectute est spécialisée dans la vieillesse : aide à domicile, soutien aux aidants, activités sociales. La coordination entre ces deux organisations est encore insuffisante dans de nombreuses régions."
          },
          {
            question: "Pourquoi les transitions vers un nouveau lieu de vie sont-elles souvent traumatisantes pour les personnes vieillissantes avec handicap ?",
            reponses: [
              "Parce qu'elles impliquent toujours une perte de droits ou de prestations",
              "Parce que la personne perd ses repères familiers, essentiels pour se situer dans le temps et l'espace",
              "Parce que les nouvelles équipes ne sont jamais formées à accueillir des personnes handicapées",
              "Parce que les EMS refusent souvent les personnes en situation de handicap"
            ],
            bonneReponse: 1,
            explication: "Pour une personne ayant vécu 30 ans dans le même endroit, la perte de tous ses repères (personnes connues, rituels, espaces familiers) peut être profondément déstabilisante. Pour une personne avec difficultés cognitives ou relationnelles, ce changement peut constituer un traumatisme véritable si non préparé."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
