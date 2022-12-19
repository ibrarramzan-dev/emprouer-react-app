import React, { useState, useEffect } from "react"
import { Row, Col, Progress } from "antd"
import { OverallScores, Metrics } from "../../shared/types/Projects"
import useProjectsAPI from "../../services/Projects/useProjectsAPI"
import AppLayout from "../../components/AppLayout"
import ScoreCard from "../../components/pages/Projects/ScoreCard"
import OpenMilestones from "../../components/pages/Projects/OpenMilestones"
import CountCard from "../../components/pages/Projects/CountCard"
import SearchProject from "../../components/pages/Projects/SearchProject"

export default function Projects() {
  const [overallScores, setOverallScores] = useState<OverallScores>({
    totalAssessmentScore: 0,
    otherScores: [],
  })

  const [metrics, setMetrics] = useState<Metrics>({
    shops: 0,
    kpi: 0,
  })

  const { getOverallScores, getMetrics } = useProjectsAPI()

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const gotOverallScores = (data: OverallScores) => setOverallScores(data)

  useEffect(() => getOverallScores(gotOverallScores), [])

  const gotMetrics = (data: Metrics) => setMetrics(data)

  useEffect(() => getMetrics(gotMetrics), [])

  const showAvgAssessmentScore = (percent: number | undefined) => (
    <p className="Projects-avg-assessment-score-percentage">{percent}%</p>
  )

  return (
    <AppLayout secondaryMenu={false}>
      <div className="Projects-container">
        <p className="page-section-heading">Projects</p>

        <Row gutter={28}>
          <Col xs={24} sm={24} md={6} lg={6} xxl={4}>
            <div className="Projects-avg-assessment-score-container">
              <p className="Projects-avg-assessment-score-heading">
                Avg. Total Assessment Score
              </p>

              <div className="Projects-avg-assessment-score">
                <Progress
                  type="circle"
                  percent={overallScores.totalAssessmentScore}
                  width={150}
                  strokeWidth={14}
                  strokeColor={
                    overallScores.totalAssessmentScore >= 50
                      ? "#28a745"
                      : "#be0312"
                  }
                  trailColor="#fff"
                  strokeLinecap="square"
                  format={(percent) => showAvgAssessmentScore(percent)}
                />
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={18} lg={18} xxl={16}>
            <Row gutter={[18, 17]} className="Projects-score-cards-row">
              {overallScores.otherScores.map((otherScore) => (
                <Col xs={14} sm={8} key={otherScore.name}>
                  <ScoreCard
                    text={otherScore.name}
                    percentage={otherScore.score}
                  />
                </Col>
              ))}
            </Row>
          </Col>

          <Col xs={24} md={24} xxl={4}>
            <OpenMilestones />
          </Col>
        </Row>

        <Row gutter={32} className="Projects-count-cards-and-map-container">
          <Col xs={24} xxl={4}>
            <Row gutter={[16, 16]}>
              <Col xs={12} xxl={24}>
                <CountCard heading="Number of Shops" count={metrics.shops} />
              </Col>

              <Col xs={12} xxl={24}>
                <CountCard heading="Providing KPI Data" count={metrics.kpi} />
              </Col>
            </Row>
          </Col>

          <Col xs={24} xxl={19}>
            <div className="Projects-map-container">Map placeholder</div>
          </Col>
        </Row>

        <SearchProject />
      </div>
    </AppLayout>
  )
}
