"use client"

type ActivePage =
  | "dashboard"
  | "formations"
  | "catalogue"
  | "progression"
  | "attestations"
  | "profil"
  | "ressources"

function IconHome() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconFormations() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function IconCatalogue() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function IconProgression() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function IconProfil() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

const NAV_ITEMS = [
  { href: "/dashboard",   label: "Accueil",        Icon: IconHome,        id: "dashboard"   },
  { href: "/formations",  label: "Mes formations",  Icon: IconFormations,  id: "formations"  },
  { href: "/catalogue",   label: "Catalogue",       Icon: IconCatalogue,   id: "catalogue"   },
  { href: "/progression", label: "Progression",     Icon: IconProgression, id: "progression" },
  { href: "/profil",      label: "Profil",          Icon: IconProfil,      id: "profil"      },
] as const

export function BottomNav({ pageActive }: { pageActive: ActivePage }) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden bg-white border-t border-gray-200 shadow-[0_-2px_8px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      {NAV_ITEMS.map(({ href, label, Icon, id }) => {
        const isActive = id === pageActive
        return (
          <a
            key={id}
            href={href}
            className="flex flex-1 flex-col items-center justify-center py-2 gap-0.5"
            style={{ color: isActive ? "#3DBFA0" : "#9CA3AF" }}
          >
            <Icon />
            <span className="text-[9px] font-medium leading-tight text-center">{label}</span>
          </a>
        )
      })}
    </nav>
  )
}
