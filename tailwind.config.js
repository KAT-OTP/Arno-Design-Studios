/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050608',
        'surface-dark': '#090b10',
        'surface-card': '#0e1118',
        'surface-border': '#181d29',
        'obsidian-glass': 'rgba(10, 13, 20, 0.72)',
        electric: {
          blue: '#00f0ff',
          neon: '#00b4d8',
          deep: '#0284c7',
          glow: 'rgba(0, 240, 255, 0.25)',
          dark: '#0047ab'
        },
        slate: {
          muted: '#8e9aa8',
          dim: '#4b5563'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif']
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(0, 240, 255, 0.12) 0%, rgba(5, 6, 8, 0) 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(135deg, rgba(0,240,255,0.15) 0%, rgba(14,165,233,0.05) 50%, rgba(0,0,0,0) 100%)',
        'subtle-grain': 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(0,240,255,0.8))' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}