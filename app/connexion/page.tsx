"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import {
  Mail, Lock, User, KeyRound, Eye, EyeOff,
  AlertCircle, CheckCircle2, ArrowLeft, ArrowRight, Loader2,
} from "lucide-react"

// ── Champs réutilisables ───────────────────────────────────────────────────────

type FieldProps = {
  id: string
  label: string
  icon: React.ReactNode
  hint?: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Field({ id, label, icon, hint, className, ...props }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#1B2D5B] mb-1.5">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </span>
        <input
          id={id}
          className={`w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm bg-white transition-shadow focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] focus:border-transparent ${className ?? ""}`}
          {...props}
        />
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  )
}

type PasswordFieldProps = {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  autoComplete?: string
  autoFocus?: boolean
}

function PasswordField({ id, label, value, onChange, autoComplete, autoFocus }: PasswordFieldProps) {
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
          autoComplete={autoComplete}
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

type SubmitButtonProps = {
  loading: boolean
  labelLoading: string
  children: React.ReactNode
  variant?: "navy" | "teal"
}

function SubmitButton({ loading, labelLoading, children, variant = "navy" }: SubmitButtonProps) {
  const colors =
    variant === "navy"
      ? "bg-[#1B2D5B] hover:bg-[#152347]"
      : "bg-[#3DBFA0] hover:bg-[#2ea88b]"
  return (
    <button
      type="submit"
      disabled={loading}
      className={`group w-full ${colors} text-white py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-60 shadow-sm hover:shadow-md`}
    >
      {loading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          {labelLoading}
        </>
      ) : (
        <>
          {children}
          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </>
      )}
    </button>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function ConnexionPage() {
  const [tab, setTab] = useState<"login" | "register" | "forgot">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [codeInstitution, setCodeInstitution] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error">("error")
  const router = useRouter()

  const changerTab = (t: "login" | "register" | "forgot") => {
    setTab(t)
    setMessage("")
  }

  const handleLogin = async () => {
    if (!email || !password) {
      setMessageType("error")
      setMessage("Veuillez remplir tous les champs.")
      return
    }
    setLoading(true)
    setMessage("")
    const { data: authData, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessageType("error")
      setMessage("Email ou mot de passe incorrect.")
    } else {
      const userId = authData.user?.id
      if (userId) {
        // Vérifie si super admin
        const { data: profil } = await supabase
          .from("profils")
          .select("est_super_admin")
          .eq("id", userId)
          .single()

        if (profil?.est_super_admin) {
          router.push("/admin/dashboard")
          return
        }

        // Vérifie d'abord si l'utilisateur est inactif dans son institution
        const { data: ipInactif } = await supabase
          .from("institution_profils")
          .select("statut")
          .eq("profil_id", userId)
          .eq("statut", "inactif")
          .limit(1)
          .single()

        const { data: ipActif } = await supabase
          .from("institution_profils")
          .select("role")
          .eq("profil_id", userId)
          .eq("statut", "actif")
          .limit(1)
          .single()

        if (ipInactif && !ipActif) {
          await supabase.auth.signOut()
          setMessageType("error")
          setMessage("Votre accès a été désactivé. Contactez votre responsable institution.")
          setLoading(false)
          return
        }

        const role = ipActif?.role
        if (role === "responsable") {
          router.push("/institution/dashboard")
        } else {
          router.push("/dashboard")
        }
      } else {
        router.push("/dashboard")
      }
    }
    setLoading(false)
  }

  const handleForgotPassword = async () => {
    if (!email) {
      setMessageType("error")
      setMessage("Veuillez saisir votre adresse email.")
      return
    }
    setLoading(true)
    setMessage("")
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    setLoading(false)
    if (error) {
      setMessageType("error")
      setMessage("Une erreur est survenue. Vérifiez l'adresse email et réessayez.")
    } else {
      setMessageType("success")
      setMessage("Un email de réinitialisation a été envoyé. Vérifiez votre boîte de réception.")
    }
  }

  const handleRegister = async () => {
    if (!prenom || !nom || !email || !password || !passwordConfirm || !codeInstitution) {
      setMessageType("error")
      setMessage("Veuillez remplir tous les champs.")
      return
    }
    if (password !== passwordConfirm) {
      setMessageType("error")
      setMessage("Les mots de passe ne correspondent pas.")
      return
    }
    if (password.length < 8) {
      setMessageType("error")
      setMessage("Le mot de passe doit contenir au moins 8 caractères.")
      return
    }
    setLoading(true)
    setMessage("")

    const { data: institutionRows } = await supabase
      .rpc("valider_code_institution", { code: codeInstitution })
    const institution = institutionRows?.[0] ?? null

    if (!institution) {
      setMessageType("error")
      setMessage("Code institution invalide. Vérifiez le code fourni par votre institution.")
      setLoading(false)
      return
    }

    if (institution.statut === "expire" || institution.statut === "inactif") {
      setMessageType("error")
      setMessage("La licence de votre institution est expirée ou inactive. Contactez votre responsable.")
      setLoading(false)
      return
    }

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { prenom, nom, institution_id: institution.id } }
    })

    if (authError) {
      setMessageType("error")
      setMessage("Erreur lors de la création du compte : " + authError.message)
      setLoading(false)
      return
    }

    setMessageType("success")
    setMessage("Compte créé avec succès. Vérifiez votre email pour confirmer votre inscription.")
    setLoading(false)
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
        {/* Onglets segmentés */}
        {tab !== "forgot" ? (
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6 gap-1" role="tablist">
            <button
              role="tab"
              aria-selected={tab === "login"}
              onClick={() => changerTab("login")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                tab === "login" ? "bg-white text-[#1B2D5B] shadow-sm" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Se connecter
            </button>
            <button
              role="tab"
              aria-selected={tab === "register"}
              onClick={() => changerTab("register")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                tab === "register" ? "bg-white text-[#1B2D5B] shadow-sm" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Créer un compte
            </button>
          </div>
        ) : (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#1B2D5B]">Mot de passe oublié</h2>
            <p className="text-sm text-gray-500 mt-1">
              Saisissez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </p>
          </div>
        )}

        {message && (
          <div
            className={`mb-4 p-3 rounded-xl text-sm flex items-start gap-2.5 ${
              messageType === "error"
                ? "bg-red-50 border border-red-200 text-red-700"
                : "bg-[#f0faf8] border border-[#3DBFA0]/40 text-[#1B2D5B]"
            }`}
            role="alert"
          >
            {messageType === "error" ? (
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#3DBFA0]" />
            )}
            <span>{message}</span>
          </div>
        )}

        {tab === "login" && (
          <form
            className="space-y-4"
            onSubmit={(e) => { e.preventDefault(); handleLogin() }}
          >
            <Field
              id="login-email"
              label="Email"
              icon={<Mail className="w-4 h-4" />}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.ch"
              autoComplete="email"
              autoFocus
            />
            <PasswordField
              id="login-password"
              label="Mot de passe"
              value={password}
              onChange={setPassword}
              autoComplete="current-password"
            />
            <SubmitButton loading={loading} labelLoading="Connexion...">
              Se connecter
            </SubmitButton>
            <button
              type="button"
              onClick={() => changerTab("forgot")}
              className="block w-full text-center text-sm text-[#3DBFA0] hover:underline"
            >
              Mot de passe oublié ?
            </button>
          </form>
        )}

        {tab === "register" && (
          <form
            className="space-y-4"
            onSubmit={(e) => { e.preventDefault(); handleRegister() }}
          >
            <div className="grid grid-cols-2 gap-3">
              <Field
                id="register-prenom"
                label="Prénom"
                icon={<User className="w-4 h-4" />}
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Marie"
                autoComplete="given-name"
                autoFocus
              />
              <Field
                id="register-nom"
                label="Nom"
                icon={<User className="w-4 h-4" />}
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Dupont"
                autoComplete="family-name"
              />
            </div>
            <Field
              id="register-email"
              label="Email"
              icon={<Mail className="w-4 h-4" />}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.ch"
              autoComplete="email"
            />
            <Field
              id="register-code"
              label="Code institution"
              icon={<KeyRound className="w-4 h-4" />}
              type="text"
              value={codeInstitution}
              onChange={(e) => setCodeInstitution(e.target.value)}
              placeholder="Ex: Learna2024"
              className="font-mono"
              hint="Code fourni par votre institution (majuscules/minuscules indifférentes)"
              autoComplete="off"
            />
            <PasswordField
              id="register-password"
              label="Mot de passe"
              value={password}
              onChange={setPassword}
              autoComplete="new-password"
            />
            <PasswordField
              id="register-password-confirm"
              label="Confirmer le mot de passe"
              value={passwordConfirm}
              onChange={setPasswordConfirm}
              autoComplete="new-password"
            />
            <SubmitButton loading={loading} labelLoading="Création..." variant="teal">
              Créer mon compte
            </SubmitButton>
          </form>
        )}

        {tab === "forgot" && (
          <form
            className="space-y-4"
            onSubmit={(e) => { e.preventDefault(); handleForgotPassword() }}
          >
            <Field
              id="forgot-email"
              label="Email"
              icon={<Mail className="w-4 h-4" />}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.ch"
              autoComplete="email"
              autoFocus
            />
            <SubmitButton loading={loading} labelLoading="Envoi en cours..." variant="teal">
              Envoyer le lien
            </SubmitButton>
            <button
              type="button"
              onClick={() => changerTab("login")}
              className="w-full flex items-center justify-center gap-1.5 text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Retour à la connexion
            </button>
          </form>
        )}
      </div>

      <a href="/" className="relative z-10 mt-6 text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors">
        ← Retour à l'accueil
      </a>
    </div>
  )
}
