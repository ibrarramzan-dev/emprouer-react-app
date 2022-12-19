import React from "react"
import { Row, Col } from "antd"
import TrainingReportCard from "./TrainingReportCard"
import administrationIcon from "./TrainingReportCard/images/administration-icon.png"
import bodyRepairIcon from "./TrainingReportCard/images/body-repair-icon.png"
import paintIcon from "./TrainingReportCard/images/paint-icon.png"
import TasksProgressCard from "../../../Cards/TasksProgressCard"

export default function Training() {
  return (
    <div id="Training-scroll-id">
      <p className="page-section-heading">Training</p>
      <Row className="Training-row">
        <Col>
          <TasksProgressCard
            heading="Training"
            tasksCompleted={11}
            totalTasks={22}
            percent={77.8}
            customClass="Training-tasks-progress-card"
          />
        </Col>

        <Col>
          <TrainingReportCard
            icon={administrationIcon}
            label="Administration"
          />
        </Col>

        <Col>
          <TrainingReportCard icon={bodyRepairIcon} label="Body Repair" />
        </Col>

        <Col>
          <TrainingReportCard icon={paintIcon} label="Paint" />
        </Col>
      </Row>
    </div>
  )
}
