import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Phone, MapPin, Send } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import AnimatedBackground from "@/components/animated-background"

const emailTemplate = `Subject: Let's Connect!

Subject: Inquiry About [Service Type]

Hey there,

I'm looking into [Enter service type] and wanted to see what you offer. Would love to hear how you can help and what the process looks like.

Let me know the best way to connect and get started. 

Looking forward to your thoughts.

Thanks,
[Your Name]`

export default function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = `mailto:INNOSOLUTIONSWEBSERVICES0000@gmail.com?subject=Let's%20Connect!&body=${encodeURIComponent(emailTemplate)}`
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Let's discuss how we can help transform your digital presence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="backdrop-blur-lg bg-white/50">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">
                      Email
                    </label>
                    <Input id="email" placeholder="Your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="service">
                      Service Interest
                    </label>
                    <Input id="service" placeholder="What service are you interested in?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">
                      Message
                    </label>
                    <Textarea className="min-h-[150px]" id="message" placeholder="Tell us about your project" />
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="backdrop-blur-lg bg-white/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">ಬೆಂಗಳೂರು(Bengaluru), India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-lg bg-white/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                    <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">+91 8105343582</p>
                    <WhatsAppButton className="mt-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-lg bg-white/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">INNOSOLUTIONSWEBSERVICES0000@gmail.com</p>
                    <Button className="mt-2 bg-blue-600 hover:bg-blue-700" onClick={handleEmailClick}>
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-lg bg-white/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-zinc-600 dark:text-zinc-400">+91 8105343582</p>
                    <Button className="mt-2" onClick={() => (window.location.href = "tel:+918105343582")}>
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="backdrop-blur-lg bg-white/50">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Working Days</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-zinc-600 dark:text-zinc-400">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Support Hours</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">24/7 WhatsApp Support Available</p>
                  <p className="text-zinc-600 dark:text-zinc-400">Email Response: Within 2-4 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

