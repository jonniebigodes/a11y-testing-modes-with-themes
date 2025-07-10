/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#444555",
          secondary: "#2d2d3a",
          text: "#e5e7eb",
          "text-muted": "#9ca3af",
        },
      },
    },
  },
  plugins: [],
};
