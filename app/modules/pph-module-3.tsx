import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import { AccrocheScenario } from "@/components/module/AccrocheScenario"

export function Module3PPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Agir sur l'environnement"
        titre="Du diagnostic à l'action"
        titrePart2="transformer l'environnement"
        sousTitre="Traduire une analyse PPH en actions concrètes sur les environnements physique, social et organisationnel — avec méthode et co-construction."
        duree="50 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Compétences visées" titre="Ce que vous allez apprendre">
            <Liste items={[
              "Distinguer les cinq types d'environnements et leurs leviers spécifiques",
              "Identifier obstacles et facilitateurs dans chaque dimension",
              "Appliquer les trois principes d'action du PPH",
              "Concevoir une mesure environnementale robuste à partir d'une analyse PPH",
              "Utiliser la checklist avant toute mise en œuvre"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="De l'observation à la transformation">
          <AccrocheScenario titre="Le passage de l'analyse à l'action">
            <p>Vous avez analysé la situation de Karine (module 2) : obstacles identifiés, hypothèses formulées. Mais l'analyse en elle-même ne change rien à la vie de Karine. Ce module franchit le pas décisif : de comprendre à agir.</p>
          </AccrocheScenario>

          <Texte>Le PPH nous invite à déplacer la focale : du déficit de la personne vers la responsabilité collective de l'environnement. Ce déplacement ne reste pas philosophique — il se traduit en actes concrets, mesurables, co-construits.</Texte>

          <PullQuote>
            L'analyse PPH n'a de valeur que si elle débouche sur des actions concrètes. Le modèle n'est pas un outil d'observation — c'est un modèle d'action.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3.1" titre="Les cinq types d'environnements : leviers d'action spécifiques">
          <Texte>Chaque type d'environnement offre des leviers d'action distincts. Analyser les cinq dimensions permet de ne manquer aucun obstacle — et de ne pas se limiter aux seules barrières physiques.</Texte>

          <HighlightBox label="Principe fondamental" couleur="bleu">
            <Texte>Tout facteur environnemental peut être soit un obstacle soit un facilitateur, selon le contexte et la personne. Notre rôle est de transformer les obstacles en facilitateurs — et de renforcer ceux qui existent déjà.</Texte>
          </HighlightBox>

          {/* Environnement 1 */}
          <div className="border border-[#1B2D5B]/10 rounded-xl p-5 mb-4 bg-[#1B2D5B]/3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1B2D5B] mb-2">Environnement 1 — Physique et architectural</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Accessibilité des bâtiments, qualité acoustique, luminosité, configuration des espaces, transports, équipements disponibles.</p>
            <Liste items={[
              "Aménager les espaces pour une accessibilité universelle",
              "Adapter l'acoustique des salles (moquette, panneaux absorbants)",
              "Installer des équipements adaptés aux besoins identifiés",
              "Garantir l'accessibilité des transports et des déplacements"
            ]} />
          </div>

          {/* Environnement 2 */}
          <div className="border border-[#3DBFA0]/20 rounded-xl p-5 mb-4 bg-[#3DBFA0]/3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#3DBFA0] mb-2">Environnement 2 — Social et humain</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Attitudes et comportements des proches, des professionnels et de la société. Les obstacles attitudinaux — préjugés, infantilisation, sous-estimation — sont souvent les plus invisibles et les plus impactants.</p>
            <Liste items={[
              "Former les équipes à une communication adaptée et respectueuse",
              "Travailler les représentations et les préjugés des professionnels",
              "Renforcer le réseau de soutien de la personne (proches, pairs)",
              "Favoriser les relations de pair à pair entre personnes accompagnées"
            ]} />
          </div>

          {/* Environnement 3 */}
          <div className="border border-amber-200 rounded-xl p-5 mb-4 bg-amber-50/50">
            <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">Environnement 3 — Institutionnel et organisationnel</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Règles internes, procédures, horaires, organisation du temps, ressources humaines allouées. Souvent négligé, c'est pourtant l'un des environnements les plus modifiables.</p>
            <Liste items={[
              "Réviser les horaires d'activités pour les adapter aux rythmes des personnes",
              "Assouplir les règles et procédures qui créent des obstacles inutiles",
              "Réorganiser les espaces et les temps collectifs",
              "Renforcer la coordination interdisciplinaire autour du projet de vie"
            ]} />
          </div>

          {/* Environnement 4 */}
          <div className="border border-[#1B2D5B]/10 rounded-xl p-5 mb-4 bg-[#1B2D5B]/3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1B2D5B] mb-2">Environnement 4 — Technologique</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Outils numériques, aides techniques, domotique, applications, supports de communication augmentée et alternative (CAA).</p>
            <Liste items={[
              "Introduire des aides techniques adaptées aux besoins identifiés dans l'analyse",
              "Utiliser des supports visuels, pictogrammes, FALC (Facile à Lire et à Comprendre)",
              "Exploiter les outils numériques comme facilitateurs de participation",
              "Former les équipes à l'utilisation des outils disponibles"
            ]} />
          </div>

          {/* Environnement 5 */}
          <div className="border border-[#3DBFA0]/20 rounded-xl p-5 mb-4 bg-[#3DBFA0]/3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#3DBFA0] mb-2">Environnement 5 — Politique et juridique</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">Lois, droits, financements, politiques d'inclusion, conventions collectives. Ces environnements dépassent souvent le niveau de l'équipe mais sont essentiels à connaître pour orienter et plaider.</p>
            <Liste items={[
              "Informer la personne de ses droits et des dispositifs de compensation disponibles",
              "Mobiliser les financements existants (MDPH, CAF, fonds d'urgence)",
              "Plaider auprès de la direction pour des politiques d'inclusion plus ambitieuses",
              "S'appuyer sur les lois en vigueur pour justifier des aménagements nécessaires"
            ]} />
          </div>
        </SectionModule>

        <SectionModule eyebrow="Section 3.2" titre="Obstacles et facilitateurs : les deux faces de l'environnement">
          <Texte>L'analyse PPH ne cherche pas seulement les obstacles. Elle identifie aussi les facilitateurs déjà en place — pour les renforcer et s'appuyer sur eux dans le plan d'action.</Texte>

          <TableauComparaison
            titre="Exemples d'obstacles et de facilitateurs par dimension"
            colonnes={[
              {
                titre: "Dimension",
                contenu: ["Physique", "Social", "Institutionnel", "Technologique", "Politique"]
              },
              {
                titre: "Exemples d'obstacles",
                contenu: [
                  "Salle inaccessible en fauteuil, bruit excessif",
                  "Attitudes condescendantes, infantilisation",
                  "Horaires inadaptés, règles rigides",
                  "Absence d'aides techniques, numérique inaccessible",
                  "Droits non mobilisés, manque de financement"
                ]
              },
              {
                titre: "Exemples de facilitateurs",
                contenu: [
                  "Rampe d'accès, espaces modulables",
                  "Équipe formée, soutien des pairs",
                  "Flexibilité des horaires, procédures assouplies",
                  "Tablette avec pictogrammes, FALC disponible",
                  "RQTH accordée, accompagnement MDPH actif"
                ]
              }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 3.3" titre="Les trois principes d'action du PPH">
          <HighlightBox label="Principe 1 — Co-construction avec la personne" couleur="bleu">
            <Texte>Toute action doit être construite avec la personne, pas pour elle. L'autodétermination est le point de départ et l'horizon de toute mesure PPH. Une mesure imposée, même parfaitement conçue, ne respecte pas le modèle — et risque d'être inefficace si elle ne répond pas aux priorités réelles de la personne.</Texte>
          </HighlightBox>

          <HighlightBox label="Principe 2 — Pertinence contextuelle" couleur="vert">
            <Texte>Une action est pertinente si et seulement si elle répond à un obstacle identifié dans l'analyse PPH. On n'agit pas sur des suppositions ou des habitudes professionnelles. La pertinence se mesure à l'adéquation entre l'action et l'obstacle documenté — pas à l'intention ou à l'effort fourni.</Texte>
          </HighlightBox>

          <HighlightBox label="Principe 3 — Durabilité des facilitateurs créés" couleur="jaune">
            <Texte>Les facilitateurs créés doivent s'inscrire dans la durée. Une action ponctuelle qui disparaît à la fin d'un projet n'améliore pas la participation sociale de façon pérenne. La durabilité passe par l'institutionnalisation des mesures, la formation des équipes et la mise à jour régulière du plan d'action.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.4 — Étude de cas" titre="Sophie : de l'analyse à l'action">
          <HighlightBox label="Contexte" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Sophie, 32 ans, travaille en ESAT depuis 3 ans",
              "Habitude de vie ciblée : participer aux réunions d'équipe hebdomadaires",
              "Situation actuelle : elle n'y assiste pas — les informations lui sont transmises indirectement par son référent",
              "Ce que Sophie dit : 'Je voudrais savoir ce qui se passe dans l'atelier, avoir mon mot à dire'"
            ]} />
          </HighlightBox>

          <Texte>L'analyse PPH révèle quatre obstacles environnementaux distincts : la salle de réunion n'est pas accessible en fauteuil électrique ; les réunions durent 90 minutes sans pause ; le vocabulaire utilisé est très technique ; aucun support visuel n'est utilisé. Aucun de ces obstacles n'est lié aux capacités de Sophie.</Texte>

          <HighlightBox label="Actions mises en place" couleur="vert">
            <Liste items={[
              "Physique : déplacement des réunions dans la salle B, accessible et équipée d'un espace fauteuil",
              "Organisationnel : réunions restructurées avec pause après 30 minutes, durée réduite à 60 min",
              "Organisationnel : ordre du jour illustré envoyé 48h avant par messagerie",
              "Social : l'animateur reformule les décisions importantes en langage simple en fin de séance"
            ]} />
          </HighlightBox>

          <HighlightBox label="Résultat attendu à 3 mois" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Sophie participe à au moins 3 réunions sur 4",
              "Sophie exprime sa satisfaction à 7/10 minimum",
              "Sophie prend la parole au moins une fois par réunion",
              "Les actions sont maintenues dans le temps par l'équipe (durabilité)"
            ]} />
          </HighlightBox>

          <AccrocheScenario type="reflexion">
            <p>Remarquez que ni l'analyse ni le plan d'action ne visent à "améliorer" Sophie. Aucune action ne porte sur sa personne. Tout porte sur l'environnement. C'est exactement ce que le PPH attend de nous.</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Section 3.5 — Outil pratique" titre="Checklist avant toute mise en œuvre">
          <HighlightBox label="Avant de mettre en place une mesure environnementale, vérifiez :" couleur="vert">
            <Liste items={[
              "L'habitude de vie visée est clairement identifiée et validée par la personne",
              "L'obstacle environnemental est documenté par l'analyse PPH — pas supposé",
              "La mesure a été co-construite avec la personne concernée",
              "Des indicateurs de participation sociale mesurables ont été définis",
              "Un calendrier de mise en œuvre et d'évaluation est planifié",
              "Les ressources nécessaires (humaines, matérielles, financières) sont identifiées",
              "L'équipe est informée et formée à la mise en œuvre",
              "Une date de réévaluation est prévue pour ajuster si nécessaire"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce qu'il faut retenir">
          <HighlightBox label="Les points essentiels" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Cinq types d'environnements — cinq catégories de leviers d'action spécifiques",
              "Les obstacles attitudinaux (attitudes, représentations) sont souvent les plus impactants et les plus invisibles",
              "Toute action doit être co-construite, contextualisée et durable",
              "La checklist est un outil pratique pour garantir la robustesse des mesures",
              "L'action PPH vise toujours l'environnement — jamais la correction de la personne"
            ]} />
          </HighlightBox>

          <PullQuote>
            Le PPH n'est pas un modèle d'observation. C'est un modèle d'action — et cette action porte toujours sur l'environnement.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
        questions={[
          {
            question: "Quel est le levier d'action prioritaire dans l'approche PPH ?",
            reponses: [
              "Modifier le comportement de la personne accompagnée",
              "Agir sur l'environnement pour transformer les obstacles en facilitateurs",
              "Augmenter l'intensité des soins médicaux",
              "Réduire les activités trop difficiles"
            ],
            bonneReponse: 1,
            explication: "Le PPH place l'environnement comme levier d'action principal. Transformer les obstacles environnementaux en facilitateurs est plus efficace — et respectueux — que de tenter de modifier la personne."
          },
          {
            question: "Les obstacles attitudinaux (préjugés, infantilisation) appartiennent à quel type d'environnement ?",
            reponses: [
              "Environnement physique et architectural",
              "Environnement social et humain",
              "Environnement institutionnel et organisationnel",
              "Environnement politique et juridique"
            ],
            bonneReponse: 1,
            explication: "Les attitudes des professionnels et des proches — préjugés, infantilisation, sous-estimation — sont des obstacles attitudinaux relevant de l'environnement social et humain. Ce sont souvent les plus invisibles et les plus impactants."
          },
          {
            question: "Les trois principes d'action du PPH sont :",
            reponses: [
              "Évaluer, planifier, exécuter",
              "Diagnostiquer, traiter, réévaluer",
              "Co-construire, pertinence contextuelle, durabilité",
              "Observer, analyser, documenter"
            ],
            bonneReponse: 2,
            explication: "Les trois principes d'action PPH sont : co-construction avec la personne, pertinence contextuelle (agir sur des obstacles documentés, pas supposés), et durabilité des facilitateurs créés."
          },
          {
            question: "Dans l'étude de cas de Sophie, les obstacles identifiés étaient :",
            reponses: [
              "Ses capacités cognitives insuffisantes pour suivre une réunion",
              "Son manque de motivation et de confiance en elle",
              "La salle inaccessible, la durée trop longue, le vocabulaire technique, l'absence de supports visuels",
              "Son refus de participer aux activités collectives"
            ],
            bonneReponse: 2,
            explication: "Tous les obstacles étaient environnementaux : salle inaccessible, durée excessive sans pause, vocabulaire technique, absence de support visuel. Aucun obstacle ne concernait les capacités de Sophie elle-même."
          },
          {
            question: "La checklist avant toute mise en œuvre sert principalement à :",
            reponses: [
              "Évaluer les compétences de la personne accompagnée",
              "Vérifier qu'une mesure environnementale est co-construite, documentée et planifiée avant de la mettre en place",
              "Établir un diagnostic médical des limitations fonctionnelles",
              "Valider le budget disponible pour l'action"
            ],
            bonneReponse: 1,
            explication: "La checklist vérifie que toutes les conditions sont réunies : habitude de vie identifiée par la personne, obstacle documenté, co-construction, indicateurs définis, ressources disponibles, évaluation planifiée."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
