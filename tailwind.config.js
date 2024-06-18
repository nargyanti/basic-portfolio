/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#378E87",
                "primary-dark": "#003B36",
                "primary-content": "#D5EFED",
                "primary-light": "#FDFEFF",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.700"),
                        a: {
                            color: "#378E87",
                            "&:hover": {
                                color: "#003B36",
                            },
                        },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
