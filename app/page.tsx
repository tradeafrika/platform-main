"use client"

import { SiteHeader } from '@/components/marketing/site/header/site-header'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Globe, Shield, TrendingUp, Users, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/marketing/site/footer'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HomePage() {
    // Slideshow images array
    const heroImages = [
        "https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg",
        "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
        "https://images.pexels.com/photos/2326876/pexels-photo-2326876.jpeg",
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Auto-advance slideshow
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000) // Change image every 5 seconds

        return () => clearInterval(interval)
    }, [heroImages.length])

    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />

            {/* Hero Section with Slideshow */}
            <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden bg-gradient-to-br dark:from-orange-950/20 dark:to-green-950/20">
                {/* Slideshow Images */}
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`Hero Image ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover brightness-75"
                        />
                    </div>
                ))}

                {/* Slideshow Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                ? 'bg-white scale-110'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-orange-950/25">
                    <Badge variant="outline" className="mb-4 text-base sm:text-lg font-semibold backdrop-blur">
                        <span className="text-orange-500">Connect.</span>{' '}
                        <span className="text-green-600">Transact.</span> <span className="text-orange-500">Grow.</span>
                    </Badge>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                        Trade Afrika
                        <span className="block text-orange-500 dark:text-orange-400">B2B Marketplace</span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto mb-8  font-medium ">
                        Empowering African SMEs to connect, trade, and grow with trusted partners across the continent.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                            <Link href="/waitlist">
                                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <Link href="/about">About us</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">1,200+</div>
                            <div className="text-gray-600 dark:text-gray-300">Verified Suppliers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">54</div>
                            <div className="text-gray-600 dark:text-gray-300">African Countries</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15,000+</div>
                            <div className="text-gray-600 dark:text-gray-300">Products Listed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">$2.5M+</div>
                            <div className="text-gray-600 dark:text-gray-300">Trade Volume</div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose Trade Afrika?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            We make it easy to connect with authentic African suppliers and grow your business across
                            the continent.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <Shield className="h-10 w-10 text-orange-600 dark:text-orange-400 mb-2" />
                                <CardTitle>Verified Suppliers</CardTitle>
                                <CardDescription>
                                    All suppliers are thoroughly vetted and verified to ensure quality and reliability.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Globe className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                                <CardTitle>Pan-African Network</CardTitle>
                                <CardDescription>
                                    Access suppliers from all 54 African countries in one unified marketplace.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Zap className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                                <CardTitle>Fast & Secure</CardTitle>
                                <CardDescription>
                                    Streamlined processes with secure payment systems and escrow protection.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Users className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-2" />
                                <CardTitle>Expert Support</CardTitle>
                                <CardDescription>
                                    Dedicated support team to help you navigate African markets successfully.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <TrendingUp className="h-10 w-10 text-red-600 dark:text-red-400 mb-2" />
                                <CardTitle>Market Insights</CardTitle>
                                <CardDescription>
                                    Access real-time market data and trends to make informed business decisions.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CheckCircle className="h-10 w-10 text-teal-600 dark:text-teal-400 mb-2" />
                                <CardTitle>Quality Assurance</CardTitle>
                                <CardDescription>
                                    Comprehensive quality checks and certifications for all listed products.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Start trading in Africa in just a few simple steps. Our streamlined process makes it easy to connect, verify, and transact.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {/* Step 1 */}
                            <div className="text-center group shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 bg-white">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <Users className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-orange-600 dark:text-orange-400">1</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Sign Up & Verify
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Create your account and complete our quick verification process to join our trusted network of African businesses.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center group shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 bg-white">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-green-600 dark:text-green-400">2</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Browse & Connect
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Explore thousands of verified suppliers across 54 African countries and connect with the right partners for your business.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center group shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 bg-white">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">3</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Negotiate & Secure
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Use our built-in messaging system to negotiate terms and secure your deals with our escrow protection service.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="text-center group shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 bg-white">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <TrendingUp className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-purple-600 dark:text-purple-400">4</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    Trade & Grow
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Complete your transactions with confidence and track your growth with our comprehensive analytics and insights.
                                </p>
                            </div>
                        </div>

                        {/* Bottom decorative element */}
                        <div className="mt-16 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-full shadow-lg">
                                <CheckCircle className="h-8 w-8 text-white" />
                            </div>
                            <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
                                Ready to start your African trade journey?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Products Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Upcoming Products
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Discover the latest products from our verified African suppliers, coming soon to the marketplace.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Product 1 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/4098880/pexels-photo-4098880.jpeg"
                                    alt="Premium Coffee Beans"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-orange/30">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Coffee Beans</h3>
                                <p className="text-white/90 text-sm mb-3">Ethiopian single-origin arabica beans with rich, complex flavors</p>
                                <div className="flex items-center justify-between">
                                    {/* <span className="text-lg font-semibold">From $24.99/kg</span> */}
                                    <div className="flex items-center text-sm">
                                        <Globe className="h-4 w-4 mr-1" />
                                        Ethiopia
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg"
                                    alt="Premium Coffee Beans"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-orange/30">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Premium Coffee Beans</h3>
                                <p className="text-white/90 text-sm mb-3">Ethiopian single-origin arabica beans with rich, complex flavors</p>
                                <div className="flex items-center justify-between">
                                    {/* <span className="text-lg font-semibold">From $24.99/kg</span> */}
                                    <div className="flex items-center text-sm">
                                        <Globe className="h-4 w-4 mr-1" />
                                        Ethiopia
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Product 2 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg"
                                    alt="Handwoven Textiles"
                                    fill
                                    className="object-cover group-hover:scale-110 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Handwoven Textiles</h3>
                                <p className="text-white/90 text-sm mb-3">Traditional Kente cloth patterns with authentic craftsmanship</p>
                                <div className="flex items-center justify-between">
                                    {/* <span className="text-lg font-semibold">From $89.99/yard</span> */}
                                    <div className="flex items-center text-sm">
                                        <Globe className="h-4 w-4 mr-1" />
                                        Ghana
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg"
                                    alt="Organic Shea Butter"
                                    fill
                                    className="object-cover group-hover:scale-110 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Organic Shea Butter</h3>
                                <p className="text-white/90 text-sm mb-3">Pure, unrefined shea butter from sustainable sources</p>
                                <div className="flex items-center justify-between">
                                    {/* <span className="text-lg font-semibold">From $15.99/kg</span> */}
                                    <div className="flex items-center text-sm">
                                        <Globe className="h-4 w-4 mr-1" />
                                        Burkina Faso
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg"
                                    alt="Baobab Oil"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Baobab Oil</h3>
                                <p className="text-white/90 text-sm mb-3">Cold-pressed baobab seed oil rich in vitamins and antioxidants</p>
                                <div className="flex items-center justify-between">
                                    {/* <span className="text-lg font-semibold">From $32.99/L</span> */}
                                    <div className="flex items-center text-sm">
                                        <Globe className="h-4 w-4 mr-1" />
                                        Senegal
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 5 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/6045400/pexels-photo-6045400.jpeg"
                                    alt="Handcrafted Jewelry"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Handcrafted Jewelry</h3>
                                <p className="text-white/90 text-sm mb-3">Traditional Maasai beadwork with contemporary designs</p>
                                <div className="flex items-center justify-between">
                                    {/* <span className="text-lg font-semibold">From $45.99</span> */}
                                    <div className="flex items-center text-sm">
                                        <Globe className="h-4 w-4 mr-1" />
                                        Kenya
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 6 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg"
                                    alt="Rooibos Tea"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Premium Rooibos Tea</h3>
                                <p className="text-white/90 text-sm mb-3">Naturally caffeine-free red bush tea with antioxidant properties</p>
                                <div className="flex items-center justify-between">
                                    {/* <span className="text-lg font-semibold">From $18.99/kg</span> */}
                                    <div className="flex items-center text-sm">
                                        <Globe className="h-4 w-4 mr-1" />
                                        South Africa
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product 7 */}
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="https://images.pexels.com/photos/11275299/pexels-photo-11275299.jpeg"
                                    alt="hand woven textiles"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-900/70 transition-all duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <Badge className="bg-white/20 text-white backdrop-blur-sm border-orange/30">
                                        Coming Soon
                                    </Badge>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Hand Wooven Textile</h3>
                                <p className="text-white/90 text-sm mb-3">Ethiopian single-origin arabica textiles</p>
                                <div className="flex items-center justify-between">
                                    {/* <span className="text-lg font-semibold">From $24.99/kg</span> */}
                                    <div className="flex items-center text-sm">
                                        <Globe className="h-4 w-4 mr-1" />
                                        Ethiopia
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* View All Products Button */}
                    {/* <div className="text-center mt-12">
                        <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8">
                            <Link href="/products">
                                View All Products <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div> */}
                </div>
            </section>

            {/* Our Services Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
                        alt="Services Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Comprehensive solutions to support your African trade journey from start to finish
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Marketplace Service */}
                        <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 hover:scale-105">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                                    Marketplace
                                </h3>

                                <p className="text-gray-200 leading-relaxed mb-8">
                                    Connect with trusted partners, trade securely, and grow your business seamlessly on Trade Afrika’s verified marketplace.
                                </p>

                                {/* <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                >
                                    Learn More →
                                </Button> */}
                            </div>
                        </div>

                        {/* Advertising Service */}
                        <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 hover:scale-105">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                                    Advertisment
                                </h3>

                                <p className="text-gray-200 leading-relaxed mb-8">
                                    Promote your products and services directly to verified African SMEs on Trade Afrika. Increase your brand visibility and drive targeted leads across the continent.
                                </p>

                                {/* <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                >
                                    Learn More →
                                </Button> */}
                            </div>
                        </div>



                        {/* Logistics Service */}
                        <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17l3-10 3 10" />
                                    </svg>
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                                    Logistics
                                </h3>

                                <p className="text-gray-200 leading-relaxed mb-8">
                                    Unlock seamless logistics with Trade Afrika’s trusted partners, offering warehousing and reliable shipping for faster,
                                    secure deliveries across Africa.
                                </p>

                                {/* <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                >
                                    Learn More →
                                </Button> */}
                            </div>
                        </div>
                    </div>

                    {/* Additional Services Row */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        {/* Quality Assurance */}
                        <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 hover:scale-105">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                                    Quality Assurance
                                </h3>

                                <p className="text-gray-200 leading-relaxed mb-8">
                                    Comprehensive quality checks and certifications ensure all products meet international
                                    standards before reaching your business.
                                </p>

                                {/* <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                >
                                    Learn More →
                                </Button> */}
                            </div>
                        </div>

                        {/* Market Intelligence */}
                        <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 hover:scale-105">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                                    Market Intelligence
                                </h3>

                                <p className="text-gray-200 leading-relaxed mb-8">
                                    Access real-time market data, pricing trends, and industry insights to make
                                    informed decisions and stay ahead of the competition.
                                </p>
                                {/* 
                                <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                >
                                    Learn More →
                                </Button> */}
                            </div>
                        </div>

                        {/* Support Services */}
                        <div className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/50 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                            <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                                    <Users className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                                    Support Services
                                </h3>

                                <p className="text-gray-200 leading-relaxed mb-8">
                                    24/7 dedicated support team with local African market expertise to guide you
                                    through every step of your trading journey.
                                </p>

                                {/* <Button
                                    variant="outline"
                                    className="rounded-full px-6"
                                >
                                    Learn More →
                                </Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section with Marquee */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Trusted by Leading Organizations
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            We're proud to work with amazing partners across Africa and beyond
                        </p>
                    </div>

                    {/* Marquee Container */}
                    <div className="relative">
                        {/* Marquee Animation */}
                        <div className="flex animate-marquee">
                            {/* First set of logos */}
                            <div className="flex items-center justify-center min-w-0 shrink-0">
                                {/* Partner 1 - African Development Bank */}
                                <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-center">
                                        <Link href="https://innovationhub.ug" target='_blank'>
                                            <img src="/images/ict hub.jpg" alt="innovation hub" width="" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Partner 2 - Trade & Development Bank */}
                                <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-center">
                                        <Link href="https://ict.go.ug" target='_blank'>
                                            <img src="/images/ict logo.jpg" alt="MINISTRY" width="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-center">
                                        <Link href="https://afyef.org" target="_blank">
                                            <img src="/images/youth.jpeg" alt="EA" width="" />
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            {/* Duplicate set for seamless loop */}
                            <div className="flex items-center justify-center min-w-0 shrink-0">
                                {/* Partner 1 - African Development Bank */}
                                <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-center">
                                        <Link href="https://innovationhub.ug" target='_blank'>
                                            <img src="/images/ict hub.jpg" alt="innovation hub" width="" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Partner 2 - Trade & Development Bank */}
                                <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-center">
                                        <Link href="https://ict.go.ug" target='_blank'>
                                            <img src="/images/ict logo.jpg" alt="MINISTRY" width="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-center">
                                        <Link href="https://afyef.org" target="_blank">
                                            <img src="/images/youth.jpeg" alt="EA" width="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CSS for marquee animation */}
                <style jsx>{`
                    @keyframes marquee {
                        0% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-marquee {
                        animation: marquee 30s linear infinite;
                    }
                    .animate-marquee:hover {
                        animation-play-state: paused;
                    }
                `}</style>
            </section>

            {/* Regios Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 overflow-hidden">
                <div className="max-w-7xl mx-auto flex justify-center">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Regions of Operation
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            We are Proud to operate within vibrant Region Economic Communities across Africa.
                        </p>

                        <div className="relative">
                            <div className="flex">
                                <div className="flex items-center justify-center min-w-0 shrink-0 pt-20">
                                    <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700">
                                        <div className="text-center">
                                            <Link href="https://au.int/en/african-continental-free-trade-area" target='_blank'>
                                                <img src="/images/AFCFTA.jpeg" alt="AFCFTA" width="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div className="text-center">
                                            <Link href="https://www.ecowas.int" target='_blank'>
                                                <img src="/images/CEDEO.jpeg" alt="CEDEO" width="" />
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <div className="text-center">
                                            <Link href="https://www.comesa.int" target="_blank">
                                                <img src="/images/COMESA.jpeg" alt="COMESA" width="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mx-8 flex items-center justify-center h-20 w-40 bg-white dark:bg-gray-700 rounded-lg">
                                        <div className="text-center">
                                            <Link href="https://www.eac.int" target='_blank'>
                                                <img src="/images/EAC.jpeg" alt="EAC" width="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </div>
    )
}