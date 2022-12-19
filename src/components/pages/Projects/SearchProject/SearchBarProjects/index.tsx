import React from "react"
import { Input } from "antd"
import searchInputIcon from "./images/search-input.svg"

interface SearchBarProjectsProps {
  placeholder: string
  onSearchChange: (val: string) => void
}

export default function SearchBar({
  placeholder,
  onSearchChange,
}: SearchBarProjectsProps) {
  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => onSearchChange(e.target.value)}
      suffix={
        <img
          src={searchInputIcon}
          alt="Search"
          className="SearchBarProjects-search-icon"
        />
      }
      className="SearchBarProjects-input"
    />
  )
}
