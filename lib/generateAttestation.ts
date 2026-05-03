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

async function loadLogoDataUrl(): Promise<{ dataUrl: string; width: number; height: number } | null> {
  return new Promise((resolve) => {
    const img = new window.Image()
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
    img.src = '/logo-lerna360-bleu.png'
  })
}

export async function generateAttestationPDF(data: AttestationData): Promise<Blob> {
  const { default: jsPDF } = await import('jspdf')

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  const W = 210
  const navy: [number, number, number] = [27, 45, 91]
  const teal: [number, number, number] = [61, 191, 160]
  const grayText: [number, number, number] = [130, 135, 148]
  const lightGray: [number, number, number] = [210, 215, 228]
  const bgBox: [number, number, number] = [244, 246, 252]

  // Bandes de couleur en haut
  doc.setFillColor(...navy)
  doc.rect(0, 0, W, 10, 'F')
  doc.setFillColor(...teal)
  doc.rect(0, 10, W, 3, 'F')

  // Logo LERNA360 (version bleu marine)
  const logo = await loadLogoDataUrl()
  if (logo) {
    const logoW = 48
    const logoH = (logo.height / logo.width) * logoW
    doc.addImage(logo.dataUrl, 'PNG', 19, 17, logoW, logoH)
  } else {
    // Fallback texte si l'image ne charge pas
    doc.setTextColor(...navy)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(20)
    doc.text('LERNA360', 20, 28)
  }

  // Tagline
  doc.setTextColor(...teal)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setCharSpace(2)
  doc.text('ANCRER LES COMPÉTENCES', 20, 36)
  doc.setCharSpace(0)

  // Séparateur horizontal
  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.3)
  doc.line(20, 43, W - 20, 43)

  // Titre du document
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setCharSpace(2)
  doc.text('ATTESTATION DE SUIVI DE FORMATION', W / 2, 76, { align: 'center' })
  doc.setCharSpace(0)

  // Trait teal sous le titre
  doc.setFillColor(...teal)
  doc.rect(W / 2 - 22, 80, 44, 1.5, 'F')

  // certifie que
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(11)
  doc.text('certifie que', W / 2, 98, { align: 'center' })

  // Nom du collaborateur
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(22)
  doc.text(`${data.prenom} ${data.nom}`, W / 2, 112, { align: 'center' })

  // Ligne fine sous le nom
  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.3)
  doc.line(W / 2 - 52, 117, W / 2 + 52, 117)

  // a suivi avec succès la formation
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(11)
  doc.text('a suivi avec succès la formation', W / 2, 130, { align: 'center' })

  // Titre de la formation
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  const titleLines = doc.splitTextToSize(data.formationTitre, 155) as string[]
  let titleY = 145
  for (const line of titleLines) {
    doc.text(line, W / 2, titleY, { align: 'center' })
    titleY += 10
  }

  // Point teal décoratif
  const dotY = titleY + 6
  doc.setFillColor(...teal)
  doc.circle(W / 2, dotY, 1.5, 'F')

  // Boîtes d'informations
  const boxW = 62
  const boxH = 22
  const boxY = dotY + 11
  const box1X = W / 2 - boxW - 4
  const box2X = W / 2 + 4

  doc.setFillColor(...bgBox)
  doc.roundedRect(box1X, boxY, boxW, boxH, 3, 3, 'F')
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setCharSpace(0.5)
  doc.text('DURÉE DE FORMATION', box1X + boxW / 2, boxY + 7, { align: 'center' })
  doc.setCharSpace(0)
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.text(dureeHeures(data.dureeMinutes), box1X + boxW / 2, boxY + 17, { align: 'center' })

  doc.setFillColor(...bgBox)
  doc.roundedRect(box2X, boxY, boxW, boxH, 3, 3, 'F')
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setCharSpace(0.5)
  doc.text("DATE D'OBTENTION", box2X + boxW / 2, boxY + 7, { align: 'center' })
  doc.setCharSpace(0)
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.text(formatDateFr(data.dateObtention), box2X + boxW / 2, boxY + 17, { align: 'center' })

  // Mention
  const mentionY = boxY + boxH + 20
  doc.setTextColor(...grayText)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(9)
  doc.text(
    'Formation développée par des professionnels du travail social',
    W / 2,
    mentionY,
    { align: 'center' }
  )

  // Séparateur
  doc.setDrawColor(...lightGray)
  doc.setLineWidth(0.3)
  doc.line(40, mentionY + 11, W - 40, mentionY + 11)

  // Signature LERNA Sàrl
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.text('LERNA Sàrl — Suisse romande', W / 2, mentionY + 24, { align: 'center' })

  // Numéro d'attestation
  doc.setTextColor(185, 190, 205)
  doc.setFont('courier', 'normal')
  doc.setFontSize(7)
  doc.text(`N° ${numeroAttestation(data.attestationId)}`, W / 2, mentionY + 32, { align: 'center' })

  // Bandes de couleur en bas
  doc.setFillColor(...teal)
  doc.rect(0, 284, W, 3, 'F')
  doc.setFillColor(...navy)
  doc.rect(0, 287, W, 10, 'F')

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
