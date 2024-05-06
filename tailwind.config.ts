import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: '#FFFFFF',
              50: '#FAFAFA',
              100: '#F4F4F5',
              200: '#E4E4E7',
              300: '#D4D4D8',
              400: '#A1A1AA',
              500: '#71717A',
              600: '#52525B',
              700: '#3F3F46',
              800: '#27272A',
              900: '#1D1D1B',
            },
            foreground: {
              DEFAULT: '#1D1D1B',
              50: '#FAFAFA',
              100: '#F4F4F5',
              200: '#E4E4E7',
              300: '#D4D4D8',
              400: '#A1A1AA',
              500: '#71717A',
              600: '#52525B',
              700: '#3F3F46',
              800: '#27272A',
              900: '#1D1D1B',
            },
            default: {
              foreground: '#000000',
              DEFAULT: '#D4D4D8',
              50: '#FAFAFA',
              100: '#F4F4F5',
              200: '#E4E4E7',
              300: '#D4D4D8',
              400: '#A1A1AA',
              500: '#71717A',
              600: '#52525B',
              700: '#3F3F46',
              800: '#27272A',
              900: '#1D1D1B',
            },
            primary: {
              foreground: '#FFFFFF',
              DEFAULT: '#3454D1',
              50: '#E7ECFF',
              100: '#CFD9FF',
              200: '#A0B3FF',
              300: '#708CFF',
              400: '#4066FF',
              500: '#3454D1',
              600: '#2B45AD',
              700: '#213585',
              800: '#17255C',
              900: '#0B122E',
            },
            secondary: {
              foreground: '#000000',
              DEFAULT: '#FFC533',
              50: '#FFF9EB',
              100: '#FFF3D6',
              200: '#FFE8AD',
              300: '#FFDC85',
              400: '#FFD15C',
              500: '#FFC533',
              600: '#DBAA2C',
              700: '#B38A24',
              800: '#8A6A1C',
              900: '#614B13',
            },
            success: {
              foreground: '#FFFFFF',
              DEFAULT: '#0F936D',
              50: '#D8FCF2',
              100: '#B2F8E4',
              200: '#64F2CA',
              300: '#17EBAF',
              400: '#13C290',
              500: '#0F936D',
              600: '#12a150',
              700: '#0E793C',
              800: '#0B7054',
              900: '#074735',
            },
            warning: {
              foreground: '#000000',
              DEFAULT: '#FE5D26',
              50: '#FFEFEA',
              100: '#fdedd3',
              200: '#FFBEA8',
              300: '#FE9E7D',
              400: '#FE7D51',
              500: '#FE5D26',
              600: '#DB4F21',
              700: '#B3411B',
              800: '#8A3215',
              900: '#61230F',
            },
            danger: {
              foreground: '#FFFFFF',
              DEFAULT: '#F25757',
              50: '#FDEEEE',
              100: '#FCDDDD',
              200: '#FABCBC',
              300: '#F79A9A',
              400: '#F57979',
              500: '#F25757',
              600: '#CF4A4A',
              700: '#A63C3C',
              800: '#7D2D2D',
              900: '#541E1E',
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
