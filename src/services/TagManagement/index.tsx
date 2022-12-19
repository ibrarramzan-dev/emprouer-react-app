import http from "../Api"
import { TagDbRecord } from "../../shared/types/TagManagement"
import tagsFromDb from "../../util/tagsFromDb.json"

const useTagManagementAPI = () => {
  const getAll = (Cb: (data: { [key: string]: any }) => void) => {
    http.get("/tags.json").then((res) => {
      Cb(res.data)
    })
  }

  const getAllFromDb = (Cb: (data: TagDbRecord[]) => void) => Cb(tagsFromDb)

  return {
    getAll,
    getAllFromDb,
  }
}

export default useTagManagementAPI
