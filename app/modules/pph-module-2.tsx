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

export function Module2PPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Analyse pratique"
        titre="Lire et analyser une situation"
        titrePart2="avec le PPH"
        sousTitre="Du cadre conceptuel à la grille d'analyse concrète : apprendre à décrypter les interactions personne-environnement pour identifier les vrais leviers d'action."
        duree="50 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi analyser avec le PPH ?">
          <AccrocheScenario titre="Situation de départ — Karine">
            <p>Karine, 29 ans, vit avec une paralysie cérébrale légère. Elle s'exprime avec quelques difficultés d'élocution et se fatigue vite en fin de journée. Son référent note dans son dossier : "Difficultés de communication, manque de motivation pour les activités collectives."</p>
            <p>Karine, de son côté, dit qu'elle adore cuisiner mais qu'elle n'arrive "jamais" à participer à l'atelier cuisine. Pourquoi ? L'atelier a lieu en fin d'après-midi. La salle est bruyante. Les consignes sont données oralement, rapidement, sans support visuel.</p>
            <p>Où est le problème ?</p>
          </AccrocheScenario>

          <Texte>Analyser avec le PPH, c'est refuser de s'arrêter à la première explication ("manque de motivation") pour aller chercher la dynamique réelle : comment l'interaction entre les facteurs personnels de Karine et les facteurs environnementaux produit cette situation de handicap.</Texte>

          <ConceptBox label="Ce que permet l'analyse PPH" titre="Quatre transformations professionnelles">
            <Liste items={[
              "Sortir du jugement subjectif : passer de commentaires réducteurs à une description objective des interactions",
              "Identifier les leviers d'action réels : l'analyse est orientée vers ce qui peut être modifié dans l'environnement",
              "Déplacer la responsabilité : de 'personne handicapée' à 'personne en situation de handicap'",
              "Construire un langage commun : offrir un cadre partagé pour co-construire avec la personne et l'équipe"
            ]} />
          </ConceptBox>

          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Appliquer la méthode d'analyse en six étapes du PPH",
              "Identifier les aptitudes pertinentes sans dresser un bilan exhaustif",
              "Analyser les cinq dimensions de l'environnement",
              "Formuler une hypothèse PPH reliant personne et environnement",
              "Construire un plan d'action orienté environnement"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2.1" titre="Une méthode d'analyse en six étapes">
          <Texte>Pour analyser une situation avec le PPH, la méthode se décompose en six étapes. Chaque étape prépare la suivante. Ensemble, elles constituent une discipline du regard — une façon systématique d'aller au-delà des apparences pour auditer l'écosystème de la personne.</Texte>

          <HighlightBox label="Principe fondateur de la méthode" couleur="bleu">
            <Texte>Cette méthode ne cherche pas à évaluer la personne. Elle cherche à comprendre comment l'environnement facilite ou freine sa participation sociale. L'analyse est toujours au service de l'action.</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="Les 6 étapes de l'analyse PPH"
            etapes={[
              { niveau: "Étape 1", nom: "Habitude de vie", definition: "Identifier l'habitude de vie ciblée par la personne" },
              { niveau: "Étape 2", nom: "Qualité", definition: "Évaluer la qualité de la participation sur quatre dimensions" },
              { niveau: "Étape 3", nom: "Aptitudes", definition: "Repérer les aptitudes pertinentes pour cette habitude de vie" }
            ]}
          />
          <SchemaEtapes
            titre=""
            etapes={[
              { niveau: "Étape 4", nom: "Environnement", definition: "Identifier les obstacles et facilitateurs environnementaux" },
              { niveau: "Étape 5", nom: "Hypothèses", definition: "Formuler les hypothèses PPH reliant personne et environnement" },
              { niveau: "Étape 6", nom: "Plan d'action", definition: "Construire le plan d'action centré sur l'environnement" }
            ]}
          />

          <Texte>Nous allons suivre Karine à travers chacune de ces étapes.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Étape 1" titre="Identifier l'habitude de vie ciblée">
          <ConceptBox label="Définition clé — MHAVIE" titre="Qu'est-ce qu'une habitude de vie ?">
            <Texte>Une habitude de vie est une activité courante (se nourrir, se déplacer, se soigner, communiquer, s'habiller) ou un rôle social (travailler, être parent, participer à la vie citoyenne, avoir des loisirs) que la personne souhaite ou doit réaliser dans son contexte de vie.</Texte>
            <Texte>L'outil MHAVIE (Mesure des Habitudes de Vie, Fougeyrollas et al.) recense douze catégories : nutrition, communication, mobilité, soins corporels, habitation, responsabilités, loisirs, vie sociale, vie communautaire, éducation, travail, et autres rôles valorisés.</Texte>
          </ConceptBox>

          <HighlightBox label="Point clé — Partir de la personne" couleur="vert">
            <Texte>On identifie toujours l'habitude de vie à partir du projet et des désirs de la personne — jamais du regard institutionnel ou du problème perçu par le professionnel. C'est l'autodétermination comme point de départ.</Texte>
          </HighlightBox>

          <AccrocheScenario titre="Étape 1 pour Karine">
            <p>Habitude de vie ciblée : participer à l'atelier cuisine hebdomadaire. C'est ce que Karine souhaite — elle l'a dit clairement. Ce n'est pas l'institution qui choisit cette priorité : c'est Karine.</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Étape 2" titre="Évaluer la qualité de la participation">
          <Texte>Le PPH ne mesure pas la participation en termes binaires (présent/absent). Il évalue la qualité de la réalisation sur quatre dimensions complémentaires.</Texte>

          <HighlightBox label="Les 4 dimensions de la qualité de participation" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Degré de réalisation : la participation est-elle complète, partielle, ou absente ?",
              "Niveau d'aide requise : la personne est-elle autonome, ou a-t-elle besoin d'une aide humaine ou technique ?",
              "Satisfaction de la personne : comment vit-elle cette participation ? En est-elle satisfaite ?",
              "Effort requis : quels efforts sont nécessaires — fatigue, stress, douleur, temps supplémentaire ?"
            ]} />
          </HighlightBox>

          <PullQuote>
            Ce n'est pas parce que Karine est physiquement présente à l'atelier qu'elle y participe. La qualité de la participation dépend aussi de ce qu'elle peut y faire, et de la façon dont elle le vit.
          </PullQuote>

          <AccrocheScenario titre="Étape 2 pour Karine">
            <p>Degré de réalisation : absent (elle ne participe pas, l'atelier est le soir quand elle est épuisée). Aide requise : non déterminée (elle n'a jamais pu tester). Satisfaction : frustrée. Effort requis : le timing et le bruit suffisent à l'empêcher d'y accéder.</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Étape 3" titre="Repérer les aptitudes pertinentes">
          <Texte>Les aptitudes sont les capacités propres à la personne — l'un des facteurs personnels du PPH. Elles incluent les capacités motrices, cognitives, communicationnelles, affectives, sensorielles. Elles sont évaluées de façon fonctionnelle, dans le contexte de l'habitude de vie ciblée.</Texte>

          <HighlightBox label="Ce que le PPH demande à cette étape" couleur="vert">
            <Liste items={[
              "Cibler uniquement les aptitudes pertinentes pour l'habitude de vie visée — pas un bilan exhaustif",
              "Décrire les aptitudes de façon fonctionnelle et contextualisée, pas en termes de pathologie",
              "Inclure les aptitudes préservées — ce que la personne sait faire, pas seulement ses limitations",
              "Ne pas dresser une liste de déficiences : cela n'est ni utile ni respectueux"
            ]} />
          </HighlightBox>

          <AccrocheScenario titre="Étape 3 pour Karine">
            <p>Aptitudes pertinentes pour la cuisine : compréhension des consignes simples (préservée), capacité à suivre une recette illustrée (préservée), manipulation fine (quelques difficultés en fin de journée), communication verbale (ralentie quand fatiguée). Aptitudes préservées dominantes — les limitations sont contextuelles (heure, bruit).</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Étape 4" titre="Identifier les facteurs environnementaux">
          <Texte>C'est le cœur de l'analyse PPH. L'environnement agit soit comme facilitateur, soit comme obstacle. On analyse systématiquement les cinq dimensions environnementales.</Texte>

          <TableauComparaison
            titre="Les 5 dimensions environnementales — Obstacles et facilitateurs pour Karine"
            colonnes={[
              {
                titre: "Dimension",
                contenu: [
                  "Physique / architectural",
                  "Social / humain",
                  "Institutionnel / organisationnel",
                  "Technologique",
                  "Politique / juridique",
                ]
              },
              {
                titre: "Obstacles identifiés",
                contenu: [
                  "Salle bruyante, acoustique difficile",
                  "Consignes données oralement et rapidement par l'animateur",
                  "Atelier programmé en fin d'après-midi (fatigue de Karine)",
                  "Aucun support visuel pour les recettes",
                  "—",
                ]
              },
              {
                titre: "Facilitateurs identifiés",
                contenu: [
                  "Salle accessible en fauteuil, plan de travail adaptable",
                  "Pair motivant dans le groupe, animateur à l'écoute",
                  "Groupe de taille réduite (6 personnes)",
                  "Tablette disponible dans la structure",
                  "Projet de vie validé par l'équipe pluridisciplinaire",
                ]
              }
            ]}
          />

          <PullQuote>
            Un environnement facilitateur compense les limitations d'aptitudes. Un environnement obstacle les amplifie. La même personne peut être en participation sociale dans un contexte et en situation de handicap dans un autre.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Étape 5" titre="Formuler les hypothèses PPH">
          <Texte>Une hypothèse PPH relie les observations en une phrase explicative : elle décrit comment l'interaction entre une aptitude et un facteur environnemental produit la restriction observée dans la réalisation de l'habitude de vie.</Texte>

          <HighlightBox label="Structure d'une hypothèse PPH" couleur="vert">
            <Liste items={[
              "Identifier l'aptitude concernée (facteur personnel)",
              "Identifier l'obstacle ou le facilitateur environnemental",
              "Décrire l'effet sur la réalisation de l'habitude de vie",
              "Formuler en termes d'interaction — pas de causalité unidirectionnelle"
            ]} />
          </HighlightBox>

          <AccrocheScenario titre="Hypothèses PPH pour Karine">
            <p><strong>Hypothèse 1 :</strong> La fatigabilité accrue en fin de journée (aptitude — facteur personnel), combinée à l'horaire tardif de l'atelier (obstacle institutionnel), empêche Karine de participer à l'atelier cuisine.</p>
            <p><strong>Hypothèse 2 :</strong> Les difficultés d'élocution de Karine sous fatigue (aptitude), combinées aux consignes orales sans support visuel (obstacle organisationnel), réduisent sa capacité à suivre les étapes de la recette et à participer activement.</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Étape 6" titre="Construire le plan d'action">
          <Texte>Le plan d'action PPH découle directement des hypothèses. Il cible les obstacles environnementaux identifiés et les transforme en facilitateurs. Il est toujours co-construit avec la personne concernée.</Texte>

          <HighlightBox label="Principes du plan d'action PPH" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Agir prioritairement sur l'environnement — pas sur la personne",
              "Co-construire chaque mesure avec Karine",
              "Définir des indicateurs mesurables en termes de participation sociale",
              "Prévoir une évaluation régulière de l'effet des actions sur la participation"
            ]} />
          </HighlightBox>

          <AccrocheScenario titre="Plan d'action pour Karine">
            <p><strong>Action 1 :</strong> Déplacer l'atelier cuisine en milieu de matinée (levier organisationnel).</p>
            <p><strong>Action 2 :</strong> Préparer des fiches recettes illustrées sur tablette (levier technologique).</p>
            <p><strong>Action 3 :</strong> Former l'animateur à donner les consignes en étapes courtes avec support visuel (levier social/humain).</p>
            <p><strong>Résultat attendu :</strong> Karine participe à l'atelier cuisine de façon régulière, avec un niveau d'aide réduit, et exprime sa satisfaction.</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Section 2.7 — Vigilance" titre="Les erreurs fréquentes dans l'analyse PPH">
          <HighlightBox label="Pièges à éviter" couleur="jaune">
            <Liste items={[
              "Partir des déficiences plutôt que de l'habitude de vie souhaitée par la personne",
              "Oublier les aptitudes préservées — se focaliser uniquement sur ce que la personne ne peut pas faire",
              "Négliger les facteurs institutionnels et organisationnels : les horaires, les règles et les procédures sont des obstacles tout autant que les barrières physiques",
              "Formuler des hypothèses unidirectionnelles (\"c'est la fatigue qui empêche\") sans identifier le facteur environnemental qui l'amplifie",
              "Construire un plan d'action sans co-construction avec la personne"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="L'analyse PPH : une discipline du regard">
          <Texte>La méthode en six étapes n'est pas un formulaire à remplir mécaniquement. C'est une discipline du regard qui nous invite à regarder systématiquement au-delà de la personne pour auditer son écosystème. Elle transforme le "pourquoi ça ne marche pas" en "qu'est-ce que je peux changer dans l'environnement".</Texte>

          <HighlightBox label="À retenir" couleur="vert">
            <Liste items={[
              "Toujours partir de l'habitude de vie et du projet de la personne — jamais de ses déficiences",
              "Évaluer la qualité de la participation sur quatre dimensions : réalisation, aide, satisfaction, effort",
              "Cibler les aptitudes pertinentes sans dresser un bilan exhaustif",
              "Analyser systématiquement les cinq dimensions de l'environnement (obstacles ET facilitateurs)",
              "Formuler des hypothèses PPH qui relient aptitude et facteur environnemental",
              "Co-construire le plan d'action avec la personne, centré sur la transformation de l'environnement"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>
      <Quiz
        questions={[
          {
            question: "Par quoi commence toujours une analyse PPH ?",
            reponses: [
              "Par l'évaluation des déficiences de la personne",
              "Par l'identification de l'habitude de vie ciblée par la personne",
              "Par l'analyse de l'environnement physique",
              "Par la consultation du dossier médical"
            ],
            bonneReponse: 1,
            explication: "L'analyse PPH commence toujours par l'habitude de vie — ce que la personne souhaite réaliser. On part de son projet et de son autodétermination, pas de ses déficiences."
          },
          {
            question: "Les quatre dimensions de la qualité de participation sont :",
            reponses: [
              "Présence, autonomie, vitesse, résultat",
              "Degré de réalisation, niveau d'aide, satisfaction, effort requis",
              "Fréquence, durée, intensité, régularité",
              "Capacité, incapacité, obstacle, facilitateur"
            ],
            bonneReponse: 1,
            explication: "La qualité de participation se mesure sur quatre dimensions : le degré de réalisation, le niveau d'aide requise, la satisfaction de la personne, et l'effort requis (fatigue, stress, temps)."
          },
          {
            question: "Combien de dimensions environnementales le PPH distingue-t-il ?",
            reponses: [
              "Deux : physique et social",
              "Trois : physique, social et institutionnel",
              "Quatre : physique, social, technologique et juridique",
              "Cinq : physique, social, institutionnel, technologique et politique"
            ],
            bonneReponse: 3,
            explication: "Le PPH distingue cinq dimensions environnementales : physique et architectural, social et humain, institutionnel et organisationnel, technologique, et politique et juridique."
          },
          {
            question: "Une hypothèse PPH doit toujours :",
            reponses: [
              "Identifier une pathologie et un traitement associé",
              "Relier une aptitude personnelle et un facteur environnemental pour expliquer la restriction de participation",
              "Lister les déficiences de la personne dans l'ordre de priorité",
              "Décrire l'objectif SMART de l'accompagnement"
            ],
            bonneReponse: 1,
            explication: "Une hypothèse PPH relie une aptitude (facteur personnel) avec un obstacle ou facilitateur environnemental pour expliquer comment la situation de handicap est produite — en termes d'interaction, pas de causalité unidirectionnelle."
          },
          {
            question: "Dans l'analyse de Karine, le principal obstacle identifié pour l'atelier cuisine était :",
            reponses: [
              "Ses difficultés motrices pour la manipulation fine",
              "L'horaire tardif et l'absence de supports visuels pour les consignes",
              "Son manque de motivation pour les activités collectives",
              "L'insuffisance du soutien de sa famille"
            ],
            bonneReponse: 1,
            explication: "Les obstacles étaient environnementaux : l'atelier avait lieu en fin d'après-midi (quand Karine est épuisée) et les consignes étaient données oralement sans support visuel. Ces obstacles institutionnels et organisationnels expliquaient l'absence de participation."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
