import React from "react"
import classNames from "classnames"

interface CardProps {
  children: JSX.Element
  customClass?: string | undefined
}

export default function Card({ children, customClass }: CardProps) {
  return (
    <div
      className={classNames("Card-container", {
        "BodyShopOverview-project-card": customClass !== undefined,
        "BusinessAnalytics-cards": customClass === "BusinessAnalytics-cards",
        "Training-training-card": customClass === "Training-training-card",
        "TrainingReportCard-card-container":
          customClass === "TrainingReportCard-card-container",
        "RepairQuality-tasks-progress-card":
          customClass === "RepairQuality-tasks-progress-card",
        "TasksProgressBarCard-card":
          customClass === "TasksProgressBarCard-card",
        "Training-tasks-progress-card":
          customClass === "Training-tasks-progress-card",
      })}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  customClass: "",
}
