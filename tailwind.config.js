/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./client/src/**/*.jsx",
  ],
  theme: {
    fontFamily: {
      'dmmono': ['DM Mono', 'ui-sans-serif'],
      'montserrat': ['Montserrat', 'ui-sans-serif'],
      'roboto': ['Roboto', 'ui-sans-serif'],
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'oswald': ['Oswald', 'ui-sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('/home/100tlexus.jpeg')",
        'cdl': "url('esports//LAT.jpeg')",
        'val': "url('esports/val.jpeg')",
        'lcs': "url('esports/league.jpeg')"
      },
    },
  },
  plugins: [],
}

