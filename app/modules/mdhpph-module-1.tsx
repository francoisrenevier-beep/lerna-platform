import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module1MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="MDH-PPH 2018"
        titre="Le changement de paradigme"
        titrePart2="du modèle médical au modèle interactionnel"
        sousTitre="Comprendre pourquoi le regard que nous portons sur le handicap définit le cœur même de nos pratiques — et comment le MDH-PPH 2018 transforme radicalement cette question."
        duree="40 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Fil rouge" titre="Lena, 42 ans — le début de l'histoire">
          <HighlightBox label="Notre fil rouge narratif" couleur="bleu">
            <Texte>Tout au long de cette formation, nous allons suivre <strong>Lena</strong>, 42 ans, qui réside depuis 8 ans dans un foyer de vie. Elle présente une trisomie 21, des aptitudes langagières réduites. Elle est passionnée de cuisine, de jardinage et de chant choral. Son projet personnalisé actuel liste ses soins, ses activités thérapeutiques et ses rendez-vous médicaux. Il ne mentionne nulle part ses passions.</Texte>
            <Texte>Au fil des cinq modules, nous verrons comment le MDH-PPH transforme le regard porté sur Lena — et, par ricochet, sur chacune des personnes que vous accompagnez.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Un changement de regard fondamental">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Expliquer les effets concrets du modèle médical sur les pratiques d'accompagnement",
              "Décrire le changement de paradigme introduit par le MDH-PPH 2018",
              "Comprendre l'équation fondamentale : Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie",
              "Identifier la place du flux temporel dans la lecture d'une situation",
            ]} />
          </ConceptBox>
          <Texte>La manière dont nous conceptualisons le handicap ne relève pas de la philosophie abstraite. Elle détermine ce que nous regardons lors d'une évaluation, comment nous formulons les objectifs, à qui nous attribuons la responsabilité des difficultés rencontrées.</Texte>
          <Texte>Pendant des décennies, le modèle dominant était médical. Ce modèle a rendu d'immenses services — mais il a aussi produit des angles morts majeurs dans les pratiques institutionnelles.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Le modèle médical et ses effets sur les pratiques">
          <Texte>Dans le modèle médical, la déficience est perçue comme une caractéristique intrinsèque de la personne. C'est elle qui est « anormale », c'est à elle de s'adapter, c'est sa pathologie qui explique ses difficultés. L'objectif clinique est alors de « réparer » l'individu, de compenser ses manques, de restaurer une norme biologique ou fonctionnelle.</Texte>

          <HighlightBox label="Les quatre effets pervers du modèle médical" couleur="jaune">
            <Liste items={[
              "L'évaluation se concentre sur les déficiences plutôt que sur les ressources",
              "Les projets d'accompagnement se centrent sur les soins et la rééducation, au détriment de la vie sociale",
              "Les personnes sont stigmatisées en étant réduites à leur diagnostic",
              "L'environnement est déresponsabilisé : si c'est la personne le « problème », l'institution n'a pas à changer",
            ]} />
          </HighlightBox>

          <Texte>Ces effets ne sont pas le fruit de mauvaises intentions. La plupart des professionnels qui adoptent un raisonnement médical le font sincèrement, dans l'intention d'aider. Mais l'intention ne suffit pas : c'est la logique du cadre qui oriente les actes.</Texte>

          <ConceptBox label="Lena dans le modèle médical" titre="Ce que son dossier dit d'elle">
            <Texte>Dans le cadre actuel, Lena est décrite par ses déficiences : trisomie 21, aptitudes langagières réduites, difficultés de mémorisation. Son projet personnalisé vise à maintenir ses capacités motrices, assurer ses soins d'hygiène et réduire ses comportements d'agitation. Ses passions pour la cuisine et le jardinage sont notées dans la rubrique « loisirs » — sans objectif, sans levier, sans intention professionnelle.</Texte>
          </ConceptBox>

          <TableauComparaison
            titre="Deux lectures d'une même situation"
            colonnes={[
              { titre: "Lecture médicale", contenu: [
                "Lena agite parce qu'elle a une trisomie 21",
                "Marc ne peut pas aller à l'atelier à cause de sa déficience cognitive",
                "Sophie résiste aux soins en raison de sa pathologie psychiatrique",
                "Paul s'énerve : comportement lié à son handicap neurologique",
              ]},
              { titre: "Lecture MDH-PPH", contenu: [
                "Qu'est-ce qui, dans l'environnement, empêche Lena de faire ce qui compte pour elle ?",
                "Quels obstacles environnementaux limitent l'accès de Marc à l'atelier ?",
                "Le cadre de soin crée-t-il des obstacles à l'autodétermination de Sophie ?",
                "La situation de Paul a-t-elle changé — et son environnement s'est-il adapté ?",
              ]},
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le MDH-PPH 2018 : une révolution conceptuelle">
          <Texte>Le Modèle de Développement Humain – Processus de Production du Handicap (MDH-PPH), élaboré par Patrick Fougeyrollas et l'équipe du RIPPH, a connu plusieurs versions depuis les années 1990. La version bonifiée de 2018 constitue une avancée majeure par rapport aux précédentes.</Texte>

          <PullQuote source="Patrick Fougeyrollas, RIPPH 2018">
            Le handicap n'est plus une identité, c'est un résultat. C'est le produit d'une interaction dynamique entre les caractéristiques d'une personne et les conditions de son environnement.
          </PullQuote>

          <Texte>Cette formulation change tout. Une même personne peut être en situation de participation sociale dans un contexte adapté, et en situation de handicap dans un contexte inadapté — sans que ses déficiences aient changé d'un iota.</Texte>

          <HighlightBox label="Un exemple universel" couleur="bleu">
            <Texte>Stephen Hawking : déficiences organiques majeures, incapacités motrices sévères — et pourtant une participation sociale optimale de physicien reconnu mondialement, grâce à des facilitateurs technologiques de pointe. À l'inverse, un astronaute aux capacités physiques parfaites se retrouve en situation de handicap total dans l'espace sans son équipement. Ce n'est pas la biologie qui produit le handicap — c'est l'interaction entre la personne et son milieu.</Texte>
          </HighlightBox>

          <Texte>La version 2018 introduit deux innovations cruciales absentes des versions précédentes : l'intégration transversale des facteurs de risque et de protection, et le flux temporel — qui rappelle qu'aucune situation n'est figée.</Texte>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">2018</p>
              <p className="text-sm text-white/70 leading-snug">Version bonifiée du MDH-PPH intégrant le flux temporel et les facteurs de risque/protection</p>
            </div>
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">12</p>
              <p className="text-sm text-white/70 leading-snug">catégories d'habitudes de vie mesurées pour évaluer la participation sociale</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'équation fondamentale du modèle">
          <Texte>Au cœur du MDH-PPH se trouve une équation d'une clarté remarquable :</Texte>

          <ConceptBox label="L'équation centrale" titre="Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie">
            <Texte>Le signe de multiplication — et non d'addition — signifie que les deux dimensions interagissent et se conditionnent mutuellement. Modifier l'une transforme le résultat. Si l'environnement est nul, même les meilleures aptitudes personnelles ne produiront pas de participation sociale.</Texte>
          </ConceptBox>

          <SchemaEtapes
            titre="Les trois composantes du MDH-PPH"
            etapes={[
              { niveau: "Ce que la personne est", nom: "Facteurs Personnels", definition: "Identité (âge, histoire de vie, valeurs, culture), systèmes organiques (état du corps, de l'intégrité à la déficience) et aptitudes (capacités à accomplir des activités physiques ou mentales, de la pleine capacité à l'incapacité totale)" },
              { niveau: "Ce qui entoure la personne", nom: "Facteurs Environnementaux", definition: "L'ensemble des dimensions physiques et sociales du milieu de vie, du micro (logement, équipe éducative directe, proches) au macro (politiques sociales, assurances, normes culturelles)" },
              { niveau: "Ce que la personne fait", nom: "Habitudes de Vie", definition: "Les activités courantes et rôles sociaux qui assurent sa survie et son épanouissement. C'est ici que se mesure le résultat de l'interaction : participation sociale ou situation de handicap" },
            ]}
            note="Le flux temporel traverse l'ensemble : cette interaction est dynamique et évolutive — jamais figée"
          />

          <Texte>Les habitudes de vie sont à la fois le résultat à mesurer et la finalité à viser. Une habitude de vie réalisée de façon pleine et satisfaisante = participation sociale. Une habitude de vie entravée ou insatisfaisante = situation de handicap.</Texte>

          <HighlightBox label="Le flux temporel" couleur="vert">
            <Texte>Une évaluation à un moment donné sert de photographie de référence pour mesurer l'évolution six mois ou deux ans plus tard, après intervention. L'accompagnement n'est jamais terminé : il doit être régulièrement réévalué. Ce principe est fondamental — et il implique des réévaluations planifiées, pas seulement réactives.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Lena — retour au fil rouge" titre="Ce que le MDH-PPH change pour Lena">
          <Texte>Avec le MDH-PPH, la question posée à l'équipe n'est plus « Quels soins Lena nécessite-t-elle ? » mais « Dans quelle mesure l'environnement empêche-t-il Lena de cuisiner, de jardiner, de chanter — de faire ce qui donne sens à sa vie ? »</Texte>
          <Texte>Cette question ouvre immédiatement un espace d'action différent. Non plus sur Lena, mais autour d'elle. Non plus compenser ses manques, mais transformer les obstacles en facilitateurs. Nous verrons dans les modules suivants comment cette analyse se déploie concrètement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Le modèle médical, bien qu'animé de bonnes intentions, produit des angles morts dans les pratiques : il attribue les difficultés à la personne, déresponsabilise l'environnement, réduit les individus à leurs déficiences. Le MDH-PPH 2018 propose un changement radical : le handicap n'est pas dans la personne, il est produit par l'interaction entre ses caractéristiques et son environnement.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le handicap est un résultat interactionnel, pas une identité",
              "Modifier l'environnement peut réduire une situation de handicap sans changer les déficiences",
              "L'équation : Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie",
              "Le flux temporel rappelle que toute situation peut évoluer — dans un sens ou dans l'autre",
              "La question n'est plus « Qu'est-ce que la personne ne peut pas faire ? » mais « Qu'est-ce qui l'empêche de le faire ? »",
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Dans le modèle médical, la responsabilité des difficultés d'une personne en situation de handicap est attribuée à :",
            reponses: [
              "L'environnement qui n'est pas suffisamment adapté",
              "La personne elle-même, en raison de ses déficiences",
              "L'interaction entre la personne et son environnement",
              "L'équipe éducative qui n'a pas su s'adapter",
            ],
            bonneReponse: 1,
            explication: "Dans le modèle médical, la déficience est une caractéristique intrinsèque de la personne : c'est elle qui est 'anormale', c'est à elle de s'adapter. Ce modèle déresponsabilise l'environnement, ce que le MDH-PPH remet radicalement en question.",
          },
          {
            question: "Qu'est-ce que l'équation MDH-PPH 'Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie' signifie concrètement ?",
            reponses: [
              "Il faut améliorer les aptitudes de la personne ET adapter l'environnement, de façon indépendante",
              "Les deux dimensions interagissent : modifier l'environnement peut transformer le résultat même si les déficiences ne changent pas",
              "Les facteurs environnementaux sont toujours plus importants que les facteurs personnels",
              "L'équation s'applique uniquement aux personnes avec des déficiences physiques",
            ],
            bonneReponse: 1,
            explication: "Le signe × (multiplication) signifie que les deux dimensions se conditionnent mutuellement. Transformer l'environnement peut produire une participation sociale même sans modifier les déficiences ou aptitudes de la personne. C'est le levier fondamental du MDH-PPH.",
          },
          {
            question: "Selon le MDH-PPH 2018, une personne est en situation de handicap quand :",
            reponses: [
              "Elle présente des déficiences organiques diagnostiquées",
              "Elle ne peut pas accomplir certaines activités de façon autonome",
              "L'interaction entre ses caractéristiques et son environnement entrave ses habitudes de vie",
              "Elle est reconnue comme handicapée par une autorité médicale",
            ],
            bonneReponse: 2,
            explication: "La situation de handicap n'est pas un état de la personne — c'est un résultat produit par l'interaction entre ses facteurs personnels et les obstacles de son environnement. Une même personne peut être en situation de participation dans un contexte adapté et en situation de handicap dans un contexte inadapté.",
          },
          {
            question: "Quelle innovation majeure la version 2018 du MDH-PPH apporte-t-elle par rapport aux versions précédentes ?",
            reponses: [
              "La distinction entre facteurs personnels et facteurs environnementaux",
              "La notion de participation sociale comme indicateur",
              "L'intégration du flux temporel et des facteurs de risque/protection dans toutes les dimensions",
              "La liste des douze catégories d'habitudes de vie",
            ],
            bonneReponse: 2,
            explication: "La version 2018 introduit l'intégration transversale des facteurs de risque et de protection dans toutes les dimensions, et le flux temporel. Ces deux apports rappellent que les situations de handicap sont dynamiques et évolutives — jamais figées.",
          },
          {
            question: "Pourquoi le projet personnalisé de Lena, centré sur ses soins et ses rendez-vous médicaux, illustre-t-il une logique médicale ?",
            reponses: [
              "Parce qu'il ne mentionne aucun objectif de réadaptation",
              "Parce qu'il se concentre sur les déficiences et les soins sans considérer ses habitudes de vie valorisées",
              "Parce qu'il n'a pas été rédigé par un médecin",
              "Parce qu'il ne fixe pas d'objectifs mesurables",
            ],
            bonneReponse: 1,
            explication: "Un projet personnalisé d'inspiration médicale identifie les déficiences, y répond par des soins et de la rééducation, et laisse de côté ce qui constitue la vie de la personne. Lena est passionnée de cuisine, de jardinage et de chant — mais aucun de ces éléments n'est un levier d'action dans son projet actuel.",
          },
          {
            question: "Qu'implique le 'flux temporel' dans le MDH-PPH pour les équipes professionnelles ?",
            reponses: [
              "Qu'il faut évaluer les situations uniquement lors des crises ou des changements",
              "Que les situations de handicap sont définitives une fois établies",
              "Que les réévaluations doivent être planifiées et régulières, pour mesurer l'évolution et adapter les interventions",
              "Qu'une bonne intervention produit des effets immédiats et durables sans suivi",
            ],
            bonneReponse: 2,
            explication: "Le flux temporel rappelle qu'aucune situation n'est figée. Une évaluation à un instant T sert de référence pour mesurer l'évolution après intervention — à 6 mois, à un an. Cela implique des réévaluations planifiées, proactives, pas seulement réactives lors de crises.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
