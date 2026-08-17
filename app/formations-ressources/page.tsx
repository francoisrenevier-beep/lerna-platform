import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CarteFormationPublique } from "@/components/vitrine/CarteFormationPublique"
import { DOMAINES_VITRINE } from "@/components/vitrine/domaines"
import { getFormationsPubliees, type FormationPublique } from "@/lib/catalogue-public"

export const metadata: Metadata = {
  title: "Formations & ressources — LEARNA",
  description:
    "Le catalogue LEARNA pour les institutions sociales et médico-sociales : des formations en ligne conçues pour l'ensemble des équipes, du champ éducatif à la veille de nuit, à l'intendance et à l'administration.",
}

/**
 * Régénération horaire : une formation publiée depuis l'admin apparaît sur le
 * site vitrine sans redéploiement.
 */
export const revalidate = 3600

// ─── Ressources ──────────────────────────────────────────────────────────────

const RESSOURCES = [
  {
    titre: "Fiches mémo",
    texte:
      "Une synthèse par module, à relire avant une situation ou à poser sur la table d'un colloque. Les repères essentiels tiennent sur une page.",
  },
  {
    titre: "Outils terrain",
    texte:
      "Grilles d'observation, trames d'entretien, supports de transmission. Des documents pensés pour être utilisés tels quels dans le quotidien de l'institution.",
  },
  {
    titre: "Références officielles",
    texte:
      "Textes légaux suisses, recommandations et publications de référence, rassemblés et situés dans leur contexte d'application.",
  },
]

// ─── Séquence pédagogique ────────────────────────────────────────────────────

