/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            kaushan: ['Kaushan Script'],
            cormorant: ['cormorant']
        },
        boxShadow: {
            glare: '0 0 10px 2px rgba(255, 255, 255, 0.1), 0 0 20px 4px rgba(255, 255, 255, 0.1), 0 0 30px 6px rgba(255, 255, 255, 0.1)'
        }
    },
    plugins: []
};
