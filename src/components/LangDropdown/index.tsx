import React, { useContext } from "react"
import LocaleContext from "../../context/localeContext"
import MySelect from "../MySelect"

interface LangDropdownProps {
  styling?: React.CSSProperties
}

function LangDropdown({ styling }: LangDropdownProps) {
  const { locale, changeLocale } = useContext(LocaleContext)

  return (
    <div className="LangDropdown-container" style={styling}>
      <MySelect
        defaultValue={locale}
        onChange={(lang: string) => changeLocale(lang)}
        data={[
          {
            value: "en-us",
            title: "EN",
          },
          {
            value: "de-de",
            title: "DE",
          },
        ]}
      />
    </div>
  )
}

LangDropdown.defaultProps = {
  styling: {},
}

export default LangDropdown
