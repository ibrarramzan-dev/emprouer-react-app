import React from "react"

interface CountCardProps {
  heading: string
  count: number
}

export default function CountCard({ heading, count }: CountCardProps) {
  return (
    <div className="CountCard-container">
      <p className="CountCard-heading">{heading}</p>
      <p className="CountCard-count">{count}</p>
    </div>
  )
}
