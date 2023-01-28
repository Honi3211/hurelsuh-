/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hurelsuh: "#d1beb1",
      },
      animation: {
        shake: "shake 0.5s infinite",
        wiggle: "wiggle 0.4s ease-in-out",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(5px, 5px) rotate(0deg)" },
          "10%": { transform: "translate(-5px, -6px) rotate(-2deg)" },
          "20%": { transform: "translate(-8px, -5px) rotate(2deg)" },
          "30%": { transform: "translate(7px, 6px) rotate(0deg)" },
          "40%": { transform: "translate(-3px, -4px) rotate(2deg)" },
          "50%": { transform: "translate(-5px, -2px) rotate(-2deg)" },
          "60%": { transform: "translate(-7px, -3px) rotate(0deg)" },
          "70%": { transform: "translate(7px, 4px) rotate(-2deg)" },
          "80%": { transform: "translate(-5px, -5px) rotate(2deg)" },
          "90%": { transform: "translate(5px, 6px) rotate(0deg)" },
          "100%": { transform: "translate(-3px, -6px) rotate(-2deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "translate(-30px)" },
          "20%, 80%": { transform: "translate(20px)" },
          "40%, 60%": { transform: "translate(-10px)" },
          "50%": { transform: "translate(0px)" },
        },
      },
    },
  },
  plugins: [],
};
