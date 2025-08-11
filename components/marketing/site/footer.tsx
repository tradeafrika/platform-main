import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <div
                className="absolute inset-0 opacity-20 bg-no-repeat bg-center bg-contain"
                style={{
                    backgroundImage: `url("/images/afrika.png")`,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    minHeight: '200px'
                }}
            />


            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Trade Afrika</h3>
                        <p className="text-gray-400">
                            Connecting African suppliers with global buyers for sustainable trade growth.
                        </p>
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
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
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