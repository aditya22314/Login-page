/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mantis': '#74C365',
        'heliotrope': '#DF73FF',
        'hunyadi-yellow': '#FFD200',
        'blue-ncs': '#0087BD',
      }, 
      textColor: {
        'light-gray': '#ccc',
      },
      fontSize: {
        '7xl': '5rem',  // You can adjust the size as needed
        '8xl': '6rem',  // You can adjust the size as needed
        // Add more custom text sizes as needed
      },
    },
  },
  plugins: [],
}

