import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quran Tafsir | NoorPath",
  description: "Explore interpretations and explanations of the Holy Quran",
}

export default function QuranTafsirPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Quran Tafsir</h1>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-emerald-500/20 dark:border-blue-500/20">
          <p className="text-white/80 mb-4">
            This page will provide interpretations and explanations (tafsir) of selected verses from the Holy Quran,
            helping readers understand the deeper meanings and context of Quranic revelations.
          </p>
          <div className="text-center text-white/60 italic">Content coming soon...</div>
        </div>
      </div>
    </div>
  )
}
