/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'main-yellow': "var(--main-yellow)",
        'main-blue': "var(--main-blue)",
        'fade-blue': "var(--fade-blue)",
      },
    },
  },
  plugins: [],
};
