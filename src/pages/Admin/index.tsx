import React, { useEffect } from "react"
import AppLayout from "../../components/AppLayout"
import StandardsNewProjects from "../../components/pages/Admin/StandardsNewProjects"
import Currency from "../../components/pages/Admin/Currency"
import Assessments from "../../components/pages/Admin/Assessments"
import WeightsVersioning from "../../components/pages/Admin/WeightsVersioning"
import ProjectSetting from "../../components/pages/Admin/ProjectSetting"

export default function Admin() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <AppLayout secondaryMenu={false}>
      <div>
        <p className="light-heading">System Administration</p>

        <StandardsNewProjects />
        <Currency />
        <Assessments />
        <WeightsVersioning />
        <ProjectSetting />
      </div>
    </AppLayout>
  )
}
