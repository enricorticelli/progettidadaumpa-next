/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "champagne-pink": "#E8DBD6ff",
        seasalt: "#FBFAFAff",
        saffron: "#E3BF0Cff",
        telemagenta: "#CC1D6Eff",
        "slate-gray": "#818993ff",
        licorice: "#1F0E10ff",
        "polynesian-blue": "#0B4C91ff",
      },
    },
  },
  plugins: [],
};
