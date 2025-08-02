'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ProductLogo from './items/product-logo'

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <ProductLogo/>
            <nav className="flex items-center space-x-6 text-sm font-medium">
                {/* <Link
                    href="/marketplace"
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === '/marketplace' ? 'text-foreground' : 'text-foreground/60'
                    )}
                >
                    Marketplace
                </Link> */}
                {/* <Link
                    href="/suppliers"
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === '/suppliers' ? 'text-foreground' : 'text-foreground/60'
                    )}
                >
                    Suppliers
                </Link> */}
                <Link
                    href="/about"
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
                    )}
                >
                    About
                </Link>
                <Link
                    href="/privacy"
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === '/privacy' ? 'text-foreground' : 'text-foreground/60'
                    )}
                >
                    Privacy
                </Link>
                
                {/* <Link
                    href="/contact"
                    className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === '/contact' ? 'text-foreground' : 'text-foreground/60'
                    )}
                >
                    Contact
                </Link> */}
            </nav>
        </div>
    )
}
