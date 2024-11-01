/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta esta línea para incluir tus archivos
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-dark': '#3F6FF3',  // Azul oscuro
        'custom-blue-medium': '#6394f7',
        'custom-blue-light': '#95b9fb',
        'custom-blue-lighter': '#c0d4fd',
        'custom-blue-very-lighter': '#E8F0FE',

        // GRISES NEUTROS 
        'custom-gray-dark': '#434C61',  // Gris oscuro
        'custom-gray-medium': '#5E6C84', // Gris medio
        'custom-gray-light': '#EBEEF5',  // Gris claro
        'custom-gray-lighter': '#F8F9FC', // Gris muy claro
        'custom-white': '#FFFFFF',       // Blanco

        'custom-red': '#EA4335',       // Rojo
        'custom-green': '#0F9D58',       // Verde
      },
    },
  },
  plugins: [],
}


