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
      // fontSize: {
      //   // nav: ["22px", { lineHeight: "1" }],
      //
      //   nav: "22px",
      // },
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
      fontSize: {
        "display-lg": [
          "clamp(1.96rem, calc(1.58rem + 1.91vw), 3.01rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.015em",
            fontWeight: "800",
          },
        ],
        "display-md": [
          "clamp(1.8rem, calc(1.5rem + 1.49vw), 2.62rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.015em",
            fontWeight: "800",
          },
        ],
        h1: [
          "clamp(1.66rem, calc(1.43rem + 1.14vw), 2.28rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.02em",
            fontWeight: "700",
          },
        ],
        h2: [
          "clamp(1.4rem, calc(1.28rem + 0.61vw), 1.73rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.02em",
            fontWeight: "600",
          },
        ],
        h3: [
          "clamp(1.29rem, calc(1.2rem + 0.41vw), 1.51rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.025em",
            fontWeight: "600",
          },
        ],
        h4: [
          "clamp(1.18rem, calc(1.13rem + 0.24vw), 1.32rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.025em",
            fontWeight: "500",
          },
        ],
        h5: [
          "clamp(1.13rem, calc(1.1rem + 0.17vw), 1.23rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.03em",
            fontWeight: "500",
          },
        ],
        h6: [
          "clamp(1.09rem, calc(1.07rem + 0.11vw), 1.15rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.03em",
            fontWeight: "500",
          },
        ],
        "body-xl": [
          "clamp(1.04rem, calc(1.03rem + 0.05vw), 1.07rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        body: [
          "clamp(1rem, calc(1rem + 0vw), 1rem)",
          {
            lineHeight: "1.6",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "clamp(0.96rem, calc(0.97rem + -0.05vw), 0.93rem)",
          {
            lineHeight: "1.7",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        "caption-lg": [
          "clamp(0.92rem, calc(0.94rem + -0.09vw), 0.87rem)",
          {
            lineHeight: "1.7",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        caption: [
          "clamp(0.88rem, calc(0.91rem + -0.12vw), 0.81rem)",
          {
            lineHeight: "1.7",
            letterSpacing: "0.03em",
            fontWeight: "400",
          },
        ],
        "caption-sm": [
          "clamp(0.85rem, calc(0.88rem + -0.16vw), 0.76rem)",
          {
            lineHeight: "1.7",
            letterSpacing: "0.03em",
            fontWeight: "300",
          },
        ],
        overline: [
          "clamp(0.81rem, calc(0.85rem + -0.18vw), 0.71rem)",
          {
            lineHeight: "1.7",
            letterSpacing: "0.03em",
            fontWeight: "500",
          },
        ],
      },
      // fontSize: {
      //   "display-lg": [
      //     "39px",
      //     { lineHeight: "1.6", letterSpacing: "0.015em", fontWeight: "800" },
      //   ],
      //   "display-md": [
      //     "35px",
      //     { lineHeight: "1.6", letterSpacing: "0.015em", fontWeight: "800" },
      //   ],
      //   h1: [
      //     "31px",
      //     { lineHeight: "1.6", letterSpacing: "0.02em", fontWeight: "700" },
      //   ],
      //   h2: [
      //     "25px",
      //     { lineHeight: "1.6", letterSpacing: "0.02em", fontWeight: "600" },
      //   ],
      //   h3: [
      //     "22px",
      //     { lineHeight: "1.6", letterSpacing: "0.025em", fontWeight: "600" },
      //   ],
      //   h4: [
      //     "20px",
      //     { lineHeight: "1.6", letterSpacing: "0.025em", fontWeight: "500" },
      //   ],
      //   h5: [
      //     "19px",
      //     { lineHeight: "1.6", letterSpacing: "0.03em", fontWeight: "500" },
      //   ],
      //   h6: [
      //     "18px",
      //     { lineHeight: "1.6", letterSpacing: "0.03em", fontWeight: "500" },
      //   ],
      //   "body-xl": [
      //     "17px",
      //     { lineHeight: "1.6", letterSpacing: "0.03em", fontWeight: "400" },
      //   ],
      //   body: [
      //     "16px",
      //     { lineHeight: "1.6", letterSpacing: "0.03em", fontWeight: "400" },
      //   ],
      //   "body-sm": [
      //     "15px",
      //     { lineHeight: "1.7", letterSpacing: "0.03em", fontWeight: "400" },
      //   ],
      //   "caption-lg": [
      //     "14px",
      //     { lineHeight: "1.7", letterSpacing: "0.03em", fontWeight: "400" },
      //   ],
      //   caption: [
      //     "14px",
      //     { lineHeight: "1.7", letterSpacing: "0.03em", fontWeight: "400" },
      //   ],
      //   "caption-sm": [
      //     "13px",
      //     { lineHeight: "1.7", letterSpacing: "0.03em", fontWeight: "300" },
      //   ],
      //   overline: [
      //     "12px",
      //     { lineHeight: "1.7", letterSpacing: "0.03em", fontWeight: "500" },
      //   ],
      // },
    },
  },
  plugins: [],
};
export default config;
