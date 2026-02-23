import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#0e1117",
                foreground: "#e6edf3",
                sidebar: "#0b0f14",
                "card-hover": "#1a1f27",
                card: {
                    DEFAULT: "#161b22",
                    foreground: "#e6edf3",
                },
                primary: {
                    DEFAULT: "#58a6ff",
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "#21262d",
                    foreground: "#8b949e",
                },
                border: "#30363d",
                accent: {
                    DEFAULT: "#2AF598",
                    foreground: "#0e1117",
                },
                player: "#121820",
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
