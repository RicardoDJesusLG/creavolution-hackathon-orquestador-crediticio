/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: {
          ground: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          elevated: '#FFFFFF',
          subtle: '#F1F5F9',
        },
        brand: {
          emerald: '#059669',
          indigo: '#4F46E5',
          violet: '#7C3AED',
          amber: '#D97706',
          circulo: '#004F9F',
          syntage: '#6366F1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-indigo': '0 10px 25px -5px rgba(99, 102, 241, 0.25)',
        'glow-emerald': '0 10px 25px -5px rgba(16, 185, 129, 0.25)',
        'glow-card': '0 10px 30px -5px rgba(15, 23, 42, 0.06)',
        'glass-card': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
