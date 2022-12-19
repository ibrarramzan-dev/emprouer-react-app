import React from "react"

interface ResultsCountProps {
  classSelector: string
}

export default function ResultsCount({ classSelector }: ResultsCountProps) {
  return (
    <p className={`text-gray ResultsCount-container ${classSelector}`}>
      Showing <b>1024 results</b>
    </p>
  )
}
