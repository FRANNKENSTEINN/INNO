import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Islamic History | NoorPath",
  description: "Explore the rich history of Islam from its beginnings to modern times",
}

export default function IslamicHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Islamic History</h1>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-emerald-500/20 dark:border-blue-500/20">
          <p className="text-white/80 mb-4">
            This page will contain a comprehensive overview of Islamic history, from the birth of Prophet Muhammad
            (PBUH) through the various caliphates and empires, to modern times.
          </p>
          <div className="text-center text-white/60 italic">Content coming soon...</div>
        </div>
      </div>
    </div>
  )
}
