import React, { useState, useEffect } from "react"
import { usePagination } from "ahooks"
import { Pagination, Spin } from "antd"
import WeightsVersioningListItem from "./WeightsVersioningListItem"
import { VersionListItem } from "../../../../shared/types/Admin"
import useWeightsVersioningAPI from "../../../../services/Admin/useWeightsVersioningAPI"

interface WeightsVersioningListProps {
  versionTypeId: number
  searchQuery: string
}

export default function WeightsVersioningList({
  versionTypeId,
  searchQuery,
}: WeightsVersioningListProps) {
  const [list, setList] = useState<VersionListItem[] | undefined>([])
  const [allVersionsList, setAllVersionsList] = useState<VersionListItem[]>([])

  const { getVersionsList, getAllVersions } = useWeightsVersioningAPI()

  const { data, loading, pagination } = usePagination(
    async ({ current, pageSize }) => {
      const dataList = await getVersionsList({
        current,
        pageSize,
        versionTypeId,
      })

      setList(dataList.list)
      return dataList
    },
    {
      refreshDeps: [versionTypeId],
    },
  )

  async function fetchData() {
    const dataList = await getVersionsList({
      current: 1,
      pageSize: 10,
      versionTypeId,
    })
    setList(dataList.list)
  }

  useEffect(() => {
    fetchData()
  }, [versionTypeId])

  const gotAllVersionsCb = (allVersionsListData: VersionListItem[]) => {
    setAllVersionsList(allVersionsListData)
  }

  useEffect(() => {
    getAllVersions(versionTypeId, gotAllVersionsCb)
  }, [])

  useEffect(() => {
    if (searchQuery !== "") {
      const searchedList = allVersionsList.filter(
        (versionListItem: VersionListItem) =>
          versionListItem.version.includes(searchQuery),
      )
      setList(searchedList)
    } else {
      fetchData()
    }
  }, [searchQuery])

  return (
    <div className="WeightsVersioningList-container">
      {!loading ? (
        list?.map((item) => (
          <div key={item?.id}>
            <WeightsVersioningListItem data={item} />
          </div>
        ))
      ) : (
        <div className="WeightsVersioningList-loading-spin">
          <Spin />
        </div>
      )}

      {searchQuery === "" ? (
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={data?.total}
          onChange={pagination.onChange}
          onShowSizeChange={pagination.onChange}
          showQuickJumper
          showSizeChanger
          style={{ marginTop: 16, textAlign: "right" }}
        />
      ) : null}
    </div>
  )
}
