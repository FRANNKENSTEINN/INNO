"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Heart, BookOpen, Moon, Star, HandIcon as PrayingHands, Sunrise, Sunset } from "lucide-react"

const spiritualAspects = [
  {
    title: "Self-Discipline",
    icon: Heart,
    description:
      "Fasting teaches self-discipline and self-control. By abstaining from food, drink, and other physical needs during daylight hours, Muslims learn to control their natural urges and desires.",
    quote:
      "O you who believe! Fasting is prescribed for you as it was prescribed for those before you, that you may become righteous.",
    quoteSource: "Quran 2:183",
  },
  {
    title: "Increased Worship",
    icon: PrayingHands,
    description:
      "Ramadan is a time for increased devotion and worship. Muslims are encouraged to perform additional prayers, read the entire Quran, and engage in dhikr (remembrance of Allah).",
    quote:
      "The month of Ramadan is that in which was revealed the Quran, a guidance for mankind and clear proofs for guidance and criterion.",
    quoteSource: "Quran 2:185",
  },
  {
    title: "Spiritual Reflection",
    icon: Moon,
    description:
      "The month provides an opportunity for spiritual reflection and growth. Muslims are encouraged to reflect on their lives, seek forgiveness for past sins, and make plans for self-improvement.",
    quote:
      "Whoever fasts during Ramadan out of sincere faith and hoping to attain Allah's rewards, then all his past sins will be forgiven.",
    quoteSource: "Hadith, Sahih Bukhari",
  },
  {
    title: "Compassion and Empathy",
    icon: Star,
    description:
      "By experiencing hunger and thirst, Muslims develop greater compassion for those who are less fortunate and may experience these sensations regularly.",
    quote:
      "Those who spend (in charity) during ease and hardship and who restrain their anger and pardon the people - and Allah loves the doers of good.",
    quoteSource: "Quran 3:134",
  },
]

const dailySchedule = [
  {
    time: "Before Dawn",
    title: "Suhoor",
    icon: Sunrise,
    description:
      "The pre-dawn meal Muslims eat before beginning their fast for the day. It's recommended to eat a nutritious meal that will provide energy throughout the day.",
  },
  {
    time: "Dawn to Sunset",
    title: "Fasting Period",
    icon: BookOpen,
    description:
      "Muslims abstain from food, drink, smoking, and marital relations. It's a time to focus on work, worship, and daily activities while maintaining the fast.",
  },
  {
    time: "Sunset",
    title: "Iftar",
    icon: Sunset,
    description:
      "The meal to break the fast at sunset. Traditionally, the fast is broken with dates and water, followed by a larger meal, often shared with family and friends.",
  },
  {
    time: "After Isha Prayer",
    title: "Taraweeh",
    icon: PrayingHands,
    description:
      "Special prayers performed during Ramadan nights. These prayers can last for one to two hours and involve recitation of portions of the Quran.",
  },
  {
    time: "Last 10 Nights",
    title: "Laylat al-Qadr",
    icon: Star,
    description:
      "The Night of Power, believed to fall on one of the odd-numbered nights in the last ten days of Ramadan. Many Muslims spend these nights in prayer and worship.",
  },
]

export default function SpiritualAspectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">الجوانب الروحية لرمضان</div>
          Spiritual Aspects of Ramadan
        </h1>
        <p className="text-gold-300 max-w-2xl mx-auto">
          Discover the deeper spiritual significance and blessings of the holy month of Ramadan
        </p>
      </motion.div>

      {/* Spiritual Aspects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gold-500 mb-8 text-center">Spiritual Benefits</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {spiritualAspects.map((aspect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
            >
              <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <aspect.icon className="h-6 w-6 text-gold-500" />
                    <h3 className="text-xl font-bold text-gold-500">{aspect.title}</h3>
                  </div>
                  <p className="text-emerald-200 mb-4">{aspect.description}</p>
                  <div className="bg-emerald-900/30 p-4 rounded-lg">
                    <p className="text-gold-300 italic mb-2">"{aspect.quote}"</p>
                    <p className="text-emerald-200 text-sm text-right">— {aspect.quoteSource}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Daily Schedule Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <h2 className="text-3xl font-bold text-gold-500 mb-8 text-center">Daily Spiritual Schedule</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold-500/30 transform -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-8">
            {dailySchedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
                className="relative"
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:ml-auto" : "md:pl-12"}`}>
                  <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="h-5 w-5 text-gold-500" />
                        <h3 className="text-lg font-bold text-gold-500">{item.title}</h3>
                      </div>
                      <p className="text-sm text-gold-300 mb-3">{item.time}</p>
                      <p className="text-emerald-200">{item.description}</p>
                    </div>
                  </Card>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="h-4 w-4 rounded-full bg-gold-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
