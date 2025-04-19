"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clock, MapPin, Sun, Moon, Sunrise, Sunset } from "lucide-react"
import { Card } from "@/components/ui/card"

type PrayerTime = {
  name: string
  arabicName: string
  time: string
  icon: React.ElementType
}

type CityPrayerTimes = {
  [city: string]: {
    [date: string]: PrayerTime[]
  }
}

// Sample prayer times data with icons
const prayerTimesData: CityPrayerTimes = {
  Bangalore: {
    today: [
      { name: "Fajr", arabicName: "الفجر", time: "5:03 AM", icon: Sunrise },
      { name: "Sunrise", arabicName: "الشروق", time: "6:15 AM", icon: Sun },
      { name: "Dhuhr", arabicName: "الظهر", time: "12:25 PM", icon: Sun },
      { name: "Asr", arabicName: "العصر", time: "3:41 PM", icon: Sun },
      { name: "Maghrib", arabicName: "المغرب", time: "6:33 PM", icon: Sunset },
      { name: "Isha", arabicName: "العشاء", time: "7:43 PM", icon: Moon },
    ],
  },
  Mumbai: {
    today: [
      { name: "Fajr", arabicName: "الفجر", time: "5:10 AM", icon: Sunrise },
      { name: "Sunrise", arabicName: "الشروق", time: "6:30 AM", icon: Sun },
      { name: "Dhuhr", arabicName: "الظهر", time: "12:43 PM", icon: Sun },
      { name: "Asr", arabicName: "العصر", time: "4:06 PM", icon: Sun },
      { name: "Maghrib", arabicName: "المغرب", time: "6:55 PM", icon: Sunset },
      { name: "Isha", arabicName: "العشاء", time: "8:08 PM", icon: Moon },
    ],
  },
  Chennai: {
    today: [
      { name: "Fajr", arabicName: "الفجر", time: "4:59 AM", icon: Sunrise },
      { name: "Sunrise", arabicName: "الشروق", time: "6:10 AM", icon: Sun },
      { name: "Dhuhr", arabicName: "الظهر", time: "12:13 PM", icon: Sun },
      { name: "Asr", arabicName: "العصر", time: "3:28 PM", icon: Sun },
      { name: "Maghrib", arabicName: "المغرب", time: "6:23 PM", icon: Sunset },
      { name: "Isha", arabicName: "العشاء", time: "7:33 PM", icon: Moon },
    ],
  },
  Hyderabad: {
    today: [
      { name: "Fajr", arabicName: "الفجر", time: "5:06 AM", icon: Sunrise },
      { name: "Sunrise", arabicName: "الشروق", time: "6:20 AM", icon: Sun },
      { name: "Dhuhr", arabicName: "الظهر", time: "12:28 PM", icon: Sun },
      { name: "Asr", arabicName: "العصر", time: "3:43 PM", icon: Sun },
      { name: "Maghrib", arabicName: "المغرب", time: "6:38 PM", icon: Sunset },
      { name: "Isha", arabicName: "العشاء", time: "7:48 PM", icon: Moon },
    ],
  },
}

