import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mono: [
        "JetBrains Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "monospace",
      ],
      roboto: ["Roboto Condensed", "sans-serif"],
      serif: ["Palatino", "Georgia", "Times New Roman"],
      jetbrains: ["JetBrains Mono", "ui-monospace", "monospace"],
    },
    extend: {
      fontSize: {
        // nav: ["22px", { lineHeight: "1" }],

        nav: "22px",
      },
      colors: {
        primary: "#f9f9f9",
        primaryDark: "#494949",
        primaryGray: "#989e9f",
        purple: "#5918df",
        darkPurple: "#14121c",
        customPink: "#cc2b5e ",
        customPurple: "#753a88",
      },
      backgroundImage: {
        "start-page": "url('/background4.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
