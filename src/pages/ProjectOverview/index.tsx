import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { scroller } from "react-scroll"
import AppLayout from "../../components/AppLayout"
import BodyShopOverview from "../../components/pages/ProjectOverview/BodyShopOverview"
import BusinessAnalytics from "../../components/pages/ProjectOverview/BusinessAnalytics"
import FacilityEquipment from "../../components/pages/ProjectOverview/FacilityEquipment"
import BusinessWP from "../../components/pages/ProjectOverview/BusinessWP"
import RepairQuality from "../../components/pages/ProjectOverview/RepairQuality"
import Training from "../../components/pages/ProjectOverview/Training"

export default function ProjectOverview() {
  const { state } = useLocation()

  useEffect(() => {
    if (state !== null) {
      scroller.scrollTo(`${state}`, { offset: -80 })
    } else {
      window.scroll(0, 5)
    }
  }, [state])

  return (
    <AppLayout secondaryMenu>
      <div className="ProjectOverview-container">
        <BodyShopOverview />
        <br />
        <BusinessAnalytics />
        <br />
        <FacilityEquipment />
        <br />
        <BusinessWP />
        <br />
        <RepairQuality />
        <br />
        <Training />
        <br />
      </div>
    </AppLayout>
  )
}
