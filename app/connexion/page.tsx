"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

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

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { prenom, nom } }
    })

    if (authError || !authData.user) {
      setMessageType("error")
      setMessage("Erreur lors de la création du compte : " + authError?.message)
      setLoading(false)
      return
    }

    const { error: inscriptionError } = await supabase.rpc("inscrire_utilisateur", {
      p_prenom: prenom,
      p_nom: nom,
      p_email: email,
      p_institution_id: institution.id,
    })

    if (inscriptionError) {
      setMessageType("error")
      setMessage("Erreur rattachement : " + inscriptionError.message)
      setLoading(false)
      return
    }

    setMessageType("success")
    setMessage("Compte créé avec succès. Vérifiez votre email pour confirmer votre inscription.")
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <img src="/logo-learna-compact.png" alt="LEARNA" className="h-28 w-auto mx-auto" />
      </div>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <div className="flex mb-6 border-b border-gray-200">
          <button
            onClick={() => { setTab("login"); setMessage("") }}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${tab === "login" ? "border-b-2 border-[#3DBFA0] text-[#1B2D5B]" : "text-gray-400"}`}
          >
            Se connecter
          </button>
          <button
            onClick={() => { setTab("register"); setMessage("") }}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${tab === "register" ? "border-b-2 border-[#3DBFA0] text-[#1B2D5B]" : "text-gray-400"}`}
          >
            Créer un compte
          </button>
          {tab === "forgot" && (
            <button className="pb-3 px-4 text-sm font-medium border-b-2 border-[#3DBFA0] text-[#1B2D5B]">
              Mot de passe oublié
            </button>
          )}
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${messageType === "error" ? "bg-red-50 border border-red-200 text-red-700" : "bg-[#f0faf8] border border-[#3DBFA0] text-[#1B2D5B]"}`}>
            {message}
          </div>
        )}

        {tab === "login" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="votre@email.ch"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="••••••••"
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-[#1B2D5B] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#152347] transition-colors disabled:opacity-50"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
            <p
              onClick={() => { setTab("forgot"); setMessage("") }}
              className="text-center text-sm text-[#3DBFA0] cursor-pointer hover:underline"
            >
              Mot de passe oublié ?
            </p>
          </div>
        )}

        {tab === "register" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Prénom</label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Marie"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Nom</label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Dupont"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="votre@email.ch"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Code institution</label>
              <input
                type="text"
                value={codeInstitution}
                onChange={(e) => setCodeInstitution(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0] uppercase"
                placeholder="Ex: AVOP2024"
              />
              <p className="text-xs text-gray-400 mt-1">Code fourni par votre institution</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Confirmer le mot de passe</label>
              <input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="••••••••"
              />
            </div>
            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full bg-[#3DBFA0] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors disabled:opacity-50"
            >
              {loading ? "Création..." : "Créer mon compte"}
            </button>
          </div>
        )}

        {tab === "forgot" && (
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Saisissez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </p>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="votre@email.ch"
                onKeyDown={(e) => e.key === "Enter" && handleForgotPassword()}
              />
            </div>
            <button
              onClick={handleForgotPassword}
              disabled={loading}
              className="w-full bg-[#3DBFA0] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors disabled:opacity-50"
            >
              {loading ? "Envoi en cours..." : "Envoyer le lien"}
            </button>
            <p
              onClick={() => { setTab("login"); setMessage("") }}
              className="text-center text-sm text-gray-400 cursor-pointer hover:text-[#1B2D5B] transition-colors"
            >
              ← Retour à la connexion
            </p>
          </div>
        )}
      </div>

      <a href="/" className="mt-6 text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors">
        Retour à l accueil
      </a>
    </div>
  )
}