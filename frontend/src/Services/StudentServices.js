import axios from "../axios";

export const getHomeAPI = (headers) => {
    return axios.get('/student/home', headers)
  }