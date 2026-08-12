"use client"

import { useState } from "react"
import { X, MessageCircle, Send, CheckCircle } from "lucide-react"
import { SUJETS_CONTACT } from "@/lib/contact-sujets"

type FormData = {
  sujet: string
  nom: string
  email: string
  message: string
}

const EMPTY: FormData = { sujet: "", nom: "", email: "", message: "" }

export function ContactModal() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<FormData>(EMPTY)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Erreur inconnue")
      setSuccess(true)
      setForm(EMPTY)
    } catch (e) {
      setError((e instanceof Error ? e.message : null) ?? "Une erreur est survenue. Merci d'écrire directement à contact@learna.ch.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setOpen(false)
    setTimeout(() => {
      setSuccess(false)
      setError(null)
    }, 300)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Nous contacter"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#1B2D5B] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#1B2D5B]/90 hover:shadow-xl active:scale-95"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Nous contacter</span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          onClick={handleClose}
        />
      )}

      {/* Modal */}
      <div
        className={`fixed bottom-0 right-0 z-50 w-full sm:bottom-6 sm:right-6 sm:w-[420px] transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-t-2xl sm:rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#1B2D5B] px-5 py-4">
            <div>
              <p className="font-semibold text-white text-sm">Nous contacter</p>
              <p className="text-xs text-white/60 mt-0.5">Réponse sous 48h ouvrables</p>
            </div>
            <button
              onClick={handleClose}
              className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            {success ? (
              <div className="flex flex-col items-center py-6 text-center gap-3">
                <CheckCircle className="h-12 w-12 text-[#3DBFA0]" />
                <p className="font-semibold text-[#1B2D5B]">Message envoyé !</p>
                <p className="text-sm text-muted-foreground">
                  Nous reviendrons vers vous dans les 48 heures ouvrables.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 rounded-lg border border-gray-200 px-4 py-2 text-sm text-[#1B2D5B] hover:bg-gray-50 transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="mb-1 block text-xs font-medium text-[#1B2D5B]">
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sujet"
                    required
                    value={form.sujet}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20"
                  >
                    <option value="" disabled>Choisir un sujet…</option>
                    {SUJETS_CONTACT.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-[#1B2D5B]">
                    Votre nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Prénom Nom"
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-[#1B2D5B]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="vous@exemple.ch"
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-[#1B2D5B]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande…"
                    className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#1B2D5B] outline-none focus:border-[#3DBFA0] focus:ring-2 focus:ring-[#3DBFA0]/20 resize-none"
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#3DBFA0] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3DBFA0]/90 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Envoi en cours…" : "Envoyer"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
