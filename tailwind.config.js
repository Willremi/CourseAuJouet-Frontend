module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '504px'},
      'md': {'min': '505px', 'max': '1024px'},
      'lg': {'min': '1025px', 'max': '1280px'},
      'xl': {'min': '1281px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },


    extend: {

      backgroundOpacity: ['active'],
      animation: {
        fadeIn : "ModalFadeIn 150ms ease-in-out",
        fadeOut: "ModalFadeOut 150ms ease-in-out",
        OpenMobileDropDown: "OpenMobileModal 300ms ease-in-out",
        CloseMobileDropDown: "CloseMobileModal 300ms ease-in-out"
      },
      keyframes: theme => ({
        ModalFadeIn:{
          '0%' : {opacity : theme('opacity.0')},
          '100%': {opacity : theme('opacity.100')}
        },
        ModalFadeOut: {
          '0%' : {opacity : theme('opacity.100')},
          '100%': {opacity : theme('opacity.0')},
        },
        
        OpenMobileModal: {
          '0%' : {height : theme('height.0')},
          '100%': {height : theme('height.50')}
        },
        CloseMobileModal: {
          '0%' : {height : theme('height.50')},
          '100%': {height : theme('height.0')}
        }

      }),

      colors:{
        primary:{
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
        secondary:{
          '100': '#fad5b7',
          '200': '#f7ba88',
          '300': '#f39e58',
          '400': '#f08228',
          '500': "#ed7410",
          '600': '#d7690f',
          '700': '#bf5d0d',
          '800': '#a7510c',
          '900': '#8f460a',
        }


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
