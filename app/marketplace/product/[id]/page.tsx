"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ArrowLeft,
  Star,
  MapPin,
  ShoppingCart,
  MessageSquare,
  Heart,
  Share2,
  Package,
  Shield,
  Truck,
  Award,
} from "lucide-react"
import { mockProducts, mockSuppliers, type Product, type Supplier } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null)
  const [supplier, setSupplier] = useState<Supplier | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [rfqMessage, setRfqMessage] = useState("")
  const [isRfqDialogOpen, setIsRfqDialogOpen] = useState(false)
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const productId = params.id as string
    const foundProduct = mockProducts.find((p) => p.id === productId)
    if (foundProduct) {
      setProduct(foundProduct)
      const foundSupplier = mockSuppliers.find((s) => s.id === foundProduct.sellerId)
      setSupplier(foundSupplier || null)
    }
  }, [params.id])

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product?.name} has been added to your cart.`,
    })
  }

  const handleSendRFQ = () => {
    toast({
      title: "RFQ Sent",
      description: "Your request for quotation has been sent to the supplier.",
    })
    setIsRfqDialogOpen(false)
    setRfqMessage("")
  }

  const handleContactSupplier = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the supplier.",
    })
  }

  if (!product || !supplier) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Product not found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">The product you're looking for doesn't exist.</p>
          <Link href="/marketplace">
            <Button>Back to Marketplace</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-950 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`${product.image}&variant=${i}`}
                  alt={`${product.name} view ${i}`}
                  className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{product.category}</Badge>
                {product.inStock ? (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{product.country}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{product.sellerRating} (24 reviews)</span>
                </div>
              </div>
            </div>

            <div className="text-4xl font-bold text-primary">
              ${product.price}
              <span className="text-lg font-normal text-gray-500 ml-2">per unit</span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                <span className="text-sm">Min. Order: {product.minOrderQuantity} units</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">Verified Supplier</span>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Label htmlFor="quantity">Quantity:</Label>
                <Input
                  id="quantity"
                  type="number"
                  min={product.minOrderQuantity}
                  value={quantity}
                  onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                  className="w-24"
                />
                <span className="text-sm text-gray-500">(Min: {product.minOrderQuantity})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button onClick={handleAddToCart} className="gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Dialog open={isRfqDialogOpen} onOpenChange={setIsRfqDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <MessageSquare className="h-4 w-4" />
                      Request Quote
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Request for Quotation</DialogTitle>
                      <DialogDescription>Send a custom quote request to the supplier</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="rfq-quantity">Quantity</Label>
                        <Input
                          id="rfq-quantity"
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="rfq-message">Message</Label>
                        <Textarea
                          id="rfq-message"
                          placeholder="Describe your requirements, delivery timeline, etc."
                          value={rfqMessage}
                          onChange={(e) => setRfqMessage(e.target.value)}
                          rows={4}
                        />
                      </div>
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setIsRfqDialogOpen(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleSendRFQ}>Send RFQ</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>

        {/* Supplier Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Supplier Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={supplier.logo || "/placeholder.svg"} />
                <AvatarFallback>{supplier.companyName.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold">{supplier.companyName}</h3>
                  {supplier.verified && (
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      ✓ Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{supplier.country}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{supplier.rating} rating</span>
                  </div>
                  <span>{supplier.totalProducts} products</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{supplier.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleContactSupplier}>
                    Contact Supplier
                  </Button>
                  <Link href={`/marketplace/supplier/${supplier.id}`}>
                    <Button variant="outline">View All Products</Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}:</span>
                      <span className="text-gray-600 dark:text-gray-400">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{product.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Premium quality sourced directly from local suppliers</li>
                      <li>Sustainable and eco-friendly production methods</li>
                      <li>Available in bulk quantities for wholesale</li>
                      <li>Quality guaranteed with full traceability</li>
                      <li>Compliant with international export standards</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
                <CardDescription>What buyers are saying about this product</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="flex items-center gap-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{product.sellerRating}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.floor(product.sellerRating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">24 reviews</div>
                    </div>
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-2 mb-1">
                          <span className="text-sm w-8">{rating}★</span>
                          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded">
                            <div
                              className="h-2 bg-yellow-400 rounded"
                              style={{ width: `${rating === 5 ? 60 : rating === 4 ? 25 : rating === 3 ? 10 : 5}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-500 w-8">
                            {rating === 5 ? 14 : rating === 4 ? 6 : rating === 3 ? 2 : rating === 2 ? 1 : 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div className="space-y-4">
                    {[
                      {
                        name: "Sarah Johnson",
                        rating: 5,
                        date: "2 weeks ago",
                        comment:
                          "Excellent quality product. Fast delivery and great packaging. Will definitely order again!",
                      },
                      {
                        name: "Michael Chen",
                        rating: 4,
                        date: "1 month ago",
                        comment:
                          "Good product overall, but delivery took longer than expected. Quality is as described.",
                      },
                      {
                        name: "Amara Okafor",
                        rating: 5,
                        date: "1 month ago",
                        comment: "Outstanding quality and service. The supplier was very responsive to our questions.",
                      },
                    ].map((review, index) => (
                      <div key={index} className="border-b pb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{review.name}</div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-3 w-3 ${
                                      star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping & Returns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Shipping Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Standard Shipping:</span>
                        <span>5-7 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Express Shipping:</span>
                        <span>2-3 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>International:</span>
                        <span>7-14 business days</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Free shipping:</span>
                        <span>Orders over $500</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Packaging:</span>
                        <span>Eco-friendly materials</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tracking:</span>
                        <span>Available for all orders</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Return Policy</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• 30-day return policy for unused items</li>
                    <li>• Items must be in original packaging</li>
                    <li>• Return shipping costs may apply</li>
                    <li>• Refunds processed within 5-7 business days</li>
                    <li>• Quality guarantee - full refund for defective items</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Payment Terms</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Secure payment processing</li>
                    <li>• Multiple payment options available</li>
                    <li>• Escrow service for large orders</li>
                    <li>• Trade credit available for verified buyers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
