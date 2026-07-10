// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ✅ Black & White Theme
        primary: {
          DEFAULT: '#000000',
          light: '#333333',
          lighter: '#666666',
          dark: '#1a1a1a',
          darker: '#0a0a0a',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          dark: '#0a0a0a',
          light: '#2a2a2a',
        },
        accent: {
          DEFAULT: '#333333',
          light: '#666666',
        },
        brand: {
          black: '#000000',
          blackLight: '#1a1a1a',
          white: '#ffffff',
          gray: '#666666',
          lightGray: '#e5e5e5',
        },
      },
      boxShadow: {
        'black': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'black-lg': '0 10px 40px rgba(0, 0, 0, 0.25)',
        'white': '0 4px 20px rgba(255, 255, 255, 0.15)',
        'white-lg': '0 10px 40px rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
}