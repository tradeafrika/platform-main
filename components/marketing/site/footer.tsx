import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Trade Afrika</h3>
                        <p className="text-gray-400">
                            Connecting African suppliers with global buyers for sustainable trade growth.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Platform</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/marketplace" className="hover:text-white">
                                    Marketplace
                                </Link>
                            </li>
                            <li>
                                <Link href="/suppliers" className="hover:text-white">
                                    Suppliers
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories" className="hover:text-white">
                                    Categories
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-white">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/help" className="hover:text-white">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Trade Afrika. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
