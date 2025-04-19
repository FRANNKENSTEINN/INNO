export interface HadithLesson {
  arabic: string
  translation: string
  lesson: string
  reference: string
}

export const propheticLessons: HadithLesson[] = [
  {
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    translation: "Actions are judged by intentions, and each person will be rewarded according to their intentions.",
    lesson: "The importance of pure intentions in all actions and worship.",
    reference: "Sahih al-Bukhari 1, Sahih Muslim 1907",
  },
  {
    arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    translation:
      "Whoever fasts during Ramadan out of sincere faith and hoping to attain Allah's rewards, then all his past sins will be forgiven.",
    lesson: "The spiritual rewards of fasting with faith and sincerity during Ramadan.",
    reference: "Sahih al-Bukhari 38, Sahih Muslim 760",
  },
  {
    arabic: "الصِّيَامُ جُنَّةٌ فَلاَ يَرْفُثْ وَلاَ يَجْهَلْ وَإِنْ امْرُؤٌ قَاتَلَهُ أَوْ شَاتَمَهُ فَلْيَقُلْ إِنِّي صَائِمٌ إِنِّي صَائِمٌ",
    translation:
      "Fasting is a shield. Let no one who is fasting commit any obscenity or foolishness. If someone fights or insults him, let him say: 'I am fasting, I am fasting.'",
    lesson: "Fasting teaches self-control and patience in the face of provocation.",
    reference: "Sahih al-Bukhari 1894, Sahih Muslim 1151",
  },
  {
    arabic: "مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ",
    translation:
      "Whoever does not give up false speech and acting upon it, Allah has no need of his giving up food and drink.",
    lesson: "True fasting involves abstaining from sins as well as food and drink.",
    reference: "Sahih al-Bukhari 1903",
  },
  {
    arabic: "مَنْ أَفْطَرَ يَوْمًا مِنْ رَمَضَانَ مِنْ غَيْرِ عُذْرٍ وَلَا مَرَضٍ لَمْ يَقْضِهِ صِيَامُ الدَّهْرِ كُلِّهِ وَإِنْ صَامَهُ",
    translation:
      "Whoever breaks the fast of Ramadan without a legitimate excuse or illness, his fasting of a lifetime will not make up for it, even if he were to fast forever.",
    lesson: "The significance of respecting the obligation of Ramadan fasting.",
    reference: "Sunan al-Tirmidhi 723",
  },
  {
    arabic: "إِذَا جَاءَ رَمَضَانُ فُتِحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ النَّارِ وَصُفِّدَتِ الشَّيَاطِينُ",
    translation:
      "When Ramadan begins, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained.",
    lesson: "Ramadan is a special time of increased mercy and decreased temptation.",
    reference: "Sahih al-Bukhari 1899, Sahih Muslim 1079",
  },
  {
    arabic: "تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً",
    translation: "Take the pre-dawn meal (suhoor), for there is blessing in it.",
    lesson: "Following the Sunnah of taking suhoor brings blessings.",
    reference: "Sahih al-Bukhari 1923, Sahih Muslim 1095",
  },
  {
    arabic: "عَجِّلُوا الْفِطْرَ وَأَخِّرُوا السَّحُورَ",
    translation: "Hasten to break the fast and delay the pre-dawn meal.",
    lesson: "Following the Prophetic guidance in timing meals during Ramadan.",
    reference: "Musnad Ahmad 17333",
  },
  {
    arabic: "إِذَا أَفْطَرَ أَحَدُكُمْ فَلْيُفْطِرْ عَلَى تَمْرٍ فَإِنْ لَمْ يَجِدْ فَلْيُفْطِرْ عَلَى مَاءٍ فَإِنَّهُ طَهُورٌ",
    translation:
      "When one of you breaks his fast, let him break it with dates; if he cannot find dates, then with water, for it is pure.",
    lesson: "Following the Sunnah method of breaking fast with dates or water.",
    reference: "Sunan al-Tirmidhi 694",
  },
  {
    arabic: "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ غَيْرَ أَنَّهُ لَا يَنْقُصُ مِنْ أَجْرِ الصَّائِمِ شَيْئًا",
    translation:
      "Whoever provides food for a fasting person to break his fast will receive the same reward as the one who fasted, without decreasing the reward of the fasting person.",
    lesson: "The virtue of feeding those who are fasting.",
    reference: "Sunan al-Tirmidhi 807",
  },
  {
    arabic: "اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    translation:
      "O Allah, for You I have fasted, in You I have believed, and with Your provision I have broken my fast.",
    lesson: "The importance of supplication when breaking the fast.",
    reference: "Sunan Abu Dawud 2358",
  },
  {
    arabic: "الصَّائِمُ لَهُ دَعْوَةٌ لَا تُرَدُّ",
    translation: "The fasting person has a supplication that will not be rejected.",
    lesson: "The special status of a fasting person's prayers.",
    reference: "Sunan Ibn Majah 1752",
  },
  {
    arabic: "إِنَّ لِرَبِّكُمْ فِي أَيَّامِ دَهْرِكُمْ نَفَحَاتٍ أَلَا فَتَعَرَّضُوا لَهَا",
    translation: "Indeed, your Lord has breaths of mercy in the days of your time, so expose yourselves to them.",
    lesson: "Seeking Allah's mercy during special times like Ramadan.",
    reference: "Reported by al-Tabarani",
  },
  {
    arabic: "إِنَّ لِلصَّائِمِ عِنْدَ فِطْرِهِ دَعْوَةً مَا تُرَدُّ",
    translation:
      "Indeed, for the fasting person, there is a supplication at the time of breaking fast that is not rejected.",
    lesson: "The importance of making dua at the time of breaking fast.",
    reference: "Sunan Ibn Majah 1753",
  },
  {
    arabic: "مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    translation:
      "Whoever stands (in prayer) during the Night of Decree out of faith and in hope of reward, his previous sins will be forgiven.",
    lesson: "The immense reward of worshipping during Laylatul Qadr.",
    reference: "Sahih al-Bukhari 1901",
  },
]
