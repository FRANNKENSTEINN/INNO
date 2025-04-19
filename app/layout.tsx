import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Noto_Naskh_Arabic } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { MarqueeBanner } from "@/components/marquee-banner"
import { DynamicBackground } from "@/components/dynamic-background"
import { ThemeProvider } from "@/context/theme-context"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

const arabic = Noto_Naskh_Arabic({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-arabic",
})

export const metadata: Metadata = {
  title: "NoorPath",
  description: "Prayer times, Islamic knowledge, and spiritual guidance",
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#047857",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "NoorPath",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "NoorPath",
    description: "Prayer times, Islamic knowledge, and spiritual guidance",
    siteName: "NoorPath",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${arabic.variable}`}>
      <head>
        <meta name="theme-color" content="#047857" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#054e3b]/90 via-[#047857]/90 to-[#054e3b]/90 dark:from-[#0f172a]/95 dark:via-[#1e293b]/95 dark:to-[#0f172a]/95 transition-colors duration-500">
            <div className="absolute inset-0 overflow-hidden">
              <div className="islamic-pattern opacity-5 dark:opacity-10" />
              <DynamicBackground />
            </div>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <MarqueeBanner />
              <main className="flex-1">{children}</main>
              <div className="py-8">
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
