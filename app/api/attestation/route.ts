import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const runtime = 'nodejs'
export const maxDuration = 30

function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

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

function getPublicPngBase64(filename: string): string {
  try {
    const buffer = readFileSync(join(process.cwd(), 'public', filename))
    return `data:image/png;base64,${buffer.toString('base64')}`
  } catch {
    return ''
  }
}

function formatDuree(duree: string): string {
  const match = duree.match(/^(\d+)h$/)
  if (match) {
    const h = Number(match[1])
    return `${h} heure${h > 1 ? 's' : ''}`
  }
  return duree
}

function buildHtml(data: AttestationPayload, logoDataUrl: string, signatureDataUrl: string): string {
  const nomComplet = `${escHtml(data.prenom)} ${escHtml(data.nom)}`.trim() || 'Apprenant(e)'
  const dateFormatted = (() => {
    const parsed = new Date(data.date_obtention)
    // Une date illisible ne doit jamais imprimer « Invalid Date » sur l'attestation
    if (Number.isNaN(parsed.getTime())) return data.date_obtention
    return parsed.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  })()

  const logoHtml = logoDataUrl
    ? `<img src="${logoDataUrl}" alt="Learna" style="width: 190px; display: block;">`
    : `<span style="font-size: 24px; font-weight: 800; color: #0d1f4b;">LEARNA</span>`

  const signatureHtml = signatureDataUrl
    ? `<img class="signature-img" src="${signatureDataUrl}" alt="Signature Learna">`
    : ''

  const institutionHtml = data.institution_nom
    ? `<div><div class="info-label">Institution</div><div class="info-value">${escHtml(data.institution_nom)}</div></div>`
    : ''

  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  @page { size: A4 portrait; margin: 0; }
  body {
    width: 794px;
    height: 1123px;
    font-family: 'Manrope', sans-serif;
    background: white;
    overflow: hidden;
  }
  .page {
    display: flex;
    flex-direction: column;
    height: 1123px;
    padding: 72px 80px 0;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .code-block {
    text-align: right;
    font-size: 11px;
    color: #8a93a8;
    line-height: 1.7;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .code-value {
    font-size: 14px;
    font-weight: 700;
    color: #0d1f4b;
    letter-spacing: 0.1em;
  }
  .title-block { margin-top: 96px; }
  .accent-bar { width: 56px; height: 4px; background: #1cae87; }
  h1 {
    font-size: 44px;
    font-weight: 800;
    color: #0d1f4b;
    margin: 28px 0 0;
    letter-spacing: -0.01em;
  }
  .subtitle {
    font-size: 14px;
    color: #8a93a8;
    margin: 14px 0 0;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 600;
  }
  .body-block {
    margin-top: 72px;
    font-size: 16px;
    color: #47506a;
    line-height: 1.75;
  }
  .name {
    font-size: 32px;
    font-weight: 700;
    color: #0d1f4b;
    margin: 16px 0;
    border-bottom: 1px solid #dfe3ec;
    padding-bottom: 18px;
  }
  .formation-titre {
    font-size: 24px;
    font-weight: 700;
    color: #1cae87;
    margin: 14px 0 0;
  }
  .info-row {
    display: flex;
    gap: 56px;
    margin-top: 64px;
  }
  .info-label {
    font-size: 11px;
    color: #8a93a8;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 700;
  }
  .info-value {
    font-size: 18px;
    font-weight: 700;
    color: #0d1f4b;
    margin-top: 6px;
  }
  .spacer { flex: 1; }
  .signature-row {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 24px;
  }
  .signature {
    text-align: center;
    width: 260px;
  }
  .signature-space {
    height: 70px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .signature-img {
    max-width: 210px;
    max-height: 70px;
    object-fit: contain;
  }
  .signature-name {
    border-top: 1px solid #0d1f4b;
    margin-top: 8px;
    padding-top: 10px;
    font-size: 13px;
    font-weight: 700;
    color: #0d1f4b;
  }
  .signature-role { font-size: 11px; color: #8a93a8; }
  .footer {
    border-top: 1px solid #eef0f5;
    margin: 0 -80px;
    padding: 16px 80px 20px;
    display: flex;
    justify-content: space-between;
    font-size: 9.5px;
    color: #a7aec0;
  }
</style>
</head>
<body>
  <div class="page">
    <div class="top">
      ${logoHtml}
      <div class="code-block">Code Learna<br><span class="code-value">${escHtml(data.numero_verification)}</span></div>
    </div>
    <div class="title-block">
      <div class="accent-bar"></div>
      <h1>Attestation de suivi</h1>
      <p class="subtitle">Formation en ligne — Plateforme Learna</p>
    </div>
    <div class="body-block">
      <p>Learna atteste que</p>
      <p class="name">${nomComplet}</p>
      <p>a suivi l'intégralité de la formation</p>
      <p class="formation-titre">${escHtml(data.formation_titre)}</p>
    </div>
    <div class="info-row">
      <div><div class="info-label">Durée</div><div class="info-value">${escHtml(formatDuree(data.duree_heures))}</div></div>
      <div><div class="info-label">Date d'attestation</div><div class="info-value">${escHtml(dateFormatted)}</div></div>
      ${institutionHtml}
    </div>
    <div class="spacer"></div>
    <div class="signature-row">
      <div class="signature">
        <div class="signature-space">${signatureHtml}</div>
        <div class="signature-name">Learna</div>
        <div class="signature-role">Organisme de formation</div>
      </div>
    </div>
    <div class="footer">
      <span>Attestation générée par la plateforme Learna — learna.ch</span>
      <span>Document non contractuel · Vérifiable avec le code Learna</span>
    </div>
  </div>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { getAll: () => cookieStore.getAll(), setAll: () => {} } }
  )
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

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
    const logoDataUrl = getPublicPngBase64('logo-learna-couleur.png')
    const signatureDataUrl = getPublicPngBase64('signature-learna.png')
    const html = buildHtml(data, logoDataUrl, signatureDataUrl)

    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 20000 })
    const pdf = await page.pdf({
      format: 'A4',
      landscape: false,
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
