import React from "react"

type Etape = {
  niveau: string
  nom: string
  definition: string
}

type SchemaEtapesProps = {
  titre: string
  etapes: Etape[]
  note?: string
}

export function SchemaEtapes({ titre, etapes, note }: SchemaEtapesProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mb-8">
      <p className="text-sm font-semibold text-gray-500 mb-6 text-center uppercase tracking-widest">{titre}</p>
      <div className="flex items-stretch justify-center gap-0 flex-wrap">
        {etapes.map(function(etape, i) {
          return (
            <React.Fragment key={i}>
              <div className="bg-white rounded-xl shadow-sm p-5 text-center w-44 flex flex-col gap-2">
                <p className="text-xs text-gray-400 uppercase tracking-widest">{etape.niveau}</p>
                <p className="font-bold text-[#1B2D5B] text-lg">{etape.nom}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{etape.definition}</p>
              </div>
              {i < etapes.length - 1 && (
                <div className="flex items-center px-2 text-[#3DBFA0] font-bold text-xl">→</div>
              )}
            </React.Fragment>
          )
        })}
      </div>
      {note && <p className="text-xs text-gray-400 text-center mt-4 italic">{note}</p>}
    </div>
  )
}