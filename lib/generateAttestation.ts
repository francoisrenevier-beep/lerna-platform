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

async function loadLogoViaFetch(src: string): Promise<{ dataUrl: string; width: number; height: number } | null> {
  try {
    const response = await fetch(src)
    if (!response.ok) return null
    const buffer = await response.arrayBuffer()
    const bytes = new Uint8Array(buffer)
    let binary = ''
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i])
    const dataUrl = 'data:image/png;base64,' + btoa(binary)

    const dims = await new Promise<{ w: number; h: number }>((resolve) => {
      const img = new Image()
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight })
      img.onerror = () => resolve({ w: 400, h: 130 })
      img.src = dataUrl
    })

    return { dataUrl, width: dims.w, height: dims.h }
  } catch {
    return null
  }
}

export async function generateAttestationPDF(data: AttestationData): Promise<Blob> {
  const { default: jsPDF } = await import('jspdf')

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  const W = 210
  const H = 297
  const navy: [number, number, number] = [27, 45, 91]
  const teal: [number, number, number] = [61, 191, 160]
  const gray: [number, number, number] = [120, 128, 150]
  const lightGray: [number, number, number] = [220, 223, 232]
  const bgBox: [number, number, number] = [245, 247, 253]
  const white: [number, number, number] = [255, 255, 255]

  // ── En-tête navy ─────────────────────────────────────────────
  const headerH = 52
  doc.setFillColor(...navy)
  doc.rect(0, 0, W, headerH, 'F')

  // Logo blanc (fetch pour transparence correcte)
  const logo = await loadLogoViaFetch('/logo-learna-blanc.png')
  if (logo) {
    const logoW = 50
    const logoH = (logo.height / logo.width) * logoW
    const logoY = (headerH - logoH) / 2
    doc.addImage(logo.dataUrl, 'PNG', 18, logoY, logoW, logoH)
  } else {
    doc.setTextColor(...white)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(22)
    doc.text('LERNA360', 18, headerH / 2 + 4)
  }

  // Label "ATTESTATION" côté droit de l'en-tête
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(7)
  doc.setCharSpace(2)
  doc.text('ATTESTATION', W - 18, headerH / 2 - 3, { align: 'right' })
  doc.setCharSpace(0)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.5)
  doc.setTextColor(...teal)
  doc.text('de suivi de formation', W - 18, headerH / 2 + 5, { align: 'right' })

  // Barre teal
  doc.setFillColor(...teal)
  doc.rect(0, headerH, W, 4, 'F')

  // ── Titre centré ──────────────────────────────────────────────
  const contentStart = headerH + 4

  doc.setTextColor(...gray)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.setCharSpace(1.8)
  doc.text('ATTESTATION DE SUIVI DE FORMATION', W / 2, contentStart + 20, { align: 'center' })
  doc.setCharSpace(0)

  doc.setFillColor(...teal)
  doc.rect(W / 2 - 18, contentStart + 24, 36, 1, 'F')

  // ── Corps ─────────────────────────────────────────────────────
  doc.setTextColor(...gray)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(10)
  doc.text('certifie que', W / 2, contentStart + 44, { align: 'center' })

  // Nom
  const nomComplet = (`${data.prenom} ${data.nom}`).trim() || 'Appenant(e)'
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(26)
  doc.text(nomComplet, W / 2, contentStart + 62, { align: 'center' })

  // Ligne sous le nom
  const nameW = Math.min(doc.getTextWidth(nomComplet) + 30, 160)
  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.4)
  doc.line(W / 2 - nameW / 2, contentStart + 67, W / 2 + nameW / 2, contentStart + 67)

  doc.setTextColor(...gray)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(10)
  doc.text('a suivi avec succès la formation', W / 2, contentStart + 82, { align: 'center' })

  // Titre de la formation
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  const titleLines = doc.splitTextToSize(data.formationTitre, 148) as string[]
  let titleY = contentStart + 97
  for (const line of titleLines) {
    doc.text(line, W / 2, titleY, { align: 'center' })
    titleY += 8
  }

  // Point décoratif
  const dotY = titleY + 8
  doc.setFillColor(...teal)
  doc.circle(W / 2, dotY, 1.6, 'F')

  // ── Boîtes info ───────────────────────────────────────────────
  const boxW = 66
  const boxH = 26
  const boxY = dotY + 12
  const box1X = W / 2 - boxW - 4
  const box2X = W / 2 + 4

  // Boîte durée
  doc.setFillColor(...bgBox)
  doc.roundedRect(box1X, boxY, boxW, boxH, 3, 3, 'F')
  doc.setTextColor(...gray)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6)
  doc.setCharSpace(1.2)
  doc.text('DUREE DE FORMATION', box1X + boxW / 2, boxY + 9, { align: 'center' })
  doc.setCharSpace(0)
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.text(dureeHeures(data.dureeMinutes), box1X + boxW / 2, boxY + 20, { align: 'center' })

  // Boîte date
  doc.setFillColor(...bgBox)
  doc.roundedRect(box2X, boxY, boxW, boxH, 3, 3, 'F')
  doc.setTextColor(...gray)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6)
  doc.setCharSpace(1.2)
  doc.text("DATE D'OBTENTION", box2X + boxW / 2, boxY + 9, { align: 'center' })
  doc.setCharSpace(0)
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.text(formatDateFr(data.dateObtention), box2X + boxW / 2, boxY + 20, { align: 'center' })

  // ── Signature ─────────────────────────────────────────────────
  const sigY = boxY + boxH + 30

  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.3)
  doc.line(40, sigY, W - 40, sigY)

  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10.5)
  doc.text('LERNA Sarl  |  Suisse romande', W / 2, sigY + 14, { align: 'center' })

  doc.setTextColor(190, 196, 215)
  doc.setFont('courier', 'normal')
  doc.setFontSize(7)
  doc.text(numeroAttestation(data.attestationId), W / 2, sigY + 23, { align: 'center' })

  // ── Pied de page ──────────────────────────────────────────────
  doc.setFillColor(...teal)
  doc.rect(0, H - 13, W, 4, 'F')
  doc.setFillColor(...navy)
  doc.rect(0, H - 9, W, 9, 'F')

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
