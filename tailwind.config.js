/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./pages/**/*.{js, jsx}', './components/**/*.{js, jsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      'bg-light': '#DCDCDC',
      'text-light': '#888888',
      // bg
      'back-dark': '#16181d', // '#080110'
      // forms
      'purp-text': '#A357FF',
      'purp-light': '#F3E9FF',
      'purp-dark': '#0F061A',
      'purp-bdr-light': '#CFA7FF',
      'purp-bdr-dark': '#594A6E',
      'input-light': '#ffffff',
      'input-dark': '#232833',
      'phold-light': '#BAB7BB',
      'phold-dark': '#989898',
      'callout-light': '#EBEDF0',
      'callout-dark': '#1d2433',
      'callout-dark-bdr': '#212b41',

      // border
      'bdr-light': '#C5C5C5',
      'bdr-dark': '#232833'
    },
    extend: {
      screens: {
        xs: '450px'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: '#62a5f7',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            },
            img: {
              margin: 0
            },
            figure: {
              margin: 0
            },
            hr: {
              margin: '1.4rem 0',
              color: theme('colors.gray-500')
            },
            blockquote: {
              'border-left-color': theme('colors.zinc.400'),
              '&:before': {
                content: 'hh'
              },
              '&:after': {
                content: 'hh'
              }
            }
          }
        }
      }),
      animation: {
        'bounce-1s': 'bounce-1s 1s'
      },
      keyframes: {
        'bounce-1s': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30%)' },
          '60%': { transform: 'translateY(-15%)' } 
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
