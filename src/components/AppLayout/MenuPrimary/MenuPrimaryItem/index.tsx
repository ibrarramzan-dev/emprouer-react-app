import React, { forwardRef } from "react"
import { Link, useLocation } from "react-router-dom"
import classNames from "classnames"

interface MenuPrimaryItemProps {
  svgIcon: string | null
  icon: JSX.Element | null
  text: string
  path: string
}

function MenuPrimaryItem(
  { svgIcon, icon, text, path }: MenuPrimaryItemProps,
  ref: React.LegacyRef<HTMLSpanElement> | undefined,
) {
  const { pathname } = useLocation()

  return (
    <li
      className={classNames("MenuPrimary-nav-item", {
        "MenuPrimary-nav-item-projects": text === "Projects",
      })}
    >
      <Link to={path} className="MenuPrimary-nav-item-link">
        <div
          className={classNames("MenuPrimary-nav-item-icon", {
            "MenuPrimary-nav-item-icon-active": pathname === path,
            "MenuPrimary-nav-item-icon-tag": text === "Tags",
          })}
        >
          {!svgIcon ? icon : <img src={svgIcon} alt={text} />}
        </div>

        <span ref={ref} className="MenuPrimary-nav-item-link-text">
          {text}
        </span>
      </Link>
    </li>
  )
}

export default forwardRef(MenuPrimaryItem)
