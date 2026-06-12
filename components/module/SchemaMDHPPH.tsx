import React from "react"

export function SchemaMDHPPH() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-8">
      <p className="text-sm font-semibold text-gray-500 mb-6 text-center uppercase tracking-widest">
        MDH-PPH — Modèle de Développement Humain / Processus de Production du Handicap
      </p>

      {/* Ligne 1 : Facteurs personnels ↔ Facteurs environnementaux */}
      <div className="flex gap-3 items-stretch mb-1">
        <div className="flex-1 bg-[#1B2D5B]/5 border border-[#1B2D5B]/20 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B2D5B] mb-3 text-center">
            Facteurs personnels
          </p>
          <div className="space-y-2">
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-[#1B2D5B]">Systèmes organiques</p>
              <p className="text-xs text-gray-400 mt-0.5">Intégrité ↔ Déficience</p>
            </div>
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-[#1B2D5B]">Aptitudes</p>
              <p className="text-xs text-gray-400 mt-0.5">Capacité ↔ Incapacité</p>
            </div>
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-[#1B2D5B]">Facteurs identitaires</p>
              <p className="text-xs text-gray-400 mt-0.5">Âge, genre, identité culturelle</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-10 flex-shrink-0">
          <div className="text-center">
            <div className="w-px h-10 bg-[#3DBFA0]/50 mx-auto" />
            <p className="text-[#3DBFA0] font-bold text-lg my-1">⇄</p>
            <div className="w-px h-10 bg-[#3DBFA0]/50 mx-auto" />
          </div>
        </div>

        <div className="flex-1 bg-[#3DBFA0]/5 border border-[#3DBFA0]/30 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3DBFA0] mb-3 text-center">
            Facteurs environnementaux
          </p>
          <div className="space-y-2">
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-[#3DBFA0]">Facilitateurs</p>
              <p className="text-xs text-gray-400 mt-0.5">Physique · Social · Technologique · Juridique</p>
            </div>
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-amber-600">Obstacles</p>
              <p className="text-xs text-gray-400 mt-0.5">Institutionnel · Architectural · Attitudinal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche vers le bas */}
      <div className="flex justify-center my-3">
        <div className="flex flex-col items-center">
          <div className="w-px h-5 bg-[#1B2D5B]/30" />
          <svg width="16" height="10" viewBox="0 0 16 10" className="text-[#1B2D5B]/50">
            <path d="M8 10 L0 0 L16 0 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Habitudes de vie */}
      <div className="bg-[#1B2D5B] text-white rounded-xl p-4 text-center mb-3">
        <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Résultat de l'interaction</p>
        <p className="font-bold text-base">Habitudes de vie</p>
        <p className="text-xs text-white/60 mt-1">Activités courantes · Rôles sociaux</p>
      </div>

      {/* Flèche vers le bas */}
      <div className="flex justify-center mb-3">
        <div className="flex flex-col items-center">
          <div className="w-px h-5 bg-[#1B2D5B]/30" />
          <svg width="16" height="10" viewBox="0 0 16 10" className="text-[#1B2D5B]/50">
            <path d="M8 10 L0 0 L16 0 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Résultats */}
      <div className="flex gap-3">
        <div className="flex-1 bg-[#3DBFA0] rounded-xl p-4 text-center text-white">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Résultat positif</p>
          <p className="font-bold text-sm">Participation sociale</p>
          <p className="text-xs text-white/80 mt-1">Réalisation pleine et satisfaisante</p>
        </div>
        <div className="flex-1 bg-amber-500 rounded-xl p-4 text-center text-white">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Résultat négatif</p>
          <p className="font-bold text-sm">Situation de handicap</p>
          <p className="text-xs text-white/80 mt-1">Réalisation perturbée par les obstacles</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center mt-4 italic">
        Source : Fougeyrollas et al., MDH-PPH 2.0 — RIPPH, Québec, 2010
      </p>
    </div>
  )
}
