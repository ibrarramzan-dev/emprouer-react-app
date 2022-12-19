import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Row, Col, Form, Input, Button, Switch } from "antd"
import { SaveOutlined } from "@ant-design/icons"
import { User, UserNotFoundResponse } from "../../shared/types/Users"
import useUsersAPI from "../../services/useUsersAPI"
import AppLayout from "../../components/AppLayout"
import Card from "../../components/Cards/Card"
import MultiSelectProjects from "../../components/MultiSelectProjects"

const { useForm } = Form

export default function UserEdit() {
  const [user, setUser] = useState<User>()
  const [form] = useForm()

  const { userId } = useParams()
  const { getUserById } = useUsersAPI()

  const gotUserById = (data: User | UserNotFoundResponse) => {
    if (!("error" in data)) {
      setUser(data)
    }
  }

  useEffect(() => {
    if (userId) {
      getUserById(userId, gotUserById)
    }
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinish = (values: any) => {}

  return (
    <AppLayout secondaryMenu={false}>
      <div className="UserEdit-container">
        {user ? (
          <p className="UserEdit-username">
            {user?.username}{" "}
            <span className="UserEdit-email">({user?.email})</span>
            <Card>
              <div className="UserEdit-section">
                <p className="UserEdit-section-resend-invitation-text">
                  Resend Invitation
                </p>

                <Form
                  name="Assessments-form"
                  form={form}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  autoComplete="off"
                >
                  <Row gutter={18}>
                    <Col xs={3}>Password</Col>

                    <Col xs={5}>
                      <Form.Item name="password">
                        <Input placeholder="Enter the new password" />
                      </Form.Item>
                    </Col>

                    <Col xs={5}>
                      <Form.Item name="confirmPassword">
                        <Input placeholder="Confirm your new password" />
                      </Form.Item>
                    </Col>

                    <Col xs={5}>
                      <Button type="primary" className="big-button">
                        Confirm
                      </Button>
                    </Col>
                  </Row>

                  <Row gutter={18}>
                    <Col xs={3}>Versioning</Col>

                    <Col xs={21}>
                      <Form.Item name="versioning">
                        <Switch
                          checkedChildren="Enabled"
                          unCheckedChildren="Disabled"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={18}>
                    <Col xs={3}>User Administration</Col>

                    <Col xs={21}>
                      <Form.Item name="userAdministration">
                        <Switch
                          checkedChildren="Enabled"
                          unCheckedChildren="Disabled"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={18}>
                    <Col xs={3}>Renumbering</Col>

                    <Col xs={21}>
                      <Form.Item name="renumbering">
                        <Switch
                          checkedChildren="Enabled"
                          unCheckedChildren="Disabled"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={18}>
                    <Col xs={3}>Change Projects</Col>

                    <Col xs={21}>
                      <Form.Item name="changeProjects">
                        <Switch
                          checkedChildren="Enabled"
                          unCheckedChildren="Disabled"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={18}>
                    <Col xs={3}>Notes</Col>

                    <Col xs={21}>
                      <Form.Item name="notes">
                        <Switch
                          checkedChildren="Enabled"
                          unCheckedChildren="Disabled"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={18}>
                    <Col xs={3}>Create Projects</Col>

                    <Col xs={21}>
                      <Form.Item name="createProjects">
                        <Switch
                          checkedChildren="Enabled"
                          unCheckedChildren="Disabled"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={18}>
                    <Col xs={3}>See Projects</Col>

                    <Col xs={21}>
                      <Form.Item name="seeProjects">
                        <MultiSelectProjects
                          form={form}
                          nameFor="seeProjects"
                          selectedProjects={[]}
                          key={1}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Row gutter={18}>
                    <Col xs={3}>Edit Projects</Col>

                    <Col xs={21}>
                      <Form.Item name="editProjects">
                        <MultiSelectProjects
                          form={form}
                          nameFor="editProjects"
                          selectedProjects={user?.projects}
                          key={1}
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <div className="UserEdit-form-save-btn-wrapper">
                    <Button type="primary" className="big-button">
                      <SaveOutlined style={{ fontSize: "22px" }} /> Save
                    </Button>
                  </div>
                </Form>
              </div>
            </Card>
          </p>
        ) : (
          <p>No User Found</p>
        )}
      </div>
    </AppLayout>
  )
}
