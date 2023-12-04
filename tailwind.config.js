/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            transitionProperty: {
                  'height': 'height',
                  'spacing': 'margin, padding',
            }
        }
    },
    accordion: {
        "&::-webkit-details-marker": {
          display: "none",
        },
    },
    plugins: []
}