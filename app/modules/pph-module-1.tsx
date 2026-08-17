import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import { SchemaMDHPPH } from "@/components/module/SchemaMDHPPH"
import { AccrocheScenario } from "@/components/module/AccrocheScenario"

export function Module1PPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Handicap et participation sociale"
        titre="Du handicap-attribut"
        titrePart2="au handicap-situation"
        sousTitre="Comprendre le Processus de Production du Handicap pour voir la personne autrement, et transformer nos pratiques."
        duree="50 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Une question qui définit tout">
          <AccrocheScenario titre="Avant de commencer">
            <p>Marc, 38 ans, se déplace en fauteuil roulant. Dans son quartier, il gère ses courses, retrouve ses amis, participe aux réunions de copropriété. Mais lorsqu'il prend les transports pour aller à une formation, il doit souvent renoncer : quais inaccessibles, ascenseurs en panne, durée des trajets incompatible avec son endurance.</p>
            <p>Est-ce que Marc est handicapé ? Ou est-ce que certains environnements produisent une situation de handicap pour lui, tandis que d'autres l'en préservent ?</p>
          </AccrocheScenario>

          <Texte>La réponse à cette question n'est pas anodine. Elle détermine qui est responsable, quelles solutions sont pertinentes, et quel rôle nous jouons en tant que professionnels. Pendant longtemps, le cadre dominant répondait : Marc est handicapé parce qu'il est en fauteuil. Le PPH renverse cette logique.</Texte>

          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Expliquer les limites du modèle biomédical de la CIH (OMS, 1980)",
              "Décrire les trois composantes fondamentales du MDH-PPH",
              "Distinguer participation sociale et situation de handicap",
              "Utiliser le tableau comparatif PPH / CIF dans vos pratiques",
              "Identifier comment le PPH transforme la posture professionnelle"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1.1" titre="Le modèle biomédical : la CIH de 1980">
          <Texte>Pendant des décennies, la référence internationale a été la Classification Internationale du Handicap (CIH) publiée par l'OMS en 1980. Ce modèle proposait une lecture linéaire et causale du handicap, en quatre niveaux imbriqués.</Texte>

          <SchemaEtapes
            titre="Modèle linéaire de la CIH (OMS, 1980)"
            etapes={[
              { niveau: "Niveau 1", nom: "Maladie", definition: "Pathologie ou trouble sous-jacent comme point de départ" },
              { niveau: "Niveau 2", nom: "Déficience", definition: "Altération d'une structure ou fonction du corps ou de l'esprit" },
              { niveau: "Niveau 3", nom: "Incapacité", definition: "Réduction de la capacité à accomplir une activité" },
              { niveau: "Niveau 4", nom: "Désavantage", definition: "Obstacle à l'accomplissement d'un rôle social valorisé" }
            ]}
            note="Causalité linéaire : la responsabilité du désavantage est attribuée à la personne et à sa déficience"
          />

          <HighlightBox label="Ce que ce modèle impliquait en pratique" couleur="jaune">
            <Liste items={[
              "La personne est la source du problème, c'est sa déficience qui produit le désavantage",
              "La réponse est médicale ou rééducative : corriger, compenser, pallier",
              "L'environnement est considéré comme neutre ou secondaire",
              "Le professionnel est un expert qui prescrit des solutions pour la personne"
            ]} />
          </HighlightBox>

          <PullQuote source="CIH, OMS, 1980">
            Le désavantage social est la conséquence directe de la déficience ou de l'incapacité de la personne.
          </PullQuote>

          <Texte>Ce cadre a structuré des décennies de politiques publiques et de pratiques institutionnelles. Il n'était pas faux dans sa description des corps et de leurs atteintes, il était incomplet : il oubliait l'environnement comme variable d'action.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1.2" titre="La naissance du PPH : une révolution québécoise">
          <Texte>C'est au Québec, à partir de la fin des années 1980, que Patrick Fougeyrollas, physiothérapeute et chercheur, engage un travail de refondation. En collaboration étroite avec des personnes en situation de handicap, des chercheurs et des professionnels, il développe le Processus de Production du Handicap au sein du RIPPH (Réseau International sur le Processus de Production du Handicap).</Texte>

          <HighlightBox label="Repères historiques" couleur="bleu">
            <Liste couleur="bleu" items={[
              "1987 : Premières publications sur la Classification québécoise du handicap",
              "1998 : Publication de la Classification québécoise, Processus de Production du Handicap (RIPPH)",
              "2001 : La CIF de l'OMS s'inspire du PPH et adopte une lecture interactionniste",
              "2010 : Publication du MDH-PPH 2.0, version actuelle du modèle, intégrant les facteurs identitaires"
            ]} />
          </HighlightBox>

          <Texte>Le PPH s'inscrit dans le mouvement international des droits des personnes handicapées, qui refuse de réduire ces personnes à leurs déficiences. Il est aujourd'hui reconnu comme l'un des modèles les plus rigoureux scientifiquement et les plus utiles en pratique professionnelle.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1.3" titre="Les trois composantes du MDH-PPH">
          <Texte>Le MDH-PPH (Modèle de Développement Humain : Processus de Production du Handicap) articule trois grandes composantes. Leur interaction détermine si la personne est en situation de participation sociale ou en situation de handicap.</Texte>

          <SchemaMDHPPH />

          <HighlightBox label="Composante 1 : Facteurs personnels" couleur="bleu">
            <Texte>Les facteurs personnels regroupent trois sous-dimensions :</Texte>
            <Liste couleur="bleu" items={[
              "Systèmes organiques : structures et fonctions du corps, sur un continuum intégrité ↔ déficience",
              "Aptitudes : capacités à accomplir des activités mentales ou physiques, sur un continuum capacité ↔ incapacité",
              "Facteurs identitaires : âge, sexe, identité socioculturelle, souvent oubliés, mais déterminants dans la façon dont l'environnement répond à la personne"
            ]} />
          </HighlightBox>

          <HighlightBox label="Composante 2 : Facteurs environnementaux" couleur="vert">
            <Texte>Les facteurs environnementaux sont tout ce qui est extérieur à la personne. Ils agissent sur un continuum : de l'obstacle maximal au facilitateur optimal. Cinq dimensions les structurent : physique et architectural, social et humain (attitudes, relations), institutionnel et organisationnel, technologique, politique et juridique.</Texte>
          </HighlightBox>

          <HighlightBox label="Composante 3 : Habitudes de vie" couleur="jaune">
            <Texte>Les habitudes de vie sont les activités courantes (nutrition, mobilité, communication, soins corporels, habitation) et les rôles sociaux (travail, loisirs, vie citoyenne, éducation, parentalité) que la personne souhaite ou doit réaliser. Ce sont elles qui mesurent la participation sociale. L'outil MHAVIE (Mesure des Habitudes de Vie) en recense douze catégories évaluables.</Texte>
          </HighlightBox>

          <AccrocheScenario titre="Ce que ça change pour Marc">
            <p>Avec la CIH, le fauteuil de Marc est une incapacité qui produit un désavantage. Avec le MDH-PPH, son fauteuil est un facteur personnel, et c'est l'accessibilité des transports (facteur environnemental) qui détermine si Marc est en participation sociale ou en situation de handicap pour cette habitude de vie. Même personne, même corps : deux situations radicalement différentes selon l'environnement.</p>
          </AccrocheScenario>
        </SectionModule>

        <SectionModule eyebrow="Section 1.4" titre="Participation sociale et situation de handicap : un continuum">
          <Texte>Le PPH ne pense pas le handicap en termes binaires (handicapé / non handicapé). Il mesure la qualité de réalisation des habitudes de vie sur un continuum allant de la pleine participation à la situation de handicap complète.</Texte>

          <SchemaEtapes
            titre="Continuum de participation dans le MDH-PPH"
            etapes={[
              { niveau: "Résultat optimal", nom: "Participation sociale", definition: "L'environnement facilite pleinement la réalisation des habitudes de vie" },
              { niveau: "Résultat intermédiaire", nom: "Participation partielle", definition: "Réalisation incomplète, avec effort accru ou aide nécessaire" },
              { niveau: "Résultat négatif", nom: "Situation de handicap", definition: "Des obstacles environnementaux empêchent ou réduisent fortement la réalisation" }
            ]}
            note="Une même personne peut se situer différemment selon les habitudes de vie et les contextes, le handicap n'est pas une identité fixe"
          />

          <HighlightBox label="Ce que ce continuum implique" couleur="vert">
            <Liste items={[
              "Le handicap n'est pas une identité permanente : c'est une situation contextuelle et modifiable",
              "Une même personne peut alterner entre participation sociale et situation de handicap selon l'environnement",
              "Réduire les situations de handicap est possible sans modifier la personne",
              "L'action professionnelle porte sur les obstacles environnementaux, pas sur les déficiences"
            ]} />
          </HighlightBox>

          <PullQuote source="Fougeyrollas et al., RIPPH, 1998">
            Le handicap n'est pas une caractéristique de la personne, mais une situation résultant de l'interaction entre ses facteurs personnels et les facteurs de son environnement.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 1.5" titre="PPH et CIF : convergences et divergences essentielles">
          <Texte>Le PPH a fortement influencé la Classification Internationale du Fonctionnement (CIF) adoptée par l'OMS en 2001, qui adopte elle aussi une vision interactionniste. Mais les deux outils poursuivent des objectifs différents et présentent des divergences importantes.</Texte>

          <TableauComparaison
            titre="MDH-PPH (2010) vs CIF (OMS, 2001)"
            colonnes={[
              {
                titre: "Dimension",
                contenu: [
                  "Objectif principal",
                  "Type d'outil",
                  "Activité vs participation",
                  "Facteurs identitaires",
                  "Visée pratique",
                ]
              },
              {
                titre: "MDH-PPH",
                contenu: [
                  "Expliquer la dynamique qui produit le handicap",
                  "Modèle conceptuel explicatif",
                  "Distingue aptitudes (personne) et habitudes de vie (interaction)",
                  "Inclus : âge, genre, identité socioculturelle",
                  "Transformer l'environnement, guider la posture professionnelle",
                ]
              },
              {
                titre: "CIF (OMS)",
                contenu: [
                  "Décrire et classer les situations de fonctionnement",
                  "Classification internationale standardisée",
                  "Fusionne activité et participation en une seule dimension",
                  "Non inclus explicitement",
                  "Standardisation clinique et échanges internationaux",
                ]
              }
            ]}
          />

          <HighlightBox label="La divergence fondamentale" couleur="jaune">
            <Texte>La CIF ne distingue pas les aptitudes intrinsèques de la personne de sa participation sociale (résultat de l'interaction). Cette fusion affaiblit le pouvoir analytique : on ne sait plus si c'est la personne ou l'environnement qui est la variable d'action. Le PPH, en maintenant cette distinction, rend impossible l'attribution de la responsabilité des situations de handicap à la seule personne.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que le PPH change pour votre pratique">
          <Texte>Le changement de paradigme opéré par le PPH transforme concrètement nos pratiques au quotidien, nos questions, nos observations, nos écrits professionnels, nos réunions d'équipe et notre relation aux personnes accompagnées.</Texte>

          <TableauComparaison
            titre="Avant / Après le PPH : le changement de regard"
            colonnes={[
              {
                titre: "Posture biomédicale (CIH)",
                contenu: [
                  "La personne est le problème",
                  "Compenser les déficiences",
                  "Prise en charge",
                  "\"Patient\" ou \"bénéficiaire\"",
                  "Évaluer les incapacités",
                ]
              },
              {
                titre: "Posture PPH",
                contenu: [
                  "L'environnement est le levier",
                  "Transformer les obstacles en facilitateurs",
                  "Accompagnement et autodétermination",
                  "Personne en situation de handicap",
                  "Analyser les interactions personne-environnement",
                ]
              }
            ]}
          />

          <HighlightBox label="Les points essentiels à retenir" couleur="vert">
            <Liste items={[
              "Le PPH est un modèle explicatif, il explique comment se produit le handicap, pas seulement comment le classer",
              "Trois composantes : facteurs personnels (systèmes organiques + aptitudes + identité), facteurs environnementaux, habitudes de vie",
              "Le handicap est une situation contextuelle et modifiable, pas une identité permanente",
              "L'environnement est le principal levier d'action professionnelle",
              "La même personne peut être en participation sociale dans un contexte et en situation de handicap dans un autre"
            ]} />
          </HighlightBox>

          <PullQuote source="Loi du 11 février 2005 pour l'égalité des droits et des chances, France">
            Constitue un handicap toute limitation d'activité ou restriction de participation à la vie en société subie dans son environnement par une personne en raison d'une altération substantielle, durable ou définitive.
          </PullQuote>
        </SectionModule>

      </div>
      <Quiz
        questions={[
          {
            question: "Selon le MDH-PPH, le handicap est produit par :",
            reponses: [
              "La déficience physique ou mentale de la personne",
              "L'interaction entre les facteurs personnels et les facteurs environnementaux",
              "Un désavantage social lié à une pathologie diagnostiquée",
              "Un statut administratif reconnu par la MDPH"
            ],
            bonneReponse: 1,
            explication: "Le PPH définit le handicap comme une situation produite par l'interaction entre les facteurs personnels (systèmes organiques, aptitudes, identité) et les facteurs environnementaux, pas comme une caractéristique intrinsèque de la personne."
          },
          {
            question: "Les facteurs personnels dans le MDH-PPH 2.0 incluent :",
            reponses: [
              "Systèmes organiques et aptitudes uniquement",
              "Systèmes organiques, aptitudes et facteurs identitaires",
              "Aptitudes et facteurs environnementaux",
              "Déficiences et incapacités"
            ],
            bonneReponse: 1,
            explication: "Le MDH-PPH 2.0 distingue trois composantes des facteurs personnels : systèmes organiques, aptitudes ET facteurs identitaires (âge, genre, identité socioculturelle). Ces derniers sont souvent oubliés mais jouent un rôle déterminant."
          },
          {
            question: "La principale différence entre le MDH-PPH et la CIF est :",
            reponses: [
              "Le MDH-PPH est plus récent que la CIF",
              "Le MDH-PPH est un modèle explicatif qui distingue aptitudes et participation ; la CIF est une classification qui les fusionne",
              "Le MDH-PPH s'applique uniquement au Québec",
              "La CIF intègre mieux les facteurs environnementaux"
            ],
            bonneReponse: 1,
            explication: "Le MDH-PPH est un modèle explicatif qui distingue les aptitudes (capacité intrinsèque) de la participation sociale (résultat de l'interaction). La CIF, classification statistique, fusionne activité et participation : ce qui affaiblit son pouvoir analytique."
          },
          {
            question: "Dans le modèle PPH, l'environnement peut être :",
            reponses: [
              "Uniquement un obstacle à surmonter",
              "Uniquement un facilitateur à valoriser",
              "À la fois obstacle ou facilitateur selon la personne et le contexte",
              "Neutre et sans influence sur la participation"
            ],
            bonneReponse: 2,
            explication: "L'environnement agit soit comme obstacle (il freine la réalisation des habitudes de vie) soit comme facilitateur (il la soutient). Un même espace peut être les deux selon la personne et la situation."
          },
          {
            question: "Le concept de 'situation de handicap' dans le PPH implique que :",
            reponses: [
              "La personne a une déficience permanente reconnue",
              "Le handicap est une identité stable qui ne change pas",
              "Le handicap est contextuel, une même personne peut alterner entre participation et situation de handicap",
              "Seules les personnes reconnues MDPH sont concernées"
            ],
            bonneReponse: 2,
            explication: "Le PPH conçoit le handicap comme contextuel : Marc peut participer pleinement dans son quartier mais être en situation de handicap dans les transports. Même personne, deux contextes, deux résultats différents."
          },
          {
            question: "Patrick Fougeyrollas a développé le PPH dans le cadre de :",
            reponses: [
              "L'OMS, à Genève",
              "Le RIPPH, au Québec",
              "L'INSERM, en France",
              "La CNSA, en France"
            ],
            bonneReponse: 1,
            explication: "Le PPH a été développé par Patrick Fougeyrollas au sein du RIPPH (Réseau International sur le Processus de Production du Handicap), basé au Québec. Le modèle a ensuite influencé la CIF de l'OMS (2001)."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
