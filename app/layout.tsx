import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { AuthProvider } from '@/components/providers/auth-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Trade Afrika - B2B Marketplace for African Businesses',
    description:
        'Connect African suppliers with global buyers. Discover authentic products, build lasting partnerships, and grow your business across Africa.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <AuthProvider>
                        {children}
                        <Toaster />
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
