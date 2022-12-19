import {
  VersionTypes as VersionsTypesInterface,
  VersionListItem,
} from "../../../shared/types/Admin"
import versionsTypes from "../../../util/fakeData/weightsVersioningTypes"
import weightsVersioningData from "../../../util/fakeData/weightsVersioning"

export default function useWeightsVersioningAPI() {
  const getVersionsTypes = (Cb: (data: VersionsTypesInterface[]) => void) =>
    Cb(versionsTypes)

  const versionList = (
    current: number,
    pageSize: number,
    versionTypeId: number,
  ) => {
    const startIndex = (current - 1) * pageSize + 1

    const listExtracted: VersionListItem[] = []

    const listData =
      weightsVersioningData[
        versionTypeId.toString() as keyof typeof weightsVersioningData
      ]

    for (let i = startIndex - 1; i < startIndex - 1 + pageSize; i += 1) {
      listExtracted.push(listData.list[i])
    }

    return { total: listData.list.length, list: listExtracted }
  }

  async function getVersionsList(params: {
    current: number
    pageSize: number
    versionTypeId: number
  }): Promise<{ total: number; list: VersionListItem[] }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          versionList(params.current, params.pageSize, params.versionTypeId),
        )
      }, 1000)
    })
  }

  const getAllVersions = (
    versionTypeId: number,
    gotAllVersionsCb: (data: VersionListItem[]) => void,
  ) => {
    const listData =
      weightsVersioningData[
        versionTypeId.toString() as keyof typeof weightsVersioningData
      ].list

    gotAllVersionsCb(listData)
  }

  return {
    getVersionsTypes,
    getVersionsList,
    getAllVersions,
  }
}
