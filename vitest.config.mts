import { fileURLToPath } from "node:url"

import { defineConfig } from "vitest/config"

/**
 * Les premiers tests du dépôt n'importaient qu'en relatif et se passaient de
 * configuration. Dès qu'un test porte sur un module qui utilise l'alias `@/`
 * — la convention partout ailleurs dans le code — il faut le résoudre ici
 * aussi, faute de quoi le test échoue à l'import sans rien dire du sujet testé.
 *
 * Extension `.mts` : le dépôt n'est pas en `"type": "module"`, et un
 * `vitest.config.ts` serait chargé comme CommonJS, ce dont Vite avertit.
 */
export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL(".", import.meta.url)) },
  },
})
