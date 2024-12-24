/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : {
          DEFAULT: "#FCF4DC",
          tinted: "#F2EFEA",
          dark: "#3C3C3C",
        },
        secondary: {
          DEFAULT: "#F2EFEA",
          dark: "#3C3C3C",
        },
        tertiary: {
          DEFAULT: "#99947F",
        }
      },
    },
  },
  plugins: [],
};
