"use client"

import { motion } from "framer-motion"
import { ScrollText, Calculator, Star, Heart, Moon } from "lucide-react"
import { Card } from "@/components/ui/card"

const sections = [
  {
    title: "Zakat",
    icon: Calculator,
    content: `
      Zakat is one of the five pillars of Islam. During Ramadan, many Muslims choose to give their annual Zakat.
      
      Key Points:
      • 2.5% of wealth owned for one lunar year
      • Calculated on gold, silver, cash, savings, investments, rent income, business merchandise
      • Must meet the minimum threshold (nisab)
      • Given to specific categories of recipients
    `,
  },
  {
    title: "Sunnahs of Ramadan",
    icon: Star,
    content: `
      1. Taking Suhoor (pre-dawn meal)
      2. Breaking fast with dates and water
      3. Making dua at the time of breaking fast
      4. Increasing in charity
      5. Reading and studying the Quran
      6. Performing Taraweeh prayers
      7. Seeking Laylatul Qadr in the last 10 nights
      8. Making I'tikaf (spiritual retreat)
      9. Sharing meals for Iftar
      10. Controlling one's tongue and behavior
    `,
  },
  {
    title: "Important Aspects",
    icon: ScrollText,
    content: `
      • Fasting is obligatory upon adult Muslims
      • Exemptions include travelers, sick, elderly, pregnant/nursing women
      • The fast begins at Fajr and ends at Maghrib
      • Abstain from food, drink, and marital relations
      • Focus on spiritual growth and self-discipline
      • Increase in worship and good deeds
      • Strengthen community bonds
      • Practice patience and self-control
    `,
  },
  {
    title: "Acts of Worship",
    icon: Heart,
    content: `
      Special Ramadan Worship:
      • Five daily prayers
      • Taraweeh prayers at night
      • Recitation of Quran
      • Dhikr (remembrance of Allah)
      • Dua (supplication)
      • Sadaqah (voluntary charity)
      • Good conduct and character
      • Helping others
      • Seeking forgiveness
    `,
  },
  {
    title: "Fasting Rules",
    arabicTitle: "أحكام الصيام",
    icon: Moon,
    content: `
      1. Intention before Fajr
      2. Abstain from food, drink, and marital relations
      3. Fast from Fajr to Maghrib
      4. Break fast immediately at Maghrib
      5. Make up missed fasts
      6. Avoid invalidating actions
      7. Maintain good character
      8. Increase in worship
    `,
  },
  {
    title: "Virtues of Ramadan",
    arabicTitle: "فضائل رمضان",
    icon: Star,
    content: `
      1. Gates of Paradise are opened
      2. Gates of Hell are closed
      3. Devils are chained
      4. Night of Power is better than 1000 months
      5. Fasting is a shield
      6. Duas are accepted
      7. Sins are forgiven
      8. Rewards are multiplied
    `,
  },
  // Add more sections...
]

export default function InfoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">معلومات إسلامية</div>
          Islamic Information
        </h1>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="backdrop-blur-md bg-white/10 border-none h-full">
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <section.icon className="h-5 w-5 text-gold-500" />
                  <div>
                    <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                    <div className="font-arabic text-sm text-gold-300">{section.arabicTitle}</div>
                  </div>
                </div>
                <div className="space-y-2 text-emerald-200 whitespace-pre-line">{section.content}</div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
