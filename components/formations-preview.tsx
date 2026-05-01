"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { getCouleurEtiquette } from "@/lib/etiquettes"
import { ArrowRight, Clock, Signal } from "lucide-react"

type Formation = {
  id: string
  titre: string
  slug: string
  domaine: string | null
  niveau: string
  duree_estimee_minutes: number
}

function dureeFormat(minutes: number) {
  if (minutes < 60) return minutes + " min"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? h + "h" + m : h + "h"
}

function FormationCard({ formation }: { formation: Formation }) {
  const tagClass = getCouleurEtiquette("domaine", formation.domaine)

  return (
    <a
      href={"/formations/" + formation.slug}
      className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-3 flex items-center justify-between">
        {formation.domaine && (
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagClass}`}>
            {formation.domaine}
          </span>
        )}
      </div>
      <h3 className="flex-1 text-base font-semibold text-[#1B2D5B] group-hover:text-[#3DBFA0] transition-colors">
        {formation.titre}
      </h3>
      <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {dureeFormat(formation.duree_estimee_minutes)}
        </span>
        <span className="flex items-center gap-1 capitalize">
          <Signal className="h-3.5 w-3.5" />
          {formation.niveau}
        </span>
      </div>
    </a>
  )
}

export function FormationsPreview() {
  const [formations, setFormations] = useState<Formation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from("formations")
      .select("id, titre, slug, domaine, niveau, duree_estimee_minutes")
      .eq("est_publie", true)
      .eq("est_privee", false)
      .order("ordre")
      .limit(6)
      .then(({ data }) => {
        if (data) setFormations(data)
        setLoading(false)
      })
  }, [])

  return (
    <section id="formations" className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
              Nos formations
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Ancrées dans les réalités du travail social en Suisse romande
            </p>
          </div>
          <a
            href="/catalogue"
            className="flex items-center gap-2 rounded-lg border border-[#3DBFA0] px-4 py-2 text-sm font-medium text-[#3DBFA0] transition-colors hover:bg-[#3DBFA0]/10"
          >
            Voir toutes les formations
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {loading ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 animate-pulse rounded-xl bg-gray-200" />
            ))}
          </div>
        ) : formations.length === 0 ? (
          <p className="mt-12 text-center text-muted-foreground">
            Les formations seront bientôt disponibles.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {formations.map((f) => (
              <FormationCard key={f.id} formation={f} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
