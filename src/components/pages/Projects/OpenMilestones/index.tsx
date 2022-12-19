import React, { useState, useEffect } from "react"
import useProjectsAPI from "../../../../services/Projects/useProjectsAPI"
import { MilestonesList, Milestones } from "../../../../shared/types/Projects"
import OpenMilestoneModal from "./OpenMilestoneModal"

export default function OpenMilestones() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [heading, setHeading] = useState<string>("")
  const [milestones, setMilestones] = useState<MilestonesList>({
    total: 0,
    lateMilestones: [],
    startedMilestones: [],
    todayMilestones: [],
    upcomingMilestones: [],
    noDateMilestones: [],
  })
  const [milestonesModal, setMilestonesModal] = useState<Milestones[]>([])
  const [milestoneItems, setMilestoneItems] = useState<number>(0)

  const { getMilestones } = useProjectsAPI()

  const gotMilestones = (data: MilestonesList) => {
    setMilestones(data)
  }

  useEffect(() => {
    getMilestones(gotMilestones)
  }, [])

  const showTotalMilestoneItems = (milestonesProjects: Milestones[]) => {
    let sum = 0

    milestonesProjects.forEach((milestonesProject) => {
      sum += milestonesProject.milestones.length
    })

    return sum
  }

  const onLateMilestonesClick = () => {
    setIsModalOpen(true)
    setHeading("Late Milestones")
    setMilestonesModal(milestones.lateMilestones)
    setMilestoneItems(showTotalMilestoneItems(milestones.lateMilestones))
  }

  const onStartedMilestonesClick = () => {
    setIsModalOpen(true)
    setHeading("Started Milestones")
    setMilestonesModal(milestones.startedMilestones)
    setMilestoneItems(showTotalMilestoneItems(milestones.startedMilestones))
  }

  const onTodayMilestonesClick = () => {
    setIsModalOpen(true)
    setHeading("Today Milestones")
    setMilestonesModal(milestones.todayMilestones)
    showTotalMilestoneItems(milestones.todayMilestones)
    setMilestoneItems(showTotalMilestoneItems(milestones.startedMilestones))
  }

  const onUpcomingMilestonesClick = () => {
    setIsModalOpen(true)
    setHeading("Upcoming Milestones")
    setMilestonesModal(milestones.upcomingMilestones)
    showTotalMilestoneItems(milestones.upcomingMilestones)
    setMilestoneItems(showTotalMilestoneItems(milestones.upcomingMilestones))
  }

  const onNoDateMilestonesClick = () => {
    setIsModalOpen(true)
    setHeading("No Date Milestones")
    setMilestonesModal(milestones.noDateMilestones)
    showTotalMilestoneItems(milestones.noDateMilestones)
    setMilestoneItems(showTotalMilestoneItems(milestones.noDateMilestones))
  }

  return (
    <div className="OpenMilestones-container">
      <p className="OpenMilestones-heading">Open Milestones</p>

      <div className="OpenMilestones-row OpenMilestones-all-milestone">
        <div>All Milestone</div>

        <div>{milestones.total}</div>
      </div>

      <div className="OpenMilestones-row">
        <div>Late</div>

        <div>
          <u onClick={onLateMilestonesClick} aria-hidden="true">
            {showTotalMilestoneItems(milestones.lateMilestones)}
          </u>
        </div>
      </div>
      <div className="OpenMilestones-row">
        <div>Started</div>

        <div>
          <u onClick={onStartedMilestonesClick} aria-hidden="true">
            {showTotalMilestoneItems(milestones.startedMilestones)}
          </u>
        </div>
      </div>

      <div className="OpenMilestones-row">
        <div>Today</div>

        <div>
          <u onClick={onTodayMilestonesClick} aria-hidden="true">
            {showTotalMilestoneItems(milestones.todayMilestones)}
          </u>
        </div>
      </div>

      <div className="OpenMilestones-row">
        <div>Upcoming</div>

        <div>
          <u onClick={onUpcomingMilestonesClick} aria-hidden="true">
            {showTotalMilestoneItems(milestones.upcomingMilestones)}
          </u>
        </div>
      </div>

      <div className="OpenMilestones-row">
        <div>No Date</div>

        <div>
          <u onClick={onNoDateMilestonesClick} aria-hidden="true">
            {showTotalMilestoneItems(milestones.noDateMilestones)}
          </u>
        </div>
      </div>

      <OpenMilestoneModal
        isModalOpen={isModalOpen}
        openModal={setIsModalOpen}
        heading={heading}
        data={milestonesModal}
        total={milestoneItems}
      />
    </div>
  )
}
