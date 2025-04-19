"use client"

import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export function MarqueeBanner() {
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 10, // Increased speed (reduced duration)
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="whitespace-nowrap"
      >
        <Link href="/palestine" className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors">
          <AlertCircle className="h-4 w-4 mr-2" />
          Check out our Palestine page for the latest news and ways to help — Click here to learn more and support
        </Link>
      </motion.div>
    </div>
  )
}
