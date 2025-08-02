'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MainNav } from '@/components/marketing/site/header/main-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { useAuth } from '@/components/providers/auth-provider'
import { ArrowRight } from 'lucide-react'

export function SiteHeader() {
    const { isAuthenticated, user } = useAuth()

    return (
        <header className="sticky  h-[70px] top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-full items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">{/* Search can go here later */}</div>
                    <nav className="flex items-center space-x-2">
                        {/* {isAuthenticated ? (
                            <div className="flex items-center space-x-2">
                                <Link href="/dashboard" className='hover:underline text-sm'>Welcome, {user?.firstName}</Link>
                                <span className="text-sm text-muted-foreground"></span>
                                <Button asChild variant="default"></Button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Button asChild variant="ghost">
                                    <Link href="/auth/login">Sign In</Link>
                                </Button>
                                <Button asChild>
                                    <Link href="/auth/create-account">Get Started</Link>
                                </Button>  
                            </div>
                        )} */}
                        {/* <ModeToggle /> */}
                        <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                            <Link href="/waitlist">
                                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
