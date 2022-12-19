import React, { useContext } from "react"
import { Switch } from "antd"
import classNames from "classnames"
import translate from "../../i18nProvider/translate"
import ThemeContext from "../../context/themeContext"

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <div className="DarkModeToggle-container">
      <div>
        <span
          className={classNames({
            "dark-mode-text-color": isDarkMode,
          })}
        >
          {translate("dark-mode")}
        </span>

        <Switch
          className="DarkModeToggle-switch"
          defaultChecked={false}
          onChange={() => toggleDarkMode()}
        />
      </div>
    </div>
  )
}
