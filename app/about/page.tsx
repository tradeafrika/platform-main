import Footer from '@/components/marketing/site/footer';
import { SiteHeader } from '@/components/marketing/site/header/site-header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Trade Afrika</strong> is on a mission to transform how African businesses trade, connect, and grow.
            We are building Africa’s leading digital B2B marketplace — a trusted platform that simplifies sourcing,
            selling, and global partnership for manufacturers, wholesalers, exporters, and retailers across the continent.
          </p>

          <p>
            Born from the urgent need for visibility, trust, and scale in African commerce, Trade Afrika empowers
            businesses with the tools to showcase products, respond to RFQs, manage orders and invoices, track
            transactions, and gain insights — all in one place.
          </p>

          <p>
            We believe Africa’s economic transformation will come from intra-African trade, tech-enabled supply chains,
            and borderless collaboration. We are designing the digital infrastructure to make that future a reality.
          </p>

          <p>
            Whether you're a supplier in Nairobi, a wholesaler in Accra, a buyer in Kigali, or a distributor in Lagos —
            Trade Afrika gives you a platform to transact confidently, scale efficiently, and build lasting business
            relationships.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
