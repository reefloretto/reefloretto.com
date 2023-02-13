/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{md,mdx,js,ts,jsx,tsx}",
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
