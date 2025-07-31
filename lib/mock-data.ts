export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  country: string
  image: string
  sellerId: string
  sellerName: string
  sellerRating: number
  inStock: boolean
  minOrderQuantity: number
  specifications: Record<string, string>
  tags: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  productCount: number
}

export interface Supplier {
  id: string
  name: string
  companyName: string
  country: string
  rating: number
  totalProducts: number
  verified: boolean
  logo: string
  description: string
}

export interface Order {
  id: string
  productId: string
  productName: string
  quantity: number
  unitPrice: number
  totalPrice: number
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled"
  orderDate: string
  expectedDelivery: string
  buyerId: string
  sellerId: string
  sellerName: string
}

export interface RFQ {
  id: string
  productName: string
  description: string
  quantity: number
  targetPrice: number
  status: "pending" | "quoted" | "accepted" | "rejected"
  submittedDate: string
  validUntil: string
  buyerId: string
  responses: RFQResponse[]
}

export interface RFQResponse {
  id: string
  rfqId: string
  sellerId: string
  sellerName: string
  quotedPrice: number
  message: string
  responseDate: string
}

export interface Transaction {
  id: string
  type: "escrow" | "payment_received" | "payment_sent"
  amount: number
  date: string
  description: string
  status: "pending" | "completed" | "failed"
}

export interface Invoice {
  id: string
  orderId: string
  buyerId: string
  sellerId: string
  amount: number
  status: "paid" | "unpaid" | "overdue"
  issueDate: string
  dueDate: string
  items: {
    productName: string
    quantity: number
    unitPrice: number
    total: number
  }[]
}

export interface SellerProduct {
  id: string
  name: string
  category: string
  price: number
  stock: number
  status: "active" | "inactive" | "out_of_stock"
  views: number
  quotes: number
  orders: number
  dateAdded: string
}

export interface Buyer {
  id: string
  name: string
  companyName: string
  country: string
  totalOrders: number
  totalSpent: number
  lastOrderDate: string
  reorderRate: number
  status: "active" | "inactive"
}

