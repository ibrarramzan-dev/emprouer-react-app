import React from "react"
import { Row, Col } from "antd"
import Card from "../../../../Cards/Card"
import { ProductiveStaffRatio as ProductiveStaffRatioInterface } from "../../../../../shared/types/ProjectOverview"

interface ProductiveStaffRatioProps {
  analytics: ProductiveStaffRatioInterface
}

export default function ProductiveStaffRatio({
  analytics,
}: ProductiveStaffRatioProps) {
  const { data } = analytics
  const { adminStaff, totalAdminStaff, productionStaff, totalProductiveStaff } =
    data

  return (
    <div className="ProductiveStaffRatio-container">
      <Card customClass="BusinessAnalytics-cards">
        <div>
          <p className="BusinessAnalytics-cards-heading">
            Administration / Productive Staff Ratio
          </p>

          <Row>
            <Col xs={24} xl={12}>
              <p className="ProductiveStaffRatio-sub-heading">
                Administration Staff
              </p>

              <div className="BusinessAnalytics-list-container">
                <ul>
                  <li>
                    <p>Manager</p>
                    <p>{adminStaff.manager}</p>
                  </li>

                  <li>
                    <p>Office Manager</p>
                    <p>{adminStaff.officeManager}</p>
                  </li>

                  <li>
                    <p>Reception</p>
                    <p>{adminStaff.reception}</p>
                  </li>

                  <li>
                    <p>Estimator</p>
                    <p>{adminStaff.estimator}</p>
                  </li>

                  <li>
                    <p>Production Manager</p>
                    <p>{adminStaff.productionManager}</p>
                  </li>

                  <li>
                    <p>Parts Manager</p>
                    <p>{adminStaff.partsManager}</p>
                  </li>

                  <li>
                    <p>Detailer</p>
                    <p>{adminStaff.detailer}</p>
                  </li>
                </ul>
              </div>

              <div className="ProductiveStaffRatio-total-admin-staff-row">
                <p>Total Administration Staff</p>
                <p>{totalAdminStaff}</p>
              </div>
            </Col>

            <Col xs={24} xl={12}>
              <p className="ProductiveStaffRatio-sub-heading">
                Production Staff
              </p>

              <div className="BusinessAnalytics-list-container">
                <ul>
                  <li>
                    <p>Body Shop Foreman</p>
                    <p>{productionStaff.bodyShopForeman}</p>
                  </li>

                  <li>
                    <p>Remove + Refit Technician</p>
                    <p>{productionStaff.removePlusRefitTechnician}</p>
                  </li>

                  <li>
                    <p>Body Shop Technician</p>
                    <p>{productionStaff.bodyShopTechnician}</p>
                  </li>

                  <li>
                    <p>Body Shop Apprentice</p>
                    <p>{productionStaff.bodyShopApprentice}</p>
                  </li>

                  <li>
                    <p>Mechanic Technicians</p>
                    <p>{productionStaff.mechanicTechnicians}</p>
                  </li>

                  <li>
                    <p>Paint Shop Foreman (0.5)</p>
                    <p>{productionStaff.paintShopForeman}</p>
                  </li>

                  <li>
                    <p>Paint Preparation Technicians</p>
                    <p>{productionStaff.paintPreparationTechnicians}</p>
                  </li>

                  <li>
                    <p>Paint Shop Technician – Application</p>
                    <p>{productionStaff.paintShopTechnicianApplication}</p>
                  </li>

                  <li>
                    <p>Paint Shop Technician – Colour Match</p>
                    <p>{productionStaff.paintShopTechnicianColorMatch}</p>
                  </li>

                  <li>
                    <p>Paint Shop Apprentice (0.5)</p>
                    <p>{productionStaff.paintShopApprentice}</p>
                  </li>

                  <li>
                    <p>Polisher</p>
                    <p>{productionStaff.polisher}</p>
                  </li>
                </ul>
              </div>

              <div className="ProductiveStaffRatio-total-productive-staff-row">
                <p>Total Productive Staff</p>
                <p>{totalProductiveStaff}</p>
              </div>
            </Col>
          </Row>

          <p className="ProductiveStaffRatio-working-hours-text">
            Working Hours
          </p>

          <div className="ProductiveStaffRatio-working-hours-wrapper">
            <div>
              <p>M</p>
              <p>T</p>
              <p>W</p>
              <p>Th</p>
              <p>F</p>
              <p>S</p>
              <p>S</p>
            </div>

            <div>
              <p>8</p>
              <p>8</p>
              <p>4</p>
              <p>8</p>
              <p>8</p>
              <p>0</p>
              <p>0</p>
            </div>
          </div>

          <Row>
            <Col span={12}>
              <div className="BusinessAnalytics-cards-red-box">
                <p>Administration / Productive Staff Ratio</p>
                <p>1:52.0</p>
              </div>
            </Col>
            
            <Col span={12}>
              <div className="BusinessAnalytics-cards-green-box">
                <p>Administration / Productive Staff Ratio</p>
                <p>1:52.0</p>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  )
}
