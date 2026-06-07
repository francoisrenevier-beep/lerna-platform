import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  let body: { userId: string; prenom: string; nom: string; email: string; institution_id: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide' }, { status: 400 })
  }

  const { userId, prenom, nom, email, institution_id } = body
  if (!userId || !prenom || !nom || !email || !institution_id) {
    return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 422 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error: profilError } = await supabase.from('profils').upsert(
    { id: userId, prenom, nom, email },
    { onConflict: 'id' }
  )
  if (profilError) {
    return NextResponse.json({ error: profilError.message }, { status: 500 })
  }

  const { error: liaisonError } = await supabase.from('institution_profils').insert(
    { profil_id: userId, institution_id, role: 'collaborateur', statut: 'actif' }
  )
  if (liaisonError && liaisonError.code !== '23505') {
    return NextResponse.json({ error: liaisonError.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
