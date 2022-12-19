import React from "react"
import { Progress } from "antd"
import trendingUp from "./images/trending-up.svg"
import { ProjectListItem } from "../../../../../../shared/types/Projects"

interface ProjectItemScoresProps {
  data: ProjectListItem
}

const showPercentWithText = (percent: number | undefined, text: string) => (
  <div className="ProjectItemScores-progress-content-wrapper">
    <div className="ProjectItemScores-progress-percent">{percent}%</div>

    <p className="ProjectItemScores-progress-text">{text}</p>
  </div>
)

export default function ProjectItemScores({ data }: ProjectItemScoresProps) {
  return (
    <div className="ProjectItemScores-container">
      <div className="ProjectItemScores-last30Day-score">
        <img src={trendingUp} alt="Trending Up" />

        <Progress
          type="circle"
          percent={data.last30daysScore}
          width={96}
          strokeWidth={3}
          strokeColor={data.last30daysScore >= 50 ? "#28a745" : "#be0312"}
          trailColor="#fff"
          format={(percent) =>
            showPercentWithText(percent, "Total Audit Score last 30 days")
          }
        />
      </div>

      <div>
        <Progress
          type="circle"
          percent={data.auditScore}
          width={96}
          strokeWidth={3}
          strokeColor={data.auditScore >= 50 ? "#28a745" : "#be0312"}
          trailColor="#fff"
          format={(percent) =>
            showPercentWithText(percent, "Total Audit Score")
          }
        />
      </div>
    </div>
  )
}
