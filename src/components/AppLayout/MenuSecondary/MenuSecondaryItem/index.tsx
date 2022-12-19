import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Link as LinkScroll } from "react-scroll"
import bodyShop from "../images/facility-equipment-dropdown/body-shop.svg"
import paintShop from "../images/facility-equipment-dropdown/paint-shop.svg"
import compressor from "../images/facility-equipment-dropdown/compressor.svg"

interface MenuSecondaryItemProps {
  ref1: React.LegacyRef<HTMLSpanElement> | undefined
  ref2: React.LegacyRef<HTMLDivElement> | undefined
  ref3: React.LegacyRef<HTMLUListElement> | undefined
  icon: string
  text: string
  id: string
  onFacilityItemClick?: () => void
}

function MenuSecondaryItem({
  ref1,
  ref2,
  ref3,
  icon,
  text,
  id,
  onFacilityItemClick = () => {},
}: MenuSecondaryItemProps) {
  const { pathname } = useLocation()

  const showFacilityMenu = () => (
    <>
      {text === "Facility + Equipment + Paint.." ? (
        <div className="MenuSecondary-nav-item-facility-container">
          <Link
            to="/project/testpausesolution/overview"
            state={id}
            className="MenuSecondary-nav-item-link"
          >
            <div>
              <img src={icon} alt={text} />
            </div>

            <span ref={ref1} className="MenuSecondary-nav-item-link-text fa-xs">
              <div className="facility-dropdown-container">
                <div>{text}</div>
              </div>
            </span>
          </Link>

          <div ref={ref2} className="facility-dropdown-arrow-container">
            <i
              className="fa-solid fa-chevron-down"
              onClick={() => onFacilityItemClick()}
              aria-hidden="true"
            />
          </div>
        </div>
      ) : (
        <Link
          to="/project/testpausesolution/overview"
          state={id}
          className="MenuSecondary-nav-item-link"
        >
          <div>
            <img src={icon} alt={text} />
          </div>

          <span ref={ref1} className="MenuSecondary-nav-item-link-text fa-xs">
            {text}
          </span>
        </Link>
      )}

      {text === "Facility + Equipment + Paint.." ? (
        <ul ref={ref3} className="MenuSecondary-item-facility-dropdown">
          <li>
            <Link to="/bodyshop">
              <img src={bodyShop} alt={text} />

              <span className="MenuSecondary-item-facility-dropdown-text">
                Body Shop
              </span>
            </Link>
          </li>

          <li>
            <Link to="/paintshop">
              <img src={paintShop} alt={text} />

              <span className="MenuSecondary-item-facility-dropdown-text">
                Paint Shop
              </span>
            </Link>
          </li>

          <li>
            <Link to="/compressor">
              <img src={compressor} alt={text} />

              <span className="MenuSecondary-item-facility-dropdown-text">
                Compressor
              </span>
            </Link>
          </li>
        </ul>
      ) : null}
    </>
  )

  const showOverviewMenu = () => (
    <>
      {text === "Facility + Equipment + Paint.." ? (
        <div className="MenuSecondary-facility-dropdown-container">
          <LinkScroll
            to={id}
            activeClass="menu-active"
            spy
            smooth
            offset={-80}
            duration={620}
            className="MenuSecondary-nav-item-link"
          >
            <div className="MenuSecondary-nav-item-link-icon">
              <img src={icon} alt={text} />
            </div>

            <span ref={ref1} className="MenuSecondary-nav-item-link-text fa-xs">
              <div className="MenuSecondary-facility-dropdown-text">
                <div>{text}</div>
              </div>
            </span>
          </LinkScroll>

          <div ref={ref2} className="MenuSecondary-facility-dropdown-arrow">
            <i
              className="fa-solid fa-chevron-down"
              onClick={() => onFacilityItemClick()}
              aria-hidden="true"
            />
          </div>
        </div>
      ) : (
        <LinkScroll
          to={id}
          activeClass="menu-active"
          spy
          smooth
          offset={-80}
          duration={620}
          className="MenuSecondary-nav-item-link"
        >
          <div>
            <img src={icon} alt={text} />
          </div>

          <span ref={ref1} className="MenuSecondary-nav-item-link-text fa-xs">
            {text}
          </span>
        </LinkScroll>
      )}

      {text === "Facility + Equipment + Paint.." ? (
        <ul ref={ref3} className="MenuSecondary-item-facility-dropdown">
          <li>
            <Link to="/bodyshop">
              <img src={bodyShop} alt={text} />

              <span className="MenuSecondary-item-facility-dropdown-text">
                Body Shop
              </span>
            </Link>
          </li>

          <li>
            <Link to="/paintshop">
              <img src={paintShop} alt={text} />

              <span className="MenuSecondary-item-facility-dropdown-text">
                Paint Shop
              </span>
            </Link>
          </li>

          <li>
            <Link to="/compressor">
              <img src={compressor} alt={text} />

              <span className="MenuSecondary-item-facility-dropdown-text">
                Compressor
              </span>
            </Link>
          </li>
        </ul>
      ) : null}
    </>
  )

  return (
    <li className="MenuSecondary-nav-item">
      {pathname === "/bodyshop" ||
      pathname === "/paintshop" ||
      pathname === "/compressor"
        ? showFacilityMenu()
        : showOverviewMenu()}
    </li>
  )
}

MenuSecondaryItem.defaultProps = {
  onFacilityItemClick: () => {},
}

export default MenuSecondaryItem
