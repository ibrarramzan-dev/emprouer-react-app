import React, { useState } from "react"
import { Avatar, message, Upload } from "antd"
import type { UploadChangeParam } from "antd/es/upload"
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface"

interface ChangeProfilePictureProps {
  onPictureChange: (val: boolean) => void
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

export default function ChangeProfilePicture({
  onPictureChange,
}: ChangeProfilePictureProps) {
  const [imageUrl, setImageUrl] = useState<string>()
  const [uploadedImage, setUploadedImage] = useState<string>(
    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
  )

  const beforeUpload = (file: RcFile) => {
    getBase64(file, (url) => {
      setUploadedImage(url)
    })

    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!")
    }

    const isLt2M = file.size / 1024 / 1024 < 2

    if (!isLt2M) {
      message.error("Image must smaller than 2MB!")
    }

    onPictureChange(true)

    return isJpgOrPng && isLt2M
  }

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    if (info.file.status === "uploading") {
      return
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setImageUrl(url)
      })
    }
  }

  return (
    <div className="ChangeProfilePicture-container">
      <p className="ChangeProfilePicture-heading">Project Picture</p>

      <Avatar src={uploadedImage} className="ChangeProfilePicture-avatar" />

      <div className="ChangeProfilePicture-change-pic-btn">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader ChangeProfilePicture-upload-btn"
          showUploadList={false}
          action="/"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={uploadedImage} alt="avatar" style={{ width: "100%" }} />
          ) : (
            <div>Change Photo</div>
          )}
        </Upload>
      </div>
    </div>
  )
}
