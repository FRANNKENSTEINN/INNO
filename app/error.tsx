"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden p-8">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
          <p className="text-emerald-200 dark:text-blue-200 mb-6">
            An unexpected error has occurred. Please try again later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-indigo-500 dark:to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-indigo-600 dark:hover:to-indigo-700 transition-all duration-300"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-gold-500 to-gold-600 dark:from-blue-500 dark:to-blue-600 text-white px-6 py-3 rounded-lg hover:from-gold-600 hover:to-gold-700 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-all duration-300"
            >
              <Home className="mr-2 h-5 w-5" />
              Return Home
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
