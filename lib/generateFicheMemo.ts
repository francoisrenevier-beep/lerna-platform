export type QuizModuleData = {
  moduleId: string
  moduleTitre: string
  score: number
  total: number
  questions: {
    question: string
    reponses: string[]
    bonneReponse: number
    explication: string
  }[]
  reponses: number[]
}

export type FicheMemoData = {
  prenom: string
  nom: string
  formationTitre: string
  dureeMinutes: number
  dateCompletion: string
  modules: { id: string; titre: string; ordre: number }[]
  quizRecap: QuizModuleData[]
}

function dureeHeures(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? h + "h" : h + "h" + m
}

function formatDateFr(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  })
}

export async function generateFicheMemo(data: FicheMemoData): Promise<Blob> {
  const { default: jsPDF } = await import("jspdf")

  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })

  const W = 210
  const navy: [number, number, number] = [27, 45, 91]
  const teal: [number, number, number] = [61, 191, 160]
  const grayText: [number, number, number] = [130, 135, 148]
  const lightGray: [number, number, number] = [210, 215, 228]
  const bgLight: [number, number, number] = [244, 246, 252]

  let y = 0

  const addPage = () => {
    doc.addPage()
    y = 20
    doc.setFillColor(...navy)
    doc.rect(0, 0, W, 6, "F")
    doc.setFillColor(...teal)
    doc.rect(0, 6, W, 2, "F")
  }

  const checkPageBreak = (needed: number) => {
    if (y + needed > 275) addPage()
  }

  // ── En-tête première page ──────────────────────────────────────
  doc.setFillColor(...navy)
  doc.rect(0, 0, W, 10, "F")
  doc.setFillColor(...teal)
  doc.rect(0, 10, W, 3, "F")

  doc.setTextColor(...navy)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(16)
  doc.text("LERNA360", 20, 24)

  doc.setTextColor(...grayText)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(7)
  doc.setCharSpace(1.5)
  doc.text("FICHE MÉMO DE FORMATION", W - 20, 24, { align: "right" })
  doc.setCharSpace(0)

  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.3)
  doc.line(20, 32, W - 20, 32)

  // Titre formation
  y = 42
  doc.setTextColor(...navy)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(18)
  const titreLines = doc.splitTextToSize(data.formationTitre, W - 40) as string[]
  for (const line of titreLines) {
    doc.text(line, 20, y)
    y += 9
  }

  // Infos
  y += 2
  doc.setTextColor(...grayText)
  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  const nomComplet = [data.prenom, data.nom].filter(Boolean).join(" ")
  if (nomComplet) doc.text("Apprenant·e : " + nomComplet, 20, y)
  doc.text("Durée : " + dureeHeures(data.dureeMinutes), W / 2, y)
  doc.text("Complétée le : " + formatDateFr(data.dateCompletion), W - 20, y, { align: "right" })
  y += 10

  doc.setFillColor(...teal)
  doc.rect(20, y, W - 40, 1, "F")
  y += 10

  // ── Modules complétés ─────────────────────────────────────────
  doc.setTextColor(...navy)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(11)
  doc.text("Modules complétés", 20, y)
  y += 6

  for (const m of data.modules) {
    checkPageBreak(7)
    doc.setFillColor(...bgLight)
    doc.roundedRect(20, y - 4, W - 40, 6.5, 1, 1, "F")
    doc.setTextColor(...teal)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(8)
    doc.text("✓", 24, y)
    doc.setTextColor(...navy)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(9)
    doc.text(m.titre, 30, y)
    y += 9
  }

  y += 4

  // ── Récapitulatif quiz ────────────────────────────────────────
  if (data.quizRecap.length > 0) {
    checkPageBreak(15)
    doc.setFillColor(...teal)
    doc.rect(20, y, W - 40, 1, "F")
    y += 8

    doc.setTextColor(...navy)
    doc.setFont("helvetica", "bold")
    doc.setFontSize(11)
    doc.text("Points clés — Quiz de la formation", 20, y)
    y += 3

    const scoreTotal = data.quizRecap.reduce((a, q) => a + q.score, 0)
    const totalTotal = data.quizRecap.reduce((a, q) => a + q.total, 0)
    doc.setTextColor(...grayText)
    doc.setFont("helvetica", "italic")
    doc.setFontSize(8)
    doc.text("Score global : " + scoreTotal + "/" + totalTotal + " (" + Math.round(scoreTotal / totalTotal * 100) + "%)", 20, y + 5)
    y += 12

    for (const qm of data.quizRecap) {
      checkPageBreak(20)

      // Titre module
      doc.setFillColor(...navy)
      doc.rect(20, y - 4, W - 40, 7, "F")
      doc.setTextColor(255, 255, 255)
      doc.setFont("helvetica", "bold")
      doc.setFontSize(9)
      const titreModule = qm.moduleTitre || "Module"
      doc.text(titreModule, 24, y)
      const pct = Math.round(qm.score / qm.total * 100)
      doc.text(qm.score + "/" + qm.total + " (" + pct + "%)", W - 24, y, { align: "right" })
      y += 10

      for (let qi = 0; qi < qm.questions.length; qi++) {
        const q = qm.questions[qi]
        const choix = qm.reponses[qi]
        const correct = choix === q.bonneReponse

        // Question
        const qLines = doc.splitTextToSize((qi + 1) + ". " + q.question, W - 44) as string[]
        checkPageBreak(qLines.length * 4 + 20)

        doc.setTextColor(...navy)
        doc.setFont("helvetica", "bold")
        doc.setFontSize(8.5)
        for (const line of qLines) {
          doc.text(line, 22, y)
          y += 4.5
        }

        // Bonne réponse
        const bonneRep = q.reponses[q.bonneReponse]
        doc.setFillColor(correct ? 61 : 245, correct ? 191 : 158, correct ? 160 : 11)
        doc.circle(24, y - 1, 1.5, "F")
        doc.setTextColor(...(correct ? teal : [180, 100, 0] as [number,number,number]))
        doc.setFont("helvetica", "normal")
        doc.setFontSize(8)
        const bonneLines = doc.splitTextToSize(bonneRep, W - 54) as string[]
        doc.text(bonneLines[0], 28, y)
        y += 4

        // Explication
        const expLines = doc.splitTextToSize(q.explication, W - 50) as string[]
        doc.setTextColor(...grayText)
        doc.setFont("helvetica", "italic")
        doc.setFontSize(7.5)
        for (const line of expLines) {
          checkPageBreak(4)
          doc.text(line, 28, y)
          y += 3.8
        }
        y += 3
      }
      y += 4
    }
  }

  // ── Pied de page ──────────────────────────────────────────────
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFillColor(...teal)
    doc.rect(0, 284, W, 3, "F")
    doc.setFillColor(...navy)
    doc.rect(0, 287, W, 10, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFont("helvetica", "normal")
    doc.setFontSize(7)
    doc.text("LERNA360 — " + data.formationTitre, 20, 293)
    doc.text(i + " / " + pageCount, W - 20, 293, { align: "right" })
  }

  return doc.output("blob") as Blob
}
