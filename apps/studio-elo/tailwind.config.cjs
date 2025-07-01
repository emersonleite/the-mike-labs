/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#fdf5f3',
        text: '#4B4B4B',
        primary: '#d6a39c',
        secondary: '#D81B60',
        secondaryDark: '#AD1457',
        muted: '#C2B8B5',
        dark: '#0F0F0F',
        dark1: '#1a1a1a',
        dark2: '#2a2a2a',
        border: '#eadcdc',
        card: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
};
