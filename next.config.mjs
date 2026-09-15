/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/licences", destination: "/tarifs", permanent: true },
      // Accès libre refermé (voir ACCES_LIBRE_OUVERT dans content/decouverte).
      // Le lien a circulé par e-mail et en messagerie, et Google l'a indexé :
      // sans cette redirection, ces clics tomberaient sur un 404. Temporaire
      // (307), parce que l'adresse reprendra du service à la réouverture — un
      // 308 la ferait désindexer et resterait en cache chez les visiteurs.
      { source: "/decouvrir/:slug", destination: "/formations-ressources", permanent: false },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ['puppeteer-core', '@sparticuz/chromium-min'],
}

export default nextConfig
