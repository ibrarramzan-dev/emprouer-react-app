import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Table, Popconfirm, Button, Modal, Form, Input } from "antd"
import type { ColumnsType } from "antd/es/table"
import { User } from "../../shared/types/Users"
import useUsersAPI from "../../services/useUsersAPI"
import AppLayout from "../../components/AppLayout"
import ThemeSearchBar from "../../components/ThemeSearchBar"
import AddFixedButton from "../../components/AddFixedButton"

interface AllUsersColumnsInterface {
  username: string
  email: string
  [key: string]: any
}

export default function Users() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [allUsers, setAllUsers] = useState<User[]>([])
  const [searchList, setSearchList] = useState<User[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { getAllUsers } = useUsersAPI()

  useEffect(() => window.scroll(0, 0), [])

  const gotAllUsers = (data: User[]) => setAllUsers(data)

  useEffect(() => getAllUsers(gotAllUsers), [])

  useEffect(() => {
    if (searchQuery === "") {
      setSearchList([])
    } else {
      const filteredUsers = allUsers.filter((user) => {
        const { username, email } = user

        if (username.toLowerCase().includes(searchQuery.toLowerCase())) {
          return true
        }

        if (email.toLowerCase().includes(searchQuery.toLowerCase())) {
          return true
        }

        return false
      })

      if (filteredUsers.length === 0) {
        setSearchList([])
      } else {
        setSearchList(filteredUsers)
      }
    }
  }, [searchQuery])

  const onSearchChange = (val: string) => {
    setSearchQuery(val)
  }

  const onUserDelete = (id: string) => {
    const newRecords = allUsers.filter((user: User) => user.userId !== id)

    setAllUsers(newRecords)
  }

  const onAddNewUserClick = () => setIsModalOpen(true)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinish = (values: { [key: string]: any }) => {}

  const columns: ColumnsType<AllUsersColumnsInterface> = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_: any, userRecord: any) =>
        allUsers.length >= 1 ? (
          <div className="Users-table-operations-wrapper">
            <Link to={`/user/${userRecord.userId}`}>
              <Button type="primary">Edit</Button>
            </Link>

            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => onUserDelete(userRecord.userId)}
            >
              <Button
                type="default"
                danger
                style={{ backgroundColor: "white", color: "red" }}
                className="Popconfirm-delete-wrapper-btn"
              >
                Delete
              </Button>
            </Popconfirm>
          </div>
        ) : null,
    },
  ]

  return (
    <AppLayout secondaryMenu={false}>
      <div className="Users-container">
        <p className="page-section-heading">All Users</p>

        <ThemeSearchBar
          placeholder="Search for user..."
          onSearchChange={onSearchChange}
          key={1}
        />

        <Table
          columns={columns}
          dataSource={
            searchQuery !== "" || searchList.length > 0 ? searchList : allUsers
          }
          pagination={{ pageSize: 5 }}
          scroll={{ x: 400 }}
          rowKey="id"
          className="Users-table"
        />

        <Modal
          title={<p className="antd-modal-heading">Add New User</p>}
          centered
          visible={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          width={1000}
          footer={null}
          closeIcon={
            <i
              onClick={() => setIsModalOpen(false)}
              className="fa-solid fa-xmark fa-lg antd-modal-close-icon"
              aria-hidden="true"
            />
          }
          afterClose={() => {}} // use if needed for after modal close functionality OR else delete
        >
          <Form
            name="new-user-form"
            className="Users-new-user-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              label="Name"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input placeholder="Enter Name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input type="email" placeholder="Enter email" />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                type="primary"
                htmlType="submit"
                className="Users-new-user-form-submit-btn"
              >
                Add User
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <AddFixedButton onClick={onAddNewUserClick} />
      </div>
    </AppLayout>
  )
}
