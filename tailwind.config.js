/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 20s ease-in-out infinite',
        'float-medium': 'float 18s ease-in-out infinite',
        'float-reverse': 'float-reverse 25s ease-in-out infinite',
        'shine': 'shine 8s ease-in-out infinite',
        'shine-delayed': 'shine 8s ease-in-out 3.5s infinite',
        'chevron': 'chevron 1.5s ease-in-out infinite',
        'arrow': 'arrow 1.5s ease-in-out infinite',
        'width': 'width 1.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(30px, 40px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-40px, -30px)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '150%' },
        },
        chevron: {
          '0%, 100%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(0px)' },
        },
        arrow: {
          '0%, 100%': { transform: 'translateX(0px)', opacity: '1' },
          '50%': { transform: 'translateX(4px)', opacity: '0.7' },
        },
        width: {
          '0%': { width: '0%' },
          '100%': { width: '40%' },
        },
      },
    },
  },
  plugins: [],
};
