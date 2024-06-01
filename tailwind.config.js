/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#378E87",
                "primary-dark": "#00635B",
                secondary: "#DCF3EF",
                light: "#FDFEFF",
            },
        },
    },
    plugins: [],
};
