"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Premium Watch",
    price: "₹12,999",
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Designer Bag",
    price: "₹8,999",
    image: "/placeholder.svg?height=300&width=300",
    category: "Fashion",
  },
  {
    id: 3,
    name: "Smart Speaker",
    price: "₹4,999",
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "₹2,999",
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
]

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => setHoveredId(product.id)}
          onHoverEnd={() => setHoveredId(null)}
        >
          <Card className="overflow-hidden">
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
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{product.category}</p>
              <Button className="w-full mt-2" variant={hoveredId === product.id ? "default" : "outline"}>
                View Details
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

