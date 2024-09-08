import localFont from 'next/font/local'

export const scandiaMedium = localFont({
    src: [
        {
            path: '../../public/fonts/scandia-web-medium.woff2',
            weight: '500',
        },
    ],
    variable: '--font-scandia-medium',
})

export const scandiaBold = localFont({
    src: [
        {
            path: '../../public/fonts/scandia-web-bold.woff2',
            weight: '700',
        },
    ],
    variable: '--font-scandia-bold',
})
