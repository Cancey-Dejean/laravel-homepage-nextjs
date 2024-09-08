'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <>
            {/* <Navigation user={user} /> */}

            <div className="grid grid-cols-[1fr_auto_1fr]">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default AppLayout
