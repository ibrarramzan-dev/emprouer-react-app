import React from "react"
import { Row, Col } from "antd"
import TasksProgressBarCard from "../../../Cards/TasksProgressBarCard"
import facilityEquipment from "../../../../util/fakeData/facilityEquipment"

export default function FacilityEquipment() {
  return (
    <div id="FacilityEquipment-scroll-id">
      <p className="page-section-heading">Facility + Equipment</p>

      <Row gutter={[16, 16]} className="FacilityEquipment-row">
        {Object.keys(facilityEquipment).map((key: string) => {
          const dynamicKey = key as keyof typeof facilityEquipment
          const { title } = facilityEquipment[dynamicKey]

          return (
            <Col key={key}>
              <TasksProgressBarCard
                checkId={3}
                title={title}
                tasksCompleted={2}
                totalTasks={1}
                percent={3}
              />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
