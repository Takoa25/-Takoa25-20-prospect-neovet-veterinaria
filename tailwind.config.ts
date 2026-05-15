import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          green: '#019527',
          'green-dark': '#017a20',
          'green-light': '#e6f9eb',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(1, 92, 24, 0.12)',
        card: '0 12px 35px rgba(1, 92, 24, 0.1)',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(37, 211, 102, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
