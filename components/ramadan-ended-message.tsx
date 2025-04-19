"use client"

import { motion } from "framer-motion"
import { Info } from "lucide-react"
import { Card } from "@/components/ui/card"

export function RamadanEndedMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
        <div className="p-4 md:p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Info className="h-10 w-10 md:h-12 md:w-12 text-gold-500 dark:text-blue-400" />
              </motion.div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            <span className="font-arabic text-lg md:text-xl block mb-2">القرآن والصلاة</span>
            Welcome to Quran & Prayer
          </h2>

          <p className="text-lg md:text-xl text-emerald-200 mb-4">
            Your source for accurate prayer times and Islamic knowledge.
          </p>

          <div className="max-w-2xl mx-auto bg-black/30 p-3 md:p-4 rounded-lg mb-4">
            <p className="text-gold-300 dark:text-blue-300 text-sm md:text-base">
              Explore our comprehensive resources on Islamic practices, prayer times, and spiritual guidance for your
              daily life.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
