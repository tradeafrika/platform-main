"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/marketing/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { useAuth } from "@/components/providers/auth-provider"

export function SiteHeader() {
  const { isAuthenticated, user } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">{/* Search can go here later */}</div>
          <nav className="flex items-center space-x-2">
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Welcome, {user?.firstName}</span>
                <Button asChild variant="default">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button asChild variant="ghost">
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/create-account">Get Started</Link>
                </Button>
              </div>
            )}
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
