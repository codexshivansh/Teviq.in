/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        indigo: '#7653D6',
        sky: '#BBA0DE',
        zinc: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 0 1px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)',
        cardHover: '0 0 0 1px rgba(0,0,0,0.05), 0 16px 48px rgba(0,0,0,0.10)',
        dropdown: '0 16px 48px rgba(0,0,0,0.10)',
        demo: '0 40px 120px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.08)',
        chat: '0 24px 80px rgba(0,0,0,0.28)',
        highlight: '0 0 0 4px rgba(118,83,214,0.10), 0 18px 48px rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'teviq-column': 'linear-gradient(180deg, rgba(187,160,222,0.11), rgba(118,83,214,0.06))',
      },
    },
  },
  plugins: [],
};
