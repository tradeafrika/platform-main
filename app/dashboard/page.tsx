"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, MessageSquare, CreditCard, TrendingUp } from "lucide-react"
import { mockOrders, mockRFQs, mockTransactions } from "@/lib/mock-data"

export default function DashboardPage() {
  const recentOrders = mockOrders.slice(0, 3)
  const recentRFQs = mockRFQs.slice(0, 3)
  const recentTransactions = mockTransactions.slice(0, 3)

  const totalOrderValue = mockOrders.reduce((sum, order) => sum + order.totalPrice, 0)
  const pendingRFQs = mockRFQs.filter((rfq) => rfq.status === "pending").length
  const completedTransactions = mockTransactions.filter((txn) => txn.status === "completed").length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your account.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Order Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalOrderValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending RFQs</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingRFQs}</div>
            <p className="text-xs text-muted-foreground">Awaiting responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Transactions</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTransactions}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Orders */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Current Orders
            </CardTitle>
            <CardDescription>Your recent orders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{order.productName}</p>
                  <p className="text-sm text-gray-500">#{order.id}</p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      order.status === "delivered"
                        ? "default"
                        : order.status === "shipped"
                          ? "secondary"
                          : order.status === "confirmed"
                            ? "outline"
                            : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                  <p className="text-sm font-medium">${order.totalPrice}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Current RFQs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Current RFQs
            </CardTitle>
            <CardDescription>Your quote requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentRFQs.map((rfq) => (
              <div key={rfq.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{rfq.productName}</p>
                  <p className="text-sm text-gray-500">Qty: {rfq.quantity}</p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      rfq.status === "accepted"
                        ? "default"
                        : rfq.status === "quoted"
                          ? "secondary"
                          : rfq.status === "pending"
                            ? "outline"
                            : "destructive"
                    }
                  >
                    {rfq.status}
                  </Badge>
                  <p className="text-sm font-medium">${rfq.targetPrice}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Transaction Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Your financial activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div>
                  <p className="font-medium capitalize">{transaction.type.replace("_", " ")}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      transaction.status === "completed"
                        ? "default"
                        : transaction.status === "pending"
                          ? "outline"
                          : "destructive"
                    }
                  >
                    {transaction.status}
                  </Badge>
                  <p className="text-sm font-medium">${transaction.amount}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
