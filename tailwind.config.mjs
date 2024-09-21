import colors from 'tailwindcss/colors';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: ['Raleway', 'sans-serif'],
            serif: ['Georgia', 'serif'],
        },
        extend: {
            colors: {
                gray: colors.zinc,
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1920px',
        },
    },
    variants: {},
    plugins: [],
};
