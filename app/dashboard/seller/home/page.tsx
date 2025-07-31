"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  MessageSquare,
  Package,
  Plus,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function SellerDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, John</h1>
        <p className="text-gray-500 dark:text-gray-400">Here's what's happening with your business today.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$75,231.89</div>
            <p className="text-xs text-muted-foreground">+15.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+3 new since last login</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">RFQ Requests</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">9</div>
            <p className="text-xs text-muted-foreground">5 awaiting your response</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Buyers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+6 new this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="rfqs">RFQs</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Recent Activity */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest business activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 rounded-md border p-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <ShoppingBag className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">New order received</p>
                    <p className="text-sm text-muted-foreground">Premium Coffee Beans - 100kg</p>
                  </div>
                  <div className="text-sm text-muted-foreground">1 hour ago</div>
                </div>
                <div className="flex items-center gap-4 rounded-md border p-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">New RFQ received</p>
                    <p className="text-sm text-muted-foreground">Organic Shea Butter - 200kg</p>
                  </div>
                  <div className="text-sm text-muted-foreground">3 hours ago</div>
                </div>
                <div className="flex items-center gap-4 rounded-md border p-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Payment received</p>
                    <p className="text-sm text-muted-foreground">$2,599.00</p>
                  </div>
                  <div className="text-sm text-muted-foreground">Yesterday</div>
                </div>
                <div className="flex items-center gap-4 rounded-md border p-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Package className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Product listing updated</p>
                    <p className="text-sm text-muted-foreground">Handwoven Textiles - Stock: 45</p>
                  </div>
                  <div className="text-sm text-muted-foreground">2 days ago</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common seller tasks</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                <Link href="/dashboard/seller/products">
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <Plus className="h-4 w-4" />
                    Add New Product
                  </Button>
                </Link>
                <Link href="/dashboard/seller/rfqs">
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <MessageSquare className="h-4 w-4" />
                    Respond to RFQs
                  </Button>
                </Link>
                <Link href="/dashboard/seller/orders">
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <ShoppingBag className="h-4 w-4" />
                    Manage Orders
                  </Button>
                </Link>
                <Link href="/dashboard/seller/invoices">
                  <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
                    <Download className="h-4 w-4" />
                    Create Invoice
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Shipments */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Shipments</CardTitle>
              <CardDescription>Orders that need to be shipped soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <p className="font-medium">Due Aug 2, 2023</p>
                  </div>
                  <p className="mt-2 font-medium">Premium Coffee Beans</p>
                  <p className="text-sm text-muted-foreground">100kg - African Imports Ltd</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      Processing
                    </div>
                    <Button variant="outline" size="sm">
                      Update Status
                    </Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <p className="font-medium">Due Aug 5, 2023</p>
                  </div>
                  <p className="mt-2 font-medium">Organic Shea Butter</p>
                  <p className="text-sm text-muted-foreground">50kg - Continental Trading Co</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      Processing
                    </div>
                    <Button variant="outline" size="sm">
                      Update Status
                    </Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <p className="font-medium">Due Aug 10, 2023</p>
                  </div>
                  <p className="mt-2 font-medium">Handwoven Textiles</p>
                  <p className="text-sm text-muted-foreground">20 units - Global Traders Inc</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      Confirmed
                    </div>
                    <Button variant="outline" size="sm">
                      Update Status
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sales Overview */}
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="flex-1">
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Your sales performance by product</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-1 bg-transparent">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <div className="flex h-full items-center justify-center">
                  <BarChart className="h-16 w-16 text-gray-300 dark:text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Your latest customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order #12345</p>
                      <p className="text-sm text-muted-foreground">Premium Coffee Beans - 100kg</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$2,599.00</p>
                      <p className="text-sm text-muted-foreground">Jul 28, 2023</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        Processing
                      </div>
                      <p className="text-sm text-muted-foreground">African Imports Ltd</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Update Status
                    </Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order #12344</p>
                      <p className="text-sm text-muted-foreground">Organic Shea Butter - 50kg</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$2,250.00</p>
                      <p className="text-sm text-muted-foreground">Jul 25, 2023</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        Confirmed
                      </div>
                      <p className="text-sm text-muted-foreground">Continental Trading Co</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Update Status
                    </Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Order #12343</p>
                      <p className="text-sm text-muted-foreground">Handwoven Textiles - 20 units</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$2,400.00</p>
                      <p className="text-sm text-muted-foreground">Jul 20, 2023</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        Shipped
                      </div>
                      <p className="text-sm text-muted-foreground">Global Traders Inc</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Update Status
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Link href="/dashboard/seller/orders">
                  <Button variant="outline">View All Orders</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="rfqs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent RFQs</CardTitle>
              <CardDescription>Your latest requests for quotation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">RFQ #5678</p>
                      <p className="text-sm text-muted-foreground">Premium Coffee Beans - 500kg</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Target: $20.00/kg</p>
                      <p className="text-sm text-muted-foreground">Jul 26, 2023</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                        Pending Response
                      </div>
                      <p className="text-sm text-muted-foreground">African Imports Ltd</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Send Quote
                    </Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">RFQ #5677</p>
                      <p className="text-sm text-muted-foreground">Organic Shea Butter - 200kg</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Target: $40.00/kg</p>
                      <p className="text-sm text-muted-foreground">Jul 22, 2023</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        Quote Sent
                      </div>
                      <p className="text-sm text-muted-foreground">Continental Trading Co</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">RFQ #5676</p>
                      <p className="text-sm text-muted-foreground">Handwoven Textiles - 50 units</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Target: $100.00/unit</p>
                      <p className="text-sm text-muted-foreground">Jul 18, 2023</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        Accepted
                      </div>
                      <p className="text-sm text-muted-foreground">Global Traders Inc</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Link href="/dashboard/seller/rfqs">
                  <Button variant="outline">View All RFQs</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Business Analytics</CardTitle>
              <CardDescription>Your business trends and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Revenue Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <div className="text-2xl font-bold">+15.2%</div>
                    </div>
                    <p className="text-xs text-muted-foreground">Compared to last quarter</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Top Product</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Premium Coffee Beans</div>
                    <p className="text-xs text-muted-foreground">40% of total revenue</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Buyer Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8 Countries</div>
                    <p className="text-xs text-muted-foreground">Across 3 regions</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 h-80 w-full">
                <div className="flex h-full items-center justify-center">
                  <BarChart className="h-16 w-16 text-gray-300 dark:text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
