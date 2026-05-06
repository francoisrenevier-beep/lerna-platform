import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"

export function Module5MDHPPH({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={5}
        categorie="MDH-PPH 2018"
        titre="Transformer les pratiques"
        titrePart2="institutionnelles"
        sousTitre="Du projet individuel à la transformation organisationnelle : comment le MDH-PPH, appliqué collectivement, révèle les patterns d'obstacles que l'institution elle-même produit."
        duree="40 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Le MDH-PPH comme outil organisationnel">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Identifier les patterns d'obstacles environnementaux récurrents que l'institution produit",
              "Comprendre les leviers pour construire une culture institutionnelle inclusive",
              "Organiser la coordination interprofessionnelle autour du cadre MDH-PPH",
              "Définir le rôle de la direction dans le portage du changement"
            ]} />
          </ConceptBox>
          <Texte>Le MDH-PPH n'est pas seulement un outil d'analyse individuelle. Il a une portée organisationnelle et stratégique. Lorsqu'une équipe commence à analyser systématiquement les situations à travers son prisme, elle commence à révéler des patterns d'obstacles environnementaux récurrents — des obstacles que l'institution elle-même produit.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Leçon 5.1" titre="Du projet individuel à la transformation organisationnelle">
          <Texte>L'analyse collective régulière des situations à travers le prisme du MDH-PPH révèle des obstacles structurels récurrents.</Texte>

          <HighlightBox label="Des exemples d'obstacles institutionnels" couleur="jaune">
            <Liste items={[
              "Un foyer dont les horaires de repas sont rigides génère un obstacle pour les résidents dont les habitudes alimentaires culturelles sont différentes",
              "Un ESE dont les activités de groupe sont non différenciées génère un obstacle pour les résidents qui ne trouvent pas de satisfaction dans ces activités",
              "Un service d'accompagnement à domicile dont les intervenants ne sont pas formés à la communication alternative génère un obstacle pour les personnes ayant des troubles du langage"
            ]} />
          </HighlightBox>

          <PullQuote>
            Ces obstacles ne sont pas dans les personnes : ils sont dans l'organisation.
          </PullQuote>

          <Texte>L'analyse MDH-PPH collective, régulièrement conduite en réunion d'équipe ou en supervision, permet de mettre ces patterns à jour. Elle ouvre la voie à des modifications organisationnelles — de règlements, de procédures, de répartitions de ressources — qui bénéficient à l'ensemble des personnes accompagnées.</Texte>

          <TableauComparaison
            titre="De l'analyse individuelle à l'action collective"
            colonnes={[
              { titre: "Observation individuelle MDH-PPH", contenu: [
                "Plusieurs résidents refusent les activités du vendredi car l'équipe change (obstacle social méso)",
                "Les habitudes alimentaires culturelles ne sont pas respectées (obstacle physique micro)",
                "Plusieurs résidents ne peuvent pas accéder aux transports publics (obstacle physique méso)",
              ]},
              { titre: "Action organisationnelle possible", contenu: [
                "Stabiliser les roulements d'équipe en fin de semaine",
                "Diversifier les menus et consulter les résidents sur leurs préférences",
                "Établir des conventions avec des services de transport adapté",
              ]},
            ]}
          />
        </SectionModule>

        <SectionModule eyebrow="Leçon 5.2" titre="Construire une culture institutionnelle inclusive">
          <Texte>Adopter le MDH-PPH dans une institution ne se fait pas par décret. Cela exige un travail de fond sur la culture professionnelle. La culture institutionnelle se lit dans les pratiques informelles : ce qu'on dit autour de la table de soins, la façon dont on parle des résidents en leur absence, les décisions prises sans les concerner directement.</Texte>

          <SchemaEtapes
            titre="Les leviers du changement culturel"
            etapes={[
              { niveau: "Levier 1", nom: "Formation pratique et ancrée", definition: "La formation initiale et continue des équipes est indispensable — mais elle doit être pratique, ancrée dans les situations réelles de l'institution, et non purement théorique." },
              { niveau: "Levier 2", nom: "Supervision clinique régulière", definition: "La supervision clinique et institutionnelle régulière permet d'intégrer le modèle dans la réflexion quotidienne. Ce n'est pas un luxe : c'est une condition du changement durable." },
              { niveau: "Levier 3", nom: "Langage commun dans les écrits", definition: "Adopter la nomenclature MDH-PPH dans les écrits professionnels, les projets personnalisés, les synthèses d'équipe renforce progressivement l'ancrage du modèle." },
              { niveau: "Levier 4", nom: "Portage par la direction", definition: "La direction doit incarner les valeurs d'inclusion dans ses processus de décision, ses allocations de ressources et ses politiques de personnel. La cohérence entre discours et pratique institutionnelle est la condition de la crédibilité du changement." }
            ]}
            note="Le changement de paradigme prend du temps. Il demande de la persévérance institutionnelle"
          />

          <HighlightBox label="Ce qui trahit la culture institutionnelle" couleur="jaune">
            <Liste items={[
              "Comment on parle des résidents en leur absence dans les couloirs",
              "Les décisions prises sans les concerner directement",
              "La tolérance vis-à-vis de certains commentaires réducteurs",
              "Le décalage entre les valeurs affichées et les allocations réelles de ressources"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Leçon 5.3" titre="Le rôle des équipes et de la coordination interprofessionnelle">
          <Texte>La mise en œuvre du MDH-PPH dans les pratiques institutionnelles suppose une coordination interprofessionnelle efficace. Les situations complexes — poly-handicap, double diagnostic, vieillissement — nécessitent la mobilisation de compétences multiples, qui ne peuvent s'articuler que si elles partagent un cadre commun d'analyse.</Texte>

          <ConceptBox label="La réunion de synthèse transformée" titre="D'un rapport disciplinaire à une analyse collective">
            <Texte>La réunion de synthèse n'est plus un moment où chaque professionnel reporte ses observations disciplinaires. Elle devient un espace collectif d'analyse interactionnelle : ensemble, l'équipe cartographie les facteurs personnels, identifie les obstacles et facilitateurs environnementaux, évalue les habitudes de vie et décide des interventions prioritaires.</Texte>
            <Texte>Ce type de réunion exige une animation structurée, une clarification des rôles de chacun et un espace de parole équitable.</Texte>
          </ConceptBox>

          <HighlightBox label="Coordination avec les partenaires extérieurs" couleur="bleu">
            <Texte>La coordination avec les partenaires extérieurs — proches aidants, médecins, services de soins ambulatoires, institutions scolaires ou professionnelles — est essentielle. Le MDH-PPH offre un cadre de communication qui facilite ces échanges en fournissant un vocabulaire commun et une logique d'analyse partagée.</Texte>
          </HighlightBox>

          <PullQuote>
            Chaque professionnel qui comprend que le handicap n'est pas dans la personne mais dans l'interaction, que son rôle est d'agir sur l'environnement autant que sur la personne, que la participation sociale est le seul indicateur qui compte vraiment — ce professionnel devient un acteur de l'inclusion.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Quiz de fin de formation" titre="Testez votre compréhension">
          <Quiz
            questions={[{
              question: "Plusieurs résidents refusent les activités du vendredi. L'analyse MDH-PPH révèle un roulement d'équipe et des activités imposées depuis 3 ans. Quelle est la première action prioritaire ?",
              reponses: [
                "Proposer des activités plus reposantes le vendredi après-midi",
                "Lever les obstacles identifiés : stabiliser l'équipe du vendredi et co-construire les activités avec les résidents",
                "Prescrire un bilan médical pour comprendre la fatigue des résidents",
                "Supprimer les activités du vendredi qui ne conviennent manifestement pas",
              ],
              bonneReponse: 1,
              explication: "L'analyse MDH-PPH a identifié deux obstacles environnementaux : un obstacle social méso (roulement d'équipe) et un obstacle d'autodétermination (activités imposées sans consultation). La priorité est d'agir sur ces obstacles — pas de traiter un symptôme médical inexistant.",
            }]}
            onValiderModule={onValiderModule}
          />
        </SectionModule>

      </div>
    </div>
  )
}
