"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

type FormData = {
  prenom: string
  nom: string
  institution: string
  email: string
  telephone: string
  message: string
}

const EMPTY: FormData = {
  prenom: "",
  nom: "",
  institution: "",
  email: "",
  telephone: "",
  message: "",
}

export function DemoForm() {
  const [form, setForm] = useState<FormData>(EMPTY)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error: err } = await supabase.from("demandes_demo").insert({
      prenom: form.prenom,
      nom: form.nom,
      institution: form.institution,
      email: form.email,
      telephone: form.telephone || null,
      message: form.message || null,
    })

    setLoading(false)
    if (err) {
      setError("Une erreur est survenue. Merci de réessayer ou d'écrire à contact@lerna.ch.")
    } else {
      setSuccess(true)
      setForm(EMPTY)
    }
  }

  return (
    <section id="contact" className="bg-[#F8FAFC] py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2D5B] sm:text-4xl">
            Demander une démonstration
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Découvrez LERNA en 30 minutes avec l'un de nos responsables.
          </p>
        </div>

        {success ? (
          <div className="mt-12 rounded-2xl bg-[#3DBFA0]/15 border border-[#3DBFA0]/30 p-8 text-center">
            <p className="text-xl font-semibold text-[#1B2D5B]">Merci pour votre demande&nbsp;!</p>
            <p className="mt-2 text-muted-foreground">
              Nous reviendrons vers vous dans les 48 heures ouvrables.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1B2D5B]">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="prenom"
                  required
                  value={form.prenom}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1B2D5B]">
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  value={form.nom}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1B2D5B]">
                Nom de l&apos;institution <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="institution"
                required
                value={form.institution}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1B2D5B]">
                Email professionnel <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1B2D5B]">
                Téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                value={form.telephone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#1B2D5B]">
                Message (optionnel)
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20 resize-none"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#3DBFA0] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90 disabled:opacity-60"
            >
              {loading ? "Envoi en cours…" : "Envoyer ma demande"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
