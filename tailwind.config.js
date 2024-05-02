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
        'color-primary': '#3871FF',
        'color-background': '#273344',
        'color-title': '#ffff',
        'color-text': '#9399A2',
        'color-title-dark': '#8A8A8A',
        'color-text-dark': '#8FB0FF',
      },
    },
  },
  plugins: [],
};
