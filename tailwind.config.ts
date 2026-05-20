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
        // Corpo de texto: Inter — ótima legibilidade em mobile e telas pequenas
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Títulos e headlines: Clash Display — identidade visual premium
        heading: ['var(--font-clash)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          mint: '#00C896',
          'mint-light': '#E0F7ED',
          charcoal: '#131313',
          'charcoal-2': '#1C1B1B',
          surface: '#F8FBF9',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 200, 150, 0.10)',
        card: '0 12px 35px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 200, 150, 0.4)' },
          '50%': { boxShadow: '0 0 0 14px rgba(0, 200, 150, 0)' },
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
