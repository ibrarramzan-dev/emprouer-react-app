import React from "react"
import { Row, Col } from "antd"
import Card from "../../../../Cards/Card"

interface TrainingReportCardProps {
  label: string
  icon: string
}

export default function TrainingReportCard({
  icon,
  label,
}: TrainingReportCardProps) {
  return (
    <Card customClass="TrainingReportCard-card-container">
      <div className="TrainingReportCard-container">
        <div className="TrainingReportCard-icon-and-people-text">
          <Row>
            <Col span={20} className="TrainingReportCard-icon-container">
              <img src={icon} alt="" />
            </Col>

            <Col
              span={4}
              className="TrainingReportCard-people-count-and-text-wrapper"
            >
              <p className="TrainingReportCard-people-count">0</p>
              <p className="TrainingReportCard-people-text">People</p>
            </Col>
          </Row>
        </div>

        <div className="TrainingReportCard-task-info">
          <p className="TrainingReportCard-heading-text">{label}</p>
          <p>11/11 Tasks completed</p>
          <p className="TrainingReportCard-percent-text">100.0</p>
          <p className="TrainingReportCard-show-training-modules-text">
            Show Training Modules
          </p>
        </div>
      </div>
    </Card>
  )
}
