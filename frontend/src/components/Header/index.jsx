import LoginLinks from '@/app/LoginLinks'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'
import AnnouncementBar from '../AnnouncementBar'
import { Button } from '../Button'

export const Header = () => {
    return (
        <>
            <AnnouncementBar />
            <header className="py-6">
                <Container
                    size="base"
                    className="flex justify-between items-center gap-4">
                    <div className="relative flex items-center gap-x-5">
                        <Link href="/" className="after:absolute after:inset-0">
                            <Image
                                src="/images/logomark-min.svg"
                                alt="Laravel"
                                width={48}
                                height={48}
                            />
                        </Link>

                        <Image
                            src="/images/logotype.svg"
                            alt="Laravel"
                            width={114}
                            height={27}
                        />
                    </div>

                    <nav>Menu</nav>
                    <div className="flex items-center gap-x-4">
                        <LoginLinks />
                        <Button variant="outline" className="font-scandia-bold">
                            Get Started
                        </Button>
                    </div>
                </Container>
            </header>
        </>
    )
}
