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

        <div className="mt-8 space-y-4 text-center">
          <p className="text-sm text-white/60">
            Accès illimité pour tous vos collaborateurs — Nouvelles formations incluses
          </p>

          <div className="mx-auto max-w-sm rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-left">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="text-sm text-white/40 line-through">
                Frais de mise en service : 1&apos;490 CHF
              </span>
              <span className="text-sm font-bold text-[#3DBFA0]">
                Offerts dans le cadre de l&apos;offre pilote
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-xs text-white/60">
              {[
                "Paramétrage de l'institution",
                "Création du code d'accès institutionnel",
                "Import des collaborateurs",
                "Configuration des espaces manager",
                "Accompagnement au lancement",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 flex-shrink-0 rounded-full bg-[#3DBFA0]/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
