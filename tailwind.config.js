/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { gray, blue, green, yellow, red } = require('./constants/customColors')

module.exports = {
    content: ['./pages/**/*.{js, jsx}', './app/**/*.tsx', './components/**/*.{js, jsx}'],
    darkMode: 'class',
    theme: {
        colors: {
            ...colors,
            gray: {
                ...colors.gray,
                ...gray,
            },

            blue: {
                ...colors.blue,
                ...blue,
            },

            yellow: {
                ...colors.yellow,
                ...yellow,
            },

            green: {
                ...colors.green,
                ...green,
            },

            red: {
                ...colors.red,
                ...red,
            },

            'bg-light': '#DCDCDC',
            'text-light': '#888888',

            // bg
            'back-dark': gray[13], // '#080110'
            'back-light': '#fff',

            // forms
            'input-light': colors.gray[100],
            'input-dark': gray['14'],
            'input-light-outline': gray[2],
            'input-dark-outline': gray[10],

            // text color
            light: colors.gray['300'],
            lighter: colors.gray['100'],

            dark: colors.gray[600],
            darker: '#000',

            // border
            'bdr-light': gray[0],
            'bdr-dark': gray[10],
        },
        extend: {
            screens: {
                xs: '450px',
            },
            boxShadow: {
                'around-sm': '0px 0px 5px 3px rgba(0, 0, 0, 0.1), 0px 0px 4px 1px rgba(0, 0, 0, 0.1)',
                'around-md': '0px 0px 8px 6px rgba(0, 0, 0, 0.1), 0px 0px 4px 1px rgba(0, 0, 0, 0.1)',
                'around-lg': '0px 0px 11px 8px rgba(0, 0, 0, 0.1), 0px 0px 4px 1px rgba(0, 0, 0, 0.1)',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': theme('colors.gray[600]'),
                        '--tw-prose-headings': '#000',
                        '--tw-prose-invert-body': theme('colors.gray[300]'), // text color dark mode
                        '--tw-prose-invert-headings': theme('colors.gray[200]'),

                        a: {
                            color: '#62a5f7',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                        img: {
                            margin: 0,
                        },
                        figure: {
                            margin: 0,
                        },
                        hr: {
                            margin: '1.4rem 0',
                            color: theme('colors.gray-500'),
                        },
                        blockquote: {
                            'border-left-color': theme('colors.zinc.400'),
                        },
                    },
                },
            }),
            animation: {
                'bounce-1s': 'bounce-1s 1s',
            },
            keyframes: {
                'bounce-1s': {
                    '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                    '40%': { transform: 'translateY(-30%)' },
                    '60%': { transform: 'translateY(-15%)' },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
