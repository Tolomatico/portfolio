import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'color-cycle': 'colorChange 3s infinite',
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#3b82f6' },
          '25%': { color: '#34d399' },
          '50%': { color: '#D32F2F' }
        }
      }

    },
  },
  plugins: [],
} satisfies Config;
