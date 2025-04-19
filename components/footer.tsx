"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "@/context/theme-context"

export function Footer() {
  const [sparkles, setSparkles] = useState<{ id: number; left: string; top: string; size: number; delay: number }[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    // Generate random sparkles
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }))
    setSparkles(newSparkles)
  }, [])

  return (
    <footer className="relative overflow-hidden py-8">
      <div className="absolute inset-0 opacity-5">
        <div className="islamic-pattern h-full w-full" />
      </div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className={`absolute rounded-full ${
            theme === "night" ? "bg-blue-300" : theme === "noon" ? "bg-gold-400" : "bg-gold-300"
          }`}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex max-w-md items-center gap-4">
            <div
              className={`h-px flex-1 bg-gradient-to-r from-transparent ${
                theme === "night" ? "via-blue-500/50" : "via-gold-500/50"
              } to-transparent`}
            />
            <div className={theme === "night" ? "text-blue-500" : "text-gold-500"}>✧</div>
            <div
              className={`h-px flex-1 bg-gradient-to-r from-transparent ${
                theme === "night" ? "via-blue-500/50" : "via-gold-500/50"
              } to-transparent`}
            />
          </div>

          <p
            className={`text-sm ${
              theme === "night" ? "text-blue-200" : theme === "noon" ? "text-black" : "text-emerald-200"
            }`}
          >
            © 2025 Ramadan Timings
          </p>

          <div className="mt-4 relative">
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className={`inline-block ${
                theme === "night"
                  ? "bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300"
                  : "bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"
              } bg-[length:200%_auto] bg-clip-text text-transparent font-bold text-lg`}
              style={{
                textShadow: theme === "night" ? "0 0 5px rgba(59, 130, 246, 0.5)" : "0 0 5px rgba(250, 204, 21, 0.5)",
              }}
            >
              <span className="sparkle">✦</span> IK Web Designs <span className="sparkle">✦</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
