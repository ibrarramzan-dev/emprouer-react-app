import React from "react"
import { Select, Spin } from "antd"

const { Option } = Select

interface SelectData {
  value: string
  title: string | number
}

interface MySelectProps {
  mode?: "multiple" | "tags" | undefined
  placeholder?: string | undefined
  defaultValue?: string | undefined
  onChange: (val: string) => void
  data: SelectData[]
  loading?: boolean
}

export default function MySelect({
  mode,
  placeholder,
  defaultValue,
  onChange,
  data,
  loading,
}: MySelectProps) {
  return (
    <div className="MySelect-container">
      <Select
        mode={mode}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(val) => onChange(val)}
      >
        {data.map((dataItem: SelectData) => (
          <Option value={dataItem.value} key={dataItem.value}>
            {dataItem.title}
          </Option>
        ))}
      </Select>

      {!loading ? (
        <div className="MySelect-arrow-down-icon-wrapper">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9L12 15 18 9" />
          </svg>
        </div>
      ) : (
        <div className="MySelect-loading-wrapper">
          <Spin />
        </div>
      )}
    </div>
  )
}

MySelect.defaultProps = {
  mode: undefined,
  placeholder: undefined,
  defaultValue: undefined,
  loading: false,
}
