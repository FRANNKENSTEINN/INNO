"use client"

import { motion } from "framer-motion"
import { Heart, Star, Users, Coffee } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Heart,
    title: "Community First",
    description: "Built with love for the Muslim community, focusing on accuracy and accessibility.",
  },
  {
    icon: Star,
    title: "Expert Guidance",
    description: "Verified by Islamic scholars ensuring authentic and accurate content.",
  },
  {
    icon: Users,
    title: "Collaborative Effort",
    description: "A team dedicated to serving the Ummah with precise prayer timings.",
  },
  {
    icon: Coffee,
    title: "Continuous Development",
    description: "Regular updates and improvements to better serve the community.",
  },
]

export default function SupportPage() {
  const handlePhonePeClick = () => {
    window.location.href = "upi://pay?pa=7892530382@ibl&pn=Irfaan%20Khaan&mc=0000&mode=02&purpose=00"
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">ادعم مشروعنا</div>
          Support Our Project
        </h1>
        <p className="text-emerald-200 max-w-2xl mx-auto">
          Help us continue providing accurate prayer times and Islamic resources to the community.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="backdrop-blur-md bg-white/10 border-none h-full">
              <div className="p-6 text-center">
                <feature.icon className="h-8 w-8 text-gold-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gold-500 mb-2">{feature.title}</h3>
                <p className="text-emerald-200">{feature.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 mb-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <Card className="backdrop-blur-md bg-white/10 border-none h-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gold-500 mb-4">Meet IRRFAN</h2>
              <p className="text-emerald-200 mb-4">
                A passionate developer and designer with expertise in Islamic applications. With years of experience in
                web development and UI/UX design, IRRFAN has dedicated his skills to creating meaningful digital
                experiences for the Muslim community.
              </p>
              <p className="text-emerald-200 mb-4">
                His work focuses on combining modern technology with Islamic principles to create accessible and
                beneficial tools for Muslims worldwide.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/irfankhan19_?igsh=OG1vNjEzbzl4ampy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://x.com/khaan_irfaan19?t=trG8YedP75FZe0jx0z_-Iw&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <Card className="backdrop-blur-md bg-white/10 border-none h-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gold-500 mb-4">Islamic Scholars</h2>
              <p className="text-emerald-200 mb-4">
                This project has been developed with reference to authentic Islamic sources and verified timings from
                reliable Islamic institutions.
              </p>
              <p className="text-emerald-200 mb-4">
                We extend our gratitude to the scholars and institutions who maintain and verify prayer timings,
                ensuring accuracy and authenticity in Islamic practices.
              </p>
              <div className="mt-4">
                <h3 className="text-gold-500 font-semibold mb-2">References:</h3>
                <ul className="list-disc list-inside text-emerald-200 space-y-1">
                  <li>Islamic Foundation</li>
                  <li>Local Mosques and Scholars</li>
                  <li>Authentic Islamic Resources</li>
                  <li>Verified Prayer Time Calculations</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gold-500 mb-4">Support Our Work</h2>
          <p className="text-emerald-200 mb-6">
            Your support enables us to continue developing and maintaining this resource for the community. Consider
            making a donation to help us grow.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handlePhonePeClick}
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
            >
              Donate via PhonePe
            </button>
            <a
              href="tel:7892530382"
              className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
