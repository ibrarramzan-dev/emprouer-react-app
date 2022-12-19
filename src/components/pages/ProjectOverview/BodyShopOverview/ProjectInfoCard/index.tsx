import React, { useState, useEffect } from "react"
import projectThumbnail from "../images/project-thumbnail.png"
import { ProjectListItem } from "../../../../../shared/types/Projects"
import useProjectsAPI from "../../../../../services/Projects/useProjectsAPI"

interface ProjectInfoCardProps {
  projectId: string
}

export default function ProjectInfoCard({ projectId }: ProjectInfoCardProps) {
  const [project, setProject] = useState<ProjectListItem>({
    id: "0",
    name: "",
    address: "",
    img: "",
    startDate: "",
    endDate: "",
    auditScore: 0,
    last30daysScore: 0,
  })

  const { getProjectById } = useProjectsAPI()

  const gotProject = (projectItem: ProjectListItem) => {
    setProject(projectItem)
  }

  useEffect(() => {
    getProjectById(projectId, gotProject)
  }, [])

  return (
    <div className="ProjectInfoCard-container">
      <div className="ProjectInfoCard-content-wrapper">
        <div className="ProjectInfoCard-project-thumnail-wrapper">
          <img src={projectThumbnail} alt="Project Thumbnail" />
        </div>

        <div>
          <p className="ProjectInfoCard-project-name">{project.name}</p>
          <p>{project.address}</p>
        </div>
      </div>
    </div>
  )
}
