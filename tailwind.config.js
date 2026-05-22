/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'orange-color': '#ff4d05',
        'orange-50': '#fff5f0',
        'orange-100': '#ffe8d9',
        'orange-200': '#ffc9a6',
        'orange-300': '#ffa673',
        'orange-400': '#ff8340',
        'orange-500': '#ff4d05',
        'orange-600': '#e04404',
        'orange-700': '#b33603',
        'orange-800': '#802702',
        'orange-900': '#4d1701',
        'neutral-750': '#2a2a2a',
        'neutral-850': '#1a1a1a',
        'neutral-950': '#0d0d0d',
      },
      backgroundImage: {
        home: "url('src/assets/background.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'orange-color': '#ff4d05',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 77, 5, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 77, 5, 0.6)' },
        },
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}
