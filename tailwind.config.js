/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#ffffff",
          secondary: "#f8fafc",
          text: "#1e293b",
          "text-muted": "#64748b",
        },
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
