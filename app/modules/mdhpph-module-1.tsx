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
import { SchemaMDHPPH } from "@/components/module/SchemaMDHPPH"

export function Module1MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="MDH-PPH 2010"
        titre="Le changement de paradigme"
        titrePart2="du modèle médical au modèle interactionnel"
        sousTitre="Vous l'appliquez déjà intuitivement — le MDH-PPH 2010 vous donne le langage commun et le cadre structuré pour le faire encore mieux, en équipe."
        duree="40 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <AccrocheScenario type="scenario">
          <p>Imaginez la réunion de synthèse de Lena. Autour de la table : un éducateur, une ergothérapeute, une infirmière. Chacun connaît Lena — sa fierté quand ses plats sont réussis, son sourire à l'atelier jardinage, ses éclats de voix quand elle chante. Des observations précieuses, des intuitions professionnelles solides. Mais comment les rassembler en un plan d'action cohérent et partagé ? Comment identifier ensemble ce qui aide Lena et ce qu'on pourrait faire de plus ? Le MDH-PPH est précisément ce cadre commun : il donne un nom à ce que vous observez déjà, et une méthode pour passer de l'intuition à l'action collective.</p>
        </AccrocheScenario>

        <SectionModule eyebrow="Fil rouge" titre="Lena, 42 ans — le début de l'histoire">
          <HighlightBox label="Notre fil rouge narratif" couleur="bleu">
            <Texte>Tout au long de cette formation, nous allons suivre <strong>Lena</strong>, 42 ans, qui réside depuis 8 ans dans un foyer de vie. Elle présente une trisomie 21. Elle est passionnée de cuisine, de jardinage et de chant choral. Son équipe lui est très attachée et la connaît bien.</Texte>
            <Texte>Au fil des cinq modules, nous verrons comment le MDH-PPH donne à son équipe les outils pour formaliser ce qu'elle observe déjà — et agir encore plus efficacement pour que Lena vive la vie qu'elle souhaite.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Un changement de regard fondamental">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Expliquer les effets concrets du modèle médical sur les pratiques d'accompagnement",
              "Décrire le changement de paradigme introduit par le MDH-PPH 2010",
              "Comprendre l'équation fondamentale : Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie",
              "Identifier la place du flux temporel dans la lecture d'une situation",
            ]} />
          </ConceptBox>
          <Texte>La manière dont nous conceptualisons le handicap ne relève pas de la philosophie abstraite. Elle détermine ce que nous regardons lors d'une évaluation, comment nous formulons les objectifs, à qui nous attribuons la responsabilité des difficultés rencontrées.</Texte>
          <Texte>Pendant des décennies, le modèle dominant était médical. Ce modèle a rendu d'immenses services — et il reste indispensable. Mais utilisé seul, il ne montre qu'une partie des leviers d'action disponibles. Le MDH-PPH ne le remplace pas : il le complète en rendant visibles les leviers environnementaux.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Deux regards sur le handicap — deux leviers d'action">
          <Texte>Pour comprendre ce que le MDH-PPH apporte, il est utile de le situer par rapport à l'approche médicale classique qui a longtemps structuré les pratiques — et qui reste présente dans certains outils et référentiels. Il ne s'agit pas d'opposer bonne et mauvaise pratique : chaque professionnel agit avec les meilleurs outils dont il dispose. La question est : quels leviers d'action chaque approche rend-elle visibles ?</Texte>

          <HighlightBox label="Ce que le MDH-PPH rend possible" couleur="bleu">
            <Liste couleur="bleu" items={[
              "L'évaluation intègre les ressources et aspirations de la personne — pas seulement ses difficultés",
              "Les objectifs visent la participation sociale : ce que la personne veut faire de sa vie",
              "La personne est vue dans sa globalité — son histoire, ses valeurs, ses liens — pas seulement son diagnostic",
              "L'environnement devient un levier d'action concret : identifier ce qui aide et ce qui freine",
            ]} />
          </HighlightBox>

          <Texte>Intuitivement, la plupart des bons professionnels raisonnent déjà ainsi. Ils savent que Marc s'agite parce que son activité favorite a été supprimée, que Sophie résiste parce qu'elle n'a pas eu son mot à dire. Le MDH-PPH formalise ces intuitions en une méthode rigoureuse et partageable avec toute l'équipe.</Texte>

          <ConceptBox label="Lena — deux lectures, deux leviers" titre="La même situation, vue différemment">
            <Texte>Avec une lecture centrée sur les déficiences, le plan de Lena vise à maintenir ses capacités et réduire ses comportements d'agitation. Avec le MDH-PPH, l'équipe se demande : quels sont les obstacles qui empêchent Lena de cuisiner, de jardiner, de chanter — et comment les lever ? La différence n'est pas dans l'intention, elle est dans la question que l'on se pose.</Texte>
          </ConceptBox>

          <TableauComparaison
            titre="Deux questions pour une même situation"
            colonnes={[
              { titre: "Question centrée déficience", contenu: [
                "Lena s'agite — comment réduire ce comportement ?",
                "Marc ne va plus à l'atelier — quelle est l'origine dans sa pathologie ?",
                "Sophie résiste aux soins — comment améliorer sa compliance ?",
                "Paul s'énerve — quel ajustement médical envisager ?",
              ]},
              { titre: "Question MDH-PPH", contenu: [
                "Qu'est-ce qui, dans l'environnement, empêche Lena de faire ce qui compte pour elle ?",
                "Quels obstacles environnementaux limitent l'accès de Marc à l'atelier ?",
                "Qu'est-ce qui, dans le cadre de soin, pourrait mieux soutenir l'autodétermination de Sophie ?",
                "La situation de Paul a-t-elle changé — et son environnement s'est-il adapté ?",
              ]},
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Le MDH-PPH 2010 : un cadre commun pour vos équipes">
          <Texte>Le Modèle de Développement Humain — Processus de Production du Handicap (MDH-PPH) a été élaboré par l'anthropologue québécois Patrick Fougeyrollas et ses collaborateurs, et il est porté par le RIPPH (Réseau International sur le Processus de Production du Handicap). Première version en 1998, version bonifiée en 2010 (le MDH-PPH 2, publié dans <em>La funambule, le fil et la toile</em>, Fougeyrollas, 2010). C'est un cadre de référence largement utilisé dans l'espace francophone — notamment au Québec et en Suisse romande — et il partage sa vision interactionnelle avec la CIF de l'OMS, tout en s'en distinguant par une séparation plus stricte entre ce qui relève de la personne, de l'environnement et des situations de vie.</Texte>

          <PullQuote>
            Le handicap n'est pas une identité, c'est un résultat : le produit d'une interaction dynamique entre les caractéristiques d'une personne et les conditions de son environnement.
          </PullQuote>

          <Texte>Cette formulation change tout. Une même personne peut être en situation de participation sociale dans un contexte adapté, et en situation de handicap dans un contexte inadapté — sans que ses déficiences aient changé d'un iota.</Texte>

          <HighlightBox label="Un exemple universel" couleur="bleu">
            <Texte>Stephen Hawking : déficiences organiques majeures, incapacités motrices sévères — et pourtant une participation sociale optimale de physicien reconnu mondialement, grâce à des facilitateurs technologiques de pointe. À l'inverse, un astronaute aux capacités physiques parfaites se retrouve en situation de handicap total dans l'espace sans son équipement. Ce n'est pas la biologie qui produit le handicap — c'est l'interaction entre la personne et son milieu.</Texte>
          </HighlightBox>

          <Texte>Le MDH-PPH 2 (2010) apporte quatre bonifications majeures par rapport au PPH (1998) : les <strong>facteurs de risque et de protection</strong> sont désormais intégrés à l'intérieur des trois domaines conceptuels (et non plus placés en amont du modèle comme simples causes) ; les <strong>facteurs environnementaux</strong> sont structurés en trois niveaux — MICRO (personnel), MÉSO (communautaire) et MACRO (sociétal) ; la place des <strong>facteurs identitaires</strong> est considérablement renforcée au sein des facteurs personnels ; et le <strong>flux temporel</strong> est mis en évidence au cœur de l'interaction — rappelant qu'aucune situation n'est figée dans le temps.</Texte>

          <HighlightBox label="Les 3 domaines conceptuels du MDH-PPH 2010 — et leur qualificateur transversal" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Facteurs personnels : identitaires (facilitateur → obstacle), systèmes organiques (intégrité → déficience), aptitudes (capacité → incapacité)",
              "Facteurs environnementaux : micro (personnel), méso (communautaire), macro (sociétal) — chacun sur une échelle de facilitateur à obstacle",
              "Habitudes de vie : 6 activités courantes + 6 rôles sociaux — résultat de l'interaction, de la pleine participation sociale à la situation de handicap",
              "Transversal aux trois domaines : chaque dimension peut agir comme facteur de protection ou facteur de risque (la mention « FP-FR » du schéma officiel) — ce n'est pas un domaine séparé, c'est une lecture qui traverse tout le modèle",
            ]} />
          </HighlightBox>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">3</p>
              <p className="text-sm text-white/70 leading-snug">domaines conceptuels dans le MDH-PPH 2010 : facteurs personnels, facteurs environnementaux et habitudes de vie — traversés par les facteurs de risque et de protection</p>
            </div>
            <div className="bg-[#1B2D5B] text-white rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#3DBFA0] mb-2">12</p>
              <p className="text-sm text-white/70 leading-snug">catégories d'habitudes de vie : 6 activités courantes + 6 rôles sociaux</p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="L'équation fondamentale du modèle">
          <Texte>Au cœur du MDH-PPH se trouve une équation d'une clarté remarquable :</Texte>

          <ConceptBox label="L'équation centrale" titre="Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie">
            <Texte>Le signe de multiplication — et non d'addition — signifie que les deux dimensions interagissent et se conditionnent mutuellement. Modifier l'une transforme le résultat. Si l'environnement est nul, même les meilleures aptitudes personnelles ne produiront pas de participation sociale.</Texte>
            <Texte><em>Précision :</em> cette « équation » est une formulation pédagogique, très utile pour retenir la logique du modèle. Le schéma officiel du MDH-PPH 2 parle, lui, d'une <strong>interaction</strong> entre les trois domaines, traversée par le flux temporel.</Texte>
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

          <SchemaMDHPPH />

          <Texte>Les habitudes de vie sont à la fois le résultat à mesurer et la finalité à viser. Une habitude de vie réalisée de façon pleine et satisfaisante = participation sociale. Une habitude de vie entravée ou insatisfaisante = situation de handicap.</Texte>

          <HighlightBox label="Le flux temporel" couleur="vert">
            <Texte>Une évaluation à un moment donné sert de photographie de référence pour mesurer l'évolution six mois ou deux ans plus tard, après intervention. L'accompagnement n'est jamais terminé : il doit être régulièrement réévalué. Ce principe est fondamental — et il implique des réévaluations planifiées, pas seulement réactives.</Texte>
          </HighlightBox>
        </SectionModule>

        <AccrocheScenario type="reflexion">
          <p>Pensez à une personne que vous accompagnez en ce moment. Si vous deviez nommer ce qui l'anime profondément — ce pour quoi elle se lève le matin, ce qui lui donne le sourire — est-ce que ces éléments sont présents dans son projet personnalisé ? S'ils ne le sont pas encore, ce n'est la faute de personne — c'est souvent simplement que les outils disponibles ne prévoyaient pas de place pour eux. Qu'est-ce que cela changerait de commencer par là ?</p>
        </AccrocheScenario>

        <SectionModule eyebrow="Lena — retour au fil rouge" titre="Ce que le MDH-PPH apporte à l'équipe de Lena">
          <Texte>Avec le MDH-PPH, l'équipe de Lena dispose d'un cadre commun pour aller plus loin. La question n'est pas seulement « Quels soins Lena nécessite-t-elle ? » mais aussi « Dans quelle mesure peut-on transformer ce qui l'entoure pour qu'elle cuisine, jardine et chante encore mieux ? »</Texte>
          <Texte>Ce n'est pas un changement d'intention — l'équipe a toujours voulu le meilleur pour Lena. C'est un élargissement du terrain d'action : en plus d'agir sur Lena, on agit autour d'elle. Nous verrons dans les modules suivants comment cette démarche se déploie concrètement.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Le MDH-PPH 2010 ne remet pas en question l'engagement des professionnels — il l'enrichit d'un cadre structuré. Le handicap n'est pas seulement dans la personne : c'est le résultat de l'interaction entre ses caractéristiques et son environnement. Cette lecture ouvre des leviers d'action concrets pour toute l'équipe.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le handicap est un résultat interactionnel, pas une identité",
              "Modifier l'environnement peut réduire une situation de handicap sans changer les déficiences",
              "L'équation : Facteurs Personnels × Facteurs Environnementaux = Habitudes de Vie",
              "Le flux temporel rappelle que toute situation peut évoluer — dans un sens ou dans l'autre",
              "La question n'est plus « Qu'est-ce que la personne ne peut pas faire ? » mais « Qu'est-ce qui l'empêche de le faire ? »",
            ]} />
          </HighlightBox>

          <HighlightBox label="Références de la formation" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Fougeyrollas, P., Cloutier, R., Bergeron, H., Côté, J. et St-Michel, G. (1998). Classification québécoise : Processus de production du handicap. Québec : RIPPH/SCCIDIH.",
              "Fougeyrollas, P. (2010). La funambule, le fil et la toile. Transformations réciproques du sens du handicap. Québec : Presses de l'Université Laval.",
              "RIPPH — Réseau International sur le Processus de Production du Handicap : ripph.qc.ca (concepts-clés, schéma MDH-PPH 2, outils MHAVIE et MQE).",
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
            explication: "Dans le modèle médical, la difficulté est comprise comme une caractéristique intrinsèque de la personne : c'est donc à elle de s'adapter, avec l'aide des soins et de la réadaptation. Le MDH-PPH élargit ce regard en réintégrant l'environnement dans l'analyse : la difficulté résulte de l'interaction entre la personne et son milieu — ce qui ouvre un second terrain d'action, complémentaire au premier.",
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
            explication: "Le signe × (multiplication) signifie que les deux dimensions se conditionnent mutuellement. Transformer l'environnement peut produire une participation sociale même sans modifier les déficiences ou aptitudes de la personne. C'est le levier fondamental du MDH-PPH. (Rappel : cette équation est une formulation pédagogique de l'interaction décrite dans le schéma officiel.)",
          },
          {
            question: "Selon le MDH-PPH, une personne est en situation de handicap quand :",
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
            question: "Quelles bonifications majeures le MDH-PPH 2 (2010) apporte-t-il par rapport au PPH (1998) ?",
            reponses: [
              "La distinction entre facteurs personnels et facteurs environnementaux",
              "La création d'un quatrième domaine conceptuel indépendant pour les facteurs de risque",
              "L'intégration des facteurs de risque et de protection dans les trois domaines, la structuration de l'environnement en trois niveaux (micro, méso, macro) et la place accrue des facteurs identitaires",
              "La liste des douze catégories d'habitudes de vie",
            ],
            bonneReponse: 2,
            explication: "Dans le MDH-PPH 2 (2010), les facteurs de risque — complétés par les facteurs de protection — ne sont plus placés en amont du modèle : ils sont intégrés à l'intérieur des trois domaines conceptuels (chaque dimension du schéma porte la mention FP-FR). Les facteurs environnementaux sont précisés en trois niveaux (MICRO personnel, MÉSO communautaire, MACRO sociétal), la place des facteurs identitaires est renforcée, et le flux temporel est mis en évidence. Les domaines conceptuels restent au nombre de trois : facteurs personnels, facteurs environnementaux, habitudes de vie. La distinction personne/environnement et les douze catégories existaient déjà en 1998.",
          },
          {
            question: "Pourquoi le MDH-PPH invite-t-il à aller au-delà du projet centré uniquement sur les soins ?",
            reponses: [
              "Parce que les soins ne sont pas utiles pour les personnes en situation de handicap",
              "Parce que les habitudes de vie valorisées par la personne — ce qu'elle aime faire — sont un levier d'action essentiel pour la participation sociale",
              "Parce que les médecins ne doivent pas intervenir dans les projets personnalisés",
              "Parce que les objectifs mesurables ne s'appliquent qu'aux rôles sociaux",
            ],
            bonneReponse: 1,
            explication: "Le MDH-PPH complète la dimension soin en ajoutant les habitudes de vie valorisées par la personne. Lena est passionnée de cuisine, de jardinage et de chant — ces éléments sont des leviers d'action puissants pour sa participation sociale. Le MDH-PPH permet de les intégrer formellement dans le projet personnalisé.",
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
          {
            question: "Lorsque l'environnement de Lena est radicalement amélioré (facilitateurs maximaux), que se passe-t-il avec ses déficiences organiques liées à la trisomie 21 ?",
            reponses: [
              "Les déficiences organiques diminuent grâce à la stimulation positive de l'environnement",
              "Les déficiences organiques restent inchangées, mais leur impact sur la participation sociale est réduit",
              "Les déficiences n'ont plus aucune importance : seul l'environnement compte",
              "L'environnement ne peut compenser que les incapacités physiques, pas les déficiences cognitives",
            ],
            bonneReponse: 1,
            explication: "Le MDH-PPH est précis sur ce point : les déficiences organiques sont des réalités biologiques qui ne disparaissent pas. Ce qui change avec un environnement adapté, c'est leur impact sur la réalisation des habitudes de vie — et donc sur la participation sociale. C'est précisément cette distinction entre ce qui est 'dans la personne' et ce qui peut être transformé 'autour d'elle' qui fonde la puissance opérationnelle du modèle.",
          },
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
