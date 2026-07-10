import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module2GestionProjetIntermediaire({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={2}
        categorie="Gestion de projet — Niveau Intermédiaire"
        titre="Identifier les parties"
        titrePart2="prenantes"
        sousTitre="Qui est concerné par ce projet — et comment l'impliquer justement. Oublier une partie prenante, c'est préparer un blocage."
        duree="≈ 20-25 minutes"
        niveau="Intermédiaire"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Pourquoi cartographier les personnes concernées">
          <Texte>Le module précédent a clarifié le quoi du projet : le besoin, le périmètre, le livrable. Ce module s'intéresse au <strong>qui</strong> : toutes les personnes que le projet concerne, d'une manière ou d'une autre. On les appelle les <strong>parties prenantes</strong>.</Texte>
          <Texte>L'enjeu est très concret. Un projet réussit ou échoue rarement pour des raisons purement techniques ; il réussit ou échoue à cause des personnes — celles qu'on a associées et qui le portent, celles qu'on a oubliées et qui le bloquent, celles qu'on a mal impliquées et qui s'en désintéressent ou s'y opposent. <strong>Identifier les parties prenantes dès le départ, c'est anticiper là où le projet va se jouer réellement.</strong></Texte>

          <ConceptBox label="Concept clé" titre="Une partie prenante est toute personne ou tout groupe que le projet concerne.">
            <p>Qui sera touché par son résultat, qui peut l'influencer, ou dont la contribution est nécessaire. Le mot recouvre large : ceux qui décident, ceux qui réalisent, ceux qui subissent les effets, ceux qui peuvent aider ou faire obstacle. Cartographier les parties prenantes, c'est dresser la liste de tous ces acteurs avant de se lancer, pour n'oublier personne d'important.</p>
          </ConceptBox>

          <Texte>Le réflexe naturel est de ne penser qu'aux personnes directement impliquées dans la réalisation — l'équipe projet. Mais c'est insuffisant. Un projet a presque toujours un cercle de personnes plus large : celles qui devront vivre avec son résultat, celles qui détiennent une information ou une autorisation nécessaire, celles dont l'opposition pourrait tout arrêter. Oublier ce cercle élargi, c'est se condamner à le redécouvrir en cours de route, souvent sous la forme d'un obstacle imprévu.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Repensez à un projet qui a buté sur un obstacle « venu de nulle part » : un service pas prévenu, une autorisation manquante, une résistance inattendue. Avec le recul, cet obstacle était-il vraiment imprévisible — ou s'agissait-il d'une partie prenante qu'on n'avait pas identifiée au départ ? La plupart des « imprévus » de ce type sont en réalité des oublis de cartographie.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 1" titre="La spécificité du secteur : la personne accompagnée est une partie prenante">
          <Texte>Voici le point le plus important de ce module, et l'une des marques propres du secteur social et médico-social. Dans beaucoup de domaines, les parties prenantes sont les professionnels, les partenaires, les financeurs. Dans le nôtre, il y a une partie prenante qu'on ne peut jamais traiter comme un simple destinataire : <strong>la personne accompagnée elle-même</strong>, et avec elle, souvent, sa famille ou son représentant légal.</Texte>
          <Texte>Ce point prolonge directement le « faire avec plutôt que pour » vu au niveau base. Une personne accompagnée n'est pas seulement quelqu'un <em>sur qui</em> le projet aura des effets ; c'est quelqu'un <em>avec qui</em> le projet doit, autant que possible, se construire. La considérer comme une partie prenante à part entière, c'est lui reconnaître une voix dans les projets qui la concernent.</Texte>

          <ConceptBox label="Concept clé" titre="Dans le secteur, la personne accompagnée et ses proches sont des parties prenantes de plein droit, pas de simples bénéficiaires.">
            <p>Un projet qui modifie l'organisation d'un lieu de vie, les horaires, les espaces communs, les activités, concerne au premier chef ceux qui y vivent. Les associer — recueillir leur avis, tenir compte de leur expérience, parfois les faire participer aux décisions — n'est pas une option de courtoisie : c'est une exigence éthique et un facteur de réussite, car un projet imposé sans la parole de ceux qu'il touche rencontre résistance et désengagement.</p>
          </ConceptBox>

          <Texte>Cette exigence demande du discernement. Associer la personne accompagnée se fait <strong>à la mesure de ses capacités et de la nature du projet</strong>. Pour certaines personnes et certains sujets, cela signifie une participation directe aux décisions ; pour d'autres, cela passe par l'écoute attentive de leurs réactions, par la médiation d'un proche ou d'un représentant légal. Le principe reste constant ; ses modalités s'adaptent.</Texte>

          <PullQuote>
            Dans nos métiers, celui que le projet concerne le plus n'est pas autour de la table par hasard ou par politesse. Sa parole est une partie prenante du projet, au même titre que celle des professionnels.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Tous les métiers, et les partenaires extérieurs">
          <Texte>Au-delà des personnes accompagnées, la cartographie doit ratisser large du côté des professionnels et des partenaires.</Texte>
          <Texte>Du côté interne, le réflexe à prendre est de <strong>balayer tous les métiers de l'institution</strong>, y compris ceux qu'on n'associe pas spontanément aux projets. Un projet qui touche aux repas concerne la cuisine ; un projet qui modifie les rythmes concerne la veille de nuit ; un projet qui change une organisation concerne l'administration et parfois la maintenance. Se demander systématiquement « quels métiers ce projet touche-t-il, même indirectement ? » fait apparaître des parties prenantes qu'on aurait oubliées — et dont l'oubli aurait coûté cher.</Texte>
          <Texte>Du côté externe, beaucoup de projets impliquent des <strong>partenaires</strong> : d'autres institutions, des services de l'État ou du canton, des intervenants extérieurs, des bénévoles, des familles au sens large. Ces partenaires sont des parties prenantes réelles, dont dépend parfois une autorisation, un financement, une coordination. Les identifier tôt évite de découvrir tardivement qu'une étape clé dépendait de quelqu'un qu'on n'avait pas prévenu.</Texte>

          <HighlightBox label="Une question simple pour ne oublier personne" couleur="bleu">
            <Texte>Pour chaque projet, passez en revue trois cercles :</Texte>
            <Liste items={[
              "« Qui vit avec le résultat ? » (personnes accompagnées, proches)",
              "« Qui doit contribuer ou autoriser ? » (métiers internes, hiérarchie, partenaires)",
              "« Qui pourrait freiner ou bloquer ? » (toute personne dont l'opposition compterait)",
            ]} />
            <Texte>Ces trois questions, posées au départ, font apparaître l'essentiel des parties prenantes — et transforment des blocages futurs en points d'attention anticipés.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3" titre="Impliquer à la juste mesure : informer, consulter, associer">
          <Texte>Identifier les parties prenantes ne signifie pas qu'il faille toutes les impliquer de la même façon. Ce serait ingérable, et inutile. Le discernement consiste à <strong>ajuster le niveau d'implication de chacun</strong> selon ce que le projet exige et ce que la personne peut apporter.</Texte>

          <ConceptBox label="Concept clé" titre="Trois niveaux d'implication à distinguer :">
            <p><strong>Informer</strong> — tenir au courant. Certaines parties prenantes n'ont pas à participer aux décisions, mais doivent savoir ce qui se passe pour ne pas être prises au dépourvu.</p>
            <p><strong>Consulter</strong> — recueillir l'avis. D'autres ont un point de vue, une expérience ou une information précieuse ; on les sollicite pour nourrir le projet, sans qu'elles décident pour autant.</p>
            <p><strong>Associer</strong> — faire participer activement. Certaines parties prenantes sont au cœur du projet : on les implique dans les décisions et la réalisation.</p>
          </ConceptBox>

          <Texte>Le bon niveau dépend de chaque partie prenante et de chaque projet. Mal calibrer ce niveau produit deux erreurs symétriques. <strong>Trop peu impliquer</strong> une partie prenante importante, c'est risquer son opposition ou sa démobilisation : la personne qu'on aurait dû associer, et qu'on s'est contenté d'informer, se sentira mise à l'écart d'un projet qui la concerne. <strong>Trop impliquer</strong> tout le monde, à l'inverse, alourdit le projet, dilue les responsabilités et épuise les bonnes volontés en réunions inutiles.</Texte>
          <Texte>Il faut ajouter une nuance importante. Le niveau d'implication n'est pas une hiérarchie de valeur. Informer quelqu'un plutôt que l'associer ne le dévalorise pas ; cela reconnaît simplement que, pour ce projet précis, sa contribution attendue est d'être tenu au courant. Une même personne pourra être associée de près à un projet et seulement informée d'un autre, selon ce qui est en jeu.</Texte>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "Les parties prenantes sont toutes les personnes que le projet concerne : qui en subira les effets, qui peut l'influencer, ou dont la contribution est nécessaire. Les identifier tôt, c'est anticiper là où le projet se jouera vraiment.",
              "Spécificité du secteur : la personne accompagnée et ses proches sont des parties prenantes de plein droit. Les associer s'ajuste à leurs capacités et à la nature du projet, mais le principe est constant.",
              "La cartographie doit balayer tous les métiers internes et les partenaires extérieurs. Trois questions aident : qui vit avec le résultat, qui doit contribuer ou autoriser, qui pourrait freiner.",
              "Le niveau d'implication s'ajuste : informer, consulter, associer. Trop peu impliquer démobilise ou crée de l'opposition ; trop impliquer alourdit et épuise.",
              "Le niveau d'implication n'est pas une hiérarchie de valeur : il dit la contribution attendue pour ce projet précis, pas l'importance de la personne.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Qu'est-ce qu'une partie prenante ?",
              reponses: [
                "Uniquement les membres de l'équipe qui réalisent le projet",
                "Toute personne ou groupe que le projet concerne : qui en subira les effets, peut l'influencer, ou dont la contribution est nécessaire",
                "Seulement les décideurs et la hiérarchie",
                "Les partenaires extérieurs uniquement",
              ],
              bonneReponse: 1,
              explication: "Le cercle des parties prenantes est bien plus large que la seule équipe de réalisation. Il inclut ceux qui décident, ceux qui réalisent, ceux qui subissent les effets, et ceux qui peuvent aider ou faire obstacle.",
            },
            {
              question: "Dans le secteur social et médico-social, quelle est la spécificité concernant la personne accompagnée ?",
              reponses: [
                "Elle n'a pas à être impliquée dans les projets",
                "Elle est une partie prenante de plein droit, pas un simple bénéficiaire ; on l'associe à la mesure de ses capacités et de la nature du projet",
                "Elle doit décider seule de tous les projets",
                "Seule sa famille compte comme partie prenante",
              ],
              bonneReponse: 1,
              explication: "La personne accompagnée n'est pas seulement destinataire d'un projet : elle en est une partie prenante à part entière. L'associer — selon ses capacités et la nature du projet — est une exigence éthique et un facteur de réussite.",
            },
            {
              question: "Que se passe-t-il si l'on implique trop peu une partie prenante importante ?",
              reponses: [
                "Le projet va plus vite et tout le monde y gagne",
                "On risque son opposition ou sa démobilisation : mise à l'écart d'un projet qui la concerne, elle s'en désintéresse ou s'y oppose",
                "Rien, le niveau d'implication n'a pas d'effet",
                "Elle devient automatiquement décideuse",
              ],
              bonneReponse: 1,
              explication: "Une partie prenante importante qu'on a seulement informée alors qu'elle aurait dû être associée se sentira mise à l'écart et risque de s'opposer au projet. À l'inverse, trop impliquer tout le monde alourdit le projet et épuise les bonnes volontés.",
            },
            {
              question: "Informer une partie prenante plutôt que l'associer revient à la dévaloriser. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Le niveau d'implication n'est pas une hiérarchie de valeur : il reflète la contribution attendue pour ce projet précis. Une même personne peut être associée de près à un projet et seulement informée d'un autre, selon ce qui est en jeu.",
            },
          ]}
        />

      </div>
    </div>
  )
}
