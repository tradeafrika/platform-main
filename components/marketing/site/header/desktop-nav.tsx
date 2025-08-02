// components/marketing/site/header/desktop-nav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ProductLogo from './items/product-logo'

export function DesktopNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <ProductLogo />
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {[
                    { href: '/about', label: 'About' },
                    { href: '/privacy', label: 'Privacy' },
                ].map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            'transition-colors hover:text-foreground/80',
                            pathname === href ? 'text-foreground' : 'text-foreground/60'
                        )}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
