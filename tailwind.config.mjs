/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--accent)",
        border: "var(--border-color)",
        imagebg: "var(--image-bg)",
      },
    },
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    boxShadow: {
      3: "var(--shadow-3)",
      2: "var(--shadow-2)",
      1: "var(--shadow-1)",
    },
    fontFamily: {
      heading: "var(--font-heading)",
      body: "var(--font-body)",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
};
