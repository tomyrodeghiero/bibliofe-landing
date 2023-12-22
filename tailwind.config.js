/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: {
          100: "#F2F2F2",
          200: "#F5F3F3",
          400: "#F7F6F2",
          900: "#FFFFFF",
        },
        black: {
          200: "#333333",
          900: "#000000",
        },
        gray: {
          100: "#E9E9E9",
          200: "#EDE9E9",
          300: "#BDBDBD",
          400: "#A0A0A0",
          400: "#828282",
          500: "#4F4F4F",
          600: "#333333",
        },
        red: {
          400: "#FF6161",
        },
        sky: {
          200: "#019ee3",
          400: "#4994fb",
          500: "#87C2E4",
          700: "#75C9EE",
          900: "#266A8B",
        },
        purple: {
          400: "#656ED3",
        },
        blue: {
          900: "#222C57",
        },
        yellow: {
          700: "#EDB957",
        },
      },
    },
  },
  plugins: [],
};
