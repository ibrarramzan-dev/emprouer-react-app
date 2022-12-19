import React from "react"
import { Row, Col } from "antd"
import Card from "../../../../Cards/Card"
import { FacilityCapacity as FacilityCapacityInterface } from "../../../../../shared/types/ProjectOverview"

interface FacilityCapacityProps {
  analytics: FacilityCapacityInterface
}

export default function FacilityCapacity({ analytics }: FacilityCapacityProps) {
  const { data } = analytics

  return (
    <div className="FacilityCapacity-container">
      <Card customClass="BusinessAnalytics-cards">
        <div>
          <p className="BusinessAnalytics-cards-heading">Facility Capacity</p>

          <div className="BusinessAnalytics-list-container">
            <ul>
              <li>
                <p>Estimating Bays</p>
                <p>{data.estimatingBays}</p>
              </li>

              <li>
                <p>Mechanical Bays</p>
                <p>{data.mechanicalBays}</p>
              </li>

              <li>
                <p>Dedicated Remove + Refit Bays</p>
                <p>{data.dedicatedRemovePlusRefitBays}</p>
              </li>

              <li>
                <p>Light Repair Bays</p>
                <p>{data.lightRepairBays}</p>
              </li>

              <li>
                <p>Heavy Repair Bays</p>
                <p>{data.heavyRepairBays}</p>
              </li>

              <li>
                <p>Dedicated Aluminium Bays</p>
                <p>{data.dedicatedAluminiumBays}</p>
              </li>

              <li>
                <p>Standard Preparation Bays</p>
                <p>{data.standardPreparationBays}</p>
              </li>

              <li>
                <p>Semi-Downdraft Preparation Bays</p>
                <p>{data.semiDowndraftPreparationBays}</p>
              </li>

              <li>
                <p>Full-Downdraft Preparation Bays</p>
                <p>{data.fullDowndraftPreparationBays}</p>
              </li>

              <li>
                <p>Masking Bays</p>
                <p>{data.maskingBays}</p>
              </li>

              <li>
                <p>Combi Spray Booth Standard</p>
                <p>{data.combiSprayBoothStandard}</p>
              </li>

              <li>
                <p>Combi Spray Booth Infrared</p>
                <p>{data.combiSprayBoothInfrared}</p>
              </li>

              <li>
                <p>Spray Booth Separate Drying</p>
                <p>{data.sprayBoothSeparateDrying}</p>
              </li>

              <li>
                <p>Polishing Bays</p>
                <p>{data.polishingBays}</p>
              </li>

              <li>
                <p>Wash Bays</p>
                <p>{data.washBays}</p>
              </li>
            </ul>
          </div>

          <div className="FacilityCapacity-current-avg-job-value-row">
            <p>Current Average Job Value in</p>
            <p>1000 AED</p>
          </div>

          <Row>
            <Col span={12}>
              <div className="BusinessAnalytics-cards-red-box FacilityCapacity-card-red-and-green-boxes">
                <p>Current Average Weekly Jobs</p>
                <p>12</p>
              </div>
            </Col>

            <Col span={12}>
              <div className="BusinessAnalytics-cards-green-box FacilityCapacity-card-red-and-green-boxes">
                <p>Projected Weekly Jobs</p>
                <p>49</p>
              </div>
            </Col>

            <Col span={24}>
              <div className="BusinessAnalytics-cards-gray-box">
                <p>Weekly Revenue Growth Opportunity</p>
                <p>37000.00 AED</p>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  )
}
