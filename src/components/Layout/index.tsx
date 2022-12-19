import React, { useContext } from "react"
import classNames from "classnames"
import style from "../../styles/components/Layout.module.sass"
import ThemeContext from "../../context/themeContext"
import LocaleContext from "../../context/localeContext"
import I18nProvider from "../../i18nProvider/Provider"

interface LayoutProps {
  children: JSX.Element
}

export default function Layout({ children }: LayoutProps) {
  const { isDarkMode } = useContext(ThemeContext)
  const { locale } = useContext(LocaleContext)

  const layoutClasses = classNames({
    [style.darkMode]: isDarkMode,
  })

  return (
    <I18nProvider locale={locale}>
      <main id={style.layout} className={layoutClasses}>
        <div>{children}</div>
      </main>
    </I18nProvider>
  )
}
