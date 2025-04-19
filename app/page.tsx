"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { format } from "date-fns"
import { motion } from "framer-motion"
import { ramadanData } from "@/lib/calendar-data"
import { PalestineDua } from "@/components/palestine-dua"
import { RotatingVerse } from "@/components/rotating-verse"
import { HadithLesson } from "@/components/hadith-lesson"
import Link from "next/link"
import { BookOpen, Clock, Info, ExternalLink, Download } from "lucide-react"
import { PrayerTimeTable } from "@/components/prayer-time-table"

// Import the calendar data

type PrayerTiming = {
  date: string
  sehar: string
  dhuhr: string
  asr: string
  iftar: string
  isha: string
}

const arabicNumerals: { [key: string]: string } = {
  "0": "٠",
  "1": "١",
  "2": "٢",
  "3": "٣",
  "4": "٤",
  "5": "٥",
  "6": "٦",
  "7": "٧",
  "8": "٨",
  "9": "٩",
}

function toArabicNumbers(num: string) {
  return num.replace(/[0-9]/g, (d) => arabicNumerals[d])
}

function getTimeRemaining(targetTime: string) {
  const now = new Date()
  const [hours, minutes] = targetTime.split(":").map(Number)
  const target = new Date(now)
  target.setHours(hours, minutes, 0)

  if (target < now) {
    target.setDate(target.getDate() + 1)
  }

  const diff = target.getTime() - now.getTime()
  const hours_remaining = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes_remaining = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds_remaining = Math.floor((diff % (1000 * 60)) / 1000)

  return {
    hours: hours_remaining,
    minutes: minutes_remaining,
    seconds: seconds_remaining,
  }
}

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedCity, setSelectedCity] = useState("Bangalore")
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string }>()
  const [timeRemaining, setTimeRemaining] = useState<{ hours: number; minutes: number; seconds: number }>()
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const calendarRef = useRef<HTMLDivElement>(null)

  // Get current day's timings
  const currentDate = format(currentTime, "dd")
  const currentTimings =
    ramadanData[selectedCity]?.find((day) => day.date === currentDate) || ramadanData[selectedCity][0] // Fallback to first day if current date not found

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!currentTimings) return

    const now = new Date()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()

    // Convert prayer times to 24-hour format for comparison
    const prayers = [
      { name: "Sehar", time: currentTimings.sehar },
      { name: "Dhuhr", time: currentTimings.dhuhr },
      { name: "Asr", time: currentTimings.asr },
      { name: "Iftar", time: currentTimings.iftar },
      { name: "Isha", time: currentTimings.isha },
    ].map((prayer) => {
      const [time, period] = prayer.time.split(" ")
      const [hours, minutes] = time.split(":").map(Number)
      const hour24 = period === "PM" && hours !== 12 ? hours + 12 : hours
      return {
        name: prayer.name,
        time: `${hour24}:${minutes}`,
      }
    })

    // Find next prayer
    const next = prayers.find((prayer) => {
      const [hours, minutes] = prayer.time.split(":").map(Number)
      return hours > currentHour || (hours === currentHour && minutes > currentMinute)
    })

    setNextPrayer(next || prayers[0]) // If no next prayer today, show first prayer of next day

    // Update countdown
    const updateCountdown = () => {
      if (next) {
        setTimeRemaining(getTimeRemaining(next.time))
      }
    }

    updateCountdown()
    const countdownTimer = setInterval(updateCountdown, 1000)

    return () => clearInterval(countdownTimer)
  }, [currentTimings])

  const handleCityChange = (city: string) => {
    setSelectedCity(city)
  }

  // Handle mouse movement for interactive effects
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!calendarRef.current) return

    const rect = calendarRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  if (!currentTimings) {
    return <div className="text-center text-white">Loading...</div>
  }

  return (
    <main className="container mx-auto min-h-screen px-4 py-8">
      {/* Donation Notification */}
      <PalestineDua />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="mb-2 font-arabic text-4xl font-bold text-white">
          <div className="text-2xl">القرآن والصلاة</div>
          Quran & Prayer Times
        </h1>
        <p className="mb-2 font-arabic text-xl text-orange-300 dark:text-blue-300">
          {toArabicNumbers(format(currentTime, "dd"))} {format(currentTime, "MMMM yyyy")}
        </p>
        <p className="mb-4 text-xl text-orange-300 dark:text-blue-300">
          {format(currentTime, "EEEE, dd MMMM yyyy")}
          <br />
          {format(currentTime, "hh:mm:ss a")}
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-gold-500/20 dark:border-blue-500/20"
          >
            <Clock className="h-8 w-8 md:h-10 md:w-10 text-gold-500 dark:text-blue-500 mx-auto mb-3 md:mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Prayer Times</h2>
            <p className="text-sm md:text-base text-emerald-200 dark:text-blue-200">
              Accurate prayer times for your location with notifications for upcoming prayers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-gold-500/20 dark:border-blue-500/20"
          >
            <Info className="h-8 w-8 md:h-10 md:w-10 text-gold-500 dark:text-blue-500 mx-auto mb-3 md:mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Islamic Knowledge</h2>
            <p className="text-sm md:text-base text-emerald-200 dark:text-blue-200">
              Learn about Islamic practices, traditions, and spiritual guidance for daily life.
            </p>
          </motion.div>
        </div>

        <PrayerTimeTable />
      </motion.div>

      {/* Quran Download Button - Prominent and Mobile Responsive */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 mb-8"
      >
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-900/70 to-gold-900/70 dark:from-blue-900/70 dark:to-indigo-900/70 rounded-lg p-4 md:p-6 border-2 border-gold-500/50 dark:border-blue-500/50 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-6 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gold-400 dark:text-blue-400 mb-2">
                Download The Holy Quran
              </h2>
              <p className="text-white text-sm md:text-base">Access the complete Quran in English translation (PDF)</p>
            </div>
            <a
              href="https://cdn69.urdupoint.com/islam/quran-pdf/english.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gold-600 dark:bg-blue-600 hover:bg-gold-700 dark:hover:bg-blue-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg transition-colors duration-300 font-bold shadow-md text-sm md:text-base w-full md:w-auto"
            >
              <Download className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Download Quran PDF
            </a>
          </div>
        </div>
      </motion.div>

      {/* Quranic Verses Section */}
      <RotatingVerse />

      {/* Hadith Lessons Section */}
      <HadithLesson />

      {/* Link to Islamic Practices at the bottom of the page - Made more prominent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 mb-8 text-center"
      >
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-emerald-900/50 via-gold-900/50 to-emerald-900/50 dark:from-blue-900/50 dark:via-indigo-900/50 dark:to-blue-900/50 backdrop-blur-md rounded-lg p-4 md:p-8 border-2 border-gold-500/30 dark:border-blue-500/30 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-gold-400 dark:text-blue-400 mr-2 md:mr-3" />
            <h2 className="text-xl md:text-3xl font-bold text-gold-400 dark:text-blue-400">
              Explore Islamic Practices
            </h2>
          </div>

          <p className="text-white text-sm md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto">
            Discover essential Islamic practices including Waqf, rights of men and women in Islam, family values, and
            more in our comprehensive guide.
          </p>

          <Link
            href="/islamic-practices"
            className="inline-flex items-center justify-center bg-gradient-to-r from-gold-500 to-gold-600 dark:from-blue-500 dark:to-blue-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-lg hover:from-gold-600 hover:to-gold-700 dark:hover:from-blue-600 dark:hover:to-blue-700 transition-all duration-300 text-sm md:text-lg font-bold shadow-lg"
          >
            Learn About Islamic Practices
            <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Link>
        </div>
      </motion.div>
    </main>
  )
}
