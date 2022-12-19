import React, { Fragment, useCallback, useState } from "react"
import { Modal, Button, Row, Col } from "antd"
import { DateTime } from "luxon"
import { uniqueId } from "lodash"
import TasksProgressCard from "../../../Cards/TasksProgressCard"
import TasksProgressBarCard from "../../../Cards/TasksProgressBarCard"
import CircleButton from "../../../CircleButton"
import {
  QualityCheck,
  QualityCheckChecks,
} from "../../../../shared/types/ProjectOverview"

export default function RepairQuality() {
  const [qualityChecks, setQualityChecks] = useState<QualityCheck[]>([])
  const [checkIdToRemove, setCheckIdToRemove] = useState<number>()
  const [isDeleteCheckModalOpen, setIsDeleteCheckModalOpen] =
    useState<boolean>(false)
  const [qualityCheckIdToRemove, setQualityCheckIdToRemove] = useState<number>()
  const [isDeleteSetModalOpen, setIsDeleteSetModalOpen] =
    useState<boolean>(false)

  const onCreateQualityCheckCb = useCallback(() => {
    setQualityChecks([
      ...qualityChecks,
      {
        id: Number(uniqueId()),
        date: DateTime.now().toLocaleString(),
        tasksCompleted: 0,
        totalTasks: 20,
        percent: 10,
        checks: [
          {
            id: Number(uniqueId()),
            title: "Check 1",
            tasksCompleted: 0,
            totalTasks: 20,
            percent: 70.0,
          },
        ],
      },
    ])
  }, [qualityChecks])

  const onCreateCheckCb = useCallback(
    (qualityCheckId: number) => {
      const newQualityChecks = qualityChecks.map(
        ({
          id,
          date,
          tasksCompleted,
          totalTasks,
          percent,
          checks,
        }: QualityCheck) => ({
          id,
          date,
          tasksCompleted,
          totalTasks,
          percent,
          checks:
            qualityCheckId === id
              ? [
                  ...checks,
                  {
                    id: Number(uniqueId()),
                    title: `Check ${checks.length + 1}`,
                    tasksCompleted: 0,
                    totalTasks: 20,
                    percent: 70.0,
                  },
                ]
              : checks,
        }),
      )

      setQualityChecks([...newQualityChecks])
    },
    [qualityChecks],
  )

  const onRemoveCheckCb = useCallback(
    (checkId: number) => {
      setCheckIdToRemove(checkId)
      setIsDeleteCheckModalOpen(true)
    },
    [qualityChecks],
  )

  const onDeleteSet = (qualityCheckId: number) => {
    setQualityCheckIdToRemove(qualityCheckId)
    setIsDeleteSetModalOpen(true)
  }

  return (
    <div className="RepairQuality-container" id="RepairQuality-scroll-id">
      <div className="RepairQuality-heading-container page-section-heading">
        <p>Repair Quality</p>

        <CircleButton
          color="blue"
          longBtnText="Create New Quality Check DATE"
          onClick={onCreateQualityCheckCb}
        />
      </div>

      {qualityChecks.map((qualityCheck: QualityCheck) => (
        <Row className="RepairQuality-row">
          <Col>
            <TasksProgressCard
              date={qualityCheck.date}
              heading="Total Quality Score"
              percent={qualityCheck.percent}
              tasksCompleted={qualityCheck.tasksCompleted}
              totalTasks={qualityCheck.totalTasks}
              customClass="RepairQuality-tasks-progress-card"
            />
          </Col>

          {qualityCheck.checks.map((check: QualityCheckChecks) => (
            <Col key={check.id}>
              <TasksProgressBarCard
                checkId={check.id}
                title={check.title}
                tasksCompleted={check.tasksCompleted}
                totalTasks={check.totalTasks}
                percent={check.percent}
                onRemoveCheck={onRemoveCheckCb}
              />
            </Col>
          ))}

          <Col className="RepairQuality-row-actions-col-wrapper">
            <CircleButton
              qualityCheckId={qualityCheck.id}
              onClick={onCreateCheckCb}
            />

            {qualityCheck.checks.length === 1 ? (
              <CircleButton
                longBtnText="DELETE Set"
                type="delete"
                color="red"
                qualityCheckId={qualityCheck.id}
                onClick={onDeleteSet}
              />
            ) : null}
          </Col>
        </Row>
      ))}

      <Modal
        title={<p className="antd-modal-heading">Confirm Delete</p>}
        centered
        visible={isDeleteCheckModalOpen}
        okText="Delete"
        width={1000}
        closeIcon={
          <i
            onClick={() => setIsDeleteCheckModalOpen(false)}
            className="fa-solid fa-xmark fa-lg antd-modal-close-icon"
            aria-hidden="true"
          />
        }
        footer={
          <>
            <Button
              onClick={() => setIsDeleteCheckModalOpen(false)}
              className="cancel-button"
              shape="round"
              size="large"
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                const newQualityChecks = qualityChecks.map(
                  ({
                    id,
                    date,
                    tasksCompleted,
                    totalTasks,
                    percent,
                    checks,
                  }: QualityCheck) => ({
                    id,
                    date,
                    tasksCompleted,
                    totalTasks,
                    percent,
                    checks: checks.filter(
                      (check: QualityCheckChecks) =>
                        check.id !== checkIdToRemove,
                    ),
                  }),
                )

                setQualityChecks([...newQualityChecks])
                setIsDeleteCheckModalOpen(false)
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
        Are you sure of delete?
      </Modal>

      <Modal
        title={<p className="antd-modal-heading">Confirm Delete</p>}
        centered
        visible={isDeleteSetModalOpen}
        okText="Delete"
        width={1000}
        closeIcon={
          <i
            onClick={() => setIsDeleteSetModalOpen(false)}
            className="fa-solid fa-xmark fa-lg antd-modal-close-icon"
            aria-hidden="true"
          />
        }
        footer={
          <>
            <Button
              onClick={() => setIsDeleteSetModalOpen(false)}
              className="cancel-button"
              shape="round"
              size="large"
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                const newQualityChecks = qualityChecks.filter(
                  (qualityCheck: QualityCheck) =>
                    qualityCheck.id !== qualityCheckIdToRemove,
                )

                setQualityChecks([...newQualityChecks])
                setIsDeleteSetModalOpen(false)
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
        Are you sure of delete?
      </Modal>
    </div>
  )
}
