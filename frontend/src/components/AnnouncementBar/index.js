import React from 'react'
import Container from '../Container'

export default function AnnouncementBar() {
    return (
        <div className="bg-red-500 py-2 bg-brand text-white text-center text-sm">
            <Container className="relative [&_a]:after:absolute [&_a]:after:inset-0 [&_a]:underline">
                Join the waitlist for{' '}
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    Laravel Cloud
                </a>
                , the future of shipping.
            </Container>
        </div>
    )
}
