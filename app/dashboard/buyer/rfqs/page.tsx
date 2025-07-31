"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Filter, Plus, Eye, MessageSquare, Clock, CheckCircle, XCircle } from "lucide-react"
import { mockRFQs, mockCategories, type RFQ } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"

export default function BuyerRFQsPage() {
  const [rfqs] = useState<RFQ[]>(mockRFQs)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newRFQ, setNewRFQ] = useState({
    productName: "",
    category: "",
    description: "",
    quantity: "",
    targetPrice: "",
    validUntil: "",
  })
  const { toast } = useToast()

  const filteredRFQs = rfqs.filter((rfq) => {
    const matchesSearch =
      rfq.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rfq.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rfq.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || rfq.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted":
        return "default"
      case "quoted":
        return "secondary"
      case "pending":
        return "outline"
      case "rejected":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "accepted":
        return <CheckCircle className="h-4 w-4" />
      case "quoted":
        return <MessageSquare className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "rejected":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const handleCreateRFQ = () => {
    toast({
      title: "RFQ Created",
      description: "Your request for quotation has been sent to suppliers.",
    })
    setIsCreateDialogOpen(false)
    setNewRFQ({
      productName: "",
      category: "",
      description: "",
      quantity: "",
      targetPrice: "",
      validUntil: "",
    })
  }

  const rfqsByStatus = {
    all: rfqs.length,
    pending: rfqs.filter((r) => r.status === "pending").length,
    quoted: rfqs.filter((r) => r.status === "quoted").length,
    accepted: rfqs.filter((r) => r.status === "accepted").length,
    rejected: rfqs.filter((r) => r.status === "rejected").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Request for Quotes (RFQs)</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your quote requests and supplier responses</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create New RFQ
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New RFQ</DialogTitle>
              <DialogDescription>Send a request for quotation to suppliers</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name</Label>
                  <Input
                    id="productName"
                    value={newRFQ.productName}
                    onChange={(e) => setNewRFQ({ ...newRFQ, productName: e.target.value })}
                    placeholder="e.g., Premium Coffee Beans"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={newRFQ.category} onValueChange={(value) => setNewRFQ({ ...newRFQ, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockCategories.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newRFQ.description}
                  onChange={(e) => setNewRFQ({ ...newRFQ, description: e.target.value })}
                  placeholder="Describe your requirements, specifications, quality standards, etc."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={newRFQ.quantity}
                    onChange={(e) => setNewRFQ({ ...newRFQ, quantity: e.target.value })}
                    placeholder="e.g., 100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetPrice">Target Price (per unit)</Label>
                  <Input
                    id="targetPrice"
                    type="number"
                    step="0.01"
                    value={newRFQ.targetPrice}
                    onChange={(e) => setNewRFQ({ ...newRFQ, targetPrice: e.target.value })}
                    placeholder="e.g., 25.00"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="validUntil">Valid Until</Label>
                <Input
                  id="validUntil"
                  type="date"
                  value={newRFQ.validUntil}
                  onChange={(e) => setNewRFQ({ ...newRFQ, validUntil: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateRFQ}>Create RFQ</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total RFQs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{rfqsByStatus.all}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{rfqsByStatus.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Quoted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{rfqsByStatus.quoted}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Accepted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{rfqsByStatus.accepted}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search RFQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All RFQs ({rfqsByStatus.all})</SelectItem>
                <SelectItem value="pending">Pending ({rfqsByStatus.pending})</SelectItem>
                <SelectItem value="quoted">Quoted ({rfqsByStatus.quoted})</SelectItem>
                <SelectItem value="accepted">Accepted ({rfqsByStatus.accepted})</SelectItem>
                <SelectItem value="rejected">Rejected ({rfqsByStatus.rejected})</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* RFQs Table */}
      <Tabs defaultValue="table" className="space-y-4">
        <TabsList>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="cards">Card View</TabsTrigger>
        </TabsList>

        <TabsContent value="table">
          <Card>
            <CardHeader>
              <CardTitle>RFQ History</CardTitle>
              <CardDescription>
                {filteredRFQs.length} RFQ{filteredRFQs.length !== 1 ? "s" : ""} found
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>RFQ ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Target Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Responses</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRFQs.map((rfq) => (
                    <TableRow key={rfq.id}>
                      <TableCell className="font-medium">#{rfq.id}</TableCell>
                      <TableCell>{rfq.productName}</TableCell>
                      <TableCell>{rfq.quantity}</TableCell>
                      <TableCell className="font-medium">${rfq.targetPrice.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(rfq.status)} className="gap-1">
                          {getStatusIcon(rfq.status)}
                          {rfq.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{rfq.responses.length}</TableCell>
                      <TableCell>{new Date(rfq.validUntil).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {filteredRFQs.length === 0 && (
                <div className="text-center py-8">
                  <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="text-gray-500 mt-2">No RFQs found matching your criteria.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards">
          <div className="grid gap-4">
            {filteredRFQs.map((rfq) => (
              <Card key={rfq.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">#{rfq.id}</h3>
                        <Badge variant={getStatusColor(rfq.status)} className="gap-1">
                          {getStatusIcon(rfq.status)}
                          {rfq.status}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-medium">{rfq.productName}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{rfq.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>Quantity: {rfq.quantity}</span>
                        <span>•</span>
                        <span>Target: ${rfq.targetPrice}</span>
                        <span>•</span>
                        <span>Valid until: {new Date(rfq.validUntil).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MessageSquare className="h-4 w-4" />
                        <span>
                          {rfq.responses.length} response{rfq.responses.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Show responses if any */}
                  {rfq.responses.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <h5 className="font-medium mb-2">Latest Responses:</h5>
                      <div className="space-y-2">
                        {rfq.responses.slice(0, 2).map((response) => (
                          <div key={response.id} className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium text-sm">{response.sellerName}</span>
                              <span className="text-lg font-bold text-primary">${response.quotedPrice}</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{response.message}</p>
                            <span className="text-xs text-gray-500">
                              {new Date(response.responseDate).toLocaleDateString()}
                            </span>
                          </div>
                        ))}
                        {rfq.responses.length > 2 && (
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            View all {rfq.responses.length} responses
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {filteredRFQs.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No RFQs found</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Try adjusting your search criteria or create a new RFQ
                  </p>
                  <Button onClick={() => setIsCreateDialogOpen(true)}>Create Your First RFQ</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
