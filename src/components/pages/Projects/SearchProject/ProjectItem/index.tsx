import React from "react"
import { Row, Col } from "antd"
import {
  ProjectListItem,
  ProjectActionPropInterface,
} from "../../../../../shared/types/Projects"
import ProjectItemInfo from "./ProjectItemInfo"
import ProjectItemScores from "./ProjectItemScores"
import ProjectItemActions from "./ProjectItemActions"

interface ProjectItemProps {
  data: ProjectListItem
  onAction: ProjectActionPropInterface
}

export default function ProjectItem({ data, onAction }: ProjectItemProps) {
  return (
    <div className="ProjectItem-container">
      <Row gutter={[4, 28]}>
        <Col xs={24} sm={14} md={16} lg={17} xl={17} xxl={19}>
          <ProjectItemInfo data={data} />
        </Col>

        <Col xs={24} sm={10} md={8} lg={7} xl={7} xxl={5}>
          <ProjectItemScores data={data} />
        </Col>
      </Row>

      <ProjectItemActions data={data} onAction={onAction} />
    </div>
  )
}
