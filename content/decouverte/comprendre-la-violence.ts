// ─────────────────────────────────────────────────────────────────────────────
// MODULE EN ACCÈS LIBRE — « Comprendre la violence : mécanismes et dynamiques »
//
// Ce fichier ne contient aucun texte de formation : il déclare l'ordre des
// sections et le rendu de chaque bloc, en réutilisant le contenu déjà écrit
// pour la plateforme dans content/violence-module-1.ts.
//
// Corriger une phrase du module se fait donc là-bas, à un seul endroit, et la
// correction apparaît aussi bien pour les institutions sous licence que pour
// les visiteurs du site. Ne recopiez jamais de texte ici.
//
// Pour ouvrir un second module, voir docs/module-libre.md.
// ─────────────────────────────────────────────────────────────────────────────

import {
  hero,
  quiz,
  sConclusion,
  sCycle,
  sDefinir,
  sEcologique,
  sFilRouge,
  sIntroduction,
  sProcessus,
} from "@/content/violence-module-1"
import type { ModuleLibre } from "@/lib/decouverte/types"

export const comprendreLaViolence: ModuleLibre = {
  slug: "comprendre-la-violence",
  hero,
  dureeMinutes: 40,

  seo: {
    titre: "Comprendre la violence : un module de formation complet, en accès libre | LEARNA",
    description:
      "Suivez gratuitement et sans inscription un module LEARNA entier : mécanismes du passage à l'acte, cycle de l'agression, modèle écologique, avec son questionnaire de validation. 40 minutes, sur téléphone ou ordinateur.",
  },

  formationSlug: "violence-envers-professionnels",
  formationTitre: "Prévenir et gérer la violence envers les professionnel·les",

  // Les `id` sont des ancres publiques et l'unité de mesure de la progression :
  // les renommer casserait les liens partagés et remettrait à zéro la
  // progression déjà enregistrée chez les visiteurs.
  sections: [
    {
      id: "fil-rouge",
      eyebrow: sFilRouge.eyebrow,
      titre: sFilRouge.titre,
      blocs: [
        {
          type: "highlight",
          label: sFilRouge.highlight_label,
          couleur: "bleu",
          textes: [sFilRouge.texte1, sFilRouge.texte2],
        },
      ],
    },
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
        { type: "pullquote", texte: sIntroduction.pullquote_texte },
      ],
    },
    {
      id: "definir",
      eyebrow: sDefinir.eyebrow,
      titre: sDefinir.titre,
      blocs: [
        { type: "texte", texte: sDefinir.texte1 },
        { type: "texte", texte: sDefinir.texte2 },
        { type: "texte", texte: sDefinir.texte3 },
        {
          type: "tableau",
          titre: sDefinir.tableau_titre,
          colonnes: [
            { titre: sDefinir.tableau_col1_titre, contenu: sDefinir.tableau_col1_items },
            { titre: sDefinir.tableau_col2_titre, contenu: sDefinir.tableau_col2_items },
          ],
        },
        {
          type: "highlight",
          label: sDefinir.highlight_label,
          couleur: "jaune",
          textes: [sDefinir.highlight_texte],
        },
      ],
    },
    {
      id: "processus",
      eyebrow: sProcessus.eyebrow,
      titre: sProcessus.titre,
      blocs: [
        { type: "texte", texte: sProcessus.texte1 },
        { type: "texte", texte: sProcessus.texte2 },
        {
          type: "concept",
          label: sProcessus.concept_label,
          titre: sProcessus.concept_titre,
          items: sProcessus.concept_items,
        },
        { type: "texte", texte: sProcessus.texte3 },
        { type: "pullquote", texte: sProcessus.pullquote_texte },
      ],
    },
    {
      id: "cycle",
      eyebrow: sCycle.eyebrow,
      titre: sCycle.titre,
      blocs: [
        { type: "texte", texte: sCycle.texte_intro },
        { type: "schema", titre: sCycle.schema_titre, etapes: sCycle.schema_etapes },
        {
          type: "highlight",
          label: sCycle.highlight_label,
          couleur: "jaune",
          textes: [sCycle.highlight_texte],
        },
      ],
    },
    {
      id: "ecologique",
      eyebrow: sEcologique.eyebrow,
      titre: sEcologique.titre,
      blocs: [
        { type: "texte", texte: sEcologique.texte_intro },
        {
          type: "tableau",
          titre: sEcologique.tableau_titre,
          colonnes: [
            { titre: sEcologique.tableau_col1_titre, contenu: sEcologique.tableau_col1_items },
            { titre: sEcologique.tableau_col2_titre, contenu: sEcologique.tableau_col2_items },
          ],
        },
        { type: "texte", texte: sEcologique.texte_milieu },
        {
          type: "concept",
          label: sEcologique.concept_label,
          titre: sEcologique.concept_titre,
          items: sEcologique.concept_items,
        },
        {
          type: "highlight",
          label: sEcologique.highlight_label,
          couleur: "vert",
          textes: [sEcologique.highlight_texte],
        },
      ],
    },
    {
      id: "conclusion",
      eyebrow: sConclusion.eyebrow,
      titre: sConclusion.titre,
      blocs: [
        { type: "texte", texte: sConclusion.texte },
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
        "Ce module est le premier d'une formation qui en compte quatre. La licence ouvre l'ensemble du catalogue à tous vos collaborateurs, personnel de nuit, intendance et administratif compris, sans licence nominative, nouvelles formations incluses.",
    },
    {
      titre: "Votre formation signature",
      texte:
        "Chaque licence comprend la production d'une formation conçue pour votre institution, visible par vos seules équipes et hébergée aux côtés du catalogue commun. Accueil des nouveaux collaborateurs, repères de fonctionnement, procédures internes.",
    },
  ],

  contactSujet: "decouverte-module-libre",
}
