'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/marketing/site/header/site-header'
import commonLogo from '@/assets/tradeafrikalogo.png'
import Footer from '@/components/marketing/site/footer'

export default function AboutUs() {
    return (
        <main className="bg-white dark:bg-background text-foreground">
            <SiteHeader />
            {/* Hero Section */}
            <section className="relative bg-afrika h-[300px] sm:h-[400px] flex items-center justify-center text-center overflow-hidden ">
                <div className="relative z-10 px-4 ">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white">About Us</h1>
                    <p className="mt-4 text-white/90 max-w-xl mx-auto text-base sm:text-lg">
                        Transforming intra-African trade through technology, trust, and transparency.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                    <p className="text-muted-foreground mb-4 text-neutral-600">
                        Trade Afrika was born out of the need to empower African SMEs and build stronger cross-border
                        partnerships across the continent. We saw the struggle of finding verified suppliers, the lack
                        of trust in payments, and the inefficiencies of using WhatsApp or intermediaries for trade.
                    </p>
                    <p className="text-muted-foreground text-neutral-600">
                        That's why we built a B2B marketplace that integrates KYC, escrow, and RFQ workflows giving
                        African businesses the tools to transact securely and scale regionally.
                    </p>
                </div>
                <div className="relative h-72 md:h-96 rounded-lg overflow-hidden  items-center justify-center flex">
                    <Image height={350} width={350} src={commonLogo} alt="Trade Afrika team" className="object-cover" />
                </div>
            </section>

            {/* Vision, Mission, Values with Curved Background */}
            <section className="relative bg-gray-50 dark:bg-gray-900 py-24">
                {/* Curved top edge */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-white dark:bg-background">
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 dark:bg-gray-900 rounded-t-[3rem]"></div>
                </div>

                {/* Curved bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white dark:bg-background">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gray-50 dark:bg-gray-900 rounded-b-[3rem]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Foundation</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Built on strong principles that guide everything we do at Trade Afrika
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Mission Card */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-orange-600">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To connect African businesses through a digital-first platform that builds trust, simplifies
                                trade, and promotes economic growth across borders.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-green-600">Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                A thriving pan-African economy powered by technology, where any SME can confidently find and
                                work with partners across the continent.
                            </p>
                        </div>

                        {/* Values Card */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                                <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-orange-500">Our Values</h3>
                            <ul className="text-muted-foreground space-y-3 leading-relaxed">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                    Trust & Transparency
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                    Economic Empowerment
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                    Digital Inclusion
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                    Pan-Africanism
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                    Innovation
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Trade Afrika Unique Section */}
            <section className="relative py-20 overflow-hidden">
                {/* Port Background with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1600')`
                    }}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">What Makes Trade Afrika Unique?</h2>
                        <p className="text-white/90 text-lg max-w-3xl mx-auto">
                            Built specifically for African businesses with features that address real challenges in cross-border trade
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {/* Institutional Backing */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border-b-4 border-orange-500">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3 text-gray-900">Institutional Backing</h3>
                            <p className="text-gray-600 text-sm text-center">
                                Ensuring institutional trust and access to trade finance through strategic partnerships with leading African banks.
                            </p>
                        </div>

                        {/* Connected Ecosystem */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border-b-4 border-green-500">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3 text-gray-900">Connected Ecosystem</h3>
                            <p className="text-gray-600 text-sm text-center">
                                Linked to continental trade tools and platforms for seamless integration across African markets.
                            </p>
                        </div>

                        {/* Verified Users */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border-b-4 border-blue-500">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3 text-gray-900">Verified Users</h3>
                            <p className="text-gray-600 text-sm text-center">
                                All participants undergo comprehensive due diligence through Smile ID to ensure secure transactions.
                            </p>
                        </div>

                        {/* Logistics & Order Management */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border-b-4 border-orange-500">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3 text-gray-900">Logistics & Order Management</h3>
                            <p className="text-gray-600 text-sm text-center">
                                Comprehensive supply chain and order tracking solutions integrated into the platform.
                            </p>
                        </div>

                        {/* Finance-Ready */}
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border-b-4 border-green-500">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-center mb-3 text-gray-900">Finance-Ready</h3>
                            <p className="text-gray-600 text-sm text-center">
                                Integrated financing solutions with escrow protection for seamless trade operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="container mx-auto px-4 py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Why Trade Afrika?</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Unlike generic marketplaces, Trade Afrika is built for African businesses featuring:
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-muted-foreground">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h4 className="font-semibold text-orange-600">KYC-Verified Businesses</h4>
                        </div>
                        <p>All suppliers and buyers complete identity & document checks through Smile ID.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                            <h4 className="font-semibold text-green-600">Escrow Payment Protection</h4>
                        </div>
                        <p>Funds are held securely until delivery is confirmed boosting trust and safety.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                                </svg>
                            </div>
                            <h4 className="font-semibold text-orange-600">RFQ-Based Sourcing</h4>
                        </div>
                        <p>
                            Post a Request for Quote (RFQ) and receive multiple responses like a built-in procurement
                            team.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <h4 className="font-semibold text-green-600">Multi-Currency Support</h4>
                        </div>
                        <p>Trade confidently in over 30 African currencies, with real-time conversion tracking.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9a9 9 0 01-9-9m9 9c0 5-4 9-9 9s-9-4-9-9m9-9a9 9 0 00-9 9"></path>
                                </svg>
                            </div>
                            <h4 className="font-semibold text-orange-600">Pan-African Network</h4>
                        </div>
                        <p>
                            Buyers and suppliers from all AfCFTA regions in East, West, Central, Southern, and North
                            Africa.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white dark:bg-background text-center">
                <div className="container mx-auto px-4 max-w-xl">
                    <h2 className="text-3xl font-bold mb-4">Ready to trade with confidence?</h2>
                    <p className="text-muted-foreground mb-6">
                        Join thousands of businesses building real connections through Africa's most trusted B2B
                        platform.
                    </p>
                    <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                        <Link href="/waitlist">Join the Waitlist</Link>
                    </Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}