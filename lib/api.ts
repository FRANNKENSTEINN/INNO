const ALADHAN_API_BASE = "https://api.aladhan.com/v1"

export async function getPrayerTimes(city: string, date: string) {
  const cityCoordinates = {
    Bangalore: { latitude: 12.9716, longitude: 77.5946 },
    Mumbai: { latitude: 19.076, longitude: 72.8777 },
  }

  const coords = cityCoordinates[city as keyof typeof cityCoordinates]

  const response = await fetch(
    `${ALADHAN_API_BASE}/timings/${date}?latitude=${coords.latitude}&longitude=${coords.longitude}&method=3`,
  )

  if (!response.ok) {
    throw new Error("Failed to fetch prayer times")
  }

  return response.json()
}

export async function getRamadanDates(year = 2025) {
  const response = await fetch(
    `${ALADHAN_API_BASE}/hijriCalendar?latitude=21.3891&longitude=39.8579&method=3&month=9&year=${year}`,
  )

  if (!response.ok) {
    throw new Error("Failed to fetch Ramadan dates")
  }

  return response.json()
}
