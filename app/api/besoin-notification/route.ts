import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Un besoin exprimé sur le mur doit arriver jusqu'à l'équipe sans qu'elle ait
// à consulter la page d'administration : c'est cet e-mail qui fait la boucle.
// La route ne crée rien, le besoin est déjà enregistré par
// proposer_besoin_formation() ; un échec d'envoi n'a donc aucune conséquence
// sur la proposition.

// Libellés des domaines. Source de vérité : lib/formationMeta.ts, qui est un
// module client (icônes lucide) et ne peut pas être importé ici.
const DOMAINE_LABELS: Record<string, string> = {
  'handicap': 'Handicap',
  'pedagogie-specialisee': 'Pédagogie spécialisée',
  'protection-mineurs': 'Protection des mineurs',
  'transversal': 'Transversal',
  'vieillissement-grand-age': 'Vieillissement et grand âge',
}

const SITE_URL = 'https://learna.ch'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

export async function POST(req: NextRequest) {
  let body: { besoin_id?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const besoinId = body.besoin_id
  if (!besoinId) {
    return NextResponse.json({ error: 'besoin_id manquant' }, { status: 422 })
  }

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

  // Client porteur de la session de l'utilisateur : la policy « utilisateur lit
  // ses propres besoins » garantit qu'on ne notifie que sur un besoin dont la
  // personne authentifiée est bien l'auteur.
  const { data: besoin } = await supabase
    .from('besoins_formations')
    .select('id, titre, description, domaine, created_at')
    .eq('id', besoinId)
    .eq('profil_id', user.id)
    .single()

  if (!besoin) {
    return NextResponse.json({ error: 'Besoin introuvable' }, { status: 404 })
  }

  const [{ data: profil }, { data: ip }] = await Promise.all([
    supabase.from('profils').select('prenom, nom, email').eq('id', user.id).single(),
    supabase
      .from('institution_profils')
      .select('institutions(nom)')
      .eq('profil_id', user.id)
      .eq('statut', 'actif')
      .limit(1)
      .single(),
  ])

  const auteur = [profil?.prenom, profil?.nom].filter(Boolean).join(' ') || 'Utilisateur Learna'
  const email = profil?.email ?? user.email ?? ''
  const institution = (ip?.institutions as unknown as { nom: string } | null)?.nom ?? 'Institution non renseignée'
  const domaine = besoin.domaine ? (DOMAINE_LABELS[besoin.domaine] ?? besoin.domaine) : 'Non précisé'

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Learna <noreply@learna.ch>',
      to: 'contact@learna.ch',
      replyTo: email || undefined,
      subject: `[Besoin terrain] ${besoin.titre}`,
      text: `Nouveau besoin de formation exprimé sur le mur\n\nBesoin : ${besoin.titre}\nDomaine : ${domaine}\n\n${besoin.description ?? '(aucune précision)'}\n\nProposé par : ${auteur}\nInstitution : ${institution}\nEmail : ${email}\n\nGérer : ${SITE_URL}/admin/besoins`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1B2D5B;padding:24px 32px;border-radius:8px 8px 0 0;">
            <p style="color:#3DBFA0;margin:0 0 4px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">Mur des besoins</p>
            <h1 style="color:white;margin:0;font-size:18px;">${esc(besoin.titre)}</h1>
          </div>
          <div style="background:#F8FAFC;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;width:140px;">Domaine</td>
                <td style="padding:8px 0;font-weight:600;color:#1B2D5B;">${esc(domaine)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;">Proposé par</td>
                <td style="padding:8px 0;color:#1B2D5B;">${esc(auteur)}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#6b7280;font-size:14px;">Institution</td>
                <td style="padding:8px 0;font-weight:600;color:#1B2D5B;">${esc(institution)}</td>
              </tr>
              ${email ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${esc(email)}" style="color:#3DBFA0;">${esc(email)}</a></td></tr>` : ''}
            </table>
            ${besoin.description ? `
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
            <p style="color:#6b7280;font-size:13px;margin:0 0 8px 0;">Ce qui pose problème sur le terrain</p>
            <div style="background:white;border:1px solid #e5e7eb;border-radius:6px;padding:16px;color:#1B2D5B;font-size:14px;white-space:pre-wrap;">${esc(besoin.description)}</div>
            ` : ''}
            <p style="margin:24px 0 0;">
              <a href="${SITE_URL}/admin/besoins" style="display:inline-block;background:#3DBFA0;color:white;text-decoration:none;font-weight:600;font-size:14px;padding:10px 18px;border-radius:8px;">Répondre et changer le statut</a>
            </p>
            <p style="margin:16px 0 0;font-size:12px;color:#9ca3af;">
              Le nom de la personne n'apparaît pas sur le mur. Répondre à cet e-mail écrit
              directement à son auteur.
            </p>
          </div>
        </div>
      `,
    })
  } catch (err) {
    console.error('Erreur envoi email besoin:', err instanceof Error ? err.message : err)
    return NextResponse.json({ error: 'Envoi e-mail impossible' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
