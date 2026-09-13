import type { ComponentType } from "react"

import { Module1PPH } from "@/app/modules/pph-module-1"
import { Module2PPH } from "@/app/modules/pph-module-2"
import { Module3PPH } from "@/app/modules/pph-module-3"
import { Module4PPH } from "@/app/modules/pph-module-4"
import { Module5PPH } from "@/app/modules/pph-module-5"
import { Module1Deliberation } from "@/app/modules/deliberation-module-1"
import { Module1DeliberationV2 } from "@/app/modules/deliberation-module-1-v2"
import { Module2Deliberation } from "@/app/modules/deliberation-module-2"
import { Module3Deliberation } from "@/app/modules/deliberation-module-3"
import { Module4Deliberation } from "@/app/modules/deliberation-module-4"
import { Module5Deliberation } from "@/app/modules/deliberation-module-5"
import { Module6Deliberation } from "@/app/modules/deliberation-module-6"
import { Module1Vieillissement } from "@/app/modules/vieillissement-module-1"
import { Module2Vieillissement } from "@/app/modules/vieillissement-module-2"
import { Module3Vieillissement } from "@/app/modules/vieillissement-module-3"
import { Module4Vieillissement } from "@/app/modules/vieillissement-module-4"
import { Module5Vieillissement } from "@/app/modules/vieillissement-module-5"
import { Module6Vieillissement } from "@/app/modules/vieillissement-module-6"
import { Module1MDHPPH } from "@/app/modules/mdhpph-module-1"
import { Module2MDHPPH } from "@/app/modules/mdhpph-module-2"
import { Module3MDHPPH } from "@/app/modules/mdhpph-module-3"
import { Module4MDHPPH } from "@/app/modules/mdhpph-module-4"
import { Module5MDHPPH } from "@/app/modules/mdhpph-module-5"
import { Module1FamillesSecteurAdulte } from "@/app/modules/familles-module-1"
import { Module2FamillesSecteurAdulte } from "@/app/modules/familles-module-2"
import { Module3FamillesSecteurAdulte } from "@/app/modules/familles-module-3"
import { Module4FamillesSecteurAdulte } from "@/app/modules/familles-module-4"
import { Module5FamillesSecteurAdulte } from "@/app/modules/familles-module-5"
import { Module1Curatelle } from "@/app/modules/curatelle-module-1"
import { Module2Curatelle } from "@/app/modules/curatelle-module-2"
import { Module3Curatelle } from "@/app/modules/curatelle-module-3"
import { Module1VieillissementBases } from "@/app/modules/vieillissement-bases-module-1"
import { Module2VieillissementBases } from "@/app/modules/vieillissement-bases-module-2"
import { Module3VieillissementBases } from "@/app/modules/vieillissement-bases-module-3"
import { Module4VieillissementBases } from "@/app/modules/vieillissement-bases-module-4"
import { Module4VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-4"
import { Module5VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-5"
import { Module6VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-6"
import { Module7VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-7"
import { Module8VieillissementApprofondissement } from "@/app/modules/vieillissement-approfondissement-module-8"
import { Module9VieillissementExpertise } from "@/app/modules/vieillissement-expertise-module-9"
import { Module10VieillissementExpertise } from "@/app/modules/vieillissement-expertise-module-10"
import { Module11VieillissementExpertise } from "@/app/modules/vieillissement-expertise-module-11"
import { Module1TransitionAgeAdulte } from "@/app/modules/transition-module-1"
import { Module2TransitionAgeAdulte } from "@/app/modules/transition-module-2"
import { Module3TransitionAgeAdulte } from "@/app/modules/transition-module-3"
import { Module4TransitionAgeAdulte } from "@/app/modules/transition-module-4"
import { Module5TransitionAgeAdulte } from "@/app/modules/transition-module-5"
import { Module6TransitionAgeAdulte } from "@/app/modules/transition-module-6"
import { Module1Demence } from "@/app/modules/demence-module-1"
import { Module2Demence } from "@/app/modules/demence-module-2"
import { Module3Demence } from "@/app/modules/demence-module-3"
import { Module4Demence } from "@/app/modules/demence-module-4"
import { Module1ProtectionDonnees } from "@/app/modules/protection-donnees-module-1"
import { Module2ProtectionDonnees } from "@/app/modules/protection-donnees-module-2"
import { Module3ProtectionDonnees } from "@/app/modules/protection-donnees-module-3"
import { Module1GestionProjetBase } from "@/app/modules/gestion-projet-base-module-1"
import { Module2GestionProjetBase } from "@/app/modules/gestion-projet-base-module-2"
import { Module3GestionProjetBase } from "@/app/modules/gestion-projet-base-module-3"
import { Module4GestionProjetBase } from "@/app/modules/gestion-projet-base-module-4"
import { Module5GestionProjetBase } from "@/app/modules/gestion-projet-base-module-5"
import { Module1GestionProjetIntermediaire } from "@/app/modules/gestion-projet-intermediaire-module-1"
import { Module2GestionProjetIntermediaire } from "@/app/modules/gestion-projet-intermediaire-module-2"
import { Module3GestionProjetIntermediaire } from "@/app/modules/gestion-projet-intermediaire-module-3"
import { Module4GestionProjetIntermediaire } from "@/app/modules/gestion-projet-intermediaire-module-4"
import { Module5GestionProjetIntermediaire } from "@/app/modules/gestion-projet-intermediaire-module-5"
import { Module6GestionProjetIntermediaire } from "@/app/modules/gestion-projet-intermediaire-module-6"
import { Module1GestionProjetAvance } from "@/app/modules/gestion-projet-avance-module-1"
import { Module2GestionProjetAvance } from "@/app/modules/gestion-projet-avance-module-2"
import { Module3GestionProjetAvance } from "@/app/modules/gestion-projet-avance-module-3"
import { Module4GestionProjetAvance } from "@/app/modules/gestion-projet-avance-module-4"
import { Module5GestionProjetAvance } from "@/app/modules/gestion-projet-avance-module-5"
import { Module6GestionProjetAvance } from "@/app/modules/gestion-projet-avance-module-6"
import { Module1Violence } from "@/app/modules/violence-module-1"
import { Module2Violence } from "@/app/modules/violence-module-2"
import { Module3Violence } from "@/app/modules/violence-module-3"
import { Module4Violence } from "@/app/modules/violence-module-4"
import { Module1Sommeil } from "@/app/modules/sommeil-module-1"

export type ComposantModule = ComponentType<{ onValiderModule?: () => void }>

/**
 * Contenu de chaque module, indexé par l'`id` que la table `modules` lui donne.
 *
 * La base porte la liste des modules (titre, ordre, durée) ; le texte, lui, vit
 * dans les fichiers de ce dossier. Cette table fait le lien, et elle est seule à
 * le faire : la page du module côté apprenant et la fiche imprimable de l'admin
 * la lisent toutes deux. Un nouveau module s'ajoute ici, une fois.
 */
export const MODULE_COMPONENTS: Record<string, ComposantModule> = {
  "f8bd6cc6-b91e-4542-a9c4-53001ddd9090": Module1PPH,
  "bd21a4e9-09bb-4d41-9631-51ed75088eec": Module2PPH,
  "fa177ae1-c657-46cb-a607-549ba13c8afc": Module3PPH,
  "d9e48c2e-b354-48e6-9cfe-a699ea31cba2": Module4PPH,
  "e5c5678a-957c-49a0-9d30-dbf63cea7565": Module5PPH,
  "de1b0001-0000-4000-8000-000000000001": Module1Deliberation,
  "de1b2001-0000-4000-8000-000000000001": Module1DeliberationV2,
  "de1b0002-0000-4000-8000-000000000002": Module2Deliberation,
  "de1b0003-0000-4000-8000-000000000003": Module3Deliberation,
  "de1b0004-0000-4000-8000-000000000004": Module4Deliberation,
  "de1b0005-0000-4000-8000-000000000005": Module5Deliberation,
  "de1b0006-0000-4000-8000-000000000006": Module6Deliberation,
  "7449447f-52e9-4e28-bcdf-58ff131ed7b1": Module1Vieillissement,
  "d495c1de-4027-4843-9122-c0e9507c77b3": Module2Vieillissement,
  "4c94dce0-ee04-455b-bec1-a50b27cdc875": Module3Vieillissement,
  "1f71287e-788f-4c70-aa55-1f12a6330070": Module4Vieillissement,
  "e3dc5ebd-abb7-4891-9090-52f1b000799e": Module5Vieillissement,
  "e992ccab-7ab4-4641-8e01-781ef2112bd5": Module6Vieillissement,
  "49289005-4480-4137-88fa-673bc0d2d287": Module1MDHPPH,
  "acf8c260-ad54-4908-8629-3d33def88797": Module2MDHPPH,
  "77b98c17-8566-407b-bd0a-196c8bc709b9": Module3MDHPPH,
  "7befd05f-64e8-4d62-93e1-9dbd26aeef52": Module4MDHPPH,
  "fe837bdc-855a-4a78-b2eb-8760881e3318": Module5MDHPPH,
  "fab10001-0000-4000-8000-000000000001": Module1FamillesSecteurAdulte,
  "fab10002-0000-4000-8000-000000000002": Module2FamillesSecteurAdulte,
  "fab10003-0000-4000-8000-000000000003": Module3FamillesSecteurAdulte,
  "fab10004-0000-4000-8000-000000000004": Module4FamillesSecteurAdulte,
  "fab10005-0000-4000-8000-000000000005": Module5FamillesSecteurAdulte,
  "c0ca0001-0000-4000-8000-000000000001": Module1Curatelle,
  "c0ca0002-0000-4000-8000-000000000002": Module2Curatelle,
  "c0ca0003-0000-4000-8000-000000000003": Module3Curatelle,
  "bace0001-0001-4000-8000-000000000001": Module1VieillissementBases,
  "bace0001-0002-4000-8000-000000000002": Module2VieillissementBases,
  "bace0001-0003-4000-8000-000000000003": Module3VieillissementBases,
  "bace0001-0004-4000-8000-000000000004": Module4VieillissementBases,
  "a77f0001-0004-4000-8000-000000000004": Module4VieillissementApprofondissement,
  "a77f0001-0005-4000-8000-000000000005": Module5VieillissementApprofondissement,
  "a77f0001-0006-4000-8000-000000000006": Module6VieillissementApprofondissement,
  "a77f0001-0007-4000-8000-000000000007": Module7VieillissementApprofondissement,
  "a77f0001-0008-4000-8000-000000000008": Module8VieillissementApprofondissement,
  "e9e00001-0009-4000-8000-000000000009": Module9VieillissementExpertise,
  "e9e00001-0010-4000-8000-000000000010": Module10VieillissementExpertise,
  "e9e00001-0011-4000-8000-000000000011": Module11VieillissementExpertise,
  "74a00001-0000-4000-8000-000000000001": Module1TransitionAgeAdulte,
  "74a00002-0000-4000-8000-000000000002": Module2TransitionAgeAdulte,
  "74a00003-0000-4000-8000-000000000003": Module3TransitionAgeAdulte,
  "74a00004-0000-4000-8000-000000000004": Module4TransitionAgeAdulte,
  "74a00005-0000-4000-8000-000000000005": Module5TransitionAgeAdulte,
  "74a00006-0000-4000-8000-000000000006": Module6TransitionAgeAdulte,
  "d3ce0001-0001-4000-8000-000000000001": Module1Demence,
  "d3ce0001-0002-4000-8000-000000000002": Module2Demence,
  "d3ce0001-0003-4000-8000-000000000003": Module3Demence,
  "d3ce0001-0004-4000-8000-000000000004": Module4Demence,
  "da7a0001-0001-4000-8000-000000000001": Module1ProtectionDonnees,
  "da7a0001-0002-4000-8000-000000000002": Module2ProtectionDonnees,
  "da7a0001-0003-4000-8000-000000000003": Module3ProtectionDonnees,
  "9e7b0001-0001-4000-8000-000000000001": Module1GestionProjetBase,
  "9e7b0001-0002-4000-8000-000000000002": Module2GestionProjetBase,
  "9e7b0001-0003-4000-8000-000000000003": Module3GestionProjetBase,
  "9e7b0001-0004-4000-8000-000000000004": Module4GestionProjetBase,
  "9e7b0001-0005-4000-8000-000000000005": Module5GestionProjetBase,
  "9e7b0002-0001-4000-8000-000000000001": Module1GestionProjetIntermediaire,
  "9e7b0002-0002-4000-8000-000000000002": Module2GestionProjetIntermediaire,
  "9e7b0002-0003-4000-8000-000000000003": Module3GestionProjetIntermediaire,
  "9e7b0002-0004-4000-8000-000000000004": Module4GestionProjetIntermediaire,
  "9e7b0002-0005-4000-8000-000000000005": Module5GestionProjetIntermediaire,
  "9e7b0002-0006-4000-8000-000000000006": Module6GestionProjetIntermediaire,
  "9e7b0003-0001-4000-8000-000000000001": Module1GestionProjetAvance,
  "9e7b0003-0002-4000-8000-000000000002": Module2GestionProjetAvance,
  "9e7b0003-0003-4000-8000-000000000003": Module3GestionProjetAvance,
  "9e7b0003-0004-4000-8000-000000000004": Module4GestionProjetAvance,
  "9e7b0003-0005-4000-8000-000000000005": Module5GestionProjetAvance,
  "9e7b0003-0006-4000-8000-000000000006": Module6GestionProjetAvance,
  "de5c0001-0001-4000-8000-000000000001": Module1Violence,
  "de5c0001-0002-4000-8000-000000000002": Module2Violence,
  "de5c0001-0003-4000-8000-000000000003": Module3Violence,
  "de5c0001-0004-4000-8000-000000000004": Module4Violence,
  "d0d00001-0001-4000-8000-000000000001": Module1Sommeil,
}
