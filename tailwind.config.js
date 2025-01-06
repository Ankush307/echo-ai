/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'wood-smoke': '#01000B',
            },
            backgroundImage: {
                heroBgImg: "url('/public/assets/images/webp/hero-bg-img.webp')",
            },
        },
    },
    plugins: [],
}