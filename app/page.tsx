import { SiteHeader } from '@/components/marketing/site/header/site-header'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Globe, Shield, TrendingUp, Users, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/marketing/site/footer'

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br  dark:from-orange-950/20 dark:to-green-950/20">
                <div className="max-w-7xl mx-auto text-center">
                    <Badge variant="outline" className="mb-4">
                        🌍 Connecting Africa to Global Markets
                    </Badge>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        Trade Afrika
                        <span className="block text-orange-600 dark:text-orange-400">B2B Marketplace</span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                        Connect with verified African suppliers, discover authentic products, and build lasting business
                        partnerships across the continent.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                            <Link href="/auth/create-account">
                                Start Trading <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/marketplace">Browse Products</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
            </section>

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

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-600">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Trading?</h2>
                    <p className="text-xl text-orange-100 mb-8">
                        Join thousands of businesses already trading on Africa's premier B2B marketplace.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" variant="secondary">
                            <Link href="/auth/create-account">Create Free Account</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                        >
                            <Link href="/marketplace">Explore Marketplace</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
                <Footer/>
        </div>
    )
}
