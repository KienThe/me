/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-organize-imports"],
  semi: false,
  trailingComma: "none"
}

export default config
