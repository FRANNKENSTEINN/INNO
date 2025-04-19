"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, History, Globe2, PlayCircle, ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u9szdMsGihz0GJcGvMYGl2BHaRUp6d.png",
    alt: "Al-Aqsa Mosque at sunset",
    caption: "The Dome of the Rock, third holiest site in Islam",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2RYqqroes0v4svEHwPrMRLC6VzErU5.png",
    alt: "Historical image of oppression",
    caption: "Historical documentation of systematic oppression (1948)",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BcJjxdopYU30sq7sG3JO4EOm6AN7an.png",
    alt: "Child holding infant",
    caption: "The human cost: Palestinian children affected by conflict",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WAIgND235ilzsYu3VQ7Mi94oBrgcyt.png",
    alt: "Iftar meal amidst destruction in Gaza",
    caption:
      "Resilience: Palestinians break their fast during Ramadan amidst the rubble of destroyed buildings in Gaza",
  },
]

const youtubeVideos = [
  {
    id: "3t-HVlIHpHo",
    title: "Ramadan in Palestine",
    description: "Palestinians observe Ramadan despite ongoing conflict",
  },
]

function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[16/9] w-full"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <p className="absolute bottom-4 left-4 right-4 text-center text-white">{images[currentIndex].caption}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

function YouTubeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, youtubeVideos.length - 1))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX)
    setIsDragging(true)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrevious()
      }
      setIsDragging(false)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const currentX = e.clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext()
      } else {
        handlePrevious()
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`
    }
  }, [currentIndex])

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-300 ease-out"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {youtubeVideos.map((video, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-bold text-green-400">{video.title}</h3>
              <p className="text-white text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {youtubeVideos.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
            } transition-colors`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === youtubeVideos.length - 1}
            className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white ${
              currentIndex === youtubeVideos.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-black/70"
            } transition-colors`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {youtubeVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-green-500" : "bg-green-500/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function PalestinePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-red-500 mb-2">
          <div className="font-arabic text-2xl mb-2 text-green-500">فلسطين</div>
          Palestine
        </h1>
        <p className="text-green-400 max-w-2xl mx-auto">The blessed land of Al-Aqsa and historical significance</p>
      </motion.div>

      {/* News Section - Now with new articles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold text-red-500">LATEST NEWS</h2>
              <span className="animate-pulse">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-full">
                  BREAKING
                </span>
              </span>
            </div>

            {/* New News Item - Renewed Israeli Attacks */}
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <h3 className="text-xl font-bold text-white">Renewed Israeli Attacks Kill More Children in Gaza</h3>
              </div>
              <p className="text-green-200 mb-4">
                April 12, 2025 - Palestinian civil defense spokesman Mahmoud Basal reported that renewed Israeli attacks
                have killed more children in Gaza. The ongoing violence continues to take a devastating toll on the
                civilian population, particularly children, as humanitarian organizations call for immediate
                intervention.
              </p>
              <a
                href="https://www.presstv.ir/Detail/2025/04/12/746029/Palestine-renewed-Israeli-attacks-Gaza-children-killed-Palestinian-civil-defense-Mahmoud-Basal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                Read full story on Press TV
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* New News Item - Gaza Medics Killed */}
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <h3 className="text-xl font-bold text-white">Gaza Medics Killed in Israeli Strikes on Ambulances</h3>
              </div>
              <p className="text-green-200 mb-4">
                April 12, 2025 - AP reports on medics killed in Gaza as Israeli forces struck ambulances, raising
                concerns about humanitarian access and violations of international humanitarian law. Medical personnel,
                who should be protected under international law, continue to face dangers while trying to save lives in
                the conflict zone.
              </p>
              <a
                href="https://apnews.com/article/gaza-medics-killed-israel-ambulances-f34b6ecc985d9127265a400bd52c72b7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                Read full story on AP News
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* New News Item - Rights Group Lambasts EU */}
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <h3 className="text-xl font-bold text-white">
                  Rights Group Lambasts EU's 'Shameful' Attempt to Justify Israel's War Crimes in Palestine
                </h3>
              </div>
              <p className="text-green-200 mb-4">
                March 22, 2025 - Human rights organization Euro-Med Monitor has condemned the European Union's recent
                statement on the situation in Gaza as a "shameful" attempt to justify Israel's war crimes. The group
                criticized the EU for failing to call for an immediate ceasefire and for continuing to supply Israel
                with weapons despite evidence of their use in attacks on civilians.
              </p>
              <a
                href="https://www.jurist.org/news/2025/03/rights-group-lambasts-eus-shameful-attempt-to-justify-israels-war-crimes-in-palestine/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                Read full story on Jurist
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* New News Item - Protesters Gather Outside Israeli Embassy */}
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">NEW</span>
                <h3 className="text-xl font-bold text-white">Protesters Gather Outside Israeli Embassy in London</h3>
              </div>
              <p className="text-green-200 mb-4">
                March 21, 2025 - Thousands of protesters gathered outside the Israeli embassy in London to demand an
                immediate ceasefire in Gaza. The demonstration, organized by the Palestine Solidarity Campaign, saw
                participants calling for an end to arms sales to Israel and for the UK government to take stronger
                action to protect Palestinian civilians.
              </p>
              <a
                href="https://uk.news.yahoo.com/protesters-gather-outside-israeli-embassy-025516261.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                Read full story on Yahoo News UK
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Previous Al Jazeera News Item */}
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">
                  Israeli Attacks Kill Nearly 600 as Troops Invade South, North Gaza
                </h3>
              </div>
              <p className="text-green-200 mb-4">
                March 21, 2025 - Israel's military says a ground invasion of southern Rafah is under way and troops are
                pushing into the north near the town of Beit Lahiya and central areas. At least 200 children have been
                killed since Israel resumed its war on the besieged Palestinian enclave this week, UNICEF says.
              </p>
              <a
                href="https://www.aljazeera.com/news/liveblog/2025/3/21/live-israeli-attacks-kill-almost-600-as-troops-invade-south-north-gaza"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                Read full story on Al Jazeera
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Previous Hindustan Times News Item */}
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">
                  Latest US News Updates: Developments on Middle East Policy
                </h3>
              </div>
              <p className="text-green-200 mb-4">
                March 16, 2025 - Follow the latest updates on US foreign policy regarding the Middle East, including
                statements from key officials and diplomatic developments that could impact the ongoing situation.
              </p>
              <a
                href="https://www.hindustantimes.com/world-news/us-news/latest-us-news-live-updates-march-16-2025-101742063677620.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                Read full story on Hindustan Times
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Israeli Airstrikes News Item */}
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-white">
                  Israeli Airstrikes Killed 8 People in the Gaza Strip, Palestinian Medics Say
                </h3>
              </div>
              <p className="text-green-200 mb-4">
                March 15, 2025 - Palestinian medics report that Israeli airstrikes have killed at least 8 people in the
                Gaza Strip, as the conflict continues to escalate despite international calls for ceasefire.
              </p>
              <a
                href="https://www.nsnews.com/world-news/israeli-airstrikes-killed-8-people-in-the-gaza-strip-palestinian-medics-say-10379769"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
              >
                Read full story on North Shore News
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            <div className="space-y-6">
              {/* News Item 1 - Barefoot Protestor (NEW) - No image */}
              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">1</span>
                  <h3 className="text-xl font-bold text-white">
                    Barefoot Pro-Palestine Protestor Climbs London's Big Ben Tower
                  </h3>
                </div>
                <p className="text-green-200 mb-4">
                  March 10, 2025 - A barefoot pro-Palestine protestor climbed London's iconic Big Ben tower and waved
                  the Palestinian flag in a dramatic demonstration that has captured international attention.
                </p>
                <a
                  href="https://www.msn.com/en-in/news/world/barefoot-pro-palestine-protestor-climbs-londons-big-ben-tower-waves-palestinian-flag/vi-AA1Ax8Ks?ocid=BingNewsVerp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                >
                  Watch video on MSN
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* News Item 2 - Bloomberg - No image */}
              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">2</span>
                  <h3 className="text-xl font-bold text-white">Who Will Pay to Rebuild Gaza?</h3>
                </div>
                <p className="text-green-200 mb-4">
                  March 6, 2025 - As the conflict in Gaza continues, questions arise about the massive reconstruction
                  effort that will be needed. Bloomberg examines the potential costs and who might bear the financial
                  burden of rebuilding.
                </p>
                <a
                  href="https://www.bloomberg.com/graphics/2024-gaza-who-will-pay-to-rebuild/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                >
                  Read full story on Bloomberg
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* News Item 3 - Israel Violates Ceasefire */}
              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">3</span>
                  <h3 className="text-xl font-bold text-white">ISRAEL VIOLATES CEASEFIRE AGAIN!</h3>
                </div>
                <p className="text-green-200 mb-4">
                  March 2, 2025 - As negotiations continue for extending the Gaza ceasefire, reports emerge of new
                  violations by Israeli forces, raising concerns about the fragility of the peace process.
                </p>
                <a
                  href="https://www.aljazeera.com/news/liveblog/2025/3/2/live-israel-us-propose-terms-to-extend-gaza-ceasefire-hamas-yet-to-reply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                >
                  Read full story on Al Jazeera
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* News Item 4 - Arab Leaders */}
              <div className="border-l-4 border-green-500 pl-4 mt-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">4</span>
                  <h3 className="text-xl font-bold text-white">
                    Arab Leaders Agree to Egyptian Plan for Gaza Reconstruction
                  </h3>
                </div>
                <p className="text-green-200 mb-4">
                  March 4, 2025 - Arab leaders have agreed to an Egyptian plan for Gaza reconstruction that avoids
                  Palestinian resettlement, focusing on rebuilding infrastructure while maintaining the Palestinian
                  right of return.
                </p>
                <a
                  href="https://www.irishtimes.com/world/middle-east/2025/03/04/arab-leaders-agree-to-egyptian-plan-for-gaza-reconstruction-avoiding-palestinian-resettlement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                >
                  Read full story on Irish Times
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Image Slideshow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <ImageSlideshow />
      </motion.div>

      {/* Ramadan in Palestine Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-green-500" />
              <h2 className="text-3xl font-bold text-green-500">RAMADAN IN PALESTINE</h2>
            </div>

            <div className="mb-8">
              <YouTubeSlider />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Educational Video Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <PlayCircle className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">Educational Resource</h2>
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/E4iygQ--7dk"
                title="Understanding Palestine"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Card className="backdrop-blur-md bg-white/10 border-none">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <History className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">Historical Context</h2>
            </div>

            {/* Historical Documentary - Moved from above and renamed */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gold-500 mb-4">A Century of Historical Perspective</h3>
              <div className="aspect-video mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/a7cgzz5W8uM"
                  title="Historical Documentary on Palestine"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
              <p className="text-green-200 mb-4">
                This documentary provides historical context to help understand the complex history of the region over
                the past century.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RBebYhpoTe1qVT6LZVmcEkmSLiAydL.png"
                  alt="Historical map of Palestine land loss"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-green-200">
                The map above illustrates the historical changes in Palestinian territory from 1897 to the present day,
                showing the significant transformation of the region over time.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <Card className="backdrop-blur-md bg-white/10 border-none">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe2 className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">Current Situation</h2>
            </div>
            <div className="space-y-4 text-green-200">
              <p>
                The Palestinian people continue to face significant challenges in their struggle for basic human rights,
                dignity, and self-determination. The ongoing situation has resulted in:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Humanitarian crisis affecting millions of Palestinians</li>
                <li>Limited access to essential resources and medical supplies</li>
                <li>Restrictions on movement and access to holy sites</li>
                <li>Economic hardships and infrastructure challenges</li>
                <li>Educational disruptions for Palestinian youth</li>
              </ul>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center">
        <Card className="backdrop-blur-md bg-red-500/10 border-2 border-red-500/50 max-w-2xl mx-auto">
          <div className="p-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-red-500">Support Palestine</h2>
            </div>
            <p className="text-green-200 mb-6">
              Your support can make a difference. Consider donating to trusted organizations working to provide aid and
              relief to the Palestinian people.
            </p>
            <a
              href="https://buildpalestine.com/2021/05/15/trusted-organizations-to-donate-to-palestine/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
            >
              Donate to Trusted Organizations
            </a>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
