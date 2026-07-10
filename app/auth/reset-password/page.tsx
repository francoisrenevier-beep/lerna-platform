"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Lock, Eye, EyeOff, AlertCircle, Loader2 } from "lucide-react"

type PageState = "loading" | "form" | "expired" | "success"

type PasswordFieldProps = {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  autoFocus?: boolean
}

function PasswordField({ id, label, value, onChange, autoFocus }: PasswordFieldProps) {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#1B2D5B] mb-1.5">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <Lock className="w-4 h-4" />
        </span>
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="new-password"
          autoFocus={autoFocus}
          placeholder="••••••••"
          className="w-full border border-gray-200 rounded-xl pl-10 pr-11 py-2.5 text-sm bg-white transition-shadow focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] focus:border-transparent"
        />
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setVisible(!visible)}
          aria-label={visible ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1B2D5B] transition-colors"
        >
          {visible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  const [pageState, setPageState] = useState<PageState>("loading")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    // createBrowserClient processes the URL hash automatically and fires PASSWORD_RECOVERY
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setPageState("form")
      }
    })

    // Fallback: if we already have a session (e.g. page refresh after recovery)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setPageState((prev) => (prev === "loading" ? "form" : prev))
      }
    })

    // If no recovery event fires within 4s, the link is invalid or expired
    const timeout = setTimeout(() => {
      setPageState((prev) => (prev === "loading" ? "expired" : prev))
    }, 4000)

    return () => {
      subscription.unsubscribe()
      clearTimeout(timeout)
    }
  }, [])

  const handleSubmit = async () => {
    setError("")

    if (!password || !passwordConfirm) {
      setError("Veuillez remplir les deux champs.")
      return
    }
    if (password !== passwordConfirm) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }
    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.")
      return
    }

    setSubmitting(true)
    const { error: updateError } = await supabase.auth.updateUser({ password })
    setSubmitting(false)

    if (updateError) {
      setError(
        updateError.message.includes("expired")
          ? "Ce lien a expiré. Veuillez demander un nouveau lien de réinitialisation."
          : "Une erreur est survenue. Veuillez réessayer ou demander un nouveau lien."
      )
      return
    }

    setPageState("success")
    setTimeout(() => router.push("/dashboard"), 2500)
  }

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      {/* Décor d'arrière-plan */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ top: -140, right: -100, width: 420, height: 420, background: "rgba(61,191,160,0.08)", filter: "blur(10px)" }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{ bottom: -160, left: -120, width: 460, height: 460, background: "rgba(27,45,91,0.06)", filter: "blur(10px)" }}
      />

      <div className="relative z-10 mb-6 text-center">
        <a href="/">
          <img src="/logo-learna-compact.png" alt="LEARNA" className="h-24 w-auto mx-auto" />
        </a>
      </div>

      <div
        className="relative z-10 w-full max-w-md bg-white border border-gray-100 rounded-2xl p-8"
        style={{ boxShadow: "0 10px 40px rgba(27,45,91,0.08), 0 2px 8px rgba(27,45,91,0.04)" }}
      >

        {/* Loading */}
        {pageState === "loading" && (
          <div className="text-center py-6">
            <div className="w-8 h-8 border-2 border-[#3DBFA0] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm text-gray-500">Vérification du lien en cours…</p>
          </div>
        )}

        {/* Lien expiré ou invalide */}
        {pageState === "expired" && (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-[#1B2D5B] mb-2">Lien invalide ou expiré</h2>
            <p className="text-sm text-gray-500 mb-6">
              Ce lien de réinitialisation n'est plus valide. Les liens expirent après 24 heures.
            </p>
            <a
              href="/connexion"
              className="inline-block w-full bg-[#1B2D5B] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#152347] transition-colors text-center"
            >
              Retour à la connexion
            </a>
          </div>
        )}

        {/* Formulaire */}
        {pageState === "form" && (
          <div>
            <h2 className="text-xl font-semibold text-[#1B2D5B] mb-1">Nouveau mot de passe</h2>
            <p className="text-sm text-gray-500 mb-6">Choisissez un mot de passe sécurisé d'au moins 8 caractères.</p>

            {error && (
              <div className="mb-4 p-3 rounded-xl text-sm bg-red-50 border border-red-200 text-red-700 flex items-start gap-2.5" role="alert">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form
              className="space-y-4"
              onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
            >
              <PasswordField
                id="new-password"
                label="Nouveau mot de passe"
                value={password}
                onChange={setPassword}
                autoFocus
              />
              <PasswordField
                id="new-password-confirm"
                label="Confirmer le mot de passe"
                value={passwordConfirm}
                onChange={setPasswordConfirm}
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#3DBFA0] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#2ea88b] transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {submitting ? "Enregistrement…" : "Enregistrer le mot de passe"}
              </button>
            </form>
          </div>
        )}

        {/* Succès */}
        {pageState === "success" && (
          <div className="text-center py-4">
            <div className="w-12 h-12 bg-[#f0faf8] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#3DBFA0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-[#1B2D5B] mb-2">Mot de passe mis à jour</h2>
            <p className="text-sm text-gray-500">
              Votre mot de passe a été modifié. Vous allez être redirigé vers votre tableau de bord…
            </p>
          </div>
        )}
      </div>

      {pageState !== "success" && (
        <a href="/connexion" className="relative z-10 mt-6 text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors">
          ← Retour à la connexion
        </a>
      )}
    </div>
  )
}
