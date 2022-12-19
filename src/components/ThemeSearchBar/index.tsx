import React from "react"
import { Input } from "antd"
import searchInputIcon from "./images/search-input.svg"

interface ThemeSearchBarProps {
  placeholder: string
  onSearchChange: (val: string) => void
}

export default function ThemeSearchBar({
  placeholder,
  onSearchChange,
}: ThemeSearchBarProps) {
  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => onSearchChange(e.target.value)}
      suffix={
        <img
          src={searchInputIcon}
          alt="Search"
          className="ThemeSearchBar-search-icon"
        />
      }
      className="ThemeSearchBar-input"
    />
  )
}
