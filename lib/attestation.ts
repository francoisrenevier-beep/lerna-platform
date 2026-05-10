import { supabase } from '@/lib/supabase'

export interface AttestationData {
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
  // Champs optionnels pour le stockage Supabase
  profil_id?: string
  formation_slug?: string
  attestation_id?: string
}

export function numeroAttestation(id: string): string {
  const clean = id.replace(/-/g, '').toUpperCase()
  return `LEARNA-${clean.slice(0, 4)}-${clean.slice(4, 8)}`
}

export function dureeHeuresFromMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? `${h}h` : `${h}h${m}`
}

export async function generateAttestation(data: AttestationData): Promise<Blob> {
  const response = await fetch('/api/attestation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prenom: data.prenom,
      nom: data.nom,
      formation_titre: data.formation_titre,
      formation_categorie: data.formation_categorie,
      duree_heures: data.duree_heures,
      date_obtention: data.date_obtention,
      modules_completes: data.modules_completes,
      modules_total: data.modules_total,
      institution_nom: data.institution_nom,
      numero_verification: data.numero_verification,
    }),
  })
  if (!response.ok) throw new Error('Erreur génération PDF')
  return response.blob()
}

export async function downloadAttestation(data: AttestationData): Promise<void> {
  const blob = await generateAttestation(data)

  const slug = data.formation_slug ?? 'formation'
  const filename = `attestation-learna-${slug}.pdf`
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  setTimeout(() => URL.revokeObjectURL(url), 1000)

  if (data.profil_id && data.formation_slug && data.attestation_id) {
    try {
      const arrayBuffer = await blob.arrayBuffer()
      const path = `${data.profil_id}/${data.formation_slug}.pdf`
      const { error: uploadError } = await supabase.storage
        .from('attestations')
        .upload(path, arrayBuffer, { contentType: 'application/pdf', upsert: true })

      if (!uploadError) {
        const { data: urlData } = supabase.storage.from('attestations').getPublicUrl(path)
        await supabase
          .from('attestations')
          .update({ pdf_url: urlData.publicUrl })
          .eq('id', data.attestation_id)
      }
    } catch (e) {
      console.error('Erreur upload attestation Supabase:', e)
    }
  }
}
