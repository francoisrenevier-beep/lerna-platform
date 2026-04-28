import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"

export function Module3PPH() {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={3}
        categorie="Agir sur l environnement"
        titre="Du diagnostic a l action"
        titrePart2="transformer l environnement"
        sousTitre="Apprendre a traduire une analyse PPH en actions concretes sur les environnements physique, social et organisationnel."
        duree="40 minutes"
        niveau="Tous niveaux"
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow="Objectifs" titre="A l issue de ce module, vous serez en mesure de :">
          <ConceptBox label="Competences visees" titre="Ce que vous allez apprendre">
            <Liste items={[
              "Identifier les differents types d environnements dans le modele PPH",
              "Mobiliser les leviers d action adaptes a chaque situation",
              "Appliquer les trois principes d action du PPH",
              "Concevoir une mesure environnementale a partir d une analyse PPH"
            ]} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow="Introduction" titre="De l observation a la transformation">
          <Texte>L analyse PPH n a de valeur que si elle debouche sur des actions concretes. Ce module franchit le pas entre comprendre et agir.</Texte>
          <PullQuote>
            Le PPH nous invite a deplacer la focale : du deficit de la personne vers la responsabilite collective de l environnement.
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow="Section 3.1" titre="Les types d environnements dans le PPH">
          <Texte>Le PPH distingue cinq grandes categories d environnements. Chacune offre des leviers d action specifiques.</Texte>
          <HighlightBox label="Principe fondamental" couleur="bleu">
            <Texte>Tout facteur environnemental peut etre soit un obstacle soit un facilitateur — selon le contexte et la personne. Notre role est de transformer les obstacles en facilitateurs.</Texte>
          </HighlightBox>
          <HighlightBox label="Les 5 types d environnements" couleur="vert">
            <Liste items={[
              "Physique et architectural : accessibilite, amenagement des espaces, transports, equipements",
              "Social et humain : attitudes des proches et professionnels, soutiens disponibles, relations",
              "Institutionnel et organisationnel : regles, procedures, horaires, ressources humaines",
              "Technologique : outils, aides techniques, numerique, domotique",
              "Politique et juridique : lois, droits, financement, politiques d inclusion"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.2" titre="Les leviers d action dans les pratiques professionnelles">
          <Texte>Pour chaque type d environnement, des leviers d action concrets existent. Voici les principaux :</Texte>
          <HighlightBox label="Levier materiel" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Amenager les locaux pour une meilleure accessibilite",
              "Adapter les equipements et outils utilises",
              "Faciliter les transports et deplacements",
              "Introduire des aides techniques pertinentes"
            ]} />
          </HighlightBox>
          <HighlightBox label="Levier relationnel" couleur="vert">
            <Liste items={[
              "Former les equipes a une communication adaptee",
              "Travailler les attitudes et representations des professionnels",
              "Renforcer le reseau de soutien de la personne",
              "Favoriser les relations de pair a pair"
            ]} />
          </HighlightBox>
          <HighlightBox label="Levier organisationnel" couleur="jaune">
            <Liste items={[
              "Adapter les horaires et rythmes aux besoins de la personne",
              "Modifier les regles et procedures institutionnelles",
              "Reorganiser les espaces et temps collectifs",
              "Renforcer la coordination interdisciplinaire"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.3" titre="Les trois principes d action du PPH">
          <HighlightBox label="Principe 1 — Co-construction" couleur="bleu">
            <Texte>Toute action doit etre construite avec la personne, pas pour elle. L autodetermination est le point de depart et l horizon de toute mesure PPH.</Texte>
          </HighlightBox>
          <HighlightBox label="Principe 2 — Pertinence contextuelle" couleur="vert">
            <Texte>Une action est pertinente si elle repond a un obstacle identifie dans l analyse PPH. On n agit pas sur des suppositions mais sur des obstacles constates et documentes.</Texte>
          </HighlightBox>
          <HighlightBox label="Principe 3 — Durabilite" couleur="jaune">
            <Texte>Les facilitateurs crees doivent s inscrire dans la duree. Une action ponctuelle qui disparait n ameliore pas la participation sociale de facon durable.</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.4 — Etude de cas" titre="Sophie et le travail en atelier protege">
          <HighlightBox label="Contexte" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Sophie, 32 ans, travaille en atelier protege depuis 3 ans",
              "Elle souhaite participer aux reunions d equipe hebdomadaires",
              "Actuellement : elle n y assiste pas, les informations lui sont transmises par son referent",
              "Habitude de vie visee : participation aux reunions collectives"
            ]} />
          </HighlightBox>
          <Texte>L analyse PPH de la situation de Sophie revele plusieurs obstacles environnementaux : la salle de reunion n est pas accessible en fauteuil, les reunions durent 90 minutes sans pause, le vocabulaire utilise est tres technique, aucun support visuel n est utilise.</Texte>
          <HighlightBox label="Resultat attendu" couleur="vert">
            <Liste items={[
              "Salle de reunion accessible et amenagee avec espace fauteuil",
              "Reunions structurees avec pauses toutes les 30 minutes",
              "Ordre du jour illustre envoye 48h avant",
              "Sophie participe a au moins 3 reunions sur 4 avec satisfaction exprimee"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Section 3.5 — Outil pratique" titre="Checklist de conception d une mesure">
          <HighlightBox label="Avant de mettre en place une mesure, verifiez :" couleur="vert">
            <Liste items={[
              "L habitude de vie visee est clairement identifiee",
              "L obstacle environnemental est documente par l analyse PPH",
              "La mesure a ete co-construite avec la personne concernee",
              "Des indicateurs de participation sociale ont ete definis",
              "Un calendrier de mise en oeuvre et d evaluation est prevu",
              "Les ressources necessaires sont identifiees et disponibles",
              "L equipe est informee et formee a la mise en oeuvre"
            ]} />
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow="Conclusion" titre="Ce qu il faut retenir">
          <HighlightBox label="Les points essentiels" couleur="bleu">
            <Liste couleur="bleu" items={[
              "Agir sur l environnement est plus efficace que de tenter de modifier la personne",
              "Cinq types d environnements offrent autant de categories de leviers d action",
              "Toute action doit etre co-construite, contextualisee et durable",
              "La checklist est un outil pratique pour concevoir des mesures robustes"
            ]} />
          </HighlightBox>
          <PullQuote>
            Le PPH n est pas un modele d observation, c est un modele d action.
          </PullQuote>
        </SectionModule>

      </div>
    </div>
  )
}