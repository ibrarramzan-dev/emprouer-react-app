import React, { useState, useEffect } from "react"
import { Card, Row, Col, Select } from "antd"
import ResultsCount from "../../../ResultsCount"
import SearchBar from "../../../SearchBar/SearchBar"
import ChipWV from "./ChipWV"
import WeightsVersioningList from "./WeightsVersioningList"
import { VersionTypes as VersionsTypesInterface } from "../../../../shared/types/Admin"
import useWeightsVersioningAPI from "../../../../services/Admin/useWeightsVersioningAPI"

const { Option } = Select

export default function WeightsVersioning() {
  const [versionsTypes, setVersionsTypes] = useState<VersionsTypesInterface[]>(
    [],
  )
  const [currentVersionTypeId, setCurrentVersionTypeId] = useState<number>(1)
  const [searchQuery, setSearchQuery] = useState<string>("")

  const { getVersionsTypes } = useWeightsVersioningAPI()

  const gotVersionsTypes = (data: VersionsTypesInterface[]) =>
    setVersionsTypes(data)

  useEffect(() => {
    getVersionsTypes(gotVersionsTypes)
  }, [])

  const onVersionTypeChange = (id: number) => setCurrentVersionTypeId(id)

  const onSearchChange = (val: string) => {
    setSearchQuery(val)
  }

  return (
    <div className="WeightsVersioning-container">
      <Card
        title={
          <div>
            <p>Set Weights for Versioning</p>

            <ResultsCount classSelector="WeightsVersioning-ResultsCount-style" />
          </div>
        }
        extra={
          <div className="WeightsVersioning-filter-save-container">
            <div>
              <Select
                placeholder="Filter Results"
                className="WeightsVersioning-filter-select"
              >
                <Option value="1-5">having 1-5 weights</Option>
                <Option value="5-10">having 5-10 weights</Option>
                <Option value="10-15">having 10-15 weights</Option>
                <Option value=">50">having {">"}50 weights</Option>
              </Select>
            </div>

            <div className="WeightsVersioning-save-icon-container" title="save">
              <i className="fa-solid fa-floppy-disk WeightsVersioning-save-icon" />
            </div>
          </div>
        }
        className="WeightsVersioning-card"
      >
        <Row>
          <Col xs={24} md={20}>
            <div>
              <Row gutter={[28, 24]}>
                {versionsTypes.map((versionType) => (
                  <Col key={versionType.id}>
                    <ChipWV
                      data={versionType}
                      onVersionTypeChange={onVersionTypeChange}
                      isActive={currentVersionTypeId === versionType.id}
                    />
                  </Col>
                ))}
              </Row>
            </div>
            <br />

            <SearchBar
              placeholder="Search..."
              onSearchChange={onSearchChange}
            />

            <WeightsVersioningList
              versionTypeId={currentVersionTypeId}
              searchQuery={searchQuery}
            />
          </Col>
        </Row>
      </Card>
    </div>
  )
}
