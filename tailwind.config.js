/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "440px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      brand_primary: "#000000",
      brand_primaryFade: "#f9fafb",
      brand_secondary: "#6b7280",
      brand_success: "#27AE60",
      brand_warning: "#E2B93B",
      brand_error: "#EB5757",
      white: "#FFFFFF",
    },
    fontFamily: {
      prima: ["Prima", "sans-serif"],
    },
  },
  plugins: [],
};
