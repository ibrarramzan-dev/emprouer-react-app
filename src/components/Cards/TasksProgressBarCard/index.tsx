import React from "react"
import { Progress } from "antd"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectFade } from "swiper"
import Card from "../Card"
import thumbnail1 from "./images/thumbnail1.jpg"
import thumbnail2 from "./images/thumbnail2.jpg"
import thumbnail3 from "./images/thumbnail3.jpg"

interface TasksProgressBarCardProps {
  checkId: number
  title: string
  tasksCompleted: number
  totalTasks: number
  percent: number
  onRemoveCheck?: (checkId: number) => void
}

export default function TasksProgressBarCard({
  checkId,
  title,
  tasksCompleted,
  totalTasks,
  percent,
  onRemoveCheck,
}: TasksProgressBarCardProps) {
  return (
    <Card customClass="TasksProgressBarCard-card">
      <div className="TasksProgressBarCard-container">
        <div className="TasksProgressBarCard-swiper-and-progress-wrapper">
          {title.substring(0, 5) === "Check" &&
          title.substring(6, 7) !== "1" &&
          onRemoveCheck ? (
            <div
              className="TasksProgressBarCard-delete-icon-wrapper"
              onClick={() => onRemoveCheck(checkId)}
              aria-hidden="true"
            >
              <i className="fa-solid fa-trash fa-sm" />
            </div>
          ) : null}

          <div className="TasksProgressBarCard-swiper-wrapper">
            <Swiper
              modules={[Navigation, EffectFade]}
              navigation
              speed={800}
              slidesPerView={1}
              loop
              className="TasksProgressBarCard-swiper"
            >
              <SwiperSlide className="TasksProgressBarCard-swiper-slide">
                <img src={thumbnail1} alt="thumbnail1" />
              </SwiperSlide>
              <SwiperSlide className="TasksProgressBarCard-swiper-slide">
                <img src={thumbnail2} alt="thumbnail2" />
              </SwiperSlide>
              <SwiperSlide className="TasksProgressBarCard-swiper-slide">
                <img src={thumbnail3} alt="thumbnail3" />
              </SwiperSlide>
            </Swiper>
          </div>

          <Progress
            percent={70.0}
            strokeColor="#1cc435"
            className="TasksProgressBarCard-progress"
            showInfo={false}
          />
        </div>

        <div className="TasksProgressBarCard-content-wrapper">
          <p className="TasksProgressBarCard-title-text">{title}</p>

          <p className="TasksProgressBarCard-tasks-completed-text">
            {tasksCompleted}/{totalTasks} Tasks completed
          </p>

          <p className="TasksProgressBarCard-percent-text">
            {percent.toFixed(1)}%
          </p>

          <p className="TasksProgressBarCard-show-tasks-text">SHOW TASKS</p>
        </div>
      </div>
    </Card>
  )
}

TasksProgressBarCard.defaultProps = {
  onRemoveCheck: () => {},
}
