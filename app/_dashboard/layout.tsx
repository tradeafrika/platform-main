'use client'

import type React from 'react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ModeToggle } from '@/components/mode-toggle'
import {
    Bell,
    Building,
    ChevronDown,
    FileText,
    Home,
    LogOut,
    Menu,
    MessageSquare,
    Package,
    Settings,
    ShoppingBag,
    ShoppingCart,
    Store,
    User,
} from 'lucide-react'
import commonLogo from "@/assets/tradeafrikalogo.png"
import Image from 'next/image'


interface NavItem {
    title: string
    href: string
    icon: React.ElementType
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [role, setRole] = useState<'buyer' | 'seller'>('buyer')
    const pathname = usePathname()
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    // Determine role from URL path
    useEffect(() => {
        if (pathname.includes('/dashboard/buyer')) {
            setRole('buyer')
        } else if (pathname.includes('/dashboard/seller')) {
            setRole('seller')
        }
    }, [pathname])

    const buyerNavItems: NavItem[] = [
        { title: 'Home', href: '/dashboard/', icon: Home },
        { title: 'Marketplace', href: '/dashboard/marketplace', icon: Store },
        { title: 'RFQs', href: '/dashboard/rfqs', icon: MessageSquare },
        { title: 'Orders', href: '/dashboard/orders', icon: ShoppingBag },
        { title: 'Invoices', href: '/dashboard/invoices', icon: FileText },
        { title: 'Saved', href: '/dashboard/saved', icon: ShoppingCart },
        { title: 'Settings', href: '/dashboard/settings', icon: Settings },
    ]

    const sellerNavItems: NavItem[] = [
        { title: 'Home', href: '/dashboard/home', icon: Home },
        { title: 'Products', href: '/dashboard/products', icon: Package },
        { title: 'RFQs', href: '/dashboard/rfqs', icon: MessageSquare },
        { title: 'Orders', href: '/dashboard/orders', icon: ShoppingBag },
        { title: 'Invoices', href: '/dashboard/invoices', icon: FileText },
        { title: 'Transactions', href: '/dashboard/transactions', icon: FileText },
        { title: 'Analytics', href: '/dashboard/analytics', icon: FileText },
        { title: 'Settings', href: '/dashboard/settings', icon: Settings },
    ]

    const navItems = role === 'buyer' ? buyerNavItems : sellerNavItems

    const toggleRole = () => {
        const newRole = role === 'buyer' ? 'seller' : 'buyer'
        setRole(newRole)

        // Redirect to the corresponding home page
        window.location.href = `/dashboard/${newRole}/home`
    }

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar for desktop */}
            <aside className="hidden md:flex w-64 flex-col   bg-white dark:bg-gray-950 dark:border-gray-800">
                <div className="flex h-14 items-center  px-4">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Image src={commonLogo} width="40" height="40" alt="product-logo" />
                        <span className="hidden font-bold sm:inline-block">Trade Afrika</span>
                    </Link>
                </div>
                <nav className="flex-1 overflow-auto py-4">
                    <div className="px-4 mb-4">
                        <Button
                            variant="outline"
                            className="w-full justify-start gap-2 bg-transparent"
                            onClick={toggleRole}
                        >
                            {role === 'buyer' ? (
                                <>
                                    <ShoppingBag className="h-4 w-4" />
                                    <span>Buyer View</span>
                                </>
                            ) : (
                                <>
                                    <Building className="h-4 w-4" />
                                    <span>Seller View</span>
                                </>
                            )}
                            <ChevronDown className="ml-auto h-4 w-4" />
                        </Button>
                    </div>
                    <div className="space-y-1 px-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                    pathname === item.href
                                        ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
                                        : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                                }`}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>
               
            </aside>

            {/* Mobile sidebar */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon" className="absolute left-4 top-3 z-40">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                    <div className="flex h-14 items-center border-b px-4">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <span className="text-xl font-bold">
                                Trade<span className="text-primary">Afrika</span>
                            </span>
                        </Link>
                    </div>
                    <nav className="flex-1 overflow-auto py-4">
                        <div className="px-4 mb-4">
                            <Button
                                variant="outline"
                                className="w-full justify-start gap-2 bg-transparent"
                                onClick={toggleRole}
                            >
                                {role === 'buyer' ? (
                                    <>
                                        <ShoppingBag className="h-4 w-4" />
                                        <span>Buyer View</span>
                                    </>
                                ) : (
                                    <>
                                        <Building className="h-4 w-4" />
                                        <span>Seller View</span>
                                    </>
                                )}
                                <ChevronDown className="ml-auto h-4 w-4" />
                            </Button>
                        </div>
                        <div className="space-y-1 px-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                        pathname === item.href
                                            ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50'
                                            : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                                    }`}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </nav>
                    <div className="border-t p-4">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">John Doe</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Main content */}
            <div className="flex flex-1 flex-col">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4  bg-white px-4 dark:bg-gray-950 dark:border-gray-800">
                    <div className="md:hidden w-6" />
                    <div className="ml-auto flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                        <ModeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>
                <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
            </div>
        </div>
    )
}
