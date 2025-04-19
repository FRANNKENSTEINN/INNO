"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Book } from "lucide-react"
import { Card } from "@/components/ui/card"

const contributors = [
  {
    name: "IRRFAN",
    role: "Lead Developer & Designer",
    bio: "A passionate developer dedicated to creating meaningful digital experiences for the Muslim community. Specializing in Islamic application development and UI/UX design.",
    contributions: [
      "Complete website development",
      "UI/UX design implementation",
      "Prayer time calculations",
      "Responsive design architecture",
    ],
    social: {
      instagram: "https://www.instagram.com/irfankhan19_?igsh=OG1vNjEzbzl4ampy",
      twitter: "https://x.com/khaan_irfaan19?t=trG8YedP75FZe0jx0z_-Iw&s=09",
    },
  },
  {
    name: "Islamic Scholars",
    role: "Religious Guidance & Verification",
    bio: "This project has been developed with reference to authentic Islamic sources and verified timings from reliable Islamic institutions.",
    contributions: [
      "Prayer time verification",
      "Islamic content authenticity",
      "Fiqh rulings verification",
      "Dua authenticity verification",
    ],
    icon: Book,
    references: [
      "Dar al-Ifta al-Misriyyah",
      "Islamic Foundation",
      "Authentic Hadith Collections",
      "Recognized Islamic Scholars",
    ],
  },
]

export default function CreditsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">شكر وتقدير</div>
          Credits & Acknowledgments
        </h1>
        <p className="text-emerald-200 max-w-2xl mx-auto">
          This project was made possible through the dedication and expertise of talented individuals committed to
          serving the Muslim community.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {contributors.map((contributor) => (
          <motion.div
            key={contributor.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gold-500 mb-1">{contributor.name}</h2>
                  <p className="text-emerald-300 font-medium">{contributor.role}</p>
                </div>

                <p className="text-white mb-4">{contributor.bio}</p>

                <div className="mb-6">
                  <h3 className="text-gold-500 font-semibold mb-2">Key Contributions:</h3>
                  <ul className="list-disc list-inside text-emerald-200 space-y-1">
                    {contributor.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4">
                  {contributor.social?.instagram && (
                    <a
                      href={contributor.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-500 hover:text-gold-400 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  )}
                  {contributor.social?.twitter && (
                    <a
                      href={contributor.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-500 hover:text-gold-400 transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  )}
                  {contributor.icon && <contributor.icon className="h-6 w-6 text-gold-500" />}
                </div>
                {contributor.references && (
                  <div>
                    <h3 className="text-gold-500 font-semibold mt-4 mb-2">References:</h3>
                    <ul className="list-disc list-inside text-emerald-200 space-y-1">
                      {contributor.references.map((reference, index) => (
                        <li key={index}>{reference}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gold-500 mb-4">Support Our Work</h2>
          <p className="text-emerald-200 mb-6">
            This project is a labor of love, created to serve the Muslim community. Your support helps us continue
            developing and maintaining this resource for everyone.
          </p>
          <a
            href="/support"
            className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300"
          >
            Support the Project
          </a>
        </div>
      </motion.div>
    </div>
  )
}
