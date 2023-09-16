/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"var(--color-primary)",
        secondary: "var(--color-secondary)",
        text:"var(--color-text)"
      }
    },
  },
  plugins: [],
}
