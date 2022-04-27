const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
