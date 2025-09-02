
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        neon: {
          purple: '#9b87f5',
          blue: '#33C3F0',
          pink: '#D946EF',
          orange: '#F97316',
        },
        cyber: {
          dark: '#121212',
          darker: '#0a0a0a',
          black: '#000000e6',
        },
        'cyber-light': {
          dark: '#f5f5f5',
          darker: '#e5e5e5',
          black: '#ffffff',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'glow': {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(155, 135, 245, 0.8), 0 0 15px rgba(155, 135, 245, 0.5), 0 0 20px rgba(155, 135, 245, 0.4)' 
          },
          '50%': { 
            textShadow: '0 0 10px rgba(155, 135, 245, 1), 0 0 30px rgba(155, 135, 245, 0.8), 0 0 40px rgba(155, 135, 245, 0.6)' 
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'pulse-neon': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(155, 135, 245, 0.8), 0 0 15px rgba(155, 135, 245, 0.5)'
          },
          '50%': {
            boxShadow: '0 0 15px rgba(155, 135, 245, 1), 0 0 30px rgba(155, 135, 245, 0.8)'
          }
        },
        'flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '1'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4'
          }
        },
        'slideDown': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slideUp': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slideLeft': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slideRight': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'zoomIn': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'zoomOut': {
          '0%': {
            transform: 'scale(1.2)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'rotateIn': {
          '0%': {
            transform: 'rotate(-10deg) scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotate(0) scale(1)',
            opacity: '1',
          },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 3s ease-in-out infinite',
        'flicker': 'flicker 3s linear infinite',
        'slideDown': 'slideDown 1s ease-out',
        'slideUp': 'slideUp 1s ease-out',
        'slideLeft': 'slideLeft 1s ease-out',
        'slideRight': 'slideRight 1s ease-out',
        'zoomIn': 'zoomIn 1s ease-out',
        'zoomOut': 'zoomOut 1s ease-out',
        'rotateIn': 'rotateIn 1s ease-out',
        'glitch': 'glitch 0.8s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
