import React, { useEffect, useState } from "react"
import { TreeSelect } from "antd"
import { useParams } from "react-router-dom"
import { ProjectListItem } from "../../shared/types/Projects"
import useProjectsAPI from "../../services/Projects/useProjectsAPI"

interface MyTreeSelectProps {
  form: any
  nameFor: string
  selectedProjects: string[]
}

interface ProjectIdAndNameInterface {
  title: string
  value: string
}

function MyTreeSelect({ form, nameFor, selectedProjects }: MyTreeSelectProps) {
  const [projectsList, setProjectsList] = useState<ProjectIdAndNameInterface[]>(
    [],
  )
  const [allIds, setAllIds] = useState<string[]>([])
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const { getProjects } = useProjectsAPI()

  const params = useParams()
  const projectId = params.id

  useEffect(() => {
    if (selectedProjects.length > 0 && projectsList.length > 0) {
      const checkedProjects = projectsList
        .filter((projectListItem) =>
          selectedProjects.includes(projectListItem.value),
        )
        .map((projectListItem) => projectListItem.value)

      setSelectedValues(checkedProjects)
    }
  }, [projectsList, selectedProjects])

  useEffect(() => {
    if (projectsList.length > 0) {
      const allIdsArr = projectsList.map(
        ({ value }: ProjectIdAndNameInterface) => value,
      )

      setAllIds(allIdsArr)
    }
  }, [projectsList])

  const onTreeSelectChange = (ids: string[]) => {
    setSelectedValues(ids)

    form.setFieldsValue({ [nameFor]: ids })
  }

  useEffect(() => {
    if (selectedProjects.length > 0) {
      form.setFieldsValue({ [nameFor]: selectedValues })
    }
  }, [form, nameFor, selectedProjects.length, selectedValues])

  const gotProjectsCb = (data: ProjectListItem[]) => {
    const projectsValues = data.map(({ id, name }: ProjectListItem) => ({
      title: name,
      value: id,
    }))

    setProjectsList(projectsValues)
  }

  useEffect(() => {
    getProjects(gotProjectsCb)
  }, [projectId])

  return (
    <TreeSelect
      allowClear
      placeholder="Select..."
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_CHILD}
      dropdownStyle={{ maxHeight: "300px" }}
      onChange={(ids) => onTreeSelectChange(ids)}
      value={selectedValues}
      maxTagCount={2}
      maxTagPlaceholder={(omittedValues) =>
        `+ ${omittedValues.length} Projects ...`
      }
      style={{ width: "517px" }}
      treeData={[
        {
          title:
            selectedValues.length > 0 ? (
              <span
                onClick={() => setSelectedValues([])}
                style={{
                  display: "inline-block",
                  color: "#286FBE",
                  cursor: "pointer",
                }}
                aria-hidden="true"
              >
                Unselect all
              </span>
            ) : (
              <span
                onClick={() => setSelectedValues(allIds)}
                style={{
                  display: "inline-block",
                  color: "#286FBE",
                  cursor: "pointer",
                }}
                aria-hidden="true"
              >
                Select all
              </span>
            ),
          value: "xxx",
          disableCheckbox: true,
          disabled: true,
        },
        ...projectsList,
      ]}
    />
  )
}

interface MultiSelectProjectsProps {
  form: any
  nameFor: string
  selectedProjects: string[]
}

export default function MultiSelectProjects({
  form,
  nameFor,
  selectedProjects,
}: MultiSelectProjectsProps) {
  return (
    <div>
      <MyTreeSelect
        form={form}
        nameFor={nameFor}
        selectedProjects={selectedProjects}
      />
    </div>
  )
}
