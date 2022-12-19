import { createContext } from "react"

interface LocaleCtx {
  locale: string
  changeLocale: (lang: string) => void
}

const LocaleContext = createContext<LocaleCtx>({
  locale: "en-us",
  changeLocale: () => {},
})

export default LocaleContext
