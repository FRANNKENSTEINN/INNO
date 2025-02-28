import Link from "next/link"
import { ArrowRight, Package, Shield, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Package className="h-6 w-6" />
            <span className="text-xl font-bold">SR Traders</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="/products" className="transition-colors hover:text-foreground/80">
              Products
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About Us
            </Link>
            <Link href="/shipping" className="transition-colors hover:text-foreground/80">
              Shipping
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden" aria-label="Open Menu">
            <Package className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to SR Traders
                  </h1>
                  <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                    Your trusted partner for quality products and exceptional service in Bangalore. Discover our premium
                    selection today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="inline-flex gap-2">
                    Explore Products
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
              <img
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:aspect-square"
                height="550"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-02-24_221307079-HMI6cfOCbQdApl179CVhPnyz6MXQtu.png"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose SR Traders?</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  We pride ourselves on delivering excellence in every aspect of our service
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Shield className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Quality Assured</h3>
                  <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    All our products undergo rigorous quality checks to ensure the highest standards
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Truck className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Fast Delivery</h3>
                  <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    Quick and reliable shipping across Bangalore and surrounding areas
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden">
                <CardContent className="flex flex-col items-center gap-2 p-6">
                  <Star className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Customer First</h3>
                  <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    Dedicated support team to assist you with all your needs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-zinc-50 dark:bg-zinc-900">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Package className="h-6 w-6" />
              <span className="text-xl font-bold">SR Traders</span>
            </Link>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Your trusted partner in quality products</p>
          </div>
          <div className="flex gap-8">
            <div className="grid gap-2">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <nav className="grid gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Link href="/about">About Us</Link>
                <Link href="/products">Products</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
            <div className="grid gap-2">
              <h3 className="text-sm font-medium">Contact</h3>
              <nav className="grid gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Link href="tel:+919876543210">+91 98765 43210</Link>
                <Link href="mailto:info@srtraders.com">info@srtraders.com</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">© 2024 SR Traders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

