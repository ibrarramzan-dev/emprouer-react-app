import React, { Fragment } from "react"
import { IntlProvider } from "react-intl"

import LOCALES from "./locales"
import messages from "./messages"

interface ProviderProps {
  children: JSX.Element
  locale?: string
}

function Provider({ children, locale }: ProviderProps) {
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={`${locale}`}
      messages={messages[`${locale}`]}
    >
      {children}
    </IntlProvider>
  )
}

Provider.defaultProps = {
  locale: LOCALES.ENGLISH,
}

export default Provider
