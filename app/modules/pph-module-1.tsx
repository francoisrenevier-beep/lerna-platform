import { TableauComparaison } from "@/components/module/TableauComparaison"

export function Module1PPH() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <TableauComparaison
        titre="Test tableau"
        colonnes={[
          { titre: "Colonne 1", contenu: ["A", "B"] },
          { titre: "Colonne 2", contenu: ["C", "D"] }
        ]}
      />
    </div>
  )
}