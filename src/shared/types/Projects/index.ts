interface OtherScores {
  name: string
  score: number
}

export interface OverallScores {
  totalAssessmentScore: number
  otherScores: OtherScores[]
}

export interface Metrics {
  shops: number
  kpi: number
}

export interface ProjectListItem {
  id: string
  name: string
  address: string
  img: string
  startDate: string
  endDate: string
  auditScore: number
  last30daysScore: number
}

export interface ProjectActionPropInterface {
  openModal: React.Dispatch<React.SetStateAction<boolean>>
  deleteProjectClick: (id: string) => void
}

export interface MilestoneItem {
  id: number
  name: string
  description: string
  startDate: string
  endDate: string
}

export interface Milestones {
  id: number
  projectName: string
  milestones: MilestoneItem[]
}

export interface MilestonesList {
  total: number
  lateMilestones: Milestones[]
  startedMilestones: Milestones[]
  todayMilestones: Milestones[]
  upcomingMilestones: Milestones[]
  noDateMilestones: Milestones[]
}