export const mockCategories: Category[] = [
  { id: "1", name: "Agriculture", slug: "agriculture", productCount: 245 },
  { id: "2", name: "Textiles", slug: "textiles", productCount: 189 },
  { id: "3", name: "Cosmetics", slug: "cosmetics", productCount: 156 },
  { id: "4", name: "Health & Nutrition", slug: "health-nutrition", productCount: 134 },
  { id: "5", name: "Electronics", slug: "electronics", productCount: 98 },
  { id: "6", name: "Machinery", slug: "machinery", productCount: 87 },
  { id: "7", name: "Construction", slug: "construction", productCount: 76 },
  { id: "8", name: "Energy", slug: "energy", productCount: 65 },
]

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Arabica Coffee Beans",
    description:
      "High-quality Arabica coffee beans sourced directly from Ethiopian highlands. Perfect for specialty coffee roasters and distributors.",
    price: 25.99,
    category: "Agriculture",
    country: "Ethiopia",
    image: "/placeholder.svg?height=400&width=400&text=Coffee+Beans",
    sellerId: "seller1",
    sellerName: "Highland Coffee Co.",
    sellerRating: 4.8,
    inStock: true,
    minOrderQuantity: 50,
    specifications: {
      Origin: "Ethiopian Highlands",
      Processing: "Washed",
      Altitude: "1800-2200m",
      "Harvest Season": "October-December",
      "Moisture Content": "10-12%",
      "Screen Size": "15-18",
    },
    tags: ["organic", "fair-trade", "premium", "arabica"],
  },
  {
    id: "2",
    name: "Organic Shea Butter",
    description:
      "Pure, unrefined shea butter perfect for cosmetic and skincare applications. Sustainably sourced from women cooperatives.",
    price: 45.0,
    category: "Cosmetics",
    country: "Ghana",
    image: "/placeholder.svg?height=400&width=400&text=Shea+Butter",
    sellerId: "seller2",
    sellerName: "Ghana Natural Products",
    sellerRating: 4.9,
    inStock: true,
    minOrderQuantity: 20,
    specifications: {
      Purity: "100% Pure",
      Processing: "Cold-pressed",
      Color: "Ivory to Light Yellow",
      "Melting Point": "32-38°C",
      "Saponification Value": "170-190",
      "Iodine Value": "53-75",
    },
    tags: ["organic", "unrefined", "fair-trade", "cosmetic-grade"],
  },
  {
    id: "3",
    name: "Handwoven Kente Textiles",
    description:
      "Traditional handwoven Kente cloth with authentic African patterns. Each piece is unique and crafted by skilled artisans.",
    price: 120.0,
    category: "Textiles",
    country: "Ghana",
    image: "/placeholder.svg?height=400&width=400&text=Kente+Cloth",
    sellerId: "seller3",
    sellerName: "Artisan Textiles Ltd",
    sellerRating: 4.7,
    inStock: true,
    minOrderQuantity: 10,
    specifications: {
      Material: "100% Cotton",
      Dimensions: "2m x 1.5m",
      Pattern: "Traditional Kente",
      Weave: "Hand-woven",
      Care: "Hand wash only",
      Origin: "Bonwire, Ghana",
    },
    tags: ["handmade", "traditional", "cotton", "authentic"],
  },
  {
    id: "4",
    name: "Baobab Fruit Powder",
    description:
      "Nutrient-rich baobab fruit powder, perfect for health supplements and superfood products. High in Vitamin C and antioxidants.",
    price: 35.5,
    category: "Health & Nutrition",
    country: "Senegal",
    image: "/placeholder.svg?height=400&width=400&text=Baobab+Powder",
    sellerId: "seller4",
    sellerName: "Senegal Superfoods",
    sellerRating: 4.6,
    inStock: true,
    minOrderQuantity: 25,
    specifications: {
      "Vitamin C": "280-300mg/100g",
      Processing: "Freeze-dried",
      Certification: "Organic, HACCP",
      Moisture: "<5%",
      Protein: "2.3g/100g",
      Fiber: "44.5g/100g",
    },
    tags: ["superfood", "organic", "vitamin-c", "antioxidant"],
  },
  {
    id: "5",
    name: "Cocoa Beans Premium Grade",
    description:
      "Premium grade cocoa beans from Ivory Coast. Ideal for chocolate manufacturing and confectionery applications.",
    price: 18.75,
    category: "Agriculture",
    country: "Ivory Coast",
    image: "/placeholder.svg?height=400&width=400&text=Cocoa+Beans",
    sellerId: "seller5",
    sellerName: "Ivorian Cocoa Exports",
    sellerRating: 4.8,
    inStock: true,
    minOrderQuantity: 100,
    specifications: {
      Grade: "Premium",
      "Bean Count": "100-110 beans/100g",
      Moisture: "7.5% max",
      "Fat Content": "50-57%",
      "pH Level": "5.3-5.8",
      Fermentation: "Well fermented",
    },
    tags: ["premium", "fermented", "chocolate-grade", "export-quality"],
  },
  {
    id: "6",
    name: "Moringa Leaf Powder",
    description:
      "Pure moringa leaf powder packed with nutrients. Excellent for dietary supplements and health products.",
    price: 28.0,
    category: "Health & Nutrition",
    country: "Kenya",
    image: "/placeholder.svg?height=400&width=400&text=Moringa+Powder",
    sellerId: "seller6",
    sellerName: "Kenya Moringa Co.",
    sellerRating: 4.5,
    inStock: true,
    minOrderQuantity: 30,
    specifications: {
      Protein: "25-30%",
      Iron: "25-30mg/100g",
      Calcium: "2000mg/100g",
      "Vitamin A": "16.3mg/100g",
      Processing: "Shade dried",
      "Mesh Size": "80-100",
    },
    tags: ["superfood", "protein-rich", "vitamins", "minerals"],
  },
]

