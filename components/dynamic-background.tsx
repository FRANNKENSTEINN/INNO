"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/context/theme-context"

export function DynamicBackground() {
  const { theme } = useTheme()
  const [moonPosition, setMoonPosition] = useState({ x: 0, y: 0 })
  const [clouds, setClouds] = useState<
    { id: number; x: number; y: number; width: number; delay: number; opacity: number }[]
  >([])
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([])

  useEffect(() => {
    // Set initial moon position
    setMoonPosition({
      x: Math.random() * 80 + 10,
      y: Math.random() * 30 + 5,
    })

    // Generate clouds with different starting positions and delays
    const newClouds = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: i * 20 - 100, // Distribute clouds evenly across the screen
      y: Math.random() * 40 + 5, // Vary the height
      width: Math.random() * 100 + 100, // Vary the size
      delay: i * 2, // Stagger the animation
      opacity: Math.random() * 0.3 + 0.4, // Increase opacity to make clouds more visible
    }))
    setClouds(newClouds)

    // Generate stars for night mode
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
    setStars(newStars)

    // Animate moon position with subtle movement
    const moonInterval = setInterval(() => {
      setMoonPosition((prev) => ({
        x: prev.x + (Math.random() * 0.2 - 0.1),
        y: prev.y + (Math.random() * 0.2 - 0.1),
      }))
    }, 5000)

    return () => {
      clearInterval(moonInterval)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Moon */}
      <motion.div
        className="absolute"
        style={{
          left: `${moonPosition.x}%`,
          top: `${moonPosition.y}%`,
          zIndex: 1,
        }}
        animate={{
          x: [0, 5, -5, 0],
          y: [0, -5, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div
          className={`h-16 w-16 rounded-full ${
            theme === "night" ? "bg-gray-200" : theme === "noon" ? "bg-gold-400" : "bg-gold-200"
          } shadow-lg ${
            theme === "night" ? "shadow-blue-300/30" : theme === "noon" ? "shadow-gold-500/30" : "shadow-gold-300/30"
          } moon-glow transition-colors duration-500`}
        />
      </motion.div>

      {/* Stars (only visible in night mode) */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: theme === "night" ? 1 : 0,
            boxShadow: theme === "night" ? "0 0 4px 1px rgba(255, 255, 255, 0.6)" : "none",
            transition: "opacity 0.5s ease-in-out",
          }}
          animate={{
            opacity: theme === "night" ? [0.4, 1, 0.4] : 0,
            scale: theme === "night" ? [1, 1.2, 1] : 0,
          }}
          transition={{
            duration: 2 + star.delay,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Clouds */}
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          style={{
            left: `-20%`,
            top: `${cloud.y}%`,
            opacity: theme === "night" ? cloud.opacity * 0.5 : theme === "noon" ? cloud.opacity * 0.7 : cloud.opacity,
            zIndex: 0,
            filter: theme === "night" ? "brightness(0.7)" : theme === "noon" ? "brightness(1)" : "none",
            transition: "opacity 0.5s ease-in-out, filter 0.5s ease-in-out",
          }}
          animate={{
            left: ["-20%", "120%"],
          }}
          transition={{
            duration: 60 + cloud.delay,
            repeat: Number.POSITIVE_INFINITY,
            delay: cloud.delay,
            ease: "linear",
          }}
        >
          <svg
            width={cloud.width}
            height={cloud.width * 0.6}
            viewBox="0 0 200 120"
            fill={theme === "night" ? "#9ca3af" : theme === "noon" ? "#f3f4f6" : "white"}
            xmlns="http://www.w3.org/2000/svg"
            style={{ transition: "fill 0.5s ease-in-out" }}
          >
            <path d="M54.5,20.5 C54.5,20.5 51.5,12.5 45.5,12.5 C39.5,12.5 35.5,17.5 35.5,17.5 C35.5,17.5 30.5,5.5 20.5,5.5 C10.5,5.5 5.5,15.5 5.5,15.5 C5.5,15.5 0.5,15.5 0.5,20.5 C0.5,25.5 5.5,30.5 5.5,30.5 L54.5,30.5 C54.5,30.5 60.5,25.5 60.5,20.5 C60.5,15.5 54.5,20.5 54.5,20.5 Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
