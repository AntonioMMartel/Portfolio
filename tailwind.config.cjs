const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        cassandra: ["Cassandra", "sans-serif"],
        custom2: ["Custom-2", "sans-serif"],
      },
    }
  },

  plugins: [forms, typography, daisyui]
};

module.exports = config;