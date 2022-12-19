import React from "react"
import { Collapse, Modal } from "antd"
import { Milestones } from "../../../../../shared/types/Projects"
import MilestoneListItem from "./MilestoneListItem"

interface OpenMilestoneModalProps {
  isModalOpen: boolean
  openModal: React.Dispatch<React.SetStateAction<boolean>>
  heading: string
  data: Milestones[]
  total: number
}

const { Panel } = Collapse

export default function OpenMilestoneModal({
  isModalOpen,
  openModal,
  heading,
  data,
  total,
}: OpenMilestoneModalProps) {
  // ---------- key prop will be used later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onChange = (key: string | string[]) => {}

  return (
    <Modal
      title={<p className="antd-modal-heading">{heading}</p>}
      centered
      visible={isModalOpen}
      onOk={() => openModal(false)}
      onCancel={() => openModal(false)}
      width={1000}
      footer={null}
      closeIcon={
        <i className="fa-solid fa-xmark fa-lg antd-modal-close-icon" />
      }
    >
      <div>
        <p className="OpenMilestoneModal-total-text">
          Total {heading}:{" "}
          <b className="OpenMilestoneModal-total-count">{total}</b>
        </p>
        
        <Collapse
          defaultActiveKey={["1"]}
          onChange={onChange}
          bordered={false}
          expandIconPosition="right"
          className="OpenMilestoneModal-collapse"
        >
          {data.map((milestonesProject) => (
            <Panel
              header={
                <div>
                  <b>{milestonesProject.projectName} </b>
                  <i className="fa-solid fa-arrow-up-right-from-square fa-xs OpenMilestoneModal-panel-project-share-icon" />
                </div>
              }
              key={milestonesProject.id}
              className="OpenMilestoneModal-collapse-panel"
            >
              {milestonesProject.milestones.map((milestone) => (
                <MilestoneListItem data={milestone} />
              ))}
            </Panel>
          ))}
        </Collapse>
      </div>
    </Modal>
  )
}
