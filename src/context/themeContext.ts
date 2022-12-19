import { createContext } from "react"

interface ThemeCtx {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeCtx>({
  isDarkMode: true,
  toggleDarkMode: () => {},
})

export default ThemeContext
