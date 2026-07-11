import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        delta: {
          blue: "#005BFF",
          orange: "#FF6A00",
          ink: "#050816",
          card: "#0D1325",
          cyan: "#19D5D1",
          rose: "#F54D86"
        }
      }
    }
  }
};

export default config;
