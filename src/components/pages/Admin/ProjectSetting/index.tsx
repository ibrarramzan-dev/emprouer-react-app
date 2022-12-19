import React, { useState, useEffect } from "react"
import { Card } from "antd"
import classNames from "classnames"
import ChangeProfilePicture from "./ChangeProfilePicture"
import ProjectSettingField from "./ProjectSettingField"

export default function ProjectSetting() {
  const [changeOccurred, setChangeOccurred] = useState<boolean>(false)
  const [projectNameChanged, setProjectNameChanged] = useState<boolean>(false)
  const [projectAddressChanged, setProjectAddressChanged] =
    useState<boolean>(false)

  const onInputFieldChange = (name: string, val: string) => {
    if (name === "projectName") {
      if (val === "") {
        setProjectNameChanged(false)
      } else {
        setProjectNameChanged(true)
      }
    }

    if (name === "projectAddress") {
      if (val === "") {
        setProjectAddressChanged(false)
      } else {
        setProjectAddressChanged(true)
      }
    }
  }

  useEffect(() => {
    if (projectNameChanged || projectAddressChanged) {
      setChangeOccurred(true)
    } else {
      setChangeOccurred(false)
    }
  }, [projectNameChanged, projectAddressChanged])

  const onPictureChange = () => setChangeOccurred(true)

  return (
    <div className="ProjectSetting-container">
      <Card
        title={
          <div>
            <p>Project Setting</p>
            <p className="card-sub-heading">
              You can change your project name, project address, project image
            </p>
          </div>
        }
        extra={
          <div className="ProjectSetting-save-icon-container" title="save">
            <i
              className={classNames(
                "fa-solid fa-floppy-disk ProjectSetting-save-icon",
                {
                  "ProjectSetting-save-icon-disabled": !changeOccurred,
                },
              )}
            />
          </div>
        }
        className="ProjectSetting-card"
      >
        <ChangeProfilePicture onPictureChange={onPictureChange} />

        <ProjectSettingField
          label="Project Name"
          name="projectName"
          onInputFieldChange={onInputFieldChange}
        />
        <ProjectSettingField
          label="Project Address"
          name="projectAddress"
          onInputFieldChange={onInputFieldChange}
        />
      </Card>
    </div>
  )
}
