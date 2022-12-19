import _ from "lodash"
import { User, UserNotFoundResponse } from "../../shared/types/Users"
import users from "../../util/fakeData/users"

export default function useUsersAPI() {
  const getAllUsers = (Cb: (data: User[]) => void) => {
    Cb(users)
  }

  const getUserById = (
    userId: string,
    Cb: (data: User | UserNotFoundResponse) => void,
  ) => {
    const user = _.find(users, { userId })

    if (user) {
      Cb(user)
    } else {
      Cb({
        error: "xxx",
        message: "User not found",
      })
    }
  }

  const getUsersByProjectId = (
    projectId: string,
    Cb: (data: User[]) => void,
  ) => {
    const usersByProject = users.filter((user) =>
      user.projects.includes(projectId),
    )
    Cb(usersByProject)
  }

  return {
    getAllUsers,
    getUserById,
    getUsersByProjectId,
  }
}
