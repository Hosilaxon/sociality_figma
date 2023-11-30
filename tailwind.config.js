/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1160px",
        },
      },
      colors: {
        blue:{ 
        DEFAULT:"#4579CB",
    },
  },
      fontFamily: {
        "segoe-ui": "Segoe UI",
      },
    },
  },
  plugins: [],
};
