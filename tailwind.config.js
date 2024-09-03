/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      textColor: {
        'muted': '#868e96',
      },
      colors: {
        customYellow:{
          300:'#bcac76'
        },
        beige: {
          200: '#f5f5dc', // Custom beige color for background
        },
        custombeige: {
          100:'#faf0e6', // Custom beige color for background
        },
        customblue: {
          100:'#B1CCF3', // Custom beige color for background
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms')],
}

