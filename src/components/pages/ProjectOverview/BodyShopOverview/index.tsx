import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Row, Col, Collapse } from "antd"
import NotesProvider from "../../../contextProviders/NotesProvider"
import projectOverviewData from "../../../../util/fakeData/projectOverview"
import { ProjectOverview } from "../../../../shared/types/ProjectOverview"
import Card from "../../../Cards/Card"
import ProjectInfoCard from "./ProjectInfoCard"
import AvgTotalAuditScoreCard from "./AvgTotalAuditScoreCard"
import ProjectScoreCards from "./ProjectScoreCards"
import NotesPanelList from "./NotesPanelList"

const { Panel } = Collapse

export default function BodyShopOverview() {
  const { id } = useParams()
  const [projectOverview, setProjectOverview] = useState<ProjectOverview>({
    projectId: `${id}`,
    data: {
      bodyShopOverview: {
        avgTotalAuditScore: {
          score: 0,
          tasksCompleted: 0,
          totalTasks: 0,
        },
        metrics: {
          sustainability: {
            tasksCompleted: 0,
            totalTasks: 0,
            score: 0,
          },
          facilityEquipment: {
            tasksCompleted: 0,
            totalTasks: 0,
            score: 0,
          },
          businessWorkshopProcesses: {
            tasksCompleted: 0,
            totalTasks: 0,
            score: 0,
          },
          repairQuality: {
            tasksCompleted: 0,
            totalTasks: 0,
            score: 0,
          },
          training: {
            tasksCompleted: 0,
            totalTasks: 0,
            score: 0,
          },
          businessInformation: {
            tasksCompleted: 0,
            totalTasks: 0,
            score: 0,
          },
        },
      },
    },
  })

  useEffect(() => {
    if (projectOverview) {
      const projectOverviewFound = projectOverviewData.find(
        (projectOverviewItem) => projectOverviewItem.projectId === id,
      )

      if (projectOverviewFound) {
        setProjectOverview(projectOverviewFound)
      }
    }
  }, [])

  return (
    <div id="BodyShopOverview-scroll-id" className="BodyShopOverview-container">
      <p className="page-section-heading">BodyShop Overview</p>

      <Row gutter={[16, 17]}>
        <Col xs={24} md={12}>
          <Card customClass="BodyShopOverview-project-card">
            <ProjectInfoCard projectId={projectOverview.projectId} />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card customClass="BodyShopOverview-avg-total-audit-score-card">
            <AvgTotalAuditScoreCard
              data={projectOverview.data.bodyShopOverview.avgTotalAuditScore}
            />
          </Card>
        </Col>
      </Row>

      <ProjectScoreCards
        metrics={projectOverview.data.bodyShopOverview.metrics}
      />

      <div className="BodyShopOverview-collapsible-panels-container">
        <Collapse
          onChange={() => {}}
          expandIconPosition="end"
          className="OpenMilestoneModal-collapse"
        >
          <Panel
            header="Notes"
            key="1"
            className="OpenMilestoneModal-collapse-panel"
          >
            <NotesProvider>
              <NotesPanelList />
            </NotesProvider>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
