export interface AttestationData {
  prenom: string
  nom: string
  formationTitre: string
  dureeMinutes: number
  dateObtention: string
  attestationId: string
  nbModules: number
  institution?: string
}

export function numeroAttestation(id: string): string {
  const clean = id.replace(/-/g, '').toUpperCase()
  return `LERNA-${clean.slice(0, 4)}-${clean.slice(4, 8)}`
}

function dureeHeures(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? `${h}h` : `${h}h${m}`
}

function formatDateFr(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

async function loadLogoBase64(src: string): Promise<{ dataUrl: string; width: number; height: number } | null> {
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

export async function generateAttestation(data: AttestationData): Promise<string> {
  const { default: jsPDF } = await import('jspdf')

  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })

  const W = 210
  const H = 297
  const navy: [number, number, number] = [27, 45, 91]
  const teal: [number, number, number] = [61, 191, 160]
  const white: [number, number, number] = [255, 255, 255]
  const gray: [number, number, number] = [110, 118, 140]
  const bgBox: [number, number, number] = [243, 246, 252]
  const lightLine: [number, number, number] = [215, 220, 235]

  const barW = 7      // left green bar width
  const headerH = 44  // top navy band
  const footerH = 18  // bottom navy band
  const xL = barW + 11 // content left margin

  // ── Fond blanc ─────────────────────────────────────────────────
  doc.setFillColor(...white)
  doc.rect(0, 0, W, H, 'F')

  // ── Bande navy en-tête (légèrement hors limites pour éviter les gaps) ──
  doc.setFillColor(...navy)
  doc.rect(-1, -1, W + 2, headerH + 1, 'F')

  // ── Bande navy pied de page ────────────────────────────────────
  doc.setFillColor(...navy)
  doc.rect(-1, H - footerH, W + 2, footerH + 1, 'F')

  // ── Barre verte gauche (par-dessus tout) ──────────────────────
  doc.setFillColor(...teal)
  doc.rect(-1, -1, barW + 1, H + 2, 'F')

  // ── Logo blanc en haut à gauche ────────────────────────────────
  const logo = await loadLogoBase64('/logo-learna-blanc.png')
  if (logo) {
    const logoW = 42
    const logoH = (logo.height / logo.width) * logoW
    const logoY = (headerH - logoH) / 2
    doc.addImage(logo.dataUrl, 'PNG', xL, logoY, logoW, logoH)
  } else {
    doc.setTextColor(...white)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(18)
    doc.text('LERNA360', xL, headerH / 2 + 4)
  }

  // ── Titre dans l'en-tête ───────────────────────────────────────
  doc.setTextColor(...white)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.setCharSpace(1.5)
  doc.text('ATTESTATION DE SUIVI DE FORMATION', W / 2, headerH / 2 - 2, { align: 'center' })
  doc.setCharSpace(0)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7)
  doc.setTextColor(61, 191, 160)
  doc.text('Learna Sàrl — Suisse romande', W / 2, headerH / 2 + 6, { align: 'center' })

  // ── Corps ──────────────────────────────────────────────────────
  let y = headerH + 18

  // Intro
  doc.setTextColor(...gray)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(10)
  doc.text('Nous attestons par la présente que', W / 2 + barW / 2, y, { align: 'center' })
  y += 14

  // Nom complet
  const nomComplet = `${data.prenom} ${data.nom}`.trim() || 'Appenant(e)'
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.text(nomComplet, W / 2 + barW / 2, y, { align: 'center' })
  y += 5

  // Ligne sous le nom
  const nameW = Math.min(doc.getTextWidth(nomComplet) + 24, 150)
  doc.setDrawColor(...lightLine)
  doc.setLineWidth(0.5)
  doc.line(W / 2 + barW / 2 - nameW / 2, y, W / 2 + barW / 2 + nameW / 2, y)
  y += 12

  // Suite intro
  doc.setTextColor(...gray)
  doc.setFont('helvetica', 'italic')
  doc.setFontSize(10)
  doc.text('a suivi et complété avec succès la formation', W / 2 + barW / 2, y, { align: 'center' })
  y += 10

  // ── Encadré formation ──────────────────────────────────────────
  const boxPad = 10
  const titleLines = doc.splitTextToSize(data.formationTitre, W - xL - 18 - boxPad * 2) as string[]
  const boxH = titleLines.length * 8 + 14
  doc.setFillColor(...teal)
  doc.roundedRect(xL, y, W - xL - 11, boxH, 3, 3, 'F')
  doc.setTextColor(...white)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  const textY = y + boxH / 2 - (titleLines.length - 1) * 4 + 2
  for (let i = 0; i < titleLines.length; i++) {
    doc.text(titleLines[i], W / 2 + barW / 2, textY + i * 8, { align: 'center' })
  }
  y += boxH + 16

  // ── Trois blocs d'information ──────────────────────────────────
  const infoW = 52
  const infoH = 26
  const infoGap = (W - barW - 11 - 3 * infoW) / 4
  const infoY = y
  const info = [
    { label: 'DUREE', value: dureeHeures(data.dureeMinutes) },
    { label: "DATE D'OBTENTION", value: formatDateFr(data.dateObtention) },
    { label: 'MODULES COMPLÉTÉS', value: String(data.nbModules) },
  ]
  info.forEach((bloc, i) => {
    const bx = xL + infoGap + i * (infoW + infoGap)
    doc.setFillColor(...bgBox)
    doc.roundedRect(bx, infoY, infoW, infoH, 2.5, 2.5, 'F')

    // accent teal sur le bord haut
    doc.setFillColor(...teal)
    doc.rect(bx, infoY, infoW, 2, 'F')

    doc.setTextColor(...gray)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(5.5)
    doc.setCharSpace(1)
    doc.text(bloc.label, bx + infoW / 2, infoY + 9, { align: 'center' })
    doc.setCharSpace(0)
    doc.setTextColor(...navy)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(i === 1 ? 9 : 18)
    doc.text(bloc.value, bx + infoW / 2, infoY + 20, { align: 'center' })
  })
  y += infoH + 16

  // ── Institution ────────────────────────────────────────────────
  if (data.institution) {
    doc.setFillColor(...bgBox)
    doc.roundedRect(xL, y, W - xL - 11, 14, 2, 2, 'F')
    doc.setTextColor(...gray)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.text('Institution :', xL + 8, y + 9)
    doc.setTextColor(...navy)
    doc.setFont('helvetica', 'bold')
    doc.text(data.institution, xL + 38, y + 9)
    y += 22
  }

  // ── Signature ──────────────────────────────────────────────────
  const sigY = H - footerH - 30
  doc.setDrawColor(...lightLine)
  doc.setLineWidth(0.3)
  doc.line(xL, sigY, W - 11, sigY)
  doc.setTextColor(...navy)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9.5)
  doc.text('Learna Sàrl  |  Suisse romande', xL, sigY + 10)
  doc.setTextColor(...gray)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(7.5)
  doc.text('Organisme de formation continue', xL, sigY + 18)

  // ── Numéro de vérification dans le pied de page ────────────────
  doc.setTextColor(...white)
  doc.setFont('courier', 'normal')
  doc.setFontSize(7)
  doc.text(numeroAttestation(data.attestationId), W - 11, H - footerH / 2 + 2, { align: 'right' })
  doc.setTextColor(61, 191, 160)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(6.5)
  doc.text('Numéro de vérification', xL, H - footerH / 2 + 2)

  // ── Export base64 ──────────────────────────────────────────────
  const buf = doc.output('arraybuffer')
  const bytes = new Uint8Array(buf)
  let binary = ''
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i])
  return btoa(binary)
}

export function base64ToBlob(base64: string): Blob {
  const bytes = atob(base64)
  const arr = new Uint8Array(bytes.length)
  for (let i = 0; i < bytes.length; i++) arr[i] = bytes.charCodeAt(i)
  return new Blob([arr], { type: 'application/pdf' })
}

export function downloadFromBase64(base64: string, filename: string) {
  const blob = base64ToBlob(base64)
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
