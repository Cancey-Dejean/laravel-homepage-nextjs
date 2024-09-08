import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center border border-transparent font-scandia-bold text-sm',
    {
        variants: {
            variant: {
                default: 'bg-brand text-white',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline: 'border-brand text-brand',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'bg-neutral-transparent hover:bg-neutral-100',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                default: 'py-2 px-4',
                sm: 'rounded-md px-3',
                lg: 'rounded-md px-8',
                icon: 'h-10 w-10 rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
