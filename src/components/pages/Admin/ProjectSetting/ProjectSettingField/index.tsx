import React from "react"
import { Form, Row, Col, Input } from "antd"

interface ProjectSettingFieldProps {
  label: string
  name: string
  onInputFieldChange: (name: string, val: string) => void
}

export default function ProjectSettingField({
  label,
  name,
  onInputFieldChange,
}: ProjectSettingFieldProps) {
  const [form] = Form.useForm()

  const onInputChange = (e: { [key: string]: any }) => {
    const { value } = e.target

    onInputFieldChange(name, value)
  }

  // ----------- values argument will be used later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinish = (values: { [key: string]: any }) => {}

  return (
    <div className="ProjectSettingField-container">
      <Row>
        <Col xs={24} sm={18} md={14} lg={11}>
          <Form
            name="Assessments-form"
            form={form}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item label={label} labelCol={{ span: 24 }}>
              <Input onChange={onInputChange} className="big-input" />
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
