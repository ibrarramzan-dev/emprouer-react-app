import React from "react"
import { Progress } from "antd"
import Card from "../Card"

interface TasksProgressCardProps {
  date?: string
  heading: string
  tasksCompleted: number
  totalTasks: number
  percent: number
  customClass: string
}

export default function TasksProgressCard({
  date,
  heading,
  tasksCompleted,
  totalTasks,
  percent,
  customClass,
}: TasksProgressCardProps) {
  return (
    <div>
      <Card customClass={customClass}>
        <div>
          {date !== undefined ? (
            <p className="TasksProgressCard-heading">{date}</p>
          ) : null}

          <p className="TasksProgressCard-heading TasksProgressCard-text-heading">
            {heading}
          </p>

          <p className="Training-training-card-sub-heading">
            {tasksCompleted}/{totalTasks} Tasks completed
          </p>

          <div className="TasksProgressCard-progress">
            <Progress
              type="circle"
              percent={percent}
              width={150}
              strokeWidth={14}
              strokeColor="#1cc435"
              trailColor="#fff"
              strokeLinecap="square"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}

TasksProgressCard.defaultProps = {
  date: "",
}
