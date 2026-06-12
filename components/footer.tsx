import Link from "next/link"

const links = [
  { label: "Accueil", href: "/" },
  { label: "Formations & Ressources", href: "/formations-ressources" },
  { label: "La solution", href: "/la-solution" },
  { label: "FAQ", href: "/faq" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
]

export function Footer() {
  return (
    <footer className="bg-[#1B2D5B] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3 sm:items-start">
          {/* Logo + info légale */}
          <div>
            <img src="/logo-learna-bleu.png" alt="LEARNA" className="h-20 w-auto" />
            <p className="mt-3 text-sm text-white/60">
              Learna — Suisse romande
              <br />
              contact@learna.ch
            </p>
          </div>

          {/* Liens */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:pt-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Tagline */}
          <div className="text-sm text-white/60 sm:text-right sm:pt-1">
            Ancrer les compétences sur le terrain
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Learna. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
