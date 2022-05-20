const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'text': '65ch',
      },
    },
  },
  plugins: [],
}
