import React, { useState, useEffect } from "react"
import { Row, Col, Drawer, Space, Button, Modal } from "antd"
import { FileTextOutlined } from "@ant-design/icons"
import { NotesItem } from "../../../../../shared/types/ProjectOverview"
import useBodyShopOverviewAPI from "../../../../../services/Overview/useBodyShopOverviewAPI"
import NoteView from "../NoteView"
import AddOrEditNote from "../AddOrEditNote"

export default function NotesPanelList() {
  const [notes, setNotes] = useState<NotesItem[]>([])
  const [viewNote, setViewNote] = useState<NotesItem>({
    id: "",
    title: "",
    contentHtml: "",
    notifiedUsers: [],
    visibleToUsers: [],
    lastEdit: "",
    editor: "",
  })
  const [isViewNoteDrawerOpen, setIsViewNoteDrawerOpen] =
    useState<boolean>(false)
  const [isAddNoteDrawerOpen, setIsAddNoteDrawerOpen] = useState<boolean>(false)
  const [addNoteDoneClicked, setAddNoteDoneClicked] = useState<boolean>(false)
  const [addNoteSaveClicked, setAddNoteSaveClicked] = useState<boolean>(false)
  const [isDeleteNoteModalOpen, setIsDeleteNoteModalOpen] =
    useState<boolean>(false)
  const [isEditNoteDrawerOpen, setIsEditNoteDrawerOpen] =
    useState<boolean>(false)
  const [editNoteSaveClicked, setEditNoteSaveClicked] = useState<boolean>(false)

  const { getNotes } = useBodyShopOverviewAPI()

  const gotNotesCb = (data: NotesItem[]) => setNotes(data)

  useEffect(() => {
    getNotes(gotNotesCb)
  }, [])

  const onAddNoteDoneClick = () => {
    setAddNoteDoneClicked(true)
  }

  const onAddNoteSaveClick = () => {
    setAddNoteDoneClicked(false)
    setAddNoteSaveClicked(true)
  }

  const onSaveNote = (noteValues: NotesItem) => {
    setAddNoteSaveClicked(false)
    setIsAddNoteDrawerOpen(false)

    setNotes([...notes, noteValues])
  }

  const onDeleteNote = (noteId: string) => {
    const newNotes = notes.filter((note) => note.id !== noteId)

    setNotes([...newNotes])
    setIsDeleteNoteModalOpen(false)
    setIsViewNoteDrawerOpen(false)
  }

  const onEditNoteBtnClick = () => {
    setIsAddNoteDrawerOpen(false)
    setIsEditNoteDrawerOpen(true)
  }

  const onEditNoteSaveClick = () => {
    setEditNoteSaveClicked(true)
  }

  const onEditNote = (data: NotesItem) => {
    const newNotes = notes.map((note: NotesItem) => {
      if (note.id === viewNote.id) {
        return data
      }

      return note
    })

    setNotes(newNotes)
    setIsViewNoteDrawerOpen(false)
    setIsEditNoteDrawerOpen(false)
  }

  return (
    <div className="NotesPanelList-container">
      <ul>
        {notes?.map((note: NotesItem) => {
          const { id, title, contentHtml, lastEdit, editor } = note

          return (
            <li
              onClick={() => {
                setIsViewNoteDrawerOpen(true)
                setViewNote(note)
              }}
              aria-hidden="true"
              key={id}
            >
              <Row className="NotesPanelList-item-row">
                <Col xs={12} className="NotesPanelList-item-main-info-wrapper">
                  <div>
                    <FileTextOutlined className="NotesPanelList-item-main-info-file-text-icon" />
                  </div>

                  <div className="NotesPanelList-item-main-info-text">
                    <p>{title}</p>
                    <p>{contentHtml}</p>
                  </div>
                </Col>

                <Col xs={6}>
                  <p>Last Edit:</p>
                  <p className="NotesPanelList-item-last-edit-and-editor-value">
                    {lastEdit}
                  </p>
                </Col>

                <Col xs={6}>
                  <p>Editor:</p>
                  <p className="NotesPanelList-item-last-edit-and-editor-value">
                    {editor}
                  </p>
                </Col>
              </Row>
            </li>
          )
        })}
      </ul>

      <div
        onClick={() => setIsAddNoteDrawerOpen(true)}
        className="NotesPanelList-add-note-row"
        aria-hidden="true"
      >
        <div className="NotesPanelList-add-note-icon-text-wrapper">
          <div>
            <i className="fa-solid fa-plus fa-lg" />
          </div>

          <p>Add Note</p>
        </div>
      </div>

      <Drawer
        title="View note"
        placement="right"
        width="485px"
        onClose={() => setIsViewNoteDrawerOpen(false)}
        visible={isViewNoteDrawerOpen}
        footer={
          <Space>
            <Button
              onClick={() => setIsDeleteNoteModalOpen(true)}
              className="NotesPanelList-view-note-drawer-delete-btn"
            >
              Delete Note
            </Button>

            <Button
              onClick={() => onEditNoteBtnClick()}
              className="NotesPanelList-view-note-drawer-edit-btn"
            >
              Edit Note
            </Button>

            <Button
              type="primary"
              onClick={() => setIsViewNoteDrawerOpen(false)}
            >
              Done
            </Button>
          </Space>
        }
        closeIcon={false}
        footerStyle={{ display: "flex", justifyContent: "end" }}
      >
        <NoteView data={viewNote} />
      </Drawer>

      <Drawer
        title="Add a new note"
        placement="right"
        width="485px"
        onClose={() => setIsAddNoteDrawerOpen(false)}
        visible={isAddNoteDrawerOpen}
        footer={
          <Space>
            <Button
              onClick={() => setIsAddNoteDrawerOpen(false)}
              className="NotesPanelList-view-note-drawer-edit-btn"
            >
              Cancel
            </Button>

            {!addNoteDoneClicked ? (
              <Button type="primary" onClick={() => onAddNoteDoneClick()}>
                Done
              </Button>
            ) : (
              <Button type="primary" onClick={() => onAddNoteSaveClick()}>
                Save
              </Button>
            )}
          </Space>
        }
        closeIcon={false}
        footerStyle={{ display: "flex", justifyContent: "end" }}
      >
        <AddOrEditNote
          isDoneClicked={addNoteDoneClicked}
          isSaveClicked={addNoteSaveClicked}
          onSave={onSaveNote}
        />
      </Drawer>

      <Drawer
        title="Edit selected note"
        placement="right"
        width="485px"
        onClose={() => setIsEditNoteDrawerOpen(false)}
        visible={isEditNoteDrawerOpen}
        footer={
          <Space>
            <Button
              onClick={() => setIsEditNoteDrawerOpen(false)}
              className="NotesPanelList-view-note-drawer-edit-btn"
            >
              Cancel
            </Button>

            {!addNoteDoneClicked ? (
              <Button type="primary" onClick={() => onAddNoteDoneClick()}>
                Done
              </Button>
            ) : (
              <Button type="primary" onClick={() => onEditNoteSaveClick()}>
                Save
              </Button>
            )}
          </Space>
        }
        closeIcon={false}
        footerStyle={{ display: "flex", justifyContent: "end" }}
      >
        <AddOrEditNote
          isDoneClicked={addNoteDoneClicked}
          isSaveClicked={editNoteSaveClicked}
          onSave={onEditNote}
          noteData={viewNote}
        />
      </Drawer>

      <Modal
        title={<p className="antd-modal-heading">Confirm Delete</p>}
        centered
        visible={isDeleteNoteModalOpen}
        okText="Delete"
        width={1000}
        closeIcon={
          <i
            onClick={() => setIsDeleteNoteModalOpen(false)}
            className="fa-solid fa-xmark fa-lg antd-modal-close-icon"
            aria-hidden="true"
          />
        }
        footer={
          <>
            <Button
              onClick={() => setIsDeleteNoteModalOpen(false)}
              className="cancel-button"
              shape="round"
              size="large"
            >
              Cancel
            </Button>

            <Button
              onClick={() => onDeleteNote(viewNote.id)}
              className="danger-button"
              shape="round"
              size="large"
            >
              Confirm
            </Button>
          </>
        }
      >
        Are you sure of delete?
      </Modal>
    </div>
  )
}
