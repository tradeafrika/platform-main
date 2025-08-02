'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/marketing/site/header/site-header'
import commonLogo from "@/assets/tradeafrikalogo.png"
import Footer from '@/components/marketing/site/footer'

export default function AboutUs() {
    return (
        <main className="bg-white dark:bg-background text-foreground">
            <SiteHeader/>
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
                        That’s why we built a B2B marketplace that integrates KYC, escrow, and RFQ workflows giving
                        African businesses the tools to transact securely and scale regionally.
                    </p>
                </div>
                <div className="relative h-72 md:h-96 rounded-lg overflow-hidden  items-center justify-center flex">
                    <Image
                    height={350}
                    width={350}
                        src={commonLogo}
                        alt="Trade Afrika team"
                        className="object-cover"
                    />
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="bg-gray-50 dark:bg-gray-900 py-16">
                <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-3">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-orange-600">Our Mission</h3>
                        <p className="text-muted-foreground">
                            To connect African businesses through a digital-first platform that builds trust, simplifies
                            trade, and promotes economic growth across borders.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-green-600">Our Vision</h3>
                        <p className="text-muted-foreground">
                            A thriving pan-African economy powered by technology, where any SME can confidently find and
                            work with partners across the continent.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-orange-500">Our Values</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>Trust & Transparency</li>
                            <li>Economic Empowerment</li>
                            <li>Digital Inclusion</li>
                            <li>Pan-Africanism</li>
                            <li>Innovation</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="container mx-auto px-4 py-20">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Why Trade Afrika?</h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Unlike generic marketplaces, Trade Afrika is built for African businesses—featuring:
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-muted-foreground">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="font-semibold mb-2 text-orange-600">KYC-Verified Businesses</h4>
                        <p>All suppliers and buyers complete identity & document checks through Smile ID.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="font-semibold mb-2 text-green-600">Escrow Payment Protection</h4>
                        <p>Funds are held securely until delivery is confirmed—boosting trust and safety.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="font-semibold mb-2 text-orange-600">RFQ-Based Sourcing</h4>
                        <p>
                            Post a Request for Quote (RFQ) and receive multiple responses—like a built-in procurement
                            team.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="font-semibold mb-2 text-green-600">Multi-Currency Support</h4>
                        <p>Trade confidently in over 30 African currencies, with real-time conversion tracking.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h4 className="font-semibold mb-2 text-orange-600">Pan-African Network</h4>
                        <p>
                            Buyers and suppliers from all AfCFTA regions—East, West, Central, Southern, and North
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
            <Footer/>
        </main>
    )
}
