import React from "react"
import { Link } from "react-router-dom"
import startDateIcon from "./images/start-date.svg"
import endDateIcon from "./images/end-date.svg"
import { ProjectListItem } from "../../../../../../shared/types/Projects"

interface ProjectItemInfoProps {
  data: ProjectListItem
}

export default function ProjectItemInfo({ data }: ProjectItemInfoProps) {
  const { name, address, startDate, endDate } = data

  return (
    <div className="ProjectItemInfo-container">
      <div className="ProjectItemInfo-img">
        <img src={data.img} alt={data.name} />
      </div>

      <div className="ProjectItemInfo-text-info">
        <Link to={`/project/${data.id}/overview`}>
          <p className="ProjectItemInfo-name">{name}</p>
        </Link>

        <p>{address}</p>

        <div className="ProjectItemInfo-dates">
          <span>
            <img src={startDateIcon} alt="Start date: " />{" "}
          </span>

          <span className="ProjectItemInfo-date-text">
            {startDate.split("T")[0]}
          </span>

          <span className="ProjectItemInfo-end-date-icon">
            <img src={endDateIcon} alt="End date: " />{" "}
          </span>

          <span className="ProjectItemInfo-date-text">
            {endDate.split("T")[0]}
          </span>
        </div>
      </div>
    </div>
  )
}
