import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // enable manual dark mode toggling via a `.dark` class on <html>
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#4fc4cb',
          50: '#f2fbfb',
          100: '#e6f7f7',
        },
        cyan: {
          DEFAULT: '#2dd4bf',
          50: '#f0fdfa',
        },
        primary: '#4fc4cb',
        'deep-blue': '#020617',
        'deep-blue-dark': '#00041a', // darker version for dark mode backgrounds
        'dark-blue': '#0b0f3b',
        'slate-blue': '#000b5c',
        surface: '#0b1220',
        'surface-light': '#141a2c',
        muted: '#94a3b8',
        neon: '#2af998',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fadeIn': 'fadeIn 0.3s ease-out',
        'slideDown': 'slideDown 0.3s ease-out',
        'scale-up': 'scaleUp 0.8s ease-in-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
