import type { Metadata } from "next"

// Page d'authentification : titre propre et exclusion de l'indexation.
export const metadata: Metadata = {
  title: "Connexion — LEARNA",
  description:
    "Accédez à votre espace LEARNA avec le compte créé grâce au code de votre institution.",
  robots: { index: false, follow: false },
}

export default function ConnexionLayout({ children }: { children: React.ReactNode }) {
  return children
}
