import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Logo from "@/components/logo"

import "./globals.css"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INNOWEB Solutions",
  description: "Transforming ideas into digital excellence",
    generator: 'v0.dev'
}

const footerServices = [
  { name: "Web Development", href: "/services" },
  { name: "Video Editing", href: "/services" },
  { name: "Graphic Design", href: "/services" },
  { name: "Logo Design", href: "/services" },
  { name: "Marketing", href: "/services" },
  { name: "Event Management", href: "/services" },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-white/50 backdrop-blur-lg supports-[backdrop-filter]:bg-white/50">
            <div className="container flex h-16 items-center justify-between">
              <Logo />
              <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <Link href="/" className="transition-colors hover:text-purple-600">
                  Home
                </Link>
                <Link href="/services" className="transition-colors hover:text-purple-600">
                  Services
                </Link>
                <Link href="/about" className="transition-colors hover:text-purple-600">
                  About
                </Link>
                <Link href="/support" className="transition-colors hover:text-purple-600">
                  Support
                </Link>
                <Link href="/contact" className="transition-colors hover:text-purple-600">
                  Contact
                </Link>
              </nav>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open Menu">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </header>
          {children}
          <footer className="border-t bg-white/50 backdrop-blur-lg">
            <div className="container py-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="space-y-6">
                  <Logo />
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 pr-4">
                    Transforming ideas into digital excellence. Your trusted partner for innovative web solutions.
                  </p>
                </div>
                <div className="grid gap-6">
                  <h3 className="text-lg font-semibold">Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {footerServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="text-sm text-zinc-500 hover:text-purple-600 dark:text-zinc-400"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <div className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
                    <p className="flex items-center">
                      <span className="font-medium pr-2">Location:</span>
                      ಬೆಂಗಳೂರು(Bengaluru), India
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium pr-2">Phone:</span>
                      <a href="tel:+918105343582" className="hover:text-purple-600">
                        +91 8105343582
                      </a>
                    </p>
                    <p className="break-all">
                      <span className="font-medium pr-2">Email:</span>
                      <a href="mailto:INNOSOLUTIONSWEBSERVICES0000@gmail.com" className="hover:text-purple-600">
                        INNOSOLUTIONSWEBSERVICES0000@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t py-8 bg-white/50">
              <div className="container text-center text-sm text-zinc-500 dark:text-zinc-400">
                © 2024 INNOWEB Solutions. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'