export function PrayerTimeTable() {
  const [selectedCity, setSelectedCity] = useState("Bangalore")
  const [currentTime, setCurrentTime] = useState(new Date())
  const [nextPrayer, setNextPrayer] = useState<string | null>(null)
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null)

  // Get current date in a nice format
  const currentDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Update current time and calculate next prayer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    // Calculate next prayer
    const updateNextPrayer = () => {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()

      // Convert prayer times to 24-hour format
      const prayers = prayerTimesData[selectedCity].today.map((prayer) => {
        const [time, period] = prayer.time.split(" ")
        const [hours, minutes] = time.split(":").map(Number)
        const hour24 = period === "PM" && hours !== 12 ? hours + 12 : period === "AM" && hours === 12 ? 0 : hours

        return {
          name: prayer.name,
          time: `${hour24}:${minutes}`,
          hour: hour24,
          minute: minutes,
        }
      })

      // Find next prayer
      const next = prayers.find((prayer) => {
        return prayer.hour > currentHour || (prayer.hour === currentHour && prayer.minute > currentMinute)
      })

      if (next) {
        setNextPrayer(next.name)

        // Calculate time remaining
        const prayerTime = new Date()
        prayerTime.setHours(next.hour, next.minute, 0)

        const diff = prayerTime.getTime() - now.getTime()
        const hours = Math.floor(diff / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

        setTimeRemaining(`${hours}h ${minutes}m`)
      } else {
        // If no next prayer today, show first prayer of tomorrow
        setNextPrayer(prayers[0].name)
        setTimeRemaining("tomorrow")
      }
    }

    updateNextPrayer()
    const nextPrayerTimer = setInterval(updateNextPrayer, 60000) // Update every minute

    return () => {
      clearInterval(timer)
      clearInterval(nextPrayerTimer)
    }
  }, [selectedCity])

  // Generate random sparkles for the background
  const [sparkles] = useState(() =>
    Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 2,
    })),
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden relative">
        {/* Animated border effect */}
        <div className="absolute inset-0 p-[1px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/30 via-emerald-500/30 to-gold-500/30 dark:from-blue-500/30 dark:via-indigo-500/30 dark:to-blue-500/30 animate-[gradient_3s_ease_infinite]"></div>
        </div>

        {/* Sparkles in the background */}
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-300/20 dark:bg-blue-300/20 pointer-events-none"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: sparkle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: sparkle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div className="p-4 md:p-6 relative z-10">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center space-x-2 mb-3 sm:mb-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-orange-400 dark:text-blue-400" />
              </motion.div>
              <h2 className="text-xl md:text-2xl font-semibold text-white">Daily Prayer Times</h2>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-orange-400 dark:text-blue-400" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="rounded-md bg-orange-500/20 px-2 py-1 md:px-3 md:py-1 text-white text-sm md:text-base hover:bg-orange-500/30 transition-colors border border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              >
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
              </select>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-4 md:mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gold-300 dark:text-blue-300 mb-2 text-sm md:text-base">{currentDate}</p>

            {nextPrayer && (
              <div className="bg-black/30 inline-block px-4 py-1 md:px-6 md:py-2 rounded-full">
                <span className="text-white text-sm md:text-base">Next Prayer: </span>
                <span className="text-gold-400 dark:text-blue-400 font-bold text-sm md:text-base">{nextPrayer}</span>
                {timeRemaining && (
                  <span className="text-emerald-300 dark:text-blue-300 ml-2 text-sm md:text-base">
                    in {timeRemaining}
                  </span>
                )}
              </div>
            )}
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4">
            {prayerTimesData[selectedCity]?.today.map((prayer, index) => (
              <motion.div
                key={prayer.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative overflow-hidden rounded-lg p-3 md:p-4 ${
                  nextPrayer === prayer.name ? "bg-gold-500/20 dark:bg-blue-500/20" : "bg-black/30"
                }`}
              >
                {/* Animated gradient border for next prayer */}
                {nextPrayer === prayer.name && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold-500/50 via-emerald-500/50 to-gold-500/50 dark:from-blue-500/50 dark:via-indigo-500/50 dark:to-blue-500/50 opacity-50"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                      zIndex: -1,
                    }}
                  />
                )}

                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <motion.div
                    animate={{
                      rotate: nextPrayer === prayer.name ? [0, 360] : 0,
                    }}
                    transition={{
                      duration: 20,
                      repeat: nextPrayer === prayer.name ? Number.POSITIVE_INFINITY : 0,
                      ease: "linear",
                    }}
                  >
                    <prayer.icon className="h-5 w-5 md:h-6 md:w-6 text-gold-400 dark:text-blue-400" />
                  </motion.div>
                </div>

                <div className="font-arabic text-xs md:text-sm text-gold-400 dark:text-blue-400 mb-1 text-center">
                  {prayer.arabicName}
                </div>
                <div className="text-white font-semibold mb-1 text-center text-xs md:text-sm">{prayer.name}</div>
                <motion.div
                  className="text-emerald-200 dark:text-blue-200 text-base md:text-lg text-center"
                  animate={{
                    scale: nextPrayer === prayer.name ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: nextPrayer === prayer.name ? Number.POSITIVE_INFINITY : 0,
                    ease: "easeInOut",
                  }}
                >
                  {prayer.time}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
