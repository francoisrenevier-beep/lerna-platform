# Ouvrir un module en accès libre

Un module en accès libre est un module complet de la plateforme, publié sur le
site vitrine à l'adresse `/decouvrir/<slug>` : sans compte, sans formulaire,
indexable par les moteurs.

Ouvrir un second module ne demande **ni composant ni page** : un fichier
descripteur, et une ligne dans le registre.

---

## Prérequis : le contenu doit être externalisé

La plupart des modules de `app/modules/` écrivent leur texte directement dans le
TSX. Un module libre, lui, se construit à partir d'un fichier de contenu séparé,
comme `content/violence-module-1.ts` — objets exportés `hero`, `sXxx`, `quiz`.

Si le module que vous voulez ouvrir n'a pas encore son fichier `content/`,
commencez par extraire son texte, en suivant le modèle d'un fichier existant.
Les modules déjà externalisés au moment d'écrire ces lignes :

- `content/violence-module-1.ts` à `content/violence-module-4.ts`
- `content/sommeil-module-1.ts`
- `content/transition-module-1.ts`
- `content/deliberation-module-1-v2.ts`

> **Ne recopiez jamais de texte de formation dans le descripteur.** Le
> descripteur importe le fichier `content/`, il ne le duplique pas. C'est ce qui
> fait qu'une correction de texte profite du même coup aux institutions sous
> licence et aux visiteurs du site.

---

## Étape 1 — Écrire le descripteur

Créez `content/decouverte/<slug>.ts`. Le slug est le segment d'URL : court, en
minuscules, sans accent. Prenez modèle sur
[`comprendre-la-violence.ts`](../content/decouverte/comprendre-la-violence.ts).

```ts
import { hero, quiz, sIntroduction, sConclusion } from "@/content/mon-module"
import type { ModuleLibre } from "@/lib/decouverte/types"

export const monModule: ModuleLibre = {
  slug: "mon-module",
  hero,
  dureeMinutes: 30,

  seo: {
    titre: "… | LEARNA",
    description: "…",           // 150–160 caractères, ce que le visiteur y gagne
    // ogImage: "/og/mon-module.png",   // 1200×630, optionnel
  },

  formationSlug: "slug-de-la-formation-en-base",   // pour le badge du catalogue
  formationTitre: "Titre complet de la formation",

  sections: [
    {
      id: "introduction",       // ancre publique ET unité de progression
      eyebrow: sIntroduction.eyebrow,
      titre: sIntroduction.titre,
      blocs: [
        { type: "texte", texte: sIntroduction.texte1 },
        { type: "pullquote", texte: sIntroduction.pullquote_texte },
      ],
    },
    // …
  ],

  quiz,
  acquis: sConclusion.retenir_items,

  licenceAjoute: [
    { titre: "…", texte: "…" },   // exactement trois entrées
    { titre: "…", texte: "…" },
    { titre: "…", texte: "…" },
  ],

  contactSujet: "decouverte-module-libre",
}
```

### Les identifiants de section ne se changent pas

Un `id` de section est à la fois une ancre partageable et l'unité de mesure de
la progression. Le renommer casse les liens en circulation **et** remet à zéro
la progression déjà enregistrée chez les visiteurs. Choisissez-les une fois.

### Types de blocs disponibles

| `type` | Rend | Champs |
|---|---|---|
| `texte` | Un paragraphe | `texte` |
| `pullquote` | Une citation détachée | `texte`, `source?` |
| `liste` | Une liste à puces | `items`, `couleur?` |
| `concept` | L'encadré « Concept clé » | `label`, `titre`, `items?`, `textes?` |
| `highlight` | L'encadré coloré | `label`, `couleur?`, `textes?`, `items?` |
| `tableau` | Un tableau comparatif | `titre?`, `colonnes` |
| `schema` | Le schéma d'étapes fléché | `titre`, `etapes`, `note?` |
| `media` | Un lecteur vidéo ou audio | voir plus bas |

Toutes les chaînes acceptent la syntaxe `**gras**` des fichiers `content/`.

---

## Étape 2 — Inscrire le module au registre

Dans [`content/decouverte/index.ts`](../content/decouverte/index.ts) :

```ts
import { monModule } from "./mon-module"

export const MODULES_LIBRES: ModuleLibre[] = [comprendreLaViolence, monModule]
```

C'est tout. En découlent automatiquement :

