import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    backgroundImage: {
        "custom-text": "url('/chard1.jpg')",
        "custom-text-2": "url('/pik.jpg')",
        "custom-text-3": "url('/chard3.jpg')",
      },
      colors: {
        gold: "#FFD700",
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
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        textGlow: "textGlow 1.5s infinite",
      },
      keyframes: {
        textGlow: {
          "0%": {
            textShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f0f, 0 0 20px #f0f, 0 0 25px #f0f, 0 0 30px #f0f, 0 0 35px #f0f",
          },
          "50%": {
            textShadow:
              "0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0, 0 0 40px #ff0, 0 0 50px #ff0, 0 0 60px #ff0, 0 0 70px #ff0",
          },
          "100%": {
            textShadow:
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f0f, 0 0 20px #f0f, 0 0 25px #f0f, 0 0 30px #f0f, 0 0 35px #f0f",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
