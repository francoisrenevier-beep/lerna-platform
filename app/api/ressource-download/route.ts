import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const SUPABASE_STORAGE_PREFIX = '/storage/v1/object/public/ressources/'
const SUPABASE_STORAGE_PRIVATE_PREFIX = '/storage/v1/object/ressources/'

function extractPath(fileUrl: string): string | null {
  try {
    const url = new URL(fileUrl)
    for (const prefix of [SUPABASE_STORAGE_PREFIX, SUPABASE_STORAGE_PRIVATE_PREFIX]) {
      if (url.pathname.startsWith(prefix)) {
        return decodeURIComponent(url.pathname.slice(prefix.length))
      }
    }
    return null
  } catch {
    return null
  }
}

// GET /api/ressource-download?url=<encoded_supabase_storage_url>
// Vérifie l'authentification puis redirige vers une URL signée (60 min).
export async function GET(req: NextRequest) {
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

  const rawUrl = req.nextUrl.searchParams.get('url')
  if (!rawUrl) {
    return NextResponse.json({ error: 'Paramètre url manquant' }, { status: 400 })
  }

  const path = extractPath(rawUrl)
  if (!path) {
    return NextResponse.json({ error: 'URL de ressource invalide' }, { status: 400 })
  }

  const { data, error } = await supabase.storage
    .from('ressources')
    .createSignedUrl(path, 3600)

  if (error || !data?.signedUrl) {
    return NextResponse.json({ error: 'Ressource introuvable' }, { status: 404 })
  }

  return NextResponse.redirect(data.signedUrl)
}
