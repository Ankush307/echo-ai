/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'wood-smoke': '#01000B',
                'dark-blue': '#1A1A23',
                'gray': '#B3B2B6',
            },
            backgroundImage: {
                heroBgImg: "url('/public/assets/images/webp/hero-bg-img.webp')",
            },
        },
    },
    plugins: [],
}