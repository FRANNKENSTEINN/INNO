import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Women in Islam | NoorPath",
  description: "Learn about the status, rights, and contributions of women in Islam",
}

export default function WomenInIslamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Women in Islam</h1>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-emerald-500/20 dark:border-blue-500/20">
          <p className="text-white/80 mb-4">
            This page will explore the status, rights, and contributions of women in Islam, highlighting notable female
            figures in Islamic history and addressing common misconceptions.
          </p>
          <div className="text-center text-white/60 italic">Content coming soon...</div>
        </div>
      </div>
    </div>
  )
}
