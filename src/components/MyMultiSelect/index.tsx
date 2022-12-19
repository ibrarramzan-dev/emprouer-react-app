import React, { useEffect, useState } from "react"
import { TreeSelect } from "antd"
import { useParams } from "react-router-dom"
import { User } from "../../shared/types/Users"
import useUsersAPI from "../../services/useUsersAPI"

interface MyTreeSelectProps {
  form: any
  nameFor: string
  selectedUsers: User[]
}

interface UserIdAndNameInterface {
  title: string
  value: string
}

function MyTreeSelect({ form, nameFor, selectedUsers }: MyTreeSelectProps) {
  const [usersList, setUsersList] = useState<UserIdAndNameInterface[]>([])
  const [allIds, setAllIds] = useState<string[]>([])
  const [selectedValues, setSelectedValues] = useState<string[]>([])

  const { getUsersByProjectId } = useUsersAPI()

  const params = useParams()
  const projectId = params.id

  useEffect(() => {
    const selectedUsersValues = selectedUsers.map(
      ({ userId, username }: User) => ({
        title: username,
        value: userId,
      }),
    )

    const selectedUsersIds = selectedUsersValues.map(
      (user: UserIdAndNameInterface) => user.value,
    )

    setSelectedValues(selectedUsersIds)
    setUsersList(selectedUsersValues)
  }, [selectedUsers])

  useEffect(() => {
    if (usersList.length > 0) {
      const allIdsArr = usersList.map(
        ({ value }: UserIdAndNameInterface) => value,
      )

      setAllIds(allIdsArr)
    }
  }, [usersList])

  const onTreeSelectChange = (ids: string[]) => {
    setSelectedValues(ids)

    form.setFieldsValue({ [nameFor]: ids })
  }

  useEffect(() => {
    if (selectedUsers.length > 0) {
      form.setFieldsValue({ [nameFor]: selectedValues })
    }
  }, [form, nameFor, selectedUsers.length, selectedValues])

  const gotUsersByProjectIdCb = (data: User[]) => {
    const usersValues = data.map(({ userId, username }: User) => ({
      title: username,
      value: userId,
    }))

    setUsersList(usersValues)
  }

  useEffect(() => {
    if (selectedUsers.length === 0) {
      getUsersByProjectId(`${projectId}`, gotUsersByProjectIdCb)
    }
  }, [projectId, selectedUsers])

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
        `+ ${omittedValues.length} Users ...`
      }
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
        ...usersList,
      ]}
    />
  )
}

interface MyMultiSelectProps {
  form: any
  nameFor: string
  selectedUsers: User[]
}

export default function MyMultiSelect({
  form,
  nameFor,
  selectedUsers,
}: MyMultiSelectProps) {
  return (
    <div>
      <MyTreeSelect
        form={form}
        nameFor={nameFor}
        selectedUsers={selectedUsers}
      />
    </div>
  )
}
