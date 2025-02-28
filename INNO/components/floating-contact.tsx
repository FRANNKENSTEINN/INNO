"use client"

import { useState } from "react"
import { Mail, MessageCircle, Plus, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-2"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center gap-2"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-2"
            >
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center gap-2"
                onClick={() => (window.location.href = "mailto:demo@example.com")}
              >
                <Mail className="h-5 w-5" />
                Email
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <Button size="lg" className="rounded-full shadow-lg w-12 h-12 p-0" onClick={toggleOpen}>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </motion.div>
      </Button>
    </div>
  )
}

