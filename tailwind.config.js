/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'dmmono': ['DM Mono', 'ui-sans-serif'],
      'montserrat': ['Montserrat', 'ui-sans-serif'],
      'roboto': ['Roboto', 'ui-sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/100tlexus.jpeg')",
      },
    },
  },
  plugins: [],
}

