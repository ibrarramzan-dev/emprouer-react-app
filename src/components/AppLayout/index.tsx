import React from "react"
import Header from "./Header"
import MenuPrimary from "./MenuPrimary"
import MenuSecondary from "./MenuSecondary"
import MenuBtnProvider from "../contextProviders/MenuBtnProvider"

interface AppLayoutProps {
  secondaryMenu: boolean
  children: JSX.Element
}

export default function AppLayout({ secondaryMenu, children }: AppLayoutProps) {
  return (
    <MenuBtnProvider>
      <>
        <Header />

        <div className="AppLayout-body-container">
          <div className="AppLayout-sidemenu">
            <MenuPrimary />

            <MenuSecondary show={secondaryMenu} />
          </div>

          <div className="AppLayout-content">{children}</div>
        </div>
      </>
    </MenuBtnProvider>
  )
}
