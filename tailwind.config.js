/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: {
                    'dark': '#001c35', // Blu scuro
                    'medium': '#0d263d',   // Blu medio
                    'light': '#0d375d',    // Blu chiaro
                },

                background: {
                    'screen': '#f7f7fc', //sfondo pagina
                    'color-box': '#ffffff', //sfondo contenitori
                },

            },
            fontFamily: {
                LOVELO: ['LOVELO', 'sans-serif'],        // Font LOVELO
                Quicksand: ['Quicksand', 'sans-serif'],  // Font Quicksand
                ALLROUNDER: ['ALLROUNDER', 'sans-serif'],// Font ALLROUNDER
                Titilium: ['Titilium', 'sans-serif'],    // Font Titilium
            },
        },
    },
    plugins: [],
  // NOTE: Update this to include the paths to all of your component files.
  content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          'dark': ' #001c35', // Blu scuro
          'medium': '# #0d263d',   // Blu medio
          'light': ' #0d375d',    // Blu chiaro
        },

        background: {
          'screen': '  #f7f7fc', //sfondo pagina
          'color-box': ' #ffffff', //sfondo contenitori
        },
      },
      fontFamily: {
        LOVELO: ['LOVELO', 'sans-serif'],        // Font LOVELO
        Quicksand: ['Quicksand', 'sans-serif'],  // Font Quicksand
        ALLROUNDER: ['ALLROUNDER', 'sans-serif'],// Font ALLROUNDER
        Titilium: ['Titilium', 'sans-serif'],    // Font Titilium
      },
    },
  },
  plugins: [],
}