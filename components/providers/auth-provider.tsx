"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: "buyer" | "seller" | "both" | "admin"
  currentView: "buyer" | "seller" | "admin"
  companyName?: string
  country?: string
  phoneNumber?: string
  verified?: boolean
  logo?: string
}

interface AuthContextType {
  user: User | null
  login: (user: User) => void
  logout: () => void
  switchRole: (role: "buyer" | "seller" | "admin") => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("trade-afrika-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    localStorage.setItem("trade-afrika-user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("trade-afrika-user")
  }

  const switchRole = (role: "buyer" | "seller" | "admin") => {
    if (user && (user.role === "both" || user.role === role || user.role === "admin")) {
      const updatedUser = { ...user, currentView: role }
      setUser(updatedUser)
      localStorage.setItem("trade-afrika-user", JSON.stringify(updatedUser))
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        switchRole,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
