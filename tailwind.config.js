module.exports = {
  mode:"jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    screens: {
      'sm': {
        'min': '0px',
        'max': '504px'
      },
      'md': {
        'min': '505px',
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
      
      padding: {
        '1.75': '0.4375rem',
        '1.70': '0.400rem',
        '1.65': '0.37rem',
      },
      width: {
        '2/1': '200%',
        'screen-90': '90vw',
        'screen-50': '50vw',
        'screen-40': '40vw',
        'autocompletion': '97.4%',
        'autocompletion-lg': '94%',
        'autocompletion-md': '95.5%',
      },
      height:{
        'screen-40': '40vw',
        'screen-50': '50vw',
        '192' : '48rem'
      },
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
          '100': '#F6AE2D',
          '200': '#f9ca76',
          '300': '#f39e58',
          '400': '#f08228',
          '500': "#ed7410",
          '600': '#d7690f',
          '700': '#bf5d0d',
          '800': '#a7510c',
          'trash': '#F26419',
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
        Annie: ['Annie Use Your Telescope'],
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
