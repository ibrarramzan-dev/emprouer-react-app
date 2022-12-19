import React from "react"
import { Row, Col } from "antd"
import { DateTime } from "luxon"
import { MilestoneItem } from "../../../../../../shared/types/Projects"

interface MilestoneListItemProps {
  data: MilestoneItem
}

export default function MilestoneListItem({ data }: MilestoneListItemProps) {
  const { startDate, description, endDate } = data

  return (
    <Row className="MilestoneListItem-container">
      <Col md={4} className="MilestoneListItem-start-date">
        <div className="MilestoneListItem-col-content-wrapper">
          <p className="MilestoneListItem-date-heading">Start Date</p>
          <p className="MilestoneListItem-date-text">
            {DateTime.fromISO(startDate).toLocaleString()}
          </p>
        </div>
      </Col>

      <Col md={16} className="MilestoneListItem-description">
        <p className="MilestoneListItem-col-content-wrapper">{description}</p>
      </Col>

      <Col md={4} className="MilestoneListItem-end-date">
        <div className="MilestoneListItem-col-content-wrapper">
          <p className="MilestoneListItem-date-heading">End Date</p>
          <p className="MilestoneListItem-date-text">
            {DateTime.fromISO(endDate).toLocaleString()}
          </p>
        </div>
      </Col>
    </Row>
  )
}
