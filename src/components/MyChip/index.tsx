import React from "react"
import classNames from "classnames"
import { TagItem, TagDbRecord } from "../../shared/types/TagManagement"

interface MyChipProps {
  data?: TagItem
  userId?: string
  text: string
  customClass?: string
  isActive?: boolean
  onTagClick?: (tagRecord: TagDbRecord) => void
}

export default function MyChip({
  data,
  userId,
  text,
  customClass,
  isActive,
  onTagClick = () => {},
}: MyChipProps) {
  return (
    <div
      className={classNames(`MyChip-container ${customClass}`, {
        "active-chip-black": isActive,
        "active-chip-green": data?.status,
      })}
      onClick={() =>
        onTagClick({ key: data?.id, name: data?.name, status: data?.status })
      }
      key={userId}
      aria-hidden="true"
    >
      {text}
    </div>
  )
}

MyChip.defaultProps = {
  data: {},
  userId: "",
  customClass: "",
  isActive: false,
  onTagClick: () => {},
}
