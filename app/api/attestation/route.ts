import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const maxDuration = 30

interface AttestationPayload {
  prenom: string
  nom: string
  formation_titre: string
  formation_categorie: string
  duree_heures: string
  date_obtention: string
  modules_completes: number
  modules_total: number
  institution_nom: string
  numero_verification: string
}

function getLogoBase64(): string {
  try {
    const logoPath = join(process.cwd(), 'public', 'logo-learna-blanc.png')
    const buffer = readFileSync(logoPath)
    return `data:image/png;base64,${buffer.toString('base64')}`
  } catch {
    return ''
  }
}

function buildHtml(data: AttestationPayload, logoDataUrl: string): string {
  const nomComplet = `${data.prenom} ${data.nom}`.trim() || 'Apprenant(e)'
  const dateFormatted = (() => {
    try {
      return new Date(data.date_obtention).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    } catch {
      return data.date_obtention
    }
  })()

  const logoHtml = logoDataUrl
    ? `<img src="${logoDataUrl}" alt="Learna" style="height:22mm;width:auto;" />`
    : `<span style="color:white;font-size:16pt;font-weight:bold;">LEARNA</span>`

  const institutionHtml = data.institution_nom
    ? `<p class="institution-line">dans le cadre de la licence institutionnelle de <span class="institution-name">${data.institution_nom}</span></p>`
    : ''

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page { size: A4 landscape; margin: 0; }
  body {
    width: 297mm;
    height: 210mm;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .header {
    background: #1B2D5B;
    height: 38mm;
    min-height: 38mm;
    display: flex;
    align-items: center;
    padding: 0 12mm;
    position: relative;
    flex-shrink: 0;
  }
  .header-titles {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    white-space: nowrap;
  }
  .header-title {
    color: white;
    font-size: 10pt;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .header-subtitle {
    color: #3DBFA0;
    font-size: 8pt;
    margin-top: 3px;
  }
  .accent-line {
    height: 2.5mm;
    background: #3DBFA0;
    flex-shrink: 0;
  }
  .content {
    flex: 1;
    padding: 5mm 20mm 3mm;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  }
  .intro-text {
    color: #6b7280;
    font-style: italic;
    font-size: 10pt;
    margin-bottom: 3.5mm;
  }
  .name {
    color: #1B2D5B;
    font-size: 26pt;
    font-weight: bold;
    text-align: center;
  }
  .name-separator {
    width: 110mm;
    height: 0.3mm;
    background: #d1d5db;
    margin: 2.5mm auto 3.5mm;
  }
  .followed-text {
    color: #6b7280;
    font-style: italic;
    font-size: 10pt;
    margin-bottom: 4mm;
  }
  .formation-box {
    background: #E8F7F4;
    border: 1.5px solid #3DBFA0;
    border-radius: 6px;
    padding: 4mm 10mm;
    text-align: center;
    width: 100%;
    margin-bottom: 4mm;
  }
  .formation-title {
    color: #1B2D5B;
    font-size: 13pt;
    font-weight: bold;
    margin-bottom: 1.5mm;
  }
  .formation-categorie {
    color: #3DBFA0;
    font-size: 9pt;
  }
  .info-blocks {
    display: flex;
    gap: 4mm;
    width: 100%;
    margin-bottom: 4mm;
  }
  .info-block {
    flex: 1;
    background: #F8FAFC;
    border-radius: 5px;
    padding: 3mm 4mm;
    text-align: center;
  }
  .info-label {
    color: #9ca3af;
    font-size: 6.5pt;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 2mm;
  }
  .info-value {
    color: #1B2D5B;
    font-size: 18pt;
    font-weight: bold;
  }
  .info-value.small {
    font-size: 10pt;
  }
  .institution-line {
    color: #6b7280;
    font-size: 9pt;
    margin-bottom: 3.5mm;
    text-align: center;
  }
  .institution-name {
    color: #1B2D5B;
    font-weight: bold;
  }
  .separator {
    width: 100%;
    height: 0.3mm;
    background: #e5e7eb;
    margin-bottom: 3.5mm;
    flex-shrink: 0;
  }
  .footer-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: auto;
  }
  .footer-left .org-name {
    color: #1B2D5B;
    font-size: 9pt;
    font-weight: bold;
  }
  .footer-left .org-type {
    color: #9ca3af;
    font-size: 8pt;
    margin-top: 1mm;
  }
  .verification-box {
    background: #E8F7F4;
    border: 1.5px solid #3DBFA0;
    border-radius: 5px;
    padding: 3mm 6mm;
    text-align: center;
  }
  .verif-label {
    color: #9ca3af;
    font-size: 6.5pt;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 1.5mm;
  }
  .verif-number {
    color: #1B2D5B;
    font-size: 10pt;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
  .bottom-band {
    background: #1B2D5B;
    height: 9mm;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .bottom-band span {
    color: rgba(255,255,255,0.7);
    font-size: 7.5pt;
    letter-spacing: 0.3px;
  }
</style>
</head>
<body>
  <div class="header">
    ${logoHtml}
    <div class="header-titles">
      <div class="header-title">Attestation de suivi de formation</div>
      <div class="header-subtitle">Learna Sàrl — Suisse romande</div>
    </div>
  </div>

  <div class="accent-line"></div>

  <div class="content">
    <p class="intro-text">Nous attestons par la présente que</p>

    <div class="name">${nomComplet}</div>
    <div class="name-separator"></div>

    <p class="followed-text">a suivi et complété avec succès la formation</p>

    <div class="formation-box">
      <div class="formation-title">${data.formation_titre}</div>
      <div class="formation-categorie">${data.formation_categorie}</div>
    </div>

    <div class="info-blocks">
      <div class="info-block">
        <div class="info-label">Durée</div>
        <div class="info-value">${data.duree_heures}</div>
      </div>
      <div class="info-block">
        <div class="info-label">Date d'obtention</div>
        <div class="info-value small">${dateFormatted}</div>
      </div>
      <div class="info-block">
        <div class="info-label">Modules complétés</div>
        <div class="info-value">${data.modules_completes}/${data.modules_total}</div>
      </div>
    </div>

    ${institutionHtml}

    <div class="separator"></div>

    <div class="footer-section">
      <div class="footer-left">
        <div class="org-name">Learna Sàrl | Suisse romande</div>
        <div class="org-type">Organisme de formation continue</div>
      </div>
      <div class="verification-box">
        <div class="verif-label">N° de vérification</div>
        <div class="verif-number">${data.numero_verification}</div>
      </div>
    </div>
  </div>

  <div class="bottom-band">
    <span>Formation développée par des professionnels du travail social en Suisse romande</span>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  let data: AttestationPayload
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  let browser: import('puppeteer-core').Browser | null = null
  try {
    let executablePath: string
    let launchArgs: string[]

    const puppeteer = (await import('puppeteer-core')).default

    if (process.env.PUPPETEER_EXECUTABLE_PATH) {
      executablePath = process.env.PUPPETEER_EXECUTABLE_PATH
      launchArgs = puppeteer.defaultArgs({
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        headless: 'shell',
      })
    } else {
      const chromium = (await import('@sparticuz/chromium-min')).default
      const chromiumUrl = process.env.CHROMIUM_BINARY_URL ??
        'https://github.com/Sparticuz/chromium/releases/download/v148.0.0/chromium-v148.0.0-pack.x64.tar'
      executablePath = await chromium.executablePath(chromiumUrl)
      launchArgs = puppeteer.defaultArgs({ args: chromium.args, headless: 'shell' })
    }

    browser = await puppeteer.launch({
      executablePath,
      args: launchArgs,
      headless: 'shell',
    })

    const page = await browser.newPage()
    const logoDataUrl = getLogoBase64()
    const html = buildHtml(data, logoDataUrl)

    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 20000 })
    const pdf = await page.pdf({
      format: 'A4',
      landscape: true,
      printBackground: true,
    })

    await browser.close()
    browser = null

    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="attestation.pdf"',
      },
    })
  } catch (error) {
    if (browser) {
      try { await browser.close() } catch { /* ignore */ }
    }
    console.error('Erreur génération PDF:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la génération du PDF. Réessayez dans quelques instants.' },
      { status: 500 }
    )
  }
}
