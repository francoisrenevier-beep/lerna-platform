import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import { AccrocheScenario } from "@/components/module/AccrocheScenario"

export function Module5MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="MDH-PPH 2010"
        titre="Transformer les pratiques"
        titrePart2="institutionnelles"
        sousTitre="Du projet individuel à la transformation organisationnelle : comment le MDH-PPH, appliqué collectivement, révèle les patterns d'obstacles que l'institution elle-même produit."
        duree="40 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <div className="bg-gray-50 border-l-4 border-[#1B2D5B] rounded-r-xl px-6 py-5 mb-10">
          <p className="text-xs font-semibold text-[#1B2D5B] uppercase tracking-wider mb-2">Fil rouge — Lena, 42 ans — Un an plus tard</p>
          <p className="text-gray-700 text-sm leading-relaxed">Le plan co-construit avec Lena a fonctionné. Elle cuisine à nouveau, elle a retrouvé ses amies, elle chante dans la chorale. Mais en analysant sa situation collectivement, l'équipe a commencé à remarquer quelque chose d'inquiétant : <strong>plusieurs autres résidents rencontraient les mêmes obstacles</strong>. Les horaires rigides, les activités non choisies, les changements d'équipe non anticipés — ce n'était pas le problème de Lena. C'était le problème de l'institution. Le MDH-PPH venait de passer du projet individuel à la question organisationnelle.</p>
        </div>

        <AccrocheScenario type="question">
          <p>Et si le MDH-PPH n'était pas seulement un outil d'évaluation individuelle, mais un outil de pilotage collectif ? Quand plusieurs analyses convergent vers les mêmes leviers d'action, c'est une opportunité précieuse : modifier un élément de l'organisation pour améliorer la qualité de vie de plusieurs personnes à la fois. C'est l'étape où le MDH-PPH passe du projet individuel à la politique institutionnelle.</p>
        </AccrocheScenario>

        <SectionModule eyebrow="Introduction" titre="Le MDH-PPH comme outil organisationnel">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier les patterns d'obstacles environnementaux récurrents que l'institution elle-même produit",
              "Comprendre les leviers pour construire une culture institutionnelle inclusive",
              "Organiser la coordination interprofessionnelle autour du cadre MDH-PPH",
              "Définir le rôle de la direction dans le portage du changement institutionnel",
              "Articuler le MDH-PPH avec les partenaires extérieurs à l'institution"
            ]} />
          </ConceptBox>
          <Texte>Le MDH-PPH n'est pas seulement un outil d'analyse individuelle. Il a une portée organisationnelle et stratégique. Lorsqu'une équipe commence à analyser systématiquement les situations à travers son prisme, elle commence à révéler des patterns d'obstacles environnementaux récurrents — des obstacles que l'institution elle-même produit, souvent sans le savoir.</Texte>

          <PullQuote>
            Quand plusieurs personnes rencontrent le même obstacle, c'est un signal précieux : une opportunité d'amélioration collective qui bénéficiera à tous.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Leçon 5.1" titre="Du projet individuel à la transformation organisationnelle">
          <Texte>L'analyse collective régulière des situations à travers le prisme du MDH-PPH révèle des obstacles structurels récurrents que les professionnels, pris dans le quotidien, n'auraient pas identifiés autrement.</Texte>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#3DBFA0] mb-2">Individuel</p>
              <p className="text-sm text-white/70 leading-snug">L'analyse MDH-PPH commence toujours par une situation particulière : une personne, un contexte, des obstacles identifiés</p>
            </div>
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-[#3DBFA0] mb-2">Collectif</p>
              <p className="text-sm text-white/70 leading-snug">Quand plusieurs analyses convergent vers les mêmes obstacles, le niveau d'intervention devient organisationnel</p>
            </div>
          </div>

          <HighlightBox label="Des exemples de leviers d'amélioration collective" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Adapter les horaires de repas pour mieux respecter les rythmes individuels des personnes accompagnées",
              "Diversifier les activités pour que chacun trouve une forme de participation qui lui convient vraiment",
              "Stabiliser les équipes en fin de semaine pour offrir une continuité relationnelle aux personnes qui y sont sensibles",
              "Former les équipes à la communication alternative pour mieux inclure les personnes ayant des troubles du langage"
            ]} />
          </HighlightBox>

          <TableauComparaison
            titre="De l'analyse individuelle à l'action collective"
            colonnes={[
              {
                titre: "Observation individuelle MDH-PPH",
                contenu: [
                  "Plusieurs résidents refusent les activités du vendredi car l'équipe change (obstacle social méso)",
                  "Les habitudes alimentaires culturelles ou personnelles ne sont pas respectées (obstacle physique micro)",
                  "Les personnes ne peuvent pas choisir leurs activités de loisirs (obstacle d'autodétermination méso)",
                  "Les changements non annoncés dans l'organisation génèrent de l'anxiété chez plusieurs résidents (obstacle psychologique micro)"
                ]
              },
              {
                titre: "Action organisationnelle possible",
                contenu: [
                  "Stabiliser les roulements d'équipe en fin de semaine et anticiper les remplacements",
                  "Diversifier les menus et consulter les résidents sur leurs préférences alimentaires",
                  "Mettre en place des espaces de choix et de co-décision dans la programmation des activités",
                  "Instaurer des rituels d'annonce des changements et des temps de transition préparés"
                ]
              }
            ]}
          />

          <Texte>Cette lecture organisationnelle ouvre la voie à des modifications durables — de règlements, de procédures, de répartitions de ressources — qui bénéficient à l'ensemble des personnes accompagnées, pas seulement à celles dont la situation a été analysée individuellement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Leçon 5.2" titre="Construire une culture institutionnelle inclusive">
          <Texte>Adopter le MDH-PPH dans une institution ne se fait pas par décret. Cela exige un travail de fond sur la culture professionnelle. La culture institutionnelle se lit dans les pratiques informelles : ce qu'on dit autour de la table de soins, la façon dont on parle des résidents en leur absence, les décisions prises sans les concerner directement.</Texte>

          <HighlightBox label="Ce qui révèle une culture institutionnelle inclusive" couleur="vert">
            <Liste items={[
              "On parle des personnes accompagnées avec respect et en termes de capacités, même dans les espaces informels",
              "Les décisions qui les concernent intègrent leur point de vue, même quand c'est un effort d'organisation",
              "Le langage utilisé en équipe reflète une vision globale de la personne — pas seulement son diagnostic",
              "Les valeurs affichées dans le projet institutionnel se retrouvent dans les choix concrets du quotidien",
              "Les personnes accompagnées sont invitées à être actrices — pas seulement sujets — des réunions qui les concernent"
            ]} />
          </HighlightBox>

          <SchemaEtapes
            titre="Les leviers du changement culturel"
            etapes={[
              {
                niveau: "Levier 1",
                nom: "Formation pratique et ancrée",
                definition: "La formation initiale et continue des équipes est indispensable — mais elle doit être pratique, ancrée dans les situations réelles de l'institution, et non purement théorique. Une formation sur le MDH-PPH sans analyse de situations vécues reste abstraite et ne change pas les pratiques."
              },
              {
                niveau: "Levier 2",
                nom: "Supervision clinique régulière",
                definition: "La supervision clinique et institutionnelle régulière permet d'intégrer le modèle dans la réflexion quotidienne. Ce n'est pas un luxe : c'est une condition du changement durable. Sans espace de réflexion régulier, les équipes reviennent aux habitudes sous pression."
              },
              {
                niveau: "Levier 3",
                nom: "Langage commun dans les écrits",
                definition: "Adopter la nomenclature MDH-PPH dans les écrits professionnels, les projets personnalisés, les synthèses d'équipe renforce progressivement l'ancrage du modèle. On ne parle plus de 'comportements difficiles' mais d'obstacles environnementaux. Ce changement de langage change la pensée."
              },
              {
                niveau: "Levier 4",
                nom: "Portage par la direction",
                definition: "La direction doit incarner les valeurs d'inclusion dans ses processus de décision, ses allocations de ressources et ses politiques de personnel. La cohérence entre discours et pratique institutionnelle est la condition de la crédibilité du changement. Une direction qui parle d'autodétermination mais n'accorde aucune flexibilité aux équipes envoie un message contradictoire."
              }
            ]}
            note="Le changement de paradigme prend du temps — et il demande de la persévérance institutionnelle, pas seulement des bonnes intentions"
          />

          <PullQuote>
            Une institution inclusive se construit jour après jour, dans les petits gestes professionnels autant que dans les grandes décisions institutionnelles.
          </PullQuote>
        </SectionModule>

        <AccrocheScenario type="reflexion">
          <p>Pensez à un moment récent dans votre institution où vous avez vu un collègue faire quelque chose de remarquable pour une personne accompagnée — un geste d'écoute, une adaptation spontanée, une attention au détail. Ce type de moment révèle ce que vos équipes savent déjà faire. Comment le MDH-PPH pourrait-il vous aider à le faire encore plus souvent, de façon plus systématique et partagée ?</p>
        </AccrocheScenario>

        <SectionModule eyebrow="Leçon 5.3" titre="La coordination interprofessionnelle au service de la participation">
          <Texte>La mise en œuvre du MDH-PPH dans les pratiques institutionnelles suppose une coordination interprofessionnelle efficace. Les situations complexes — polyhandicap, double diagnostic, vieillissement — nécessitent la mobilisation de compétences multiples, qui ne peuvent s'articuler que si elles partagent un cadre commun d'analyse.</Texte>

          <ConceptBox label="La réunion de synthèse transformée" titre="D'un rapport disciplinaire à une analyse collective">
            <Texte>Avec le MDH-PPH, la réunion de synthèse n'est plus un moment où chaque professionnel reporte ses observations disciplinaires en silo. Elle devient un espace collectif d'analyse interactionnelle : ensemble, l'équipe cartographie les facteurs personnels, identifie les obstacles et facilitateurs environnementaux, évalue les habitudes de vie et décide des interventions prioritaires.</Texte>
            <Texte>Ce type de réunion exige une animation structurée, une clarification des rôles de chacun, un espace de parole équitable entre professions, et — dans l'idéal — la participation ou l'avis direct de la personne accompagnée.</Texte>
          </ConceptBox>

          <TableauComparaison
            titre="La réunion de synthèse avant et après le MDH-PPH"
            colonnes={[
              {
                titre: "Réunion disciplinaire classique",
                contenu: [
                  "Chaque professionnel rapporte ses observations en silo",
                  "La personne est objet de la réunion, pas acteur",
                  "Les objectifs sont formulés par discipline",
                  "La coordination reste informelle et partielle",
                  "Les décisions reflètent la hiérarchie professionnelle"
                ]
              },
              {
                titre: "Réunion MDH-PPH collective",
                contenu: [
                  "L'équipe analyse collectivement l'interaction personne-environnement",
                  "La voix de la personne est intégrée ou représentée explicitement",
                  "Les objectifs sont formulés en termes de participation",
                  "Les rôles de chacun sont coordonnés autour d'un plan commun",
                  "Les décisions reflètent les priorités de la personne"
                ]
              }
            ]}
          />

          <HighlightBox label="Coordination avec les partenaires extérieurs" couleur="bleu">
            <Texte>La coordination avec les partenaires extérieurs — proches aidants, médecins, services de soins ambulatoires, institutions scolaires ou professionnelles — est essentielle. Le MDH-PPH offre un cadre de communication qui facilite ces échanges en fournissant un vocabulaire commun et une logique d'analyse partagée. Quand l'institution parle d'obstacles environnementaux et que le médecin parle de symptômes, les deux doivent pouvoir s'articuler sans se contredire.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 5.4" titre="Le rôle de la direction dans le portage du changement">
          <Texte>Le changement de paradigme — du modèle médical vers le modèle socio-environnemental du MDH-PPH — ne peut pas reposer uniquement sur la bonne volonté des équipes de terrain. Il demande un portage institutionnel clair.</Texte>

          <SchemaEtapes
            titre="Ce que la direction doit incarner"
            etapes={[
              {
                niveau: "Dimension 1",
                nom: "Cohérence entre discours et décisions",
                definition: "Toute décision de gestion envoie un message sur ce qui compte vraiment dans l'institution. L'allocation du temps de réunion, la formation accordée ou refusée, la flexibilité des horaires — chaque décision est un acte de politique institutionnelle."
              },
              {
                niveau: "Dimension 2",
                nom: "Soutien visible aux équipes en transition",
                definition: "Le passage du modèle médical au modèle MDH-PPH génère des résistances légitimes. Les équipes ont besoin d'entendre que l'institution les accompagne dans ce processus, qu'elles ont le droit de se tromper et d'apprendre, et que le changement est un projet institutionnel partagé — pas une injonction descendante."
              },
              {
                niveau: "Dimension 3",
                nom: "Mesure et reddition de comptes sur la participation",
                definition: "L'institution doit se doter d'indicateurs de résultats centrés sur la participation sociale — pas seulement sur la conformité aux procédures ou la satisfaction de la famille. Des questions comme 'quel pourcentage de résidents participent à des activités de leur choix ?' doivent devenir des indicateurs de pilotage."
              }
            ]}
            note="Une institution qui mesure seulement la conformité procédurale ne sait pas si elle contribue à la participation de ses résidents"
          />

          <div className="bg-gray-50 border-l-4 border-[#3DBFA0] rounded-r-xl px-6 py-5 my-8">
            <p className="text-xs font-semibold text-[#1B2D5B] uppercase tracking-wider mb-2">Fil rouge — Le foyer de Lena, un an après</p>
            <p className="text-gray-700 text-sm leading-relaxed">En partant de l'analyse de la situation de Lena, la directrice du foyer a convoqué une réunion institutionnelle. Les équipes ont cartographié les obstacles récurrents sur l'ensemble des résidents. Trois modifications organisationnelles ont été décidées : stabilisation des équipes en fin de semaine, création d'un conseil de participation des résidents pour co-décider des activités, et formation de tous les éducateurs à la communication alternative. Six mois plus tard, le taux de participation aux activités a augmenté significativement. L'histoire de Lena a transformé une institution.</p>
          </div>

          <PullQuote>
            Chaque professionnel qui comprend que le handicap n'est pas dans la personne mais dans l'interaction, que son rôle est d'agir sur l'environnement autant que sur la personne, que la participation sociale est le seul indicateur qui compte vraiment — ce professionnel devient un acteur de l'inclusion.
          </PullQuote>
        </SectionModule>

      </div>

      <div className="bg-[#F0F4FF] py-16 px-8 mt-8">
        <div className="max-w-4xl mx-auto">
          <Quiz
            questions={[
              {
                question: "Plusieurs résidents refusent les activités du vendredi. L'analyse MDH-PPH révèle un roulement d'équipe instable et des activités imposées sans consultation. Quelle est la première action prioritaire ?",
                reponses: [
                  "Proposer des activités plus reposantes le vendredi après-midi pour les résidents fatigués",
                  "Lever les obstacles identifiés : stabiliser l'équipe du vendredi et co-construire les activités avec les résidents",
                  "Prescrire un bilan médical pour comprendre la fatigue des résidents le vendredi",
                  "Supprimer les activités du vendredi qui ne conviennent manifestement pas à cette population"
                ],
                bonneReponse: 1,
                explication: "L'analyse MDH-PPH a identifié deux obstacles environnementaux : un obstacle social méso (roulement d'équipe instable) et un obstacle d'autodétermination (activités imposées sans consultation). La priorité est d'agir sur ces obstacles environnementaux — pas de traiter un symptôme médical inexistant ou de supprimer une opportunité de participation."
              },
              {
                question: "Comment le MDH-PPH contribue-t-il à renforcer la culture inclusive d'une institution ?",
                reponses: [
                  "En remplaçant le projet d'établissement par un nouveau document standardisé",
                  "En donnant à toutes les équipes un langage commun et des outils partagés pour parler des personnes en termes de participation et de ressources",
                  "En imposant un format unique de réunion pour toutes les institutions",
                  "En confiant l'évaluation à des experts externes plutôt qu'aux équipes de terrain"
                ],
                bonneReponse: 1,
                explication: "Le MDH-PPH contribue à la culture inclusive en outillant les équipes : un vocabulaire commun (facteurs personnels, obstacles, habitudes de vie), des outils structurés (MHAVIE, MQE), et une logique centrée sur la participation. Quand toute l'équipe parle le même langage et utilise les mêmes cadres d'analyse, la cohérence culturelle se construit naturellement."
              },
              {
                question: "Qu'est-ce qu'une réunion de synthèse transformée par le MDH-PPH permet de faire différemment ?",
                reponses: [
                  "Réduire le nombre de participants pour des réunions plus efficaces",
                  "Permettre à chaque professionnel de présenter ses observations disciplinaires en plus de détail",
                  "Analyser collectivement l'interaction personne-environnement plutôt que de juxtaposer les rapports par discipline",
                  "Déléguer les décisions au professionnel ayant le plus d'expérience avec la personne"
                ],
                bonneReponse: 2,
                explication: "La réunion MDH-PPH n'est plus une juxtaposition de rapports disciplinaires. Elle devient un espace d'analyse collective interactionnelle : tous analysent ensemble les facteurs personnels, les obstacles et facilitateurs environnementaux, et décident ensemble des priorités d'intervention. Le cadre partagé permet une vraie coordination — pas seulement une succession de monologues."
              },
              {
                question: "Lequel de ces éléments correspond au rôle de la direction dans le portage du changement MDH-PPH ?",
                reponses: [
                  "Déléguer entièrement la mise en œuvre du modèle aux équipes de terrain",
                  "Mesurer seulement la conformité aux procédures administratives comme indicateur de qualité",
                  "Afficher les valeurs d'inclusion dans le projet d'établissement sans modifier les décisions de gestion",
                  "Assurer la cohérence entre les valeurs affichées et les décisions concrètes d'allocation de ressources"
                ],
                bonneReponse: 3,
                explication: "La direction doit incarner le changement dans ses actes de gestion : allocation du temps de formation, flexibilité accordée aux équipes, indicateurs de pilotage centrés sur la participation. Sans cohérence entre discours et décisions, le changement reste une intention sans effet sur les pratiques réelles."
              },
              {
                question: "Pourquoi le MDH-PPH facilite-t-il la coordination avec les partenaires extérieurs à l'institution ?",
                reponses: [
                  "Parce qu'il impose un format standard de compte-rendu reconnu par tous les partenaires",
                  "Parce qu'il fournit un vocabulaire commun et une logique d'analyse partagée entre acteurs de disciplines différentes",
                  "Parce qu'il remplace les autres outils d'évaluation utilisés par les partenaires médicaux",
                  "Parce qu'il simplifie la situation de la personne pour la rendre compréhensible aux non-spécialistes"
                ],
                bonneReponse: 1,
                explication: "Le MDH-PPH offre un cadre d'analyse qui peut être partagé entre professionnels de disciplines différentes — éducateurs, médecins, thérapeutes, familles. Le vocabulaire commun (facteurs personnels, obstacles environnementaux, habitudes de vie, participation) permet des échanges plus structurés et une coordination plus efficace entre acteurs qui travaillent habituellement avec des référentiels différents."
              },
              {
                question: "Quel est le passage clé opéré dans ce module par rapport aux modules précédents ?",
                reponses: [
                  "Le passage du modèle médical au modèle MDH-PPH dans la compréhension individuelle du handicap",
                  "Le passage de l'analyse individuelle d'une situation à la transformation organisationnelle de l'institution",
                  "Le passage de l'évaluation qualitative à l'évaluation quantitative avec les outils MHAVIE et MQE",
                  "Le passage de la théorie MDH-PPH à son application dans des situations cliniques complexes"
                ],
                bonneReponse: 1,
                explication: "Ce module opère le passage de l'utilisation individuelle du MDH-PPH (analyser la situation de Lena, construire son plan) à l'utilisation collective et organisationnelle : quand plusieurs analyses convergent vers les mêmes obstacles, l'enjeu n'est plus de modifier le projet de vie d'une personne, mais de transformer l'organisation qui produit ces obstacles. C'est le niveau institutionnel du MDH-PPH."
              },
              {
                question: "Pourquoi la mesure de la conformité aux procédures administratives ne suffit-elle pas à évaluer la qualité d'une institution inclusive ?",
                reponses: [
                  "Parce que les procédures sont trop complexes pour être évaluées objectivement",
                  "Parce que la conformité procédurale ne dit rien de la participation sociale effective des personnes accompagnées",
                  "Parce que les résidents ne savent pas évaluer la qualité de leur accompagnement",
                  "Parce que seuls les indicateurs financiers reflètent réellement la qualité institutionnelle"
                ],
                bonneReponse: 1,
                explication: "Une institution peut respecter toutes les procédures administratives et documenter parfaitement ses interventions, tout en produisant des situations de handicap pour ses résidents. Le MDH-PPH propose une mesure centrée sur les résultats de participation — combien de personnes réalisent leurs habitudes de vie de façon satisfaisante ? — et non sur la conformité des processus. C'est un changement fondamental d'indicateur de qualité."
              }
            ]}
            onValiderModule={onValiderModule}
          />
        </div>
      </div>

    </div>
  )
}
