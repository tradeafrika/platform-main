import Footer from '@/components/marketing/site/footer'
import { SiteHeader } from '@/components/marketing/site/header/site-header'

export default function PrivacyPage() {
    return (
        <div>
            <SiteHeader />
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="bg-afrika text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                            <p className="text-xl md:text-2xl mb-8 opacity-90">
                                Your privacy is important to us. Learn how we collect, use, and protect your data.
                            </p>
                            <p className="text-lg opacity-75">Last updated: July 22, 2025</p>
                        </div>
                    </div>
                </section>

                {/* Privacy Policy Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto prose prose-lg">
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                                <p className="text-blue-800 font-medium mb-0">
                                    This Privacy Policy explains how Trade Afrika ("we," "our," or "us") collects, uses,
                                    and protects your personal information when you use our B2B trading platform.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold mt-12 mb-6">1. Information We Collect</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">1.1 Personal Information</h3>
                            <p>When you create an account or use our services, we may collect:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name, email address, phone number, and business address</li>
                                <li>Company information including business registration details</li>
                                <li>Financial information for payment processing</li>
                                <li>Government-issued identification for verification purposes</li>
                                <li>Profile photos and business documentation</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">1.2 Business Information</h3>
                            <p>We collect information about your business activities including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Product listings, descriptions, and pricing</li>
                                <li>Transaction history and order details</li>
                                <li>Communication with other users on the platform</li>
                                <li>Reviews, ratings, and feedback</li>
                                <li>Trade preferences and business requirements</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">1.3 Technical Information</h3>
                            <p>We automatically collect certain technical information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>IP address, browser type, and device information</li>
                                <li>Usage data and platform interaction patterns</li>
                                <li>Cookies and similar tracking technologies</li>
                                <li>Location data (with your consent)</li>
                                <li>Log files and error reports</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">2. How We Use Your Information</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">2.1 Platform Services</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Create and manage your account</li>
                                <li>Facilitate trade transactions and communications</li>
                                <li>Process payments and manage invoices</li>
                                <li>Verify business credentials and prevent fraud</li>
                                <li>Provide customer support and resolve disputes</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">2.2 Platform Improvement</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Analyze usage patterns to improve our services</li>
                                <li>Develop new features and functionality</li>
                                <li>Conduct research and analytics</li>
                                <li>Ensure platform security and prevent abuse</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">2.3 Communication</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Send transaction notifications and updates</li>
                                <li>Provide customer support responses</li>
                                <li>Share platform news and feature updates</li>
                                <li>Send marketing communications (with consent)</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">3. Information Sharing</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">3.1 With Other Users</h3>
                            <p>We share certain information to facilitate trade:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Business profile information and contact details</li>
                                <li>Product listings and trade offers</li>
                                <li>Reviews, ratings, and transaction history</li>
                                <li>Communication necessary for completing transactions</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">3.2 With Service Providers</h3>
                            <p>We work with trusted third parties who help us operate our platform:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Payment processors and financial institutions</li>
                                <li>Logistics and shipping partners</li>
                                <li>Identity verification services</li>
                                <li>Cloud hosting and data storage providers</li>
                                <li>Customer support and communication tools</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">3.3 Legal Requirements</h3>
                            <p>We may disclose information when required by law or to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Comply with legal obligations and court orders</li>
                                <li>Protect our rights and prevent fraud</li>
                                <li>Ensure platform safety and security</li>
                                <li>Cooperate with law enforcement investigations</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">4. Data Security</h2>

                            <p>We implement comprehensive security measures to protect your information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>End-to-end encryption for sensitive data transmission</li>
                                <li>Secure data centers with 24/7 monitoring</li>
                                <li>Regular security audits and penetration testing</li>
                                <li>Multi-factor authentication for account access</li>
                                <li>Employee training on data protection practices</li>
                                <li>Incident response procedures for security breaches</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">5. Your Rights and Choices</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">5.1 Access and Control</h3>
                            <p>You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access and review your personal information</li>
                                <li>Update or correct inaccurate data</li>
                                <li>Delete your account and associated data</li>
                                <li>Export your data in a portable format</li>
                                <li>Restrict certain uses of your information</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">5.2 Communication Preferences</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Opt out of marketing communications</li>
                                <li>Choose notification preferences</li>
                                <li>Control cookie settings</li>
                                <li>Manage location sharing permissions</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">6. International Data Transfers</h2>

                            <p>
                                As a pan-African platform, we may transfer your data across borders within Africa and to
                                other countries where our service providers operate. We ensure appropriate safeguards
                                are in place for international transfers, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Adequacy decisions by relevant data protection authorities</li>
                                <li>Standard contractual clauses with service providers</li>
                                <li>Binding corporate rules for intra-group transfers</li>
                                <li>Your explicit consent where required</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">7. Data Retention</h2>

                            <p>We retain your information for as long as necessary to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide our services and maintain your account</li>
                                <li>Comply with legal and regulatory requirements</li>
                                <li>Resolve disputes and enforce our agreements</li>
                                <li>Prevent fraud and ensure platform security</li>
                            </ul>

                            <p className="mt-4">
                                When you delete your account, we will delete or anonymize your personal information
                                within 30 days, except where we are required to retain it for legal purposes.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">8. Children's Privacy</h2>

                            <p>
                                Our platform is designed for business use and is not intended for individuals under 18.
                                We do not knowingly collect personal information from children. If we become aware that
                                we have collected information from a child, we will delete it promptly.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">9. Changes to This Policy</h2>

                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices
                                or applicable laws. We will notify you of material changes by:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Posting the updated policy on our website</li>
                                <li>Sending email notifications to registered users</li>
                                <li>Displaying prominent notices on our platform</li>
                            </ul>

                            
                            
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
