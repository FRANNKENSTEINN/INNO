"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
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

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null)
  const { theme } = useTheme()

  const toggleExpanded = (label: string) => {
    if (expandedItem === label) {
      setExpandedItem(null)
    } else {
      setExpandedItem(label)
    }
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 inline-flex items-center p-2 text-white dark:text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-emerald-950/95 dark:bg-slate-950/95 backdrop-blur-sm"
          >
            <nav className="flex h-full flex-col items-center justify-center space-y-8 overflow-y-auto py-8">
              {navigation.map((item) => (
                <div key={item.label} className="w-full max-w-xs text-center">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="flex w-full items-center justify-center text-2xl font-medium text-white hover:text-gold-400 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                            expandedItem === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 space-y-2 bg-white/5 rounded-lg py-2"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center text-xl font-medium text-gold-300 dark:text-blue-300 hover:text-gold-400 dark:hover:text-blue-400 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 bg-gold-500 dark:bg-blue-500 rounded-full mr-2"></span>
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-medium text-white hover:text-gold-400 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
