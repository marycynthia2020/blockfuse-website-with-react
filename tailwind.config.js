/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/images/background.svg')",
        web2: "url('/backdrop11.jpeg')",
        web3: "url('/backdrop21.jpeg')",
      },
    },
  },
  plugins: [],
}