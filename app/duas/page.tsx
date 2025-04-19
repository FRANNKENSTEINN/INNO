"use client"

import { motion } from "framer-motion"
import { Book, Shield, Clock } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

const duas = [
  {
    id: "establish-prayer",
    title: "دعاء إقامة الصلاة",
    englishTitle: "Dua for Establishing Prayer",
    arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ",
    transliteration: "Rabbij-'alni muqimas-solati wa min zurriyyati, Rabbana wa taqabbal du'aa.",
    translation:
      "My Lord, make me an establisher of prayer, and from my descendants. Our Lord, and accept my supplication.",
    reference: "Surah Ibrahim (14:40)",
  },
  {
    id: "healing",
    title: "دعاء الشفاء",
    englishTitle: "Dua for Healing",
    arabic: "اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ، اشْفِهِ وَأَنْتَ الشَّافِي، لاَ شِفَاءَ إِلاَّ شِفَاؤُكَ، شِفَاءً لاَ يُغَادِرُ سَقَمًا",
    transliteration:
      "Allahuma rabban-naas, adhibil-baas, ishfihi wa antash-shaafi, la shifa'a illa shifa-uka, shifa-an laa yughadiru saqama.",
    translation:
      "O' Allah, the Lord of the people! Remove the trouble and heal the patient, for You are the Healer. No healing is of any avail but Yours; healing that will leave behind no ailment.",
    reference: "Sahih Al Bukhari",
    recitationSteps: [
      "Place your right hand on the area of pain or illness",
      "Recite this dua seven times",
      "Best recited after each obligatory prayer",
      "Can be recited for oneself or for others who are ill",
      "The Prophet Muhammad (ﷺ) would visit the sick and recite this dua for them",
    ],
  },
  {
    id: "intention",
    title: "نية الصيام",
    englishTitle: "Intention for Fasting",
    arabic: "نَوَيْتُ صَوْمَ غَدٍ مِنْ شَهْرِ رَمَضَانَ",
    transliteration: "Nawaitu sawma ghadin min shahri Ramadan",
    translation: "I intend to keep the fast for tomorrow in the month of Ramadan",
  },
  {
    id: "sehri",
    title: "دعاء السحور",
    englishTitle: "Dua before Sehri",
    arabic: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ",
    transliteration: "Wa bisawmi ghadin nawaitu min shahri Ramadan",
    translation: "I intend to keep the fast for tomorrow in the month of Ramadan",
  },
  {
    id: "iftar",
    title: "دعاء الإفطار",
    englishTitle: "Dua for Breaking Fast",
    arabic: "اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
    transliteration: "Allahumma inni laka sumtu wa bika amantu wa ala rizqika aftartu",
    translation: "O Allah! I fasted for You and I believe in You and I break my fast with Your sustenance",
  },
  {
    id: "beneficial-knowledge",
    title: "دعاء طلب العلم النافع",
    englishTitle: "Dua for Beneficial Knowledge",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    transliteration: "Allahumma inni as'aluka 'Ilman naafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan",
    translation: "Ya Allah, I ask You for beneficial knowledge, goodly provision and acceptable deeds.",
    reference: "Sunan Ibn Majah 925",
  },
  {
    id: "laylatul-qadr",
    title: "دعاء ليلة القدر",
    englishTitle: "Dua for Laylatul Qadr",
    arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي",
    transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
    translation: "O Allah, You are Most Forgiving, and You love forgiveness; so forgive me",
  },
  {
    id: "morning",
    title: "دعاء الصباح",
    englishTitle: "Morning Dua",
    arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَٰهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ",
    transliteration: "Asbahna wa asbahal mulku lillah walhamdu lillah la ilaha illallah wahdahu la shareeka lah",
    translation:
      "We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without any partner",
  },
  {
    id: "evening",
    title: "دعاء المساء",
    englishTitle: "Evening Dua",
    arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَٰهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ",
    transliteration: "Amsayna wa amsal mulku lillah walhamdu lillah la ilaha illallah wahdahu la shareeka lah",
    translation:
      "We have reached the evening and at this very time unto Allah belongs all sovereignty, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without any partner",
  },
  {
    id: "gratitude",
    title: "دعاء الشكر",
    englishTitle: "Dua of Gratitude",
    arabic: "اللَّهُمَّ لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَعَظِيمِ سُلْطَانِكَ",
    transliteration: "Allahumma lakal-hamdu kama yambaghi lijalali wajhika wa 'azimi sultanik",
    translation:
      "O Allah, praise is due to You as befits the glory of Your countenance and the greatness of Your authority",
  },
  {
    id: "strength",
    title: "دعاء طلب القوة",
    englishTitle: "Dua for Strength",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ",
    transliteration: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal",
    translation: "O Allah, I seek refuge in You from anxiety and sorrow, weakness and laziness",
  },
  {
    id: "guidance",
    title: "دعاء طلب الهداية",
    englishTitle: "Dua for Guidance",
    arabic: "اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ",
    transliteration: "Allahumma-hdini fiman hadayt, wa 'afini fiman 'afayt",
    translation:
      "O Allah, guide me among those whom You have guided, and grant me wellness among those whom You have granted wellness",
  },
  {
    id: "patience",
    title: "دعاء الصبر",
    englishTitle: "Dua for Patience",
    arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا",
    transliteration: "Rabbana afrigh 'alayna sabran wa thabbit aqdamana",
    translation: "Our Lord, pour upon us patience and make firm our feet",
  },
  {
    id: "success",
    title: "دعاء النجاح",
    englishTitle: "Dua for Success",
    arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
    transliteration: "Rabbi-shrah li sadri wa yassir li amri",
    translation: "My Lord, expand for me my breast and ease for me my task",
  },
  {
    id: "knowledge",
    title: "دعاء طلب العلم",
    englishTitle: "Dua for Knowledge",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma",
    translation: "My Lord, increase me in knowledge",
  },
  {
    id: "sustenance",
    title: "دعاء طلب الرزق",
    englishTitle: "Dua for Sustenance",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا طَيِّبًا، وَعِلْمًا نَافِعًا، وَعَمَلًا مُتَقَبَّلًا",
    transliteration: "Allahumma inni as'aluka rizqan tayyiban, wa 'ilman nafi'an, wa 'amalan mutaqabbala",
    translation: "O Allah, I ask You for pure sustenance, beneficial knowledge, and accepted deeds",
  },
  {
    id: "unity",
    title: "دعاء الوحدة",
    englishTitle: "Dua for Unity",
    arabic: "اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا وَاهْدِنَا سُبُلَ السَّلَامِ",
    transliteration: "Allahumma allif bayna qulubina wa aslih dhata baynina wahdina subulas-salam",
    translation: "O Allah, unite our hearts, mend our relationships, and guide us to the paths of peace",
  },
  {
    id: "tawheed",
    title: "دعاء التوحيد",
    englishTitle: "Dua of Tawheed (Oneness of Allah)",
    arabic: "لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "La ilaha illallahu wahdahu la sharika lahu, lahul mulku wa lahul hamdu, wa huwa 'ala kulli shay'in qadir",
    translation:
      "There is no deity worthy of worship except Allah alone, who has no partner. His is the dominion and His is the praise, and He is over all things competent",
  },
  {
    id: "forgiveness",
    title: "دعاء طلب المغفرة",
    englishTitle: "Dua for Seeking Forgiveness",
    arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
    transliteration: "Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakunanna minal-khasireen",
    translation:
      "Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers",
  },
]

