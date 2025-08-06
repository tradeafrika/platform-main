'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ProductLogo from './items/product-logo'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function MainNav() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/categories', label: 'All categories' },
        { href: '/contact', label: 'Contact' },

        // Add more routes here if needed
    ]

    return (
        <div className="flex items-center justify-between w-full md:w-auto">


            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 ml-6 text-sm font-medium">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            'transition-colors uppercase hover:text-foreground/80 font-medium',
                            pathname === link.href ? 'text-green-600' : 'text-green-950'
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Mobile Toggle Button (hidden on md+) */}
            <div className="md:hidden ml-auto">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-2 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav Menu */}
            {mobileOpen && (
                <div className="absolute top-[70px] left-0 z-40 w-full bg-white shadow-md md:hidden">
                    <nav className="flex flex-col items-start px-4 py-4 space-y-4 text-sm font-medium">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    'transition-colors hover:text-foreground/80',
                                    pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    )
}
