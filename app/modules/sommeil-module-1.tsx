import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import {
  hero,
  sIntroduction,
  sFonctions,
  sCycles,
  sBesoins,
  sReconnaitre,
  sConclusion,
  quiz,
} from "@/content/sommeil-module-1"

function gras(texte: string) {
  return texte.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )
}

export function Module1Sommeil({ onValiderModule }: { onValiderModule?: () => void } = {}) {
  return (
    <div className="min-h-screen bg-white">
      <HeroModule
        numero={hero.numero}
        categorie={hero.categorie}
        titre={hero.titre}
        titrePart2={hero.titrePart2}
        sousTitre={hero.sousTitre}
        duree={hero.duree}
        niveau={hero.niveau}
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        <SectionModule eyebrow={sIntroduction.eyebrow} titre={sIntroduction.titre}>
          <ConceptBox label={sIntroduction.objectifs_label} titre={sIntroduction.objectifs_titre}>
            <Liste items={sIntroduction.objectifs} />
          </ConceptBox>
          <Texte>{sIntroduction.texte1}</Texte>
          <Texte>{sIntroduction.texte2}</Texte>
          <HighlightBox label={sIntroduction.highlight_label} couleur="bleu">
            <Texte>{sIntroduction.highlight_texte}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sFonctions.eyebrow} titre={sFonctions.titre}>
          <Texte>{sFonctions.texte1}</Texte>
          <Texte>{sFonctions.texte2}</Texte>

          <ConceptBox label={sFonctions.fonction1_label} titre={sFonctions.fonction1_titre}>
            <Texte>{sFonctions.fonction1_texte}</Texte>
          </ConceptBox>
          <ConceptBox label={sFonctions.fonction2_label} titre={sFonctions.fonction2_titre}>
            <Texte>{sFonctions.fonction2_texte}</Texte>
          </ConceptBox>
          <ConceptBox label={sFonctions.fonction3_label} titre={sFonctions.fonction3_titre}>
            <Texte>{sFonctions.fonction3_texte}</Texte>
          </ConceptBox>

          <PullQuote source={sFonctions.pullquote_source}>{sFonctions.pullquote_texte}</PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sCycles.eyebrow} titre={sCycles.titre}>
          <Texte>{sCycles.texte_intro}</Texte>

          <ConceptBox label={sCycles.concept_label} titre={sCycles.concept_titre}>
            <Texte>{gras(sCycles.concept_texte)}</Texte>
          </ConceptBox>

          <Texte>{gras(sCycles.texte_milieu)}</Texte>

          <HighlightBox label={sCycles.highlight_label} couleur="vert">
            <Texte>{sCycles.highlight_texte}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sBesoins.eyebrow} titre={sBesoins.titre}>
          <Texte>{sBesoins.texte_intro}</Texte>

          <TableauComparaison
            titre={sBesoins.tableau_titre}
            colonnes={[
              { titre: sBesoins.tableau_col1_titre, contenu: sBesoins.tableau_col1_items },
              { titre: sBesoins.tableau_col2_titre, contenu: sBesoins.tableau_col2_items },
              { titre: sBesoins.tableau_col3_titre, contenu: sBesoins.tableau_col3_items },
            ]}
          />

          <Texte>{gras(sBesoins.texte1)}</Texte>
          <Texte>{sBesoins.texte2}</Texte>
        </SectionModule>

        <SectionModule eyebrow={sReconnaitre.eyebrow} titre={sReconnaitre.titre}>
          <Texte>{sReconnaitre.texte1}</Texte>

          <HighlightBox label={sReconnaitre.highlight_label} couleur="bleu">
            <Texte>{gras(sReconnaitre.highlight_texte)}</Texte>
          </HighlightBox>

          <Texte>{sReconnaitre.texte2}</Texte>

          <ConceptBox label={sReconnaitre.concept_label} titre={sReconnaitre.concept_titre}>
            <Texte>{sReconnaitre.concept_texte}</Texte>
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow={sConclusion.eyebrow} titre={sConclusion.titre}>
          <Texte>{sConclusion.texte1}</Texte>
          <Texte>{sConclusion.texte2}</Texte>
          <HighlightBox label={sConclusion.highlight_label} couleur="vert">
            <Texte>{sConclusion.highlight_texte}</Texte>
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz questions={quiz} onValiderModule={onValiderModule} />
    </div>
  )
}
