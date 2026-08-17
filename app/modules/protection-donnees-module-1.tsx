import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module1ProtectionDonnees({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={1}
        categorie="Protection des données : Transversal"
        titre="Voir les données"
        titrePart2="là où elles sont"
        sousTitre="Éveiller le regard : dans une institution sociale ou médico-sociale, les données sont partout, et presque toujours sensibles."
        duree="≈ 25 minutes"
        niveau="Sensibilisation"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Une matière invisible à force d'être familière">
          <ConceptBox label="Objectifs" titre="À l'issue de ce module, vous serez en mesure de :">
            <Liste items={[
              "Reconnaître ce qu'est une donnée personnelle et une donnée sensible",
              "Repérer les données là où elles circulent vraiment : à l'oral, sur papier, sur écran",
              "Comprendre pourquoi, dans nos métiers, presque toute information est sensible",
              "Situer votre propre fonction dans la chaîne de responsabilité partagée",
            ]} />
          </ConceptBox>
          <Texte>Demandez autour de vous ce qu'évoque « la protection des données ». Les réponses tournent presque toujours autour de la même image : des serveurs, des mots de passe, des pirates informatiques, peut-être un règlement européen dont on a vaguement entendu parler. La protection des données, dans l'imaginaire commun, c'est un sujet d'ordinateurs.</Texte>
          <Texte>Cette image n'est pas fausse, mais elle est trompeuse, parce qu'elle désigne la plus petite partie du problème. Dans une institution sociale ou médico-sociale, l'immense majorité des données personnelles ne se traite pas sur un serveur. Elle se traite dans une transmission échangée entre deux portes, dans un cahier de liaison ouvert sur une table, dans une remarque lâchée à la cafétéria, dans un message envoyé le soir depuis un téléphone privé, dans un dossier resté visible sur un bureau. Autrement dit : la donnée circule en permanence, par la voix, par le papier, par l'écran, et c'est précisément parce qu'elle nous est si familière que nous ne la voyons plus.</Texte>
          <Texte>C'est tout l'enjeu de ce premier module, et il est modeste en apparence : <strong>réapprendre à voir</strong>. Non pas accumuler des connaissances juridiques, mais retrouver la conscience de ce que l'on manipule. Car on ne protège jamais ce qu'on ne voit pas. Un professionnel qui « voit » les données dans sa journée prendra spontanément les bonnes précautions ; celui qui ne les voit plus les exposera sans la moindre mauvaise intention. La différence entre les deux ne tient pas à la compétence technique. Elle tient à l'attention.</Texte>
        </SectionModule>

        <PullQuote source="">
          Une donnée personnelle, ce n'est pas un fichier informatique. C'est une information sur une personne, quel qu'en soit le support, et même quand ce support, c'est notre propre voix.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Donnée personnelle, donnée sensible : poser les mots">
          <Texte>Commençons par le commencement. Une <strong>donnée personnelle</strong>, c'est toute information qui se rapporte à une personne identifiée ou que l'on peut identifier. Un nom, une date de naissance, une adresse en sont les exemples évidents. Mais la notion va bien plus loin : une photographie, un numéro de chambre associé à un nom, une remarque sur le comportement de quelqu'un, le simple fait qu'une personne soit accompagnée par votre institution, tout cela constitue des données personnelles. Le critère est simple : dès lors que l'information peut être rattachée à une personne précise, c'est une donnée personnelle, et elle mérite attention.</Texte>
          <Texte>Parmi ces données, la loi distingue une catégorie particulière, à laquelle elle accorde une protection renforcée : les <strong>données sensibles</strong>. Pourquoi « sensibles » ? Parce que leur divulgation peut exposer la personne à une atteinte grave, discrimination, jugement, stigmatisation, rupture de confiance. La nouvelle loi fédérale en dresse une liste précise, qu'il vaut la peine de regarder attentivement, car elle va nous réserver une surprise.</Texte>

          <HighlightBox label="Les données sensibles selon la loi (Art. 5 let. c nLPD)" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Les données sur la santé, la sphère intime, l'origine raciale ou ethnique",
              "Les données sur les opinions ou activités religieuses, philosophiques, politiques ou syndicales",
              "Les données sur des poursuites ou sanctions pénales et administratives",
              "Les données sur des mesures d'aide sociale",
              "Les données génétiques et biométriques identifiant une personne, une nouveauté introduite par la nLPD",
            ]} />
          </HighlightBox>

          <Texte>Relisez cette liste lentement, puis repensez à une journée ordinaire dans votre institution. L'état de santé d'un résident, son traitement, son humeur du jour : données sensibles. La mesure de curatelle dont il fait l'objet, donnée sensible. Sa situation familiale difficile, son parcours migratoire, sa religion, le fait qu'il bénéficie d'une aide sociale : sensibles, toutes. La surprise est là, et elle est de taille : <strong>dans le travail social et médico-social, la donnée sensible n'est pas l'exception qu'on rencontrerait de temps à autre. Elle est la matière même du métier.</strong> Vous ne passez pas une heure de travail sans en manipuler.</Texte>
          <Texte>Cette prise de conscience change tout. Dans beaucoup de secteurs, on peut se dire « je ferai attention quand je toucherai à quelque chose de sensible ». Dans le vôtre, cette logique ne tient pas, parce que « quelque chose de sensible », c'est presque tout, tout le temps. La vigilance ne peut donc pas être un interrupteur que l'on actionne ponctuellement : elle doit devenir une manière d'être, un arrière-plan permanent. La bonne question n'est pas « est-ce que je manipule des données sensibles ? », la réponse est presque toujours oui. La vraie question est : « est-ce que j'en ai conscience, là, maintenant, dans ce geste précis ? »</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Trois canaux, et le plus risqué n'est pas celui qu'on croit">
          <Texte>Pour réapprendre à voir les données, un repère simple aide beaucoup : elles circulent par trois canaux, et chacun a ses pièges. On a tendance à concentrer toute son inquiétude sur l'écran (l'informatique, encore elle), alors que les deux autres canaux, l'oral et le papier, sont souvent les plus exposés, justement parce qu'on ne s'en méfie pas.</Texte>
          <Texte>Le canal <strong>oral</strong> est le plus sous-estimé de tous. Une transmission, un colloque, un échange dans un couloir, une conversation téléphonique : à chaque fois, des données sensibles passent d'une personne à une autre, sans laisser de trace mais non sans conséquence. Le risque y prend deux formes. La première est le lieu : parler d'un résident dans un endroit où d'autres peuvent entendre, un couloir passant, un réfectoire, une salle d'attente. La seconde, plus subtile, est la tentation d'en dire trop, « pour bien planter le décor », en glissant des détails qui ne servent pas l'accompagnement.</Texte>
          <Texte>Le canal <strong>papier</strong> est tout aussi traître, parce qu'il repose sur des objets physiques qu'on oublie facilement. Un dossier laissé ouvert sur un bureau pendant une pause, une feuille de transmission abandonnée près de la photocopieuse, un classeur qui ne retourne pas dans son armoire, une étiquette nominative sur un casier accessible : autant de données exposées non par malveillance, mais par simple inattention matérielle.</Texte>
          <Texte>Le canal <strong>écran</strong>, enfin, celui auquel on pense spontanément, a ses risques propres, mais ils ne sont pas tous techniques. Une session non verrouillée qu'on quitte « juste une minute », une photo d'usager prise sur un téléphone privé, un message envoyé dans un groupe trop large, un e-mail expédié au mauvais destinataire : là encore, l'erreur humaine pèse davantage que la faille technologique.</Texte>

          <TableauComparaison
            titre="Les trois canaux et leurs pièges"
            colonnes={[
              {
                titre: "Canal",
                contenu: ["À l'oral", "Sur papier", "Sur écran"],
              },
              {
                titre: "Exemples du quotidien",
                contenu: [
                  "Transmissions, colloques, échanges de couloir, téléphone",
                  "Cahier de liaison, dossiers, notes, plannings, étiquettes",
                  "Logiciel métier, e-mails, messageries, photos sur téléphone",
                ],
              },
              {
                titre: "Là où ça dérape le plus souvent",
                contenu: [
                  "Parler dans un lieu où d'autres entendent ; en dire trop « pour le contexte »",
                  "Document oublié ouvert, près de l'imprimante, ou non rangé",
                  "Session non verrouillée, photo sur appareil privé, mauvais destinataire",
                ],
              },
            ]}
          />

          <Texte>La leçon de ce panorama est encourageante, au fond. Si le risque était surtout technologique, il faudrait être informaticien pour s'en protéger. Or il est surtout <strong>humain et matériel</strong> : il se joue dans des gestes simples que chacun maîtrise déjà. Verrouiller un écran, ranger un dossier, baisser la voix, choisir le bon canal : voilà ce qui protège réellement les personnes. Un écran verrouillé et une armoire fermée font plus pour la confidentialité que n'importe quel pare-feu.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Une responsabilité que personne ne porte seul">
          <Texte>Reste une dernière idée reçue à lever, et c'est la plus importante pour une institution qui vise une culture commune. On imagine souvent que la protection des données concerne « ceux qui écrivent dans les dossiers », l'équipe éducative, les soignants, l'encadrement. Les autres fonctions se sentiraient, elles, à l'écart du sujet. C'est faux, et il suffit de suivre une seule information à travers une journée pour le comprendre.</Texte>

          <HighlightBox label="Une même information, quatre métiers" couleur="jaune">
            <p className="text-gray-800 text-sm leading-relaxed font-medium italic mb-3">
              Monsieur D. vient d'être hospitalisé en psychiatrie. Cette seule phrase est déjà une donnée sensible, elle touche à sa santé. Suivons-la dans l'institution.
            </p>
            <Texte>L'<strong>éducateur ou l'éducatrice</strong> qui l'accompagne consigne l'information et la transmet à l'équipe : c'est son rôle, et il le fait dans le cadre prévu. La <strong>veille de nuit</strong>, en prenant son poste, apprend l'absence et sa raison ; rien de plus normal, mais elle pourrait, sans y penser, la mentionner devant un autre résident inquiet de ne plus voir Monsieur D. L'<strong>intendance</strong> reçoit la liste des chambres à préparer ou à laisser ; elle sait donc, elle aussi, qui est absent et le devine souvent pourquoi. Et l'<strong>administration</strong> traite le courrier de l'hôpital, où l'information figure noir sur blanc, parfois avec des détails que personne d'autre ne connaît.</Texte>
            <Texte><strong>Ce que cette scène révèle :</strong> une donnée sensible ne reste jamais sagement dans le dossier où elle a été inscrite. Elle traverse l'institution, de fonction en fonction, et chacune de ces fonctions devient, à son tour, dépositaire d'un fragment de l'intimité d'une personne. La protéger n'est donc pas la mission d'un service ; c'est une responsabilité partagée par tous ceux que l'information traverse.</Texte>
          </HighlightBox>

          <Texte>C'est exactement là que se joue la notion de culture commune. La protection des données n'est pas une compétence de spécialiste que l'on déléguerait à un responsable pendant que les autres vaqueraient à leurs tâches. C'est un <strong>réflexe collectif</strong>, partagé par l'ensemble d'une équipe, du veilleur de nuit à la comptable, de l'agent d'intendance au directeur. Chacun est un maillon. Et comme toute chaîne, celle-ci ne vaut que par son maillon le plus distrait : il suffit d'une personne qui « ne se sentait pas concernée » pour qu'une information intime se retrouve exposée.</Texte>

          <HighlightBox label="Ce qu'il faut retenir du module 1" couleur="vert">
            <Liste items={[
              "Une donnée personnelle est une information sur une personne identifiable, sur n'importe quel support : y compris la voix.",
              "Dans le social et le médico-social, presque tout est sensible : la vigilance doit être un arrière-plan permanent, pas un interrupteur ponctuel.",
              "Les données circulent par trois canaux ; l'oral et le papier sont au moins aussi risqués que l'écran, et le risque est surtout humain.",
              "Toutes les fonctions sont concernées : la protection des données est une culture commune, une chaîne où chacun est un maillon.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Parmi ces éléments, lequel n'est pas une donnée sensible au sens de la nLPD ?",
              reponses: [
                "Le fait qu'un résident bénéficie d'une mesure de curatelle",
                "La couleur préférée d'un résident",
                "Le diagnostic médical d'un usager",
                "L'appartenance religieuse d'une personne",
              ],
              bonneReponse: 1,
              explication: "Une préférence anodine reste une donnée personnelle, mais n'entre pas dans la liste des données sensibles, contrairement aux mesures d'aide ou de protection, à la santé et aux convictions religieuses.",
            },
            {
              question: "Sur quel canal le risque de divulgation est-il souvent le plus sous-estimé ?",
              reponses: [
                "L'écran, car l'informatique concentre tous les risques",
                "L'oral et le papier, justement parce qu'on ne s'en méfie pas",
                "Aucun, le risque est purement technique",
              ],
              bonneReponse: 1,
              explication: "Transmissions, couloirs, dossiers oubliés : l'oral et le papier sont des canaux majeurs et sous-estimés.",
            },
            {
              question: "La protection des données dans une institution concerne…",
              reponses: [
                "Seulement les personnes qui rédigent les dossiers",
                "Seulement le service informatique",
                "Toutes les fonctions, car l'information traverse l'institution entière",
              ],
              bonneReponse: 2,
              explication: "Éducatif, veille, intendance, administration : chacun devient dépositaire d'un fragment d'intimité et constitue un maillon de la chaîne.",
            },
          ]}
        />

      </div>
    </div>
  )
}
