import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Islamic Ethics | NoorPath",
  description: "Learn about moral principles and ethical guidelines in Islam",
}

export default function IslamicEthicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Islamic Ethics</h1>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-emerald-500/20 dark:border-blue-500/20">
          <p className="text-white/80 mb-4">
            This page will explore the moral principles and ethical guidelines in Islam, covering topics such as
            honesty, kindness, justice, environmental ethics, business ethics, and personal conduct.
          </p>
          <div className="text-center text-white/60 italic">Content coming soon...</div>
        </div>
      </div>
    </div>
  )
}
