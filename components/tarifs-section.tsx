const lignes = [
  { taille: "Jusqu’à 50 ETP", tarif: "CHF 3’000.–", acces: "Illimité" },
  { taille: "51 à 100 ETP", tarif: "CHF 5’000.–", acces: "Illimité" },
  { taille: "101 à 200 ETP", tarif: "CHF 7’000.–", acces: "Illimité" },
  { taille: "Dès 201 ETP", tarif: "CHF 9’000.–", acces: "Illimité" },
]

export function TarifsSection() {
  return (
    <section id="tarifs" className="bg-[#1B2D5B] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Une licence pour toute votre équipe
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Tarif annuel TTC — accès illimité pour tous vos collaborateurs
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/20">
          {/* En-tête */}
          <div className="grid grid-cols-3 bg-white/10 px-6 py-4 text-sm font-semibold text-white/80">
            <span>Taille institution</span>
            <span className="text-center">Tarif annuel TTC</span>
            <span className="text-right">Accès collaborateurs</span>
          </div>

          {/* Lignes */}
          {lignes.map((ligne, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-4 text-white ${
                i % 2 === 0 ? "bg-white/5" : "bg-transparent"
              }`}
            >
              <span className="font-medium">{ligne.taille}</span>
              <span className="text-center font-bold text-[#3DBFA0]">{ligne.tarif}</span>
              <span className="text-right text-white/80">{ligne.acces}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 rounded-2xl border border-[#3DBFA0]/30 bg-[#3DBFA0]/10 px-8 py-6">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-[#3DBFA0]/70">
              Offre pilote
            </p>
            <p className="mt-1 text-base text-white/40 line-through">
              Frais de mise en œuvre : 1&apos;490.–
            </p>
          </div>
          <div className="h-8 w-px bg-[#3DBFA0]/30" />
          <span className="text-2xl font-bold text-[#3DBFA0]">Offert</span>
        </div>

        <p className="mt-6 text-center text-sm text-white/50">
          Accès illimité pour tous vos collaborateurs — Nouvelles formations incluses
        </p>
      </div>
    </section>
  )
}
