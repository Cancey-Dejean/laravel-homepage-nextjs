import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'

const containerVariants = cva('mx-auto w-full px-4', {
    variants: {
        size: {
            base: 'max-w-[72rem]',
        },
    },
    defaultVariants: {
        size: 'base',
    },
})

/**
 * Container component for wrapping content with consistent sizing and padding.
 * @param {Object} props - The component props.
 * @param {'base'} [props.size='base'] - The size variant of the container.
 * @param {React.ReactNode} props.children - The content to be wrapped by the container.
 * @param {string} [props.className] - Additional CSS classes to be applied to the container.
 * @returns {JSX.Element} A div element with the specified size and classes.
 */

export default function Container({ size, children, className, ...props }) {
    return (
        <div className={cn(containerVariants({ size }), className)} {...props}>
            {children}
        </div>
    )
}
