import React, { useEffect } from "react"
import AppLayout from "../../components/AppLayout"
import AllTags from "../../components/pages/TagsManagement/AllTags"

export default function Tags() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <AppLayout secondaryMenu={false}>
      <div>
        <h1>Tag Management</h1>
        <AllTags />
      </div>
    </AppLayout>
  )
}
