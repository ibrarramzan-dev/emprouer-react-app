import React from "react"
import { Row, Col } from "antd"
import { Metrics } from "../../../../../shared/types/ProjectOverview"
import ScoreCard from "../../../Projects/ScoreCard"

interface ProjectScoreCardsProps {
  metrics: Metrics
}

export default function ProjectScoreCards({ metrics }: ProjectScoreCardsProps) {
  return (
    <div className="ProjectScoreCards-container">
      <Row gutter={[21, 19]} className="ProjectScoreCards-row">
        <Col xs={14} sm={8} md={12} lg={8}>
          <ScoreCard
            tasksCompleted={metrics.sustainability.tasksCompleted}
            totalTasks={metrics.sustainability.totalTasks}
            text="Sustainability"
            percentage={metrics.sustainability.score}
          />
        </Col>

        <Col xs={14} sm={8} md={12} lg={8}>
          <ScoreCard
            tasksCompleted={metrics.facilityEquipment.tasksCompleted}
            totalTasks={metrics.facilityEquipment.totalTasks}
            text="Facility + Equipment"
            percentage={metrics.facilityEquipment.score}
          />
        </Col>

        <Col xs={14} sm={8} md={12} lg={8}>
          <ScoreCard
            tasksCompleted={metrics.businessWorkshopProcesses.tasksCompleted}
            totalTasks={metrics.businessWorkshopProcesses.totalTasks}
            text="Business + Workshop Processes"
            percentage={metrics.businessWorkshopProcesses.score}
          />
        </Col>

        <Col xs={14} sm={8} md={12} lg={8}>
          <ScoreCard
            tasksCompleted={metrics.repairQuality.tasksCompleted}
            totalTasks={metrics.repairQuality.totalTasks}
            text="Repair Quality"
            percentage={metrics.repairQuality.score}
          />
        </Col>

        <Col xs={14} sm={8} md={12} lg={8}>
          <ScoreCard
            tasksCompleted={metrics.training.tasksCompleted}
            totalTasks={metrics.training.totalTasks}
            text="Training"
            percentage={metrics.training.score}
          />
        </Col>

        <Col xs={14} sm={8} md={12} lg={8}>
          <ScoreCard
            tasksCompleted={metrics.businessInformation.tasksCompleted}
            totalTasks={metrics.businessInformation.totalTasks}
            text="Business Information"
            percentage={metrics.businessInformation.score}
          />
        </Col>
      </Row>
    </div>
  )
}