export const mockSuppliers: Supplier[] = [
  {
    id: "seller1",
    name: "John Mensah",
    companyName: "Highland Coffee Co.",
    country: "Ethiopia",
    rating: 4.8,
    totalProducts: 12,
    verified: true,
    logo: "/placeholder.svg?height=100&width=100&text=HC",
    description: "Premium coffee exporter with 15+ years experience in Ethiopian coffee trade.",
  },
  {
    id: "seller2",
    name: "Akosua Osei",
    companyName: "Ghana Natural Products",
    country: "Ghana",
    rating: 4.9,
    totalProducts: 8,
    verified: true,
    logo: "/placeholder.svg?height=100&width=100&text=GNP",
    description: "Sustainable shea butter and natural cosmetics manufacturer supporting local communities.",
  },
  {
    id: "seller3",
    name: "Kwame Asante",
    companyName: "Artisan Textiles Ltd",
    country: "Ghana",
    rating: 4.7,
    totalProducts: 15,
    verified: true,
    logo: "/placeholder.svg?height=100&width=100&text=ATL",
    description: "Traditional textile manufacturer specializing in authentic Kente and African fabrics.",
  },
]

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    productId: "1",
    productName: "Premium Arabica Coffee Beans",
    quantity: 100,
    unitPrice: 25.99,
    totalPrice: 2599.0,
    status: "shipped",
    orderDate: "2024-01-15",
    expectedDelivery: "2024-01-25",
    buyerId: "buyer1",
    sellerId: "seller1",
    sellerName: "Highland Coffee Co.",
  },
  {
    id: "ORD-002",
    productId: "2",
    productName: "Organic Shea Butter",
    quantity: 50,
    unitPrice: 45.0,
    totalPrice: 2250.0,
    status: "processing",
    orderDate: "2024-01-20",
    expectedDelivery: "2024-02-05",
    buyerId: "buyer1",
    sellerId: "seller2",
    sellerName: "Ghana Natural Products",
  },
  {
    id: "ORD-003",
    productId: "3",
    productName: "Handwoven Kente Textiles",
    quantity: 20,
    unitPrice: 120.0,
    totalPrice: 2400.0,
    status: "delivered",
    orderDate: "2024-01-10",
    expectedDelivery: "2024-01-20",
    buyerId: "buyer1",
    sellerId: "seller3",
    sellerName: "Artisan Textiles Ltd",
  },
]

export const mockRFQs: RFQ[] = [
  {
    id: "RFQ-001",
    productName: "Premium Cocoa Beans",
    description:
      "Looking for premium grade cocoa beans for chocolate manufacturing. Need consistent supply for 6 months.",
    quantity: 500,
    targetPrice: 15.0,
    status: "pending",
    submittedDate: "2024-01-18",
    validUntil: "2024-02-18",
    buyerId: "buyer1",
    responses: [],
  },
  {
    id: "RFQ-002",
    productName: "Organic Palm Oil",
    description: "Refined palm oil for food processing industry. Need RSPO certified sustainable palm oil.",
    quantity: 1000,
    targetPrice: 8.5,
    status: "quoted",
    submittedDate: "2024-01-22",
    validUntil: "2024-02-22",
    buyerId: "buyer1",
    responses: [
      {
        id: "resp1",
        rfqId: "RFQ-002",
        sellerId: "seller4",
        sellerName: "Palm Oil Processors Ltd",
        quotedPrice: 9.25,
        message: "We can supply RSPO certified palm oil. Price includes shipping to your location.",
        responseDate: "2024-01-23",
      },
    ],
  },
]

export const mockTransactions: Transaction[] = [
  {
    id: "TXN-001",
    type: "escrow",
    amount: 2599.0,
    date: "2024-01-15",
    description: "Escrow for Order ORD-001 - Premium Arabica Coffee Beans",
    status: "completed",
  },
  {
    id: "TXN-002",
    type: "payment_sent",
    amount: 2250.0,
    date: "2024-01-20",
    description: "Payment for Order ORD-002 - Organic Shea Butter",
    status: "pending",
  },
  {
    id: "TXN-003",
    type: "payment_received",
    amount: 2400.0,
    date: "2024-01-10",
    description: "Payment received for Order ORD-003 - Handwoven Kente Textiles",
    status: "completed",
  },
  {
    id: "TXN-004",
    type: "escrow",
    amount: 1875.0,
    date: "2024-01-22",
    description: "Escrow for bulk cocoa beans order",
    status: "pending",
  },
  {
    id: "TXN-005",
    type: "payment_received",
    amount: 840.0,
    date: "2024-01-18",
    description: "Payment received for moringa powder order",
    status: "completed",
  },
]

