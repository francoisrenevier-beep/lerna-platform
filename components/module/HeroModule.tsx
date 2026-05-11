import React from "react"

type HeroModuleProps = {
  numero: number
  categorie: string
  titre: string
  titrePart2?: string
  sousTitre: string
  duree: string
  niveau: string
  videoYoutube?: string
}

export function HeroModule({ numero, categorie, titre, titrePart2, sousTitre, duree, niveau, videoYoutube }: HeroModuleProps) {
  return (
    <>
      <div className="bg-[#1B2D5B] text-white px-16 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 right-48 w-56 h-56 rounded-full bg-[#3DBFA0]/20 translate-y-1/2" />
        <div className="relative z-10 max-w-3xl">
          <p className="text-xs font-medium tracking-widest uppercase text-white/50 mb-6">
            Module {numero} · {categorie}
          </p>
          <h1 className="font-bold text-4xl leading-tight mb-6">
            {titre}
            {titrePart2 && <><br /><em className="font-normal italic text-white/70">{titrePart2}</em></>}
          </h1>
          <p className="text-white/70 text-lg font-light leading-relaxed mb-10 max-w-xl">{sousTitre}</p>
          <div className="flex gap-8">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Duree</p>
              <p className="text-white text-sm font-medium">{duree}</p>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Niveau</p>
              <p className="text-white text-sm font-medium">{niveau}</p>
            </div>
          </div>
        </div>
      </div>
      {videoYoutube && (
        <div className="max-w-[800px] mx-auto px-8 pt-10 pb-2">
          <p className="text-xs font-medium tracking-widest uppercase text-[#3DBFA0] mb-3">Introduction</p>
          <div className="relative w-full overflow-hidden rounded-xl shadow-md" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={"https://www.youtube.com/embed/" + videoYoutube}
              title={"Vidéo d'introduction — Module " + numero + " : " + titre}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}