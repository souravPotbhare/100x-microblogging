/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'neutral-50': '#f9f9f9',
        'neutral-100': '#F4F4F4',
        'neutral-200': '#E4E4E4',
        'neutral-300': '#D3D3D3',
        'neutral-400': '#A2A2A2',
        'neutral-500': '#737373',
        'neutral-600': '#525252',
        'neutral-700': '#404040',
        'neutral-800': '#262626',
        'neutral-900': '#171717',
        'neutral-950': '#0A0A0A',
        'neutral-1000': '#000000',
        'twitter-blue': '#1D9BF0',
        'twitter-blue-hover': '#1871CA',
        'twitter-blue-disabled': '#1E5D87',
        'blue-wash': 'rgb (117,190,239 / 0.2)',
        'button-stoke': '#546A7A',
        'searchbar-fill': '#212327',
        'card-fill': '#16181C',
        'success': '#00BE74',
        'error': '#8B141A',
        'border-blue': 'rgba(29, 155, 240, 0.24)',
      },

      fontFamily: {
        'Inter': ['Inter', 'sans-serif'],
        'Chirp': ['Chirp', 'sans-serif'],
      },

      fontSize: {
        'base': '1rem',
        '5xl': '1.5rem',
        'inherit': 'inherit',
      },

      padding: {
        '3.75': '15px',
        '23.25': '93px',
      },
      width: {
        '83.5': '334px',
        '106.5': '426px',
        '110.5': '442px',
        '150': '600px',
      },
      height: {
        '4.75': '19px',
        '8.75': '35px',
        '15': '60px',
      },
      borderRadius: {
        '4xl': '65px',
        '9999': '9999px',
      },
      // opacity{
      //   'null': '0.05',
      // },
    },
  },
  plugins: [],
}
