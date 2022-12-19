import React from "react"
import classNames from "classnames"
import { VersionTypes as VersionsTypesInterface } from "../../../../../shared/types/Admin"

interface ChipWVProps {
  data: VersionsTypesInterface
  isActive?: boolean
  onVersionTypeChange: (id: number) => void
}

function ChipWV({ data, onVersionTypeChange, isActive }: ChipWVProps) {
  const { id, name } = data

  return (
    <div
      className={classNames("ChipWV-container", {
        "active-chip-black": isActive,
      })}
      onClick={() => onVersionTypeChange(id)}
      aria-hidden="true"
    >
      {name}
    </div>
  )
}

ChipWV.defaultProps = {
  isActive: false,
}

export default ChipWV
