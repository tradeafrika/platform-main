import Footer from '@/components/marketing/site/footer'
import { SiteHeader } from '@/components/marketing/site/header/site-header'

export default function TermsPage() {
    return (
        <div>
            <SiteHeader />
            <div className="min-h-screen">
                {/* Hero Section */}
                <section className="bg-green-600 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
                            <p className="text-xl md:text-2xl mb-8 opacity-90">
                                The terms and conditions governing your use of the Trade Afrika platform.
                            </p>
                            <p className="text-lg opacity-75">Last updated: January 1, 2024</p>
                        </div>
                    </div>
                </section>

                {/* Terms Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto prose prose-lg">
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                                <p className="text-blue-800 font-medium mb-0">
                                    By accessing or using Trade Afrika, you agree to be bound by these Terms of Service.
                                    Please read them carefully before using our platform.
                                </p>
                            </div>

                            <h2 className="text-2xl font-bold mt-12 mb-6">1. Acceptance of Terms</h2>

                            <p>
                                These Terms of Service ("Terms") constitute a legally binding agreement between you and
                                Trade Afrika Limited ("Trade Afrika," "we," "us," or "our") regarding your use of the
                                Trade Afrika B2B trading platform and related services.
                            </p>

                            <p>
                                By creating an account, accessing our platform, or using our services, you acknowledge
                                that you have read, understood, and agree to be bound by these Terms and our Privacy
                                Policy.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">2. Eligibility and Account Registration</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">2.1 Eligibility Requirements</h3>
                            <p>To use our platform, you must:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Be at least 18 years old and legally capable of entering contracts</li>
                                <li>Represent a legitimate business entity</li>
                                <li>Have the authority to bind your organization to these Terms</li>
                                <li>Provide accurate and complete registration information</li>
                                <li>Comply with all applicable laws and regulations</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">2.2 Account Responsibilities</h3>
                            <p>You are responsible for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Promptly notifying us of any unauthorized access</li>
                                <li>Keeping your account information current and accurate</li>
                                <li>Complying with our verification requirements</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">3. Platform Services</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">3.1 Service Description</h3>
                            <p>Trade Afrika provides a B2B marketplace platform that enables:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Product listing and discovery</li>
                                <li>Business-to-business communication and negotiation</li>
                                <li>Transaction facilitation and payment processing</li>
                                <li>Order management and tracking</li>
                                <li>Invoice generation and management</li>
                                <li>Dispute resolution services</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">3.2 Service Availability</h3>
                            <p>
                                We strive to maintain high service availability but do not guarantee uninterrupted
                                access. We may temporarily suspend services for maintenance, updates, or due to
                                circumstances beyond our control.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">4. User Conduct and Responsibilities</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">4.1 Acceptable Use</h3>
                            <p>You agree to use our platform only for legitimate business purposes and will not:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Violate any applicable laws, regulations, or third-party rights</li>
                                <li>Engage in fraudulent, deceptive, or misleading practices</li>
                                <li>List prohibited or illegal products or services</li>
                                <li>Manipulate reviews, ratings, or platform metrics</li>
                                <li>Interfere with platform security or functionality</li>
                                <li>Harass, threaten, or abuse other users</li>
                                <li>Use automated systems to access or scrape our platform</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">4.2 Content Standards</h3>
                            <p>All content you post must be:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Accurate, complete, and not misleading</li>
                                <li>Your own original content or properly licensed</li>
                                <li>Free from viruses, malware, or harmful code</li>
                                <li>Compliant with applicable advertising and trade laws</li>
                                <li>Respectful and professional in tone</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">5. Trading and Transactions</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">5.1 Transaction Facilitation</h3>
                            <p>
                                Trade Afrika facilitates transactions between buyers and sellers but is not a party to
                                the underlying commercial agreements. We do not guarantee the quality, safety, or
                                legality of products or services listed on our platform.
                            </p>

                            <h3 className="text-xl font-semibold mt-8 mb-4">5.2 Payment Processing</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We use third-party payment processors to handle transactions</li>
                                <li>Payment terms are agreed between buyers and sellers</li>
                                <li>We may hold funds in escrow for certain transactions</li>
                                <li>Refunds and disputes are handled according to our dispute resolution process</li>
                                <li>You are responsible for all applicable taxes and fees</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">5.3 Shipping and Delivery</h3>
                            <p>
                                Sellers are responsible for fulfilling orders according to agreed terms. We may provide
                                logistics support but are not liable for shipping delays, damages, or losses unless
                                explicitly agreed otherwise.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">6. Fees and Payments</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">6.1 Platform Fees</h3>
                            <p>Our fee structure includes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Transaction fees based on order value</li>
                                <li>Subscription fees for premium features</li>
                                <li>Payment processing fees</li>
                                <li>Additional service fees as applicable</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">6.2 Fee Changes</h3>
                            <p>
                                We may modify our fees with 30 days' notice. Continued use of our platform after fee
                                changes constitutes acceptance of the new fee structure.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">7. Intellectual Property</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">7.1 Platform Rights</h3>
                            <p>
                                Trade Afrika owns all rights to the platform, including software, designs, trademarks,
                                and proprietary technology. You may not copy, modify, or distribute our intellectual
                                property without permission.
                            </p>

                            <h3 className="text-xl font-semibold mt-8 mb-4">7.2 User Content</h3>
                            <p>
                                You retain ownership of content you post but grant us a license to use, display, and
                                distribute it for platform operations. You represent that you have all necessary rights
                                to the content you post.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">8. Privacy and Data Protection</h2>

                            <p>
                                Your privacy is important to us. Our collection, use, and protection of personal
                                information is governed by our Privacy Policy, which is incorporated into these Terms by
                                reference.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">9. Dispute Resolution</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">9.1 Platform Disputes</h3>
                            <p>We provide dispute resolution services for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Transaction disputes between users</li>
                                <li>Product quality or delivery issues</li>
                                <li>Payment and refund disputes</li>
                                <li>Account or platform-related issues</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">9.2 Resolution Process</h3>
                            <p>Our dispute resolution process includes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Initial mediation between parties</li>
                                <li>Investigation by our dispute resolution team</li>
                                <li>Binding arbitration if mediation fails</li>
                                <li>Enforcement of resolution decisions</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">10. Limitation of Liability</h2>

                            <p>
                                To the maximum extent permitted by law, Trade Afrika's liability is limited to the fees
                                paid by you in the 12 months preceding the claim. We are not liable for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Indirect, incidental, or consequential damages</li>
                                <li>Loss of profits, data, or business opportunities</li>
                                <li>Actions or omissions of other platform users</li>
                                <li>Third-party services or content</li>
                                <li>Force majeure events beyond our control</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">11. Indemnification</h2>

                            <p>You agree to indemnify and hold Trade Afrika harmless from claims arising from:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your use of the platform</li>
                                <li>Violation of these Terms</li>
                                <li>Infringement of third-party rights</li>
                                <li>Your business activities and transactions</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">12. Termination</h2>

                            <h3 className="text-xl font-semibold mt-8 mb-4">12.1 Termination Rights</h3>
                            <p>Either party may terminate this agreement:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>At any time with 30 days' notice</li>
                                <li>Immediately for material breach</li>
                                <li>Immediately for illegal or harmful conduct</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-8 mb-4">12.2 Effect of Termination</h3>
                            <p>Upon termination:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your access to the platform will be suspended</li>
                                <li>Outstanding obligations remain in effect</li>
                                <li>Data retention follows our Privacy Policy</li>
                                <li>Accrued fees remain payable</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-12 mb-6">13. Governing Law</h2>

                            <p>
                                These Terms are governed by the laws of Nigeria. Any disputes will be resolved in the
                                courts of Lagos State, Nigeria, or through binding arbitration as specified in our
                                dispute resolution procedures.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">14. Changes to Terms</h2>

                            <p>
                                We may modify these Terms at any time. Material changes will be communicated through
                                email or platform notifications at least 30 days before taking effect. Continued use
                                after changes constitutes acceptance.
                            </p>

                            <h2 className="text-2xl font-bold mt-12 mb-6">15. Contact Information</h2>

                            <p>For questions about these Terms, please contact us:</p>

                            <div className="bg-gray-50 p-6 rounded-lg mt-6">
                                <p>
                                    <strong>Trade Afrika Limited</strong>
                                </p>
                                <p>Legal Department</p>
                                <p>Email: legal@tradeafrika.com</p>
                                <p>Phone: +234 1 234 5678</p>
                                <p>Address: Victoria Island, Lagos, Nigeria</p>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
                                <p className="text-green-800 font-medium mb-0">
                                    These Terms of Service are effective as of the date last updated above and remain in
                                    effect until modified or terminated in accordance with these terms.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
