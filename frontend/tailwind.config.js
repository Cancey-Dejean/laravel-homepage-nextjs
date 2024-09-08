module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            medium: ['var(--font-scandia-medium)', 'sans-serif'],
            'scandia-bold': ['var(--font-scandia-bold)', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            brand: 'var(--color-brand)',
            white: 'var(--color-white)',
            black: 'var(--color-black)',
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
