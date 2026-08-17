import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module6Vieillissement({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={6}
        categorie="Handicap et vieillissement"
        titre="Culture institutionnelle"
        titrePart2="et évolution des structures"
        sousTitre="Évaluer la maturité de son institution, planifier les adaptations, et comprendre le rôle de chaque professionnel dans la transformation."
        duree="40 minutes"
        niveau="Confirmé"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Du geste individuel à la culture institutionnelle">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Évaluer honnêtement la maturité de votre institution face au vieillissement",
              "Distinguer les trois niveaux d'adaptation institutionnelle",
              "Identifier les leviers d'action selon votre rôle professionnel",
              "Comprendre pourquoi les pratiques individuelles s'inscrivent dans une culture collective"
            ]} />
          </ConceptBox>
          <Texte>Les modules précédents ont exploré les dimensions individuelles de l'accompagnement : comment observer, comment communiquer, comment adapter, comment coordonner. Ce dernier module prend du recul pour s'intéresser au niveau institutionnel : comment une institution dans son ensemble peut-elle évoluer pour mieux répondre au défi du vieillissement de sa population ?</Texte>
          <Texte>Ce changement de niveau est important. Les pratiques individuelles ne peuvent s'améliorer durablement que si elles s'inscrivent dans une culture institutionnelle qui les soutient, les valorise et les organise.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Évaluer la maturité de son institution face au vieillissement">
          <Texte>Avant de vouloir changer les choses, il faut savoir d'où l'on part. Il ne s'agit pas de porter des jugements de valeur sur l'institution ou ses dirigeants, mais de mesurer lucidement l'écart entre la réalité actuelle et ce qui serait nécessaire pour accompagner dignement une population vieillissante.</Texte>

          <HighlightBox label="Auto-diagnostic institutionnel : 5 dimensions" couleur="bleu">
            <Texte><strong>1. Connaissance de la population :</strong> Sait-on combien de personnes ont plus de 45, 50, 55, 60 ans ? A-t-on analysé comment cette proportion évoluera dans les 5 prochaines années ?</Texte>
            <Texte><strong>2. Compétences de l'équipe :</strong> Les professionnels ont-ils bénéficié d'une formation sur le vieillissement ? Sait-on utiliser les grilles d'évaluation de la douleur adaptées ?</Texte>
            <Texte><strong>3. Outils et procédures :</strong> Les PPA intègrent-ils une dimension vieillissement à partir de 45 ans ? Existe-t-il un protocole de signalement ? Les documents de transmission sont-ils standardisés ?</Texte>
            <Texte><strong>4. Partenariats :</strong> Y a-t-il des conventions formalisées avec des partenaires médicaux et gériatriques ? L'institution sait-elle à qui s'adresser en cas de démence, de comportement défi lié au vieillissement, de fin de vie ?</Texte>
            <Texte><strong>5. Environnement physique :</strong> Les locaux sont-ils accessibles à des personnes à mobilité réduite ? Y a-t-il des espaces calmes adaptés aux personnes avec troubles cognitifs ?</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Trois niveaux d'adaptation organisationnelle">
          <Texte>Transformer une institution pour qu'elle réponde mieux aux besoins des personnes vieillissantes ne se fait pas en six mois. C'est un processus progressif qui demande une vision, des ressources, et une mobilisation de l'ensemble des acteurs.</Texte>

          <SchemaEtapes
            titre="Les trois niveaux d'adaptation"
            etapes={[
              { niveau: "Court terme", nom: "Adaptations immédiates", definition: "Sans ressources supplémentaires, avec la volonté de l'équipe et de l'encadrement" },
              { niveau: "12-24 mois", nom: "Adaptations à moyen terme", definition: "Nécessitent planification et ressources, mais restent accessibles" },
              { niveau: "Long terme", nom: "Transformations structurelles", definition: "Modifient le fonctionnement même de l'institution, dialogue avec les autorités de financement" }
            ]}
          />

          <TableauComparaison
            titre="Exemples concrets par niveau d'adaptation"
            colonnes={[
              {
                titre: "Niveau",
                contenu: ["Adaptations immédiates", "Moyen terme (12-24 mois)", "Transformations structurelles"]
              },
              {
                titre: "Exemples d'actions",
                contenu: [
                  "Intégrer vieillissement dans les PPA dès la prochaine révision · Lister les personnes de +45 ans · Protocole simple de signalement · Désigner un référent 'vieillissement' dans l'équipe",
                  "Formation continue du personnel · Aménagements prioritaires (barres d'appui, éclairage, signalétique) · Formalisation des partenariats · Document de transmission standardisé",
                  "Créer une unité dédiée aux personnes vieillissantes · Recruter du personnel infirmier · Développer des offres de répit ou d'accueil temporaire"
                ]
              }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Le rôle de chaque professionnel dans la transformation">
          <Texte>Il est tentant de penser que les changements institutionnels relèvent exclusivement de la direction et que le professionnel de terrain ne peut qu'attendre les décisions du haut. C'est une erreur qui génère de l'impuissance et de la frustration.</Texte>
          <PullQuote>
            Les changements institutionnels les plus durables s'enracinent dans la pratique quotidienne des équipes de terrain.
          </PullQuote>

          <TableauComparaison
            titre="Ce que chaque acteur peut faire"
            colonnes={[
              {
                titre: "Rôle",
                contenu: ["Professionnel de terrain", "Cadre intermédiaire", "Direction"]
              },
              {
                titre: "Leviers d'action",
                contenu: [
                  "Documenter avec précision · Proposer des adaptations concrètes · Partager ses observations en réunion · Être l'avocat de la personne accompagnée",
                  "Créer du temps pour les débriefings et analyses · Soutenir les initiatives du terrain · Faire remonter les besoins à la direction · Assurer la cohérence des pratiques",
                  "Traduire la vision en moyens concrets · Développer les partenariats stratégiques · Dialoguer avec les autorités de financement · Porter publiquement la cause du vieillissement digne"
                ]
              }
            ]}
          />

          <HighlightBox label="La pyramide des âges comme outil stratégique" couleur="vert">
            <Texte>Analyser la pyramide des âges de sa propre structure (c'est-à-dire regarder combien de personnes ont plus de 45, 50, 55, 60 ans) permet de <strong>prévoir ce qui va se passer dans 5 ou 10 ans</strong> et de commencer à y répondre maintenant. Ce travail ne se fait pas du jour au lendemain, ce qui rend l'anticipation d'autant plus nécessaire.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion de la formation" titre="Une conviction à partager">
          <PullQuote>
            Le vieillissement des personnes en situation de handicap n'est pas un problème à gérer. C'est une étape de vie à honorer.
          </PullQuote>
          <Texte>Ces personnes, qui ont souvent traversé des épreuves considérables, qui ont construit leur vie malgré de nombreux obstacles, méritent une vieillesse digne, entourée de personnes qui les connaissent, dans des lieux qui leur sont familiers.</Texte>
          <Texte>Cette conviction ne se décrète pas. Elle se construit jour après jour, dans chaque geste professionnel, dans chaque décision d'équipe, dans chaque adaptation mise en place avec soin et respect.</Texte>

          <HighlightBox label="Ce que cette formation vous a donné" couleur="bleu">
            <Liste items={[
              "Module 1, Comprendre : les mécanismes du vieillissement prématuré et les profils spécifiques",
              "Module 2, Observer : les signaux physiques, cognitifs et comportementaux, le biais d'overshadowing",
              "Module 3, Adapter : PPA, activités, rythmes, communication, soutien aux proches",
              "Module 4, Intervenir : comportements défis, méthode A-B-C, postures professionnelles",
              "Module 5, Coordonner : acteurs suisses romands, outils, transitions dignes",
              "Module 6, Transformer : maturité institutionnelle, niveaux d'adaptation, rôle de chacun"
            ]} />
          </HighlightBox>

          <Texte>C'est ce travail, collectif et exigeant, qui donne son sens à votre engagement professionnel.</Texte>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Selon ce module, pourquoi les pratiques individuelles ne peuvent-elles pas s'améliorer durablement seules ?",
            reponses: [
              "Parce que les professionnels manquent de compétences individuelles",
              "Parce qu'elles doivent s'inscrire dans une culture institutionnelle qui les soutient, les valorise et les organise",
              "Parce que les financements cantonaux imposent des pratiques uniformes",
              "Parce que les résidents ne répondent qu'aux approches collectives"
            ],
            bonneReponse: 1,
            explication: "Les pratiques individuelles isolées ne peuvent pas se maintenir dans le temps si la culture institutionnelle ne les soutient pas. C'est pourquoi ce module s'intéresse au niveau institutionnel : comment une organisation entière peut évoluer pour mieux répondre au vieillissement de sa population."
          },
          {
            question: "Parmi les 5 dimensions de l'auto-diagnostic institutionnel, laquelle est souvent la plus facile à améliorer rapidement ?",
            reponses: [
              "L'environnement physique : travaux d'aménagement",
              "Les partenariats : nécessitent des conventions signées",
              "La connaissance de la population : analyse de données existantes",
              "Les compétences de l'équipe : nécessite un plan de formation pluriannuel"
            ],
            bonneReponse: 2,
            explication: "La connaissance de la population (pyramide des âges, évolution sur 5 ans) repose sur des données déjà disponibles dans l'institution et peut être réalisée rapidement avec les ressources existantes. C'est souvent le premier pas concret vers une anticipation institutionnelle."
          },
          {
            question: "Qu'est-ce qu'une 'adaptation immédiate' dans le cadre de l'évolution institutionnelle ?",
            reponses: [
              "Un changement urgent décidé en réponse à une crise",
              "Une adaptation qui ne nécessite pas de ressources supplémentaires importantes et peut être mise en place rapidement",
              "Un aménagement physique réalisé en urgence pour éviter un accident",
              "Une modification du règlement intérieur approuvée en assemblée générale"
            ],
            bonneReponse: 1,
            explication: "Les adaptations immédiates sont celles qui peuvent être mises en place avec la volonté de l'équipe et de l'encadrement, sans ressources supplémentaires importantes. Exemples : intégrer le vieillissement dans les PPA, lister les personnes de +45 ans, désigner un référent vieillissement dans l'équipe."
          },
          {
            question: "Quel est le levier d'action principal d'un professionnel de terrain dans la transformation institutionnelle ?",
            reponses: [
              "Rédiger un rapport de propositions adressé à la direction",
              "Attendre les décisions de la direction avant d'agir",
              "Documenter avec précision, proposer des adaptations concrètes et être l'avocat de la personne accompagnée",
              "Consulter les familles avant toute modification de pratique"
            ],
            bonneReponse: 2,
            explication: "Les changements institutionnels les plus durables s'enracinent dans la pratique quotidienne du terrain. En documentant, en proposant, en partageant ses observations, un professionnel de terrain contribue concrètement à construire une culture institutionnelle différente, sans attendre que tout vienne d'en haut."
          },
          {
            question: "Pourquoi l'analyse de la pyramide des âges de son institution est-elle un outil stratégique ?",
            reponses: [
              "Elle permet d'obtenir des financements supplémentaires de l'AI",
              "Elle permet de prévoir l'évolution des besoins dans 5-10 ans et de commencer à y répondre maintenant",
              "Elle est obligatoire dans le cadre de l'accréditation des institutions suisses",
              "Elle permet de décider quelles personnes doivent être transférées en EMS"
            ],
            bonneReponse: 1,
            explication: "Analyser combien de personnes ont plus de 45, 50, 55, 60 ans permet de prévoir ce qui va se passer dans 5 ou 10 ans et de commencer à y répondre maintenant : en formant les équipes, en adaptant les locaux, en construisant des partenariats. Ce travail d'anticipation ne se fait pas du jour au lendemain."
          },
          {
            question: "Quelle est la conviction centrale portée par l'ensemble de cette formation ?",
            reponses: [
              "Le vieillissement des personnes en situation de handicap est un problème médical à gérer par des spécialistes",
              "Les institutions doivent systématiquement orienter vers des EMS les personnes de plus de 65 ans",
              "Le vieillissement des personnes en situation de handicap est une étape de vie à honorer, pas un problème à gérer",
              "La coordination interinstitutionnelle est suffisante pour répondre aux besoins du vieillissement"
            ],
            bonneReponse: 2,
            explication: "La conviction centrale de cette formation est que le vieillissement des personnes en situation de handicap n'est pas un problème à gérer, c'est une étape de vie à honorer. Ces personnes méritent une vieillesse digne, entourée de personnes qui les connaissent, dans des lieux qui leur sont familiers. Cette conviction se construit dans chaque geste professionnel quotidien."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
