import '@/app/global.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { scandiaBold, scandiaMedium, scandiaRegular } from '@/utils/fonts'

const RootLayout = ({ children }) => {
    return (
        <html
            lang="en"
            className={`${scandiaMedium.variable} ${scandiaBold.variable}`}>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
