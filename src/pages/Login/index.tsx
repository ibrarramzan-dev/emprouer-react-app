import React, { useContext } from "react"
import { Row, Col, Button, Form, Input } from "antd"
import { toast } from "react-toastify"
import classNames from "classnames"
import { useIntl } from "react-intl"
import ThemeContext from "../../context/themeContext"
import translate from "../../i18nProvider/translate"
import LangDropdown from "../../components/LangDropdown"
import DarkModeToggle from "../../components/DarkModeToggle"

export default function Login() {
  const { isDarkMode } = useContext(ThemeContext)

  const intl = useIntl()

  const onFinish = () => {
    toast.success(
      intl.formatMessage({
        id: "login-form-submit-success",
      }),
    )
  }

  return (
    <div className="Login-container">
      <header>
        <LangDropdown />
        <DarkModeToggle />
      </header>

      <Row>
        <Col xs={2} md={5} lg={9} />
        <Col xs={20} md={14} lg={6}>
          <div className="Login-form-flex-container">
            <div className="Login-form-flex-item">
              <p
                className={classNames("Login-form-heading", {
                  "dark-mode-text-color": isDarkMode,
                })}
              >
                {translate("login-form-heading")}
              </p>

              <Form
                name="login"
                className="Login-form-container"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({
                        id: "login-form-email-required",
                      }),
                    },
                    {
                      type: "email",
                      message: intl.formatMessage({
                        id: "login-form-email-invalid",
                      }),
                    },
                  ]}
                >
                  <Input
                    placeholder="Email"
                    prefix={<i className="fa-solid fa-envelope" />}
                    className="big-round-input"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: intl.formatMessage({
                        id: "login-form-password-required",
                      }),
                    },
                  ]}
                  className="margin-zero"
                >
                  <Input.Password
                    placeholder={intl.formatMessage({
                      id: "login-form-password",
                    })}
                    prefix={<i className="fa-solid fa-lock" />}
                    className="big-round-input"
                  />
                </Form.Item>

                <Form.Item className="margin-zero">
                  <div className="Login-forgot-password">
                    <a className="Login-form-forgot" href="/">
                      {translate("login-form-forgot-password")}
                    </a>
                  </div>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }} className="margin-zero">
                  <Button
                    className="Login-btn"
                    type="primary"
                    htmlType="submit"
                  >
                    {translate("login-form-submit")}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
        <Col xs={2} md={5} lg={9} />
      </Row>
    </div>
  )
}
