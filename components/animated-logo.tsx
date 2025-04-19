"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/context/theme-context"

export function AnimatedLogo() {
  const { theme } = useTheme()

  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className="font-arabic text-2xl font-bold"
    >
      <motion.div className="flex items-center">
        <motion.span
          animate={{
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="transition-colors duration-500 mr-2"
        >
          ☪️
        </motion.span>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0.8, 1],
            y: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <span className="text-white text-xl md:text-2xl font-bold">Quran & Prayer</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
