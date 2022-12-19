export interface User {
  userId: string
  username: string
  email: string
  dob: string
  projects: string[]
  isActive: boolean
}

export interface UserNotFoundResponse {
  error: string
  message: string
}
