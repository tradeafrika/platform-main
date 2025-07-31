"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ShoppingCart, MessageSquare, Star } from "lucide-react"
import { useAuth } from "@/components/providers/auth-provider"
import { mockProducts, type Product } from "@/lib/mock-data"
import { useToast } from "@/hooks/use-toast"
// Add tabs import
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [quoteMessage, setQuoteMessage] = useState("")
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/signin")
      return
    }

    const productId = params["product-id"] as string
    const foundProduct = mockProducts.find((p) => p.id === productId)
    setProduct(foundProduct || null)
  }, [isAuthenticated, params, router])

  const handleStartOrder = () => {
    toast({
      title: "Order Started",
      description: "Your order has been initiated. You'll be redirected to checkout.",
    })
    // In a real app, this would redirect to checkout
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product?.name} has been added to your cart.`,
    })
  }

  const handleRequestQuote = () => {
    toast({
      title: "Quote Requested",
      description: "Your quote request has been sent to the supplier.",
    })
    setQuoteMessage("")
  }

  if (!isAuthenticated || !product) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Marketplace
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary">{product.category}</Badge>
                <span className="text-gray-500">From {product.country}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm">4.8 (24 reviews)</span>
                </div>
              </div>
              <p className="text-4xl font-bold text-green-600 mb-4">${product.price}</p>
              <p className="text-gray-700 mb-6">{product.description}</p>
            </div>

            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Seller Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{product.sellerName}</p>
                <p className="text-gray-600">Based in {product.country}</p>
                <p className="text-sm text-gray-500 mt-2">Verified supplier with 5+ years experience</p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Label htmlFor="quantity">Quantity:</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                  className="w-24"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button onClick={handleStartOrder} className="w-full">
                  Start Order
                </Button>
                <Button variant="outline" onClick={handleAddToCart} className="w-full bg-transparent">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Request Quote */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Request Custom Quote
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe your specific requirements, quantity, delivery timeline, etc."
                  value={quoteMessage}
                  onChange={(e) => setQuoteMessage(e.target.value)}
                  rows={4}
                />
                <Button onClick={handleRequestQuote} className="w-full">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Premium quality sourced directly from local suppliers</li>
                      <li>Sustainable and eco-friendly production methods</li>
                      <li>Available in bulk quantities for wholesale</li>
                      <li>Quality guaranteed with full traceability</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">John D.</span>
                        <span className="text-sm text-gray-500">2 weeks ago</span>
                      </div>
                      <p className="text-gray-700">Excellent quality product. Fast delivery and great packaging.</p>
                    </div>
                    <div className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="font-medium">Sarah M.</span>
                        <span className="text-sm text-gray-500">1 month ago</span>
                      </div>
                      <p className="text-gray-700">Good product overall, but delivery took longer than expected.</p>
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
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Shipping Information</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Standard shipping: 5-7 business days</li>
                      <li>• Express shipping: 2-3 business days</li>
                      <li>• Free shipping on orders over $500</li>
                      <li>• International shipping available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Return Policy</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• 30-day return policy</li>
                      <li>• Items must be in original condition</li>
                      <li>• Return shipping costs apply</li>
                      <li>• Refunds processed within 5-7 business days</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
