// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // S'assurer que ce fichier est bien dans ton projet
    "./src/**/*.{js,ts,jsx,tsx}", // C'est là où tu écris ton code React
  ],
  theme: {
    extend: {
      fontFamily: {
        'almendra': ['"Almendra SC"', 'serif'],
      },
    },
  },
  plugins: [],
}