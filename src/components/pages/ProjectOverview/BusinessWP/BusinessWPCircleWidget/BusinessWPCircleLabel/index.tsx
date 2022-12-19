import React from "react"

interface BusinessWPCircleLabelProps {
  text: string
}

export default function BusinessWPCircleLabel({
  text,
}: BusinessWPCircleLabelProps) {
  return (
    <div className="BusinessWPCircleLabel-container">
      <p>{text}</p>
    </div>
  )
}
