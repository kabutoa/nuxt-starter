// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}'],
  ignores: ['.gitignore']
})
