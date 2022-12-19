import React from "react"
import { Row, Col, Input } from "antd"
import { VersionListItem } from "../../../../shared/types/Admin"

interface WeightsVersioningListItemProps {
  data: VersionListItem
}

export default function WeightsVersioningListItem({
  data,
}: WeightsVersioningListItemProps) {
  return (
    <div className="WeightsVersioningListItem-container">
      <Row>
        <Col xs={15} md={22}>
          <b>{data.version}</b>
          <span className="WeightsVersioningListItem-length-text">Length?</span>
        </Col>

        <Col xs={9} md={2}>
          <div className="WeightsVersioningListItem-input-container">
            <Input
              defaultValue={0}
              className="big-round-input WeightsVersioningListItem-input"
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}
