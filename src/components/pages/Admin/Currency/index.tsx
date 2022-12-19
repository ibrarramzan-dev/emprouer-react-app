import React, { useState } from "react"
import { Card, Form, Input, Button, Radio, Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"
import {
  CloseOutlined,
  PlusCircleFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons"
import { CurrencyRecord } from "../../../../shared/types/Admin"

interface EditRecord {
  state: boolean
  id: number
}

export default function Currency() {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [records, setRecords] = useState<CurrencyRecord[]>([])
  const [editRecord, setEditRecord] = useState<EditRecord>({
    state: false,
    id: 0,
  })

  const [form] = Form.useForm()

  const onFinish = (values: CurrencyRecord) => {
    setShowForm(false)

    if (editRecord.state) {
      const recordToEdit = form.getFieldsValue()

      const currencyRecords = records

      currencyRecords.forEach((record: CurrencyRecord, index: number) => {
        if (record.id === recordToEdit.id) {
          currencyRecords[index] = recordToEdit
        }
      })

      setRecords([...currencyRecords])
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

  const onEditClick = (record: CurrencyRecord) => {
    setShowForm(true)
    setEditRecord({ state: true, id: record.id })

    form.setFieldsValue(record)
  }

  const deleteRecord = (id: Number) => {
    const newRecords = records.filter(
      (record: CurrencyRecord) => record.id !== id,
    )

    if (id === editRecord.id) {
      setShowForm(false)
      setEditRecord({ state: false, id: 0 })

      form.resetFields()
    }

    setRecords(newRecords)
  }

  const columns: ColumnsType<CurrencyRecord> = [
    {
      title: "Currency Name",
      dataIndex: "currencyName",
      key: "currencyName",
    },
    {
      title: "Currency Sign",
      dataIndex: "currencySign",
      key: "currencySign",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
      render: (position) => (position === undefined ? "N/A" : position),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="Currency-table-actions-container">
          <Tag
            color="blue"
            className="Currency-table-action-tag"
            onClick={() => onEditClick(record)}
          >
            <EditOutlined className="icon-size" title="edit" />
          </Tag>

          <Tag
            color="red"
            className="Currency-table-action-tag"
            onClick={() => deleteRecord(record.id)}
          >
            <DeleteOutlined className="icon-size" title="remove" />
          </Tag>
        </div>
      ),
    },
  ]

  return (
    <div className="Currency-container">
      <Card
        title="Currency"
        extra={
          !showForm ? (
            <PlusCircleFilled
              className="Currency-add-icon dark-mode-text-color"
              title="new currency"
              onClick={() => setShowForm(true)}
            />
          ) : null
        }
        className="Currency-card"
      >
        {showForm ? (
          <Form
            name="Currency-form"
            form={form}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="Currency-form-close-icon" title="close">
              <CloseOutlined onClick={() => onCloseForm()} />
            </div>

            <Form.Item name="id" className="Currency-form-id-input">
              <Input />
            </Form.Item>

            <Form.Item
              name="currencyName"
              label="Currency Name"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input currency name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="currencySign"
              label="Sign"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input currency sign!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="position" label="Position">
              <Radio.Group>
                <Radio value="Left">Left</Radio>
                <Radio value="Right">Right</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
              <div className="Currency-form-submit-btn-container">
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
