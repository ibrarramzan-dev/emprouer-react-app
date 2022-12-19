export interface TagItem {
  color: string
  dateCreated: string
  dateUpdated: string
  id: string
  name: string
  projectId: string
  status?: boolean
}

export interface TagDbRecord {
  key: string | undefined
  name: string | undefined
  status: boolean | undefined
}
