// ─────────────────────────────────────────────────────────────────────────────
// MODULE EN ACCÈS LIBRE — « Comprendre le vieillissement des personnes en
// situation de handicap »
//
// Ce fichier ne contient aucun texte de formation : il déclare l'ordre des
// sections et le rendu de chaque bloc, en réutilisant le contenu déjà écrit
// pour la plateforme dans content/vieillissement-bases-module-1.ts.
//
// Corriger une phrase du module se fait donc là-bas, à un seul endroit, et la
// correction apparaît aussi bien pour les institutions sous licence que pour
// les visiteurs du site. Ne recopiez jamais de texte ici.
//
// Pour ouvrir un troisième module, voir docs/module-libre.md.
// ─────────────────────────────────────────────────────────────────────────────

import {
  hero,
  quiz,
  sAllerPlusLoin,
  sConclusion,
  sDefinitions,
  sDemographie,
  sIntroduction,
  sPrematurite,
  sProfils,
} from "@/content/vieillissement-bases-module-1"
import type { ModuleLibre } from "@/lib/decouverte/types"

export const vieillissementEtHandicap: ModuleLibre = {
  slug: "vieillissement-et-handicap",
  hero,
  dureeMinutes: 30,

  seo: {
    titre:
      "Vieillissement et handicap : un module de formation complet, en accès libre | LEARNA",
    description:
      "Suivez gratuitement et sans inscription un module LEARNA entier : vieillissement prématuré, réserve fonctionnelle, profils par type de handicap, transition AI-AVS, avec son questionnaire.",
  },

  formationSlug: "vieillissement-bases",
  // Titre tel que la base le porte aujourd'hui, et donc tel que la carte du
  // catalogue l'affiche. La migration 20260515 l'avait créée sous un autre nom.
  formationTitre: "Handicap et vieillissement - base",

  // Les `id` sont des ancres publiques et l'unité de mesure de la progression :
  // les renommer casserait les liens partagés et remettrait à zéro la
  // progression déjà enregistrée chez les visiteurs.
  sections: [
    {
      id: "introduction",
      eyebrow: sIntroduction.eyebrow,
      titre: sIntroduction.titre,
      blocs: [
        {
          type: "concept",
          label: sIntroduction.objectifs_label,
          titre: sIntroduction.objectifs_titre,
          items: sIntroduction.objectifs,
        },
        { type: "texte", texte: sIntroduction.texte1 },
        { type: "texte", texte: sIntroduction.texte2 },
        {
          type: "pullquote",
          texte: sIntroduction.pullquote_texte,
          source: sIntroduction.pullquote_source,
        },
        { type: "texte", texte: sIntroduction.texte3 },
      ],
    },
    {
      id: "definitions",
      eyebrow: sDefinitions.eyebrow,
      titre: sDefinitions.titre,
      blocs: [
        {
          type: "highlight",
          label: sDefinitions.definition_label,
          couleur: "bleu",
          textes: [sDefinitions.definition_texte],
        },
        { type: "texte", texte: sDefinitions.texte1 },
        {
          type: "tableau",
          titre: sDefinitions.tableau_titre,
          colonnes: [
            { titre: sDefinitions.tableau_col1_titre, contenu: sDefinitions.tableau_col1_items },
            { titre: sDefinitions.tableau_col2_titre, contenu: sDefinitions.tableau_col2_items },
          ],
        },
        {
          type: "highlight",
          label: sDefinitions.seuil_label,
          couleur: "jaune",
          textes: [sDefinitions.seuil_texte1, sDefinitions.seuil_texte2],
        },
      ],
    },
    {
      id: "demographie",
      eyebrow: sDemographie.eyebrow,
      titre: sDemographie.titre,
      blocs: [
        { type: "texte", texte: sDemographie.texte1 },
        { type: "statistiques", items: sDemographie.stats },
        { type: "texte", texte: sDemographie.texte2 },
        {
          type: "highlight",
          label: sDemographie.facteurs_label,
          couleur: "vert",
          items: sDemographie.facteurs_items,
        },
        {
          type: "highlight",
          label: sDemographie.ai_label,
          couleur: "bleu",
          textes: [sDemographie.ai_texte1, sDemographie.ai_texte2],
        },
        {
          type: "highlight",
          label: sDemographie.avs_label,
          couleur: "jaune",
          textes: [sDemographie.avs_texte1, sDemographie.avs_texte2],
        },
        { type: "texte", texte: sDemographie.texte3 },
        { type: "texte", texte: sDemographie.texte4 },
      ],
    },
    {
      id: "vieillissement-premature",
      eyebrow: sPrematurite.eyebrow,
      titre: sPrematurite.titre,
      blocs: [
        {
          type: "highlight",
          label: sPrematurite.concept_label,
          couleur: "bleu",
          textes: [sPrematurite.concept_texte],
        },
        {
          type: "schema",
          titre: sPrematurite.schema_titre,
          etapes: sPrematurite.schema_etapes,
          note: sPrematurite.schema_note,
        },
        {
          type: "scenario",
          titre: sPrematurite.scenario_titre,
          situation: sPrematurite.scenario_situation,
          question: sPrematurite.scenario_question,
          reponse: sPrematurite.scenario_reponse,
        },
        { type: "texte", texte: sPrematurite.texte_fin },
      ],
    },
    {
      id: "profils",
      eyebrow: sProfils.eyebrow,
      titre: sProfils.titre,
      blocs: [
        { type: "texte", texte: sProfils.texte1 },
        {
          type: "tableau",
          titre: sProfils.tableau_titre,
          colonnes: [
            { titre: sProfils.tableau_col1_titre, contenu: sProfils.tableau_col1_items },
            { titre: sProfils.tableau_col2_titre, contenu: sProfils.tableau_col2_items },
            { titre: sProfils.tableau_col3_titre, contenu: sProfils.tableau_col3_items },
          ],
        },
        { type: "texte", texte: sProfils.texte2 },
        {
          type: "highlight",
          label: sProfils.trisomie_label,
          couleur: "vert",
          textes: [sProfils.trisomie_texte],
        },
        {
          type: "highlight",
          label: sProfils.autisme_label,
          couleur: "bleu",
          textes: [
            sProfils.autisme_texte1,
            sProfils.autisme_texte2,
            sProfils.autisme_texte3,
            sProfils.autisme_texte4,
          ],
        },
        {
          type: "highlight",
          label: sProfils.di_label,
          couleur: "vert",
          textes: [sProfils.di_texte1, sProfils.di_texte2, sProfils.di_texte3, sProfils.di_texte4],
        },
        { type: "pullquote", texte: sProfils.pullquote_texte },
        {
          type: "scenario",
          titre: sProfils.scenario_titre,
          situation: sProfils.scenario_situation,
          question: sProfils.scenario_question,
          reponse: sProfils.scenario_reponse,
        },
      ],
    },
    {
      id: "aller-plus-loin",
      eyebrow: sAllerPlusLoin.eyebrow,
      titre: sAllerPlusLoin.titre,
      blocs: [
        { type: "texte", texte: sAllerPlusLoin.texte1 },
        { type: "texte", texte: sAllerPlusLoin.texte2 },
        { type: "texte", texte: sAllerPlusLoin.texte3 },
        { type: "pullquote", texte: sAllerPlusLoin.pullquote_texte },
        { type: "texte", texte: sAllerPlusLoin.texte4 },
      ],
    },
    {
      id: "conclusion",
      eyebrow: sConclusion.eyebrow,
      titre: sConclusion.titre,
      blocs: [
        { type: "texte", texte: sConclusion.texte1 },
        { type: "texte", texte: sConclusion.texte2 },
        {
          type: "highlight",
          label: sConclusion.retenir_label,
          couleur: "vert",
          items: sConclusion.retenir_items,
        },
      ],
    },
  ],

  quiz,

  // Rappel affiché après le résultat du QCM. Repris de la conclusion du module :
  // le visiteur relit ce qu'il vient d'acquérir avant qu'on lui parle d'offre.
  acquis: sConclusion.retenir_items,

  licenceAjoute: [
    {
      titre: "Un devoir corrigé par une personne",
      texte:
        "Le questionnaire que vous venez de passer se corrige tout seul. Sous licence, chaque formation se termine par un travail écrit, repris et commenté par une personne, sur votre pratique et vos situations réelles.",
    },
    {
      titre: "Le catalogue complet",
      texte:
        "Ce module est le premier d'une formation qui en compte quatre, elle-même suivie d'un approfondissement et d'un niveau expertise. La licence ouvre l'ensemble du catalogue à tous vos collaborateurs, personnel de nuit, intendance et administratif compris, sans licence nominative, nouvelles formations incluses.",
    },
    {
      titre: "Votre formation signature",
      texte:
        "Chaque licence comprend l'adaptation d'un module à votre institution : vos situations, votre vocabulaire, vos références internes à la place des exemples génériques. Visible par vos seules équipes, hébergée aux côtés du catalogue commun.",
    },
  ],

  contactSujet: "decouverte-module-libre",
}
