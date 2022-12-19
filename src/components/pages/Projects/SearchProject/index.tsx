import React, { Fragment, useState, useEffect, useCallback } from "react"
import { Row, Col, Modal } from "antd"
import { DateTime } from "luxon"
import _ from "lodash"
import { ProjectListItem } from "../../../../shared/types/Projects"
import useProjectsAPI from "../../../../services/Projects/useProjectsAPI"
import ProjectItem from "./ProjectItem"
import MySelect from "../../../MySelect"
import ThemeSearchBar from "../../../ThemeSearchBar"

export default function SearchProject() {
  const [projects, setProjects] = useState<ProjectListItem[]>([])
  const [searchList, setSearchList] = useState<ProjectListItem[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filterChoice, setFilterChoice] = useState<string>("")
  const [sortChoice, setSortChoice] = useState<string>("")
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [changeYearLoading, setChangeYearLoading] = useState<boolean>(false)
  const { getProjects, editProjectChangeYear } = useProjectsAPI()

  const gotProjectsCb = (data: ProjectListItem[]) => setProjects(data)

  useEffect(() => {
    getProjects(gotProjectsCb)
  }, [])

  const isTextFound = (name: string, address: string) => {
    if (
      name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
      address.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return true
    }

    return false
  }

  const isProjectCurrentYear = (project: ProjectListItem) => {
    const projectStartDate = DateTime.fromISO(project.startDate)

    if (projectStartDate.year === DateTime.now().setZone("CET").year) {
      // make the zone dynamic
      return true
    }

    return false
  }

  const isOlderThan1Year = (project: ProjectListItem) => {
    const projectStartDate = DateTime.fromISO(project.startDate)
    const pastYearDate = DateTime.now().setLocale("de").minus({ years: 1 })

    if (projectStartDate < pastYearDate) {
      return true
    }

    return false
  }

  const searchListWithFilter = (searchListData: ProjectListItem[]) => {
    if (filterChoice === "selectAll") {
      return searchListData
    }

    if (filterChoice === "0PercentDiff") {
      const zeroPercentData = searchListData.filter(
        (project) => project.auditScore - project.last30daysScore === 0,
      )

      return zeroPercentData
    }

    if (filterChoice === "onlyCurrentYear") {
      const currentYearData = searchListData.filter((projectItem) =>
        isProjectCurrentYear(projectItem),
      )

      return currentYearData
    }

    if (filterChoice === "olderThan1Year") {
      const olderThan1YearData = searchListData.filter((projectItem) =>
        isOlderThan1Year(projectItem),
      )

      return olderThan1YearData
    }

    return searchListData
  }

  const searchListWithSort = (searchListData: ProjectListItem[]) => {
    if (sortChoice === "defaultSorting") {
      return projects.filter((project) =>
        isTextFound(project.name, project.address),
      )
    }

    if (sortChoice === "startDate") {
      const startDateData = _.orderBy(
        searchListData,
        [(project: ProjectListItem) => DateTime.fromISO(project.startDate)],
        ["asc"],
      )

      return startDateData
    }

    if (sortChoice === "totalAssessmentScore") {
      const auditScoreData = _.orderBy(searchListData, ["auditScore"], ["desc"])

      return auditScoreData
    }

    if (sortChoice === "plus30DaysHighest") {
      const plus30DaysHighestData = _.orderBy(
        searchListData,
        [
          (project: ProjectListItem) =>
            project.auditScore - project.last30daysScore,
        ],
        ["desc"],
      )

      return plus30DaysHighestData
    }

    return searchListData
  }

  useEffect(() => {
    if (searchQuery !== "" && filterChoice === "" && sortChoice === "") {
      const searchListData = projects.filter((project) =>
        isTextFound(project.name, project.address),
      )

      setSearchList(searchListData)
    }

    if (searchQuery !== "" && filterChoice === "" && sortChoice !== "") {
      const sortedSearch = searchListWithSort(projects)

      const searchListData = sortedSearch.filter((project) =>
        isTextFound(project.name, project.address),
      )

      setSearchList(searchListData)
    }

    if (searchQuery !== "" && filterChoice !== "" && sortChoice === "") {
      const filteredSearch = searchListWithFilter(projects)

      const searchListData = filteredSearch.filter((project) =>
        isTextFound(project.name, project.address),
      )

      setSearchList(searchListData)
    }

    if (searchQuery === "" && filterChoice !== "" && sortChoice === "") {
      const filteredSearch = searchListWithFilter(projects)

      const searchListData = filteredSearch.filter((project) =>
        isTextFound(project.name, project.address),
      )

      setSearchList(searchListData)
    }

    if (searchQuery !== "" && filterChoice !== "" && sortChoice !== "") {
      const textFoundSearchData = projects.filter((project) =>
        isTextFound(project.name, project.address),
      )

      const sortedSearch = searchListWithSort(textFoundSearchData)

      const filteredSearch = searchListWithFilter(sortedSearch)

      setSearchList(filteredSearch)
    }

    if (searchQuery === "" && filterChoice !== "" && sortChoice !== "") {
      const sortedSearch = searchListWithSort(projects)

      const filteredSearch = searchListWithFilter(sortedSearch)

      setSearchList(filteredSearch)
    }

    if (searchQuery === "" && filterChoice === "" && sortChoice === "") {
      const sortedSearch = searchListWithSort(projects)

      const filteredSearch = searchListWithFilter(sortedSearch)

      setSearchList(filteredSearch)
    }
  }, [searchQuery])

  useEffect(() => {
    if (filterChoice === "selectAll") {
      if (searchQuery === "" && sortChoice !== "") {
        const sortedSearch = searchListWithSort(projects)

        const filteredSearch = searchListWithFilter(sortedSearch)

        setSearchList(filteredSearch)
      }

      if (searchQuery !== "" && sortChoice === "") {
        const textFoundSearchData = projects.filter((project) =>
          isTextFound(project.name, project.address),
        )

        const filteredSearch = searchListWithFilter(textFoundSearchData)

        setSearchList(filteredSearch)
      }

      if (searchQuery !== "" && sortChoice !== "") {
        const textFoundSearchData = projects.filter((project) =>
          isTextFound(project.name, project.address),
        )

        const filteredSearch = searchListWithFilter(textFoundSearchData)

        setSearchList(filteredSearch)
      }

      if (searchQuery === "" && sortChoice === "") {
        const searchListData = searchListWithFilter(projects)

        setSearchList(searchListData)
      }
    } else if (filterChoice === "0PercentDiff") {
      if (searchQuery === "" && sortChoice !== "") {
        const sortedSearch = searchListWithSort(projects)

        const filteredSearch = searchListWithFilter(sortedSearch)

        setSearchList(filteredSearch)
      }

      if (searchQuery !== "" && sortChoice === "") {
        const textFoundSearchData = projects.filter((project) =>
          isTextFound(project.name, project.address),
        )

        const filteredSearch = searchListWithFilter(textFoundSearchData)

        setSearchList(filteredSearch)
      }

      if (searchQuery !== "" && sortChoice !== "") {
        const textFoundSearchData = projects.filter((project) =>
          isTextFound(project.name, project.address),
        )

        const filteredSearch = searchListWithFilter(textFoundSearchData)

        setSearchList(filteredSearch)
      }

      if (searchQuery === "" && sortChoice === "") {
        const searchListData = searchListWithFilter(projects)

        setSearchList(searchListData)
      }
    } else if (filterChoice === "olderThan1Year") {
      if (searchQuery === "" && sortChoice !== "") {
        const sortedSearch = searchListWithSort(projects)

        const filteredSearch = searchListWithFilter(sortedSearch)

        setSearchList(filteredSearch)
      }

      if (searchQuery !== "" && sortChoice === "") {
        const textFoundSearchData = projects.filter((project) =>
          isTextFound(project.name, project.address),
        )

        const filteredSearch = searchListWithFilter(textFoundSearchData)

        setSearchList(filteredSearch)
      }

      if (searchQuery === "" && sortChoice === "") {
        const filteredSearch = searchListWithFilter(projects)

        setSearchList(filteredSearch)
      }

      if (searchQuery !== "" && sortChoice !== "") {
        const textFoundSearchData = projects.filter((project) =>
          isTextFound(project.name, project.address),
        )

        const sortedSearch = searchListWithSort(textFoundSearchData)

        const filteredSearch = searchListWithFilter(sortedSearch)

        setSearchList(filteredSearch)
      }
    } else if (filterChoice === "onlyCurrentYear") {
      if (searchQuery === "" && sortChoice !== "") {
        const sortedSearch = searchListWithSort(projects)

        const filteredSearch = searchListWithFilter(sortedSearch)

        setSearchList(filteredSearch)
      }

      if (searchQuery !== "" && sortChoice === "") {
        const textFoundSearchData = projects.filter((project) =>
          isTextFound(project.name, project.address),
        )

        const filteredSearch = searchListWithFilter(textFoundSearchData)

        setSearchList(filteredSearch)
      }

      if (searchQuery === "" && sortChoice === "") {
        const filteredSearch = searchListWithFilter(projects)

        setSearchList(filteredSearch)
      }

      if (searchQuery !== "" && sortChoice !== "") {
        const textFoundSearchData = projects.filter((project) =>
          isTextFound(project.name, project.address),
        )

        const sortedSearch = searchListWithSort(textFoundSearchData)

        const filteredSearch = searchListWithFilter(sortedSearch)

        setSearchList(filteredSearch)
      }
    }
  }, [filterChoice])

  useEffect(() => {
    if (searchQuery === "" && filterChoice !== "") {
      const sortedSearch = searchListWithSort(projects)

      const filteredSearch = searchListWithFilter(sortedSearch)

      setSearchList(filteredSearch)
    }

    if (searchQuery === "" && filterChoice === "") {
      const sortedSearch = searchListWithSort(projects)

      setSearchList(sortedSearch)
    }

    if (searchQuery !== "" && filterChoice === "") {
      const sortedSearch = searchListWithSort(searchList)

      setSearchList(sortedSearch)
    }

    if (searchQuery !== "" && filterChoice !== "") {
      const sortedSearch = searchListWithSort(searchList)

      setSearchList(sortedSearch)
    }
  }, [sortChoice])

  const onSearchChange = (val: string) => {
    setSearchQuery(val)
  }

  const deleteProjectClick = (id: string) => {
    // api request

    const newProjects = projects.filter((project) => project.id !== id)

    setProjects(newProjects)

    if (searchList.length > 0) {
      const newSearchList = searchList.filter((project) => project.id !== id)

      setSearchList(newSearchList)
    }
  }

  const onEditProjectYearChangeCb = (res: { [key: string]: number }) => {
    if (res.success) {
      setIsModalOpen(false)

      setChangeYearLoading(false)
    } else {
      setChangeYearLoading(false)
    }
  }

  const onEditProjectYearChange = useCallback(
    (val: string) => {
      setChangeYearLoading(true)

      editProjectChangeYear(val, onEditProjectYearChangeCb)
    },
    [editProjectChangeYear],
  )

  return (
    <div className="SearchProject-container">
      <div className="SearchProject-search-sort-filter">
        <Row gutter={[15, 10]}>
          <Col xs={24} md={14}>
            <div className="SearchProject-search">
              <ThemeSearchBar
                placeholder="Search for Keyword, Body Shop Name, ..."
                onSearchChange={onSearchChange}
              />
            </div>
          </Col>

          <Col xs={12} md={5}>
            <div className="SearchProject-dropdown">
              <MySelect
                defaultValue="Select All"
                onChange={(val) => setFilterChoice(val)}
                data={[
                  {
                    value: "selectAll",
                    title: "Select All",
                  },
                  {
                    value: "0PercentDiff",
                    title: "0% difference",
                  },
                  {
                    value: "olderThan1Year",
                    title: "Older than 1 year",
                  },
                  {
                    value: "onlyCurrentYear",
                    title: "Only current year",
                  },
                ]}
              />
            </div>
          </Col>

          <Col xs={12} md={5}>
            <div className="SearchProject-dropdown">
              <MySelect
                defaultValue="Select Sorting"
                onChange={(val) => setSortChoice(val)}
                data={[
                  {
                    value: "defaultSorting",
                    title: "Default Sorting",
                  },
                  {
                    value: "startDate",
                    title: "Start Date",
                  },
                  {
                    value: "totalAssessmentScore",
                    title: "Total Assessment Score",
                  },
                  {
                    value: "plus30DaysHighest",
                    title: "+30 days +/-",
                  },
                ]}
              />
            </div>
          </Col>
        </Row>
      </div>

      <div className="SearchProject-projects-list">
        {searchQuery === "" && searchList.length === 0
          ? projects.map((project) => (
              <Fragment key={project.id}>
                <ProjectItem
                  data={project}
                  onAction={{
                    openModal: setIsModalOpen,
                    deleteProjectClick,
                  }}
                />
              </Fragment>
            ))
          : null}

        {searchList.length > 0
          ? searchList.map((project) => (
              <Fragment key={project.id}>
                <ProjectItem
                  data={project}
                  onAction={{
                    openModal: setIsModalOpen,
                    deleteProjectClick,
                  }}
                />
              </Fragment>
            ))
          : null}
      </div>

      <Modal
        title={
          <p className="antd-modal-heading">
            Banaz Otomotiv Petrol Urunleri Insaat Sanayi ve Ticaret A.S. (Skoda)
          </p>
        }
        centered
        visible={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        width={1000}
        footer={null}
        closeIcon={
          <i
            onClick={() => setIsModalOpen(false)}
            className="fa-solid fa-xmark fa-lg antd-modal-close-icon"
            aria-hidden="true"
          />
        }
        afterClose={() => {}} // use if needed for after modal close functionality OR else delete
      >
        <div className="SearchProject-edit-project-modal-dropdown">
          <MySelect
            defaultValue="2022"
            onChange={onEditProjectYearChange}
            data={[
              {
                value: "2022",
                title: "2022",
              },
              {
                value: "2021",
                title: "2021",
              },
              {
                value: "2020",
                title: "2020",
              },
            ]}
            loading={changeYearLoading}
          />
        </div>
      </Modal>
    </div>
  )
}
