export interface AttestationData {
  prenom: string
  nom: string
  formationTitre: string
  dureeMinutes: number
  dateObtention: string
  attestationId: string
}

export function numeroAttestation(id: string): string {
  const clean = id.replace(/-/g, '').toUpperCase()
  return `LERNA-${clean.slice(0, 4)}-${clean.slice(4, 8)}`
}

function dureeHeures(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  if (m === 0) return `${h}h`
  return `${h}h${m}`
}

function formatDateFr(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

async function loadLogoDataUrl(src: string): Promise<{ dataUrl: string; width: number; height: number } | null> {
  return new Promise((resolve) => {
    const img = new window.Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')
        if (!ctx) { resolve(null); return }
        ctx.drawImage(img, 0, 0)
        resolve({ dataUrl: canvas.toDataURL('image/png'), width: img.naturalWidth, height: img.naturalHeight })
      } catch {
        resolve(null)
      }
    }
    img.onerror = () => resolve(null)
    img.src = src
  })
}

export async function generateAttestationPDF(data: AttestationData): Promise<Blob> {
  const { default: jsPDF } = await import('jspdf')

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  const W = 210
  const H = 297
  const navy: [number, number, number] = [27, 45, 91]
  const teal: [number, number, number] = [61, 191, 160]
  const grayText: [number, number, number] = [120, 128, 150]
  const lightGray: [number, number, number] = [218, 220, 228]
  const bgBox: [number, number, number] = [245, 247, 253]
  const white: [number, number, number] = [255, 255, 255]

  // ── En-tête navy (45mm) ───────────────────────────────────────
  doc.setFillColor(...navy)
  doc.rect(0, 0, W, 45, 'F')

  // Logo blanc dans l'en-tête
  const logo = await loadLogoDataUrl('/logo-lerna360-blanc.png')
  if (logo) {
    const logoW = 52
    const logoH = (logo.height / logo.width) * logoW
    const logoY = (45 - logoH) / 2
    doc.addImage(logo.dataUrl, 'PNG', 20, logoY, logoW, logoH)
  } else {
    doc.setTextColor(...white)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.text('LERNA360', 20, 27)
  }

  // Tagline dans l'en-tête
  doc.setTextColor(...teal)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.5)
  doc.setCharSpace(2.5)
  doc.text('ANCRER LES COMPETENCES', 20, 40)
  doc.setCharSpace(0)

  // Barre teal sous l'en-tête
  doc.setFillColor(...teal)
  doc.rect(0, 45, W, 3, 'F')

  // ── Titre du document ─────────────────────────────────────────
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8.5)
  doc.setCharSpace(2.5)
  doc.text('ATTESTATION DE SUIVI DE FORMATION', W / 2, 68, { align: 'center' })
  doc.setCharSpace(0)

  doc.setFillColor(...teal)
  doc.rect(W / 2 - 20, 72, 40, 1.2, 'F')

  // ── Corps du certificat ───────────────────────────────────────
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(10.5)
  doc.text('certifie que', W / 2, 92, { align: 'center' })

  // Nom
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  const nomComplet = `${data.prenom} ${data.nom}`.trim() || 'Apprenant(e)'
  doc.text(nomComplet, W / 2, 108, { align: 'center' })

  // Ligne sous le nom
  const nomWidth = Math.min(doc.getTextWidth(nomComplet) + 20, 150)
  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.4)
  doc.line(W / 2 - nomWidth / 2, 113, W / 2 + nomWidth / 2, 113)

  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(10.5)
  doc.text('a suivi avec succes la formation', W / 2, 128, { align: 'center' })

  // Titre de la formation
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(17)
  const titleLines = doc.splitTextToSize(data.formationTitre, 150) as string[]
  let titleY = 143
  for (const line of titleLines) {
    doc.text(line, W / 2, titleY, { align: 'center' })
    titleY += 9
  }

  // Point décoratif teal
  const dotY = titleY + 7
  doc.setFillColor(...teal)
  doc.circle(W / 2, dotY, 1.8, 'F')

  // ── Boites durée / date ───────────────────────────────────────
  const boxW = 64
  const boxH = 24
  const boxY = dotY + 12
  const box1X = W / 2 - boxW - 5
  const box2X = W / 2 + 5

  // Box durée
  doc.setFillColor(...bgBox)
  doc.roundedRect(box1X, boxY, boxW, boxH, 3, 3, 'F')
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.5)
  doc.setCharSpace(1)
  doc.text('DUREE DE FORMATION', box1X + boxW / 2, boxY + 8, { align: 'center' })
  doc.setCharSpace(0)
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text(dureeHeures(data.dureeMinutes), box1X + boxW / 2, boxY + 18, { align: 'center' })

  // Box date
  doc.setFillColor(...bgBox)
  doc.roundedRect(box2X, boxY, boxW, boxH, 3, 3, 'F')
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.5)
  doc.setCharSpace(1)
  doc.text("DATE D'OBTENTION", box2X + boxW / 2, boxY + 8, { align: 'center' })
  doc.setCharSpace(0)
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9.5)
  doc.text(formatDateFr(data.dateObtention), box2X + boxW / 2, boxY + 18, { align: 'center' })

  // ── Signature ─────────────────────────────────────────────────
  const sigY = boxY + boxH + 22

  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(8.5)
  doc.text('Formation developpee par des professionnels du travail social', W / 2, sigY, { align: 'center' })

  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.3)
  doc.line(45, sigY + 10, W - 45, sigY + 10)

  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.text('LERNA Sarl  -  Suisse romande', W / 2, sigY + 22, { align: 'center' })

  doc.setTextColor(185, 192, 210)
  doc.setFont('courier', 'normal')
  doc.setFontSize(7)
  doc.text(`N  ${numeroAttestation(data.attestationId)}`, W / 2, sigY + 31, { align: 'center' })

  // ── Pied de page ──────────────────────────────────────────────
  doc.setFillColor(...teal)
  doc.rect(0, H - 13, W, 3, 'F')
  doc.setFillColor(...navy)
  doc.rect(0, H - 10, W, 10, 'F')

  const buf = doc.output('arraybuffer')
  return new Blob([buf], { type: 'application/pdf' })
}

export async function downloadPDFFromBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
