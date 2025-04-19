"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Clock, BookOpen, Users, Star } from "lucide-react"
import { useState, memo } from "react"
import { prophets } from "@/lib/prophets-data"

// Define the Prophet type
interface Prophet {
  name: string
  arabicName: string
  era: string
  notableEvents: string[]
  additionalInfo?: string
}

// Time periods for the timeline
const timePeriods = [
  { label: "Ancient Era", range: "4000-2000 BCE", color: "from-amber-500 to-amber-700" },
  { label: "Middle Antiquity", range: "2000-1000 BCE", color: "from-emerald-500 to-emerald-700" },
  { label: "Late Antiquity", range: "1000 BCE-1 CE", color: "from-blue-500 to-blue-700" },
  { label: "Common Era", range: "1-700 CE", color: "from-purple-500 to-purple-700" },
]

// Memoize the static content components for better performance
const IntroductionSection = memo(function IntroductionSection() {
  return (
    <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 text-gold-500" />
          <h2 className="text-2xl font-bold text-gold-500">Understanding Prophethood in Islam</h2>
        </div>
        <div className="space-y-4 text-emerald-200">
          <p>
            In Islam, prophets (Anbiya) are individuals chosen by Allah to convey His message to humanity. Muslims
            believe that Allah sent numerous prophets throughout history, beginning with Adam and ending with Muhammad.
          </p>
          <p>
            The Quran specifically mentions 25 prophets by name, though Islamic tradition holds that there were many
            more—some narrations suggest 124,000 prophets were sent to different peoples across time.
          </p>
          <p>
            All prophets preached the same fundamental message of monotheism (Tawhid): the belief in One God and the
            importance of righteous conduct. Each prophet built upon the message of those who came before, with Prophet
            Muhammad completing and perfecting the divine guidance.
          </p>
          <p>
            Muslims are required to believe in and respect all prophets without distinction, as stated in the Quran: "We
            make no distinction between any of His messengers" (2:285).
          </p>
        </div>
      </div>
    </Card>
  )
})

const QuranicReferencesSection = memo(function QuranicReferencesSection() {
  return (
    <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-6 w-6 text-gold-500" />
          <h2 className="text-2xl font-bold text-gold-500">Quranic References</h2>
        </div>

        <div className="space-y-4 text-emerald-200">
          <p>
            The Quran mentions various prophets throughout its chapters, emphasizing the continuity of divine guidance:
          </p>

          <div className="bg-black/30 p-4 rounded-lg">
            <p className="text-gold-300 italic mb-2">
              "Say, [O believers], 'We have believed in Allah and what has been revealed to us and what has been
              revealed to Abraham and Ishmael and Isaac and Jacob and the Descendants and what was given to Moses and
              Jesus and what was given to the prophets from their Lord. We make no distinction between any of them, and
              we are Muslims [in submission] to Him.'"
            </p>
            <p className="text-right text-emerald-300">— Quran 2:136</p>
          </div>

          <div className="bg-black/30 p-4 rounded-lg">
            <p className="text-gold-300 italic mb-2">
              "And We have already sent messengers before you. Among them are those [whose stories] We have related to
              you, and among them are those [whose stories] We have not related to you."
            </p>
            <p className="text-right text-emerald-300">— Quran 40:78</p>
          </div>

          <p>
            These verses highlight the Islamic belief that Allah sent many prophets throughout history, with the same
            core message of monotheism and righteousness, culminating in the prophethood of Muhammad.
          </p>
        </div>
      </div>
    </Card>
  )
})

const ConclusionSection = memo(function ConclusionSection() {
  return (
    <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden max-w-2xl mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gold-500 mb-4">The Legacy of Prophethood</h2>
        <p className="text-emerald-200 mb-6">
          The prophets of Islam left an enduring legacy of faith, perseverance, and moral guidance. Their stories
          continue to inspire billions of Muslims worldwide, offering timeless lessons on patience, gratitude, and
          unwavering faith in Allah.
        </p>
        <p className="text-gold-300 font-arabic text-xl">وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ</p>
        <p className="text-white italic mt-2">
          "And We have not sent you, [O Muhammad], except as a mercy to the worlds." (Quran 21:107)
        </p>
      </div>
    </Card>
  )
})

