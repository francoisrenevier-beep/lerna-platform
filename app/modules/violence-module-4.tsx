import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { Texte, Liste } from "@/components/module/Texte"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Quiz } from "@/components/module/Quiz"
import {
  hero,
  sFilRouge,
  sIntroduction,
  sReactions,
  sMesures,
  sReparer,
  sConclusion,
  quiz,
} from "@/content/violence-module-4"

function gras(texte: string) {
  return texte.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )
}

export function Module4Violence({ onValiderModule }: { onValiderModule?: () => void } = {}) {
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

        <SectionModule eyebrow={sFilRouge.eyebrow} titre={sFilRouge.titre}>
          <HighlightBox label={sFilRouge.highlight_label} couleur="bleu">
            <Texte>{sFilRouge.texte1}</Texte>
            <Texte>{sFilRouge.texte2}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sIntroduction.eyebrow} titre={sIntroduction.titre}>
          <ConceptBox label={sIntroduction.objectifs_label} titre={sIntroduction.objectifs_titre}>
            <Liste items={sIntroduction.objectifs} />
          </ConceptBox>
          <Texte>{gras(sIntroduction.texte1)}</Texte>
          <PullQuote>{sIntroduction.pullquote_texte}</PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sReactions.eyebrow} titre={sReactions.titre}>
          <Texte>{gras(sReactions.texte_intro)}</Texte>

          <TableauComparaison
            titre={sReactions.tableau_titre}
            colonnes={[
              { titre: sReactions.tableau_col1_titre, contenu: sReactions.tableau_col1_items },
              { titre: sReactions.tableau_col2_titre, contenu: sReactions.tableau_col2_items },
            ]}
          />

          <HighlightBox label={sReactions.highlight_label} couleur="jaune">
            <Texte>{gras(sReactions.highlight_texte)}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sMesures.eyebrow} titre={sMesures.titre}>
          <Texte>{sMesures.texte_intro}</Texte>

          <SchemaEtapes titre={sMesures.schema_titre} etapes={sMesures.schema_etapes} />

          <ConceptBox label={sMesures.concept_label} titre={sMesures.concept_titre}>
            <Texte>{gras(sMesures.concept_texte)}</Texte>
          </ConceptBox>

          <HighlightBox label={sMesures.highlight_label} couleur="bleu">
            <Texte>{sMesures.highlight_texte}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sReparer.eyebrow} titre={sReparer.titre}>
          <Texte>{sReparer.texte_intro}</Texte>
          <Texte>{gras(sReparer.texte_reprise)}</Texte>
          <Texte>{gras(sReparer.texte_retour)}</Texte>

          <SchemaEtapes titre={sReparer.schema_titre} etapes={sReparer.schema_etapes} />

          <PullQuote>{sReparer.pullquote_texte}</PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sConclusion.eyebrow} titre={sConclusion.titre}>
          <Texte>{sConclusion.texte1}</Texte>
          <Texte>{sConclusion.texte2}</Texte>
          <HighlightBox label={sConclusion.retenir_label} couleur="vert">
            <Liste items={sConclusion.retenir_items} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz questions={quiz} onValiderModule={onValiderModule} />
    </div>
  )
}
