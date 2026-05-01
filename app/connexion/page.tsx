"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function ConnexionPage() {
  const [tab, setTab] = useState<"login" | "register">("login")
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
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessageType("error")
      setMessage("Email ou mot de passe incorrect.")
    } else {
      router.push("/dashboard")
    }
    setLoading(false)
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

    const { data: institution } = await supabase
      .from("institutions")
      .select("id, nom, statut")
      .eq("code_acces", codeInstitution.toUpperCase())
      .single()

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

    await new Promise(resolve => setTimeout(resolve, 1000))

const { error: liaisonError } = await supabase
  .from("institution_profils")
  .insert({
    profil_id: authData.user.id,
    institution_id: institution.id,
    role: "collaborateur",
    statut: "actif"
  })

    if (liaisonError) {
  setMessageType("error")
  setMessage("Erreur rattachement : " + liaisonError.message + " - code: " + liaisonError.code)
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
        <img src="/logo-lerna360-bleu.png" alt="LERNA360" className="h-32 w-auto mx-auto" />
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
            <p className="text-center text-sm text-[#3DBFA0] cursor-pointer hover:underline">
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
      </div>

      <a href="/" className="mt-6 text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors">
        Retour à l accueil
      </a>
    </div>
  )
}