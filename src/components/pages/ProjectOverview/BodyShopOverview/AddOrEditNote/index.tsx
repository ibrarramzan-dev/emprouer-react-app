import React, { useEffect, useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { Form, Input } from "antd"
import { v4 as uuidv4 } from "uuid"
import { DateTime } from "luxon"
import _ from "lodash"
import { convertToRaw } from "draft-js"
import draftToHtml from "draftjs-to-html"
import notificationIcon from "../../../../../shared/images/notificationIcon.svg"
import visibilityIcon from "../../../../../shared/images/visibilityIcon.svg"
import NotesContext from "../../../../../context/ProjectOverview/BodyShopOverview/notesContext"
import { User } from "../../../../../shared/types/Users"
import { NotesItem } from "../../../../../shared/types/ProjectOverview"
import useUsersAPI from "../../../../../services/useUsersAPI"
import MyRichTextEditor from "../../../../MyRichTextEditor"
import MyMultiSelect from "../../../../MyMultiSelect"

const { useForm } = Form

interface AddOrEditNoteProps {
  isDoneClicked: boolean
  isSaveClicked: boolean
  onSave: (noteValues: NotesItem) => void
  noteData?: NotesItem
}

function AddOrEditNote({
  isDoneClicked,
  isSaveClicked,
  onSave,
  noteData,
}: AddOrEditNoteProps) {
  const [projectUsers, setProjectUsers] = useState<User[]>([])
  const [notifiedUsers, setNotifiedUsers] = useState<User[]>([])
  const [visibleToUsers, setVisibleToUsers] = useState<User[]>([])

  const [form] = useForm()

  const { editorState } = useContext(NotesContext)

  const { getUsersByProjectId } = useUsersAPI()

  const params = useParams()
  const projectId = params.id

  useEffect(() => {}, [form])

  useEffect(() => {
    if (isDoneClicked) {
      form.submit()
    }
  }, [isDoneClicked])

  useEffect(() => {
    if (isSaveClicked) {
      const addNoteValues = {
        id: uuidv4(),
        ...form.getFieldsValue(),
        contentHtml: editorState
          ? draftToHtml(convertToRaw(editorState.getCurrentContent()))
          : "",
        lastEdit: DateTime.now().toFormat("MM-dd-yyyy"),
        editor: "Ibrar",
      }

      onSave(addNoteValues)

      form.resetFields()
    }
  }, [isSaveClicked])

  useEffect(() => {
    if (noteData) {
      form.setFieldsValue({
        title: noteData.title,
      })
    }
  }, [noteData])

  const gotUsersByProjectId = (users: User[]) => setProjectUsers(users)

  useEffect(() => {
    if (projectId) {
      getUsersByProjectId(projectId, gotUsersByProjectId)
    }
  }, [projectId])

  useEffect(() => {
    if (noteData && projectUsers.length > 0) {
      const notifiedUsersArr: User[] = []

      noteData?.notifiedUsers?.forEach((notifiedUsersItem) => {
        const notifiedUser = _.find(projectUsers, {
          userId: notifiedUsersItem.userId,
        })

        if (notifiedUser) {
          notifiedUsersArr.push(notifiedUser)
        }
      })

      if (notifiedUsersArr.length > 0) {
        setNotifiedUsers(notifiedUsersArr)
      }
    }
  }, [projectUsers])

  useEffect(() => {
    if (noteData && projectUsers.length > 0) {
      const visibleToUsersArr: User[] = []

      noteData?.visibleToUsers?.forEach((visibleToUsersItem) => {
        const visibleToUser = _.find(projectUsers, {
          userId: visibleToUsersItem.userId,
        })

        if (visibleToUser) {
          visibleToUsersArr.push(visibleToUser)
        }
      })

      if (visibleToUsersArr.length > 0) {
        setVisibleToUsers(visibleToUsersArr)
      }
    }
  }, [projectUsers])

  return (
    <div className="AddOrEditNote-container">
      <p className="AddOrEditNote-instruction-text">
        Please use the following editor to create a new note
      </p>

      <Form
        name="AddOrEditNote-form"
        form={form}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        className="AddOrEditNote-form"
      >
        <Form.Item
          name="title"
          label="Please enter a title for this note."
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: "Please enter a title!",
            },
          ]}
        >
          <Input placeholder="Name of the new note" />
        </Form.Item>

        <MyRichTextEditor html={noteData?.contentHtml} />

        <Form.Item
          name="notifiedUsers"
          label={
            <p>
              <img src={notificationIcon} alt="Notification" /> The following
              users were notified about this note.
            </p>
          }
          labelCol={{ span: 24 }}
          className="AddOrEditNote-form-item-notifiedPeople"
        >
          <MyMultiSelect
            form={form}
            nameFor="notifiedUsers"
            selectedUsers={notifiedUsers}
          />
        </Form.Item>

        <Form.Item
          name="visibleToUsers"
          label={
            <p>
              <img src={visibilityIcon} alt="Visibility" /> Who should be able
              to see this note?
            </p>
          }
          labelCol={{ span: 24 }}
          className="AddOrEditNote-form-item-notifiedPeople"
        >
          <MyMultiSelect
            form={form}
            nameFor="visibleToUsers"
            selectedUsers={visibleToUsers}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

AddOrEditNote.defaultProps = {
  noteData: {},
}

export default AddOrEditNote
