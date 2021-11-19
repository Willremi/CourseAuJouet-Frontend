module.exports = {

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'sm': {
        'min': '320px',
        'max': '503px'
      },
      'md': {
        'min': '504px',
        'max': '1024px'
      },
      'lg': {
        'min': '1025px',
        'max': '1280px'
      },
      'xl': {
        'min': '1281px',
        'max': '1535px'
      },
      '2xl': {
        'min': '1536px'
      },
    },
    
    extend: {

      zIndex: {
        '-10': '-10',
       },

      animation: {
        FadeIn: 'FadeIn 1s ease-in-out',
        
       },
      keyframes: {
        FadeIn: {
          '0%': { opacity : 0 },
          '100%': { opacity: 1 },
        },
       
       },
      backgroundOpacity: ['active'],

      colors: {
        primary: {
          '10': '#b3d9ff',
          '200': '#80bfff',
          '300': '#4da6ff',
          '400': '#1a8cff',
          '500': "#0B84FF",
          '600': '#0073e6',
          '700': '#0066cc',
          '800': '#004d99',
          '900': '#004080',
        },
        secondary: {
          '100': '#fad5b7',
          '200': '#f7ba88',
          '300': '#f39e58',
          '400': '#f08228',
          '500': "#ed7410",
          '600': '#d7690f',
          '700': '#bf5d0d',
          '800': '#a7510c',
          '900': '#8f460a',
        }, 
        nav: {
          'yellow': '#FFEECC', 
          'yellowClar': '#FFF8EA',
          'blue': '#33658A', 
          'blueClar': '#4FA5E3',
          'greyClar': '#DEDEDE', 
        },
      }, 
      fontFamily: {
        police: ['Montserrat Alternates'],
      }
    }
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled"
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
