import React from "react"
import { Card, Col, Row, Select } from "antd"

const { Option } = Select

export default function StandardsNewProjects() {
  return (
    <div className="StandardsNewProjects-container">
      <Card
        title="Standards New Projects"
        className="StandardsNewProjects-card"
      >
        <Row className="StandardsNewProjects-row-margin">
          <Col span={12}>Standard Template</Col>

          <Col span={12}>
            <Select
              showSearch
              placeholder="ComboBox"
              optionFilterProp="children"
              onChange={() => {}}
              onSearch={() => {}}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              style={{ width: "100%" }}
            >
              <Option value="Value 1">Value 1</Option>
              <Option value="Value 2">Value 2</Option>
              <Option value="Value 3">Value 3</Option>
            </Select>
          </Col>
        </Row>

        <Row className="StandardsNewProjects-row-margin">
          <Col span={12}>Standard Template</Col>

          <Col span={12}>
            <Select
              showSearch
              placeholder="ComboBox"
              optionFilterProp="children"
              onChange={() => {}}
              onSearch={() => {}}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              style={{ width: "100%" }}
            >
              <Option value="Value 1">Value 1</Option>
              <Option value="Value 2">Value 2</Option>
              <Option value="Value 3">Value 3</Option>
            </Select>
          </Col>
        </Row>

        <Row className="StandardsNewProjects-row">
          <Col span={12}>Standard Template</Col>

          <Col span={12}>
            <Select
              showSearch
              placeholder="ComboBox"
              optionFilterProp="children"
              onChange={() => {}}
              onSearch={() => {}}
              filterOption={(input, option) =>
                (option!.children as unknown as string)
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              style={{ width: "100%" }}
            >
              <Option value="Value 1">Value 1</Option>
              <Option value="Value 2">Value 2</Option>
              <Option value="Value 3">Value 3</Option>
            </Select>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
