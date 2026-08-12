import Link from "next/link"
import { parcoursPartenariat } from "@/content/site"

export function ParcoursPartenariat() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            {parcoursPartenariat.titre}
          </h2>
          {parcoursPartenariat.paragraphes.map((paragraphe, index) => (
            <p key={index} className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {paragraphe}
            </p>
          ))}
          <Link
            href={parcoursPartenariat.cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#1B2D5B]/25 px-6 py-3 text-sm font-semibold text-[#1B2D5B] transition-colors hover:border-[#1B2D5B]/60 hover:bg-[#1B2D5B]/5"
          >
            {parcoursPartenariat.cta.libelle}
          </Link>
        </div>
      </div>
    </section>
  )
}
