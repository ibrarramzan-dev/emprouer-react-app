import React, { Fragment } from "react"
import { Row, Col } from "antd"
import notificationIcon from "../../../../../shared/images/notificationIcon.svg"
import visibilityIcon from "../../../../../shared/images/visibilityIcon.svg"
import { NotesItem } from "../../../../../shared/types/ProjectOverview"
import MyChip from "../../../../MyChip"

interface NoteViewProps {
  data: NotesItem
}

export default function NoteView({ data }: NoteViewProps) {
  const {
    title,
    contentHtml,
    notifiedUsers,
    visibleToUsers,
    lastEdit,
    editor,
  } = data

  return (
    <div className="NoteView-container">
      <p className="NoteView-note-title">{title}</p>
      <p className="NoteView-note-content">{contentHtml}</p>

      <Row gutter={9} className="NoteView-text-with-icon-row">
        <Col>
          <img src={notificationIcon} alt="Notification" />
        </Col>

        <Col>
          <p>The following users were notified about this note.</p>
        </Col>

        <Col span={24} className="NoteView-tagged-users-chip-wrapper">
          {notifiedUsers?.map(({ userId, name }) => (
            <Fragment key={userId}>
              <MyChip
                userId={userId}
                text={name}
                customClass="NoteView-tagged-users-chip"
              />
            </Fragment>
          ))}
        </Col>
      </Row>

      <Row gutter={9} className="NoteView-text-with-icon-row">
        <Col>
          <img src={visibilityIcon} alt="Visibility" />
        </Col>

        <Col>
          <p className="NoteView-visibility-text">
            The following users are able to see this note.
          </p>
        </Col>

        <Col span={24} className="NoteView-tagged-users-chip-wrapper">
          {visibleToUsers?.map(({ userId, name }) => (
            <Fragment key={userId}>
              <MyChip
                userId={userId}
                text={name}
                customClass="NoteView-tagged-users-chip"
              />
            </Fragment>
          ))}
        </Col>
      </Row>

      <Row className="NoteView-last-edit-and-editor-row">
        <Col xs={6}>
          <p>Last Edit:</p>
          <p className="NoteView-last-edit-and-editor-value">{lastEdit}</p>
        </Col>

        <Col xs={6}>
          <p>Editor:</p>
          <p className="NoteView-last-edit-and-editor-value">{editor}</p>
        </Col>
      </Row>
    </div>
  )
}
