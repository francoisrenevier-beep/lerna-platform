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
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    setMessage("")
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage("Erreur : " + error.message)
    } else {
      router.push("/dashboard")
    }
    setLoading(false)
  }

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      setMessage("Les mots de passe ne correspondent pas.")
      return
    }
    setLoading(true)
    setMessage("")
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { prenom, nom } }
    })
    if (error) {
      setMessage("Erreur : " + error.message)
    } else {
      setMessage("Compte cree. Verifiez votre email pour confirmer.")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#1B2D5B]">LERNA</h1>
        <p className="text-gray-500 text-sm mt-1">ancrer les competences sur le terrain</p>
      </div>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <div className="flex mb-6 border-b border-gray-200">
          <button
            onClick={() => setTab("login")}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${tab === "login" ? "border-b-2 border-[#3DBFA0] text-[#1B2D5B]" : "text-gray-400"}`}
          >
            Se connecter
          </button>
          <button
            onClick={() => setTab("register")}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${tab === "register" ? "border-b-2 border-[#3DBFA0] text-[#1B2D5B]" : "text-gray-400"}`}
          >
            Creer un compte
          </button>
        </div>

        {message && (
          <div className="mb-4 p-3 bg-[#f0faf8] border border-[#3DBFA0] rounded-lg text-sm text-[#1B2D5B]">
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
          </div>
        )}

        {tab === "register" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Prenom</label>
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
              {loading ? "Creation..." : "Creer mon compte"}
            </button>
          </div>
        )}
      </div>

      <a href="/" className="mt-6 text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors">
        ← Retour a l accueil
      </a>
    </div>
  )
}