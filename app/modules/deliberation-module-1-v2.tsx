import { HeroModule } from "@/components/module/HeroModule"
import { SectionModule } from "@/components/module/SectionModule"
import { ConceptBox } from "@/components/module/ConceptBox"
import { PullQuote } from "@/components/module/PullQuote"
import { HighlightBox } from "@/components/module/HighlightBox"
import { SchemaEtapes } from "@/components/module/SchemaEtapes"
import { TableauComparaison } from "@/components/module/TableauComparaison"
import { Texte, Liste } from "@/components/module/Texte"
import { Quiz } from "@/components/module/Quiz"
import {
  hero,
  sAccroche,
  sEthiqueMorale,
  sTriangle,
  sBoussoles,
  sFilRouge,
  quiz,
} from "@/content/deliberation-module-1-v2"

function gras(texte: string) {
  return texte.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )
}

export function Module1DeliberationV2({ onValiderModule }: { onValiderModule?: () => void } = {}) {
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
        videoYoutube={hero.videoYoutube}
      />

      <div className="max-w-3xl mx-auto px-8 py-12">

        {/* ── Introduction & objectifs ──────────────────────────────────── */}
        <SectionModule eyebrow={sAccroche.eyebrow} titre={sAccroche.titre}>
          <Texte>{sAccroche.texte_ouverture}</Texte>
          <div className="space-y-3 mb-6">
            {sAccroche.situations.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#1B2D5B]/5 border border-[#1B2D5B]/10 rounded-lg px-4 py-3"
              >
                <span className="text-[#3DBFA0] font-bold text-sm mt-0.5 flex-shrink-0">
                  {i + 1}.
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
          <Texte>{gras(sAccroche.texte1)}</Texte>
          <HighlightBox label={sAccroche.valeurs_label} couleur="jaune">
            <p className="text-gray-800 text-sm leading-relaxed font-medium italic mb-3">
              {sAccroche.valeurs_question}
            </p>
            <Texte>{sAccroche.valeurs_note}</Texte>
          </HighlightBox>
          <Texte>{sAccroche.texte_reglementation}</Texte>
          <Texte>{gras(sAccroche.texte_valeurs_perso)}</Texte>
          <Texte>{gras(sAccroche.texte2)}</Texte>
          <ConceptBox label={sAccroche.objectifs_label} titre={sAccroche.objectifs_titre}>
            <Liste items={sAccroche.objectifs} />
          </ConceptBox>
        </SectionModule>

        {/* ── Section 1 — Éthique et morale ─────────────────────────────── */}
        <SectionModule eyebrow={sEthiqueMorale.eyebrow} titre={sEthiqueMorale.titre}>
          <Texte>{gras(sEthiqueMorale.texte_intro)}</Texte>
          <TableauComparaison
            titre={sEthiqueMorale.tableau_titre}
            colonnes={[
              sEthiqueMorale.tableau_col_dim,
              sEthiqueMorale.tableau_col_morale,
              sEthiqueMorale.tableau_col_ethique,
            ]}
          />
          <Texte>{sEthiqueMorale.texte_apres_tableau}</Texte>
          <HighlightBox label={sEthiqueMorale.terrain_label} couleur="jaune">
            <Texte>{sEthiqueMorale.terrain_texte}</Texte>
          </HighlightBox>
          <Texte>{gras(sEthiqueMorale.texte_legault)}</Texte>
          <PullQuote>{sEthiqueMorale.pullquote}</PullQuote>
        </SectionModule>

        {/* ── Section 2 — Triangle de Ricœur ────────────────────────────── */}
        <SectionModule eyebrow={sTriangle.eyebrow} titre={sTriangle.titre}>
          <Texte>{gras(sTriangle.texte_intro)}</Texte>
          <SchemaEtapes
            titre={sTriangle.schema_titre}
            etapes={sTriangle.schema_etapes}
            note={sTriangle.schema_note}
          />
          <HighlightBox label={sTriangle.terrain_label} couleur="jaune">
            <Texte>{gras(sTriangle.terrain_texte)}</Texte>
          </HighlightBox>
          <HighlightBox label={sTriangle.highlight_label} couleur="bleu">
            <Texte>{sTriangle.highlight_texte}</Texte>
          </HighlightBox>
        </SectionModule>

        {/* ── Section 3 — Les quatre boussoles ──────────────────────────── */}
        <SectionModule eyebrow={sBoussoles.eyebrow} titre={sBoussoles.titre}>
          <Texte>{sBoussoles.texte_intro}</Texte>
          <Texte>{gras(sBoussoles.texte2)}</Texte>
          <SchemaEtapes
            titre={sBoussoles.schema_titre}
            etapes={sBoussoles.schema_etapes}
            note={sBoussoles.schema_note}
          />
          <HighlightBox label={sBoussoles.convergence_label} couleur="bleu">
            <Texte>{gras(sBoussoles.convergence_texte)}</Texte>
          </HighlightBox>
          <PullQuote>{sBoussoles.pullquote}</PullQuote>
        </SectionModule>

        {/* ── Section 4 — Fil rouge Mme De Montmollin ───────────────────── */}
        <SectionModule eyebrow={sFilRouge.eyebrow} titre={sFilRouge.titre}>
          <HighlightBox label={sFilRouge.cas_label} couleur="bleu">
            <Texte>{gras(sFilRouge.texte_cas)}</Texte>
          </HighlightBox>
          <Texte>{gras(sFilRouge.texte_intro_lectures)}</Texte>
          <ul className="space-y-2 mb-6">
            {sFilRouge.lectures.map((lecture, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-[#1B2D5B]" />
                <p className="text-gray-700 leading-relaxed text-sm">{gras(lecture)}</p>
              </li>
            ))}
          </ul>
          <Texte>{sFilRouge.texte_annonce}</Texte>
          <HighlightBox label={sFilRouge.reflexion_label} couleur="vert">
            <Texte>{gras(sFilRouge.reflexion_texte)}</Texte>
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