// Protection duas moved to this section
const protectionDuas = [
  {
    id: "protection-evil-eye-children",
    title: "دعاء الحماية للأطفال",
    englishTitle: "Dua for Protection of Children",
    arabic: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لاَمَّةٍ",
    transliteration: "'Udhukuma bikalimatil-lahit-tammati min kulli shaytaniw-wa haammah, wa min kulli 'ainin lammah.",
    translation:
      "I seek protection for you in the perfect words of Allah from every devil and every beast, and from every envious blameworthy eye.",
    reference: "Al-Bukhari",
    recitationSteps: [
      "Recite this dua for children every morning and evening",
      "Place your hand on the child's head while reciting",
      "Recite once in Arabic, with sincere intention",
      "This dua was regularly recited by Prophet Muhammad (ﷺ) for his grandsons Hassan and Hussein",
    ],
  },
  {
    id: "protection-evil-eye",
    title: "دعاء الحماية من العين والحسد",
    englishTitle: "Dua for Protection from Evil Eye",
    arabic: "أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لاَمَّةٍ",
    transliteration: "U'izukuma bikalimatil-lahit-tammati min kulli shaytanin wa hammah, wa min kulli 'ainin lammah.",
    translation:
      "I seek protection for you in the Perfect Words of Allah from every devil and every beast, and from every envious blameworthy eye.",
    reference: "Jami' At-Tirmizi",
  },
  {
    id: "paradise-protection",
    title: "دعاء طلب الجنة والاستعاذة من النار",
    englishTitle: "Dua for Paradise and Protection from Fire",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
    transliteration: "Allahumma inni as'aluka al-jannata wa a'oothu bika min an-naar",
    translation: "Ya Allah, I ask you for Paradise and seek refuge in you from the fire.",
    reference: "Sahih Ibn Majah 2/328",
  },
  {
    id: "protection",
    title: "دعاء الحفظ",
    englishTitle: "Protection Dua",
    arabic: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shai'un fil-ardi wa la fis-sama'i wa huwas-sami'ul-'alim",
    translation:
      "In the Name of Allah, Who with His Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing",
  },
  {
    id: "protection-evil",
    title: "دعاء الحماية من الشر",
    englishTitle: "Dua for Protection from Evil",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا خَلَقْتَ",
    transliteration: "Allahumma inni a'udhu bika min sharri ma khalaqt",
    translation: "O Allah, I seek refuge in You from the evil of what You have created",
  },
  {
    id: "protection-grave",
    title: "دعاء الاستعاذة",
    englishTitle: "Dua Seeking Protection",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    transliteration:
      "Allahumma inni a'udhu bika min 'adhabil-qabri, wa min 'adhabi jahannam, wa min fitnatil-mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal",
    translation:
      "O Allah, I seek refuge in You from the punishment of the grave, from the punishment of Hell-fire, from the trials of life and death, and from the evil of the trial of the False Messiah",
  },
]

