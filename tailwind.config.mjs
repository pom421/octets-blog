/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
    },
    // align with dsfr
    screens: {
      sm: "36em", // 576 px
      md: "48em", // 768 px
      lg: "62em", // 992 px
      xl: "78em", // 1248 px
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      primary: {
        700: "var(--color-primary-700)",
        500: "var(--color-primary-500)",
        300: "var(--color-primary-300)",
      },
      secondary: {
        700: "var(--color-secondary-700)",
        500: "var(--color-secondary-500)",
        300: "var(--color-secondary-300)",
      },
      tertiary: {
        700: "var(--color-tertiary-700)",
        500: "var(--color-tertiary-500)",
        300: "var(--color-tertiary-300)",
      },
      success: {
        700: "var(--color-tag-vert-font)",
        300: "var(--color-tag-vert-bg)",
      },
      warning: {
        700: "var(--color-tag-jaune-font)",
        300: "var(--color-tag-jaune-bg)",
      },
      error: {
        700: "var(--color-tag-rouge-font)",
        300: "var(--color-tag-rouge-bg)",
      },
    },
  },
  plugins: [],
};
