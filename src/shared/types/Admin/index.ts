export interface CurrencyRecord {
  id: number
  currencyName: string
  currencySign: string
  position: string | undefined
}

export interface AssessmentRecord {
  id: number
  assessmentName: string
  tags: string[]
}

export interface VersionTypes {
  id: number
  name: string
}

export interface VersionListItem {
  id: number
  version: string
}
