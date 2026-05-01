const links = [
  { label: "Formations", href: "#formations" },
  { label: "Institutions", href: "#institutions" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
  { label: "Mentions légales", href: "#mentions" },
]

export function Footer() {
  return (
    <footer className="bg-[#1B2D5B] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3 sm:items-start">
          {/* Logo + info légale */}
          <div>
            <img src="/logo-lerna.png" alt="LERNA" className="h-20 w-auto" />
            <p className="mt-3 text-sm text-white/60">
              LERNA Sàrl — Suisse romande
              <br />
              contact@lerna.ch
            </p>
          </div>

          {/* Liens */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 sm:pt-1">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tagline */}
          <div className="text-sm text-white/60 sm:text-right sm:pt-1">
            Ancrer les compétences sur le terrain
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} LERNA Sàrl. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
