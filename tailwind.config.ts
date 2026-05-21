import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-container": "#fdd897",
        "on-primary-container": "#8d9399",
        "on-secondary-fixed": "#271900",
        "secondary-fixed-dim": "#e6c182",
        "outline-variant": "#c4c7ca",
        "on-primary-fixed-variant": "#41474d",
        "surface-bright": "#f7f9ff",
        "background": "#f7f9ff",
        "on-surface-variant": "#44474a",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "inverse-primary": "#c1c7cd",
        "surface-container-high": "#e2e9f2",
        "primary": "#12181c",
        "error-container": "#ffdad6",
        "on-background": "#151c23",
        "tertiary": "#171713",
        "secondary": "#755a25",
        "on-error-container": "#93000a",
        "on-secondary-container": "#785c28",
        "secondary-fixed": "#ffdea7",
        "surface-container-low": "#eef4fd",
        "surface-container": "#e8eef8",
        "on-error": "#ffffff",
        "tertiary-fixed-dim": "#c9c6c0",
        "on-tertiary-fixed-variant": "#474742",
        "tertiary-container": "#2b2b27",
        "surface-tint": "#595f65",
        "on-primary-fixed": "#161c21",
        "tertiary-fixed": "#e5e2db",
        "surface": "#f7f9ff",
        "on-surface": "#151c23",
        "primary-fixed-dim": "#c1c7cd",
        "inverse-surface": "#2a3138",
        "on-tertiary": "#ffffff",
        "surface-variant": "#dce3ec",
        "on-secondary-fixed-variant": "#5b430f",
        "primary-container": "#262c31",
        "error": "#ba1a1a",
        "surface-container-highest": "#dce3ec",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed": "#1c1c18",
        "outline": "#74777b"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-desktop": "64px",
        "unit": "8px",
        "container-max": "1280px",
        "margin-mobile": "16px",
        "gutter": "24px"
      },
      fontFamily: {
        "headline-md": ["var(--font-montserrat)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-montserrat)", "sans-serif"],
        "display-lg": ["var(--font-montserrat)", "sans-serif"],
        "body-md": ["var(--font-montserrat)", "sans-serif"],
        "body-lg": ["var(--font-montserrat)", "sans-serif"],
        "headline-lg": ["var(--font-montserrat)", "sans-serif"],
        "label-md": ["var(--font-montserrat)", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg-mobile": ["28px", { lineHeight: "34px", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    },
  },
  plugins: [],
};

export default config;
