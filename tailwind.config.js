/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: '"Outfit", serif',
        poppins: '"Poppins", serif',
        edu: '"Edu AU VIC WA NT Arrows", serif',
        play: '"Playwrite VN", serif',
        ubuntu: '"Ubuntu", serif',
        oswald: '"Oswald", serif',
        open: '"Open Sans", serif',
      },
      animation: {
        "gradient-x": "gradientX 15s ease infinite",
        "text-slide-up": "textSlideUp 1s ease-out forwards",
        typewriter: "typewriter 4s steps(30) 1s forwards", // Typing animation
        float: "float 6s ease-in-out infinite", // Floating background shapes
      },
      keyframes: {
        gradientX: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        textSlideUp: {
          "0%": { transform: "translateY(30px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
