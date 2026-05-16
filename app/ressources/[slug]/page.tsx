"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function RessourcesSlugRedirect() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const slug = pathname.split("/").pop() ?? ""
    router.replace("/formations/" + slug + "?tab=ressources")
  }, [pathname, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-[#1B2D5B] text-sm">Redirection...</p>
    </div>
  )
}
