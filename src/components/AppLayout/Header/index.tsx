import React, { useContext } from "react"
import { Avatar, Dropdown, Menu } from "antd"
import hamburger from "./images/menu_black_24dp.svg"
import logo from "./images/body-shop-boost-logo.svg"
import tagOverlap from "./images/basf-logo.svg"
import LangDropdown from "../../LangDropdown"
import MenuBtnContext from "../../../context/menuBtnContext"

export default function Header() {
  const { toggleMenu } = useContext(MenuBtnContext)

  const menu = (
    <div className="Header-avatar-dropdown-menu">
      <Menu
        items={[
          {
            key: "1",
            label: (
              <div className="Header-avatar-dropdown-list-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.antgroup.com"
                >
                  <i className="fa-solid fa-gear Header-avatar-dropdown-icons" />
                  Settings
                </a>
              </div>
            ),
          },
          {
            key: "2",
            label: (
              <div className="Header-avatar-dropdown-list-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.aliyun.com"
                >
                  <i className="fa-solid fa-key Header-avatar-dropdown-icons" />
                  Change Password
                </a>
              </div>
            ),
          },
          {
            key: "3",
            label: (
              <div className="Header-avatar-dropdown-list-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.aliyun.com"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket Header-avatar-dropdown-icons" />
                  Logout
                </a>
              </div>
            ),
          },
        ]}
      />
    </div>
  )

  return (
    <header className="Header-container">
      <div className="Header-container-fixed">
        <div
          className="Header-drawer-hamburger-btn"
          onClick={toggleMenu}
          aria-hidden="true"
        >
          <img src={hamburger} alt="Menu" />
        </div>

        <div className="Header-brand-logo">
          <img src={logo} alt="Body Shop BOOST" title="Body Shop BOOST" />
        </div>

        <div className="Header-tag-overlap">
          <img src={tagOverlap} alt="BASF AUTOMOTIVE REFINISH COATINGS" />
        </div>

        <div className="Header-right-items">
          <LangDropdown
            styling={{ position: "relative", top: "0", left: "0" }}
          />
          <div className="Header-avatar-dropdown">
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              placement="bottomRight"
              overlayStyle={{ width: "100%", padding: "11px" }}
            >
              <Avatar
                className="Header-avatar-dropdown-avatar"
                size="large"
                icon={<i className="fa-solid fa-user" />}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  )
}
