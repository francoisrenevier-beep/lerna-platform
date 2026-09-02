// ─────────────────────────────────────────────────────────────────────────────
// Progression du module en accès libre, sans compte.
//
// Tout est conservé dans le localStorage du visiteur : aucune donnée n'est
// transmise, aucune donnée personnelle n'est stockée. La lecture et l'écriture
// sont systématiquement protégées — navigation privée, stockage désactivé ou
// quota atteint ne doivent jamais empêcher de suivre le module, seulement d'en
// mémoriser l'avancement.
// ─────────────────────────────────────────────────────────────────────────────

/** Incrémenter invalide les progressions enregistrées. À ne faire que si leur forme change. */
const VERSION = 1

export const JALONS = [25, 50, 75, 100] as const

export type EtatProgression = {
  version: number
  /** Index de la section la plus avancée atteinte ; -1 si le module n'a pas commencé. */
  sectionMax: number
  /** Jalons de pourcentage déjà signalés, pour ne pas les réémettre au rechargement. */
  jalons: number[]
  /** Passe à vrai au premier franchissement de section : le module est réellement commencé. */
  demarre: boolean
  quiz: { score: number; total: number } | null
  majLe: number
}

export function cleStockage(slug: string): string {
  return `learna_decouverte_v${VERSION}_${slug}`
}

export function etatInitial(): EtatProgression {
  return { version: VERSION, sectionMax: -1, jalons: [], demarre: false, quiz: null, majLe: 0 }
}

/**
 * Valide la forme lue avant de s'en servir. Un état écrit par une version
 * antérieure, tronqué ou trafiqué à la main est ignoré au profit d'un état
 * neuf : mieux vaut repartir de zéro qu'afficher une progression incohérente.
 */
function estValide(valeur: unknown): valeur is EtatProgression {
  if (typeof valeur !== "object" || valeur === null) return false
  const e = valeur as Record<string, unknown>
  return (
    e.version === VERSION &&
    typeof e.sectionMax === "number" &&
    Array.isArray(e.jalons) &&
    e.jalons.every((j) => typeof j === "number") &&
    typeof e.demarre === "boolean" &&
    (e.quiz === null ||
      (typeof e.quiz === "object" &&
        e.quiz !== null &&
        typeof (e.quiz as Record<string, unknown>).score === "number" &&
        typeof (e.quiz as Record<string, unknown>).total === "number"))
  )
}

export function lire(slug: string): EtatProgression {
  try {
    const brut = localStorage.getItem(cleStockage(slug))
    if (!brut) return etatInitial()
    const valeur: unknown = JSON.parse(brut)
    return estValide(valeur) ? valeur : etatInitial()
  } catch {
    return etatInitial()
  }
}

/** Retourne `false` si l'écriture a échoué, pour que l'interface puisse le dire. */
export function ecrire(slug: string, etat: EtatProgression): boolean {
  try {
    localStorage.setItem(cleStockage(slug), JSON.stringify({ ...etat, majLe: Date.now() }))
    return true
  } catch {
    return false
  }
}

export function effacer(slug: string): void {
  try {
    localStorage.removeItem(cleStockage(slug))
  } catch {
    // Rien à faire : l'état n'était de toute façon pas conservé.
  }
}

/**
 * Pourcentage de lecture. Une section atteinte compte pour lue, la dernière
 * porte donc le total à 100 % — le QCM est mesuré séparément.
 */
export function pourcentage(sectionMax: number, totalSections: number): number {
  if (totalSections <= 0) return 0
  const lues = Math.min(sectionMax + 1, totalSections)
  if (lues <= 0) return 0
  return Math.round((lues / totalSections) * 100)
}

/** Jalons franchis entre deux pourcentages et pas encore signalés. */
export function jalonsAEmettre(
  pourcentageAtteint: number,
  dejaEmis: readonly number[],
): number[] {
  return JALONS.filter((j) => pourcentageAtteint >= j && !dejaEmis.includes(j))
}

/**
 * Signale les changements venus d'un autre onglet. L'événement `storage` n'est
 * émis que dans les autres onglets, jamais dans celui qui écrit : reprendre la
 * lecture sur un second onglet met donc le premier à jour, sans boucle.
 */
export function ecouterAutresOnglets(
  slug: string,
  auChangement: (etat: EtatProgression) => void,
): () => void {
  const cle = cleStockage(slug)
  const gerer = (e: StorageEvent) => {
    if (e.key !== cle) return
    auChangement(lire(slug))
  }
  window.addEventListener("storage", gerer)
  return () => window.removeEventListener("storage", gerer)
}
