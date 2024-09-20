/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        "zg-teal": "#009BA6",
        "zg-dark-0": "#182634",
        "zg-dark-1": "#0E1216",
        "zg-coral": "#EF6363",
        "white": "#f1f1f1",
      },
      fontSize: {
        "body-1": ["1rem", { lineHeight: "150%", fontWeight: "400" }],
        "body-1-semibold": ["1rem", { lineHeight: "150%", fontWeight: "600" }],
        "body-1-bold": ["1rem", { lineHeight: "150%", fontWeight: "800" }],
        "body-2": ["1.125rem", { lineHeight: "150%", fontWeight: "400" }],
        "body-2-semibold": ["1.125rem", { lineHeight: "150%", fontWeight: "600" }],
        "body-2-bold": ["1.125rem", { lineHeight: "150%", fontWeight: "800" }],
        "body-3": ["1.25rem", { lineHeight: "150%", fontWeight: "400" }],
        "body-3-semibold": ["1.25rem", { lineHeight: "150%", fontWeight: "600" }],
        "body-3-bold": ["1.25rem", { lineHeight: "150%", fontWeight: "800" }],

        "utility-1": ["1rem", { lineHeight: "150%", letterSpacing: "30%", fontWeight: "600" }],
        "utility-1-bold": ["1rem", { lineHeight: "150%", letterSpacing: "30%", fontWeight: "800" }],
        "utility-2": ["1.125rem", { lineHeight: "150%", letterSpacing: "30%", fontWeight: "600" }],
        "utility-2-bold": ["1.125rem", { lineHeight: "150%", letterSpacing: "30%", fontWeight: "800" }],
        "utility-3": ["1.25rem", { lineHeight: "150%", letterSpacing: "30%", fontWeight: "600" }],
        "utility-3-bold": ["1.25rem", { lineHeight: "150%", letterSpacing: "30%", fontWeight: "800" }],

        "heading-1": ["2.25rem", { lineHeight: "115%", fontWeight: "400" }],
        "heading-1-semibold": ["2.25rem", { lineHeight: "115%", fontWeight: "600" }],
        "heading-1-bold": ["2.25rem", { lineHeight: "115%", fontWeight: "800" }],
        "heading-2": ["2rem", { lineHeight: "115%", fontWeight: "400" }],
        "heading-2-semibold": ["2rem", { lineHeight: "115%", fontWeight: "600" }],
        "heading-2-bold": ["2rem", { lineHeight: "115%", fontWeight: "800" }],
        "heading-3": ["1.8125rem", { lineHeight: "135%", fontWeight: "400" }],
        "heading-3-semibold": ["1.8125rem", { lineHeight: "135%", fontWeight: "600" }],
        "heading-3-bold": ["1.8125rem", { lineHeight: "135%", fontWeight: "800" }],
        "heading-4": ["1.625rem", { lineHeight: "135%", fontWeight: "400" }],
        "heading-4-semibold": ["1.625rem", { lineHeight: "135%", fontWeight: "600" }],
        "heading-4-bold": ["1.625rem", { lineHeight: "135%", fontWeight: "800" }],
        "heading-5": ["1.4375rem", { lineHeight: "150%", fontWeight: "400" }],
        "heading-5-semibold": ["1.4375rem", { lineHeight: "150%", fontWeight: "600" }],
        "heading-5-bold": ["1.4375rem", { lineHeight: "150%", fontWeight: "800" }],
        "heading-6": ["1.25rem", { lineHeight: "150%", fontWeight: "400" }],
        "heading-6-semibold": ["1.25rem", { lineHeight: "150%", fontWeight: "600" }],
        "heading-6-bold": ["1.25rem", { lineHeight: "150%", fontWeight: "800" }],

        "display-1": ["2.875rem", { lineHeight: "115%", fontWeight: "400" }],
        "display-1-bold": ["2.875rem", { lineHeight: "115%", fontWeight: "800" }],
        "display-2": ["3.25rem", { lineHeight: "115%", fontWeight: "400" }],
        "display-2-bold": ["3.25rem", { lineHeight: "115%", fontWeight: "800" }],

        "microcopy-1": ["0.75rem", { lineHeight: "150%", fontWeight: "400" }],
        "microcopy-1-semibold": ["0.75rem", { lineHeight: "150%", fontWeight: "600" }],
        "microcopy-1-bold": ["0.75rem", { lineHeight: "150%", fontWeight: "800" }],
        "microcopy-2": ["0.875rem", { lineHeight: "150%", fontWeight: "400" }],
        "microcopy-2-semibold": ["0.875rem", { lineHeight: "150%", fontWeight: "600" }],
        "microcopy-2-bold": ["0.875rem", { lineHeight: "150%", fontWeight: "800" }],
      },
      boxShadow: {
        "zg": "0px 301px 84px rgba(6, 8, 10, 0.01), 0px 193px 77px rgba(6, 8, 10, 0.07), 0px 108px 65px rgba(6, 8, 10, 0.23), 0px 48px 48px rgba(6, 8, 10, 0.38), 0px 12px 27px rgba(6, 8, 10, 0.44)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
