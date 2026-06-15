import React from "react"

export function SchemaMDHPPH() {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-8">
      <p className="text-sm font-semibold text-gray-500 mb-1 text-center uppercase tracking-widest">
        MDH-PPH 2010 — Schéma conceptuel
      </p>
      <p className="text-xs text-gray-400 text-center mb-5">Modèle de Développement Humain / Processus de Production du Handicap</p>

      {/* Flux temporel — bande transversale */}
      <div className="relative mb-4">
        <div className="bg-[#1B2D5B]/8 border border-[#1B2D5B]/15 rounded-lg px-4 py-2 flex items-center justify-between">
          <span className="text-xs font-bold text-[#1B2D5B]/60 uppercase tracking-widest">← Flux temporel</span>
          <span className="text-xs text-[#1B2D5B]/40 italic">évolution dynamique de la situation dans le temps</span>
          <span className="text-xs font-bold text-[#1B2D5B]/60 uppercase tracking-widest">→</span>
        </div>
      </div>

      {/* Ligne principale : Facteurs personnels ↔ Facteurs environnementaux */}
      <div className="flex gap-3 items-stretch mb-1">

        {/* Facteurs personnels */}
        <div className="flex-1 bg-[#1B2D5B]/5 border border-[#1B2D5B]/20 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1B2D5B] mb-3 text-center">
            Facteurs personnels
          </p>
          <div className="space-y-2">
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-[#1B2D5B]">Facteurs identitaires</p>
              <p className="text-xs text-gray-400 mt-0.5">Facilitateur ↔ Obstacle</p>
              <p className="text-xs text-gray-300 mt-0.5">Âge · Genre · Culture · Histoire de vie</p>
            </div>
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-[#1B2D5B]">Systèmes organiques</p>
              <p className="text-xs text-gray-400 mt-0.5">Intégrité ↔ Déficience</p>
            </div>
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-[#1B2D5B]">Aptitudes</p>
              <p className="text-xs text-gray-400 mt-0.5">Capacité sans limite ↔ Incapacité complète</p>
            </div>
          </div>
        </div>

        {/* Interaction centrale */}
        <div className="flex items-center justify-center w-10 flex-shrink-0">
          <div className="text-center">
            <div className="w-px h-10 bg-[#3DBFA0]/50 mx-auto" />
            <p className="text-[#3DBFA0] font-bold text-lg my-1">⇄</p>
            <div className="w-px h-10 bg-[#3DBFA0]/50 mx-auto" />
          </div>
        </div>

        {/* Facteurs environnementaux */}
        <div className="flex-1 bg-[#3DBFA0]/5 border border-[#3DBFA0]/30 rounded-xl p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3DBFA0] mb-3 text-center">
            Facteurs environnementaux
          </p>
          <div className="space-y-2">
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-[#3DBFA0]">Facilitateurs</p>
              <p className="text-xs text-gray-400 mt-0.5">Facilitateur mineur → Facilitateur majeur</p>
            </div>
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-amber-600">Obstacles</p>
              <p className="text-xs text-gray-400 mt-0.5">Obstacle mineur → Obstacle majeur</p>
            </div>
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-xs font-semibold text-gray-500">Niveaux</p>
              <p className="text-xs text-gray-400 mt-0.5">Micro · Méso · Macro</p>
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
        <div className="flex justify-center gap-6 mt-2">
          <div>
            <p className="text-xs font-semibold text-[#3DBFA0]">Activités courantes</p>
            <p className="text-xs text-white/40">Communication · Déplacements · Nutrition</p>
            <p className="text-xs text-white/40">Condition physique · Soins · Habitation</p>
          </div>
          <div className="w-px bg-white/10" />
          <div>
            <p className="text-xs font-semibold text-[#3DBFA0]">Rôles sociaux</p>
            <p className="text-xs text-white/40">Responsabilités · Relations · Vie associative</p>
            <p className="text-xs text-white/40">et spirituelle · Éducation · Travail · Loisirs</p>
          </div>
        </div>
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
      <div className="flex gap-3 mb-4">
        <div className="flex-1 bg-[#3DBFA0] rounded-xl p-4 text-center text-white">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Résultat positif</p>
          <p className="font-bold text-sm">Participation sociale</p>
          <p className="text-xs text-white/80 mt-1">Réalisation pleine et satisfaisante des habitudes de vie</p>
        </div>
        <div className="flex-1 bg-amber-500 rounded-xl p-4 text-center text-white">
          <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Résultat négatif</p>
          <p className="font-bold text-sm">Situation de handicap</p>
          <p className="text-xs text-white/80 mt-1">Réalisation perturbée par les obstacles environnementaux</p>
        </div>
      </div>

      {/* Facteurs de risque et de protection */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 mb-3">
        <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-1 text-center">Facteurs de risque et de protection</p>
        <div className="flex justify-center gap-6">
          <div className="text-center">
            <p className="text-xs font-semibold text-purple-500">Facteurs de risque</p>
            <p className="text-xs text-gray-400 mt-0.5">Ce qui peut causer maladie, traumatisme</p>
          </div>
          <div className="w-px bg-purple-200" />
          <div className="text-center">
            <p className="text-xs font-semibold text-purple-500">Facteurs de protection</p>
            <p className="text-xs text-gray-400 mt-0.5">Ce qui prévient les atteintes à la santé</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center mt-2 italic">
        Source : Fougeyrollas, MDH-PPH 2 — RIPPH, Québec, 2010
      </p>
    </div>
  )
}
