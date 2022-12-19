import React from "react"
import { Progress } from "antd"
import { AvgTotalAuditScore } from "../../../../../shared/types/ProjectOverview"

interface AvgTotalAuditScoreCardProps {
  data: AvgTotalAuditScore
}

export default function AvgTotalAuditScoreCard({
  data,
}: AvgTotalAuditScoreCardProps) {
  const showAvgTotalAuditScore = (percent: number | undefined) => (
    <p className="AvgTotalAuditScoreCard-avg-total-audit-score-percentage">
      {percent}%
    </p>
  )

  return (
    <div className="AvgTotalAuditScoreCard-container">
      <p className="AvgTotalAuditScoreCard-heading">Avg. Total Audit Score</p>
      <p className="AvgTotalAuditScoreCard-tasks-completed-text">
        {`${data.tasksCompleted}/${data.totalTasks}`} Tasks completed
      </p>

      <div className="AvgTotalAuditScoreCard-progress-wrapper">
        <Progress
          type="circle"
          percent={data.score}
          width={150}
          strokeWidth={14}
          strokeColor={data.score > 50 ? "#28a745" : "#be0312"}
          trailColor="#fff"
          strokeLinecap="square"
          format={(percent) => showAvgTotalAuditScore(percent)}
        />
      </div>

      <p className="AvgTotalAuditScoreCard-show-tasks-text">Show Tasks</p>
    </div>
  )
}
