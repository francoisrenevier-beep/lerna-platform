const links = [
  { label: "Formations", href: "#formations" },
  { label: "Institutions", href: "#institutions" },
  { label: "Contact", href: "#contact" },
  { label: "Mentions légales", href: "#mentions" },
]

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3 sm:items-center">
          {/* Logo */}
          <div>
            <img src="/logo-lerna.png" alt="LERNA" className="h-24 w-auto" />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tagline */}
          <div className="text-sm text-primary-foreground/80 sm:text-right">
            Ancrer les compétences sur le terrain
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} LERNA. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