export const mockInvoices: Invoice[] = [
  {
    id: "INV-001",
    orderId: "ORD-001",
    buyerId: "buyer1",
    sellerId: "seller1",
    amount: 2599.0,
    status: "paid",
    issueDate: "2024-01-15",
    dueDate: "2024-02-15",
    items: [
      {
        productName: "Premium Arabica Coffee Beans",
        quantity: 100,
        unitPrice: 25.99,
        total: 2599.0,
      },
    ],
  },
  {
    id: "INV-002",
    orderId: "ORD-002",
    buyerId: "buyer1",
    sellerId: "seller2",
    amount: 2250.0,
    status: "unpaid",
    issueDate: "2024-01-20",
    dueDate: "2024-02-20",
    items: [
      {
        productName: "Organic Shea Butter",
        quantity: 50,
        unitPrice: 45.0,
        total: 2250.0,
      },
    ],
  },
  {
    id: "INV-003",
    orderId: "ORD-003",
    buyerId: "buyer1",
    sellerId: "seller3",
    amount: 2400.0,
    status: "paid",
    issueDate: "2024-01-10",
    dueDate: "2024-02-10",
    items: [
      {
        productName: "Handwoven Kente Textiles",
        quantity: 20,
        unitPrice: 120.0,
        total: 2400.0,
      },
    ],
  },
]

export const mockSellerProducts: SellerProduct[] = [
  {
    id: "1",
    name: "Premium Arabica Coffee Beans",
    category: "Agriculture",
    price: 25.99,
    stock: 500,
    status: "active",
    views: 1250,
    quotes: 45,
    orders: 12,
    dateAdded: "2024-01-01",
  },
  {
    id: "2",
    name: "Organic Shea Butter",
    category: "Cosmetics",
    price: 45.0,
    stock: 200,
    status: "active",
    views: 890,
    quotes: 32,
    orders: 8,
    dateAdded: "2024-01-05",
  },
  {
    id: "3",
    name: "Handwoven Kente Textiles",
    category: "Textiles",
    price: 120.0,
    stock: 0,
    status: "out_of_stock",
    views: 650,
    quotes: 18,
    orders: 3,
    dateAdded: "2024-01-10",
  },
  {
    id: "4",
    name: "Baobab Fruit Powder",
    category: "Health & Nutrition",
    price: 35.5,
    stock: 150,
    status: "active",
    views: 420,
    quotes: 12,
    orders: 5,
    dateAdded: "2024-01-12",
  },
]

export const mockBuyers: Buyer[] = [
  {
    id: "buyer1",
    name: "John Doe",
    companyName: "African Imports Ltd",
    country: "Kenya",
    totalOrders: 15,
    totalSpent: 45000,
    lastOrderDate: "2024-01-20",
    reorderRate: 0.8,
    status: "active",
  },
  {
    id: "buyer2",
    name: "Sarah Johnson",
    companyName: "Continental Trading Co",
    country: "South Africa",
    totalOrders: 8,
    totalSpent: 22000,
    lastOrderDate: "2024-01-18",
    reorderRate: 0.6,
    status: "active",
  },
  {
    id: "buyer3",
    name: "Ahmed Hassan",
    companyName: "North African Distributors",
    country: "Egypt",
    totalOrders: 12,
    totalSpent: 35000,
    lastOrderDate: "2024-01-22",
    reorderRate: 0.75,
    status: "active",
  },
]

export const africanCountries = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cameroon",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Congo",
  "Democratic Republic of Congo",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Ivory Coast",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Sao Tome and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
]

// Legacy exports for backward compatibility
export const countries = africanCountries
export const categories = mockCategories.map((cat) => cat.name)
