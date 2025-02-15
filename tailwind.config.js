/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(8.25deg, #101118 1.96%, #10141A 32.08%, #101D23 54.16%, #102D33 75.25%, #104448 93.32%, #105255 102.36%)",
        "bronze-gradient":
          "linear-gradient(90deg, #5F1B00 0.02%, #964C2C 11.02%, #FFA87F 30.02%, #FFC7AE 36.01%, #FFDED1 40.01%, #FFE7DF 43.01%, #D17B5A 70.01%, #3F0600 100%)",
        "silver-gradient":
          "linear-gradient(90deg, #938388 0%, #FFEEDF 42%, #FFFFFF 51%, #E5DFDA 60%, #89777E 100%)",
        "gold-gradient":
          " linear-gradient(90deg, #8C6034 0%, #AC8140 16%, #FFD75F 51%, #EBC055 62%, #A67033 100%)",
        "dot-gradient":
          "linear-gradient(135deg, #66FCF1 14.65%, #56E1D8 20.31%, #248786 39.39%, #106466 48.59%, #166D67 57.78%, #26886C 74.04%, #35A070 85.35%)",
        "black-to-green-gradient":
          " linear-gradient(180.63deg, #101118 -5.81%, #102127 20.68%, #104C4F 73.68%, #106466 100.18%)",
        "blue-to-cyan-gradient":
          "linear-gradient(172.45deg, #106466 5.86%, #126866 26.28%, #1A7568 47.64%, #278A6C 70.85%, #35A070 87.56%)",
      },

      fontFamily: {
        gothamUltra: ["GothamUltra", "sans-serif"],
        gothamBook: ["GothamBook", "sans-serif"],
        gotham: ["GothamRegular", "sans-serif"],
      },
      colors: {
        primary: "#66FCF1",
      },
      screens: {
        "4xl": "2000px",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".gradient-border": {
          position: "relative",
          borderRadius: "0.5rem", // Adjust as needed
        },
        ".gradient-border::before": {
          content: '""',
          position: "absolute",
          inset: "0",
          padding: "2px", // Border thickness
          borderRadius: "inherit",
          background:
            "linear-gradient(90deg, #66FCF1 0%, #56E1D8 8%, #248786 35%, #106466 48%, #166D67 61%, #26886C 84%, #35A070 100%)",
          "-webkit-mask":
            "linear-gradient(white, white) content-box, linear-gradient(white, white)",
          "-webkit-mask-composite": "destination-out",
          "mask-composite": "exclude",
        },
      });
    },
  ],
};
