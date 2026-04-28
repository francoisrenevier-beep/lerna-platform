import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"

export function Module4PPH() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={4}
        categorie="Objectifs et evaluation"
        titre="Definir des objectifs"
        titrePart2="PPH-SMART"
        sousTitre="Traduire une analyse PPH en objectifs operationnels concrets, mesurables et co-construits avec la personne accompagnee."
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="A l issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Competences visees" titre="Ce que vous allez apprendre">
            <Liste items={[
              "Comprendre pourquoi les objectifs flous sont contre-productifs",
              "Maitriser les cinq criteres SMART appliques au PPH",
              "Distinguer objectif de participation et objectif environnemental",
              "Formuler des objectifs PPH-SMART a partir d une analyse de situation"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="Du plan d action a l objectif cible">
          <Texte>L analyse PPH a identifie les obstacles et les facilitateurs. Le plan d action a determine les leviers a activer. Il reste maintenant a formuler des objectifs precis qui permettront d evaluer l efficacite de nos actions.</Texte>
          <HighlightBox label="Point cle" couleur="bleu">
            <Texte>Un objectif PPH-SMART ne vise pas a reeduquer la personne. Il vise a mesurer la reduction des obstacles environnementaux et l amelioration de la participation sociale.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4.1" titre="Pourquoi SMART ? Sortir de l intention floue">
          <Texte>Les objectifs flous sont l un des obstacles les plus frequents dans les pratiques d accompagnement. Ils semblent raisonnables mais sont inoperants car ils ne permettent pas d evaluer si on a reussi.</Texte>
          <HighlightBox label="Exemples d objectifs flous — a eviter" couleur="jaune">
            <Liste items={[
              "Ameliorer l autonomie de Thomas",
              "Favoriser la participation de Marie aux activites",
              "Travailler la communication de Lucas",
              "Soutenir l integration professionnelle de Sophie"
            ]} />
          </HighlightBox>
          <Texte>Ces formulations ne disent pas : quelle autonomie ? dans quel contexte ? comment mesurer l amelioration ? a quelle echeance ? La methode SMART repond a ces questions.</Texte>
        </SectionModule>

        <SectionModule eyebrow="Section 4.2" titre="Decomposer le PPH-SMART">
          <HighlightBox label="S — Specifique" couleur="bleu">
            <Texte>L objectif est cible sur une seule habitude de vie concrete. Pas d objectifs generaux : une situation, un contexte, une personne.</Texte>
            <Texte>Exemple : Permettre a Sophie de participer aux reunions d equipe hebdomadaires dans la salle B.</Texte>
          </HighlightBox>
          <HighlightBox label="M — Mesurable" couleur="vert">
            <Texte>L objectif est quantifiable en termes de qualite de participation sociale. On mesure la frequence, le niveau d aide, la satisfaction, la duree.</Texte>
            <Texte>Exemple : Sophie participe a au moins 3 reunions sur 4 avec un niveau d aide reduit a zero.</Texte>
          </HighlightBox>
          <HighlightBox label="A — Atteignable" couleur="jaune">
            <Texte>L objectif est realiste grace aux facilitateurs mis en place par l equipe. Il devient atteignable parce que l environnement est modifie, pas parce que la personne est changee.</Texte>
          </HighlightBox>
          <HighlightBox label="R — Relevant (pertinent)" couleur="bleu">
            <Texte>L objectif est connecte au projet et au desir de la personne, son autodetermination. Il a du sens pour elle — pas seulement pour l institution.</Texte>
          </HighlightBox>
          <HighlightBox label="T — Temporellement defini" couleur="vert">
            <Texte>L objectif a une date butoir claire pour evaluer l atteinte. Cette echeance structure l action et permet de reajuster si necessaire.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 4.3" titre="Deux niveaux d objectifs PPH-SMART">
          <Texte>Dans le cadre PPH, on formule toujours deux types d objectifs complementaires :</Texte>
          <HighlightBox label="Objectif de participation — pour la personne" couleur="bleu">
            <Texte>Decrit l amelioration de la realisation d une habitude de vie. C est le resultat attendu pour la personne en termes de participation sociale.</Texte>
            <Texte>Exemple : Julien participera au repas collectif du vendredi midi de facon autonome, sans aide physique, pendant au moins 45 minutes, a raison de 3 fois sur 4.</Texte>
          </HighlightBox>
          <HighlightBox label="Objectif environnemental — pour le professionnel" couleur="vert">
            <Texte>Decrit l action que le professionnel va mener sur l environnement. C est ce que l equipe s engage a faire.</Texte>
            <Texte>Exemple : L equipe mettra en place des couverts adaptes, un placement strategique et un systeme de signal discret d ici le 15 du mois.</Texte>
          </HighlightBox>
          <PullQuote>
            C est l atteinte de l objectif environnemental (action du professionnel) qui rend l objectif de participation (resultat pour la personne) reellement atteignable.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 4.4 — Etude de cas" titre="Les objectifs PPH-SMART de Sophie">
          <HighlightBox label="Rappel de l analyse" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Habitude de vie : participation aux reunions d equipe",
              "Obstacles : salle inaccessible, duree trop longue, vocabulaire technique, pas de support visuel",
              "Facilitateurs identifies : engagement de l equipe, salle B accessible, outils visuels disponibles"
            ]} />
          </HighlightBox>
          <HighlightBox label="Objectif 1 — Pour le professionnel" couleur="vert">
            <Texte>D ici le 1er du mois prochain, l equipe amenagera la salle B avec un espace fauteuil, preparera un ordre du jour illustre envoye 48h avant, et instaurera une pause apres 30 minutes.</Texte>
          </HighlightBox>
          <HighlightBox label="Objectif 2 — Pour Sophie" couleur="bleu">
            <Texte>D ici 3 mois, Sophie participera a au moins 3 reunions d equipe sur 4, exprimera sa satisfaction a 7/10 minimum, et interviendra au moins une fois par reunion.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce qu il faut retenir">
          <HighlightBox label="Les points essentiels" couleur="vert">
            <Liste items={[
              "Les objectifs flous ne permettent pas d evaluer le succes — la methode SMART y remedie",
              "Chaque critere SMART repond a une question precisie sur l objectif",
              "Deux niveaux d objectifs : participation (pour la personne) et environnemental (pour le professionnel)",
              "L objectif environnemental est le levier qui rend l objectif de participation atteignable"
            ]} />
          </HighlightBox>
          <PullQuote>
            L objectif PPH-SMART n est pas un outil de controle, mais un outil de dialogue et de co-construction. Il permet de mesurer ce qui compte vraiment : l augmentation de la participation sociale.
          </PullQuote>
        </SectionModule>

      </div>
    </div>
  )
}