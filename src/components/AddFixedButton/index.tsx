import React, { useState, useEffect } from "react"
import classNames from "classnames"

interface AddFixedButtonProps {
  onClick: () => void
}

export default function AddFixedButton({ onClick }: AddFixedButtonProps) {
  const [showLongBtn, setShowLongBtn] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [width])

  return (
    <div className="AddFixedButton-container">
      <div>
        {!showLongBtn || width <= 1024 ? (
          <button
            type="button"
            className={classNames(
              "CircleButton-btn CircleButton-button CircleButton-btn-color-blue",
            )}
            onMouseOver={() => setShowLongBtn(true)}
            onMouseOut={() => setShowLongBtn(false)}
            onBlur={() => {}}
            onFocus={() => {}}
            onClick={() => onClick()}
          >
            <div className="CircleButton-btn-short-text">
              <p>+</p>
            </div>
          </button>
        ) : (
          <button
            type="button"
            className={classNames(
              "CircleButton-btn CircleButton-btn-long CircleButton-btn-color-blue",
            )}
            onMouseOver={() => setShowLongBtn(true)}
            onMouseOut={() => setShowLongBtn(false)}
            onBlur={() => {}}
            onFocus={() => {}}
            onClick={() => onClick()}
          >
            <div className="CircleButton-btn-short-text">
              <p>+</p>
            </div>

            <div className="CircleButton-btn-long-text">Add New User</div>
          </button>
        )}
      </div>
    </div>
  )
}
