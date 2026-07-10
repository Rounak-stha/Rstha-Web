/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const { gray, blue, green, yellow, red } = require('./constants/customColors')

module.exports = {
    // NOTE: extension should not be preceeded by a space  DONOT: {js, jsx, tsx} Do: {js,jsx,tsx}
    content: ['./pages/**/*.{js, jsx}', './app/**/*.tsx', './components/**/*.{js,jsx,tsx}'],
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
            editorial: {
                canvas: '#0d0d0d',
                surface: '#141414',
                text: '#e9e9e9',
                body: '#c9c9c9',
                copy: '#c6c6c6',
                subtle: '#b5b5b5',
                muted: '#8b8b8b',
                faint: '#656565',
                rule: '#292929',
                link: '#f5f5f5',
                code: '#101010',
            },
        },
        extend: {
            maxWidth: {
                reading: '42rem',
                article: '41rem',
                intro: '38rem',
            },
            spacing: {
                'editorial-nav': '2.15rem',
                'editorial-nav-compact': '1.6rem',
                'editorial-nav-bottom': '3.75rem',
                'editorial-nav-bottom-compact': '3.25rem',
                'editorial-intro': '3.7rem',
                'editorial-section': '1.9rem',
                'editorial-page': '3.3rem',
                'editorial-article': '3.25rem',
                'editorial-footer': '4.5rem',
            },
            fontSize: {
                'editorial-display': ['clamp(1.9rem, 5vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.045em' }],
                'editorial-title': ['clamp(2rem, 5vw, 2.5rem)', { lineHeight: '1.12', letterSpacing: '-0.045em' }],
                'editorial-section': ['1.5rem', { lineHeight: '1.25' }],
                'editorial-subsection': ['1.25rem', { lineHeight: '1.3' }],
                'editorial-post': ['1.2rem', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
                'editorial-project': ['1.125rem', { lineHeight: '1.3', letterSpacing: '-0.012em' }],
                'editorial-copy': ['0.94rem', { lineHeight: '1.55' }],
                'editorial-lede': ['1.2rem', { lineHeight: '1.5' }],
                'editorial-body': ['1.07rem', { lineHeight: '1.7' }],
                'editorial-meta': ['0.78rem', { lineHeight: '1.5', letterSpacing: '0.035em' }],
                'editorial-nav': ['0.8rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
                'editorial-nav-mobile': ['0.73rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
                'editorial-footer': ['0.72rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
                'editorial-code': ['0.84rem', { lineHeight: '1.65' }],
            },
            lineHeight: {
                editorial: '1.65',
                copy: '1.7',
                compact: '1.6',
            },
            letterSpacing: {
                display: '-0.045em',
                heading: '-0.02em',
            },
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
