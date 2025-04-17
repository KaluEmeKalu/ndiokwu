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
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        secondary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.primary.600"),
              "&:hover": {
                color: theme("colors.primary.800"),
              },
            },
            h1: {
              color: theme("colors.gray.900"),
            },
            h2: {
              color: theme("colors.gray.800"),
            },
            h3: {
              color: theme("colors.gray.800"),
            },
            h4: {
              color: theme("colors.gray.800"),
            },
            blockquote: {
              borderLeftColor: theme("colors.primary.500"),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.400"),
              "&:hover": {
                color: theme("colors.primary.300"),
              },
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            blockquote: {
              borderLeftColor: theme("colors.primary.600"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

export default config; 