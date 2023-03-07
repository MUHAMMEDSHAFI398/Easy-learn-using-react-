import axios from "../axios";

export const getHomeAPI = (headers) => {
  return axios.get('/student/home', headers)
}

export const getMarkDetailsAPI = (headers) => {
  return axios.get('/student/mark-data', headers)
}

export const attenDanceDetailsAPI = (headers) => {
  return axios.get('/student/attendance-data', headers)
}

