import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module3Vieillissement({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Handicap et vieillissement"
        titre="L'accompagnement au quotidien"
        titrePart2="adapter les pratiques"
        sousTitre="Réévaluer le projet personnalisé, adapter les activités et rythmes, communiquer avec justesse, soutenir les proches."
        duree="50 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="De la compréhension à l'action concrète">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Réévaluer un PPA avec une orientation vieillissement",
              "Adapter les activités en partant des capacités préservées",
              "Modifier les rythmes pour respecter la fatigue",
              "Communiquer de façon adaptée avec une personne vieillissante",
              "Soutenir les proches aidants et aborder les questions difficiles",
              "Comprendre les enjeux de la fin de vie en contexte de handicap"
            ]} />
          </ConceptBox>
          <Texte>Comprendre et reconnaître le vieillissement, c'est nécessaire. Mais ce que les professionnels attendent — et c'est tout à fait légitime — c'est de savoir quoi faire concrètement. Comment adapter son accompagnement ? Comment modifier le projet de la personne ? Comment parler à quelqu'un qui commence à perdre ses mots ? Comment préparer une famille à ce que vit leur proche ?</Texte>
          <Texte>Ce module entre dans le vif du sujet. Il ne propose pas de recettes universelles — il n'en existe pas — mais des principes, des méthodes et des exemples concrets qui peuvent être adaptés à chaque situation.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="Réévaluer le projet personnalisé d'accompagnement">
          <HighlightBox label="Le PPA comme outil vivant" couleur="bleu">
            <Texte>Dans la réalité du terrain, le Projet Personnalisé d'Accompagnement (PPA) est parfois perçu comme une obligation administrative, révisé une fois par an de manière rituelle. Face au vieillissement, cette approche ne suffit plus. Le PPA doit devenir un <strong>outil dynamique</strong>, régulièrement réévalué à la lumière des changements observés.</Texte>
          </HighlightBox>

          <SchemaEtapes
            titre="Quand déclencher une réévaluation ?"
            etapes={[
              { niveau: "Règle minimale", nom: "Annuel", definition: "Révision complète annuelle obligatoire pour toutes les personnes accompagnées" },
              { niveau: "Déclencheur", nom: "Changement observé", definition: "Modification fonctionnelle, comportementale, hospitalisation, deuil, fin d'activité" },
              { niveau: "Anticipation", nom: "Étapes clés", definition: "2-3 ans avant la retraite, détérioration progressive documentée, transition de structure" }
            ]}
          />

          <Texte>Une réévaluation de qualité pour une personne vieillissante doit explorer systématiquement six dimensions :</Texte>

          <TableauComparaison
            titre="Les 6 dimensions d'une réévaluation orientée vieillissement"
            colonnes={[
              {
                titre: "Dimension",
                contenu: ["Somatique", "Fonctionnelle", "Cognitive", "Psychique & affective", "Sociale & relationnelle", "Anticipative"]
              },
              {
                titre: "Questions clés",
                contenu: [
                  "Nouvelles pathologies ? Douleurs ? Médicaments ? Surveillances à venir ?",
                  "Ce que la personne fait seule ? Ce qui nécessite une aide ?",
                  "Changements dans la mémoire, l'orientation, la communication ?",
                  "Humeur, deuils, peurs, souhaits, projets ?",
                  "Réseau familial, amis dans la structure, risque d'isolement ?",
                  "Quels changements prévisibles ? Quelles adaptations préparer dès maintenant ?"
                ]
              }
            ]}
          />

          <HighlightBox label="L'autodétermination ne diminue pas avec l'âge" couleur="vert">
            <Texte>Une personne qui vieillit et devient plus dépendante n'est pas une personne qui perd son droit à la parole. La vigilance sur ce point doit s'accroître, parce que le risque est grand que les décisions soient progressivement prises "pour" la personne plutôt que "avec" elle, au nom de sa sécurité ou de son bien-être.</Texte>
            <Texte>Concrètement : la personne doit être présente et active lors de la révision de son PPA. Si elle ne peut pas exprimer ses souhaits verbalement, on utilise des supports visuels, des choix concrets, des observations de comportement. Et on consigne ses réponses, même fragmentaires, dans le dossier.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Adapter les activités, les rythmes et l'environnement">
          <PullQuote>
            L'une des erreurs les plus fréquentes est de se focaliser sur ce qu'une personne ne peut plus faire, et d'en conclure qu'il faut supprimer certaines activités. Cette approche, bien qu'intuitivement protectrice, est contre-productive.
          </PullQuote>

          <Texte>Le principe de base est de <strong>partir des capacités préservées</strong> et d'adapter les activités pour que la personne puisse continuer à y participer de manière significative, même si sa participation est modifiée. Maintenir une participation active, même partielle, préserve l'estime de soi, maintient les liens sociaux, et ralentit le déclin fonctionnel.</Texte>

          <HighlightBox label="Exemples concrets d'adaptation d'activités" couleur="vert">
            <Texte><strong>L'atelier cuisine :</strong> La personne qui ne peut plus rester debout 45 minutes peut rester assis à table, surveiller la cuisson, superviser les autres résidents, choisir les recettes. Son rôle change, mais sa participation reste réelle et valorisante.</Texte>
            <Texte><strong>Le jardinage :</strong> Tables surélevées avec bacs de terre, outils à long manche, arrosoir léger, étiquetage des plants, participation à la conversation pendant l'activité.</Texte>
            <Texte><strong>Le sport :</strong> Passer d'une activité intense à une gym douce assise, des étirements, une marche courte mais régulière, ou de la relaxation — maintient les bénéfices physiologiques et sociaux sans exposer la personne à des risques.</Texte>
            <Texte><strong>Les sorties culturelles :</strong> Réduire la durée, choisir des lieux accessibles, prévoir des moments de repos, adapter le transport.</Texte>
          </HighlightBox>

          <HighlightBox label="Adapter les rythmes : respecter la fatigue" couleur="jaune">
            <Texte>La fatigue est l'une des réalités les plus importantes du vieillissement, et l'une des moins bien prises en compte. Les journées institutionnelles sont souvent organisées pour des personnes jeunes et actives. Adaptations possibles :</Texte>
            <Liste items={[
              "Introduire un temps de repos systématique après le repas de midi",
              "Réduire la densité des activités en fin de journée (période souvent difficile)",
              "Permettre des 'pauses calmes' durant les activités longues",
              "Flexibiliser les horaires de réveil et de coucher",
              "Ne plus insister pour que la personne 'participe à tout'"
            ]} />
            <Texte><em>Note : l'égalité de traitement ne signifie pas l'uniformité des réponses. Ce débat doit être mené en équipe et en direction.</em></Texte>
          </HighlightBox>

          <Texte>Sur le plan de l'environnement physique, certaines adaptations sont simples et peu coûteuses :</Texte>

          <TableauComparaison
            titre="Adaptations environnementales prioritaires"
            colonnes={[
              {
                titre: "Domaine",
                contenu: ["Sécurité", "Confort sensoriel", "Orientation spatiale", "Intimité"]
              },
              {
                titre: "Mesures concrètes",
                contenu: [
                  "Supprimer tapis/seuils de porte, installer barres d'appui, améliorer l'éclairage nocturne",
                  "Réduire les nuisances sonores, améliorer la luminosité des espaces de vie",
                  "Signalétique visuelle claire : pictogrammes, couleurs contrastées sur les portes",
                  "Créer des espaces de retrait : coin calme, petite pièce pour quelques minutes seul"
                ]
              }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Communication adaptée avec la personne vieillissante">
          <Texte>La communication est au cœur de la relation d'accompagnement. Le vieillissement peut affecter les capacités communicationnelles : troubles cognitifs réduisant le vocabulaire, troubles sensoriels, fatigue diminuant l'envie d'échanger.</Texte>

          <SchemaEtapes
            titre="Principes fondamentaux de la communication adaptée"
            etapes={[
              { niveau: "Principe 1", nom: "Ralentir", definition: "Parler plus lentement que d'habitude — le débit rapide provoque une surcharge cognitive" },
              { niveau: "Principe 2", nom: "Simplifier", definition: "Phrases courtes, vocabulaire concret — sans jamais infantiliser" },
              { niveau: "Principe 3", nom: "Donner du temps", definition: "Attendre après une question — le silence est un temps de traitement, pas un vide à combler" }
            ]}
          />

          <HighlightBox label="Pratiques complémentaires" couleur="vert">
            <Liste items={[
              "Préférer les choix aux questions ouvertes : 'Musique ou chambre ?' plutôt que 'Que veux-tu faire ?'",
              "Maintenir le non-verbal : contact visuel adapté, posture ouverte, toucher adapté si apprécié",
              "Utiliser des supports visuels : photos, pictogrammes, objets de référence",
              "Simplifier la structure du langage sans diminuer le respect dû à la personne"
            ]} />
          </HighlightBox>

          <HighlightBox label="Communication pendant les soins personnels" couleur="bleu">
            <Texte>Les moments de soins (toilette, habillage) peuvent être source de grande vulnérabilité. Pratiques essentielles :</Texte>
            <Liste items={[
              "Annoncer systématiquement chaque geste avant de le faire",
              "Expliquer simplement ce qui se passe, éviter les mouvements brusques",
              "Respecter la pudeur de la personne, s'adapter à son rythme"
            ]} />
            <Texte><strong>Une crispation, un regard de détresse, un mouvement de retrait : ce sont des "non" que le professionnel est tenu de respecter.</strong></Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4" titre="Soutenir les proches et les aidants naturels">
          <Texte>Des parents de 80 ou 85 ans continuent d'assurer un soutien quotidien à leur enfant de 55 ou 60 ans. Ces parents vieillissants sont eux-mêmes en perte d'autonomie progressive. Ce phénomène — parfois appelé "l'épuisement de la triple génération" — mérite toute l'attention des équipes.</Texte>

          <TableauComparaison
            titre="Comment l'institution peut soutenir les proches"
            colonnes={[
              {
                titre: "Forme de soutien",
                contenu: ["Communication régulière", "Espaces de parole", "Aborder les questions difficiles", "Orienter vers les ressources"]
              },
              {
                titre: "Comment faire",
                contenu: [
                  "Informer sans attendre les crises — les familles informées anticipent mieux",
                  "Entretiens accueillants émotionnellement, pas uniquement informatifs",
                  "Aborder l'avenir en moment de calme, pas dans l'urgence d'une hospitalisation",
                  "Pro Infirmis, Pro Senectute, services cantonaux de répit, groupes de soutien"
                ]
              }
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Section 5" titre="Fin de vie et soins palliatifs en contexte de handicap">
          <Texte>Aujourd'hui, des personnes accompagnées depuis 30 ou 40 ans dans la même institution y vieillissent et y meurent. Les équipes se retrouvent face à des questions pour lesquelles elles n'ont souvent pas été formées.</Texte>

          <HighlightBox label="3 défis spécifiques" couleur="bleu">
            <Texte><strong>1. Consentement et expression des volontés :</strong> Une personne avec une déficience intellectuelle a le droit d'exprimer ses volontés — avec des adaptations : FALC, supports visuels, présence d'une personne de confiance. Les directives anticipées sont accessibles aux personnes avec DI légère ou modérée si le processus est adapté.</Texte>
            <Texte><strong>2. Évaluation de la douleur :</strong> Des grilles comportementales (DOLOPLUS, grilles polyhandicap) permettent d'objectiver la douleur chez les personnes ne pouvant pas la verbaliser. Ces outils doivent être connus et utilisés.</Texte>
            <Texte><strong>3. Formation des équipes :</strong> Les professionnels peuvent se sentir démunis face à la mort imminente d'une personne accompagnée depuis des années. Des espaces de parole et de supervision sont indispensables.</Texte>
          </HighlightBox>

          <PullQuote>
            Une mort digne ne se planifie pas entièrement, mais elle se prépare. Ces questions ne peuvent pas se poser la première fois le jour où une personne entre dans sa phase terminale.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce que ce module a posé">
          <Texte>Adapter l'accompagnement d'une personne vieillissante est un travail quotidien, collectif et exigeant. Il repose sur des principes clairs — partir des capacités préservées, respecter l'autodétermination, communiquer avec justesse, soutenir les proches — et sur des pratiques concrètes que chaque professionnel peut mettre en œuvre dès aujourd'hui.</Texte>
          <HighlightBox label="À retenir pour la pratique" couleur="vert">
            <Liste items={[
              "Le PPA est un outil vivant : réévaluez dès qu'un changement est observé",
              "Adapter n'est pas supprimer : partez des capacités préservées",
              "La fatigue est réelle et légitime : respecter les rythmes est une forme de soin",
              "Communiquer : ralentir, simplifier, donner du temps",
              "Les proches aidants méritent aussi d'être accompagnés",
              "La fin de vie se prépare en institution — ne pas attendre l'urgence"
            ]} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={[
          {
            question: "Quand une réévaluation du PPA doit-elle être déclenchée, en dehors de la révision annuelle ?",
            reponses: [
              "Uniquement lors d'une hospitalisation",
              "Dès qu'un changement significatif est observé : modification fonctionnelle, comportementale, deuil, fin d'activité",
              "Seulement à la demande de la famille",
              "Uniquement quand le médecin le prescrit"
            ],
            bonneReponse: 1,
            explication: "En contexte de vieillissement, la révision annuelle doit être complétée par des déclencheurs supplémentaires : tout changement significatif observé, toute étape clé (retraite imminente, détérioration progressive documentée). La réactivité est essentielle pour ne pas agir dans l'urgence."
          },
          {
            question: "Quel est le principe de base pour adapter les activités d'une personne vieillissante ?",
            reponses: [
              "Supprimer les activités qui présentent un risque pour la personne",
              "Maintenir les mêmes activités sans modification pour préserver les repères",
              "Partir des capacités préservées et adapter la participation pour qu'elle reste significative",
              "Proposer uniquement des activités adaptées aux personnes âgées en général"
            ],
            bonneReponse: 2,
            explication: "Se focaliser sur ce qu'une personne ne peut plus faire est contre-productif. Partir des capacités préservées permet de maintenir une participation active — même modifiée — qui préserve l'estime de soi, les liens sociaux et ralentit le déclin fonctionnel."
          },
          {
            question: "Pourquoi 'simplifier sans infantiliser' est-il un principe important de la communication adaptée ?",
            reponses: [
              "Parce que les personnes vieillissantes apprécient un langage enfantin",
              "Parce que la simplification porte sur la structure du langage, pas sur le respect dû à la personne adulte",
              "Parce que les mots compliqués aggravent la démence",
              "Parce que l'institution doit adapter son langage à toutes les personnes accompagnées"
            ],
            bonneReponse: 1,
            explication: "Simplifier signifie utiliser des phrases courtes et un vocabulaire concret — mais parler à un adulte de 60 ans comme à un enfant de 5 ans est dégradant et nuit à la relation. La simplification s'applique à la structure du langage, pas au respect dû à la personne."
          },
          {
            question: "Qu'est-ce que l'épuisement de la 'triple génération' ?",
            reponses: [
              "Le fait que trois générations de professionnels se succèdent dans une même institution",
              "La situation où des parents vieillissants (80+ ans) continuent de soutenir leur enfant handicapé (55-60 ans) tout en perdant eux-mêmes de l'autonomie",
              "Le cumul de trois types de handicap chez une même personne vieillissante",
              "La difficulté de gérer simultanément trois générations de résidents dans une institution"
            ],
            bonneReponse: 1,
            explication: "Ce phénomène décrit la fragilité de la situation où des parents très âgés (80-85 ans) continuent d'assurer un soutien quotidien à leur enfant de 55-60 ans — alors qu'ils sont eux-mêmes en perte d'autonomie progressive. La question 'qui prendra le relais ?' est omniprésente et angoissante."
          },
          {
            question: "Concernant la fin de vie en institution, quelle est l'attitude recommandée ?",
            reponses: [
              "Prévoir systématiquement un transfert en EMS ou en hôpital",
              "Préparer en amont les questions de fin de vie dans le projet institutionnel, sans attendre l'urgence",
              "Déléguer entièrement ces questions aux médecins et aux familles",
              "Éviter d'aborder ce sujet pour ne pas angoisser les personnes accompagnées"
            ],
            bonneReponse: 1,
            explication: "Ces questions ne peuvent pas se poser pour la première fois le jour où une personne entre dans sa phase terminale. L'institution doit avoir réfléchi en amont à ses capacités et ses limites : peut-elle accompagner une fin de vie sur place ? A-t-elle accès à une équipe mobile de soins palliatifs ? Ces questions font partie du projet institutionnel."
          },
          {
            question: "Dans les soins personnels (toilette, habillage), comment reconnaître un refus exprimé par une personne ne pouvant plus verbaliser ?",
            reponses: [
              "On ne peut pas — si la personne ne dit pas non verbalement, c'est qu'elle est d'accord",
              "Par une crispation, un regard de détresse ou un mouvement de retrait",
              "Uniquement par des cris ou pleurs",
              "Par une demande de la famille en amont"
            ],
            bonneReponse: 1,
            explication: "Une personne qui ne peut plus verbaliser son refus peut néanmoins l'exprimer par son corps. Une crispation, un regard de détresse, un mouvement de retrait : ce sont des 'non' que le professionnel est éthiquement et légalement tenu de respecter et d'accueillir."
          }
        ]}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
