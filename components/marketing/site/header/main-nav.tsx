'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ProductLogo from './items/product-logo'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function MainNav() {
    const pathname = usePathname()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '#', label: 'All categories', hasDropdown: true },
        { href: '/contact', label: 'Contact' },
        // Add more routes here if needed
    ]

    const categories = [
        {
            title: "Apparel & Accessories",
            items: [
                "Hats & Caps",
                "Men's Clothing",
                "Garment & Processing",
                "Sportswear",
                "Underwear & Sleepwear",
                "Socks & Hosiery",
                "Uniforms & Costumes",
                "Other Apparel&Access",
                "Wedding Apparel & Acc",
                "Women's Clothing"
            ]
        },
        {
            title: "Consumer Electronics",
            items: [
                "Earphone & Headphone",
                "Computer Hardware & Components",
                "Mobile Phone & Computing",
                "Used Electronics",
                "Portable Audio, Video",
                "Mobile Phone & Access",
                "Cables & Commonly Used",
                "Television, Home Audio",
                "Smart Electronics",
                "Camera, Photo & Access",
                "Projectors & Present",
                "Chargers, Batteries",
                "Video Games & Access",
                "Electronic Publication",
                "VR, AR, MR Hardware",
                "Speakers & Accessories",
                "TV Receivers & Access"
            ]
        },
        {
            title: "Home & Garden",
            items: [
                "Home Decor",
                "Smart Home Improvement",
                "Festive & Party Supp",
                "Lighters & Smoking A",
                "Home Textiles",
                "Garden Supplies",
                "Dinnerware,Coffee&Wi",
                "Household Cleaning T",
                "Home Storage & Organ",
                "Household Scales",
                "Kitchenware",
                "Drinkware & Accessor",
                "Bathroom Products",
                "Rain Gear",
                "Household Sundries"
            ]
        },
        {
            title: "Sports & Entertainment",
            items: [
                "Billiards, Board Gam",
                "Sports Safety&Rehabil",
                "Ball Sports Equipment",
                "Amusement Park Facil",
                "Golf",
                "Cycling",
                "Fitness & Body Build",
                "Camping & Hiking",
                "Water Sports",
                "Winter Sports",
                "Scooters",
                "Luxury Travel Equipm",
                "Artificial Grass&Spo",
                "Fishing",
                "Outdoor Affordable L",
                "Musical Instruments",
                "Sports Shoes, Bags &"
            ]
        },
        {
            title: "Commercial Equipment",
            items: [
                "Advertising Equipment",
                "Printing Machine",
                "Restaurant & Hotel S",
                "Trade Show and Party",
                "Financial Equipment",
                "Welding Equipment",
                "Cleaning Equipment",
                "Laser Equipment",
                "Warehousing & Superm",
                "Digital Signage"
            ]
        }
    ]

    // Handle mouse enter with slight delay
    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setCategoriesOpen(true)
    }

    // Handle mouse leave with delay to prevent flickering
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setCategoriesOpen(false)
        }, 150)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setCategoriesOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    return (
        <div className="flex items-center justify-between w-full md:w-auto">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 ml-6 text-sm font-medium relative">
                {links.map((link) => (
                    <div
                        key={link.href}
                        className="relative"
                        onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                        onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
                        ref={link.hasDropdown ? dropdownRef : undefined}
                    >
                        <Link
                            href={link.href}
                            className={cn(
                                'transition-colors uppercase hover:text-foreground/80 font-medium flex items-center gap-1',
                                pathname === link.href ? 'text-green-600' : 'text-green-950'
                            )}
                        >
                            {link.label}
                            {link.hasDropdown && (
                                <ChevronDown className={cn(
                                    "h-4 w-4 transition-transform duration-200",
                                    categoriesOpen && "rotate-180"
                                )} />
                            )}
                        </Link>

                        {/* Categories Dropdown */}
                        {link.hasDropdown && categoriesOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg p-6 z-50 min-w-[1000px]">
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-orange-500 bg-orange-100 px-3 py-2 rounded inline-block">
                                        Top categories
                                    </h3>
                                </div>

                                <div className="grid grid-cols-5 gap-6">
                                    {categories.map((category, index) => (
                                        <div key={index} className="space-y-3">
                                            <h4 className="font-semibold text-orange-500 text-sm border-b border-gray-200 pb-2">
                                                {category.title}...
                                            </h4>
                                            <ul className="space-y-2">
                                                {category.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <Link
                                                            href={`/#/${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                                            className="text-xs text-gray-600 hover:text-orange-500 transition-colors block py-1"
                                                            onClick={() => setCategoriesOpen(false)}
                                                        >
                                                            {item}...
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
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
                            <div key={link.href} className="w-full">
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={cn(
                                        'transition-colors hover:text-foreground/80 flex items-center justify-between w-full',
                                        pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                                    )}
                                >
                                    {link.label}
                                </Link>

                                {/* Mobile categories (simplified) */}
                                {link.hasDropdown && (
                                    <div className="mt-2 pl-4 space-y-2">
                                        {categories.map((category, index) => (
                                            <div key={index}>
                                                <Link
                                                    href={`/category/${category.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                                    className="text-sm text-gray-600 hover:text-orange-500 block py-1"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {category.title}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </div>
    )
}