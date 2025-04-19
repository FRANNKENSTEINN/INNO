// Define the Prophet type
export interface Prophet {
  name: string
  arabicName: string
  era: string
  notableEvents: string[]
  additionalInfo?: string
}

// Time periods for the timeline
export const timePeriods = [
  { label: "Ancient Era", range: "4000-2000 BCE", color: "from-amber-500 to-amber-700" },
  { label: "Middle Antiquity", range: "2000-1000 BCE", color: "from-emerald-500 to-emerald-700" },
  { label: "Late Antiquity", range: "1000 BCE-1 CE", color: "from-blue-500 to-blue-700" },
  { label: "Common Era", range: "1-700 CE", color: "from-purple-500 to-purple-700" },
]

// Data for all 25 prophets
export const prophets: Prophet[] = [
  {
    name: "Adam",
    arabicName: "آدم",
    era: "~4000 BCE",
    notableEvents: [
      "First human created by Allah",
      "Lived in Paradise before descending to Earth",
      "Taught the names of all things",
      "Father of humanity",
    ],
    additionalInfo:
      "Adam is considered the first prophet in Islam. Allah created him with His own hands and breathed into him his soul. He was given knowledge that even the angels did not possess.",
  },
  {
    name: "Idris",
    arabicName: "إدريس",
    era: "~3500 BCE",
    notableEvents: [
      "Known for his wisdom and knowledge",
      "Often equated with Biblical Enoch",
      "First to write with a pen",
      "Raised to a high station by Allah",
    ],
    additionalInfo:
      "Idris was known for his devotion to Allah and his extensive knowledge. He is mentioned in the Quran as being 'raised to a high station' by Allah.",
  },
  {
    name: "Nuh",
    arabicName: "نوح",
    era: "~3000 BCE",
    notableEvents: [
      "Built the Ark under Allah's command",
      "Survived the Great Flood with believers",
      "Preached to his people for 950 years",
      "One of the most determined of the messengers",
    ],
    additionalInfo:
      "Nuh (Noah) is one of the most significant prophets in Islam. He is known for his perseverance in calling his people to monotheism despite facing ridicule and rejection for centuries.",
  },
  {
    name: "Hud",
    arabicName: "هود",
    era: "~2500 BCE",
    notableEvents: [
      "Sent to the ʿĀd tribe in southern Arabia",
      "Called his people back to righteousness",
      "His people were punished with a destructive wind",
      "Saved with the believers from destruction",
    ],
    additionalInfo:
      "Hud was sent to the powerful 'Ad people who were known for their impressive buildings and physical strength but had turned to idol worship.",
  },
  {
    name: "Salih",
    arabicName: "صالح",
    era: "~2500 BCE",
    notableEvents: [
      "Preached to the Thamud people",
      "Performed the miracle of bringing forth a she-camel from rock",
      "His people were destroyed by an earthquake after killing the she-camel",
      "Saved the believers from destruction",
    ],
    additionalInfo:
      "Salih was sent to the Thamud people who were the successors of the 'Ad. They were skilled in carving homes into mountains but had also turned away from Allah.",
  },
  {
    name: "Ibrahim",
    arabicName: "إبراهيم",
    era: "~2000 BCE",
    notableEvents: [
      "Known as 'Khalilullah' (Friend of Allah)",
      "Rebuilt the Kaaba with his son Ismail",
      "Survived being thrown into fire by his people",
      "Father of prophets Ismail and Ishaq",
    ],
    additionalInfo:
      "Ibrahim (Abraham) is one of the most revered prophets in Islam. He is known for his unwavering faith and willingness to sacrifice everything for Allah, including his own son when commanded (though Allah ultimately provided a ram as substitute).",
  },
  {
    name: "Lut",
    arabicName: "لوط",
    era: "~1900 BCE",
    notableEvents: [
      "Nephew of Ibrahim",
      "Warned the people of Sodom and Gomorrah against immorality",
      "His people were destroyed for their transgressions",
      "Saved with his family except his wife",
    ],
    additionalInfo:
      "Lut (Lot) preached against the immoral practices of his people. Despite his efforts, they continued in their ways, leading to their destruction.",
  },
  {
    name: "Ismail",
    arabicName: "إسماعيل",
    era: "~1900 BCE",
    notableEvents: [
      "Son of Ibrahim and Hajar",
      "Helped his father rebuild the Kaaba",
      "Known for his patience and promise-keeping",
      "Considered an ancestor of Prophet Muhammad",
    ],
    additionalInfo:
      "Ismail (Ishmael) is revered for his obedience to Allah and his father. The ritual of sa'i during Hajj commemorates his mother Hajar's search for water for him.",
  },
  {
    name: "Ishaq",
    arabicName: "إسحاق",
    era: "~1900 BCE",
    notableEvents: [
      "Son of Ibrahim and Sarah",
      "Born miraculously when his parents were elderly",
      "Father of Yaqub (Jacob)",
      "Continued his father's message of monotheism",
    ],
    additionalInfo:
      "Ishaq (Isaac) was the second son of Ibrahim, born miraculously to his elderly wife Sarah. He continued his father's legacy of monotheism.",
  },
  {
    name: "Yaqub",
    arabicName: "يعقوب",
    era: "~1800 BCE",
    notableEvents: [
      "Son of Ishaq",
      "Also known as Israel",
      "Father of twelve sons who formed the twelve tribes of Israel",
      "Known for his patience and trust in Allah",
    ],
    additionalInfo:
      "Yaqub (Jacob) is known for his deep faith and patience, particularly during the long separation from his beloved son Yusuf.",
  },
  {
    name: "Yusuf",
    arabicName: "يوسف",
    era: "~1700 BCE",
    notableEvents: [
      "Son of Yaqub",
      "Known for his exceptional beauty",
      "Sold into slavery by his brothers",
      "Rose to become a high official in Egypt",
      "Renowned for his honesty and ability to interpret dreams",
    ],
    additionalInfo:
      "Yusuf (Joseph) has an entire chapter of the Quran named after him. His story is described as 'the most beautiful of stories' and teaches lessons about patience, forgiveness, and trust in Allah's plan.",
  },
  {
    name: "Shuayb",
    arabicName: "شعيب",
    era: "~1600 BCE",
    notableEvents: [
      "Sent to the people of Midian",
      "Preached against fraudulent business practices",
      "Called for just weights and measures",
      "His people were destroyed by an earthquake/thunderous blast",
    ],
    additionalInfo:
      "Shuayb is sometimes identified with the Biblical Jethro. He was known for his eloquence and is referred to as 'Khatib al-Anbiya' (The Preacher of the Prophets).",
  },
  {
    name: "Ayyub",
    arabicName: "أيوب",
    era: "~1500 BCE",
    notableEvents: [
      "Symbol of patience and perseverance",
      "Endured severe trials including illness and loss of family and wealth",
      "Never lost faith despite his suffering",
      "Was ultimately restored to health and prosperity",
    ],
    additionalInfo:
      "Ayyub (Job) is the epitome of patience in Islam. Despite losing his health, wealth, and family, he remained steadfast in his faith and never complained to Allah.",
  },
  {
    name: "Dhulkifl",
    arabicName: "ذو الكفل",
    era: "~1500 BCE",
    notableEvents: [
      "Known for righteousness and patience",
      "Fulfilled his promises and commitments",
      "Identity debated among scholars",
      "Mentioned twice in the Quran",
    ],
    additionalInfo:
      "Dhulkifl's identity is not definitively established. Some scholars identify him with Biblical Ezekiel, while others suggest he was a righteous man who guaranteed the welfare of his people.",
  },
  {
    name: "Musa",
    arabicName: "موسى",
    era: "~1300 BCE",
    notableEvents: [
      "Led the Israelites out of Egypt",
      "Received the Torah on Mount Sinai",
      "Performed numerous miracles including parting the sea",
      "Spoke directly with Allah",
      "One of the most mentioned prophets in the Quran",
    ],
    additionalInfo:
      "Musa (Moses) is one of the most prominent prophets in Islam. He is known for his confrontation with Pharaoh and for receiving divine revelation directly from Allah.",
  },
  {
    name: "Harun",
    arabicName: "هارون",
    era: "~1300 BCE",
    notableEvents: [
      "Brother of Musa",
      "Served as his assistant and spokesperson",
      "Known for his eloquence",
      "Appointed by Allah to help Musa in his mission",
    ],
    additionalInfo:
      "Harun (Aaron) was the older brother of Musa and was known for his eloquence. He was appointed by Allah to assist Musa in his prophetic mission.",
  },
  {
    name: "Dawud",
    arabicName: "داود",
    era: "~1000 BCE",
    notableEvents: [
      "King and prophet of the Israelites",
      "Received the Zabur (Psalms)",
      "Known for his beautiful voice",
      "Iron was made soft for him by Allah",
      "Defeated Goliath (Jalut)",
    ],
    additionalInfo:
      "Dawud (David) was both a king and a prophet. He is known for his melodious voice when reciting the Zabur (Psalms) and for his ability to judge with fairness.",
  },
  {
    name: "Sulaiman",
    arabicName: "سليمان",
    era: "~950 BCE",
    notableEvents: [
      "Son of Dawud",
      "Known for his wisdom and judgment",
      "Could understand the language of animals and birds",
      "Commanded the wind and jinn",
      "Built the First Temple in Jerusalem",
    ],
    additionalInfo:
      "Sulaiman (Solomon) was blessed with extraordinary powers by Allah, including control over the wind, the ability to understand animals, and authority over the jinn. Despite his immense wealth and power, he remained humble before Allah.",
  },
  {
    name: "Ilyas",
    arabicName: "إلياس",
    era: "~850 BCE",
    notableEvents: [
      "Preached against idol worship in Israel",
      "Called his people back to monotheism",
      "Faced opposition from King Ahab and Queen Jezebel",
      "Mentioned in the Quran as one of the righteous",
    ],
    additionalInfo:
      "Ilyas (Elijah) was sent to the people of Israel when they had fallen into idol worship, particularly of the deity Ba'al. He is honored in Islam for his steadfast commitment to monotheism.",
  },
  {
    name: "Alyasa",
    arabicName: "اليسع",
    era: "~850 BCE",
    notableEvents: [
      "Successor of Ilyas",
      "Continued the mission among the Israelites",
      "Known for his miracles",
      "Mentioned in the Quran as among the excellent ones",
    ],
    additionalInfo:
      "Alyasa (Elisha) was the disciple and successor of Ilyas. He continued the prophetic mission after Ilyas and was known for performing various miracles.",
  },
  {
    name: "Yunus",
    arabicName: "يونس",
    era: "~800 BCE",
    notableEvents: [
      "Known as 'Dhun-Nun' (The One of the Fish)",
      "Left his people in anger before Allah's permission",
      "Swallowed by a great fish",
      "Repented in the belly of the fish",
      "Returned to his people who then believed",
    ],
    additionalInfo:
      "Yunus (Jonah) is known for his experience of being swallowed by a large fish after leaving his mission prematurely. His story teaches about repentance, patience, and Allah's mercy.",
  },
  {
    name: "Zakariya",
    arabicName: "زكريا",
    era: "~1st century BCE",
    notableEvents: [
      "Guardian of Maryam (Mary)",
      "Prayed for a son in his old age",
      "Father of Yahya (John the Baptist)",
      "Known for his devotion and worship",
    ],
    additionalInfo:
      "Zakariya (Zechariah) was blessed with a son, Yahya, in his old age after years of prayer. He was also entrusted with the care of Maryam, the mother of Isa.",
  },
  {
    name: "Yahya",
    arabicName: "يحيى",
    era: "~1st century BCE",
    notableEvents: [
      "Son of Zakariya",
      "Also known as John the Baptist",
      "Known for his piety and asceticism",
      "Confirmed the coming of Isa (Jesus)",
      "Given wisdom as a child",
    ],
    additionalInfo:
      "Yahya (John the Baptist) was known for his ascetic lifestyle and his role in preparing the way for Isa. He was given wisdom from a young age and was known for his purity and compassion.",
  },
  {
    name: "Isa",
    arabicName: "عيسى",
    era: "~1st century CE",
    notableEvents: [
      "Born miraculously to the Virgin Maryam",
      "Performed numerous miracles by Allah's permission",
      "Received the Injil (Gospel)",
      "Raised to heaven by Allah before crucifixion",
      "Will return before the Day of Judgment",
    ],
    additionalInfo:
      "Isa (Jesus) is highly revered in Islam as one of the greatest prophets. Muslims believe he was not crucified but was raised to heaven by Allah and will return before the end of time.",
  },
  {
    name: "Muhammad",
    arabicName: "محمد",
    era: "570–632 CE",
    notableEvents: [
      "The final prophet and messenger of Allah",
      "Received the Quran over 23 years",
      "Known as 'Al-Amin' (The Trustworthy)",
      "Established the first Muslim community",
      "Completed and perfected the message of Islam",
    ],
    additionalInfo:
      "Muhammad is considered the seal of the prophets in Islam. His life, teachings, and actions (Sunnah) form the second most important source of guidance for Muslims after the Quran.",
  },
]
