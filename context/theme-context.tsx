"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "day" | "night" | "day" // Changed from "noon" to "day" to simplify to just two themes

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("day")

  // Initialize theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("ramadan-theme") as Theme | null
    if (savedTheme && (savedTheme === "day" || savedTheme === "night")) {
      setTheme(savedTheme)
    }
  }, [])

  // Update document class when theme changes
  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove("dark")

    // Add appropriate class based on theme
    if (theme === "night") {
      document.documentElement.classList.add("dark")
    }

    // Save theme preference to localStorage
    localStorage.setItem("ramadan-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "day" ? "night" : "day"))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
