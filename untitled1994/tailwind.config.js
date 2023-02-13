/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,md}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      }
    },
  },
  plugins: [],
}
