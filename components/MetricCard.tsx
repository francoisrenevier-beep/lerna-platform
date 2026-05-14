import React from "react"

type MetricCardProps = {
  valeur: string | number
  label: string
  icone: React.ReactNode
  couleur: string
  href?: string
}

function CardInner({ valeur, label, icone, couleur }: Omit<MetricCardProps, "href">) {
  return (
    <div
      className="learna-card flex flex-col gap-2 md:gap-3 p-3 md:p-5 rounded-xl bg-white h-full"
      style={{
        border: "0.5px solid var(--learna-border)",
        boxShadow: "var(--learna-shadow-sm)",
        borderRadius: "var(--learna-radius-md)",
      }}
    >
      {/* Icône avec fond coloré circulaire */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
        style={{ backgroundColor: couleur + "26" }}
      >
        {icone}
      </div>

      {/* Valeur */}
      <div
        className="text-2xl md:text-[28px] font-bold leading-none"
        style={{ color: "var(--learna-navy)" }}
      >
        {valeur}
      </div>

      {/* Label */}
      <div className="text-[13px] leading-snug" style={{ color: "var(--learna-text-secondary)" }}>
        {label}
      </div>
    </div>
  )
}

export function MetricCard({ valeur, label, icone, couleur, href }: MetricCardProps) {
  if (href) {
    return (
      <a href={href} className="block group relative">
        <CardInner valeur={valeur} label={label} icone={icone} couleur={couleur} />
        {/* Flèche en bas à droite */}
        <span
          className="absolute bottom-4 right-4 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: couleur }}
        >
          Voir →
        </span>
      </a>
    )
  }

  return <CardInner valeur={valeur} label={label} icone={icone} couleur={couleur} />
}
