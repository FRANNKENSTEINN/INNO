"use client"

import { useState, useEffect, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, HandIcon as PrayingHands } from "lucide-react"

// Memoize the component to prevent unnecessary re-renders
export const PalestineDua = memo(function PalestineDua() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false)

  useEffect(() => {
    // Check if notification has been dismissed before
    const dismissed = localStorage.getItem("palestine-dua-dismissed")
    if (!dismissed) {
      // Show notification after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      setHasBeenDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setHasBeenDismissed(true)
    // Remember that user dismissed the notification
    localStorage.setItem("palestine-dua-dismissed", "true")
  }

  // If already dismissed, don't render anything
  if (hasBeenDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 z-50 max-w-[calc(100%-2rem)] sm:max-w-sm"
        >
          <div className="rounded-lg bg-white/10 backdrop-blur-md p-4 shadow-lg border border-emerald-500/30 dark:border-blue-500/30">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <PrayingHands className="h-5 w-5 text-emerald-500 dark:text-blue-400 mr-2" />
                <h3 className="font-bold text-white text-sm sm:text-base">Dua for Palestine</h3>
              </div>
              <button
                onClick={handleDismiss}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Dismiss notification"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="text-xs sm:text-sm text-emerald-200 dark:text-blue-200 mb-3 space-y-2">
              <p className="font-arabic text-sm text-center mb-2">اللهم انصر إخواننا المستضعفين في فلسطين</p>
              <p className="text-center text-xs italic mb-2">"Allahumma unsur ikhwanana al-mustad'afina fi Filastin"</p>
              <p className="italic">"O Allah, grant victory to our oppressed brothers and sisters in Palestine."</p>
              <p>
                "O Allah, protect the innocent, heal the wounded, comfort the grieving, and bring justice and peace to
                those suffering under oppression."
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})
