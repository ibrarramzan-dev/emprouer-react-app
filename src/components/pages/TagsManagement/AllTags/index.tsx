import React, { useEffect, useState } from "react"
import { Card, Col, Row, Button } from "antd"
import { SyncOutlined } from "@ant-design/icons"
import classNames from "classnames"
import useTagManagementAPI from "../../../../services/TagManagement"
import { TagItem, TagDbRecord } from "../../../../shared/types/TagManagement"
import Chip from "../../../MyChip"
import ChipHeader from "./ChipHeader"

interface NewTag {
  color: string
  dateCreated: string
  dateUpdated: string
  id: string
  name: string
  projectId: string
  status: boolean
}

export default function AllTags() {
  const [tags, setTags] = useState<TagItem[]>([])
  const [tagsFromDb, setTagsFromDb] = useState<TagDbRecord[]>([])
  const [tagsModified, setTagsModified] = useState<TagDbRecord[]>([])
  const [unsynchronized, setUnsynchronized] = useState<boolean>(false)
  const [synching, setSynching] = useState<boolean>(false)

  const { getAll, getAllFromDb } = useTagManagementAPI()

  const gotAll = (data: { [key: string]: any }) => {
    const newTags = data.tags.map((newTag: NewTag) => ({
      ...newTag,
      status: true,
    }))

    setTags(newTags)
  }

  useEffect(() => {
    getAll(gotAll)
  }, [])

  const gotAllFromDb = (data: TagDbRecord[]) => {
    setTagsFromDb(data)
  }

  useEffect(() => {
    getAllFromDb(gotAllFromDb)
  }, [])

  useEffect(() => {
    if (tags.length !== tagsFromDb.length) {
      setUnsynchronized(true)
    }
  }, [tags, tagsFromDb])

  const onTagClick = (tagRecord: TagDbRecord) => {
    const tagExist = tagsModified.find((data) => data.key === tagRecord.key)

    if (tagExist) {
      const updatedTagsModified = tagsModified.map((data) => {
        if (data.key === tagRecord.key) {
          return { ...data, status: !data.status }
        }

        return data
      })
      const updatedTags = tags.map((data) => {
        if (data.id === tagRecord.key) {
          return { ...data, status: !data.status }
        }

        return data
      })

      setTagsModified(updatedTagsModified)
      setTags(updatedTags)
    } else {
      setTagsModified([...tagsModified, tagRecord])

      const updatedTags = tags.map((data) => {
        if (data.id === tagRecord.key) {
          return { ...data, status: !data.status }
        }

        return data
      })

      setTags(updatedTags)
    }
  }

  const onSyncClick = () => {
    setSynching(true)

    // ******** code

    setTimeout(() => {
      setSynching(false)
      setUnsynchronized(false)
    }, 2500)
  }

  return (
    <div>
      <Card
        title="All Tags"
        extra={
          <div className="AllTags-card-heading-pills">
            <div>
              <ChipHeader
                type={`${!unsynchronized ? "sync" : "unsync"}`}
                isActive={!unsynchronized}
              />
            </div>

            {unsynchronized ? (
              <Button
                danger
                className="AllTags-card-heading-pill-sync-btn"
                onClick={onSyncClick}
              >
                <div
                  className={classNames({
                    "AllTags-card-heading-pill-sync-btn-icon": synching,
                  })}
                >
                  <SyncOutlined />
                </div>
              </Button>
            ) : null}
          </div>
        }
      >
        <Row gutter={[9, 16]}>
          {tags.map((tag) => (
            <Col key={tag.id}>
              <div>
                <Chip
                  data={tag}
                  text={tag.name}
                  customClass="AllTags-list-pills"
                  onTagClick={onTagClick}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  )
}
