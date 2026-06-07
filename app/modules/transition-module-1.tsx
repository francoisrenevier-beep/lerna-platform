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
  sParentalite,
  sQuatreRegistres,
  sHistoireLongue,
  sFratrie,
  sConclusion,
  quiz,
} from "@/content/transition-module-1"

function gras(texte: string) {
  return texte.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )
}

export function Module1TransitionAgeAdulte({ onValiderModule }: { onValiderModule?: () => void } = {}) {
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
            <Texte>{gras(sFilRouge.texte1)}</Texte>
            <Texte>{sFilRouge.texte2}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sIntroduction.eyebrow} titre={sIntroduction.titre}>
          <ConceptBox label={sIntroduction.objectifs_label} titre={sIntroduction.objectifs_titre}>
            <Liste items={sIntroduction.objectifs} />
          </ConceptBox>
          <Texte>{sIntroduction.texte1}</Texte>
          <Texte>{sIntroduction.texte2}</Texte>
          <PullQuote source={sIntroduction.pullquote_source}>
            {sIntroduction.pullquote_texte}
          </PullQuote>
        </SectionModule>

        <SectionModule eyebrow={sParentalite.eyebrow} titre={sParentalite.titre}>
          <Texte>{sParentalite.texte_intro}</Texte>

          <ConceptBox label={sParentalite.concept_label} titre={sParentalite.concept_titre}>
            <Texte>{sParentalite.concept_intro}</Texte>
            <Liste items={sParentalite.concept_items} />
            <Texte>{sParentalite.concept_conclusion}</Texte>
          </ConceptBox>

          <HighlightBox label={sParentalite.highlight_label} couleur="jaune">
            <Texte>{sParentalite.highlight_intro}</Texte>
            <Liste items={sParentalite.highlight_items} />
          </HighlightBox>

          <PullQuote source={sParentalite.pullquote_source}>
            {sParentalite.pullquote_texte}
          </PullQuote>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
                {sParentalite.vignette_label}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {gras(sParentalite.vignette_texte)}
              </p>
            </div>
          </div>

          <Texte>{sParentalite.texte_conclusion}</Texte>
        </SectionModule>

        <SectionModule eyebrow={sQuatreRegistres.eyebrow} titre={sQuatreRegistres.titre}>
          <Texte>{sQuatreRegistres.texte_intro}</Texte>

          <SchemaEtapes
            titre={sQuatreRegistres.schema_titre}
            etapes={sQuatreRegistres.schema_etapes}
            note={sQuatreRegistres.schema_note}
          />

          <HighlightBox label={sQuatreRegistres.highlight_label} couleur="bleu">
            <Texte>{sQuatreRegistres.highlight_texte}</Texte>
          </HighlightBox>
        </SectionModule>

        <SectionModule eyebrow={sHistoireLongue.eyebrow} titre={sHistoireLongue.titre}>
          <Texte>{sHistoireLongue.texte_intro}</Texte>

          <TableauComparaison
            titre={sHistoireLongue.tableau_titre}
            colonnes={[
              { titre: sHistoireLongue.tableau_col1_titre, contenu: sHistoireLongue.tableau_col1_items },
              { titre: sHistoireLongue.tableau_col2_titre, contenu: sHistoireLongue.tableau_col2_items },
            ]}
          />

          <Texte>{sHistoireLongue.texte_apres_tableau}</Texte>

          <HighlightBox label={sHistoireLongue.highlight_label} couleur="jaune">
            <Texte>{sHistoireLongue.highlight_intro}</Texte>
            <Liste items={sHistoireLongue.highlight_items} />
            <Texte>{sHistoireLongue.highlight_conclusion}</Texte>
          </HighlightBox>

          <div className="space-y-4 my-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
                {sHistoireLongue.vignette_label}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {gras(sHistoireLongue.vignette_texte)}
              </p>
            </div>
          </div>
        </SectionModule>

        <SectionModule eyebrow={sFratrie.eyebrow} titre={sFratrie.titre}>
          <Texte>{sFratrie.texte_intro}</Texte>

          <HighlightBox label={sFratrie.highlight_label} couleur="bleu">
            <Texte>{sFratrie.highlight_texte}</Texte>
          </HighlightBox>

          <Texte>{sFratrie.texte_milieu}</Texte>

          <ConceptBox label={sFratrie.concept_label} titre={sFratrie.concept_titre}>
            <Texte>{sFratrie.concept_intro}</Texte>
            <Liste items={sFratrie.concept_items} />
          </ConceptBox>
        </SectionModule>

        <SectionModule eyebrow={sConclusion.eyebrow} titre={sConclusion.titre}>
          <Texte>{sConclusion.texte}</Texte>
          <HighlightBox label={sConclusion.retenir_label} couleur="vert">
            <Liste items={sConclusion.retenir_items} />
          </HighlightBox>
        </SectionModule>

      </div>

      <Quiz
        questions={quiz}
        onValiderModule={onValiderModule}
      />
    </div>
  )
}
