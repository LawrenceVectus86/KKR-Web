/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cornflower-blue": "#6495ED",
        chicago: "#555555",
      },
      dropShadow: {
        cornflower: "0 30px 50px rgba(54, 123, 247, 0.25)",
      },
    },
  },
  plugins: [],
};
