"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Moon, Star, Sun, ChevronDown } from "lucide-react"
import { AnimatedLogo } from "./animated-logo"
import { MobileNav } from "./mobile-nav"
import { useTheme } from "@/context/theme-context"

const navigation = [
  { href: "/", label: "Home" },
  {
    label: "Duas",
    children: [
      { href: "/duas", label: "Duas Collection" },
      { href: "/info", label: "Islamic Info" },
    ],
  },
  {
    label: "Knowledge",
    children: [
      { href: "/prophets", label: "25 Prophets" },
      { href: "/ramadan-traditions", label: "Ramadan Traditions" },
      { href: "/spiritual-aspects", label: "Spiritual Aspects" },
      { href: "/islamic-practices", label: "Islamic Practices" },
      { href: "/how-to", label: "How To Guide" },
      { href: "/islamic-history", label: "Islamic History" },
      { href: "/women-in-islam", label: "Women in Islam" },
      { href: "/islamic-art", label: "Art & Architecture" },
      { href: "/quran-tafsir", label: "Quran Tafsir" },
      { href: "/islamic-ethics", label: "Islamic Ethics" },
    ],
  },
  { href: "/palestine", label: "Palestine" },
  { href: "/credits", label: "Credits" },
  { href: "/support", label: "Support" },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [sparkles, setSparkles] = useState<{ id: number; left: string; top: string; size: number; delay: number }[]>([])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Generate sparkles
  useEffect(() => {
    const newSparkles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
    setSparkles(newSparkles)
  }, [])

  const handleDropdownToggle = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(label)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-emerald-900/95 via-emerald-800/95 to-emerald-900/95 dark:from-blue-900/95 dark:via-blue-800/95 dark:to-blue-900/95"
            : "bg-gradient-to-r from-emerald-900/80 via-emerald-800/80 to-emerald-900/80 dark:from-blue-900/80 dark:via-blue-800/80 dark:to-blue-900/80"
        } backdrop-blur-lg`}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sparkles */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full bg-gold-300/20 dark:bg-blue-300/20"
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

        {/* Decorative elements */}
        <motion.div
          className="absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Star className="h-8 w-8 text-gold-500/20 dark:text-blue-400/20 transition-colors duration-500" />
        </motion.div>
        <motion.div
          className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Moon className="h-8 w-8 text-gold-500/20 dark:text-blue-400/20 transition-colors duration-500" />
        </motion.div>
      </div>

      <div className="container relative">
        <div className="flex h-16 items-center justify-between">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center">
              <AnimatedLogo />
              <span className="text-white text-2xl md:text-3xl font-bold">☪️</span>
            </Link>
          </motion.div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="relative rounded-full p-2 text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              aria-label={theme === "day" ? "Switch to night mode" : "Switch to day mode"}
            >
              {theme === "day" ? <Moon className="h-5 w-5 text-gold-300" /> : <Sun className="h-5 w-5 text-blue-300" />}
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="group relative px-3 py-2 flex items-center"
                      >
                        <span className="relative z-10 text-sm text-white transition-colors group-hover:text-gold-300 dark:group-hover:text-blue-300">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`ml-1 h-4 w-4 text-white dark:text-white transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                        <motion.span
                          className="absolute inset-0 z-0 rounded-lg bg-white/0 transition-colors group-hover:bg-white/5"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-1 w-48 rounded-md bg-gradient-to-b from-emerald-800/90 to-emerald-900/90 dark:from-blue-800/90 dark:to-blue-900/90 backdrop-blur-md shadow-lg ring-1 ring-gold-500/20 dark:ring-blue-500/20 z-20"
                          >
                            <div className="py-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm text-white dark:text-white hover:bg-gold-500/20 dark:hover:bg-blue-500/20 transition-colors flex items-center"
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <motion.span
                                    className="w-1.5 h-1.5 bg-gold-500 dark:bg-blue-500 rounded-full mr-2"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                  ></motion.span>
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href} className="group relative px-3 py-2">
                      <span className="relative z-10 text-sm text-white transition-colors group-hover:text-gold-300 dark:group-hover:text-blue-300">
                        {item.label}
                      </span>
                      <motion.span
                        className="absolute inset-0 z-0 rounded-lg bg-white/0 transition-colors group-hover:bg-gold-500/20 dark:group-hover:bg-blue-500/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 dark:via-blue-500/30 to-transparent"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />
    </header>
  )
}

export default Header
