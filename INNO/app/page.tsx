import { ArrowRight, Code, Laptop, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedBackground from "@/components/animated-background"
import WhatsAppButton from "@/components/whatsapp-button"
import StickyContact from "@/components/sticky-contact"

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />

      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
                INNOWEB Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Transforming ideas into digital excellence. We create innovative web solutions that drive success.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white/40 backdrop-blur-md">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Services</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Choose the perfect solution for your business needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <Card className="relative overflow-hidden backdrop-blur-lg bg-white/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Web Development</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Custom websites and web applications built with the latest technologies
                  </p>
                  <ul className="space-y-2 text-left w-full">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-600" />
                      Custom Website Development
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-600" />
                      E-commerce Solutions
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-600" />
                      Web Application Development
                    </li>
                  </ul>
                  <WhatsAppButton text="Get Quote" className="mt-4" />
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden backdrop-blur-lg bg-white/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <Laptop className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold">Digital Marketing</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Comprehensive digital marketing solutions to grow your business
                  </p>
                  <ul className="space-y-2 text-left w-full">
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-600" />
                      SEO Optimization
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-600" />
                      Social Media Marketing
                    </li>
                    <li className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-purple-600" />
                      Content Strategy
                    </li>
                  </ul>
                  <WhatsAppButton text="Get Quote" className="mt-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Us?</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Experience excellence in every project
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="relative overflow-hidden backdrop-blur-lg bg-white/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Fast & Reliable</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Quick turnaround times without compromising quality
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden backdrop-blur-lg bg-white/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Modern Tech</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">Using the latest technologies and best practices</p>
                </div>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden backdrop-blur-lg bg-white/50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                    <Laptop className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Support</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">24/7 support from our experienced team</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <StickyContact />
    </main>
  )
}

