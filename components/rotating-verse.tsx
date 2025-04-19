"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { type QuranVerse, motivationalVerses } from "@/lib/quran-verses"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function RotatingVerse() {
  const [currentVerse, setCurrentVerse] = useState<QuranVerse | null>(null)
  const [key, setKey] = useState(0) // For animation reset
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([])

  useEffect(() => {
    // Function to get a random verse
    const getRandomVerse = () => {
      const randomIndex = Math.floor(Math.random() * motivationalVerses.length)
      return motivationalVerses[randomIndex]
    }

    // Set initial verse
    setCurrentVerse(getRandomVerse())

    // Generate stars for the background
    const newStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
    setStars(newStars)

    // Set up interval to change verse every hour
    const interval = setInterval(
      () => {
        setKey((prevKey) => prevKey + 1) // Update key to reset animation
        setCurrentVerse(getRandomVerse())
      },
      60 * 60 * 1000,
    ) // 1 hour in milliseconds

    return () => clearInterval(interval)
  }, [])

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  if (!currentVerse) return null

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-orange-400 dark:text-blue-400 mb-6 text-center">Quranic Inspiration</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          ref={cardRef}
        >
          {/* Interactive 3D card effect */}
          <motion.div
            className="relative z-10"
            style={{
              transformStyle: "preserve-3d",
            }}
            animate={{
              rotateX: isHovered ? -((mousePosition.y / (cardRef.current?.offsetHeight || 1)) * 10 - 5) : 0,
              rotateY: isHovered ? (mousePosition.x / (cardRef.current?.offsetWidth || 1)) * 10 - 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="backdrop-blur-md bg-black/60 border border-gold-500/20 dark:border-blue-500/20 overflow-hidden relative">
              {/* Star background */}
              <div className="absolute inset-0 overflow-hidden">
                {stars.map((star) => (
                  <motion.div
                    key={`star-${star.id}`}
                    className="absolute rounded-full bg-gold-300 dark:bg-blue-300"
                    style={{
                      left: `${star.x}%`,
                      top: `${star.y}%`,
                      width: `${star.size}px`,
                      height: `${star.size}px`,
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + star.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: star.delay,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gold-500/20 dark:bg-blue-500/20"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      scale: 0,
                    }}
                    animate={{
                      x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                      y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 8 + Math.random() * 10,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              <div className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Star className="h-5 w-5 text-gold-500 dark:text-blue-400" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gold-500 dark:text-blue-400">Verse of the Hour</h3>
                </div>
                <div className="space-y-4">
                  <motion.p
                    className="text-right text-xl text-white font-arabic leading-relaxed"
                    dir="rtl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {currentVerse.arabic}
                  </motion.p>
                  <motion.p
                    className="text-emerald-200 dark:text-blue-200 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    "{currentVerse.translation}"
                  </motion.p>
                  <motion.p
                    className="text-gold-400 dark:text-blue-300 text-sm text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    — {currentVerse.reference}
                  </motion.p>
                </div>
              </div>

              {/* Interactive light effect that follows cursor */}
              {isHovered && (
                <motion.div
                  className="absolute pointer-events-none w-40 h-40 rounded-full bg-gradient-to-r from-gold-300/10 to-transparent dark:from-blue-300/10"
                  animate={{
                    x: mousePosition.x - 80,
                    y: mousePosition.y - 80,
                  }}
                  transition={{ type: "spring", damping: 10, stiffness: 300 }}
                />
              )}
            </Card>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
