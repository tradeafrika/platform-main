import { SiteHeader } from "@/components/marketing/site/header/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactSalesPage() {
  return (
    <div className="min-h-screen bg-white">
        <SiteHeader/>
      {/* Header Section */}
      <header className="bg-[#008048] text-white py-10 px-6 md:px-20 shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold">Talk to Our Sales Team</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Interested in joining Trade Afrika or want to learn how we can help grow your business?
          Fill out the form and our team will reach out to you shortly.
        </p>
      </header>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-16">
        {/* Contact Info / CTA */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#434946]">Why Contact Us?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Learn how Trade Afrika supports African suppliers and buyers</li>
            <li>Discuss your business needs with our specialists</li>
            <li>Get help setting up your business on the platform</li>
            <li>Explore partnership or investment opportunities</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md">
          <div>
            <Label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="mt-2 w-full"
            />
          </div>

          <div>
            <Label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
              Work Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              className="mt-2 w-full"
            />
          </div>

          <div>
            <Label htmlFor="company" className="block text-left text-sm font-medium text-gray-700">
              Company Name
            </Label>
            <Input
              id="company"
              type="text"
              placeholder="Trade Afrika Ltd."
              className="mt-2 w-full"
            />
          </div>

          <div>
            <Label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">
              Message
            </Label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us more about your business or what you'd like to discuss."
              className="mt-2 w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F46233]"
            ></textarea>
          </div>

          <Button className="w-full bg-[#F46233] hover:bg-[#e35526] text-white font-semibold py-3 rounded-xl text-lg transition duration-200">
            Submit Request
          </Button>
        </form>
      </div>
    </div>
  );
}
