import React, { useState } from "react"
import { Card, Form, Input, Button, Table, Tag, Select } from "antd"
import type { ColumnsType } from "antd/es/table"
import {
  CloseOutlined,
  PlusCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons"
import { AssessmentRecord } from "../../../../shared/types/Admin"

const { Option } = Select

const options = [
  {
    key: "text1",
    text: "Text 1",
  },
  {
    key: "text2",
    text: "Text 2",
  },
  {
    key: "text3",
    text: "Text 3",
  },
  {
    key: "text4",
    text: "Text 4",
  },
  {
    key: "text5",
    text: "Text 5",
  },
]

interface EditRecord {
  state: boolean
  id: number
}

export default function Assessments() {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [records, setRecords] = useState<AssessmentRecord[]>([])
  const [editRecord, setEditRecord] = useState<EditRecord>({
    state: false,
    id: 0,
  })

  const [form] = Form.useForm()

  const onFinish = (values: AssessmentRecord) => {
    setShowForm(false)

    if (editRecord.state) {
      const recordToEdit = form.getFieldsValue()

      const assessmentsRecords = records

      assessmentsRecords.forEach((record: AssessmentRecord, index: number) => {
        if (record.id === recordToEdit.id) {
          assessmentsRecords[index] = recordToEdit
        }
      })

      setRecords([...assessmentsRecords])
      setEditRecord({ ...editRecord, state: false })
    } else {
      setRecords([...records, { ...values, id: records.length + 1 }])
    }
    form.resetFields()
  }

  const onCloseForm = () => {
    setShowForm(false)
    setEditRecord({ ...editRecord, state: false })

    form.resetFields()
  }

  const onEditClick = (record: AssessmentRecord) => {
    setShowForm(true)
    setEditRecord({ state: true, id: record.id })

    form.setFieldsValue(record)
  }

  const deleteRecord = (id: Number) => {
    const newRecords = records.filter(
      (record: AssessmentRecord) => record.id !== id,
    )

    if (id === editRecord.id) {
      setShowForm(false)
      setEditRecord({ state: false, id: 0 })

      form.resetFields()
    }

    setRecords(newRecords)
  }

  const columns: ColumnsType<AssessmentRecord> = [
    {
      title: "Assessment Name",
      dataIndex: "assessmentName",
      key: "assessmentName",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "assessmentTags",
      render: (_, record) => record.tags.join(", "),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="Assessments-table-actions-container">
          <Tag
            color="blue"
            className="Assessments-table-action-tag"
            onClick={() => onEditClick(record)}
          >
            <EditOutlined className="icon-size" title="edit" />
          </Tag>

          <Tag
            color="red"
            className="Assessments-table-action-tag"
            onClick={() => deleteRecord(record.id)}
          >
            <DeleteOutlined className="icon-size" title="remove" />
          </Tag>
        </div>
      ),
    },
  ]

  return (
    <div className="Assessments-container">
      <Card
        title="Assessments"
        extra={
          !showForm ? (
            <PlusCircleFilled
              className="Assessments-add-icon dark-mode-text-color"
              title="new assessment"
              onClick={() => setShowForm(true)}
            />
          ) : null
        }
        className="Assessments-card"
      >
        {showForm ? (
          <Form
            name="Assessments-form"
            form={form}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="Assessments-form-close-icon" title="close">
              <CloseOutlined onClick={() => onCloseForm()} />
            </div>

            <Form.Item
              name="assessmentName"
              label="Assessment Name"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input assessment name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="id" className="Assessments-form-id-input">
              <Input />
            </Form.Item>

            <Form.Item
              name="tags"
              label="Tags for Assessments"
              labelCol={{ span: 24 }}
            >
              <Select
                mode="multiple"
                placeholder="select tags"
                className="Assessments-multi-select"
              >
                {options.map(({ key, text }) => (
                  <Option key={key} value={text}>
                    {text}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <div className="Assessments-form-submit-btn-container">
                {!editRecord.state ? (
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                ) : (
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                )}
              </div>
            </Form.Item>
          </Form>
        ) : null}

        <Table
          columns={columns}
          dataSource={records}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 400 }}
          rowKey="id"
        />
      </Card>
    </div>
  )
}
