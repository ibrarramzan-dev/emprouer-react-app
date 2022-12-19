import React, { useState, useEffect } from "react"
import { Row, Col } from "antd"
import vpnKeyIcon from "../images/vpn-key.png"
import BusinessWPCircleWidget from "../BusinessWPCircleWidget"
import SnakeArrowFrom from "./SnakeArrowFrom"
import SnakeArrowTo from "./SnakeArrowTo"
import SnakeAxis from "./SnakeAxis"

export default function Snake() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [width])

  return (
    <div className="Snake-container">
      <Row
        gutter={[32, 24]}
        className="Snake-snake-row"
        style={{ justifyContent: "space-between" }}
      >
        <Col
          xs={{ span: 5, order: 1 }}
          sm={{ span: 4, order: 1 }}
          lg={{ span: 4, order: 1 }}
          xxl={{ span: 1, order: 1 }}
        >
          <BusinessWPCircleWidget icon={vpnKeyIcon} />
        </Col>

        <Col
          xs={{ span: 12, order: 2 }}
          sm={{ span: 12, order: 2 }}
          lg={{ span: 4, order: 2 }}
          xxl={{ span: 3, order: 3 }}
        >
          <BusinessWPCircleWidget percent={73.5} label="Health and Safety" />

          <SnakeArrowFrom />
        </Col>

        <Col
          xs={{ span: 12, order: 4 }}
          sm={{ span: 8, order: 5 }}
          lg={{ span: 4, order: 3 }}
          xxl={{ span: 3, order: 4 }}
        >
          <BusinessWPCircleWidget percent={66.4} label="Management Process" />

          {width >= 992 && width < 1600 ? <SnakeArrowFrom /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 3 }}
          sm={{ span: 8, order: 4 }}
          lg={{ span: 4, order: 4 }}
          xxl={{ span: 3, order: 5 }}
        >
          <BusinessWPCircleWidget
            percent={0.0}
            label="Parts Receiving Department"
          />

          {width >= 325 && width < 576 ? <SnakeArrowTo /> : null}
          {width >= 576 && width < 992 ? <SnakeArrowTo /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowFrom /> : null}
          {width > 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 5 }}
          sm={{ span: 8, order: 3 }}
          lg={{ span: 5, order: 5 }}
          xxl={{ span: 3, order: 6 }}
        >
          <BusinessWPCircleWidget
            percent={0.0}
            label="Colour Checking + Matching"
          />

          {width >= 576 && width < 992 ? <SnakeArrowTo /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowFrom /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 10 }}
          sm={{ span: 8, order: 10 }}
          lg={{ span: 5, order: 6 }}
          xxl={{ span: 3, order: 14 }}
        >
          <BusinessWPCircleWidget
            percent={0.0}
            label="Preparation for Primer"
          />

          {width >= 325 && width < 576 ? <SnakeArrowFrom /> : null}
          {width >= 576 && width < 992 ? <SnakeArrowTo /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowTo /> : null}
          {width >= 1600 ? <SnakeArrowTo /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 9 }}
          sm={{ span: 8, order: 11 }}
          lg={{ span: 4, order: 7 }}
          xxl={{ span: 3, order: 15 }}
        >
          <BusinessWPCircleWidget
            percent={11.4}
            label="Applying Body Filling + Sanding"
          />

          {width >= 992 && width < 1600 ? <SnakeArrowTo /> : null}
          {width >= 1600 ? <SnakeArrowTo /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 7 }}
          sm={{ span: 8, order: 8 }}
          lg={{ span: 4, order: 8 }}
          xxl={{ span: 2, order: 16 }}
        >
          <BusinessWPCircleWidget
            percent={100.0}
            label="Heavy Body Repair - R + R Welded Panels"
          />

          {width >= 325 && width < 576 ? <SnakeArrowTo /> : null}
          {width >= 576 && width < 992 ? <SnakeArrowFrom /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowTo /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 8 }}
          sm={{ span: 8, order: 7 }}
          lg={{ span: 4, order: 9 }}
          xxl={{ span: 3, order: 8 }}
        >
          <BusinessWPCircleWidget percent={0.0} label="Light Dent Repair" />

          {width >= 576 && width < 992 ? <SnakeArrowFrom /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowTo /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 6 }}
          sm={{ span: 8, order: 6 }}
          lg={{ span: 4, order: 10 }}
          xxl={{ span: 3, order: 7 }}
        >
          <BusinessWPCircleWidget
            percent={0.0}
            label="Disassembly + Repair Identification"
          />

          {width >= 325 && width < 576 ? <SnakeArrowFrom /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 12 }}
          sm={{ span: 8, order: 9 }}
          lg={{ span: 5, order: 11 }}
          xxl={{ span: 3, order: 13 }}
        >
          <BusinessWPCircleWidget
            percent={0.0}
            label="Primer Filler Application"
          />

          {width >= 576 && width < 992 ? <SnakeArrowTo /> : null}
          {width >= 1600 ? <SnakeArrowTo /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 11 }}
          sm={{ span: 8, order: 12 }}
          lg={{ span: 4, order: 12 }}
          xxl={{ span: 3, order: 12 }}
        >
          <BusinessWPCircleWidget
            percent={100.0}
            label="Curing or Drying Primer Filler"
          />

          {width >= 325 && width < 576 ? <SnakeArrowTo /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowFrom /> : null}
          {width >= 1600 ? <SnakeArrowTo /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 13 }}
          sm={{ span: 8, order: 13 }}
          lg={{ span: 4, order: 13 }}
          xxl={{ span: 3, order: 11 }}
        >
          <BusinessWPCircleWidget percent={0.0} label="Sanding Primer Filler" />

          {width >= 576 && width < 992 ? <SnakeArrowFrom /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowFrom /> : null}
          {width >= 1600 ? <SnakeArrowTo /> : null}
        </Col>

        <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={{ span: 3, order: 2 }} />

        <Col
          xs={{ span: 12, order: 14 }}
          sm={{ span: 8, order: 14 }}
          lg={{ span: 4, order: 14 }}
          xxl={{ span: 3, order: 10 }}
        >
          <BusinessWPCircleWidget percent={0.0} label="Masking for Topcoat" />

          {width >= 325 && width < 576 ? <SnakeArrowFrom /> : null}
          {width >= 576 && width < 992 ? <SnakeArrowFrom /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowFrom /> : null}
          {width >= 1600 ? <SnakeArrowTo /> : null}
        </Col>

        <Col xxl={1} />

        <Col
          xs={{ span: 12, order: 16 }}
          sm={{ span: 8, order: 17 }}
          lg={{ span: 4, order: 15 }}
          xxl={{ span: 3, order: 9 }}
        >
          <BusinessWPCircleWidget percent={0.0} label="Topcoat Application" />

          {width >= 992 && width < 1600 ? <SnakeArrowFrom /> : null}
          {width >= 1600 ? <SnakeArrowTo /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 19 }}
          sm={{ span: 8, order: 20 }}
          lg={{ span: 5, order: 16 }}
          xxl={{ span: 3, order: 21 }}
        >
          <BusinessWPCircleWidget percent={0.0} label="Vehicle Handover" />

          {width >= 325 && width < 576 ? <SnakeArrowTo /> : null}
          {width >= 576 && width < 992 ? <SnakeArrowFrom /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowTo /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 20 }}
          sm={{ span: 8, order: 19 }}
          lg={{ span: 4, order: 17 }}
          xxl={{ span: 3, order: 20 }}
        >
          <BusinessWPCircleWidget percent={0.0} label="Detailing" />

          {width >= 576 && width < 992 ? <SnakeArrowFrom /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowTo /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 18 }}
          sm={{ span: 8, order: 18 }}
          lg={{ span: 4, order: 18 }}
          xxl={{ span: 3, order: 19 }}
        >
          <BusinessWPCircleWidget percent={0.0} label="Reassembly" />

          {width >= 325 && width < 576 ? <SnakeArrowFrom /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowTo /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 17 }}
          sm={{ span: 8, order: 15 }}
          lg={{ span: 4, order: 19 }}
          xxl={{ span: 3, order: 18 }}
        >
          <BusinessWPCircleWidget percent={0.0} label="Denibbing + Polishing" />

          {width >= 576 && width < 992 ? <SnakeArrowTo /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowTo /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 15 }}
          sm={{ span: 8, order: 16 }}
          lg={{ span: 4, order: 20 }}
          xxl={{ span: 3, order: 17 }}
        >
          <BusinessWPCircleWidget
            percent={0.0}
            label="Curing / Drying Topcoats"
          />

          {width >= 325 && width < 575 ? <SnakeArrowTo /> : null}
          {width >= 576 && width < 992 ? <SnakeArrowTo /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 21 }}
          sm={{ span: 8, order: 22 }}
          lg={{ span: 6, order: 21 }}
          xxl={{ span: 3, order: 22 }}
        >
          <BusinessWPCircleWidget
            percent={0.0}
            label="Invoicing + Customer Follow Up"
          />

          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>

        <Col
          xs={{ span: 12, order: 22 }}
          sm={{ span: 8, order: 21 }}
          lg={{ span: 6, order: 22 }}
          xxl={{ span: 3, order: 23 }}
        >
          <BusinessWPCircleWidget icon={vpnKeyIcon} />
          
          {width >= 325 && width < 576 ? <SnakeArrowFrom /> : null}
          {width >= 576 && width < 992 ? <SnakeArrowTo /> : null}
          {width >= 992 && width < 1600 ? <SnakeArrowFrom /> : null}
          {width >= 1600 ? <SnakeArrowFrom /> : null}
        </Col>
      </Row>

      <SnakeAxis width={width} />
    </div>
  )
}
