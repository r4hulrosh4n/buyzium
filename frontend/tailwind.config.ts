import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        primary1: "#363738",
        secondary: "#F5F5F5",
        secondary1: "#FFFFFF",
        bg: "#FAFAFA",
        text: "#FAFAFA",
        text1: "#7D8184",
        text2: "#000000",
        button: "#000000",
        secondary2: "#DB4444",
        button1: "#00FF66",
        button2: "#DB4444",
        hoverButton: "#E07575",
        hoverButton2: "#A0BCE0",
      },
      blur: {
        '4xl': '180px', // Custom blur class
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "poppins",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
