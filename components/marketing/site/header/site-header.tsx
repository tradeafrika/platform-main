'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import MainNav from '@/components/marketing/site/header/main-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { useAuth } from '@/components/providers/auth-provider'
import { ArrowRight } from 'lucide-react'
import ProductLogo from './items/product-logo'

export function SiteHeader() {
    const { isAuthenticated, user } = useAuth()

    return (
        <header className="sticky h-[70px] top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-full items-center justify-between">
                {/* Logo - always visible */}
                <ProductLogo />
                <MainNav />

                <div className="hidden md:flex items-center space-x-2">
                    <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                        <Link href="/waitlist">
                            Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
