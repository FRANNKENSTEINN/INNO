"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Utensils, Moon, Gift, ChurchIcon as Mosque } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const traditions = [
  {
    title: "Charity and Zakat",
    icon: Gift,
    description:
      "Ramadan is a time of increased charity. Muslims are encouraged to give to those in need, and many pay their annual zakat (obligatory charity) during this month.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LQ4b1J0GAVT52kqUW4k25MYuQkuouk.png",
  },
  {
    title: "Laylat al-Qadr",
    icon: Moon,
    description:
      "The Night of Power, believed to be when the first verses of the Quran were revealed to Prophet Muhammad. It's considered the holiest night of the year.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gakzuiMD2PkicGkLOXARBFscbeabuM.png",
  },
  {
    title: "Taraweeh Prayers",
    icon: Mosque,
    description:
      "Special prayers performed at night during Ramadan. Muslims gather in mosques to perform these prayers, which can last for several hours.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dgekDeHQKgtWXMME1piSpe3DcilfMb.png",
  },
  {
    title: "Iftar Gatherings",
    icon: Utensils,
    description:
      "Iftar is the meal eaten after sunset during Ramadan. It's a time for family and community gatherings, often featuring traditional dishes that vary by culture and region.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GcN4R9RCtojo0LP7vHWZN5ELnEHqf8.png",
  },
]

const foods = [
  {
    name: "Dates",
    description: "Traditionally used to break the fast, following the example of Prophet Muhammad.",
    region: "Pan-Islamic",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T7BB8H5PfP6u9RGe75AfguTxFkYnu8.png",
  },
  {
    name: "Harira",
    description: "A rich soup with tomatoes, lentils, chickpeas, and meat, traditional in Morocco.",
    region: "North Africa",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h5QPPQ20p0I0BnD9NheigXYm5okf1W.png",
  },
  {
    name: "Samosas",
    description: "Triangular pastries filled with spiced vegetables or meat, popular for iftar.",
    region: "South Asia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IVn9Gj7nRezYKNByJu5N9WyQ5tCLTx.png",
  },
  {
    name: "Qatayef",
    description: "Sweet dumplings filled with cheese or nuts, then fried or baked and soaked in syrup.",
    region: "Middle East",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3n3y4LZ25nwutmW4ee8AMnyUSTxvqt.png",
  },
  {
    name: "Haleem",
    description: "A stew of meat, lentils, and pounded wheat cooked for hours until smooth.",
    region: "Middle East & South Asia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xYdBo0r3gTydDDp11VU8O7ZZwaLOrO.png",
  },
  {
    name: "Kunafa",
    description: "A sweet cheese pastry soaked in sugar syrup, often topped with pistachios.",
    region: "Middle East",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J8L8Zp5zNgpJNKA6ADlv0HG0oSJ11o.png",
  },
]

export default function RamadanTraditionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">تقاليد رمضان</div>
          Ramadan Traditions
        </h1>
        <p className="text-gold-300 max-w-2xl mx-auto">
          Explore the beautiful traditions and customs observed during the holy month of Ramadan across the Muslim world
        </p>
      </motion.div>

      {/* Traditions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gold-500 mb-8 text-center">Key Traditions</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {traditions.map((tradition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
            >
              <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={tradition.image || "/placeholder.svg"}
                    alt={tradition.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <tradition.icon className="h-6 w-6 text-gold-500" />
                    <h3 className="text-xl font-bold text-gold-500">{tradition.title}</h3>
                  </div>
                  <p className="text-emerald-200">{tradition.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Foods Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h2 className="text-3xl font-bold text-gold-500 mb-8 text-center">Traditional Ramadan Foods</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden">
                      <Image src={food.image || "/placeholder.svg"} alt={food.name} fill className="object-cover" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gold-500 text-center mb-2">{food.name}</h3>
                  <p className="text-sm text-gold-300 text-center mb-4">{food.region}</p>
                  <p className="text-emerald-200 text-center">{food.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Link to How To Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <Card className="backdrop-blur-md bg-black/30 border-none overflow-hidden max-w-2xl mx-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gold-500 mb-4">Learn Essential Islamic Practices</h2>
            <p className="text-emerald-200 mb-6">
              Visit our How To Guide to learn the proper methods for performing Wudu (ablution) and Salah (prayer) with
              step-by-step instructions and video demonstrations.
            </p>
            <Link
              href="/how-to"
              className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
            >
              View How To Guide
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
