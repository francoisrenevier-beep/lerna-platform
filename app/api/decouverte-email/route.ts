import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

import { moduleLibre } from '@/content/decouverte'
import { urlModuleLibre } from '@/lib/decouverte/url'

// Cette route se distingue de /api/contact et /api/demo sur un point : elle
// envoie un e-mail à une adresse fournie par l'appelant, et non à la seule
// boîte de LEARNA. Ouverte sans authentification, elle pourrait servir à
// inonder un tiers. D'où la limite ci-dessous.
//
// Cette limite est en mémoire : sur Vercel, chaque instance a la sienne et elle
// disparaît au recyclage. Elle arrête un navigateur qui s'emballe et un abus
// naïf, pas une campagne distribuée. Si le formulaire devait être visé, c'est
// un compteur partagé (Upstash, table Supabase) qu'il faudrait mettre ici.
const FENETRE_MS = 60 * 60 * 1000
const MAX_PAR_IP = 5
const envois = new Map<string, number[]>()

function tropDEnvois(ip: string): boolean {
  const maintenant = Date.now()
  const recents = (envois.get(ip) ?? []).filter((t) => maintenant - t < FENETRE_MS)
  if (recents.length >= MAX_PAR_IP) {
    envois.set(ip, recents)
    return true
  }
  recents.push(maintenant)
  envois.set(ip, recents)
  return false
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')

// Volontairement permissif : le seul contrôle qui compte est que Resend puisse
// livrer. Une expression trop stricte rejette des adresses valides.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Corps = {
  email?: string
  nom?: string | null
  consentement?: boolean
  module?: string
  score?: number
  total?: number
}

export async function POST(req: NextRequest) {
  let body: Corps
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const { email, nom, consentement, module: slug, score, total } = body

  if (!email || !EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Adresse e-mail invalide' }, { status: 422 })
  }

  // Le consentement n'est pas une case décorative : sans accord explicite, rien
  // n'est envoyé et rien n'est transmis à l'équipe.
  if (consentement !== true) {
    return NextResponse.json(
      { error: 'Merci de cocher la case de consentement pour recevoir votre attestation.' },
      { status: 422 },
    )
  }

  const m = slug ? moduleLibre(slug) : undefined
  if (!m) {
    return NextResponse.json({ error: 'Module inconnu' }, { status: 422 })
  }

  if (typeof score !== 'number' || typeof total !== 'number' || score < 0 || score > total) {
    return NextResponse.json({ error: 'Résultat invalide' }, { status: 422 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'inconnue'
  if (tropDEnvois(ip)) {
    return NextResponse.json(
      { error: 'Trop de demandes depuis cet appareil. Réessayez plus tard.' },
      { status: 429 },
    )
  }

  // Le nom est facultatif et purement décoratif sur l'attestation : on le borne
  // pour qu'il ne puisse pas déborder de la mise en page de l'e-mail.
  const nomAffiche = (nom ?? '').trim().slice(0, 80)
  const titre = m.hero.titrePart2 ? `${m.hero.titre} — ${m.hero.titrePart2}` : m.hero.titre
  const date = new Date().toLocaleDateString('fr-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const url = urlModuleLibre(m.slug)

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    // 1 — L'attestation, au visiteur. C'est ce qu'il a demandé, elle part en
    //     premier ; l'échec de la notification interne ne doit pas l'empêcher.
    await resend.emails.send({
      from: 'LEARNA <noreply@learna.ch>',
      to: email,
      replyTo: 'contact@learna.ch',
      subject: `Votre attestation de suivi : ${m.hero.titre}`,
      text: [
        'Attestation de suivi',
        '',
        nomAffiche ? `${nomAffiche} a suivi le module :` : 'Vous avez suivi le module :',
        titre,
        '',
        `Formation : ${m.formationTitre}`,
        `Durée : ${m.dureeMinutes} minutes`,
        `Questionnaire : ${score} bonnes réponses sur ${total}`,
        `Date : ${date}`,
        '',
        `Module en accès libre : ${url}`,
        '',
        "Ce module est le premier d'une formation qui en compte plusieurs. Pour ouvrir",
        "le catalogue à l'ensemble de vos équipes, écrivez-nous à contact@learna.ch.",
      ].join('\n'),
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1B2D5B;padding:24px 32px;border-radius:8px 8px 0 0;">
            <h1 style="color:white;margin:0;font-size:18px;">Attestation de suivi</h1>
          </div>
          <div style="background:#F8FAFC;padding:32px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
            <p style="color:#6b7280;font-size:14px;margin:0 0 4px 0;">
              ${nomAffiche ? `${esc(nomAffiche)} a suivi le module` : 'Vous avez suivi le module'}
            </p>
            <p style="color:#1B2D5B;font-size:18px;font-weight:600;margin:0 0 24px 0;">${esc(titre)}</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:140px;">Formation</td><td style="padding:8px 0;color:#1B2D5B;">${esc(m.formationTitre)}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Durée</td><td style="padding:8px 0;color:#1B2D5B;">${m.dureeMinutes} minutes</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Questionnaire</td><td style="padding:8px 0;color:#1B2D5B;">${score} / ${total}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Date</td><td style="padding:8px 0;color:#1B2D5B;">${esc(date)}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
            <p style="color:#6b7280;font-size:13px;margin:0 0 16px 0;">
              Ce module est le premier d'une formation qui en compte plusieurs. Pour ouvrir le
              catalogue à l'ensemble de vos équipes, personnel de nuit et intendance compris,
              écrivez-nous.
            </p>
            <a href="${url}" style="color:#3DBFA0;font-size:13px;">Revoir le module en accès libre</a>
            <p style="margin:24px 0 0;font-size:12px;color:#9ca3af;">
              Vous recevez cet e-mail parce que vous l'avez demandé à la fin du module. Pour ne
              plus rien recevoir, répondez simplement à ce message.
            </p>
          </div>
        </div>
      `,
    })

    // 2 — La notification interne. Son échec ne concerne pas le visiteur :
    //     l'attestation est partie, la réponse reste positive.
    try {
      await resend.emails.send({
        from: 'Learna Découverte <noreply@learna.ch>',
        to: 'contact@learna.ch',
        replyTo: email,
        subject: `[Module libre] ${email} a terminé « ${m.hero.titre} »`,
        text: [
          'Attestation demandée à la fin du module en accès libre.',
          '',
          `E-mail : ${email}`,
          `Nom : ${nomAffiche || '(non renseigné)'}`,
          `Module : ${titre}`,
          `Score : ${score}/${total}`,
          `Date : ${date}`,
          '',
          "Consentement explicite recueilli pour l'attestation et l'information sur les",
          'nouvelles formations.',
        ].join('\n'),
      })
    } catch (err) {
      console.error('Notification interne module libre non envoyée:', err)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err)
    console.error('Erreur envoi attestation module libre:', detail)
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci d'écrire directement à contact@learna.ch." },
      { status: 500 },
    )
  }
}
