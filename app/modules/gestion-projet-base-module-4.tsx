import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"

export function Module4GestionProjetBase({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Gestion de projet : Niveau Base"
        titre="La place de chacun"
        titrePart2="dans un projet"
        sousTitre="Pourquoi tous les métiers comptent, et le pouvoir du regard partagé."
        duree="≈ 20-25 minutes"
        niveau="Base"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Introduction" titre="Une idée tenace, et coûteuse">
          <Texte>Il existe une croyance répandue dans les institutions, rarement formulée à voix haute mais largement agissante : les projets seraient l'affaire de certains métiers seulement. Les cadres, les chefs de service, à la rigueur les professionnels « de première ligne » auprès des personnes. Les autres (la veille de nuit, l'intendance, l'administration, la maintenance) ne seraient pas vraiment concernés, ou seulement à la marge, pour « exécuter » ce que d'autres ont décidé.</Texte>
          <Texte>Cette croyance n'est pas seulement injuste ; elle est concrètement coûteuse, et il vaut la peine de comprendre pourquoi. Dans une institution, <strong>un projet touche presque toujours plusieurs métiers à la fois</strong>, parce qu'une institution est un tout dont les parties sont liées. Modifier l'organisation d'un moment de la journée, c'est faire bouger des lignes côté éducatif, côté soin, côté cuisine, côté planning administratif, parfois côté maintenance des locaux. Un projet conçu en ignorant une partie de ces métiers se heurtera, tôt ou tard, à ce qu'on n'avait pas anticipé de leur côté : un obstacle pratique, une résistance, un effet de bord qu'un regard de plus aurait vu venir.</Texte>
          <Texte>Mais il y a plus grave que l'inefficacité. Cette croyance <strong>prive l'institution d'intelligence</strong>, et elle prive certains professionnels de leur place. C'est précisément contre elle que se construit ce que LEARNA appelle la <strong>culture commune</strong> : l'idée que des références partagées entre tous les secteurs d'une institution, y compris ceux qu'on associe rarement aux projets, ne sont pas un luxe, mais une ressource décisive.</Texte>
        </SectionModule>

        <PullQuote source="">
          Une institution, c'est un tout dont les parties communiquent. Quand un projet avance quelque part, il fait bouger des lignes ailleurs. Ignorer un métier, c'est se condamner à buter sur ce qu'on n'avait pas vu venir.
        </PullQuote>

        <SectionModule eyebrow="Section 1" titre="Le regard partagé : voir ensemble ce que nul ne voit seul">
          <Texte>Voici une notion simple à énoncer, mais dont les implications sont profondes, et qui reviendra tout au long du parcours : le <strong>regard partagé</strong>.</Texte>

          <ConceptBox label="Concept clé" titre="Le regard partagé">
            <p>Le regard partagé désigne le fait que chaque métier, par sa position, son moment de présence et son expérience propre, perçoit de la réalité quelque chose que les autres ne perçoivent pas. Aucun de ces regards, pris isolément, ne donne l'image complète. Mais mis en commun, ils dessinent une compréhension de la situation bien plus juste et complète qu'aucun n'aurait pu en former seul.</p>
          </ConceptBox>

          <Texte>Le fondement de cette notion vaut qu'on s'y arrête, car il n'est pas évident. On pourrait croire que voir une situation est une affaire d'attention ou de compétence : le bon professionnel verrait tout, le moins bon manquerait des choses. C'est faux. Même le professionnel le plus attentif ne voit la personne accompagnée que <strong>depuis sa position et à son moment.</strong></Texte>
          <Texte>L'éducateur la côtoie dans les activités de journée ; la veille de nuit la connaît dans un tout autre état, celui du sommeil, des angoisses nocturnes, des réveils ; l'agent qui prépare et sert les repas observe son rapport à la nourriture, ses goûts, ses jours sans appétit ; le personnel administratif perçoit le rythme de ses contacts avec l'extérieur, la présence ou l'éloignement de ses proches.</Texte>
          <Texte>Ces perceptions ne sont pas redondantes : elles sont <strong>complémentaires</strong>. Chacune capte une facette réelle que la position des autres rend littéralement invisible. Ce n'est pas que les autres seraient moins attentifs, c'est qu'ils ne sont pas là, à ce moment, dans cette relation. Voilà pourquoi un changement chez une personne accompagnée peut n'apparaître clairement qu'une fois ces regards rapprochés : ce qui était, pour chacun, un détail ténu et isolé devient, mis bout à bout, un signal net que personne n'aurait su lire seul.</Texte>

          <TableauComparaison
            titre="Un même fait, plusieurs regards complémentaires"
            colonnes={[
              {
                titre: "Métier",
                contenu: ["Éducatif", "Veille de nuit", "Intendance", "Administratif"],
              },
              {
                titre: "Ce qui se voit depuis cette position",
                contenu: [
                  "Ce qui se passe dans les activités et les relations de journée",
                  "Ce qui se passe la nuit : sommeil, angoisses, réveils",
                  "Le rapport à l'alimentation, les goûts, les jours sans appétit",
                  "Le rythme des contacts avec l'extérieur, la présence ou l'éloignement des proches",
                ],
              },
            ]}
          />

          <Texte><strong>Le regard partagé ne se produit pas tout seul.</strong> C'est un point décisif. Ces regards complémentaires ne se rassemblent jamais spontanément : par défaut, chacun garde son fragment de compréhension dans son coin, persuadé que ce qu'il observe est trop mineur pour mériter d'être dit. Le regard partagé suppose qu'on <em>crée les occasions</em> de faire circuler ces fragments, un temps d'échange, une transmission soignée, une réunion de projet où la parole de chaque métier est réellement attendue et écoutée. Une grande part de la démarche projet consiste, au fond, à organiser cette circulation des regards. Sans cette organisation, la richesse existe mais reste dispersée, donc inutilisable.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 2" titre="Distinguer les rôles sans hiérarchiser les personnes">
          <Texte>Affirmer que tous les métiers sont concernés ne revient pas à dire que tout le monde fait la même chose dans un projet. Les rôles se distinguent, et il est important de les distinguer pour que le projet fonctionne. La difficulté est de le faire sans retomber dans la hiérarchie de valeur qu'on vient justement de récuser.</Texte>

          <ConceptBox label="Concept clé" titre="Trois rôles dans tout projet">
            <p><strong>Porter</strong>, quelqu'un porte le projet : il en assure le suivi, veille à ce qu'il avance, fait le lien entre les participants, garde le cap de l'objectif. C'est le fil rouge du projet. Point important : ce n'est pas nécessairement un cadre. Un projet peut être porté par n'importe quel professionnel motivé et légitime sur le sujet.</p>
            <p><strong>Contribuer</strong>, de nombreuses personnes contribuent : elles apportent un regard, réalisent des actions, partagent une information décisive. La contribution est l'essence même du travail collectif.</p>
            <p><strong>Décider</strong>, certaines décisions, en particulier celles qui engagent des moyens ou modifient l'organisation, relèvent d'un niveau de responsabilité défini. Savoir clairement qui décide quoi évite les blocages et les malentendus.</p>
          </ConceptBox>

          <Texte>La distinction entre ces rôles apaise bien des tensions : <strong>distinguer des rôles n'est pas hiérarchiser des personnes.</strong> Le rôle dit ce que chacun fait dans le projet, pour que l'ensemble tienne debout ; il ne dit rien de la valeur des personnes. Celui qui contribue par une observation précieuse, la veilleuse qui signale un détail nocturne qui éclaire toute une situation, n'est en rien « inférieur » à celui qui décide. Il occupe une autre place, tout aussi nécessaire.</Texte>
          <Texte>Cette clarté sur les rôles a un effet protecteur souvent sous-estimé. Quand les rôles sont flous, deux dérives opposées guettent. Soit personne ne porte vraiment le projet, et il s'enlise faute de quelqu'un qui en tienne le fil. Soit tout le monde se sent autorisé à tout décider, et le projet se bloque dans des désaccords sans arbitre. Nommer les rôles, c'est éviter ces deux écueils, non pour mettre les gens à leur place au sens méprisant, mais pour que chacun connaisse sa place et puisse l'occuper pleinement, sans se sentir ni écrasé, ni oublié, ni mis en porte-à-faux.</Texte>
        </SectionModule>

        <PullQuote source="">
          Distinguer les rôles, ce n'est pas classer les gens par ordre d'importance. C'est clarifier qui fait quoi, pour que le projet tienne et que chacun trouve sa juste place.
        </PullQuote>

        <SectionModule eyebrow="Section 3" titre="Quand la diversité des métiers fait la force du projet">
          <Texte>Tout ce qui précède converge vers une conclusion qui renverse l'idée reçue du début. La diversité des métiers n'est pas une complication à gérer dans un projet : elle en est la <strong>ressource principale.</strong></Texte>
          <Texte>Un projet qui mobilise réellement les différents métiers d'une institution dispose, de ce fait même, d'une compréhension plus complète de la situation, anticipe mieux les obstacles, et trouve des leviers d'action qu'un seul métier n'aurait jamais identifiés. Là où un métier seul voit un problème insoluble, le croisement des métiers fait souvent apparaître une solution simple, parce que la clé se trouvait du côté de celui qu'on n'avait pas pensé à associer.</Texte>
          <Texte>Et il y a un effet second, tout aussi précieux, qui touche à la culture commune. Quand un professionnel, quel que soit son métier, est réellement associé à un projet, qu'on attend et qu'on écoute son regard, il ne se vit plus comme un simple rouage exécutant des décisions venues d'ailleurs. Il se vit comme <strong>partie prenante de l'institution et de sa mission.</strong> Cette appartenance n'est pas un effet décoratif : elle nourrit l'engagement, la qualité du travail, et le sentiment que ce qu'on fait a du sens.</Texte>

          <HighlightBox label="Point de réflexion" couleur="jaune">
            <Texte>Pensez à votre propre métier. Quelle facette de la réalité institutionnelle voyez-vous, que d'autres métiers ne voient probablement pas depuis leur position ? Et à l'inverse : quel métier, dans votre institution, est rarement associé aux projets alors que son regard serait précieux ? Cette double question est le cœur pratique de la culture commune.</Texte>
          </HighlightBox>

          <HighlightBox label="Le déclic de ce module" couleur="bleu">
            <Texte>Si vous avez parfois pensé « les projets, ce n'est pas pour mon métier », ce module vous invite à renverser cette idée. Votre regard est une pièce du puzzle que personne d'autre ne possède. Un projet privé de votre métier n'est pas un projet allégé : c'est un projet avec un angle mort. Vous n'êtes pas en marge de la démarche projet, vous en êtes une pièce nécessaire.</Texte>
          </HighlightBox>

          <HighlightBox label="Ce qu'il faut retenir" couleur="vert">
            <Liste items={[
              "L'idée que les projets ne concerneraient que certains métiers est fausse et coûteuse : un projet touche presque toujours plusieurs métiers, car une institution est un tout dont les parties sont liées.",
              "Le regard partagé : chaque métier perçoit, depuis sa position et son moment, une facette réelle que les autres ne voient pas. Ces regards ne sont pas redondants mais complémentaires ; mis en commun, ils donnent une compréhension qu'aucun ne détenait seul.",
              "Ce partage ne se produit jamais spontanément : il faut organiser la circulation des regards (échanges, transmissions, réunions). Une grande part de la démarche projet consiste en cela.",
              "Trois rôles se distinguent : porter, contribuer, décider. Distinguer les rôles n'est pas hiérarchiser les personnes : c'est permettre à chacun de connaître et d'occuper pleinement sa place.",
              "La diversité des métiers est la ressource principale d'un projet, et le fait d'associer chacun nourrit la culture commune et le sentiment d'appartenance.",
            ]} />
          </HighlightBox>
        </SectionModule>

        <Quiz
          onValiderModule={onValiderModule}
          questions={[
            {
              question: "Qu'est-ce que le « regard partagé » ?",
              reponses: [
                "L'avis du responsable, qui tranche pour tout le monde",
                "Le fait que chaque métier perçoit, depuis sa position, une facette réelle que les autres ne voient pas, et que la mise en commun de ces facettes donne une image complète",
                "Une réunion obligatoire imposée par la direction",
                "Le seul regard de la personne accompagnée",
              ],
              bonneReponse: 1,
              explication: "Chaque métier perçoit une facette réelle de la réalité que la position des autres rend littéralement invisible. Mis en commun, ces regards donnent une compréhension que nul ne détenait seul.",
            },
            {
              question: "Pourquoi dit-on que le regard partagé « ne se produit pas tout seul » ?",
              reponses: [
                "Parce qu'il est interdit sans autorisation",
                "Parce que, par défaut, chacun garde son observation dans son coin en la croyant trop mineure ; il faut organiser des occasions de faire circuler ces regards",
                "Parce que seuls les cadres peuvent le déclencher",
                "Parce qu'il ne concerne que les grandes institutions",
              ],
              bonneReponse: 1,
              explication: "Par défaut, chacun garde son fragment de compréhension dans son coin. Le regard partagé suppose qu'on crée des occasions de faire circuler ces observations : temps d'échange, transmissions soignées, réunions où la parole de chaque métier est vraiment attendue.",
            },
            {
              question: "Dans un projet, distinguer les rôles (porter, contribuer, décider) signifie :",
              reponses: [
                "Classer les métiers par ordre d'importance",
                "Clarifier qui fait quoi pour que le projet tienne, afin que chacun connaisse et occupe pleinement sa place",
                "Réserver toutes les décisions aux cadres",
                "Confier toutes les tâches à une seule personne",
              ],
              bonneReponse: 1,
              explication: "Distinguer les rôles n'est pas hiérarchiser les personnes. Le rôle dit ce que chacun fait dans le projet pour que l'ensemble tienne debout, pas la valeur de la personne.",
            },
            {
              question: "Associer un métier rarement impliqué (veille, intendance, administration) à un projet est une perte de temps. Vrai ou faux ?",
              reponses: [
                "Vrai",
                "Faux",
              ],
              bonneReponse: 1,
              explication: "Chaque métier apporte un regard unique ; l'ignorer crée un angle mort. De plus, associer chacun nourrit le sentiment d'appartenance et la culture commune, qui sont des conditions de réussite, pas des décorations.",
            },
          ]}
        />

      </div>
    </div>
  )
}
