import React, { useState, useMemo } from "react"
import LocaleContext from "../../../context/localeContext"

interface LocaleProviderProps {
  children: JSX.Element
}

export default function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState("en-us")

  const changeLocale = (lang: string) => {
    setLocale(lang)
  }

  const value = useMemo(() => ({ locale, changeLocale }), [locale])

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}
