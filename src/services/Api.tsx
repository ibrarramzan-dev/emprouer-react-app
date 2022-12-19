import axios from "axios"

export default axios.create({
  baseURL: process.env.REACT_APP_TeamworkAPI_BASE_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Basic ${process.env.REACT_APP_TeamworkAPI_Authorization}`,
  },
})
