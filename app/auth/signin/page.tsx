"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useAuth } from "@/components/providers/auth-provider"
import { useToast } from "@/hooks/use-toast"

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const router = useRouter()
  const { login } = useAuth()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Mock successful login
    const userData = {
      id: "user1",
      email: formData.email,
      firstName: "John",
      lastName: "Doe",
      role: "buyer" as const,
      companyName: "Test Company Ltd",
    }

    login(userData)
    toast({
      title: "Success",
      description: "Signed in successfully!",
    })
    router.push("/marketplace")
  }

  const handleSocialLogin = (provider: string) => {
    // Mock social login
    const userData = {
      id: "user1",
      email: `user@${provider}.com`,
      firstName: "John",
      lastName: "Doe",
      role: "buyer" as const,
      companyName: "Test Company Ltd",
    }

    login(userData)
    toast({
      title: "Success",
      description: `Signed in with ${provider}!`,
    })
    router.push("/marketplace")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-orange-600">Sign In</CardTitle>
          <CardDescription>Welcome back to Trade Afrika</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full bg-transparent" onClick={() => handleSocialLogin("Google")}>
              Sign in with Google
            </Button>

            <Button variant="outline" className="w-full bg-transparent" onClick={() => handleSocialLogin("LinkedIn")}>
              Sign in with LinkedIn
            </Button>

            <Separator className="my-4" />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
