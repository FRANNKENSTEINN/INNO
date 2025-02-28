import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  text?: string
  className?: string
}

export default function WhatsAppButton({ text = "Chat on WhatsApp", className = "" }: WhatsAppButtonProps) {
  return (
    <Button
      size="lg"
      className={`bg-green-500 hover:bg-green-600 text-white gap-2 ${className}`}
      onClick={() => window.open("https://wa.me/918105343582", "_blank")}
    >
      <MessageCircle className="h-5 w-5" />
      {text}
    </Button>
  )
}

