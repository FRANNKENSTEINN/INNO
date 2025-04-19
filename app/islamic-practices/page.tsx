"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Scale, Heart, Home, Landmark, Users, Leaf } from "lucide-react"
import Link from "next/link"

const practices = [
  {
    title: "Waqf (Islamic Endowment)",
    icon: Landmark,
    description:
      "Waqf is a voluntary, permanent, irrevocable dedication of a portion of one's wealth for charitable purposes that are shariah compliant. It plays a crucial role in Islamic society by providing sustainable funding for mosques, schools, hospitals, and other public services.",
    keyPoints: [
      "Assets are preserved while their benefits are used for charitable purposes",
      "Can be established for specific beneficiaries or general public welfare",
      "Historically funded education, healthcare, and infrastructure in Muslim societies",
      "Continues to be an important institution for sustainable development",
      "Modern applications include cash waqf, shares waqf, and intellectual property waqf",
    ],
  },
  {
    title: "Rights and Responsibilities in Islam",
    icon: Scale,
    description:
      "Islam establishes a comprehensive framework of rights and responsibilities for both men and women, emphasizing justice, dignity, and mutual respect within the family and society.",
    sections: [
      {
        subtitle: "Rights of Women",
        points: [
          "Right to education and pursuit of knowledge",
          "Right to own property and conduct business independently",
          "Right to choose a spouse and seek divorce",
          "Right to inheritance and financial security",
          "Right to participate in social and political affairs",
        ],
      },
      {
        subtitle: "Rights of Men",
        points: [
          "Right to be respected as the head of household",
          "Right to consultation in family decisions",
          "Right to education and pursuit of knowledge",
          "Right to fair treatment and justice",
          "Right to participate in social and political affairs",
        ],
      },
      {
        subtitle: "Mutual Rights",
        points: [
          "Right to kind and compassionate treatment",
          "Right to dignity and respect",
          "Right to religious freedom and practice",
          "Right to privacy and personal space",
          "Right to emotional and physical well-being",
        ],
      },
    ],
  },
  {
    title: "Adab (Islamic Etiquette)",
    icon: Heart,
    description:
      "Adab refers to Islamic etiquette and manners that guide Muslims in their daily interactions. It encompasses behavior, speech, and conduct that reflect Islamic values of respect, kindness, and consideration for others.",
    keyPoints: [
      "Greeting others with 'Assalamu Alaikum' (Peace be upon you)",
      "Respecting elders and showing kindness to the young",
      "Maintaining modesty in dress and behavior",
      "Speaking truthfully and avoiding backbiting",
      "Showing hospitality to guests and neighbors",
      "Eating and drinking with the right hand and in moderation",
      "Seeking permission before entering private spaces",
    ],
  },
  {
    title: "Family Values in Islam",
    icon: Home,
    description:
      "The family is considered the cornerstone of Islamic society. Islam places great emphasis on maintaining strong family bonds, respecting parents, and nurturing children with love and Islamic values.",
    keyPoints: [
      "Marriage is highly encouraged as half of one's faith",
      "Parents deserve utmost respect and kind treatment",
      "Children have rights to proper upbringing, education, and love",
      "Extended family relationships should be maintained",
      "Elderly family members should be honored and cared for",
      "Family disputes should be resolved with fairness and compassion",
    ],
  },
  {
    title: "Environmental Stewardship",
    icon: Leaf,
    description:
      "Islam teaches that humans are stewards (khalifah) of the Earth, entrusted with its care and responsible for its preservation. Environmental consciousness is deeply rooted in Islamic teachings.",
    keyPoints: [
      "Conservation of water, even when abundant",
      "Planting trees is considered an act of charity",
      "Kind treatment of animals and all living creatures",
      "Avoiding waste and excessive consumption",
      "Maintaining cleanliness of public spaces",
      "Sustainable use of natural resources",
    ],
  },
  {
    title: "Community Service (Khidmah)",
    icon: Users,
    description:
      "Serving the community (khidmah) is a fundamental aspect of Islamic practice. Muslims are encouraged to contribute to the welfare of society through volunteer work, charity, and community development.",
    keyPoints: [
      "Helping the poor and needy is a religious obligation",
      "Volunteering at mosques, schools, and community centers",
      "Supporting orphans and widows",
      "Visiting the sick and elderly",
      "Participating in community clean-up and development projects",
      "Sharing knowledge and skills for community benefit",
    ],
  },
]

export default function IslamicPracticesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">الممارسات الإسلامية</div>
          Islamic Practices
        </h1>
        <p className="text-gold-300 max-w-2xl mx-auto">
          Essential practices and principles that guide Muslims in their daily lives and spiritual journey
        </p>
      </motion.div>

      <div className="space-y-12">
        {practices.map((practice, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Card className="backdrop-blur-md bg-white/10 border-none overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <practice.icon className="h-6 w-6 text-gold-500 dark:text-blue-500" />
                  <h2 className="text-2xl font-bold text-gold-500 dark:text-blue-500">{practice.title}</h2>
                </div>

                <p className="text-emerald-200 dark:text-blue-200 mb-6">{practice.description}</p>

                {practice.keyPoints && (
                  <div className="bg-black/30 p-4 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold text-gold-400 dark:text-blue-400 mb-3">Key Points</h3>
                    <ul className="list-disc list-inside space-y-2 text-white">
                      {practice.keyPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {practice.sections && (
                  <div className="space-y-6">
                    {practice.sections.map((section, i) => (
                      <div key={i} className="bg-black/30 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-gold-400 dark:text-blue-400 mb-3">
                          {section.subtitle}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-white">
                          {section.points.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <Card className="backdrop-blur-md bg-black/30 border-none overflow-hidden max-w-2xl mx-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gold-500 dark:text-blue-500 mb-4">Explore More Islamic Knowledge</h2>
            <p className="text-emerald-200 dark:text-blue-200 mb-6">
              Continue your journey of learning about Islamic practices and principles through our other resources.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/info"
                className="inline-block bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300"
              >
                Islamic Information
              </Link>
              <Link
                href="/spiritual-aspects"
                className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300"
              >
                Spiritual Aspects
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
