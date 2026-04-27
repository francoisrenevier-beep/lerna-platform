"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-primary">
              LERNA
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a
              href="#formations"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Formations
            </a>
            <a
              href="#institutions"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Institutions
            </a>
            <a
              href="#tarifs"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Tarifs
            </a>
            <a
              href="#connexion"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Connexion
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Demander un accès
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <a
              href="#formations"
              className="block py-2 text-sm font-medium text-foreground/80"
            >
              Formations
            </a>
            <a
              href="#institutions"
              className="block py-2 text-sm font-medium text-foreground/80"
            >
              Institutions
            </a>
            <a
              href="#tarifs"
              className="block py-2 text-sm font-medium text-foreground/80"
            >
              Tarifs
            </a>
            <a
              href="#connexion"
              className="block py-2 text-sm font-medium text-foreground/80"
            >
              Connexion
            </a>
            <Button className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Demander un accès
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
