"use client"

import { useState } from "react"
import { Mail, MessageCircle, Plus, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const emailTemplate = `Subject: Let's Connect!

Subject: Inquiry About [Service Type]

Hey there,

I'm looking into [Enter service type] and wanted to see what you offer. Would love to hear how you can help and what the process looks like.

Let me know the best way to connect and get started. 

Looking forward to your thoughts.

Thanks,
[Your Name]`

export default function StickyContact() {
  const [isOpen, setIsOpen] = useState(false)

  const handleEmail = () => {
    window.location.href = `mailto:INNOSOLUTIONSWEBSERVICES0000@gmail.com?subject=Let's%20Connect!&body=${encodeURIComponent(emailTemplate)}`
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/918105343582", "_blank")
  }

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
                onClick={handleWhatsApp}
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
                onClick={handleEmail}
              >
                <Mail className="h-5 w-5" />
                Email
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <Button size="lg" className="rounded-full shadow-lg w-12 h-12 p-0" onClick={() => setIsOpen(!isOpen)}>
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </motion.div>
      </Button>
    </div>
  )
}

