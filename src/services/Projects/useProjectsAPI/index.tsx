import {
  OverallScores,
  Metrics,
  ProjectListItem,
  MilestonesList,
} from "../../../shared/types/Projects"
import overallScoresData from "../../../util/fakeData/overallScores"
import metricsData from "../../../util/fakeData/metrics"
import projectsData from "../../../util/fakeData/projects"
import milestones from "../../../util/fakeData/milestones"

export default function useProjectsAPI() {
  const getOverallScores = (Cb: (data: OverallScores) => void) =>
    Cb(overallScoresData)

  const getMetrics = (Cb: (data: Metrics) => void) => Cb(metricsData)

  const getProjects = (Cb: (data: ProjectListItem[]) => void) =>
    Cb(projectsData)

  const getProjectById = (id: string, Cb: (data: ProjectListItem) => void) => {
    const projectFound = projectsData.find((project) => project.id === id)

    if (projectFound) {
      Cb(projectFound)
    }
  }

  const editProjectChangeYear = (
    year: string,
    Cb: (data: { [key: string]: any }) => void,
  ) => {
    if (year !== "2020") {
      Cb({
        success: true,
        data: {},
      })
    } else {
      Cb({
        success: false,
        error: "error",
      })
    }
  }

  const getMilestones = (Cb: (data: MilestonesList) => void) => {
    Cb(milestones)
  }

  return {
    getOverallScores,
    getMetrics,
    getProjects,
    getProjectById,
    editProjectChangeYear,
    getMilestones,
  }
}
