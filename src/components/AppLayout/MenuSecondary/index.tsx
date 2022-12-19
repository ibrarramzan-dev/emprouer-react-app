import React, { useState, useEffect, useContext, useRef } from "react"
import classNames from "classnames"
import close from "./images/close.svg"
import info from "./images/info_black_24dp.svg"
import analytics from "./images/analytics_black_24dp.svg"
import facilityEquipment from "./images/facility-equipment.svg"
import workshop from "./images/B_W_Processes.svg"
import repairQuality from "./images/repair-quality.svg"
import training from "./images/training.svg"
import expand from "./images/expand-menu.svg"
import compress from "./images/compress-menu.svg"
import MenuBtnContext from "../../../context/menuBtnContext"
import MenuSecondaryItem from "./MenuSecondaryItem"

type MenuSecondaryProps = {
  show: boolean
}

export default function MenuSecondary({ show }: MenuSecondaryProps) {
  const [width, setWidth] = useState(window.innerWidth)
  const { isOpen, toggleMenu } = useContext(MenuBtnContext)

  const menuSecondaryRef = useRef<HTMLDivElement>(null)
  const menuCloseRef = useRef<HTMLDivElement>(null)
  const menuListULRef = useRef<HTMLUListElement>(null)

  const bodyShopRef = useRef<HTMLSpanElement>(null)
  const analyticsRef = useRef<HTMLSpanElement>(null)
  const facilityRef = useRef<HTMLSpanElement>(null)
  const workshopRef = useRef<HTMLSpanElement>(null)
  const repairRef = useRef<HTMLSpanElement>(null)
  const trainingRef = useRef<HTMLSpanElement>(null)

  const menuFacilityArrowRef = useRef<HTMLDivElement>(null)
  const menuFacilityListUlRef = useRef<HTMLUListElement>(null)

  const expandRef = useRef<HTMLDivElement>(null)
  const compressRef = useRef<HTMLDivElement>(null)

  const showMenuNormal = () => {
    if (
      menuSecondaryRef.current &&
      menuCloseRef.current &&
      menuListULRef.current &&
      bodyShopRef.current &&
      analyticsRef.current &&
      facilityRef.current &&
      menuFacilityArrowRef.current &&
      menuFacilityListUlRef.current &&
      workshopRef.current &&
      repairRef.current &&
      trainingRef.current &&
      expandRef.current &&
      compressRef.current
    ) {
      menuSecondaryRef.current.style.display = "flex"
      menuSecondaryRef.current.style.justifyContent = "left"
      menuSecondaryRef.current.style.position = "relative"
      menuSecondaryRef.current.style.top = "auto"
      menuSecondaryRef.current.style.width = "60px"
      menuSecondaryRef.current.style.height = "100vh"
      menuSecondaryRef.current.style.marginLeft = "60px"
      menuSecondaryRef.current.style.paddingTop = "0.75rem"
      menuSecondaryRef.current.style.paddingRight = "10%"
      menuSecondaryRef.current.style.boxShadow = "none"
      menuSecondaryRef.current.style.borderTopRightRadius = "0"

      menuCloseRef.current.style.display = "none"

      menuListULRef.current.style.marginLeft = "none"

      bodyShopRef.current.style.display = "none"
      bodyShopRef.current.style.marginLeft = "1rem"

      analyticsRef.current.style.display = "none"
      analyticsRef.current.style.marginLeft = "1rem"

      facilityRef.current.style.display = "none"
      facilityRef.current.style.marginLeft = "1rem"

      menuFacilityArrowRef.current.style.display = "none"
      menuFacilityListUlRef.current.style.display = "none"

      workshopRef.current.style.display = "none"
      workshopRef.current.style.marginLeft = "1rem"

      repairRef.current.style.display = "none"
      repairRef.current.style.marginLeft = "1rem"

      trainingRef.current.style.display = "none"
      trainingRef.current.style.marginLeft = "1rem"

      expandRef.current.style.display = "block"
      compressRef.current.style.display = "none"
    }
  }

  const closeMenuOnWide = () => {
    showMenuNormal()
  }

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (width >= 1024) {
      closeMenuOnWide()
    }
  }, [width])

  useEffect(() => {
    if (width < 1024) {
      if (compressRef.current) {
        compressRef.current.style.display = "none"
      }
    }
  }, [width])

  if (isOpen) {
    if (
      menuSecondaryRef.current &&
      menuCloseRef.current &&
      menuListULRef.current &&
      bodyShopRef.current &&
      analyticsRef.current &&
      facilityRef.current &&
      menuFacilityListUlRef.current &&
      workshopRef.current &&
      repairRef.current &&
      trainingRef.current &&
      expandRef.current
    ) {
      menuSecondaryRef.current.style.display = "flex"
      menuSecondaryRef.current.style.position = "fixed"
      menuSecondaryRef.current.style.top = "auto"
      menuSecondaryRef.current.style.bottom = "0"
      menuSecondaryRef.current.style.width = "76vw"
      menuSecondaryRef.current.style.height = "100vh"
      menuSecondaryRef.current.style.zIndex = "10"
      menuSecondaryRef.current.style.background = "#fff"
      menuSecondaryRef.current.style.boxShadow = "2px 0 3px -2px #888"
      menuSecondaryRef.current.style.borderTopRightRadius = "22px"
      menuSecondaryRef.current.style.paddingTop = "3.5rem"
      menuSecondaryRef.current.style.marginLeft = "0"

      menuCloseRef.current.style.display = "block"

      bodyShopRef.current.style.display = "inline"
      bodyShopRef.current.style.marginLeft = "1.5rem"

      analyticsRef.current.style.display = "inline"
      analyticsRef.current.style.marginLeft = "1.5rem"

      facilityRef.current.style.display = "inline"
      facilityRef.current.style.marginLeft = "1.5rem"

      menuFacilityListUlRef.current.style.display = "none"

      workshopRef.current.style.display = "inline"
      workshopRef.current.style.marginLeft = "1.5rem"

      repairRef.current.style.display = "inline"
      repairRef.current.style.marginLeft = "1.5rem"

      trainingRef.current.style.display = "inline"
      trainingRef.current.style.marginLeft = "1.5rem"

      expandRef.current.style.display = "none"
    }
  } else if (!isOpen && menuSecondaryRef.current && expandRef.current) {
    menuSecondaryRef.current.style.display = "none"
    expandRef.current.style.display = "none"
  }

  const onExpandClick = () => {
    if (
      menuSecondaryRef.current &&
      bodyShopRef.current &&
      analyticsRef.current &&
      facilityRef.current &&
      menuFacilityArrowRef.current &&
      workshopRef.current &&
      repairRef.current &&
      trainingRef.current &&
      expandRef.current &&
      compressRef.current
    ) {
      menuSecondaryRef.current.style.width = "280px"
      menuSecondaryRef.current.style.paddingLeft = "-10%"
      menuSecondaryRef.current.style.paddingRight = "10%"

      bodyShopRef.current.style.display = "inline"
      bodyShopRef.current.style.marginLeft = "1.5rem"

      analyticsRef.current.style.display = "inline"
      analyticsRef.current.style.marginLeft = "1.5rem"

      facilityRef.current.style.display = "inline"
      facilityRef.current.style.marginLeft = "1.5rem"

      menuFacilityArrowRef.current.style.display = "block"

      workshopRef.current.style.display = "inline"
      workshopRef.current.style.marginLeft = "1.5rem"

      repairRef.current.style.display = "inline"
      repairRef.current.style.marginLeft = "1.5rem"

      trainingRef.current.style.display = "inline"
      trainingRef.current.style.marginLeft = "1.5rem"

      expandRef.current.style.display = "none"
      compressRef.current.style.display = "block"
    }
  }

  const onCompressClick = () => {
    if (
      menuSecondaryRef.current &&
      bodyShopRef.current &&
      analyticsRef.current &&
      menuFacilityArrowRef.current &&
      menuFacilityListUlRef.current &&
      facilityRef.current &&
      workshopRef.current &&
      repairRef.current &&
      trainingRef.current &&
      expandRef.current &&
      compressRef.current
    ) {
      menuSecondaryRef.current.style.width = "60px"

      bodyShopRef.current.style.display = "none"
      bodyShopRef.current.style.marginLeft = "0"

      analyticsRef.current.style.display = "none"
      analyticsRef.current.style.marginLeft = "0"

      facilityRef.current.style.display = "none"
      facilityRef.current.style.marginLeft = "0"

      menuFacilityArrowRef.current.style.display = "none"
      menuFacilityListUlRef.current.style.display = "none"

      workshopRef.current.style.display = "none"
      workshopRef.current.style.marginLeft = "0"

      repairRef.current.style.display = "none"
      repairRef.current.style.marginLeft = "0"

      trainingRef.current.style.display = "none"
      trainingRef.current.style.marginLeft = "0"

      expandRef.current.style.display = "block"
      compressRef.current.style.display = "none"
    }
  }

  const onCloseMenuClick = () => {
    if (menuCloseRef.current && menuSecondaryRef.current && expandRef.current) {
      menuSecondaryRef.current.style.display = "none"
      expandRef.current.style.display = "none"
    }

    toggleMenu()
  }

  const onFacilityDropdownClick = () => {
    if (menuFacilityListUlRef.current) {
      if (menuFacilityListUlRef.current.style.display === "block") {
        menuFacilityListUlRef.current.style.display = "none"
      } else {
        menuFacilityListUlRef.current.style.display = "block"
      }
    }
  }

  return (
    <>
      <div ref={menuSecondaryRef} className="MenuSecondary-container">
        <div
          ref={menuCloseRef}
          className="MenuSecondary-close-icon"
          onClick={onCloseMenuClick}
          aria-hidden="true"
        >
          <img src={close} alt="Close" />
        </div>

        <ul
          ref={menuListULRef}
          className={classNames("MenuSecondary-nav", {
            "MenuSecondary-item-hide": !show,
          })}
        >
          <MenuSecondaryItem
            ref1={bodyShopRef}
            ref2={null}
            ref3={null}
            icon={info}
            text="Body Shop Overview"
            id="BodyShopOverview-scroll-id"
          />
          
          <MenuSecondaryItem
            ref1={analyticsRef}
            ref2={null}
            ref3={null}
            icon={analytics}
            text="Business Analytics"
            id="BusinessAnalytics-scroll-id"
          />

          <MenuSecondaryItem
            ref1={facilityRef}
            ref2={menuFacilityArrowRef}
            ref3={menuFacilityListUlRef}
            icon={facilityEquipment}
            text="Facility + Equipment + Paint.."
            id="FacilityEquipment-scroll-id"
            onFacilityItemClick={onFacilityDropdownClick}
          />

          <MenuSecondaryItem
            ref1={workshopRef}
            ref2={null}
            ref3={null}
            icon={workshop}
            text="Business + Workshop Processes"
            id="BusinessWP-scroll-id"
          />

          <MenuSecondaryItem
            ref1={repairRef}
            ref2={null}
            ref3={null}
            icon={repairQuality}
            text="Repair Quality"
            id="RepairQuality-scroll-id"
          />

          <MenuSecondaryItem
            ref1={trainingRef}
            ref2={null}
            ref3={null}
            icon={training}
            text="Training"
            id="Training-scroll-id"
          />
        </ul>
      </div>

      <div
        ref={expandRef}
        className={classNames("MenuSecondary-expand-icon", {
          "MenuSecondary-item-hide": !show,
        })}
        aria-hidden="true"
        onClick={onExpandClick}
      >
        <img src={expand} alt="Expand Icon" />
      </div>

      <div
        ref={compressRef}
        className={classNames("MenuSecondary-compress-icon", {
          "MenuSecondary-item-hide": !show,
        })}
        aria-hidden="true"
        onClick={onCompressClick}
      >
        <img src={compress} alt="Compress Icon" />
      </div>
    </>
  )
}
