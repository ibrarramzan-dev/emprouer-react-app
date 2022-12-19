import React from "react"
import SnakeHideCurve from "./SnakeHideCurve"

interface SnakeAxisProps {
  width: number
}

export default function SnakeAxis({ width }: SnakeAxisProps) {
  return (
    <div className="SnakeAxis-container">
      <div className="SnakeAxis SnakeAxis-clockwise">
        <SnakeHideCurve />
      </div>
      <div className="SnakeAxis SnakeAxis-anti-clockwise">
        <SnakeHideCurve />
      </div>
      {width >= 992 && width < 1600 ? (
        <>
          <div className="SnakeAxis SnakeAxis-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-anti-clockwise">
            <SnakeHideCurve />
          </div>
        </>
      ) : null}
      {width >= 576 && width < 992 ? (
        <>
          <div className="SnakeAxis SnakeAxis-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-anti-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-anti-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-clockwise">
            <SnakeHideCurve />
          </div>
        </>
      ) : null}
      {width >= 325 && width < 576 ? (
        <>
          <div className="SnakeAxis SnakeAxis-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-anti-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-anti-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-anti-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-clockwise">
            <SnakeHideCurve />
          </div>
          <div className="SnakeAxis SnakeAxis-anti-clockwise">
            <SnakeHideCurve />
          </div>
        </>
      ) : null}
    </div>
  )
}
