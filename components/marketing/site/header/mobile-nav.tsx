// components/marketing/site/header/mobile-nav.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ProductLogo from './items/product-logo'

const links = [
    { href: '/about', label: 'About' },
    { href: '/privacy', label: 'Privacy' },
]

export function MobileNav() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            {/* Hamburger */}
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:bg-accent hover:text-foreground md:hidden"
                aria-label="Open menu"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* Drawer */}
            {open && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />

                    {/* Panel */}
                    <nav className="relative ml-auto flex h-full w-4/5 max-w-xs flex-col gap-6 bg-background px-6 py-8 shadow-lg">
                        {/* Close */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 rounded-md p-2 text-foreground/70 hover:bg-accent hover:text-foreground"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <ProductLogo />

                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                    'block text-lg font-medium transition-colors hover:text-foreground/80',
                                    pathname === href ? 'text-foreground' : 'text-foreground/60'
                                )}
                            >
                                {label}
                            </Link>
                        ))}

                        <Link
                            href="/waitlist"
                            className="mt-auto inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-3 text-sm font-medium text-white shadow hover:bg-orange-700"
                        >
                            Join Waitlist →
                        </Link>
                    </nav>
                </div>
            )}
        </>
    )
}
