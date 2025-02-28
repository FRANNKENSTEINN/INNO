import { Card, CardContent } from "@/components/ui/card"
import { Code, Video, Palette, PenTool, Users, TrendingUp, Calendar, Zap } from "lucide-react"
import AnimatedBackground from "@/components/animated-background"
import WhatsAppButton from "@/components/whatsapp-button"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies",
    features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing services for all your content needs",
    features: ["Content Creation", "Motion Graphics", "Post-Production"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative design solutions that capture your brand's essence",
    features: ["Brand Identity", "Marketing Materials", "Social Media Graphics"],
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Unique and memorable logo designs that stand out",
    features: ["Custom Logos", "Brand Guidelines", "Vector Graphics"],
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Educational workshops to enhance your team's skills",
    features: ["Technical Training", "Design Workshops", "Digital Marketing"],
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description: "Comprehensive marketing solutions for business growth",
    features: ["Digital Marketing", "SEO", "Social Media Management"],
  },
  {
    icon: Calendar,
    title: "Event Marketing",
    description: "Full-service event marketing and management",
    features: ["Event Planning", "Promotion", "Analytics"],
  },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Comprehensive digital solutions for your business needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="backdrop-blur-lg bg-white/50 transform transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                      <service.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-center">{service.title}</h3>
                    <p className="text-center text-zinc-600 dark:text-zinc-400">{service.description}</p>
                    <ul className="space-y-2 w-full">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Zap className="mr-2 h-4 w-4 text-purple-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <WhatsAppButton text="Get Quote" className="mt-4 w-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

