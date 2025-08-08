module.exports = {
  darkMode: "class", // Use 'class' strategy for dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Add this to cover your App Router files
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
