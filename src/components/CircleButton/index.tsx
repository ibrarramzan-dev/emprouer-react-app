import React, { useState, useEffect } from "react"
import classNames from "classnames"

interface CircleButtonProps {
  type?: string
  longBtnText?: string
  color?: string
  qualityCheckId?: number
  onClick: (qualityCheckId: number) => void
}

export default function CircleButton({
  type,
  longBtnText,
  color,
  qualityCheckId,
  onClick,
}: CircleButtonProps) {
  const [showLongBtn, setShowLongBtn] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [width])

  const renderShortBtnText = () => {
    if (type === "delete") {
      return (
        <div>
          <i className="fa-solid fa-trash" />
        </div>
      )
    }

    return <p>+</p>
  }

  return (
    <div>
      {!showLongBtn || width <= 1024 ? (
        <button
          type="button"
          className={classNames("CircleButton-btn CircleButton-button", {
            "CircleButton-btn-color-blue": color === "blue",
            "CircleButton-btn-color-gray": color === "gray",
            "CircleButton-btn-color-red": color === "red",
          })}
          onMouseOver={() => setShowLongBtn(true)}
          onMouseOut={() => setShowLongBtn(false)}
          onBlur={() => {}}
          onFocus={() => {}}
          onClick={() => onClick(Number(qualityCheckId))}
        >
          <div className="CircleButton-btn-short-text">
            {renderShortBtnText()}
          </div>
        </button>
      ) : (
        <button
          type="button"
          className={classNames("CircleButton-btn CircleButton-btn-long", {
            "CircleButton-btn-color-blue": color === " blue",
            "CircleButton-btn-color-gray": color === "gray",
            "CircleButton-btn-color-red": color === "red",
          })}
          onMouseOver={() => setShowLongBtn(true)}
          onMouseOut={() => setShowLongBtn(false)}
          onBlur={() => {}}
          onFocus={() => {}}
          onClick={() => onClick(Number(qualityCheckId))}
        >
          <div className="CircleButton-btn-short-text">
            {renderShortBtnText()}
          </div>

          <div className="CircleButton-btn-long-text">{longBtnText}</div>
        </button>
      )}
    </div>
  )
}

CircleButton.defaultProps = {
  type: "new",
  longBtnText: "Add Car",
  color: "gray",
  qualityCheckId: 0,
}
