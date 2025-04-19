export interface PrayerTiming {
  date: string
  sehar: string
  dhuhr: string
  asr: string
  iftar: string
  isha: string
}

export interface CalendarData {
  [city: string]: PrayerTiming[]
}
