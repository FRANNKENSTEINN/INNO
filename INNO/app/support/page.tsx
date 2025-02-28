import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Phone } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import AnimatedBackground from "@/components/animated-background"

export default function SupportPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              We're here to help. Get in touch with our support team through any of these channels.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="backdrop-blur-lg bg-white/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-green-100 p-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">WhatsApp Support</h3>
                <p className="text-center text-zinc-600 dark:text-zinc-400">Get instant support through WhatsApp</p>
                <WhatsAppButton text="Start Chat" className="mt-4" />
              </CardContent>
            </Card>

            <Card className="backdrop-blur-lg bg-white/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-purple-100 p-4">
                  <Phone className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Phone Support</h3>
                <p className="text-center text-zinc-600 dark:text-zinc-400">Talk to our support team directly</p>
                <Button size="lg" className="mt-4 bg-purple-600 hover:bg-purple-700">
                  +1 (234) 567-890
                </Button>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-lg bg-white/50">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-blue-100 p-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Email Support</h3>
                <p className="text-center text-zinc-600 dark:text-zinc-400">Send us an email anytime</p>
                <Button
                  size="lg"
                  className="mt-4 bg-blue-600 hover:bg-blue-700"
                  onClick={() => (window.location.href = "mailto:support@innoweb.com")}
                >
                  Email Us
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 backdrop-blur-lg bg-white/50">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">What are your business hours?</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Our support team is available 24/7 for urgent matters. Regular business hours are Monday to Friday,
                    9 AM to 6 PM EST.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What's your typical response time?</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    We aim to respond to all inquiries within 2 hours during business hours, and within 24 hours outside
                    business hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Do you offer emergency support?</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Yes, we offer 24/7 emergency support for critical issues. Please use our WhatsApp channel for
                    immediate assistance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