const protectiveSurahs = [
  {
    id: "al-fatihah",
    title: "سورة الفاتحة",
    englishTitle: "Surah Al-Fatihah (1:1-7)",
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧﴾",
    transliteration:
      "Bismillahir rahmanir raheem. Alhamdu lillahi rabbil 'alamin. Ar-rahmanir-rahim. Maliki yawmid-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal mustaqim. Siratal ladhina an'amta 'alayhim, ghayril maghdubi 'alayhim wa lad-dallin.",
    translation:
      "In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Master of the Day of Judgment. It is You we worship and You we ask for help. Guide us to the straight path. The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
    benefits:
      "Known as 'The Mother of the Quran', Al-Fatihah is recited in every prayer and is a powerful source of healing and protection. The Prophet Muhammad (ﷺ) said it is a cure for all diseases. It is often recited for spiritual and physical healing, protection from harm, and as a means of seeking Allah's guidance and mercy.",
  },
  {
    id: "ayatul-kursi",
    title: "آية الكرسي",
    englishTitle: "Ayat-ul-Kursi (2:255)",
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration:
      "Allahu la ilaha illa huwa, al-Hayy al-Qayyum. La ta'khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa'u 'indahu illa bi-idhnih. Ya'lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi-shay'im-min 'ilmihi illa bima sha'. Wasi'a kursiyyuhus-samawati wal-ard. Wa la ya'uduhu hifzuhuma wa huwal-'Aliyy al-'Azim.",
    translation:
      "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.",
    benefits:
      "Considered the greatest verse in the Quran, Ayat-ul-Kursi is a powerful protection against evil, jinn, and shaytan. The Prophet Muhammad (ﷺ) said that whoever recites it after each prayer will be under Allah's protection until the next prayer. It is recommended to recite it before sleeping, when entering or leaving the home, and during times of fear or distress.",
  },
  {
    id: "al-baqarah-verses",
    title: "سورة البقرة (آيات مختارة)",
    englishTitle: "Selected Verses from Surah Al-Baqarah",
    arabic:
      "الم ﴿١﴾ ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ ﴿٢﴾ الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ ﴿٣﴾ وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ ﴿٤﴾ أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ ﴿٥﴾",
    transliteration:
      "Alif-Lam-Mim. Dhalikal-Kitabu la rayba fihi hudal-lil-muttaqin. Alladhina yu'minuna bil-ghaybi wa yuqimunas-salata wa mimma razaqnahum yunfiqun. Walladhina yu'minuna bima unzila ilayka wa ma unzila min qablika wa bil-akhirati hum yuqinun. Ula'ika 'ala hudam-mir-Rabbihim wa ula'ika humul-muflihun.",
    translation:
      "Alif, Lam, Mim. This is the Book about which there is no doubt, a guidance for those conscious of Allah - Who believe in the unseen, establish prayer, and spend out of what We have provided for them, And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith]. Those are upon [right] guidance from their Lord, and it is those who are the successful.",
    benefits:
      "The opening verses of Surah Al-Baqarah (verses 1-5) are known for their spiritual protection. The Prophet Muhammad (ﷺ) said that reciting the first four verses of Surah Al-Baqarah, Ayat-ul-Kursi, and the last three verses of Al-Baqarah provides protection from Shaytan for three nights. These verses are particularly effective against magic, evil eye, and harmful jinn.",
  },
  {
    id: "al-baqarah-last-verses",
    title: "سورة البقرة (الآيات الأخيرة)",
    englishTitle: "Last Verses of Surah Al-Baqarah (2:285-286)",
    arabic:
      "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ﴿٢٨٥﴾ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ ﴿٢٨٦﴾",
    transliteration:
      "Amanar-Rasulu bima unzila ilayhi mir-Rabbihi wal-mu'minun. Kullun amana billahi wa mala'ikatihi wa kutubihi wa rusulihi la nufarriqu bayna ahadim-mir-rusulihi wa qalu sami'na wa ata'na ghufranaka Rabbana wa ilaykal-masir. La yukallifullahu nafsan illa wus'aha. Laha ma kasabat wa 'alayha mak-tasabat. Rabbana la tu'akhidhna in nasina aw akhta'na. Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina. Rabbana wa la tuhammilna ma la taqata lana bihi wa'fu 'anna waghfir lana warhamna. Anta mawlana fansurna 'alal-qawmil-kafirin.",
    translation:
      "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], 'We make no distinction between any of His messengers.' And they say, 'We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.' Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. 'Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.'",
    benefits:
      "The last two verses of Surah Al-Baqarah are known as 'Al-Mu'awwidhatayn' (the two protectors). The Prophet Muhammad (ﷺ) said that whoever recites these two verses at night, they will suffice him (as protection). These verses are particularly effective for protection against evil, anxiety, and debt. They contain powerful supplications asking for Allah's forgiveness, mercy, and assistance.",
  },
  {
    id: "al-ikhlas",
    title: "سورة الإخلاص",
    englishTitle: "Surah Al-Ikhlas (112)",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾",
    transliteration:
      "Bismillahir rahmanir raheem. Qul huwal-lahu ahad. Allah-us-samad. Lam yalid wa lam yulad. Wa lam yakul-lahu kufuwan ahad.",
    translation:
      "In the name of Allah, the Most Gracious, the Most Merciful. Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.'",
    benefits:
      "Surah Al-Ikhlas is known as the 'Declaration of Allah's Unity' and is equivalent to one-third of the Quran in reward. The Prophet Muhammad (ﷺ) said that reciting it three times is equivalent to reciting the entire Quran. It is a powerful protection against shirk (associating partners with Allah) and is often recited for purification of faith and protection from evil.",
  },
  {
    id: "al-falaq",
    title: "سورة الفلق",
    englishTitle: "Surah Al-Falaq (113)",
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾",
    transliteration:
      "Bismillahir rahmanir raheem. Qul a'udhu bi-rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad.",
    translation:
      "In the name of Allah, the Most Gracious, the Most Merciful. Say, 'I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies.'",
    benefits:
      "Surah Al-Falaq is one of the Mu'awwidhatayn (the two surahs of refuge) and provides protection from external harm. It specifically protects against the evil of creation, the darkness of night, black magic (blowers in knots), and the evil eye (envy). The Prophet Muhammad (ﷺ) recommended reciting it along with Surah An-Nas and Surah Al-Ikhlas three times in the morning and evening for protection throughout the day and night.",
  },
  {
    id: "an-nas",
    title: "سورة الناس",
    englishTitle: "Surah An-Nas (114)",
    arabic:
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿١﴾ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾",
    transliteration:
      "Bismillahir rahmanir raheem. Qul a'udhu bi-rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.",
    translation:
      "In the name of Allah, the Most Gracious, the Most Merciful. Say, 'I seek refuge in the Lord of mankind, The Sovereign of mankind, The God of mankind, From the evil of the retreating whisperer - Who whispers [evil] into the breasts of mankind - From among the jinn and mankind.'",
    benefits:
      "Surah An-Nas is the second of the Mu'awwidhatayn and provides protection from internal harm, particularly the whispers of Shaytan. It guards against evil thoughts, doubts, and temptations that come from both jinn and humans. The Prophet Muhammad (ﷺ) would recite this surah along with Surah Al-Falaq when he was ill, and he recommended reciting both surahs after every prayer and before sleeping.",
  },
]

