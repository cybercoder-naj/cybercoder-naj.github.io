/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nero': '#222222',
        'nav-unselected': '#8f8f8f',
        'nav-selected': '#e8e8e8'
      },
      inset: {
        '-full': '-100%',
        '-1/20': '-5%'
      },
      borderWidth: {
        '10': '18px'
      },
      boxShadow: {
        'img-bg': '0 0 25px 0 rgba(0,0,0,.8)'
      }
    },
  },
  plugins: [],
}
