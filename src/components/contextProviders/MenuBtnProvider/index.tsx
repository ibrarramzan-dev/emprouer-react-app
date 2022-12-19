import React, { useState, useMemo } from "react"
import MenuBtnContext from "../../../context/menuBtnContext"

type MenuBtnProviderProps = {
  children: JSX.Element
}

export default function MenuBtnProvider({ children }: MenuBtnProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const value = useMemo(() => ({ isOpen, toggleMenu }), [isOpen])

  return (
    <MenuBtnContext.Provider value={value}>{children}</MenuBtnContext.Provider>
  )
}
