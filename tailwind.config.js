/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    large: "1000px",
    xl: "1440px",
    xl2: "1536px",
    xl3: "2560px",
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
