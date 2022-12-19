import React from "react"
import classNames from "classnames"

interface ChipHeaderProps {
  type: string
  isActive?: boolean
}

function ChipHeader({ type, isActive }: ChipHeaderProps) {
  return (
    <div
      className={classNames("ChipHeader-container", {
        "sync-pill": type === "sync",
        "unsync-pill": type === "unsync",
        "sync-pill-active": isActive && type === "sync",
        "unsync-pill-active": isActive && type === "unsync",
      })}
      aria-hidden="true"
    >
      {type === "sync" ? "Synchronized" : "Unsynchronized"}
    </div>
  )
}

ChipHeader.defaultProps = {
  isActive: false,
}

export default ChipHeader
