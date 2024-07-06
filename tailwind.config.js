/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "formkit.theme.ts",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
