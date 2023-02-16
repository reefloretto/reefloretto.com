const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./mdx-components.tsx", "./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
