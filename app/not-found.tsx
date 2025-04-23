"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden p-8">
          <h1 className="text-4xl font-bold text-gold-500 dark:text-blue-500 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="mb-6">The page you are looking for doesn't exist or has been moved.</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-gold-500 to-gold-600 dark:from-blue-500 dark:to-blue-600 text-white px-6 py-3 rounded-lg hover:from-gold-600 hover:to-gold-700 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-all duration-300"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </Card>
      </motion.div>
    </div>
  )
}
