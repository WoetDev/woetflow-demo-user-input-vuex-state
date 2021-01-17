module.exports = {
  purge: {
    content: [
      "./plugins/vuetailwind-settings.js",
      "node_modules/vue-tailwind/dist/*.js",
      "./public/**/*.html",
      "./src/**/*.vue"
    ],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"]
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