export default function ProphetsPage() {
  const [selectedProphet, setSelectedProphet] = useState<Prophet | null>(null)
  const [filter, setFilter] = useState<string | null>(null)

  // Filter prophets based on time period if filter is active
  const filteredProphets = filter
    ? prophets.filter((prophet) => {
        const era = Number.parseInt(prophet.era.replace(/[^0-9-]/g, ""))
        switch (filter) {
          case "Ancient Era":
            return era <= -2000
          case "Middle Antiquity":
            return era > -2000 && era <= -1000
          case "Late Antiquity":
            return era > -1000 && era < 1
          case "Common Era":
            return era >= 1
          default:
            return true
        }
      })
    : prophets

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">أنبياء الإسلام</div>
          The 25 Prophets of Islam
        </h1>
        <p className="text-gold-300 max-w-2xl mx-auto">
          A chronological journey through the noble messengers mentioned in the Holy Quran
        </p>
      </motion.div>

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <IntroductionSection />
      </motion.div>

      {/* Time Period Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              filter === null ? "bg-gold-500 text-black font-bold" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            All Prophets
          </button>
          {timePeriods.map((period) => (
            <button
              key={period.label}
              onClick={() => setFilter(period.label)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === period.label
                  ? `bg-gradient-to-r ${period.color} text-white font-bold`
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {period.label} ({period.range})
            </button>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative mb-12"
      >
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gold-500/30 transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12">
          {filteredProphets.map((prophet, index) => (
            <motion.div
              key={prophet.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <div className="h-5 w-5 rounded-full bg-gold-500 border-4 border-emerald-900"></div>
              </div>

              {/* Content card - alternating sides */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                <Card
                  className={`backdrop-blur-md bg-white/10 border-none overflow-hidden cursor-pointer transition-all hover:bg-white/20 ${
                    selectedProphet?.name === prophet.name ? "ring-2 ring-gold-500" : ""
                  }`}
                  onClick={() => setSelectedProphet(prophet)}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gold-500">{prophet.name}</h3>
                        <p className="text-lg font-arabic text-gold-300">{prophet.arabicName}</p>
                      </div>
                      <span className="bg-black/30 px-3 py-1 rounded-full text-emerald-200 text-sm">{prophet.era}</span>
                    </div>

                    <ul className="list-disc list-inside space-y-1 text-emerald-200 mb-4">
                      {prophet.notableEvents.map((event, i) => (
                        <li key={i}>{event}</li>
                      ))}
                    </ul>

                    <button
                      className="text-sm text-gold-400 hover:text-gold-300 transition-colors flex items-center"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProphet(prophet)
                      }}
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Selected Prophet Details */}
      <AnimatePresence>
        {selectedProphet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProphet(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gold-500">Prophet {selectedProphet.name}</h2>
                    <p className="text-2xl font-arabic text-gold-300 mt-1">{selectedProphet.arabicName}</p>
                    <p className="text-emerald-200 mt-2">{selectedProphet.era}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProphet(null)}
                    className="text-white hover:text-gold-300 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gold-400 mb-3 flex items-center">
                      <Star className="h-5 w-5 mr-2 text-gold-500" />
                      Notable Events
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-white">
                      {selectedProphet.notableEvents.map((event, i) => (
                        <li key={i}>{event}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedProphet.additionalInfo && (
                    <div>
                      <h3 className="text-xl font-semibold text-gold-400 mb-3 flex items-center">
                        <BookOpen className="h-5 w-5 mr-2 text-gold-500" />
                        Additional Information
                      </h3>
                      <p className="text-white">{selectedProphet.additionalInfo}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold text-gold-400 mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-gold-500" />
                      Historical Context
                    </h3>
                    <p className="text-white">
                      Prophet {selectedProphet.name} lived during a time when{" "}
                      {Number.parseInt(selectedProphet.era.replace(/[^0-9-]/g, "")) < -2000
                        ? "early human civilizations were forming and monotheism was rare among people."
                        : Number.parseInt(selectedProphet.era.replace(/[^0-9-]/g, "")) < -1000
                          ? "many societies were developing complex religious systems, often centered around polytheism and nature worship."
                          : Number.parseInt(selectedProphet.era.replace(/[^0-9-]/g, "")) < 1
                            ? "major empires were rising and falling, and religious thought was evolving across many cultures."
                            : "religious traditions were becoming more established and codified across the world."}{" "}
                      His message reinforced the core Islamic principle of Tawhid (monotheism) and moral guidance for
                      his people.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-emerald-200 text-sm italic">
                      "Indeed, We have revealed to you [O Muhammad] as We revealed to Noah and the prophets after him."
                      (Quran 4:163)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timeline Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-gold-500" />
              <h2 className="text-2xl font-bold text-gold-500">Timeline Legend</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {timePeriods.map((period) => (
                <div key={period.label} className="bg-black/30 rounded-lg p-4">
                  <div className={`h-2 w-full rounded-full bg-gradient-to-r ${period.color} mb-2`}></div>
                  <h3 className="font-semibold text-white">{period.label}</h3>
                  <p className="text-emerald-200 text-sm">{period.range}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 text-emerald-200 text-sm">
              <p className="italic">
                Note: The dates provided are approximate and based on historical and Islamic sources. Exact dating of
                ancient prophets is subject to scholarly interpretation.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Quranic References */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mb-8"
      >
        <QuranicReferencesSection />
      </motion.div>

      {/* Conclusion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <ConclusionSection />
      </motion.div>
    </div>
  )
}
