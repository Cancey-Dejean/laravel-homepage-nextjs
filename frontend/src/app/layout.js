import { Nunito } from 'next/font/google'
import '@/app/global.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
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
