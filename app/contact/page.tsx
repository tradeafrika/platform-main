'use client'

import Footer from '@/components/marketing/site/footer'
import { SiteHeader } from '@/components/marketing/site/header/site-header'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import commonLogo from "@/assets/tradeafrikalogo.png"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('')

        try {
            // Replace this with your actual form submission logic
            // This could be an API call to your backend, email service, etc.
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSubmitStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                })
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            setSubmitStatus('error')
        }

        setIsSubmitting(false)
    }

    return (
        <div>
            <SiteHeader />
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-12">
                    <Image
                        src={commonLogo}
                        alt="TradeAfrika"
                        width={120}
                        height={120}
                        className="rounded-full object-cover"
                    />
                    <h1 className="mt-6 text-3xl font-bold text-gray-900">Get in Touch</h1>
                    <p className="mt-2 text-gray-600 text-center max-w-2xl">
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                    placeholder="+256 xxx xxx xxx"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="support">Customer Support</option>
                                    <option value="business">Business Opportunity</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition resize-vertical"
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white px-6 py-3 rounded-md text-lg font-medium transition"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                                    <p className="text-green-800 text-sm">
                                        Thank you for your message! We'll get back to you soon.
                                    </p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                                    <p className="text-red-800 text-sm">
                                        Sorry, there was an error sending your message. Please try again.
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Information & WhatsApp */}
                    <div className="space-y-8">
                        {/* WhatsApp Section */}
                        <div className="bg-emerald-50 rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Chat on WhatsApp</h3>
                            <p className="text-gray-600 mb-6">
                                For immediate assistance, chat with us directly on WhatsApp
                            </p>
                            <Link
                                href="https://wa.me/256726444638"
                                target="_blank"
                                className="inline-block"
                            >
                                <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full text-lg font-medium transition">
                                    Continue to Chat
                                </button>
                            </Link>
                            <p className="mt-4 text-sm text-gray-600">Don't have WhatsApp yet?</p>
                            <Link href="https://www.whatsapp.com/download" target="_blank" className="text-emerald-600 underline text-sm">
                                Download WhatsApp
                            </Link>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gray-50 rounded-lg p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 text-emerald-600 mt-1">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Address</p>
                                        <p className="text-gray-600">Kampala, Central Region, Uganda</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 text-emerald-600 mt-1">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Phone</p>
                                        <p className="text-gray-600">+256 726 444 638</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 text-emerald-600 mt-1">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Email</p>
                                        <p className="text-gray-600">info@tradeafrika.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 text-emerald-600 mt-1">
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Business Hours</p>
                                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}