- la page `/decouvrir/mon-module`, prérendue en statique ;
- les métadonnées, l'Open Graph et le JSON-LD `Course` ;
- le sommaire, la barre de progression et la reprise de lecture ;
- le questionnaire et l'écran de fin ;
- le badge sur la carte de la formation, dans `/formations-ressources`.

---

## Étape 3 — Vérifier

```bash
npx vitest run content/decouverte     # identifiants uniques, questionnaire cohérent
npx tsc --noEmit
npx next build                        # la page doit apparaître sous ● (SSG)
```

Puis, à l'œil : sur un téléphone, du haut de la page jusqu'à l'écran de fin.

---

## Les points d'entrée ne sont pas automatiques

Le registre publie la page ; il ne pose pas de lien vers elle. Le badge du
catalogue est le seul point d'entrée déduit du registre. Les quatre autres sont
écrits en dur et pointent vers `comprendre-la-violence` :

| Page | Fichier |
|---|---|
| Accueil, second bouton | [`components/hero-section.tsx`](../components/hero-section.tsx) |
| Tarifs, avant le bloc de contact | [`app/tarifs/page.tsx`](../app/tarifs/page.tsx) |
| FAQ, réponse sur le format | [`components/faq-directeurs.tsx`](../components/faq-directeurs.tsx) |
| Pied de page | [`components/footer.tsx`](../components/footer.tsx) |

Ouvrir un second module n'oblige pas à les changer : à un moment, mieux vaut
sans doute que ces liens mènent à une page listant les modules libres plutôt
qu'à l'un d'eux en particulier.

---

## Ajouter une vidéo ou un audio

Le bloc `media` existe mais **n'est utilisé par aucun module**, et c'est
délibéré : la plateforme ne diffuse aujourd'hui ni vidéo ni audio. Un module
libre plus riche que le produit qu'il sert à vendre dessert son objet.

Le jour où la plateforme en diffusera :

```ts
{
  type: "media",
  format: "video",
  source: "https://…/module.mp4",
  titre: "Titre de la vidéo",
  pistes: [{ langue: "fr", libelle: "Français", src: "/sous-titres/module-fr.vtt" }],
  transcription: "…",
}
```

Deux règles :

- **Jamais de média sans piste de sous-titres ni transcription.** Une partie du
  public consulte en horaires décalés, souvent sans son.
- Le lecteur est en `preload="none"` : aucun octet de média n'est téléchargé
  avant que le visiteur ne le demande. Ne le changez pas, c'est ce qui garde la
  page rapide sur une connexion mobile.

L'hébergeur reste à choisir. Un embed tiers (YouTube, Vimeo) poserait sur une
page publique une question de cookies et de nLPD que le reste de la page évite
soigneusement.

---

## Ce que la progression enregistre, et ce qu'elle n'enregistre pas

Tout est dans le `localStorage` du visiteur, sous la clé
`learna_decouverte_v1_<slug>` : la section la plus avancée atteinte, les jalons
de mesure déjà émis, et le score du questionnaire. **Aucune donnée
personnelle**, rien qui quitte l'appareil.

Le détail des réponses n'est volontairement pas conservé : les questions sont
remélangées à chaque tentative, un détail enregistré ne correspondrait plus à ce
qui a été répondu.

Si vous modifiez la forme de l'état enregistré, incrémentez `VERSION` dans
[`lib/decouverte/progression.ts`](../lib/decouverte/progression.ts) : les
progressions à l'ancienne forme repartent alors de zéro, plutôt que d'afficher
un avancement incohérent.

---

## Mesure

Les événements partent vers Vercel Analytics, déjà en place. Ils ne portent que
le slug du module et des valeurs agrégées — jamais d'adresse e-mail ni de
contenu de réponse. Voir [`lib/decouverte/analytics.ts`](../lib/decouverte/analytics.ts).

| Événement | Déclenchement |
|---|---|
| `decouverte_page_vue` | Arrivée sur la page |
| `decouverte_demarrage` | Première section franchie, donc après un vrai défilement |
| `decouverte_progression` | Jalons 25, 50, 75 et 100 %, une seule fois chacun |
| `decouverte_quiz_termine` | Dernière question validée, avec le score |
| `decouverte_partage_email` | Clic sur « Envoyer par e-mail » |
| `decouverte_partage_copie` | Clic sur « Copier le message » |
| `decouverte_contact` | Clic sur « Prendre contact » |
| `decouverte_email_depose` | Attestation envoyée avec succès |

Les événements ne remontent qu'en production : `<Analytics />` n'est monté que
là, dans [`app/layout.tsx`](../app/layout.tsx).
