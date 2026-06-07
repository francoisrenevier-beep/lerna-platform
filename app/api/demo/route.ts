import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

export async function POST(req: NextRequest) {
  let body: { prenom: string; nom: string; institution: string; email: string; telephone?: string; message?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const { prenom, nom, institution, email, telephone, message } = body
  if (!prenom || !nom || !institution || !email) {
    return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 422 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { error: dbError } = await supabase.from('demandes_demo').insert({
    prenom,
    nom,
    institution,
    email,
    telephone: telephone || null,
    message: message || null,
  })

  if (dbError) {
    console.error('Erreur insertion demande demo:', dbError.message)
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Learna <noreply@learna.ch>',
      to: 'contact@learna.ch',
      replyTo: email,
      subject: `Demande de démonstration — ${prenom} ${nom} (${institution})`,
      text: `Nouvelle demande de démonstration\n\nPrénom : ${prenom}\nNom : ${nom}\nInstitution : ${institution}\nEmail : ${email}${telephone ? `\nTéléphone : ${telephone}` : ''}${message ? `\n\nMessage :\n${message}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1B2D5B;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:white;margin:0;font-size:18px;">Nouvelle demande de démonstration</h1>
          </div>
          <div style="background:#F8FAFC;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;width:140px;">Prénom</td>
                <td style="padding:8px 0;color:#1B2D5B;">${esc(prenom)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;">Nom</td>
                <td style="padding:8px 0;color:#1B2D5B;">${esc(nom)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;">Institution</td>
                <td style="padding:8px 0;font-weight:600;color:#1B2D5B;">${esc(institution)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td>
                <td style="padding:8px 0;"><a href="mailto:${esc(email)}" style="color:#3DBFA0;">${esc(email)}</a></td>
              </tr>
              ${telephone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Téléphone</td><td style="padding:8px 0;color:#1B2D5B;">${esc(telephone)}</td></tr>` : ''}
            </table>
            ${message ? `
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
            <p style="color:#6b7280;font-size:13px;margin:0 0 8px 0;">Message</p>
            <div style="background:white;border:1px solid #e5e7eb;border-radius:6px;padding:16px;color:#1B2D5B;font-size:14px;white-space:pre-wrap;">${esc(message)}</div>
            ` : ''}
            <p style="margin:24px 0 0;font-size:12px;color:#9ca3af;">
              Pour répondre à cette personne, cliquez sur Répondre — l'adresse de retour est préremplie.
            </p>
          </div>
        </div>
      `,
    })
  } catch (emailErr) {
    console.error('Erreur envoi email demo:', emailErr instanceof Error ? emailErr.message : emailErr)
  }

  return NextResponse.json({ ok: true })
}
