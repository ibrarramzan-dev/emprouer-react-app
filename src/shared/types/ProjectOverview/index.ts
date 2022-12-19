// BodyShop Overview
export interface AvgTotalAuditScore {
  score: number
  tasksCompleted: number
  totalTasks: number
}

interface MetricItem {
  tasksCompleted: number
  totalTasks: number
  score: number
}

export interface Metrics {
  sustainability: MetricItem
  facilityEquipment: MetricItem
  businessWorkshopProcesses: MetricItem
  repairQuality: MetricItem
  training: MetricItem
  businessInformation: MetricItem
}

interface BodyShopOverview {
  avgTotalAuditScore: AvgTotalAuditScore
  metrics: Metrics
}

export interface ProjectOverviewData {
  bodyShopOverview: BodyShopOverview
}

export interface ProjectOverview {
  projectId: string
  data: ProjectOverviewData
}

export interface NotesItemTaggedUser {
  userId: string
  name: string
}

export interface NotesItem {
  id: string
  title: string
  contentHtml: string
  notifiedUsers: NotesItemTaggedUser[]
  visibleToUsers: NotesItemTaggedUser[]
  lastEdit: string
  editor: string
}

// Business Analytics
interface AdminStaff {
  manager: number
  officeManager: number
  reception: number
  estimator: number
  productionManager: number
  partsManager: number
  detailer: number
}

interface ProductionStaff {
  bodyShopForeman: number
  removePlusRefitTechnician: number
  bodyShopTechnician: number
  bodyShopApprentice: number
  mechanicTechnicians: number
  paintShopForeman: number
  paintPreparationTechnicians: number
  paintShopTechnicianApplication: number
  paintShopTechnicianColorMatch: number
  paintShopApprentice: number
  polisher: number
}

interface WorkingHours {
  mon: number
  tue: number
  wed: number
  thu: number
  fri: number
  sat: number
  sun: number
}

interface ProductiveStaffRatioData {
  adminStaff: AdminStaff
  totalAdminStaff: number
  productionStaff: ProductionStaff
  totalProductiveStaff: number
  workingHours: WorkingHours
  productiveStaffRatio: string
  paintShopTechniciansRatio: string
}

interface ProductiveStaffRatioInfo {
  productiveStaffRatio: string
  paintShopTechniciansRatio: string
}

export interface ProductiveStaffRatio {
  data: ProductiveStaffRatioData
  info: ProductiveStaffRatioInfo
}

interface FacilityCapacityData {
  estimatingBays: number
  mechanicalBays: number
  dedicatedRemovePlusRefitBays: number
  lightRepairBays: number
  heavyRepairBays: number
  dedicatedAluminiumBays: number
  standardPreparationBays: number
  semiDowndraftPreparationBays: number
  fullDowndraftPreparationBays: number
  maskingBays: number
  combiSprayBoothStandard: number
  combiSprayBoothInfrared: number
  sprayBoothSeparateDrying: number
  polishingBays: number
  washBays: number
}

interface FacilityCapacityInfo {
  currentAverageJobValueIn: number
  currentAvgJobValue: number
  currentAvgWeeklyJobs: number
  projectedWeeklyJobs: number
  weeklyRevenueGrowthOpportunity: number
}

export interface FacilityCapacity {
  data: FacilityCapacityData
  info: FacilityCapacityInfo
}

// Repair Quality
export interface QualityCheckChecks {
  id: number
  title: string
  tasksCompleted: number
  totalTasks: number
  percent: number
}

export interface QualityCheck {
  id: number
  date: string
  tasksCompleted: number
  totalTasks: number
  percent: number
  checks: QualityCheckChecks[]
}
