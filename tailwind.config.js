/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      screens: {
        tamañoComputadora: { min: "1920px" }, // Escritorio: mínimo ancho 1920px
        tamañoCelular: { max: "340px" }, // Móvil: máximo ancho 340px
      }
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Tipografía Poppins
        quicksand: ["Quicksand", "sans-serif"], // Tipografía Quicksand
      },
      colors: {

        FondoColor: "#303030", // Colores de fondo
        FondoEspecial: "#021D66", // Para sección especial
        FondoColor2: "#1C1C1C", // Color de fondo adicional
        TextoColor: "#FFFFFF", // Color del texto
        TextoEspecial: "#4DD4EF", // Colores del texto especial
      },
        FondoColor:'#303030', //Colores de fondo
        FondoEspecial:'#021D66', //Para seccion especial
        FondoColor2:'#1C1C1C', //Color de fondo
        TextoColor:'#FFFFFF', //color del texto
        TextoEspecial: '#4DD4EF', //colores del texto especial


      }

    },
  },
  plugins: [],
};
