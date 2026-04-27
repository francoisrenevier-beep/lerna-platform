"use client"

import { useState } from "react"

export default function ConnexionPage() {
  const [tab, setTab] = useState<"login" | "register">("login")

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#1B2D5B]">LERNA</h1>
        <p className="text-gray-500 text-sm mt-1">ancrer les compétences sur le terrain</p>
      </div>

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-200">
          <button
            onClick={() => setTab("login")}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${
              tab === "login"
                ? "border-b-2 border-[#3DBFA0] text-[#1B2D5B]"
                : "text-gray-400"
            }`}
          >
            Se connecter
          </button>
          <button
            onClick={() => setTab("register")}
            className={`pb-3 px-4 text-sm font-medium transition-colors ${
              tab === "register"
                ? "border-b-2 border-[#3DBFA0] text-[#1B2D5B]"
                : "text-gray-400"
            }`}
          >
            Créer un compte
          </button>
        </div>

        {/* Login */}
        {tab === "login" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="votre@email.ch"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Mot de passe</label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-[#1B2D5B] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#152347] transition-colors">
              Se connecter
            </button>
            <p className="text-center text-sm text-[#3DBFA0] cursor-pointer hover:underline">
              Mot de passe oublié ?
            </p>
          </div>
        )}

        {/* Register */}
        {tab === "register" && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Prénom</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Marie"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Nom</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                  placeholder="Dupont"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="votre@email.ch"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Mot de passe</label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1B2D5B] mb-1">Confirmer le mot de passe</label>
              <input
                type="password"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#3DBFA0]"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-[#3DBFA0] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#2ea88b] transition-colors">
              Créer mon compte
            </button>
          </div>
        )}
      </div>

      <a href="/" className="mt-6 text-sm text-gray-400 hover:text-[#1B2D5B] transition-colors">
        ← Retour à l'accueil
      </a>
    </div>
  )
}
