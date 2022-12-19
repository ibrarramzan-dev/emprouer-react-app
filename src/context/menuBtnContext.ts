import { createContext } from "react"

interface MenuBtnCtx {
  isOpen: boolean
  toggleMenu: () => void
}

const MenuBtnContext = createContext<MenuBtnCtx>({
  isOpen: false,
  toggleMenu: () => {},
})

export default MenuBtnContext
