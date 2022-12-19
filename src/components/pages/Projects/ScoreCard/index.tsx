import React from "react"
import classNames from "classnames"

interface ScoreCardProps {
  tasksCompleted?: number | null
  totalTasks?: number | null
  text: string
  percentage: number
}

function ScoreCard({
  tasksCompleted,
  totalTasks,
  text,
  percentage,
}: ScoreCardProps) {
  return (
    <div
      className={classNames("ScoreCard-container", {
        "ScoreCard-sustainability": text === "Sustainability",
        "ScoreCard-facility-equipment": text === "Facility + Equipment",
        "ScoreCard-business-workshop": text === "Business + Workshop Processes",
        "ScoreCard-repair-quality": text === "Repair Quality",
        "ScoreCard-training": text === "Training",
        "ScoreCard-business-info": text === "Business Information",
      })}
    >
      <div className="ScoreCard-heading">
        {text}

        {tasksCompleted !== null || totalTasks !== null ? (
          <>
            <br />

            <p className="ScoreCard-tasks-completed-text">
              {`${tasksCompleted}/${totalTasks}`} Tasks completed
            </p>
          </>
        ) : null}
      </div>

      <p className="ScoreCard-percentage">{percentage.toFixed(2)}%</p>

      {tasksCompleted !== null || totalTasks !== null ? (
        <p
          className={classNames("ScoreCard-show-tasks-text", {
            "ScoreCard-show-tasks-text-business-information-card":
              text === "Business Information",
          })}
        >
          Show Tasks
        </p>
      ) : null}
    </div>
  )
}

ScoreCard.defaultProps = {
  tasksCompleted: null,
  totalTasks: null,
}

export default ScoreCard
