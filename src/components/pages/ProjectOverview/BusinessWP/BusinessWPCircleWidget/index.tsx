import React from "react"
import BusinessWPCircle from "./BusinessWPCircle"
import BusinessWPCircleLabel from "./BusinessWPCircleLabel"

interface BusinessWPCircleWidgetProps {
  icon?: string
  percent?: number
  label?: string
}

export default function BusinessWPCircleWidget({
  icon,
  percent,
  label,
}: BusinessWPCircleWidgetProps) {
  return (
    <div className="BusinessWPCircleWidget-container">
      <BusinessWPCircle icon={icon} percent={percent} />

      {label ? <BusinessWPCircleLabel text={label} /> : null}
    </div>
  )
}

BusinessWPCircleWidget.defaultProps = {
  icon: "",
  percent: 0,
  label: "",
}
