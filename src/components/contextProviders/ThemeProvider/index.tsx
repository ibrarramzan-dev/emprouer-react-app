import React, { useState, useMemo } from "react"
import ThemeContext from "../../../context/themeContext"

interface ThemeProviderProps {
  children: JSX.Element
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode)
  }

  const value = useMemo(() => ({ isDarkMode, toggleDarkMode }), [isDarkMode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
