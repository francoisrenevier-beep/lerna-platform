import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { TitreFormationFourni } from "@/components/module/TitreFormation"
import { MODULES_LIBRES, moduleLibre } from "@/content/decouverte"
import { getTitreFormation } from "@/lib/catalogue-public"
import { SITE_URL, urlModuleLibre } from "@/lib/decouverte/url"

import { Lecteur } from "./Lecteur"

// Le contenu du module vient de fichiers du dépôt, pas de la base : la page
// reste consultable même si Supabase est injoignable. Une seule chose est lue
// en base, le titre de la formation dont le module est extrait, parce qu'il se
// change depuis l'admin — et à défaut, le descripteur fournit le sien.
//
// D'où la revalidation horaire, la même que /formations-ressources : une
// formation renommée dans l'admin l'est ici dans l'heure, sans redéploiement.
export const revalidate = 3600

export function generateStaticParams() {
  return MODULES_LIBRES.map((m) => ({ slug: m.slug }))
}

// Image de partage : à défaut d'un visuel dédié, le logo. Une image de 1200×630
// propre à la page donnerait un bien meilleur aperçu en messagerie — dès
// qu'elle existe, la renseigner dans `seo.ogImage` du descripteur suffit.
const OG_PAR_DEFAUT = "/logo-learna-couleur.png"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const m = moduleLibre(slug)
  if (!m) return {}

  const url = urlModuleLibre(m.slug)
  const image = `${SITE_URL}${m.seo.ogImage ?? OG_PAR_DEFAUT}`

  return {
    title: m.seo.titre,
    description: m.seo.description,
    alternates: { canonical: url },
    // La page est la principale preuve commerciale du site : elle doit être
    // indexée, et son extrait complet affiché dans les résultats.
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      locale: "fr_CH",
      url,
      siteName: "LEARNA",
      title: m.seo.titre,
      description: m.seo.description,
      images: [{ url: image, alt: m.hero.titre }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.seo.titre,
      description: m.seo.description,
      images: [image],
    },
  }
}

export default async function ModuleLibrePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const m = moduleLibre(slug)
  if (!m) notFound()

  // `null` si la base est injoignable ou la formation non publiée : le
  // descripteur fournit alors le nom, comme avant.
  const titreFormation = await getTitreFormation(m.formationSlug)

  // `isAccessibleForFree` est la propriété qui compte ici : elle indique aux
  // moteurs que le contenu n'est ni derrière un compte ni derrière un
  // formulaire, ce qui est exactement l'argument de la page.
  const donneesStructurees = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${m.hero.titre}${m.hero.titrePart2 ? ` — ${m.hero.titrePart2}` : ""}`,
    description: m.seo.description,
    url: urlModuleLibre(m.slug),
    inLanguage: "fr",
    isAccessibleForFree: true,
    teaches: m.acquis,
    provider: {
      "@type": "Organization",
      name: "LEARNA",
      url: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: `PT${m.dureeMinutes}M`,
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees) }}
      />
      <Navigation />
      <TitreFormationFourni titre={titreFormation}>
        <Lecteur module={m} />
      </TitreFormationFourni>
      <Footer />
    </main>
  )
}
