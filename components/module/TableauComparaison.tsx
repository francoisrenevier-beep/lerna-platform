import React from "react"

type Colonne = {
  titre: string
  contenu: string[]
}

type TableauComparaisonProps = {
  titre?: string
  colonnes: Colonne[]
}

export function TableauComparaison({ titre, colonnes }: TableauComparaisonProps) {
  return (
    <div className="my-8 overflow-x-auto">
      {titre && <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-widest">{titre}</p>}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {colonnes.map(function(col, i) {
              return (
                <th key={i} className="bg-[#1B2D5B] text-white text-sm font-medium px-4 py-3 text-left">
                  {col.titre}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {colonnes[0].contenu.map(function(_, rowIndex) {
            return (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {colonnes.map(function(col, colIndex) {
                  return (
                    <td key={colIndex} className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">
                      {col.contenu[rowIndex]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}