import Footer from '@/components/marketing/site/footer'
import { SiteHeader } from '@/components/marketing/site/header/site-header'
import Image from 'next/image'
import Link from 'next/link'
import commonLogo from "@/assets/tradeafrikalogo.png"


export default function ContactPage() {
    return (
        <div>
            <SiteHeader />
            <div className="mt-12 flex flex-col items-center mb-8">
                <Image
                    src={commonLogo} // Upload the profile photo to /public
                    alt="Amrutha Wellness Center"
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                />
                <h1 className="mt-6 text-2xl font-medium text-gray-800">TradeAfrika</h1>

                <Link
                    href="https://wa.me/256726444638" // Replace with your WhatsApp number
                    target="_blank"
                    className="mt-6"
                >
                    <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full text-lg font-medium transition">
                        Continue to Chat
                    </button>
                </Link>

                <p className="mt-8 text-gray-600">Don't have WhatsApp yet?</p>
                <Link href="https://www.whatsapp.com/download" target="_blank" className="text-blue-600 underline">
                    Download
                </Link>
            </div>
            <Footer />
        </div>
    )
}
