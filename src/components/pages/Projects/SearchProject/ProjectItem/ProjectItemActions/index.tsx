import React, { useState } from "react"
import { DeleteOutlined } from "@ant-design/icons"
import { Modal, Button } from "antd"
import {
  ProjectListItem,
  ProjectActionPropInterface,
} from "../../../../../../shared/types/Projects"

interface ProjectItemActionsProps {
  data: ProjectListItem
  onAction: ProjectActionPropInterface
}

// ---------- data prop will be used later so unused for now
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProjectItemActions({
  data,
  onAction,
}: ProjectItemActionsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="ProjectItemActions-container">
      <div>
        <i
          onClick={() => onAction.openModal(true)}
          className="fa-solid fa-pencil"
          title="Edit"
          aria-hidden="true"
        />
      </div>

      <div className="ProjectItemActions-delete-icon">
        <DeleteOutlined onClick={() => setIsModalOpen(true)} title="Remove" />
      </div>

      <Modal
        title={<p className="antd-modal-heading">Confirm Delete</p>}
        centered
        visible={isModalOpen}
        okText="Delete"
        width={1000}
        closeIcon={
          <i
            onClick={() => setIsModalOpen(false)}
            className="fa-solid fa-xmark fa-lg antd-modal-close-icon"
            aria-hidden="true"
          />
        }
        footer={
          <>
            <Button
              onClick={() => setIsModalOpen(false)}
              className="cancel-button"
              shape="round"
              size="large"
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                setIsModalOpen(false)
                onAction.deleteProjectClick(data.id)
              }}
              className="danger-button"
              shape="round"
              size="large"
            >
              Confirm
            </Button>
          </>
        }
      >
        <p>
          Are you sure to delete project <b>{data.name}</b>?
        </p>
      </Modal>
    </div>
  )
}
