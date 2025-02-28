import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import FloatingContact from "@/components/floating-contact"

const products = [
  {
    id: 1,
    name: "Generic Gadget",
    price: "$199",
    image: "/placeholder.svg?height=300&width=300",
    category: "Technology",
    description: "A versatile gadget for everyday use",
  },
  {
    id: 2,
    name: "Stylish Apparel",
    price: "$79",
    image: "/placeholder.svg?height=300&width=300",
    category: "Clothing",
    description: "Comfortable and fashionable apparel",
  },
  {
    id: 3,
    name: "Home Decor Item",
    price: "$49",
    image: "/placeholder.svg?height=300&width=300",
    category: "Home",
    description: "Enhance your living space with this decor item",
  },
  // Add more products as needed
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <div className="container px-4 py-8 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">Our Products</h1>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-1 gap-4">
                <Input className="max-w-xs" placeholder="Search products..." />
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home">Home</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2 p-4">
                  <div className="flex w-full items-center justify-between">
                    <h3 className="font-semibold">{product.name}</h3>
                    <span className="text-sm text-purple-600 dark:text-purple-400">{product.price}</span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{product.description}</p>
                  <Button className="w-full mt-2">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <FloatingContact />
      </div>
    </div>
  )
}

