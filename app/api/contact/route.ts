import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const SUBJECT_LABELS: Record<string, string> = {
  support: 'Support technique',
  amelioration: "Proposition d'amélioration",
  formation: 'Question sur une formation',
  facturation: 'Facturation / abonnement',
  autre: 'Autre demande',
}

export async function POST(req: NextRequest) {
  let body: { sujet: string; nom: string; email: string; message: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const { sujet, nom, email, message } = body
  if (!sujet || !nom || !email || !message) {
    return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 422 })
  }

  const sujetLabel = SUBJECT_LABELS[sujet] ?? sujet

  const esc = (s: string) => s
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Learna Contact <noreply@learna.ch>',
      to: 'contact@learna.ch',
      replyTo: email,
      subject: `[${sujetLabel}] Message de ${nom}`,
      text: `Nouveau message depuis le formulaire de contact Learna\n\nNom : ${nom}\nEmail : ${email}\nSujet : ${sujetLabel}\n\nMessage :\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1B2D5B;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:white;margin:0;font-size:18px;">Nouveau message — Learna</h1>
          </div>
          <div style="background:#F8FAFC;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;width:120px;">Sujet</td>
                <td style="padding:8px 0;font-weight:600;color:#1B2D5B;">${esc(sujetLabel)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;">Nom</td>
                <td style="padding:8px 0;color:#1B2D5B;">${esc(nom)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td>
                <td style="padding:8px 0;"><a href="mailto:${esc(email)}" style="color:#3DBFA0;">${esc(email)}</a></td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
            <p style="color:#6b7280;font-size:13px;margin:0 0 8px 0;">Message</p>
            <div style="background:white;border:1px solid #e5e7eb;border-radius:6px;padding:16px;color:#1B2D5B;font-size:14px;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
            <p style="margin:24px 0 0;font-size:12px;color:#9ca3af;">
              Pour répondre directement à cet utilisateur, cliquez sur Répondre — l'adresse de retour est préremplie.
            </p>
          </div>
        </div>
      `,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err)
    console.error('Erreur envoi email contact:', detail)
    return NextResponse.json({ error: detail }, { status: 500 })
  }
}
