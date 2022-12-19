import React from "react"
import classNames from "classnames"

interface BusinessWPCircleProps {
  icon?: string
  percent?: number
}

function BusinessWPCircle({ icon, percent }: BusinessWPCircleProps) {
  return (
    <div className="BusinessWPCircle-container">
      <div
        className={classNames("BusinessWPCircle-inner-circle", {
          "BusinessWPCircle-inner-circle-color-default": icon,
          "BusinessWPCircle-inner-circle-color-red":
            !icon && percent !== undefined && percent < 50,
          "BusinessWPCircle-inner-circle-color-orange":
            percent && percent > 50 && percent < 100,
          "BusinessWPCircle-inner-circle-color-green":
            percent && percent === 100,
        })}
      >
        {icon ? (
          <img
            className="BusinessWPCircle-key-icon-img"
            src={icon}
            alt="Start"
          />
        ) : null}

        {!icon ? (
          <p className="BusinessWPCircle-inner-circle-percentage">
            {percent?.toFixed(1)}%
          </p>
        ) : null}
      </div>
    </div>
  )
}

BusinessWPCircle.defaultProps = {
  icon: "",
  percent: 0,
}

export default BusinessWPCircle
