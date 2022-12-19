import React from "react"
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"

interface SearchBarProps {
  placeholder: string
  onSearchChange: (val: string) => void
}

export default function SearchBar({
  placeholder,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="SearchBar-container">
      <Input
        placeholder={placeholder}
        onChange={(e) => onSearchChange(e.target.value)}
        suffix={<SearchOutlined className="SearchBar-search-icon" />}
        className="SearchBar-input"
      />
    </div>
  )
}
