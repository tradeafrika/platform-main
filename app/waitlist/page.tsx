'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { useToast } from '@/hooks/use-toast'
import { Users, Building2, TrendingUp, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { SiteHeader } from '@/components/marketing/site/header/site-header'
import Footer from '@/components/marketing/site/footer'

export default function WaitlistPage() {
    const [userType, setUserType] = useState<'buyer' | 'seller' | ''>('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        companyName: '',
        agreeToTerms: false,
        agreeToMarketing: false,
    })
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
    
        if (!userType) {
            toast({
                title: 'Please select your role',
                description: "Choose whether you're joining as a buyer or seller.",
                variant: 'destructive',
            })
            return
        }
    
        if (userType === 'seller' && !formData.companyName.trim()) {
            toast({
                title: 'Company name required',
                description: 'Sellers must provide a company name.',
                variant: 'destructive',
            })
            return
        }
    
        if (!formData.agreeToTerms) {
            toast({
                title: 'Terms agreement required',
                description: 'Please agree to our terms and conditions.',
                variant: 'destructive',
            })
            return
        }
    
        setIsSubmitting(true)
    
        const { data, error } = await supabase.from('waitlist').insert([
            {
                name: formData.name,
                email: formData.email,
                company_name: formData.companyName,
                user_type: userType,
                agree_to_terms: formData.agreeToTerms,
                agree_to_marketing: formData.agreeToMarketing,
            },
        ])
    
        setIsSubmitting(false)
    
        if (error) {
            console.error(error)
            toast({
                title: 'Submission failed',
                description: error.message,
                variant: 'destructive',
            })
            return
        }
    
        setIsSubmitted(true)
        toast({
            title: 'Welcome to the waitlist!',
            description: "We'll notify you when Trade Afrika launches in your region.",
        })
    }
    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

  

    const benefits = {
        buyer: [
            'Access to 10,000+ verified African suppliers',
            'Competitive pricing through bulk purchasing',
            'Streamlined procurement processes',
            'Quality assurance and buyer protection',
            'Multi-currency payment options',
            'Dedicated account management',
        ],
        seller: [
            'Reach 50,000+ potential buyers across Africa',
            'Showcase products to international markets',
            'Integrated payment and logistics solutions',
            'Marketing and promotional tools',
            'Analytics and business insights',
            'Priority customer support',
        ],
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
                <Card className="w-full max-w-md text-center">
                    <CardContent className="p-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">You're on the list!</h2>
                        <p className="text-gray-600 mb-6">
                            Thank you for joining the Trade Afrika waitlist. We'll send you updates about our launch and
                            early access opportunities.
                        </p>
                        <div className="space-y-3">
                            <Button asChild className="w-full">
                                <Link href="/">Return Home</Link>
                            </Button>
                            <Button variant="outline" asChild className="w-full bg-transparent">
                                <Link href="/about">Learn More About Us</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <SiteHeader />
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
                {/* Hero Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-afrika to-afrikao bg-clip-text text-transparent">
                                Join the Future of African Trade
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-8">
                                Be among the first to access Africa's most comprehensive B2B marketplace. Connect,
                                trade, and grow with businesses across the continent.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Free to join</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Early access benefits</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>No commitment required</span>
                                </div>
                            </div>
                        </div>

                      

                        {/* Main Form */}
                        <div className="max-w-2xl mx-auto">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-2xl text-center">Join the Waitlist</CardTitle>
                                    <p className="text-center text-gray-600">
                                        Choose your role and we'll tailor your experience accordingly
                                    </p>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* User Type Selection */}
                                        <div>
                                            <Label className="text-base font-medium mb-4 block">
                                                I want to join as a:
                                            </Label>
                                            <RadioGroup
                                                value={userType}
                                                onValueChange={(value) => setUserType(value as 'buyer' | 'seller')}
                                            >
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <Card
                                                        className={`cursor-pointer transition-all ${
                                                            userType === 'buyer'
                                                                ? 'ring-2 ring-green-500 bg-green-50'
                                                                : 'hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        <CardContent className="p-4">
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="buyer" id="buyer" />
                                                                <Label
                                                                    htmlFor="buyer"
                                                                    className="cursor-pointer flex-1"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                                            <Users className="w-5 h-5 text-blue-600" />
                                                                        </div>
                                                                        <div>
                                                                            <div className="font-medium">Buyer</div>
                                                                            <div className="text-sm text-gray-600">
                                                                                Source products from suppliers
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Label>
                                                            </div>
                                                        </CardContent>
                                                    </Card>

                                                    <Card
                                                        className={`cursor-pointer transition-all ${
                                                            userType === 'seller'
                                                                ? 'ring-2 ring-green-500 bg-green-50'
                                                                : 'hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        <CardContent className="p-4">
                                                            <div className="flex items-center space-x-2">
                                                                <RadioGroupItem value="seller" id="seller" />
                                                                <Label
                                                                    htmlFor="seller"
                                                                    className="cursor-pointer flex-1"
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                                            <Building2 className="w-5 h-5 text-green-600" />
                                                                        </div>
                                                                        <div>
                                                                            <div className="font-medium">Seller</div>
                                                                            <div className="text-sm text-gray-600">
                                                                                Sell products to businesses
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Label>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </RadioGroup>
                                        </div>

                                        {/* Form Fields */}
                                        {userType && (
                                            <div className="space-y-4">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <Label htmlFor="name">Full Name *</Label>
                                                        <Input
                                                            id="name"
                                                            value={formData.name}
                                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                                            placeholder="Enter your full name"
                                                            required
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="email">Email Address *</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                                            placeholder="Enter your email"
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <Label htmlFor="companyName">
                                                        Company Name {userType === 'seller' ? '*' : '(Optional)'}
                                                    </Label>
                                                    <Input
                                                        id="companyName"
                                                        value={formData.companyName}
                                                        onChange={(e) =>
                                                            handleInputChange('companyName', e.target.value)
                                                        }
                                                        placeholder="Enter your company name"
                                                        required={userType === 'seller'}
                                                    />
                                                </div>

                                                {/* Benefits Section */}
                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                    <h3 className="font-medium mb-3">
                                                        What you'll get as a {userType}:
                                                    </h3>
                                                    <div className="grid gap-2">
                                                        {benefits[userType].map((benefit, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-2 text-sm"
                                                            >
                                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                                <span>{benefit}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Agreements */}
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-2">
                                                        <Checkbox
                                                            id="terms"
                                                            checked={formData.agreeToTerms}
                                                            onCheckedChange={(checked) =>
                                                                handleInputChange('agreeToTerms', checked as boolean)
                                                            }
                                                        />
                                                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                                                            I agree to the{' '}
                                                            <Link
                                                                href="/terms"
                                                                className="text-green-600 hover:underline"
                                                            >
                                                                Terms of Service
                                                            </Link>{' '}
                                                            and{' '}
                                                            <Link
                                                                href="/privacy"
                                                                className="text-green-600 hover:underline"
                                                            >
                                                                Privacy Policy
                                                            </Link>
                                                            *
                                                        </Label>
                                                    </div>

                                                    <div className="flex items-start space-x-2">
                                                        <Checkbox
                                                            id="marketing"
                                                            checked={formData.agreeToMarketing}
                                                            onCheckedChange={(checked) =>
                                                                handleInputChange(
                                                                    'agreeToMarketing',
                                                                    checked as boolean
                                                                )
                                                            }
                                                        />
                                                        <Label htmlFor="marketing" className="text-sm leading-relaxed">
                                                            I'd like to receive updates about Trade Afrika, including
                                                            launch notifications and exclusive offers
                                                        </Label>
                                                    </div>
                                                </div>

                                                <Button
                                                    type="submit"
                                                    className="w-full"
                                                    size="lg"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? (
                                                        'Joining Waitlist...'
                                                    ) : (
                                                        <>
                                                            Join Waitlist
                                                            <ArrowRight className="w-4 h-4 ml-2" />
                                                        </>
                                                    )}
                                                </Button>
                                            </div>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Additional Info */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Why Join Early?</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Early Access</h3>
                                    <p className="text-gray-600">
                                        Be among the first 5,000 users to access our platform with exclusive features
                                        and benefits.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <TrendingUp className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Special Pricing</h3>
                                    <p className="text-gray-600">
                                        Enjoy discounted transaction fees and premium features at no extra cost for your
                                        first year.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Building2 className="w-8 h-8 text-purple-600" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Priority Support</h3>
                                    <p className="text-gray-600">
                                        Get dedicated onboarding assistance and priority customer support to maximize
                                        your success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}
