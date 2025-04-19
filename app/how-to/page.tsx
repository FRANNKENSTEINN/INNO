"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Droplets, BookOpen } from "lucide-react"
import Image from "next/image"

const howToGuides = [
  {
    title: "How to Perform Wudu (Ablution)",
    description: "Learn the proper method of performing Wudu, the ritual purification before prayer.",
    steps: [
      "Start with the intention (Niyyah)",
      "Wash hands up to the wrists",
      "Rinse the mouth and nose",
      "Wash the face",
      "Wash arms up to the elbows",
      "Wipe the head and ears",
      "Wash feet up to the ankles",
    ],
    icon: Droplets,
    videoId: "CO5O3JBjgGI",
  },
  {
    title: "How to Perform Salah (Prayer)",
    description: "Learn the proper method of performing the five daily prayers.",
    steps: [
      "Face the Qibla (direction of the Kaaba)",
      "Make the intention (Niyyah)",
      "Say 'Allahu Akbar' and begin prayer",
      "Recite Surah Al-Fatiha",
      "Perform Ruku (bowing)",
      "Perform Sujud (prostration)",
      "Complete with Tashahhud and Tasleem",
    ],
    icon: BookOpen,
    videoId: "vx1rz-28HNk",
  },
]

export default function HowToPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">دليل كيفية</div>
          How To Guide
        </h1>
        <p className="text-gold-300 max-w-2xl mx-auto">Learn the proper methods for essential Islamic practices</p>
      </motion.div>

      {/* How To Guides */}
      <div className="space-y-12">
        {howToGuides.map((guide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <Card className="backdrop-blur-md bg-black/30 border-none overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <guide.icon className="h-6 w-6 text-gold-500" />
                  <h2 className="text-2xl font-bold text-gold-500">{guide.title}</h2>
                </div>

                <p className="text-emerald-200 mb-6">{guide.description}</p>

                <div className="grid gap-8 md:grid-cols-2">
                  {/* Video Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gold-500 mb-4">Video Guide</h3>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${guide.videoId}`}
                        title={guide.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="border-0"
                      />
                    </div>
                  </div>

                  {/* Steps Section */}
                  <div>
                    <h3 className="text-xl font-bold text-gold-500 mb-4">Step-by-Step Guide</h3>
                    <ol className="space-y-3 text-emerald-200">
                      {guide.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="bg-gold-500 text-black font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </span>
                          <span className="bg-black/20 px-3 py-2 rounded-md w-full">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Prayer Images */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 grid gap-8 md:grid-cols-2"
      >
        <div className="rounded-lg overflow-hidden bg-transparent">
          <div className="relative aspect-[16/9]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Njf4yWtvG6KQHgf4LOlV7LP3GMuNGY.png"
              alt="Congregational prayer in mosque"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm rounded-b-lg -mt-1">
            <p className="text-emerald-200 text-sm text-center">Congregational prayer (Salah) in a mosque</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden bg-transparent">
          <div className="relative aspect-[16/9]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2vK5Kuy7gjfeSGMSaY29Gu4taShOOj.png"
              alt="Single person performing Sujud"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="p-4 bg-black/30 backdrop-blur-sm rounded-b-lg -mt-1">
            <p className="text-emerald-200 text-sm text-center">Sujud (prostration) - an essential part of Salah</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
