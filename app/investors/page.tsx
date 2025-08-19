'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { SiteHeader } from '@/components/marketing/site/header/site-header'
import Footer from '@/components/marketing/site/footer'

export default function InvestorsPage() {

    useEffect(() => {
        // Smooth scrolling
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href')!) as HTMLElement;
                target?.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target as HTMLElement;
                    el.classList.add('opacity-100', 'translate-y-0');
                    el.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, observerOptions);

        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            const el = card as HTMLElement;
            el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
            el.style.transitionDelay = `${index * 100}ms`;
            observer.observe(el);
        });
    }, []);


    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-orange-50 text-gray-800">
            <SiteHeader />

            {/* Header Section */}
            <header className="bg-gradient-to-r from-trade-green to-trade-orange text-white relative overflow-hidden w-full">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="container mx-auto px-6 py-16 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Trade Afrika</h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-95">Unlocking Africa's Digital Trade Revolution</p>
                    <Link href="#contact" className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white border-opacity-30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm">
                        Explore Investment Opportunities
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow py-16 w-full">
                <div className="container mx-auto px-6">

                    {/* Intro Section */}
                    <section className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-trade-green mb-6">Why Invest in Trade Afrika</h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            Investing in <span className="font-bold text-trade-green">Trade Afrika</span> offers a unique opportunity to be part of Africa's next-generation digital trade revolution. As a Pan-African <span className="font-bold text-trade-orange">B2B digital marketplace</span>, Trade Afrika is redefining how businesses connect, transact, and scale across borders by unlocking intra-African trade and enabling SMEs to thrive under the AfCFTA framework.
                        </p>
                    </section>

                    {/* Stats Section */}
                    <section className="bg-gradient-to-r from-trade-green to-trade-orange text-white rounded-3xl p-8 md:p-12 mb-16 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
                        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {[
                                { value: '$3.4T', label: 'AfCFTA Trade Opportunity' },
                                { value: '54', label: 'African Countries' },
                                { value: '1.3B', label: 'People Market' },
                                { value: '70%', label: 'Mobile First Users' }
                            ].map((stat, idx) => (
                                <div key={idx} className="transform hover:scale-105 transition-transform duration-300">
                                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                                    <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Key Highlights Section */}
                    <section className="mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-trade-green text-center mb-12">Key Investment Highlights</h3>
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Strategic Roadmap',
                                    items: [
                                        'Expansion across East, Southern, and West Africa within five years',
                                        'Driving AfCFTA implementation through trusted B2B marketplace',
                                        'Building integrated solutions for payments, logistics, and trade facilitation'
                                    ]
                                },
                                {
                                    title: 'Financial Model & Revenue',
                                    items: [
                                        'Multiple revenue streams: subscriptions, escrow fees, advertising, premium services',
                                        'Scalable model with high-margin digital services',
                                        'Strong potential for regional and global partnerships'
                                    ]
                                },
                                {
                                    title: 'Impact Metrics',
                                    items: [
                                        'SME Empowerment: Market access and digital tools for African SMEs',
                                        'Job Creation: Enabling millions of young entrepreneurs',
                                        'Trust Building: Verified profiles, escrow, and dispute resolution',
                                        'Sustainability: Digital-first, paperless trade systems'
                                    ]
                                },
                                {
                                    title: 'Growth Opportunities',
                                    items: [
                                        'Capturing Africa\'s fast-growing intra-African trade market',
                                        'Leveraging rapidly expanding digital payments ecosystem',
                                        'Establishing regional trade hubs and logistics partnerships'
                                    ]
                                },
                                {
                                    title: 'Technology Platform',
                                    items: [
                                        'Mobile-first platform with integrated ecosystem',
                                        'AI-driven matchmaking and data analytics',
                                        'Cloud solutions and scalable fintech integrations',
                                        'Escrow-secured payments and digital storefronts'
                                    ]
                                },
                                {
                                    title: 'Investor Benefits',
                                    items: [
                                        'Access to scalable, technology-driven platform',
                                        'Strategic alignment with Africa\'s long-term priorities',
                                        'Shape the future of African trade and SME growth',
                                        'Socio-economic impact with sustainable financial returns'
                                    ]
                                }
                            ].map((highlight, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-trade-orange hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl card">
                                    <h4 className="text-xl font-bold text-trade-green mb-4">{highlight.title}</h4>
                                    <ul className="space-y-3">
                                        {highlight.items.map((item, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="text-trade-orange font-bold mr-3 mt-1">→</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-2xl">
                        <h3 className="text-3xl md:text-4xl font-bold text-trade-green mb-6">Access Investment Materials</h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            For detailed investor materials, partnership opportunities, and financial projections, contact our investor relations team.
                        </p>
                        <a href="mailto:investor@tradeafrika.africa" className="inline-block bg-gradient-to-r from-trade-green to-trade-orange text-white px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            Contact Investor Relations
                        </a>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