const SEQUENCE = [
  {
    etape: "Éveiller",
    texte:
      "Une sensibilisation courte, accessible sans prérequis, qui donne à toute l'équipe le même point de départ.",
  },
  {
    etape: "Approfondir",
    texte:
      "Le passage des repères à la pratique : lire les situations, ajuster sa posture, comprendre ce qui se joue.",
  },
  {
    etape: "Se spécialiser",
    texte:
      "Les questions complexes, les dilemmes et les responsabilités qui incombent aux professionnels expérimentés et aux cadres.",
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function FormationsRessourcesPage() {
  const formations = await getFormationsPubliees()

  // Regroupement dans l'ordre défini par DOMAINES_VITRINE. Un domaine sans
  // formation publiée n'est pas rendu.
  const groupes = DOMAINES_VITRINE.map((domaine) => ({
    domaine,
    formations: formations.filter((f) => f.domaine === domaine.value),
  })).filter((groupe) => groupe.formations.length > 0)

  // Formations dont le domaine n'est pas répertorié : elles restent visibles
  // plutôt que d'être silencieusement perdues.
  const horsDomaine = formations.filter(
    (f) => !DOMAINES_VITRINE.some((d) => d.value === f.domaine),
  )

  // Le total des modules n'est affiché que s'il est exact : dès qu'un
  // décompte est indisponible, la métrique est omise plutôt que sous-évaluée.
  const totalModules = formations.every((f) => f.nbModules !== null)
    ? formations.reduce((somme, f) => somme + (f.nbModules ?? 0), 0)
    : null

  const chiffres: { valeur: string; libelle: string }[] = [
    {
      valeur: String(formations.length),
      libelle: formations.length > 1 ? "formations publiées" : "formation publiée",
    },
  ]
  if (totalModules !== null) {
    chiffres.push({ valeur: String(totalModules), libelle: "modules de formation" })
  }
  if (groupes.length > 0) {
    chiffres.push({
      valeur: String(groupes.length),
      libelle: groupes.length > 1 ? "domaines représentés" : "domaine représenté",
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* a. Titre et chapô */}
      <section className="bg-[#1B2D5B] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Formations &amp; ressources
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Le catalogue s&apos;adresse à l&apos;ensemble des personnes qui composent une
            institution — équipes éducatives, veille de nuit, intendance, administration.
            L&apos;enjeu n&apos;est pas de former quelques spécialistes, mais d&apos;installer une
            culture commune : des repères partagés, un même vocabulaire, une lecture des
            situations qui ne s&apos;arrête pas aux frontières des fonctions.
          </p>
        </div>
      </section>

      {formations.length === 0 ? (
        /* g. État vide */
        <section className="bg-[#F8FAFC] py-16 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Le catalogue n&apos;est momentanément pas consultable. Nous vous invitons à
              revenir un peu plus tard, ou à nous écrire si vous souhaitez en connaître le
              contenu dès maintenant.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#1B2D5B]/20 px-5 py-2.5 text-sm font-semibold text-[#1B2D5B] transition-colors hover:bg-[#1B2D5B]/5"
            >
              Nous contacter
            </Link>
          </div>
        </section>
      ) : (
        <>
          {/* b. Bandeau de chiffres */}
          <section className="border-b border-border bg-card py-10 sm:py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
                {chiffres.map((chiffre) => (
                  <div key={chiffre.libelle}>
                    <dt className="sr-only">{chiffre.libelle}</dt>
                    <dd>
                      <span className="block text-3xl font-bold text-[#3DBFA0] sm:text-4xl">
                        {chiffre.valeur}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">
                        {chiffre.libelle}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* c. Grille groupée par domaine */}
          <section className="bg-[#F8FAFC] py-16 sm:py-24">
            <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
              {groupes.map(({ domaine, formations: liste }) => (
                <GroupeDomaine key={domaine.value} titre={domaine.label} formations={liste} />
              ))}
              {horsDomaine.length > 0 && (
                <GroupeDomaine titre="Autres formations" formations={horsDomaine} />
              )}
            </div>
          </section>
        </>
      )}

      {/* d. Ressources */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            La bibliothèque de ressources
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Chaque formation s&apos;accompagne de documents qui restent disponibles une fois le
            module terminé. Ils prolongent la formation dans la pratique et restent un appui pour
            les équipes, bien après la session.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {RESSOURCES.map((ressource) => (
              <div key={ressource.titre} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 h-1 w-10 rounded-full bg-[#3DBFA0]" />
                <h3 className="text-base font-semibold text-[#1B2D5B]">{ressource.titre}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {ressource.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* e. Positionnement */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2D5B] sm:text-3xl">
            Un complément à la formation présentielle
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            LEARNA ne remplace pas les journées de formation, la supervision ni l&apos;analyse de
            pratique. La plateforme prend en charge ce que le présentiel peine à couvrir : donner
            à toute une équipe, y compris aux fonctions rarement inscrites aux plans de formation,
            les mêmes repères de départ — pour que le temps passé ensemble serve au travail
            clinique plutôt qu&apos;à la mise à niveau.
          </p>

          <ol className="mt-12 grid gap-8 sm:grid-cols-3">
            {SEQUENCE.map((etape, i) => (
              <li key={etape.etape} className="rounded-2xl border border-border bg-card p-6">
                <span className="text-xs font-semibold text-[#3DBFA0]">Étape {i + 1}</span>
                <h3 className="mt-2 text-base font-semibold text-[#1B2D5B]">{etape.etape}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{etape.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* f. Demande de démonstration — bloc conservé tel quel */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#1B2D5B] p-8 text-center">
            <p className="text-base font-semibold text-white">
              Votre institution n&apos;a pas encore de licence&nbsp;?
            </p>
            <p className="mt-2 text-sm text-white/70">
              Demandez une démonstration — nous vous présentons la plateforme en 30 minutes.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90"
            >
              Demander une démonstration →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// ─── Groupe de domaine ───────────────────────────────────────────────────────

function GroupeDomaine({
  titre,
  formations,
}: {
  titre: string
  formations: FormationPublique[]
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <h2 className="text-xl font-bold text-[#1B2D5B] sm:text-2xl">{titre}</h2>
        <span className="text-sm text-muted-foreground">
          {formations.length} formation{formations.length > 1 ? "s" : ""}
        </span>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {formations.map((formation) => (
          <CarteFormationPublique key={formation.slug} formation={formation} />
        ))}
      </div>
    </div>
  )
}
