/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      ibm: ['"IBM Plex Sans Hebrew"', 'sans-serif'],
      hebo: ['Heebo', 'sans-serif'],
    },
    extend: {
      colors: {
        navy: '#123a6b',
        'navy-deep': '#0c2749',
        gold: '#e4bc3a',
        'gold-soft': '#f6e7a8',
        cream: '#f7f4ee',
        ink: '#1c1917',
        'main-yellow': 'var(--main-yellow)',
        'main-blue': 'var(--main-blue)',
        'fade-blue': 'var(--fade-blue)',
      },
      boxShadow: {
        card: '0 10px 30px -18px rgba(12, 39, 73, 0.35)',
        lift: '0 18px 40px -24px rgba(12, 39, 73, 0.45)',
      },
      maxWidth: {
        site: '1120px',
      },
    },
  },
  plugins: [],
};
