/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
    fontFamily: {
      "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
    },
    screens: {
      sm: "36em",
      md: "48em",
      lg: "62em",
      xl: "78em",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "colors.black",
      white: "colors.white",
      gray: "colors.gray",
      yellow: "colors.yellow",
      blue: "colors.blue",
      red: "colors.red",
      primary: {
        300: "var(--color-primary-300)",
        500: "var(--color-primary-500)",
        700: "var(--color-primary-700)",
      },
      secondary: {
        300: "var(--color-secondary-300)",
        500: "var(--color-secondary-500)",
        700: "var(--color-secondary-700)",
      },
      tertiary: {
        300: "var(--color-tertiary-300)",
        500: "var(--color-tertiary-500)",
        700: "var(--color-tertiary-700)",
      },
      success: {
        300: "var(--color-tag-vert-bg)",
        700: "var(--color-tag-vert-font)",
      },
      warning: {
        300: "var(--color-tag-jaune-bg)",
        700: "var(--color-tag-jaune-font)",
      },
      error: {
        300: "var(--color-tag-rouge-bg)",
        700: "var(--color-tag-rouge-font)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