export default function DuasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">أدعية رمضان</div>
          Essential Ramadan Duas
        </h1>
        <p className="text-xl text-purple-200">Supplications for the blessed month</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-white/10 border-none max-w-3xl mx-auto mb-12">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Book className="h-5 w-5 text-gold-500" />
            <h2 className="text-xl font-semibold text-white">Daily Duas</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {duas.map((dua) => (
              <AccordionItem key={dua.id} value={dua.id} className="border-emerald-800/50">
                <AccordionTrigger className="text-white hover:text-gold-300">
                  <div className="text-right">
                    <div className="font-arabic mb-1">{dua.title}</div>
                    {dua.englishTitle}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-4 rounded-lg bg-emerald-900/50">
                    <p className="text-right text-xl text-white font-arabic" dir="rtl">
                      {dua.arabic}
                    </p>
                    <p className="text-gold-300 italic">{dua.transliteration}</p>
                    <p className="text-white">{dua.translation}</p>
                    {dua.reference && <p className="text-sm text-emerald-300 text-right">— {dua.reference}</p>}

                    {dua.recitationSteps && (
                      <div className="mt-4 bg-black/30 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-gold-400" />
                          <h4 className="font-semibold text-gold-400">How to Recite:</h4>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-emerald-200 pl-2">
                          {dua.recitationSteps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>

      {/* Protection Duas Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">أدعية الحماية</div>
          Protection Duas
        </h1>
        <p className="text-xl text-purple-200">Supplications for protection and safety</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-white/10 border-none max-w-3xl mx-auto mb-12">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-5 w-5 text-gold-500" />
            <h2 className="text-xl font-semibold text-white">Protection Duas</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {protectionDuas.map((dua) => (
              <AccordionItem key={dua.id} value={dua.id} className="border-red-800/50">
                <AccordionTrigger className="text-white hover:text-gold-300">
                  <div className="text-right">
                    <div className="font-arabic mb-1">{dua.title}</div>
                    {dua.englishTitle}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-4 rounded-lg bg-red-900/30">
                    <p className="text-right text-xl text-white font-arabic" dir="rtl">
                      {dua.arabic}
                    </p>
                    <p className="text-gold-300 italic">{dua.transliteration}</p>
                    <p className="text-white">{dua.translation}</p>
                    {dua.reference && <p className="text-sm text-emerald-300 text-right">— {dua.reference}</p>}

                    {dua.recitationSteps && (
                      <div className="mt-4 bg-black/30 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-gold-400" />
                          <h4 className="font-semibold text-gold-400">How to Recite:</h4>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-emerald-200 pl-2">
                          {dua.recitationSteps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>

      {/* Protective Surahs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          <div className="font-arabic text-2xl mb-2">سور وآيات للحماية</div>
          Protective Quranic Surahs & Verses
        </h1>
        <p className="text-xl text-purple-200">Sacred verses for healing, protection, and blessings</p>
      </motion.div>

      <Card className="backdrop-blur-md bg-white/10 border-none max-w-3xl mx-auto">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-5 w-5 text-gold-500" />
            <h2 className="text-xl font-semibold text-white">Quranic Protection</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {protectiveSurahs.map((surah) => (
              <AccordionItem key={surah.id} value={surah.id} className="border-red-800/50">
                <AccordionTrigger className="text-white hover:text-gold-300">
                  <div className="text-right">
                    <div className="font-arabic mb-1">{surah.title}</div>
                    {surah.englishTitle}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-4 rounded-lg bg-red-900/30">
                    <p className="text-right text-xl text-white font-arabic" dir="rtl">
                      {surah.arabic}
                    </p>
                    <p className="text-gold-300 italic">{surah.transliteration}</p>
                    <p className="text-white">{surah.translation}</p>
                    <div className="mt-4 bg-black/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-gold-400 mb-2">Benefits & Usage</h4>
                      <p className="text-emerald-200">{surah.benefits}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Card>
    </div>
  )
}
