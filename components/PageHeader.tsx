import React from "react"

type PageHeaderProps = {
  titre: string
  sousTitre?: string
  surtitre?: string
  gradient?: boolean
  right?: React.ReactNode
}

export function PageHeader({ titre, sousTitre, surtitre, gradient = false, right }: PageHeaderProps) {
  if (gradient) {
    return (
      <div
        className="relative overflow-hidden px-4 md:px-8 py-5 md:py-7 flex flex-col md:flex-row md:items-center justify-between gap-3"
        style={{ background: "linear-gradient(135deg, #1B2D5B 0%, #243d7a 100%)" }}
      >
        {/* Cercle décoratif navy plus clair, débordant en haut à droite */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: -70,
            right: -70,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: -30,
            left: 60,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: 10,
            right: 120,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(61,191,160,0.05)",
          }}
        />

        {/* Contenu gauche */}
        <div className="relative z-10">
          {surtitre && (
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#3DBFA0" }}>
              {surtitre}
            </p>
          )}
          <h1 className="text-2xl font-bold text-white leading-tight">{titre}</h1>
          {sousTitre && (
            <p className="text-sm font-medium mt-0.5" style={{ color: "#3DBFA0" }}>
              {sousTitre}
            </p>
          )}
        </div>

        {/* Contenu droit (slot optionnel) */}
        {right && <div className="relative z-10 flex items-center gap-3 flex-wrap">{right}</div>}
      </div>
    )
  }

  return (
    <div
      className="px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 border-b"
      style={{
        backgroundColor: "var(--learna-white)",
        borderColor: "var(--learna-border)",
        boxShadow: "var(--learna-shadow-sm)",
      }}
    >
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "var(--learna-navy)" }}>
          {titre}
        </h1>
        {sousTitre && (
          <p className="text-sm mt-0.5" style={{ color: "var(--learna-text-secondary)" }}>
            {sousTitre}
          </p>
        )}
      </div>
      {right && <div className="flex items-center gap-3">{right}</div>}
    </div>
  )
}
