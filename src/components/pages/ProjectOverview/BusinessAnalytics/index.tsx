import React from "react"
import { Row, Col } from "antd"
import ProductiveStaffRatio from "./ProductiveStaffRatio"
import FacilityCapacity from "./FacilityCapacity"
import analytics from "../../../../util/fakeData/businessAnalytics"

export default function BusinessAnalytics() {
  return (
    <div
      className="BusinessAnalytics-container"
      id="BusinessAnalytics-scroll-id"
    >
      <p className="page-section-heading">Business Analytics</p>

      <Row gutter={16} className="BusinessAnalytics-row">
        <Col className="BusinessAnalytics-row-col" span={12}>
          <ProductiveStaffRatio analytics={analytics.productiveStaffRatio} />
        </Col>

        <Col className="BusinessAnalytics-row-col" span={12}>
          <FacilityCapacity analytics={analytics.facilityCapacity} />
        </Col>
      </Row>
    </div>
  )
}
