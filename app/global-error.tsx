"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden p-8">
            <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
            <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-white mb-6">A critical error has occurred. Please try refreshing the page.</p>
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </button>
          </Card>
        </motion.div>
      </body>
    </html>
  )
}
